# comments

### Available Operations

* [driveCommentsCreate](#drivecommentscreate) - Creates a comment on a file.
* [driveCommentsDelete](#drivecommentsdelete) - Deletes a comment.
* [driveCommentsGet](#drivecommentsget) - Gets a comment by ID.
* [driveCommentsList](#drivecommentslist) - Lists a file's comments.
* [driveCommentsUpdate](#drivecommentsupdate) - Updates a comment with patch semantics.

## driveCommentsCreate

Creates a comment on a file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Comment;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\CommentQuotedFileContent;
use \OpenAPI\OpenAPI\Models\Shared\Reply;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveCommentsCreateRequest();
    $request->comment = new Comment();
    $request->comment->anchor = 'omnis';
    $request->comment->author = new User();
    $request->comment->author->displayName = 'voluptate';
    $request->comment->author->emailAddress = 'cum';
    $request->comment->author->kind = 'perferendis';
    $request->comment->author->me = false;
    $request->comment->author->permissionId = 'doloremque';
    $request->comment->author->photoLink = 'reprehenderit';
    $request->comment->content = 'ut';
    $request->comment->createdTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-22T09:14:02.538Z');
    $request->comment->deleted = false;
    $request->comment->htmlContent = 'corporis';
    $request->comment->id = '471b5e6e-13b9-49d4-88e1-e91e450ad2ab';
    $request->comment->kind = 'quibusdam';
    $request->comment->modifiedTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-26T08:57:48.803Z');
    $request->comment->quotedFileContent = new CommentQuotedFileContent();
    $request->comment->quotedFileContent->mimeType = 'qui';
    $request->comment->quotedFileContent->value = 'aliquid';
    $request->comment->replies = [
        new Reply(),
        new Reply(),
        new Reply(),
    ];
    $request->comment->resolved = false;
    $request->alt = AltEnum::JSON;
    $request->fields = 'quos';
    $request->fileId = 'perferendis';
    $request->key = 'magni';
    $request->oauthToken = 'assumenda';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->userIp = 'alias';

    $requestSecurity = new DriveCommentsCreateSecurity();
    $requestSecurity->option1 = new DriveCommentsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->driveCommentsCreate($request, $requestSecurity);

    if ($response->comment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveCommentsDelete

Deletes a comment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveCommentsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->commentId = 'fugit';
    $request->fields = 'dolorum';
    $request->fileId = 'excepturi';
    $request->key = 'tempora';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->userIp = 'labore';

    $requestSecurity = new DriveCommentsDeleteSecurity();
    $requestSecurity->option1 = new DriveCommentsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->driveCommentsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveCommentsGet

Gets a comment by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveCommentsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->commentId = 'delectus';
    $request->fields = 'eum';
    $request->fileId = 'non';
    $request->includeDeleted = false;
    $request->key = 'eligendi';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->userIp = 'provident';

    $requestSecurity = new DriveCommentsGetSecurity();
    $requestSecurity->option1 = new DriveCommentsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->driveCommentsGet($request, $requestSecurity);

    if ($response->comment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveCommentsList

Lists a file's comments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveCommentsListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'necessitatibus';
    $request->fileId = 'sint';
    $request->includeDeleted = false;
    $request->key = 'officia';
    $request->oauthToken = 'dolor';
    $request->pageSize = 891555;
    $request->pageToken = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->startModifiedTime = 'in';
    $request->userIp = 'in';

    $requestSecurity = new DriveCommentsListSecurity();
    $requestSecurity->option1 = new DriveCommentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->driveCommentsList($request, $requestSecurity);

    if ($response->commentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveCommentsUpdate

Updates a comment with patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Comment;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\CommentQuotedFileContent;
use \OpenAPI\OpenAPI\Models\Shared\Reply;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveCommentsUpdateRequest();
    $request->comment = new Comment();
    $request->comment->anchor = 'illum';
    $request->comment->author = new User();
    $request->comment->author->displayName = 'maiores';
    $request->comment->author->emailAddress = 'rerum';
    $request->comment->author->kind = 'dicta';
    $request->comment->author->me = false;
    $request->comment->author->permissionId = 'magnam';
    $request->comment->author->photoLink = 'cumque';
    $request->comment->content = 'facere';
    $request->comment->createdTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-09T06:36:34.417Z');
    $request->comment->deleted = false;
    $request->comment->htmlContent = 'laborum';
    $request->comment->id = 'e395efb9-ba88-4f3a-a699-7074ba4469b6';
    $request->comment->kind = 'vero';
    $request->comment->modifiedTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-24T10:55:00.183Z');
    $request->comment->quotedFileContent = new CommentQuotedFileContent();
    $request->comment->quotedFileContent->mimeType = 'magnam';
    $request->comment->quotedFileContent->value = 'et';
    $request->comment->replies = [
        new Reply(),
        new Reply(),
        new Reply(),
    ];
    $request->comment->resolved = false;
    $request->alt = AltEnum::JSON;
    $request->commentId = 'ullam';
    $request->fields = 'provident';
    $request->fileId = 'quos';
    $request->key = 'sint';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->userIp = 'reiciendis';

    $requestSecurity = new DriveCommentsUpdateSecurity();
    $requestSecurity->option1 = new DriveCommentsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->driveCommentsUpdate($request, $requestSecurity);

    if ($response->comment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
