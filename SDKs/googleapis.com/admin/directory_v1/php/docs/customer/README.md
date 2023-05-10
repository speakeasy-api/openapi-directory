# customer

### Available Operations

* [adminCustomerDevicesChromeosCommandsGet](#admincustomerdeviceschromeoscommandsget) - Gets command data a specific command issued to the device.
* [adminCustomerDevicesChromeosIssueCommand](#admincustomerdeviceschromeosissuecommand) - Issues a command for the device to execute.

## adminCustomerDevicesChromeosCommandsGet

Gets command data a specific command issued to the device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomerDevicesChromeosCommandsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomerDevicesChromeosCommandsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomerDevicesChromeosCommandsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomerDevicesChromeosCommandsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminCustomerDevicesChromeosCommandsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'magni';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quo';
    $request->commandId = 'illum';
    $request->customerId = 'pariatur';
    $request->deviceId = 'maxime';
    $request->fields = 'ea';
    $request->key = 'excepturi';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new AdminCustomerDevicesChromeosCommandsGetSecurity();
    $requestSecurity->option1 = new AdminCustomerDevicesChromeosCommandsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customer->adminCustomerDevicesChromeosCommandsGet($request, $requestSecurity);

    if ($response->directoryChromeosdevicesCommand !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminCustomerDevicesChromeosIssueCommand

Issues a command for the device to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomerDevicesChromeosIssueCommandRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DirectoryChromeosdevicesIssueCommandRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdminCustomerDevicesChromeosIssueCommandSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminCustomerDevicesChromeosIssueCommandRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->directoryChromeosdevicesIssueCommandRequest = new DirectoryChromeosdevicesIssueCommandRequest();
    $request->directoryChromeosdevicesIssueCommandRequest->commandType = DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnum::REMOTE_POWERWASH;
    $request->directoryChromeosdevicesIssueCommandRequest->payload = 'ipsam';
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nam';
    $request->customerId = 'eaque';
    $request->deviceId = 'pariatur';
    $request->fields = 'nemo';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new AdminCustomerDevicesChromeosIssueCommandSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customer->adminCustomerDevicesChromeosIssueCommand($request, $requestSecurity);

    if ($response->directoryChromeosdevicesIssueCommandResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
