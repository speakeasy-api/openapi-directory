# administered

### Available Operations

* [getAdministeredIdentitiesMe](#getadministeredidentitiesme) - Returns the identity of the current user.

## getAdministeredIdentitiesMe

Returns the identity of the current user.

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
    $response = $sdk->administered->getAdministeredIdentitiesMe();

    if ($response->getAdministeredIdentitiesMe200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
