# blogs

### Available Operations

* [bloggerBlogsGet](#bloggerblogsget) - Gets a blog by id.
* [bloggerBlogsGetByUrl](#bloggerblogsgetbyurl) - Gets a blog by url.
* [bloggerBlogsListByUser](#bloggerblogslistbyuser) - Lists blogs by user.

## bloggerBlogsGet

Gets a blog by id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerBlogsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->blogId = 'quis';
    $request->callback = 'veritatis';
    $request->fields = 'deserunt';
    $request->key = 'perferendis';
    $request->maxPosts = 368241;
    $request->oauthToken = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'odit';
    $request->view = BloggerBlogsGetViewEnum::ADMIN;

    $requestSecurity = new BloggerBlogsGetSecurity();
    $requestSecurity->option1 = new BloggerBlogsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->blogs->bloggerBlogsGet($request, $requestSecurity);

    if ($response->blog !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerBlogsGetByUrl

Gets a blog by url.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogsGetByUrlRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogsGetByUrlViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogsGetByUrlSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogsGetByUrlSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogsGetByUrlSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerBlogsGetByUrlRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->fields = 'quod';
    $request->key = 'esse';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'dicta';
    $request->url = 'nam';
    $request->view = BloggerBlogsGetByUrlViewEnum::AUTHOR;

    $requestSecurity = new BloggerBlogsGetByUrlSecurity();
    $requestSecurity->option1 = new BloggerBlogsGetByUrlSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->blogs->bloggerBlogsGetByUrl($request, $requestSecurity);

    if ($response->blog !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerBlogsListByUser

Lists blogs by user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogsListByUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogsListByUserRoleEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogsListByUserStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogsListByUserViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogsListByUserSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogsListByUserSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogsListByUserSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerBlogsListByUserRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fetchUserInfo = false;
    $request->fields = 'optio';
    $request->key = 'totam';
    $request->oauthToken = 'beatae';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->role = [
        BloggerBlogsListByUserRoleEnum::READER,
        BloggerBlogsListByUserRoleEnum::VIEW_TYPE_UNSPECIFIED,
    ];
    $request->status = [
        BloggerBlogsListByUserStatusEnum::DELETED,
        BloggerBlogsListByUserStatusEnum::LIVE,
        BloggerBlogsListByUserStatusEnum::LIVE,
        BloggerBlogsListByUserStatusEnum::DELETED,
    ];
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'perferendis';
    $request->userId = 'ad';
    $request->view = BloggerBlogsListByUserViewEnum::AUTHOR;

    $requestSecurity = new BloggerBlogsListByUserSecurity();
    $requestSecurity->option1 = new BloggerBlogsListByUserSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->blogs->bloggerBlogsListByUser($request, $requestSecurity);

    if ($response->blogList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
