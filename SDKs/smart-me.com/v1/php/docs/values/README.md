# values

### Available Operations

* [valuesGet](#valuesget) - Gets all (last) values of a device

## valuesGet

Gets all (last) values of a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ValuesGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ValuesGetRequest();
    $request->id = '8ff61d01-7476-4360-a15d-b6a660659a1a';

    $response = $sdk->values->valuesGet($request);

    if ($response->valuesData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
