# groups

### Available Operations

* [createNetworkFirmwareUpgradesStagedGroup](#createnetworkfirmwareupgradesstagedgroup) - Create a Staged Upgrade Group for a network
* [createOrganizationAdaptivePolicyGroup](#createorganizationadaptivepolicygroup) - Creates a new adaptive policy group
* [createOrganizationPolicyObjectsGroup](#createorganizationpolicyobjectsgroup) - Creates a new Policy Object Group.
* [deleteNetworkFirmwareUpgradesStagedGroup](#deletenetworkfirmwareupgradesstagedgroup) - Delete a Staged Upgrade Group
* [deleteOrganizationAdaptivePolicyGroup](#deleteorganizationadaptivepolicygroup) - Deletes the specified adaptive policy group and any associated policies and references
* [deleteOrganizationPolicyObjectsGroup](#deleteorganizationpolicyobjectsgroup) - Deletes a Policy Object Group.
* [getNetworkFirmwareUpgradesStagedGroup](#getnetworkfirmwareupgradesstagedgroup) - Get a Staged Upgrade Group from a network
* [getNetworkFirmwareUpgradesStagedGroups](#getnetworkfirmwareupgradesstagedgroups) - List of Staged Upgrade Groups in a network
* [getOrganizationAdaptivePolicyGroup](#getorganizationadaptivepolicygroup) - Returns an adaptive policy group
* [getOrganizationAdaptivePolicyGroups](#getorganizationadaptivepolicygroups) - List adaptive policy groups in a organization
* [getOrganizationPolicyObjectsGroup](#getorganizationpolicyobjectsgroup) - Shows details of a Policy Object Group.
* [getOrganizationPolicyObjectsGroups](#getorganizationpolicyobjectsgroups) - Lists Policy Object Groups belonging to the organization.
* [updateNetworkFirmwareUpgradesStagedGroup](#updatenetworkfirmwareupgradesstagedgroup) - Update a Staged Upgrade Group for a network
* [updateOrganizationAdaptivePolicyGroup](#updateorganizationadaptivepolicygroup) - Updates an adaptive policy group
* [updateOrganizationPolicyObjectsGroup](#updateorganizationpolicyobjectsgroup) - Updates a Policy Object Group.

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
        new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices(),
        new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices(),
        new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices(),
    ];
    $request->requestBody->assignedDevices->switchStacks = [
        new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
        new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
        new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
    ];
    $request->requestBody->description = 'voluptatum';
    $request->requestBody->isDefault = false;
    $request->requestBody->name = 'Ernestine Gibson';
    $request->networkId = 'earum';

    $response = $sdk->groups->createNetworkFirmwareUpgradesStagedGroup($request);

    if ($response->createNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationAdaptivePolicyGroup

Creates a new adaptive policy group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationAdaptivePolicyGroupRequest();
    $request->requestBody = new CreateOrganizationAdaptivePolicyGroupRequestBody();
    $request->requestBody->description = 'quibusdam';
    $request->requestBody->name = 'Debbie Reynolds';
    $request->requestBody->policyObjects = [
        new CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects(),
    ];
    $request->requestBody->sgt = 795203;
    $request->organizationId = 'sunt';

    $response = $sdk->groups->createOrganizationAdaptivePolicyGroup($request);

    if ($response->createOrganizationAdaptivePolicyGroup201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationPolicyObjectsGroup

Creates a new Policy Object Group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationPolicyObjectsGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationPolicyObjectsGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationPolicyObjectsGroupRequest();
    $request->requestBody = new CreateOrganizationPolicyObjectsGroupRequestBody();
    $request->requestBody->category = 'sint';
    $request->requestBody->name = 'Megan Harris';
    $request->requestBody->objectIds = [
        600933,
        354499,
        315990,
        814114,
    ];
    $request->organizationId = 'cumque';

    $response = $sdk->groups->createOrganizationPolicyObjectsGroup($request);

    if ($response->createOrganizationPolicyObjectsGroup201ApplicationJSONObject !== null) {
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
    $request->groupId = 'cumque';
    $request->networkId = 'et';

    $response = $sdk->groups->deleteNetworkFirmwareUpgradesStagedGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationAdaptivePolicyGroup

Deletes the specified adaptive policy group and any associated policies and references

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationAdaptivePolicyGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationAdaptivePolicyGroupRequest();
    $request->id = '85ea4901-c7c4-43ad-adaa-784aba3d230e';
    $request->organizationId = 'nulla';

    $response = $sdk->groups->deleteOrganizationAdaptivePolicyGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationPolicyObjectsGroup

Deletes a Policy Object Group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationPolicyObjectsGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationPolicyObjectsGroupRequest();
    $request->organizationId = 'tenetur';
    $request->policyObjectGroupId = 'dignissimos';

    $response = $sdk->groups->deleteOrganizationPolicyObjectsGroup($request);

    if ($response->statusCode === 200) {
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
    $request->groupId = 'dolor';
    $request->networkId = 'totam';

    $response = $sdk->groups->getNetworkFirmwareUpgradesStagedGroup($request);

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
    $request->networkId = 'beatae';

    $response = $sdk->groups->getNetworkFirmwareUpgradesStagedGroups($request);

    if ($response->getNetworkFirmwareUpgradesStagedGroups200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdaptivePolicyGroup

Returns an adaptive policy group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdaptivePolicyGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdaptivePolicyGroupRequest();
    $request->id = '1a115382-bd7e-4d56-9076-21c58f4d7396';
    $request->organizationId = 'nostrum';

    $response = $sdk->groups->getOrganizationAdaptivePolicyGroup($request);

    if ($response->getOrganizationAdaptivePolicyGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdaptivePolicyGroups

List adaptive policy groups in a organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdaptivePolicyGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdaptivePolicyGroupsRequest();
    $request->organizationId = 'eum';

    $response = $sdk->groups->getOrganizationAdaptivePolicyGroups($request);

    if ($response->getOrganizationAdaptivePolicyGroups200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationPolicyObjectsGroup

Shows details of a Policy Object Group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationPolicyObjectsGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationPolicyObjectsGroupRequest();
    $request->organizationId = 'modi';
    $request->policyObjectGroupId = 'cumque';

    $response = $sdk->groups->getOrganizationPolicyObjectsGroup($request);

    if ($response->getOrganizationPolicyObjectsGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationPolicyObjectsGroups

Lists Policy Object Groups belonging to the organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationPolicyObjectsGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationPolicyObjectsGroupsRequest();
    $request->endingBefore = 'fugit';
    $request->organizationId = 'accusantium';
    $request->perPage = 681482;
    $request->startingAfter = 'doloremque';

    $response = $sdk->groups->getOrganizationPolicyObjectsGroups($request);

    if ($response->getOrganizationPolicyObjectsGroups200ApplicationJSONObjects !== null) {
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
    ];
    $request->requestBody->description = 'veritatis';
    $request->requestBody->isDefault = false;
    $request->requestBody->name = 'Dr. Alejandro Johns';
    $request->groupId = 'ut';
    $request->networkId = 'deserunt';

    $response = $sdk->groups->updateNetworkFirmwareUpgradesStagedGroup($request);

    if ($response->updateNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationAdaptivePolicyGroup

Updates an adaptive policy group. If updating "Infrastructure", only the SGT is allowed. Cannot update "Unknown".

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationAdaptivePolicyGroupRequest();
    $request->requestBody = new UpdateOrganizationAdaptivePolicyGroupRequestBody();
    $request->requestBody->description = 'dignissimos';
    $request->requestBody->name = 'Johnathan Reinger';
    $request->requestBody->policyObjects = [
        new UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects(),
        new UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects(),
    ];
    $request->requestBody->sgt = 244989;
    $request->id = '2d892cf7-812c-4b51-ac87-8240bf548f88';
    $request->organizationId = 'hic';

    $response = $sdk->groups->updateOrganizationAdaptivePolicyGroup($request);

    if ($response->updateOrganizationAdaptivePolicyGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationPolicyObjectsGroup

Updates a Policy Object Group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationPolicyObjectsGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationPolicyObjectsGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationPolicyObjectsGroupRequest();
    $request->requestBody = new UpdateOrganizationPolicyObjectsGroupRequestBody();
    $request->requestBody->name = 'Emilio Bosco';
    $request->requestBody->objectIds = [
        732896,
    ];
    $request->organizationId = 'quod';
    $request->policyObjectGroupId = 'totam';

    $response = $sdk->groups->updateOrganizationPolicyObjectsGroup($request);

    if ($response->updateOrganizationPolicyObjectsGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
