# rootRole

## Overview

Role management.

### Available Operations

* [createRole](#createrole) - Create a new role
* [deleteRole](#deleterole) - Delete a role
* [getRole](#getrole) - Get role information for the specified role
* [getRoles](#getroles) - Get all roles in an organization
* [updateRole](#updaterole) - Update role information

## createRole

Create a new role in the current organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\RoleInfoCreate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RoleInfoCreate();
    $request->description = 'aliquam';
    $request->name = 'Gerardo Spinka';
    $request->organizationId = 'autem';
    $request->roleTemplate = 'hic';

    $response = $sdk->rootRole->createRole($request);

    if ($response->roleInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRole

Delete the role with the specified ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRoleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRoleRequest();
    $request->id = '0441d2c3-b808-4094-b73e-060459bebbad';

    $response = $sdk->rootRole->deleteRole($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRole

Get role information for the role with the specified ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetRoleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRoleRequest();
    $request->id = '02f2586b-cf15-4255-8daa-95be6cd02756';

    $response = $sdk->rootRole->getRole($request);

    if ($response->roleInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRoles

Get a list of role information for all roles in the specified organization.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetRolesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRolesSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetRolesSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRolesRequest();
    $request->limit = 773678;
    $request->name = 'Regina Grady';
    $request->offset = 287797;
    $request->organizationId = 'adipisci';
    $request->roleTemplate = [
        'cum',
    ];
    $request->sortBy = GetRolesSortByEnum::NAME;
    $request->sortOrder = GetRolesSortOrderEnum::ASC;

    $response = $sdk->rootRole->getRoles($request);

    if ($response->roleInfoListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRole

Update the role information for the specified role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoleRequest;
use \OpenAPI\OpenAPI\Models\Shared\RoleInfoUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRoleRequest();
    $request->roleInfoUpdate = new RoleInfoUpdate();
    $request->roleInfoUpdate->description = 'officiis';
    $request->roleInfoUpdate->name = 'Georgia Jaskolski';
    $request->id = '5208c23e-9802-4d82-b0d4-5eb4a8b674ee';

    $response = $sdk->rootRole->updateRole($request);

    if ($response->roleInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
