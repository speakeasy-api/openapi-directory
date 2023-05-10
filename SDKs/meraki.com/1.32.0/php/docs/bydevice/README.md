# byDevice

### Available Operations

* [getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* [getOrganizationDevicesPowerModulesStatusesByDevice](#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization
* [getOrganizationDevicesUplinksAddressesByDevice](#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.
* [getOrganizationFirmwareUpgradesByDevice](#getorganizationfirmwareupgradesbydevice) - Get firmware upgrade status for the filtered devices

## getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice

Return the devices that have a Dynamic ARP Inspection warning and their warnings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest();
    $request->endingBefore = 'excepturi';
    $request->networkId = 'eum';
    $request->perPage = 246557;
    $request->startingAfter = 'ut';

    $response = $sdk->byDevice->getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice($request);

    if ($response->getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationDevicesPowerModulesStatusesByDevice

List the power status information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesPowerModulesStatusesByDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesPowerModulesStatusesByDeviceRequest();
    $request->endingBefore = 'perspiciatis';
    $request->networkIds = [
        'dicta',
        'impedit',
        'voluptatibus',
        'iste',
    ];
    $request->organizationId = 'itaque';
    $request->perPage = 2677;
    $request->productTypes = [
        'itaque',
        'velit',
    ];
    $request->serials = [
        'non',
        'dolor',
        'iusto',
    ];
    $request->startingAfter = 'sit';
    $request->tags = [
        'consequatur',
    ];
    $request->tagsFilterType = GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnum::WITH_ANY_TAGS;

    $response = $sdk->byDevice->getOrganizationDevicesPowerModulesStatusesByDevice($request);

    if ($response->getOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONObjects !== null) {
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
    $request->endingBefore = 'recusandae';
    $request->networkIds = [
        'quidem',
        'voluptas',
    ];
    $request->organizationId = 'facilis';
    $request->perPage = 809365;
    $request->productTypes = [
        'expedita',
        'deleniti',
        'a',
    ];
    $request->serials = [
        'ullam',
        'unde',
    ];
    $request->startingAfter = 'necessitatibus';
    $request->tags = [
        'impedit',
        'ipsam',
        'corporis',
    ];
    $request->tagsFilterType = GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnum::WITH_ANY_TAGS;

    $response = $sdk->byDevice->getOrganizationDevicesUplinksAddressesByDevice($request);

    if ($response->getOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationFirmwareUpgradesByDevice

Get firmware upgrade status for the filtered devices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationFirmwareUpgradesByDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationFirmwareUpgradesByDeviceRequest();
    $request->endingBefore = 'error';
    $request->firmwareUpgradeBatchIds = [
        'labore',
        'veritatis',
    ];
    $request->firmwareUpgradeIds = [
        'consectetur',
        'vitae',
        'inventore',
        'dolorem',
    ];
    $request->macs = [
        'qui',
        'iste',
    ];
    $request->networkIds = [
        'nemo',
        'soluta',
    ];
    $request->organizationId = 'libero';
    $request->perPage = 526907;
    $request->serials = [
        'odio',
        'fugit',
        'alias',
    ];
    $request->startingAfter = 'magni';

    $response = $sdk->byDevice->getOrganizationFirmwareUpgradesByDevice($request);

    if ($response->getOrganizationFirmwareUpgradesByDevice200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
