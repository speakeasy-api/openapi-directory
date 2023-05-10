<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AccessTokenToPut;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccessTokenToPut();
    $request->cardId = 548814;
    $request->userId = 592845;

    $response = $sdk->accessToken->accessTokenPutForm($request);

    if ($response->accessTokenPutForm200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->