# projects

### Available Operations

* [kmsinventoryProjectsCryptoKeysList](#kmsinventoryprojectscryptokeyslist) - Returns cryptographic keys managed by Cloud KMS in a given Cloud project. Note that this data is sourced from snapshots, meaning it may not completely reflect the actual state of key metadata at call time.
* [kmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummary](#kmsinventoryprojectslocationskeyringscryptokeysgetprotectedresourcessummary) - Returns aggregate information about the resources protected by the given Cloud KMS CryptoKey. Only resources within the same Cloud organization as the key will be returned. The project that holds the key must be part of an organization in order for this call to succeed.

## kmsinventoryProjectsCryptoKeysList

Returns cryptographic keys managed by Cloud KMS in a given Cloud project. Note that this data is sourced from snapshots, meaning it may not completely reflect the actual state of key metadata at call time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KmsinventoryProjectsCryptoKeysListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\KmsinventoryProjectsCryptoKeysListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KmsinventoryProjectsCryptoKeysListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'perferendis';
    $request->key = 'ipsam';
    $request->oauthToken = 'repellendus';
    $request->pageSize = 957156;
    $request->pageToken = 'quo';
    $request->parent = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new KmsinventoryProjectsCryptoKeysListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->kmsinventoryProjectsCryptoKeysList($request, $requestSecurity);

    if ($response->googleCloudKmsInventoryV1ListCryptoKeysResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## kmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummary

Returns aggregate information about the resources protected by the given Cloud KMS CryptoKey. Only resources within the same Cloud organization as the key will be returned. The project that holds the key must be part of an organization in order for this call to succeed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\KmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummarySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummaryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'totam';
    $request->key = 'porro';
    $request->name = 'Samuel Reichel';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'optio';

    $requestSecurity = new KmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummarySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->kmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummary($request, $requestSecurity);

    if ($response->googleCloudKmsInventoryV1ProtectedResourcesSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
