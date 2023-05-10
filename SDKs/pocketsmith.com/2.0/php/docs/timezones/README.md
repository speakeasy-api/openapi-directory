# timeZones

### Available Operations

* [getTimeZones](#gettimezones) - List time zones

## getTimeZones

Lists time zones.

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
    $response = $sdk->timeZones->getTimeZones();

    if ($response->timeZones !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
