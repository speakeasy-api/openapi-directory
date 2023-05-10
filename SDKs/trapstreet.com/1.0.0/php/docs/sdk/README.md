# SDK

## Overview

The TrapStreet API finds trap streets in Google Maps, Bing Maps and OpenStreetMap data.

### Available Operations

* [getAddress](#getaddress)

## getAddress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAddressRequest();
    $request->address = '6634 Sim Cape';

    $response = $sdk->sdk->getAddress($request);

    if ($response->getAddress200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
