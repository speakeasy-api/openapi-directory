# posts

### Available Operations

* [bloggerPostsDelete](#bloggerpostsdelete) - Deletes a post by blog id and post id.
* [bloggerPostsGet](#bloggerpostsget) - Gets a post by blog id and post id
* [bloggerPostsGetByPath](#bloggerpostsgetbypath) - Gets a post by path.
* [bloggerPostsInsert](#bloggerpostsinsert) - Inserts a post.
* [bloggerPostsList](#bloggerpostslist) - Lists posts.
* [bloggerPostsPatch](#bloggerpostspatch) - Patches a post.
* [bloggerPostsPublish](#bloggerpostspublish) - Publishes a post.
* [bloggerPostsRevert](#bloggerpostsrevert) - Reverts a published or scheduled post to draft state.
* [bloggerPostsSearch](#bloggerpostssearch) - Searches for posts matching given query terms in the specified blog.
* [bloggerPostsUpdate](#bloggerpostsupdate) - Updates a post by blog id and post id.

## bloggerPostsDelete

Deletes a post by blog id and post id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerPostsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::MEDIA;
    $request->blogId = 'eius';
    $request->callback = 'esse';
    $request->fields = 'esse';
    $request->key = 'rem';
    $request->oauthToken = 'fuga';
    $request->postId = 'reprehenderit';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'ut';
    $request->useTrash = false;

    $requestSecurity = new BloggerPostsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->posts->bloggerPostsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerPostsGet

Gets a post by blog id and post id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerPostsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::PROTO;
    $request->blogId = 'eos';
    $request->callback = 'praesentium';
    $request->fetchBody = false;
    $request->fetchImages = false;
    $request->fields = 'quisquam';
    $request->key = 'veritatis';
    $request->maxComments = 56848;
    $request->oauthToken = 'id';
    $request->postId = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'neque';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'illum';
    $request->view = BloggerPostsGetViewEnum::ADMIN;

    $requestSecurity = new BloggerPostsGetSecurity();
    $requestSecurity->option1 = new BloggerPostsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->posts->bloggerPostsGet($request, $requestSecurity);

    if ($response->post !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerPostsGetByPath

Gets a post by path.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsGetByPathRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsGetByPathViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsGetByPathSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsGetByPathSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsGetByPathSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerPostsGetByPathRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eius';
    $request->alt = AltEnum::JSON;
    $request->blogId = 'voluptas';
    $request->callback = 'ab';
    $request->fields = 'cupiditate';
    $request->key = 'consequatur';
    $request->maxComments = 272822;
    $request->oauthToken = 'debitis';
    $request->path = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'quo';
    $request->view = BloggerPostsGetByPathViewEnum::READER;

    $requestSecurity = new BloggerPostsGetByPathSecurity();
    $requestSecurity->option1 = new BloggerPostsGetByPathSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->posts->bloggerPostsGetByPath($request, $requestSecurity);

    if ($response->post !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerPostsInsert

Inserts a post.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Post;
use \OpenAPI\OpenAPI\Models\Shared\PostAuthor;
use \OpenAPI\OpenAPI\Models\Shared\PostAuthorImage;
use \OpenAPI\OpenAPI\Models\Shared\PostBlog;
use \OpenAPI\OpenAPI\Models\Shared\PostImages;
use \OpenAPI\OpenAPI\Models\Shared\PostLocation;
use \OpenAPI\OpenAPI\Models\Shared\PostReaderCommentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\PostReplies;
use \OpenAPI\OpenAPI\Models\Shared\Comment;
use \OpenAPI\OpenAPI\Models\Shared\CommentAuthor;
use \OpenAPI\OpenAPI\Models\Shared\CommentAuthorImage;
use \OpenAPI\OpenAPI\Models\Shared\CommentBlog;
use \OpenAPI\OpenAPI\Models\Shared\CommentInReplyTo;
use \OpenAPI\OpenAPI\Models\Shared\CommentPost;
use \OpenAPI\OpenAPI\Models\Shared\CommentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PostStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerPostsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->post = new Post();
    $request->post->author = new PostAuthor();
    $request->post->author->displayName = 'aperiam';
    $request->post->author->id = 'bc7178e4-796f-42a7-8c68-8282aa482562';
    $request->post->author->image = new PostAuthorImage();
    $request->post->author->image->url = 'sapiente';
    $request->post->author->url = 'consequuntur';
    $request->post->blog = new PostBlog();
    $request->post->blog->id = '22e9817e-e17c-4be6-9e6b-7b95bc0ab3c2';
    $request->post->content = 'consequatur';
    $request->post->customMetaData = 'minus';
    $request->post->etag = 'quaerat';
    $request->post->id = 'f3789fd8-71f9-49dd-aefd-121aa6f1e674';
    $request->post->images = [
        new PostImages(),
        new PostImages(),
        new PostImages(),
    ];
    $request->post->kind = 'illum';
    $request->post->labels = [
        'accusantium',
        'aliquam',
        'sapiente',
    ];
    $request->post->location = new PostLocation();
    $request->post->location->lat = 1197.71;
    $request->post->location->lng = 3553.69;
    $request->post->location->name = 'Ms. Dana Huel';
    $request->post->location->span = 'quibusdam';
    $request->post->published = 'ex';
    $request->post->readerComments = PostReaderCommentsEnum::DONT_ALLOW_SHOW_EXISTING;
    $request->post->replies = new PostReplies();
    $request->post->replies->items = [
        new Comment(),
        new Comment(),
        new Comment(),
        new Comment(),
    ];
    $request->post->replies->selfLink = 'dolorum';
    $request->post->replies->totalItems = 'architecto';
    $request->post->selfLink = 'omnis';
    $request->post->status = PostStatusEnum::SOFT_TRASHED;
    $request->post->title = 'Mr.';
    $request->post->titleLink = 'at';
    $request->post->trashed = 'et';
    $request->post->updated = 'voluptate';
    $request->post->url = 'ipsa';
    $request->accessToken = 'minima';
    $request->alt = AltEnum::JSON;
    $request->blogId = 'consectetur';
    $request->callback = 'adipisci';
    $request->fetchBody = false;
    $request->fetchImages = false;
    $request->fields = 'iste';
    $request->isDraft = false;
    $request->key = 'temporibus';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'rem';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'laudantium';

    $requestSecurity = new BloggerPostsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->posts->bloggerPostsInsert($request, $requestSecurity);

    if ($response->post !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerPostsList

Lists posts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsListOrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsListSortOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsListStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerPostsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->blogId = 'corrupti';
    $request->callback = 'non';
    $request->endDate = 'voluptatem';
    $request->fetchBodies = false;
    $request->fetchImages = false;
    $request->fields = 'dolor';
    $request->key = 'occaecati';
    $request->labels = 'numquam';
    $request->maxResults = 771089;
    $request->oauthToken = 'explicabo';
    $request->orderBy = BloggerPostsListOrderByEnum::PUBLISHED;
    $request->pageToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'dignissimos';
    $request->sortOption = BloggerPostsListSortOptionEnum::SORT_OPTION_UNSPECIFIED;
    $request->startDate = 'maiores';
    $request->status = [
        BloggerPostsListStatusEnum::LIVE,
        BloggerPostsListStatusEnum::SOFT_TRASHED,
        BloggerPostsListStatusEnum::DRAFT,
    ];
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'aperiam';
    $request->view = BloggerPostsListViewEnum::READER;

    $requestSecurity = new BloggerPostsListSecurity();
    $requestSecurity->option1 = new BloggerPostsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->posts->bloggerPostsList($request, $requestSecurity);

    if ($response->postList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerPostsPatch

Patches a post.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Post;
use \OpenAPI\OpenAPI\Models\Shared\PostAuthor;
use \OpenAPI\OpenAPI\Models\Shared\PostAuthorImage;
use \OpenAPI\OpenAPI\Models\Shared\PostBlog;
use \OpenAPI\OpenAPI\Models\Shared\PostImages;
use \OpenAPI\OpenAPI\Models\Shared\PostLocation;
use \OpenAPI\OpenAPI\Models\Shared\PostReaderCommentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\PostReplies;
use \OpenAPI\OpenAPI\Models\Shared\Comment;
use \OpenAPI\OpenAPI\Models\Shared\CommentAuthor;
use \OpenAPI\OpenAPI\Models\Shared\CommentAuthorImage;
use \OpenAPI\OpenAPI\Models\Shared\CommentBlog;
use \OpenAPI\OpenAPI\Models\Shared\CommentInReplyTo;
use \OpenAPI\OpenAPI\Models\Shared\CommentPost;
use \OpenAPI\OpenAPI\Models\Shared\CommentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PostStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerPostsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->post = new Post();
    $request->post->author = new PostAuthor();
    $request->post->author->displayName = 'consequuntur';
    $request->post->author->id = 'dac7af51-5cc4-413a-a63a-ae8d67864dbb';
    $request->post->author->image = new PostAuthorImage();
    $request->post->author->image->url = 'commodi';
    $request->post->author->url = 'in';
    $request->post->blog = new PostBlog();
    $request->post->blog->id = '5fd5e60b-375e-4d4f-afbe-e41f33317fe3';
    $request->post->content = 'corporis';
    $request->post->customMetaData = 'harum';
    $request->post->etag = 'laboriosam';
    $request->post->id = '0eb1ea42-6555-4ba3-8287-44ed53b88f3a';
    $request->post->images = [
        new PostImages(),
        new PostImages(),
        new PostImages(),
    ];
    $request->post->kind = 'pariatur';
    $request->post->labels = [
        'hic',
        'exercitationem',
        'nobis',
    ];
    $request->post->location = new PostLocation();
    $request->post->location->lat = 246.19;
    $request->post->location->lng = 6995.75;
    $request->post->location->name = 'Faith Cole';
    $request->post->location->span = 'voluptate';
    $request->post->published = 'expedita';
    $request->post->readerComments = PostReaderCommentsEnum::ALLOW;
    $request->post->replies = new PostReplies();
    $request->post->replies->items = [
        new Comment(),
        new Comment(),
        new Comment(),
    ];
    $request->post->replies->selfLink = 'dolore';
    $request->post->replies->totalItems = 'laborum';
    $request->post->selfLink = 'sed';
    $request->post->status = PostStatusEnum::DRAFT;
    $request->post->title = 'Ms.';
    $request->post->titleLink = 'quidem';
    $request->post->trashed = 'explicabo';
    $request->post->updated = 'voluptas';
    $request->post->url = 'unde';
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::MEDIA;
    $request->blogId = 'sapiente';
    $request->callback = 'debitis';
    $request->fetchBody = false;
    $request->fetchImages = false;
    $request->fields = 'illo';
    $request->key = 'reiciendis';
    $request->maxComments = 19300;
    $request->oauthToken = 'corrupti';
    $request->postId = 'maiores';
    $request->prettyPrint = false;
    $request->publish = false;
    $request->quotaUser = 'incidunt';
    $request->revert = false;
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new BloggerPostsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->posts->bloggerPostsPatch($request, $requestSecurity);

    if ($response->post !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerPostsPublish

Publishes a post.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsPublishRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsPublishSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerPostsPublishRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::JSON;
    $request->blogId = 'ea';
    $request->callback = 'occaecati';
    $request->fields = 'quos';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'tempora';
    $request->postId = 'tempora';
    $request->prettyPrint = false;
    $request->publishDate = 'voluptate';
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'sit';

    $requestSecurity = new BloggerPostsPublishSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->posts->bloggerPostsPublish($request, $requestSecurity);

    if ($response->post !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerPostsRevert

Reverts a published or scheduled post to draft state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsRevertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsRevertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerPostsRevertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::MEDIA;
    $request->blogId = 'facilis';
    $request->callback = 'quaerat';
    $request->fields = 'incidunt';
    $request->key = 'ipsam';
    $request->oauthToken = 'debitis';
    $request->postId = 'rem';
    $request->prettyPrint = false;
    $request->quotaUser = 'sit';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'error';

    $requestSecurity = new BloggerPostsRevertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->posts->bloggerPostsRevert($request, $requestSecurity);

    if ($response->post !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerPostsSearch

Searches for posts matching given query terms in the specified blog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsSearchOrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsSearchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsSearchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsSearchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerPostsSearchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minima';
    $request->alt = AltEnum::PROTO;
    $request->blogId = 'reiciendis';
    $request->callback = 'nulla';
    $request->fetchBodies = false;
    $request->fields = 'magni';
    $request->key = 'aperiam';
    $request->oauthToken = 'saepe';
    $request->orderBy = BloggerPostsSearchOrderByEnum::ORDER_BY_UNSPECIFIED;
    $request->prettyPrint = false;
    $request->q = 'veniam';
    $request->quotaUser = 'in';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'beatae';

    $requestSecurity = new BloggerPostsSearchSecurity();
    $requestSecurity->option1 = new BloggerPostsSearchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->posts->bloggerPostsSearch($request, $requestSecurity);

    if ($response->postList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerPostsUpdate

Updates a post by blog id and post id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Post;
use \OpenAPI\OpenAPI\Models\Shared\PostAuthor;
use \OpenAPI\OpenAPI\Models\Shared\PostAuthorImage;
use \OpenAPI\OpenAPI\Models\Shared\PostBlog;
use \OpenAPI\OpenAPI\Models\Shared\PostImages;
use \OpenAPI\OpenAPI\Models\Shared\PostLocation;
use \OpenAPI\OpenAPI\Models\Shared\PostReaderCommentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\PostReplies;
use \OpenAPI\OpenAPI\Models\Shared\Comment;
use \OpenAPI\OpenAPI\Models\Shared\CommentAuthor;
use \OpenAPI\OpenAPI\Models\Shared\CommentAuthorImage;
use \OpenAPI\OpenAPI\Models\Shared\CommentBlog;
use \OpenAPI\OpenAPI\Models\Shared\CommentInReplyTo;
use \OpenAPI\OpenAPI\Models\Shared\CommentPost;
use \OpenAPI\OpenAPI\Models\Shared\CommentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PostStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerPostsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->post = new Post();
    $request->post->author = new PostAuthor();
    $request->post->author->displayName = 'exercitationem';
    $request->post->author->id = '8b6a89fb-e3a5-4aa8-a482-4d0ab4075088';
    $request->post->author->image = new PostAuthorImage();
    $request->post->author->image->url = 'repudiandae';
    $request->post->author->url = 'corporis';
    $request->post->blog = new PostBlog();
    $request->post->blog->id = '1862065e-904f-43b1-994b-8abf603a79f9';
    $request->post->content = 'repellendus';
    $request->post->customMetaData = 'delectus';
    $request->post->etag = 'voluptates';
    $request->post->id = '0ab7da8a-50ce-4187-b86b-c173d689eee9';
    $request->post->images = [
        new PostImages(),
        new PostImages(),
    ];
    $request->post->kind = 'aspernatur';
    $request->post->labels = [
        'maiores',
        'corrupti',
    ];
    $request->post->location = new PostLocation();
    $request->post->location->lat = 8717.86;
    $request->post->location->lng = 6216.93;
    $request->post->location->name = 'Shane Walker';
    $request->post->location->span = 'sunt';
    $request->post->published = 'recusandae';
    $request->post->readerComments = PostReaderCommentsEnum::DONT_ALLOW_HIDE_EXISTING;
    $request->post->replies = new PostReplies();
    $request->post->replies->items = [
        new Comment(),
        new Comment(),
        new Comment(),
        new Comment(),
    ];
    $request->post->replies->selfLink = 'labore';
    $request->post->replies->totalItems = 'reiciendis';
    $request->post->selfLink = 'doloremque';
    $request->post->status = PostStatusEnum::SOFT_TRASHED;
    $request->post->title = 'Mr.';
    $request->post->titleLink = 'accusantium';
    $request->post->trashed = 'beatae';
    $request->post->updated = 'dolores';
    $request->post->url = 'enim';
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::JSON;
    $request->blogId = 'a';
    $request->callback = 'molestias';
    $request->fetchBody = false;
    $request->fetchImages = false;
    $request->fields = 'magnam';
    $request->key = 'saepe';
    $request->maxComments = 160467;
    $request->oauthToken = 'occaecati';
    $request->postId = 'officiis';
    $request->prettyPrint = false;
    $request->publish = false;
    $request->quotaUser = 'perspiciatis';
    $request->revert = false;
    $request->uploadType = 'in';
    $request->uploadProtocol = 'adipisci';

    $requestSecurity = new BloggerPostsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->posts->bloggerPostsUpdate($request, $requestSecurity);

    if ($response->post !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
