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
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'quidem';
    $request->id = '77b918f0-3139-4845-87e0-e39c7e23ecb0';
    $request->key = 'voluptas';
    $request->oauthToken = 'aperiam';
    $request->prettyPrint = false;
    $request->profileId = 'numquam';
    $request->quotaUser = 'nisi';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'fugit';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'magni';
    $request->alt = AltEnum::JSON;
    $request->callback = 'similique';
    $request->fields = 'dolor';
    $request->ids = [
        'autem',
        'quo',
        'voluptas',
        'quis',
    ];
    $request->key = 'reprehenderit';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->profileId = 'unde';
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'rem';

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
