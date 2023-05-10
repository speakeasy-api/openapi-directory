# airQuality

### Available Operations

* [airQualityGet](#airqualityget) - Gets air quality data feed

## airQualityGet

Gets air quality data feed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->airQuality->airQualityGet();

    if ($response->systemObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
