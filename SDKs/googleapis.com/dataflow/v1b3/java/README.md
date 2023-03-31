# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsSecurityOption4;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsPathParams;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsQueryParams;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsRequest;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsDeleteSnapshotsRequest req = new DataflowProjectsDeleteSnapshotsRequest() {{
                security = new DataflowProjectsDeleteSnapshotsSecurity() {{
                    option1 = new DataflowProjectsDeleteSnapshotsSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new DataflowProjectsDeleteSnapshotsPathParams() {{
                    projectId = "corrupti";
                }};
                queryParams = new DataflowProjectsDeleteSnapshotsQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    location = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    snapshotId = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
            }};            

            DataflowProjectsDeleteSnapshotsResponse res = sdk.projects.dataflowProjectsDeleteSnapshots(req);

            if (res.deleteSnapshotResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `dataflowProjectsDeleteSnapshots` - Deletes a snapshot.
* `dataflowProjectsJobsAggregated` - List the jobs of a project across all regions.
* `dataflowProjectsJobsCreate` - Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
* `dataflowProjectsJobsDebugGetConfig` - Get encoded debug configuration for component. Not cacheable.
* `dataflowProjectsJobsDebugSendCapture` - Send encoded debug capture data for component.
* `dataflowProjectsJobsGet` - Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
* `dataflowProjectsJobsGetMetrics` - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* `dataflowProjectsJobsList` - List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
* `dataflowProjectsJobsMessagesList` - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* `dataflowProjectsJobsSnapshot` - Snapshot the state of a streaming job.
* `dataflowProjectsJobsUpdate` - Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
* `dataflowProjectsJobsWorkItemsLease` - Leases a dataflow WorkItem to run.
* `dataflowProjectsJobsWorkItemsReportStatus` - Reports the status of dataflow WorkItems leased by a worker.
* `dataflowProjectsLocationsFlexTemplatesLaunch` - Launch a job with a FlexTemplate.
* `dataflowProjectsLocationsJobsCreate` - Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
* `dataflowProjectsLocationsJobsDebugGetConfig` - Get encoded debug configuration for component. Not cacheable.
* `dataflowProjectsLocationsJobsDebugSendCapture` - Send encoded debug capture data for component.
* `dataflowProjectsLocationsJobsGet` - Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
* `dataflowProjectsLocationsJobsGetExecutionDetails` - Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
* `dataflowProjectsLocationsJobsGetMetrics` - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* `dataflowProjectsLocationsJobsList` - List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
* `dataflowProjectsLocationsJobsMessagesList` - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* `dataflowProjectsLocationsJobsSnapshot` - Snapshot the state of a streaming job.
* `dataflowProjectsLocationsJobsSnapshotsList` - Lists snapshots.
* `dataflowProjectsLocationsJobsStagesGetExecutionDetails` - Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
* `dataflowProjectsLocationsJobsUpdate` - Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
* `dataflowProjectsLocationsJobsWorkItemsLease` - Leases a dataflow WorkItem to run.
* `dataflowProjectsLocationsJobsWorkItemsReportStatus` - Reports the status of dataflow WorkItems leased by a worker.
* `dataflowProjectsLocationsSnapshotsDelete` - Deletes a snapshot.
* `dataflowProjectsLocationsSnapshotsGet` - Gets information about a snapshot.
* `dataflowProjectsLocationsSnapshotsList` - Lists snapshots.
* `dataflowProjectsLocationsTemplatesCreate` - Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
* `dataflowProjectsLocationsTemplatesGet` - Get the template associated with a template.
* `dataflowProjectsLocationsTemplatesLaunch` - Launch a template.
* `dataflowProjectsLocationsWorkerMessages` - Send a worker_message to the service.
* `dataflowProjectsSnapshotsGet` - Gets information about a snapshot.
* `dataflowProjectsSnapshotsList` - Lists snapshots.
* `dataflowProjectsTemplatesCreate` - Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
* `dataflowProjectsTemplatesGet` - Get the template associated with a template.
* `dataflowProjectsTemplatesLaunch` - Launch a template.
* `dataflowProjectsWorkerMessages` - Send a worker_message to the service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
