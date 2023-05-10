# mgPortForwardingRules

### Available Operations

* [getDeviceCellularGatewaySettingsPortForwardingRules](#getdevicecellulargatewaysettingsportforwardingrules) - Returns the port forwarding rules for a single MG.
* [updateDeviceCellularGatewaySettingsPortForwardingRules](#updatedevicecellulargatewaysettingsportforwardingrules) - Updates the port forwarding rules for a single MG.

## getDeviceCellularGatewaySettingsPortForwardingRules

Returns the port forwarding rules for a single MG.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCellularGatewaySettingsPortForwardingRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCellularGatewaySettingsPortForwardingRulesRequest();
    $request->serial = 'nobis';

    $response = $sdk->mgPortForwardingRules->getDeviceCellularGatewaySettingsPortForwardingRules($request);

    if ($response->getDeviceCellularGatewaySettingsPortForwardingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCellularGatewaySettingsPortForwardingRules

Updates the port forwarding rules for a single MG.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequestBodyRules;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequest();
    $request->requestBody = new UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequestBodyRules(),
    ];
    $request->serial = 'saepe';

    $response = $sdk->mgPortForwardingRules->updateDeviceCellularGatewaySettingsPortForwardingRules($request);

    if ($response->updateDeviceCellularGatewaySettingsPortForwardingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
