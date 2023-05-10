# picoLoadmanagementSetDynamicCurrent

### Available Operations

* [picoLoadmanagementSetDynamicCurrentPost](#picoloadmanagementsetdynamiccurrentpost) - Sets the dynamic current of a load management group or a single station.

## picoLoadmanagementSetDynamicCurrentPost

Sets the dynamic current of a load management group or a single station.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PicoLoadmanagementSetDynamicCurrentPostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PicoLoadmanagementSetDynamicCurrentPostRequest();
    $request->current = 950953;
    $request->serial = 891523;

    $response = $sdk->picoLoadmanagementSetDynamicCurrent->picoLoadmanagementSetDynamicCurrentPost($request);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
