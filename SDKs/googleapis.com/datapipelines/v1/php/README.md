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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatapipelinesV1PipelineInput = new GoogleCloudDatapipelinesV1PipelineInput();
    $request->googleCloudDatapipelinesV1PipelineInput->displayName = 'provident';
    $request->googleCloudDatapipelinesV1PipelineInput->name = 'Ellis Mitchell';
    $request->googleCloudDatapipelinesV1PipelineInput->pipelineSources = [
        'vel' => 'error',
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->scheduleInfo = new GoogleCloudDatapipelinesV1ScheduleSpecInput();
    $request->googleCloudDatapipelinesV1PipelineInput->scheduleInfo->schedule = 'delectus';
    $request->googleCloudDatapipelinesV1PipelineInput->scheduleInfo->timeZone = 'tempora';
    $request->googleCloudDatapipelinesV1PipelineInput->schedulerServiceAccountEmail = 'suscipit';
    $request->googleCloudDatapipelinesV1PipelineInput->state = GoogleCloudDatapipelinesV1PipelineStateEnum::STATE_ACTIVE;
    $request->googleCloudDatapipelinesV1PipelineInput->type = GoogleCloudDatapipelinesV1PipelineTypeEnum::PIPELINE_TYPE_STREAMING;
    $request->googleCloudDatapipelinesV1PipelineInput->workload = new GoogleCloudDatapipelinesV1Workload();
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest = new GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest();
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter = new GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter();
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->containerSpecGcsPath = 'placeat';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment = new GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment();
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->additionalExperiments = [
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->additionalUserLabels = [
        'temporibus' => 'ab',
        'quis' => 'veritatis',
        'deserunt' => 'perferendis',
        'ipsam' => 'repellendus',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->enableStreamingEngine = false;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->flexrsGoal = GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum::FLEXRS_COST_OPTIMIZED;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->ipConfiguration = GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum::WORKER_IP_PRIVATE;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->kmsKeyName = 'odit';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->machineType = 'at';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->maxWorkers = 870088;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->network = 'maiores';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->numWorkers = 473608;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->serviceAccountEmail = 'quod';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->subnetwork = 'quod';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->tempLocation = 'esse';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->workerRegion = 'totam';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->workerZone = 'porro';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->environment->zone = 'dolorum';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->jobName = 'dicta';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->launchOptions = [
        'officia' => 'occaecati',
        'fugit' => 'deleniti',
        'hic' => 'optio',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->parameters = [
        'beatae' => 'commodi',
        'molestiae' => 'modi',
        'qui' => 'impedit',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->transformNameMappings = [
        'esse' => 'ipsum',
        'excepturi' => 'aspernatur',
        'perferendis' => 'ad',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->launchParameter->update = false;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->location = 'natus';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->projectId = 'sed';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowFlexTemplateRequest->validateOnly = false;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest = new GoogleCloudDatapipelinesV1LaunchTemplateRequest();
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->gcsPath = 'iste';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters = new GoogleCloudDatapipelinesV1LaunchTemplateParameters();
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment = new GoogleCloudDatapipelinesV1RuntimeEnvironment();
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->additionalExperiments = [
        'natus',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->additionalUserLabels = [
        'hic' => 'saepe',
        'fuga' => 'in',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->bypassTempDirValidation = false;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->enableStreamingEngine = false;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->ipConfiguration = GoogleCloudDatapipelinesV1RuntimeEnvironmentIpConfigurationEnum::WORKER_IP_PUBLIC;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->kmsKeyName = 'iste';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->machineType = 'iure';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->maxWorkers = 902349;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->network = 'quidem';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->numWorkers = 99280;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->serviceAccountEmail = 'ipsa';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->subnetwork = 'reiciendis';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->tempLocation = 'est';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->workerRegion = 'mollitia';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->workerZone = 'laborum';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->environment->zone = 'dolores';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->jobName = 'dolorem';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->parameters = [
        'explicabo' => 'nobis',
        'enim' => 'omnis',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->transformNameMapping = [
        'minima' => 'excepturi',
        'accusantium' => 'iure',
    ];
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->launchParameters->update = false;
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->location = 'culpa';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->projectId = 'doloribus';
    $request->googleCloudDatapipelinesV1PipelineInput->workload->dataflowLaunchTemplateRequest->validateOnly = false;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->fields = 'dolorem';
    $request->key = 'culpa';
    $request->oauthToken = 'consequuntur';
    $request->parent = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'numquam';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [datapipelinesProjectsLocationsPipelinesCreate](docs/projects/README.md#datapipelinesprojectslocationspipelinescreate) - Creates a pipeline. For a batch pipeline, you can pass scheduler information. Data Pipelines uses the scheduler information to create an internal scheduler that runs jobs periodically. If the internal scheduler is not configured, you can use RunPipeline to run jobs.
* [datapipelinesProjectsLocationsPipelinesDelete](docs/projects/README.md#datapipelinesprojectslocationspipelinesdelete) - Deletes a pipeline. If a scheduler job is attached to the pipeline, it will be deleted.
* [datapipelinesProjectsLocationsPipelinesGet](docs/projects/README.md#datapipelinesprojectslocationspipelinesget) - Looks up a single pipeline. Returns a "NOT_FOUND" error if no such pipeline exists. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
* [datapipelinesProjectsLocationsPipelinesJobsList](docs/projects/README.md#datapipelinesprojectslocationspipelinesjobslist) - Lists jobs for a given pipeline. Throws a "FORBIDDEN" error if the caller doesn't have permission to access it.
* [datapipelinesProjectsLocationsPipelinesList](docs/projects/README.md#datapipelinesprojectslocationspipelineslist) - Lists pipelines. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
* [datapipelinesProjectsLocationsPipelinesPatch](docs/projects/README.md#datapipelinesprojectslocationspipelinespatch) - Updates a pipeline. If successful, the updated Pipeline is returned. Returns `NOT_FOUND` if the pipeline doesn't exist. If UpdatePipeline does not return successfully, you can retry the UpdatePipeline request until you receive a successful response.
* [datapipelinesProjectsLocationsPipelinesRun](docs/projects/README.md#datapipelinesprojectslocationspipelinesrun) - Creates a job for the specified pipeline directly. You can use this method when the internal scheduler is not configured and you want to trigger the job directly or through an external system. Returns a "NOT_FOUND" error if the pipeline doesn't exist. Returns a "FORBIDDEN" error if the user doesn't have permission to access the pipeline or run jobs for the pipeline.
* [datapipelinesProjectsLocationsPipelinesStop](docs/projects/README.md#datapipelinesprojectslocationspipelinesstop) - Freezes pipeline execution permanently. If there's a corresponding scheduler entry, it's deleted, and the pipeline state is changed to "ARCHIVED". However, pipeline metadata is retained.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
