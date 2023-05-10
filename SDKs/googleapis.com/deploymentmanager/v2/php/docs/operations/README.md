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
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'libero';
    $request->key = 'nobis';
    $request->oauthToken = 'dolores';
    $request->operation = 'quis';
    $request->prettyPrint = false;
    $request->project = 'totam';
    $request->quotaUser = 'dignissimos';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'quis';

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
