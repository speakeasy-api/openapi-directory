# rootBlackoutWindow

## Overview

Blackout windows.

### Available Operations

* [getBlackoutWindowStatus](#getblackoutwindowstatus) - Get current status of global blackout window
* [toggleBlackoutWindow](#toggleblackoutwindow) - Starts or stops the global blackout window in local Rubrik cluster

## getBlackoutWindowStatus

Determine whether global blackout window is currently active.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->rootBlackoutWindow->getBlackoutWindowStatus();

    if ($response->globalBlackoutWindowStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toggleBlackoutWindow

Returns whether or not the system is in a blackout window.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\GlobalBlackoutWindowStatus;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GlobalBlackoutWindowStatus();
    $request->isGlobalBlackoutActive = false;

    $response = $sdk->rootBlackoutWindow->toggleBlackoutWindow($request);

    if ($response->globalBlackoutWindowStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
