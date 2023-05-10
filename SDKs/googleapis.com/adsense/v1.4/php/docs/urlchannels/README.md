# urlchannels

### Available Operations

* [adsenseUrlchannelsList](#adsenseurlchannelslist) - List all URL channels in the specified ad client for this AdSense account.

## adsenseUrlchannelsList

List all URL channels in the specified ad client for this AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseUrlchannelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseUrlchannelsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseUrlchannelsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseUrlchannelsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseUrlchannelsListRequest();
    $request->adClientId = 'iste';
    $request->alt = AltEnum::JSON;
    $request->fields = 'deleniti';
    $request->key = 'pariatur';
    $request->maxResults = 589910;
    $request->oauthToken = 'nobis';
    $request->pageToken = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->userIp = 'quaerat';

    $requestSecurity = new AdsenseUrlchannelsListSecurity();
    $requestSecurity->option1 = new AdsenseUrlchannelsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->urlchannels->adsenseUrlchannelsList($request, $requestSecurity);

    if ($response->urlChannels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
