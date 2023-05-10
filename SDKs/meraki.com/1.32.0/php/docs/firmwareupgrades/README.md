# firmwareUpgrades

### Available Operations

* [createNetworkFirmwareUpgradesRollback](#createnetworkfirmwareupgradesrollback) - Rollback a Firmware Upgrade For A Network
* [createNetworkFirmwareUpgradesStagedEvent](#createnetworkfirmwareupgradesstagedevent) - Create a Staged Upgrade Event for a network
* [createNetworkFirmwareUpgradesStagedGroup](#createnetworkfirmwareupgradesstagedgroup) - Create a Staged Upgrade Group for a network
* [deferNetworkFirmwareUpgradesStagedEvents](#defernetworkfirmwareupgradesstagedevents) - Postpone by 1 week all pending staged upgrade stages for a network
* [deleteNetworkFirmwareUpgradesStagedGroup](#deletenetworkfirmwareupgradesstagedgroup) - Delete a Staged Upgrade Group
* [getNetworkFirmwareUpgrades](#getnetworkfirmwareupgrades) - Get firmware upgrade information for a network
* [getNetworkFirmwareUpgradesStagedEvents](#getnetworkfirmwareupgradesstagedevents) - Get the Staged Upgrade Event from a network
* [getNetworkFirmwareUpgradesStagedGroup](#getnetworkfirmwareupgradesstagedgroup) - Get a Staged Upgrade Group from a network
* [getNetworkFirmwareUpgradesStagedGroups](#getnetworkfirmwareupgradesstagedgroups) - List of Staged Upgrade Groups in a network
* [getNetworkFirmwareUpgradesStagedStages](#getnetworkfirmwareupgradesstagedstages) - Order of Staged Upgrade Groups in a network
* [rollbacksNetworkFirmwareUpgradesStagedEvents](#rollbacksnetworkfirmwareupgradesstagedevents) - Rollback a Staged Upgrade Event for a network
* [updateNetworkFirmwareUpgrades](#updatenetworkfirmwareupgrades) - Update firmware upgrade information for a network
* [updateNetworkFirmwareUpgradesStagedEvents](#updatenetworkfirmwareupgradesstagedevents) - Update the Staged Upgrade Event for a network
* [updateNetworkFirmwareUpgradesStagedGroup](#updatenetworkfirmwareupgradesstagedgroup) - Update a Staged Upgrade Group for a network
* [updateNetworkFirmwareUpgradesStagedStages](#updatenetworkfirmwareupgradesstagedstages) - Assign Staged Upgrade Group order in the sequence.

## createNetworkFirmwareUpgradesRollback

Rollback a Firmware Upgrade For A Network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkFirmwareUpgradesRollbackRequest();
    $request->requestBody = new CreateNetworkFirmwareUpgradesRollbackRequestBody();
    $request->requestBody->product = CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum::CAMERA;
    $request->requestBody->reasons = [
        new CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons(),
    ];
    $request->requestBody->time = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-26T16:13:43.953Z');
    $request->requestBody->toVersion = new CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion();
    $request->requestBody->toVersion->id = '07d2a9c8-7ae5-40c1-a661-a1d9136a7e8d';
    $request->networkId = 'minima';

    $response = $sdk->firmwareUpgrades->createNetworkFirmwareUpgradesRollback($request);

    if ($response->createNetworkFirmwareUpgradesRollback200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkFirmwareUpgradesStagedEvent

Create a Staged Upgrade Event for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBodyProducts;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitch;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgrade;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgradeToVersion;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkFirmwareUpgradesStagedEventRequest();
    $request->requestBody = new CreateNetworkFirmwareUpgradesStagedEventRequestBody();
    $request->requestBody->products = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProducts();
    $request->requestBody->products->switch = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitch();
    $request->requestBody->products->switch->nextUpgrade = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgrade();
    $request->requestBody->products->switch->nextUpgrade->toVersion = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgradeToVersion();
    $request->requestBody->products->switch->nextUpgrade->toVersion->id = '3213f3f6-5875-42db-b64c-59f0a56cebca';
    $request->requestBody->stages = [
        new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages(),
        new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages(),
        new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages(),
        new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages(),
    ];
    $request->networkId = 'laborum';

    $response = $sdk->firmwareUpgrades->createNetworkFirmwareUpgradesStagedEvent($request);

    if ($response->createNetworkFirmwareUpgradesStagedEvent200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkFirmwareUpgradesStagedGroup

Create a Staged Upgrade Group for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkFirmwareUpgradesStagedGroupRequest();
    $request->requestBody = new CreateNetworkFirmwareUpgradesStagedGroupRequestBody();
    $request->requestBody->assignedDevices = new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices();
    $request->requestBody->assignedDevices->devices = [
        new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices(),
    ];
    $request->requestBody->assignedDevices->switchStacks = [
        new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
        new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
        new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
    ];
    $request->requestBody->description = 'maxime';
    $request->requestBody->isDefault = false;
    $request->requestBody->name = 'Ms. Mathew Mraz DDS';
    $request->networkId = 'sint';

    $response = $sdk->firmwareUpgrades->createNetworkFirmwareUpgradesStagedGroup($request);

    if ($response->createNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deferNetworkFirmwareUpgradesStagedEvents

Postpone by 1 week all pending staged upgrade stages for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeferNetworkFirmwareUpgradesStagedEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeferNetworkFirmwareUpgradesStagedEventsRequest();
    $request->networkId = 'ipsam';

    $response = $sdk->firmwareUpgrades->deferNetworkFirmwareUpgradesStagedEvents($request);

    if ($response->deferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkFirmwareUpgradesStagedGroup

Delete a Staged Upgrade Group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkFirmwareUpgradesStagedGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkFirmwareUpgradesStagedGroupRequest();
    $request->groupId = 'laboriosam';
    $request->networkId = 'molestiae';

    $response = $sdk->firmwareUpgrades->deleteNetworkFirmwareUpgradesStagedGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkFirmwareUpgrades

Get firmware upgrade information for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFirmwareUpgradesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFirmwareUpgradesRequest();
    $request->networkId = 'ab';

    $response = $sdk->firmwareUpgrades->getNetworkFirmwareUpgrades($request);

    if ($response->getNetworkFirmwareUpgrades200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkFirmwareUpgradesStagedEvents

Get the Staged Upgrade Event from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFirmwareUpgradesStagedEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFirmwareUpgradesStagedEventsRequest();
    $request->networkId = 'ex';

    $response = $sdk->firmwareUpgrades->getNetworkFirmwareUpgradesStagedEvents($request);

    if ($response->getNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkFirmwareUpgradesStagedGroup

Get a Staged Upgrade Group from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFirmwareUpgradesStagedGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFirmwareUpgradesStagedGroupRequest();
    $request->groupId = 'iure';
    $request->networkId = 'dolorem';

    $response = $sdk->firmwareUpgrades->getNetworkFirmwareUpgradesStagedGroup($request);

    if ($response->getNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkFirmwareUpgradesStagedGroups

List of Staged Upgrade Groups in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFirmwareUpgradesStagedGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFirmwareUpgradesStagedGroupsRequest();
    $request->networkId = 'minus';

    $response = $sdk->firmwareUpgrades->getNetworkFirmwareUpgradesStagedGroups($request);

    if ($response->getNetworkFirmwareUpgradesStagedGroups200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkFirmwareUpgradesStagedStages

Order of Staged Upgrade Groups in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFirmwareUpgradesStagedStagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFirmwareUpgradesStagedStagesRequest();
    $request->networkId = 'ad';

    $response = $sdk->firmwareUpgrades->getNetworkFirmwareUpgradesStagedStages($request);

    if ($response->getNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rollbacksNetworkFirmwareUpgradesStagedEvents

Rollback a Staged Upgrade Event for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RollbacksNetworkFirmwareUpgradesStagedEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\RollbacksNetworkFirmwareUpgradesStagedEventsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons;
use \OpenAPI\OpenAPI\Models\Operations\RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages;
use \OpenAPI\OpenAPI\Models\Operations\RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup;
use \OpenAPI\OpenAPI\Models\Operations\RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RollbacksNetworkFirmwareUpgradesStagedEventsRequest();
    $request->requestBody = new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBody();
    $request->requestBody->reasons = [
        new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons(),
    ];
    $request->requestBody->stages = [
        new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages(),
    ];
    $request->networkId = 'nam';

    $response = $sdk->firmwareUpgrades->rollbacksNetworkFirmwareUpgradesStagedEvents($request);

    if ($response->rollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkFirmwareUpgrades

Update firmware upgrade information for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProducts;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkFirmwareUpgradesRequest();
    $request->requestBody = new UpdateNetworkFirmwareUpgradesRequestBody();
    $request->requestBody->products = new UpdateNetworkFirmwareUpgradesRequestBodyProducts();
    $request->requestBody->products->appliance = new UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance();
    $request->requestBody->products->appliance->nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade();
    $request->requestBody->products->appliance->nextUpgrade->time = 'minima';
    $request->requestBody->products->appliance->nextUpgrade->toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion();
    $request->requestBody->products->appliance->nextUpgrade->toVersion->id = '665163a3-6385-412a-b252-1b9f2e072467';
    $request->requestBody->products->appliance->participateInNextBetaRelease = false;
    $request->requestBody->products->camera = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera();
    $request->requestBody->products->camera->nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade();
    $request->requestBody->products->camera->nextUpgrade->time = 'quidem';
    $request->requestBody->products->camera->nextUpgrade->toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion();
    $request->requestBody->products->camera->nextUpgrade->toVersion->id = '8a40bc05-fab0-4d65-8edf-22a94d20ec90';
    $request->requestBody->products->camera->participateInNextBetaRelease = false;
    $request->requestBody->products->cellularGateway = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway();
    $request->requestBody->products->cellularGateway->nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade();
    $request->requestBody->products->cellularGateway->nextUpgrade->time = 'debitis';
    $request->requestBody->products->cellularGateway->nextUpgrade->toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion();
    $request->requestBody->products->cellularGateway->nextUpgrade->toVersion->id = 'a41d1f46-5e85-4156-bff7-3fdf54fdd5ea';
    $request->requestBody->products->cellularGateway->participateInNextBetaRelease = false;
    $request->requestBody->products->sensor = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor();
    $request->requestBody->products->sensor->nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade();
    $request->requestBody->products->sensor->nextUpgrade->time = 'sint';
    $request->requestBody->products->sensor->nextUpgrade->toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion();
    $request->requestBody->products->sensor->nextUpgrade->toVersion->id = '543398da-fb42-4a8d-a338-8e4d8039ea5f';
    $request->requestBody->products->sensor->participateInNextBetaRelease = false;
    $request->requestBody->products->switch = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch();
    $request->requestBody->products->switch->nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade();
    $request->requestBody->products->switch->nextUpgrade->time = 'iste';
    $request->requestBody->products->switch->nextUpgrade->toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion();
    $request->requestBody->products->switch->nextUpgrade->toVersion->id = 'b18a244f-d619-4039-9acd-38ed0dc671dc';
    $request->requestBody->products->switch->participateInNextBetaRelease = false;
    $request->requestBody->products->wireless = new UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless();
    $request->requestBody->products->wireless->nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade();
    $request->requestBody->products->wireless->nextUpgrade->time = 'quam';
    $request->requestBody->products->wireless->nextUpgrade->toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion();
    $request->requestBody->products->wireless->nextUpgrade->toVersion->id = 'f1e3af15-920c-490d-9b49-01f2bd89c8a3';
    $request->requestBody->products->wireless->participateInNextBetaRelease = false;
    $request->requestBody->timezone = 'dolores';
    $request->requestBody->upgradeWindow = new UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow();
    $request->requestBody->upgradeWindow->dayOfWeek = UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum::SATURDAY;
    $request->requestBody->upgradeWindow->hourOfDay = UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum::FOURTEEN00;
    $request->networkId = 'occaecati';

    $response = $sdk->firmwareUpgrades->updateNetworkFirmwareUpgrades($request);

    if ($response->updateNetworkFirmwareUpgrades200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkFirmwareUpgradesStagedEvents

Update the Staged Upgrade Event for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedEventsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkFirmwareUpgradesStagedEventsRequest();
    $request->requestBody = new UpdateNetworkFirmwareUpgradesStagedEventsRequestBody();
    $request->requestBody->stages = [
        new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages(),
        new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages(),
        new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages(),
        new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages(),
    ];
    $request->networkId = 'similique';

    $response = $sdk->firmwareUpgrades->updateNetworkFirmwareUpgradesStagedEvents($request);

    if ($response->updateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkFirmwareUpgradesStagedGroup

Update a Staged Upgrade Group for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkFirmwareUpgradesStagedGroupRequest();
    $request->requestBody = new UpdateNetworkFirmwareUpgradesStagedGroupRequestBody();
    $request->requestBody->assignedDevices = new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices();
    $request->requestBody->assignedDevices->devices = [
        new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices(),
        new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices(),
    ];
    $request->requestBody->assignedDevices->switchStacks = [
        new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
        new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
        new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
    ];
    $request->requestBody->description = 'in';
    $request->requestBody->isDefault = false;
    $request->requestBody->name = 'Mr. Ramon Mraz';
    $request->groupId = 'atque';
    $request->networkId = 'atque';

    $response = $sdk->firmwareUpgrades->updateNetworkFirmwareUpgradesStagedGroup($request);

    if ($response->updateNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkFirmwareUpgradesStagedStages

Assign Staged Upgrade Group order in the sequence.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedStagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedStagesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJsonGroup;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkFirmwareUpgradesStagedStagesRequest();
    $request->requestBody = new UpdateNetworkFirmwareUpgradesStagedStagesRequestBody();
    $request->requestBody->json = [
        new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson(),
    ];
    $request->networkId = 'dolorum';

    $response = $sdk->firmwareUpgrades->updateNetworkFirmwareUpgradesStagedStages($request);

    if ($response->updateNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
