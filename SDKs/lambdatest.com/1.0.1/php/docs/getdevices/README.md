# getDevices

### Available Operations

* [devices](#devices) - Fetch all available device combinations.

## devices

Fetch all os devices combinations available on lambdatest platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DevicesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DevicesRequest();
    $request->os = 'provident';

    $requestSecurity = new DevicesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->getDevices->devices($request, $requestSecurity);

    if ($response->osDevices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
