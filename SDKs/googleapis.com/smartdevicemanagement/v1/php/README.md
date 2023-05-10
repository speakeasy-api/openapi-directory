# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [enterprises](docs/enterprises/README.md)

* [smartdevicemanagementEnterprisesDevicesExecuteCommand](docs/enterprises/README.md#smartdevicemanagemententerprisesdevicesexecutecommand) - Executes a command to device managed by the enterprise.
* [smartdevicemanagementEnterprisesDevicesList](docs/enterprises/README.md#smartdevicemanagemententerprisesdeviceslist) - Lists devices managed by the enterprise.
* [smartdevicemanagementEnterprisesStructuresList](docs/enterprises/README.md#smartdevicemanagemententerprisesstructureslist) - Lists structures managed by the enterprise.
* [smartdevicemanagementEnterprisesStructuresRoomsGet](docs/enterprises/README.md#smartdevicemanagemententerprisesstructuresroomsget) - Gets a room managed by the enterprise.
* [smartdevicemanagementEnterprisesStructuresRoomsList](docs/enterprises/README.md#smartdevicemanagemententerprisesstructuresroomslist) - Lists rooms managed by the enterprise.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
