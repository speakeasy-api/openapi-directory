# staticFiles

## Overview

This folder contains a list of static files stored in Home.

### Available Operations

* [chromecastIcon](#chromecasticon) - Chromecast Icon
* [legalNotice](#legalnotice) - Legal Notice

## chromecastIcon

**Update:** This no longer exists. It's not useful, anyway.

A redirect to `http://www.gstatic.com/eureka/images/eureka_device.png`

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
    $response = $sdk->staticFiles->chromecastIcon();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## legalNotice

All licenses of programs used by Home.

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
    $response = $sdk->staticFiles->legalNotice();

    if ($response->legalNotice200TextPlainString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
