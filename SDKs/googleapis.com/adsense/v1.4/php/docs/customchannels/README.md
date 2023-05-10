# customchannels

### Available Operations

* [adsenseCustomchannelsAdunitsList](#adsensecustomchannelsadunitslist) - List all ad units in the specified custom channel.
* [adsenseCustomchannelsGet](#adsensecustomchannelsget) - Get the specified custom channel from the specified ad client.
* [adsenseCustomchannelsList](#adsensecustomchannelslist) - List all custom channels in the specified ad client for this AdSense account.

## adsenseCustomchannelsAdunitsList

List all ad units in the specified custom channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseCustomchannelsAdunitsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseCustomchannelsAdunitsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseCustomchannelsAdunitsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseCustomchannelsAdunitsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseCustomchannelsAdunitsListRequest();
    $request->adClientId = 'vero';
    $request->alt = AltEnum::CSV;
    $request->customChannelId = 'architecto';
    $request->fields = 'magnam';
    $request->includeInactive = false;
    $request->key = 'et';
    $request->maxResults = 569965;
    $request->oauthToken = 'ullam';
    $request->pageToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->userIp = 'sint';

    $requestSecurity = new AdsenseCustomchannelsAdunitsListSecurity();
    $requestSecurity->option1 = new AdsenseCustomchannelsAdunitsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customchannels->adsenseCustomchannelsAdunitsList($request, $requestSecurity);

    if ($response->adUnits !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseCustomchannelsGet

Get the specified custom channel from the specified ad client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseCustomchannelsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseCustomchannelsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseCustomchannelsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseCustomchannelsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseCustomchannelsGetRequest();
    $request->adClientId = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->customChannelId = 'reiciendis';
    $request->fields = 'mollitia';
    $request->key = 'ad';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->userIp = 'necessitatibus';

    $requestSecurity = new AdsenseCustomchannelsGetSecurity();
    $requestSecurity->option1 = new AdsenseCustomchannelsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customchannels->adsenseCustomchannelsGet($request, $requestSecurity);

    if ($response->customChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseCustomchannelsList

List all custom channels in the specified ad client for this AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseCustomchannelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseCustomchannelsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseCustomchannelsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseCustomchannelsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseCustomchannelsListRequest();
    $request->adClientId = 'odit';
    $request->alt = AltEnum::CSV;
    $request->fields = 'quasi';
    $request->key = 'iure';
    $request->maxResults = 984043;
    $request->oauthToken = 'debitis';
    $request->pageToken = 'eius';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->userIp = 'deleniti';

    $requestSecurity = new AdsenseCustomchannelsListSecurity();
    $requestSecurity->option1 = new AdsenseCustomchannelsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customchannels->adsenseCustomchannelsList($request, $requestSecurity);

    if ($response->customChannels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
