# mgLANSettings

### Available Operations

* [getDeviceCellularGatewaySettings](#getdevicecellulargatewaysettings) - Show the LAN Settings of a MG
* [updateDeviceCellularGatewaySettings](#updatedevicecellulargatewaysettings) - Update the LAN Settings for a single MG.

## getDeviceCellularGatewaySettings

Show the LAN Settings of a MG

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCellularGatewaySettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCellularGatewaySettingsRequest();
    $request->serial = 'hic';

    $response = $sdk->mgLANSettings->getDeviceCellularGatewaySettings($request);

    if ($response->getDeviceCellularGatewaySettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCellularGatewaySettings

Update the LAN Settings for a single MG.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewaySettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewaySettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewaySettingsRequestBodyFixedIpAssignments;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewaySettingsRequestBodyReservedIpRanges;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCellularGatewaySettingsRequest();
    $request->requestBody = new UpdateDeviceCellularGatewaySettingsRequestBody();
    $request->requestBody->fixedIpAssignments = [
        new UpdateDeviceCellularGatewaySettingsRequestBodyFixedIpAssignments(),
    ];
    $request->requestBody->reservedIpRanges = [
        new UpdateDeviceCellularGatewaySettingsRequestBodyReservedIpRanges(),
        new UpdateDeviceCellularGatewaySettingsRequestBodyReservedIpRanges(),
        new UpdateDeviceCellularGatewaySettingsRequestBodyReservedIpRanges(),
        new UpdateDeviceCellularGatewaySettingsRequestBodyReservedIpRanges(),
    ];
    $request->serial = 'soluta';

    $response = $sdk->mgLANSettings->updateDeviceCellularGatewaySettings($request);

    if ($response->updateDeviceCellularGatewaySettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
