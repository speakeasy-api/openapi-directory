# apiInformation

## Overview

Additional API Information

### Available Operations

* [getApiVersion](#getapiversion) - API version
* [getHealth](#gethealth) - Service health

## getApiVersion

Retrieves API Specification version information

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
    $response = $sdk->apiInformation->getApiVersion();

    if ($response->apiVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHealth

Tests basic health of the service

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
    $response = $sdk->apiInformation->getHealth();

    if ($response->apiHealthStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
