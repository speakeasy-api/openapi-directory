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
    $request->accessToken = 'eos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consectetur';
    $request->fields = 'unde';
    $request->id = '4a68cc80-d30f-4f72-964d-0a91fe9d9655';
    $request->key = 'adipisci';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->profileId = 'praesentium';
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'perferendis';

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
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->fields = 'vel';
    $request->id = '692de7b3-5622-401a-aaab-4ae7b1a5b908';
    $request->key = 'placeat';
    $request->oauthToken = 'dolore';
    $request->prettyPrint = false;
    $request->profileId = 'repudiandae';
    $request->quotaUser = 'consectetur';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'aliquam';

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
    $request->userRole->accountId = 'quae';
    $request->userRole->defaultUserRole = false;
    $request->userRole->id = 'dolorum';
    $request->userRole->kind = 'fuga';
    $request->userRole->name = 'June Smitham';
    $request->userRole->parentUserRoleId = 'deleniti';
    $request->userRole->permissions = [
        new UserRolePermission(),
    ];
    $request->userRole->subaccountId = 'natus';
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->fields = 'quidem';
    $request->key = 'dolorum';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->profileId = 'molestiae';
    $request->quotaUser = 'reprehenderit';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'occaecati';

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
    $request->accessToken = 'blanditiis';
    $request->accountUserRoleOnly = false;
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aut';
    $request->fields = 'neque';
    $request->ids = [
        'dolor',
    ];
    $request->key = 'iste';
    $request->maxResults = 554029;
    $request->oauthToken = 'ut';
    $request->pageToken = 'exercitationem';
    $request->prettyPrint = false;
    $request->profileId = 'sit';
    $request->quotaUser = 'reprehenderit';
    $request->searchString = 'officiis';
    $request->sortField = DfareportingUserRolesListSortFieldEnum::ID;
    $request->sortOrder = DfareportingUserRolesListSortOrderEnum::DESCENDING;
    $request->subaccountId = 'consectetur';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'impedit';

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
    $request->userRole->accountId = 'saepe';
    $request->userRole->defaultUserRole = false;
    $request->userRole->id = 'odit';
    $request->userRole->kind = 'consectetur';
    $request->userRole->name = 'Mrs. Edmund Pouros I';
    $request->userRole->parentUserRoleId = 'nisi';
    $request->userRole->permissions = [
        new UserRolePermission(),
        new UserRolePermission(),
    ];
    $request->userRole->subaccountId = 'fugit';
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->fields = 'similique';
    $request->id = '3d6c657e-9de8-4f7f-802d-1986aa99d3a1';
    $request->key = 'repellendus';
    $request->oauthToken = 'ratione';
    $request->prettyPrint = false;
    $request->profileId = 'odit';
    $request->quotaUser = 'amet';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'provident';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->userRole = new UserRole();
    $request->userRole->accountId = 'ut';
    $request->userRole->defaultUserRole = false;
    $request->userRole->id = 'ullam';
    $request->userRole->kind = 'rem';
    $request->userRole->name = 'Maureen Veum';
    $request->userRole->parentUserRoleId = 'qui';
    $request->userRole->permissions = [
        new UserRolePermission(),
        new UserRolePermission(),
        new UserRolePermission(),
    ];
    $request->userRole->subaccountId = 'fugiat';
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'harum';
    $request->fields = 'inventore';
    $request->key = 'aut';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->profileId = 'fugit';
    $request->quotaUser = 'nostrum';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'reiciendis';

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
