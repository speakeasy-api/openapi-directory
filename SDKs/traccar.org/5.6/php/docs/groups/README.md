# groups

## Overview

Group management

### Available Operations

* [deleteGroupsId](#deletegroupsid) - Delete a Group
* [getGroups](#getgroups) - Fetch a list of Groups
* [postGroups](#postgroups) - Create a Group
* [putGroupsId](#putgroupsid) - Update a Group

## deleteGroupsId

Delete a Group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGroupsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGroupsIdRequest();
    $request->id = 725255;

    $response = $sdk->groups->deleteGroupsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGroups

Without any params, returns a list of the Groups the user belongs to

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupsRequest();
    $request->all = false;
    $request->userId = 659669;

    $response = $sdk->groups->getGroups($request);

    if ($response->groups !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGroups

Create a Group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\Group;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Group();
    $request->attributes = [
        'deleniti' => 'sapiente',
        'amet' => 'deserunt',
        'nisi' => 'vel',
    ];
    $request->groupId = 618809;
    $request->id = 606393;
    $request->name = 'Dorothy Kovacek';

    $response = $sdk->groups->postGroups($request);

    if ($response->group !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putGroupsId

Update a Group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutGroupsIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\Group;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutGroupsIdRequest();
    $request->group = new Group();
    $request->group->attributes = [
        'labore' => 'labore',
        'suscipit' => 'natus',
        'nobis' => 'eum',
    ];
    $request->group->groupId = 878453;
    $request->group->id = 135474;
    $request->group->name = 'Danielle Bosco';
    $request->id = 590873;

    $response = $sdk->groups->putGroupsId($request);

    if ($response->group !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
