# revisions

### Available Operations

* [driveRevisionsDelete](#driverevisionsdelete) - Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
* [driveRevisionsGet](#driverevisionsget) - Gets a specific revision.
* [driveRevisionsList](#driverevisionslist) - Lists a file's revisions.
* [driveRevisionsPatch](#driverevisionspatch) - Updates a revision.
* [driveRevisionsUpdate](#driverevisionsupdate) - Updates a revision.

## driveRevisionsDelete

Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsDeleteSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveRevisionsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'porro';
    $request->fileId = 'aliquam';
    $request->key = 'velit';
    $request->oauthToken = 'illo';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->revisionId = 'vel';
    $request->userIp = 'ea';

    $requestSecurity = new DriveRevisionsDeleteSecurity();
    $requestSecurity->option1 = new DriveRevisionsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->revisions->driveRevisionsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveRevisionsGet

Gets a specific revision.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsGetSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsGetSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsGetSecurityOption7;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveRevisionsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'beatae';
    $request->fileId = 'vero';
    $request->key = 'excepturi';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->revisionId = 'ut';
    $request->userIp = 'perspiciatis';

    $requestSecurity = new DriveRevisionsGetSecurity();
    $requestSecurity->option1 = new DriveRevisionsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->revisions->driveRevisionsGet($request, $requestSecurity);

    if ($response->revision !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveRevisionsList

Lists a file's revisions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsListSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsListSecurityOption7;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveRevisionsListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'earum';
    $request->fileId = 'dicta';
    $request->key = 'impedit';
    $request->maxResults = 975884;
    $request->oauthToken = 'iste';
    $request->pageToken = 'itaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->userIp = 'nisi';

    $requestSecurity = new DriveRevisionsListSecurity();
    $requestSecurity->option1 = new DriveRevisionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->revisions->driveRevisionsList($request, $requestSecurity);

    if ($response->revisionList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveRevisionsPatch

Updates a revision.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Revision;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\UserPicture;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsPatchSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsPatchSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveRevisionsPatchRequest();
    $request->revision = new Revision();
    $request->revision->downloadUrl = 'itaque';
    $request->revision->etag = 'velit';
    $request->revision->exportLinks = [
        'non' => 'dolor',
        'iusto' => 'sit',
        'doloremque' => 'consequatur',
    ];
    $request->revision->fileSize = 'officia';
    $request->revision->id = 'e6b6bc9b-8f75-49ea-855a-9741d3113529';
    $request->revision->kind = 'ex';
    $request->revision->lastModifyingUser = new User();
    $request->revision->lastModifyingUser->displayName = 'nemo';
    $request->revision->lastModifyingUser->emailAddress = 'soluta';
    $request->revision->lastModifyingUser->isAuthenticatedUser = false;
    $request->revision->lastModifyingUser->kind = 'libero';
    $request->revision->lastModifyingUser->permissionId = 'rem';
    $request->revision->lastModifyingUser->picture = new UserPicture();
    $request->revision->lastModifyingUser->picture->url = 'dolorum';
    $request->revision->lastModifyingUserName = 'odio';
    $request->revision->md5Checksum = 'fugit';
    $request->revision->mimeType = 'alias';
    $request->revision->modifiedDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-29T17:28:50.439Z');
    $request->revision->originalFilename = 'quae';
    $request->revision->pinned = false;
    $request->revision->publishAuto = false;
    $request->revision->published = false;
    $request->revision->publishedLink = 'quae';
    $request->revision->publishedOutsideDomain = false;
    $request->revision->selfLink = 'modi';
    $request->alt = AltEnum::JSON;
    $request->fields = 'neque';
    $request->fileId = 'exercitationem';
    $request->key = 'itaque';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->revisionId = 'unde';
    $request->userIp = 'nulla';

    $requestSecurity = new DriveRevisionsPatchSecurity();
    $requestSecurity->option1 = new DriveRevisionsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->revisions->driveRevisionsPatch($request, $requestSecurity);

    if ($response->revision !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveRevisionsUpdate

Updates a revision.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Revision;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\UserPicture;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsUpdateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsUpdateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveRevisionsUpdateRequest();
    $request->revision = new Revision();
    $request->revision->downloadUrl = 'distinctio';
    $request->revision->etag = 'maxime';
    $request->revision->exportLinks = [
        'quia' => 'nostrum',
    ];
    $request->revision->fileSize = 'omnis';
    $request->revision->id = 'b1abda8c-070e-4108-8cb0-672d1ad879ee';
    $request->revision->kind = 'tempore';
    $request->revision->lastModifyingUser = new User();
    $request->revision->lastModifyingUser->displayName = 'sint';
    $request->revision->lastModifyingUser->emailAddress = 'ea';
    $request->revision->lastModifyingUser->isAuthenticatedUser = false;
    $request->revision->lastModifyingUser->kind = 'autem';
    $request->revision->lastModifyingUser->permissionId = 'ipsam';
    $request->revision->lastModifyingUser->picture = new UserPicture();
    $request->revision->lastModifyingUser->picture->url = 'rerum';
    $request->revision->lastModifyingUserName = 'laudantium';
    $request->revision->md5Checksum = 'corporis';
    $request->revision->mimeType = 'officiis';
    $request->revision->modifiedDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-15T16:19:08.064Z');
    $request->revision->originalFilename = 'at';
    $request->revision->pinned = false;
    $request->revision->publishAuto = false;
    $request->revision->published = false;
    $request->revision->publishedLink = 'alias';
    $request->revision->publishedOutsideDomain = false;
    $request->revision->selfLink = 'quia';
    $request->alt = AltEnum::JSON;
    $request->fields = 'quidem';
    $request->fileId = 'fuga';
    $request->key = 'repudiandae';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'expedita';
    $request->revisionId = 'officiis';
    $request->userIp = 'eos';

    $requestSecurity = new DriveRevisionsUpdateSecurity();
    $requestSecurity->option1 = new DriveRevisionsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->revisions->driveRevisionsUpdate($request, $requestSecurity);

    if ($response->revision !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
