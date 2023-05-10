# eapOverride

### Available Operations

* [getNetworkWirelessSsidEapOverride](#getnetworkwirelessssideapoverride) - Return the EAP overridden parameters for an SSID
* [updateNetworkWirelessSsidEapOverride](#updatenetworkwirelessssideapoverride) - Update the EAP overridden parameters for an SSID.

## getNetworkWirelessSsidEapOverride

Return the EAP overridden parameters for an SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidEapOverrideRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidEapOverrideRequest();
    $request->networkId = 'autem';
    $request->number = 'tempora';

    $response = $sdk->eapOverride->getNetworkWirelessSsidEapOverride($request);

    if ($response->getNetworkWirelessSsidEapOverride200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidEapOverride

Update the EAP overridden parameters for an SSID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidEapOverrideRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidEapOverrideRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidEapOverrideRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidEapOverrideRequestBody();
    $request->requestBody->eapolKey = new UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey();
    $request->requestBody->eapolKey->retries = 104774;
    $request->requestBody->eapolKey->timeoutInMs = 490880;
    $request->requestBody->identity = new UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity();
    $request->requestBody->identity->retries = 158023;
    $request->requestBody->identity->timeout = 191790;
    $request->requestBody->maxRetries = 86808;
    $request->requestBody->timeout = 229625;
    $request->networkId = 'sequi';
    $request->number = 'recusandae';

    $response = $sdk->eapOverride->updateNetworkWirelessSsidEapOverride($request);

    if ($response->updateNetworkWirelessSsidEapOverride200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
