# upgrades

### Available Operations

* [getOrganizationFirmwareUpgrades](#getorganizationfirmwareupgrades) - Get firmware upgrade information for an organization
* [getOrganizationFirmwareUpgradesByDevice](#getorganizationfirmwareupgradesbydevice) - Get firmware upgrade status for the filtered devices

## getOrganizationFirmwareUpgrades

Get firmware upgrade information for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationFirmwareUpgradesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationFirmwareUpgradesRequest();
    $request->organizationId = 'voluptas';
    $request->productType = [
        'possimus',
    ];
    $request->status = [
        'cum',
        'minus',
    ];

    $response = $sdk->upgrades->getOrganizationFirmwareUpgrades($request);

    if ($response->getOrganizationFirmwareUpgrades200ApplicationJSONObjects !== null) {
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
    $request->endingBefore = 'cupiditate';
    $request->firmwareUpgradeBatchIds = [
        'quasi',
        'dignissimos',
        'maiores',
    ];
    $request->firmwareUpgradeIds = [
        'totam',
        'accusamus',
        'eius',
    ];
    $request->macs = [
        'unde',
        'aspernatur',
    ];
    $request->networkIds = [
        'cupiditate',
        'nihil',
        'perspiciatis',
    ];
    $request->organizationId = 'officia';
    $request->perPage = 285556;
    $request->serials = [
        'sequi',
    ];
    $request->startingAfter = 'vero';

    $response = $sdk->upgrades->getOrganizationFirmwareUpgradesByDevice($request);

    if ($response->getOrganizationFirmwareUpgradesByDevice200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
