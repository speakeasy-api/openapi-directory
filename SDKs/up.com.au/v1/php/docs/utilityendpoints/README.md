# utilityEndpoints

## Overview

Some endpoints exist not to expose data, but to test the API
itself. Currently there is only one endpoint in this group: ping!


### Available Operations

* [getUtilPing](#getutilping) - Ping

## getUtilPing

Make a basic ping request to the API. This is useful to verify that
authentication is functioning correctly. On authentication success an
HTTP `200` status is returned. On failure an HTTP `401` error response
is returned.


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
    $response = $sdk->utilityEndpoints->getUtilPing();

    if ($response->pingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
