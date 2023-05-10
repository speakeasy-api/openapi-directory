# fraudManagement

## Overview

Fraud Management

### Available Operations

* [networkUnblock](#networkunblock) - Request a network unblock

## networkUnblock

Request to unblock a network that has been blocked due to potential fraud detection
<div class="Vlt-callout Vlt-callout--critical">
  <div class="Vlt-callout__content">
    <h4>Network Unblock is switched off by default.</h4>
    Please contact Sales to enable the Network Unblock API for your account.
  </div>
</div>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\NetworkUnblock;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkUnblock();
    $request->network = '32526';
    $request->unblockDuration = 3600;

    $response = $sdk->fraudManagement->networkUnblock($request);

    if ($response->networkUnblockResponseOk !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
