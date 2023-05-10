# group

## Overview

A group is a cohort of patients within an organization. The creation of groups allows for the segmentation of dashboards and analytics. For example, a group might correspond to the patients in a particular practice or the employees of a particular employer.

### Available Operations

* [createGroup](#creategroup) - Create a group
* [fetchGroup](#fetchgroup) - Get a group
* [fetchGroups](#fetchgroups) - List groups

## createGroup

Create a group record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateGroupRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GroupResourceInput;
use \OpenAPI\OpenAPI\Models\Shared\GroupResourceAttributes;
use \OpenAPI\OpenAPI\Models\Shared\GroupResourceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGroupRequestInput();
    $request->data = new GroupResourceInput();
    $request->data->attributes = new GroupResourceAttributes();
    $request->data->attributes->bio = 'Team Health is all about the patient experience.';
    $request->data->attributes->name = 'Team Health';
    $request->data->id = '57b36e3c04ad8c2224f2af38';
    $request->data->type = GroupResourceTypeEnum::GROUP;

    $response = $sdk->group->createGroup($request);

    if ($response->createGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchGroup

Get a group record by id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchGroupRequest();
    $request->id = '45e80ca5-5efd-420e-857e-1858b6a89fbe';

    $response = $sdk->group->fetchGroup($request);

    if ($response->fetchGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchGroups

Get a list of groups matching the specified filters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchGroupsRequest();
    $request->filterName = 'neque';
    $request->filterOrganization = 'dolorum';

    $response = $sdk->group->fetchGroups($request);

    if ($response->fetchGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
