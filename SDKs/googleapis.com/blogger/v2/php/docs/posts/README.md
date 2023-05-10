# posts

### Available Operations

* [bloggerPostsGet](#bloggerpostsget) - Gets a post by blog id and post id
* [bloggerPostsList](#bloggerpostslist) - Lists posts.

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
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerPostsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->blogId = 'reiciendis';
    $request->callback = 'est';
    $request->fields = 'mollitia';
    $request->key = 'laborum';
    $request->oauthToken = 'dolores';
    $request->postId = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new BloggerPostsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->posts->bloggerPostsGet($request, $requestSecurity);

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
use \OpenAPI\OpenAPI\Models\Operations\BloggerPostsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerPostsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->blogId = 'minima';
    $request->callback = 'excepturi';
    $request->fetchBodies = false;
    $request->fields = 'accusantium';
    $request->key = 'iure';
    $request->maxResults = 634274;
    $request->oauthToken = 'doloribus';
    $request->pageToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->startDate = 'mollitia';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'culpa';

    $requestSecurity = new BloggerPostsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->posts->bloggerPostsList($request, $requestSecurity);

    if ($response->postList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
