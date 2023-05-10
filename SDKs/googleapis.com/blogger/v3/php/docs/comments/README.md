# comments

### Available Operations

* [bloggerCommentsApprove](#bloggercommentsapprove) - Marks a comment as not spam by blog id, post id and comment id.
* [bloggerCommentsDelete](#bloggercommentsdelete) - Deletes a comment by blog id, post id and comment id.
* [bloggerCommentsGet](#bloggercommentsget) - Gets a comment by id.
* [bloggerCommentsList](#bloggercommentslist) - Lists comments.
* [bloggerCommentsListByBlog](#bloggercommentslistbyblog) - Lists comments by blog.
* [bloggerCommentsMarkAsSpam](#bloggercommentsmarkasspam) - Marks a comment as spam by blog id, post id and comment id.
* [bloggerCommentsRemoveContent](#bloggercommentsremovecontent) - Removes the content of a comment by blog id, post id and comment id.

## bloggerCommentsApprove

Marks a comment as not spam by blog id, post id and comment id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsApproveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsApproveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerCommentsApproveRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::JSON;
    $request->blogId = 'natus';
    $request->callback = 'laboriosam';
    $request->commentId = 'hic';
    $request->fields = 'saepe';
    $request->key = 'fuga';
    $request->oauthToken = 'in';
    $request->postId = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new BloggerCommentsApproveSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->bloggerCommentsApprove($request, $requestSecurity);

    if ($response->comment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerCommentsDelete

Deletes a comment by blog id, post id and comment id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerCommentsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->blogId = 'reiciendis';
    $request->callback = 'est';
    $request->commentId = 'mollitia';
    $request->fields = 'laborum';
    $request->key = 'dolores';
    $request->oauthToken = 'dolorem';
    $request->postId = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new BloggerCommentsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->bloggerCommentsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerCommentsGet

Gets a comment by id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerCommentsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->blogId = 'excepturi';
    $request->callback = 'accusantium';
    $request->commentId = 'iure';
    $request->fields = 'culpa';
    $request->key = 'doloribus';
    $request->oauthToken = 'sapiente';
    $request->postId = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'culpa';
    $request->view = BloggerCommentsGetViewEnum::VIEW_TYPE_UNSPECIFIED;

    $requestSecurity = new BloggerCommentsGetSecurity();
    $requestSecurity->option1 = new BloggerCommentsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->bloggerCommentsGet($request, $requestSecurity);

    if ($response->comment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerCommentsList

Lists comments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsListStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerCommentsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::MEDIA;
    $request->blogId = 'numquam';
    $request->callback = 'commodi';
    $request->endDate = 'quam';
    $request->fetchBodies = false;
    $request->fields = 'molestiae';
    $request->key = 'velit';
    $request->maxResults = 623510;
    $request->oauthToken = 'quia';
    $request->pageToken = 'quis';
    $request->postId = 'vitae';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->startDate = 'animi';
    $request->status = BloggerCommentsListStatusEnum::EMPTIED;
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'quo';
    $request->view = BloggerCommentsListViewEnum::VIEW_TYPE_UNSPECIFIED;

    $requestSecurity = new BloggerCommentsListSecurity();
    $requestSecurity->option1 = new BloggerCommentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->bloggerCommentsList($request, $requestSecurity);

    if ($response->commentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerCommentsListByBlog

Lists comments by blog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsListByBlogRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsListByBlogStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsListByBlogSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsListByBlogSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsListByBlogSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerCommentsListByBlogRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->blogId = 'possimus';
    $request->callback = 'aut';
    $request->endDate = 'quasi';
    $request->fetchBodies = false;
    $request->fields = 'error';
    $request->key = 'temporibus';
    $request->maxResults = 673660;
    $request->oauthToken = 'quasi';
    $request->pageToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->startDate = 'vero';
    $request->status = [
        BloggerCommentsListByBlogStatusEnum::PENDING,
        BloggerCommentsListByBlogStatusEnum::SPAM,
    ];
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new BloggerCommentsListByBlogSecurity();
    $requestSecurity->option1 = new BloggerCommentsListByBlogSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->bloggerCommentsListByBlog($request, $requestSecurity);

    if ($response->commentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerCommentsMarkAsSpam

Marks a comment as spam by blog id, post id and comment id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsMarkAsSpamRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsMarkAsSpamSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerCommentsMarkAsSpamRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cum';
    $request->alt = AltEnum::JSON;
    $request->blogId = 'doloremque';
    $request->callback = 'reprehenderit';
    $request->commentId = 'ut';
    $request->fields = 'maiores';
    $request->key = 'dicta';
    $request->oauthToken = 'corporis';
    $request->postId = 'dolore';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'harum';

    $requestSecurity = new BloggerCommentsMarkAsSpamSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->bloggerCommentsMarkAsSpam($request, $requestSecurity);

    if ($response->comment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerCommentsRemoveContent

Removes the content of a comment by blog id, post id and comment id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsRemoveContentRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsRemoveContentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerCommentsRemoveContentRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::MEDIA;
    $request->blogId = 'repudiandae';
    $request->callback = 'quae';
    $request->commentId = 'ipsum';
    $request->fields = 'quidem';
    $request->key = 'molestias';
    $request->oauthToken = 'excepturi';
    $request->postId = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'rem';

    $requestSecurity = new BloggerCommentsRemoveContentSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->bloggerCommentsRemoveContent($request, $requestSecurity);

    if ($response->comment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
