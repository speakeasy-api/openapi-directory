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
    $request->accessToken = 'at';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perspiciatis';
    $request->fields = 'molestiae';
    $request->id = 'bdd9c985-e437-434a-9d72-d9edd785be5e';
    $request->key = 'esse';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->profileId = 'hic';
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'minima';

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
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempore';
    $request->fields = 'mollitia';
    $request->ids = [
        'explicabo',
        'laudantium',
    ];
    $request->key = 'sunt';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->profileId = 'aliquam';
    $request->quotaUser = 'modi';
    $request->uploadType = 'eveniet';
    $request->uploadProtocol = 'dolorem';

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
