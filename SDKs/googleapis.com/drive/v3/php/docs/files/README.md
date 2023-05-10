# files

### Available Operations

* [driveFilesCopy](#drivefilescopy) - Creates a copy of a file and applies any requested updates with patch semantics. Folders cannot be copied.
* [driveFilesCreate](#drivefilescreate) - Creates a file.
* [driveFilesDelete](#drivefilesdelete) - Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.
* [driveFilesEmptyTrash](#drivefilesemptytrash) - Permanently deletes all trashed files of a user or shared drive.
* [driveFilesExport](#drivefilesexport) - Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
* [driveFilesGenerateIds](#drivefilesgenerateids) - Generates a set of file IDs which can be provided in create or copy requests.
* [driveFilesGet](#drivefilesget) - Gets a file's metadata or content by ID.
* [driveFilesList](#drivefileslist) - Lists or searches files.
* [driveFilesListLabels](#drivefileslistlabels) - Lists the labels on a file.
* [driveFilesModifyLabels](#drivefilesmodifylabels) - Modifies the set of labels on a file.
* [driveFilesUpdate](#drivefilesupdate) - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
* [driveFilesWatch](#drivefileswatch) - Subscribe to changes on a file.

## driveFilesCopy

Creates a copy of a file and applies any requested updates with patch semantics. Folders cannot be copied.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesCopyRequest;
use \OpenAPI\OpenAPI\Models\Shared\FileInput;
use \OpenAPI\OpenAPI\Models\Shared\FileCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\FileContentHints;
use \OpenAPI\OpenAPI\Models\Shared\FileContentHintsThumbnail;
use \OpenAPI\OpenAPI\Models\Shared\ContentRestriction;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\FileImageMediaMetadata;
use \OpenAPI\OpenAPI\Models\Shared\FileImageMediaMetadataLocation;
use \OpenAPI\OpenAPI\Models\Shared\FileLabelInfo;
use \OpenAPI\OpenAPI\Models\Shared\Label;
use \OpenAPI\OpenAPI\Models\Shared\LabelField;
use \OpenAPI\OpenAPI\Models\Shared\FileLinkShareMetadata;
use \OpenAPI\OpenAPI\Models\Shared\PermissionInput;
use \OpenAPI\OpenAPI\Models\Shared\FileShortcutDetails;
use \OpenAPI\OpenAPI\Models\Shared\FileVideoMediaMetadata;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesCopySecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesCopySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesCopySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesCopySecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesCopySecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveFilesCopyRequest();
    $request->fileInput = new FileInput();
    $request->fileInput->appProperties = [
        'ipsum' => 'incidunt',
        'qui' => 'cupiditate',
    ];
    $request->fileInput->capabilities = new FileCapabilities();
    $request->fileInput->capabilities->canAcceptOwnership = false;
    $request->fileInput->capabilities->canAddChildren = false;
    $request->fileInput->capabilities->canAddFolderFromAnotherDrive = false;
    $request->fileInput->capabilities->canAddMyDriveParent = false;
    $request->fileInput->capabilities->canChangeCopyRequiresWriterPermission = false;
    $request->fileInput->capabilities->canChangeSecurityUpdateEnabled = false;
    $request->fileInput->capabilities->canChangeViewersCanCopyContent = false;
    $request->fileInput->capabilities->canComment = false;
    $request->fileInput->capabilities->canCopy = false;
    $request->fileInput->capabilities->canDelete = false;
    $request->fileInput->capabilities->canDeleteChildren = false;
    $request->fileInput->capabilities->canDownload = false;
    $request->fileInput->capabilities->canEdit = false;
    $request->fileInput->capabilities->canListChildren = false;
    $request->fileInput->capabilities->canModifyContent = false;
    $request->fileInput->capabilities->canModifyContentRestriction = false;
    $request->fileInput->capabilities->canModifyLabels = false;
    $request->fileInput->capabilities->canMoveChildrenOutOfDrive = false;
    $request->fileInput->capabilities->canMoveChildrenOutOfTeamDrive = false;
    $request->fileInput->capabilities->canMoveChildrenWithinDrive = false;
    $request->fileInput->capabilities->canMoveChildrenWithinTeamDrive = false;
    $request->fileInput->capabilities->canMoveItemIntoTeamDrive = false;
    $request->fileInput->capabilities->canMoveItemOutOfDrive = false;
    $request->fileInput->capabilities->canMoveItemOutOfTeamDrive = false;
    $request->fileInput->capabilities->canMoveItemWithinDrive = false;
    $request->fileInput->capabilities->canMoveItemWithinTeamDrive = false;
    $request->fileInput->capabilities->canMoveTeamDriveItem = false;
    $request->fileInput->capabilities->canReadDrive = false;
    $request->fileInput->capabilities->canReadLabels = false;
    $request->fileInput->capabilities->canReadRevisions = false;
    $request->fileInput->capabilities->canReadTeamDrive = false;
    $request->fileInput->capabilities->canRemoveChildren = false;
    $request->fileInput->capabilities->canRemoveMyDriveParent = false;
    $request->fileInput->capabilities->canRename = false;
    $request->fileInput->capabilities->canShare = false;
    $request->fileInput->capabilities->canTrash = false;
    $request->fileInput->capabilities->canTrashChildren = false;
    $request->fileInput->capabilities->canUntrash = false;
    $request->fileInput->contentHints = new FileContentHints();
    $request->fileInput->contentHints->indexableText = 'maxime';
    $request->fileInput->contentHints->thumbnail = new FileContentHintsThumbnail();
    $request->fileInput->contentHints->thumbnail->image = 'pariatur';
    $request->fileInput->contentHints->thumbnail->mimeType = 'soluta';
    $request->fileInput->contentRestrictions = [
        new ContentRestriction(),
    ];
    $request->fileInput->copyRequiresWriterPermission = false;
    $request->fileInput->createdTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-19T07:31:04.219Z');
    $request->fileInput->description = 'incidunt';
    $request->fileInput->driveId = 'aspernatur';
    $request->fileInput->explicitlyTrashed = false;
    $request->fileInput->fileExtension = 'dolores';
    $request->fileInput->folderColorRgb = 'distinctio';
    $request->fileInput->fullFileExtension = 'facilis';
    $request->fileInput->hasAugmentedPermissions = false;
    $request->fileInput->hasThumbnail = false;
    $request->fileInput->headRevisionId = 'aliquid';
    $request->fileInput->iconLink = 'quam';
    $request->fileInput->id = '9d232271-5bf0-4cbb-9e31-b8b90f3443a1';
    $request->fileInput->imageMediaMetadata = new FileImageMediaMetadata();
    $request->fileInput->imageMediaMetadata->aperture = 630.38;
    $request->fileInput->imageMediaMetadata->cameraMake = 'aut';
    $request->fileInput->imageMediaMetadata->cameraModel = 'quas';
    $request->fileInput->imageMediaMetadata->colorSpace = 'itaque';
    $request->fileInput->imageMediaMetadata->exposureBias = 92.4;
    $request->fileInput->imageMediaMetadata->exposureMode = 'est';
    $request->fileInput->imageMediaMetadata->exposureTime = 8330.38;
    $request->fileInput->imageMediaMetadata->flashUsed = false;
    $request->fileInput->imageMediaMetadata->focalLength = 7851.53;
    $request->fileInput->imageMediaMetadata->height = 984330;
    $request->fileInput->imageMediaMetadata->isoSpeed = 281730;
    $request->fileInput->imageMediaMetadata->lens = 'facilis';
    $request->fileInput->imageMediaMetadata->location = new FileImageMediaMetadataLocation();
    $request->fileInput->imageMediaMetadata->location->altitude = 5864.1;
    $request->fileInput->imageMediaMetadata->location->latitude = 1816.31;
    $request->fileInput->imageMediaMetadata->location->longitude = 639.55;
    $request->fileInput->imageMediaMetadata->maxApertureValue = 5123.93;
    $request->fileInput->imageMediaMetadata->meteringMode = 'odio';
    $request->fileInput->imageMediaMetadata->rotation = 580447;
    $request->fileInput->imageMediaMetadata->sensor = 'voluptatibus';
    $request->fileInput->imageMediaMetadata->subjectDistance = 787542;
    $request->fileInput->imageMediaMetadata->time = 'vero';
    $request->fileInput->imageMediaMetadata->whiteBalance = 'omnis';
    $request->fileInput->imageMediaMetadata->width = 338159;
    $request->fileInput->isAppAuthorized = false;
    $request->fileInput->kind = 'ipsum';
    $request->fileInput->labelInfo = new FileLabelInfo();
    $request->fileInput->labelInfo->labels = [
        new Label(),
        new Label(),
        new Label(),
        new Label(),
    ];
    $request->fileInput->lastModifyingUser = new User();
    $request->fileInput->lastModifyingUser->displayName = 'voluptate';
    $request->fileInput->lastModifyingUser->emailAddress = 'consectetur';
    $request->fileInput->lastModifyingUser->kind = 'vero';
    $request->fileInput->lastModifyingUser->me = false;
    $request->fileInput->lastModifyingUser->permissionId = 'tenetur';
    $request->fileInput->lastModifyingUser->photoLink = 'dignissimos';
    $request->fileInput->linkShareMetadata = new FileLinkShareMetadata();
    $request->fileInput->linkShareMetadata->securityUpdateEligible = false;
    $request->fileInput->linkShareMetadata->securityUpdateEnabled = false;
    $request->fileInput->md5Checksum = 'hic';
    $request->fileInput->mimeType = 'distinctio';
    $request->fileInput->modifiedByMe = false;
    $request->fileInput->modifiedByMeTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-17T15:43:35.984Z');
    $request->fileInput->modifiedTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-01T18:14:10.863Z');
    $request->fileInput->name = 'Allan Greenholt';
    $request->fileInput->originalFilename = 'sequi';
    $request->fileInput->ownedByMe = false;
    $request->fileInput->owners = [
        new User(),
        new User(),
        new User(),
    ];
    $request->fileInput->parents = [
        'aut',
        'voluptatibus',
        'exercitationem',
        'nulla',
    ];
    $request->fileInput->permissionIds = [
        'porro',
    ];
    $request->fileInput->permissions = [
        new PermissionInput(),
        new PermissionInput(),
        new PermissionInput(),
        new PermissionInput(),
    ];
    $request->fileInput->properties = [
        'iusto' => 'eligendi',
        'ducimus' => 'alias',
        'officia' => 'tempora',
        'ipsam' => 'ea',
    ];
    $request->fileInput->quotaBytesUsed = 'aspernatur';
    $request->fileInput->resourceKey = 'vel';
    $request->fileInput->sha1Checksum = 'possimus';
    $request->fileInput->sha256Checksum = 'magnam';
    $request->fileInput->shared = false;
    $request->fileInput->sharedWithMeTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-07T14:04:49.880Z');
    $request->fileInput->sharingUser = new User();
    $request->fileInput->sharingUser->displayName = 'laudantium';
    $request->fileInput->sharingUser->emailAddress = 'dicta';
    $request->fileInput->sharingUser->kind = 'dolor';
    $request->fileInput->sharingUser->me = false;
    $request->fileInput->sharingUser->permissionId = 'maiores';
    $request->fileInput->sharingUser->photoLink = 'quasi';
    $request->fileInput->shortcutDetails = new FileShortcutDetails();
    $request->fileInput->shortcutDetails->targetId = 'ex';
    $request->fileInput->shortcutDetails->targetMimeType = 'nulla';
    $request->fileInput->shortcutDetails->targetResourceKey = 'excepturi';
    $request->fileInput->size = 'voluptatibus';
    $request->fileInput->spaces = [
        'sapiente',
        'quisquam',
    ];
    $request->fileInput->starred = false;
    $request->fileInput->teamDriveId = 'saepe';
    $request->fileInput->thumbnailLink = 'ea';
    $request->fileInput->thumbnailVersion = 'impedit';
    $request->fileInput->trashed = false;
    $request->fileInput->trashedTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-01T09:38:53.685Z');
    $request->fileInput->trashingUser = new User();
    $request->fileInput->trashingUser->displayName = 'aliquid';
    $request->fileInput->trashingUser->emailAddress = 'inventore';
    $request->fileInput->trashingUser->kind = 'magnam';
    $request->fileInput->trashingUser->me = false;
    $request->fileInput->trashingUser->permissionId = 'ea';
    $request->fileInput->trashingUser->photoLink = 'quo';
    $request->fileInput->version = 'consectetur';
    $request->fileInput->videoMediaMetadata = new FileVideoMediaMetadata();
    $request->fileInput->videoMediaMetadata->durationMillis = 'recusandae';
    $request->fileInput->videoMediaMetadata->height = 132487;
    $request->fileInput->videoMediaMetadata->width = 325310;
    $request->fileInput->viewedByMe = false;
    $request->fileInput->viewedByMeTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-18T04:51:10.466Z');
    $request->fileInput->viewersCanCopyContent = false;
    $request->fileInput->webContentLink = 'libero';
    $request->fileInput->webViewLink = 'aut';
    $request->fileInput->writersCanShare = false;
    $request->alt = AltEnum::JSON;
    $request->enforceSingleParent = false;
    $request->fields = 'aut';
    $request->fileId = 'deleniti';
    $request->ignoreDefaultVisibility = false;
    $request->includeLabels = 'impedit';
    $request->includePermissionsForView = 'aliquam';
    $request->keepRevisionForever = false;
    $request->key = 'fugit';
    $request->oauthToken = 'accusamus';
    $request->ocrLanguage = 'inventore';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->userIp = 'et';

    $requestSecurity = new DriveFilesCopySecurity();
    $requestSecurity->option1 = new DriveFilesCopySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->driveFilesCopy($request, $requestSecurity);

    if ($response->file !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveFilesCreate

Creates a file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesCreateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveFilesCreateRequest();
    $request->requestBody = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->enforceSingleParent = false;
    $request->fields = 'laborum';
    $request->ignoreDefaultVisibility = false;
    $request->includeLabels = 'placeat';
    $request->includePermissionsForView = 'velit';
    $request->keepRevisionForever = false;
    $request->key = 'eum';
    $request->oauthToken = 'autem';
    $request->ocrLanguage = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'quas';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->useContentAsIndexableText = false;
    $request->userIp = 'assumenda';

    $requestSecurity = new DriveFilesCreateSecurity();
    $requestSecurity->option1 = new DriveFilesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->driveFilesCreate($request, $requestSecurity);

    if ($response->file !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveFilesDelete

Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesDeleteSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveFilesDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->enforceSingleParent = false;
    $request->fields = 'nulla';
    $request->fileId = 'voluptas';
    $request->key = 'libero';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->userIp = 'numquam';

    $requestSecurity = new DriveFilesDeleteSecurity();
    $requestSecurity->option1 = new DriveFilesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->driveFilesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveFilesEmptyTrash

Permanently deletes all trashed files of a user or shared drive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesEmptyTrashRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesEmptyTrashSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveFilesEmptyTrashRequest();
    $request->alt = AltEnum::JSON;
    $request->driveId = 'explicabo';
    $request->enforceSingleParent = false;
    $request->fields = 'provident';
    $request->key = 'ipsa';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->userIp = 'odio';

    $requestSecurity = new DriveFilesEmptyTrashSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->driveFilesEmptyTrash($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveFilesExport

Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesExportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesExportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesExportSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesExportSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveFilesExportRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'eius';
    $request->fileId = 'esse';
    $request->key = 'esse';
    $request->mimeType = 'rem';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'reprehenderit';
    $request->userIp = 'quidem';

    $requestSecurity = new DriveFilesExportSecurity();
    $requestSecurity->option1 = new DriveFilesExportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->driveFilesExport($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveFilesGenerateIds

Generates a set of file IDs which can be provided in create or copy requests.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesGenerateIdsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesGenerateIdsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesGenerateIdsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesGenerateIdsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesGenerateIdsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveFilesGenerateIdsRequest();
    $request->alt = AltEnum::JSON;
    $request->count = 852635;
    $request->fields = 'ut';
    $request->key = 'eum';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'assumenda';
    $request->space = 'eos';
    $request->type = 'praesentium';
    $request->userIp = 'quisquam';

    $requestSecurity = new DriveFilesGenerateIdsSecurity();
    $requestSecurity->option1 = new DriveFilesGenerateIdsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->driveFilesGenerateIds($request, $requestSecurity);

    if ($response->generatedIds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveFilesGet

Gets a file's metadata or content by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesGetSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesGetSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesGetSecurityOption7;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveFilesGetRequest();
    $request->acknowledgeAbuse = false;
    $request->alt = AltEnum::JSON;
    $request->fields = 'veritatis';
    $request->fileId = 'ipsa';
    $request->includeLabels = 'id';
    $request->includePermissionsForView = 'quidem';
    $request->key = 'neque';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->userIp = 'quo';

    $requestSecurity = new DriveFilesGetSecurity();
    $requestSecurity->option1 = new DriveFilesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->driveFilesGet($request, $requestSecurity);

    if ($response->file !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveFilesList

Lists or searches files.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListCorpusEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListSecurityOption7;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveFilesListRequest();
    $request->alt = AltEnum::JSON;
    $request->corpora = 'fuga';
    $request->corpus = DriveFilesListCorpusEnum::DOMAIN;
    $request->driveId = 'eos';
    $request->fields = 'voluptas';
    $request->includeItemsFromAllDrives = false;
    $request->includeLabels = 'ab';
    $request->includePermissionsForView = 'cupiditate';
    $request->includeTeamDriveItems = false;
    $request->key = 'consequatur';
    $request->oauthToken = 'tempora';
    $request->orderBy = 'debitis';
    $request->pageSize = 370853;
    $request->pageToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->q = 'sequi';
    $request->quotaUser = 'quo';
    $request->spaces = 'esse';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->teamDriveId = 'recusandae';
    $request->userIp = 'aperiam';

    $requestSecurity = new DriveFilesListSecurity();
    $requestSecurity->option1 = new DriveFilesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->driveFilesList($request, $requestSecurity);

    if ($response->fileList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveFilesListLabels

Lists the labels on a file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListLabelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListLabelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListLabelsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListLabelsSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListLabelsSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListLabelsSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveFilesListLabelsRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'distinctio';
    $request->fileId = 'quod';
    $request->key = 'dignissimos';
    $request->maxResults = 76956;
    $request->oauthToken = 'nihil';
    $request->pageToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->userIp = 'aliquam';

    $requestSecurity = new DriveFilesListLabelsSecurity();
    $requestSecurity->option1 = new DriveFilesListLabelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->driveFilesListLabels($request, $requestSecurity);

    if ($response->labelList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveFilesModifyLabels

Modifies the set of labels on a file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesModifyLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifyLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\LabelModification;
use \OpenAPI\OpenAPI\Models\Shared\LabelFieldModification;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesModifyLabelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesModifyLabelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesModifyLabelsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesModifyLabelsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveFilesModifyLabelsRequest();
    $request->modifyLabelsRequest = new ModifyLabelsRequest();
    $request->modifyLabelsRequest->kind = 'odio';
    $request->modifyLabelsRequest->labelModifications = [
        new LabelModification(),
        new LabelModification(),
        new LabelModification(),
    ];
    $request->alt = AltEnum::JSON;
    $request->fields = 'commodi';
    $request->fileId = 'sapiente';
    $request->key = 'dolores';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->userIp = 'accusantium';

    $requestSecurity = new DriveFilesModifyLabelsSecurity();
    $requestSecurity->option1 = new DriveFilesModifyLabelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->driveFilesModifyLabels($request, $requestSecurity);

    if ($response->modifyLabelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveFilesUpdate

Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesUpdateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesUpdateSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesUpdateSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesUpdateSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveFilesUpdateRequest();
    $request->requestBody = 'porro';
    $request->addParents = 'eum';
    $request->alt = AltEnum::JSON;
    $request->enforceSingleParent = false;
    $request->fields = 'quas';
    $request->fileId = 'praesentium';
    $request->includeLabels = 'consequuntur';
    $request->includePermissionsForView = 'deleniti';
    $request->keepRevisionForever = false;
    $request->key = 'fugit';
    $request->oauthToken = 'fuga';
    $request->ocrLanguage = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->removeParents = 'atque';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->useContentAsIndexableText = false;
    $request->userIp = 'explicabo';

    $requestSecurity = new DriveFilesUpdateSecurity();
    $requestSecurity->option1 = new DriveFilesUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->driveFilesUpdate($request, $requestSecurity);

    if ($response->file !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveFilesWatch

Subscribe to changes on a file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesWatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesWatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesWatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesWatchSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesWatchSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesWatchSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesWatchSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesWatchSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesWatchSecurityOption7;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveFilesWatchRequest();
    $request->channel = new Channel();
    $request->channel->address = '31911 Stuart Neck';
    $request->channel->expiration = 'atque';
    $request->channel->id = '17ee17cb-e61e-46b7-b95b-c0ab3c20c4f3';
    $request->channel->kind = 'esse';
    $request->channel->params = [
        'provident' => 'a',
        'nulla' => 'quas',
        'esse' => 'quasi',
    ];
    $request->channel->payload = false;
    $request->channel->resourceId = 'a';
    $request->channel->resourceUri = 'error';
    $request->channel->token = 'sint';
    $request->channel->type = 'pariatur';
    $request->acknowledgeAbuse = false;
    $request->alt = AltEnum::JSON;
    $request->fields = 'possimus';
    $request->fileId = 'quia';
    $request->includeLabels = 'eveniet';
    $request->includePermissionsForView = 'asperiores';
    $request->key = 'facere';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->userIp = 'quasi';

    $requestSecurity = new DriveFilesWatchSecurity();
    $requestSecurity->option1 = new DriveFilesWatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->driveFilesWatch($request, $requestSecurity);

    if ($response->channel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
