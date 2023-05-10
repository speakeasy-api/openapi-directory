# keys

### Available Operations

* [apikeysKeysLookupKey](#apikeyskeyslookupkey) - Find the parent project and resource name of the API key that matches the key string in the request. If the API key has been purged, resource name will not be set. The service account must have the `apikeys.keys.lookup` permission on the parent project.

## apikeysKeysLookupKey

Find the parent project and resource name of the API key that matches the key string in the request. If the API key has been purged, resource name will not be set. The service account must have the `apikeys.keys.lookup` permission on the parent project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysKeysLookupKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysKeysLookupKeySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysKeysLookupKeySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysKeysLookupKeySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApikeysKeysLookupKeyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'ipsa';
    $request->key = 'delectus';
    $request->keyString = 'tempora';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new ApikeysKeysLookupKeySecurity();
    $requestSecurity->option1 = new ApikeysKeysLookupKeySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->keys->apikeysKeysLookupKey($request, $requestSecurity);

    if ($response->v2LookupKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
