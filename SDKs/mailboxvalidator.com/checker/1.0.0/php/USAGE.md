<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1EmailFreeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV1EmailFreeFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1EmailFreeRequest();
    $request->email = 'Larue_Rau85@yahoo.com';
    $request->format = GetV1EmailFreeFormatEnum::XML;
    $request->key = 'illum';

    $response = $sdk->getV1EmailFree($request);

    if ($response->getV1EmailFree200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->