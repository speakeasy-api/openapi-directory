# settings

### Available Operations

* [getDeviceApplianceUplinksSettings](#getdeviceapplianceuplinkssettings) - Return the uplink settings for an MX appliance
* [getDeviceCameraVideoSettings](#getdevicecameravideosettings) - Returns video settings for the given camera
* [getDeviceWirelessBluetoothSettings](#getdevicewirelessbluetoothsettings) - Return the bluetooth settings for a wireless device
* [getDeviceWirelessRadioSettings](#getdevicewirelessradiosettings) - Return the radio settings of a device
* [getNetworkAlertsSettings](#getnetworkalertssettings) - Return the alert configuration for this network
* [getNetworkApplianceFirewallSettings](#getnetworkappliancefirewallsettings) - Return the firewall settings for this network
* [getNetworkApplianceSettings](#getnetworkappliancesettings) - Return the appliance settings for a network
* [getNetworkApplianceVlansSettings](#getnetworkappliancevlanssettings) - Returns the enabled status of VLANs for the network
* [getNetworkSettings](#getnetworksettings) - Return the settings for a network
* [getNetworkSwitchSettings](#getnetworkswitchsettings) - Returns the switch network settings
* [getNetworkWirelessBluetoothSettings](#getnetworkwirelessbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [getNetworkWirelessSettings](#getnetworkwirelesssettings) - Return the wireless settings for a network
* [getNetworkWirelessSsidSplashSettings](#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [getOrganizationAdaptivePolicySettings](#getorganizationadaptivepolicysettings) - Returns global adaptive policy settings in an organization
* [updateDeviceApplianceUplinksSettings](#updatedeviceapplianceuplinkssettings) - Update the uplink settings for an MX appliance
* [updateDeviceCameraVideoSettings](#updatedevicecameravideosettings) - Update video settings for the given camera
* [updateDeviceWirelessBluetoothSettings](#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [updateDeviceWirelessRadioSettings](#updatedevicewirelessradiosettings) - Update the radio settings of a device
* [updateNetworkAlertsSettings](#updatenetworkalertssettings) - Update the alert configuration for this network
* [updateNetworkApplianceFirewallSettings](#updatenetworkappliancefirewallsettings) - Update the firewall settings for this network
* [updateNetworkApplianceSettings](#updatenetworkappliancesettings) - Update the appliance settings for a network
* [updateNetworkApplianceVlansSettings](#updatenetworkappliancevlanssettings) - Enable/Disable VLANs for the given network
* [updateNetworkSettings](#updatenetworksettings) - Update the settings for a network
* [updateNetworkSwitchSettings](#updatenetworkswitchsettings) - Update switch network settings
* [updateNetworkWirelessBluetoothSettings](#updatenetworkwirelessbluetoothsettings) - Update the Bluetooth settings for a network
* [updateNetworkWirelessSettings](#updatenetworkwirelesssettings) - Update the wireless settings for a network
* [updateNetworkWirelessSsidSplashSettings](#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID
* [updateOrganizationAdaptivePolicySettings](#updateorganizationadaptivepolicysettings) - Update global adaptive policy settings

## getDeviceApplianceUplinksSettings

Return the uplink settings for an MX appliance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceApplianceUplinksSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceApplianceUplinksSettingsRequest();
    $request->serial = 'porro';

    $response = $sdk->settings->getDeviceApplianceUplinksSettings($request);

    if ($response->getDeviceApplianceUplinksSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraVideoSettings

Returns video settings for the given camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraVideoSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraVideoSettingsRequest();
    $request->serial = 'quas';

    $response = $sdk->settings->getDeviceCameraVideoSettings($request);

    if ($response->getDeviceCameraVideoSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->serial = 'consequatur';

    $response = $sdk->settings->getDeviceWirelessBluetoothSettings($request);

    if ($response->getDeviceWirelessBluetoothSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceWirelessRadioSettings

Return the radio settings of a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceWirelessRadioSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceWirelessRadioSettingsRequest();
    $request->serial = 'facilis';

    $response = $sdk->settings->getDeviceWirelessRadioSettings($request);

    if ($response->getDeviceWirelessRadioSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkAlertsSettings

Return the alert configuration for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAlertsSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAlertsSettingsRequest();
    $request->networkId = 'ut';

    $response = $sdk->settings->getNetworkAlertsSettings($request);

    if ($response->getNetworkAlertsSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceFirewallSettings

Return the firewall settings for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallSettingsRequest();
    $request->networkId = 'nihil';

    $response = $sdk->settings->getNetworkApplianceFirewallSettings($request);

    if ($response->getNetworkApplianceFirewallSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceSettings

Return the appliance settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceSettingsRequest();
    $request->networkId = 'sint';

    $response = $sdk->settings->getNetworkApplianceSettings($request);

    if ($response->getNetworkApplianceSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceVlansSettings

Returns the enabled status of VLANs for the network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceVlansSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceVlansSettingsRequest();
    $request->networkId = 'saepe';

    $response = $sdk->settings->getNetworkApplianceVlansSettings($request);

    if ($response->getNetworkApplianceVlansSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSettings

Return the settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSettingsRequest();
    $request->networkId = 'atque';

    $response = $sdk->settings->getNetworkSettings($request);

    if ($response->getNetworkSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchSettings

Returns the switch network settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchSettingsRequest();
    $request->networkId = 'excepturi';

    $response = $sdk->settings->getNetworkSwitchSettings($request);

    if ($response->getNetworkSwitchSettings200ApplicationJSONObject !== null) {
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
    $request->networkId = 'architecto';

    $response = $sdk->settings->getNetworkWirelessBluetoothSettings($request);

    if ($response->getNetworkWirelessBluetoothSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSettings

Return the wireless settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSettingsRequest();
    $request->networkId = 'molestias';

    $response = $sdk->settings->getNetworkWirelessSettings($request);

    if ($response->getNetworkWirelessSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidSplashSettings

Display the splash page settings for the given SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidSplashSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidSplashSettingsRequest();
    $request->networkId = 'dolores';
    $request->number = 'dolorem';

    $response = $sdk->settings->getNetworkWirelessSsidSplashSettings($request);

    if ($response->getNetworkWirelessSsidSplashSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdaptivePolicySettings

Returns global adaptive policy settings in an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdaptivePolicySettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdaptivePolicySettingsRequest();
    $request->organizationId = 'eligendi';

    $response = $sdk->settings->getOrganizationAdaptivePolicySettings($request);

    if ($response->getOrganizationAdaptivePolicySettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceApplianceUplinksSettings

Update the uplink settings for an MX appliance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfaces;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Pppoe;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1PppoeAuthentication;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Svis;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4AssignmentModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4Nameservers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6AssignmentModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6Nameservers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1VlanTagging;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Pppoe;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2PppoeAuthentication;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Svis;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4AssignmentModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4Nameservers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6AssignmentModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6Nameservers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2VlanTagging;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceApplianceUplinksSettingsRequest();
    $request->requestBody = new UpdateDeviceApplianceUplinksSettingsRequestBody();
    $request->requestBody->interfaces = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfaces();
    $request->requestBody->interfaces->wan1 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1();
    $request->requestBody->interfaces->wan1->enabled = false;
    $request->requestBody->interfaces->wan1->pppoe = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Pppoe();
    $request->requestBody->interfaces->wan1->pppoe->authentication = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1PppoeAuthentication();
    $request->requestBody->interfaces->wan1->pppoe->authentication->enabled = false;
    $request->requestBody->interfaces->wan1->pppoe->authentication->password = 'veritatis';
    $request->requestBody->interfaces->wan1->pppoe->authentication->username = 'Kaelyn_Runolfsson';
    $request->requestBody->interfaces->wan1->pppoe->enabled = false;
    $request->requestBody->interfaces->wan1->svis = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Svis();
    $request->requestBody->interfaces->wan1->svis->ipv4 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4();
    $request->requestBody->interfaces->wan1->svis->ipv4->address = '457 Gretchen Meadow';
    $request->requestBody->interfaces->wan1->svis->ipv4->assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4AssignmentModeEnum::STATIC;
    $request->requestBody->interfaces->wan1->svis->ipv4->gateway = 'explicabo';
    $request->requestBody->interfaces->wan1->svis->ipv4->nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4Nameservers();
    $request->requestBody->interfaces->wan1->svis->ipv4->nameservers->addresses = [
        'tempora',
    ];
    $request->requestBody->interfaces->wan1->svis->ipv6 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6();
    $request->requestBody->interfaces->wan1->svis->ipv6->address = '610 Abagail Knoll';
    $request->requestBody->interfaces->wan1->svis->ipv6->assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6AssignmentModeEnum::STATIC;
    $request->requestBody->interfaces->wan1->svis->ipv6->gateway = 'eius';
    $request->requestBody->interfaces->wan1->svis->ipv6->nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6Nameservers();
    $request->requestBody->interfaces->wan1->svis->ipv6->nameservers->addresses = [
        'similique',
        'saepe',
        'aut',
        'ipsum',
    ];
    $request->requestBody->interfaces->wan1->vlanTagging = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1VlanTagging();
    $request->requestBody->interfaces->wan1->vlanTagging->enabled = false;
    $request->requestBody->interfaces->wan1->vlanTagging->vlanId = 529171;
    $request->requestBody->interfaces->wan2 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2();
    $request->requestBody->interfaces->wan2->enabled = false;
    $request->requestBody->interfaces->wan2->pppoe = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Pppoe();
    $request->requestBody->interfaces->wan2->pppoe->authentication = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2PppoeAuthentication();
    $request->requestBody->interfaces->wan2->pppoe->authentication->enabled = false;
    $request->requestBody->interfaces->wan2->pppoe->authentication->password = 'eligendi';
    $request->requestBody->interfaces->wan2->pppoe->authentication->username = 'Rasheed.Klocko73';
    $request->requestBody->interfaces->wan2->pppoe->enabled = false;
    $request->requestBody->interfaces->wan2->svis = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Svis();
    $request->requestBody->interfaces->wan2->svis->ipv4 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4();
    $request->requestBody->interfaces->wan2->svis->ipv4->address = '186 Parisian Wells';
    $request->requestBody->interfaces->wan2->svis->ipv4->assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4AssignmentModeEnum::DYNAMIC;
    $request->requestBody->interfaces->wan2->svis->ipv4->gateway = 'asperiores';
    $request->requestBody->interfaces->wan2->svis->ipv4->nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4Nameservers();
    $request->requestBody->interfaces->wan2->svis->ipv4->nameservers->addresses = [
        'eos',
        'impedit',
        'minus',
        'facilis',
    ];
    $request->requestBody->interfaces->wan2->svis->ipv6 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6();
    $request->requestBody->interfaces->wan2->svis->ipv6->address = '2799 Roderick Walks';
    $request->requestBody->interfaces->wan2->svis->ipv6->assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6AssignmentModeEnum::DYNAMIC;
    $request->requestBody->interfaces->wan2->svis->ipv6->gateway = 'voluptatum';
    $request->requestBody->interfaces->wan2->svis->ipv6->nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6Nameservers();
    $request->requestBody->interfaces->wan2->svis->ipv6->nameservers->addresses = [
        'mollitia',
        'vero',
        'repellendus',
        'facilis',
    ];
    $request->requestBody->interfaces->wan2->vlanTagging = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2VlanTagging();
    $request->requestBody->interfaces->wan2->vlanTagging->enabled = false;
    $request->requestBody->interfaces->wan2->vlanTagging->vlanId = 162548;
    $request->serial = 'earum';

    $response = $sdk->settings->updateDeviceApplianceUplinksSettings($request);

    if ($response->updateDeviceApplianceUplinksSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCameraVideoSettings

Update video settings for the given camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraVideoSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraVideoSettingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCameraVideoSettingsRequest();
    $request->requestBody = new UpdateDeviceCameraVideoSettingsRequestBody();
    $request->requestBody->externalRtspEnabled = false;
    $request->serial = 'necessitatibus';

    $response = $sdk->settings->updateDeviceCameraVideoSettings($request);

    if ($response->updateDeviceCameraVideoSettings200ApplicationJSONObject !== null) {
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
    $request->requestBody->major = 462267;
    $request->requestBody->minor = 9476;
    $request->requestBody->uuid = 'be069fb3-6add-4704-880e-0a3fc73a5a03';
    $request->serial = 'aliquam';

    $response = $sdk->settings->updateDeviceWirelessBluetoothSettings($request);

    if ($response->updateDeviceWirelessBluetoothSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceWirelessRadioSettings

Update the radio settings of a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessRadioSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessRadioSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelWidthEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettingsChannelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceWirelessRadioSettingsRequest();
    $request->requestBody = new UpdateDeviceWirelessRadioSettingsRequestBody();
    $request->requestBody->fiveGhzSettings = new UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings();
    $request->requestBody->fiveGhzSettings->channel = UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelEnum::ONE_HUNDRED_AND_FORTY_NINE;
    $request->requestBody->fiveGhzSettings->channelWidth = UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelWidthEnum::ZERO;
    $request->requestBody->fiveGhzSettings->targetPower = 67991;
    $request->requestBody->rfProfileId = 'ut';
    $request->requestBody->twoFourGhzSettings = new UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings();
    $request->requestBody->twoFourGhzSettings->channel = UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettingsChannelEnum::NINE;
    $request->requestBody->twoFourGhzSettings->targetPower = 575275;
    $request->serial = 'eos';

    $response = $sdk->settings->updateDeviceWirelessRadioSettings($request);

    if ($response->updateDeviceWirelessRadioSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkAlertsSettings

Update the alert configuration for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertsSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertsSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertsSettingsRequestBodyAlerts;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkAlertsSettingsRequest();
    $request->requestBody = new UpdateNetworkAlertsSettingsRequestBody();
    $request->requestBody->alerts = [
        new UpdateNetworkAlertsSettingsRequestBodyAlerts(),
        new UpdateNetworkAlertsSettingsRequestBodyAlerts(),
    ];
    $request->requestBody->defaultDestinations = new UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations();
    $request->requestBody->defaultDestinations->allAdmins = false;
    $request->requestBody->defaultDestinations->emails = [
        'error',
    ];
    $request->requestBody->defaultDestinations->httpServerIds = [
        'mollitia',
        'suscipit',
        'occaecati',
        'totam',
    ];
    $request->requestBody->defaultDestinations->snmp = false;
    $request->networkId = 'in';

    $response = $sdk->settings->updateNetworkAlertsSettings($request);

    if ($response->updateNetworkAlertsSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallSettings

Update the firewall settings for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtection;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuard;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuardModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallSettingsRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallSettingsRequestBody();
    $request->requestBody->spoofingProtection = new UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtection();
    $request->requestBody->spoofingProtection->ipSourceGuard = new UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuard();
    $request->requestBody->spoofingProtection->ipSourceGuard->mode = UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuardModeEnum::LOG;
    $request->networkId = 'eius';

    $response = $sdk->settings->updateNetworkApplianceFirewallSettings($request);

    if ($response->updateNetworkApplianceFirewallSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceSettings

Update the appliance settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSettingsRequestBodyClientTrackingMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSettingsRequestBodyDeploymentModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSettingsRequestBodyDynamicDns;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceSettingsRequest();
    $request->requestBody = new UpdateNetworkApplianceSettingsRequestBody();
    $request->requestBody->clientTrackingMethod = UpdateNetworkApplianceSettingsRequestBodyClientTrackingMethodEnum::MAC_ADDRESS;
    $request->requestBody->deploymentMode = UpdateNetworkApplianceSettingsRequestBodyDeploymentModeEnum::PASSTHROUGH;
    $request->requestBody->dynamicDns = new UpdateNetworkApplianceSettingsRequestBodyDynamicDns();
    $request->requestBody->dynamicDns->enabled = false;
    $request->requestBody->dynamicDns->prefix = 'libero';
    $request->networkId = 'esse';

    $response = $sdk->settings->updateNetworkApplianceSettings($request);

    if ($response->updateNetworkApplianceSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceVlansSettings

Enable/Disable VLANs for the given network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlansSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlansSettingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceVlansSettingsRequest();
    $request->requestBody = new UpdateNetworkApplianceVlansSettingsRequestBody();
    $request->requestBody->vlansEnabled = false;
    $request->networkId = 'sit';

    $response = $sdk->settings->updateNetworkApplianceVlansSettings($request);

    if ($response->updateNetworkApplianceVlansSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSettings

Update the settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSettingsRequestBodyLocalStatusPage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSettingsRequestBodyLocalStatusPageAuthentication;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSettingsRequestBodySecurePort;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSettingsRequest();
    $request->requestBody = new UpdateNetworkSettingsRequestBody();
    $request->requestBody->localStatusPage = new UpdateNetworkSettingsRequestBodyLocalStatusPage();
    $request->requestBody->localStatusPage->authentication = new UpdateNetworkSettingsRequestBodyLocalStatusPageAuthentication();
    $request->requestBody->localStatusPage->authentication->enabled = false;
    $request->requestBody->localStatusPage->authentication->password = 'iste';
    $request->requestBody->localStatusPageEnabled = false;
    $request->requestBody->remoteStatusPageEnabled = false;
    $request->requestBody->securePort = new UpdateNetworkSettingsRequestBodySecurePort();
    $request->requestBody->securePort->enabled = false;
    $request->networkId = 'dolorum';

    $response = $sdk->settings->updateNetworkSettings($request);

    if ($response->updateNetworkSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchSettings

Update switch network settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsRequestBodyPowerExceptions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchSettingsRequest();
    $request->requestBody = new UpdateNetworkSwitchSettingsRequestBody();
    $request->requestBody->powerExceptions = [
        new UpdateNetworkSwitchSettingsRequestBodyPowerExceptions(),
    ];
    $request->requestBody->useCombinedPower = false;
    $request->requestBody->vlan = 324393;
    $request->networkId = 'ipsum';

    $response = $sdk->settings->updateNetworkSwitchSettings($request);

    if ($response->updateNetworkSwitchSettings200ApplicationJSONObject !== null) {
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
    $request->requestBody->major = 879364;
    $request->requestBody->majorMinorAssignmentMode = UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum::NON_UNIQUE;
    $request->requestBody->minor = 143408;
    $request->requestBody->scanningEnabled = false;
    $request->requestBody->uuid = '30106853-9ce0-4932-910a-cd15d8cc306b';
    $request->networkId = 'esse';

    $response = $sdk->settings->updateNetworkWirelessBluetoothSettings($request);

    if ($response->updateNetworkWirelessBluetoothSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSettings

Update the wireless settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSettingsRequest();
    $request->requestBody = new UpdateNetworkWirelessSettingsRequestBody();
    $request->requestBody->ipv6BridgeEnabled = false;
    $request->requestBody->ledLightsOn = false;
    $request->requestBody->locationAnalyticsEnabled = false;
    $request->requestBody->meshingEnabled = false;
    $request->requestBody->upgradeStrategy = UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum::MINIMIZE_UPGRADE_TIME;
    $request->networkId = 'nisi';

    $response = $sdk->settings->updateNetworkWirelessSettings($request);

    if ($response->updateNetworkWirelessSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidSplashSettings

Modify the splash page settings for the given SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidSplashSettingsRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidSplashSettingsRequestBody();
    $request->requestBody->allowSimultaneousLogins = false;
    $request->requestBody->billing = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling();
    $request->requestBody->billing->freeAccess = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess();
    $request->requestBody->billing->freeAccess->durationInMinutes = 726413;
    $request->requestBody->billing->freeAccess->enabled = false;
    $request->requestBody->billing->prepaidAccessFastLoginEnabled = false;
    $request->requestBody->billing->replyToEmailAddress = 'dolorem';
    $request->requestBody->blockAllTrafficBeforeSignOn = false;
    $request->requestBody->controllerDisconnectionBehavior = UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum::RESTRICTED;
    $request->requestBody->guestSponsorship = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship();
    $request->requestBody->guestSponsorship->durationInMinutes = 226158;
    $request->requestBody->guestSponsorship->guestCanRequestTimeframe = false;
    $request->requestBody->redirectUrl = 'ducimus';
    $request->requestBody->sentryEnrollment = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment();
    $request->requestBody->sentryEnrollment->enforcedSystems = [
        'fugiat',
        'sed',
        'aut',
    ];
    $request->requestBody->sentryEnrollment->strength = UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum::CLICK_THROUGH;
    $request->requestBody->sentryEnrollment->systemsManagerNetwork = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork();
    $request->requestBody->sentryEnrollment->systemsManagerNetwork->id = 'a1f340bb-36f6-477a-8851-9c3374902848';
    $request->requestBody->splashImage = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage();
    $request->requestBody->splashImage->extension = 'quos';
    $request->requestBody->splashImage->image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage();
    $request->requestBody->splashImage->image->contents = 'qui';
    $request->requestBody->splashImage->image->format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnum::JPG;
    $request->requestBody->splashImage->md5 = 'nam';
    $request->requestBody->splashLogo = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo();
    $request->requestBody->splashLogo->extension = 'distinctio';
    $request->requestBody->splashLogo->image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage();
    $request->requestBody->splashLogo->image->contents = 'aperiam';
    $request->requestBody->splashLogo->image->format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnum::GIF;
    $request->requestBody->splashLogo->md5 = 'porro';
    $request->requestBody->splashPrepaidFront = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront();
    $request->requestBody->splashPrepaidFront->extension = 'nihil';
    $request->requestBody->splashPrepaidFront->image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage();
    $request->requestBody->splashPrepaidFront->image->contents = 'asperiores';
    $request->requestBody->splashPrepaidFront->image->format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnum::PNG;
    $request->requestBody->splashPrepaidFront->md5 = 'consequuntur';
    $request->requestBody->splashTimeout = 142769;
    $request->requestBody->splashUrl = 'enim';
    $request->requestBody->useRedirectUrl = false;
    $request->requestBody->useSplashUrl = false;
    $request->requestBody->welcomeMessage = 'debitis';
    $request->networkId = 'dolore';
    $request->number = 'in';

    $response = $sdk->settings->updateNetworkWirelessSsidSplashSettings($request);

    if ($response->updateNetworkWirelessSsidSplashSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationAdaptivePolicySettings

Update global adaptive policy settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicySettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicySettingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationAdaptivePolicySettingsRequest();
    $request->requestBody = new UpdateOrganizationAdaptivePolicySettingsRequestBody();
    $request->requestBody->enabledNetworks = [
        'iusto',
        'architecto',
        'culpa',
    ];
    $request->organizationId = 'blanditiis';

    $response = $sdk->settings->updateOrganizationAdaptivePolicySettings($request);

    if ($response->updateOrganizationAdaptivePolicySettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
