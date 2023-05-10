# stats

## Overview

Stats on Near Earth Object data sets

### Available Operations

* [retrieveCurrentNeoStatistics](#retrievecurrentneostatistics) - Get the Near Earth Object data set totals

## retrieveCurrentNeoStatistics

retrieveCurrentNeoStatistics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->stats->retrieveCurrentNeoStatistics();

    if ($response->statistics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
