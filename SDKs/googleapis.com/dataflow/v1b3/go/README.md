# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/dataflow/v1b3/go
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

    req := operations.DataflowProjectsDeleteSnapshotsRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        Location: "corrupti",
        OauthToken: "illum",
        PrettyPrint: false,
        ProjectID: "vel",
        QuotaUser: "error",
        SnapshotID: "deserunt",
        UploadType: "suscipit",
        UploadProtocol: "iure",
    }

    ctx := context.Background()
    res, err := s.Projects.DataflowProjectsDeleteSnapshots(ctx, req, operations.DataflowProjectsDeleteSnapshotsSecurity{
        Option1: &operations.DataflowProjectsDeleteSnapshotsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSnapshotResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `DataflowProjectsDeleteSnapshots` - Deletes a snapshot.
* `DataflowProjectsJobsAggregated` - List the jobs of a project across all regions.
* `DataflowProjectsJobsCreate` - Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
* `DataflowProjectsJobsDebugGetConfig` - Get encoded debug configuration for component. Not cacheable.
* `DataflowProjectsJobsDebugSendCapture` - Send encoded debug capture data for component.
* `DataflowProjectsJobsGet` - Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
* `DataflowProjectsJobsGetMetrics` - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* `DataflowProjectsJobsList` - List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
* `DataflowProjectsJobsMessagesList` - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* `DataflowProjectsJobsSnapshot` - Snapshot the state of a streaming job.
* `DataflowProjectsJobsUpdate` - Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
* `DataflowProjectsJobsWorkItemsLease` - Leases a dataflow WorkItem to run.
* `DataflowProjectsJobsWorkItemsReportStatus` - Reports the status of dataflow WorkItems leased by a worker.
* `DataflowProjectsLocationsFlexTemplatesLaunch` - Launch a job with a FlexTemplate.
* `DataflowProjectsLocationsJobsCreate` - Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
* `DataflowProjectsLocationsJobsDebugGetConfig` - Get encoded debug configuration for component. Not cacheable.
* `DataflowProjectsLocationsJobsDebugSendCapture` - Send encoded debug capture data for component.
* `DataflowProjectsLocationsJobsGet` - Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
* `DataflowProjectsLocationsJobsGetExecutionDetails` - Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
* `DataflowProjectsLocationsJobsGetMetrics` - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* `DataflowProjectsLocationsJobsList` - List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
* `DataflowProjectsLocationsJobsMessagesList` - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* `DataflowProjectsLocationsJobsSnapshot` - Snapshot the state of a streaming job.
* `DataflowProjectsLocationsJobsSnapshotsList` - Lists snapshots.
* `DataflowProjectsLocationsJobsStagesGetExecutionDetails` - Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
* `DataflowProjectsLocationsJobsUpdate` - Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
* `DataflowProjectsLocationsJobsWorkItemsLease` - Leases a dataflow WorkItem to run.
* `DataflowProjectsLocationsJobsWorkItemsReportStatus` - Reports the status of dataflow WorkItems leased by a worker.
* `DataflowProjectsLocationsSnapshotsDelete` - Deletes a snapshot.
* `DataflowProjectsLocationsSnapshotsGet` - Gets information about a snapshot.
* `DataflowProjectsLocationsSnapshotsList` - Lists snapshots.
* `DataflowProjectsLocationsTemplatesCreate` - Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
* `DataflowProjectsLocationsTemplatesGet` - Get the template associated with a template.
* `DataflowProjectsLocationsTemplatesLaunch` - Launch a template.
* `DataflowProjectsLocationsWorkerMessages` - Send a worker_message to the service.
* `DataflowProjectsSnapshotsGet` - Gets information about a snapshot.
* `DataflowProjectsSnapshotsList` - Lists snapshots.
* `DataflowProjectsTemplatesCreate` - Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
* `DataflowProjectsTemplatesGet` - Get the template associated with a template.
* `DataflowProjectsTemplatesLaunch` - Launch a template.
* `DataflowProjectsWorkerMessages` - Send a worker_message to the service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
