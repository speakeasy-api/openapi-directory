# codeScanning

## Overview

Retrieve code scanning alerts from a repository.

### Available Operations

* [codeScanningDeleteAnalysis](#codescanningdeleteanalysis) - Delete a code scanning analysis from a repository
* [codeScanningGetAlert](#codescanninggetalert) - Get a code scanning alert
* [codeScanningGetAnalysis](#codescanninggetanalysis) - Get a code scanning analysis for a repository
* [codeScanningGetSarif](#codescanninggetsarif) - Get information about a SARIF upload
* [codeScanningListAlertInstances](#codescanninglistalertinstances) - List instances of a code scanning alert
* [codeScanningListAlertsForRepo](#codescanninglistalertsforrepo) - List code scanning alerts for a repository
* [codeScanningListRecentAnalyses](#codescanninglistrecentanalyses) - List code scanning analyses for a repository
* [codeScanningUpdateAlert](#codescanningupdatealert) - Update a code scanning alert
* [codeScanningUploadSarif](#codescanninguploadsarif) - Upload an analysis as SARIF data

## codeScanningDeleteAnalysis

Deletes a specified code scanning analysis from a repository. For
private repositories, you must use an access token with the `repo` scope. For public repositories,
you must use an access token with `public_repo` and `repo:security_events` scopes.
GitHub Apps must have the `security_events` write permission to use this endpoint.

You can delete one analysis at a time.
To delete a series of analyses, start with the most recent analysis and work backwards.
Conceptually, the process is similar to the undo function in a text editor.

**Note**: The ability to delete analyses was introduced in GitHub Enterprise Server 3.1.
You can delete analyses that were generated prior to installing this release,
however, if you do so, you will lose information about fixed alerts for all such analyses,
for the relevant code scanning tool.
We recommend that you only delete analyses that were generated with earlier releases
if you don't need the details of fixed alerts from pre-3.1 releases.

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
* `analysis_key`
* `environment`

If you attempt to delete an analysis that is not the most recent in a set,
you'll get a 400 response with the message:

```
Analysis specified is not deletable.
```

The response from a successful `DELETE` operation provides you with
two alternative URLs for deleting the next analysis in the set
(see the example default response below).
Use the `next_analysis_url` URL if you want to avoid accidentally deleting the final analysis
in the set. This is a useful option if you want to preserve at least one analysis
for the specified tool in your repository.
Use the `confirm_delete_url` URL if you are content to remove all analyses for a tool.
When you delete the last analysis in a set the value of `next_analysis_url` and `confirm_delete_url`
in the 200 response is `null`.

As an example of the deletion process,
let's imagine that you added a workflow that configured a particular code scanning tool
to analyze the code in a repository. This tool has added 15 analyses:
10 on the default branch, and another 5 on a topic branch.
You therefore have two separate sets of analyses for this tool.
You've now decided that you want to remove all of the analyses for the tool.
To do this you must make 15 separate deletion requests.
To start, you must find the deletable analysis for one of the sets,
step through deleting the analyses in that set,
and then repeat the process for the second set.
The procedure therefore consists of a nested loop:

**Outer loop**:
* List the analyses for the repository, filtered by tool.
* Parse this list to find a deletable analysis. If found:

  **Inner loop**:
  * Delete the identified analysis.
  * Parse the response for the value of `confirm_delete_url` and, if found, use this in the next iteration.

The above process assumes that you want to remove all trace of the tool's analyses from the GitHub user interface, for the specified repository, and it therefore uses the `confirm_delete_url` value. Alternatively, you could use the `next_analysis_url` value, which would leave the last analysis in each set undeleted to avoid removing a tool's analysis entirely.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodeScanningDeleteAnalysisRequest;
import org.openapis.openapi.models.operations.CodeScanningDeleteAnalysisResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodeScanningDeleteAnalysisRequest req = new CodeScanningDeleteAnalysisRequest(981830L, "doloribus", "iusto") {{
                confirmDelete = "eligendi";
            }};            

            CodeScanningDeleteAnalysisResponse res = sdk.codeScanning.codeScanningDeleteAnalysis(req);

            if (res.codeScanningAnalysisDeletion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codeScanningGetAlert

Gets a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.

**Deprecation notice**:
The instances field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The same information can now be retrieved via a GET request to the URL specified by `instances_url`.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/code-scanning#get-a-code-scanning-alert>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodeScanningGetAlertRequest;
import org.openapis.openapi.models.operations.CodeScanningGetAlertResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodeScanningGetAlertRequest req = new CodeScanningGetAlertRequest(497391L, "alias", "officia");            

            CodeScanningGetAlertResponse res = sdk.codeScanning.codeScanningGetAlert(req);

            if (res.codeScanningAlert != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codeScanningGetAnalysis

Gets a specified code scanning analysis for a repository.
You must use an access token with the `security_events` scope to use this endpoint.
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

**Deprecation notice**:
The `tool_name` field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The tool name can now be found inside the `tool` field.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodeScanningGetAnalysisRequest;
import org.openapis.openapi.models.operations.CodeScanningGetAnalysisResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodeScanningGetAnalysisRequest req = new CodeScanningGetAnalysisRequest(269479L, "ipsam", "ea");            

            CodeScanningGetAnalysisResponse res = sdk.codeScanning.codeScanningGetAnalysis(req);

            if (res.codeScanningAnalysis != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codeScanningGetSarif

Gets information about a SARIF upload, including the status and the URL of the analysis that was uploaded so that you can retrieve details of the analysis. For more information, see "[Get a code scanning analysis for a repository](/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository)." You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/code-scanning#list-recent-code-scanning-analyses-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodeScanningGetSarifRequest;
import org.openapis.openapi.models.operations.CodeScanningGetSarifResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodeScanningGetSarifRequest req = new CodeScanningGetSarifRequest("aspernatur", "vel", "possimus");            

            CodeScanningGetSarifResponse res = sdk.codeScanning.codeScanningGetSarif(req);

            if (res.codeScanningSarifsStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codeScanningListAlertInstances

Lists all instances of the specified code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/code-scanning#list-instances-of-a-code-scanning-alert>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodeScanningListAlertInstancesRequest;
import org.openapis.openapi.models.operations.CodeScanningListAlertInstancesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodeScanningListAlertInstancesRequest req = new CodeScanningListAlertInstancesRequest(297842L, "ratione", "ex") {{
                page = 511319L;
                perPage = 120657L;
                ref = "dolor";
            }};            

            CodeScanningListAlertInstancesResponse res = sdk.codeScanning.codeScanningListAlertInstances(req);

            if (res.codeScanningAlertInstances != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codeScanningListAlertsForRepo

Lists all open code scanning alerts for the default branch (usually `main`
or `master`). You must use an access token with the `security_events` scope to use
this endpoint. GitHub Apps must have the `security_events` read permission to use
this endpoint.

The response includes a `most_recent_instance` object.
This provides details of the most recent instance of this alert
for the default branch or for the specified Git reference
(if you used `ref` in the request).

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/code-scanning#list-code-scanning-alerts-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodeScanningListAlertsForRepoRequest;
import org.openapis.openapi.models.operations.CodeScanningListAlertsForRepoResponse;
import org.openapis.openapi.models.shared.CodeScanningAlertStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodeScanningListAlertsForRepoRequest req = new CodeScanningListAlertsForRepoRequest("maiores", "quasi") {{
                page = 406120L;
                perPage = 862192L;
                ref = "excepturi";
                state = CodeScanningAlertStateEnum.FIXED;
                toolGuid = "nostrum";
                toolName = "sapiente";
            }};            

            CodeScanningListAlertsForRepoResponse res = sdk.codeScanning.codeScanningListAlertsForRepo(req);

            if (res.codeScanningAlertItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codeScanningListRecentAnalyses

Lists the details of all code scanning analyses for a repository,
starting with the most recent.
The response is paginated and you can use the `page` and `per_page` parameters
to list the analyses you're interested in.
By default 30 analyses are listed per page.

The `rules_count` field in the response give the number of rules
that were run in the analysis.
For very old analyses this data is not available,
and `0` is returned in this field.

You must use an access token with the `security_events` scope to use this endpoint.
GitHub Apps must have the `security_events` read permission to use this endpoint.

**Deprecation notice**:
The `tool_name` field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The tool name can now be found inside the `tool` field.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/code-scanning#list-code-scanning-analyses-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodeScanningListRecentAnalysesRequest;
import org.openapis.openapi.models.operations.CodeScanningListRecentAnalysesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodeScanningListRecentAnalysesRequest req = new CodeScanningListRecentAnalysesRequest("quisquam", "saepe") {{
                page = 411372L;
                perPage = 774048L;
                ref = "corporis";
                sarifId = "6c81cd8e-b078-4ac3-a3be-1dad7dbd0b53";
                toolGuid = "veniam";
                toolName = "aliquid";
            }};            

            CodeScanningListRecentAnalysesResponse res = sdk.codeScanning.codeScanningListRecentAnalyses(req);

            if (res.codeScanningAnalyses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codeScanningUpdateAlert

Updates the status of a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` write permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/code-scanning#update-a-code-scanning-alert>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodeScanningUpdateAlertRequest;
import org.openapis.openapi.models.operations.CodeScanningUpdateAlertRequestBody;
import org.openapis.openapi.models.operations.CodeScanningUpdateAlertResponse;
import org.openapis.openapi.models.shared.CodeScanningAlertDismissedReasonEnum;
import org.openapis.openapi.models.shared.CodeScanningAlertSetStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodeScanningUpdateAlertRequest req = new CodeScanningUpdateAlertRequest(                new CodeScanningUpdateAlertRequestBody(CodeScanningAlertSetStateEnum.OPEN) {{
                                dismissedReason = CodeScanningAlertDismissedReasonEnum.FALSE_POSITIVE;
                            }};, 407241L, "quo", "consectetur");            

            CodeScanningUpdateAlertResponse res = sdk.codeScanning.codeScanningUpdateAlert(req);

            if (res.codeScanningAlert != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codeScanningUploadSarif

Uploads SARIF data containing the results of a code scanning analysis to make the results available in a repository. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` write permission to use this endpoint.

There are two places where you can upload code scanning results.
 - If you upload to a pull request, for example `--ref refs/pull/42/merge` or `--ref refs/pull/42/head`, then the results appear as alerts in a pull request check. For more information, see "[Triaging code scanning alerts in pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)."
 - If you upload to a branch, for example `--ref refs/heads/my-branch`, then the results appear in the **Security** tab for your repository. For more information, see "[Managing code scanning alerts for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."

You must compress the SARIF-formatted analysis data that you want to upload, using `gzip`, and then encode it as a Base64 format string. For example:

```
gzip -c analysis-data.sarif | base64 -w0
```

SARIF upload supports a maximum of 5000 results per analysis run. Any results over this limit are ignored and any SARIF uploads with more than 25,000 results are rejected. Typically, but not necessarily, a SARIF file contains a single run of a single tool. If a code scanning tool generates too many results, you should update the analysis configuration to run only the most important rules or queries.

The `202 Accepted`, response includes an `id` value.
You can use this ID to check the status of the upload by using this for the `/sarifs/{sarif_id}` endpoint.
For more information, see "[Get information about a SARIF upload](/rest/reference/code-scanning#get-information-about-a-sarif-upload)."

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/code-scanning#upload-a-sarif-file>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodeScanningUploadSarifRequest;
import org.openapis.openapi.models.operations.CodeScanningUploadSarifRequestBody;
import org.openapis.openapi.models.operations.CodeScanningUploadSarifResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodeScanningUploadSarifRequest req = new CodeScanningUploadSarifRequest(                new CodeScanningUploadSarifRequestBody("recusandae", "aspernatur", "minima") {{
                                checkoutUri = "file:///github/workspace/";
                                startedAt = OffsetDateTime.parse("2022-01-18T04:51:10.466Z");
                                toolName = "libero";
                            }};, "aut", "aut");            

            CodeScanningUploadSarifResponse res = sdk.codeScanning.codeScanningUploadSarif(req);

            if (res.codeScanningSarifsReceipt != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
