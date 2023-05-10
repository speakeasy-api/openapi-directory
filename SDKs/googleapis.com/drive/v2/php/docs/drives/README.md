# drives

### Available Operations

* [driveDrivesDelete](#drivedrivesdelete) - Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
* [driveDrivesGet](#drivedrivesget) - Gets a shared drive's metadata by ID.
* [driveDrivesHide](#drivedriveshide) - Hides a shared drive from the default view.
* [driveDrivesInsert](#drivedrivesinsert) - Creates a new shared drive.
* [driveDrivesList](#drivedriveslist) - Lists the user's shared drives.
* [driveDrivesUnhide](#drivedrivesunhide) - Restores a shared drive to the default view.
* [driveDrivesUpdate](#drivedrivesupdate) - Updates the metadata for a shared drive.

## driveDrivesDelete

Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveDrivesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveDrivesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveDrivesDeleteRequest();
    $request->allowItemDeletion = false;
    $request->alt = AltEnum::JSON;
    $request->driveId = 'perferendis';
    $request->fields = 'dolores';
    $request->key = 'minus';
    $request->oauthToken = 'quam';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->useDomainAdminAccess = false;
    $request->userIp = 'vero';

    $requestSecurity = new DriveDrivesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->drives->driveDrivesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveDrivesGet

Gets a shared drive's metadata by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveDrivesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveDrivesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveDrivesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveDrivesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveDrivesGetRequest();
    $request->alt = AltEnum::JSON;
    $request->driveId = 'nostrum';
    $request->fields = 'hic';
    $request->key = 'recusandae';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->useDomainAdminAccess = false;
    $request->userIp = 'perspiciatis';

    $requestSecurity = new DriveDrivesGetSecurity();
    $requestSecurity->option1 = new DriveDrivesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->drives->driveDrivesGet($request, $requestSecurity);

    if ($response->drive !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveDrivesHide

Hides a shared drive from the default view.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveDrivesHideRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveDrivesHideSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveDrivesHideRequest();
    $request->alt = AltEnum::JSON;
    $request->driveId = 'voluptatem';
    $request->fields = 'porro';
    $request->key = 'consequuntur';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->userIp = 'eaque';

    $requestSecurity = new DriveDrivesHideSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->drives->driveDrivesHide($request, $requestSecurity);

    if ($response->drive !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveDrivesInsert

Creates a new shared drive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveDrivesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\Drive;
use \OpenAPI\OpenAPI\Models\Shared\DriveBackgroundImageFile;
use \OpenAPI\OpenAPI\Models\Shared\DriveCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\DriveRestrictions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveDrivesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveDrivesInsertRequest();
    $request->drive = new Drive();
    $request->drive->backgroundImageFile = new DriveBackgroundImageFile();
    $request->drive->backgroundImageFile->id = '9b3fe49a-8d9c-4bf4-8633-323f9b77f3a4';
    $request->drive->backgroundImageFile->width = 852.95;
    $request->drive->backgroundImageFile->xCoordinate = 580.29;
    $request->drive->backgroundImageFile->yCoordinate = 564.18;
    $request->drive->backgroundImageLink = 'iure';
    $request->drive->capabilities = new DriveCapabilities();
    $request->drive->capabilities->canAddChildren = false;
    $request->drive->capabilities->canChangeCopyRequiresWriterPermissionRestriction = false;
    $request->drive->capabilities->canChangeDomainUsersOnlyRestriction = false;
    $request->drive->capabilities->canChangeDriveBackground = false;
    $request->drive->capabilities->canChangeDriveMembersOnlyRestriction = false;
    $request->drive->capabilities->canChangeSharingFoldersRequiresOrganizerPermissionRestriction = false;
    $request->drive->capabilities->canComment = false;
    $request->drive->capabilities->canCopy = false;
    $request->drive->capabilities->canDeleteChildren = false;
    $request->drive->capabilities->canDeleteDrive = false;
    $request->drive->capabilities->canDownload = false;
    $request->drive->capabilities->canEdit = false;
    $request->drive->capabilities->canListChildren = false;
    $request->drive->capabilities->canManageMembers = false;
    $request->drive->capabilities->canReadRevisions = false;
    $request->drive->capabilities->canRename = false;
    $request->drive->capabilities->canRenameDrive = false;
    $request->drive->capabilities->canResetDriveRestrictions = false;
    $request->drive->capabilities->canShare = false;
    $request->drive->capabilities->canTrashChildren = false;
    $request->drive->colorRgb = 'odio';
    $request->drive->createdDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-13T10:24:00.119Z');
    $request->drive->hidden = false;
    $request->drive->id = 'bf69280d-1ba7-47a8-9ebf-737ae4203ce5';
    $request->drive->kind = 'saepe';
    $request->drive->name = 'Rosie McKenzie';
    $request->drive->orgUnitId = 'totam';
    $request->drive->restrictions = new DriveRestrictions();
    $request->drive->restrictions->adminManagedRestrictions = false;
    $request->drive->restrictions->copyRequiresWriterPermission = false;
    $request->drive->restrictions->domainUsersOnly = false;
    $request->drive->restrictions->driveMembersOnly = false;
    $request->drive->restrictions->sharingFoldersRequiresOrganizerPermission = false;
    $request->drive->themeId = 'similique';
    $request->alt = AltEnum::JSON;
    $request->fields = 'alias';
    $request->key = 'at';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->requestId = 'vel';
    $request->userIp = 'quod';

    $requestSecurity = new DriveDrivesInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->drives->driveDrivesInsert($request, $requestSecurity);

    if ($response->drive !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveDrivesList

Lists the user's shared drives.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveDrivesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveDrivesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveDrivesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveDrivesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveDrivesListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'officiis';
    $request->key = 'qui';
    $request->maxResults = 679880;
    $request->oauthToken = 'a';
    $request->pageToken = 'esse';
    $request->prettyPrint = false;
    $request->q = 'harum';
    $request->quotaUser = 'iusto';
    $request->useDomainAdminAccess = false;
    $request->userIp = 'ipsum';

    $requestSecurity = new DriveDrivesListSecurity();
    $requestSecurity->option1 = new DriveDrivesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->drives->driveDrivesList($request, $requestSecurity);

    if ($response->driveList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveDrivesUnhide

Restores a shared drive to the default view.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveDrivesUnhideRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveDrivesUnhideSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveDrivesUnhideRequest();
    $request->alt = AltEnum::JSON;
    $request->driveId = 'quisquam';
    $request->fields = 'tenetur';
    $request->key = 'amet';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->userIp = 'numquam';

    $requestSecurity = new DriveDrivesUnhideSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->drives->driveDrivesUnhide($request, $requestSecurity);

    if ($response->drive !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveDrivesUpdate

Updates the metadata for a shared drive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveDrivesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Drive;
use \OpenAPI\OpenAPI\Models\Shared\DriveBackgroundImageFile;
use \OpenAPI\OpenAPI\Models\Shared\DriveCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\DriveRestrictions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveDrivesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveDrivesUpdateRequest();
    $request->drive = new Drive();
    $request->drive->backgroundImageFile = new DriveBackgroundImageFile();
    $request->drive->backgroundImageFile->id = '53f870b3-26b5-4a73-829c-db1a8422bb67';
    $request->drive->backgroundImageFile->width = 5654.21;
    $request->drive->backgroundImageFile->xCoordinate = 8404.29;
    $request->drive->backgroundImageFile->yCoordinate = 1832.8;
    $request->drive->backgroundImageLink = 'neque';
    $request->drive->capabilities = new DriveCapabilities();
    $request->drive->capabilities->canAddChildren = false;
    $request->drive->capabilities->canChangeCopyRequiresWriterPermissionRestriction = false;
    $request->drive->capabilities->canChangeDomainUsersOnlyRestriction = false;
    $request->drive->capabilities->canChangeDriveBackground = false;
    $request->drive->capabilities->canChangeDriveMembersOnlyRestriction = false;
    $request->drive->capabilities->canChangeSharingFoldersRequiresOrganizerPermissionRestriction = false;
    $request->drive->capabilities->canComment = false;
    $request->drive->capabilities->canCopy = false;
    $request->drive->capabilities->canDeleteChildren = false;
    $request->drive->capabilities->canDeleteDrive = false;
    $request->drive->capabilities->canDownload = false;
    $request->drive->capabilities->canEdit = false;
    $request->drive->capabilities->canListChildren = false;
    $request->drive->capabilities->canManageMembers = false;
    $request->drive->capabilities->canReadRevisions = false;
    $request->drive->capabilities->canRename = false;
    $request->drive->capabilities->canRenameDrive = false;
    $request->drive->capabilities->canResetDriveRestrictions = false;
    $request->drive->capabilities->canShare = false;
    $request->drive->capabilities->canTrashChildren = false;
    $request->drive->colorRgb = 'fugit';
    $request->drive->createdDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-06T20:37:36.497Z');
    $request->drive->hidden = false;
    $request->drive->id = '15bf0cbb-1e31-4b8b-90f3-443a1108e0ad';
    $request->drive->kind = 'porro';
    $request->drive->name = 'Alexander Prosacco';
    $request->drive->orgUnitId = 'quae';
    $request->drive->restrictions = new DriveRestrictions();
    $request->drive->restrictions->adminManagedRestrictions = false;
    $request->drive->restrictions->copyRequiresWriterPermission = false;
    $request->drive->restrictions->domainUsersOnly = false;
    $request->drive->restrictions->driveMembersOnly = false;
    $request->drive->restrictions->sharingFoldersRequiresOrganizerPermission = false;
    $request->drive->themeId = 'laudantium';
    $request->alt = AltEnum::JSON;
    $request->driveId = 'odio';
    $request->fields = 'occaecati';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'quisquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->useDomainAdminAccess = false;
    $request->userIp = 'omnis';

    $requestSecurity = new DriveDrivesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->drives->driveDrivesUpdate($request, $requestSecurity);

    if ($response->drive !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
