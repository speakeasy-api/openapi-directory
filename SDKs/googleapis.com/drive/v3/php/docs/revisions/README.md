# revisions

### Available Operations

* [driveRevisionsDelete](#driverevisionsdelete) - Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
* [driveRevisionsGet](#driverevisionsget) - Gets a revision's metadata or content by ID.
* [driveRevisionsList](#driverevisionslist) - Lists a file's revisions.
* [driveRevisionsUpdate](#driverevisionsupdate) - Updates a revision with patch semantics.

## driveRevisionsDelete

Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.

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
    $request->fields = 'praesentium';
    $request->fileId = 'cum';
    $request->key = 'laboriosam';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatum';
    $request->revisionId = 'error';
    $request->userIp = 'hic';

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

Gets a revision's metadata or content by ID.

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
    $request->acknowledgeAbuse = false;
    $request->alt = AltEnum::JSON;
    $request->fields = 'expedita';
    $request->fileId = 'debitis';
    $request->key = 'neque';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'nostrum';
    $request->revisionId = 'officia';
    $request->userIp = 'dolorum';

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
    $request->fields = 'corrupti';
    $request->fileId = 'accusamus';
    $request->key = 'tempora';
    $request->oauthToken = 'atque';
    $request->pageSize = 148268;
    $request->pageToken = 'ut';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugiat';
    $request->userIp = 'voluptatem';

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

## driveRevisionsUpdate

Updates a revision with patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveRevisionsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Revision;
use \OpenAPI\OpenAPI\Models\Shared\User;
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
    $request->revision->exportLinks = [
        'expedita' => 'magnam',
        'consequatur' => 'esse',
        'ipsam' => 'sit',
    ];
    $request->revision->id = '88e51862-065e-4904-b3b1-194b8abf603a';
    $request->revision->keepForever = false;
    $request->revision->kind = 'voluptate';
    $request->revision->lastModifyingUser = new User();
    $request->revision->lastModifyingUser->displayName = 'unde';
    $request->revision->lastModifyingUser->emailAddress = 'reiciendis';
    $request->revision->lastModifyingUser->kind = 'provident';
    $request->revision->lastModifyingUser->me = false;
    $request->revision->lastModifyingUser->permissionId = 'repellendus';
    $request->revision->lastModifyingUser->photoLink = 'delectus';
    $request->revision->md5Checksum = 'voluptates';
    $request->revision->mimeType = 'perferendis';
    $request->revision->modifiedTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-10T13:37:39.961Z');
    $request->revision->originalFilename = 'reprehenderit';
    $request->revision->publishAuto = false;
    $request->revision->published = false;
    $request->revision->publishedLink = 'facere';
    $request->revision->publishedOutsideDomain = false;
    $request->revision->size = 'fuga';
    $request->alt = AltEnum::JSON;
    $request->fields = 'praesentium';
    $request->fileId = 'mollitia';
    $request->key = 'veniam';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->quotaUser = 'quisquam';
    $request->revisionId = 'repudiandae';
    $request->userIp = 'quasi';

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
