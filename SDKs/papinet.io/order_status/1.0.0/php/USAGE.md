<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrdersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrdersOrderStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrdersRequest();
    $request->limit = 'corrupti';
    $request->offset = 'provident';
    $request->orderStatus = GetOrdersOrderStatusEnum::COMPLETED;

    $response = $sdk->getOrders($request);

    if ($response->listOfOrders !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->