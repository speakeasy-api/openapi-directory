# test

### Available Operations

* [testGet](#testget) - Get the all Test objects.
            

## testGet

Get the all Test objects.
            

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
    $response = $sdk->test->testGet();

    if ($response->testDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
