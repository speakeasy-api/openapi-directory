# SDK

## Overview

This API is the main entry point for creating, editing and publishing analytics throught the Presalytics API

### Available Operations

* [getEnvironment](#getenvironment) - Environment: Get
* [specNoTags](#specnotags) - Specification: No tags

## getEnvironment

pass rendering metadata to the client-side scripts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getEnvironment();

    if ($response->getEnvironment200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## specNoTags

json-formatted version of this spec with the tags removed to help with codegen processes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->specNoTags();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
