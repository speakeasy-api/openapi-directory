# properties

## Overview

Endpoints for listing properties.

### Available Operations

* [getAccountProperties](#getaccountproperties) - Get account properties
* [getUserProperties](#getuserproperties) - Get user properties

## getAccountProperties

Endpoint to list account properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->properties->getAccountProperties();

    if ($response->getAccountProperties200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserProperties

Endpoint to list user properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->properties->getUserProperties();

    if ($response->getUserProperties200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
