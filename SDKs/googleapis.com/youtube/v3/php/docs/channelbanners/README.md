# channelBanners

### Available Operations

* [youtubeChannelBannersInsert](#youtubechannelbannersinsert) - Inserts a new resource into this collection.

## youtubeChannelBannersInsert

Inserts a new resource into this collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelBannersInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelBannersInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelBannersInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelBannersInsertSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeChannelBannersInsertSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeChannelBannersInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = 'aspernatur';
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'et';
    $request->channelId = 'excepturi';
    $request->fields = 'ullam';
    $request->key = 'provident';
    $request->oauthToken = 'quos';
    $request->onBehalfOfContentOwner = 'sint';
    $request->onBehalfOfContentOwnerChannel = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new YoutubeChannelBannersInsertSecurity();
    $requestSecurity->option1 = new YoutubeChannelBannersInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->channelBanners->youtubeChannelBannersInsert($request, $requestSecurity);

    if ($response->channelBannerResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
