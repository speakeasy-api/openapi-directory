# projects

### Available Operations

* [datapipelinesProjectsLocationsPipelinesCreate](#datapipelinesprojectslocationspipelinescreate) - Creates a pipeline. For a batch pipeline, you can pass scheduler information. Data Pipelines uses the scheduler information to create an internal scheduler that runs jobs periodically. If the internal scheduler is not configured, you can use RunPipeline to run jobs.
* [datapipelinesProjectsLocationsPipelinesDelete](#datapipelinesprojectslocationspipelinesdelete) - Deletes a pipeline. If a scheduler job is attached to the pipeline, it will be deleted.
* [datapipelinesProjectsLocationsPipelinesGet](#datapipelinesprojectslocationspipelinesget) - Looks up a single pipeline. Returns a "NOT_FOUND" error if no such pipeline exists. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
* [datapipelinesProjectsLocationsPipelinesJobsList](#datapipelinesprojectslocationspipelinesjobslist) - Lists jobs for a given pipeline. Throws a "FORBIDDEN" error if the caller doesn't have permission to access it.
* [datapipelinesProjectsLocationsPipelinesList](#datapipelinesprojectslocationspipelineslist) - Lists pipelines. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
* [datapipelinesProjectsLocationsPipelinesPatch](#datapipelinesprojectslocationspipelinespatch) - Updates a pipeline. If successful, the updated Pipeline is returned. Returns `NOT_FOUND` if the pipeline doesn't exist. If UpdatePipeline does not return successfully, you can retry the UpdatePipeline request until you receive a successful response.
* [datapipelinesProjectsLocationsPipelinesRun](#datapipelinesprojectslocationspipelinesrun) - Creates a job for the specified pipeline directly. You can use this method when the internal scheduler is not configured and you want to trigger the job directly or through an external system. Returns a "NOT_FOUND" error if the pipeline doesn't exist. Returns a "FORBIDDEN" error if the user doesn't have permission to access the pipeline or run jobs for the pipeline.
* [datapipelinesProjectsLocationsPipelinesStop](#datapipelinesprojectslocationspipelinesstop) - Freezes pipeline execution permanently. If there's a corresponding scheduler entry, it's deleted, and the pipeline state is changed to "ARCHIVED". However, pipeline metadata is retained.

## datapipelinesProjectsLocationsPipelinesCreate

Creates a pipeline. For a batch pipeline, you can pass scheduler information. Data Pipelines uses the scheduler information to create an internal scheduler that runs jobs periodically. If the internal scheduler is not configured, you can use RunPipeline to run jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatapipelinesProjectsLocationsPipelinesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1PipelineInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1ScheduleSpecInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1PipelineStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1PipelineTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1Workload;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1LaunchTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1LaunchTemplateParameters;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1RuntimeEnvironment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1RuntimeEnvironmentIpConfigurationEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatapipelinesProjectsLocationsPipelinesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatapipelinesProjectsLocationsPipelinesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatapipelinesV1PipelineInput = new GoogleCloudDatapipelinesV1PipelineInput();
    $request->googleCloudDatapipelinesV1PipelineInput->displayName = 'quam';
    $request->googleCloudDatapipelinesV1PipelineInput->name = 'Shannon Mueller';
    $request->googleCloudDatapipelinesV1PipelineInput->pipelineSources = [
        'laborum' => 'animi',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->scheduleInfo = new GoogleCloudDatapipelinesV1ScheduleSpecInput();
    $request->googleCloudDatapipelinesV1PipelineInput->scheduleInfo->schedule = 'enim';
    $request->googleCloudDatapipelinesV1PipelineInput->scheduleInfo->timeZone = 'odit';
    $request->googleCloudDatapipelinesV1PipelineInput->schedulerServiceAccountEmail = 'quo';
    $request->googleCloudDatapipelinesV1PipelineInput->state = GoogleCloudDatapipelinesV1PipelineStateEnum::STATE_RESUMING;
    $request->googleCloudDatapipelinesV1PipelineInput->type = GoogleCloudDatapipelinesV1PipelineTypeEnum::PIPELINE_TYPE_STREAMING;
    $request->googleCloudDatapipelinesV1PipelineInput->workload = new GoogleCloudDatapipelinesV1Workload();
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest = new GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest();
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter = new GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter();
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->containerSpecGcsPath = 'ipsam';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment = new GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment();
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->additionalExperiments = [
        'possimus',
        'aut',
        'quasi',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->additionalUserLabels = [
        'temporibus' => 'laborum',
        'quasi' => 'reiciendis',
        'voluptatibus' => 'vero',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->enableStreamingEngine = false;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->flexrsGoal = GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum::FLEXRS_SPEED_OPTIMIZED;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->ipConfiguration = GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum::WORKER_IP_PUBLIC;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->kmsKeyName = 'voluptatibus';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->machineType = 'ipsa';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->maxWorkers = 604846;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->network = 'voluptate';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->numWorkers = 739264;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->serviceAccountEmail = 'perferendis';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->subnetwork = 'doloremque';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->tempLocation = 'reprehenderit';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->workerRegion = 'ut';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->workerZone = 'maiores';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->zone = 'dicta';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->jobName = 'corporis';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->launchOptions = [
        'iusto' => 'dicta',
        'harum' => 'enim',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->parameters = [
        'commodi' => 'repudiandae',
        'quae' => 'ipsum',
        'quidem' => 'molestias',
        'excepturi' => 'pariatur',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->transformNameMappings = [
        'praesentium' => 'rem',
        'voluptates' => 'quasi',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->update = false;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->location = 'repudiandae';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->projectId = 'sint';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->validateOnly = false;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest = new GoogleCloudDatapipelinesV1LaunchTemplateRequest();
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->gcsPath = 'veritatis';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters = new GoogleCloudDatapipelinesV1LaunchTemplateParameters();
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment = new GoogleCloudDatapipelinesV1RuntimeEnvironment();
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->additionalExperiments = [
        'incidunt',
        'enim',
        'consequatur',
        'est',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->additionalUserLabels = [
        'explicabo' => 'deserunt',
        'distinctio' => 'quibusdam',
        'labore' => 'modi',
        'qui' => 'aliquid',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->bypassTempDirValidation = false;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->enableStreamingEngine = false;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->ipConfiguration = GoogleCloudDatapipelinesV1RuntimeEnvironmentIpConfigurationEnum::WORKER_IP_PUBLIC;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->kmsKeyName = 'quos';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->machineType = 'perferendis';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->maxWorkers = 164940;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->network = 'assumenda';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->numWorkers = 369808;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->serviceAccountEmail = 'alias';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->subnetwork = 'fugit';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->tempLocation = 'dolorum';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->workerRegion = 'excepturi';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->workerZone = 'tempora';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->zone = 'facilis';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->jobName = 'tempore';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->parameters = [
        'delectus' => 'eum',
        'non' => 'eligendi',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->transformNameMapping = [
        'aliquid' => 'provident',
        'necessitatibus' => 'sint',
        'officia' => 'dolor',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->update = false;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->location = 'debitis';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->projectId = 'a';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->validateOnly = false;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'in';
    $request->fields = 'illum';
    $request->key = 'maiores';
    $request->oauthToken = 'rerum';
    $request->parent = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'facere';

    $requestSecurity = new DatapipelinesProjectsLocationsPipelinesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datapipelinesProjectsLocationsPipelinesCreate($request, $requestSecurity);

    if ($response->googleCloudDatapipelinesV1Pipeline !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datapipelinesProjectsLocationsPipelinesDelete

Deletes a pipeline. If a scheduler job is attached to the pipeline, it will be deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatapipelinesProjectsLocationsPipelinesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatapipelinesProjectsLocationsPipelinesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatapipelinesProjectsLocationsPipelinesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->fields = 'non';
    $request->key = 'occaecati';
    $request->name = 'Sophia Wintheiser';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new DatapipelinesProjectsLocationsPipelinesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datapipelinesProjectsLocationsPipelinesDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datapipelinesProjectsLocationsPipelinesGet

Looks up a single pipeline. Returns a "NOT_FOUND" error if no such pipeline exists. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatapipelinesProjectsLocationsPipelinesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatapipelinesProjectsLocationsPipelinesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatapipelinesProjectsLocationsPipelinesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'vel';
    $request->key = 'natus';
    $request->name = 'Fernando Aufderhar';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new DatapipelinesProjectsLocationsPipelinesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datapipelinesProjectsLocationsPipelinesGet($request, $requestSecurity);

    if ($response->googleCloudDatapipelinesV1Pipeline !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datapipelinesProjectsLocationsPipelinesJobsList

Lists jobs for a given pipeline. Throws a "FORBIDDEN" error if the caller doesn't have permission to access it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatapipelinesProjectsLocationsPipelinesJobsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatapipelinesProjectsLocationsPipelinesJobsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatapipelinesProjectsLocationsPipelinesJobsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'vero';
    $request->key = 'aspernatur';
    $request->oauthToken = 'architecto';
    $request->pageSize = 298282;
    $request->pageToken = 'et';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new DatapipelinesProjectsLocationsPipelinesJobsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datapipelinesProjectsLocationsPipelinesJobsList($request, $requestSecurity);

    if ($response->googleCloudDatapipelinesV1ListJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datapipelinesProjectsLocationsPipelinesList

Lists pipelines. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatapipelinesProjectsLocationsPipelinesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatapipelinesProjectsLocationsPipelinesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatapipelinesProjectsLocationsPipelinesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->fields = 'mollitia';
    $request->filter = 'ad';
    $request->key = 'eum';
    $request->oauthToken = 'dolor';
    $request->pageSize = 896547;
    $request->pageToken = 'odit';
    $request->parent = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'doloribus';

    $requestSecurity = new DatapipelinesProjectsLocationsPipelinesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datapipelinesProjectsLocationsPipelinesList($request, $requestSecurity);

    if ($response->googleCloudDatapipelinesV1ListPipelinesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datapipelinesProjectsLocationsPipelinesPatch

Updates a pipeline. If successful, the updated Pipeline is returned. Returns `NOT_FOUND` if the pipeline doesn't exist. If UpdatePipeline does not return successfully, you can retry the UpdatePipeline request until you receive a successful response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatapipelinesProjectsLocationsPipelinesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1PipelineInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1ScheduleSpecInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1PipelineStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1PipelineTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1Workload;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1LaunchTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1LaunchTemplateParameters;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1RuntimeEnvironment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatapipelinesV1RuntimeEnvironmentIpConfigurationEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatapipelinesProjectsLocationsPipelinesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatapipelinesProjectsLocationsPipelinesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatapipelinesV1PipelineInput = new GoogleCloudDatapipelinesV1PipelineInput();
    $request->googleCloudDatapipelinesV1PipelineInput->displayName = 'eius';
    $request->googleCloudDatapipelinesV1PipelineInput->name = 'Alfredo Prosacco Sr.';
    $request->googleCloudDatapipelinesV1PipelineInput->pipelineSources = [
        'ullam' => 'expedita',
        'nihil' => 'repellat',
        'quibusdam' => 'sed',
        'saepe' => 'pariatur',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->scheduleInfo = new GoogleCloudDatapipelinesV1ScheduleSpecInput();
    $request->googleCloudDatapipelinesV1PipelineInput->scheduleInfo->schedule = 'accusantium';
    $request->googleCloudDatapipelinesV1PipelineInput->scheduleInfo->timeZone = 'consequuntur';
    $request->googleCloudDatapipelinesV1PipelineInput->schedulerServiceAccountEmail = 'praesentium';
    $request->googleCloudDatapipelinesV1PipelineInput->state = GoogleCloudDatapipelinesV1PipelineStateEnum::STATE_STOPPING;
    $request->googleCloudDatapipelinesV1PipelineInput->type = GoogleCloudDatapipelinesV1PipelineTypeEnum::PIPELINE_TYPE_UNSPECIFIED;
    $request->googleCloudDatapipelinesV1PipelineInput->workload = new GoogleCloudDatapipelinesV1Workload();
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest = new GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest();
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter = new GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter();
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->containerSpecGcsPath = 'sunt';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment = new GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment();
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->additionalExperiments = [
        'illum',
        'pariatur',
        'maxime',
        'ea',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->additionalUserLabels = [
        'odit' => 'ea',
        'accusantium' => 'ab',
        'maiores' => 'quidem',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->enableStreamingEngine = false;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->flexrsGoal = GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum::FLEXRS_SPEED_OPTIMIZED;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->ipConfiguration = GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum::WORKER_IP_PUBLIC;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->kmsKeyName = 'autem';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->machineType = 'nam';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->maxWorkers = 50588;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->network = 'pariatur';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->numWorkers = 365496;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->serviceAccountEmail = 'voluptatibus';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->subnetwork = 'perferendis';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->tempLocation = 'fugiat';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->workerRegion = 'amet';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->workerZone = 'aut';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->zone = 'cumque';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->jobName = 'corporis';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->launchOptions = [
        'libero' => 'nobis',
        'dolores' => 'quis',
        'totam' => 'dignissimos',
        'eaque' => 'quis',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->parameters = [
        'eos' => 'perferendis',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->transformNameMappings = [
        'minus' => 'quam',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->update = false;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->location = 'dolor';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->projectId = 'vero';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->validateOnly = false;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest = new GoogleCloudDatapipelinesV1LaunchTemplateRequest();
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->gcsPath = 'nostrum';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters = new GoogleCloudDatapipelinesV1LaunchTemplateParameters();
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment = new GoogleCloudDatapipelinesV1RuntimeEnvironment();
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->additionalExperiments = [
        'recusandae',
        'omnis',
        'facilis',
        'perspiciatis',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->additionalUserLabels = [
        'porro' => 'consequuntur',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->bypassTempDirValidation = false;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->enableStreamingEngine = false;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->ipConfiguration = GoogleCloudDatapipelinesV1RuntimeEnvironmentIpConfigurationEnum::WORKER_IP_PUBLIC;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->kmsKeyName = 'error';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->machineType = 'eaque';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->maxWorkers = 577229;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->network = 'rerum';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->numWorkers = 237893;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->serviceAccountEmail = 'asperiores';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->subnetwork = 'earum';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->tempLocation = 'modi';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->workerRegion = 'iste';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->workerZone = 'dolorum';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->zone = 'deleniti';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->jobName = 'pariatur';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->parameters = [
        'nobis' => 'libero',
        'delectus' => 'quaerat',
        'quos' => 'aliquid',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->transformNameMapping = [
        'dolorem' => 'dolor',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->update = false;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->location = 'qui';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->projectId = 'ipsum';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->validateOnly = false;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cum';
    $request->fields = 'voluptate';
    $request->key = 'dignissimos';
    $request->name = 'Allen Parisian Jr.';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->updateMask = 'odio';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new DatapipelinesProjectsLocationsPipelinesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datapipelinesProjectsLocationsPipelinesPatch($request, $requestSecurity);

    if ($response->googleCloudDatapipelinesV1Pipeline !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datapipelinesProjectsLocationsPipelinesRun

Creates a job for the specified pipeline directly. You can use this method when the internal scheduler is not configured and you want to trigger the job directly or through an external system. Returns a "NOT_FOUND" error if the pipeline doesn't exist. Returns a "FORBIDDEN" error if the user doesn't have permission to access the pipeline or run jobs for the pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatapipelinesProjectsLocationsPipelinesRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatapipelinesProjectsLocationsPipelinesRunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatapipelinesProjectsLocationsPipelinesRunRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'voluptas' => 'natus',
        'eos' => 'atque',
        'sit' => 'fugiat',
        'ab' => 'soluta',
    ];
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptate';
    $request->fields = 'dolorum';
    $request->key = 'deleniti';
    $request->name = 'Terence Rau';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new DatapipelinesProjectsLocationsPipelinesRunSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datapipelinesProjectsLocationsPipelinesRun($request, $requestSecurity);

    if ($response->googleCloudDatapipelinesV1RunPipelineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datapipelinesProjectsLocationsPipelinesStop

Freezes pipeline execution permanently. If there's a corresponding scheduler entry, it's deleted, and the pipeline state is changed to "ARCHIVED". However, pipeline metadata is retained.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatapipelinesProjectsLocationsPipelinesStopRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatapipelinesProjectsLocationsPipelinesStopSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatapipelinesProjectsLocationsPipelinesStopRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'perferendis' => 'amet',
    ];
    $request->accessToken = 'optio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ad';
    $request->fields = 'saepe';
    $request->key = 'suscipit';
    $request->name = 'Rene Hane';
    $request->oauthToken = 'similique';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'quaerat';

    $requestSecurity = new DatapipelinesProjectsLocationsPipelinesStopSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datapipelinesProjectsLocationsPipelinesStop($request, $requestSecurity);

    if ($response->googleCloudDatapipelinesV1Pipeline !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
