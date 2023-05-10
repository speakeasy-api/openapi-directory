# blogUserInfos

### Available Operations

* [bloggerBlogUserInfosGet](#bloggerbloguserinfosget) - Gets one blog and user info pair by blog id and user id.

## bloggerBlogUserInfosGet

Gets one blog and user info pair by blog id and user id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogUserInfosGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogUserInfosGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogUserInfosGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogUserInfosGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerBlogUserInfosGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->blogId = 'delectus';
    $request->callback = 'tempora';
    $request->fields = 'suscipit';
    $request->key = 'molestiae';
    $request->maxPosts = 791725;
    $request->oauthToken = 'placeat';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatum';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'excepturi';
    $request->userId = 'nisi';

    $requestSecurity = new BloggerBlogUserInfosGetSecurity();
    $requestSecurity->option1 = new BloggerBlogUserInfosGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->blogUserInfos->bloggerBlogUserInfosGet($request, $requestSecurity);

    if ($response->blogUserInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
