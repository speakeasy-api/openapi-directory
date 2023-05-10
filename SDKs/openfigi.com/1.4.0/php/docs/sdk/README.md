# SDK

## Overview

A free & open API for FIGI discovery.

### Available Operations

* [getMappingValuesKey](#getmappingvalueskey) - Get values for enum-like fields.
* [postMapping](#postmapping) - Allows mapping from third-party identifiers to FIGIs.

## getMappingValuesKey

Get values for enum-like fields.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMappingValuesKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMappingValuesKeyKeyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMappingValuesKeyRequest();
    $request->key = GetMappingValuesKeyKeyEnum::MARKET_SEC_DES;

    $response = $sdk->sdk->getMappingValuesKey($request);

    if ($response->getMappingValuesKey200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMapping

Allows mapping from third-party identifiers to FIGIs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\MappingJob;
use \OpenAPI\OpenAPI\Models\Shared\MappingJobIdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MappingJobOptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MappingJobStateCodeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new MappingJob(),
        new MappingJob(),
        new MappingJob(),
    ]

    $response = $sdk->sdk->postMapping($request);

    if ($response->bulkMappingJobResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
