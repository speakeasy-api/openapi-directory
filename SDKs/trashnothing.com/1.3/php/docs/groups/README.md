# groups

## Overview

Search, subscribe and unsubscribe to groups.

### Available Operations

* [getGroup](#getgroup) - Retrieve a group
* [getGroupsByIds](#getgroupsbyids) - Retrieve multiple groups
* [searchGroups](#searchgroups) - Search groups

## getGroup

Retrieve a group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupRequest();
    $request->groupId = 'provident';

    $requestSecurity = new GetGroupSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->groups->getGroup($request, $requestSecurity);

    if ($response->group !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGroupsByIds

Retrieve multiple groups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupsByIdsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupsByIdsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupsByIdsRequest();
    $request->groupIds = 'distinctio';

    $requestSecurity = new GetGroupsByIdsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->groups->getGroupsByIds($request, $requestSecurity);

    if ($response->groups !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchGroups

Search groups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchGroupsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchGroupsRequest();
    $request->country = 'Suriname';
    $request->distance = 6027.63;
    $request->latitude = 8579.46;
    $request->longitude = 5448.83;
    $request->name = 'Ben Mueller';
    $request->page = 437587;
    $request->perPage = 297534;
    $request->postalCode = '09234-7854';
    $request->region = 'excepturi';

    $requestSecurity = new SearchGroupsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->groups->searchGroups($request, $requestSecurity);

    if ($response->searchGroups200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
