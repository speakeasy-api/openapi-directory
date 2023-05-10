# alerts

### Available Operations

* [adsenseAlertsDelete](#adsensealertsdelete) - Dismiss (delete) the specified alert from the publisher's AdSense account.
* [adsenseAlertsList](#adsensealertslist) - List the alerts for this AdSense account.

## adsenseAlertsDelete

Dismiss (delete) the specified alert from the publisher's AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAlertsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAlertsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAlertsDeleteRequest();
    $request->alertId = 'natus';
    $request->alt = AltEnum::JSON;
    $request->fields = 'molestiae';
    $request->key = 'perferendis';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->userIp = 'distinctio';

    $requestSecurity = new AdsenseAlertsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->alerts->adsenseAlertsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseAlertsList

List the alerts for this AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAlertsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAlertsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAlertsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAlertsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAlertsListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'labore';
    $request->key = 'labore';
    $request->locale = 'suscipit';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->userIp = 'eum';

    $requestSecurity = new AdsenseAlertsListSecurity();
    $requestSecurity->option1 = new AdsenseAlertsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->alerts->adsenseAlertsList($request, $requestSecurity);

    if ($response->alerts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
