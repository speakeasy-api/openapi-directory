<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductsUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductsUsingGETRequest();
    $request->budget = 548814;
    $request->q = 'provident';
    $request->size = 715190;

    $response = $sdk->openAiProductEndpoint->productsUsingGET($request);

    if ($response->productResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->