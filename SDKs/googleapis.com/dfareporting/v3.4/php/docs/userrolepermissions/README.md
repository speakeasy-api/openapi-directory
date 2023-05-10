# userRolePermissions

### Available Operations

* [dfareportingUserRolePermissionsGet](#dfareportinguserrolepermissionsget) - Gets one user role permission by ID.
* [dfareportingUserRolePermissionsList](#dfareportinguserrolepermissionslist) - Gets a list of user role permissions, possibly filtered.

## dfareportingUserRolePermissionsGet

Gets one user role permission by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserRolePermissionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserRolePermissionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingUserRolePermissionsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellat';
    $request->fields = 'accusantium';
    $request->id = '1c0d361f-ed8d-4c5e-bfb4-53e9089e871f';
    $request->key = 'nulla';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->profileId = 'ut';
    $request->quotaUser = 'at';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'perspiciatis';

    $requestSecurity = new DfareportingUserRolePermissionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userRolePermissions->dfareportingUserRolePermissionsGet($request, $requestSecurity);

    if ($response->userRolePermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingUserRolePermissionsList

Gets a list of user role permissions, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserRolePermissionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingUserRolePermissionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingUserRolePermissionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->fields = 'perspiciatis';
    $request->ids = [
        'molestias',
        'corrupti',
        'corporis',
        'repudiandae',
    ];
    $request->key = 'incidunt';
    $request->oauthToken = 'neque';
    $request->prettyPrint = false;
    $request->profileId = 'iusto';
    $request->quotaUser = 'adipisci';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new DfareportingUserRolePermissionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userRolePermissions->dfareportingUserRolePermissionsList($request, $requestSecurity);

    if ($response->userRolePermissionsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
