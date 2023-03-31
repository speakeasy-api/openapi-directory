# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/tasks/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.TasksTasklistsDeleteRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        OauthToken: "corrupti",
        PrettyPrint: false,
        QuotaUser: "illum",
        Tasklist: "vel",
        UploadType: "error",
        UploadProtocol: "deserunt",
    }

    ctx := context.Background()
    res, err := s.Tasklists.TasksTasklistsDelete(ctx, req, operations.TasksTasklistsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Tasklists

* `TasksTasklistsDelete` - Deletes the authenticated user's specified task list.
* `TasksTasklistsGet` - Returns the authenticated user's specified task list.
* `TasksTasklistsInsert` - Creates a new task list and adds it to the authenticated user's task lists.
* `TasksTasklistsList` - Returns all the authenticated user's task lists.
* `TasksTasklistsPatch` - Updates the authenticated user's specified task list. This method supports patch semantics.
* `TasksTasklistsUpdate` - Updates the authenticated user's specified task list.

### Tasks

* `TasksTasksClear` - Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.
* `TasksTasksDelete` - Deletes the specified task from the task list.
* `TasksTasksGet` - Returns the specified task.
* `TasksTasksInsert` - Creates a new task on the specified task list.
* `TasksTasksList` - Returns all tasks in the specified task list.
* `TasksTasksMove` - Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.
* `TasksTasksPatch` - Updates the specified task. This method supports patch semantics.
* `TasksTasksUpdate` - Updates the specified task.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
