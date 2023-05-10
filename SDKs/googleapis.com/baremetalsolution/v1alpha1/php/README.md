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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [baremetalsolutionProjectsLocationsSubmitProvisioningConfig](docs/projects/README.md#baremetalsolutionprojectslocationssubmitprovisioningconfig) - Submit a provisiong configuration for a given project.
* [baremetalsolutionProjectsProvisioningQuotasList](docs/projects/README.md#baremetalsolutionprojectsprovisioningquotaslist) - List the budget details to provision resources on a given project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
