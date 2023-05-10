<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubmitProvisioningConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProvisioningConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkAddress;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfigBandwidthEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfigServiceCidrEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VlanAttachment;
use \OpenAPI\OpenAPI\Models\Shared\VolumeConfig;
use \OpenAPI\OpenAPI\Models\Shared\LunRange;
use \OpenAPI\OpenAPI\Models\Shared\NfsExport;
use \OpenAPI\OpenAPI\Models\Shared\NfsExportPermissionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\VolumeConfigProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\VolumeConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsSubmitProvisioningConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->submitProvisioningConfigRequest = new SubmitProvisioningConfigRequest();
    $request->submitProvisioningConfigRequest->email = 'Micheal_Sporer@yahoo.com';
    $request->submitProvisioningConfigRequest->provisioningConfig = new ProvisioningConfig();
    $request->submitProvisioningConfigRequest->provisioningConfig->instances = [
        new InstanceConfig(),
        new InstanceConfig(),
        new InstanceConfig(),
    ];
    $request->submitProvisioningConfigRequest->provisioningConfig->networks = [
        new NetworkConfig(),
        new NetworkConfig(),
        new NetworkConfig(),
        new NetworkConfig(),
    ];
    $request->submitProvisioningConfigRequest->provisioningConfig->ticketId = 'vel';
    $request->submitProvisioningConfigRequest->provisioningConfig->volumes = [
        new VolumeConfig(),
        new VolumeConfig(),
        new VolumeConfig(),
    ];
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iure';
    $request->fields = 'magnam';
    $request->key = 'debitis';
    $request->location = 'ipsa';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'tempora';
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'minus';

    $requestSecurity = new BaremetalsolutionProjectsLocationsSubmitProvisioningConfigSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsSubmitProvisioningConfig($request, $requestSecurity);

    if ($response->provisioningConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->