# permissions

### Available Operations

* [drivePermissionsDelete](#drivepermissionsdelete) - Deletes a permission from a file or shared drive.
* [drivePermissionsGet](#drivepermissionsget) - Gets a permission by ID.
* [drivePermissionsGetIdForEmail](#drivepermissionsgetidforemail) - Returns the permission ID for an email address.
* [drivePermissionsInsert](#drivepermissionsinsert) - Inserts a permission for a file or shared drive.
* [drivePermissionsList](#drivepermissionslist) - Lists a file's or shared drive's permissions.
* [drivePermissionsPatch](#drivepermissionspatch) - Updates a permission using patch semantics.
* [drivePermissionsUpdate](#drivepermissionsupdate) - Updates a permission.

## drivePermissionsDelete

Deletes a permission from a file or shared drive.

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
    $request->fields = 'minima';
    $request->fileId = 'dolore';
    $request->key = 'dolorum';
    $request->oauthToken = 'nesciunt';
    $request->permissionId = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->useDomainAdminAccess = false;
    $request->userIp = 'omnis';

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
    $request->fields = 'quaerat';
    $request->fileId = 'molestiae';
    $request->key = 'ex';
    $request->oauthToken = 'ut';
    $request->permissionId = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'adipisci';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->useDomainAdminAccess = false;
    $request->userIp = 'debitis';

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

## drivePermissionsGetIdForEmail

Returns the permission ID for an email address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsGetIdForEmailRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsGetIdForEmailSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsGetIdForEmailSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsGetIdForEmailSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsGetIdForEmailSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsGetIdForEmailSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsGetIdForEmailSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsGetIdForEmailSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsGetIdForEmailSecurityOption7;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsGetIdForEmailSecurityOption8;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivePermissionsGetIdForEmailRequest();
    $request->alt = AltEnum::JSON;
    $request->email = 'Holly.Hills59@yahoo.com';
    $request->fields = 'quis';
    $request->key = 'eum';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->userIp = 'aspernatur';

    $requestSecurity = new DrivePermissionsGetIdForEmailSecurity();
    $requestSecurity->option1 = new DrivePermissionsGetIdForEmailSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->permissions->drivePermissionsGetIdForEmail($request, $requestSecurity);

    if ($response->permissionId !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivePermissionsInsert

Inserts a permission for a file or shared drive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\PermissionInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivePermissionsInsertRequest();
    $request->permissionInput = new PermissionInput();
    $request->permissionInput->additionalRoles = [
        'quasi',
        'animi',
    ];
    $request->permissionInput->authKey = 'nostrum';
    $request->permissionInput->deleted = false;
    $request->permissionInput->domain = 'mollitia';
    $request->permissionInput->emailAddress = 'provident';
    $request->permissionInput->etag = 'possimus';
    $request->permissionInput->expirationDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-12T23:31:34.509Z');
    $request->permissionInput->id = '60ff57bf-aad4-4f9e-bc1b-4512c1032648';
    $request->permissionInput->kind = 'at';
    $request->permissionInput->name = 'Craig Williamson II';
    $request->permissionInput->pendingOwner = false;
    $request->permissionInput->photoLink = 'beatae';
    $request->permissionInput->role = 'cupiditate';
    $request->permissionInput->selfLink = 'provident';
    $request->permissionInput->type = 'earum';
    $request->permissionInput->value = 'soluta';
    $request->permissionInput->view = 'hic';
    $request->permissionInput->withLink = false;
    $request->alt = AltEnum::JSON;
    $request->emailMessage = 'illum';
    $request->enforceSingleParent = false;
    $request->fields = 'eaque';
    $request->fileId = 'earum';
    $request->key = 'perspiciatis';
    $request->moveToNewOwnersRoot = false;
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->sendNotificationEmails = false;
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->useDomainAdminAccess = false;
    $request->userIp = 'aliquid';

    $requestSecurity = new DrivePermissionsInsertSecurity();
    $requestSecurity->option1 = new DrivePermissionsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->permissions->drivePermissionsInsert($request, $requestSecurity);

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
    $request->fields = 'porro';
    $request->fileId = 'suscipit';
    $request->includePermissionsForView = 'dolorem';
    $request->key = 'fugit';
    $request->maxResults = 764995;
    $request->oauthToken = 'fuga';
    $request->pageToken = 'ratione';
    $request->prettyPrint = false;
    $request->quotaUser = 'animi';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->useDomainAdminAccess = false;
    $request->userIp = 'necessitatibus';

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

## drivePermissionsPatch

Updates a permission using patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\PermissionInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DrivePermissionsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivePermissionsPatchRequest();
    $request->permissionInput = new PermissionInput();
    $request->permissionInput->additionalRoles = [
        'consequatur',
        'quasi',
        'et',
        'ducimus',
    ];
    $request->permissionInput->authKey = 'natus';
    $request->permissionInput->deleted = false;
    $request->permissionInput->domain = 'occaecati';
    $request->permissionInput->emailAddress = 'suscipit';
    $request->permissionInput->etag = 'adipisci';
    $request->permissionInput->expirationDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-31T07:20:14.068Z');
    $request->permissionInput->id = 'fde04771-778f-4f61-9017-476360a15db6';
    $request->permissionInput->kind = 'officia';
    $request->permissionInput->name = 'Jeanne Bahringer';
    $request->permissionInput->pendingOwner = false;
    $request->permissionInput->photoLink = 'iste';
    $request->permissionInput->role = 'id';
    $request->permissionInput->selfLink = 'ab';
    $request->permissionInput->type = 'error';
    $request->permissionInput->value = 'possimus';
    $request->permissionInput->view = 'voluptates';
    $request->permissionInput->withLink = false;
    $request->alt = AltEnum::JSON;
    $request->fields = 'mollitia';
    $request->fileId = 'laborum';
    $request->key = 'libero';
    $request->oauthToken = 'ad';
    $request->permissionId = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->removeExpiration = false;
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->transferOwnership = false;
    $request->useDomainAdminAccess = false;
    $request->userIp = 'vitae';

    $requestSecurity = new DrivePermissionsPatchSecurity();
    $requestSecurity->option1 = new DrivePermissionsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->permissions->drivePermissionsPatch($request, $requestSecurity);

    if ($response->permission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivePermissionsUpdate

Updates a permission.

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
    $request->permissionInput->additionalRoles = [
        'ex',
        'quo',
        'ex',
        'ut',
    ];
    $request->permissionInput->authKey = 'ad';
    $request->permissionInput->deleted = false;
    $request->permissionInput->domain = 'expedita';
    $request->permissionInput->emailAddress = 'voluptatem';
    $request->permissionInput->etag = 'molestias';
    $request->permissionInput->expirationDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-15T05:57:22.639Z');
    $request->permissionInput->id = '1891baa0-fe1a-4de0-88e6-f8c5f350d8cd';
    $request->permissionInput->kind = 'nam';
    $request->permissionInput->name = 'Molly Fadel IV';
    $request->permissionInput->pendingOwner = false;
    $request->permissionInput->photoLink = 'veritatis';
    $request->permissionInput->role = 'tempora';
    $request->permissionInput->selfLink = 'dolor';
    $request->permissionInput->type = 'consequatur';
    $request->permissionInput->value = 'architecto';
    $request->permissionInput->view = 'sit';
    $request->permissionInput->withLink = false;
    $request->alt = AltEnum::JSON;
    $request->fields = 'modi';
    $request->fileId = 'fugit';
    $request->key = 'ab';
    $request->oauthToken = 'laudantium';
    $request->permissionId = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->removeExpiration = false;
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->transferOwnership = false;
    $request->useDomainAdminAccess = false;
    $request->userIp = 'fugiat';

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
