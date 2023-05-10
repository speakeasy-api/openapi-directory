# groups

## Overview

Everything about Otoroshi service groups

### Available Operations

* [allServiceGroups](#allservicegroups) - Get all service groups
* [createGroup](#creategroup) - Create a new service group
* [deleteGroup](#deletegroup) - Delete a service group
* [patchGroup](#patchgroup) - Update a service group with a diff
* [serviceGroup](#servicegroup) - Get a service group
* [updateGroup](#updategroup) - Update a service group

## allServiceGroups

Get all service groups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AllServiceGroupsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new AllServiceGroupsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->groups->allServiceGroups($requestSecurity);

    if ($response->groups !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGroup

Create a new service group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Group;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Group();
    $request->description = 'a string value';
    $request->id = 'a string value';
    $request->name = 'a string value';

    $requestSecurity = new CreateGroupSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->groups->createGroup($request, $requestSecurity);

    if ($response->group !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGroup

Delete a service group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGroupRequest();
    $request->serviceGroupId = 'vero';

    $requestSecurity = new DeleteGroupSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->groups->deleteGroup($request, $requestSecurity);

    if ($response->deleted !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchGroup

Update a service group with a diff

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\Patch;
use \OpenAPI\OpenAPI\Models\Shared\PatchOpEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchGroupRequest();
    $request->requestBody = [
        new Patch(),
        new Patch(),
    ];
    $request->serviceGroupId = 'dolore';

    $requestSecurity = new PatchGroupSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->groups->patchGroup($request, $requestSecurity);

    if ($response->group !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceGroup

Get a service group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\ServiceGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceGroupRequest();
    $request->serviceGroupId = 'quibusdam';

    $requestSecurity = new ServiceGroupSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->groups->serviceGroup($request, $requestSecurity);

    if ($response->group !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGroup

Update a service group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\Group;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGroupRequest();
    $request->group = new Group();
    $request->group->description = 'a string value';
    $request->group->id = 'a string value';
    $request->group->name = 'a string value';
    $request->serviceGroupId = 'illum';

    $requestSecurity = new UpdateGroupSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->groups->updateGroup($request, $requestSecurity);

    if ($response->group !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
