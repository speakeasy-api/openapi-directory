# pi

## Overview

Digits of PI and more.This API is free (rate limited).

### Available Operations

* [getNumbersPi](#getnumberspi) - Get digits of pi (Ï€)

## getNumbersPi

Get digits of pi (Ï€)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersPiRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersPiSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersPiRequest();
    $request->from = 87129;
    $request->to = 648172;

    $requestSecurity = new GetNumbersPiSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->pi->getNumbersPi($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
