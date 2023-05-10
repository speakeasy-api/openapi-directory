# deployments

### Available Operations

* [deploymentmanagerDeploymentsCancelPreview](#deploymentmanagerdeploymentscancelpreview) - Cancels and removes the preview currently associated with the deployment.
* [deploymentmanagerDeploymentsDelete](#deploymentmanagerdeploymentsdelete) - Deletes a deployment and all of the resources in the deployment.
* [deploymentmanagerDeploymentsGet](#deploymentmanagerdeploymentsget) - Gets information about a specific deployment.
* [deploymentmanagerDeploymentsGetIamPolicy](#deploymentmanagerdeploymentsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [deploymentmanagerDeploymentsInsert](#deploymentmanagerdeploymentsinsert) - Creates a deployment and all of the resources described by the deployment manifest.
* [deploymentmanagerDeploymentsList](#deploymentmanagerdeploymentslist) - Lists all deployments for a given project.
* [deploymentmanagerDeploymentsPatch](#deploymentmanagerdeploymentspatch) - Patches a deployment and all of the resources described by the deployment manifest.
* [deploymentmanagerDeploymentsSetIamPolicy](#deploymentmanagerdeploymentssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [deploymentmanagerDeploymentsStop](#deploymentmanagerdeploymentsstop) - Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
* [deploymentmanagerDeploymentsTestIamPermissions](#deploymentmanagerdeploymentstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [deploymentmanagerDeploymentsUpdate](#deploymentmanagerdeploymentsupdate) - Updates a deployment and all of the resources described by the deployment manifest.

## deploymentmanagerDeploymentsCancelPreview

Cancels and removes the preview currently associated with the deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsCancelPreviewRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentsCancelPreviewRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsCancelPreviewSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsCancelPreviewSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsCancelPreviewSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerDeploymentsCancelPreviewRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->deploymentsCancelPreviewRequest = new DeploymentsCancelPreviewRequest();
    $request->deploymentsCancelPreviewRequest->fingerprint = 'debitis';
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->deployment = 'suscipit';
    $request->fields = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->prettyPrint = false;
    $request->project = 'voluptatum';
    $request->quotaUser = 'iusto';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new DeploymentmanagerDeploymentsCancelPreviewSecurity();
    $requestSecurity->option1 = new DeploymentmanagerDeploymentsCancelPreviewSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->deployments->deploymentmanagerDeploymentsCancelPreview($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerDeploymentsDelete

Deletes a deployment and all of the resources in the deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsDeleteDeletePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerDeploymentsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->deletePolicy = DeploymentmanagerDeploymentsDeleteDeletePolicyEnum::DELETE;
    $request->deployment = 'deserunt';
    $request->fields = 'perferendis';
    $request->key = 'ipsam';
    $request->oauthToken = 'repellendus';
    $request->prettyPrint = false;
    $request->project = 'sapiente';
    $request->quotaUser = 'quo';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'at';

    $requestSecurity = new DeploymentmanagerDeploymentsDeleteSecurity();
    $requestSecurity->option1 = new DeploymentmanagerDeploymentsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->deployments->deploymentmanagerDeploymentsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerDeploymentsGet

Gets information about a specific deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerDeploymentsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->deployment = 'quod';
    $request->fields = 'esse';
    $request->key = 'totam';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->project = 'dolorum';
    $request->quotaUser = 'dicta';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new DeploymentmanagerDeploymentsGetSecurity();
    $requestSecurity->option1 = new DeploymentmanagerDeploymentsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->deployments->deploymentmanagerDeploymentsGet($request, $requestSecurity);

    if ($response->deployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerDeploymentsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsGetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerDeploymentsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'optio';
    $request->key = 'totam';
    $request->oauthToken = 'beatae';
    $request->optionsRequestedPolicyVersion = 414662;
    $request->prettyPrint = false;
    $request->project = 'molestiae';
    $request->quotaUser = 'modi';
    $request->resource = 'qui';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new DeploymentmanagerDeploymentsGetIamPolicySecurity();
    $requestSecurity->option1 = new DeploymentmanagerDeploymentsGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->deployments->deploymentmanagerDeploymentsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerDeploymentsInsert

Creates a deployment and all of the resources described by the deployment manifest.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Deployment;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentLabelEntry;
use \OpenAPI\OpenAPI\Models\Shared\Operation;
use \OpenAPI\OpenAPI\Models\Shared\OperationError;
use \OpenAPI\OpenAPI\Models\Shared\OperationErrorErrors;
use \OpenAPI\OpenAPI\Models\Shared\OperationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarnings;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsData;
use \OpenAPI\OpenAPI\Models\Shared\TargetConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ConfigFile;
use \OpenAPI\OpenAPI\Models\Shared\ImportFile;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentUpdate;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentUpdateLabelEntry;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsInsertCreatePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerDeploymentsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->deployment = new Deployment();
    $request->deployment->description = 'ipsum';
    $request->deployment->fingerprint = 'excepturi';
    $request->deployment->id = 'aspernatur';
    $request->deployment->insertTime = 'perferendis';
    $request->deployment->labels = [
        new DeploymentLabelEntry(),
        new DeploymentLabelEntry(),
    ];
    $request->deployment->manifest = 'natus';
    $request->deployment->name = 'Sheryl Fadel';
    $request->deployment->operation = new Operation();
    $request->deployment->operation->clientOperationId = 'hic';
    $request->deployment->operation->creationTimestamp = 'saepe';
    $request->deployment->operation->description = 'fuga';
    $request->deployment->operation->endTime = 'in';
    $request->deployment->operation->error = new OperationError();
    $request->deployment->operation->error->errors = [
        new OperationErrorErrors(),
        new OperationErrorErrors(),
    ];
    $request->deployment->operation->httpErrorMessage = 'iste';
    $request->deployment->operation->httpErrorStatusCode = 437032;
    $request->deployment->operation->id = 'saepe';
    $request->deployment->operation->insertTime = 'quidem';
    $request->deployment->operation->kind = 'architecto';
    $request->deployment->operation->name = 'Lela Orn';
    $request->deployment->operation->operationGroupId = 'dolores';
    $request->deployment->operation->operationType = 'dolorem';
    $request->deployment->operation->progress = 358152;
    $request->deployment->operation->region = 'explicabo';
    $request->deployment->operation->selfLink = 'nobis';
    $request->deployment->operation->startTime = 'enim';
    $request->deployment->operation->status = OperationStatusEnum::RUNNING;
    $request->deployment->operation->statusMessage = 'nemo';
    $request->deployment->operation->targetId = 'minima';
    $request->deployment->operation->targetLink = 'excepturi';
    $request->deployment->operation->user = 'accusantium';
    $request->deployment->operation->warnings = [
        new OperationWarnings(),
        new OperationWarnings(),
    ];
    $request->deployment->operation->zone = 'culpa';
    $request->deployment->selfLink = 'doloribus';
    $request->deployment->target = new TargetConfiguration();
    $request->deployment->target->config = new ConfigFile();
    $request->deployment->target->config->content = 'sapiente';
    $request->deployment->target->imports = [
        new ImportFile(),
    ];
    $request->deployment->update = new DeploymentUpdate();
    $request->deployment->update->description = 'mollitia';
    $request->deployment->update->labels = [
        new DeploymentUpdateLabelEntry(),
    ];
    $request->deployment->update->manifest = 'culpa';
    $request->deployment->updateTime = 'consequuntur';
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->createPolicy = DeploymentmanagerDeploymentsInsertCreatePolicyEnum::CREATE_OR_ACQUIRE;
    $request->fields = 'commodi';
    $request->key = 'quam';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->preview = false;
    $request->project = 'velit';
    $request->quotaUser = 'error';
    $request->uploadType = 'quia';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new DeploymentmanagerDeploymentsInsertSecurity();
    $requestSecurity->option1 = new DeploymentmanagerDeploymentsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->deployments->deploymentmanagerDeploymentsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerDeploymentsList

Lists all deployments for a given project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerDeploymentsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->fields = 'odit';
    $request->filter = 'quo';
    $request->key = 'sequi';
    $request->maxResults = 949572;
    $request->oauthToken = 'ipsam';
    $request->orderBy = 'id';
    $request->pageToken = 'possimus';
    $request->prettyPrint = false;
    $request->project = 'aut';
    $request->quotaUser = 'quasi';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new DeploymentmanagerDeploymentsListSecurity();
    $requestSecurity->option1 = new DeploymentmanagerDeploymentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->deployments->deploymentmanagerDeploymentsList($request, $requestSecurity);

    if ($response->deploymentsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerDeploymentsPatch

Patches a deployment and all of the resources described by the deployment manifest.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Deployment;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentLabelEntry;
use \OpenAPI\OpenAPI\Models\Shared\Operation;
use \OpenAPI\OpenAPI\Models\Shared\OperationError;
use \OpenAPI\OpenAPI\Models\Shared\OperationErrorErrors;
use \OpenAPI\OpenAPI\Models\Shared\OperationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarnings;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsData;
use \OpenAPI\OpenAPI\Models\Shared\TargetConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ConfigFile;
use \OpenAPI\OpenAPI\Models\Shared\ImportFile;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentUpdate;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentUpdateLabelEntry;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsPatchCreatePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsPatchDeletePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerDeploymentsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->deployment1 = new Deployment();
    $request->deployment1->description = 'quasi';
    $request->deployment1->fingerprint = 'reiciendis';
    $request->deployment1->id = 'voluptatibus';
    $request->deployment1->insertTime = 'vero';
    $request->deployment1->labels = [
        new DeploymentLabelEntry(),
        new DeploymentLabelEntry(),
    ];
    $request->deployment1->manifest = 'praesentium';
    $request->deployment1->name = 'Jose Moen';
    $request->deployment1->operation = new Operation();
    $request->deployment1->operation->clientOperationId = 'perferendis';
    $request->deployment1->operation->creationTimestamp = 'doloremque';
    $request->deployment1->operation->description = 'reprehenderit';
    $request->deployment1->operation->endTime = 'ut';
    $request->deployment1->operation->error = new OperationError();
    $request->deployment1->operation->error->errors = [
        new OperationErrorErrors(),
        new OperationErrorErrors(),
        new OperationErrorErrors(),
        new OperationErrorErrors(),
    ];
    $request->deployment1->operation->httpErrorMessage = 'dicta';
    $request->deployment1->operation->httpErrorStatusCode = 359444;
    $request->deployment1->operation->id = 'dolore';
    $request->deployment1->operation->insertTime = 'iusto';
    $request->deployment1->operation->kind = 'dicta';
    $request->deployment1->operation->name = 'Bill Thompson';
    $request->deployment1->operation->operationGroupId = 'quae';
    $request->deployment1->operation->operationType = 'ipsum';
    $request->deployment1->operation->progress = 692472;
    $request->deployment1->operation->region = 'molestias';
    $request->deployment1->operation->selfLink = 'excepturi';
    $request->deployment1->operation->startTime = 'pariatur';
    $request->deployment1->operation->status = OperationStatusEnum::PENDING;
    $request->deployment1->operation->statusMessage = 'praesentium';
    $request->deployment1->operation->targetId = 'rem';
    $request->deployment1->operation->targetLink = 'voluptates';
    $request->deployment1->operation->user = 'quasi';
    $request->deployment1->operation->warnings = [
        new OperationWarnings(),
        new OperationWarnings(),
        new OperationWarnings(),
        new OperationWarnings(),
    ];
    $request->deployment1->operation->zone = 'sint';
    $request->deployment1->selfLink = 'veritatis';
    $request->deployment1->target = new TargetConfiguration();
    $request->deployment1->target->config = new ConfigFile();
    $request->deployment1->target->config->content = 'itaque';
    $request->deployment1->target->imports = [
        new ImportFile(),
        new ImportFile(),
    ];
    $request->deployment1->update = new DeploymentUpdate();
    $request->deployment1->update->description = 'enim';
    $request->deployment1->update->labels = [
        new DeploymentUpdateLabelEntry(),
    ];
    $request->deployment1->update->manifest = 'est';
    $request->deployment1->updateTime = 'quibusdam';
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'distinctio';
    $request->createPolicy = DeploymentmanagerDeploymentsPatchCreatePolicyEnum::ACQUIRE;
    $request->deletePolicy = DeploymentmanagerDeploymentsPatchDeletePolicyEnum::DELETE;
    $request->deploymentPathParameter = 'modi';
    $request->fields = 'qui';
    $request->key = 'aliquid';
    $request->oauthToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->preview = false;
    $request->project = 'quos';
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'assumenda';

    $requestSecurity = new DeploymentmanagerDeploymentsPatchSecurity();
    $requestSecurity->option1 = new DeploymentmanagerDeploymentsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->deployments->deploymentmanagerDeploymentsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerDeploymentsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalSetPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerDeploymentsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->globalSetPolicyRequest = new GlobalSetPolicyRequest();
    $request->globalSetPolicyRequest->bindings = [
        new Binding(),
    ];
    $request->globalSetPolicyRequest->etag = 'fugit';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'tempora';
    $request->globalSetPolicyRequest->policy->version = 703737;
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'eum';
    $request->key = 'non';
    $request->oauthToken = 'eligendi';
    $request->prettyPrint = false;
    $request->project = 'sint';
    $request->quotaUser = 'aliquid';
    $request->resource = 'provident';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new DeploymentmanagerDeploymentsSetIamPolicySecurity();
    $requestSecurity->option1 = new DeploymentmanagerDeploymentsSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->deployments->deploymentmanagerDeploymentsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerDeploymentsStop

Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsStopRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentsStopRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsStopSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsStopSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsStopSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerDeploymentsStopRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->deploymentsStopRequest = new DeploymentsStopRequest();
    $request->deploymentsStopRequest->fingerprint = 'dolor';
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->deployment = 'in';
    $request->fields = 'in';
    $request->key = 'illum';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->project = 'rerum';
    $request->quotaUser = 'dicta';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new DeploymentmanagerDeploymentsStopSecurity();
    $requestSecurity->option1 = new DeploymentmanagerDeploymentsStopSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->deployments->deploymentmanagerDeploymentsStop($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerDeploymentsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerDeploymentsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'aliquid',
        'laborum',
    ];
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'occaecati';
    $request->fields = 'enim';
    $request->key = 'accusamus';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'quidem';
    $request->quotaUser = 'provident';
    $request->resource = 'nam';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'blanditiis';

    $requestSecurity = new DeploymentmanagerDeploymentsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->deployments->deploymentmanagerDeploymentsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerDeploymentsUpdate

Updates a deployment and all of the resources described by the deployment manifest.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Deployment;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentLabelEntry;
use \OpenAPI\OpenAPI\Models\Shared\Operation;
use \OpenAPI\OpenAPI\Models\Shared\OperationError;
use \OpenAPI\OpenAPI\Models\Shared\OperationErrorErrors;
use \OpenAPI\OpenAPI\Models\Shared\OperationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarnings;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsData;
use \OpenAPI\OpenAPI\Models\Shared\TargetConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ConfigFile;
use \OpenAPI\OpenAPI\Models\Shared\ImportFile;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentUpdate;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentUpdateLabelEntry;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsUpdateCreatePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsUpdateDeletePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerDeploymentsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerDeploymentsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->deployment1 = new Deployment();
    $request->deployment1->description = 'sapiente';
    $request->deployment1->fingerprint = 'amet';
    $request->deployment1->id = 'deserunt';
    $request->deployment1->insertTime = 'nisi';
    $request->deployment1->labels = [
        new DeploymentLabelEntry(),
        new DeploymentLabelEntry(),
    ];
    $request->deployment1->manifest = 'natus';
    $request->deployment1->name = 'Fernando Aufderhar';
    $request->deployment1->operation = new Operation();
    $request->deployment1->operation->clientOperationId = 'distinctio';
    $request->deployment1->operation->creationTimestamp = 'id';
    $request->deployment1->operation->description = 'labore';
    $request->deployment1->operation->endTime = 'labore';
    $request->deployment1->operation->error = new OperationError();
    $request->deployment1->operation->error->errors = [
        new OperationErrorErrors(),
        new OperationErrorErrors(),
    ];
    $request->deployment1->operation->httpErrorMessage = 'natus';
    $request->deployment1->operation->httpErrorStatusCode = 749170;
    $request->deployment1->operation->id = 'eum';
    $request->deployment1->operation->insertTime = 'vero';
    $request->deployment1->operation->kind = 'aspernatur';
    $request->deployment1->operation->name = 'Danielle Bosco';
    $request->deployment1->operation->operationGroupId = 'provident';
    $request->deployment1->operation->operationType = 'quos';
    $request->deployment1->operation->progress = 574325;
    $request->deployment1->operation->region = 'accusantium';
    $request->deployment1->operation->selfLink = 'mollitia';
    $request->deployment1->operation->startTime = 'reiciendis';
    $request->deployment1->operation->status = OperationStatusEnum::RUNNING;
    $request->deployment1->operation->statusMessage = 'ad';
    $request->deployment1->operation->targetId = 'eum';
    $request->deployment1->operation->targetLink = 'dolor';
    $request->deployment1->operation->user = 'necessitatibus';
    $request->deployment1->operation->warnings = [
        new OperationWarnings(),
    ];
    $request->deployment1->operation->zone = 'nemo';
    $request->deployment1->selfLink = 'quasi';
    $request->deployment1->target = new TargetConfiguration();
    $request->deployment1->target->config = new ConfigFile();
    $request->deployment1->target->config->content = 'iure';
    $request->deployment1->target->imports = [
        new ImportFile(),
        new ImportFile(),
        new ImportFile(),
        new ImportFile(),
    ];
    $request->deployment1->update = new DeploymentUpdate();
    $request->deployment1->update->description = 'debitis';
    $request->deployment1->update->labels = [
        new DeploymentUpdateLabelEntry(),
        new DeploymentUpdateLabelEntry(),
    ];
    $request->deployment1->update->manifest = 'maxime';
    $request->deployment1->updateTime = 'deleniti';
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'architecto';
    $request->createPolicy = DeploymentmanagerDeploymentsUpdateCreatePolicyEnum::CREATE_OR_ACQUIRE;
    $request->deletePolicy = DeploymentmanagerDeploymentsUpdateDeletePolicyEnum::ABANDON;
    $request->deploymentPathParameter = 'ullam';
    $request->fields = 'expedita';
    $request->key = 'nihil';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->preview = false;
    $request->project = 'quibusdam';
    $request->quotaUser = 'sed';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new DeploymentmanagerDeploymentsUpdateSecurity();
    $requestSecurity->option1 = new DeploymentmanagerDeploymentsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->deployments->deploymentmanagerDeploymentsUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
