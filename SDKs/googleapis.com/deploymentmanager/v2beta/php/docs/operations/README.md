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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->fields = 'quisquam';
    $request->key = 'vero';
    $request->oauthToken = 'omnis';
    $request->operation = 'quis';
    $request->prettyPrint = false;
    $request->project = 'ipsum';
    $request->quotaUser = 'delectus';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'consectetur';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'distinctio';
    $request->filter = 'quod';
    $request->key = 'odio';
    $request->maxResults = 630448;
    $request->oauthToken = 'facilis';
    $request->orderBy = 'vero';
    $request->pageToken = 'ducimus';
    $request->prettyPrint = false;
    $request->project = 'dolore';
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'sequi';

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
