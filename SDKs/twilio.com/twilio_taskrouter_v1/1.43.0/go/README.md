# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_taskrouter_v1/1.43.0/go
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
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateActivity(ctx, operations.CreateActivityRequest{
        RequestBody: &operations.CreateActivityCreateActivityRequest{
            Available: sdk.Bool(false),
            FriendlyName: "corrupti",
        },
        WorkspaceSid: "provident",
    }, operations.CreateActivitySecurity{
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

### [SDK](docs/sdk/README.md)

* [CreateActivity](docs/sdk/README.md#createactivity)
* [CreateTask](docs/sdk/README.md#createtask)
* [CreateTaskChannel](docs/sdk/README.md#createtaskchannel)
* [CreateTaskQueue](docs/sdk/README.md#createtaskqueue)
* [CreateWorker](docs/sdk/README.md#createworker)
* [CreateWorkflow](docs/sdk/README.md#createworkflow)
* [CreateWorkspace](docs/sdk/README.md#createworkspace)
* [DeleteActivity](docs/sdk/README.md#deleteactivity)
* [DeleteTask](docs/sdk/README.md#deletetask)
* [DeleteTaskChannel](docs/sdk/README.md#deletetaskchannel)
* [DeleteTaskQueue](docs/sdk/README.md#deletetaskqueue)
* [DeleteWorker](docs/sdk/README.md#deleteworker)
* [DeleteWorkflow](docs/sdk/README.md#deleteworkflow)
* [DeleteWorkspace](docs/sdk/README.md#deleteworkspace)
* [FetchActivity](docs/sdk/README.md#fetchactivity)
* [FetchEvent](docs/sdk/README.md#fetchevent)
* [FetchTask](docs/sdk/README.md#fetchtask)
* [FetchTaskChannel](docs/sdk/README.md#fetchtaskchannel)
* [FetchTaskQueue](docs/sdk/README.md#fetchtaskqueue)
* [FetchTaskQueueCumulativeStatistics](docs/sdk/README.md#fetchtaskqueuecumulativestatistics)
* [FetchTaskQueueRealTimeStatistics](docs/sdk/README.md#fetchtaskqueuerealtimestatistics)
* [FetchTaskQueueStatistics](docs/sdk/README.md#fetchtaskqueuestatistics)
* [FetchTaskReservation](docs/sdk/README.md#fetchtaskreservation)
* [FetchWorker](docs/sdk/README.md#fetchworker)
* [FetchWorkerChannel](docs/sdk/README.md#fetchworkerchannel)
* [FetchWorkerInstanceStatistics](docs/sdk/README.md#fetchworkerinstancestatistics)
* [FetchWorkerReservation](docs/sdk/README.md#fetchworkerreservation)
* [FetchWorkerStatistics](docs/sdk/README.md#fetchworkerstatistics)
* [FetchWorkersCumulativeStatistics](docs/sdk/README.md#fetchworkerscumulativestatistics)
* [FetchWorkersRealTimeStatistics](docs/sdk/README.md#fetchworkersrealtimestatistics)
* [FetchWorkflow](docs/sdk/README.md#fetchworkflow)
* [FetchWorkflowCumulativeStatistics](docs/sdk/README.md#fetchworkflowcumulativestatistics)
* [FetchWorkflowRealTimeStatistics](docs/sdk/README.md#fetchworkflowrealtimestatistics)
* [FetchWorkflowStatistics](docs/sdk/README.md#fetchworkflowstatistics)
* [FetchWorkspace](docs/sdk/README.md#fetchworkspace)
* [FetchWorkspaceCumulativeStatistics](docs/sdk/README.md#fetchworkspacecumulativestatistics)
* [FetchWorkspaceRealTimeStatistics](docs/sdk/README.md#fetchworkspacerealtimestatistics)
* [FetchWorkspaceStatistics](docs/sdk/README.md#fetchworkspacestatistics)
* [ListActivity](docs/sdk/README.md#listactivity)
* [ListEvent](docs/sdk/README.md#listevent)
* [ListTask](docs/sdk/README.md#listtask)
* [ListTaskChannel](docs/sdk/README.md#listtaskchannel)
* [ListTaskQueue](docs/sdk/README.md#listtaskqueue)
* [ListTaskQueuesStatistics](docs/sdk/README.md#listtaskqueuesstatistics)
* [ListTaskReservation](docs/sdk/README.md#listtaskreservation)
* [ListWorker](docs/sdk/README.md#listworker)
* [ListWorkerChannel](docs/sdk/README.md#listworkerchannel)
* [ListWorkerReservation](docs/sdk/README.md#listworkerreservation)
* [ListWorkflow](docs/sdk/README.md#listworkflow)
* [ListWorkspace](docs/sdk/README.md#listworkspace)
* [UpdateActivity](docs/sdk/README.md#updateactivity)
* [UpdateTask](docs/sdk/README.md#updatetask)
* [UpdateTaskChannel](docs/sdk/README.md#updatetaskchannel)
* [UpdateTaskQueue](docs/sdk/README.md#updatetaskqueue)
* [UpdateTaskReservation](docs/sdk/README.md#updatetaskreservation)
* [UpdateWorker](docs/sdk/README.md#updateworker)
* [UpdateWorkerChannel](docs/sdk/README.md#updateworkerchannel)
* [UpdateWorkerReservation](docs/sdk/README.md#updateworkerreservation)
* [UpdateWorkflow](docs/sdk/README.md#updateworkflow)
* [UpdateWorkspace](docs/sdk/README.md#updateworkspace)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
