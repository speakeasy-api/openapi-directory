# segments

## Overview

Endpoints for reading user and account segments

### Available Operations

* [getAccountSegments](#getaccountsegments) - Get account segments
* [getUserSegments](#getusersegments) - Get user segments

## getAccountSegments

Endpoint to list account segments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->segments->getAccountSegments();

    if ($response->getAccountSegments200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserSegments

Endpoint to list user segments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->segments->getUserSegments();

    if ($response->getUserSegments200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
