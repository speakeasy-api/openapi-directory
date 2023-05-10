<!-- Start SDK Example Usage -->
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->blogId = 'quibusdam';
    $request->callback = 'unde';
    $request->fields = 'nulla';
    $request->key = 'corrupti';
    $request->maxPosts = 847252;
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';
    $request->userId = 'iure';

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
<!-- End SDK Example Usage -->