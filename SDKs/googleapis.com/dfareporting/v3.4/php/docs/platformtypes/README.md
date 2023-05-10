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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eaque';
    $request->fields = 'ex';
    $request->id = 'b28ecc86-4923-486f-a2c9-69c4cc6b7889';
    $request->key = 'alias';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->profileId = 'sequi';
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'nesciunt';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quibusdam';
    $request->fields = 'culpa';
    $request->key = 'dicta';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->profileId = 'asperiores';
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'consequuntur';

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
