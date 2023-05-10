# comments

### Available Operations

* [bloggerCommentsGet](#bloggercommentsget) - Gets a comment by blog id, post id and comment id.
* [bloggerCommentsList](#bloggercommentslist) - Lists comments.

## bloggerCommentsGet

Gets a comment by blog id, post id and comment id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerCommentsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::PROTO;
    $request->blogId = 'quo';
    $request->callback = 'odit';
    $request->commentId = 'at';
    $request->fields = 'at';
    $request->key = 'maiores';
    $request->oauthToken = 'molestiae';
    $request->postId = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new BloggerCommentsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

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
use \OpenAPI\OpenAPI\Models\Operations\BloggerCommentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerCommentsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->blogId = 'nam';
    $request->callback = 'officia';
    $request->fetchBodies = false;
    $request->fields = 'occaecati';
    $request->key = 'fugit';
    $request->maxResults = 537373;
    $request->oauthToken = 'hic';
    $request->pageToken = 'optio';
    $request->postId = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'beatae';
    $request->startDate = 'commodi';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new BloggerCommentsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->bloggerCommentsList($request, $requestSecurity);

    if ($response->commentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
