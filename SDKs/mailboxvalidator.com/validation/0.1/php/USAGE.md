<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1ValidationSingleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV1ValidationSingleFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1ValidationSingleRequest();
    $request->email = 'Larue_Rau85@yahoo.com';
    $request->format = GetV1ValidationSingleFormatEnum::XML;
    $request->key = 'illum';

    $response = $sdk->getV1ValidationSingle($request);

    if ($response->getV1ValidationSingle200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->