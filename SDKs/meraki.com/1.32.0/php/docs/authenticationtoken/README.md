# authenticationToken

### Available Operations

* [createDeviceApplianceVmxAuthenticationToken](#createdeviceappliancevmxauthenticationtoken) - Generate a new vMX authentication token

## createDeviceApplianceVmxAuthenticationToken

Generate a new vMX authentication token

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceApplianceVmxAuthenticationTokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeviceApplianceVmxAuthenticationTokenRequest();
    $request->serial = 'debitis';

    $response = $sdk->authenticationToken->createDeviceApplianceVmxAuthenticationToken($request);

    if ($response->createDeviceApplianceVmxAuthenticationToken201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
