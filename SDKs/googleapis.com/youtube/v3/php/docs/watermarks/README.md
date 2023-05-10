# watermarks

### Available Operations

* [youtubeWatermarksSet](#youtubewatermarksset) - Allows upload of watermark image and setting it for a channel.
* [youtubeWatermarksUnset](#youtubewatermarksunset) - Allows removal of channel watermark.

## youtubeWatermarksSet

Allows upload of watermark image and setting it for a channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeWatermarksSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeWatermarksSetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeWatermarksSetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeWatermarksSetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeWatermarksSetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeWatermarksSetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeWatermarksSetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = 'facere';
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ab';
    $request->channelId = 'ex';
    $request->fields = 'consectetur';
    $request->key = 'maiores';
    $request->oauthToken = 'sed';
    $request->onBehalfOfContentOwner = 'animi';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'voluptatum';

    $requestSecurity = new YoutubeWatermarksSetSecurity();
    $requestSecurity->option1 = new YoutubeWatermarksSetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->watermarks->youtubeWatermarksSet($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubeWatermarksUnset

Allows removal of channel watermark.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeWatermarksUnsetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeWatermarksUnsetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeWatermarksUnsetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeWatermarksUnsetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeWatermarksUnsetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeWatermarksUnsetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nihil';
    $request->channelId = 'tenetur';
    $request->fields = 'sapiente';
    $request->key = 'velit';
    $request->oauthToken = 'adipisci';
    $request->onBehalfOfContentOwner = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'optio';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'at';

    $requestSecurity = new YoutubeWatermarksUnsetSecurity();
    $requestSecurity->option1 = new YoutubeWatermarksUnsetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->watermarks->youtubeWatermarksUnset($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
