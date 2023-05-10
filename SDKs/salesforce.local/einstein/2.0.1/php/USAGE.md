<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GenerateTokenV2RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GenerateTokenV2RequestBodyGrantTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenerateTokenV2RequestBody();
    $request->assertion = 'SOME_ASSERTION_STRING';
    $request->grantType = GenerateTokenV2RequestBodyGrantTypeEnum::URN_IETF_PARAMS_OAUTH_GRANT_TYPE_JWT_BEARER;
    $request->refreshToken = 'SomeRefreshToken';
    $request->scope = 'offline';
    $request->validFor = 120;

    $response = $sdk->authorization->generateTokenV2($request);

    if ($response->generateAccessTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->