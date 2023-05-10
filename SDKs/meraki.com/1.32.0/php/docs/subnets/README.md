# subnets

### Available Operations

* [getDeviceApplianceDhcpSubnets](#getdeviceappliancedhcpsubnets) - Return the DHCP subnet information for an appliance

## getDeviceApplianceDhcpSubnets

Return the DHCP subnet information for an appliance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceApplianceDhcpSubnetsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceApplianceDhcpSubnetsRequest();
    $request->serial = 'distinctio';

    $response = $sdk->subnets->getDeviceApplianceDhcpSubnets($request);

    if ($response->getDeviceApplianceDhcpSubnets200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
