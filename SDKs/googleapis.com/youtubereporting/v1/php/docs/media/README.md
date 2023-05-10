# media

### Available Operations

* [youtubereportingMediaDownload](#youtubereportingmediadownload) - Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.

## youtubereportingMediaDownload

Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingMediaDownloadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingMediaDownloadSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingMediaDownloadSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingMediaDownloadSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubereportingMediaDownloadRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'praesentium';
    $request->key = 'rem';
    $request->oauthToken = 'voluptates';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->resourceName = 'repudiandae';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new YoutubereportingMediaDownloadSecurity();
    $requestSecurity->option1 = new YoutubereportingMediaDownloadSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->media->youtubereportingMediaDownload($request, $requestSecurity);

    if ($response->gdataMedia !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
