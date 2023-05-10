# devicesByEnergy

### Available Operations

* [devicesByEnergyGet](#devicesbyenergyget) - Gets all Devices for an Energy Type

## devicesByEnergyGet

Gets all Devices for an Energy Type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DevicesByEnergyGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DevicesByEnergyGetMeterEnergyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DevicesByEnergyGetRequest();
    $request->meterEnergyType = DevicesByEnergyGetMeterEnergyTypeEnum::METER_TYPE_M_BUS_GATEWAY;

    $response = $sdk->devicesByEnergy->devicesByEnergyGet($request);

    if ($response->devices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
