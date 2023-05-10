# permissions

### Available Operations

* [drivePermissionsCreate](#drivepermissionscreate) - Creates a permission for a file or shared drive. For more information on creating permissions, see Share files, folders & drives.
* [drivePermissionsDelete](#drivepermissionsdelete) - Deletes a permission.
* [drivePermissionsGet](#drivepermissionsget) - Gets a permission by ID.
* [drivePermissionsList](#drivepermissionslist) - Lists a file's or shared drive's permissions.
* [drivePermissionsUpdate](#drivepermissionsupdate) - Updates a permission with patch semantics.

## drivePermissionsCreate

Creates a permission for a file or shared drive. For more information on creating permissions, see Share files, folders & drives.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\PermissionInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivePermissionsCreateRequest();
    $request->permissionInput = new PermissionInput();
    $request->permissionInput->allowFileDiscovery = false;
    $request->permissionInput->deleted = false;
    $request->permissionInput->displayName = 'similique';
    $request->permissionInput->domain = 'culpa';
    $request->permissionInput->emailAddress = 'aliquid';
    $request->permissionInput->expirationTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-24T07:54:12.362Z');
    $request->permissionInput->id = 'e674bdb0-4f15-4756-882d-68ea19f1d170';
    $request->permissionInput->kind = 'minima';
    $request->permissionInput->pendingOwner = false;
    $request->permissionInput->photoLink = 'veritatis';
    $request->permissionInput->role = 'consectetur';
    $request->permissionInput->type = 'adipisci';
    $request->permissionInput->view = 'iste';
    $request->alt = AltEnum::JSON;
    $request->emailMessage = 'temporibus';
    $request->enforceSingleParent = false;
    $request->fields = 'accusantium';
    $request->fileId = 'rem';
    $request->key = 'aut';
    $request->moveToNewOwnersRoot = false;
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->sendNotificationEmail = false;
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->transferOwnership = false;
    $request->useDomainAdminAccess = false;
    $request->userIp = 'mollitia';

    $requestSecurity = new DrivePermissionsCreateSecurity();
    $requestSecurity->option1 = new DrivePermissionsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->permissions->drivePermissionsCreate($request, $requestSecurity);

    if ($response->permission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivePermissionsDelete

Deletes a permission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivePermissionsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'ab';
    $request->fileId = 'corrupti';
    $request->key = 'non';
    $request->oauthToken = 'voluptatem';
    $request->permissionId = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->useDomainAdminAccess = false;
    $request->userIp = 'numquam';

    $requestSecurity = new DrivePermissionsDeleteSecurity();
    $requestSecurity->option1 = new DrivePermissionsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->permissions->drivePermissionsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivePermissionsGet

Gets a permission by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsGetSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsGetSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivePermissionsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'impedit';
    $request->fileId = 'explicabo';
    $request->key = 'voluptas';
    $request->oauthToken = 'aut';
    $request->permissionId = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->useDomainAdminAccess = false;
    $request->userIp = 'maiores';

    $requestSecurity = new DrivePermissionsGetSecurity();
    $requestSecurity->option1 = new DrivePermissionsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->permissions->drivePermissionsGet($request, $requestSecurity);

    if ($response->permission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivePermissionsList

Lists a file's or shared drive's permissions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsListSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivePermissionsListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'natus';
    $request->fileId = 'velit';
    $request->includePermissionsForView = 'voluptatibus';
    $request->key = 'voluptas';
    $request->oauthToken = 'asperiores';
    $request->pageSize = 45659;
    $request->pageToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'quaerat';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->useDomainAdminAccess = false;
    $request->userIp = 'consequuntur';

    $requestSecurity = new DrivePermissionsListSecurity();
    $requestSecurity->option1 = new DrivePermissionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->permissions->drivePermissionsList($request, $requestSecurity);

    if ($response->permissionList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivePermissionsUpdate

Updates a permission with patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\PermissionInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivePermissionsUpdateRequest();
    $request->permissionInput = new PermissionInput();
    $request->permissionInput->allowFileDiscovery = false;
    $request->permissionInput->deleted = false;
    $request->permissionInput->displayName = 'repellendus';
    $request->permissionInput->domain = 'officia';
    $request->permissionInput->emailAddress = 'maxime';
    $request->permissionInput->expirationTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-12T09:23:17.883Z');
    $request->permissionInput->id = 'f515cc41-3aa6-43aa-a8d6-7864dbb675fd';
    $request->permissionInput->kind = 'nemo';
    $request->permissionInput->pendingOwner = false;
    $request->permissionInput->photoLink = 'recusandae';
    $request->permissionInput->role = 'aliquid';
    $request->permissionInput->type = 'aperiam';
    $request->permissionInput->view = 'cum';
    $request->alt = AltEnum::JSON;
    $request->fields = 'consectetur';
    $request->fileId = 'in';
    $request->key = 'exercitationem';
    $request->oauthToken = 'earum';
    $request->permissionId = 'facere';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->removeExpiration = false;
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->transferOwnership = false;
    $request->useDomainAdminAccess = false;
    $request->userIp = 'doloribus';

    $requestSecurity = new DrivePermissionsUpdateSecurity();
    $requestSecurity->option1 = new DrivePermissionsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->permissions->drivePermissionsUpdate($request, $requestSecurity);

    if ($response->permission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
