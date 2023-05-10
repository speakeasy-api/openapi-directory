# thumbnails

### Available Operations

* [youtubeThumbnailsSet](#youtubethumbnailsset) - As this is not an insert in a strict sense (it supports uploading/setting of a thumbnail for multiple videos, which doesn't result in creation of a single resource), I use a custom verb here.

## youtubeThumbnailsSet

As this is not an insert in a strict sense (it supports uploading/setting of a thumbnail for multiple videos, which doesn't result in creation of a single resource), I use a custom verb here.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeThumbnailsSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeThumbnailsSetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeThumbnailsSetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeThumbnailsSetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeThumbnailsSetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeThumbnailsSetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeThumbnailsSetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fuga';
    $request->fields = 'hic';
    $request->key = 'eaque';
    $request->oauthToken = 'dolorem';
    $request->onBehalfOfContentOwner = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'aperiam';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'nulla';
    $request->videoId = 'enim';

    $requestSecurity = new YoutubeThumbnailsSetSecurity();
    $requestSecurity->option1 = new YoutubeThumbnailsSetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->thumbnails->youtubeThumbnailsSet($request, $requestSecurity);

    if ($response->thumbnailSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
