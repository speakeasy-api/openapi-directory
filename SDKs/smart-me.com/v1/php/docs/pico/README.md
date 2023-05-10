# pico

### Available Operations

* [picoGet](#picoget) - Gets all pico charging stations for this user

## picoGet

Gets all pico charging stations for this user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->pico->picoGet();

    if ($response->devices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
