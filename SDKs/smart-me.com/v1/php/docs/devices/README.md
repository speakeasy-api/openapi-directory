# devices

### Available Operations

* [devicesGet](#devicesget) - Gets all Devices
* [devicesPostForm](#devicespostform) - Creates or updates a Device or updates it's values.
* [devicesPostJson](#devicespostjson) - Creates or updates a Device or updates it's values.
* [devicesPostRaw](#devicespostraw) - Creates or updates a Device or updates it's values.
* [devicesPut](#devicesput) - Updates the On/Off Switch on a device. 
            For new implementations please use the "actions" command
* [getApiDevicesId](#getapidevicesid) - Gets a Device by it's ID

## devicesGet

Gets all Devices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->devices->devicesGet();

    if ($response->devices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## devicesPostForm

Creates or updates a Device or updates it's values. 
            For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
            To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DeviceToPost;
use \OpenAPI\OpenAPI\Models\Shared\DeviceToPostDeviceEnergyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceToPostMeterSubTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeviceToPost();
    $request->activePower = 2894.06;
    $request->counterReading = 2647.3;
    $request->counterReadingExport = 1831.91;
    $request->counterReadingExportT1 = 3978.21;
    $request->counterReadingExportT2 = 5865.13;
    $request->counterReadingT1 = 5528.22;
    $request->counterReadingT2 = 201.07;
    $request->current = 1649.4;
    $request->currentL1 = 8289.4;
    $request->currentL2 = 3698.08;
    $request->currentL3 = 46.95;
    $request->deviceEnergyType = DeviceToPostDeviceEnergyTypeEnum::METER_TYPE_WATER;
    $request->digitalInput1 = false;
    $request->id = 'a94bb4f6-3c96-49e9-a3ef-a77dfb14cd66';
    $request->meterSubType = DeviceToPostMeterSubTypeEnum::METER_SUB_TYPE_GAS;
    $request->name = 'Alfred McClure';
    $request->powerFactor = 9654.17;
    $request->powerFactorL1 = 6925.32;
    $request->powerFactorL2 = 5884.65;
    $request->powerFactorL3 = 7252.55;
    $request->serial = 659669;
    $request->temperature = 5013.24;
    $request->valueDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-02T01:24:52.629Z');
    $request->voltage = 2305.33;
    $request->voltageL1 = 6439.9;
    $request->voltageL2 = 3948.69;
    $request->voltageL3 = 4238.55;

    $response = $sdk->devices->devicesPostForm($request);

    if ($response->deviceToPost !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## devicesPostJson

Creates or updates a Device or updates it's values. 
            For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
            To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DeviceToPost;
use \OpenAPI\OpenAPI\Models\Shared\DeviceToPostDeviceEnergyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceToPostMeterSubTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeviceToPost();
    $request->activePower = 6188.09;
    $request->counterReading = 6063.93;
    $request->counterReadingExport = 4748.67;
    $request->counterReadingExportT1 = 191.93;
    $request->counterReadingExportT2 = 4701.32;
    $request->counterReadingT1 = 3015.75;
    $request->counterReadingT2 = 7160.75;
    $request->current = 6601.74;
    $request->currentL1 = 2879.91;
    $request->currentL2 = 2900.77;
    $request->currentL3 = 3834.62;
    $request->deviceEnergyType = DeviceToPostDeviceEnergyTypeEnum::METER_TYPE_RS485_GATEWAY;
    $request->digitalInput1 = false;
    $request->id = 'b6e21419-5989-40af-a563-e2516fe4c8b7';
    $request->meterSubType = DeviceToPostMeterSubTypeEnum::METER_SUB_TYPE_COLD;
    $request->name = 'Elvira Herman';
    $request->powerFactor = 9988.48;
    $request->powerFactorL1 = 8411.4;
    $request->powerFactorL2 = 1494.48;
    $request->powerFactorL3 = 9046.48;
    $request->serial = 868126;
    $request->temperature = 375.59;
    $request->valueDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-29T11:09:23.468Z');
    $request->voltage = 6155.6;
    $request->voltageL1 = 1668.47;
    $request->voltageL2 = 1238.2;
    $request->voltageL3 = 7790.51;

    $response = $sdk->devices->devicesPostJson($request);

    if ($response->deviceToPost !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## devicesPostRaw

Creates or updates a Device or updates it's values. 
            For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
            To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'illum'

    $response = $sdk->devices->devicesPostRaw($request);

    if ($response->deviceToPost !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## devicesPut

Updates the On/Off Switch on a device
            For new implementations please use the "actions" command

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DevicesPutRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DevicesPutRequest();
    $request->id = 'dc692601-fb57-46b0-95f0-d30c5fbb2587';
    $request->switchNumber = 54338;
    $request->switchState = false;

    $response = $sdk->devices->devicesPut($request);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiDevicesId

Gets a Device by it's ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiDevicesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiDevicesIdRequest();
    $request->id = '53202c73-d5fe-49b9-8c28-909b3fe49a8d';

    $response = $sdk->devices->getApiDevicesId($request);

    if ($response->device !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
