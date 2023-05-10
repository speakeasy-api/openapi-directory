# warmSpare

### Available Operations

* [getDeviceSwitchWarmSpare](#getdeviceswitchwarmspare) - Return warm spare configuration for a switch
* [getNetworkApplianceWarmSpare](#getnetworkappliancewarmspare) - Return MX warm spare settings
* [swapNetworkApplianceWarmSpare](#swapnetworkappliancewarmspare) - Swap MX primary and warm spare appliances
* [updateDeviceSwitchWarmSpare](#updatedeviceswitchwarmspare) - Update warm spare configuration for a switch
* [updateNetworkApplianceWarmSpare](#updatenetworkappliancewarmspare) - Update MX warm spare settings

## getDeviceSwitchWarmSpare

Return warm spare configuration for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchWarmSpareRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchWarmSpareRequest();
    $request->serial = 'exercitationem';

    $response = $sdk->warmSpare->getDeviceSwitchWarmSpare($request);

    if ($response->getDeviceSwitchWarmSpare200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceWarmSpare

Return MX warm spare settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceWarmSpareRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceWarmSpareRequest();
    $request->networkId = 'optio';

    $response = $sdk->warmSpare->getNetworkApplianceWarmSpare($request);

    if ($response->getNetworkApplianceWarmSpare200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## swapNetworkApplianceWarmSpare

Swap MX primary and warm spare appliances

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SwapNetworkApplianceWarmSpareRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SwapNetworkApplianceWarmSpareRequest();
    $request->networkId = 'aperiam';

    $response = $sdk->warmSpare->swapNetworkApplianceWarmSpare($request);

    if ($response->swapNetworkApplianceWarmSpare200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceSwitchWarmSpare

Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchWarmSpareRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchWarmSpareRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceSwitchWarmSpareRequest();
    $request->requestBody = new UpdateDeviceSwitchWarmSpareRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->spareSerial = 'optio';
    $request->serial = 'rerum';

    $response = $sdk->warmSpare->updateDeviceSwitchWarmSpare($request);

    if ($response->updateDeviceSwitchWarmSpare200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceWarmSpare

Update MX warm spare settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceWarmSpareRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceWarmSpareRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceWarmSpareRequest();
    $request->requestBody = new UpdateNetworkApplianceWarmSpareRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->spareSerial = 'eligendi';
    $request->requestBody->uplinkMode = 'tempore';
    $request->requestBody->virtualIp1 = 'fugit';
    $request->requestBody->virtualIp2 = 'quod';
    $request->networkId = 'mollitia';

    $response = $sdk->warmSpare->updateNetworkApplianceWarmSpare($request);

    if ($response->updateNetworkApplianceWarmSpare200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
