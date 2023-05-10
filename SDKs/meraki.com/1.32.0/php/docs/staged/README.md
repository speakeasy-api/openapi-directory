# staged

### Available Operations

* [createNetworkFirmwareUpgradesStagedEvent](#createnetworkfirmwareupgradesstagedevent) - Create a Staged Upgrade Event for a network
* [createNetworkFirmwareUpgradesStagedGroup](#createnetworkfirmwareupgradesstagedgroup) - Create a Staged Upgrade Group for a network
* [deferNetworkFirmwareUpgradesStagedEvents](#defernetworkfirmwareupgradesstagedevents) - Postpone by 1 week all pending staged upgrade stages for a network
* [deleteNetworkFirmwareUpgradesStagedGroup](#deletenetworkfirmwareupgradesstagedgroup) - Delete a Staged Upgrade Group
* [getNetworkFirmwareUpgradesStagedEvents](#getnetworkfirmwareupgradesstagedevents) - Get the Staged Upgrade Event from a network
* [getNetworkFirmwareUpgradesStagedGroup](#getnetworkfirmwareupgradesstagedgroup) - Get a Staged Upgrade Group from a network
* [getNetworkFirmwareUpgradesStagedGroups](#getnetworkfirmwareupgradesstagedgroups) - List of Staged Upgrade Groups in a network
* [getNetworkFirmwareUpgradesStagedStages](#getnetworkfirmwareupgradesstagedstages) - Order of Staged Upgrade Groups in a network
* [rollbacksNetworkFirmwareUpgradesStagedEvents](#rollbacksnetworkfirmwareupgradesstagedevents) - Rollback a Staged Upgrade Event for a network
* [updateNetworkFirmwareUpgradesStagedEvents](#updatenetworkfirmwareupgradesstagedevents) - Update the Staged Upgrade Event for a network
* [updateNetworkFirmwareUpgradesStagedGroup](#updatenetworkfirmwareupgradesstagedgroup) - Update a Staged Upgrade Group for a network
* [updateNetworkFirmwareUpgradesStagedStages](#updatenetworkfirmwareupgradesstagedstages) - Assign Staged Upgrade Group order in the sequence.

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
    $request->requestBody->products->switch->nextUpgrade->toVersion->id = 'da0e3aa6-1c6f-4e09-9852-b53b32c8c7c3';
    $request->requestBody->stages = [
        new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages(),
        new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages(),
        new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages(),
        new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages(),
    ];
    $request->networkId = 'esse';

    $response = $sdk->staged->createNetworkFirmwareUpgradesStagedEvent($request);

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
    ];
    $request->requestBody->description = 'accusamus';
    $request->requestBody->isDefault = false;
    $request->requestBody->name = 'Loretta Kreiger';
    $request->networkId = 'excepturi';

    $response = $sdk->staged->createNetworkFirmwareUpgradesStagedGroup($request);

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
    $request->networkId = 'perferendis';

    $response = $sdk->staged->deferNetworkFirmwareUpgradesStagedEvents($request);

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
    $request->groupId = 'nostrum';
    $request->networkId = 'quisquam';

    $response = $sdk->staged->deleteNetworkFirmwareUpgradesStagedGroup($request);

    if ($response->statusCode === 200) {
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
    $request->networkId = 'expedita';

    $response = $sdk->staged->getNetworkFirmwareUpgradesStagedEvents($request);

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
    $request->groupId = 'labore';
    $request->networkId = 'quidem';

    $response = $sdk->staged->getNetworkFirmwareUpgradesStagedGroup($request);

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
    $request->networkId = 'recusandae';

    $response = $sdk->staged->getNetworkFirmwareUpgradesStagedGroups($request);

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
    $request->networkId = 'illum';

    $response = $sdk->staged->getNetworkFirmwareUpgradesStagedStages($request);

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
        new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons(),
        new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons(),
        new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons(),
    ];
    $request->requestBody->stages = [
        new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages(),
        new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages(),
        new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages(),
        new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages(),
    ];
    $request->networkId = 'amet';

    $response = $sdk->staged->rollbacksNetworkFirmwareUpgradesStagedEvents($request);

    if ($response->rollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject !== null) {
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
    $request->networkId = 'inventore';

    $response = $sdk->staged->updateNetworkFirmwareUpgradesStagedEvents($request);

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
    ];
    $request->requestBody->assignedDevices->switchStacks = [
        new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
        new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
    ];
    $request->requestBody->description = 'optio';
    $request->requestBody->isDefault = false;
    $request->requestBody->name = 'Sonia Bayer';
    $request->groupId = 'quis';
    $request->networkId = 'veniam';

    $response = $sdk->staged->updateNetworkFirmwareUpgradesStagedGroup($request);

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
    $request->networkId = 'blanditiis';

    $response = $sdk->staged->updateNetworkFirmwareUpgradesStagedStages($request);

    if ($response->updateNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
