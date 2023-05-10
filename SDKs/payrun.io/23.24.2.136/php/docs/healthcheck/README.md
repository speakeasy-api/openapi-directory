# healthcheck

### Available Operations

* [getHealthCheck](#gethealthcheck) - Get health check status

## getHealthCheck

Returns the health status of the application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->healthcheck->getHealthCheck();

    if ($response->healthCheck !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
