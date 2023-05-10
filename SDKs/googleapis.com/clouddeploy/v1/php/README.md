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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [clouddeployProjectsLocationsDeliveryPipelinesCreate](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinescreate) - Creates a new DeliveryPipeline in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesList](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelineslist) - Lists DeliveryPipelines in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesAbandon](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesabandon) - Abandons a Release in the Delivery Pipeline.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesCreate](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasescreate) - Creates a new Release in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesList](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleaseslist) - Lists Releases in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvance](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsadvance) - Advances a Rollout in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprove](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsapprove) - Approves a Rollout.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreate](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutscreate) - Creates a new Rollout in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJob](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsignorejob) - Ignores the specified Job in a Rollout.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsList](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsjobrunslist) - Lists JobRuns in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminate](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsjobrunsterminate) - Terminates a Job Run in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsList](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutslist) - Lists Rollouts in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJob](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsretryjob) - Retries the specified Job in a Rollout.
* [clouddeployProjectsLocationsList](docs/projects/README.md#clouddeployprojectslocationslist) - Lists information about the supported locations for this service.
* [clouddeployProjectsLocationsOperationsCancel](docs/projects/README.md#clouddeployprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [clouddeployProjectsLocationsOperationsList](docs/projects/README.md#clouddeployprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [clouddeployProjectsLocationsTargetsCreate](docs/projects/README.md#clouddeployprojectslocationstargetscreate) - Creates a new Target in a given project and location.
* [clouddeployProjectsLocationsTargetsDelete](docs/projects/README.md#clouddeployprojectslocationstargetsdelete) - Deletes a single Target.
* [clouddeployProjectsLocationsTargetsGet](docs/projects/README.md#clouddeployprojectslocationstargetsget) - Gets details of a single Target.
* [clouddeployProjectsLocationsTargetsGetIamPolicy](docs/projects/README.md#clouddeployprojectslocationstargetsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [clouddeployProjectsLocationsTargetsList](docs/projects/README.md#clouddeployprojectslocationstargetslist) - Lists Targets in a given project and location.
* [clouddeployProjectsLocationsTargetsPatch](docs/projects/README.md#clouddeployprojectslocationstargetspatch) - Updates the parameters of a single Target.
* [clouddeployProjectsLocationsTargetsSetIamPolicy](docs/projects/README.md#clouddeployprojectslocationstargetssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [clouddeployProjectsLocationsTargetsTestIamPermissions](docs/projects/README.md#clouddeployprojectslocationstargetstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
