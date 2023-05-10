# accountPermissionGroups

### Available Operations

* [dfareportingAccountPermissionGroupsGet](#dfareportingaccountpermissiongroupsget) - Gets one account permission group by ID.
* [dfareportingAccountPermissionGroupsList](#dfareportingaccountpermissiongroupslist) - Retrieves the list of account permission groups.

## dfareportingAccountPermissionGroupsGet

Gets one account permission group by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountPermissionGroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountPermissionGroupsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAccountPermissionGroupsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'temporibus';
    $request->fields = 'ab';
    $request->id = '51a05dfc-2ddf-47cc-b8ca-1ba928fc8167';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->profileId = 'impedit';
    $request->quotaUser = 'cum';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new DfareportingAccountPermissionGroupsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accountPermissionGroups->dfareportingAccountPermissionGroupsGet($request, $requestSecurity);

    if ($response->accountPermissionGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAccountPermissionGroupsList

Retrieves the list of account permission groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountPermissionGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountPermissionGroupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAccountPermissionGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ad';
    $request->fields = 'natus';
    $request->key = 'sed';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->profileId = 'dolor';
    $request->quotaUser = 'natus';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new DfareportingAccountPermissionGroupsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accountPermissionGroups->dfareportingAccountPermissionGroupsList($request, $requestSecurity);

    if ($response->accountPermissionGroupsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
