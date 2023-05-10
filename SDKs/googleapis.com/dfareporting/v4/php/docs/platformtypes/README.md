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
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'est';
    $request->fields = 'quis';
    $request->id = 'c0ed7aab-62e9-4726-9fb0-c58d27b51996';
    $request->key = 'tempore';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->profileId = 'expedita';
    $request->quotaUser = 'modi';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'quaerat';

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
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sapiente';
    $request->fields = 'iusto';
    $request->key = 'quasi';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->profileId = 'tempore';
    $request->quotaUser = 'ducimus';
    $request->uploadType = 'animi';
    $request->uploadProtocol = 'ducimus';

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
