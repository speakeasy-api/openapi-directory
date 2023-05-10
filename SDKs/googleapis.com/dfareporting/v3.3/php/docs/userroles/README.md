# userRoles

### Available Operations

* [dfareportingUserRolesDelete](#dfareportinguserrolesdelete) - Deletes an existing user role.
* [dfareportingUserRolesGet](#dfareportinguserrolesget) - Gets one user role by ID.
* [dfareportingUserRolesInsert](#dfareportinguserrolesinsert) - Inserts a new user role.
* [dfareportingUserRolesList](#dfareportinguserroleslist) - Retrieves a list of user roles, possibly filtered. This method supports paging.
* [dfareportingUserRolesPatch](#dfareportinguserrolespatch) - Updates an existing user role. This method supports patch semantics.
* [dfareportingUserRolesUpdate](#dfareportinguserrolesupdate) - Updates an existing user role.

## dfareportingUserRolesDelete

Deletes an existing user role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserRolesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserRolesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingUserRolesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'hic';
    $request->fields = 'hic';
    $request->id = 'a6d1d320-90fc-4157-ac9f-e1961ce9be41';
    $request->key = 'eligendi';
    $request->oauthToken = 'atque';
    $request->prettyPrint = false;
    $request->profileId = 'nisi';
    $request->quotaUser = 'omnis';
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'facere';

    $requestSecurity = new DfareportingUserRolesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userRoles->dfareportingUserRolesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingUserRolesGet

Gets one user role by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserRolesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserRolesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingUserRolesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'illo';
    $request->id = '9d07b200-a58f-4fd2-967d-f8fd882a8e60';
    $request->key = 'tempore';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->profileId = 'commodi';
    $request->quotaUser = 'eos';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'eligendi';

    $requestSecurity = new DfareportingUserRolesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userRoles->dfareportingUserRolesGet($request, $requestSecurity);

    if ($response->userRole !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingUserRolesInsert

Inserts a new user role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserRolesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserRole;
use \OpenAPI\OpenAPI\Models\Shared\UserRolePermission;
use \OpenAPI\OpenAPI\Models\Shared\UserRolePermissionAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserRolesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingUserRolesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->userRole = new UserRole();
    $request->userRole->accountId = 'molestias';
    $request->userRole->defaultUserRole = false;
    $request->userRole->id = 'quisquam';
    $request->userRole->kind = 'veniam';
    $request->userRole->name = 'Darrin Schuppe II';
    $request->userRole->parentUserRoleId = 'eligendi';
    $request->userRole->permissions = [
        new UserRolePermission(),
    ];
    $request->userRole->subaccountId = 'voluptate';
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'veniam';
    $request->fields = 'quasi';
    $request->key = 'consequuntur';
    $request->oauthToken = 'harum';
    $request->prettyPrint = false;
    $request->profileId = 'earum';
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new DfareportingUserRolesInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userRoles->dfareportingUserRolesInsert($request, $requestSecurity);

    if ($response->userRole !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingUserRolesList

Retrieves a list of user roles, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserRolesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserRolesListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserRolesListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserRolesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingUserRolesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'atque';
    $request->accountUserRoleOnly = false;
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'itaque';
    $request->fields = 'quisquam';
    $request->ids = [
        'corporis',
        'delectus',
        'nulla',
        'quod',
    ];
    $request->key = 'saepe';
    $request->maxResults = 655102;
    $request->oauthToken = 'deleniti';
    $request->pageToken = 'eveniet';
    $request->prettyPrint = false;
    $request->profileId = 'molestiae';
    $request->quotaUser = 'laborum';
    $request->searchString = 'voluptatum';
    $request->sortField = DfareportingUserRolesListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingUserRolesListSortOrderEnum::ASCENDING;
    $request->subaccountId = 'et';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new DfareportingUserRolesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userRoles->dfareportingUserRolesList($request, $requestSecurity);

    if ($response->userRolesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingUserRolesPatch

Updates an existing user role. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserRolesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserRole;
use \OpenAPI\OpenAPI\Models\Shared\UserRolePermission;
use \OpenAPI\OpenAPI\Models\Shared\UserRolePermissionAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserRolesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingUserRolesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->userRole = new UserRole();
    $request->userRole->accountId = 'ratione';
    $request->userRole->defaultUserRole = false;
    $request->userRole->id = 'porro';
    $request->userRole->kind = 'at';
    $request->userRole->name = 'Duane Spencer';
    $request->userRole->parentUserRoleId = 'cumque';
    $request->userRole->permissions = [
        new UserRolePermission(),
    ];
    $request->userRole->subaccountId = 'fugiat';
    $request->accessToken = 'rem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloremque';
    $request->fields = 'nisi';
    $request->id = '6237d422-7866-4db8-a749-e3984511cc75';
    $request->key = 'itaque';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->profileId = 'asperiores';
    $request->quotaUser = 'alias';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new DfareportingUserRolesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userRoles->dfareportingUserRolesPatch($request, $requestSecurity);

    if ($response->userRole !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingUserRolesUpdate

Updates an existing user role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserRolesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserRole;
use \OpenAPI\OpenAPI\Models\Shared\UserRolePermission;
use \OpenAPI\OpenAPI\Models\Shared\UserRolePermissionAvailabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserRolesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingUserRolesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->userRole = new UserRole();
    $request->userRole->accountId = 'non';
    $request->userRole->defaultUserRole = false;
    $request->userRole->id = 'soluta';
    $request->userRole->kind = 'minima';
    $request->userRole->name = 'Jean Krajcik';
    $request->userRole->parentUserRoleId = 'minus';
    $request->userRole->permissions = [
        new UserRolePermission(),
        new UserRolePermission(),
        new UserRolePermission(),
        new UserRolePermission(),
    ];
    $request->userRole->subaccountId = 'cupiditate';
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptas';
    $request->fields = 'quia';
    $request->key = 'delectus';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->profileId = 'consequatur';
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new DfareportingUserRolesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userRoles->dfareportingUserRolesUpdate($request, $requestSecurity);

    if ($response->userRole !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
