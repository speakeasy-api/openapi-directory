# postUserInfos

### Available Operations

* [bloggerPostUserInfosGet](#bloggerpostuserinfosget) - Gets one post and user info pair, by post_id and user_id.
* [bloggerPostUserInfosList](#bloggerpostuserinfoslist) - Lists post and user info pairs.

## bloggerPostUserInfosGet

Gets one post and user info pair, by post_id and user_id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostUserInfosGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostUserInfosGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostUserInfosGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostUserInfosGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerPostUserInfosGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::PROTO;
    $request->blogId = 'consectetur';
    $request->callback = 'recusandae';
    $request->fields = 'aspernatur';
    $request->key = 'minima';
    $request->maxComments = 53427;
    $request->oauthToken = 'a';
    $request->postId = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'deleniti';
    $request->userId = 'impedit';

    $requestSecurity = new BloggerPostUserInfosGetSecurity();
    $requestSecurity->option1 = new BloggerPostUserInfosGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->postUserInfos->bloggerPostUserInfosGet($request, $requestSecurity);

    if ($response->postUserInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerPostUserInfosList

Lists post and user info pairs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostUserInfosListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostUserInfosListOrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostUserInfosListStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostUserInfosListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostUserInfosListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostUserInfosListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostUserInfosListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerPostUserInfosListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->blogId = 'inventore';
    $request->callback = 'non';
    $request->endDate = 'et';
    $request->fetchBodies = false;
    $request->fields = 'dolorum';
    $request->key = 'laborum';
    $request->labels = 'placeat';
    $request->maxResults = 245367;
    $request->oauthToken = 'eum';
    $request->orderBy = BloggerPostUserInfosListOrderByEnum::PUBLISHED;
    $request->pageToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'quas';
    $request->startDate = 'assumenda';
    $request->status = [
        BloggerPostUserInfosListStatusEnum::DRAFT,
        BloggerPostUserInfosListStatusEnum::SCHEDULED,
        BloggerPostUserInfosListStatusEnum::LIVE,
        BloggerPostUserInfosListStatusEnum::DRAFT,
    ];
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'explicabo';
    $request->userId = 'provident';
    $request->view = BloggerPostUserInfosListViewEnum::VIEW_TYPE_UNSPECIFIED;

    $requestSecurity = new BloggerPostUserInfosListSecurity();
    $requestSecurity->option1 = new BloggerPostUserInfosListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->postUserInfos->bloggerPostUserInfosList($request, $requestSecurity);

    if ($response->postUserInfosList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
