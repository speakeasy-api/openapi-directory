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
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eveniet';
    $request->fields = 'tenetur';
    $request->id = 'be8baeba-bb79-4453-ae90-351bb9763172';
    $request->key = 'voluptatem';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->profileId = 'molestiae';
    $request->quotaUser = 'odio';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'quis';

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
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eum';
    $request->fields = 'ipsam';
    $request->key = 'fuga';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->profileId = 'unde';
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'ipsam';

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
