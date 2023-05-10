# resources

### Available Operations

* [deploymentmanagerResourcesGet](#deploymentmanagerresourcesget) - Gets information about a single resource.
* [deploymentmanagerResourcesList](#deploymentmanagerresourceslist) - Lists all resources in a given deployment.

## deploymentmanagerResourcesGet

Gets information about a single resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerResourcesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerResourcesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerResourcesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerResourcesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerResourcesGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerResourcesGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerResourcesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->deployment = 'eaque';
    $request->fields = 'occaecati';
    $request->key = 'rerum';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->project = 'asperiores';
    $request->quotaUser = 'earum';
    $request->resource = 'modi';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new DeploymentmanagerResourcesGetSecurity();
    $requestSecurity->option1 = new DeploymentmanagerResourcesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resources->deploymentmanagerResourcesGet($request, $requestSecurity);

    if ($response->resource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerResourcesList

Lists all resources in a given deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerResourcesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerResourcesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerResourcesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerResourcesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerResourcesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerResourcesListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerResourcesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nobis';
    $request->deployment = 'libero';
    $request->fields = 'delectus';
    $request->filter = 'quaerat';
    $request->key = 'quos';
    $request->maxResults = 398221;
    $request->oauthToken = 'dolorem';
    $request->orderBy = 'dolorem';
    $request->pageToken = 'dolor';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new DeploymentmanagerResourcesListSecurity();
    $requestSecurity->option1 = new DeploymentmanagerResourcesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resources->deploymentmanagerResourcesList($request, $requestSecurity);

    if ($response->resourcesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
