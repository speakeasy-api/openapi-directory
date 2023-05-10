# cellular

### Available Operations

* [getDeviceCellularSims](#getdevicecellularsims) - Return the SIM and APN configurations for a cellular device.
* [updateDeviceCellularSims](#updatedevicecellularsims) - Updates the SIM and APN configurations for a cellular device.

## getDeviceCellularSims

Return the SIM and APN configurations for a cellular device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCellularSimsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCellularSimsRequest();
    $request->serial = 'nostrum';

    $response = $sdk->cellular->getDeviceCellularSims($request);

    if ($response->getDeviceCellularSims200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCellularSims

Updates the SIM and APN configurations for a cellular device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequestBodySimFailover;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequestBodySims;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequestBodySimsApns;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequestBodySimsSlotEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCellularSimsRequest();
    $request->requestBody = new UpdateDeviceCellularSimsRequestBody();
    $request->requestBody->simFailover = new UpdateDeviceCellularSimsRequestBodySimFailover();
    $request->requestBody->simFailover->enabled = false;
    $request->requestBody->sims = [
        new UpdateDeviceCellularSimsRequestBodySims(),
    ];
    $request->serial = 'iusto';

    $response = $sdk->cellular->updateDeviceCellularSims($request);

    if ($response->updateDeviceCellularSims200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
