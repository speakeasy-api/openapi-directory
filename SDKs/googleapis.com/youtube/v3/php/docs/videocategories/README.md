# videoCategories

### Available Operations

* [youtubeVideoCategoriesList](#youtubevideocategorieslist) - Retrieves a list of resources, possibly filtered.

## youtubeVideoCategoriesList

Retrieves a list of resources, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideoCategoriesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideoCategoriesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideoCategoriesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideoCategoriesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideoCategoriesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeVideoCategoriesListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeVideoCategoriesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::JSON;
    $request->callback = 'similique';
    $request->fields = 'ea';
    $request->hl = 'animi';
    $request->id = [
        'tenetur',
        'dignissimos',
    ];
    $request->key = 'esse';
    $request->oauthToken = 'animi';
    $request->part = [
        'esse',
        'eveniet',
        'earum',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->regionCode = 'officiis';
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'rerum';

    $requestSecurity = new YoutubeVideoCategoriesListSecurity();
    $requestSecurity->option1 = new YoutubeVideoCategoriesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->videoCategories->youtubeVideoCategoriesList($request, $requestSecurity);

    if ($response->videoCategoryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
