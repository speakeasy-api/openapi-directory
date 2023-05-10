<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest = new GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest();
    $request->googleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest->command = 'provident';
    $request->googleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest->params = [
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
        'illum' => 'vel',
    ];
    $request->accessToken = 'error';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'suscipit';
    $request->fields = 'iure';
    $request->key = 'magnam';
    $request->name = 'Larry Windler';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'minus';
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'voluptatum';

    $requestSecurity = new SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->smartdevicemanagementEnterprisesDevicesExecuteCommand($request, $requestSecurity);

    if ($response->googleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->