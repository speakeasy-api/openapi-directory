# monitoring

### Available Operations

* [getV05Heartbeat](#getv05heartbeat) - Get consent request status

## getV05Heartbeat

Get consent request status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->monitoring->getV05Heartbeat();

    if ($response->heartbeatResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
