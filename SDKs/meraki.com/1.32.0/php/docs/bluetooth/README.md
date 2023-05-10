# bluetooth

### Available Operations

* [getDeviceWirelessBluetoothSettings](#getdevicewirelessbluetoothsettings) - Return the bluetooth settings for a wireless device
* [getNetworkWirelessBluetoothSettings](#getnetworkwirelessbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [updateDeviceWirelessBluetoothSettings](#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [updateNetworkWirelessBluetoothSettings](#updatenetworkwirelessbluetoothsettings) - Update the Bluetooth settings for a network

## getDeviceWirelessBluetoothSettings

Return the bluetooth settings for a wireless device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceWirelessBluetoothSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceWirelessBluetoothSettingsRequest();
    $request->serial = 'ipsa';

    $response = $sdk->bluetooth->getDeviceWirelessBluetoothSettings($request);

    if ($response->getDeviceWirelessBluetoothSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessBluetoothSettings

Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessBluetoothSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessBluetoothSettingsRequest();
    $request->networkId = 'quas';

    $response = $sdk->bluetooth->getNetworkWirelessBluetoothSettings($request);

    if ($response->getNetworkWirelessBluetoothSettings200ApplicationJSONObject !== null) {
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
    $request->requestBody->major = 911198;
    $request->requestBody->minor = 773456;
    $request->requestBody->uuid = 'e7e253b6-6845-41c6-86e2-05e16deab3fe';
    $request->serial = 'optio';

    $response = $sdk->bluetooth->updateDeviceWirelessBluetoothSettings($request);

    if ($response->updateDeviceWirelessBluetoothSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessBluetoothSettings

Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBluetoothSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBluetoothSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessBluetoothSettingsRequest();
    $request->requestBody = new UpdateNetworkWirelessBluetoothSettingsRequestBody();
    $request->requestBody->advertisingEnabled = false;
    $request->requestBody->major = 579681;
    $request->requestBody->majorMinorAssignmentMode = UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum::NON_UNIQUE;
    $request->requestBody->minor = 455898;
    $request->requestBody->scanningEnabled = false;
    $request->requestBody->uuid = '8a645842-73a8-4418-9162-309fb0929921';
    $request->networkId = 'fuga';

    $response = $sdk->bluetooth->updateNetworkWirelessBluetoothSettings($request);

    if ($response->updateNetworkWirelessBluetoothSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
