# permission

### Available Operations

* [deletePermission](#deletepermission) - Deletes the permission object
* [deletePermissionTag](#deletepermissiontag) - Delete Permission tag
* [getAllPermissionTags](#getallpermissiontags) - Get all Permission tags
* [getAllPermissionsWithTag](#getallpermissionswithtag) - Get links to tagged Permissions
* [getPermission](#getpermission) - Gets the permission object
* [getPermissions](#getpermissions) - Gets all permission objects
* [getTagFromPermission](#gettagfrompermission) - Get Permission tag
* [getTagsFromPermission](#gettagsfrompermission) - Get tags from Permission
* [getUserPermissions](#getuserpermissions) - Gets the user permissions
* [getUsersFromPermission](#getusersfrompermission) - Gets the users with the specified permission
* [patchPermission](#patchpermission) - Patch permission object
* [postPermission](#postpermission) - Post permisson object
* [putPermission](#putpermission) - Puts permisson object
* [putPermissionTag](#putpermissiontag) - Insert Permission tag

## deletePermission

Deletes the permission object from the application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePermissionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePermissionRequest();
    $request->apiVersion = 'corrupti';
    $request->authorization = 'aperiam';
    $request->permissionId = 'sint';

    $response = $sdk->permission->deletePermission($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePermissionTag

Deletes a tag from the Permission

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePermissionTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePermissionTagRequest();
    $request->apiVersion = 'accusamus';
    $request->authorization = 'eos';
    $request->permissionId = 'totam';
    $request->tagId = 'dicta';

    $response = $sdk->permission->deletePermissionTag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllPermissionTags

Get all tags from all Permissions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllPermissionTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllPermissionTagsRequest();
    $request->apiVersion = 'voluptatem';
    $request->authorization = 'velit';

    $response = $sdk->permission->getAllPermissionTags($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllPermissionsWithTag

Gets the Permissions with the specified tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllPermissionsWithTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllPermissionsWithTagRequest();
    $request->apiVersion = 'dolor';
    $request->authorization = 'sunt';
    $request->tagId = 'a';

    $response = $sdk->permission->getAllPermissionsWithTag($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPermission

Gets the permission object for application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPermissionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPermissionRequest();
    $request->apiVersion = 'dolor';
    $request->authorization = 'occaecati';
    $request->permissionId = 'atque';

    $response = $sdk->permission->getPermission($request);

    if ($response->permission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPermissions

Gets all permission objects for application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPermissionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPermissionsRequest();
    $request->apiVersion = 'beatae';
    $request->authorization = 'at';

    $response = $sdk->permission->getPermissions($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagFromPermission

Gets a tag from the Permission

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagFromPermissionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagFromPermissionRequest();
    $request->apiVersion = 'labore';
    $request->authorization = 'minus';
    $request->permissionId = 'esse';
    $request->tagId = 'voluptatem';

    $response = $sdk->permission->getTagFromPermission($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsFromPermission

Gets all tags from the Permission

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsFromPermissionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsFromPermissionRequest();
    $request->apiVersion = 'perferendis';
    $request->authorization = 'rerum';
    $request->permissionId = 'ea';

    $response = $sdk->permission->getTagsFromPermission($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserPermissions

Gets the user permission instances

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserPermissionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserPermissionsRequest();
    $request->apiVersion = 'aperiam';
    $request->authorization = 'dignissimos';
    $request->userId = 'repellat';

    $response = $sdk->permission->getUserPermissions($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersFromPermission

Gets the users with the specified permission

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersFromPermissionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersFromPermissionRequest();
    $request->apiVersion = 'velit';
    $request->authorization = 'porro';
    $request->permissionId = 'provident';

    $response = $sdk->permission->getUsersFromPermission($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchPermission

Patch the permission object at the specified resource location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchPermissionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchPermissionRequest();
    $request->apiVersion = 'consectetur';
    $request->authorization = 'eligendi';
    $request->permissionId = 'dignissimos';

    $response = $sdk->permission->patchPermission($request);

    if ($response->permission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPermission

Post the new permission object into the application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostPermissionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPermissionRequest();
    $request->apiVersion = 'consectetur';
    $request->authorization = 'soluta';

    $response = $sdk->permission->postPermission($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPermission

Puts the permission object into the specified resource location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutPermissionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPermissionRequest();
    $request->apiVersion = 'natus';
    $request->authorization = 'temporibus';
    $request->permissionId = 'officia';

    $response = $sdk->permission->putPermission($request);

    if ($response->permission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPermissionTag

Inserts a tag on the Permission

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutPermissionTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPermissionTagRequest();
    $request->apiVersion = 'amet';
    $request->authorization = 'tenetur';
    $request->permissionId = 'aspernatur';
    $request->tagId = 'quo';

    $response = $sdk->permission->putPermissionTag($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
