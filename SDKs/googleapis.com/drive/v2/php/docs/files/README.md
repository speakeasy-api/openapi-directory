# files

### Available Operations

* [driveFilesCopy](#drivefilescopy) - Creates a copy of the specified file. Folders cannot be copied.
* [driveFilesDelete](#drivefilesdelete) - Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer on the parent for shared drive files.
* [driveFilesEmptyTrash](#drivefilesemptytrash) - Permanently deletes all trashed files of a user or shared drive.
* [driveFilesExport](#drivefilesexport) - Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
* [driveFilesGenerateIds](#drivefilesgenerateids) - Generates a set of file IDs which can be provided in insert or copy requests.
* [driveFilesGet](#drivefilesget) - Gets a file's metadata or content by ID.
* [driveFilesInsert](#drivefilesinsert) - Insert a new file.
* [driveFilesList](#drivefileslist) - Lists the user's files.
* [driveFilesListLabels](#drivefileslistlabels) - Lists the labels on a file.
* [driveFilesModifyLabels](#drivefilesmodifylabels) - Modifies the set of labels on a file.
* [driveFilesPatch](#drivefilespatch) - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
* [driveFilesTouch](#drivefilestouch) - Set the file's updated time to the current server time.
* [driveFilesTrash](#drivefilestrash) - Moves a file to the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.
* [driveFilesUntrash](#drivefilesuntrash) - Restores a file from the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may untrash a file.
* [driveFilesUpdate](#drivefilesupdate) - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as modifiedDate. This method supports patch semantics.
* [driveFilesWatch](#drivefileswatch) - Subscribe to changes on a file.

## driveFilesCopy

Creates a copy of the specified file. Folders cannot be copied.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesCopyRequest;
use \OpenAPI\OpenAPI\Models\Shared\FileInput;
use \OpenAPI\OpenAPI\Models\Shared\FileCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\ContentRestriction;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\UserPicture;
use \OpenAPI\OpenAPI\Models\Shared\FileImageMediaMetadata;
use \OpenAPI\OpenAPI\Models\Shared\FileImageMediaMetadataLocation;
use \OpenAPI\OpenAPI\Models\Shared\FileIndexableText;
use \OpenAPI\OpenAPI\Models\Shared\FileLabelInfo;
use \OpenAPI\OpenAPI\Models\Shared\Label;
use \OpenAPI\OpenAPI\Models\Shared\LabelField;
use \OpenAPI\OpenAPI\Models\Shared\FileLabels;
use \OpenAPI\OpenAPI\Models\Shared\FileLinkShareMetadata;
use \OpenAPI\OpenAPI\Models\Shared\ParentReference;
use \OpenAPI\OpenAPI\Models\Shared\PermissionInput;
use \OpenAPI\OpenAPI\Models\Shared\Property;
use \OpenAPI\OpenAPI\Models\Shared\FileShortcutDetails;
use \OpenAPI\OpenAPI\Models\Shared\FileThumbnail;
use \OpenAPI\OpenAPI\Models\Shared\FileVideoMediaMetadata;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesCopyVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesCopySecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesCopySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesCopySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesCopySecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesCopySecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesCopySecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveFilesCopyRequest();
    $request->fileInput = new FileInput();
    $request->fileInput->alternateLink = 'quis';
    $request->fileInput->appDataContents = false;
    $request->fileInput->canComment = false;
    $request->fileInput->canReadRevisions = false;
    $request->fileInput->capabilities = new FileCapabilities();
    $request->fileInput->capabilities->canAcceptOwnership = false;
    $request->fileInput->capabilities->canAddChildren = false;
    $request->fileInput->capabilities->canAddFolderFromAnotherDrive = false;
    $request->fileInput->capabilities->canAddMyDriveParent = false;
    $request->fileInput->capabilities->canChangeCopyRequiresWriterPermission = false;
    $request->fileInput->capabilities->canChangeRestrictedDownload = false;
    $request->fileInput->capabilities->canChangeSecurityUpdateEnabled = false;
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
    $request->fileInput->contentRestrictions = [
        new ContentRestriction(),
    ];
    $request->fileInput->copyRequiresWriterPermission = false;
    $request->fileInput->copyable = false;
    $request->fileInput->createdDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-20T14:09:47.998Z');
    $request->fileInput->defaultOpenWithLink = 'consectetur';
    $request->fileInput->description = 'vero';
    $request->fileInput->downloadUrl = 'tenetur';
    $request->fileInput->driveId = 'dignissimos';
    $request->fileInput->editable = false;
    $request->fileInput->embedLink = 'hic';
    $request->fileInput->etag = 'distinctio';
    $request->fileInput->explicitlyTrashed = false;
    $request->fileInput->fileExtension = 'quod';
    $request->fileInput->fileSize = 'odio';
    $request->fileInput->folderColorRgb = 'similique';
    $request->fileInput->fullFileExtension = 'facilis';
    $request->fileInput->hasAugmentedPermissions = false;
    $request->fileInput->hasThumbnail = false;
    $request->fileInput->headRevisionId = 'vero';
    $request->fileInput->iconLink = 'ducimus';
    $request->fileInput->id = '4dd39c0f-5d2c-4ff7-870a-45626d436813';
    $request->fileInput->imageMediaMetadata = new FileImageMediaMetadata();
    $request->fileInput->imageMediaMetadata->aperture = 9807;
    $request->fileInput->imageMediaMetadata->cameraMake = 'quasi';
    $request->fileInput->imageMediaMetadata->cameraModel = 'ex';
    $request->fileInput->imageMediaMetadata->colorSpace = 'nulla';
    $request->fileInput->imageMediaMetadata->date = 'excepturi';
    $request->fileInput->imageMediaMetadata->exposureBias = 9729.2;
    $request->fileInput->imageMediaMetadata->exposureMode = 'nostrum';
    $request->fileInput->imageMediaMetadata->exposureTime = 9608.35;
    $request->fileInput->imageMediaMetadata->flashUsed = false;
    $request->fileInput->imageMediaMetadata->focalLength = 7888.73;
    $request->fileInput->imageMediaMetadata->height = 906556;
    $request->fileInput->imageMediaMetadata->isoSpeed = 411372;
    $request->fileInput->imageMediaMetadata->lens = 'impedit';
    $request->fileInput->imageMediaMetadata->location = new FileImageMediaMetadataLocation();
    $request->fileInput->imageMediaMetadata->location->altitude = 3592.71;
    $request->fileInput->imageMediaMetadata->location->latitude = 3331.45;
    $request->fileInput->imageMediaMetadata->location->longitude = 3994.99;
    $request->fileInput->imageMediaMetadata->maxApertureValue = 811.01;
    $request->fileInput->imageMediaMetadata->meteringMode = 'magnam';
    $request->fileInput->imageMediaMetadata->rotation = 407241;
    $request->fileInput->imageMediaMetadata->sensor = 'quo';
    $request->fileInput->imageMediaMetadata->subjectDistance = 232234;
    $request->fileInput->imageMediaMetadata->whiteBalance = 'recusandae';
    $request->fileInput->imageMediaMetadata->width = 132487;
    $request->fileInput->indexableText = new FileIndexableText();
    $request->fileInput->indexableText->text = 'minima';
    $request->fileInput->isAppAuthorized = false;
    $request->fileInput->kind = 'eaque';
    $request->fileInput->labelInfo = new FileLabelInfo();
    $request->fileInput->labelInfo->labels = [
        new Label(),
        new Label(),
        new Label(),
        new Label(),
    ];
    $request->fileInput->labels = new FileLabels();
    $request->fileInput->labels->hidden = false;
    $request->fileInput->labels->modified = false;
    $request->fileInput->labels->restricted = false;
    $request->fileInput->labels->starred = false;
    $request->fileInput->labels->trashed = false;
    $request->fileInput->labels->viewed = false;
    $request->fileInput->lastModifyingUser = new User();
    $request->fileInput->lastModifyingUser->displayName = 'libero';
    $request->fileInput->lastModifyingUser->emailAddress = 'aut';
    $request->fileInput->lastModifyingUser->isAuthenticatedUser = false;
    $request->fileInput->lastModifyingUser->kind = 'aut';
    $request->fileInput->lastModifyingUser->permissionId = 'deleniti';
    $request->fileInput->lastModifyingUser->picture = new UserPicture();
    $request->fileInput->lastModifyingUser->picture->url = 'impedit';
    $request->fileInput->lastModifyingUserName = 'aliquam';
    $request->fileInput->lastViewedByMeDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-12T18:08:46.973Z');
    $request->fileInput->linkShareMetadata = new FileLinkShareMetadata();
    $request->fileInput->linkShareMetadata->securityUpdateEligible = false;
    $request->fileInput->linkShareMetadata->securityUpdateEnabled = false;
    $request->fileInput->markedViewedByMeDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-01T12:32:41.161Z');
    $request->fileInput->md5Checksum = 'et';
    $request->fileInput->mimeType = 'dolorum';
    $request->fileInput->modifiedByMeDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-19T09:22:11.289Z');
    $request->fileInput->modifiedDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-27T06:22:58.599Z');
    $request->fileInput->openWithLinks = [
        'nobis' => 'quas',
        'assumenda' => 'nulla',
    ];
    $request->fileInput->originalFilename = 'voluptas';
    $request->fileInput->ownedByMe = false;
    $request->fileInput->ownerNames = [
        'quasi',
        'tempora',
        'numquam',
    ];
    $request->fileInput->owners = [
        new User(),
    ];
    $request->fileInput->parents = [
        new ParentReference(),
        new ParentReference(),
        new ParentReference(),
    ];
    $request->fileInput->permissionIds = [
        'molestiae',
    ];
    $request->fileInput->permissions = [
        new PermissionInput(),
        new PermissionInput(),
    ];
    $request->fileInput->properties = [
        new Property(),
        new Property(),
    ];
    $request->fileInput->quotaBytesUsed = 'eius';
    $request->fileInput->resourceKey = 'esse';
    $request->fileInput->selfLink = 'esse';
    $request->fileInput->sha1Checksum = 'rem';
    $request->fileInput->sha256Checksum = 'fuga';
    $request->fileInput->shareable = false;
    $request->fileInput->shared = false;
    $request->fileInput->sharedWithMeDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-22T02:19:15.622Z');
    $request->fileInput->sharingUser = new User();
    $request->fileInput->sharingUser->displayName = 'fugiat';
    $request->fileInput->sharingUser->emailAddress = 'ut';
    $request->fileInput->sharingUser->isAuthenticatedUser = false;
    $request->fileInput->sharingUser->kind = 'eum';
    $request->fileInput->sharingUser->permissionId = 'suscipit';
    $request->fileInput->sharingUser->picture = new UserPicture();
    $request->fileInput->sharingUser->picture->url = 'assumenda';
    $request->fileInput->shortcutDetails = new FileShortcutDetails();
    $request->fileInput->shortcutDetails->targetId = 'eos';
    $request->fileInput->shortcutDetails->targetMimeType = 'praesentium';
    $request->fileInput->shortcutDetails->targetResourceKey = 'quisquam';
    $request->fileInput->spaces = [
        'ipsa',
    ];
    $request->fileInput->teamDriveId = 'id';
    $request->fileInput->thumbnail = new FileThumbnail();
    $request->fileInput->thumbnail->image = 'quidem';
    $request->fileInput->thumbnail->mimeType = 'neque';
    $request->fileInput->thumbnailLink = 'quo';
    $request->fileInput->thumbnailVersion = 'illum';
    $request->fileInput->title = 'Miss';
    $request->fileInput->trashedDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-25T14:54:59.204Z');
    $request->fileInput->trashingUser = new User();
    $request->fileInput->trashingUser->displayName = 'eos';
    $request->fileInput->trashingUser->emailAddress = 'voluptas';
    $request->fileInput->trashingUser->isAuthenticatedUser = false;
    $request->fileInput->trashingUser->kind = 'ab';
    $request->fileInput->trashingUser->permissionId = 'cupiditate';
    $request->fileInput->trashingUser->picture = new UserPicture();
    $request->fileInput->trashingUser->picture->url = 'consequatur';
    $request->fileInput->userPermission = new PermissionInput();
    $request->fileInput->userPermission->additionalRoles = [
        'debitis',
        'ipsam',
    ];
    $request->fileInput->userPermission->authKey = 'aspernatur';
    $request->fileInput->userPermission->deleted = false;
    $request->fileInput->userPermission->domain = 'sequi';
    $request->fileInput->userPermission->emailAddress = 'quo';
    $request->fileInput->userPermission->etag = 'esse';
    $request->fileInput->userPermission->expirationDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-13T03:35:18.820Z');
    $request->fileInput->userPermission->id = 'bc7178e4-796f-42a7-8c68-8282aa482562';
    $request->fileInput->userPermission->kind = 'sapiente';
    $request->fileInput->userPermission->name = 'Norma Christiansen';
    $request->fileInput->userPermission->pendingOwner = false;
    $request->fileInput->userPermission->photoLink = 'atque';
    $request->fileInput->userPermission->role = 'et';
    $request->fileInput->userPermission->selfLink = 'esse';
    $request->fileInput->userPermission->type = 'eveniet';
    $request->fileInput->userPermission->value = 'accusamus';
    $request->fileInput->userPermission->view = 'veritatis';
    $request->fileInput->userPermission->withLink = false;
    $request->fileInput->version = 'esse';
    $request->fileInput->videoMediaMetadata = new FileVideoMediaMetadata();
    $request->fileInput->videoMediaMetadata->durationMillis = 'quod';
    $request->fileInput->videoMediaMetadata->height = 724168;
    $request->fileInput->videoMediaMetadata->width = 877131;
    $request->fileInput->webContentLink = 'aliquid';
    $request->fileInput->webViewLink = 'quasi';
    $request->fileInput->writersCanShare = false;
    $request->alt = AltEnum::JSON;
    $request->convert = false;
    $request->enforceSingleParent = false;
    $request->fields = 'saepe';
    $request->fileId = 'vel';
    $request->includeLabels = 'harum';
    $request->includePermissionsForView = 'molestiae';
    $request->key = 'rerum';
    $request->oauthToken = 'occaecati';
    $request->ocr = false;
    $request->ocrLanguage = 'minima';
    $request->pinned = false;
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->timedTextLanguage = 'eligendi';
    $request->timedTextTrackName = 'sit';
    $request->userIp = 'culpa';
    $request->visibility = DriveFilesCopyVisibilityEnum::PRIVATE;

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

## driveFilesDelete

Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer on the parent for shared drive files.

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
    $request->fields = 'adipisci';
    $request->fileId = 'cumque';
    $request->key = 'consequuntur';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'minus';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->userIp = 'quaerat';

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
    $request->driveId = 'sapiente';
    $request->enforceSingleParent = false;
    $request->fields = 'consectetur';
    $request->key = 'esse';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->userIp = 'a';

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
    $request->fields = 'nulla';
    $request->fileId = 'quas';
    $request->key = 'esse';
    $request->mimeType = 'quasi';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->userIp = 'sint';

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

Generates a set of file IDs which can be provided in insert or copy requests.

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
    $request->fields = 'pariatur';
    $request->key = 'possimus';
    $request->maxResults = 157632;
    $request->oauthToken = 'eveniet';
    $request->prettyPrint = false;
    $request->quotaUser = 'asperiores';
    $request->space = 'facere';
    $request->type = 'veritatis';
    $request->userIp = 'consequuntur';

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
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesGetProjectionEnum;
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
    $request->fields = 'quasi';
    $request->fileId = 'similique';
    $request->includeLabels = 'culpa';
    $request->includePermissionsForView = 'aliquid';
    $request->key = 'tenetur';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->projection = DriveFilesGetProjectionEnum::FULL;
    $request->quotaUser = 'vel';
    $request->revisionId = 'in';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->updateViewedDate = false;
    $request->userIp = 'eius';

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

## driveFilesInsert

Insert a new file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesInsertVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesInsertSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesInsertSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesInsertSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveFilesInsertRequest();
    $request->requestBody = 'libero';
    $request->alt = AltEnum::JSON;
    $request->convert = false;
    $request->enforceSingleParent = false;
    $request->fields = 'illum';
    $request->includeLabels = 'soluta';
    $request->includePermissionsForView = 'accusantium';
    $request->key = 'aliquam';
    $request->oauthToken = 'sapiente';
    $request->ocr = false;
    $request->ocrLanguage = 'dicta';
    $request->pinned = false;
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->timedTextLanguage = 'reprehenderit';
    $request->timedTextTrackName = 'ullam';
    $request->useContentAsIndexableText = false;
    $request->userIp = 'nisi';
    $request->visibility = DriveFilesInsertVisibilityEnum::DEFAULT;

    $requestSecurity = new DriveFilesInsertSecurity();
    $requestSecurity->option1 = new DriveFilesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->driveFilesInsert($request, $requestSecurity);

    if ($response->file !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveFilesList

Lists the user's files.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListCorpusEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListSecurityOption7;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesListSecurityOption8;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveFilesListRequest();
    $request->alt = AltEnum::JSON;
    $request->corpora = 'voluptatum';
    $request->corpus = DriveFilesListCorpusEnum::DEFAULT;
    $request->driveId = 'quibusdam';
    $request->fields = 'ex';
    $request->includeItemsFromAllDrives = false;
    $request->includeLabels = 'deleniti';
    $request->includePermissionsForView = 'itaque';
    $request->includeTeamDriveItems = false;
    $request->key = 'dolorum';
    $request->maxResults = 99615;
    $request->oauthToken = 'omnis';
    $request->orderBy = 'tenetur';
    $request->pageToken = 'quasi';
    $request->prettyPrint = false;
    $request->projection = DriveFilesListProjectionEnum::FULL;
    $request->q = 'et';
    $request->quotaUser = 'voluptate';
    $request->spaces = 'ipsa';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->teamDriveId = 'minima';
    $request->userIp = 'veritatis';

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
    $request->fields = 'consectetur';
    $request->fileId = 'adipisci';
    $request->key = 'iste';
    $request->maxResults = 839513;
    $request->oauthToken = 'accusantium';
    $request->pageToken = 'rem';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->userIp = 'laudantium';

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
    $request->modifyLabelsRequest->kind = 'eum';
    $request->modifyLabelsRequest->labelModifications = [
        new LabelModification(),
        new LabelModification(),
        new LabelModification(),
    ];
    $request->alt = AltEnum::JSON;
    $request->fields = 'ab';
    $request->fileId = 'corrupti';
    $request->key = 'non';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->userIp = 'occaecati';

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

## driveFilesPatch

Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\FileInput;
use \OpenAPI\OpenAPI\Models\Shared\FileCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\ContentRestriction;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\UserPicture;
use \OpenAPI\OpenAPI\Models\Shared\FileImageMediaMetadata;
use \OpenAPI\OpenAPI\Models\Shared\FileImageMediaMetadataLocation;
use \OpenAPI\OpenAPI\Models\Shared\FileIndexableText;
use \OpenAPI\OpenAPI\Models\Shared\FileLabelInfo;
use \OpenAPI\OpenAPI\Models\Shared\Label;
use \OpenAPI\OpenAPI\Models\Shared\LabelField;
use \OpenAPI\OpenAPI\Models\Shared\FileLabels;
use \OpenAPI\OpenAPI\Models\Shared\FileLinkShareMetadata;
use \OpenAPI\OpenAPI\Models\Shared\ParentReference;
use \OpenAPI\OpenAPI\Models\Shared\PermissionInput;
use \OpenAPI\OpenAPI\Models\Shared\Property;
use \OpenAPI\OpenAPI\Models\Shared\FileShortcutDetails;
use \OpenAPI\OpenAPI\Models\Shared\FileThumbnail;
use \OpenAPI\OpenAPI\Models\Shared\FileVideoMediaMetadata;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesPatchModifiedDateBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesPatchSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesPatchSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesPatchSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesPatchSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesPatchSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveFilesPatchRequest();
    $request->fileInput = new FileInput();
    $request->fileInput->alternateLink = 'numquam';
    $request->fileInput->appDataContents = false;
    $request->fileInput->canComment = false;
    $request->fileInput->canReadRevisions = false;
    $request->fileInput->capabilities = new FileCapabilities();
    $request->fileInput->capabilities->canAcceptOwnership = false;
    $request->fileInput->capabilities->canAddChildren = false;
    $request->fileInput->capabilities->canAddFolderFromAnotherDrive = false;
    $request->fileInput->capabilities->canAddMyDriveParent = false;
    $request->fileInput->capabilities->canChangeCopyRequiresWriterPermission = false;
    $request->fileInput->capabilities->canChangeRestrictedDownload = false;
    $request->fileInput->capabilities->canChangeSecurityUpdateEnabled = false;
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
    $request->fileInput->contentRestrictions = [
        new ContentRestriction(),
        new ContentRestriction(),
        new ContentRestriction(),
        new ContentRestriction(),
    ];
    $request->fileInput->copyRequiresWriterPermission = false;
    $request->fileInput->copyable = false;
    $request->fileInput->createdDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-16T16:15:17.905Z');
    $request->fileInput->defaultOpenWithLink = 'aut';
    $request->fileInput->description = 'dignissimos';
    $request->fileInput->downloadUrl = 'dicta';
    $request->fileInput->driveId = 'maiores';
    $request->fileInput->editable = false;
    $request->fileInput->embedLink = 'natus';
    $request->fileInput->etag = 'velit';
    $request->fileInput->explicitlyTrashed = false;
    $request->fileInput->fileExtension = 'voluptatibus';
    $request->fileInput->fileSize = 'voluptas';
    $request->fileInput->folderColorRgb = 'asperiores';
    $request->fileInput->fullFileExtension = 'aperiam';
    $request->fileInput->hasAugmentedPermissions = false;
    $request->fileInput->hasThumbnail = false;
    $request->fileInput->headRevisionId = 'ea';
    $request->fileInput->iconLink = 'quaerat';
    $request->fileInput->id = '2dac7af5-15cc-4413-aa63-aae8d67864db';
    $request->fileInput->imageMediaMetadata = new FileImageMediaMetadata();
    $request->fileInput->imageMediaMetadata->aperture = 7382.27;
    $request->fileInput->imageMediaMetadata->cameraMake = 'commodi';
    $request->fileInput->imageMediaMetadata->cameraModel = 'in';
    $request->fileInput->imageMediaMetadata->colorSpace = 'corporis';
    $request->fileInput->imageMediaMetadata->date = 'reiciendis';
    $request->fileInput->imageMediaMetadata->exposureBias = 8286.57;
    $request->fileInput->imageMediaMetadata->exposureMode = 'nemo';
    $request->fileInput->imageMediaMetadata->exposureTime = 9249.67;
    $request->fileInput->imageMediaMetadata->flashUsed = false;
    $request->fileInput->imageMediaMetadata->focalLength = 3975.33;
    $request->fileInput->imageMediaMetadata->height = 46007;
    $request->fileInput->imageMediaMetadata->isoSpeed = 738683;
    $request->fileInput->imageMediaMetadata->lens = 'consectetur';
    $request->fileInput->imageMediaMetadata->location = new FileImageMediaMetadataLocation();
    $request->fileInput->imageMediaMetadata->location->altitude = 4490.83;
    $request->fileInput->imageMediaMetadata->location->latitude = 3485.19;
    $request->fileInput->imageMediaMetadata->location->longitude = 9372.85;
    $request->fileInput->imageMediaMetadata->maxApertureValue = 8149.67;
    $request->fileInput->imageMediaMetadata->meteringMode = 'numquam';
    $request->fileInput->imageMediaMetadata->rotation = 985492;
    $request->fileInput->imageMediaMetadata->sensor = 'suscipit';
    $request->fileInput->imageMediaMetadata->subjectDistance = 968972;
    $request->fileInput->imageMediaMetadata->whiteBalance = 'quidem';
    $request->fileInput->imageMediaMetadata->width = 904949;
    $request->fileInput->indexableText = new FileIndexableText();
    $request->fileInput->indexableText->text = 'necessitatibus';
    $request->fileInput->isAppAuthorized = false;
    $request->fileInput->kind = 'dolore';
    $request->fileInput->labelInfo = new FileLabelInfo();
    $request->fileInput->labelInfo->labels = [
        new Label(),
    ];
    $request->fileInput->labels = new FileLabels();
    $request->fileInput->labels->hidden = false;
    $request->fileInput->labels->modified = false;
    $request->fileInput->labels->restricted = false;
    $request->fileInput->labels->starred = false;
    $request->fileInput->labels->trashed = false;
    $request->fileInput->labels->viewed = false;
    $request->fileInput->lastModifyingUser = new User();
    $request->fileInput->lastModifyingUser->displayName = 'asperiores';
    $request->fileInput->lastModifyingUser->emailAddress = 'adipisci';
    $request->fileInput->lastModifyingUser->isAuthenticatedUser = false;
    $request->fileInput->lastModifyingUser->kind = 'non';
    $request->fileInput->lastModifyingUser->permissionId = 'amet';
    $request->fileInput->lastModifyingUser->picture = new UserPicture();
    $request->fileInput->lastModifyingUser->picture->url = 'beatae';
    $request->fileInput->lastModifyingUserName = 'dignissimos';
    $request->fileInput->lastViewedByMeDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-29T18:47:01.945Z');
    $request->fileInput->linkShareMetadata = new FileLinkShareMetadata();
    $request->fileInput->linkShareMetadata->securityUpdateEligible = false;
    $request->fileInput->linkShareMetadata->securityUpdateEnabled = false;
    $request->fileInput->markedViewedByMeDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-23T06:58:42.024Z');
    $request->fileInput->md5Checksum = 'harum';
    $request->fileInput->mimeType = 'laboriosam';
    $request->fileInput->modifiedByMeDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-31T09:28:16.792Z');
    $request->fileInput->modifiedDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-09T21:55:56.048Z');
    $request->fileInput->openWithLinks = [
        'similique' => 'tempora',
        'aspernatur' => 'voluptas',
        'voluptas' => 'voluptas',
        'minima' => 'nobis',
    ];
    $request->fileInput->originalFilename = 'dolorum';
    $request->fileInput->ownedByMe = false;
    $request->fileInput->ownerNames = [
        'minus',
    ];
    $request->fileInput->owners = [
        new User(),
    ];
    $request->fileInput->parents = [
        new ParentReference(),
        new ParentReference(),
        new ParentReference(),
    ];
    $request->fileInput->permissionIds = [
        'dolore',
        'aliquam',
    ];
    $request->fileInput->permissions = [
        new PermissionInput(),
        new PermissionInput(),
        new PermissionInput(),
        new PermissionInput(),
    ];
    $request->fileInput->properties = [
        new Property(),
        new Property(),
        new Property(),
        new Property(),
    ];
    $request->fileInput->quotaBytesUsed = 'ullam';
    $request->fileInput->resourceKey = 'adipisci';
    $request->fileInput->selfLink = 'cum';
    $request->fileInput->sha1Checksum = 'blanditiis';
    $request->fileInput->sha256Checksum = 'quas';
    $request->fileInput->shareable = false;
    $request->fileInput->shared = false;
    $request->fileInput->sharedWithMeDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-25T08:06:51.452Z');
    $request->fileInput->sharingUser = new User();
    $request->fileInput->sharingUser->displayName = 'culpa';
    $request->fileInput->sharingUser->emailAddress = 'corrupti';
    $request->fileInput->sharingUser->isAuthenticatedUser = false;
    $request->fileInput->sharingUser->kind = 'pariatur';
    $request->fileInput->sharingUser->permissionId = 'totam';
    $request->fileInput->sharingUser->picture = new UserPicture();
    $request->fileInput->sharingUser->picture->url = 'hic';
    $request->fileInput->shortcutDetails = new FileShortcutDetails();
    $request->fileInput->shortcutDetails->targetId = 'exercitationem';
    $request->fileInput->shortcutDetails->targetMimeType = 'nobis';
    $request->fileInput->shortcutDetails->targetResourceKey = 'sit';
    $request->fileInput->spaces = [
        'sed',
        'reiciendis',
        'explicabo',
    ];
    $request->fileInput->teamDriveId = 'asperiores';
    $request->fileInput->thumbnail = new FileThumbnail();
    $request->fileInput->thumbnail->image = 'facilis';
    $request->fileInput->thumbnail->mimeType = 'voluptate';
    $request->fileInput->thumbnailLink = 'expedita';
    $request->fileInput->thumbnailVersion = 'ab';
    $request->fileInput->title = 'Miss';
    $request->fileInput->trashedDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-30T18:05:39.925Z');
    $request->fileInput->trashingUser = new User();
    $request->fileInput->trashingUser->displayName = 'sed';
    $request->fileInput->trashingUser->emailAddress = 'in';
    $request->fileInput->trashingUser->isAuthenticatedUser = false;
    $request->fileInput->trashingUser->kind = 'commodi';
    $request->fileInput->trashingUser->permissionId = 'quidem';
    $request->fileInput->trashingUser->picture = new UserPicture();
    $request->fileInput->trashingUser->picture->url = 'explicabo';
    $request->fileInput->userPermission = new PermissionInput();
    $request->fileInput->userPermission->additionalRoles = [
        'unde',
        'architecto',
    ];
    $request->fileInput->userPermission->authKey = 'suscipit';
    $request->fileInput->userPermission->deleted = false;
    $request->fileInput->userPermission->domain = 'sapiente';
    $request->fileInput->userPermission->emailAddress = 'debitis';
    $request->fileInput->userPermission->etag = 'illo';
    $request->fileInput->userPermission->expirationDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-10T20:46:47.432Z');
    $request->fileInput->userPermission->id = '8f4294e3-698f-4447-b603-e8b445e80ca5';
    $request->fileInput->userPermission->kind = 'minima';
    $request->fileInput->userPermission->name = 'Van Stoltenberg PhD';
    $request->fileInput->userPermission->pendingOwner = false;
    $request->fileInput->userPermission->photoLink = 'numquam';
    $request->fileInput->userPermission->role = 'veniam';
    $request->fileInput->userPermission->selfLink = 'in';
    $request->fileInput->userPermission->type = 'officiis';
    $request->fileInput->userPermission->value = 'beatae';
    $request->fileInput->userPermission->view = 'laudantium';
    $request->fileInput->userPermission->withLink = false;
    $request->fileInput->version = 'exercitationem';
    $request->fileInput->videoMediaMetadata = new FileVideoMediaMetadata();
    $request->fileInput->videoMediaMetadata->durationMillis = 'praesentium';
    $request->fileInput->videoMediaMetadata->height = 740098;
    $request->fileInput->videoMediaMetadata->width = 386827;
    $request->fileInput->webContentLink = 'dolorum';
    $request->fileInput->webViewLink = 'voluptatum';
    $request->fileInput->writersCanShare = false;
    $request->addParents = 'error';
    $request->alt = AltEnum::JSON;
    $request->convert = false;
    $request->enforceSingleParent = false;
    $request->fields = 'hic';
    $request->fileId = 'expedita';
    $request->includeLabels = 'debitis';
    $request->includePermissionsForView = 'neque';
    $request->key = 'dolorum';
    $request->modifiedDateBehavior = DriveFilesPatchModifiedDateBehaviorEnum::FROM_BODY_OR_NOW;
    $request->newRevision = false;
    $request->oauthToken = 'officia';
    $request->ocr = false;
    $request->ocrLanguage = 'dolorum';
    $request->pinned = false;
    $request->prettyPrint = false;
    $request->quotaUser = 'corrupti';
    $request->removeParents = 'accusamus';
    $request->setModifiedDate = false;
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->timedTextLanguage = 'tempora';
    $request->timedTextTrackName = 'atque';
    $request->updateViewedDate = false;
    $request->useContentAsIndexableText = false;
    $request->userIp = 'fugit';

    $requestSecurity = new DriveFilesPatchSecurity();
    $requestSecurity->option1 = new DriveFilesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->driveFilesPatch($request, $requestSecurity);

    if ($response->file !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveFilesTouch

Set the file's updated time to the current server time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesTouchRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesTouchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesTouchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesTouchSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesTouchSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesTouchSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesTouchSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveFilesTouchRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'ut';
    $request->fileId = 'fugiat';
    $request->includeLabels = 'voluptatem';
    $request->includePermissionsForView = 'culpa';
    $request->key = 'expedita';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequatur';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->userIp = 'esse';

    $requestSecurity = new DriveFilesTouchSecurity();
    $requestSecurity->option1 = new DriveFilesTouchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->driveFilesTouch($request, $requestSecurity);

    if ($response->file !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveFilesTrash

Moves a file to the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesTrashRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesTrashSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesTrashSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesTrashSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesTrashSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesTrashSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveFilesTrashRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'ipsam';
    $request->fileId = 'sit';
    $request->includeLabels = 'voluptatum';
    $request->includePermissionsForView = 'quas';
    $request->key = 'repudiandae';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'et';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->userIp = 'blanditiis';

    $requestSecurity = new DriveFilesTrashSecurity();
    $requestSecurity->option1 = new DriveFilesTrashSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->driveFilesTrash($request, $requestSecurity);

    if ($response->file !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveFilesUntrash

Restores a file from the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may untrash a file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesUntrashRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesUntrashSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesUntrashSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesUntrashSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesUntrashSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesUntrashSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveFilesUntrashRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'ex';
    $request->fileId = 'sed';
    $request->includeLabels = 'sit';
    $request->includePermissionsForView = 'vel';
    $request->key = 'nostrum';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->userIp = 'consequatur';

    $requestSecurity = new DriveFilesUntrashSecurity();
    $requestSecurity->option1 = new DriveFilesUntrashSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->driveFilesUntrash($request, $requestSecurity);

    if ($response->file !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveFilesUpdate

Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as modifiedDate. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesUpdateModifiedDateBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesUpdateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesUpdateSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesUpdateSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesUpdateSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesUpdateSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveFilesUpdateRequest();
    $request->requestBody = 'incidunt';
    $request->addParents = 'reiciendis';
    $request->alt = AltEnum::JSON;
    $request->convert = false;
    $request->enforceSingleParent = false;
    $request->fields = 'dolorem';
    $request->fileId = 'harum';
    $request->includeLabels = 'dicta';
    $request->includePermissionsForView = 'architecto';
    $request->key = 'occaecati';
    $request->modifiedDateBehavior = DriveFilesUpdateModifiedDateBehaviorEnum::FROM_BODY_IF_NEEDED;
    $request->newRevision = false;
    $request->oauthToken = 'quidem';
    $request->ocr = false;
    $request->ocrLanguage = 'atque';
    $request->pinned = false;
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->removeParents = 'nam';
    $request->setModifiedDate = false;
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->timedTextLanguage = 'tenetur';
    $request->timedTextTrackName = 'laboriosam';
    $request->updateViewedDate = false;
    $request->useContentAsIndexableText = false;
    $request->userIp = 'alias';

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
use \OpenAPI\OpenAPI\Models\Operations\DriveFilesWatchProjectionEnum;
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
    $request->channel->address = '64695 Windler Valley';
    $request->channel->expiration = 'perferendis';
    $request->channel->id = 'ab7da8a5-0ce1-487f-86bc-173d689eee95';
    $request->channel->kind = 'aspernatur';
    $request->channel->params = [
        'maiores' => 'corrupti',
        'at' => 'error',
    ];
    $request->channel->payload = false;
    $request->channel->resourceId = 'blanditiis';
    $request->channel->resourceUri = 'suscipit';
    $request->channel->token = 'repudiandae';
    $request->channel->type = 'atque';
    $request->acknowledgeAbuse = false;
    $request->alt = AltEnum::JSON;
    $request->fields = 'atque';
    $request->fileId = 'sunt';
    $request->includeLabels = 'recusandae';
    $request->includePermissionsForView = 'dolorum';
    $request->key = 'repellendus';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->projection = DriveFilesWatchProjectionEnum::FULL;
    $request->quotaUser = 'doloremque';
    $request->revisionId = 'repudiandae';
    $request->supportsAllDrives = false;
    $request->supportsTeamDrives = false;
    $request->updateViewedDate = false;
    $request->userIp = 'dicta';

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
