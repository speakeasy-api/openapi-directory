# mobileApps

### Available Operations

* [dfareportingMobileAppsGet](#dfareportingmobileappsget) - Gets one mobile app by ID.
* [dfareportingMobileAppsList](#dfareportingmobileappslist) - Retrieves list of available mobile apps.

## dfareportingMobileAppsGet

Gets one mobile app by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingMobileAppsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingMobileAppsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingMobileAppsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'necessitatibus';
    $request->fields = 'nam';
    $request->id = '518c4da1-fad3-4551-af06-d4e5b72f0f54';
    $request->key = 'corrupti';
    $request->oauthToken = 'exercitationem';
    $request->prettyPrint = false;
    $request->profileId = 'commodi';
    $request->quotaUser = 'laudantium';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'consequatur';

    $requestSecurity = new DfareportingMobileAppsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mobileApps->dfareportingMobileAppsGet($request, $requestSecurity);

    if ($response->mobileApp !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingMobileAppsList

Retrieves list of available mobile apps.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingMobileAppsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingMobileAppsListDirectoriesEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingMobileAppsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingMobileAppsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'earum';
    $request->directories = [
        DfareportingMobileAppsListDirectoriesEnum::UNKNOWN,
    ];
    $request->fields = 'officia';
    $request->ids = [
        'quibusdam',
    ];
    $request->key = 'autem';
    $request->maxResults = 916243;
    $request->oauthToken = 'tempore';
    $request->pageToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->profileId = 'modi';
    $request->quotaUser = 'ratione';
    $request->searchString = 'aliquam';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'aliquam';

    $requestSecurity = new DfareportingMobileAppsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mobileApps->dfareportingMobileAppsList($request, $requestSecurity);

    if ($response->mobileAppsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
