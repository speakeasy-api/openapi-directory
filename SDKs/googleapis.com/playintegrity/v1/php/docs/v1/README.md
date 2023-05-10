# v1

### Available Operations

* [playintegrityDecodeIntegrityToken](#playintegritydecodeintegritytoken) - Decodes the integrity token and returns the token payload.

## playintegrityDecodeIntegrityToken

Decodes the integrity token and returns the token payload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlayintegrityDecodeIntegrityTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DecodeIntegrityTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlayintegrityDecodeIntegrityTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayintegrityDecodeIntegrityTokenRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->decodeIntegrityTokenRequest = new DecodeIntegrityTokenRequest();
    $request->decodeIntegrityTokenRequest->integrityToken = 'magnam';
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->oauthToken = 'molestiae';
    $request->packageName = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new PlayintegrityDecodeIntegrityTokenSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1->playintegrityDecodeIntegrityToken($request, $requestSecurity);

    if ($response->decodeIntegrityTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
