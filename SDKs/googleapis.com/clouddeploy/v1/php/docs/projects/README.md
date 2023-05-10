# projects

### Available Operations

* [clouddeployProjectsLocationsDeliveryPipelinesCreate](#clouddeployprojectslocationsdeliverypipelinescreate) - Creates a new DeliveryPipeline in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesList](#clouddeployprojectslocationsdeliverypipelineslist) - Lists DeliveryPipelines in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesAbandon](#clouddeployprojectslocationsdeliverypipelinesreleasesabandon) - Abandons a Release in the Delivery Pipeline.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesCreate](#clouddeployprojectslocationsdeliverypipelinesreleasescreate) - Creates a new Release in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesList](#clouddeployprojectslocationsdeliverypipelinesreleaseslist) - Lists Releases in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvance](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsadvance) - Advances a Rollout in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprove](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsapprove) - Approves a Rollout.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreate](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutscreate) - Creates a new Rollout in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJob](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsignorejob) - Ignores the specified Job in a Rollout.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsList](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsjobrunslist) - Lists JobRuns in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminate](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsjobrunsterminate) - Terminates a Job Run in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsList](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutslist) - Lists Rollouts in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJob](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsretryjob) - Retries the specified Job in a Rollout.
* [clouddeployProjectsLocationsList](#clouddeployprojectslocationslist) - Lists information about the supported locations for this service.
* [clouddeployProjectsLocationsOperationsCancel](#clouddeployprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [clouddeployProjectsLocationsOperationsList](#clouddeployprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [clouddeployProjectsLocationsTargetsCreate](#clouddeployprojectslocationstargetscreate) - Creates a new Target in a given project and location.
* [clouddeployProjectsLocationsTargetsDelete](#clouddeployprojectslocationstargetsdelete) - Deletes a single Target.
* [clouddeployProjectsLocationsTargetsGet](#clouddeployprojectslocationstargetsget) - Gets details of a single Target.
* [clouddeployProjectsLocationsTargetsGetIamPolicy](#clouddeployprojectslocationstargetsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [clouddeployProjectsLocationsTargetsList](#clouddeployprojectslocationstargetslist) - Lists Targets in a given project and location.
* [clouddeployProjectsLocationsTargetsPatch](#clouddeployprojectslocationstargetspatch) - Updates the parameters of a single Target.
* [clouddeployProjectsLocationsTargetsSetIamPolicy](#clouddeployprojectslocationstargetssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [clouddeployProjectsLocationsTargetsTestIamPermissions](#clouddeployprojectslocationstargetstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## clouddeployProjectsLocationsDeliveryPipelinesCreate

Creates a new DeliveryPipeline in a given project and location.

### Example Usage

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
        'quod' => 'quod',
        'esse' => 'totam',
    ];
    $request->deliveryPipelineInput->condition = new PipelineCondition();
    $request->deliveryPipelineInput->condition->pipelineReadyCondition = new PipelineReadyCondition();
    $request->deliveryPipelineInput->condition->pipelineReadyCondition->status = false;
    $request->deliveryPipelineInput->condition->pipelineReadyCondition->updateTime = 'porro';
    $request->deliveryPipelineInput->condition->targetsPresentCondition = new TargetsPresentCondition();
    $request->deliveryPipelineInput->condition->targetsPresentCondition->missingTargets = [
        'dicta',
        'nam',
        'officia',
    ];
    $request->deliveryPipelineInput->condition->targetsPresentCondition->status = false;
    $request->deliveryPipelineInput->condition->targetsPresentCondition->updateTime = 'occaecati';
    $request->deliveryPipelineInput->condition->targetsTypeCondition = new TargetsTypeCondition();
    $request->deliveryPipelineInput->condition->targetsTypeCondition->errorDetails = 'fugit';
    $request->deliveryPipelineInput->condition->targetsTypeCondition->status = false;
    $request->deliveryPipelineInput->description = 'deleniti';
    $request->deliveryPipelineInput->etag = 'hic';
    $request->deliveryPipelineInput->labels = [
        'totam' => 'beatae',
        'commodi' => 'molestiae',
        'modi' => 'qui',
        'impedit' => 'cum',
    ];
    $request->deliveryPipelineInput->name = 'Edna Mante II';
    $request->deliveryPipelineInput->serialPipeline = new SerialPipeline();
    $request->deliveryPipelineInput->serialPipeline->stages = [
        new Stage(),
        new Stage(),
        new Stage(),
    ];
    $request->deliveryPipelineInput->suspended = false;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->deliveryPipelineId = 'natus';
    $request->fields = 'laboriosam';
    $request->key = 'hic';
    $request->oauthToken = 'saepe';
    $request->parent = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->requestId = 'corporis';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'iure';
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

## clouddeployProjectsLocationsDeliveryPipelinesList

Lists DeliveryPipelines in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsDeliveryPipelinesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'reiciendis';
    $request->filter = 'est';
    $request->key = 'mollitia';
    $request->oauthToken = 'laborum';
    $request->orderBy = 'dolores';
    $request->pageSize = 210382;
    $request->pageToken = 'corporis';
    $request->parent = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new ClouddeployProjectsLocationsDeliveryPipelinesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsDeliveryPipelinesList($request, $requestSecurity);

    if ($response->listDeliveryPipelinesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddeployProjectsLocationsDeliveryPipelinesReleasesAbandon

Abandons a Release in the Delivery Pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'excepturi' => 'accusantium',
        'iure' => 'culpa',
    ];
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'mollitia';
    $request->key = 'dolorem';
    $request->name = 'Carlos Ziemann';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsDeliveryPipelinesReleasesAbandon($request, $requestSecurity);

    if ($response->abandonReleaseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddeployProjectsLocationsDeliveryPipelinesReleasesCreate

Creates a new Release in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseInput;
use \OpenAPI\OpenAPI\Models\Shared\BuildArtifact;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseCondition;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseReadyCondition;
use \OpenAPI\OpenAPI\Models\Shared\SkaffoldSupportedCondition;
use \OpenAPI\OpenAPI\Models\Shared\SkaffoldSupportedConditionSkaffoldSupportStateEnum;
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
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->releaseInput = new ReleaseInput();
    $request->releaseInput->annotations = [
        'quia' => 'quis',
        'vitae' => 'laborum',
        'animi' => 'enim',
    ];
    $request->releaseInput->buildArtifacts = [
        new BuildArtifact(),
    ];
    $request->releaseInput->condition = new ReleaseCondition();
    $request->releaseInput->condition->releaseReadyCondition = new ReleaseReadyCondition();
    $request->releaseInput->condition->releaseReadyCondition->status = false;
    $request->releaseInput->condition->skaffoldSupportedCondition = new SkaffoldSupportedCondition();
    $request->releaseInput->condition->skaffoldSupportedCondition->maintenanceModeTime = 'quo';
    $request->releaseInput->condition->skaffoldSupportedCondition->skaffoldSupportState = SkaffoldSupportedConditionSkaffoldSupportStateEnum::SKAFFOLD_SUPPORT_STATE_UNSPECIFIED;
    $request->releaseInput->condition->skaffoldSupportedCondition->status = false;
    $request->releaseInput->condition->skaffoldSupportedCondition->supportExpirationTime = 'tenetur';
    $request->releaseInput->deliveryPipelineSnapshot = new DeliveryPipelineInput();
    $request->releaseInput->deliveryPipelineSnapshot->annotations = [
        'id' => 'possimus',
        'aut' => 'quasi',
    ];
    $request->releaseInput->deliveryPipelineSnapshot->condition = new PipelineCondition();
    $request->releaseInput->deliveryPipelineSnapshot->condition->pipelineReadyCondition = new PipelineReadyCondition();
    $request->releaseInput->deliveryPipelineSnapshot->condition->pipelineReadyCondition->status = false;
    $request->releaseInput->deliveryPipelineSnapshot->condition->pipelineReadyCondition->updateTime = 'error';
    $request->releaseInput->deliveryPipelineSnapshot->condition->targetsPresentCondition = new TargetsPresentCondition();
    $request->releaseInput->deliveryPipelineSnapshot->condition->targetsPresentCondition->missingTargets = [
        'laborum',
        'quasi',
        'reiciendis',
        'voluptatibus',
    ];
    $request->releaseInput->deliveryPipelineSnapshot->condition->targetsPresentCondition->status = false;
    $request->releaseInput->deliveryPipelineSnapshot->condition->targetsPresentCondition->updateTime = 'vero';
    $request->releaseInput->deliveryPipelineSnapshot->condition->targetsTypeCondition = new TargetsTypeCondition();
    $request->releaseInput->deliveryPipelineSnapshot->condition->targetsTypeCondition->errorDetails = 'nihil';
    $request->releaseInput->deliveryPipelineSnapshot->condition->targetsTypeCondition->status = false;
    $request->releaseInput->deliveryPipelineSnapshot->description = 'praesentium';
    $request->releaseInput->deliveryPipelineSnapshot->etag = 'voluptatibus';
    $request->releaseInput->deliveryPipelineSnapshot->labels = [
        'omnis' => 'voluptate',
    ];
    $request->releaseInput->deliveryPipelineSnapshot->name = 'Thomas Batz';
    $request->releaseInput->deliveryPipelineSnapshot->serialPipeline = new SerialPipeline();
    $request->releaseInput->deliveryPipelineSnapshot->serialPipeline->stages = [
        new Stage(),
        new Stage(),
        new Stage(),
        new Stage(),
    ];
    $request->releaseInput->deliveryPipelineSnapshot->suspended = false;
    $request->releaseInput->description = 'dicta';
    $request->releaseInput->etag = 'corporis';
    $request->releaseInput->labels = [
        'iusto' => 'dicta',
        'harum' => 'enim',
    ];
    $request->releaseInput->name = 'Mrs. Leslie VonRueden';
    $request->releaseInput->skaffoldConfigPath = 'molestias';
    $request->releaseInput->skaffoldConfigUri = 'excepturi';
    $request->releaseInput->skaffoldVersion = 'pariatur';
    $request->accessToken = 'modi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rem';
    $request->fields = 'voluptates';
    $request->key = 'quasi';
    $request->oauthToken = 'repudiandae';
    $request->parent = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->releaseId = 'itaque';
    $request->requestId = 'incidunt';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'consequatur';
    $request->validateOnly = false;

    $requestSecurity = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsDeliveryPipelinesReleasesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddeployProjectsLocationsDeliveryPipelinesReleasesList

Lists Releases in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesReleasesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesReleasesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'distinctio';
    $request->filter = 'quibusdam';
    $request->key = 'labore';
    $request->oauthToken = 'modi';
    $request->orderBy = 'qui';
    $request->pageSize = 397821;
    $request->pageToken = 'cupiditate';
    $request->parent = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'assumenda';

    $requestSecurity = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsDeliveryPipelinesReleasesList($request, $requestSecurity);

    if ($response->listReleasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvance

Advances a Rollout in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvanceRolloutRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvanceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvanceRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->advanceRolloutRequest = new AdvanceRolloutRequest();
    $request->advanceRolloutRequest->phaseId = 'alias';
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'excepturi';
    $request->fields = 'tempora';
    $request->key = 'facilis';
    $request->name = 'Francisco Windler';
    $request->oauthToken = 'eligendi';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvanceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvance($request, $requestSecurity);

    if ($response->advanceRolloutResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprove

Approves a Rollout.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApproveRolloutRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->approveRolloutRequest = new ApproveRolloutRequest();
    $request->approveRolloutRequest->approved = false;
    $request->accessToken = 'sint';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'debitis';
    $request->key = 'a';
    $request->name = 'Arnold Kirlin';
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprove($request, $requestSecurity);

    if ($response->approveRolloutResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreate

Creates a new Rollout in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RolloutInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->rolloutInput = new RolloutInput();
    $request->rolloutInput->annotations = [
        'aliquid' => 'laborum',
        'accusamus' => 'non',
    ];
    $request->rolloutInput->description = 'occaecati';
    $request->rolloutInput->etag = 'enim';
    $request->rolloutInput->labels = [
        'delectus' => 'quidem',
        'provident' => 'nam',
        'id' => 'blanditiis',
        'deleniti' => 'sapiente',
    ];
    $request->rolloutInput->name = 'Sandy Huels';
    $request->rolloutInput->targetId = 'omnis';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nihil';
    $request->fields = 'magnam';
    $request->key = 'distinctio';
    $request->oauthToken = 'id';
    $request->parent = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->requestId = 'suscipit';
    $request->rolloutId = 'natus';
    $request->startingPhaseId = 'nobis';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'vero';
    $request->validateOnly = false;

    $requestSecurity = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJob

Ignores the specified Job in a Rollout.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\IgnoreJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJobSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJobRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->ignoreJobRequest = new IgnoreJobRequest();
    $request->ignoreJobRequest->jobId = 'architecto';
    $request->ignoreJobRequest->phaseId = 'magnam';
    $request->accessToken = 'et';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ullam';
    $request->fields = 'provident';
    $request->key = 'quos';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->rollout = 'mollitia';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJobSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJob($request, $requestSecurity);

    if ($response->ignoreJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsList

Lists JobRuns in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'necessitatibus';
    $request->fields = 'odit';
    $request->filter = 'nemo';
    $request->key = 'quasi';
    $request->oauthToken = 'iure';
    $request->orderBy = 'doloribus';
    $request->pageSize = 891924;
    $request->pageToken = 'eius';
    $request->parent = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'in';

    $requestSecurity = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsList($request, $requestSecurity);

    if ($response->listJobRunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminate

Terminates a Job Run in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'repudiandae' => 'ullam',
    ];
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellat';
    $request->fields = 'quibusdam';
    $request->key = 'sed';
    $request->name = 'Al Bashirian';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'magni';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminate($request, $requestSecurity);

    if ($response->terminateJobRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsList

Lists Rollouts in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'excepturi';
    $request->filter = 'odit';
    $request->key = 'ea';
    $request->oauthToken = 'accusantium';
    $request->orderBy = 'ab';
    $request->pageSize = 982575;
    $request->pageToken = 'quidem';
    $request->parent = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'nam';

    $requestSecurity = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsList($request, $requestSecurity);

    if ($response->listRolloutsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJob

Retries the specified Job in a Rollout.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RetryJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->retryJobRequest = new RetryJobRequest();
    $request->retryJobRequest->jobId = 'pariatur';
    $request->retryJobRequest->phaseId = 'nemo';
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'amet';
    $request->key = 'aut';
    $request->oauthToken = 'cumque';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->rollout = 'hic';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJob($request, $requestSecurity);

    if ($response->retryJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddeployProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dignissimos';
    $request->fields = 'eaque';
    $request->filter = 'quis';
    $request->key = 'nesciunt';
    $request->name = 'Dorothy Dach';
    $request->oauthToken = 'dolor';
    $request->pageSize = 874573;
    $request->pageToken = 'nostrum';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new ClouddeployProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddeployProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'voluptatem' => 'porro',
        'consequuntur' => 'blanditiis',
        'error' => 'eaque',
    ];
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'adipisci';
    $request->fields = 'asperiores';
    $request->key = 'earum';
    $request->name = 'Sheryl Parisian';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new ClouddeployProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddeployProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'dolorem';
    $request->filter = 'dolor';
    $request->key = 'qui';
    $request->name = 'Mindy Marks';
    $request->oauthToken = 'dignissimos';
    $request->pageSize = 970237;
    $request->pageToken = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new ClouddeployProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddeployProjectsLocationsTargetsCreate

Creates a new Target in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsTargetsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetInput;
use \OpenAPI\OpenAPI\Models\Shared\AnthosCluster;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionConfig;
use \OpenAPI\OpenAPI\Models\Shared\DefaultPool;
use \OpenAPI\OpenAPI\Models\Shared\PrivatePool;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionConfigUsagesEnum;
use \OpenAPI\OpenAPI\Models\Shared\GkeCluster;
use \OpenAPI\OpenAPI\Models\Shared\MultiTarget;
use \OpenAPI\OpenAPI\Models\Shared\CloudRunLocation;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsTargetsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsTargetsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetInput = new TargetInput();
    $request->targetInput->annotations = [
        'iure' => 'odio',
    ];
    $request->targetInput->anthosCluster = new AnthosCluster();
    $request->targetInput->anthosCluster->membership = 'quaerat';
    $request->targetInput->description = 'accusamus';
    $request->targetInput->etag = 'quidem';
    $request->targetInput->executionConfigs = [
        new ExecutionConfig(),
        new ExecutionConfig(),
        new ExecutionConfig(),
        new ExecutionConfig(),
    ];
    $request->targetInput->gke = new GkeCluster();
    $request->targetInput->gke->cluster = 'voluptas';
    $request->targetInput->gke->internalIp = false;
    $request->targetInput->labels = [
        'eos' => 'atque',
        'sit' => 'fugiat',
        'ab' => 'soluta',
    ];
    $request->targetInput->multiTarget = new MultiTarget();
    $request->targetInput->multiTarget->targetIds = [
        'iusto',
        'voluptate',
        'dolorum',
    ];
    $request->targetInput->name = 'Arturo Treutel';
    $request->targetInput->requireApproval = false;
    $request->targetInput->run = new CloudRunLocation();
    $request->targetInput->run->location = 'nihil';
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'id';
    $request->fields = 'saepe';
    $request->key = 'eius';
    $request->oauthToken = 'aspernatur';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->requestId = 'optio';
    $request->targetId = 'accusamus';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'saepe';
    $request->validateOnly = false;

    $requestSecurity = new ClouddeployProjectsLocationsTargetsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsTargetsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddeployProjectsLocationsTargetsDelete

Deletes a single Target.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsTargetsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsTargetsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsTargetsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->allowMissing = false;
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->etag = 'repellendus';
    $request->fields = 'totam';
    $request->key = 'similique';
    $request->name = 'Cristina Hahn';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'officiis';
    $request->requestId = 'qui';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'a';
    $request->validateOnly = false;

    $requestSecurity = new ClouddeployProjectsLocationsTargetsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsTargetsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddeployProjectsLocationsTargetsGet

Gets details of a single Target.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsTargetsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsTargetsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsTargetsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'harum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'quisquam';
    $request->key = 'tenetur';
    $request->name = 'Kelli Thompson';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new ClouddeployProjectsLocationsTargetsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsTargetsGet($request, $requestSecurity);

    if ($response->target !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddeployProjectsLocationsTargetsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsTargetsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsTargetsGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsTargetsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sed';
    $request->fields = 'vel';
    $request->key = 'libero';
    $request->oauthToken = 'voluptas';
    $request->optionsRequestedPolicyVersion = 646265;
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->resource = 'ipsum';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new ClouddeployProjectsLocationsTargetsGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsTargetsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddeployProjectsLocationsTargetsList

Lists Targets in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsTargetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsTargetsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsTargetsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'soluta';
    $request->fields = 'dicta';
    $request->filter = 'laborum';
    $request->key = 'totam';
    $request->oauthToken = 'incidunt';
    $request->orderBy = 'aspernatur';
    $request->pageSize = 174909;
    $request->pageToken = 'distinctio';
    $request->parent = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'molestias';

    $requestSecurity = new ClouddeployProjectsLocationsTargetsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsTargetsList($request, $requestSecurity);

    if ($response->listTargetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddeployProjectsLocationsTargetsPatch

Updates the parameters of a single Target.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsTargetsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetInput;
use \OpenAPI\OpenAPI\Models\Shared\AnthosCluster;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionConfig;
use \OpenAPI\OpenAPI\Models\Shared\DefaultPool;
use \OpenAPI\OpenAPI\Models\Shared\PrivatePool;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionConfigUsagesEnum;
use \OpenAPI\OpenAPI\Models\Shared\GkeCluster;
use \OpenAPI\OpenAPI\Models\Shared\MultiTarget;
use \OpenAPI\OpenAPI\Models\Shared\CloudRunLocation;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsTargetsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsTargetsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetInput = new TargetInput();
    $request->targetInput->annotations = [
        'neque' => 'fugit',
    ];
    $request->targetInput->anthosCluster = new AnthosCluster();
    $request->targetInput->anthosCluster->membership = 'magni';
    $request->targetInput->description = 'odio';
    $request->targetInput->etag = 'sunt';
    $request->targetInput->executionConfigs = [
        new ExecutionConfig(),
        new ExecutionConfig(),
    ];
    $request->targetInput->gke = new GkeCluster();
    $request->targetInput->gke->cluster = 'nam';
    $request->targetInput->gke->internalIp = false;
    $request->targetInput->labels = [
        'voluptatem' => 'cumque',
        'soluta' => 'nobis',
        'et' => 'saepe',
        'ipsum' => 'veritatis',
    ];
    $request->targetInput->multiTarget = new MultiTarget();
    $request->targetInput->multiTarget->targetIds = [
        'quos',
        'tempore',
        'cupiditate',
    ];
    $request->targetInput->name = 'Dixie Durgan';
    $request->targetInput->requireApproval = false;
    $request->targetInput->run = new CloudRunLocation();
    $request->targetInput->run->location = 'adipisci';
    $request->accessToken = 'dolorum';
    $request->allowMissing = false;
    $request->alt = AltEnum::JSON;
    $request->callback = 'quae';
    $request->fields = 'aut';
    $request->key = 'quas';
    $request->name = 'William Ortiz';
    $request->oauthToken = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ut';
    $request->requestId = 'facilis';
    $request->updateMask = 'cupiditate';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'quae';
    $request->validateOnly = false;

    $requestSecurity = new ClouddeployProjectsLocationsTargetsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsTargetsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddeployProjectsLocationsTargetsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsTargetsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsTargetsSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsTargetsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'voluptatibus';
    $request->setIamPolicyRequest->policy->version = 787542;
    $request->setIamPolicyRequest->updateMask = 'vero';
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'delectus';
    $request->key = 'voluptate';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->resource = 'tenetur';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new ClouddeployProjectsLocationsTargetsSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsTargetsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clouddeployProjectsLocationsTargetsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClouddeployProjectsLocationsTargetsTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'odio',
        'similique',
        'facilis',
        'vero',
    ];
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quibusdam';
    $request->fields = 'illum';
    $request->key = 'sequi';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->resource = 'aut';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'exercitationem';

    $requestSecurity = new ClouddeployProjectsLocationsTargetsTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->clouddeployProjectsLocationsTargetsTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
