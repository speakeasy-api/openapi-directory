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
use \OpenAPI\OpenAPI\Models\Shared\Credential;
use \OpenAPI\OpenAPI\Models\Shared\BasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccount;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentLabelEntry;
use \OpenAPI\OpenAPI\Models\Shared\Operation;
use \OpenAPI\OpenAPI\Models\Shared\OperationError;
use \OpenAPI\OpenAPI\Models\Shared\OperationErrorErrors;
use \OpenAPI\OpenAPI\Models\Shared\OperationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarnings;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsData;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentOutputEntry;
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
    $request->deployment->credential = new Credential();
    $request->deployment->credential->basicAuth = new BasicAuth();
    $request->deployment->credential->basicAuth->password = 'provident';
    $request->deployment->credential->basicAuth->user = 'quos';
    $request->deployment->credential->serviceAccount = new ServiceAccount();
    $request->deployment->credential->serviceAccount->email = 'Alexis_OHara32@yahoo.com';
    $request->deployment->credential->useProjectDefault = false;
    $request->deployment->description = 'eum';
    $request->deployment->fingerprint = 'dolor';
    $request->deployment->id = 'necessitatibus';
    $request->deployment->insertTime = 'odit';
    $request->deployment->labels = [
        new DeploymentLabelEntry(),
        new DeploymentLabelEntry(),
    ];
    $request->deployment->manifest = 'quasi';
    $request->deployment->name = 'Melba Toy';
    $request->deployment->operation = new Operation();
    $request->deployment->operation->clientOperationId = 'deleniti';
    $request->deployment->operation->creationTimestamp = 'facilis';
    $request->deployment->operation->description = 'in';
    $request->deployment->operation->endTime = 'architecto';
    $request->deployment->operation->error = new OperationError();
    $request->deployment->operation->error->errors = [
        new OperationErrorErrors(),
    ];
    $request->deployment->operation->httpErrorMessage = 'repudiandae';
    $request->deployment->operation->httpErrorStatusCode = 352312;
    $request->deployment->operation->id = 'expedita';
    $request->deployment->operation->insertTime = 'nihil';
    $request->deployment->operation->kind = 'repellat';
    $request->deployment->operation->name = 'Louis Turner Sr.';
    $request->deployment->operation->operationGroupId = 'praesentium';
    $request->deployment->operation->operationType = 'natus';
    $request->deployment->operation->progress = 166847;
    $request->deployment->operation->region = 'sunt';
    $request->deployment->operation->selfLink = 'quo';
    $request->deployment->operation->startTime = 'illum';
    $request->deployment->operation->status = OperationStatusEnum::DONE;
    $request->deployment->operation->statusMessage = 'maxime';
    $request->deployment->operation->targetId = 'ea';
    $request->deployment->operation->targetLink = 'excepturi';
    $request->deployment->operation->user = 'odit';
    $request->deployment->operation->warnings = [
        new OperationWarnings(),
        new OperationWarnings(),
    ];
    $request->deployment->operation->zone = 'accusantium';
    $request->deployment->outputs = [
        new DeploymentOutputEntry(),
    ];
    $request->deployment->selfLink = 'maiores';
    $request->deployment->target = new TargetConfiguration();
    $request->deployment->target->config = new ConfigFile();
    $request->deployment->target->config->content = 'quidem';
    $request->deployment->target->imports = [
        new ImportFile(),
        new ImportFile(),
    ];
    $request->deployment->update = new DeploymentUpdate();
    $request->deployment->update->credential = new Credential();
    $request->deployment->update->credential->basicAuth = new BasicAuth();
    $request->deployment->update->credential->basicAuth->password = 'voluptate';
    $request->deployment->update->credential->basicAuth->user = 'autem';
    $request->deployment->update->credential->serviceAccount = new ServiceAccount();
    $request->deployment->update->credential->serviceAccount->email = 'Ambrose_Streich@hotmail.com';
    $request->deployment->update->credential->useProjectDefault = false;
    $request->deployment->update->description = 'perferendis';
    $request->deployment->update->labels = [
        new DeploymentUpdateLabelEntry(),
        new DeploymentUpdateLabelEntry(),
        new DeploymentUpdateLabelEntry(),
        new DeploymentUpdateLabelEntry(),
    ];
    $request->deployment->update->manifest = 'amet';
    $request->deployment->updateTime = 'aut';
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->createPolicy = DeploymentmanagerDeploymentsInsertCreatePolicyEnum::CREATE;
    $request->fields = 'nobis';
    $request->key = 'dolores';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->preview = false;
    $request->project = 'totam';
    $request->quotaUser = 'dignissimos';
    $request->uploadType = 'eaque';
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
    $request->accessToken = 'eos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolores';
    $request->fields = 'minus';
    $request->filter = 'quam';
    $request->key = 'dolor';
    $request->maxResults = 874573;
    $request->oauthToken = 'nostrum';
    $request->orderBy = 'hic';
    $request->pageToken = 'recusandae';
    $request->prettyPrint = false;
    $request->project = 'omnis';
    $request->quotaUser = 'facilis';
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'voluptatem';

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
use \OpenAPI\OpenAPI\Models\Shared\Credential;
use \OpenAPI\OpenAPI\Models\Shared\BasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccount;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentLabelEntry;
use \OpenAPI\OpenAPI\Models\Shared\Operation;
use \OpenAPI\OpenAPI\Models\Shared\OperationError;
use \OpenAPI\OpenAPI\Models\Shared\OperationErrorErrors;
use \OpenAPI\OpenAPI\Models\Shared\OperationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarnings;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsData;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentOutputEntry;
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
    $request->deployment1->credential = new Credential();
    $request->deployment1->credential->basicAuth = new BasicAuth();
    $request->deployment1->credential->basicAuth->password = 'consequuntur';
    $request->deployment1->credential->basicAuth->user = 'blanditiis';
    $request->deployment1->credential->serviceAccount = new ServiceAccount();
    $request->deployment1->credential->serviceAccount->email = 'Amber.Mayert99@yahoo.com';
    $request->deployment1->credential->useProjectDefault = false;
    $request->deployment1->description = 'earum';
    $request->deployment1->fingerprint = 'modi';
    $request->deployment1->id = 'iste';
    $request->deployment1->insertTime = 'dolorum';
    $request->deployment1->labels = [
        new DeploymentLabelEntry(),
        new DeploymentLabelEntry(),
        new DeploymentLabelEntry(),
    ];
    $request->deployment1->manifest = 'pariatur';
    $request->deployment1->name = 'Loren Renner';
    $request->deployment1->operation = new Operation();
    $request->deployment1->operation->clientOperationId = 'quos';
    $request->deployment1->operation->creationTimestamp = 'aliquid';
    $request->deployment1->operation->description = 'dolorem';
    $request->deployment1->operation->endTime = 'dolorem';
    $request->deployment1->operation->error = new OperationError();
    $request->deployment1->operation->error->errors = [
        new OperationErrorErrors(),
    ];
    $request->deployment1->operation->httpErrorMessage = 'qui';
    $request->deployment1->operation->httpErrorStatusCode = 218749;
    $request->deployment1->operation->id = 'hic';
    $request->deployment1->operation->insertTime = 'excepturi';
    $request->deployment1->operation->kind = 'cum';
    $request->deployment1->operation->name = 'Marian Wisozk';
    $request->deployment1->operation->operationGroupId = 'numquam';
    $request->deployment1->operation->operationType = 'veritatis';
    $request->deployment1->operation->progress = 58029;
    $request->deployment1->operation->region = 'ipsa';
    $request->deployment1->operation->selfLink = 'iure';
    $request->deployment1->operation->startTime = 'odio';
    $request->deployment1->operation->status = OperationStatusEnum::PENDING;
    $request->deployment1->operation->statusMessage = 'accusamus';
    $request->deployment1->operation->targetId = 'quidem';
    $request->deployment1->operation->targetLink = 'voluptatibus';
    $request->deployment1->operation->user = 'voluptas';
    $request->deployment1->operation->warnings = [
        new OperationWarnings(),
        new OperationWarnings(),
        new OperationWarnings(),
    ];
    $request->deployment1->operation->zone = 'eos';
    $request->deployment1->outputs = [
        new DeploymentOutputEntry(),
        new DeploymentOutputEntry(),
        new DeploymentOutputEntry(),
    ];
    $request->deployment1->selfLink = 'sit';
    $request->deployment1->target = new TargetConfiguration();
    $request->deployment1->target->config = new ConfigFile();
    $request->deployment1->target->config->content = 'fugiat';
    $request->deployment1->target->imports = [
        new ImportFile(),
    ];
    $request->deployment1->update = new DeploymentUpdate();
    $request->deployment1->update->credential = new Credential();
    $request->deployment1->update->credential->basicAuth = new BasicAuth();
    $request->deployment1->update->credential->basicAuth->password = 'soluta';
    $request->deployment1->update->credential->basicAuth->user = 'dolorum';
    $request->deployment1->update->credential->serviceAccount = new ServiceAccount();
    $request->deployment1->update->credential->serviceAccount->email = 'Jacinthe_Pagac@yahoo.com';
    $request->deployment1->update->credential->useProjectDefault = false;
    $request->deployment1->update->description = 'necessitatibus';
    $request->deployment1->update->labels = [
        new DeploymentUpdateLabelEntry(),
        new DeploymentUpdateLabelEntry(),
        new DeploymentUpdateLabelEntry(),
    ];
    $request->deployment1->update->manifest = 'asperiores';
    $request->deployment1->updateTime = 'nihil';
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'id';
    $request->createPolicy = DeploymentmanagerDeploymentsPatchCreatePolicyEnum::CREATE;
    $request->deletePolicy = DeploymentmanagerDeploymentsPatchDeletePolicyEnum::DELETE;
    $request->deploymentPathParameter = 'aspernatur';
    $request->fields = 'perferendis';
    $request->key = 'amet';
    $request->oauthToken = 'optio';
    $request->prettyPrint = false;
    $request->preview = false;
    $request->project = 'accusamus';
    $request->quotaUser = 'ad';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'suscipit';

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
    ];
    $request->globalSetPolicyRequest->etag = 'minima';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'similique';
    $request->globalSetPolicyRequest->policy->version = 55;
    $request->accessToken = 'at';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->fields = 'vel';
    $request->key = 'quod';
    $request->oauthToken = 'officiis';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'dolorum';
    $request->resource = 'a';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'harum';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->deploymentsStopRequest = new DeploymentsStopRequest();
    $request->deploymentsStopRequest->fingerprint = 'ipsum';
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->deployment = 'tempore';
    $request->fields = 'accusamus';
    $request->key = 'numquam';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->project = 'dolorem';
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'nihil';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'neque',
        'sed',
        'vel',
    ];
    $request->accessToken = 'libero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deserunt';
    $request->fields = 'quam';
    $request->key = 'ipsum';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'cupiditate';
    $request->resource = 'maxime';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'soluta';

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
use \OpenAPI\OpenAPI\Models\Shared\Credential;
use \OpenAPI\OpenAPI\Models\Shared\BasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccount;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentLabelEntry;
use \OpenAPI\OpenAPI\Models\Shared\Operation;
use \OpenAPI\OpenAPI\Models\Shared\OperationError;
use \OpenAPI\OpenAPI\Models\Shared\OperationErrorErrors;
use \OpenAPI\OpenAPI\Models\Shared\OperationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarnings;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationWarningsData;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentOutputEntry;
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
    $request->deployment1->credential = new Credential();
    $request->deployment1->credential->basicAuth = new BasicAuth();
    $request->deployment1->credential->basicAuth->password = 'laborum';
    $request->deployment1->credential->basicAuth->user = 'totam';
    $request->deployment1->credential->serviceAccount = new ServiceAccount();
    $request->deployment1->credential->serviceAccount->email = 'Brendon_Daniel39@gmail.com';
    $request->deployment1->credential->useProjectDefault = false;
    $request->deployment1->description = 'quam';
    $request->deployment1->fingerprint = 'molestias';
    $request->deployment1->id = 'temporibus';
    $request->deployment1->insertTime = 'qui';
    $request->deployment1->labels = [
        new DeploymentLabelEntry(),
    ];
    $request->deployment1->manifest = 'fugit';
    $request->deployment1->name = 'Courtney Cassin';
    $request->deployment1->operation = new Operation();
    $request->deployment1->operation->clientOperationId = 'hic';
    $request->deployment1->operation->creationTimestamp = 'voluptatem';
    $request->deployment1->operation->description = 'cumque';
    $request->deployment1->operation->endTime = 'soluta';
    $request->deployment1->operation->error = new OperationError();
    $request->deployment1->operation->error->errors = [
        new OperationErrorErrors(),
        new OperationErrorErrors(),
        new OperationErrorErrors(),
    ];
    $request->deployment1->operation->httpErrorMessage = 'et';
    $request->deployment1->operation->httpErrorStatusCode = 903720;
    $request->deployment1->operation->id = 'ipsum';
    $request->deployment1->operation->insertTime = 'veritatis';
    $request->deployment1->operation->kind = 'nobis';
    $request->deployment1->operation->name = 'Dr. Randolph McDermott';
    $request->deployment1->operation->operationGroupId = 'dolore';
    $request->deployment1->operation->operationType = 'labore';
    $request->deployment1->operation->progress = 240829;
    $request->deployment1->operation->region = 'dolorum';
    $request->deployment1->operation->selfLink = 'architecto';
    $request->deployment1->operation->startTime = 'quae';
    $request->deployment1->operation->status = OperationStatusEnum::PENDING;
    $request->deployment1->operation->statusMessage = 'quas';
    $request->deployment1->operation->targetId = 'itaque';
    $request->deployment1->operation->targetLink = 'consequatur';
    $request->deployment1->operation->user = 'est';
    $request->deployment1->operation->warnings = [
        new OperationWarnings(),
        new OperationWarnings(),
        new OperationWarnings(),
        new OperationWarnings(),
    ];
    $request->deployment1->operation->zone = 'porro';
    $request->deployment1->outputs = [
        new DeploymentOutputEntry(),
        new DeploymentOutputEntry(),
        new DeploymentOutputEntry(),
        new DeploymentOutputEntry(),
    ];
    $request->deployment1->selfLink = 'ut';
    $request->deployment1->target = new TargetConfiguration();
    $request->deployment1->target->config = new ConfigFile();
    $request->deployment1->target->config->content = 'facilis';
    $request->deployment1->target->imports = [
        new ImportFile(),
        new ImportFile(),
        new ImportFile(),
    ];
    $request->deployment1->update = new DeploymentUpdate();
    $request->deployment1->update->credential = new Credential();
    $request->deployment1->update->credential->basicAuth = new BasicAuth();
    $request->deployment1->update->credential->basicAuth->password = 'qui';
    $request->deployment1->update->credential->basicAuth->user = 'quae';
    $request->deployment1->update->credential->serviceAccount = new ServiceAccount();
    $request->deployment1->update->credential->serviceAccount->email = 'Jeanette_McClure87@yahoo.com';
    $request->deployment1->update->credential->useProjectDefault = false;
    $request->deployment1->update->description = 'omnis';
    $request->deployment1->update->labels = [
        new DeploymentUpdateLabelEntry(),
        new DeploymentUpdateLabelEntry(),
    ];
    $request->deployment1->update->manifest = 'ipsum';
    $request->deployment1->updateTime = 'delectus';
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vero';
    $request->createPolicy = DeploymentmanagerDeploymentsUpdateCreatePolicyEnum::CREATE;
    $request->deletePolicy = DeploymentmanagerDeploymentsUpdateDeletePolicyEnum::DELETE;
    $request->deploymentPathParameter = 'hic';
    $request->fields = 'distinctio';
    $request->key = 'quod';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->preview = false;
    $request->project = 'similique';
    $request->quotaUser = 'facilis';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'ducimus';

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
