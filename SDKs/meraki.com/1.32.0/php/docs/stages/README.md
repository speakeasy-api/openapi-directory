# stages

### Available Operations

* [getNetworkFirmwareUpgradesStagedStages](#getnetworkfirmwareupgradesstagedstages) - Order of Staged Upgrade Groups in a network
* [updateNetworkFirmwareUpgradesStagedStages](#updatenetworkfirmwareupgradesstagedstages) - Assign Staged Upgrade Group order in the sequence.

## getNetworkFirmwareUpgradesStagedStages

Order of Staged Upgrade Groups in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFirmwareUpgradesStagedStagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFirmwareUpgradesStagedStagesRequest();
    $request->networkId = 'dolores';

    $response = $sdk->stages->getNetworkFirmwareUpgradesStagedStages($request);

    if ($response->getNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkFirmwareUpgradesStagedStages

Assign Staged Upgrade Group order in the sequence.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedStagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedStagesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJsonGroup;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkFirmwareUpgradesStagedStagesRequest();
    $request->requestBody = new UpdateNetworkFirmwareUpgradesStagedStagesRequestBody();
    $request->requestBody->json = [
        new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson(),
        new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson(),
    ];
    $request->networkId = 'ipsa';

    $response = $sdk->stages->updateNetworkFirmwareUpgradesStagedStages($request);

    if ($response->updateNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
