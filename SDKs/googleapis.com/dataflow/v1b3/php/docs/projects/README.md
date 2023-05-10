# projects

### Available Operations

* [dataflowProjectsDeleteSnapshots](#dataflowprojectsdeletesnapshots) - Deletes a snapshot.
* [dataflowProjectsJobsAggregated](#dataflowprojectsjobsaggregated) - List the jobs of a project across all regions.
* [dataflowProjectsJobsCreate](#dataflowprojectsjobscreate) - Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
* [dataflowProjectsJobsDebugGetConfig](#dataflowprojectsjobsdebuggetconfig) - Get encoded debug configuration for component. Not cacheable.
* [dataflowProjectsJobsDebugSendCapture](#dataflowprojectsjobsdebugsendcapture) - Send encoded debug capture data for component.
* [dataflowProjectsJobsGet](#dataflowprojectsjobsget) - Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
* [dataflowProjectsJobsGetMetrics](#dataflowprojectsjobsgetmetrics) - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* [dataflowProjectsJobsList](#dataflowprojectsjobslist) - List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
* [dataflowProjectsJobsMessagesList](#dataflowprojectsjobsmessageslist) - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* [dataflowProjectsJobsSnapshot](#dataflowprojectsjobssnapshot) - Snapshot the state of a streaming job.
* [dataflowProjectsJobsUpdate](#dataflowprojectsjobsupdate) - Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
* [dataflowProjectsJobsWorkItemsLease](#dataflowprojectsjobsworkitemslease) - Leases a dataflow WorkItem to run.
* [dataflowProjectsJobsWorkItemsReportStatus](#dataflowprojectsjobsworkitemsreportstatus) - Reports the status of dataflow WorkItems leased by a worker.
* [dataflowProjectsLocationsFlexTemplatesLaunch](#dataflowprojectslocationsflextemplateslaunch) - Launch a job with a FlexTemplate.
* [dataflowProjectsLocationsJobsCreate](#dataflowprojectslocationsjobscreate) - Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
* [dataflowProjectsLocationsJobsDebugGetConfig](#dataflowprojectslocationsjobsdebuggetconfig) - Get encoded debug configuration for component. Not cacheable.
* [dataflowProjectsLocationsJobsDebugSendCapture](#dataflowprojectslocationsjobsdebugsendcapture) - Send encoded debug capture data for component.
* [dataflowProjectsLocationsJobsGet](#dataflowprojectslocationsjobsget) - Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
* [dataflowProjectsLocationsJobsGetExecutionDetails](#dataflowprojectslocationsjobsgetexecutiondetails) - Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
* [dataflowProjectsLocationsJobsGetMetrics](#dataflowprojectslocationsjobsgetmetrics) - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* [dataflowProjectsLocationsJobsList](#dataflowprojectslocationsjobslist) - List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
* [dataflowProjectsLocationsJobsMessagesList](#dataflowprojectslocationsjobsmessageslist) - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* [dataflowProjectsLocationsJobsSnapshot](#dataflowprojectslocationsjobssnapshot) - Snapshot the state of a streaming job.
* [dataflowProjectsLocationsJobsSnapshotsList](#dataflowprojectslocationsjobssnapshotslist) - Lists snapshots.
* [dataflowProjectsLocationsJobsStagesGetExecutionDetails](#dataflowprojectslocationsjobsstagesgetexecutiondetails) - Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
* [dataflowProjectsLocationsJobsUpdate](#dataflowprojectslocationsjobsupdate) - Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
* [dataflowProjectsLocationsJobsWorkItemsLease](#dataflowprojectslocationsjobsworkitemslease) - Leases a dataflow WorkItem to run.
* [dataflowProjectsLocationsJobsWorkItemsReportStatus](#dataflowprojectslocationsjobsworkitemsreportstatus) - Reports the status of dataflow WorkItems leased by a worker.
* [dataflowProjectsLocationsSnapshotsDelete](#dataflowprojectslocationssnapshotsdelete) - Deletes a snapshot.
* [dataflowProjectsLocationsSnapshotsGet](#dataflowprojectslocationssnapshotsget) - Gets information about a snapshot.
* [dataflowProjectsLocationsSnapshotsList](#dataflowprojectslocationssnapshotslist) - Lists snapshots.
* [dataflowProjectsLocationsTemplatesCreate](#dataflowprojectslocationstemplatescreate) - Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
* [dataflowProjectsLocationsTemplatesGet](#dataflowprojectslocationstemplatesget) - Get the template associated with a template.
* [dataflowProjectsLocationsTemplatesLaunch](#dataflowprojectslocationstemplateslaunch) - Launch a template.
* [dataflowProjectsLocationsWorkerMessages](#dataflowprojectslocationsworkermessages) - Send a worker_message to the service.
* [dataflowProjectsSnapshotsGet](#dataflowprojectssnapshotsget) - Gets information about a snapshot.
* [dataflowProjectsSnapshotsList](#dataflowprojectssnapshotslist) - Lists snapshots.
* [dataflowProjectsTemplatesCreate](#dataflowprojectstemplatescreate) - Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
* [dataflowProjectsTemplatesGet](#dataflowprojectstemplatesget) - Get the template associated with a template.
* [dataflowProjectsTemplatesLaunch](#dataflowprojectstemplateslaunch) - Launch a template.
* [dataflowProjectsWorkerMessages](#dataflowprojectsworkermessages) - Send a worker_message to the service.

## dataflowProjectsDeleteSnapshots

Deletes a snapshot.

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->location = 'molestiae';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->projectId = 'placeat';
    $request->quotaUser = 'voluptatum';
    $request->snapshotId = 'iusto';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';

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

## dataflowProjectsJobsAggregated

List the jobs of a project across all regions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsAggregatedRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsAggregatedFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsAggregatedViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsAggregatedSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsAggregatedSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsAggregatedSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsAggregatedSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsAggregatedSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsJobsAggregatedRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'veritatis';
    $request->filter = DataflowProjectsJobsAggregatedFilterEnum::TERMINATED;
    $request->key = 'perferendis';
    $request->location = 'ipsam';
    $request->name = 'Timmy Satterfield';
    $request->oauthToken = 'at';
    $request->pageSize = 978619;
    $request->pageToken = 'molestiae';
    $request->prettyPrint = false;
    $request->projectId = 'quod';
    $request->quotaUser = 'quod';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'totam';
    $request->view = DataflowProjectsJobsAggregatedViewEnum::JOB_VIEW_DESCRIPTION;

    $requestSecurity = new DataflowProjectsJobsAggregatedSecurity();
    $requestSecurity->option1 = new DataflowProjectsJobsAggregatedSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsJobsAggregated($request, $requestSecurity);

    if ($response->listJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsJobsCreate

Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobInput;
use \OpenAPI\OpenAPI\Models\Shared\JobCurrentStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentInput;
use \OpenAPI\OpenAPI\Models\Shared\DebugOptions;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentFlexResourceSchedulingGoalEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPool;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingSettings;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingSettingsAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\Disk;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPoolDefaultPackageSetEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPoolIpConfigurationEnum;
use \OpenAPI\OpenAPI\Models\Shared\Package;
use \OpenAPI\OpenAPI\Models\Shared\SDKHarnessContainerImage;
use \OpenAPI\OpenAPI\Models\Shared\TaskRunnerSettings;
use \OpenAPI\OpenAPI\Models\Shared\WorkerSettings;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPoolTeardownPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobExecutionInfo;
use \OpenAPI\OpenAPI\Models\Shared\JobExecutionStageInfo;
use \OpenAPI\OpenAPI\Models\Shared\JobMetadata;
use \OpenAPI\OpenAPI\Models\Shared\BigTableIODetails;
use \OpenAPI\OpenAPI\Models\Shared\BigQueryIODetails;
use \OpenAPI\OpenAPI\Models\Shared\DatastoreIODetails;
use \OpenAPI\OpenAPI\Models\Shared\FileIODetails;
use \OpenAPI\OpenAPI\Models\Shared\PubSubIODetails;
use \OpenAPI\OpenAPI\Models\Shared\SDKVersion;
use \OpenAPI\OpenAPI\Models\Shared\SDKVersionSDKSupportStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SpannerIODetails;
use \OpenAPI\OpenAPI\Models\Shared\PipelineDescription;
use \OpenAPI\OpenAPI\Models\Shared\DisplayData;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionStageSummary;
use \OpenAPI\OpenAPI\Models\Shared\ComponentSource;
use \OpenAPI\OpenAPI\Models\Shared\ComponentTransform;
use \OpenAPI\OpenAPI\Models\Shared\StageSource;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionStageSummaryKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformSummary;
use \OpenAPI\OpenAPI\Models\Shared\TransformSummaryKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobRequestedStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeUpdatableParams;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionStageState;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionStageStateExecutionStageStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\Step;
use \OpenAPI\OpenAPI\Models\Shared\JobTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsCreateViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsCreateSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsCreateSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsJobsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->jobInput = new JobInput();
    $request->jobInput->clientRequestId = 'dicta';
    $request->jobInput->createTime = 'nam';
    $request->jobInput->createdFromSnapshotId = 'officia';
    $request->jobInput->currentState = JobCurrentStateEnum::JOB_STATE_DRAINING;
    $request->jobInput->currentStateTime = 'fugit';
    $request->jobInput->environment = new EnvironmentInput();
    $request->jobInput->environment->clusterManagerApiService = 'deleniti';
    $request->jobInput->environment->dataset = 'hic';
    $request->jobInput->environment->debugOptions = new DebugOptions();
    $request->jobInput->environment->debugOptions->enableHotKeyLogging = false;
    $request->jobInput->environment->experiments = [
        'totam',
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->jobInput->environment->flexResourceSchedulingGoal = EnvironmentFlexResourceSchedulingGoalEnum::FLEXRS_UNSPECIFIED;
    $request->jobInput->environment->internalExperiments = [
        'impedit' => 'cum',
    ];
    $request->jobInput->environment->sdkPipelineOptions = [
        'ipsum' => 'excepturi',
        'aspernatur' => 'perferendis',
    ];
    $request->jobInput->environment->serviceAccountEmail = 'ad';
    $request->jobInput->environment->serviceKmsKeyName = 'natus';
    $request->jobInput->environment->serviceOptions = [
        'iste',
    ];
    $request->jobInput->environment->tempStoragePrefix = 'dolor';
    $request->jobInput->environment->userAgent = [
        'laboriosam' => 'hic',
        'saepe' => 'fuga',
        'in' => 'corporis',
    ];
    $request->jobInput->environment->version = [
        'iure' => 'saepe',
        'quidem' => 'architecto',
        'ipsa' => 'reiciendis',
    ];
    $request->jobInput->environment->workerPools = [
        new WorkerPool(),
        new WorkerPool(),
        new WorkerPool(),
    ];
    $request->jobInput->environment->workerRegion = 'mollitia';
    $request->jobInput->environment->workerZone = 'laborum';
    $request->jobInput->executionInfo = new JobExecutionInfo();
    $request->jobInput->executionInfo->stages = [
        'dolorem' => new JobExecutionStageInfo(),
    ];
    $request->jobInput->id = '52c59559-07af-4f1a-ba2f-a9467739251a';
    $request->jobInput->jobMetadata = new JobMetadata();
    $request->jobInput->jobMetadata->bigTableDetails = [
        new BigTableIODetails(),
        new BigTableIODetails(),
        new BigTableIODetails(),
    ];
    $request->jobInput->jobMetadata->bigqueryDetails = [
        new BigQueryIODetails(),
        new BigQueryIODetails(),
    ];
    $request->jobInput->jobMetadata->datastoreDetails = [
        new DatastoreIODetails(),
    ];
    $request->jobInput->jobMetadata->fileDetails = [
        new FileIODetails(),
        new FileIODetails(),
        new FileIODetails(),
        new FileIODetails(),
    ];
    $request->jobInput->jobMetadata->pubsubDetails = [
        new PubSubIODetails(),
    ];
    $request->jobInput->jobMetadata->sdkVersion = new SDKVersion();
    $request->jobInput->jobMetadata->sdkVersion->sdkSupportStatus = SDKVersionSDKSupportStatusEnum::UNSUPPORTED;
    $request->jobInput->jobMetadata->sdkVersion->version = 'ipsam';
    $request->jobInput->jobMetadata->sdkVersion->versionDisplayName = 'id';
    $request->jobInput->jobMetadata->spannerDetails = [
        new SpannerIODetails(),
        new SpannerIODetails(),
        new SpannerIODetails(),
        new SpannerIODetails(),
    ];
    $request->jobInput->jobMetadata->userDisplayProperties = [
        'quasi' => 'error',
    ];
    $request->jobInput->labels = [
        'laborum' => 'quasi',
        'reiciendis' => 'voluptatibus',
        'vero' => 'nihil',
        'praesentium' => 'voluptatibus',
    ];
    $request->jobInput->location = 'ipsa';
    $request->jobInput->name = 'Mr. Jared Ritchie';
    $request->jobInput->pipelineDescription = new PipelineDescription();
    $request->jobInput->pipelineDescription->displayData = [
        new DisplayData(),
        new DisplayData(),
    ];
    $request->jobInput->pipelineDescription->executionPipelineStage = [
        new ExecutionStageSummary(),
        new ExecutionStageSummary(),
        new ExecutionStageSummary(),
        new ExecutionStageSummary(),
    ];
    $request->jobInput->pipelineDescription->originalPipelineTransform = [
        new TransformSummary(),
    ];
    $request->jobInput->pipelineDescription->stepNamesHash = 'corporis';
    $request->jobInput->projectId = 'dolore';
    $request->jobInput->replaceJobId = 'iusto';
    $request->jobInput->replacedByJobId = 'dicta';
    $request->jobInput->requestedState = JobRequestedStateEnum::JOB_STATE_DRAINED;
    $request->jobInput->runtimeUpdatableParams = new RuntimeUpdatableParams();
    $request->jobInput->runtimeUpdatableParams->maxNumWorkers = 317983;
    $request->jobInput->runtimeUpdatableParams->minNumWorkers = 880476;
    $request->jobInput->satisfiesPzs = false;
    $request->jobInput->stageStates = [
        new ExecutionStageState(),
        new ExecutionStageState(),
    ];
    $request->jobInput->startTime = 'repudiandae';
    $request->jobInput->steps = [
        new Step(),
    ];
    $request->jobInput->stepsLocation = 'ipsum';
    $request->jobInput->tempFiles = [
        'molestias',
        'excepturi',
        'pariatur',
    ];
    $request->jobInput->transformNameMapping = [
        'praesentium' => 'rem',
        'voluptates' => 'quasi',
    ];
    $request->jobInput->type = JobTypeEnum::JOB_TYPE_STREAMING;
    $request->accessToken = 'sint';
    $request->alt = AltEnum::JSON;
    $request->callback = 'itaque';
    $request->fields = 'incidunt';
    $request->key = 'enim';
    $request->location = 'consequatur';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->projectId = 'quibusdam';
    $request->quotaUser = 'explicabo';
    $request->replaceJobId = 'deserunt';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'quibusdam';
    $request->view = DataflowProjectsJobsCreateViewEnum::JOB_VIEW_SUMMARY;

    $requestSecurity = new DataflowProjectsJobsCreateSecurity();
    $requestSecurity->option1 = new DataflowProjectsJobsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsJobsCreate($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsJobsDebugGetConfig

Get encoded debug configuration for component. Not cacheable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsDebugGetConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetDebugConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsDebugGetConfigSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsDebugGetConfigSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsDebugGetConfigSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsDebugGetConfigSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsDebugGetConfigSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsJobsDebugGetConfigRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->getDebugConfigRequest = new GetDebugConfigRequest();
    $request->getDebugConfigRequest->componentId = 'qui';
    $request->getDebugConfigRequest->location = 'aliquid';
    $request->getDebugConfigRequest->workerId = 'cupiditate';
    $request->accessToken = 'quos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magni';
    $request->fields = 'assumenda';
    $request->jobId = 'ipsam';
    $request->key = 'alias';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->projectId = 'dolorum';
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new DataflowProjectsJobsDebugGetConfigSecurity();
    $requestSecurity->option1 = new DataflowProjectsJobsDebugGetConfigSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsJobsDebugGetConfig($request, $requestSecurity);

    if ($response->getDebugConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsJobsDebugSendCapture

Send encoded debug capture data for component.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsDebugSendCaptureRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SendDebugCaptureRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendDebugCaptureRequestDataFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsDebugSendCaptureSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsDebugSendCaptureSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsDebugSendCaptureSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsDebugSendCaptureSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsDebugSendCaptureSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsJobsDebugSendCaptureRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sendDebugCaptureRequest = new SendDebugCaptureRequest();
    $request->sendDebugCaptureRequest->componentId = 'labore';
    $request->sendDebugCaptureRequest->data = 'delectus';
    $request->sendDebugCaptureRequest->dataFormat = SendDebugCaptureRequestDataFormatEnum::JSON;
    $request->sendDebugCaptureRequest->location = 'non';
    $request->sendDebugCaptureRequest->workerId = 'eligendi';
    $request->accessToken = 'sint';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'necessitatibus';
    $request->jobId = 'sint';
    $request->key = 'officia';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->projectId = 'debitis';
    $request->quotaUser = 'a';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'in';

    $requestSecurity = new DataflowProjectsJobsDebugSendCaptureSecurity();
    $requestSecurity->option1 = new DataflowProjectsJobsDebugSendCaptureSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsJobsDebugSendCapture($request, $requestSecurity);

    if ($response->sendDebugCaptureResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsJobsGet

Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsJobsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'rerum';
    $request->fields = 'dicta';
    $request->jobId = 'magnam';
    $request->key = 'cumque';
    $request->location = 'facere';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->projectId = 'aliquid';
    $request->quotaUser = 'laborum';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'non';
    $request->view = DataflowProjectsJobsGetViewEnum::JOB_VIEW_ALL;

    $requestSecurity = new DataflowProjectsJobsGetSecurity();
    $requestSecurity->option1 = new DataflowProjectsJobsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsJobsGet($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsJobsGetMetrics

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsGetMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsGetMetricsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsGetMetricsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsGetMetricsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsGetMetricsSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsGetMetricsSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsJobsGetMetricsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'provident';
    $request->jobId = 'nam';
    $request->key = 'id';
    $request->location = 'blanditiis';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->projectId = 'sapiente';
    $request->quotaUser = 'amet';
    $request->startTime = 'deserunt';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'vel';

    $requestSecurity = new DataflowProjectsJobsGetMetricsSecurity();
    $requestSecurity->option1 = new DataflowProjectsJobsGetMetricsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsJobsGetMetrics($request, $requestSecurity);

    if ($response->jobMetrics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsJobsList

List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsListFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsJobsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perferendis';
    $request->fields = 'nihil';
    $request->filter = DataflowProjectsJobsListFilterEnum::ALL;
    $request->key = 'distinctio';
    $request->location = 'id';
    $request->name = 'Jamie Hoppe';
    $request->oauthToken = 'eum';
    $request->pageSize = 878453;
    $request->pageToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->projectId = 'architecto';
    $request->quotaUser = 'magnam';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'excepturi';
    $request->view = DataflowProjectsJobsListViewEnum::JOB_VIEW_SUMMARY;

    $requestSecurity = new DataflowProjectsJobsListSecurity();
    $requestSecurity->option1 = new DataflowProjectsJobsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsJobsList($request, $requestSecurity);

    if ($response->listJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsJobsMessagesList

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsMessagesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsMessagesListMinimumImportanceEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsMessagesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsMessagesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsMessagesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsMessagesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsMessagesListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsJobsMessagesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->endTime = 'mollitia';
    $request->fields = 'reiciendis';
    $request->jobId = 'mollitia';
    $request->key = 'ad';
    $request->location = 'eum';
    $request->minimumImportance = DataflowProjectsJobsMessagesListMinimumImportanceEnum::JOB_MESSAGE_DEBUG;
    $request->oauthToken = 'necessitatibus';
    $request->pageSize = 141264;
    $request->pageToken = 'nemo';
    $request->prettyPrint = false;
    $request->projectId = 'quasi';
    $request->quotaUser = 'iure';
    $request->startTime = 'doloribus';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'eius';

    $requestSecurity = new DataflowProjectsJobsMessagesListSecurity();
    $requestSecurity->option1 = new DataflowProjectsJobsMessagesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsJobsMessagesList($request, $requestSecurity);

    if ($response->listJobMessagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsJobsSnapshot

Snapshot the state of a streaming job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SnapshotJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsSnapshotSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsSnapshotSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsSnapshotSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsSnapshotSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsSnapshotSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsJobsSnapshotRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->snapshotJobRequest = new SnapshotJobRequest();
    $request->snapshotJobRequest->description = 'deleniti';
    $request->snapshotJobRequest->location = 'facilis';
    $request->snapshotJobRequest->snapshotSources = false;
    $request->snapshotJobRequest->ttl = 'in';
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repudiandae';
    $request->fields = 'ullam';
    $request->jobId = 'expedita';
    $request->key = 'nihil';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->projectId = 'quibusdam';
    $request->quotaUser = 'sed';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new DataflowProjectsJobsSnapshotSecurity();
    $requestSecurity->option1 = new DataflowProjectsJobsSnapshotSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsJobsSnapshot($request, $requestSecurity);

    if ($response->snapshot !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsJobsUpdate

Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobInput;
use \OpenAPI\OpenAPI\Models\Shared\JobCurrentStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentInput;
use \OpenAPI\OpenAPI\Models\Shared\DebugOptions;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentFlexResourceSchedulingGoalEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPool;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingSettings;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingSettingsAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\Disk;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPoolDefaultPackageSetEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPoolIpConfigurationEnum;
use \OpenAPI\OpenAPI\Models\Shared\Package;
use \OpenAPI\OpenAPI\Models\Shared\SDKHarnessContainerImage;
use \OpenAPI\OpenAPI\Models\Shared\TaskRunnerSettings;
use \OpenAPI\OpenAPI\Models\Shared\WorkerSettings;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPoolTeardownPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobExecutionInfo;
use \OpenAPI\OpenAPI\Models\Shared\JobExecutionStageInfo;
use \OpenAPI\OpenAPI\Models\Shared\JobMetadata;
use \OpenAPI\OpenAPI\Models\Shared\BigTableIODetails;
use \OpenAPI\OpenAPI\Models\Shared\BigQueryIODetails;
use \OpenAPI\OpenAPI\Models\Shared\DatastoreIODetails;
use \OpenAPI\OpenAPI\Models\Shared\FileIODetails;
use \OpenAPI\OpenAPI\Models\Shared\PubSubIODetails;
use \OpenAPI\OpenAPI\Models\Shared\SDKVersion;
use \OpenAPI\OpenAPI\Models\Shared\SDKVersionSDKSupportStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SpannerIODetails;
use \OpenAPI\OpenAPI\Models\Shared\PipelineDescription;
use \OpenAPI\OpenAPI\Models\Shared\DisplayData;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionStageSummary;
use \OpenAPI\OpenAPI\Models\Shared\ComponentSource;
use \OpenAPI\OpenAPI\Models\Shared\ComponentTransform;
use \OpenAPI\OpenAPI\Models\Shared\StageSource;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionStageSummaryKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformSummary;
use \OpenAPI\OpenAPI\Models\Shared\TransformSummaryKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobRequestedStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeUpdatableParams;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionStageState;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionStageStateExecutionStageStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\Step;
use \OpenAPI\OpenAPI\Models\Shared\JobTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsUpdateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsUpdateSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsUpdateSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsJobsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->jobInput = new JobInput();
    $request->jobInput->clientRequestId = 'consequuntur';
    $request->jobInput->createTime = 'praesentium';
    $request->jobInput->createdFromSnapshotId = 'natus';
    $request->jobInput->currentState = JobCurrentStateEnum::JOB_STATE_RUNNING;
    $request->jobInput->currentStateTime = 'sunt';
    $request->jobInput->environment = new EnvironmentInput();
    $request->jobInput->environment->clusterManagerApiService = 'quo';
    $request->jobInput->environment->dataset = 'illum';
    $request->jobInput->environment->debugOptions = new DebugOptions();
    $request->jobInput->environment->debugOptions->enableHotKeyLogging = false;
    $request->jobInput->environment->experiments = [
        'maxime',
        'ea',
        'excepturi',
        'odit',
    ];
    $request->jobInput->environment->flexResourceSchedulingGoal = EnvironmentFlexResourceSchedulingGoalEnum::FLEXRS_SPEED_OPTIMIZED;
    $request->jobInput->environment->internalExperiments = [
        'ab' => 'maiores',
    ];
    $request->jobInput->environment->sdkPipelineOptions = [
        'ipsam' => 'voluptate',
        'autem' => 'nam',
        'eaque' => 'pariatur',
    ];
    $request->jobInput->environment->serviceAccountEmail = 'nemo';
    $request->jobInput->environment->serviceKmsKeyName = 'voluptatibus';
    $request->jobInput->environment->serviceOptions = [
        'fugiat',
    ];
    $request->jobInput->environment->tempStoragePrefix = 'amet';
    $request->jobInput->environment->userAgent = [
        'cumque' => 'corporis',
    ];
    $request->jobInput->environment->version = [
        'libero' => 'nobis',
        'dolores' => 'quis',
        'totam' => 'dignissimos',
        'eaque' => 'quis',
    ];
    $request->jobInput->environment->workerPools = [
        new WorkerPool(),
    ];
    $request->jobInput->environment->workerRegion = 'eos';
    $request->jobInput->environment->workerZone = 'perferendis';
    $request->jobInput->executionInfo = new JobExecutionInfo();
    $request->jobInput->executionInfo->stages = [
        'minus' => new JobExecutionStageInfo(),
    ];
    $request->jobInput->id = '73d5fe9b-90c2-4890-9b3f-e49a8d9cbf48';
    $request->jobInput->jobMetadata = new JobMetadata();
    $request->jobInput->jobMetadata->bigTableDetails = [
        new BigTableIODetails(),
        new BigTableIODetails(),
    ];
    $request->jobInput->jobMetadata->bigqueryDetails = [
        new BigQueryIODetails(),
    ];
    $request->jobInput->jobMetadata->datastoreDetails = [
        new DatastoreIODetails(),
    ];
    $request->jobInput->jobMetadata->fileDetails = [
        new FileIODetails(),
    ];
    $request->jobInput->jobMetadata->pubsubDetails = [
        new PubSubIODetails(),
    ];
    $request->jobInput->jobMetadata->sdkVersion = new SDKVersion();
    $request->jobInput->jobMetadata->sdkVersion->sdkSupportStatus = SDKVersionSDKSupportStatusEnum::SUPPORTED;
    $request->jobInput->jobMetadata->sdkVersion->version = 'hic';
    $request->jobInput->jobMetadata->sdkVersion->versionDisplayName = 'excepturi';
    $request->jobInput->jobMetadata->spannerDetails = [
        new SpannerIODetails(),
        new SpannerIODetails(),
        new SpannerIODetails(),
    ];
    $request->jobInput->jobMetadata->userDisplayProperties = [
        'dignissimos' => 'reiciendis',
        'amet' => 'dolorum',
    ];
    $request->jobInput->labels = [
        'veritatis' => 'ipsa',
        'ipsa' => 'iure',
    ];
    $request->jobInput->location = 'odio';
    $request->jobInput->name = 'Sophia Predovic';
    $request->jobInput->pipelineDescription = new PipelineDescription();
    $request->jobInput->pipelineDescription->displayData = [
        new DisplayData(),
        new DisplayData(),
        new DisplayData(),
    ];
    $request->jobInput->pipelineDescription->executionPipelineStage = [
        new ExecutionStageSummary(),
    ];
    $request->jobInput->pipelineDescription->originalPipelineTransform = [
        new TransformSummary(),
        new TransformSummary(),
        new TransformSummary(),
    ];
    $request->jobInput->pipelineDescription->stepNamesHash = 'sit';
    $request->jobInput->projectId = 'fugiat';
    $request->jobInput->replaceJobId = 'ab';
    $request->jobInput->replacedByJobId = 'soluta';
    $request->jobInput->requestedState = JobRequestedStateEnum::JOB_STATE_DRAINED;
    $request->jobInput->runtimeUpdatableParams = new RuntimeUpdatableParams();
    $request->jobInput->runtimeUpdatableParams->maxNumWorkers = 478596;
    $request->jobInput->runtimeUpdatableParams->minNumWorkers = 453697;
    $request->jobInput->satisfiesPzs = false;
    $request->jobInput->stageStates = [
        new ExecutionStageState(),
        new ExecutionStageState(),
        new ExecutionStageState(),
    ];
    $request->jobInput->startTime = 'deleniti';
    $request->jobInput->steps = [
        new Step(),
        new Step(),
        new Step(),
    ];
    $request->jobInput->stepsLocation = 'necessitatibus';
    $request->jobInput->tempFiles = [
        'asperiores',
        'nihil',
        'ipsum',
    ];
    $request->jobInput->transformNameMapping = [
        'id' => 'saepe',
        'eius' => 'aspernatur',
    ];
    $request->jobInput->type = JobTypeEnum::JOB_TYPE_UNKNOWN;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->fields = 'ad';
    $request->jobId = 'saepe';
    $request->key = 'suscipit';
    $request->location = 'deserunt';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->projectId = 'minima';
    $request->quotaUser = 'repellendus';
    $request->updateMask = 'totam';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new DataflowProjectsJobsUpdateSecurity();
    $requestSecurity->option1 = new DataflowProjectsJobsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsJobsUpdate($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsJobsWorkItemsLease

Leases a dataflow WorkItem to run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsWorkItemsLeaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LeaseWorkItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsWorkItemsLeaseSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsWorkItemsLeaseSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsWorkItemsLeaseSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsWorkItemsLeaseSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsWorkItemsLeaseSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsJobsWorkItemsLeaseRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->leaseWorkItemRequest = new LeaseWorkItemRequest();
    $request->leaseWorkItemRequest->currentWorkerTime = 'quaerat';
    $request->leaseWorkItemRequest->location = 'tempora';
    $request->leaseWorkItemRequest->requestedLeaseDuration = 'vel';
    $request->leaseWorkItemRequest->unifiedWorkerRequest = [
        'officiis' => 'qui',
        'dolorum' => 'a',
        'esse' => 'harum',
        'iusto' => 'ipsum',
    ];
    $request->leaseWorkItemRequest->workItemTypes = [
        'tenetur',
        'amet',
        'tempore',
        'accusamus',
    ];
    $request->leaseWorkItemRequest->workerCapabilities = [
        'enim',
        'dolorem',
    ];
    $request->leaseWorkItemRequest->workerId = 'sapiente';
    $request->accessToken = 'totam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sit';
    $request->fields = 'expedita';
    $request->jobId = 'neque';
    $request->key = 'sed';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->projectId = 'libero';
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'quam';

    $requestSecurity = new DataflowProjectsJobsWorkItemsLeaseSecurity();
    $requestSecurity->option1 = new DataflowProjectsJobsWorkItemsLeaseSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsJobsWorkItemsLease($request, $requestSecurity);

    if ($response->leaseWorkItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsJobsWorkItemsReportStatus

Reports the status of dataflow WorkItems leased by a worker.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsWorkItemsReportStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportWorkItemStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkItemStatus;
use \OpenAPI\OpenAPI\Models\Shared\CounterUpdate;
use \OpenAPI\OpenAPI\Models\Shared\DistributionUpdate;
use \OpenAPI\OpenAPI\Models\Shared\SplitInt64;
use \OpenAPI\OpenAPI\Models\Shared\Histogram;
use \OpenAPI\OpenAPI\Models\Shared\FloatingPointList;
use \OpenAPI\OpenAPI\Models\Shared\FloatingPointMean;
use \OpenAPI\OpenAPI\Models\Shared\IntegerGauge;
use \OpenAPI\OpenAPI\Models\Shared\IntegerList;
use \OpenAPI\OpenAPI\Models\Shared\IntegerMean;
use \OpenAPI\OpenAPI\Models\Shared\NameAndKind;
use \OpenAPI\OpenAPI\Models\Shared\NameAndKindKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\StringList;
use \OpenAPI\OpenAPI\Models\Shared\CounterStructuredNameAndMetadata;
use \OpenAPI\OpenAPI\Models\Shared\CounterMetadata;
use \OpenAPI\OpenAPI\Models\Shared\CounterMetadataKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\CounterMetadataStandardUnitsEnum;
use \OpenAPI\OpenAPI\Models\Shared\CounterStructuredName;
use \OpenAPI\OpenAPI\Models\Shared\CounterStructuredNameOriginEnum;
use \OpenAPI\OpenAPI\Models\Shared\CounterStructuredNamePortionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DynamicSourceSplit;
use \OpenAPI\OpenAPI\Models\Shared\DerivedSource;
use \OpenAPI\OpenAPI\Models\Shared\DerivedSourceDerivationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\SourceMetadata;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\MetricUpdate;
use \OpenAPI\OpenAPI\Models\Shared\MetricStructuredName;
use \OpenAPI\OpenAPI\Models\Shared\ApproximateProgress;
use \OpenAPI\OpenAPI\Models\Shared\Position;
use \OpenAPI\OpenAPI\Models\Shared\ConcatPosition;
use \OpenAPI\OpenAPI\Models\Shared\ApproximateReportedProgress;
use \OpenAPI\OpenAPI\Models\Shared\ReportedParallelism;
use \OpenAPI\OpenAPI\Models\Shared\SourceFork;
use \OpenAPI\OpenAPI\Models\Shared\SourceSplitShard;
use \OpenAPI\OpenAPI\Models\Shared\SourceSplitShardDerivationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceOperationResponse;
use \OpenAPI\OpenAPI\Models\Shared\SourceGetMetadataResponse;
use \OpenAPI\OpenAPI\Models\Shared\SourceSplitResponse;
use \OpenAPI\OpenAPI\Models\Shared\SourceSplitResponseOutcomeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsWorkItemsReportStatusSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsWorkItemsReportStatusSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsWorkItemsReportStatusSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsWorkItemsReportStatusSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsJobsWorkItemsReportStatusSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsJobsWorkItemsReportStatusRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->reportWorkItemStatusRequest = new ReportWorkItemStatusRequest();
    $request->reportWorkItemStatusRequest->currentWorkerTime = 'incidunt';
    $request->reportWorkItemStatusRequest->location = 'qui';
    $request->reportWorkItemStatusRequest->unifiedWorkerRequest = [
        'maxime' => 'pariatur',
        'soluta' => 'dicta',
        'laborum' => 'totam',
    ];
    $request->reportWorkItemStatusRequest->workItemStatuses = [
        new WorkItemStatus(),
        new WorkItemStatus(),
    ];
    $request->reportWorkItemStatusRequest->workerId = 'aspernatur';
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facilis';
    $request->fields = 'aliquid';
    $request->jobId = 'quam';
    $request->key = 'molestias';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->projectId = 'qui';
    $request->quotaUser = 'neque';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'magni';

    $requestSecurity = new DataflowProjectsJobsWorkItemsReportStatusSecurity();
    $requestSecurity->option1 = new DataflowProjectsJobsWorkItemsReportStatusSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsJobsWorkItemsReportStatus($request, $requestSecurity);

    if ($response->reportWorkItemStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsLocationsFlexTemplatesLaunch

Launch a job with a FlexTemplate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsFlexTemplatesLaunchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LaunchFlexTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\LaunchFlexTemplateParameter;
use \OpenAPI\OpenAPI\Models\Shared\ContainerSpec;
use \OpenAPI\OpenAPI\Models\Shared\FlexTemplateRuntimeEnvironment;
use \OpenAPI\OpenAPI\Models\Shared\FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\FlexTemplateRuntimeEnvironmentFlexrsGoalEnum;
use \OpenAPI\OpenAPI\Models\Shared\FlexTemplateRuntimeEnvironmentIpConfigurationEnum;
use \OpenAPI\OpenAPI\Models\Shared\TemplateMetadata;
use \OpenAPI\OpenAPI\Models\Shared\ParameterMetadata;
use \OpenAPI\OpenAPI\Models\Shared\ParameterMetadataParamTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SDKInfo;
use \OpenAPI\OpenAPI\Models\Shared\SDKInfoLanguageEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsFlexTemplatesLaunchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsLocationsFlexTemplatesLaunchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->launchFlexTemplateRequest = new LaunchFlexTemplateRequest();
    $request->launchFlexTemplateRequest->launchParameter = new LaunchFlexTemplateParameter();
    $request->launchFlexTemplateRequest->launchParameter->containerSpec = new ContainerSpec();
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment = new FlexTemplateRuntimeEnvironment();
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->additionalExperiments = [
        'ullam',
    ];
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->additionalUserLabels = [
        'hic' => 'voluptatem',
        'cumque' => 'soluta',
        'nobis' => 'et',
    ];
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->autoscalingAlgorithm = FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum::AUTOSCALING_ALGORITHM_BASIC;
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->diskSizeGb = 217450;
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->dumpHeapOnOom = false;
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->enableLauncherVmSerialPortLogging = false;
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->enableStreamingEngine = false;
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->flexrsGoal = FlexTemplateRuntimeEnvironmentFlexrsGoalEnum::FLEXRS_UNSPECIFIED;
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->ipConfiguration = FlexTemplateRuntimeEnvironmentIpConfigurationEnum::WORKER_IP_PRIVATE;
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->kmsKeyName = 'quos';
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->launcherMachineType = 'tempore';
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->machineType = 'cupiditate';
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->maxWorkers = 45614;
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->network = 'delectus';
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->numWorkers = 209157;
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->saveHeapDumpsToGcsPath = 'dolore';
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->sdkContainerImage = 'labore';
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->serviceAccountEmail = 'adipisci';
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->stagingLocation = 'dolorum';
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->subnetwork = 'architecto';
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->tempLocation = 'quae';
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->workerRegion = 'aut';
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->workerZone = 'quas';
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->defaultEnvironment->zone = 'itaque';
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->image = 'consequatur';
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->imageRepositoryCertPath = 'est';
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->imageRepositoryPasswordSecretId = 'repellendus';
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->imageRepositoryUsernameSecretId = 'porro';
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->metadata = new TemplateMetadata();
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->metadata->description = 'doloribus';
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->metadata->name = 'Olivia McGlynn IV';
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->metadata->parameters = [
        new ParameterMetadata(),
        new ParameterMetadata(),
    ];
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->sdkInfo = new SDKInfo();
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->sdkInfo->language = SDKInfoLanguageEnum::PYTHON;
    $request->launchFlexTemplateRequest->launchParameter->containerSpec->sdkInfo->version = 'voluptatibus';
    $request->launchFlexTemplateRequest->launchParameter->containerSpecGcsPath = 'quisquam';
    $request->launchFlexTemplateRequest->launchParameter->environment = new FlexTemplateRuntimeEnvironment();
    $request->launchFlexTemplateRequest->launchParameter->environment->additionalExperiments = [
        'omnis',
        'quis',
        'ipsum',
        'delectus',
    ];
    $request->launchFlexTemplateRequest->launchParameter->environment->additionalUserLabels = [
        'consectetur' => 'vero',
        'tenetur' => 'dignissimos',
    ];
    $request->launchFlexTemplateRequest->launchParameter->environment->autoscalingAlgorithm = FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum::AUTOSCALING_ALGORITHM_BASIC;
    $request->launchFlexTemplateRequest->launchParameter->environment->diskSizeGb = 715561;
    $request->launchFlexTemplateRequest->launchParameter->environment->dumpHeapOnOom = false;
    $request->launchFlexTemplateRequest->launchParameter->environment->enableLauncherVmSerialPortLogging = false;
    $request->launchFlexTemplateRequest->launchParameter->environment->enableStreamingEngine = false;
    $request->launchFlexTemplateRequest->launchParameter->environment->flexrsGoal = FlexTemplateRuntimeEnvironmentFlexrsGoalEnum::FLEXRS_COST_OPTIMIZED;
    $request->launchFlexTemplateRequest->launchParameter->environment->ipConfiguration = FlexTemplateRuntimeEnvironmentIpConfigurationEnum::WORKER_IP_PUBLIC;
    $request->launchFlexTemplateRequest->launchParameter->environment->kmsKeyName = 'similique';
    $request->launchFlexTemplateRequest->launchParameter->environment->launcherMachineType = 'facilis';
    $request->launchFlexTemplateRequest->launchParameter->environment->machineType = 'vero';
    $request->launchFlexTemplateRequest->launchParameter->environment->maxWorkers = 498140;
    $request->launchFlexTemplateRequest->launchParameter->environment->network = 'dolore';
    $request->launchFlexTemplateRequest->launchParameter->environment->numWorkers = 844550;
    $request->launchFlexTemplateRequest->launchParameter->environment->saveHeapDumpsToGcsPath = 'illum';
    $request->launchFlexTemplateRequest->launchParameter->environment->sdkContainerImage = 'sequi';
    $request->launchFlexTemplateRequest->launchParameter->environment->serviceAccountEmail = 'natus';
    $request->launchFlexTemplateRequest->launchParameter->environment->stagingLocation = 'impedit';
    $request->launchFlexTemplateRequest->launchParameter->environment->subnetwork = 'aut';
    $request->launchFlexTemplateRequest->launchParameter->environment->tempLocation = 'voluptatibus';
    $request->launchFlexTemplateRequest->launchParameter->environment->workerRegion = 'exercitationem';
    $request->launchFlexTemplateRequest->launchParameter->environment->workerZone = 'nulla';
    $request->launchFlexTemplateRequest->launchParameter->environment->zone = 'fugit';
    $request->launchFlexTemplateRequest->launchParameter->jobName = 'porro';
    $request->launchFlexTemplateRequest->launchParameter->launchOptions = [
        'doloribus' => 'iusto',
        'eligendi' => 'ducimus',
        'alias' => 'officia',
        'tempora' => 'ipsam',
    ];
    $request->launchFlexTemplateRequest->launchParameter->parameters = [
        'aspernatur' => 'vel',
        'possimus' => 'magnam',
    ];
    $request->launchFlexTemplateRequest->launchParameter->transformNameMappings = [
        'ex' => 'laudantium',
    ];
    $request->launchFlexTemplateRequest->launchParameter->update = false;
    $request->launchFlexTemplateRequest->validateOnly = false;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'quasi';
    $request->key = 'ex';
    $request->location = 'nulla';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->projectId = 'voluptatibus';
    $request->quotaUser = 'nostrum';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'quisquam';

    $requestSecurity = new DataflowProjectsLocationsFlexTemplatesLaunchSecurity();
    $requestSecurity->option1 = new DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsLocationsFlexTemplatesLaunch($request, $requestSecurity);

    if ($response->launchFlexTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsLocationsJobsCreate

Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobInput;
use \OpenAPI\OpenAPI\Models\Shared\JobCurrentStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentInput;
use \OpenAPI\OpenAPI\Models\Shared\DebugOptions;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentFlexResourceSchedulingGoalEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPool;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingSettings;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingSettingsAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\Disk;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPoolDefaultPackageSetEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPoolIpConfigurationEnum;
use \OpenAPI\OpenAPI\Models\Shared\Package;
use \OpenAPI\OpenAPI\Models\Shared\SDKHarnessContainerImage;
use \OpenAPI\OpenAPI\Models\Shared\TaskRunnerSettings;
use \OpenAPI\OpenAPI\Models\Shared\WorkerSettings;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPoolTeardownPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobExecutionInfo;
use \OpenAPI\OpenAPI\Models\Shared\JobExecutionStageInfo;
use \OpenAPI\OpenAPI\Models\Shared\JobMetadata;
use \OpenAPI\OpenAPI\Models\Shared\BigTableIODetails;
use \OpenAPI\OpenAPI\Models\Shared\BigQueryIODetails;
use \OpenAPI\OpenAPI\Models\Shared\DatastoreIODetails;
use \OpenAPI\OpenAPI\Models\Shared\FileIODetails;
use \OpenAPI\OpenAPI\Models\Shared\PubSubIODetails;
use \OpenAPI\OpenAPI\Models\Shared\SDKVersion;
use \OpenAPI\OpenAPI\Models\Shared\SDKVersionSDKSupportStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SpannerIODetails;
use \OpenAPI\OpenAPI\Models\Shared\PipelineDescription;
use \OpenAPI\OpenAPI\Models\Shared\DisplayData;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionStageSummary;
use \OpenAPI\OpenAPI\Models\Shared\ComponentSource;
use \OpenAPI\OpenAPI\Models\Shared\ComponentTransform;
use \OpenAPI\OpenAPI\Models\Shared\StageSource;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionStageSummaryKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformSummary;
use \OpenAPI\OpenAPI\Models\Shared\TransformSummaryKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobRequestedStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeUpdatableParams;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionStageState;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionStageStateExecutionStageStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\Step;
use \OpenAPI\OpenAPI\Models\Shared\JobTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsCreateViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsCreateSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsCreateSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsLocationsJobsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->jobInput = new JobInput();
    $request->jobInput->clientRequestId = 'ea';
    $request->jobInput->createTime = 'impedit';
    $request->jobInput->createdFromSnapshotId = 'corporis';
    $request->jobInput->currentState = JobCurrentStateEnum::JOB_STATE_FAILED;
    $request->jobInput->currentStateTime = 'aliquid';
    $request->jobInput->environment = new EnvironmentInput();
    $request->jobInput->environment->clusterManagerApiService = 'inventore';
    $request->jobInput->environment->dataset = 'magnam';
    $request->jobInput->environment->debugOptions = new DebugOptions();
    $request->jobInput->environment->debugOptions->enableHotKeyLogging = false;
    $request->jobInput->environment->experiments = [
        'quo',
        'consectetur',
    ];
    $request->jobInput->environment->flexResourceSchedulingGoal = EnvironmentFlexResourceSchedulingGoalEnum::FLEXRS_COST_OPTIMIZED;
    $request->jobInput->environment->internalExperiments = [
        'minima' => 'eaque',
    ];
    $request->jobInput->environment->sdkPipelineOptions = [
        'libero' => 'aut',
        'aut' => 'deleniti',
        'impedit' => 'aliquam',
        'fugit' => 'accusamus',
    ];
    $request->jobInput->environment->serviceAccountEmail = 'inventore';
    $request->jobInput->environment->serviceKmsKeyName = 'non';
    $request->jobInput->environment->serviceOptions = [
        'dolorum',
    ];
    $request->jobInput->environment->tempStoragePrefix = 'laborum';
    $request->jobInput->environment->userAgent = [
        'velit' => 'eum',
        'autem' => 'nobis',
        'quas' => 'assumenda',
        'nulla' => 'voluptas',
    ];
    $request->jobInput->environment->version = [
        'quasi' => 'tempora',
        'numquam' => 'explicabo',
        'provident' => 'ipsa',
    ];
    $request->jobInput->environment->workerPools = [
        new WorkerPool(),
        new WorkerPool(),
    ];
    $request->jobInput->environment->workerRegion = 'magnam';
    $request->jobInput->environment->workerZone = 'odio';
    $request->jobInput->executionInfo = new JobExecutionInfo();
    $request->jobInput->executionInfo->stages = [
        'esse' => new JobExecutionStageInfo(),
        'esse' => new JobExecutionStageInfo(),
    ];
    $request->jobInput->id = '8a7bd466-d28c-410a-b3cd-ca4251904e52';
    $request->jobInput->jobMetadata = new JobMetadata();
    $request->jobInput->jobMetadata->bigTableDetails = [
        new BigTableIODetails(),
    ];
    $request->jobInput->jobMetadata->bigqueryDetails = [
        new BigQueryIODetails(),
        new BigQueryIODetails(),
        new BigQueryIODetails(),
        new BigQueryIODetails(),
    ];
    $request->jobInput->jobMetadata->datastoreDetails = [
        new DatastoreIODetails(),
        new DatastoreIODetails(),
    ];
    $request->jobInput->jobMetadata->fileDetails = [
        new FileIODetails(),
        new FileIODetails(),
        new FileIODetails(),
        new FileIODetails(),
    ];
    $request->jobInput->jobMetadata->pubsubDetails = [
        new PubSubIODetails(),
    ];
    $request->jobInput->jobMetadata->sdkVersion = new SDKVersion();
    $request->jobInput->jobMetadata->sdkVersion->sdkSupportStatus = SDKVersionSDKSupportStatusEnum::DEPRECATED;
    $request->jobInput->jobMetadata->sdkVersion->version = 'quod';
    $request->jobInput->jobMetadata->sdkVersion->versionDisplayName = 'dignissimos';
    $request->jobInput->jobMetadata->spannerDetails = [
        new SpannerIODetails(),
    ];
    $request->jobInput->jobMetadata->userDisplayProperties = [
        'totam' => 'accusamus',
        'aliquam' => 'odio',
    ];
    $request->jobInput->labels = [
        'commodi' => 'sapiente',
        'dolores' => 'deserunt',
        'molestiae' => 'accusantium',
    ];
    $request->jobInput->location = 'porro';
    $request->jobInput->name = 'Dianne Langosh';
    $request->jobInput->pipelineDescription = new PipelineDescription();
    $request->jobInput->pipelineDescription->displayData = [
        new DisplayData(),
    ];
    $request->jobInput->pipelineDescription->executionPipelineStage = [
        new ExecutionStageSummary(),
        new ExecutionStageSummary(),
        new ExecutionStageSummary(),
    ];
    $request->jobInput->pipelineDescription->originalPipelineTransform = [
        new TransformSummary(),
        new TransformSummary(),
        new TransformSummary(),
    ];
    $request->jobInput->pipelineDescription->stepNamesHash = 'incidunt';
    $request->jobInput->projectId = 'atque';
    $request->jobInput->replaceJobId = 'explicabo';
    $request->jobInput->replacedByJobId = 'minima';
    $request->jobInput->requestedState = JobRequestedStateEnum::JOB_STATE_CANCELLED;
    $request->jobInput->runtimeUpdatableParams = new RuntimeUpdatableParams();
    $request->jobInput->runtimeUpdatableParams->maxNumWorkers = 147014;
    $request->jobInput->runtimeUpdatableParams->minNumWorkers = 956406;
    $request->jobInput->satisfiesPzs = false;
    $request->jobInput->stageStates = [
        new ExecutionStageState(),
    ];
    $request->jobInput->startTime = 'ratione';
    $request->jobInput->steps = [
        new Step(),
    ];
    $request->jobInput->stepsLocation = 'saepe';
    $request->jobInput->tempFiles = [
        'atque',
        'et',
        'esse',
    ];
    $request->jobInput->transformNameMapping = [
        'accusamus' => 'veritatis',
        'esse' => 'quod',
        'nam' => 'vero',
        'aliquid' => 'quasi',
    ];
    $request->jobInput->type = JobTypeEnum::JOB_TYPE_STREAMING;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestiae';
    $request->fields = 'rerum';
    $request->key = 'occaecati';
    $request->location = 'minima';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->projectId = 'eligendi';
    $request->quotaUser = 'sit';
    $request->replaceJobId = 'culpa';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'adipisci';
    $request->view = DataflowProjectsLocationsJobsCreateViewEnum::JOB_VIEW_DESCRIPTION;

    $requestSecurity = new DataflowProjectsLocationsJobsCreateSecurity();
    $requestSecurity->option1 = new DataflowProjectsLocationsJobsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsLocationsJobsCreate($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsLocationsJobsDebugGetConfig

Get encoded debug configuration for component. Not cacheable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsDebugGetConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetDebugConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsDebugGetConfigSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsDebugGetConfigSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsDebugGetConfigSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsDebugGetConfigSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsDebugGetConfigSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsLocationsJobsDebugGetConfigRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->getDebugConfigRequest = new GetDebugConfigRequest();
    $request->getDebugConfigRequest->componentId = 'consequatur';
    $request->getDebugConfigRequest->location = 'minus';
    $request->getDebugConfigRequest->workerId = 'quaerat';
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->fields = 'blanditiis';
    $request->jobId = 'provident';
    $request->key = 'a';
    $request->location = 'nulla';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->projectId = 'esse';
    $request->quotaUser = 'quasi';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'error';

    $requestSecurity = new DataflowProjectsLocationsJobsDebugGetConfigSecurity();
    $requestSecurity->option1 = new DataflowProjectsLocationsJobsDebugGetConfigSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsLocationsJobsDebugGetConfig($request, $requestSecurity);

    if ($response->getDebugConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsLocationsJobsDebugSendCapture

Send encoded debug capture data for component.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsDebugSendCaptureRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SendDebugCaptureRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendDebugCaptureRequestDataFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsDebugSendCaptureSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsLocationsJobsDebugSendCaptureRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sendDebugCaptureRequest = new SendDebugCaptureRequest();
    $request->sendDebugCaptureRequest->componentId = 'pariatur';
    $request->sendDebugCaptureRequest->data = 'possimus';
    $request->sendDebugCaptureRequest->dataFormat = SendDebugCaptureRequestDataFormatEnum::DATA_FORMAT_UNSPECIFIED;
    $request->sendDebugCaptureRequest->location = 'eveniet';
    $request->sendDebugCaptureRequest->workerId = 'asperiores';
    $request->accessToken = 'facere';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequuntur';
    $request->fields = 'quasi';
    $request->jobId = 'similique';
    $request->key = 'culpa';
    $request->location = 'aliquid';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->projectId = 'quae';
    $request->quotaUser = 'earum';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'in';

    $requestSecurity = new DataflowProjectsLocationsJobsDebugSendCaptureSecurity();
    $requestSecurity->option1 = new DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsLocationsJobsDebugSendCapture($request, $requestSecurity);

    if ($response->sendDebugCaptureResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsLocationsJobsGet

Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsLocationsJobsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'libero';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'soluta';
    $request->fields = 'accusantium';
    $request->jobId = 'aliquam';
    $request->key = 'sapiente';
    $request->location = 'dicta';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->projectId = 'reprehenderit';
    $request->quotaUser = 'ullam';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'aut';
    $request->view = DataflowProjectsLocationsJobsGetViewEnum::JOB_VIEW_ALL;

    $requestSecurity = new DataflowProjectsLocationsJobsGetSecurity();
    $requestSecurity->option1 = new DataflowProjectsLocationsJobsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsLocationsJobsGet($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsLocationsJobsGetExecutionDetails

Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsGetExecutionDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsGetExecutionDetailsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsLocationsJobsGetExecutionDetailsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deleniti';
    $request->fields = 'itaque';
    $request->jobId = 'dolorum';
    $request->key = 'architecto';
    $request->location = 'omnis';
    $request->oauthToken = 'tenetur';
    $request->pageSize = 98478;
    $request->pageToken = 'at';
    $request->prettyPrint = false;
    $request->projectId = 'et';
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new DataflowProjectsLocationsJobsGetExecutionDetailsSecurity();
    $requestSecurity->option1 = new DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsLocationsJobsGetExecutionDetails($request, $requestSecurity);

    if ($response->jobExecutionDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsLocationsJobsGetMetrics

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsGetMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsGetMetricsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsGetMetricsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsGetMetricsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsGetMetricsSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsGetMetricsSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsLocationsJobsGetMetricsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iste';
    $request->fields = 'temporibus';
    $request->jobId = 'accusantium';
    $request->key = 'rem';
    $request->location = 'aut';
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->projectId = 'eum';
    $request->quotaUser = 'mollitia';
    $request->startTime = 'ab';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'non';

    $requestSecurity = new DataflowProjectsLocationsJobsGetMetricsSecurity();
    $requestSecurity->option1 = new DataflowProjectsLocationsJobsGetMetricsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsLocationsJobsGetMetrics($request, $requestSecurity);

    if ($response->jobMetrics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsLocationsJobsList

List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsListFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsLocationsJobsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'numquam';
    $request->fields = 'impedit';
    $request->filter = DataflowProjectsLocationsJobsListFilterEnum::UNKNOWN;
    $request->key = 'voluptas';
    $request->location = 'aut';
    $request->name = 'Jean Wunsch';
    $request->oauthToken = 'voluptatibus';
    $request->pageSize = 374323;
    $request->pageToken = 'asperiores';
    $request->prettyPrint = false;
    $request->projectId = 'aperiam';
    $request->quotaUser = 'ea';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'consequuntur';
    $request->view = DataflowProjectsLocationsJobsListViewEnum::JOB_VIEW_DESCRIPTION;

    $requestSecurity = new DataflowProjectsLocationsJobsListSecurity();
    $requestSecurity->option1 = new DataflowProjectsLocationsJobsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsLocationsJobsList($request, $requestSecurity);

    if ($response->listJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsLocationsJobsMessagesList

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsMessagesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsMessagesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsMessagesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsMessagesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsMessagesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsMessagesListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsLocationsJobsMessagesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officia';
    $request->endTime = 'asperiores';
    $request->fields = 'nemo';
    $request->jobId = 'quae';
    $request->key = 'quaerat';
    $request->location = 'porro';
    $request->minimumImportance = DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum::JOB_MESSAGE_WARNING;
    $request->oauthToken = 'labore';
    $request->pageSize = 70447;
    $request->pageToken = 'adipisci';
    $request->prettyPrint = false;
    $request->projectId = 'fuga';
    $request->quotaUser = 'id';
    $request->startTime = 'suscipit';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'culpa';

    $requestSecurity = new DataflowProjectsLocationsJobsMessagesListSecurity();
    $requestSecurity->option1 = new DataflowProjectsLocationsJobsMessagesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsLocationsJobsMessagesList($request, $requestSecurity);

    if ($response->listJobMessagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsLocationsJobsSnapshot

Snapshot the state of a streaming job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SnapshotJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsSnapshotSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsSnapshotSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsSnapshotSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsSnapshotSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsSnapshotSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsLocationsJobsSnapshotRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->snapshotJobRequest = new SnapshotJobRequest();
    $request->snapshotJobRequest->description = 'recusandae';
    $request->snapshotJobRequest->location = 'totam';
    $request->snapshotJobRequest->snapshotSources = false;
    $request->snapshotJobRequest->ttl = 'fugiat';
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quos';
    $request->fields = 'vel';
    $request->jobId = 'labore';
    $request->key = 'possimus';
    $request->location = 'facilis';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->projectId = 'commodi';
    $request->quotaUser = 'in';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new DataflowProjectsLocationsJobsSnapshotSecurity();
    $requestSecurity->option1 = new DataflowProjectsLocationsJobsSnapshotSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsLocationsJobsSnapshot($request, $requestSecurity);

    if ($response->snapshot !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsLocationsJobsSnapshotsList

Lists snapshots.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsSnapshotsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsSnapshotsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsSnapshotsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsSnapshotsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsSnapshotsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsSnapshotsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsLocationsJobsSnapshotsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquid';
    $request->fields = 'aperiam';
    $request->jobId = 'cum';
    $request->key = 'consectetur';
    $request->location = 'in';
    $request->oauthToken = 'exercitationem';
    $request->prettyPrint = false;
    $request->projectId = 'earum';
    $request->quotaUser = 'facere';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'doloribus';

    $requestSecurity = new DataflowProjectsLocationsJobsSnapshotsListSecurity();
    $requestSecurity->option1 = new DataflowProjectsLocationsJobsSnapshotsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsLocationsJobsSnapshotsList($request, $requestSecurity);

    if ($response->listSnapshotsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsLocationsJobsStagesGetExecutionDetails

Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsStagesGetExecutionDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsLocationsJobsStagesGetExecutionDetailsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->endTime = 'necessitatibus';
    $request->fields = 'dolore';
    $request->jobId = 'sunt';
    $request->key = 'asperiores';
    $request->location = 'adipisci';
    $request->oauthToken = 'non';
    $request->pageSize = 228263;
    $request->pageToken = 'beatae';
    $request->prettyPrint = false;
    $request->projectId = 'dignissimos';
    $request->quotaUser = 'a';
    $request->stageId = 'debitis';
    $request->startTime = 'consectetur';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'harum';

    $requestSecurity = new DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurity();
    $requestSecurity->option1 = new DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsLocationsJobsStagesGetExecutionDetails($request, $requestSecurity);

    if ($response->stageExecutionDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsLocationsJobsUpdate

Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobInput;
use \OpenAPI\OpenAPI\Models\Shared\JobCurrentStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentInput;
use \OpenAPI\OpenAPI\Models\Shared\DebugOptions;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentFlexResourceSchedulingGoalEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPool;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingSettings;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingSettingsAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\Disk;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPoolDefaultPackageSetEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPoolIpConfigurationEnum;
use \OpenAPI\OpenAPI\Models\Shared\Package;
use \OpenAPI\OpenAPI\Models\Shared\SDKHarnessContainerImage;
use \OpenAPI\OpenAPI\Models\Shared\TaskRunnerSettings;
use \OpenAPI\OpenAPI\Models\Shared\WorkerSettings;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPoolTeardownPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobExecutionInfo;
use \OpenAPI\OpenAPI\Models\Shared\JobExecutionStageInfo;
use \OpenAPI\OpenAPI\Models\Shared\JobMetadata;
use \OpenAPI\OpenAPI\Models\Shared\BigTableIODetails;
use \OpenAPI\OpenAPI\Models\Shared\BigQueryIODetails;
use \OpenAPI\OpenAPI\Models\Shared\DatastoreIODetails;
use \OpenAPI\OpenAPI\Models\Shared\FileIODetails;
use \OpenAPI\OpenAPI\Models\Shared\PubSubIODetails;
use \OpenAPI\OpenAPI\Models\Shared\SDKVersion;
use \OpenAPI\OpenAPI\Models\Shared\SDKVersionSDKSupportStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SpannerIODetails;
use \OpenAPI\OpenAPI\Models\Shared\PipelineDescription;
use \OpenAPI\OpenAPI\Models\Shared\DisplayData;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionStageSummary;
use \OpenAPI\OpenAPI\Models\Shared\ComponentSource;
use \OpenAPI\OpenAPI\Models\Shared\ComponentTransform;
use \OpenAPI\OpenAPI\Models\Shared\StageSource;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionStageSummaryKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformSummary;
use \OpenAPI\OpenAPI\Models\Shared\TransformSummaryKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobRequestedStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeUpdatableParams;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionStageState;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionStageStateExecutionStageStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\Step;
use \OpenAPI\OpenAPI\Models\Shared\JobTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsUpdateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsUpdateSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsUpdateSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsLocationsJobsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->jobInput = new JobInput();
    $request->jobInput->clientRequestId = 'ipsa';
    $request->jobInput->createTime = 'voluptates';
    $request->jobInput->createdFromSnapshotId = 'libero';
    $request->jobInput->currentState = JobCurrentStateEnum::JOB_STATE_STOPPED;
    $request->jobInput->currentStateTime = 'accusamus';
    $request->jobInput->environment = new EnvironmentInput();
    $request->jobInput->environment->clusterManagerApiService = 'similique';
    $request->jobInput->environment->dataset = 'tempora';
    $request->jobInput->environment->debugOptions = new DebugOptions();
    $request->jobInput->environment->debugOptions->enableHotKeyLogging = false;
    $request->jobInput->environment->experiments = [
        'voluptas',
    ];
    $request->jobInput->environment->flexResourceSchedulingGoal = EnvironmentFlexResourceSchedulingGoalEnum::FLEXRS_SPEED_OPTIMIZED;
    $request->jobInput->environment->internalExperiments = [
        'minima' => 'nobis',
        'dolorum' => 'adipisci',
    ];
    $request->jobInput->environment->sdkPipelineOptions = [
        'dolores' => 'blanditiis',
        'in' => 'dolore',
        'aliquam' => 'officiis',
        'temporibus' => 'ullam',
    ];
    $request->jobInput->environment->serviceAccountEmail = 'adipisci';
    $request->jobInput->environment->serviceKmsKeyName = 'cum';
    $request->jobInput->environment->serviceOptions = [
        'quas',
        'hic',
        'nesciunt',
    ];
    $request->jobInput->environment->tempStoragePrefix = 'culpa';
    $request->jobInput->environment->userAgent = [
        'pariatur' => 'totam',
        'hic' => 'exercitationem',
        'nobis' => 'sit',
    ];
    $request->jobInput->environment->version = [
        'sed' => 'reiciendis',
        'explicabo' => 'asperiores',
        'facilis' => 'voluptate',
    ];
    $request->jobInput->environment->workerPools = [
        new WorkerPool(),
        new WorkerPool(),
        new WorkerPool(),
    ];
    $request->jobInput->environment->workerRegion = 'ab';
    $request->jobInput->environment->workerZone = 'iste';
    $request->jobInput->executionInfo = new JobExecutionInfo();
    $request->jobInput->executionInfo->stages = [
        'laborum' => new JobExecutionStageInfo(),
        'sed' => new JobExecutionStageInfo(),
    ];
    $request->jobInput->id = '76b26916-fe1f-408f-8294-e3698f447f60';
    $request->jobInput->jobMetadata = new JobMetadata();
    $request->jobInput->jobMetadata->bigTableDetails = [
        new BigTableIODetails(),
    ];
    $request->jobInput->jobMetadata->bigqueryDetails = [
        new BigQueryIODetails(),
        new BigQueryIODetails(),
        new BigQueryIODetails(),
        new BigQueryIODetails(),
    ];
    $request->jobInput->jobMetadata->datastoreDetails = [
        new DatastoreIODetails(),
        new DatastoreIODetails(),
        new DatastoreIODetails(),
    ];
    $request->jobInput->jobMetadata->fileDetails = [
        new FileIODetails(),
        new FileIODetails(),
        new FileIODetails(),
    ];
    $request->jobInput->jobMetadata->pubsubDetails = [
        new PubSubIODetails(),
        new PubSubIODetails(),
    ];
    $request->jobInput->jobMetadata->sdkVersion = new SDKVersion();
    $request->jobInput->jobMetadata->sdkVersion->sdkSupportStatus = SDKVersionSDKSupportStatusEnum::SUPPORTED;
    $request->jobInput->jobMetadata->sdkVersion->version = 'ipsam';
    $request->jobInput->jobMetadata->sdkVersion->versionDisplayName = 'debitis';
    $request->jobInput->jobMetadata->spannerDetails = [
        new SpannerIODetails(),
        new SpannerIODetails(),
        new SpannerIODetails(),
    ];
    $request->jobInput->jobMetadata->userDisplayProperties = [
        'nobis' => 'error',
    ];
    $request->jobInput->labels = [
        'minima' => 'recusandae',
        'reiciendis' => 'nulla',
    ];
    $request->jobInput->location = 'magni';
    $request->jobInput->name = 'Gwen Fritsch';
    $request->jobInput->pipelineDescription = new PipelineDescription();
    $request->jobInput->pipelineDescription->displayData = [
        new DisplayData(),
        new DisplayData(),
        new DisplayData(),
        new DisplayData(),
    ];
    $request->jobInput->pipelineDescription->executionPipelineStage = [
        new ExecutionStageSummary(),
    ];
    $request->jobInput->pipelineDescription->originalPipelineTransform = [
        new TransformSummary(),
        new TransformSummary(),
        new TransformSummary(),
    ];
    $request->jobInput->pipelineDescription->stepNamesHash = 'exercitationem';
    $request->jobInput->projectId = 'praesentium';
    $request->jobInput->replaceJobId = 'cum';
    $request->jobInput->replacedByJobId = 'laboriosam';
    $request->jobInput->requestedState = JobRequestedStateEnum::JOB_STATE_DRAINED;
    $request->jobInput->runtimeUpdatableParams = new RuntimeUpdatableParams();
    $request->jobInput->runtimeUpdatableParams->maxNumWorkers = 530089;
    $request->jobInput->runtimeUpdatableParams->minNumWorkers = 622385;
    $request->jobInput->satisfiesPzs = false;
    $request->jobInput->stageStates = [
        new ExecutionStageState(),
        new ExecutionStageState(),
        new ExecutionStageState(),
        new ExecutionStageState(),
    ];
    $request->jobInput->startTime = 'expedita';
    $request->jobInput->steps = [
        new Step(),
        new Step(),
        new Step(),
        new Step(),
    ];
    $request->jobInput->stepsLocation = 'neque';
    $request->jobInput->tempFiles = [
        'nostrum',
        'officia',
        'dolorum',
    ];
    $request->jobInput->transformNameMapping = [
        'accusamus' => 'tempora',
        'atque' => 'fugit',
        'ut' => 'fugiat',
    ];
    $request->jobInput->type = JobTypeEnum::JOB_TYPE_UNKNOWN;
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magnam';
    $request->fields = 'consequatur';
    $request->jobId = 'esse';
    $request->key = 'ipsam';
    $request->location = 'sit';
    $request->oauthToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->projectId = 'quas';
    $request->quotaUser = 'repudiandae';
    $request->updateMask = 'corporis';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'blanditiis';

    $requestSecurity = new DataflowProjectsLocationsJobsUpdateSecurity();
    $requestSecurity->option1 = new DataflowProjectsLocationsJobsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsLocationsJobsUpdate($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsLocationsJobsWorkItemsLease

Leases a dataflow WorkItem to run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsWorkItemsLeaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LeaseWorkItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsWorkItemsLeaseSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsLocationsJobsWorkItemsLeaseRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->leaseWorkItemRequest = new LeaseWorkItemRequest();
    $request->leaseWorkItemRequest->currentWorkerTime = 'sed';
    $request->leaseWorkItemRequest->location = 'sit';
    $request->leaseWorkItemRequest->requestedLeaseDuration = 'vel';
    $request->leaseWorkItemRequest->unifiedWorkerRequest = [
        'saepe' => 'error',
        'consequatur' => 'incidunt',
    ];
    $request->leaseWorkItemRequest->workItemTypes = [
        'dolorem',
        'harum',
        'dicta',
        'architecto',
    ];
    $request->leaseWorkItemRequest->workerCapabilities = [
        'labore',
        'quidem',
        'atque',
    ];
    $request->leaseWorkItemRequest->workerId = 'laborum';
    $request->accessToken = 'nam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laboriosam';
    $request->fields = 'alias';
    $request->jobId = 'amet';
    $request->key = 'deserunt';
    $request->location = 'voluptate';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->projectId = 'reiciendis';
    $request->quotaUser = 'provident';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new DataflowProjectsLocationsJobsWorkItemsLeaseSecurity();
    $requestSecurity->option1 = new DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsLocationsJobsWorkItemsLease($request, $requestSecurity);

    if ($response->leaseWorkItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsLocationsJobsWorkItemsReportStatus

Reports the status of dataflow WorkItems leased by a worker.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsWorkItemsReportStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportWorkItemStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkItemStatus;
use \OpenAPI\OpenAPI\Models\Shared\CounterUpdate;
use \OpenAPI\OpenAPI\Models\Shared\DistributionUpdate;
use \OpenAPI\OpenAPI\Models\Shared\SplitInt64;
use \OpenAPI\OpenAPI\Models\Shared\Histogram;
use \OpenAPI\OpenAPI\Models\Shared\FloatingPointList;
use \OpenAPI\OpenAPI\Models\Shared\FloatingPointMean;
use \OpenAPI\OpenAPI\Models\Shared\IntegerGauge;
use \OpenAPI\OpenAPI\Models\Shared\IntegerList;
use \OpenAPI\OpenAPI\Models\Shared\IntegerMean;
use \OpenAPI\OpenAPI\Models\Shared\NameAndKind;
use \OpenAPI\OpenAPI\Models\Shared\NameAndKindKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\StringList;
use \OpenAPI\OpenAPI\Models\Shared\CounterStructuredNameAndMetadata;
use \OpenAPI\OpenAPI\Models\Shared\CounterMetadata;
use \OpenAPI\OpenAPI\Models\Shared\CounterMetadataKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\CounterMetadataStandardUnitsEnum;
use \OpenAPI\OpenAPI\Models\Shared\CounterStructuredName;
use \OpenAPI\OpenAPI\Models\Shared\CounterStructuredNameOriginEnum;
use \OpenAPI\OpenAPI\Models\Shared\CounterStructuredNamePortionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DynamicSourceSplit;
use \OpenAPI\OpenAPI\Models\Shared\DerivedSource;
use \OpenAPI\OpenAPI\Models\Shared\DerivedSourceDerivationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\SourceMetadata;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\MetricUpdate;
use \OpenAPI\OpenAPI\Models\Shared\MetricStructuredName;
use \OpenAPI\OpenAPI\Models\Shared\ApproximateProgress;
use \OpenAPI\OpenAPI\Models\Shared\Position;
use \OpenAPI\OpenAPI\Models\Shared\ConcatPosition;
use \OpenAPI\OpenAPI\Models\Shared\ApproximateReportedProgress;
use \OpenAPI\OpenAPI\Models\Shared\ReportedParallelism;
use \OpenAPI\OpenAPI\Models\Shared\SourceFork;
use \OpenAPI\OpenAPI\Models\Shared\SourceSplitShard;
use \OpenAPI\OpenAPI\Models\Shared\SourceSplitShardDerivationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceOperationResponse;
use \OpenAPI\OpenAPI\Models\Shared\SourceGetMetadataResponse;
use \OpenAPI\OpenAPI\Models\Shared\SourceSplitResponse;
use \OpenAPI\OpenAPI\Models\Shared\SourceSplitResponseOutcomeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsWorkItemsReportStatusSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsLocationsJobsWorkItemsReportStatusRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->reportWorkItemStatusRequest = new ReportWorkItemStatusRequest();
    $request->reportWorkItemStatusRequest->currentWorkerTime = 'perferendis';
    $request->reportWorkItemStatusRequest->location = 'est';
    $request->reportWorkItemStatusRequest->unifiedWorkerRequest = [
        'reprehenderit' => 'facere',
        'fuga' => 'praesentium',
        'mollitia' => 'veniam',
    ];
    $request->reportWorkItemStatusRequest->workItemStatuses = [
        new WorkItemStatus(),
    ];
    $request->reportWorkItemStatusRequest->workerId = 'quisquam';
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'atque';
    $request->fields = 'reprehenderit';
    $request->jobId = 'asperiores';
    $request->key = 'totam';
    $request->location = 'suscipit';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->projectId = 'maxime';
    $request->quotaUser = 'et';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new DataflowProjectsLocationsJobsWorkItemsReportStatusSecurity();
    $requestSecurity->option1 = new DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsLocationsJobsWorkItemsReportStatus($request, $requestSecurity);

    if ($response->reportWorkItemStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsLocationsSnapshotsDelete

Deletes a snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsSnapshotsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsSnapshotsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsSnapshotsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsSnapshotsDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsSnapshotsDeleteSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsSnapshotsDeleteSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsLocationsSnapshotsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->fields = 'officiis';
    $request->key = 'officiis';
    $request->location = 'accusamus';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->projectId = 'minima';
    $request->quotaUser = 'aspernatur';
    $request->snapshotId = 'ex';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'corrupti';

    $requestSecurity = new DataflowProjectsLocationsSnapshotsDeleteSecurity();
    $requestSecurity->option1 = new DataflowProjectsLocationsSnapshotsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsLocationsSnapshotsDelete($request, $requestSecurity);

    if ($response->deleteSnapshotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsLocationsSnapshotsGet

Gets information about a snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsSnapshotsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsSnapshotsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsSnapshotsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsSnapshotsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsSnapshotsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsSnapshotsGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsLocationsSnapshotsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'error';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'suscipit';
    $request->fields = 'repudiandae';
    $request->key = 'atque';
    $request->location = 'atque';
    $request->oauthToken = 'sunt';
    $request->prettyPrint = false;
    $request->projectId = 'recusandae';
    $request->quotaUser = 'dolorum';
    $request->snapshotId = 'repellendus';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new DataflowProjectsLocationsSnapshotsGetSecurity();
    $requestSecurity->option1 = new DataflowProjectsLocationsSnapshotsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsLocationsSnapshotsGet($request, $requestSecurity);

    if ($response->snapshot !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsLocationsSnapshotsList

Lists snapshots.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsSnapshotsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsSnapshotsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsSnapshotsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsSnapshotsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsSnapshotsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsSnapshotsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsLocationsSnapshotsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusantium';
    $request->fields = 'beatae';
    $request->jobId = 'dolores';
    $request->key = 'enim';
    $request->location = 'laboriosam';
    $request->oauthToken = 'velit';
    $request->prettyPrint = false;
    $request->projectId = 'a';
    $request->quotaUser = 'molestias';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new DataflowProjectsLocationsSnapshotsListSecurity();
    $requestSecurity->option1 = new DataflowProjectsLocationsSnapshotsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsLocationsSnapshotsList($request, $requestSecurity);

    if ($response->listSnapshotsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsLocationsTemplatesCreate

Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsTemplatesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateJobFromTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeEnvironment;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeEnvironmentIpConfigurationEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsTemplatesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsTemplatesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsTemplatesCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsTemplatesCreateSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsTemplatesCreateSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsLocationsTemplatesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->createJobFromTemplateRequest = new CreateJobFromTemplateRequest();
    $request->createJobFromTemplateRequest->environment = new RuntimeEnvironment();
    $request->createJobFromTemplateRequest->environment->additionalExperiments = [
        'officiis',
        'perspiciatis',
        'in',
    ];
    $request->createJobFromTemplateRequest->environment->additionalUserLabels = [
        'eveniet' => 'occaecati',
    ];
    $request->createJobFromTemplateRequest->environment->bypassTempDirValidation = false;
    $request->createJobFromTemplateRequest->environment->enableStreamingEngine = false;
    $request->createJobFromTemplateRequest->environment->ipConfiguration = RuntimeEnvironmentIpConfigurationEnum::WORKER_IP_UNSPECIFIED;
    $request->createJobFromTemplateRequest->environment->kmsKeyName = 'fugit';
    $request->createJobFromTemplateRequest->environment->machineType = 'id';
    $request->createJobFromTemplateRequest->environment->maxWorkers = 335631;
    $request->createJobFromTemplateRequest->environment->network = 'reprehenderit';
    $request->createJobFromTemplateRequest->environment->numWorkers = 625528;
    $request->createJobFromTemplateRequest->environment->serviceAccountEmail = 'illo';
    $request->createJobFromTemplateRequest->environment->subnetwork = 'corporis';
    $request->createJobFromTemplateRequest->environment->tempLocation = 'quidem';
    $request->createJobFromTemplateRequest->environment->workerRegion = 'eveniet';
    $request->createJobFromTemplateRequest->environment->workerZone = 'non';
    $request->createJobFromTemplateRequest->environment->zone = 'vero';
    $request->createJobFromTemplateRequest->gcsPath = 'doloremque';
    $request->createJobFromTemplateRequest->jobName = 'iure';
    $request->createJobFromTemplateRequest->location = 'ipsa';
    $request->createJobFromTemplateRequest->parameters = [
        'quae' => 'molestiae',
        'eveniet' => 'qui',
        'cum' => 'iure',
    ];
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laborum';
    $request->fields = 'distinctio';
    $request->key = 'voluptatum';
    $request->location = 'rem';
    $request->oauthToken = 'aliquam';
    $request->prettyPrint = false;
    $request->projectId = 'ad';
    $request->quotaUser = 'repellat';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new DataflowProjectsLocationsTemplatesCreateSecurity();
    $requestSecurity->option1 = new DataflowProjectsLocationsTemplatesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsLocationsTemplatesCreate($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsLocationsTemplatesGet

Get the template associated with a template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsTemplatesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsTemplatesGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsTemplatesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsTemplatesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsTemplatesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsTemplatesGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsTemplatesGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsLocationsTemplatesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptas';
    $request->fields = 'alias';
    $request->gcsPath = 'maiores';
    $request->key = 'reiciendis';
    $request->location = 'dolores';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->projectId = 'minima';
    $request->quotaUser = 'dolore';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'nesciunt';
    $request->view = DataflowProjectsLocationsTemplatesGetViewEnum::METADATA_ONLY;

    $requestSecurity = new DataflowProjectsLocationsTemplatesGetSecurity();
    $requestSecurity->option1 = new DataflowProjectsLocationsTemplatesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsLocationsTemplatesGet($request, $requestSecurity);

    if ($response->getTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsLocationsTemplatesLaunch

Launch a template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsTemplatesLaunchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LaunchTemplateParameters;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeEnvironment;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeEnvironmentIpConfigurationEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsTemplatesLaunchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsTemplatesLaunchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsTemplatesLaunchSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsTemplatesLaunchSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsTemplatesLaunchSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsLocationsTemplatesLaunchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->launchTemplateParameters = new LaunchTemplateParameters();
    $request->launchTemplateParameters->environment = new RuntimeEnvironment();
    $request->launchTemplateParameters->environment->additionalExperiments = [
        'omnis',
        'quaerat',
        'molestiae',
        'ex',
    ];
    $request->launchTemplateParameters->environment->additionalUserLabels = [
        'culpa' => 'adipisci',
        'debitis' => 'laudantium',
    ];
    $request->launchTemplateParameters->environment->bypassTempDirValidation = false;
    $request->launchTemplateParameters->environment->enableStreamingEngine = false;
    $request->launchTemplateParameters->environment->ipConfiguration = RuntimeEnvironmentIpConfigurationEnum::WORKER_IP_PUBLIC;
    $request->launchTemplateParameters->environment->kmsKeyName = 'nemo';
    $request->launchTemplateParameters->environment->machineType = 'recusandae';
    $request->launchTemplateParameters->environment->maxWorkers = 456520;
    $request->launchTemplateParameters->environment->network = 'provident';
    $request->launchTemplateParameters->environment->numWorkers = 337477;
    $request->launchTemplateParameters->environment->serviceAccountEmail = 'eum';
    $request->launchTemplateParameters->environment->subnetwork = 'reiciendis';
    $request->launchTemplateParameters->environment->tempLocation = 'provident';
    $request->launchTemplateParameters->environment->workerRegion = 'aspernatur';
    $request->launchTemplateParameters->environment->workerZone = 'ullam';
    $request->launchTemplateParameters->environment->zone = 'quasi';
    $request->launchTemplateParameters->jobName = 'animi';
    $request->launchTemplateParameters->parameters = [
        'mollitia' => 'provident',
        'possimus' => 'animi',
    ];
    $request->launchTemplateParameters->transformNameMapping = [
        'aliquid' => 'accusantium',
        'repellat' => 'doloribus',
    ];
    $request->launchTemplateParameters->update = false;
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nam';
    $request->dynamicTemplateGcsPath = 'earum';
    $request->dynamicTemplateStagingLocation = 'officia';
    $request->fields = 'laborum';
    $request->gcsPath = 'placeat';
    $request->key = 'modi';
    $request->location = 'voluptatibus';
    $request->oauthToken = 'molestias';
    $request->prettyPrint = false;
    $request->projectId = 'officiis';
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'vitae';
    $request->validateOnly = false;

    $requestSecurity = new DataflowProjectsLocationsTemplatesLaunchSecurity();
    $requestSecurity->option1 = new DataflowProjectsLocationsTemplatesLaunchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsLocationsTemplatesLaunch($request, $requestSecurity);

    if ($response->launchTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsLocationsWorkerMessages

Send a worker_message to the service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsWorkerMessagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SendWorkerMessagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkerMessage;
use \OpenAPI\OpenAPI\Models\Shared\WorkerHealthReport;
use \OpenAPI\OpenAPI\Models\Shared\WorkerLifecycleEvent;
use \OpenAPI\OpenAPI\Models\Shared\WorkerLifecycleEventEventEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerMessageCode;
use \OpenAPI\OpenAPI\Models\Shared\ResourceUtilizationReport;
use \OpenAPI\OpenAPI\Models\Shared\CPUTime;
use \OpenAPI\OpenAPI\Models\Shared\MemInfo;
use \OpenAPI\OpenAPI\Models\Shared\WorkerShutdownNotice;
use \OpenAPI\OpenAPI\Models\Shared\WorkerThreadScalingReport;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsWorkerMessagesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsWorkerMessagesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsWorkerMessagesSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsWorkerMessagesSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsLocationsWorkerMessagesSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsLocationsWorkerMessagesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sendWorkerMessagesRequest = new SendWorkerMessagesRequest();
    $request->sendWorkerMessagesRequest->location = 'tempora';
    $request->sendWorkerMessagesRequest->workerMessages = [
        new WorkerMessage(),
        new WorkerMessage(),
    ];
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->fields = 'quae';
    $request->key = 'perferendis';
    $request->location = 'velit';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->projectId = 'eum';
    $request->quotaUser = 'eius';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'at';

    $requestSecurity = new DataflowProjectsLocationsWorkerMessagesSecurity();
    $requestSecurity->option1 = new DataflowProjectsLocationsWorkerMessagesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsLocationsWorkerMessages($request, $requestSecurity);

    if ($response->sendWorkerMessagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsSnapshotsGet

Gets information about a snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsSnapshotsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsSnapshotsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsSnapshotsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsSnapshotsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsSnapshotsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsSnapshotsGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsSnapshotsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'dicta';
    $request->key = 'minima';
    $request->location = 'beatae';
    $request->oauthToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->projectId = 'provident';
    $request->quotaUser = 'earum';
    $request->snapshotId = 'soluta';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'illum';

    $requestSecurity = new DataflowProjectsSnapshotsGetSecurity();
    $requestSecurity->option1 = new DataflowProjectsSnapshotsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsSnapshotsGet($request, $requestSecurity);

    if ($response->snapshot !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsSnapshotsList

Lists snapshots.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsSnapshotsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsSnapshotsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsSnapshotsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsSnapshotsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsSnapshotsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsSnapshotsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsSnapshotsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'earum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'maiores';
    $request->fields = 'debitis';
    $request->jobId = 'aliquid';
    $request->key = 'porro';
    $request->location = 'suscipit';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->projectId = 'fugit';
    $request->quotaUser = 'cumque';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'ratione';

    $requestSecurity = new DataflowProjectsSnapshotsListSecurity();
    $requestSecurity->option1 = new DataflowProjectsSnapshotsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsSnapshotsList($request, $requestSecurity);

    if ($response->listSnapshotsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsTemplatesCreate

Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsTemplatesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateJobFromTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeEnvironment;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeEnvironmentIpConfigurationEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsTemplatesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsTemplatesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsTemplatesCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsTemplatesCreateSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsTemplatesCreateSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsTemplatesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->createJobFromTemplateRequest = new CreateJobFromTemplateRequest();
    $request->createJobFromTemplateRequest->environment = new RuntimeEnvironment();
    $request->createJobFromTemplateRequest->environment->additionalExperiments = [
        'nulla',
        'consequatur',
        'quasi',
        'et',
    ];
    $request->createJobFromTemplateRequest->environment->additionalUserLabels = [
        'natus' => 'occaecati',
        'suscipit' => 'adipisci',
    ];
    $request->createJobFromTemplateRequest->environment->bypassTempDirValidation = false;
    $request->createJobFromTemplateRequest->environment->enableStreamingEngine = false;
    $request->createJobFromTemplateRequest->environment->ipConfiguration = RuntimeEnvironmentIpConfigurationEnum::WORKER_IP_UNSPECIFIED;
    $request->createJobFromTemplateRequest->environment->kmsKeyName = 'magni';
    $request->createJobFromTemplateRequest->environment->machineType = 'doloribus';
    $request->createJobFromTemplateRequest->environment->maxWorkers = 859581;
    $request->createJobFromTemplateRequest->environment->network = 'necessitatibus';
    $request->createJobFromTemplateRequest->environment->numWorkers = 58534;
    $request->createJobFromTemplateRequest->environment->serviceAccountEmail = 'tempora';
    $request->createJobFromTemplateRequest->environment->subnetwork = 'nihil';
    $request->createJobFromTemplateRequest->environment->tempLocation = 'molestiae';
    $request->createJobFromTemplateRequest->environment->workerRegion = 'dicta';
    $request->createJobFromTemplateRequest->environment->workerZone = 'iusto';
    $request->createJobFromTemplateRequest->environment->zone = 'esse';
    $request->createJobFromTemplateRequest->gcsPath = 'praesentium';
    $request->createJobFromTemplateRequest->jobName = 'maiores';
    $request->createJobFromTemplateRequest->location = 'reiciendis';
    $request->createJobFromTemplateRequest->parameters = [
        'architecto' => 'fugiat',
        'doloremque' => 'dicta',
    ];
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->fields = 'ex';
    $request->key = 'consectetur';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->projectId = 'ipsa';
    $request->quotaUser = 'laborum';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'nostrum';

    $requestSecurity = new DataflowProjectsTemplatesCreateSecurity();
    $requestSecurity->option1 = new DataflowProjectsTemplatesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsTemplatesCreate($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsTemplatesGet

Get the template associated with a template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsTemplatesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsTemplatesGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsTemplatesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsTemplatesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsTemplatesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsTemplatesGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsTemplatesGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsTemplatesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officia';
    $request->fields = 'suscipit';
    $request->gcsPath = 'aliquid';
    $request->key = 'perferendis';
    $request->location = 'eum';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->projectId = 'iste';
    $request->quotaUser = 'id';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'error';
    $request->view = DataflowProjectsTemplatesGetViewEnum::METADATA_ONLY;

    $requestSecurity = new DataflowProjectsTemplatesGetSecurity();
    $requestSecurity->option1 = new DataflowProjectsTemplatesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsTemplatesGet($request, $requestSecurity);

    if ($response->getTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsTemplatesLaunch

Launch a template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsTemplatesLaunchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LaunchTemplateParameters;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeEnvironment;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeEnvironmentIpConfigurationEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsTemplatesLaunchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsTemplatesLaunchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsTemplatesLaunchSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsTemplatesLaunchSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsTemplatesLaunchSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsTemplatesLaunchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->launchTemplateParameters = new LaunchTemplateParameters();
    $request->launchTemplateParameters->environment = new RuntimeEnvironment();
    $request->launchTemplateParameters->environment->additionalExperiments = [
        'mollitia',
        'laborum',
        'libero',
        'ad',
    ];
    $request->launchTemplateParameters->environment->additionalUserLabels = [
        'enim' => 'vitae',
        'repellendus' => 'ex',
        'quo' => 'ex',
    ];
    $request->launchTemplateParameters->environment->bypassTempDirValidation = false;
    $request->launchTemplateParameters->environment->enableStreamingEngine = false;
    $request->launchTemplateParameters->environment->ipConfiguration = RuntimeEnvironmentIpConfigurationEnum::WORKER_IP_UNSPECIFIED;
    $request->launchTemplateParameters->environment->kmsKeyName = 'ad';
    $request->launchTemplateParameters->environment->machineType = 'expedita';
    $request->launchTemplateParameters->environment->maxWorkers = 29950;
    $request->launchTemplateParameters->environment->network = 'molestias';
    $request->launchTemplateParameters->environment->numWorkers = 737254;
    $request->launchTemplateParameters->environment->serviceAccountEmail = 'aliquid';
    $request->launchTemplateParameters->environment->subnetwork = 'beatae';
    $request->launchTemplateParameters->environment->tempLocation = 'voluptatum';
    $request->launchTemplateParameters->environment->workerRegion = 'omnis';
    $request->launchTemplateParameters->environment->workerZone = 'veritatis';
    $request->launchTemplateParameters->environment->zone = 'rerum';
    $request->launchTemplateParameters->jobName = 'est';
    $request->launchTemplateParameters->parameters = [
        'voluptatem' => 'sapiente',
        'officiis' => 'architecto',
        'fuga' => 'pariatur',
    ];
    $request->launchTemplateParameters->transformNameMapping = [
        'voluptatem' => 'alias',
        'deleniti' => 'earum',
        'ex' => 'sapiente',
        'rem' => 'minus',
    ];
    $request->launchTemplateParameters->update = false;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ratione';
    $request->dynamicTemplateGcsPath = 'ullam';
    $request->dynamicTemplateStagingLocation = 'perferendis';
    $request->fields = 'illum';
    $request->gcsPath = 'totam';
    $request->key = 'impedit';
    $request->location = 'quibusdam';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->projectId = 'ipsam';
    $request->quotaUser = 'culpa';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'aliquam';
    $request->validateOnly = false;

    $requestSecurity = new DataflowProjectsTemplatesLaunchSecurity();
    $requestSecurity->option1 = new DataflowProjectsTemplatesLaunchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsTemplatesLaunch($request, $requestSecurity);

    if ($response->launchTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataflowProjectsWorkerMessages

Send a worker_message to the service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsWorkerMessagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SendWorkerMessagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkerMessage;
use \OpenAPI\OpenAPI\Models\Shared\WorkerHealthReport;
use \OpenAPI\OpenAPI\Models\Shared\WorkerLifecycleEvent;
use \OpenAPI\OpenAPI\Models\Shared\WorkerLifecycleEventEventEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerMessageCode;
use \OpenAPI\OpenAPI\Models\Shared\ResourceUtilizationReport;
use \OpenAPI\OpenAPI\Models\Shared\CPUTime;
use \OpenAPI\OpenAPI\Models\Shared\MemInfo;
use \OpenAPI\OpenAPI\Models\Shared\WorkerShutdownNotice;
use \OpenAPI\OpenAPI\Models\Shared\WorkerThreadScalingReport;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsWorkerMessagesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsWorkerMessagesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsWorkerMessagesSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsWorkerMessagesSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DataflowProjectsWorkerMessagesSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataflowProjectsWorkerMessagesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->sendWorkerMessagesRequest = new SendWorkerMessagesRequest();
    $request->sendWorkerMessagesRequest->location = 'deleniti';
    $request->sendWorkerMessagesRequest->workerMessages = [
        new WorkerMessage(),
    ];
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequatur';
    $request->fields = 'architecto';
    $request->key = 'sit';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->projectId = 'fugit';
    $request->quotaUser = 'ab';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'quae';

    $requestSecurity = new DataflowProjectsWorkerMessagesSecurity();
    $requestSecurity->option1 = new DataflowProjectsWorkerMessagesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataflowProjectsWorkerMessages($request, $requestSecurity);

    if ($response->sendWorkerMessagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
