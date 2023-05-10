# organizations

### Available Operations

* [kmsinventoryOrganizationsProtectedResourcesSearch](#kmsinventoryorganizationsprotectedresourcessearch) - Returns metadata about the resources protected by the given Cloud KMS CryptoKey in the given Cloud organization.

## kmsinventoryOrganizationsProtectedResourcesSearch

Returns metadata about the resources protected by the given Cloud KMS CryptoKey in the given Cloud organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KmsinventoryOrganizationsProtectedResourcesSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\KmsinventoryOrganizationsProtectedResourcesSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KmsinventoryOrganizationsProtectedResourcesSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->cryptoKey = 'suscipit';
    $request->fields = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->pageSize = 528895;
    $request->pageToken = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->scope = 'nisi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new KmsinventoryOrganizationsProtectedResourcesSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->kmsinventoryOrganizationsProtectedResourcesSearch($request, $requestSecurity);

    if ($response->googleCloudKmsInventoryV1SearchProtectedResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
