# product

### Available Operations

* [getProductInfo](#getproductinfo) - Retrieve product info for a particular barcode number (UPC, EAN, or ISBN).

## getProductInfo

Retrieve product info for a particular barcode number (UPC, EAN, or ISBN).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProductInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductInfoRequest();
    $request->code = 'provident';

    $response = $sdk->product->getProductInfo($request);

    if ($response->getProductInfo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
