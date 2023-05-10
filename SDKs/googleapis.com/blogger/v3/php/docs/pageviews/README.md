# pageViews

### Available Operations

* [bloggerPageViewsGet](#bloggerpageviewsget) - Gets page views by blog id.

## bloggerPageViewsGet

Gets page views by blog id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPageViewsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPageViewsGetRangeEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerPageViewsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerPageViewsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->blogId = 'sint';
    $request->callback = 'veritatis';
    $request->fields = 'itaque';
    $request->key = 'incidunt';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequatur';
    $request->range = [
        BloggerPageViewsGetRangeEnum::SEVEN_DAYS,
        BloggerPageViewsGetRangeEnum::ALL,
        BloggerPageViewsGetRangeEnum::THIRTY_DAYS,
    ];
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new BloggerPageViewsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pageViews->bloggerPageViewsGet($request, $requestSecurity);

    if ($response->pageviews !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
