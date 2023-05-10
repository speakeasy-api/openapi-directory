# groups

## Overview

API operations to interact with the monitored Groups.

### Available Operations

* [getGroups](#getgroups) - Gets all group summaries.
* [getOneGroup](#getonegroup) - Gets detailed information about a specific group.
* [updateEnergyCost](#updateenergycost) - Updates the values of the energy footprint parameter for a specific group.

## getGroups

Lists the available GroupSummary instances.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupsDirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupsRequest();
    $request->direction = GetGroupsDirectionEnum::ASC;
    $request->limit = 264555;
    $request->page = 'qui';
    $request->sort = 'impedit';

    $response = $sdk->groups->getGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOneGroup

You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/groups</b> service to get all available group ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOneGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOneGroupRequest();
    $request->groupId = 'cum';

    $response = $sdk->groups->getOneGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEnergyCost

You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/groups</b> service to get all available group ID.<br><br>If the ID is <em>"global"</em>, then the group being updated is the GlobalSummary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnergyCostRequest;
use \OpenAPI\OpenAPI\Models\Shared\GroupConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEnergyCostRequest();
    $request->groupConfiguration = new GroupConfiguration();
    $request->groupConfiguration->co2Emission = 0.3;
    $request->groupConfiguration->energyCost = 0.3;
    $request->groupConfiguration->groupNameFilter = 'Group [0-9]+';
    $request->groupId = 'esse';

    $response = $sdk->groups->updateEnergyCost($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
