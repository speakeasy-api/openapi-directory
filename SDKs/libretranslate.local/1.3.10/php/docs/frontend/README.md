# frontend

### Available Operations

* [getFrontendSettings](#getfrontendsettings) - Retrieve frontend specific settings

## getFrontendSettings

Retrieve frontend specific settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->frontend->getFrontendSettings();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
