# events

### Available Operations

* [createNetworkFirmwareUpgradesStagedEvent](#createnetworkfirmwareupgradesstagedevent) - Create a Staged Upgrade Event for a network
* [deferNetworkFirmwareUpgradesStagedEvents](#defernetworkfirmwareupgradesstagedevents) - Postpone by 1 week all pending staged upgrade stages for a network
* [getNetworkApplianceClientSecurityEvents](#getnetworkapplianceclientsecurityevents) - List the security events for a client
* [getNetworkApplianceSecurityEvents](#getnetworkappliancesecurityevents) - List the security events for a network
* [getNetworkEvents](#getnetworkevents) - List the events for the network
* [getNetworkEventsEventTypes](#getnetworkeventseventtypes) - List the event type to human-readable description
* [getNetworkFirmwareUpgradesStagedEvents](#getnetworkfirmwareupgradesstagedevents) - Get the Staged Upgrade Event from a network
* [getOrganizationApplianceSecurityEvents](#getorganizationappliancesecurityevents) - List the security events for an organization
* [rollbacksNetworkFirmwareUpgradesStagedEvents](#rollbacksnetworkfirmwareupgradesstagedevents) - Rollback a Staged Upgrade Event for a network
* [updateNetworkFirmwareUpgradesStagedEvents](#updatenetworkfirmwareupgradesstagedevents) - Update the Staged Upgrade Event for a network

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
    $request->requestBody->products->switch->nextUpgrade->toVersion->id = '5350495c-5dbb-43c5-bc1e-4981e8aa257d';
    $request->requestBody->stages = [
        new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages(),
        new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages(),
        new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages(),
        new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages(),
    ];
    $request->networkId = 'porro';

    $response = $sdk->events->createNetworkFirmwareUpgradesStagedEvent($request);

    if ($response->createNetworkFirmwareUpgradesStagedEvent200ApplicationJSONObject !== null) {
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
    $request->networkId = 'quasi';

    $response = $sdk->events->deferNetworkFirmwareUpgradesStagedEvents($request);

    if ($response->deferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceClientSecurityEvents

List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceClientSecurityEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceClientSecurityEventsSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceClientSecurityEventsRequest();
    $request->clientId = 'sint';
    $request->endingBefore = 'inventore';
    $request->networkId = 'fugit';
    $request->perPage = 937488;
    $request->sortOrder = GetNetworkApplianceClientSecurityEventsSortOrderEnum::DESCENDING;
    $request->startingAfter = 'at';
    $request->t0 = 'debitis';
    $request->t1 = 'eum';
    $request->timespan = 2501.01;

    $response = $sdk->events->getNetworkApplianceClientSecurityEvents($request);

    if ($response->getNetworkApplianceClientSecurityEvents200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceSecurityEvents

List the security events for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSecurityEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSecurityEventsSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceSecurityEventsRequest();
    $request->endingBefore = 'nam';
    $request->networkId = 'sapiente';
    $request->perPage = 784353;
    $request->sortOrder = GetNetworkApplianceSecurityEventsSortOrderEnum::DESCENDING;
    $request->startingAfter = 'veniam';
    $request->t0 = 'magnam';
    $request->t1 = 'iure';
    $request->timespan = 6168.21;

    $response = $sdk->events->getNetworkApplianceSecurityEvents($request);

    if ($response->getNetworkApplianceSecurityEvents200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkEvents

List the events for the network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkEventsProductTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkEventsRequest();
    $request->clientIp = 'nulla';
    $request->clientMac = 'quaerat';
    $request->clientName = 'aut';
    $request->deviceMac = 'architecto';
    $request->deviceName = 'quis';
    $request->deviceSerial = 'possimus';
    $request->endingBefore = 'reiciendis';
    $request->excludedEventTypes = [
        'esse',
        'iste',
        'ex',
    ];
    $request->includedEventTypes = [
        'voluptatem',
    ];
    $request->networkId = 'voluptas';
    $request->perPage = 728849;
    $request->productType = GetNetworkEventsProductTypeEnum::WIRELESS;
    $request->smDeviceMac = 'hic';
    $request->smDeviceName = 'consequuntur';
    $request->startingAfter = 'quidem';

    $response = $sdk->events->getNetworkEvents($request);

    if ($response->getNetworkEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkEventsEventTypes

List the event type to human-readable description

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkEventsEventTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkEventsEventTypesRequest();
    $request->networkId = 'aperiam';

    $response = $sdk->events->getNetworkEventsEventTypes($request);

    if ($response->getNetworkEventsEventTypes200ApplicationJSONObjects !== null) {
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
    $request->networkId = 'animi';

    $response = $sdk->events->getNetworkFirmwareUpgradesStagedEvents($request);

    if ($response->getNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApplianceSecurityEvents

List the security events for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceSecurityEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceSecurityEventsSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApplianceSecurityEventsRequest();
    $request->endingBefore = 'ratione';
    $request->organizationId = 'itaque';
    $request->perPage = 250180;
    $request->sortOrder = GetOrganizationApplianceSecurityEventsSortOrderEnum::ASCENDING;
    $request->startingAfter = 'porro';
    $request->t0 = 'architecto';
    $request->t1 = 'deserunt';
    $request->timespan = 6856.1;

    $response = $sdk->events->getOrganizationApplianceSecurityEvents($request);

    if ($response->getOrganizationApplianceSecurityEvents200ApplicationJSONObjects !== null) {
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
    $request->networkId = 'perferendis';

    $response = $sdk->events->rollbacksNetworkFirmwareUpgradesStagedEvents($request);

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
    $request->networkId = 'excepturi';

    $response = $sdk->events->updateNetworkFirmwareUpgradesStagedEvents($request);

    if ($response->updateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
