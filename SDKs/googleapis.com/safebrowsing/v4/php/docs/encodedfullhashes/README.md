# encodedFullHashes

### Available Operations

* [safebrowsingEncodedFullHashesGet](#safebrowsingencodedfullhashesget)

## safebrowsingEncodedFullHashesGet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SafebrowsingEncodedFullHashesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SafebrowsingEncodedFullHashesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->clientId = 'tempora';
    $request->clientVersion = 'suscipit';
    $request->encodedRequest = 'molestiae';
    $request->fields = 'minus';
    $request->key = 'placeat';
    $request->oauthToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';

    $response = $sdk->encodedFullHashes->safebrowsingEncodedFullHashesGet($request);

    if ($response->googleSecuritySafebrowsingV4FindFullHashesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
