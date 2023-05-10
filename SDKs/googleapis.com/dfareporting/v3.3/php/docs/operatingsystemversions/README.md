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
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'excepturi';
    $request->fields = 'voluptatibus';
    $request->id = 'b0e67e09-4fdf-4ed5-940e-f53a34a1b8fe';
    $request->key = 'perspiciatis';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->profileId = 'reprehenderit';
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'fuga';

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
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ad';
    $request->fields = 'fugiat';
    $request->key = 'quas';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->profileId = 'fuga';
    $request->quotaUser = 'eveniet';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'illum';

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
