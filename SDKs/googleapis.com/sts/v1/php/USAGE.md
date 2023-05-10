<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StsIntrospectRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIdentityStsV1IntrospectTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StsIntrospectRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleIdentityStsV1IntrospectTokenRequest = new GoogleIdentityStsV1IntrospectTokenRequest();
    $request->googleIdentityStsV1IntrospectTokenRequest->token = 'provident';
    $request->googleIdentityStsV1IntrospectTokenRequest->tokenTypeHint = 'distinctio';
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nulla';
    $request->fields = 'corrupti';
    $request->key = 'illum';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';

    $response = $sdk->v1->stsIntrospect($request);

    if ($response->googleIdentityStsV1IntrospectTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->