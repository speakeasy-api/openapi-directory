# settingsExternal

### Available Operations

* [getMarketingV3MarketingEventsAppIdSettingsGetAll](#getmarketingv3marketingeventsappidsettingsgetall)
* [postMarketingV3MarketingEventsAppIdSettingsCreate](#postmarketingv3marketingeventsappidsettingscreate)

## getMarketingV3MarketingEventsAppIdSettingsGetAll

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMarketingV3MarketingEventsAppIdSettingsGetAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMarketingV3MarketingEventsAppIdSettingsGetAllRequest();
    $request->appId = 612096;

    $requestSecurity = new GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->settingsExternal->getMarketingV3MarketingEventsAppIdSettingsGetAll($request, $requestSecurity);

    if ($response->eventDetailSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMarketingV3MarketingEventsAppIdSettingsCreate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMarketingV3MarketingEventsAppIdSettingsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\EventDetailSettingsUrl;
use \OpenAPI\OpenAPI\Models\Operations\PostMarketingV3MarketingEventsAppIdSettingsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMarketingV3MarketingEventsAppIdSettingsCreateRequest();
    $request->eventDetailSettingsUrl = new EventDetailSettingsUrl();
    $request->eventDetailSettingsUrl->eventDetailsUrl = 'dolor';
    $request->appId = 616934;

    $requestSecurity = new PostMarketingV3MarketingEventsAppIdSettingsCreateSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->settingsExternal->postMarketingV3MarketingEventsAppIdSettingsCreate($request, $requestSecurity);

    if ($response->eventDetailSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
