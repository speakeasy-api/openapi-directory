# Checks

## Overview

Rich interactions with checks run by your integrations.

### Available Operations

* [ChecksCreate](#checkscreate) - Create a check run
* [ChecksCreateSuite](#checkscreatesuite) - Create a check suite
* [ChecksGet](#checksget) - Get a check run
* [ChecksGetSuite](#checksgetsuite) - Get a check suite
* [ChecksListAnnotations](#checkslistannotations) - List check run annotations
* [ChecksListForRef](#checkslistforref) - List check runs for a Git reference
* [ChecksListForSuite](#checkslistforsuite) - List check runs in a check suite
* [ChecksListSuitesForRef](#checkslistsuitesforref) - List check suites for a Git reference
* [ChecksRerequestRun](#checksrerequestrun) - Rerequest a check run
* [ChecksRerequestSuite](#checksrerequestsuite) - Rerequest a check suite
* [ChecksSetSuitesPreferences](#checkssetsuitespreferences) - Update repository preferences for check suites
* [ChecksUpdate](#checksupdate) - Update a check run

## ChecksCreate

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Creates a new check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to create check runs.

In a check suite, GitHub limits the number of check runs with the same name to 1000. Once these check runs exceed 1000, GitHub will start to automatically delete older check runs.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/checks#create-a-check-run>

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
    res, err := s.Checks.ChecksCreate(ctx, operations.ChecksCreateRequest{
        RequestBody: map[string]interface{}{
            "dolorum": "laborum",
        },
        Owner: "placeat",
        Repo: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckRun != nil {
        // handle response
    }
}
```

## ChecksCreateSuite

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.

By default, check suites are automatically created when you create a [check run](https://docs.github.com/enterprise-server@3.6/rest/reference/checks#check-runs). You only need to use this endpoint for manually creating check suites when you've disabled automatic creation using "[Update repository preferences for check suites](https://docs.github.com/enterprise-server@3.6/rest/reference/checks#update-repository-preferences-for-check-suites)". Your GitHub App must have the `checks:write` permission to create check suites.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/checks#create-a-check-suite>

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
    res, err := s.Checks.ChecksCreateSuite(ctx, operations.ChecksCreateSuiteRequest{
        RequestBody: operations.ChecksCreateSuiteRequestBody{
            HeadSha: "eum",
        },
        Owner: "autem",
        Repo: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckSuite != nil {
        // handle response
    }
}
```

## ChecksGet

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Gets a single check run using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/checks#get-a-check-run>

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
    res, err := s.Checks.ChecksGet(ctx, operations.ChecksGetRequest{
        CheckRunID: 557369,
        Owner: "assumenda",
        Repo: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckRun != nil {
        // handle response
    }
}
```

## ChecksGetSuite

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.

Gets a single check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/checks#get-a-check-suite>

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
    res, err := s.Checks.ChecksGetSuite(ctx, operations.ChecksGetSuiteRequest{
        CheckSuiteID: 379034,
        Owner: "libero",
        Repo: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckSuite != nil {
        // handle response
    }
}
```

## ChecksListAnnotations

Lists annotations for a check run using the annotation `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get annotations for a check run. OAuth Apps and authenticated users must have the `repo` scope to get annotations for a check run in a private repository.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/checks#list-check-run-annotations>

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
    res, err := s.Checks.ChecksListAnnotations(ctx, operations.ChecksListAnnotationsRequest{
        CheckRunID: 270328,
        Owner: "numquam",
        Page: sdk.Int64(131482),
        PerPage: sdk.Int64(591935),
        Repo: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckAnnotations != nil {
        // handle response
    }
}
```

## ChecksListForRef

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Lists check runs for a commit ref. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/checks#list-check-runs-for-a-git-reference>

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
    res, err := s.Checks.ChecksListForRef(ctx, operations.ChecksListForRefRequest{
        AppID: sdk.Int64(476477),
        CheckName: sdk.String("magnam"),
        Filter: operations.ChecksListForRefFilterEnumLatest.ToPointer(),
        Owner: "eius",
        Page: sdk.Int64(458515),
        PerPage: sdk.Int64(456141),
        Ref: "rem",
        Repo: "fuga",
        Status: shared.StatusEnumInProgress.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChecksListForRef200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ChecksListForSuite

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Lists check runs for a check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/checks#list-check-runs-in-a-check-suite>

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
    res, err := s.Checks.ChecksListForSuite(ctx, operations.ChecksListForSuiteRequest{
        CheckName: sdk.String("quidem"),
        CheckSuiteID: 852635,
        Filter: operations.ChecksListForSuiteFilterEnumLatest.ToPointer(),
        Owner: "eum",
        Page: sdk.Int64(379927),
        PerPage: sdk.Int64(826871),
        Repo: "eos",
        Status: shared.StatusEnumInProgress.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChecksListForSuite200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ChecksListSuitesForRef

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.

Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to list check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/checks#list-check-suites-for-a-git-reference>

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
    res, err := s.Checks.ChecksListSuitesForRef(ctx, operations.ChecksListSuitesForRefRequest{
        AppID: sdk.Int64(788546),
        CheckName: sdk.String("veritatis"),
        Owner: "ipsa",
        Page: sdk.Int64(660040),
        PerPage: sdk.Int64(696997),
        Ref: "neque",
        Repo: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChecksListSuitesForRef200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ChecksRerequestRun

Triggers GitHub to rerequest an existing check run, without pushing new code to a repository. This endpoint will trigger the [`check_run` webhook](https://docs.github.com/enterprise-server@3.6/webhooks/event-payloads/#check_run) event with the action `rerequested`. When a check run is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.

To rerequest a check run, your GitHub App must have the `checks:read` permission on a private repository or pull access to a public repository.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/checks#rerequest-a-check-run>

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
    res, err := s.Checks.ChecksRerequestRun(ctx, operations.ChecksRerequestRunRequest{
        CheckRunID: 847276,
        Owner: "quo",
        Repo: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## ChecksRerequestSuite

Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the [`check_suite` webhook](https://docs.github.com/enterprise-server@3.6/webhooks/event-payloads/#check_suite) event with the action `rerequested`. When a check suite is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.

To rerequest a check suite, your GitHub App must have the `checks:read` permission on a private repository or pull access to a public repository.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/checks#rerequest-a-check-suite>

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
    res, err := s.Checks.ChecksRerequestSuite(ctx, operations.ChecksRerequestSuiteRequest{
        CheckSuiteID: 259422,
        Owner: "eos",
        Repo: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## ChecksSetSuitesPreferences

Changes the default automatic flow when creating check suites. By default, a check suite is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://docs.github.com/enterprise-server@3.6/rest/reference/checks#create-a-check-suite). You must have admin permissions in the repository to set preferences for check suites.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/checks#update-repository-preferences-for-check-suites>

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
    res, err := s.Checks.ChecksSetSuitesPreferences(ctx, operations.ChecksSetSuitesPreferencesRequest{
        RequestBody: operations.ChecksSetSuitesPreferencesRequestBody{
            AutoTriggerChecks: []ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks{
                operations.ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks{
                    AppID: 587600,
                    Setting: false,
                },
            },
        },
        Owner: "consequatur",
        Repo: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckSuitePreference != nil {
        // handle response
    }
}
```

## ChecksUpdate

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Updates a check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to edit check runs.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/checks#update-a-check-run>

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
    res, err := s.Checks.ChecksUpdate(ctx, operations.ChecksUpdateRequest{
        RequestBody: map[string]interface{}{
            "aspernatur": "sequi",
            "quo": "esse",
        },
        CheckRunID: 925164,
        Owner: "aperiam",
        Repo: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckRun != nil {
        // handle response
    }
}
```
