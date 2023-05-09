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
    res, err := s.Tasklists.TasksTasklistsDelete(ctx, operations.TasksTasklistsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("corrupti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        Tasklist: "vel",
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.TasksTasklistsDeleteSecurity{
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


### [Tasklists](docs/tasklists/README.md)

* [TasksTasklistsDelete](docs/tasklists/README.md#taskstasklistsdelete) - Deletes the authenticated user's specified task list.
* [TasksTasklistsGet](docs/tasklists/README.md#taskstasklistsget) - Returns the authenticated user's specified task list.
* [TasksTasklistsInsert](docs/tasklists/README.md#taskstasklistsinsert) - Creates a new task list and adds it to the authenticated user's task lists.
* [TasksTasklistsList](docs/tasklists/README.md#taskstasklistslist) - Returns all the authenticated user's task lists.
* [TasksTasklistsPatch](docs/tasklists/README.md#taskstasklistspatch) - Updates the authenticated user's specified task list. This method supports patch semantics.
* [TasksTasklistsUpdate](docs/tasklists/README.md#taskstasklistsupdate) - Updates the authenticated user's specified task list.

### [Tasks](docs/tasks/README.md)

* [TasksTasksClear](docs/tasks/README.md#taskstasksclear) - Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.
* [TasksTasksDelete](docs/tasks/README.md#taskstasksdelete) - Deletes the specified task from the task list.
* [TasksTasksGet](docs/tasks/README.md#taskstasksget) - Returns the specified task.
* [TasksTasksInsert](docs/tasks/README.md#taskstasksinsert) - Creates a new task on the specified task list.
* [TasksTasksList](docs/tasks/README.md#taskstaskslist) - Returns all tasks in the specified task list.
* [TasksTasksMove](docs/tasks/README.md#taskstasksmove) - Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.
* [TasksTasksPatch](docs/tasks/README.md#taskstaskspatch) - Updates the specified task. This method supports patch semantics.
* [TasksTasksUpdate](docs/tasks/README.md#taskstasksupdate) - Updates the specified task.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
