# products

### Available Operations

* [getProducts](#getproducts) - /products

## getProducts

### Get products

Get a list of insurance [products](https://www.heraldapi.com/docs/products).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsRequest();
    $request->producerId = 'ipsam';

    $response = $sdk->products->getProducts($request);

    if ($response->getProducts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
