# authinfo

## Overview

Read-only route providing information about how the requesting client is authenticated on the API, as well as corresponding permissions.


### Available Operations

* [getAuthinfo](#getauthinfo) - Authentication information

## getAuthinfo

Authentication information

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
    $response = $sdk->authinfo->getAuthinfo();

    if ($response->getAuthinfo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
