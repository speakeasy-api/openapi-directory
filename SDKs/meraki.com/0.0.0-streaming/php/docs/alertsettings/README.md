# alertSettings

### Available Operations

* [getNetworkAlertSettings](#getnetworkalertsettings) - Return the alert configuration for this network
* [updateNetworkAlertSettings](#updatenetworkalertsettings) - Update the alert configuration for this network

## getNetworkAlertSettings

Return the alert configuration for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAlertSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAlertSettingsRequest();
    $request->networkId = 'ipsum';

    $response = $sdk->alertSettings->getNetworkAlertSettings($request);

    if ($response->getNetworkAlertSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkAlertSettings

Update the alert configuration for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertSettingsRequestBodyAlerts;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertSettingsRequestBodyAlertsAlertDestinations;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertSettingsRequestBodyDefaultDestinations;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkAlertSettingsRequest();
    $request->requestBody = new UpdateNetworkAlertSettingsRequestBody();
    $request->requestBody->alerts = [
        new UpdateNetworkAlertSettingsRequestBodyAlerts(),
        new UpdateNetworkAlertSettingsRequestBodyAlerts(),
        new UpdateNetworkAlertSettingsRequestBodyAlerts(),
    ];
    $request->requestBody->defaultDestinations = new UpdateNetworkAlertSettingsRequestBodyDefaultDestinations();
    $request->requestBody->defaultDestinations->allAdmins = false;
    $request->requestBody->defaultDestinations->emails = [
        'perferendis',
    ];
    $request->requestBody->defaultDestinations->httpServerIds = [
        'natus',
        'sed',
    ];
    $request->requestBody->defaultDestinations->snmp = false;
    $request->networkId = 'iste';

    $response = $sdk->alertSettings->updateNetworkAlertSettings($request);

    if ($response->updateNetworkAlertSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
