# permissionAddAndRemovePermissions

### Available Operations

* [deletePermissionAppsAppId](#deletepermissionappsappid) - Removes permission that allows the app to access this user's data
* [getPermissionAppsAppId](#getpermissionappsappid) - Returns permission that allows the app to access this user's data
* [postPermissionAppsAppId](#postpermissionappsappid) - Adds permission to allow the app to access this user's data

## deletePermissionAppsAppId

Removes permission that allows the app to access this user's data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePermissionAppsAppIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePermissionAppsAppIdRequest();
    $request->appId = 'eum';
    $request->userId = 'non';

    $response = $sdk->permissionAddAndRemovePermissions->deletePermissionAppsAppId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPermissionAppsAppId

Returns permission that allows the app to access this user's data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPermissionAppsAppIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPermissionAppsAppIdRequest();
    $request->appId = 'eligendi';
    $request->userId = 'sint';

    $response = $sdk->permissionAddAndRemovePermissions->getPermissionAppsAppId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPermissionAppsAppId

Adds permission to allow the app to access this user's data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPermissionAppsAppIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPermissionAppsAppIdRequest();
    $request->appId = 'aliquid';
    $request->date = 592042;
    $request->ip = 'necessitatibus';
    $request->userId = 'sint';

    $response = $sdk->permissionAddAndRemovePermissions->postPermissionAppsAppId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
