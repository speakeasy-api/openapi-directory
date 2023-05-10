# comments

### Available Operations

* [driveCommentsDelete](#drivecommentsdelete) - Deletes a comment.
* [driveCommentsGet](#drivecommentsget) - Gets a comment by ID.
* [driveCommentsInsert](#drivecommentsinsert) - Creates a new comment on the given file.
* [driveCommentsList](#drivecommentslist) - Lists a file's comments.
* [driveCommentsPatch](#drivecommentspatch) - Updates an existing comment.
* [driveCommentsUpdate](#drivecommentsupdate) - Updates an existing comment.

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
    $request->commentId = 'nam';
    $request->fields = 'id';
    $request->fileId = 'blanditiis';
    $request->key = 'deleniti';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->userIp = 'deserunt';

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
    $request->commentId = 'nisi';
    $request->fields = 'vel';
    $request->fileId = 'natus';
    $request->includeDeleted = false;
    $request->key = 'omnis';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->userIp = 'nihil';

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

## driveCommentsInsert

Creates a new comment on the given file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\Comment;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\UserPicture;
use \OpenAPI\OpenAPI\Models\Shared\CommentContext;
use \OpenAPI\OpenAPI\Models\Shared\CommentReply;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveCommentsInsertRequest();
    $request->comment = new Comment();
    $request->comment->anchor = 'magnam';
    $request->comment->author = new User();
    $request->comment->author->displayName = 'distinctio';
    $request->comment->author->emailAddress = 'id';
    $request->comment->author->isAuthenticatedUser = false;
    $request->comment->author->kind = 'labore';
    $request->comment->author->permissionId = 'labore';
    $request->comment->author->picture = new UserPicture();
    $request->comment->author->picture->url = 'suscipit';
    $request->comment->commentId = 'natus';
    $request->comment->content = 'nobis';
    $request->comment->context = new CommentContext();
    $request->comment->context->type = 'eum';
    $request->comment->context->value = 'vero';
    $request->comment->createdDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-24T10:55:00.183Z');
    $request->comment->deleted = false;
    $request->comment->fileId = 'magnam';
    $request->comment->fileTitle = 'et';
    $request->comment->htmlContent = 'excepturi';
    $request->comment->kind = 'ullam';
    $request->comment->modifiedDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-24T04:10:44.711Z');
    $request->comment->replies = [
        new CommentReply(),
        new CommentReply(),
        new CommentReply(),
    ];
    $request->comment->selfLink = 'accusantium';
    $request->comment->status = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->fields = 'reiciendis';
    $request->fileId = 'mollitia';
    $request->key = 'ad';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->userIp = 'necessitatibus';

    $requestSecurity = new DriveCommentsInsertSecurity();
    $requestSecurity->option1 = new DriveCommentsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->driveCommentsInsert($request, $requestSecurity);

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
    $request->fields = 'odit';
    $request->fileId = 'nemo';
    $request->includeDeleted = false;
    $request->key = 'quasi';
    $request->maxResults = 435865;
    $request->oauthToken = 'doloribus';
    $request->pageToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->updatedMin = 'maxime';
    $request->userIp = 'deleniti';

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

## driveCommentsPatch

Updates an existing comment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Comment;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\UserPicture;
use \OpenAPI\OpenAPI\Models\Shared\CommentContext;
use \OpenAPI\OpenAPI\Models\Shared\CommentReply;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveCommentsPatchRequest();
    $request->comment = new Comment();
    $request->comment->anchor = 'facilis';
    $request->comment->author = new User();
    $request->comment->author->displayName = 'in';
    $request->comment->author->emailAddress = 'architecto';
    $request->comment->author->isAuthenticatedUser = false;
    $request->comment->author->kind = 'architecto';
    $request->comment->author->permissionId = 'repudiandae';
    $request->comment->author->picture = new UserPicture();
    $request->comment->author->picture->url = 'ullam';
    $request->comment->commentId = 'expedita';
    $request->comment->content = 'nihil';
    $request->comment->context = new CommentContext();
    $request->comment->context->type = 'repellat';
    $request->comment->context->value = 'quibusdam';
    $request->comment->createdDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-04T19:17:08.641Z');
    $request->comment->deleted = false;
    $request->comment->fileId = 'pariatur';
    $request->comment->fileTitle = 'accusantium';
    $request->comment->htmlContent = 'consequuntur';
    $request->comment->kind = 'praesentium';
    $request->comment->modifiedDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-01T04:49:52.515Z');
    $request->comment->replies = [
        new CommentReply(),
    ];
    $request->comment->selfLink = 'quo';
    $request->comment->status = 'illum';
    $request->alt = AltEnum::JSON;
    $request->commentId = 'pariatur';
    $request->fields = 'maxime';
    $request->fileId = 'ea';
    $request->key = 'excepturi';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->userIp = 'accusantium';

    $requestSecurity = new DriveCommentsPatchSecurity();
    $requestSecurity->option1 = new DriveCommentsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->driveCommentsPatch($request, $requestSecurity);

    if ($response->comment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveCommentsUpdate

Updates an existing comment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Comment;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\UserPicture;
use \OpenAPI\OpenAPI\Models\Shared\CommentContext;
use \OpenAPI\OpenAPI\Models\Shared\CommentReply;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveCommentsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveCommentsUpdateRequest();
    $request->comment = new Comment();
    $request->comment->anchor = 'ab';
    $request->comment->author = new User();
    $request->comment->author->displayName = 'maiores';
    $request->comment->author->emailAddress = 'quidem';
    $request->comment->author->isAuthenticatedUser = false;
    $request->comment->author->kind = 'ipsam';
    $request->comment->author->permissionId = 'voluptate';
    $request->comment->author->picture = new UserPicture();
    $request->comment->author->picture->url = 'autem';
    $request->comment->commentId = 'nam';
    $request->comment->content = 'eaque';
    $request->comment->context = new CommentContext();
    $request->comment->context->type = 'pariatur';
    $request->comment->context->value = 'nemo';
    $request->comment->createdDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-13T19:01:00.083Z');
    $request->comment->deleted = false;
    $request->comment->fileId = 'fugiat';
    $request->comment->fileTitle = 'amet';
    $request->comment->htmlContent = 'aut';
    $request->comment->kind = 'cumque';
    $request->comment->modifiedDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-21T09:28:40.593Z');
    $request->comment->replies = [
        new CommentReply(),
        new CommentReply(),
        new CommentReply(),
    ];
    $request->comment->selfLink = 'nobis';
    $request->comment->status = 'dolores';
    $request->alt = AltEnum::JSON;
    $request->commentId = 'quis';
    $request->fields = 'totam';
    $request->fileId = 'dignissimos';
    $request->key = 'eaque';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nesciunt';
    $request->userIp = 'eos';

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
