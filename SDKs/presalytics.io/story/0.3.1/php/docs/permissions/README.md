# permissions

## Overview

Permissions and Authorization

### Available Operations

* [storyIdCollaboratorsUseridPermissiontypeGet](#storyidcollaboratorsuseridpermissiontypeget) - Permissions: Story Authorization for a User
* [storyPermissionTypesGet](#storypermissiontypesget) - Permissions: List Permission Types

## storyIdCollaboratorsUseridPermissiontypeGet

Check whether user have certain types of permissions.  Use http status codes to understand if permission is granted - 204 = Granted, 403 = Forbidden

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdCollaboratorsUseridPermissiontypeGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdCollaboratorsUseridPermissiontypeGetRequest();
    $request->id = '6ae395ef-b9ba-488f-ba66-997074ba4469';
    $request->permissiontype = 'nobis';
    $request->storyCollaboratorUserid = '6e214195-9890-4afa-963e-2516fe4c8b71';

    $response = $sdk->permissions->storyIdCollaboratorsUseridPermissiontypeGet($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyPermissionTypesGet

Returns a list of possible user permission types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->permissions->storyPermissionTypesGet();

    if ($response->permissionTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
