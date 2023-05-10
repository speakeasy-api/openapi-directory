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
    $request->accessToken = 'porro';
    $request->alt = AltEnum::JSON;
    $request->callback = 'molestias';
    $request->fields = 'qui';
    $request->id = 'b5744d08-a226-47aa-ae79-e3c71ad31bec';
    $request->key = 'distinctio';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->profileId = 'consectetur';
    $request->quotaUser = 'nulla';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'dolor';

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
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'debitis';
    $request->fields = 'neque';
    $request->key = 'facilis';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->profileId = 'maxime';
    $request->quotaUser = 'sed';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'nulla';

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
