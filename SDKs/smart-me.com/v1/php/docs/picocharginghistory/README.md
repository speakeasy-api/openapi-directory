# picoChargingHistory

### Available Operations

* [picoChargingHistoryGet](#picocharginghistoryget) - Gets the last charging history for a pico station

## picoChargingHistoryGet

Gets the last charging history for a pico station

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PicoChargingHistoryGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PicoChargingHistoryGetRequest();
    $request->id = '39d08086-a184-4039-8c26-071f93f5f064';

    $response = $sdk->picoChargingHistory->picoChargingHistoryGet($request);

    if ($response->picoChargingHistoryData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
