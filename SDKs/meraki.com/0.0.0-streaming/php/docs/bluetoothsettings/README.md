# bluetoothSettings

### Available Operations

* [getNetworkBluetoothSettings](#getnetworkbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [updateDeviceWirelessBluetoothSettings](#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [updateNetworkBluetoothSettings](#updatenetworkbluetoothsettings) - Update the Bluetooth settings for a network

## getNetworkBluetoothSettings

Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkBluetoothSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkBluetoothSettingsRequest();
    $request->networkId = 'iure';

    $response = $sdk->bluetoothSettings->getNetworkBluetoothSettings($request);

    if ($response->getNetworkBluetoothSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceWirelessBluetoothSettings

Update the bluetooth settings for a wireless device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessBluetoothSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessBluetoothSettingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceWirelessBluetoothSettingsRequest();
    $request->requestBody = new UpdateDeviceWirelessBluetoothSettingsRequestBody();
    $request->requestBody->major = 902349;
    $request->requestBody->minor = 697631;
    $request->requestBody->uuid = '10faaa23-52c5-4955-907a-ff1a3a2fa946';
    $request->serial = 'quam';

    $response = $sdk->bluetoothSettings->updateDeviceWirelessBluetoothSettings($request);

    if ($response->updateDeviceWirelessBluetoothSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkBluetoothSettings

Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkBluetoothSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkBluetoothSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkBluetoothSettingsRequest();
    $request->requestBody = new UpdateNetworkBluetoothSettingsRequestBody();
    $request->requestBody->advertisingEnabled = false;
    $request->requestBody->major = 474697;
    $request->requestBody->majorMinorAssignmentMode = UpdateNetworkBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum::NON_UNIQUE;
    $request->requestBody->minor = 623510;
    $request->requestBody->scanningEnabled = false;
    $request->requestBody->uuid = '251aa52c-3f5a-4d01-9da1-ffe78f097b00';
    $request->networkId = 'reprehenderit';

    $response = $sdk->bluetoothSettings->updateNetworkBluetoothSettings($request);

    if ($response->updateNetworkBluetoothSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
