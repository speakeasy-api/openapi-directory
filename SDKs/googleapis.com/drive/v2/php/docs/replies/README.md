# replies

### Available Operations

* [driveRepliesDelete](#driverepliesdelete) - Deletes a reply.
* [driveRepliesGet](#driverepliesget) - Gets a reply.
* [driveRepliesInsert](#driverepliesinsert) - Creates a new reply to the given comment.
* [driveRepliesList](#drivereplieslist) - Lists all of the replies to a comment.
* [driveRepliesPatch](#driverepliespatch) - Updates an existing reply.
* [driveRepliesUpdate](#driverepliesupdate) - Updates an existing reply.

## driveRepliesDelete

Deletes a reply.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveRepliesDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->commentId = 'cupiditate';
    $request->fields = 'reiciendis';
    $request->fileId = 'soluta';
    $request->key = 'alias';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'eos';
    $request->replyId = 'occaecati';
    $request->userIp = 'iste';

    $requestSecurity = new DriveRepliesDeleteSecurity();
    $requestSecurity->option1 = new DriveRepliesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->replies->driveRepliesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveRepliesGet

Gets a reply.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveRepliesGetRequest();
    $request->alt = AltEnum::JSON;
    $request->commentId = 'magni';
    $request->fields = 'inventore';
    $request->fileId = 'fuga';
    $request->includeDeleted = false;
    $request->key = 'accusamus';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->replyId = 'omnis';
    $request->userIp = 'delectus';

    $requestSecurity = new DriveRepliesGetSecurity();
    $requestSecurity->option1 = new DriveRepliesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->replies->driveRepliesGet($request, $requestSecurity);

    if ($response->commentReply !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveRepliesInsert

Creates a new reply to the given comment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\CommentReply;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\UserPicture;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveRepliesInsertRequest();
    $request->commentReply = new CommentReply();
    $request->commentReply->author = new User();
    $request->commentReply->author->displayName = 'minima';
    $request->commentReply->author->emailAddress = 'praesentium';
    $request->commentReply->author->isAuthenticatedUser = false;
    $request->commentReply->author->kind = 'maxime';
    $request->commentReply->author->permissionId = 'magnam';
    $request->commentReply->author->picture = new UserPicture();
    $request->commentReply->author->picture->url = 'temporibus';
    $request->commentReply->content = 'quos';
    $request->commentReply->createdDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-26T06:01:40.776Z');
    $request->commentReply->deleted = false;
    $request->commentReply->htmlContent = 'commodi';
    $request->commentReply->kind = 'totam';
    $request->commentReply->modifiedDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-14T09:47:56.289Z');
    $request->commentReply->replyId = 'nam';
    $request->commentReply->verb = 'vero';
    $request->alt = AltEnum::JSON;
    $request->commentId = 'voluptatem';
    $request->fields = 'ipsam';
    $request->fileId = 'vel';
    $request->key = 'alias';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->userIp = 'maiores';

    $requestSecurity = new DriveRepliesInsertSecurity();
    $requestSecurity->option1 = new DriveRepliesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->replies->driveRepliesInsert($request, $requestSecurity);

    if ($response->commentReply !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveRepliesList

Lists all of the replies to a comment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveRepliesListRequest();
    $request->alt = AltEnum::JSON;
    $request->commentId = 'enim';
    $request->fields = 'sint';
    $request->fileId = 'nulla';
    $request->includeDeleted = false;
    $request->key = 'deserunt';
    $request->maxResults = 458503;
    $request->oauthToken = 'nemo';
    $request->pageToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->userIp = 'quis';

    $requestSecurity = new DriveRepliesListSecurity();
    $requestSecurity->option1 = new DriveRepliesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->replies->driveRepliesList($request, $requestSecurity);

    if ($response->commentReplyList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveRepliesPatch

Updates an existing reply.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\CommentReply;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\UserPicture;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveRepliesPatchRequest();
    $request->commentReply = new CommentReply();
    $request->commentReply->author = new User();
    $request->commentReply->author->displayName = 'sint';
    $request->commentReply->author->emailAddress = 'accusamus';
    $request->commentReply->author->isAuthenticatedUser = false;
    $request->commentReply->author->kind = 'impedit';
    $request->commentReply->author->permissionId = 'hic';
    $request->commentReply->author->picture = new UserPicture();
    $request->commentReply->author->picture->url = 'necessitatibus';
    $request->commentReply->content = 'asperiores';
    $request->commentReply->createdDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-16T11:44:46.779Z');
    $request->commentReply->deleted = false;
    $request->commentReply->htmlContent = 'debitis';
    $request->commentReply->kind = 'delectus';
    $request->commentReply->modifiedDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-17T23:08:05.815Z');
    $request->commentReply->replyId = 'fuga';
    $request->commentReply->verb = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->commentId = 'consectetur';
    $request->fields = 'velit';
    $request->fileId = 'atque';
    $request->key = 'ipsum';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'magni';
    $request->replyId = 'soluta';
    $request->userIp = 'repudiandae';

    $requestSecurity = new DriveRepliesPatchSecurity();
    $requestSecurity->option1 = new DriveRepliesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->replies->driveRepliesPatch($request, $requestSecurity);

    if ($response->commentReply !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveRepliesUpdate

Updates an existing reply.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CommentReply;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\UserPicture;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveRepliesUpdateRequest();
    $request->commentReply = new CommentReply();
    $request->commentReply->author = new User();
    $request->commentReply->author->displayName = 'nam';
    $request->commentReply->author->emailAddress = 'dolore';
    $request->commentReply->author->isAuthenticatedUser = false;
    $request->commentReply->author->kind = 'iusto';
    $request->commentReply->author->permissionId = 'voluptate';
    $request->commentReply->author->picture = new UserPicture();
    $request->commentReply->author->picture->url = 'sequi';
    $request->commentReply->content = 'dignissimos';
    $request->commentReply->createdDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-22T23:13:00.381Z');
    $request->commentReply->deleted = false;
    $request->commentReply->htmlContent = 'deleniti';
    $request->commentReply->kind = 'quibusdam';
    $request->commentReply->modifiedDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-11T05:43:22.650Z');
    $request->commentReply->replyId = 'voluptatibus';
    $request->commentReply->verb = 'vel';
    $request->alt = AltEnum::JSON;
    $request->commentId = 'magnam';
    $request->fields = 'quibusdam';
    $request->fileId = 'inventore';
    $request->key = 'facere';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->replyId = 'voluptatibus';
    $request->userIp = 'quia';

    $requestSecurity = new DriveRepliesUpdateSecurity();
    $requestSecurity->option1 = new DriveRepliesUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->replies->driveRepliesUpdate($request, $requestSecurity);

    if ($response->commentReply !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
