# replies

### Available Operations

* [driveRepliesCreate](#driverepliescreate) - Creates a reply to a comment.
* [driveRepliesDelete](#driverepliesdelete) - Deletes a reply.
* [driveRepliesGet](#driverepliesget) - Gets a reply by ID.
* [driveRepliesList](#drivereplieslist) - Lists a comment's replies.
* [driveRepliesUpdate](#driverepliesupdate) - Updates a reply with patch semantics.

## driveRepliesCreate

Creates a reply to a comment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Reply;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveRepliesCreateRequest();
    $request->reply = new Reply();
    $request->reply->action = 'suscipit';
    $request->reply->author = new User();
    $request->reply->author->displayName = 'reiciendis';
    $request->reply->author->emailAddress = 'quidem';
    $request->reply->author->kind = 'saepe';
    $request->reply->author->me = false;
    $request->reply->author->permissionId = 'necessitatibus';
    $request->reply->author->photoLink = 'dolore';
    $request->reply->content = 'sunt';
    $request->reply->createdTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-11T12:10:44.801Z');
    $request->reply->deleted = false;
    $request->reply->htmlContent = 'non';
    $request->reply->id = '317fe35b-60eb-41ea-8265-55ba3c28744e';
    $request->reply->kind = 'temporibus';
    $request->reply->modifiedTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-06T05:22:53.091Z');
    $request->alt = AltEnum::JSON;
    $request->commentId = 'cum';
    $request->fields = 'blanditiis';
    $request->fileId = 'quas';
    $request->key = 'hic';
    $request->oauthToken = 'nesciunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->userIp = 'corrupti';

    $requestSecurity = new DriveRepliesCreateSecurity();
    $requestSecurity->option1 = new DriveRepliesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->replies->driveRepliesCreate($request, $requestSecurity);

    if ($response->reply !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->commentId = 'pariatur';
    $request->fields = 'totam';
    $request->fileId = 'hic';
    $request->key = 'exercitationem';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'sit';
    $request->replyId = 'rerum';
    $request->userIp = 'sed';

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

Gets a reply by ID.

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
    $request->commentId = 'reiciendis';
    $request->fields = 'explicabo';
    $request->fileId = 'asperiores';
    $request->includeDeleted = false;
    $request->key = 'facilis';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'expedita';
    $request->replyId = 'ab';
    $request->userIp = 'iste';

    $requestSecurity = new DriveRepliesGetSecurity();
    $requestSecurity->option1 = new DriveRepliesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->replies->driveRepliesGet($request, $requestSecurity);

    if ($response->reply !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveRepliesList

Lists a comment's replies.

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
    $request->commentId = 'dolore';
    $request->fields = 'laborum';
    $request->fileId = 'sed';
    $request->includeDeleted = false;
    $request->key = 'in';
    $request->oauthToken = 'commodi';
    $request->pageSize = 696077;
    $request->pageToken = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->userIp = 'unde';

    $requestSecurity = new DriveRepliesListSecurity();
    $requestSecurity->option1 = new DriveRepliesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->replies->driveRepliesList($request, $requestSecurity);

    if ($response->replyList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driveRepliesUpdate

Updates a reply with patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Reply;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveRepliesUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveRepliesUpdateRequest();
    $request->reply = new Reply();
    $request->reply->action = 'architecto';
    $request->reply->author = new User();
    $request->reply->author->displayName = 'suscipit';
    $request->reply->author->emailAddress = 'sapiente';
    $request->reply->author->kind = 'debitis';
    $request->reply->author->me = false;
    $request->reply->author->permissionId = 'illo';
    $request->reply->author->photoLink = 'reiciendis';
    $request->reply->content = 'perferendis';
    $request->reply->createdTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-15T21:52:35.790Z');
    $request->reply->deleted = false;
    $request->reply->htmlContent = 'incidunt';
    $request->reply->id = '294e3698-f447-4f60-be8b-445e80ca55ef';
    $request->reply->kind = 'nulla';
    $request->reply->modifiedTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-14T05:28:22.043Z');
    $request->alt = AltEnum::JSON;
    $request->commentId = 'saepe';
    $request->fields = 'numquam';
    $request->fileId = 'veniam';
    $request->key = 'in';
    $request->oauthToken = 'officiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'beatae';
    $request->replyId = 'laudantium';
    $request->userIp = 'exercitationem';

    $requestSecurity = new DriveRepliesUpdateSecurity();
    $requestSecurity->option1 = new DriveRepliesUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->replies->driveRepliesUpdate($request, $requestSecurity);

    if ($response->reply !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
