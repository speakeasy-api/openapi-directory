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
    $request->accessToken = 'harum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->fields = 'consequatur';
    $request->id = 'df868fd5-2405-4cb3-b1d4-92f4f127fb0e';
    $request->key = 'voluptatem';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->profileId = 'hic';
    $request->quotaUser = 'beatae';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'deleniti';

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
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sint';
    $request->directories = [
        DfareportingMobileAppsListDirectoriesEnum::PLAYSTATION_APP_STORE,
        DfareportingMobileAppsListDirectoriesEnum::ANDROID_TV_APP_STORE,
    ];
    $request->fields = 'consequatur';
    $request->ids = [
        'eligendi',
        'impedit',
        'officia',
    ];
    $request->key = 'odio';
    $request->maxResults = 453755;
    $request->oauthToken = 'mollitia';
    $request->pageToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->profileId = 'tempore';
    $request->quotaUser = 'voluptate';
    $request->searchString = 'cum';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'alias';

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
