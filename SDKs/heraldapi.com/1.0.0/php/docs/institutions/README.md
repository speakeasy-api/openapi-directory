# institutions

### Available Operations

* [getInstitutions](#getinstitutions) - /institutions

## getInstitutions

### Get institutions

Get a list of available institutions.

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
    $response = $sdk->institutions->getInstitutions();

    if ($response->getInstitutions200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
