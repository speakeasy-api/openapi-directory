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
    $request->callback = 'ipsa';
    $request->fields = 'consequatur';
    $request->id = '2d1986aa-99d3-4a1d-b232-9e45837e8f2a';
    $request->key = 'fugiat';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->profileId = 'tempore';
    $request->quotaUser = 'harum';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'aut';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsam';
    $request->fields = 'reiciendis';
    $request->id = 'dc480d6e-3308-4675-8bf1-86856a7e82cd';
    $request->key = 'doloribus';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->profileId = 'assumenda';
    $request->quotaUser = 'voluptatem';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'cumque';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->userRole = new UserRole();
    $request->userRole->accountId = 'deleniti';
    $request->userRole->defaultUserRole = false;
    $request->userRole->id = 'magni';
    $request->userRole->kind = 'quod';
    $request->userRole->name = 'Eileen Kassulke';
    $request->userRole->parentUserRoleId = 'nesciunt';
    $request->userRole->permissions = [
        new UserRolePermission(),
        new UserRolePermission(),
        new UserRolePermission(),
        new UserRolePermission(),
    ];
    $request->userRole->subaccountId = 'ratione';
    $request->accessToken = 'a';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nostrum';
    $request->fields = 'totam';
    $request->key = 'provident';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->profileId = 'accusamus';
    $request->quotaUser = 'est';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'possimus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vel';
    $request->accountUserRoleOnly = false;
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptates';
    $request->fields = 'modi';
    $request->ids = [
        'necessitatibus',
    ];
    $request->key = 'ratione';
    $request->maxResults = 781810;
    $request->oauthToken = 'fuga';
    $request->pageToken = 'corrupti';
    $request->prettyPrint = false;
    $request->profileId = 'numquam';
    $request->quotaUser = 'corrupti';
    $request->searchString = 'consequuntur';
    $request->sortField = DfareportingUserRolesListSortFieldEnum::ID;
    $request->sortOrder = DfareportingUserRolesListSortOrderEnum::DESCENDING;
    $request->subaccountId = 'veniam';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'neque';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->userRole = new UserRole();
    $request->userRole->accountId = 'autem';
    $request->userRole->defaultUserRole = false;
    $request->userRole->id = 'nulla';
    $request->userRole->kind = 'excepturi';
    $request->userRole->name = 'Martin Murphy';
    $request->userRole->parentUserRoleId = 'molestiae';
    $request->userRole->permissions = [
        new UserRolePermission(),
        new UserRolePermission(),
        new UserRolePermission(),
        new UserRolePermission(),
    ];
    $request->userRole->subaccountId = 'dolorem';
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'voluptatem';
    $request->id = '77c10b68-7921-463e-a7d4-8860543c0a30';
    $request->key = 'labore';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->profileId = 'quisquam';
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'voluptatibus';

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
    $request->userRole->accountId = 'porro';
    $request->userRole->defaultUserRole = false;
    $request->userRole->id = 'sit';
    $request->userRole->kind = 'explicabo';
    $request->userRole->name = 'Katie Tromp';
    $request->userRole->parentUserRoleId = 'qui';
    $request->userRole->permissions = [
        new UserRolePermission(),
    ];
    $request->userRole->subaccountId = 'facilis';
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'provident';
    $request->fields = 'alias';
    $request->key = 'illum';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->profileId = 'nihil';
    $request->quotaUser = 'ut';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'doloribus';

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
