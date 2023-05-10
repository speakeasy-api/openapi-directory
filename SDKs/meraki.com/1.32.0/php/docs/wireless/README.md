# wireless

### Available Operations

* [createNetworkWirelessRfProfile](#createnetworkwirelessrfprofile) - Creates new RF profile for this network
* [createNetworkWirelessSsidIdentityPsk](#createnetworkwirelessssididentitypsk) - Create an Identity PSK
* [deleteNetworkWirelessRfProfile](#deletenetworkwirelessrfprofile) - Delete a RF Profile
* [deleteNetworkWirelessSsidIdentityPsk](#deletenetworkwirelessssididentitypsk) - Delete an Identity PSK
* [getDeviceWirelessBluetoothSettings](#getdevicewirelessbluetoothsettings) - Return the bluetooth settings for a wireless device
* [getDeviceWirelessConnectionStats](#getdevicewirelessconnectionstats) - Aggregated connectivity info for a given AP on this network
* [getDeviceWirelessLatencyStats](#getdevicewirelesslatencystats) - Aggregated latency info for a given AP on this network
* [getDeviceWirelessRadioSettings](#getdevicewirelessradiosettings) - Return the radio settings of a device
* [getDeviceWirelessStatus](#getdevicewirelessstatus) - Return the SSID statuses of an access point
* [getNetworkWirelessAirMarshal](#getnetworkwirelessairmarshal) - List Air Marshal scan results from a network
* [getNetworkWirelessAlternateManagementInterface](#getnetworkwirelessalternatemanagementinterface) - Return alternate management interface and devices with IP assigned
* [getNetworkWirelessBilling](#getnetworkwirelessbilling) - Return the billing settings of this network
* [getNetworkWirelessBluetoothSettings](#getnetworkwirelessbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [getNetworkWirelessChannelUtilizationHistory](#getnetworkwirelesschannelutilizationhistory) - Return AP channel utilization over time for a device or network client
* [getNetworkWirelessClientConnectionStats](#getnetworkwirelessclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [getNetworkWirelessClientConnectivityEvents](#getnetworkwirelessclientconnectivityevents) - List the wireless connectivity events for a client within a network in the timespan.
* [getNetworkWirelessClientCountHistory](#getnetworkwirelessclientcounthistory) - Return wireless client counts over time for a network, device, or network client
* [getNetworkWirelessClientLatencyHistory](#getnetworkwirelessclientlatencyhistory) - Return the latency history for a client
* [getNetworkWirelessClientLatencyStats](#getnetworkwirelessclientlatencystats) - Aggregated latency info for a given client on this network
* [getNetworkWirelessClientsConnectionStats](#getnetworkwirelessclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [getNetworkWirelessClientsLatencyStats](#getnetworkwirelessclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [getNetworkWirelessConnectionStats](#getnetworkwirelessconnectionstats) - Aggregated connectivity info for this network
* [getNetworkWirelessDataRateHistory](#getnetworkwirelessdataratehistory) - Return PHY data rates over time for a network, device, or network client
* [getNetworkWirelessDevicesConnectionStats](#getnetworkwirelessdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node
* [getNetworkWirelessDevicesLatencyStats](#getnetworkwirelessdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [getNetworkWirelessFailedConnections](#getnetworkwirelessfailedconnections) - List of all failed client connection events on this network in a given time range
* [getNetworkWirelessLatencyHistory](#getnetworkwirelesslatencyhistory) - Return average wireless latency over time for a network, device, or network client
* [getNetworkWirelessLatencyStats](#getnetworkwirelesslatencystats) - Aggregated latency info for this network
* [getNetworkWirelessMeshStatuses](#getnetworkwirelessmeshstatuses) - List wireless mesh statuses for repeaters
* [getNetworkWirelessRfProfile](#getnetworkwirelessrfprofile) - Return a RF profile
* [getNetworkWirelessRfProfiles](#getnetworkwirelessrfprofiles) - List the non-basic RF profiles for this network
* [getNetworkWirelessSettings](#getnetworkwirelesssettings) - Return the wireless settings for a network
* [getNetworkWirelessSignalQualityHistory](#getnetworkwirelesssignalqualityhistory) - Return signal quality (SNR/RSSI) over time for a device or network client
* [getNetworkWirelessSsid](#getnetworkwirelessssid) - Return a single MR SSID
* [getNetworkWirelessSsidBonjourForwarding](#getnetworkwirelessssidbonjourforwarding) - List the Bonjour forwarding setting and rules for the SSID
* [getNetworkWirelessSsidDeviceTypeGroupPolicies](#getnetworkwirelessssiddevicetypegrouppolicies) - List the device type group policies for the SSID
* [getNetworkWirelessSsidEapOverride](#getnetworkwirelessssideapoverride) - Return the EAP overridden parameters for an SSID
* [getNetworkWirelessSsidFirewallL3FirewallRules](#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [getNetworkWirelessSsidFirewallL7FirewallRules](#getnetworkwirelessssidfirewalll7firewallrules) - Return the L7 firewall rules for an SSID on an MR network
* [getNetworkWirelessSsidHotspot20](#getnetworkwirelessssidhotspot20) - Return the Hotspot 2.0 settings for an SSID
* [getNetworkWirelessSsidIdentityPsk](#getnetworkwirelessssididentitypsk) - Return an Identity PSK
* [getNetworkWirelessSsidIdentityPsks](#getnetworkwirelessssididentitypsks) - List all Identity PSKs in a wireless network
* [getNetworkWirelessSsidSchedules](#getnetworkwirelessssidschedules) - List the outage schedule for the SSID
* [getNetworkWirelessSsidSplashSettings](#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [getNetworkWirelessSsidTrafficShapingRules](#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [getNetworkWirelessSsidVpn](#getnetworkwirelessssidvpn) - List the VPN settings for the SSID.
* [getNetworkWirelessSsids](#getnetworkwirelessssids) - List the MR SSIDs in a network
* [getNetworkWirelessUsageHistory](#getnetworkwirelessusagehistory) - Return AP usage over time for a device or network client
* [getOrganizationWirelessDevicesEthernetStatuses](#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices
* [updateDeviceWirelessBluetoothSettings](#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [updateDeviceWirelessRadioSettings](#updatedevicewirelessradiosettings) - Update the radio settings of a device
* [updateNetworkWirelessAlternateManagementInterface](#updatenetworkwirelessalternatemanagementinterface) - Update alternate management interface and device static IP
* [updateNetworkWirelessBilling](#updatenetworkwirelessbilling) - Update the billing settings
* [updateNetworkWirelessBluetoothSettings](#updatenetworkwirelessbluetoothsettings) - Update the Bluetooth settings for a network
* [updateNetworkWirelessRfProfile](#updatenetworkwirelessrfprofile) - Updates specified RF profile for this network
* [updateNetworkWirelessSettings](#updatenetworkwirelesssettings) - Update the wireless settings for a network
* [updateNetworkWirelessSsid](#updatenetworkwirelessssid) - Update the attributes of an MR SSID
* [updateNetworkWirelessSsidBonjourForwarding](#updatenetworkwirelessssidbonjourforwarding) - Update the bonjour forwarding setting and rules for the SSID
* [updateNetworkWirelessSsidDeviceTypeGroupPolicies](#updatenetworkwirelessssiddevicetypegrouppolicies) - Update the device type group policies for the SSID
* [updateNetworkWirelessSsidEapOverride](#updatenetworkwirelessssideapoverride) - Update the EAP overridden parameters for an SSID.
* [updateNetworkWirelessSsidFirewallL3FirewallRules](#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network
* [updateNetworkWirelessSsidFirewallL7FirewallRules](#updatenetworkwirelessssidfirewalll7firewallrules) - Update the L7 firewall rules of an SSID on an MR network
* [updateNetworkWirelessSsidHotspot20](#updatenetworkwirelessssidhotspot20) - Update the Hotspot 2.0 settings of an SSID
* [updateNetworkWirelessSsidIdentityPsk](#updatenetworkwirelessssididentitypsk) - Update an Identity PSK
* [updateNetworkWirelessSsidSchedules](#updatenetworkwirelessssidschedules) - Update the outage schedule for the SSID
* [updateNetworkWirelessSsidSplashSettings](#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID
* [updateNetworkWirelessSsidTrafficShapingRules](#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network
* [updateNetworkWirelessSsidVpn](#updatenetworkwirelessssidvpn) - Update the VPN settings for the SSID

## createNetworkWirelessRfProfile

Creates new RF profile for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyApBandSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyTransmission;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkWirelessRfProfileRequest();
    $request->requestBody = new CreateNetworkWirelessRfProfileRequestBody();
    $request->requestBody->apBandSettings = new CreateNetworkWirelessRfProfileRequestBodyApBandSettings();
    $request->requestBody->apBandSettings->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum::DUAL;
    $request->requestBody->apBandSettings->bandSteeringEnabled = false;
    $request->requestBody->bandSelectionType = CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum::AP;
    $request->requestBody->clientBalancingEnabled = false;
    $request->requestBody->fiveGhzSettings = new CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings();
    $request->requestBody->fiveGhzSettings->channelWidth = 'placeat';
    $request->requestBody->fiveGhzSettings->maxPower = 724392;
    $request->requestBody->fiveGhzSettings->minBitrate = 588740;
    $request->requestBody->fiveGhzSettings->minPower = 250138;
    $request->requestBody->fiveGhzSettings->rxsop = 566064;
    $request->requestBody->fiveGhzSettings->validAutoChannels = [
        497351,
        30090,
    ];
    $request->requestBody->minBitrateType = CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum::BAND;
    $request->requestBody->name = 'Fannie Cronin';
    $request->requestBody->perSsidSettings = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings();
    $request->requestBody->perSsidSettings->zero = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0();
    $request->requestBody->perSsidSettings->zero->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->zero->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->zero->minBitrate = 2618.16;
    $request->requestBody->perSsidSettings->one = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1();
    $request->requestBody->perSsidSettings->one->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->one->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->one->minBitrate = 7445.37;
    $request->requestBody->perSsidSettings->ten = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10();
    $request->requestBody->perSsidSettings->ten->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->ten->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->ten->minBitrate = 4286.91;
    $request->requestBody->perSsidSettings->eleven = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11();
    $request->requestBody->perSsidSettings->eleven->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->eleven->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->eleven->minBitrate = 6714.49;
    $request->requestBody->perSsidSettings->twelve = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12();
    $request->requestBody->perSsidSettings->twelve->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->twelve->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->twelve->minBitrate = 9118.77;
    $request->requestBody->perSsidSettings->thirteen = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13();
    $request->requestBody->perSsidSettings->thirteen->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->thirteen->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->thirteen->minBitrate = 6181.59;
    $request->requestBody->perSsidSettings->fourteen = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14();
    $request->requestBody->perSsidSettings->fourteen->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->fourteen->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->fourteen->minBitrate = 5498.02;
    $request->requestBody->perSsidSettings->two = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2();
    $request->requestBody->perSsidSettings->two->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->two->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->two->minBitrate = 5294.95;
    $request->requestBody->perSsidSettings->three = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3();
    $request->requestBody->perSsidSettings->three->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->three->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->three->minBitrate = 6136.67;
    $request->requestBody->perSsidSettings->four = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4();
    $request->requestBody->perSsidSettings->four->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->four->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->four->minBitrate = 8917.4;
    $request->requestBody->perSsidSettings->five = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5();
    $request->requestBody->perSsidSettings->five->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->five->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->five->minBitrate = 7595.97;
    $request->requestBody->perSsidSettings->six = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6();
    $request->requestBody->perSsidSettings->six->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->six->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->six->minBitrate = 6890.87;
    $request->requestBody->perSsidSettings->seven = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7();
    $request->requestBody->perSsidSettings->seven->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->seven->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->seven->minBitrate = 2456.73;
    $request->requestBody->perSsidSettings->eight = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8();
    $request->requestBody->perSsidSettings->eight->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->eight->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->eight->minBitrate = 4335.37;
    $request->requestBody->perSsidSettings->nine = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9();
    $request->requestBody->perSsidSettings->nine->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->nine->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->nine->minBitrate = 4184.88;
    $request->requestBody->transmission = new CreateNetworkWirelessRfProfileRequestBodyTransmission();
    $request->requestBody->transmission->enabled = false;
    $request->requestBody->twoFourGhzSettings = new CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings();
    $request->requestBody->twoFourGhzSettings->axEnabled = false;
    $request->requestBody->twoFourGhzSettings->maxPower = 757990;
    $request->requestBody->twoFourGhzSettings->minBitrate = 9864.5;
    $request->requestBody->twoFourGhzSettings->minPower = 583013;
    $request->requestBody->twoFourGhzSettings->rxsop = 11675;
    $request->requestBody->twoFourGhzSettings->validAutoChannels = [
        816137,
        624241,
        539694,
    ];
    $request->networkId = 'unde';

    $response = $sdk->wireless->createNetworkWirelessRfProfile($request);

    if ($response->createNetworkWirelessRfProfile201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkWirelessSsidIdentityPsk

Create an Identity PSK

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessSsidIdentityPskRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessSsidIdentityPskRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkWirelessSsidIdentityPskRequest();
    $request->requestBody = new CreateNetworkWirelessSsidIdentityPskRequestBody();
    $request->requestBody->groupPolicyId = 'recusandae';
    $request->requestBody->name = 'Blanche Feil';
    $request->requestBody->passphrase = 'et';
    $request->networkId = 'veniam';
    $request->number = 'culpa';

    $response = $sdk->wireless->createNetworkWirelessSsidIdentityPsk($request);

    if ($response->createNetworkWirelessSsidIdentityPsk201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkWirelessRfProfile

Delete a RF Profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkWirelessRfProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkWirelessRfProfileRequest();
    $request->networkId = 'porro';
    $request->rfProfileId = 'possimus';

    $response = $sdk->wireless->deleteNetworkWirelessRfProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkWirelessSsidIdentityPsk

Delete an Identity PSK

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkWirelessSsidIdentityPskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkWirelessSsidIdentityPskRequest();
    $request->identityPskId = 'laborum';
    $request->networkId = 'voluptatem';
    $request->number = 'quaerat';

    $response = $sdk->wireless->deleteNetworkWirelessSsidIdentityPsk($request);

    if ($response->statusCode === 200) {
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
    $request->serial = 'eius';

    $response = $sdk->wireless->getDeviceWirelessBluetoothSettings($request);

    if ($response->getDeviceWirelessBluetoothSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceWirelessConnectionStats

Aggregated connectivity info for a given AP on this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceWirelessConnectionStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceWirelessConnectionStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceWirelessConnectionStatsRequest();
    $request->apTag = 'a';
    $request->band = GetDeviceWirelessConnectionStatsBandEnum::FIVE;
    $request->serial = 'deserunt';
    $request->ssid = 901570;
    $request->t0 = 'illum';
    $request->t1 = 'ex';
    $request->timespan = 9045.86;
    $request->vlan = 120538;

    $response = $sdk->wireless->getDeviceWirelessConnectionStats($request);

    if ($response->getDeviceWirelessConnectionStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceWirelessLatencyStats

Aggregated latency info for a given AP on this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceWirelessLatencyStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceWirelessLatencyStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceWirelessLatencyStatsRequest();
    $request->apTag = 'sequi';
    $request->band = GetDeviceWirelessLatencyStatsBandEnum::FIVE;
    $request->fields = 'aliquid';
    $request->serial = 'consequuntur';
    $request->ssid = 60969;
    $request->t0 = 'saepe';
    $request->t1 = 'fugit';
    $request->timespan = 8832.66;
    $request->vlan = 587466;

    $response = $sdk->wireless->getDeviceWirelessLatencyStats($request);

    if ($response->getDeviceWirelessLatencyStats200ApplicationJSONObject !== null) {
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
    $request->serial = 'illo';

    $response = $sdk->wireless->getDeviceWirelessRadioSettings($request);

    if ($response->getDeviceWirelessRadioSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceWirelessStatus

Return the SSID statuses of an access point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceWirelessStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceWirelessStatusRequest();
    $request->serial = 'totam';

    $response = $sdk->wireless->getDeviceWirelessStatus($request);

    if ($response->getDeviceWirelessStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessAirMarshal

List Air Marshal scan results from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessAirMarshalRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessAirMarshalRequest();
    $request->networkId = 'eligendi';
    $request->t0 = 'iure';
    $request->timespan = 3390.23;

    $response = $sdk->wireless->getNetworkWirelessAirMarshal($request);

    if ($response->getNetworkWirelessAirMarshal200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessAlternateManagementInterface

Return alternate management interface and devices with IP assigned

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessAlternateManagementInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessAlternateManagementInterfaceRequest();
    $request->networkId = 'distinctio';

    $response = $sdk->wireless->getNetworkWirelessAlternateManagementInterface($request);

    if ($response->getNetworkWirelessAlternateManagementInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessBilling

Return the billing settings of this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessBillingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessBillingRequest();
    $request->networkId = 'alias';

    $response = $sdk->wireless->getNetworkWirelessBilling($request);

    if ($response->getNetworkWirelessBilling200ApplicationJSONObject !== null) {
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
    $request->networkId = 'modi';

    $response = $sdk->wireless->getNetworkWirelessBluetoothSettings($request);

    if ($response->getNetworkWirelessBluetoothSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessChannelUtilizationHistory

Return AP channel utilization over time for a device or network client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessChannelUtilizationHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessChannelUtilizationHistoryBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessChannelUtilizationHistoryRequest();
    $request->apTag = 'rem';
    $request->autoResolution = false;
    $request->band = GetNetworkWirelessChannelUtilizationHistoryBandEnum::FIVE;
    $request->clientId = 'minus';
    $request->deviceSerial = 'earum';
    $request->networkId = 'amet';
    $request->resolution = 567090;
    $request->t0 = 'laudantium';
    $request->t1 = 'fuga';
    $request->timespan = 297.83;

    $response = $sdk->wireless->getNetworkWirelessChannelUtilizationHistory($request);

    if ($response->getNetworkWirelessChannelUtilizationHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessClientConnectionStats

Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientConnectionStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientConnectionStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessClientConnectionStatsRequest();
    $request->apTag = 'soluta';
    $request->band = GetNetworkWirelessClientConnectionStatsBandEnum::TWO4;
    $request->clientId = 'in';
    $request->networkId = 'eius';
    $request->ssid = 430809;
    $request->t0 = 'beatae';
    $request->t1 = 'nihil';
    $request->timespan = 8433.06;
    $request->vlan = 862020;

    $response = $sdk->wireless->getNetworkWirelessClientConnectionStats($request);

    if ($response->getNetworkWirelessClientConnectionStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessClientConnectivityEvents

List the wireless connectivity events for a client within a network in the timespan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientConnectivityEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientConnectivityEventsBandEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientConnectivityEventsSsidNumberEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientConnectivityEventsTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessClientConnectivityEventsRequest();
    $request->band = GetNetworkWirelessClientConnectivityEventsBandEnum::FIVE;
    $request->clientId = 'nemo';
    $request->deviceSerial = 'minus';
    $request->endingBefore = 'officiis';
    $request->includedSeverities = [
        GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum::BAD,
    ];
    $request->networkId = 'ut';
    $request->perPage = 252835;
    $request->ssidNumber = GetNetworkWirelessClientConnectivityEventsSsidNumberEnum::TEN;
    $request->startingAfter = 'necessitatibus';
    $request->t0 = 'eius';
    $request->t1 = 'itaque';
    $request->timespan = 7139.18;
    $request->types = [
        GetNetworkWirelessClientConnectivityEventsTypesEnum::DNS,
    ];

    $response = $sdk->wireless->getNetworkWirelessClientConnectivityEvents($request);

    if ($response->getNetworkWirelessClientConnectivityEvents200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessClientCountHistory

Return wireless client counts over time for a network, device, or network client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientCountHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientCountHistoryBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessClientCountHistoryRequest();
    $request->apTag = 'ipsum';
    $request->autoResolution = false;
    $request->band = GetNetworkWirelessClientCountHistoryBandEnum::TWO4;
    $request->clientId = 'eligendi';
    $request->deviceSerial = 'cum';
    $request->networkId = 'corporis';
    $request->resolution = 29578;
    $request->ssid = 205656;
    $request->t0 = 'quo';
    $request->t1 = 'amet';
    $request->timespan = 899.39;

    $response = $sdk->wireless->getNetworkWirelessClientCountHistory($request);

    if ($response->getNetworkWirelessClientCountHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessClientLatencyHistory

Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientLatencyHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessClientLatencyHistoryRequest();
    $request->clientId = 'aliquam';
    $request->networkId = 'aperiam';
    $request->resolution = 832988;
    $request->t0 = 'deleniti';
    $request->t1 = 'esse';
    $request->timespan = 4805.29;

    $response = $sdk->wireless->getNetworkWirelessClientLatencyHistory($request);

    if ($response->getNetworkWirelessClientLatencyHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessClientLatencyStats

Aggregated latency info for a given client on this network. Clients are identified by their MAC.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientLatencyStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientLatencyStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessClientLatencyStatsRequest();
    $request->apTag = 'explicabo';
    $request->band = GetNetworkWirelessClientLatencyStatsBandEnum::SIX;
    $request->clientId = 'ipsam';
    $request->fields = 'consectetur';
    $request->networkId = 'ad';
    $request->ssid = 928874;
    $request->t0 = 'illo';
    $request->t1 = 'possimus';
    $request->timespan = 8232.92;
    $request->vlan = 407467;

    $response = $sdk->wireless->getNetworkWirelessClientLatencyStats($request);

    if ($response->getNetworkWirelessClientLatencyStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessClientsConnectionStats

Aggregated connectivity info for this network, grouped by clients

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientsConnectionStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientsConnectionStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessClientsConnectionStatsRequest();
    $request->apTag = 'tempore';
    $request->band = GetNetworkWirelessClientsConnectionStatsBandEnum::SIX;
    $request->networkId = 'iure';
    $request->ssid = 264772;
    $request->t0 = 'rerum';
    $request->t1 = 'non';
    $request->timespan = 3387.09;
    $request->vlan = 289743;

    $response = $sdk->wireless->getNetworkWirelessClientsConnectionStats($request);

    if ($response->getNetworkWirelessClientsConnectionStats200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessClientsLatencyStats

Aggregated latency info for this network, grouped by clients

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientsLatencyStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientsLatencyStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessClientsLatencyStatsRequest();
    $request->apTag = 'earum';
    $request->band = GetNetworkWirelessClientsLatencyStatsBandEnum::FIVE;
    $request->fields = 'blanditiis';
    $request->networkId = 'sequi';
    $request->ssid = 111203;
    $request->t0 = 'accusamus';
    $request->t1 = 'molestiae';
    $request->timespan = 6062.9;
    $request->vlan = 360131;

    $response = $sdk->wireless->getNetworkWirelessClientsLatencyStats($request);

    if ($response->getNetworkWirelessClientsLatencyStats200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessConnectionStats

Aggregated connectivity info for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessConnectionStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessConnectionStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessConnectionStatsRequest();
    $request->apTag = 'tenetur';
    $request->band = GetNetworkWirelessConnectionStatsBandEnum::TWO4;
    $request->networkId = 'debitis';
    $request->ssid = 349710;
    $request->t0 = 'ducimus';
    $request->t1 = 'voluptatibus';
    $request->timespan = 3178.34;
    $request->vlan = 259649;

    $response = $sdk->wireless->getNetworkWirelessConnectionStats($request);

    if ($response->getNetworkWirelessConnectionStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessDataRateHistory

Return PHY data rates over time for a network, device, or network client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessDataRateHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessDataRateHistoryBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessDataRateHistoryRequest();
    $request->apTag = 'necessitatibus';
    $request->autoResolution = false;
    $request->band = GetNetworkWirelessDataRateHistoryBandEnum::SIX;
    $request->clientId = 'delectus';
    $request->deviceSerial = 'quia';
    $request->networkId = 'pariatur';
    $request->resolution = 169320;
    $request->ssid = 733429;
    $request->t0 = 'dolore';
    $request->t1 = 'laboriosam';
    $request->timespan = 146.14;

    $response = $sdk->wireless->getNetworkWirelessDataRateHistory($request);

    if ($response->getNetworkWirelessDataRateHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessDevicesConnectionStats

Aggregated connectivity info for this network, grouped by node

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessDevicesConnectionStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessDevicesConnectionStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessDevicesConnectionStatsRequest();
    $request->apTag = 'cupiditate';
    $request->band = GetNetworkWirelessDevicesConnectionStatsBandEnum::FIVE;
    $request->networkId = 'earum';
    $request->ssid = 969826;
    $request->t0 = 'est';
    $request->t1 = 'ut';
    $request->timespan = 2959.06;
    $request->vlan = 669828;

    $response = $sdk->wireless->getNetworkWirelessDevicesConnectionStats($request);

    if ($response->getNetworkWirelessDevicesConnectionStats200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessDevicesLatencyStats

Aggregated latency info for this network, grouped by node

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessDevicesLatencyStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessDevicesLatencyStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessDevicesLatencyStatsRequest();
    $request->apTag = 'voluptatum';
    $request->band = GetNetworkWirelessDevicesLatencyStatsBandEnum::SIX;
    $request->fields = 'reiciendis';
    $request->networkId = 'earum';
    $request->ssid = 280132;
    $request->t0 = 'sit';
    $request->t1 = 'cumque';
    $request->timespan = 8451.19;
    $request->vlan = 842230;

    $response = $sdk->wireless->getNetworkWirelessDevicesLatencyStats($request);

    if ($response->getNetworkWirelessDevicesLatencyStats200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessFailedConnections

List of all failed client connection events on this network in a given time range

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessFailedConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessFailedConnectionsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessFailedConnectionsRequest();
    $request->apTag = 'inventore';
    $request->band = GetNetworkWirelessFailedConnectionsBandEnum::FIVE;
    $request->clientId = 'enim';
    $request->networkId = 'perferendis';
    $request->serial = 'soluta';
    $request->ssid = 948043;
    $request->t0 = 'ipsam';
    $request->t1 = 'dolorum';
    $request->timespan = 565.15;
    $request->vlan = 796507;

    $response = $sdk->wireless->getNetworkWirelessFailedConnections($request);

    if ($response->getNetworkWirelessFailedConnections200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessLatencyHistory

Return average wireless latency over time for a network, device, or network client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessLatencyHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessLatencyHistoryAccessCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessLatencyHistoryBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessLatencyHistoryRequest();
    $request->accessCategory = GetNetworkWirelessLatencyHistoryAccessCategoryEnum::VIDEO_TRAFFIC;
    $request->apTag = 'impedit';
    $request->autoResolution = false;
    $request->band = GetNetworkWirelessLatencyHistoryBandEnum::FIVE;
    $request->clientId = 'facilis';
    $request->deviceSerial = 'quam';
    $request->networkId = 'blanditiis';
    $request->resolution = 413557;
    $request->ssid = 54387;
    $request->t0 = 'similique';
    $request->t1 = 'voluptatibus';
    $request->timespan = 9170.5;

    $response = $sdk->wireless->getNetworkWirelessLatencyHistory($request);

    if ($response->getNetworkWirelessLatencyHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessLatencyStats

Aggregated latency info for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessLatencyStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessLatencyStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessLatencyStatsRequest();
    $request->apTag = 'similique';
    $request->band = GetNetworkWirelessLatencyStatsBandEnum::FIVE;
    $request->fields = 'nobis';
    $request->networkId = 'laboriosam';
    $request->ssid = 248903;
    $request->t0 = 'corporis';
    $request->t1 = 'ab';
    $request->timespan = 1991.9;
    $request->vlan = 179221;

    $response = $sdk->wireless->getNetworkWirelessLatencyStats($request);

    if ($response->getNetworkWirelessLatencyStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessMeshStatuses

List wireless mesh statuses for repeaters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessMeshStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessMeshStatusesRequest();
    $request->endingBefore = 'repellendus';
    $request->networkId = 'ipsam';
    $request->perPage = 230161;
    $request->startingAfter = 'sit';

    $response = $sdk->wireless->getNetworkWirelessMeshStatuses($request);

    if ($response->getNetworkWirelessMeshStatuses200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessRfProfile

Return a RF profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessRfProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessRfProfileRequest();
    $request->networkId = 'quos';
    $request->rfProfileId = 'voluptas';

    $response = $sdk->wireless->getNetworkWirelessRfProfile($request);

    if ($response->getNetworkWirelessRfProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessRfProfiles

List the non-basic RF profiles for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessRfProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessRfProfilesRequest();
    $request->includeTemplateProfiles = false;
    $request->networkId = 'porro';

    $response = $sdk->wireless->getNetworkWirelessRfProfiles($request);

    if ($response->getNetworkWirelessRfProfiles200ApplicationJSONObjects !== null) {
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
    $request->networkId = 'illo';

    $response = $sdk->wireless->getNetworkWirelessSettings($request);

    if ($response->getNetworkWirelessSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSignalQualityHistory

Return signal quality (SNR/RSSI) over time for a device or network client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSignalQualityHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSignalQualityHistoryBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSignalQualityHistoryRequest();
    $request->apTag = 'sit';
    $request->autoResolution = false;
    $request->band = GetNetworkWirelessSignalQualityHistoryBandEnum::FIVE;
    $request->clientId = 'blanditiis';
    $request->deviceSerial = 'quaerat';
    $request->networkId = 'ex';
    $request->resolution = 679277;
    $request->ssid = 72783;
    $request->t0 = 'perspiciatis';
    $request->t1 = 'possimus';
    $request->timespan = 2667.27;

    $response = $sdk->wireless->getNetworkWirelessSignalQualityHistory($request);

    if ($response->getNetworkWirelessSignalQualityHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsid

Return a single MR SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidRequest();
    $request->networkId = 'ex';
    $request->number = 'nisi';

    $response = $sdk->wireless->getNetworkWirelessSsid($request);

    if ($response->getNetworkWirelessSsid200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidBonjourForwarding

List the Bonjour forwarding setting and rules for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidBonjourForwardingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidBonjourForwardingRequest();
    $request->networkId = 'ipsam';
    $request->number = 'facilis';

    $response = $sdk->wireless->getNetworkWirelessSsidBonjourForwarding($request);

    if ($response->getNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidDeviceTypeGroupPolicies

List the device type group policies for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest();
    $request->networkId = 'laborum';
    $request->number = 'omnis';

    $response = $sdk->wireless->getNetworkWirelessSsidDeviceTypeGroupPolicies($request);

    if ($response->getNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidEapOverride

Return the EAP overridden parameters for an SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidEapOverrideRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidEapOverrideRequest();
    $request->networkId = 'reprehenderit';
    $request->number = 'qui';

    $response = $sdk->wireless->getNetworkWirelessSsidEapOverride($request);

    if ($response->getNetworkWirelessSsidEapOverride200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidFirewallL3FirewallRules

Return the L3 firewall rules for an SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidFirewallL3FirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidFirewallL3FirewallRulesRequest();
    $request->networkId = 'ipsam';
    $request->number = 'perspiciatis';

    $response = $sdk->wireless->getNetworkWirelessSsidFirewallL3FirewallRules($request);

    if ($response->getNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidFirewallL7FirewallRules

Return the L7 firewall rules for an SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidFirewallL7FirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidFirewallL7FirewallRulesRequest();
    $request->networkId = 'molestias';
    $request->number = 'reprehenderit';

    $response = $sdk->wireless->getNetworkWirelessSsidFirewallL7FirewallRules($request);

    if ($response->getNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidHotspot20

Return the Hotspot 2.0 settings for an SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidHotspot20Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidHotspot20Request();
    $request->networkId = 'corporis';
    $request->number = 'at';

    $response = $sdk->wireless->getNetworkWirelessSsidHotspot20($request);

    if ($response->getNetworkWirelessSsidHotspot20200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidIdentityPsk

Return an Identity PSK

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidIdentityPskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidIdentityPskRequest();
    $request->identityPskId = 'eligendi';
    $request->networkId = 'consequatur';
    $request->number = 'optio';

    $response = $sdk->wireless->getNetworkWirelessSsidIdentityPsk($request);

    if ($response->getNetworkWirelessSsidIdentityPsk200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidIdentityPsks

List all Identity PSKs in a wireless network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidIdentityPsksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidIdentityPsksRequest();
    $request->networkId = 'vero';
    $request->number = 'eligendi';

    $response = $sdk->wireless->getNetworkWirelessSsidIdentityPsks($request);

    if ($response->getNetworkWirelessSsidIdentityPsks200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidSchedules

List the outage schedule for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidSchedulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidSchedulesRequest();
    $request->networkId = 'facilis';
    $request->number = 'quisquam';

    $response = $sdk->wireless->getNetworkWirelessSsidSchedules($request);

    if ($response->getNetworkWirelessSsidSchedules200ApplicationJSONObject !== null) {
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
    $request->networkId = 'in';
    $request->number = 'atque';

    $response = $sdk->wireless->getNetworkWirelessSsidSplashSettings($request);

    if ($response->getNetworkWirelessSsidSplashSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidTrafficShapingRules

Display the traffic shaping settings for a SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidTrafficShapingRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidTrafficShapingRulesRequest();
    $request->networkId = 'libero';
    $request->number = 'possimus';

    $response = $sdk->wireless->getNetworkWirelessSsidTrafficShapingRules($request);

    if ($response->getNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidVpn

List the VPN settings for the SSID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidVpnRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidVpnRequest();
    $request->networkId = 'fugit';
    $request->number = 'modi';

    $response = $sdk->wireless->getNetworkWirelessSsidVpn($request);

    if ($response->getNetworkWirelessSsidVpn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsids

List the MR SSIDs in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidsRequest();
    $request->networkId = 'rem';

    $response = $sdk->wireless->getNetworkWirelessSsids($request);

    if ($response->getNetworkWirelessSsids200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessUsageHistory

Return AP usage over time for a device or network client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessUsageHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessUsageHistoryBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessUsageHistoryRequest();
    $request->apTag = 'voluptates';
    $request->autoResolution = false;
    $request->band = GetNetworkWirelessUsageHistoryBandEnum::SIX;
    $request->clientId = 'ex';
    $request->deviceSerial = 'voluptates';
    $request->networkId = 'voluptatum';
    $request->resolution = 714748;
    $request->ssid = 166245;
    $request->t0 = 'aliquam';
    $request->t1 = 'accusantium';
    $request->timespan = 7189.14;

    $response = $sdk->wireless->getNetworkWirelessUsageHistory($request);

    if ($response->getNetworkWirelessUsageHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationWirelessDevicesEthernetStatuses

Endpoint to see power status for wireless devices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationWirelessDevicesEthernetStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationWirelessDevicesEthernetStatusesRequest();
    $request->endingBefore = 'et';
    $request->networkIds = [
        'alias',
        'eum',
        'impedit',
        'perspiciatis',
    ];
    $request->organizationId = 'optio';
    $request->perPage = 6446;
    $request->startingAfter = 'commodi';

    $response = $sdk->wireless->getOrganizationWirelessDevicesEthernetStatuses($request);

    if ($response->getOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONObjects !== null) {
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
    $request->requestBody->major = 268353;
    $request->requestBody->minor = 608634;
    $request->requestBody->uuid = 'd2bdd9e5-8ddb-4166-9c31-2c7f550d4721';
    $request->serial = 'quod';

    $response = $sdk->wireless->updateDeviceWirelessBluetoothSettings($request);

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
    $request->requestBody->fiveGhzSettings->channel = UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelEnum::FORTY_FOUR;
    $request->requestBody->fiveGhzSettings->channelWidth = UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelWidthEnum::FORTY;
    $request->requestBody->fiveGhzSettings->targetPower = 399297;
    $request->requestBody->rfProfileId = 'qui';
    $request->requestBody->twoFourGhzSettings = new UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings();
    $request->requestBody->twoFourGhzSettings->channel = UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettingsChannelEnum::NINE;
    $request->requestBody->twoFourGhzSettings->targetPower = 161431;
    $request->serial = 'nulla';

    $response = $sdk->wireless->updateDeviceWirelessRadioSettings($request);

    if ($response->updateDeviceWirelessRadioSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessAlternateManagementInterface

Update alternate management interface and device static IP

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessAlternateManagementInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessAlternateManagementInterfaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessAlternateManagementInterfaceRequest();
    $request->requestBody = new UpdateNetworkWirelessAlternateManagementInterfaceRequestBody();
    $request->requestBody->accessPoints = [
        new UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints(),
        new UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints(),
        new UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints(),
        new UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints(),
    ];
    $request->requestBody->enabled = false;
    $request->requestBody->protocols = [
        UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum::SNMP,
        UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum::RADIUS,
    ];
    $request->requestBody->vlanId = 502917;
    $request->networkId = 'necessitatibus';

    $response = $sdk->wireless->updateNetworkWirelessAlternateManagementInterface($request);

    if ($response->updateNetworkWirelessAlternateManagementInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessBilling

Update the billing settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBillingRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBillingRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBillingRequestBodyPlans;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessBillingRequest();
    $request->requestBody = new UpdateNetworkWirelessBillingRequestBody();
    $request->requestBody->currency = 'in';
    $request->requestBody->plans = [
        new UpdateNetworkWirelessBillingRequestBodyPlans(),
    ];
    $request->networkId = 'soluta';

    $response = $sdk->wireless->updateNetworkWirelessBilling($request);

    if ($response->updateNetworkWirelessBilling200ApplicationJSONObject !== null) {
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
    $request->requestBody->major = 963321;
    $request->requestBody->majorMinorAssignmentMode = UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum::UNIQUE;
    $request->requestBody->minor = 778866;
    $request->requestBody->scanningEnabled = false;
    $request->requestBody->uuid = '141841fe-1f87-4ea1-83a9-806ea1606399';
    $request->networkId = 'accusamus';

    $response = $sdk->wireless->updateNetworkWirelessBluetoothSettings($request);

    if ($response->updateNetworkWirelessBluetoothSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessRfProfile

Updates specified RF profile for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyApBandSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyTransmission;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessRfProfileRequest();
    $request->requestBody = new UpdateNetworkWirelessRfProfileRequestBody();
    $request->requestBody->apBandSettings = new UpdateNetworkWirelessRfProfileRequestBodyApBandSettings();
    $request->requestBody->apBandSettings->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum::DUAL;
    $request->requestBody->apBandSettings->bandSteeringEnabled = false;
    $request->requestBody->bandSelectionType = UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum::AP;
    $request->requestBody->clientBalancingEnabled = false;
    $request->requestBody->fiveGhzSettings = new UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings();
    $request->requestBody->fiveGhzSettings->channelWidth = 'iusto';
    $request->requestBody->fiveGhzSettings->maxPower = 739523;
    $request->requestBody->fiveGhzSettings->minBitrate = 535270;
    $request->requestBody->fiveGhzSettings->minPower = 122140;
    $request->requestBody->fiveGhzSettings->rxsop = 443080;
    $request->requestBody->fiveGhzSettings->validAutoChannels = [
        536347,
        833105,
    ];
    $request->requestBody->minBitrateType = UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum::BAND;
    $request->requestBody->name = 'Willis Hartmann';
    $request->requestBody->perSsidSettings = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings();
    $request->requestBody->perSsidSettings->zero = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0();
    $request->requestBody->perSsidSettings->zero->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->zero->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->zero->minBitrate = 50.62;
    $request->requestBody->perSsidSettings->one = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1();
    $request->requestBody->perSsidSettings->one->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->one->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->one->minBitrate = 8833.1;
    $request->requestBody->perSsidSettings->ten = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10();
    $request->requestBody->perSsidSettings->ten->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->ten->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->ten->minBitrate = 4430.19;
    $request->requestBody->perSsidSettings->eleven = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11();
    $request->requestBody->perSsidSettings->eleven->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->eleven->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->eleven->minBitrate = 9884.33;
    $request->requestBody->perSsidSettings->twelve = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12();
    $request->requestBody->perSsidSettings->twelve->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->twelve->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->twelve->minBitrate = 6082.68;
    $request->requestBody->perSsidSettings->thirteen = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13();
    $request->requestBody->perSsidSettings->thirteen->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->thirteen->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->thirteen->minBitrate = 2221.87;
    $request->requestBody->perSsidSettings->fourteen = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14();
    $request->requestBody->perSsidSettings->fourteen->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->fourteen->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->fourteen->minBitrate = 8941.34;
    $request->requestBody->perSsidSettings->two = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2();
    $request->requestBody->perSsidSettings->two->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->two->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->two->minBitrate = 5643.1;
    $request->requestBody->perSsidSettings->three = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3();
    $request->requestBody->perSsidSettings->three->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->three->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->three->minBitrate = 949.18;
    $request->requestBody->perSsidSettings->four = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4();
    $request->requestBody->perSsidSettings->four->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->four->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->four->minBitrate = 3969.55;
    $request->requestBody->perSsidSettings->five = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5();
    $request->requestBody->perSsidSettings->five->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->five->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->five->minBitrate = 9479.41;
    $request->requestBody->perSsidSettings->six = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6();
    $request->requestBody->perSsidSettings->six->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->six->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->six->minBitrate = 1657.77;
    $request->requestBody->perSsidSettings->seven = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7();
    $request->requestBody->perSsidSettings->seven->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->seven->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->seven->minBitrate = 1729.53;
    $request->requestBody->perSsidSettings->eight = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8();
    $request->requestBody->perSsidSettings->eight->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->eight->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->eight->minBitrate = 6370.9;
    $request->requestBody->perSsidSettings->nine = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9();
    $request->requestBody->perSsidSettings->nine->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->nine->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->nine->minBitrate = 5470.75;
    $request->requestBody->transmission = new UpdateNetworkWirelessRfProfileRequestBodyTransmission();
    $request->requestBody->transmission->enabled = false;
    $request->requestBody->twoFourGhzSettings = new UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings();
    $request->requestBody->twoFourGhzSettings->axEnabled = false;
    $request->requestBody->twoFourGhzSettings->maxPower = 292174;
    $request->requestBody->twoFourGhzSettings->minBitrate = 389.55;
    $request->requestBody->twoFourGhzSettings->minPower = 657747;
    $request->requestBody->twoFourGhzSettings->rxsop = 158059;
    $request->requestBody->twoFourGhzSettings->validAutoChannels = [
        921045,
        662228,
        44442,
    ];
    $request->networkId = 'commodi';
    $request->rfProfileId = 'ducimus';

    $response = $sdk->wireless->updateNetworkWirelessRfProfile($request);

    if ($response->updateNetworkWirelessRfProfile200ApplicationJSONObject !== null) {
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
    $request->requestBody->upgradeStrategy = UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum::MINIMIZE_CLIENT_DOWNTIME;
    $request->networkId = 'quibusdam';

    $response = $sdk->wireless->updateNetworkWirelessSettings($request);

    if ($response->updateNetworkWirelessSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsid

Update the attributes of an MR SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyActiveDirectory;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyAuthModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyDnsRewrite;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyDot11r;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyDot11w;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyGre;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyGreConcentrator;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLdap;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLdapCredentials;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLdapServers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLocalRadius;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyOauth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyRadiusServers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodySpeedBurst;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodySplashPageEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidRequestBody();
    $request->requestBody->activeDirectory = new UpdateNetworkWirelessSsidRequestBodyActiveDirectory();
    $request->requestBody->activeDirectory->credentials = new UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials();
    $request->requestBody->activeDirectory->credentials->logonName = 'autem';
    $request->requestBody->activeDirectory->credentials->password = 'soluta';
    $request->requestBody->activeDirectory->servers = [
        new UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers(),
        new UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers(),
    ];
    $request->requestBody->adultContentFilteringEnabled = false;
    $request->requestBody->apTagsAndVlanIds = [
        new UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds(),
    ];
    $request->requestBody->authMode = UpdateNetworkWirelessSsidRequestBodyAuthModeEnum::OPEN_ENHANCED;
    $request->requestBody->availabilityTags = [
        'ut',
    ];
    $request->requestBody->availableOnAllAps = false;
    $request->requestBody->bandSelection = 'maxime';
    $request->requestBody->concentratorNetworkId = 'deserunt';
    $request->requestBody->defaultVlanId = 290242;
    $request->requestBody->disassociateClientsOnVpnFailover = false;
    $request->requestBody->dnsRewrite = new UpdateNetworkWirelessSsidRequestBodyDnsRewrite();
    $request->requestBody->dnsRewrite->dnsCustomNameservers = [
        'incidunt',
    ];
    $request->requestBody->dnsRewrite->enabled = false;
    $request->requestBody->dot11r = new UpdateNetworkWirelessSsidRequestBodyDot11r();
    $request->requestBody->dot11r->adaptive = false;
    $request->requestBody->dot11r->enabled = false;
    $request->requestBody->dot11w = new UpdateNetworkWirelessSsidRequestBodyDot11w();
    $request->requestBody->dot11w->enabled = false;
    $request->requestBody->dot11w->required = false;
    $request->requestBody->enabled = false;
    $request->requestBody->encryptionMode = UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum::WPA;
    $request->requestBody->enterpriseAdminAccess = UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum::ACCESS_ENABLED;
    $request->requestBody->gre = new UpdateNetworkWirelessSsidRequestBodyGre();
    $request->requestBody->gre->concentrator = new UpdateNetworkWirelessSsidRequestBodyGreConcentrator();
    $request->requestBody->gre->concentrator->host = 'nam';
    $request->requestBody->gre->key = 241225;
    $request->requestBody->ipAssignmentMode = 'dicta';
    $request->requestBody->lanIsolationEnabled = false;
    $request->requestBody->ldap = new UpdateNetworkWirelessSsidRequestBodyLdap();
    $request->requestBody->ldap->baseDistinguishedName = 'tempora';
    $request->requestBody->ldap->credentials = new UpdateNetworkWirelessSsidRequestBodyLdapCredentials();
    $request->requestBody->ldap->credentials->distinguishedName = 'provident';
    $request->requestBody->ldap->credentials->password = 'fuga';
    $request->requestBody->ldap->serverCaCertificate = new UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate();
    $request->requestBody->ldap->serverCaCertificate->contents = 'et';
    $request->requestBody->ldap->servers = [
        new UpdateNetworkWirelessSsidRequestBodyLdapServers(),
        new UpdateNetworkWirelessSsidRequestBodyLdapServers(),
        new UpdateNetworkWirelessSsidRequestBodyLdapServers(),
    ];
    $request->requestBody->localRadius = new UpdateNetworkWirelessSsidRequestBodyLocalRadius();
    $request->requestBody->localRadius->cacheTimeout = 969125;
    $request->requestBody->localRadius->certificateAuthentication = new UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication();
    $request->requestBody->localRadius->certificateAuthentication->clientRootCaCertificate = new UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate();
    $request->requestBody->localRadius->certificateAuthentication->clientRootCaCertificate->contents = 'qui';
    $request->requestBody->localRadius->certificateAuthentication->enabled = false;
    $request->requestBody->localRadius->certificateAuthentication->ocspResponderUrl = 'quis';
    $request->requestBody->localRadius->certificateAuthentication->useLdap = false;
    $request->requestBody->localRadius->certificateAuthentication->useOcsp = false;
    $request->requestBody->localRadius->passwordAuthentication = new UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication();
    $request->requestBody->localRadius->passwordAuthentication->enabled = false;
    $request->requestBody->mandatoryDhcpEnabled = false;
    $request->requestBody->minBitrate = 1504.67;
    $request->requestBody->name = 'Tanya Labadie IV';
    $request->requestBody->oauth = new UpdateNetworkWirelessSsidRequestBodyOauth();
    $request->requestBody->oauth->allowedDomains = [
        'magnam',
        'tempore',
        'consequatur',
    ];
    $request->requestBody->perClientBandwidthLimitDown = 859266;
    $request->requestBody->perClientBandwidthLimitUp = 685758;
    $request->requestBody->perSsidBandwidthLimitDown = 888644;
    $request->requestBody->perSsidBandwidthLimitUp = 830979;
    $request->requestBody->psk = 'quaerat';
    $request->requestBody->radiusAccountingEnabled = false;
    $request->requestBody->radiusAccountingInterimInterval = 692742;
    $request->requestBody->radiusAccountingServers = [
        new UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers(),
        new UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers(),
    ];
    $request->requestBody->radiusAttributeForGroupPolicies = UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum::REPLY_MESSAGE;
    $request->requestBody->radiusAuthenticationNasId = 'voluptatibus';
    $request->requestBody->radiusCalledStationId = 'consequatur';
    $request->requestBody->radiusCoaEnabled = false;
    $request->requestBody->radiusFailoverPolicy = UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum::ALLOW_ACCESS;
    $request->requestBody->radiusFallbackEnabled = false;
    $request->requestBody->radiusGuestVlanEnabled = false;
    $request->requestBody->radiusGuestVlanId = 121219;
    $request->requestBody->radiusLoadBalancingPolicy = UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum::ROUND_ROBIN;
    $request->requestBody->radiusOverride = false;
    $request->requestBody->radiusProxyEnabled = false;
    $request->requestBody->radiusServerAttemptsLimit = 880840;
    $request->requestBody->radiusServerTimeout = 925361;
    $request->requestBody->radiusServers = [
        new UpdateNetworkWirelessSsidRequestBodyRadiusServers(),
        new UpdateNetworkWirelessSsidRequestBodyRadiusServers(),
        new UpdateNetworkWirelessSsidRequestBodyRadiusServers(),
    ];
    $request->requestBody->radiusTestingEnabled = false;
    $request->requestBody->secondaryConcentratorNetworkId = 'ratione';
    $request->requestBody->speedBurst = new UpdateNetworkWirelessSsidRequestBodySpeedBurst();
    $request->requestBody->speedBurst->enabled = false;
    $request->requestBody->splashGuestSponsorDomains = [
        'molestiae',
    ];
    $request->requestBody->splashPage = UpdateNetworkWirelessSsidRequestBodySplashPageEnum::GOOGLE_APPS_DOMAIN;
    $request->requestBody->useVlanTagging = false;
    $request->requestBody->visible = false;
    $request->requestBody->vlanId = 485426;
    $request->requestBody->walledGardenEnabled = false;
    $request->requestBody->walledGardenRanges = [
        'soluta',
        'nulla',
    ];
    $request->requestBody->wpaEncryptionMode = UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum::WPA2_ONLY;
    $request->networkId = 'doloremque';
    $request->number = 'pariatur';

    $response = $sdk->wireless->updateNetworkWirelessSsid($request);

    if ($response->updateNetworkWirelessSsid200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidBonjourForwarding

Update the bonjour forwarding setting and rules for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidBonjourForwardingRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidBonjourForwardingRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidBonjourForwardingRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidBonjourForwardingRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->rules = [
        new UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules(),
        new UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules(),
        new UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules(),
    ];
    $request->networkId = 'est';
    $request->number = 'voluptatem';

    $response = $sdk->wireless->updateNetworkWirelessSsidBonjourForwarding($request);

    if ($response->updateNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidDeviceTypeGroupPolicies

Update the device type group policies for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody();
    $request->requestBody->deviceTypePolicies = [
        new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies(),
        new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies(),
        new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies(),
        new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies(),
    ];
    $request->requestBody->enabled = false;
    $request->networkId = 'quae';
    $request->number = 'eius';

    $response = $sdk->wireless->updateNetworkWirelessSsidDeviceTypeGroupPolicies($request);

    if ($response->updateNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidEapOverride

Update the EAP overridden parameters for an SSID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidEapOverrideRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidEapOverrideRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidEapOverrideRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidEapOverrideRequestBody();
    $request->requestBody->eapolKey = new UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey();
    $request->requestBody->eapolKey->retries = 600654;
    $request->requestBody->eapolKey->timeoutInMs = 812403;
    $request->requestBody->identity = new UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity();
    $request->requestBody->identity->retries = 866532;
    $request->requestBody->identity->timeout = 116773;
    $request->requestBody->maxRetries = 797756;
    $request->requestBody->timeout = 801930;
    $request->networkId = 'assumenda';
    $request->number = 'illum';

    $response = $sdk->wireless->updateNetworkWirelessSsidEapOverride($request);

    if ($response->updateNetworkWirelessSsidEapOverride200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidFirewallL3FirewallRules

Update the L3 firewall rules of an SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody();
    $request->requestBody->allowLanAccess = false;
    $request->requestBody->rules = [
        new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules(),
    ];
    $request->networkId = 'ea';
    $request->number = 'magni';

    $response = $sdk->wireless->updateNetworkWirelessSsidFirewallL3FirewallRules($request);

    if ($response->updateNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidFirewallL7FirewallRules

Update the L7 firewall rules of an SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules(),
        new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules(),
        new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules(),
    ];
    $request->networkId = 'quidem';
    $request->number = 'reiciendis';

    $response = $sdk->wireless->updateNetworkWirelessSsidFirewallL7FirewallRules($request);

    if ($response->updateNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidHotspot20

Update the Hotspot 2.0 settings of an SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20Request;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyOperator;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyVenue;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidHotspot20Request();
    $request->requestBody = new UpdateNetworkWirelessSsidHotspot20RequestBody();
    $request->requestBody->domains = [
        'qui',
        'amet',
        'natus',
    ];
    $request->requestBody->enabled = false;
    $request->requestBody->mccMncs = [
        new UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs(),
    ];
    $request->requestBody->naiRealms = [
        new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms(),
    ];
    $request->requestBody->networkAccessType = UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum::CHARGEABLE_PUBLIC_NETWORK;
    $request->requestBody->operator = new UpdateNetworkWirelessSsidHotspot20RequestBodyOperator();
    $request->requestBody->operator->name = 'Josefina Connelly';
    $request->requestBody->roamConsortOis = [
        'unde',
        'optio',
        'asperiores',
    ];
    $request->requestBody->venue = new UpdateNetworkWirelessSsidHotspot20RequestBodyVenue();
    $request->requestBody->venue->name = 'Faith Windler';
    $request->requestBody->venue->type = UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum::PRISON_OR_JAIL;
    $request->networkId = 'expedita';
    $request->number = 'officiis';

    $response = $sdk->wireless->updateNetworkWirelessSsidHotspot20($request);

    if ($response->updateNetworkWirelessSsidHotspot20200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidIdentityPsk

Update an Identity PSK

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidIdentityPskRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidIdentityPskRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidIdentityPskRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidIdentityPskRequestBody();
    $request->requestBody->groupPolicyId = 'impedit';
    $request->requestBody->name = 'Ms. Sarah Douglas';
    $request->requestBody->passphrase = 'voluptatum';
    $request->identityPskId = 'vitae';
    $request->networkId = 'eveniet';
    $request->number = 'expedita';

    $response = $sdk->wireless->updateNetworkWirelessSsidIdentityPsk($request);

    if ($response->updateNetworkWirelessSsidIdentityPsk200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidSchedules

Update the outage schedule for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSchedulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSchedulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSchedulesRequestBodyRanges;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidSchedulesRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidSchedulesRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->ranges = [
        new UpdateNetworkWirelessSsidSchedulesRequestBodyRanges(),
    ];
    $request->requestBody->rangesInSeconds = [
        new UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds(),
    ];
    $request->networkId = 'fugiat';
    $request->number = 'eos';

    $response = $sdk->wireless->updateNetworkWirelessSsidSchedules($request);

    if ($response->updateNetworkWirelessSsidSchedules200ApplicationJSONObject !== null) {
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
    $request->requestBody->billing->freeAccess->durationInMinutes = 608236;
    $request->requestBody->billing->freeAccess->enabled = false;
    $request->requestBody->billing->prepaidAccessFastLoginEnabled = false;
    $request->requestBody->billing->replyToEmailAddress = 'iusto';
    $request->requestBody->blockAllTrafficBeforeSignOn = false;
    $request->requestBody->controllerDisconnectionBehavior = UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum::RESTRICTED;
    $request->requestBody->guestSponsorship = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship();
    $request->requestBody->guestSponsorship->durationInMinutes = 488642;
    $request->requestBody->guestSponsorship->guestCanRequestTimeframe = false;
    $request->requestBody->redirectUrl = 'soluta';
    $request->requestBody->sentryEnrollment = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment();
    $request->requestBody->sentryEnrollment->enforcedSystems = [
        'nemo',
        'suscipit',
    ];
    $request->requestBody->sentryEnrollment->strength = UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum::FOCUSED;
    $request->requestBody->sentryEnrollment->systemsManagerNetwork = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork();
    $request->requestBody->sentryEnrollment->systemsManagerNetwork->id = '855e5088-c8a3-4263-81ac-ccca663d4a85';
    $request->requestBody->splashImage = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage();
    $request->requestBody->splashImage->extension = 'iste';
    $request->requestBody->splashImage->image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage();
    $request->requestBody->splashImage->image->contents = 'corporis';
    $request->requestBody->splashImage->image->format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnum::PNG;
    $request->requestBody->splashImage->md5 = 'dicta';
    $request->requestBody->splashLogo = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo();
    $request->requestBody->splashLogo->extension = 'distinctio';
    $request->requestBody->splashLogo->image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage();
    $request->requestBody->splashLogo->image->contents = 'amet';
    $request->requestBody->splashLogo->image->format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnum::GIF;
    $request->requestBody->splashLogo->md5 = 'quidem';
    $request->requestBody->splashPrepaidFront = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront();
    $request->requestBody->splashPrepaidFront->extension = 'soluta';
    $request->requestBody->splashPrepaidFront->image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage();
    $request->requestBody->splashPrepaidFront->image->contents = 'magni';
    $request->requestBody->splashPrepaidFront->image->format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnum::GIF;
    $request->requestBody->splashPrepaidFront->md5 = 'consectetur';
    $request->requestBody->splashTimeout = 917755;
    $request->requestBody->splashUrl = 'nesciunt';
    $request->requestBody->useRedirectUrl = false;
    $request->requestBody->useSplashUrl = false;
    $request->requestBody->welcomeMessage = 'harum';
    $request->networkId = 'dolor';
    $request->number = 'vitae';

    $response = $sdk->wireless->updateNetworkWirelessSsidSplashSettings($request);

    if ($response->updateNetworkWirelessSsidSplashSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidTrafficShapingRules

Update the traffic shaping settings for an SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidTrafficShapingRulesRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody();
    $request->requestBody->defaultRulesEnabled = false;
    $request->requestBody->rules = [
        new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules(),
        new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules(),
        new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules(),
        new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules(),
    ];
    $request->requestBody->trafficShapingEnabled = false;
    $request->networkId = 'temporibus';
    $request->number = 'ea';

    $response = $sdk->wireless->updateNetworkWirelessSsidTrafficShapingRules($request);

    if ($response->updateNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidVpn

Update the VPN settings for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBodyConcentrator;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBodyFailover;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidVpnRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidVpnRequestBody();
    $request->requestBody->concentrator = new UpdateNetworkWirelessSsidVpnRequestBodyConcentrator();
    $request->requestBody->concentrator->networkId = 'dolorum';
    $request->requestBody->concentrator->vlanId = 350295;
    $request->requestBody->failover = new UpdateNetworkWirelessSsidVpnRequestBodyFailover();
    $request->requestBody->failover->heartbeatInterval = 711897;
    $request->requestBody->failover->idleTimeout = 922751;
    $request->requestBody->failover->requestIp = 'odio';
    $request->requestBody->splitTunnel = new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel();
    $request->requestBody->splitTunnel->enabled = false;
    $request->requestBody->splitTunnel->rules = [
        new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules(),
        new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules(),
    ];
    $request->networkId = 'omnis';
    $request->number = 'doloremque';

    $response = $sdk->wireless->updateNetworkWirelessSsidVpn($request);

    if ($response->updateNetworkWirelessSsidVpn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
