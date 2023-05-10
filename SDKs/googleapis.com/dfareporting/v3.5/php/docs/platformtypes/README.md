# platformTypes

### Available Operations

* [dfareportingPlatformTypesGet](#dfareportingplatformtypesget) - Gets one platform type by ID.
* [dfareportingPlatformTypesList](#dfareportingplatformtypeslist) - Retrieves a list of platform types.

## dfareportingPlatformTypesGet

Gets one platform type by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlatformTypesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlatformTypesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingPlatformTypesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'atque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eius';
    $request->fields = 'unde';
    $request->id = '2386f62c-969c-44cc-ab78-890a3fd3c81d';
    $request->key = 'culpa';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->profileId = 'perferendis';
    $request->quotaUser = 'asperiores';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'optio';

    $requestSecurity = new DfareportingPlatformTypesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->platformTypes->dfareportingPlatformTypesGet($request, $requestSecurity);

    if ($response->platformType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingPlatformTypesList

Retrieves a list of platform types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlatformTypesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlatformTypesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingPlatformTypesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'non';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatibus';
    $request->fields = 'iste';
    $request->key = 'amet';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->profileId = 'pariatur';
    $request->quotaUser = 'officia';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new DfareportingPlatformTypesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->platformTypes->dfareportingPlatformTypesList($request, $requestSecurity);

    if ($response->platformTypesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
