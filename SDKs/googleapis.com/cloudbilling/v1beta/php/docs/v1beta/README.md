# v1beta

### Available Operations

* [cloudbillingEstimateCostScenario](#cloudbillingestimatecostscenario) - Estimate list prices using a `CostScenario` without a defined `billingAccount`.

## cloudbillingEstimateCostScenario

Estimate list prices using a `CostScenario` without a defined `billingAccount`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingEstimateCostScenarioRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EstimateCostScenarioWithListPriceRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingEstimateCostScenarioSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingEstimateCostScenarioSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingEstimateCostScenarioSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingEstimateCostScenarioSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbillingEstimateCostScenarioRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->estimateCostScenarioWithListPriceRequest = new EstimateCostScenarioWithListPriceRequest();
    $request->estimateCostScenarioWithListPriceRequest->costScenario = new CostScenario();
    $request->estimateCostScenarioWithListPriceRequest->costScenario->commitments = [
        new Commitment(),
        new Commitment(),
    ];
    $request->estimateCostScenarioWithListPriceRequest->costScenario->scenarioConfig = new ScenarioConfig();
    $request->estimateCostScenarioWithListPriceRequest->costScenario->scenarioConfig->estimateDuration = 'veritatis';
    $request->estimateCostScenarioWithListPriceRequest->costScenario->workloads = [
        new Workload(),
        new Workload(),
        new Workload(),
    ];
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellendus';
    $request->fields = 'sapiente';
    $request->key = 'quo';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new CloudbillingEstimateCostScenarioSecurity();
    $requestSecurity->option1 = new CloudbillingEstimateCostScenarioSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1beta->cloudbillingEstimateCostScenario($request, $requestSecurity);

    if ($response->estimateCostScenarioWithListPriceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
