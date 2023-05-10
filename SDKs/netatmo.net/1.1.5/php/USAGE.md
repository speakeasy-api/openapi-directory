<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DevicelistRequest;
use \OpenAPI\OpenAPI\Models\Operations\DevicelistAppTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DevicelistSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DevicelistRequest();
    $request->appType = DevicelistAppTypeEnum::APP_STATION;
    $request->deviceId = 'provident';
    $request->getFavorites = false;

    $requestSecurity = new DevicelistSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->deprecated->devicelist($request, $requestSecurity);

    if ($response->naDeviceListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->