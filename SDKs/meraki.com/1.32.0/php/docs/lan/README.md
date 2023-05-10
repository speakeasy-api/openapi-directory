# lan

### Available Operations

* [getDeviceCellularGatewayLan](#getdevicecellulargatewaylan) - Show the LAN Settings of a MG
* [updateDeviceCellularGatewayLan](#updatedevicecellulargatewaylan) - Update the LAN Settings for a single MG.

## getDeviceCellularGatewayLan

Show the LAN Settings of a MG

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCellularGatewayLanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCellularGatewayLanRequest();
    $request->serial = 'expedita';

    $response = $sdk->lan->getDeviceCellularGatewayLan($request);

    if ($response->getDeviceCellularGatewayLan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCellularGatewayLan

Update the LAN Settings for a single MG.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewayLanRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewayLanRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCellularGatewayLanRequest();
    $request->requestBody = new UpdateDeviceCellularGatewayLanRequestBody();
    $request->requestBody->fixedIpAssignments = [
        new UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments(),
        new UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments(),
    ];
    $request->requestBody->reservedIpRanges = [
        new UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges(),
        new UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges(),
        new UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges(),
    ];
    $request->serial = 'exercitationem';

    $response = $sdk->lan->updateDeviceCellularGatewayLan($request);

    if ($response->updateDeviceCellularGatewayLan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
