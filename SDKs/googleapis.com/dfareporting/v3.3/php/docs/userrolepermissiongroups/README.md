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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptates';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quo';
    $request->fields = 'incidunt';
    $request->id = 'ae640642-7265-47b0-9a07-c08fd3921c25';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->profileId = 'ratione';
    $request->quotaUser = 'consequatur';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'eum';

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
    $request->accessToken = 'sit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'mollitia';
    $request->key = 'sequi';
    $request->oauthToken = 'officiis';
    $request->prettyPrint = false;
    $request->profileId = 'reiciendis';
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'laboriosam';

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
