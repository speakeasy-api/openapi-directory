# firmware

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
    $request->organizationId = 'necessitatibus';
    $request->productType = [
        'autem',
        'natus',
        'quasi',
        'iure',
    ];
    $request->status = [
        'error',
        'deleniti',
    ];

    $response = $sdk->firmware->getOrganizationFirmwareUpgrades($request);

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
    $request->endingBefore = 'tempore';
    $request->firmwareUpgradeBatchIds = [
        'adipisci',
        'dolore',
        'tempora',
        'quaerat',
    ];
    $request->firmwareUpgradeIds = [
        'similique',
        'porro',
        'blanditiis',
        'libero',
    ];
    $request->macs = [
        'laborum',
    ];
    $request->networkIds = [
        'totam',
    ];
    $request->organizationId = 'dignissimos';
    $request->perPage = 362413;
    $request->serials = [
        'nisi',
        'quo',
        'inventore',
        'voluptatibus',
    ];
    $request->startingAfter = 'officiis';

    $response = $sdk->firmware->getOrganizationFirmwareUpgradesByDevice($request);

    if ($response->getOrganizationFirmwareUpgradesByDevice200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
