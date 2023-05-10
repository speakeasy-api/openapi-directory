<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1EmailDisposableRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV1EmailDisposableFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1EmailDisposableRequest();
    $request->email = 'Larue_Rau85@yahoo.com';
    $request->format = GetV1EmailDisposableFormatEnum::XML;
    $request->key = 'illum';

    $response = $sdk->getV1EmailDisposable($request);

    if ($response->getV1EmailDisposable200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->