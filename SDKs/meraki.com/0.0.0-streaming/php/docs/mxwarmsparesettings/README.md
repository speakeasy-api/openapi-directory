# mxWarmSpareSettings

### Available Operations

* [getNetworkWarmSpareSettings](#getnetworkwarmsparesettings) - Return MX warm spare settings
* [swapNetworkWarmSpare](#swapnetworkwarmspare) - Swap MX primary and warm spare appliances
* [updateNetworkWarmSpareSettings](#updatenetworkwarmsparesettings) - Update MX warm spare settings

## getNetworkWarmSpareSettings

Return MX warm spare settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWarmSpareSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWarmSpareSettingsRequest();
    $request->networkId = 'dolor';

    $response = $sdk->mxWarmSpareSettings->getNetworkWarmSpareSettings($request);

    if ($response->getNetworkWarmSpareSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## swapNetworkWarmSpare

Swap MX primary and warm spare appliances

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SwapNetworkWarmSpareRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SwapNetworkWarmSpareRequest();
    $request->networkId = 'maiores';

    $response = $sdk->mxWarmSpareSettings->swapNetworkWarmSpare($request);

    if ($response->swapNetworkWarmSpare200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWarmSpareSettings

Update MX warm spare settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWarmSpareSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWarmSpareSettingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWarmSpareSettingsRequest();
    $request->requestBody = new UpdateNetworkWarmSpareSettingsRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->spareSerial = 'quasi';
    $request->requestBody->uplinkMode = 'ex';
    $request->requestBody->virtualIp1 = 'nulla';
    $request->requestBody->virtualIp2 = 'excepturi';
    $request->networkId = 'voluptatibus';

    $response = $sdk->mxWarmSpareSettings->updateNetworkWarmSpareSettings($request);

    if ($response->updateNetworkWarmSpareSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
