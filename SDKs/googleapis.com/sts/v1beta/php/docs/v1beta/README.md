# v1beta

### Available Operations

* [stsToken](#ststoken) - Exchanges a credential for a Google OAuth 2.0 access token. The token asserts an external identity within a workload identity pool, or it applies a Credential Access Boundary to a Google access token. When you call this method, do not send the `Authorization` HTTP header in the request. This method does not require the `Authorization` header, and using the header can cause the request to fail.

## stsToken

Exchanges a credential for a Google OAuth 2.0 access token. The token asserts an external identity within a workload identity pool, or it applies a Credential Access Boundary to a Google access token. When you call this method, do not send the `Authorization` HTTP header in the request. This method does not require the `Authorization` header, and using the header can cause the request to fail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StsTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIdentityStsV1betaExchangeTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StsTokenRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleIdentityStsV1betaExchangeTokenRequest = new GoogleIdentityStsV1betaExchangeTokenRequest();
    $request->googleIdentityStsV1betaExchangeTokenRequest->audience = 'suscipit';
    $request->googleIdentityStsV1betaExchangeTokenRequest->grantType = 'molestiae';
    $request->googleIdentityStsV1betaExchangeTokenRequest->options = 'minus';
    $request->googleIdentityStsV1betaExchangeTokenRequest->requestedTokenType = 'placeat';
    $request->googleIdentityStsV1betaExchangeTokenRequest->scope = 'voluptatum';
    $request->googleIdentityStsV1betaExchangeTokenRequest->subjectToken = 'iusto';
    $request->googleIdentityStsV1betaExchangeTokenRequest->subjectTokenType = 'excepturi';
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'temporibus';
    $request->fields = 'ab';
    $request->key = 'quis';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ipsam';

    $response = $sdk->v1beta->stsToken($request);

    if ($response->googleIdentityStsV1betaExchangeTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
