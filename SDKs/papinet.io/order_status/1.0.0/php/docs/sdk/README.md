# SDK

## Overview

papinet API is a global initiative for the Forst and Paper supply chain.

### Available Operations

* [getOrders](#getorders) - List `orders`
* [getOrdersOrderId](#getordersorderid) - Get an `order`

## getOrders

Gets a paginated list of all `orders`.

### Example Usage

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
    $request->limit = 'quibusdam';
    $request->offset = 'unde';
    $request->orderStatus = GetOrdersOrderStatusEnum::COMPLETED;

    $response = $sdk->sdk->getOrders($request);

    if ($response->listOfOrders !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrdersOrderId

Gets the details of a specific `order`, including a paginated list of all its lines.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrdersOrderIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrdersOrderIdRequest();
    $request->orderId = '8d69a674-e0f4-467c-8879-6ed151a05dfc';

    $response = $sdk->sdk->getOrdersOrderId($request);

    if ($response->getOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
