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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odit';
    $request->fields = 'quibusdam';
    $request->id = '9edd785b-e5e7-4afe-9529-7ba6281f44e3';
    $request->key = 'laborum';
    $request->oauthToken = 'eos';
    $request->prettyPrint = false;
    $request->profileId = 'dolor';
    $request->quotaUser = 'consectetur';
    $request->uploadType = 'unde';
    $request->uploadProtocol = 'eius';

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
    $request->accessToken = 'eum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eligendi';
    $request->fields = 'optio';
    $request->id = '80d30ff7-2164-4d0a-91fe-9d96553b89e0';
    $request->key = 'consequatur';
    $request->oauthToken = 'doloremque';
    $request->prettyPrint = false;
    $request->profileId = 'excepturi';
    $request->quotaUser = 'quod';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'ea';

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
    $request->userRole->accountId = 'explicabo';
    $request->userRole->defaultUserRole = false;
    $request->userRole->id = 'temporibus';
    $request->userRole->kind = 'debitis';
    $request->userRole->name = 'Juana Emmerich';
    $request->userRole->parentUserRoleId = 'aspernatur';
    $request->userRole->permissions = [
        new UserRolePermission(),
    ];
    $request->userRole->subaccountId = 'eaque';
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptas';
    $request->fields = 'error';
    $request->key = 'error';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->profileId = 'eius';
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'in';

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
    $request->accessToken = 'vitae';
    $request->accountUserRoleOnly = false;
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'harum';
    $request->ids = [
        'alias',
        'rem',
        'placeat',
    ];
    $request->key = 'dolore';
    $request->maxResults = 917609;
    $request->oauthToken = 'consectetur';
    $request->pageToken = 'perferendis';
    $request->prettyPrint = false;
    $request->profileId = 'aliquam';
    $request->quotaUser = 'perspiciatis';
    $request->searchString = 'quae';
    $request->sortField = DfareportingUserRolesListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingUserRolesListSortOrderEnum::DESCENDING;
    $request->subaccountId = 'sequi';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'temporibus';

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
    $request->userRole->accountId = 'error';
    $request->userRole->defaultUserRole = false;
    $request->userRole->id = 'deleniti';
    $request->userRole->kind = 'dolor';
    $request->userRole->name = 'Van Altenwerth';
    $request->userRole->parentUserRoleId = 'dolorum';
    $request->userRole->permissions = [
        new UserRolePermission(),
        new UserRolePermission(),
        new UserRolePermission(),
    ];
    $request->userRole->subaccountId = 'molestiae';
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'occaecati';
    $request->fields = 'quasi';
    $request->id = '8f031398-4507-4e0e-b9c7-e23ecb060465';
    $request->key = 'fugit';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->profileId = 'magni';
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'dolor';

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
    $request->userRole->accountId = 'autem';
    $request->userRole->defaultUserRole = false;
    $request->userRole->id = 'quo';
    $request->userRole->kind = 'voluptas';
    $request->userRole->name = 'Delores Swift';
    $request->userRole->parentUserRoleId = 'debitis';
    $request->userRole->permissions = [
        new UserRolePermission(),
        new UserRolePermission(),
        new UserRolePermission(),
    ];
    $request->userRole->subaccountId = 'earum';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->fields = 'consequatur';
    $request->key = 'sed';
    $request->oauthToken = 'fugiat';
    $request->prettyPrint = false;
    $request->profileId = 'veritatis';
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'ex';

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
