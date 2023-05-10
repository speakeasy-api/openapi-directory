# orders

### Available Operations

* [orders](#orders) - Orders

## orders

Retrieve order by ID and optionally name. This service is only accessible for LH privileged partners

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrdersRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrdersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrdersRequest();
    $request->accept = 'velit';
    $request->name = 'Miss Eugene Hauck';
    $request->orderID = 'enim';

    $requestSecurity = new OrdersSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->orders($request, $requestSecurity);

    if ($response->orders200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
