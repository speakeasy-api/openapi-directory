# validation

## Overview

Endpoints for validating API keys.

### Available Operations

* [getValidity](#getvalidity) - Validate API key

## getValidity

Endpoint used to test the validity and some basic information about a specific API Key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->validation->getValidity();

    if ($response->getValidity200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
