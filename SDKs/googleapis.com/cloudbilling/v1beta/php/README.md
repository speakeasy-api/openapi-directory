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
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsEstimateCostScenarioRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EstimateCostScenarioForBillingAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\CostScenario;
use \OpenAPI\OpenAPI\Models\Shared\Commitment;
use \OpenAPI\OpenAPI\Models\Shared\VmResourceBasedCud;
use \OpenAPI\OpenAPI\Models\Shared\GuestAccelerator;
use \OpenAPI\OpenAPI\Models\Shared\VmResourceBasedCudPlanEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScenarioConfig;
use \OpenAPI\OpenAPI\Models\Shared\Workload;
use \OpenAPI\OpenAPI\Models\Shared\CloudCdnEgressWorkload;
use \OpenAPI\OpenAPI\Models\Shared\CloudCdnEgressWorkloadCacheEgressDestinationEnum;
use \OpenAPI\OpenAPI\Models\Shared\Usage;
use \OpenAPI\OpenAPI\Models\Shared\UsageRateTimeline;
use \OpenAPI\OpenAPI\Models\Shared\UsageRateTimelineEntry;
use \OpenAPI\OpenAPI\Models\Shared\EstimationTimePoint;
use \OpenAPI\OpenAPI\Models\Shared\CloudCdnWorkload;
use \OpenAPI\OpenAPI\Models\Shared\CloudCdnWorkloadCacheFillOriginServiceEnum;
use \OpenAPI\OpenAPI\Models\Shared\CacheFillRegions;
use \OpenAPI\OpenAPI\Models\Shared\CacheFillRegionsDestinationRegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\CacheFillRegionsSourceRegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudInterconnectEgressWorkload;
use \OpenAPI\OpenAPI\Models\Shared\CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudInterconnectWorkload;
use \OpenAPI\OpenAPI\Models\Shared\VlanAttachment;
use \OpenAPI\OpenAPI\Models\Shared\VlanAttachmentBandwidthEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudInterconnectWorkloadInterconnectTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudInterconnectWorkloadLinkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudStorageEgressWorkload;
use \OpenAPI\OpenAPI\Models\Shared\CloudStorageEgressWorkloadDestinationContinentEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudStorageEgressWorkloadSourceContinentEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudStorageWorkload;
use \OpenAPI\OpenAPI\Models\Shared\DualRegional;
use \OpenAPI\OpenAPI\Models\Shared\MultiRegional;
use \OpenAPI\OpenAPI\Models\Shared\Regional;
use \OpenAPI\OpenAPI\Models\Shared\ComputeVmWorkload;
use \OpenAPI\OpenAPI\Models\Shared\MachineType;
use \OpenAPI\OpenAPI\Models\Shared\CustomMachineType;
use \OpenAPI\OpenAPI\Models\Shared\PredefinedMachineType;
use \OpenAPI\OpenAPI\Models\Shared\PersistentDisk;
use \OpenAPI\OpenAPI\Models\Shared\PersistentDiskScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PremiumTierEgressWorkload;
use \OpenAPI\OpenAPI\Models\Shared\PremiumTierEgressWorkloadDestinationContinentEnum;
use \OpenAPI\OpenAPI\Models\Shared\StandardTierEgressWorkload;
use \OpenAPI\OpenAPI\Models\Shared\VmToVmEgressWorkload;
use \OpenAPI\OpenAPI\Models\Shared\InterRegionEgress;
use \OpenAPI\OpenAPI\Models\Shared\IntraRegionEgress;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsEstimateCostScenarioSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsEstimateCostScenarioSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsEstimateCostScenarioSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbillingBillingAccountsEstimateCostScenarioRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->estimateCostScenarioForBillingAccountRequest = new EstimateCostScenarioForBillingAccountRequest();
    $request->estimateCostScenarioForBillingAccountRequest->costScenario = new CostScenario();
    $request->estimateCostScenarioForBillingAccountRequest->costScenario->commitments = [
        new Commitment(),
        new Commitment(),
        new Commitment(),
    ];
    $request->estimateCostScenarioForBillingAccountRequest->costScenario->scenarioConfig = new ScenarioConfig();
    $request->estimateCostScenarioForBillingAccountRequest->costScenario->scenarioConfig->estimateDuration = 'distinctio';
    $request->estimateCostScenarioForBillingAccountRequest->costScenario->workloads = [
        new Workload(),
        new Workload(),
        new Workload(),
        new Workload(),
    ];
    $request->accessToken = 'unde';
    $request->alt = AltEnum::PROTO;
    $request->billingAccount = 'corrupti';
    $request->callback = 'illum';
    $request->fields = 'vel';
    $request->key = 'error';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new CloudbillingBillingAccountsEstimateCostScenarioSecurity();
    $requestSecurity->option1 = new CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingAccounts->cloudbillingBillingAccountsEstimateCostScenario($request, $requestSecurity);

    if ($response->estimateCostScenarioForBillingAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [billingAccounts](docs/billingaccounts/README.md)

* [cloudbillingBillingAccountsEstimateCostScenario](docs/billingaccounts/README.md#cloudbillingbillingaccountsestimatecostscenario) - Use custom pricing in the estimate, using a `CostScenario` with a defined `billingAccount`.

### [v1beta](docs/v1beta/README.md)

* [cloudbillingEstimateCostScenario](docs/v1beta/README.md#cloudbillingestimatecostscenario) - Estimate list prices using a `CostScenario` without a defined `billingAccount`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
