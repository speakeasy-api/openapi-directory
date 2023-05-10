# manifests

### Available Operations

* [deploymentmanagerManifestsGet](#deploymentmanagermanifestsget) - Gets information about a specific manifest.
* [deploymentmanagerManifestsList](#deploymentmanagermanifestslist) - Lists all manifests for a given deployment.

## deploymentmanagerManifestsGet

Gets information about a specific manifest.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerManifestsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerManifestsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerManifestsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerManifestsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerManifestsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerManifestsGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerManifestsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nobis';
    $request->deployment = 'quos';
    $request->fields = 'tempore';
    $request->key = 'cupiditate';
    $request->manifest = 'aperiam';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'dolorem';
    $request->quotaUser = 'dolore';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'adipisci';

    $requestSecurity = new DeploymentmanagerManifestsGetSecurity();
    $requestSecurity->option1 = new DeploymentmanagerManifestsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->manifests->deploymentmanagerManifestsGet($request, $requestSecurity);

    if ($response->manifest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentmanagerManifestsList

Lists all manifests for a given deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerManifestsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerManifestsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerManifestsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerManifestsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerManifestsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentmanagerManifestsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentmanagerManifestsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aut';
    $request->deployment = 'quas';
    $request->fields = 'itaque';
    $request->filter = 'consequatur';
    $request->key = 'est';
    $request->maxResults = 833038;
    $request->oauthToken = 'porro';
    $request->orderBy = 'doloribus';
    $request->pageToken = 'ut';
    $request->prettyPrint = false;
    $request->project = 'facilis';
    $request->quotaUser = 'cupiditate';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'quae';

    $requestSecurity = new DeploymentmanagerManifestsListSecurity();
    $requestSecurity->option1 = new DeploymentmanagerManifestsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->manifests->deploymentmanagerManifestsList($request, $requestSecurity);

    if ($response->manifestsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
