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
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatibus';
    $request->deployment = 'exercitationem';
    $request->fields = 'nulla';
    $request->key = 'fugit';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->project = 'maiores';
    $request->quotaUser = 'doloribus';
    $request->resource = 'iusto';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'ducimus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->deployment = 'ea';
    $request->fields = 'aspernatur';
    $request->filter = 'vel';
    $request->key = 'possimus';
    $request->maxResults = 297842;
    $request->oauthToken = 'ratione';
    $request->orderBy = 'ex';
    $request->pageToken = 'laudantium';
    $request->prettyPrint = false;
    $request->project = 'dicta';
    $request->quotaUser = 'dolor';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'quasi';

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
