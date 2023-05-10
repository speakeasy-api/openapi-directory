# urlchannels

### Available Operations

* [adsensehostUrlchannelsDelete](#adsensehosturlchannelsdelete) - Delete a URL channel from the host AdSense account.
* [adsensehostUrlchannelsInsert](#adsensehosturlchannelsinsert) - Add a new URL channel to the host AdSense account.
* [adsensehostUrlchannelsList](#adsensehosturlchannelslist) - List all host URL channels in the host AdSense account.

## adsensehostUrlchannelsDelete

Delete a URL channel from the host AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostUrlchannelsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostUrlchannelsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostUrlchannelsDeleteRequest();
    $request->adClientId = 'adipisci';
    $request->alt = AltEnum::JSON;
    $request->fields = 'architecto';
    $request->key = 'quae';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'quas';
    $request->urlChannelId = 'itaque';
    $request->userIp = 'consequatur';

    $requestSecurity = new AdsensehostUrlchannelsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->urlchannels->adsensehostUrlchannelsDelete($request, $requestSecurity);

    if ($response->urlChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsensehostUrlchannelsInsert

Add a new URL channel to the host AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostUrlchannelsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\UrlChannel;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostUrlchannelsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostUrlchannelsInsertRequest();
    $request->urlChannel = new UrlChannel();
    $request->urlChannel->id = 'adcf4b92-1879-4fce-953f-73ef7fbc7abd';
    $request->urlChannel->kind = 'ducimus';
    $request->urlChannel->urlPattern = 'dolore';
    $request->adClientId = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->fields = 'sequi';
    $request->key = 'natus';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->userIp = 'voluptatibus';

    $requestSecurity = new AdsensehostUrlchannelsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->urlchannels->adsensehostUrlchannelsInsert($request, $requestSecurity);

    if ($response->urlChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsensehostUrlchannelsList

List all host URL channels in the host AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostUrlchannelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostUrlchannelsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostUrlchannelsListRequest();
    $request->adClientId = 'exercitationem';
    $request->alt = AltEnum::JSON;
    $request->fields = 'fugit';
    $request->key = 'porro';
    $request->maxResults = 981830;
    $request->oauthToken = 'doloribus';
    $request->pageToken = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'eligendi';
    $request->userIp = 'ducimus';

    $requestSecurity = new AdsensehostUrlchannelsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->urlchannels->adsensehostUrlchannelsList($request, $requestSecurity);

    if ($response->urlChannels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
