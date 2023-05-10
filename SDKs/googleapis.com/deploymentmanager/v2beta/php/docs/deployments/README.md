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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->deploymentsCancelPreviewRequest = new DeploymentsCancelPreviewRequest();
    $request->deploymentsCancelPreviewRequest->fingerprint = 'dolorum';
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'illum';
    $request->deployment = 'maiores';
    $request->fields = 'rerum';
    $request->key = 'dicta';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->project = 'cumque';
    $request->quotaUser = 'facere';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'aliquid';

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
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'occaecati';
    $request->deletePolicy = DeploymentmanagerDeploymentsDeleteDeletePolicyEnum::DELETE;
    $request->deployment = 'accusamus';
    $request->fields = 'delectus';
    $request->key = 'quidem';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->project = 'nam';
    $request->quotaUser = 'id';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'deleniti';

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
    $request->accessToken = 'amet';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->deployment = 'vel';
    $request->fields = 'natus';
    $request->key = 'omnis';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->project = 'perferendis';
    $request->quotaUser = 'nihil';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'distinctio';

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
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'natus';
    $request->key = 'nobis';
    $request->oauthToken = 'eum';
    $request->optionsRequestedPolicyVersion = 878453;
    $request->prettyPrint = false;
    $request->project = 'aspernatur';
    $request->quotaUser = 'architecto';
    $request->resource = 'magnam';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'excepturi';

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
    $request->deployment->description = 'provident';
    $request->deployment->fingerprint = 'quos';
    $request->deployment->id = 'sint';
    $request->deployment->insertTime = 'accusantium';
    $request->deployment->labels = [
        new DeploymentLabelEntry(),
        new DeploymentLabelEntry(),
        new DeploymentLabelEntry(),
    ];
    $request->deployment->manifest = 'reiciendis';
    $request->deployment->name = 'Tommy Kemmer';
    $request->deployment->operation = new Operation();
    $request->deployment->operation->clientOperationId = 'odit';
    $request->deployment->operation->creationTimestamp = 'nemo';
    $request->deployment->operation->description = 'quasi';
    $request->deployment->operation->endTime = 'iure';
    $request->deployment->operation->error = new OperationError();
    $request->deployment->operation->error->errors = [
        new OperationErrorErrors(),
        new OperationErrorErrors(),
        new OperationErrorErrors(),
        new OperationErrorErrors(),
    ];
    $request->deployment->operation->httpErrorMessage = 'debitis';
    $request->deployment->operation->httpErrorStatusCode = 260341;
    $request->deployment->operation->id = 'maxime';
    $request->deployment->operation->insertTime = 'deleniti';
    $request->deployment->operation->kind = 'facilis';
    $request->deployment->operation->name = 'Alice Bradtke';
    $request->deployment->operation->operationGroupId = 'expedita';
    $request->deployment->operation->operationType = 'nihil';
    $request->deployment->operation->progress = 998848;
    $request->deployment->operation->region = 'quibusdam';
    $request->deployment->operation->selfLink = 'sed';
    $request->deployment->operation->startTime = 'saepe';
    $request->deployment->operation->status = OperationStatusEnum::DONE;
    $request->deployment->operation->statusMessage = 'accusantium';
    $request->deployment->operation->targetId = 'consequuntur';
    $request->deployment->operation->targetLink = 'praesentium';
    $request->deployment->operation->user = 'natus';
    $request->deployment->operation->warnings = [
        new OperationWarnings(),
    ];
    $request->deployment->operation->zone = 'sunt';
    $request->deployment->selfLink = 'quo';
    $request->deployment->target = new TargetConfiguration();
    $request->deployment->target->config = new ConfigFile();
    $request->deployment->target->config->content = 'illum';
    $request->deployment->target->imports = [
        new ImportFile(),
        new ImportFile(),
        new ImportFile(),
        new ImportFile(),
    ];
    $request->deployment->update = new DeploymentUpdate();
    $request->deployment->update->description = 'maxime';
    $request->deployment->update->labels = [
        new DeploymentUpdateLabelEntry(),
        new DeploymentUpdateLabelEntry(),
    ];
    $request->deployment->update->manifest = 'excepturi';
    $request->deployment->updateTime = 'odit';
    $request->accessToken = 'ea';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ab';
    $request->createPolicy = DeploymentmanagerDeploymentsInsertCreatePolicyEnum::CREATE;
    $request->fields = 'quidem';
    $request->key = 'ipsam';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->preview = false;
    $request->project = 'autem';
    $request->quotaUser = 'nam';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'pariatur';

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
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'amet';
    $request->filter = 'aut';
    $request->key = 'cumque';
    $request->maxResults = 359978;
    $request->oauthToken = 'hic';
    $request->orderBy = 'libero';
    $request->pageToken = 'nobis';
    $request->prettyPrint = false;
    $request->project = 'dolores';
    $request->quotaUser = 'quis';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'dignissimos';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->deployment1 = new Deployment();
    $request->deployment1->description = 'quis';
    $request->deployment1->fingerprint = 'nesciunt';
    $request->deployment1->id = 'eos';
    $request->deployment1->insertTime = 'perferendis';
    $request->deployment1->labels = [
        new DeploymentLabelEntry(),
    ];
    $request->deployment1->manifest = 'minus';
    $request->deployment1->name = 'Rosa Swift';
    $request->deployment1->operation = new Operation();
    $request->deployment1->operation->clientOperationId = 'recusandae';
    $request->deployment1->operation->creationTimestamp = 'omnis';
    $request->deployment1->operation->description = 'facilis';
    $request->deployment1->operation->endTime = 'perspiciatis';
    $request->deployment1->operation->error = new OperationError();
    $request->deployment1->operation->error->errors = [
        new OperationErrorErrors(),
    ];
    $request->deployment1->operation->httpErrorMessage = 'porro';
    $request->deployment1->operation->httpErrorStatusCode = 164694;
    $request->deployment1->operation->id = 'blanditiis';
    $request->deployment1->operation->insertTime = 'error';
    $request->deployment1->operation->kind = 'eaque';
    $request->deployment1->operation->name = 'Jean Ferry';
    $request->deployment1->operation->operationGroupId = 'modi';
    $request->deployment1->operation->operationType = 'iste';
    $request->deployment1->operation->progress = 679091;
    $request->deployment1->operation->region = 'deleniti';
    $request->deployment1->operation->selfLink = 'pariatur';
    $request->deployment1->operation->startTime = 'provident';
    $request->deployment1->operation->status = OperationStatusEnum::DONE;
    $request->deployment1->operation->statusMessage = 'libero';
    $request->deployment1->operation->targetId = 'delectus';
    $request->deployment1->operation->targetLink = 'quaerat';
    $request->deployment1->operation->user = 'quos';
    $request->deployment1->operation->warnings = [
        new OperationWarnings(),
        new OperationWarnings(),
    ];
    $request->deployment1->operation->zone = 'dolorem';
    $request->deployment1->selfLink = 'dolorem';
    $request->deployment1->target = new TargetConfiguration();
    $request->deployment1->target->config = new ConfigFile();
    $request->deployment1->target->config->content = 'dolor';
    $request->deployment1->target->imports = [
        new ImportFile(),
    ];
    $request->deployment1->update = new DeploymentUpdate();
    $request->deployment1->update->description = 'ipsum';
    $request->deployment1->update->labels = [
        new DeploymentUpdateLabelEntry(),
        new DeploymentUpdateLabelEntry(),
        new DeploymentUpdateLabelEntry(),
        new DeploymentUpdateLabelEntry(),
    ];
    $request->deployment1->update->manifest = 'excepturi';
    $request->deployment1->updateTime = 'cum';
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->createPolicy = DeploymentmanagerDeploymentsPatchCreatePolicyEnum::CREATE_OR_ACQUIRE;
    $request->deletePolicy = DeploymentmanagerDeploymentsPatchDeletePolicyEnum::ABANDON;
    $request->deploymentPathParameter = 'numquam';
    $request->fields = 'veritatis';
    $request->key = 'ipsa';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->preview = false;
    $request->project = 'iure';
    $request->quotaUser = 'odio';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'accusamus';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->globalSetPolicyRequest = new GlobalSetPolicyRequest();
    $request->globalSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->etag = 'voluptas';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'atque';
    $request->globalSetPolicyRequest->policy->version = 24678;
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'soluta';
    $request->fields = 'dolorum';
    $request->key = 'iusto';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->project = 'dolorum';
    $request->quotaUser = 'deleniti';
    $request->resource = 'omnis';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'distinctio';

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
    $request->deploymentsStopRequest->fingerprint = 'nihil';
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'id';
    $request->deployment = 'saepe';
    $request->fields = 'eius';
    $request->key = 'aspernatur';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->project = 'amet';
    $request->quotaUser = 'optio';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'ad';

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
        'deserunt',
        'provident',
    ];
    $request->accessToken = 'minima';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->fields = 'similique';
    $request->key = 'alias';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->project = 'quaerat';
    $request->quotaUser = 'tempora';
    $request->resource = 'vel';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'officiis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->deployment1 = new Deployment();
    $request->deployment1->description = 'dolorum';
    $request->deployment1->fingerprint = 'a';
    $request->deployment1->id = 'esse';
    $request->deployment1->insertTime = 'harum';
    $request->deployment1->labels = [
        new DeploymentLabelEntry(),
        new DeploymentLabelEntry(),
    ];
    $request->deployment1->manifest = 'ipsum';
    $request->deployment1->name = 'Saul Fay';
    $request->deployment1->operation = new Operation();
    $request->deployment1->operation->clientOperationId = 'numquam';
    $request->deployment1->operation->creationTimestamp = 'enim';
    $request->deployment1->operation->description = 'dolorem';
    $request->deployment1->operation->endTime = 'sapiente';
    $request->deployment1->operation->error = new OperationError();
    $request->deployment1->operation->error->errors = [
        new OperationErrorErrors(),
        new OperationErrorErrors(),
        new OperationErrorErrors(),
    ];
    $request->deployment1->operation->httpErrorMessage = 'nihil';
    $request->deployment1->operation->httpErrorStatusCode = 25662;
    $request->deployment1->operation->id = 'expedita';
    $request->deployment1->operation->insertTime = 'neque';
    $request->deployment1->operation->kind = 'sed';
    $request->deployment1->operation->name = 'Kelli Hintz';
    $request->deployment1->operation->operationGroupId = 'ipsum';
    $request->deployment1->operation->operationType = 'incidunt';
    $request->deployment1->operation->progress = 186458;
    $request->deployment1->operation->region = 'cupiditate';
    $request->deployment1->operation->selfLink = 'maxime';
    $request->deployment1->operation->startTime = 'pariatur';
    $request->deployment1->operation->status = OperationStatusEnum::DONE;
    $request->deployment1->operation->statusMessage = 'dicta';
    $request->deployment1->operation->targetId = 'laborum';
    $request->deployment1->operation->targetLink = 'totam';
    $request->deployment1->operation->user = 'incidunt';
    $request->deployment1->operation->warnings = [
        new OperationWarnings(),
    ];
    $request->deployment1->operation->zone = 'dolores';
    $request->deployment1->selfLink = 'distinctio';
    $request->deployment1->target = new TargetConfiguration();
    $request->deployment1->target->config = new ConfigFile();
    $request->deployment1->target->config->content = 'facilis';
    $request->deployment1->target->imports = [
        new ImportFile(),
        new ImportFile(),
    ];
    $request->deployment1->update = new DeploymentUpdate();
    $request->deployment1->update->description = 'quam';
    $request->deployment1->update->labels = [
        new DeploymentUpdateLabelEntry(),
        new DeploymentUpdateLabelEntry(),
        new DeploymentUpdateLabelEntry(),
    ];
    $request->deployment1->update->manifest = 'temporibus';
    $request->deployment1->updateTime = 'qui';
    $request->accessToken = 'neque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magni';
    $request->createPolicy = DeploymentmanagerDeploymentsUpdateCreatePolicyEnum::ACQUIRE;
    $request->deletePolicy = DeploymentmanagerDeploymentsUpdateDeletePolicyEnum::DELETE;
    $request->deploymentPathParameter = 'ullam';
    $request->fields = 'nam';
    $request->key = 'hic';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->preview = false;
    $request->project = 'cumque';
    $request->quotaUser = 'soluta';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'et';

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
