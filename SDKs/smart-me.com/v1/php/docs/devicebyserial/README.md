# deviceBySerial

### Available Operations

* [deviceBySerialGet](#devicebyserialget) - Gets a Device by it's Serial Number. The Serial is the part before the "-".

## deviceBySerialGet

Gets a Device by it's Serial Number. The Serial is the part before the "-".

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeviceBySerialGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeviceBySerialGetRequest();
    $request->serial = 841386;

    $response = $sdk->deviceBySerial->deviceBySerialGet($request);

    if ($response->device !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
