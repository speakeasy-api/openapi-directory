<!-- Start SDK Example Usage -->
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleIdentityStsV1betaExchangeTokenRequest = new GoogleIdentityStsV1betaExchangeTokenRequest();
    $request->googleIdentityStsV1betaExchangeTokenRequest->audience = 'provident';
    $request->googleIdentityStsV1betaExchangeTokenRequest->grantType = 'distinctio';
    $request->googleIdentityStsV1betaExchangeTokenRequest->options = 'quibusdam';
    $request->googleIdentityStsV1betaExchangeTokenRequest->requestedTokenType = 'unde';
    $request->googleIdentityStsV1betaExchangeTokenRequest->scope = 'nulla';
    $request->googleIdentityStsV1betaExchangeTokenRequest->subjectToken = 'corrupti';
    $request->googleIdentityStsV1betaExchangeTokenRequest->subjectTokenType = 'illum';
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deserunt';
    $request->fields = 'suscipit';
    $request->key = 'iure';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'delectus';

    $response = $sdk->v1beta->stsToken($request);

    if ($response->googleIdentityStsV1betaExchangeTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->