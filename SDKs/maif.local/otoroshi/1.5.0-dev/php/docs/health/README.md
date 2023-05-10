# health

## Overview

Everything about Otoroshi health status

### Available Operations

* [health](#health) - Return current Otoroshi health

## health

Import the full state of Otoroshi as a file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->health->health();

    if ($response->otoroshiHealth !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
