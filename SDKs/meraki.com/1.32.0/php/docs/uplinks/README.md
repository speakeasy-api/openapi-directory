# uplinks

### Available Operations

* [getDeviceApplianceUplinksSettings](#getdeviceapplianceuplinkssettings) - Return the uplink settings for an MX appliance
* [getDeviceLossAndLatencyHistory](#getdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* [getNetworkApplianceUplinksUsageHistory](#getnetworkapplianceuplinksusagehistory) - Get the sent and received bytes for each uplink of a network.
* [getOrganizationApplianceUplinkStatuses](#getorganizationapplianceuplinkstatuses) - List the uplink status of every Meraki MX and Z series appliances in the organization
* [getOrganizationDevicesUplinksAddressesByDevice](#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.
* [getOrganizationDevicesUplinksLossAndLatency](#getorganizationdevicesuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* [getOrganizationUplinksStatuses](#getorganizationuplinksstatuses) - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* [updateDeviceApplianceUplinksSettings](#updatedeviceapplianceuplinkssettings) - Update the uplink settings for an MX appliance

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
    $request->serial = 'vero';

    $response = $sdk->uplinks->getDeviceApplianceUplinksSettings($request);

    if ($response->getDeviceApplianceUplinksSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceLossAndLatencyHistory

Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceLossAndLatencyHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceLossAndLatencyHistoryUplinkEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceLossAndLatencyHistoryRequest();
    $request->ip = 'temporibus';
    $request->resolution = 454416;
    $request->serial = 'nisi';
    $request->t0 = 'minus';
    $request->t1 = 'eaque';
    $request->timespan = 64.5;
    $request->uplink = GetDeviceLossAndLatencyHistoryUplinkEnum::CELLULAR;

    $response = $sdk->uplinks->getDeviceLossAndLatencyHistory($request);

    if ($response->getDeviceLossAndLatencyHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceUplinksUsageHistory

Get the sent and received bytes for each uplink of a network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceUplinksUsageHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceUplinksUsageHistoryRequest();
    $request->networkId = 'tenetur';
    $request->resolution = 669678;
    $request->t0 = 'cumque';
    $request->t1 = 'harum';
    $request->timespan = 1179.83;

    $response = $sdk->uplinks->getNetworkApplianceUplinksUsageHistory($request);

    if ($response->getNetworkApplianceUplinksUsageHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApplianceUplinkStatuses

List the uplink status of every Meraki MX and Z series appliances in the organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceUplinkStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApplianceUplinkStatusesRequest();
    $request->endingBefore = 'nesciunt';
    $request->iccids = [
        'placeat',
        'sed',
        'ut',
    ];
    $request->networkIds = [
        'quas',
        'ab',
        'quaerat',
        'sequi',
    ];
    $request->organizationId = 'quidem';
    $request->perPage = 546953;
    $request->serials = [
        'suscipit',
        'optio',
    ];
    $request->startingAfter = 'ullam';

    $response = $sdk->uplinks->getOrganizationApplianceUplinkStatuses($request);

    if ($response->getOrganizationApplianceUplinkStatuses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationDevicesUplinksAddressesByDevice

List the current uplink addresses for devices in an organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesUplinksAddressesByDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesUplinksAddressesByDeviceRequest();
    $request->endingBefore = 'iusto';
    $request->networkIds = [
        'officia',
        'ab',
    ];
    $request->organizationId = 'recusandae';
    $request->perPage = 157431;
    $request->productTypes = [
        'ex',
        'quos',
    ];
    $request->serials = [
        'ratione',
        'accusantium',
    ];
    $request->startingAfter = 'quidem';
    $request->tags = [
        'dolorem',
        'ducimus',
        'harum',
        'sit',
    ];
    $request->tagsFilterType = GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnum::WITH_ANY_TAGS;

    $response = $sdk->uplinks->getOrganizationDevicesUplinksAddressesByDevice($request);

    if ($response->getOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationDevicesUplinksLossAndLatency

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesUplinksLossAndLatencyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesUplinksLossAndLatencyRequest();
    $request->ip = 'corrupti';
    $request->organizationId = 'hic';
    $request->t0 = 'nam';
    $request->t1 = 'quod';
    $request->timespan = 2952.68;
    $request->uplink = GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum::WAN1;

    $response = $sdk->uplinks->getOrganizationDevicesUplinksLossAndLatency($request);

    if ($response->getOrganizationDevicesUplinksLossAndLatency200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationUplinksStatuses

List the uplink status of every Meraki MX, MG and Z series devices in the organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationUplinksStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationUplinksStatusesRequest();
    $request->endingBefore = 'facere';
    $request->iccids = [
        'quo',
        'esse',
        'officiis',
        'voluptas',
    ];
    $request->networkIds = [
        'rerum',
        'ipsam',
        'neque',
    ];
    $request->organizationId = 'quis';
    $request->perPage = 74279;
    $request->serials = [
        'nemo',
    ];
    $request->startingAfter = 'consequatur';

    $response = $sdk->uplinks->getOrganizationUplinksStatuses($request);

    if ($response->getOrganizationUplinksStatuses200ApplicationJSONObjects !== null) {
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
    $request->requestBody->interfaces->wan1->pppoe->authentication->password = 'quis';
    $request->requestBody->interfaces->wan1->pppoe->authentication->username = 'Alvera85';
    $request->requestBody->interfaces->wan1->pppoe->enabled = false;
    $request->requestBody->interfaces->wan1->svis = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Svis();
    $request->requestBody->interfaces->wan1->svis->ipv4 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4();
    $request->requestBody->interfaces->wan1->svis->ipv4->address = '600 Kamron Mall';
    $request->requestBody->interfaces->wan1->svis->ipv4->assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4AssignmentModeEnum::DYNAMIC;
    $request->requestBody->interfaces->wan1->svis->ipv4->gateway = 'quaerat';
    $request->requestBody->interfaces->wan1->svis->ipv4->nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4Nameservers();
    $request->requestBody->interfaces->wan1->svis->ipv4->nameservers->addresses = [
        'eius',
        'impedit',
        'consectetur',
    ];
    $request->requestBody->interfaces->wan1->svis->ipv6 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6();
    $request->requestBody->interfaces->wan1->svis->ipv6->address = '8525 Mayert Dale';
    $request->requestBody->interfaces->wan1->svis->ipv6->assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6AssignmentModeEnum::DYNAMIC;
    $request->requestBody->interfaces->wan1->svis->ipv6->gateway = 'laudantium';
    $request->requestBody->interfaces->wan1->svis->ipv6->nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6Nameservers();
    $request->requestBody->interfaces->wan1->svis->ipv6->nameservers->addresses = [
        'assumenda',
    ];
    $request->requestBody->interfaces->wan1->vlanTagging = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1VlanTagging();
    $request->requestBody->interfaces->wan1->vlanTagging->enabled = false;
    $request->requestBody->interfaces->wan1->vlanTagging->vlanId = 241614;
    $request->requestBody->interfaces->wan2 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2();
    $request->requestBody->interfaces->wan2->enabled = false;
    $request->requestBody->interfaces->wan2->pppoe = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Pppoe();
    $request->requestBody->interfaces->wan2->pppoe->authentication = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2PppoeAuthentication();
    $request->requestBody->interfaces->wan2->pppoe->authentication->enabled = false;
    $request->requestBody->interfaces->wan2->pppoe->authentication->password = 'aliquam';
    $request->requestBody->interfaces->wan2->pppoe->authentication->username = 'Skylar_Bahringer98';
    $request->requestBody->interfaces->wan2->pppoe->enabled = false;
    $request->requestBody->interfaces->wan2->svis = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Svis();
    $request->requestBody->interfaces->wan2->svis->ipv4 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4();
    $request->requestBody->interfaces->wan2->svis->ipv4->address = '083 Williamson Gateway';
    $request->requestBody->interfaces->wan2->svis->ipv4->assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4AssignmentModeEnum::DYNAMIC;
    $request->requestBody->interfaces->wan2->svis->ipv4->gateway = 'tempore';
    $request->requestBody->interfaces->wan2->svis->ipv4->nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4Nameservers();
    $request->requestBody->interfaces->wan2->svis->ipv4->nameservers->addresses = [
        'asperiores',
        'excepturi',
        'rem',
    ];
    $request->requestBody->interfaces->wan2->svis->ipv6 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6();
    $request->requestBody->interfaces->wan2->svis->ipv6->address = '07804 Baumbach Mission';
    $request->requestBody->interfaces->wan2->svis->ipv6->assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6AssignmentModeEnum::STATIC;
    $request->requestBody->interfaces->wan2->svis->ipv6->gateway = 'nesciunt';
    $request->requestBody->interfaces->wan2->svis->ipv6->nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6Nameservers();
    $request->requestBody->interfaces->wan2->svis->ipv6->nameservers->addresses = [
        'nobis',
        'cupiditate',
    ];
    $request->requestBody->interfaces->wan2->vlanTagging = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2VlanTagging();
    $request->requestBody->interfaces->wan2->vlanTagging->enabled = false;
    $request->requestBody->interfaces->wan2->vlanTagging->vlanId = 896177;
    $request->serial = 'consequuntur';

    $response = $sdk->uplinks->updateDeviceApplianceUplinksSettings($request);

    if ($response->updateDeviceApplianceUplinksSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
