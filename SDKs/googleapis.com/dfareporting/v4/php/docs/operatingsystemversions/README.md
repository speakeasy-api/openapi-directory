# operatingSystemVersions

### Available Operations

* [dfareportingOperatingSystemVersionsGet](#dfareportingoperatingsystemversionsget) - Gets one operating system version by ID.
* [dfareportingOperatingSystemVersionsList](#dfareportingoperatingsystemversionslist) - Retrieves a list of operating system versions.

## dfareportingOperatingSystemVersionsGet

Gets one operating system version by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingOperatingSystemVersionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingOperatingSystemVersionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingOperatingSystemVersionsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'illum';
    $request->fields = 'nulla';
    $request->id = '597ff471-1aa1-4bc7-8b86-cecc74f77b48';
    $request->key = 'aliquam';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->profileId = 'soluta';
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new DfareportingOperatingSystemVersionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operatingSystemVersions->dfareportingOperatingSystemVersionsGet($request, $requestSecurity);

    if ($response->operatingSystemVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingOperatingSystemVersionsList

Retrieves a list of operating system versions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingOperatingSystemVersionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingOperatingSystemVersionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingOperatingSystemVersionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->fields = 'aliquam';
    $request->key = 'architecto';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->profileId = 'qui';
    $request->quotaUser = 'maxime';
    $request->uploadType = 'ratione';
    $request->uploadProtocol = 'soluta';

    $requestSecurity = new DfareportingOperatingSystemVersionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operatingSystemVersions->dfareportingOperatingSystemVersionsList($request, $requestSecurity);

    if ($response->operatingSystemVersionsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
