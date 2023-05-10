# welcomeAndHealthCheck

### Available Operations

* [get](#get) - /

## get

### Welcome & Health Check

Welcome to Herald! You can use the root endpoint to confirm HeraldAPI is available and you are able to successfully connect.

This endpoint does not require authentication.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->welcomeAndHealthCheck->get();

    if ($response->get200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
