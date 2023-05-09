# CodeScanning

## Overview

Retrieve code scanning alerts from a repository.

### Available Operations

* [CodeScanningDeleteAnalysis](#codescanningdeleteanalysis) - Delete a code scanning analysis from a repository
* [CodeScanningGetAlert](#codescanninggetalert) - Get a code scanning alert
* [CodeScanningGetAnalysis](#codescanninggetanalysis) - Get a code scanning analysis for a repository
* [CodeScanningGetSarif](#codescanninggetsarif) - Get information about a SARIF upload
* [CodeScanningListAlertInstances](#codescanninglistalertinstances) - List instances of a code scanning alert
* [CodeScanningListAlertsForRepo](#codescanninglistalertsforrepo) - List code scanning alerts for a repository
* [CodeScanningListRecentAnalyses](#codescanninglistrecentanalyses) - List code scanning analyses for a repository
* [CodeScanningUpdateAlert](#codescanningupdatealert) - Update a code scanning alert
* [CodeScanningUploadSarif](#codescanninguploadsarif) - Upload an analysis as SARIF data

## CodeScanningDeleteAnalysis

Deletes a specified code scanning analysis from a repository. For
private repositories, you must use an access token with the `repo` scope. For public repositories,
you must use an access token with `public_repo` scope.
GitHub Apps must have the `security_events` write permission to use this endpoint.

You can delete one analysis at a time.
To delete a series of analyses, start with the most recent analysis and work backwards.
Conceptually, the process is similar to the undo function in a text editor.

When you list the analyses for a repository,
one or more will be identified as deletable in the response:

```
"deletable": true
```

An analysis is deletable when it's the most recent in a set of analyses.
Typically, a repository will have multiple sets of analyses
for each enabled code scanning tool,
where a set is determined by a unique combination of analysis values:

* `ref`
* `tool`
* `category`

If you attempt to delete an analysis that is not the most recent in a set,
you'll get a 400 response with the message:

```
Analysis specified is not deletable.
```

The response from a successful `DELETE` operation provides you with
two alternative URLs for deleting the next analysis in the set:
`next_analysis_url` and `confirm_delete_url`.
Use the `next_analysis_url` URL if you want to avoid accidentally deleting the final analysis
in a set. This is a useful option if you want to preserve at least one analysis
for the specified tool in your repository.
Use the `confirm_delete_url` URL if you are content to remove all analyses for a tool.
When you delete the last analysis in a set, the value of `next_analysis_url` and `confirm_delete_url`
in the 200 response is `null`.

As an example of the deletion process,
let's imagine that you added a workflow that configured a particular code scanning tool
to analyze the code in a repository. This tool has added 15 analyses:
10 on the default branch, and another 5 on a topic branch.
You therefore have two separate sets of analyses for this tool.
You've now decided that you want to remove all of the analyses for the tool.
To do this you must make 15 separate deletion requests.
To start, you must find an analysis that's identified as deletable.
Each set of analyses always has one that's identified as deletable.
Having found the deletable analysis for one of the two sets,
delete this analysis and then continue deleting the next analysis in the set until they're all deleted.
Then repeat the process for the second set.
The procedure therefore consists of a nested loop:

**Outer loop**:
* List the analyses for the repository, filtered by tool.
* Parse this list to find a deletable analysis. If found:

  **Inner loop**:
  * Delete the identified analysis.
  * Parse the response for the value of `confirm_delete_url` and, if found, use this in the next iteration.

The above process assumes that you want to remove all trace of the tool's analyses from the GitHub user interface, for the specified repository, and it therefore uses the `confirm_delete_url` value. Alternatively, you could use the `next_analysis_url` value, which would leave the last analysis in each set undeleted to avoid removing a tool's analysis entirely.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CodeScanning.CodeScanningDeleteAnalysis(ctx, operations.CodeScanningDeleteAnalysisRequest{
        AnalysisID: 262118,
        ConfirmDelete: sdk.String("esse"),
        Owner: "esse",
        Repo: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodeScanningAnalysisDeletion != nil {
        // handle response
    }
}
```

## CodeScanningGetAlert

Gets a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint with private repos, the `public_repo` scope also grants permission to read security events on public repos only. GitHub Apps must have the `security_events` read permission to use this endpoint.

**Deprecation notice**:
The instances field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The same information can now be retrieved via a GET request to the URL specified by `instances_url`.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/code-scanning#get-a-code-scanning-alert>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CodeScanning.CodeScanningGetAlert(ctx, operations.CodeScanningGetAlertRequest{
        AlertNumber: 683282,
        Owner: "reprehenderit",
        Repo: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodeScanningAlert != nil {
        // handle response
    }
}
```

## CodeScanningGetAnalysis

Gets a specified code scanning analysis for a repository.
You must use an access token with the `security_events` scope to use this endpoint with private repos,
the `public_repo` scope also grants permission to read security events on public repos only.
GitHub Apps must have the `security_events` read permission to use this endpoint.

The default JSON response contains fields that describe the analysis.
This includes the Git reference and commit SHA to which the analysis relates,
the datetime of the analysis, the name of the code scanning tool,
and the number of alerts.

The `rules_count` field in the default response give the number of rules
that were run in the analysis.
For very old analyses this data is not available,
and `0` is returned in this field.

If you use the Accept header `application/sarif+json`,
the response contains the analysis data that was uploaded.
This is formatted as
[SARIF version 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CodeScanning.CodeScanningGetAnalysis(ctx, operations.CodeScanningGetAnalysisRequest{
        AnalysisID: 852635,
        Owner: "ut",
        Repo: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodeScanningAnalysis != nil {
        // handle response
    }
}
```

## CodeScanningGetSarif

Gets information about a SARIF upload, including the status and the URL of the analysis that was uploaded so that you can retrieve details of the analysis. For more information, see "[Get a code scanning analysis for a repository](/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository)." You must use an access token with the `security_events` scope to use this endpoint with private repos, the `public_repo` scope also grants permission to read security events on public repos only. GitHub Apps must have the `security_events` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/code-scanning#list-recent-code-scanning-analyses-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CodeScanning.CodeScanningGetSarif(ctx, operations.CodeScanningGetSarifRequest{
        Owner: "suscipit",
        Repo: "assumenda",
        SarifID: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodeScanningSarifsStatus != nil {
        // handle response
    }
}
```

## CodeScanningListAlertInstances

Lists all instances of the specified code scanning alert.
You must use an access token with the `security_events` scope to use this endpoint with private repos,
the `public_repo` scope also grants permission to read security events on public repos only.
GitHub Apps must have the `security_events` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/code-scanning#list-instances-of-a-code-scanning-alert>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CodeScanning.CodeScanningListAlertInstances(ctx, operations.CodeScanningListAlertInstancesRequest{
        AlertNumber: 509342,
        Owner: "quisquam",
        Page: sdk.Int64(86377),
        PerPage: sdk.Int64(56848),
        Ref: sdk.String("id"),
        Repo: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodeScanningAlertInstances != nil {
        // handle response
    }
}
```

## CodeScanningListAlertsForRepo

Lists code scanning alerts.

To use this endpoint, you must use an access token with the `security_events` scope or, for alerts from public repositories only, an access token with the `public_repo` scope.

GitHub Apps must have the `security_events` read
permission to use this endpoint.

The response includes a `most_recent_instance` object.
This provides details of the most recent instance of this alert
for the default branch (or for the specified Git reference if you used `ref` in the request).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/code-scanning#list-code-scanning-alerts-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CodeScanning.CodeScanningListAlertsForRepo(ctx, operations.CodeScanningListAlertsForRepoRequest{
        Direction: shared.DirectionEnumAsc.ToPointer(),
        Owner: "quo",
        Page: sdk.Int64(847276),
        PerPage: sdk.Int64(777408),
        Ref: sdk.String("fuga"),
        Repo: "eius",
        Sort: operations.CodeScanningListAlertsForRepoSortEnumCreated.ToPointer(),
        State: shared.CodeScanningAlertStateEnumClosed.ToPointer(),
        ToolGUID: sdk.String("ab"),
        ToolName: sdk.String("cupiditate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodeScanningAlertItems != nil {
        // handle response
    }
}
```

## CodeScanningListRecentAnalyses

Lists the details of all code scanning analyses for a repository,
starting with the most recent.
The response is paginated and you can use the `page` and `per_page` parameters
to list the analyses you're interested in.
By default 30 analyses are listed per page.

The `rules_count` field in the response give the number of rules
that were run in the analysis.
For very old analyses this data is not available,
and `0` is returned in this field.

You must use an access token with the `security_events` scope to use this endpoint with private repos,
the `public_repo` scope also grants permission to read security events on public repos only.
GitHub Apps must have the `security_events` read permission to use this endpoint.

**Deprecation notice**:
The `tool_name` field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The tool name can now be found inside the `tool` field.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/code-scanning#list-code-scanning-analyses-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CodeScanning.CodeScanningListRecentAnalyses(ctx, operations.CodeScanningListRecentAnalysesRequest{
        Owner: "consequatur",
        Page: sdk.Int64(272822),
        PerPage: sdk.Int64(892050),
        Ref: sdk.String("ipsam"),
        Repo: "aspernatur",
        SarifID: sdk.String("6c81cd8e-b078-4ac3-a3be-1dad7dbd0b53"),
        ToolGUID: sdk.String("sequi"),
        ToolName: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodeScanningAnalyses != nil {
        // handle response
    }
}
```

## CodeScanningUpdateAlert

Updates the status of a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint with private repositories. You can also use tokens with the `public_repo` scope for public repositories only. GitHub Apps must have the `security_events` write permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/code-scanning#update-a-code-scanning-alert>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CodeScanning.CodeScanningUpdateAlert(ctx, operations.CodeScanningUpdateAlertRequest{
        RequestBody: operations.CodeScanningUpdateAlertRequestBody{
            DismissedReason: shared.CodeScanningAlertDismissedReasonEnumFalsePositive.ToPointer(),
            State: shared.CodeScanningAlertSetStateEnumDismissed,
        },
        AlertNumber: 44612,
        Owner: "distinctio",
        Repo: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodeScanningAlert != nil {
        // handle response
    }
}
```

## CodeScanningUploadSarif

Uploads SARIF data containing the results of a code scanning analysis to make the results available in a repository. You must use an access token with the `security_events` scope to use this endpoint for private repositories. You can also use tokens with the `public_repo` scope for public repositories only. GitHub Apps must have the `security_events` write permission to use this endpoint.

There are two places where you can upload code scanning results.
- If you upload to a pull request, for example `--ref refs/pull/42/merge` or `--ref refs/pull/42/head`, then the results appear as alerts in a pull request check. For more information, see "[Triaging code scanning alerts in pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)."
- If you upload to a branch, for example `--ref refs/heads/my-branch`, then the results appear in the **Security** tab for your repository. For more information, see "[Managing code scanning alerts for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."

You must compress the SARIF-formatted analysis data that you want to upload, using `gzip`, and then encode it as a Base64 format string. For example:

```
gzip -c analysis-data.sarif | base64 -w0
```
<br>
SARIF upload supports a maximum number of entries per the following data objects, and an analysis will be rejected if any of these objects is above its maximum value. For some objects, there are additional values over which the entries will be ignored while keeping the most important entries whenever applicable.
To get the most out of your analysis when it includes data above the supported limits, try to optimize the analysis configuration. For example, for the CodeQL tool, identify and remove the most noisy queries.


| **SARIF data**                   | **Maximum values** | **Additional limits**                                                            |
|----------------------------------|:------------------:|----------------------------------------------------------------------------------|
| Runs per file                    |         15         |                                                                                  |
| Results per run                  |       25,000       | Only the top 5,000 results will be included, prioritized by severity.            |
| Rules per run                    |       25,000       |                                                                                  |
| Thread Flow Locations per result |       10,000       | Only the top 1,000 Thread Flow Locations will be included, using prioritization. |
| Location per result	             |       1,000        | Only 100 locations will be included.                                             |

The `202 Accepted` response includes an `id` value.
You can use this ID to check the status of the upload by using it in the `/sarifs/{sarif_id}` endpoint.
For more information, see "[Get information about a SARIF upload](/rest/reference/code-scanning#get-information-about-a-sarif-upload)."

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/code-scanning#upload-a-sarif-file>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CodeScanning.CodeScanningUploadSarif(ctx, operations.CodeScanningUploadSarifRequest{
        RequestBody: operations.CodeScanningUploadSarifRequestBody{
            CheckoutURI: sdk.String("file:///github/workspace/"),
            CommitSha: "dignissimos",
            Ref: "inventore",
            Sarif: "nihil",
            StartedAt: types.MustTimeFromString("2021-03-27T14:55:59.726Z"),
            ToolName: sdk.String("aliquam"),
        },
        Owner: "odio",
        Repo: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodeScanningSarifsReceipt != nil {
        // handle response
    }
}
```
