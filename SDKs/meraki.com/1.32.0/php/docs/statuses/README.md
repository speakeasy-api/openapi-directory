# statuses

### Available Operations

* [getDeviceSwitchPortsStatuses](#getdeviceswitchportsstatuses) - Return the status for all the ports of a switch
* [getDeviceSwitchPortsStatusesPackets](#getdeviceswitchportsstatusespackets) - Return the packet counters for all the ports of a switch
* [getOrganizationApplianceUplinkStatuses](#getorganizationapplianceuplinkstatuses) - List the uplink status of every Meraki MX and Z series appliances in the organization
* [getOrganizationApplianceVpnStatuses](#getorganizationappliancevpnstatuses) - Show VPN status for networks in an organization
* [getOrganizationCameraOnboardingStatuses](#getorganizationcameraonboardingstatuses) - Fetch onboarding status of cameras
* [getOrganizationCellularGatewayUplinkStatuses](#getorganizationcellulargatewayuplinkstatuses) - List the uplink status of every Meraki MG cellular gateway in the organization
* [getOrganizationDevicesPowerModulesStatusesByDevice](#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization
* [getOrganizationDevicesStatuses](#getorganizationdevicesstatuses) - List the status of every Meraki device in the organization
* [getOrganizationDevicesStatusesOverview](#getorganizationdevicesstatusesoverview) - Return an overview of current device statuses
* [getOrganizationUplinksStatuses](#getorganizationuplinksstatuses) - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* [getOrganizationWirelessDevicesEthernetStatuses](#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices
* [updateOrganizationCameraOnboardingStatuses](#updateorganizationcameraonboardingstatuses) - Notify that credential handoff to camera has completed

## getDeviceSwitchPortsStatuses

Return the status for all the ports of a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchPortsStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchPortsStatusesRequest();
    $request->serial = 'voluptatibus';
    $request->t0 = 'ipsa';
    $request->timespan = 944;

    $response = $sdk->statuses->getDeviceSwitchPortsStatuses($request);

    if ($response->getDeviceSwitchPortsStatuses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchPortsStatusesPackets

Return the packet counters for all the ports of a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchPortsStatusesPacketsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchPortsStatusesPacketsRequest();
    $request->serial = 'sapiente';
    $request->t0 = 'dolorem';
    $request->timespan = 3116.04;

    $response = $sdk->statuses->getDeviceSwitchPortsStatusesPackets($request);

    if ($response->getDeviceSwitchPortsStatusesPackets200ApplicationJSONObjects !== null) {
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
    $request->endingBefore = 'incidunt';
    $request->iccids = [
        'cumque',
    ];
    $request->networkIds = [
        'inventore',
        'quidem',
    ];
    $request->organizationId = 'debitis';
    $request->perPage = 62830;
    $request->serials = [
        'nesciunt',
    ];
    $request->startingAfter = 'distinctio';

    $response = $sdk->statuses->getOrganizationApplianceUplinkStatuses($request);

    if ($response->getOrganizationApplianceUplinkStatuses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApplianceVpnStatuses

Show VPN status for networks in an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceVpnStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApplianceVpnStatusesRequest();
    $request->endingBefore = 'dolorum';
    $request->networkIds = [
        'nulla',
        'debitis',
        'corporis',
        'neque',
    ];
    $request->organizationId = 'eos';
    $request->perPage = 723268;
    $request->startingAfter = 'ea';

    $response = $sdk->statuses->getOrganizationApplianceVpnStatuses($request);

    if ($response->getOrganizationApplianceVpnStatuses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationCameraOnboardingStatuses

Fetch onboarding status of cameras

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationCameraOnboardingStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationCameraOnboardingStatusesRequest();
    $request->networkIds = [
        'eos',
        'laboriosam',
    ];
    $request->organizationId = 'reiciendis';
    $request->serials = [
        'suscipit',
        'explicabo',
        'quos',
    ];

    $response = $sdk->statuses->getOrganizationCameraOnboardingStatuses($request);

    if ($response->getOrganizationCameraOnboardingStatuses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationCellularGatewayUplinkStatuses

List the uplink status of every Meraki MG cellular gateway in the organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationCellularGatewayUplinkStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationCellularGatewayUplinkStatusesRequest();
    $request->endingBefore = 'corporis';
    $request->iccids = [
        'hic',
    ];
    $request->networkIds = [
        'eos',
        'laudantium',
        'enim',
        'provident',
    ];
    $request->organizationId = 'maxime';
    $request->perPage = 887693;
    $request->serials = [
        'magni',
    ];
    $request->startingAfter = 'consequuntur';

    $response = $sdk->statuses->getOrganizationCellularGatewayUplinkStatuses($request);

    if ($response->getOrganizationCellularGatewayUplinkStatuses200ApplicationJSONObjects !== null) {
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
    $request->endingBefore = 'quia';
    $request->networkIds = [
        'illo',
    ];
    $request->organizationId = 'doloribus';
    $request->perPage = 934357;
    $request->productTypes = [
        'nisi',
        'aliquid',
    ];
    $request->serials = [
        'eligendi',
        'numquam',
    ];
    $request->startingAfter = 'quae';
    $request->tags = [
        'magni',
        'maiores',
        'nam',
        'est',
    ];
    $request->tagsFilterType = GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnum::WITH_ALL_TAGS;

    $response = $sdk->statuses->getOrganizationDevicesPowerModulesStatusesByDevice($request);

    if ($response->getOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationDevicesStatuses

List the status of every Meraki device in the organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesStatusesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesStatusesProductTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesStatusesStatusesEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesStatusesTagsFilterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesStatusesRequest();
    $request->endingBefore = 'quod';
    $request->models = [
        'culpa',
        'sit',
        'eum',
    ];
    $request->networkIds = [
        'tempore',
        'corrupti',
        'at',
    ];
    $request->organizationId = 'fugit';
    $request->perPage = 582943;
    $request->productTypes = [
        GetOrganizationDevicesStatusesProductTypesEnum::SYSTEMS_MANAGER,
    ];
    $request->serials = [
        'libero',
        'blanditiis',
        'quae',
        'eaque',
    ];
    $request->startingAfter = 'est';
    $request->statuses = [
        GetOrganizationDevicesStatusesStatusesEnum::OFFLINE,
    ];
    $request->tags = [
        'atque',
        'molestiae',
        'aliquam',
    ];
    $request->tagsFilterType = GetOrganizationDevicesStatusesTagsFilterTypeEnum::WITH_ANY_TAGS;

    $response = $sdk->statuses->getOrganizationDevicesStatuses($request);

    if ($response->getOrganizationDevicesStatuses200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationDevicesStatusesOverview

Return an overview of current device statuses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesStatusesOverviewRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesStatusesOverviewProductTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesStatusesOverviewRequest();
    $request->networkIds = [
        'esse',
        'unde',
    ];
    $request->organizationId = 'recusandae';
    $request->productTypes = [
        GetOrganizationDevicesStatusesOverviewProductTypesEnum::SYSTEMS_MANAGER,
        GetOrganizationDevicesStatusesOverviewProductTypesEnum::CAMERA,
        GetOrganizationDevicesStatusesOverviewProductTypesEnum::WIRELESS,
        GetOrganizationDevicesStatusesOverviewProductTypesEnum::SYSTEMS_MANAGER,
    ];

    $response = $sdk->statuses->getOrganizationDevicesStatusesOverview($request);

    if ($response->getOrganizationDevicesStatusesOverview200ApplicationJSONObject !== null) {
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
    $request->endingBefore = 'earum';
    $request->iccids = [
        'libero',
        'corporis',
    ];
    $request->networkIds = [
        'optio',
    ];
    $request->organizationId = 'repellat';
    $request->perPage = 503662;
    $request->serials = [
        'a',
        'quae',
    ];
    $request->startingAfter = 'deleniti';

    $response = $sdk->statuses->getOrganizationUplinksStatuses($request);

    if ($response->getOrganizationUplinksStatuses200ApplicationJSONObjects !== null) {
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
    $request->endingBefore = 'asperiores';
    $request->networkIds = [
        'excepturi',
    ];
    $request->organizationId = 'fugit';
    $request->perPage = 459004;
    $request->startingAfter = 'illo';

    $response = $sdk->statuses->getOrganizationWirelessDevicesEthernetStatuses($request);

    if ($response->getOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationCameraOnboardingStatuses

Notify that credential handoff to camera has completed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationCameraOnboardingStatusesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationCameraOnboardingStatusesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationCameraOnboardingStatusesRequest();
    $request->requestBody = new UpdateOrganizationCameraOnboardingStatusesRequestBody();
    $request->requestBody->serial = 'perferendis';
    $request->requestBody->wirelessCredentialsSent = false;
    $request->organizationId = 'reprehenderit';

    $response = $sdk->statuses->updateOrganizationCameraOnboardingStatuses($request);

    if ($response->updateOrganizationCameraOnboardingStatuses200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
