# projects

### Available Operations

* [baremetalsolutionProjectsLocationsSubmitProvisioningConfig](#baremetalsolutionprojectslocationssubmitprovisioningconfig) - Submit a provisiong configuration for a given project.
* [baremetalsolutionProjectsProvisioningQuotasList](#baremetalsolutionprojectsprovisioningquotaslist) - List the budget details to provision resources on a given project.

## baremetalsolutionProjectsLocationsSubmitProvisioningConfig

Submit a provisiong configuration for a given project.

### Example Usage

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
    $request->submitProvisioningConfigRequest->email = 'Jaycee_Mante@yahoo.com';
    $request->submitProvisioningConfigRequest->provisioningConfig = new ProvisioningConfig();
    $request->submitProvisioningConfigRequest->provisioningConfig->instances = [
        new InstanceConfig(),
        new InstanceConfig(),
        new InstanceConfig(),
        new InstanceConfig(),
    ];
    $request->submitProvisioningConfigRequest->provisioningConfig->networks = [
        new NetworkConfig(),
    ];
    $request->submitProvisioningConfigRequest->provisioningConfig->ticketId = 'quis';
    $request->submitProvisioningConfigRequest->provisioningConfig->volumes = [
        new VolumeConfig(),
    ];
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->fields = 'repellendus';
    $request->key = 'sapiente';
    $request->location = 'quo';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->project = 'at';
    $request->quotaUser = 'at';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'molestiae';

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

## baremetalsolutionProjectsProvisioningQuotasList

List the budget details to provision resources on a given project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsProvisioningQuotasListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsProvisioningQuotasListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsProvisioningQuotasListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'totam';
    $request->fields = 'porro';
    $request->key = 'dolorum';
    $request->oauthToken = 'dicta';
    $request->pageSize = 720633;
    $request->pageToken = 'officia';
    $request->parent = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new BaremetalsolutionProjectsProvisioningQuotasListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsProvisioningQuotasList($request, $requestSecurity);

    if ($response->listProvisioningQuotasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
