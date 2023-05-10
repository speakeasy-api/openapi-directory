# rootAuthorization

## Overview

Authorization.

### Available Operations

* [deleteAuthzCache](#deleteauthzcache) - Clear cached authorization information

## deleteAuthzCache

Clears the node of cached authorization information for the current user.

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
    $response = $sdk->rootAuthorization->deleteAuthzCache();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
