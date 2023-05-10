# claim

### Available Operations

* [vmxNetworkDevicesClaim](#vmxnetworkdevicesclaim) - Claim a vMX into a network

## vmxNetworkDevicesClaim

Claim a vMX into a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\VmxNetworkDevicesClaimRequest;
use \OpenAPI\OpenAPI\Models\Operations\VmxNetworkDevicesClaimRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\VmxNetworkDevicesClaimRequestBodySizeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmxNetworkDevicesClaimRequest();
    $request->requestBody = new VmxNetworkDevicesClaimRequestBody();
    $request->requestBody->size = VmxNetworkDevicesClaimRequestBodySizeEnum::LARGE;
    $request->networkId = 'impedit';

    $response = $sdk->claim->vmxNetworkDevicesClaim($request);

    if ($response->vmxNetworkDevicesClaim200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
