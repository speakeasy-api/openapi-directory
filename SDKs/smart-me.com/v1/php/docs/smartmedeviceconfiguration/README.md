# smartMeDeviceConfiguration

### Available Operations

* [smartMeDeviceConfigurationGet](#smartmedeviceconfigurationget) - Gets the configuration of a smart-me device.
* [smartMeDeviceConfigurationPostForm](#smartmedeviceconfigurationpostform) - Sets the configuration of a smart-me device. The device needs to be online.
* [smartMeDeviceConfigurationPostJson](#smartmedeviceconfigurationpostjson) - Sets the configuration of a smart-me device. The device needs to be online.
* [smartMeDeviceConfigurationPostRaw](#smartmedeviceconfigurationpostraw) - Sets the configuration of a smart-me device. The device needs to be online.

## smartMeDeviceConfigurationGet

Gets the configuration of a smart-me device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SmartMeDeviceConfigurationGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SmartMeDeviceConfigurationGetRequest();
    $request->id = '4075088e-5186-4206-9e90-4f3b1194b8ab';

    $response = $sdk->smartMeDeviceConfiguration->smartMeDeviceConfigurationGet($request);

    if ($response->smartMeDeviceConfigurationContainer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## smartMeDeviceConfigurationPostForm

Sets the configuration of a smart-me device. The device needs to be online.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SmartMeDeviceConfigurationContainer;
use \OpenAPI\OpenAPI\Models\Shared\SmartMeDeviceConfigurationContainerDnsUpdateStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputConfigurationContainer;
use \OpenAPI\OpenAPI\Models\Shared\InputConfigurationContainerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputConfigurationContainer;
use \OpenAPI\OpenAPI\Models\Shared\OutputConfigurationContainerDigitalOutputNoConnectionActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputConfigurationContainerS0PulseValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputConfigurationContainerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SwitchConfigurationContainer;
use \OpenAPI\OpenAPI\Models\Shared\SmartMeDeviceConfigurationContainerUploadIntervalEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SmartMeDeviceConfigurationContainer();
    $request->deviceEncryptionKey = 'tenetur';
    $request->devicePinCode = 'laboriosam';
    $request->dnsUpdateState = SmartMeDeviceConfigurationContainerDnsUpdateStateEnum::NO_UPDATE;
    $request->enableModbusTcp = false;
    $request->id = '3a79f9df-e0ab-47da-8a50-ce187f86bc17';
    $request->inputConfiguration = [
        new InputConfigurationContainer(),
    ];
    $request->outputConfiguration = [
        new OutputConfigurationContainer(),
        new OutputConfigurationContainer(),
        new OutputConfigurationContainer(),
        new OutputConfigurationContainer(),
    ];
    $request->showReactiveEnergy = false;
    $request->switchConfiguration = [
        new SwitchConfigurationContainer(),
        new SwitchConfigurationContainer(),
    ];
    $request->uploadInterval = SmartMeDeviceConfigurationContainerUploadIntervalEnum::UPLOAD_INTERVAL15MIN;

    $response = $sdk->smartMeDeviceConfiguration->smartMeDeviceConfigurationPostForm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## smartMeDeviceConfigurationPostJson

Sets the configuration of a smart-me device. The device needs to be online.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SmartMeDeviceConfigurationContainer;
use \OpenAPI\OpenAPI\Models\Shared\SmartMeDeviceConfigurationContainerDnsUpdateStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputConfigurationContainer;
use \OpenAPI\OpenAPI\Models\Shared\InputConfigurationContainerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputConfigurationContainer;
use \OpenAPI\OpenAPI\Models\Shared\OutputConfigurationContainerDigitalOutputNoConnectionActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputConfigurationContainerS0PulseValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputConfigurationContainerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SwitchConfigurationContainer;
use \OpenAPI\OpenAPI\Models\Shared\SmartMeDeviceConfigurationContainerUploadIntervalEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SmartMeDeviceConfigurationContainer();
    $request->deviceEncryptionKey = 'error';
    $request->devicePinCode = 'officiis';
    $request->dnsUpdateState = SmartMeDeviceConfigurationContainerDnsUpdateStateEnum::DNS_UPDATE_INTERNAL_IP;
    $request->enableModbusTcp = false;
    $request->id = 'e9526f8d-986e-4881-aad4-f0e1012563f9';
    $request->inputConfiguration = [
        new InputConfigurationContainer(),
        new InputConfigurationContainer(),
    ];
    $request->outputConfiguration = [
        new OutputConfigurationContainer(),
        new OutputConfigurationContainer(),
        new OutputConfigurationContainer(),
        new OutputConfigurationContainer(),
    ];
    $request->showReactiveEnergy = false;
    $request->switchConfiguration = [
        new SwitchConfigurationContainer(),
    ];
    $request->uploadInterval = SmartMeDeviceConfigurationContainerUploadIntervalEnum::UPLOAD_INTERVAL15MIN;

    $response = $sdk->smartMeDeviceConfiguration->smartMeDeviceConfigurationPostJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## smartMeDeviceConfigurationPostRaw

Sets the configuration of a smart-me device. The device needs to be online.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'officiis'

    $response = $sdk->smartMeDeviceConfiguration->smartMeDeviceConfigurationPostRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
