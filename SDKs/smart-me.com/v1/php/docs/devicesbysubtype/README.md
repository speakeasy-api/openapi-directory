# devicesBySubType

### Available Operations

* [devicesBySubTypeGet](#devicesbysubtypeget) - Gets all Devices by it's Sub Type (e.g. E-Charging Station)

## devicesBySubTypeGet

Gets all Devices by it's Sub Type (e.g. E-Charging Station)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DevicesBySubTypeGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DevicesBySubTypeGetMeterSubTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DevicesBySubTypeGetRequest();
    $request->meterSubType = DevicesBySubTypeGetMeterSubTypeEnum::METER_SUB_TYPE_ELECTRICITY_HEAT;

    $response = $sdk->devicesBySubType->devicesBySubTypeGet($request);

    if ($response->devices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
