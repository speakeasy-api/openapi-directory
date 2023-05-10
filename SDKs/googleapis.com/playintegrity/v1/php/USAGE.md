<!-- Start SDK Example Usage -->
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->decodeIntegrityTokenRequest = new DecodeIntegrityTokenRequest();
    $request->decodeIntegrityTokenRequest->integrityToken = 'provident';
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->fields = 'nulla';
    $request->key = 'corrupti';
    $request->oauthToken = 'illum';
    $request->packageName = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';

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
<!-- End SDK Example Usage -->