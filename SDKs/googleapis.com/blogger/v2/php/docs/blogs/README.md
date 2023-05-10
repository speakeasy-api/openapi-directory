# blogs

### Available Operations

* [bloggerBlogsGet](#bloggerblogsget) - Gets a blog by id.
* [bloggerBlogsList](#bloggerblogslist) - Lists blogs by user id, possibly filtered.

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
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerBlogsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->blogId = 'debitis';
    $request->callback = 'ipsa';
    $request->fields = 'delectus';
    $request->key = 'tempora';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new BloggerBlogsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->blogs->bloggerBlogsGet($request, $requestSecurity);

    if ($response->blog !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bloggerBlogsList

Lists blogs by user id, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerBlogsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'recusandae';
    $request->key = 'temporibus';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'deserunt';
    $request->userId = 'perferendis';

    $requestSecurity = new BloggerBlogsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->blogs->bloggerBlogsList($request, $requestSecurity);

    if ($response->blogList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
