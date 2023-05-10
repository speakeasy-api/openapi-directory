<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsJobsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2JobInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2BinaryAuthorization;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ExecutionReference;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2JobLaunchStageEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ExecutionTemplate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2TaskTemplate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2Container;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2EnvVar;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2EnvVarSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2SecretKeySelector;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2Probe;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2GRPCAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2HTTPGetAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2HTTPHeader;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2TCPSocketAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ContainerPort;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ResourceRequirements;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2VolumeMount;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2Volume;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2CloudSqlInstance;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2EmptyDirVolumeSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2EmptyDirVolumeSourceMediumEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2SecretVolumeSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2VersionToPath;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2VpcAccess;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2VpcAccessEgressEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2Condition;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionExecutionReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionRevisionReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsJobsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsJobsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRunV2JobInput = new GoogleCloudRunV2JobInput();
    $request->googleCloudRunV2JobInput->annotations = [
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->googleCloudRunV2JobInput->binaryAuthorization = new GoogleCloudRunV2BinaryAuthorization();
    $request->googleCloudRunV2JobInput->binaryAuthorization->breakglassJustification = 'vel';
    $request->googleCloudRunV2JobInput->binaryAuthorization->useDefault = false;
    $request->googleCloudRunV2JobInput->client = 'error';
    $request->googleCloudRunV2JobInput->clientVersion = 'deserunt';
    $request->googleCloudRunV2JobInput->labels = [
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->googleCloudRunV2JobInput->latestCreatedExecution = new GoogleCloudRunV2ExecutionReference();
    $request->googleCloudRunV2JobInput->latestCreatedExecution->completionTime = 'delectus';
    $request->googleCloudRunV2JobInput->latestCreatedExecution->createTime = 'tempora';
    $request->googleCloudRunV2JobInput->latestCreatedExecution->name = 'Minnie Schiller';
    $request->googleCloudRunV2JobInput->launchStage = GoogleCloudRunV2JobLaunchStageEnum::EARLY_ACCESS;
    $request->googleCloudRunV2JobInput->name = 'Charlie Walsh II';
    $request->googleCloudRunV2JobInput->template = new GoogleCloudRunV2ExecutionTemplate();
    $request->googleCloudRunV2JobInput->template->annotations = [
        'deserunt' => 'perferendis',
    ];
    $request->googleCloudRunV2JobInput->template->labels = [
        'repellendus' => 'sapiente',
        'quo' => 'odit',
    ];
    $request->googleCloudRunV2JobInput->template->parallelism = 870013;
    $request->googleCloudRunV2JobInput->template->taskCount = 870088;
    $request->googleCloudRunV2JobInput->template->template = new GoogleCloudRunV2TaskTemplate();
    $request->googleCloudRunV2JobInput->template->template->containers = [
        new GoogleCloudRunV2Container(),
        new GoogleCloudRunV2Container(),
        new GoogleCloudRunV2Container(),
        new GoogleCloudRunV2Container(),
    ];
    $request->googleCloudRunV2JobInput->template->template->encryptionKey = 'molestiae';
    $request->googleCloudRunV2JobInput->template->template->executionEnvironment = GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum::EXECUTION_ENVIRONMENT_GEN2;
    $request->googleCloudRunV2JobInput->template->template->maxRetries = 800911;
    $request->googleCloudRunV2JobInput->template->template->serviceAccount = 'esse';
    $request->googleCloudRunV2JobInput->template->template->timeout = 'totam';
    $request->googleCloudRunV2JobInput->template->template->volumes = [
        new GoogleCloudRunV2Volume(),
        new GoogleCloudRunV2Volume(),
        new GoogleCloudRunV2Volume(),
        new GoogleCloudRunV2Volume(),
    ];
    $request->googleCloudRunV2JobInput->template->template->vpcAccess = new GoogleCloudRunV2VpcAccess();
    $request->googleCloudRunV2JobInput->template->template->vpcAccess->connector = 'dolorum';
    $request->googleCloudRunV2JobInput->template->template->vpcAccess->egress = GoogleCloudRunV2VpcAccessEgressEnum::VPC_EGRESS_UNSPECIFIED;
    $request->googleCloudRunV2JobInput->terminalCondition = new GoogleCloudRunV2Condition();
    $request->googleCloudRunV2JobInput->terminalCondition->executionReason = GoogleCloudRunV2ConditionExecutionReasonEnum::CANCELLED;
    $request->googleCloudRunV2JobInput->terminalCondition->lastTransitionTime = 'officia';
    $request->googleCloudRunV2JobInput->terminalCondition->message = 'occaecati';
    $request->googleCloudRunV2JobInput->terminalCondition->reason = GoogleCloudRunV2ConditionReasonEnum::REVISION_FAILED;
    $request->googleCloudRunV2JobInput->terminalCondition->revisionReason = GoogleCloudRunV2ConditionRevisionReasonEnum::HEALTH_CHECK_CONTAINER_ERROR;
    $request->googleCloudRunV2JobInput->terminalCondition->severity = GoogleCloudRunV2ConditionSeverityEnum::INFO;
    $request->googleCloudRunV2JobInput->terminalCondition->state = GoogleCloudRunV2ConditionStateEnum::CONDITION_FAILED;
    $request->googleCloudRunV2JobInput->terminalCondition->type = 'totam';
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'modi';
    $request->jobId = 'qui';
    $request->key = 'impedit';
    $request->oauthToken = 'cum';
    $request->parent = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'aspernatur';
    $request->validateOnly = false;

    $requestSecurity = new RunProjectsLocationsJobsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsJobsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->