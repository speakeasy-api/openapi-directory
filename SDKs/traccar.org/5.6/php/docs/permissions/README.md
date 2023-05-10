# permissions

## Overview

User permissions and other object linking

### Available Operations

* [deletePermissions](#deletepermissions) - Unlink an Object from another Object
* [postPermissions](#postpermissions) - Link an Object to another Object

## deletePermissions

Unlink an Object from another Object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\Permission;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Permission();
    $request->attributeId = 230742;
    $request->calendarId = 11714;
    $request->deviceId = 764912;
    $request->driverId = 359978;
    $request->geofenceId = 944124;
    $request->groupId = 729991;
    $request->managedUserId = 749999;
    $request->notificationId = 171629;
    $request->userId = 339404;

    $response = $sdk->permissions->deletePermissions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPermissions

Link an Object to another Object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\Permission;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Permission();
    $request->attributeId = 521037;
    $request->calendarId = 489549;
    $request->deviceId = 54338;
    $request->driverId = 338985;
    $request->geofenceId = 199996;
    $request->groupId = 179490;
    $request->managedUserId = 18521;
    $request->notificationId = 170986;
    $request->userId = 793698;

    $response = $sdk->permissions->postPermissions($request);

    if ($response->permission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
