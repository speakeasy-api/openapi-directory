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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ea';
    $request->fields = 'nulla';
    $request->id = 'fa1011a0-91b3-4ec8-b538-62de1a9d14fe';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->profileId = 'voluptates';
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'illo';

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
    $request->accessToken = 'iste';
    $request->alt = AltEnum::JSON;
    $request->callback = 'velit';
    $request->fields = 'ipsa';
    $request->ids = [
        'possimus',
    ];
    $request->key = 'asperiores';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->profileId = 'adipisci';
    $request->quotaUser = 'non';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'velit';

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
