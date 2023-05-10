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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aperiam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'quas';
    $request->id = '5ae2dfb7-0fb3-4874-a90d-336561eca16e';
    $request->key = 'doloribus';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->profileId = 'iste';
    $request->quotaUser = 'tempora';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'ab';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facere';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'accusamus';
    $request->key = 'officiis';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->profileId = 'nam';
    $request->quotaUser = 'nemo';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'molestias';

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
