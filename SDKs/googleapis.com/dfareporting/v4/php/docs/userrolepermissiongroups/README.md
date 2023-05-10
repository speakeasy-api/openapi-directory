# userRolePermissionGroups

### Available Operations

* [dfareportingUserRolePermissionGroupsGet](#dfareportinguserrolepermissiongroupsget) - Gets one user role permission group by ID.
* [dfareportingUserRolePermissionGroupsList](#dfareportinguserrolepermissiongroupslist) - Gets a list of all supported user role permission groups.

## dfareportingUserRolePermissionGroupsGet

Gets one user role permission group by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserRolePermissionGroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserRolePermissionGroupsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingUserRolePermissionGroupsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ea';
    $request->fields = 'error';
    $request->id = '2de7b356-2201-4a6a-ab4a-e7b1a5b908d4';
    $request->key = 'repudiandae';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->profileId = 'perferendis';
    $request->quotaUser = 'aliquam';
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'quae';

    $requestSecurity = new DfareportingUserRolePermissionGroupsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userRolePermissionGroups->dfareportingUserRolePermissionGroupsGet($request, $requestSecurity);

    if ($response->userRolePermissionGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingUserRolePermissionGroupsList

Gets a list of all supported user role permission groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserRolePermissionGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserRolePermissionGroupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingUserRolePermissionGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ullam';
    $request->fields = 'temporibus';
    $request->key = 'aliquam';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->profileId = 'deleniti';
    $request->quotaUser = 'dolor';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new DfareportingUserRolePermissionGroupsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userRolePermissionGroups->dfareportingUserRolePermissionGroupsList($request, $requestSecurity);

    if ($response->userRolePermissionGroupsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
