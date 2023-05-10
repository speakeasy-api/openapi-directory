# splashSettings

### Available Operations

* [getNetworkSsidSplashSettings](#getnetworkssidsplashsettings) - Display the splash page settings for the given SSID
* [updateNetworkSsidSplashSettings](#updatenetworkssidsplashsettings) - Modify the splash page settings for the given SSID

## getNetworkSsidSplashSettings

Display the splash page settings for the given SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSsidSplashSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSsidSplashSettingsRequest();
    $request->networkId = 'quae';
    $request->number = 'molestiae';

    $response = $sdk->splashSettings->getNetworkSsidSplashSettings($request);

    if ($response->getNetworkSsidSplashSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSsidSplashSettings

Modify the splash page settings for the given SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSsidSplashSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSsidSplashSettingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSsidSplashSettingsRequest();
    $request->requestBody = new UpdateNetworkSsidSplashSettingsRequestBody();
    $request->requestBody->splashUrl = 'eveniet';
    $request->requestBody->useSplashUrl = false;
    $request->networkId = 'qui';
    $request->number = 'cum';

    $response = $sdk->splashSettings->updateNetworkSsidSplashSettings($request);

    if ($response->updateNetworkSsidSplashSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
