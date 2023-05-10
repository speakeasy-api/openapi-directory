# processes

### Available Operations

* [processesList](#processeslist) - Get process list.

## processesList

This GET-Method lists all on logoraisr available processes.

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
    $response = $sdk->processes->processesList();

    if ($response->process !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
