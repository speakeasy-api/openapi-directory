<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeliveryPipelineInput;
use \OpenAPI\OpenAPI\Models\Shared\PipelineCondition;
use \OpenAPI\OpenAPI\Models\Shared\PipelineReadyCondition;
use \OpenAPI\OpenAPI\Models\Shared\TargetsPresentCondition;
use \OpenAPI\OpenAPI\Models\Shared\TargetsTypeCondition;
use \OpenAPI\OpenAPI\Models\Shared\SerialPipeline;
use \OpenAPI\OpenAPI\Models\Shared\Stage;
use \OpenAPI\OpenAPI\Models\Shared\Strategy;
use \OpenAPI\OpenAPI\Models\Shared\Canary;
use \OpenAPI\OpenAPI\Models\Shared\CanaryDeployment;
use \OpenAPI\OpenAPI\Models\Shared\CustomCanaryDeployment;
use \OpenAPI\OpenAPI\Models\Shared\PhaseConfig;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeConfig;
use \OpenAPI\OpenAPI\Models\Shared\CloudRunConfig;
use \OpenAPI\OpenAPI\Models\Shared\KubernetesConfig;
use \OpenAPI\OpenAPI\Models\Shared\GatewayServiceMesh;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNetworking;
use \OpenAPI\OpenAPI\Models\Shared\Standard;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->deliveryPipelineInput = new DeliveryPipelineInput();
    $request->deliveryPipelineInput->annotations = [
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->deliveryPipelineInput->condition = new PipelineCondition();
    $request->deliveryPipelineInput->condition->pipelineReadyCondition = new PipelineReadyCondition();
    $request->deliveryPipelineInput->condition->pipelineReadyCondition->status = false;
    $request->deliveryPipelineInput->condition->pipelineReadyCondition->updateTime = 'vel';
    $request->deliveryPipelineInput->condition->targetsPresentCondition = new TargetsPresentCondition();
    $request->deliveryPipelineInput->condition->targetsPresentCondition->missingTargets = [
        'deserunt',
        'suscipit',
        'iure',
    ];
    $request->deliveryPipelineInput->condition->targetsPresentCondition->status = false;
    $request->deliveryPipelineInput->condition->targetsPresentCondition->updateTime = 'magnam';
    $request->deliveryPipelineInput->condition->targetsTypeCondition = new TargetsTypeCondition();
    $request->deliveryPipelineInput->condition->targetsTypeCondition->errorDetails = 'debitis';
    $request->deliveryPipelineInput->condition->targetsTypeCondition->status = false;
    $request->deliveryPipelineInput->description = 'ipsa';
    $request->deliveryPipelineInput->etag = 'delectus';
    $request->deliveryPipelineInput->labels = [
        'suscipit' => 'molestiae',
        'minus' => 'placeat',
    ];
    $request->deliveryPipelineInput->name = 'Ted Mante';
    $request->deliveryPipelineInput->serialPipeline = new SerialPipeline();
    $request->deliveryPipelineInput->serialPipeline->stages = [
        new Stage(),
        new Stage(),
        new Stage(),
        new Stage(),
    ];
    $request->deliveryPipelineInput->suspended = false;
    $request->accessToken = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->deliveryPipelineId = 'deserunt';
    $request->fields = 'perferendis';
    $request->key = 'ipsam';
    $request->oauthToken = 'repellendus';
    $request->parent = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->requestId = 'odit';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'at';
    $request->validateOnly = false;

    $requestSecurity = new ClouddeployProjectsLocationsDeliveryPipelinesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsDeliveryPipelinesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->