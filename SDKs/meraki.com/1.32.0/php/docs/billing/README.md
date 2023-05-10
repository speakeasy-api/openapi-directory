# billing

### Available Operations

* [getNetworkWirelessBilling](#getnetworkwirelessbilling) - Return the billing settings of this network
* [updateNetworkWirelessBilling](#updatenetworkwirelessbilling) - Update the billing settings

## getNetworkWirelessBilling

Return the billing settings of this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessBillingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessBillingRequest();
    $request->networkId = 'dolor';

    $response = $sdk->billing->getNetworkWirelessBilling($request);

    if ($response->getNetworkWirelessBilling200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessBilling

Update the billing settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBillingRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBillingRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBillingRequestBodyPlans;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessBillingRequest();
    $request->requestBody = new UpdateNetworkWirelessBillingRequestBody();
    $request->requestBody->currency = 'fugiat';
    $request->requestBody->plans = [
        new UpdateNetworkWirelessBillingRequestBodyPlans(),
        new UpdateNetworkWirelessBillingRequestBodyPlans(),
    ];
    $request->networkId = 'consequuntur';

    $response = $sdk->billing->updateNetworkWirelessBilling($request);

    if ($response->updateNetworkWirelessBilling200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
