# types

### Available Operations

* [deploymentmanagerTypesGet](#deploymentmanagertypesget) - Gets information about a specific type.
* [deploymentmanagerTypesList](#deploymentmanagertypeslist) - Lists all resource types for Deployment Manager.

## deploymentmanagerTypesGet

Gets information about a specific type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypesGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerTypesGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerTypesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptas';
    $request->fields = 'voluptas';
    $request->key = 'minima';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->project = 'dolorum';
    $request->quotaUser = 'adipisci';
    $request->type = 'minus';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'blanditiis';

    $requestSecurity = new DeploymentmanagerTypesGetSecurity();
    $requestSecurity->option1 = new DeploymentmanagerTypesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->types->deploymentmanagerTypesGet($request, $requestSecurity);

    if ($response->type !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'officiis';
    $request->fields = 'temporibus';
    $request->filter = 'ullam';
    $request->key = 'adipisci';
    $request->maxResults = 738391;
    $request->oauthToken = 'blanditiis';
    $request->orderBy = 'quas';
    $request->pageToken = 'hic';
    $request->prettyPrint = false;
    $request->project = 'nesciunt';
    $request->quotaUser = 'culpa';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'pariatur';

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
