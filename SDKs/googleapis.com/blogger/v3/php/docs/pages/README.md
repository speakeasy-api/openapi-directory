# pages

### Available Operations

* [bloggerPagesDelete](#bloggerpagesdelete) - Deletes a page by blog id and page id.
* [bloggerPagesGet](#bloggerpagesget) - Gets a page by blog id and page id.
* [bloggerPagesInsert](#bloggerpagesinsert) - Inserts a page.
* [bloggerPagesList](#bloggerpageslist) - Lists pages.
* [bloggerPagesPatch](#bloggerpagespatch) - Patches a page.
* [bloggerPagesPublish](#bloggerpagespublish) - Publishes a page.
* [bloggerPagesRevert](#bloggerpagesrevert) - Reverts a published or scheduled page to draft state.
* [bloggerPagesUpdate](#bloggerpagesupdate) - Updates a page by blog id and page id.

## bloggerPagesDelete

Deletes a page by blog id and page id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPagesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPagesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerPagesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->blogId = 'aliquid';
    $request->callback = 'cupiditate';
    $request->fields = 'quos';
    $request->key = 'perferendis';
    $request->oauthToken = 'magni';
    $request->pageId = 'assumenda';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'fugit';
    $request->useTrash = false;

    $requestSecurity = new BloggerPagesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pages->bloggerPagesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerPagesGet

Gets a page by blog id and page id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPagesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPagesGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPagesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPagesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPagesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerPagesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->blogId = 'facilis';
    $request->callback = 'tempore';
    $request->fields = 'labore';
    $request->key = 'delectus';
    $request->oauthToken = 'eum';
    $request->pageId = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'eligendi';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'aliquid';
    $request->view = BloggerPagesGetViewEnum::AUTHOR;

    $requestSecurity = new BloggerPagesGetSecurity();
    $requestSecurity->option1 = new BloggerPagesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pages->bloggerPagesGet($request, $requestSecurity);

    if ($response->page !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerPagesInsert

Inserts a page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPagesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Page;
use \OpenAPI\OpenAPI\Models\Shared\PageAuthor;
use \OpenAPI\OpenAPI\Models\Shared\PageAuthorImage;
use \OpenAPI\OpenAPI\Models\Shared\PageBlog;
use \OpenAPI\OpenAPI\Models\Shared\PageStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPagesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerPagesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->page = new Page();
    $request->page->author = new PageAuthor();
    $request->page->author->displayName = 'sint';
    $request->page->author->id = 'a3efa77d-fb14-4cd6-aae3-95efb9ba88f3';
    $request->page->author->image = new PageAuthorImage();
    $request->page->author->image->url = 'deserunt';
    $request->page->author->url = 'nisi';
    $request->page->blog = new PageBlog();
    $request->page->blog->id = '6997074b-a446-49b6-a214-1959890afa56';
    $request->page->content = 'dolor';
    $request->page->etag = 'necessitatibus';
    $request->page->id = '2516fe4c-8b71-41e5-b7fd-2ed028921cdd';
    $request->page->kind = 'maxime';
    $request->page->published = 'ea';
    $request->page->selfLink = 'excepturi';
    $request->page->status = PageStatusEnum::LIVE;
    $request->page->title = 'Ms.';
    $request->page->trashed = 'accusantium';
    $request->page->updated = 'ab';
    $request->page->url = 'maiores';
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->blogId = 'voluptate';
    $request->callback = 'autem';
    $request->fields = 'nam';
    $request->isDraft = false;
    $request->key = 'eaque';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new BloggerPagesInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pages->bloggerPagesInsert($request, $requestSecurity);

    if ($response->page !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerPagesList

Lists pages.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPagesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPagesListStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPagesListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPagesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPagesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPagesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerPagesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::JSON;
    $request->blogId = 'cumque';
    $request->callback = 'corporis';
    $request->fetchBodies = false;
    $request->fields = 'hic';
    $request->key = 'libero';
    $request->maxResults = 749999;
    $request->oauthToken = 'dolores';
    $request->pageToken = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->status = [
        BloggerPagesListStatusEnum::LIVE,
        BloggerPagesListStatusEnum::DRAFT,
    ];
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'eos';
    $request->view = BloggerPagesListViewEnum::VIEW_TYPE_UNSPECIFIED;

    $requestSecurity = new BloggerPagesListSecurity();
    $requestSecurity->option1 = new BloggerPagesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pages->bloggerPagesList($request, $requestSecurity);

    if ($response->pageList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerPagesPatch

Patches a page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPagesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Page;
use \OpenAPI\OpenAPI\Models\Shared\PageAuthor;
use \OpenAPI\OpenAPI\Models\Shared\PageAuthorImage;
use \OpenAPI\OpenAPI\Models\Shared\PageBlog;
use \OpenAPI\OpenAPI\Models\Shared\PageStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPagesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerPagesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->page = new Page();
    $request->page->author = new PageAuthor();
    $request->page->author->displayName = 'minus';
    $request->page->author->id = '73d5fe9b-90c2-4890-9b3f-e49a8d9cbf48';
    $request->page->author->image = new PageAuthorImage();
    $request->page->author->image->url = 'aliquid';
    $request->page->author->url = 'dolorem';
    $request->page->blog = new PageBlog();
    $request->page->blog->id = '3323f9b7-7f3a-4410-8674-ebf69280d1ba';
    $request->page->content = 'iusto';
    $request->page->etag = 'voluptate';
    $request->page->id = 'a89ebf73-7ae4-4203-8e5e-6a95d8a0d446';
    $request->page->kind = 'quod';
    $request->page->published = 'officiis';
    $request->page->selfLink = 'qui';
    $request->page->status = PageStatusEnum::SOFT_TRASHED;
    $request->page->title = 'Dr.';
    $request->page->trashed = 'esse';
    $request->page->updated = 'harum';
    $request->page->url = 'iusto';
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->blogId = 'tenetur';
    $request->callback = 'amet';
    $request->fields = 'tempore';
    $request->key = 'accusamus';
    $request->oauthToken = 'numquam';
    $request->pageId = 'enim';
    $request->prettyPrint = false;
    $request->publish = false;
    $request->quotaUser = 'dolorem';
    $request->revert = false;
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new BloggerPagesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pages->bloggerPagesPatch($request, $requestSecurity);

    if ($response->page !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerPagesPublish

Publishes a page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPagesPublishRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPagesPublishSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerPagesPublishRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sit';
    $request->alt = AltEnum::PROTO;
    $request->blogId = 'neque';
    $request->callback = 'sed';
    $request->fields = 'vel';
    $request->key = 'libero';
    $request->oauthToken = 'voluptas';
    $request->pageId = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'incidunt';

    $requestSecurity = new BloggerPagesPublishSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pages->bloggerPagesPublish($request, $requestSecurity);

    if ($response->page !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerPagesRevert

Reverts a published or scheduled page to draft state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPagesRevertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPagesRevertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerPagesRevertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::PROTO;
    $request->blogId = 'pariatur';
    $request->callback = 'soluta';
    $request->fields = 'dicta';
    $request->key = 'laborum';
    $request->oauthToken = 'totam';
    $request->pageId = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'distinctio';

    $requestSecurity = new BloggerPagesRevertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pages->bloggerPagesRevert($request, $requestSecurity);

    if ($response->page !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerPagesUpdate

Updates a page by blog id and page id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPagesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Page;
use \OpenAPI\OpenAPI\Models\Shared\PageAuthor;
use \OpenAPI\OpenAPI\Models\Shared\PageAuthorImage;
use \OpenAPI\OpenAPI\Models\Shared\PageBlog;
use \OpenAPI\OpenAPI\Models\Shared\PageStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPagesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerPagesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->page = new Page();
    $request->page->author = new PageAuthor();
    $request->page->author->displayName = 'aliquid';
    $request->page->author->id = '79d23227-15bf-40cb-b1e3-1b8b90f3443a';
    $request->page->author->image = new PageAuthorImage();
    $request->page->author->image->url = 'architecto';
    $request->page->author->url = 'quae';
    $request->page->blog = new PageBlog();
    $request->page->blog->id = '08e0adcf-4b92-4187-9fce-953f73ef7fbc';
    $request->page->content = 'odio';
    $request->page->etag = 'similique';
    $request->page->id = 'bd74dd39-c0f5-4d2c-bf7c-70a45626d436';
    $request->page->kind = 'laudantium';
    $request->page->published = 'dicta';
    $request->page->selfLink = 'dolor';
    $request->page->status = PageStatusEnum::SOFT_TRASHED;
    $request->page->title = 'Mr.';
    $request->page->trashed = 'ex';
    $request->page->updated = 'nulla';
    $request->page->url = 'excepturi';
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::MEDIA;
    $request->blogId = 'sapiente';
    $request->callback = 'quisquam';
    $request->fields = 'saepe';
    $request->key = 'ea';
    $request->oauthToken = 'impedit';
    $request->pageId = 'corporis';
    $request->prettyPrint = false;
    $request->publish = false;
    $request->quotaUser = 'veniam';
    $request->revert = false;
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'inventore';

    $requestSecurity = new BloggerPagesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pages->bloggerPagesUpdate($request, $requestSecurity);

    if ($response->page !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
