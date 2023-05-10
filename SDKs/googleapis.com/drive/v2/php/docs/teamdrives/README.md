# teamdrives

### Available Operations

* [driveTeamdrivesDelete](#driveteamdrivesdelete) - Deprecated use drives.delete instead.
* [driveTeamdrivesGet](#driveteamdrivesget) - Deprecated use drives.get instead.
* [driveTeamdrivesInsert](#driveteamdrivesinsert) - Deprecated use drives.insert instead.
* [driveTeamdrivesList](#driveteamdriveslist) - Deprecated use drives.list instead.
* [driveTeamdrivesUpdate](#driveteamdrivesupdate) - Deprecated use drives.update instead.

## driveTeamdrivesDelete

Deprecated use drives.delete instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveTeamdrivesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveTeamdrivesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveTeamdrivesDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'quibusdam';
    $request->key = 'odio';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->teamDriveId = 'explicabo';
    $request->userIp = 'corporis';

    $requestSecurity = new DriveTeamdrivesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->teamdrives->driveTeamdrivesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveTeamdrivesGet

Deprecated use drives.get instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveTeamdrivesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveTeamdrivesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveTeamdrivesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveTeamdrivesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveTeamdrivesGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'error';
    $request->key = 'earum';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->teamDriveId = 'similique';
    $request->useDomainAdminAccess = false;
    $request->userIp = 'ut';

    $requestSecurity = new DriveTeamdrivesGetSecurity();
    $requestSecurity->option1 = new DriveTeamdrivesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->teamdrives->driveTeamdrivesGet($request, $requestSecurity);

    if ($response->teamDrive !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveTeamdrivesInsert

Deprecated use drives.insert instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveTeamdrivesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\TeamDrive;
use \OpenAPI\OpenAPI\Models\Shared\TeamDriveBackgroundImageFile;
use \OpenAPI\OpenAPI\Models\Shared\TeamDriveCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\TeamDriveRestrictions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveTeamdrivesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveTeamdrivesInsertRequest();
    $request->teamDrive = new TeamDrive();
    $request->teamDrive->backgroundImageFile = new TeamDriveBackgroundImageFile();
    $request->teamDrive->backgroundImageFile->id = 'b5197f92-443d-4a7c-a52b-895c537c6454';
    $request->teamDrive->backgroundImageFile->width = 9149.71;
    $request->teamDrive->backgroundImageFile->xCoordinate = 9781.73;
    $request->teamDrive->backgroundImageFile->yCoordinate = 7317.44;
    $request->teamDrive->backgroundImageLink = 'aperiam';
    $request->teamDrive->capabilities = new TeamDriveCapabilities();
    $request->teamDrive->capabilities->canAddChildren = false;
    $request->teamDrive->capabilities->canChangeCopyRequiresWriterPermissionRestriction = false;
    $request->teamDrive->capabilities->canChangeDomainUsersOnlyRestriction = false;
    $request->teamDrive->capabilities->canChangeSharingFoldersRequiresOrganizerPermissionRestriction = false;
    $request->teamDrive->capabilities->canChangeTeamDriveBackground = false;
    $request->teamDrive->capabilities->canChangeTeamMembersOnlyRestriction = false;
    $request->teamDrive->capabilities->canComment = false;
    $request->teamDrive->capabilities->canCopy = false;
    $request->teamDrive->capabilities->canDeleteChildren = false;
    $request->teamDrive->capabilities->canDeleteTeamDrive = false;
    $request->teamDrive->capabilities->canDownload = false;
    $request->teamDrive->capabilities->canEdit = false;
    $request->teamDrive->capabilities->canListChildren = false;
    $request->teamDrive->capabilities->canManageMembers = false;
    $request->teamDrive->capabilities->canReadRevisions = false;
    $request->teamDrive->capabilities->canRemoveChildren = false;
    $request->teamDrive->capabilities->canRename = false;
    $request->teamDrive->capabilities->canRenameTeamDrive = false;
    $request->teamDrive->capabilities->canResetTeamDriveRestrictions = false;
    $request->teamDrive->capabilities->canShare = false;
    $request->teamDrive->capabilities->canTrashChildren = false;
    $request->teamDrive->colorRgb = 'libero';
    $request->teamDrive->createdDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-17T04:21:28.778Z');
    $request->teamDrive->id = '896c3ca5-acfb-4e2f-9570-7577929177de';
    $request->teamDrive->kind = 'similique';
    $request->teamDrive->name = 'Marc Hahn';
    $request->teamDrive->orgUnitId = 'placeat';
    $request->teamDrive->restrictions = new TeamDriveRestrictions();
    $request->teamDrive->restrictions->adminManagedRestrictions = false;
    $request->teamDrive->restrictions->copyRequiresWriterPermission = false;
    $request->teamDrive->restrictions->domainUsersOnly = false;
    $request->teamDrive->restrictions->sharingFoldersRequiresOrganizerPermission = false;
    $request->teamDrive->restrictions->teamMembersOnly = false;
    $request->teamDrive->themeId = 'quidem';
    $request->alt = AltEnum::JSON;
    $request->fields = 'exercitationem';
    $request->key = 'quam';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->requestId = 'ipsa';
    $request->userIp = 'sint';

    $requestSecurity = new DriveTeamdrivesInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->teamdrives->driveTeamdrivesInsert($request, $requestSecurity);

    if ($response->teamDrive !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveTeamdrivesList

Deprecated use drives.list instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveTeamdrivesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveTeamdrivesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveTeamdrivesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveTeamdrivesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveTeamdrivesListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'vero';
    $request->key = 'sequi';
    $request->maxResults = 918547;
    $request->oauthToken = 'cum';
    $request->pageToken = 'dicta';
    $request->prettyPrint = false;
    $request->q = 'earum';
    $request->quotaUser = 'veniam';
    $request->useDomainAdminAccess = false;
    $request->userIp = 'animi';

    $requestSecurity = new DriveTeamdrivesListSecurity();
    $requestSecurity->option1 = new DriveTeamdrivesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->teamdrives->driveTeamdrivesList($request, $requestSecurity);

    if ($response->teamDriveList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveTeamdrivesUpdate

Deprecated use drives.update instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveTeamdrivesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\TeamDrive;
use \OpenAPI\OpenAPI\Models\Shared\TeamDriveBackgroundImageFile;
use \OpenAPI\OpenAPI\Models\Shared\TeamDriveCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\TeamDriveRestrictions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveTeamdrivesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveTeamdrivesUpdateRequest();
    $request->teamDrive = new TeamDrive();
    $request->teamDrive->backgroundImageFile = new TeamDriveBackgroundImageFile();
    $request->teamDrive->backgroundImageFile->id = '2b12eb07-f116-4db9-9545-fc95fa88970e';
    $request->teamDrive->backgroundImageFile->width = 1040.78;
    $request->teamDrive->backgroundImageFile->xCoordinate = 5546.45;
    $request->teamDrive->backgroundImageFile->yCoordinate = 6144.38;
    $request->teamDrive->backgroundImageLink = 'assumenda';
    $request->teamDrive->capabilities = new TeamDriveCapabilities();
    $request->teamDrive->capabilities->canAddChildren = false;
    $request->teamDrive->capabilities->canChangeCopyRequiresWriterPermissionRestriction = false;
    $request->teamDrive->capabilities->canChangeDomainUsersOnlyRestriction = false;
    $request->teamDrive->capabilities->canChangeSharingFoldersRequiresOrganizerPermissionRestriction = false;
    $request->teamDrive->capabilities->canChangeTeamDriveBackground = false;
    $request->teamDrive->capabilities->canChangeTeamMembersOnlyRestriction = false;
    $request->teamDrive->capabilities->canComment = false;
    $request->teamDrive->capabilities->canCopy = false;
    $request->teamDrive->capabilities->canDeleteChildren = false;
    $request->teamDrive->capabilities->canDeleteTeamDrive = false;
    $request->teamDrive->capabilities->canDownload = false;
    $request->teamDrive->capabilities->canEdit = false;
    $request->teamDrive->capabilities->canListChildren = false;
    $request->teamDrive->capabilities->canManageMembers = false;
    $request->teamDrive->capabilities->canReadRevisions = false;
    $request->teamDrive->capabilities->canRemoveChildren = false;
    $request->teamDrive->capabilities->canRename = false;
    $request->teamDrive->capabilities->canRenameTeamDrive = false;
    $request->teamDrive->capabilities->canResetTeamDriveRestrictions = false;
    $request->teamDrive->capabilities->canShare = false;
    $request->teamDrive->capabilities->canTrashChildren = false;
    $request->teamDrive->colorRgb = 'tempore';
    $request->teamDrive->createdDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-06T20:33:05.731Z');
    $request->teamDrive->id = '0fcb33ea-055b-4197-8d44-e2f52d82d351';
    $request->teamDrive->kind = 'velit';
    $request->teamDrive->name = 'Randolph Huels';
    $request->teamDrive->orgUnitId = 'blanditiis';
    $request->teamDrive->restrictions = new TeamDriveRestrictions();
    $request->teamDrive->restrictions->adminManagedRestrictions = false;
    $request->teamDrive->restrictions->copyRequiresWriterPermission = false;
    $request->teamDrive->restrictions->domainUsersOnly = false;
    $request->teamDrive->restrictions->sharingFoldersRequiresOrganizerPermission = false;
    $request->teamDrive->restrictions->teamMembersOnly = false;
    $request->teamDrive->themeId = 'distinctio';
    $request->alt = AltEnum::JSON;
    $request->fields = 'nisi';
    $request->key = 'quis';
    $request->oauthToken = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->teamDriveId = 'minus';
    $request->useDomainAdminAccess = false;
    $request->userIp = 'facere';

    $requestSecurity = new DriveTeamdrivesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->teamdrives->driveTeamdrivesUpdate($request, $requestSecurity);

    if ($response->teamDrive !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
