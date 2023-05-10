# organisation

### Available Operations

* [getOrg](#getorg) - Gets the current organisation

## getOrg

Returns the current organisation info.

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
    $response = $sdk->organisation->getOrg();

    if ($response->orgResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
