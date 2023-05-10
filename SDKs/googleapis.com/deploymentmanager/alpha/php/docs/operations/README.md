# operations

### Available Operations

* [deploymentmanagerOperationsGet](#deploymentmanageroperationsget) - Gets information about a specific operation.
* [deploymentmanagerOperationsList](#deploymentmanageroperationslist) - Lists all operations for a project.

## deploymentmanagerOperationsGet

Gets information about a specific operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerOperationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerOperationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerOperationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerOperationsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerOperationsGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'ex';
    $request->key = 'nulla';
    $request->oauthToken = 'excepturi';
    $request->operation = 'voluptatibus';
    $request->prettyPrint = false;
    $request->project = 'nostrum';
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new DeploymentmanagerOperationsGetSecurity();
    $requestSecurity->option1 = new DeploymentmanagerOperationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operations->deploymentmanagerOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerOperationsList

Lists all operations for a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerOperationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerOperationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerOperationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerOperationsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerOperationsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veniam';
    $request->fields = 'aliquid';
    $request->filter = 'inventore';
    $request->key = 'magnam';
    $request->maxResults = 407241;
    $request->oauthToken = 'quo';
    $request->orderBy = 'consectetur';
    $request->pageToken = 'recusandae';
    $request->prettyPrint = false;
    $request->project = 'aspernatur';
    $request->quotaUser = 'minima';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'a';

    $requestSecurity = new DeploymentmanagerOperationsListSecurity();
    $requestSecurity->option1 = new DeploymentmanagerOperationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operations->deploymentmanagerOperationsList($request, $requestSecurity);

    if ($response->operationsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
