# openAiProductEndpoint

## Overview

Open AI Product Endpoint. Query for products.

### Available Operations

* [productsUsingGET](#productsusingget) - API for fetching Klarna product information

## productsUsingGET

API for fetching Klarna product information

### Example Usage

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
    $request->budget = 844266;
    $request->q = 'unde';
    $request->size = 857946;

    $response = $sdk->openAiProductEndpoint->productsUsingGET($request);

    if ($response->productResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
