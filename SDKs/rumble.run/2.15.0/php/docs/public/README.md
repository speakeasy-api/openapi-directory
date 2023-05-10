# public

## Overview

Unauthenticated

### Available Operations

* [getLatestAgentVersion](#getlatestagentversion) - Returns latest agent version
* [getLatestPlatformVersion](#getlatestplatformversion) - Returns latest platform version
* [getLatestScannerVersion](#getlatestscannerversion) - Returns latest scanner version

## getLatestAgentVersion

Returns latest agent version

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->public->getLatestAgentVersion();

    if ($response->componentVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLatestPlatformVersion

Returns latest platform version

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->public->getLatestPlatformVersion();

    if ($response->componentVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLatestScannerVersion

Returns latest scanner version

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->public->getLatestScannerVersion();

    if ($response->componentVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
