<!-- Start SDK Example Usage -->
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->clientId = 'unde';
    $request->clientVersion = 'nulla';
    $request->encodedRequest = 'corrupti';
    $request->fields = 'illum';
    $request->key = 'vel';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iure';

    $response = $sdk->encodedFullHashes->safebrowsingEncodedFullHashesGet($request);

    if ($response->googleSecuritySafebrowsingV4FindFullHashesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->