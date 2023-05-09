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
    res, err := s.Projects.DataflowProjectsDeleteSnapshots(ctx, operations.DataflowProjectsDeleteSnapshotsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        Location: sdk.String("corrupti"),
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "vel",
        QuotaUser: sdk.String("error"),
        SnapshotID: sdk.String("deserunt"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("iure"),
    }, operations.DataflowProjectsDeleteSnapshotsSecurity{
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


### [Projects](docs/projects/README.md)

* [DataflowProjectsDeleteSnapshots](docs/projects/README.md#dataflowprojectsdeletesnapshots) - Deletes a snapshot.
* [DataflowProjectsJobsAggregated](docs/projects/README.md#dataflowprojectsjobsaggregated) - List the jobs of a project across all regions.
* [DataflowProjectsJobsCreate](docs/projects/README.md#dataflowprojectsjobscreate) - Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
* [DataflowProjectsJobsDebugGetConfig](docs/projects/README.md#dataflowprojectsjobsdebuggetconfig) - Get encoded debug configuration for component. Not cacheable.
* [DataflowProjectsJobsDebugSendCapture](docs/projects/README.md#dataflowprojectsjobsdebugsendcapture) - Send encoded debug capture data for component.
* [DataflowProjectsJobsGet](docs/projects/README.md#dataflowprojectsjobsget) - Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
* [DataflowProjectsJobsGetMetrics](docs/projects/README.md#dataflowprojectsjobsgetmetrics) - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* [DataflowProjectsJobsList](docs/projects/README.md#dataflowprojectsjobslist) - List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
* [DataflowProjectsJobsMessagesList](docs/projects/README.md#dataflowprojectsjobsmessageslist) - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* [DataflowProjectsJobsSnapshot](docs/projects/README.md#dataflowprojectsjobssnapshot) - Snapshot the state of a streaming job.
* [DataflowProjectsJobsUpdate](docs/projects/README.md#dataflowprojectsjobsupdate) - Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
* [DataflowProjectsJobsWorkItemsLease](docs/projects/README.md#dataflowprojectsjobsworkitemslease) - Leases a dataflow WorkItem to run.
* [DataflowProjectsJobsWorkItemsReportStatus](docs/projects/README.md#dataflowprojectsjobsworkitemsreportstatus) - Reports the status of dataflow WorkItems leased by a worker.
* [DataflowProjectsLocationsFlexTemplatesLaunch](docs/projects/README.md#dataflowprojectslocationsflextemplateslaunch) - Launch a job with a FlexTemplate.
* [DataflowProjectsLocationsJobsCreate](docs/projects/README.md#dataflowprojectslocationsjobscreate) - Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
* [DataflowProjectsLocationsJobsDebugGetConfig](docs/projects/README.md#dataflowprojectslocationsjobsdebuggetconfig) - Get encoded debug configuration for component. Not cacheable.
* [DataflowProjectsLocationsJobsDebugSendCapture](docs/projects/README.md#dataflowprojectslocationsjobsdebugsendcapture) - Send encoded debug capture data for component.
* [DataflowProjectsLocationsJobsGet](docs/projects/README.md#dataflowprojectslocationsjobsget) - Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
* [DataflowProjectsLocationsJobsGetExecutionDetails](docs/projects/README.md#dataflowprojectslocationsjobsgetexecutiondetails) - Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
* [DataflowProjectsLocationsJobsGetMetrics](docs/projects/README.md#dataflowprojectslocationsjobsgetmetrics) - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* [DataflowProjectsLocationsJobsList](docs/projects/README.md#dataflowprojectslocationsjobslist) - List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
* [DataflowProjectsLocationsJobsMessagesList](docs/projects/README.md#dataflowprojectslocationsjobsmessageslist) - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* [DataflowProjectsLocationsJobsSnapshot](docs/projects/README.md#dataflowprojectslocationsjobssnapshot) - Snapshot the state of a streaming job.
* [DataflowProjectsLocationsJobsSnapshotsList](docs/projects/README.md#dataflowprojectslocationsjobssnapshotslist) - Lists snapshots.
* [DataflowProjectsLocationsJobsStagesGetExecutionDetails](docs/projects/README.md#dataflowprojectslocationsjobsstagesgetexecutiondetails) - Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
* [DataflowProjectsLocationsJobsUpdate](docs/projects/README.md#dataflowprojectslocationsjobsupdate) - Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
* [DataflowProjectsLocationsJobsWorkItemsLease](docs/projects/README.md#dataflowprojectslocationsjobsworkitemslease) - Leases a dataflow WorkItem to run.
* [DataflowProjectsLocationsJobsWorkItemsReportStatus](docs/projects/README.md#dataflowprojectslocationsjobsworkitemsreportstatus) - Reports the status of dataflow WorkItems leased by a worker.
* [DataflowProjectsLocationsSnapshotsDelete](docs/projects/README.md#dataflowprojectslocationssnapshotsdelete) - Deletes a snapshot.
* [DataflowProjectsLocationsSnapshotsGet](docs/projects/README.md#dataflowprojectslocationssnapshotsget) - Gets information about a snapshot.
* [DataflowProjectsLocationsSnapshotsList](docs/projects/README.md#dataflowprojectslocationssnapshotslist) - Lists snapshots.
* [DataflowProjectsLocationsTemplatesCreate](docs/projects/README.md#dataflowprojectslocationstemplatescreate) - Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
* [DataflowProjectsLocationsTemplatesGet](docs/projects/README.md#dataflowprojectslocationstemplatesget) - Get the template associated with a template.
* [DataflowProjectsLocationsTemplatesLaunch](docs/projects/README.md#dataflowprojectslocationstemplateslaunch) - Launch a template.
* [DataflowProjectsLocationsWorkerMessages](docs/projects/README.md#dataflowprojectslocationsworkermessages) - Send a worker_message to the service.
* [DataflowProjectsSnapshotsGet](docs/projects/README.md#dataflowprojectssnapshotsget) - Gets information about a snapshot.
* [DataflowProjectsSnapshotsList](docs/projects/README.md#dataflowprojectssnapshotslist) - Lists snapshots.
* [DataflowProjectsTemplatesCreate](docs/projects/README.md#dataflowprojectstemplatescreate) - Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
* [DataflowProjectsTemplatesGet](docs/projects/README.md#dataflowprojectstemplatesget) - Get the template associated with a template.
* [DataflowProjectsTemplatesLaunch](docs/projects/README.md#dataflowprojectstemplateslaunch) - Launch a template.
* [DataflowProjectsWorkerMessages](docs/projects/README.md#dataflowprojectsworkermessages) - Send a worker_message to the service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
