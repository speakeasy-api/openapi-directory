# me

## Overview

User Information

### Available Operations

* [getV2MeJson](#getv2mejson) - Fetch current user

## getV2MeJson

Authenticated user information. This endpoint does not accept any parameters as it is
represents your authenticated user. The "Users" resource provides user information
for other users on the team.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->me->getV2MeJson();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
