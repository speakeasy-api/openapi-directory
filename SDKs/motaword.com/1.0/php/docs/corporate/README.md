# corporate

### Available Operations

* [getAvailableCorporatePermissions](#getavailablecorporatepermissions) - View available permissions
* [getAvailableCorporatePermissionsById](#getavailablecorporatepermissionsbyid) - Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
* [getCorporate](#getcorporate) - View your corporate account
* [getCorporateById](#getcorporatebyid) - Get details of this corporate account
* [getCorporateUserGroups](#getcorporateusergroups) - View user groups
* [getCorporateUserGroupsById](#getcorporateusergroupsbyid) - Get a list of user groups for this corporate account
* [getCorporateUsers](#getcorporateusers) - View users
* [getCorporateUsersById](#getcorporateusersbyid) - Get a list of users for this corporate account
* [getCorporatesList](#getcorporateslist) - Get a list of corporate accounts
* [saveCorporateUser](#savecorporateuser) - Create or update a user
* [saveCorporateUserGroup](#savecorporateusergroup) - Create or update a corporate user group
* [saveCorporateUserGroupById](#savecorporateusergroupbyid) - Create or update a corporate user group for this corporate account

## getAvailableCorporatePermissions

View a list of available permissions for your corporate account. They are used when assigning permissions to your corporate users.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->corporate->getAvailableCorporatePermissions();

    if ($response->permissionList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAvailableCorporatePermissionsById

Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAvailableCorporatePermissionsByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAvailableCorporatePermissionsByIdRequest();
    $request->corporateId = 866383;

    $response = $sdk->corporate->getAvailableCorporatePermissionsById($request);

    if ($response->permissionList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCorporate

View the details of the corporate account that your user account belongs to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->corporate->getCorporate();

    if ($response->corporateAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCorporateById

Get details of this corporate account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCorporateByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCorporateByIdRequest();
    $request->corporateId = 365496;

    $response = $sdk->corporate->getCorporateById($request);

    if ($response->corporateAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCorporateUserGroups

View a list of user groups under my corporate account. User groups are a part of our RBAC implementation and can be used to configure complex permission scenarios.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->corporate->getCorporateUserGroups();

    if ($response->userGroupList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCorporateUserGroupsById

Get a list of user groups for this corporate account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCorporateUserGroupsByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCorporateUserGroupsByIdRequest();
    $request->corporateId = 975522;

    $response = $sdk->corporate->getCorporateUserGroupsById($request);

    if ($response->userGroupList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCorporateUsers

View a list of users under your corporate account. This endpoint will only return information if your user account is permitted to view corporate account users, configured by your administrator.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->corporate->getCorporateUsers();

    if ($response->userList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCorporateUsersById

Get a list of users for this corporate account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCorporateUsersByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCorporateUsersByIdRequest();
    $request->corporateId = 16627;

    $response = $sdk->corporate->getCorporateUsersById($request);

    if ($response->userList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCorporatesList

Get a list of corporate accounts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->corporate->getCorporatesList();

    if ($response->corporateAccounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveCorporateUser

Create or update a user under your corporate account. This endpoint requires permissions for corporate user management, configured by your administrator.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\UserUpdateContent;
use \OpenAPI\OpenAPI\Models\Shared\UserUpdateContentNotifications;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserUpdateContent();
    $request->birthday = DateTime::createFromFormat('Y-m-d', '2022-04-23');
    $request->city = 'Port Floydshire';
    $request->country = 'Romania';
    $request->email = 'Celestine.Hayes@hotmail.com';
    $request->firstName = 'Amos';
    $request->id = 338985;
    $request->lastName = 'Dooley';
    $request->notifications = new UserUpdateContentNotifications();
    $request->notifications->phoneNumber = 'eos';
    $request->notifications->smsEnabled = false;
    $request->notify = false;
    $request->paypalEmail = 'perferendis';
    $request->phone = '1-842-839-9675';
    $request->require1099 = false;
    $request->state = 'voluptatem';
    $request->street = '156 Kitty Ramp';
    $request->userGroups = [
        992397,
    ];
    $request->zip = 'earum';

    $response = $sdk->corporate->saveCorporateUser($request);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveCorporateUserGroup

Create or update a corporate user group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\UserGroup;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserGroup();
    $request->corporateId = 267262;
    $request->id = 613966;
    $request->name = 'Casey Stracke';
    $request->permissions = [
        'delectus',
        'quaerat',
        'quos',
    ];

    $response = $sdk->corporate->saveCorporateUserGroup($request);

    if ($response->userGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveCorporateUserGroupById

Create or update a corporate user group for this corporate account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SaveCorporateUserGroupByIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserGroup;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SaveCorporateUserGroupByIdRequest();
    $request->userGroup = new UserGroup();
    $request->userGroup->corporateId = 398221;
    $request->userGroup->id = 212390;
    $request->userGroup->name = 'Rosa Dibbert';
    $request->userGroup->permissions = [
        'cum',
        'voluptate',
        'dignissimos',
    ];
    $request->corporateId = 970237;

    $response = $sdk->corporate->saveCorporateUserGroupById($request);

    if ($response->userGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
