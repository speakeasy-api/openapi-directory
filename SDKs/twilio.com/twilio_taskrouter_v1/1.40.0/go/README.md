# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_taskrouter_v1/1.40.0/go
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

    req := operations.CreateActivityRequest{
        RequestBody: &operations.CreateActivityCreateActivityRequest{
            Available: false,
            FriendlyName: "corrupti",
        },
        WorkspaceSid: "provident",
    }

    ctx := context.Background()
    res, err := s.CreateActivity(ctx, req, operations.CreateActivitySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceActivity != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateActivity`
* `CreateTask`
* `CreateTaskChannel`
* `CreateTaskQueue`
* `CreateWorker`
* `CreateWorkflow`
* `CreateWorkspace`
* `DeleteActivity`
* `DeleteTask`
* `DeleteTaskChannel`
* `DeleteTaskQueue`
* `DeleteWorker`
* `DeleteWorkflow`
* `DeleteWorkspace`
* `FetchActivity`
* `FetchEvent`
* `FetchTask`
* `FetchTaskChannel`
* `FetchTaskQueue`
* `FetchTaskQueueCumulativeStatistics`
* `FetchTaskQueueRealTimeStatistics`
* `FetchTaskQueueStatistics`
* `FetchTaskReservation`
* `FetchWorker`
* `FetchWorkerChannel`
* `FetchWorkerInstanceStatistics`
* `FetchWorkerReservation`
* `FetchWorkerStatistics`
* `FetchWorkersCumulativeStatistics`
* `FetchWorkersRealTimeStatistics`
* `FetchWorkflow`
* `FetchWorkflowCumulativeStatistics`
* `FetchWorkflowRealTimeStatistics`
* `FetchWorkflowStatistics`
* `FetchWorkspace`
* `FetchWorkspaceCumulativeStatistics`
* `FetchWorkspaceRealTimeStatistics`
* `FetchWorkspaceStatistics`
* `ListActivity`
* `ListEvent`
* `ListTask`
* `ListTaskChannel`
* `ListTaskQueue`
* `ListTaskQueuesStatistics`
* `ListTaskReservation`
* `ListWorker`
* `ListWorkerChannel`
* `ListWorkerReservation`
* `ListWorkflow`
* `ListWorkspace`
* `UpdateActivity`
* `UpdateTask`
* `UpdateTaskChannel`
* `UpdateTaskQueue`
* `UpdateTaskReservation`
* `UpdateWorker`
* `UpdateWorkerChannel`
* `UpdateWorkerReservation`
* `UpdateWorkflow`
* `UpdateWorkspace`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
