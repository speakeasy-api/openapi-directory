# picoCharging

### Available Operations

* [picoChargingGet](#picochargingget) - Gets the active charging data of a pico station

## picoChargingGet

Gets the active charging data of a pico station

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PicoChargingGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PicoChargingGetRequest();
    $request->id = '4bdb04f1-5756-4082-968e-a19f1d170513';

    $response = $sdk->picoCharging->picoChargingGet($request);

    if ($response->picoChargingData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
