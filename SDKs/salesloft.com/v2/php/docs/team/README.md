# team

## Overview

Team Information

### Available Operations

* [getV2TeamJson](#getv2teamjson) - Fetch current team

## getV2TeamJson

Fetches the team of the authenticated user.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->team->getV2TeamJson();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
