<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOauthV1AccessTokensTokenGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOauthV1AccessTokensTokenGetRequest();
    $request->token = 'corrupti';

    $response = $sdk->accessTokens->getOauthV1AccessTokensTokenGet($request);

    if ($response->accessTokenInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->