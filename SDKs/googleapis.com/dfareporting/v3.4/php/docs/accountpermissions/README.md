# accountPermissions

### Available Operations

* [dfareportingAccountPermissionsGet](#dfareportingaccountpermissionsget) - Gets one account permission by ID.
* [dfareportingAccountPermissionsList](#dfareportingaccountpermissionslist) - Retrieves the list of account permissions.

## dfareportingAccountPermissionsGet

Gets one account permission by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountPermissionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountPermissionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAccountPermissionsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corporis';
    $request->fields = 'iste';
    $request->id = '6eb10faa-a235-42c5-9559-07aff1a3a2fa';
    $request->key = 'occaecati';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->profileId = 'commodi';
    $request->quotaUser = 'quam';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'velit';

    $requestSecurity = new DfareportingAccountPermissionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accountPermissions->dfareportingAccountPermissionsGet($request, $requestSecurity);

    if ($response->accountPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAccountPermissionsList

Retrieves the list of account permissions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountPermissionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountPermissionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAccountPermissionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vitae';
    $request->fields = 'laborum';
    $request->key = 'animi';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->profileId = 'odit';
    $request->quotaUser = 'quo';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'tenetur';

    $requestSecurity = new DfareportingAccountPermissionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accountPermissions->dfareportingAccountPermissionsList($request, $requestSecurity);

    if ($response->accountPermissionsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
