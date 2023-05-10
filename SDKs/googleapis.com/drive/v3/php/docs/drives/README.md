# drives

### Available Operations

* [driveDrivesCreate](#drivedrivescreate) - Creates a shared drive.
* [driveDrivesDelete](#drivedrivesdelete) - Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
* [driveDrivesGet](#drivedrivesget) - Gets a shared drive's metadata by ID.
* [driveDrivesHide](#drivedriveshide) - Hides a shared drive from the default view.
* [driveDrivesList](#drivedriveslist) - Lists the user's shared drives.
* [driveDrivesUnhide](#drivedrivesunhide) - Restores a shared drive to the default view.
* [driveDrivesUpdate](#drivedrivesupdate) - Updates the metadata for a shared drive.

## driveDrivesCreate

Creates a shared drive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveDrivesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Drive;
use \OpenAPI\OpenAPI\Models\Shared\DriveBackgroundImageFile;
use \OpenAPI\OpenAPI\Models\Shared\DriveCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\DriveRestrictions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveDrivesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveDrivesCreateRequest();
    $request->drive = new Drive();
    $request->drive->backgroundImageFile = new DriveBackgroundImageFile();
    $request->drive->backgroundImageFile->id = 'a563e251-6fe4-4c8b-b11e-5b7fd2ed0289';
    $request->drive->backgroundImageFile->width = 1668.47;
    $request->drive->backgroundImageFile->xCoordinate = 1238.2;
    $request->drive->backgroundImageFile->yCoordinate = 7790.51;
    $request->drive->backgroundImageLink = 'illum';
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
    $request->drive->colorRgb = 'pariatur';
    $request->drive->createdTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-07T12:29:38.109Z');
    $request->drive->hidden = false;
    $request->drive->id = '92601fb5-76b0-4d5f-8d30-c5fbb2587053';
    $request->drive->kind = 'eos';
    $request->drive->name = 'Jacqueline Schimmel';
    $request->drive->orgUnitId = 'vero';
    $request->drive->restrictions = new DriveRestrictions();
    $request->drive->restrictions->adminManagedRestrictions = false;
    $request->drive->restrictions->copyRequiresWriterPermission = false;
    $request->drive->restrictions->domainUsersOnly = false;
    $request->drive->restrictions->driveMembersOnly = false;
    $request->drive->restrictions->sharingFoldersRequiresOrganizerPermission = false;
    $request->drive->themeId = 'nostrum';
    $request->alt = AltEnum::JSON;
    $request->fields = 'hic';
    $request->key = 'recusandae';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->requestId = 'perspiciatis';
    $request->userIp = 'voluptatem';

    $requestSecurity = new DriveDrivesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->drives->driveDrivesCreate($request, $requestSecurity);

    if ($response->drive !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->driveId = 'porro';
    $request->fields = 'consequuntur';
    $request->key = 'blanditiis';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->useDomainAdminAccess = false;
    $request->userIp = 'occaecati';

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
    $request->driveId = 'rerum';
    $request->fields = 'adipisci';
    $request->key = 'asperiores';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->useDomainAdminAccess = false;
    $request->userIp = 'iste';

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
    $request->driveId = 'dolorum';
    $request->fields = 'deleniti';
    $request->key = 'pariatur';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->userIp = 'libero';

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
    $request->fields = 'delectus';
    $request->key = 'quaerat';
    $request->oauthToken = 'quos';
    $request->pageSize = 398221;
    $request->pageToken = 'dolorem';
    $request->prettyPrint = false;
    $request->q = 'dolorem';
    $request->quotaUser = 'dolor';
    $request->useDomainAdminAccess = false;
    $request->userIp = 'qui';

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
    $request->driveId = 'ipsum';
    $request->fields = 'hic';
    $request->key = 'excepturi';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->userIp = 'dignissimos';

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
    $request->drive->backgroundImageFile->id = 'f3a41006-74eb-4f69-a80d-1ba77a89ebf7';
    $request->drive->backgroundImageFile->width = 2168.97;
    $request->drive->backgroundImageFile->xCoordinate = 4560.15;
    $request->drive->backgroundImageFile->yCoordinate = 6630.78;
    $request->drive->backgroundImageLink = 'saepe';
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
    $request->drive->colorRgb = 'eius';
    $request->drive->createdTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-24T11:05:48.936Z');
    $request->drive->hidden = false;
    $request->drive->id = '3ce5e6a9-5d8a-40d4-86ce-2af7a73cf3be';
    $request->drive->kind = 'numquam';
    $request->drive->name = 'Florence Will';
    $request->drive->orgUnitId = 'sit';
    $request->drive->restrictions = new DriveRestrictions();
    $request->drive->restrictions->adminManagedRestrictions = false;
    $request->drive->restrictions->copyRequiresWriterPermission = false;
    $request->drive->restrictions->domainUsersOnly = false;
    $request->drive->restrictions->driveMembersOnly = false;
    $request->drive->restrictions->sharingFoldersRequiresOrganizerPermission = false;
    $request->drive->themeId = 'expedita';
    $request->alt = AltEnum::JSON;
    $request->driveId = 'neque';
    $request->fields = 'sed';
    $request->key = 'vel';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->useDomainAdminAccess = false;
    $request->userIp = 'deserunt';

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
