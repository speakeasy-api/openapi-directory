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
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestiae';
    $request->fields = 'eius';
    $request->id = '9366ac8e-e0f2-4bf1-9588-d40d03f3deba';
    $request->key = 'quia';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->profileId = 'molestiae';
    $request->quotaUser = 'facilis';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'ipsum';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'harum';
    $request->directories = [
        DfareportingMobileAppsListDirectoriesEnum::UNKNOWN,
        DfareportingMobileAppsListDirectoriesEnum::UNKNOWN,
        DfareportingMobileAppsListDirectoriesEnum::GOOGLE_PLAY_STORE,
        DfareportingMobileAppsListDirectoriesEnum::GOOGLE_PLAY_STORE,
    ];
    $request->fields = 'quos';
    $request->ids = [
        'blanditiis',
        'voluptatibus',
    ];
    $request->key = 'nulla';
    $request->maxResults = 367747;
    $request->oauthToken = 'ratione';
    $request->pageToken = 'dolore';
    $request->prettyPrint = false;
    $request->profileId = 'perferendis';
    $request->quotaUser = 'enim';
    $request->searchString = 'impedit';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'dolor';

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
