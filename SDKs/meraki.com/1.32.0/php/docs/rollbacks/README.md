# rollbacks

### Available Operations

* [createNetworkFirmwareUpgradesRollback](#createnetworkfirmwareupgradesrollback) - Rollback a Firmware Upgrade For A Network

## createNetworkFirmwareUpgradesRollback

Rollback a Firmware Upgrade For A Network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkFirmwareUpgradesRollbackRequest();
    $request->requestBody = new CreateNetworkFirmwareUpgradesRollbackRequestBody();
    $request->requestBody->product = CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum::APPLIANCE;
    $request->requestBody->reasons = [
        new CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons(),
    ];
    $request->requestBody->time = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-09T06:05:21.861Z');
    $request->requestBody->toVersion = new CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion();
    $request->requestBody->toVersion->id = 'a607d160-6294-4514-83db-9ca9f38bd2be';
    $request->networkId = 'quos';

    $response = $sdk->rollbacks->createNetworkFirmwareUpgradesRollback($request);

    if ($response->createNetworkFirmwareUpgradesRollback200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
