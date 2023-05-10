# teamdrives

### Available Operations

* [driveTeamdrivesCreate](#driveteamdrivescreate) - Deprecated use drives.create instead.
* [driveTeamdrivesDelete](#driveteamdrivesdelete) - Deprecated use drives.delete instead.
* [driveTeamdrivesGet](#driveteamdrivesget) - Deprecated use drives.get instead.
* [driveTeamdrivesList](#driveteamdriveslist) - Deprecated use drives.list instead.
* [driveTeamdrivesUpdate](#driveteamdrivesupdate) - Deprecated use drives.update instead

## driveTeamdrivesCreate

Deprecated use drives.create instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveTeamdrivesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\TeamDrive;
use \OpenAPI\OpenAPI\Models\Shared\TeamDriveBackgroundImageFile;
use \OpenAPI\OpenAPI\Models\Shared\TeamDriveCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\TeamDriveRestrictions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveTeamdrivesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveTeamdrivesCreateRequest();
    $request->teamDrive = new TeamDrive();
    $request->teamDrive->backgroundImageFile = new TeamDriveBackgroundImageFile();
    $request->teamDrive->backgroundImageFile->id = '87f86bc1-73d6-489e-ae95-26f8d986e881';
    $request->teamDrive->backgroundImageFile->width = 9233.06;
    $request->teamDrive->backgroundImageFile->xCoordinate = 6806.97;
    $request->teamDrive->backgroundImageFile->yCoordinate = 8298.98;
    $request->teamDrive->backgroundImageLink = 'labore';
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
    $request->teamDrive->colorRgb = 'reiciendis';
    $request->teamDrive->createdTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-30T06:42:09.189Z');
    $request->teamDrive->id = '1012563f-94e2-49e9-b3e9-22a57a15be3e';
    $request->teamDrive->kind = 'doloremque';
    $request->teamDrive->name = 'Ms. Melissa Larson';
    $request->teamDrive->orgUnitId = 'qui';
    $request->teamDrive->restrictions = new TeamDriveRestrictions();
    $request->teamDrive->restrictions->adminManagedRestrictions = false;
    $request->teamDrive->restrictions->copyRequiresWriterPermission = false;
    $request->teamDrive->restrictions->domainUsersOnly = false;
    $request->teamDrive->restrictions->sharingFoldersRequiresOrganizerPermission = false;
    $request->teamDrive->restrictions->teamMembersOnly = false;
    $request->teamDrive->themeId = 'cum';
    $request->alt = AltEnum::JSON;
    $request->fields = 'iure';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'ratione';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->requestId = 'distinctio';
    $request->userIp = 'voluptatum';

    $requestSecurity = new DriveTeamdrivesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->teamdrives->driveTeamdrivesCreate($request, $requestSecurity);

    if ($response->teamDrive !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->fields = 'rem';
    $request->key = 'aliquam';
    $request->oauthToken = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellat';
    $request->teamDriveId = 'alias';
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
    $request->fields = 'perspiciatis';
    $request->key = 'nihil';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->teamDriveId = 'alias';
    $request->useDomainAdminAccess = false;
    $request->userIp = 'maiores';

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
    $request->fields = 'reiciendis';
    $request->key = 'dolores';
    $request->oauthToken = 'id';
    $request->pageSize = 327988;
    $request->pageToken = 'dolore';
    $request->prettyPrint = false;
    $request->q = 'dolorum';
    $request->quotaUser = 'nesciunt';
    $request->useDomainAdminAccess = false;
    $request->userIp = 'quae';

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

Deprecated use drives.update instead

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
    $request->teamDrive->backgroundImageFile->id = 'e94764a3-e865-4e79-96f9-251a5a9da660';
    $request->teamDrive->backgroundImageFile->width = 9992.78;
    $request->teamDrive->backgroundImageFile->xCoordinate = 9846.32;
    $request->teamDrive->backgroundImageFile->yCoordinate = 3518.93;
    $request->teamDrive->backgroundImageLink = 'in';
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
    $request->teamDrive->colorRgb = 'nam';
    $request->teamDrive->createdTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-01T20:19:35.908Z');
    $request->teamDrive->id = 'ad4f9efc-1b45-412c-9032-648dc2f61519';
    $request->teamDrive->kind = 'provident';
    $request->teamDrive->name = 'Ed Weimann DVM';
    $request->teamDrive->orgUnitId = 'perspiciatis';
    $request->teamDrive->restrictions = new TeamDriveRestrictions();
    $request->teamDrive->restrictions->adminManagedRestrictions = false;
    $request->teamDrive->restrictions->copyRequiresWriterPermission = false;
    $request->teamDrive->restrictions->domainUsersOnly = false;
    $request->teamDrive->restrictions->sharingFoldersRequiresOrganizerPermission = false;
    $request->teamDrive->restrictions->teamMembersOnly = false;
    $request->teamDrive->themeId = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->fields = 'debitis';
    $request->key = 'aliquid';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->teamDriveId = 'dolorem';
    $request->useDomainAdminAccess = false;
    $request->userIp = 'fugit';

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
