# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsDeleteSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsDeleteSnapshotsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsDeleteSnapshotsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsDeleteSnapshotsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsDeleteSnapshotsSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsDeleteSnapshotsSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsDeleteSnapshotsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->location = 'corrupti';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->projectId = 'vel';
    $request->quotaUser = 'error';
    $request->snapshotId = 'deserunt';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new DataflowProjectsDeleteSnapshotsSecurity();
    $requestSecurity->option1 = new DataflowProjectsDeleteSnapshotsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsDeleteSnapshots($request, $requestSecurity);

    if ($response->deleteSnapshotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [dataflowProjectsDeleteSnapshots](docs/projects/README.md#dataflowprojectsdeletesnapshots) - Deletes a snapshot.
* [dataflowProjectsJobsAggregated](docs/projects/README.md#dataflowprojectsjobsaggregated) - List the jobs of a project across all regions.
* [dataflowProjectsJobsCreate](docs/projects/README.md#dataflowprojectsjobscreate) - Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
* [dataflowProjectsJobsDebugGetConfig](docs/projects/README.md#dataflowprojectsjobsdebuggetconfig) - Get encoded debug configuration for component. Not cacheable.
* [dataflowProjectsJobsDebugSendCapture](docs/projects/README.md#dataflowprojectsjobsdebugsendcapture) - Send encoded debug capture data for component.
* [dataflowProjectsJobsGet](docs/projects/README.md#dataflowprojectsjobsget) - Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
* [dataflowProjectsJobsGetMetrics](docs/projects/README.md#dataflowprojectsjobsgetmetrics) - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* [dataflowProjectsJobsList](docs/projects/README.md#dataflowprojectsjobslist) - List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
* [dataflowProjectsJobsMessagesList](docs/projects/README.md#dataflowprojectsjobsmessageslist) - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* [dataflowProjectsJobsSnapshot](docs/projects/README.md#dataflowprojectsjobssnapshot) - Snapshot the state of a streaming job.
* [dataflowProjectsJobsUpdate](docs/projects/README.md#dataflowprojectsjobsupdate) - Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
* [dataflowProjectsJobsWorkItemsLease](docs/projects/README.md#dataflowprojectsjobsworkitemslease) - Leases a dataflow WorkItem to run.
* [dataflowProjectsJobsWorkItemsReportStatus](docs/projects/README.md#dataflowprojectsjobsworkitemsreportstatus) - Reports the status of dataflow WorkItems leased by a worker.
* [dataflowProjectsLocationsFlexTemplatesLaunch](docs/projects/README.md#dataflowprojectslocationsflextemplateslaunch) - Launch a job with a FlexTemplate.
* [dataflowProjectsLocationsJobsCreate](docs/projects/README.md#dataflowprojectslocationsjobscreate) - Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
* [dataflowProjectsLocationsJobsDebugGetConfig](docs/projects/README.md#dataflowprojectslocationsjobsdebuggetconfig) - Get encoded debug configuration for component. Not cacheable.
* [dataflowProjectsLocationsJobsDebugSendCapture](docs/projects/README.md#dataflowprojectslocationsjobsdebugsendcapture) - Send encoded debug capture data for component.
* [dataflowProjectsLocationsJobsGet](docs/projects/README.md#dataflowprojectslocationsjobsget) - Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
* [dataflowProjectsLocationsJobsGetExecutionDetails](docs/projects/README.md#dataflowprojectslocationsjobsgetexecutiondetails) - Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
* [dataflowProjectsLocationsJobsGetMetrics](docs/projects/README.md#dataflowprojectslocationsjobsgetmetrics) - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* [dataflowProjectsLocationsJobsList](docs/projects/README.md#dataflowprojectslocationsjobslist) - List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
* [dataflowProjectsLocationsJobsMessagesList](docs/projects/README.md#dataflowprojectslocationsjobsmessageslist) - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* [dataflowProjectsLocationsJobsSnapshot](docs/projects/README.md#dataflowprojectslocationsjobssnapshot) - Snapshot the state of a streaming job.
* [dataflowProjectsLocationsJobsSnapshotsList](docs/projects/README.md#dataflowprojectslocationsjobssnapshotslist) - Lists snapshots.
* [dataflowProjectsLocationsJobsStagesGetExecutionDetails](docs/projects/README.md#dataflowprojectslocationsjobsstagesgetexecutiondetails) - Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
* [dataflowProjectsLocationsJobsUpdate](docs/projects/README.md#dataflowprojectslocationsjobsupdate) - Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
* [dataflowProjectsLocationsJobsWorkItemsLease](docs/projects/README.md#dataflowprojectslocationsjobsworkitemslease) - Leases a dataflow WorkItem to run.
* [dataflowProjectsLocationsJobsWorkItemsReportStatus](docs/projects/README.md#dataflowprojectslocationsjobsworkitemsreportstatus) - Reports the status of dataflow WorkItems leased by a worker.
* [dataflowProjectsLocationsSnapshotsDelete](docs/projects/README.md#dataflowprojectslocationssnapshotsdelete) - Deletes a snapshot.
* [dataflowProjectsLocationsSnapshotsGet](docs/projects/README.md#dataflowprojectslocationssnapshotsget) - Gets information about a snapshot.
* [dataflowProjectsLocationsSnapshotsList](docs/projects/README.md#dataflowprojectslocationssnapshotslist) - Lists snapshots.
* [dataflowProjectsLocationsTemplatesCreate](docs/projects/README.md#dataflowprojectslocationstemplatescreate) - Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
* [dataflowProjectsLocationsTemplatesGet](docs/projects/README.md#dataflowprojectslocationstemplatesget) - Get the template associated with a template.
* [dataflowProjectsLocationsTemplatesLaunch](docs/projects/README.md#dataflowprojectslocationstemplateslaunch) - Launch a template.
* [dataflowProjectsLocationsWorkerMessages](docs/projects/README.md#dataflowprojectslocationsworkermessages) - Send a worker_message to the service.
* [dataflowProjectsSnapshotsGet](docs/projects/README.md#dataflowprojectssnapshotsget) - Gets information about a snapshot.
* [dataflowProjectsSnapshotsList](docs/projects/README.md#dataflowprojectssnapshotslist) - Lists snapshots.
* [dataflowProjectsTemplatesCreate](docs/projects/README.md#dataflowprojectstemplatescreate) - Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
* [dataflowProjectsTemplatesGet](docs/projects/README.md#dataflowprojectstemplatesget) - Get the template associated with a template.
* [dataflowProjectsTemplatesLaunch](docs/projects/README.md#dataflowprojectstemplateslaunch) - Launch a template.
* [dataflowProjectsWorkerMessages](docs/projects/README.md#dataflowprojectsworkermessages) - Send a worker_message to the service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
