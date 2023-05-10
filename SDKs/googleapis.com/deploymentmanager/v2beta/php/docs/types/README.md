# types

### Available Operations

* [deploymentmanagerTypesList](#deploymentmanagertypeslist) - Lists all resource types for Deployment Manager.

## deploymentmanagerTypesList

Lists all resource types for Deployment Manager.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypesListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerTypesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ducimus';
    $request->fields = 'quos';
    $request->filter = 'vel';
    $request->key = 'labore';
    $request->maxResults = 822560;
    $request->oauthToken = 'facilis';
    $request->orderBy = 'cum';
    $request->pageToken = 'commodi';
    $request->prettyPrint = false;
    $request->project = 'in';
    $request->quotaUser = 'corporis';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'assumenda';

    $requestSecurity = new DeploymentmanagerTypesListSecurity();
    $requestSecurity->option1 = new DeploymentmanagerTypesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->types->deploymentmanagerTypesList($request, $requestSecurity);

    if ($response->typesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
