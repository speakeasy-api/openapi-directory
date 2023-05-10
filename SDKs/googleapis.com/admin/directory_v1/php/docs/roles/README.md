# roles

### Available Operations

* [directoryRolesDelete](#directoryrolesdelete) - Deletes a role.
* [directoryRolesGet](#directoryrolesget) - Retrieves a role.
* [directoryRolesInsert](#directoryrolesinsert) - Creates a role.
* [directoryRolesList](#directoryroleslist) - Retrieves a paginated list of all the roles in a domain.
* [directoryRolesPatch](#directoryrolespatch) - Patches a role.
* [directoryRolesUpdate](#directoryrolesupdate) - Updates a role.

## directoryRolesDelete

Deletes a role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRolesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRolesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryRolesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorum';
    $request->customer = 'necessitatibus';
    $request->fields = 'provident';
    $request->key = 'repudiandae';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->roleId = 'molestiae';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new DirectoryRolesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->roles->directoryRolesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryRolesGet

Retrieves a role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRolesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRolesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRolesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRolesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryRolesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aperiam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusamus';
    $request->customer = 'eos';
    $request->fields = 'totam';
    $request->key = 'dicta';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->roleId = 'dolor';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'a';

    $requestSecurity = new DirectoryRolesGetSecurity();
    $requestSecurity->option1 = new DirectoryRolesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->roles->directoryRolesGet($request, $requestSecurity);

    if ($response->role !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryRolesInsert

Creates a role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRolesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Role;
use \OpenAPI\OpenAPI\Models\Shared\RoleRolePrivileges;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRolesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryRolesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->role = new Role();
    $request->role->etag = 'occaecati';
    $request->role->isSuperAdminRole = false;
    $request->role->isSystemRole = false;
    $request->role->kind = 'atque';
    $request->role->roleDescription = 'beatae';
    $request->role->roleId = 'at';
    $request->role->roleName = 'labore';
    $request->role->rolePrivileges = [
        new RoleRolePrivileges(),
        new RoleRolePrivileges(),
        new RoleRolePrivileges(),
        new RoleRolePrivileges(),
    ];
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perferendis';
    $request->customer = 'rerum';
    $request->fields = 'ea';
    $request->key = 'aperiam';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellat';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new DirectoryRolesInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->roles->directoryRolesInsert($request, $requestSecurity);

    if ($response->role !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryRolesList

Retrieves a paginated list of all the roles in a domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRolesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRolesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRolesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRolesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryRolesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dignissimos';
    $request->customer = 'consectetur';
    $request->fields = 'soluta';
    $request->key = 'natus';
    $request->maxResults = 839807;
    $request->oauthToken = 'officia';
    $request->pageToken = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new DirectoryRolesListSecurity();
    $requestSecurity->option1 = new DirectoryRolesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->roles->directoryRolesList($request, $requestSecurity);

    if ($response->roles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryRolesPatch

Patches a role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRolesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Role;
use \OpenAPI\OpenAPI\Models\Shared\RoleRolePrivileges;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRolesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryRolesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->role = new Role();
    $request->role->etag = 'illum';
    $request->role->isSuperAdminRole = false;
    $request->role->isSystemRole = false;
    $request->role->kind = 'laborum';
    $request->role->roleDescription = 'dignissimos';
    $request->role->roleId = 'vero';
    $request->role->roleName = 'qui';
    $request->role->rolePrivileges = [
        new RoleRolePrivileges(),
    ];
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'explicabo';
    $request->customer = 'exercitationem';
    $request->fields = 'nihil';
    $request->key = 'non';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'illo';
    $request->roleId = 'hic';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new DirectoryRolesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->roles->directoryRolesPatch($request, $requestSecurity);

    if ($response->role !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryRolesUpdate

Updates a role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRolesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Role;
use \OpenAPI\OpenAPI\Models\Shared\RoleRolePrivileges;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryRolesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryRolesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->role = new Role();
    $request->role->etag = 'distinctio';
    $request->role->isSuperAdminRole = false;
    $request->role->isSystemRole = false;
    $request->role->kind = 'in';
    $request->role->roleDescription = 'exercitationem';
    $request->role->roleId = 'labore';
    $request->role->roleName = 'numquam';
    $request->role->rolePrivileges = [
        new RoleRolePrivileges(),
        new RoleRolePrivileges(),
        new RoleRolePrivileges(),
        new RoleRolePrivileges(),
    ];
    $request->accessToken = 'modi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->customer = 'accusamus';
    $request->fields = 'rem';
    $request->key = 'aperiam';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->roleId = 'enim';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'similique';

    $requestSecurity = new DirectoryRolesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->roles->directoryRolesUpdate($request, $requestSecurity);

    if ($response->role !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
