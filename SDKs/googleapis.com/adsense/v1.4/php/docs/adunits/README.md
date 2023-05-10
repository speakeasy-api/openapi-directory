# adunits

### Available Operations

* [adsenseAdunitsCustomchannelsList](#adsenseadunitscustomchannelslist) - List all custom channels which the specified ad unit belongs to.
* [adsenseAdunitsGet](#adsenseadunitsget) - Gets the specified ad unit in the specified ad client.
* [adsenseAdunitsGetAdCode](#adsenseadunitsgetadcode) - Get ad code for the specified ad unit.
* [adsenseAdunitsList](#adsenseadunitslist) - List all ad units in the specified ad client for this AdSense account.

## adsenseAdunitsCustomchannelsList

List all custom channels which the specified ad unit belongs to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAdunitsCustomchannelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAdunitsCustomchannelsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAdunitsCustomchannelsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAdunitsCustomchannelsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAdunitsCustomchannelsListRequest();
    $request->adClientId = 'sint';
    $request->adUnitId = 'officia';
    $request->alt = AltEnum::CSV;
    $request->fields = 'debitis';
    $request->key = 'a';
    $request->maxResults = 680056;
    $request->oauthToken = 'in';
    $request->pageToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->userIp = 'maiores';

    $requestSecurity = new AdsenseAdunitsCustomchannelsListSecurity();
    $requestSecurity->option1 = new AdsenseAdunitsCustomchannelsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->adunits->adsenseAdunitsCustomchannelsList($request, $requestSecurity);

    if ($response->customChannels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAdunitsGet

Gets the specified ad unit in the specified ad client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAdunitsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAdunitsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAdunitsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAdunitsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAdunitsGetRequest();
    $request->adClientId = 'rerum';
    $request->adUnitId = 'dicta';
    $request->alt = AltEnum::CSV;
    $request->fields = 'cumque';
    $request->key = 'facere';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->userIp = 'laborum';

    $requestSecurity = new AdsenseAdunitsGetSecurity();
    $requestSecurity->option1 = new AdsenseAdunitsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->adunits->adsenseAdunitsGet($request, $requestSecurity);

    if ($response->adUnit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAdunitsGetAdCode

Get ad code for the specified ad unit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAdunitsGetAdCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAdunitsGetAdCodeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAdunitsGetAdCodeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAdunitsGetAdCodeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAdunitsGetAdCodeRequest();
    $request->adClientId = 'accusamus';
    $request->adUnitId = 'non';
    $request->alt = AltEnum::JSON;
    $request->fields = 'enim';
    $request->key = 'accusamus';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->userIp = 'provident';

    $requestSecurity = new AdsenseAdunitsGetAdCodeSecurity();
    $requestSecurity->option1 = new AdsenseAdunitsGetAdCodeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->adunits->adsenseAdunitsGetAdCode($request, $requestSecurity);

    if ($response->adCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAdunitsList

List all ad units in the specified ad client for this AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAdunitsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAdunitsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAdunitsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAdunitsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAdunitsListRequest();
    $request->adClientId = 'nam';
    $request->alt = AltEnum::JSON;
    $request->fields = 'blanditiis';
    $request->includeInactive = false;
    $request->key = 'deleniti';
    $request->maxResults = 956084;
    $request->oauthToken = 'amet';
    $request->pageToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->userIp = 'vel';

    $requestSecurity = new AdsenseAdunitsListSecurity();
    $requestSecurity->option1 = new AdsenseAdunitsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->adunits->adsenseAdunitsList($request, $requestSecurity);

    if ($response->adUnits !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
