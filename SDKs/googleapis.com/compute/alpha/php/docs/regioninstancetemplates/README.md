# regionInstanceTemplates

### Available Operations

* [computeRegionInstanceTemplatesDelete](#computeregioninstancetemplatesdelete) - Deletes the specified instance template. Deleting an instance template is permanent and cannot be undone.
* [computeRegionInstanceTemplatesGet](#computeregioninstancetemplatesget) - Returns the specified instance template.
* [computeRegionInstanceTemplatesInsert](#computeregioninstancetemplatesinsert) - Creates an instance template in the specified project and region using the global instance template whose URL is included in the request.
* [computeRegionInstanceTemplatesList](#computeregioninstancetemplateslist) - Retrieves a list of instance templates that are contained within the specified project and region.

## computeRegionInstanceTemplatesDelete

Deletes the specified instance template. Deleting an instance template is permanent and cannot be undone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceTemplatesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceTemplatesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceTemplatesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceTemplatesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceTemplatesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'illo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reprehenderit';
    $request->fields = 'vel';
    $request->instanceTemplate = 'culpa';
    $request->key = 'qui';
    $request->oauthToken = 'dolore';
    $request->prettyPrint = false;
    $request->project = 'distinctio';
    $request->quotaUser = 'incidunt';
    $request->region = 'consequatur';
    $request->requestId = 'porro';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'maiores';
    $request->userIp = 'doloremque';

    $requestSecurity = new ComputeRegionInstanceTemplatesDeleteSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceTemplatesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceTemplates->computeRegionInstanceTemplatesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceTemplatesGet

Returns the specified instance template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceTemplatesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceTemplatesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceTemplatesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceTemplatesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceTemplatesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceTemplatesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->fields = 'quae';
    $request->instanceTemplate = 'doloremque';
    $request->key = 'molestias';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->project = 'saepe';
    $request->quotaUser = 'laudantium';
    $request->region = 'praesentium';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'blanditiis';
    $request->userIp = 'ea';

    $requestSecurity = new ComputeRegionInstanceTemplatesGetSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceTemplatesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceTemplates->computeRegionInstanceTemplatesGet($request, $requestSecurity);

    if ($response->instanceTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceTemplatesInsert

Creates an instance template in the specified project and region using the global instance template whose URL is included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceTemplatesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceTemplate;
use \OpenAPI\OpenAPI\Models\Shared\InstanceProperties;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedMachineFeatures;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedMachineFeaturesPerformanceMonitoringUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfidentialInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConfidentialInstanceConfigConfidentialInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDisk;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDiskArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomerEncryptionKey;
use \OpenAPI\OpenAPI\Models\Shared\GuestOsFeature;
use \OpenAPI\OpenAPI\Models\Shared\GuestOsFeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDiskInitializeParams;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDiskInitializeParamsArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDiskInitializeParamsInterfaceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDiskInitializeParamsOnUpdateActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDiskInterfaceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDiskModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDiskSavedStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\InitialStateConfig;
use \OpenAPI\OpenAPI\Models\Shared\FileContentBuffer;
use \OpenAPI\OpenAPI\Models\Shared\FileContentBufferFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DisplayDevice;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstancePropertiesKeyRevocationActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Metadata;
use \OpenAPI\OpenAPI\Models\Shared\MetadataItems;
use \OpenAPI\OpenAPI\Models\Shared\NetworkInterface;
use \OpenAPI\OpenAPI\Models\Shared\AccessConfig;
use \OpenAPI\OpenAPI\Models\Shared\AccessConfigNetworkTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccessConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AliasIpRange;
use \OpenAPI\OpenAPI\Models\Shared\NetworkInterfaceIpv6AccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkInterfaceNicTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkInterfaceStackTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkInterfaceSubInterface;
use \OpenAPI\OpenAPI\Models\Shared\NetworkInterfaceSubInterfaceIpAllocationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancePropertiesPostKeyRevocationActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancePropertiesPrivateIpv6GoogleAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinity;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinityConsumeReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Scheduling;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingInstanceTerminationActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingMaintenanceIntervalEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingNodeAffinity;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingNodeAffinityOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingOnHostMaintenanceEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingProvisioningModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccount;
use \OpenAPI\OpenAPI\Models\Shared\ServiceIntegrationSpec;
use \OpenAPI\OpenAPI\Models\Shared\ServiceIntegrationSpecBackupDRSpec;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedVmConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tags;
use \OpenAPI\OpenAPI\Models\Shared\SourceInstanceParams;
use \OpenAPI\OpenAPI\Models\Shared\DiskInstantiationConfig;
use \OpenAPI\OpenAPI\Models\Shared\DiskInstantiationConfigInstantiateFromEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceTemplatesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceTemplatesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceTemplatesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceTemplatesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceTemplate = new InstanceTemplate();
    $request->instanceTemplate->creationTimestamp = 'natus';
    $request->instanceTemplate->description = 'voluptas';
    $request->instanceTemplate->id = 'optio';
    $request->instanceTemplate->kind = 'totam';
    $request->instanceTemplate->name = 'Fred Dare';
    $request->instanceTemplate->properties = new InstanceProperties();
    $request->instanceTemplate->properties->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->instanceTemplate->properties->advancedMachineFeatures->enableNestedVirtualization = false;
    $request->instanceTemplate->properties->advancedMachineFeatures->enableUefiNetworking = false;
    $request->instanceTemplate->properties->advancedMachineFeatures->numaNodeCount = 16413;
    $request->instanceTemplate->properties->advancedMachineFeatures->performanceMonitoringUnit = AdvancedMachineFeaturesPerformanceMonitoringUnitEnum::PERFORMANCE_MONITORING_UNIT_UNSPECIFIED;
    $request->instanceTemplate->properties->advancedMachineFeatures->threadsPerCore = 216467;
    $request->instanceTemplate->properties->advancedMachineFeatures->visibleCoreCount = 805607;
    $request->instanceTemplate->properties->canIpForward = false;
    $request->instanceTemplate->properties->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->instanceTemplate->properties->confidentialInstanceConfig->confidentialInstanceType = ConfidentialInstanceConfigConfidentialInstanceTypeEnum::TDX;
    $request->instanceTemplate->properties->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->instanceTemplate->properties->description = 'dolore';
    $request->instanceTemplate->properties->disks = [
        new AttachedDisk(),
        new AttachedDisk(),
    ];
    $request->instanceTemplate->properties->displayDevice = new DisplayDevice();
    $request->instanceTemplate->properties->displayDevice->enableDisplay = false;
    $request->instanceTemplate->properties->guestAccelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->instanceTemplate->properties->keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum::NONE;
    $request->instanceTemplate->properties->labels = [
        'soluta' => 'fugiat',
    ];
    $request->instanceTemplate->properties->machineType = 'fugit';
    $request->instanceTemplate->properties->metadata = new Metadata();
    $request->instanceTemplate->properties->metadata->fingerprint = 'neque';
    $request->instanceTemplate->properties->metadata->items = [
        new MetadataItems(),
        new MetadataItems(),
        new MetadataItems(),
        new MetadataItems(),
    ];
    $request->instanceTemplate->properties->metadata->kind = 'corrupti';
    $request->instanceTemplate->properties->minCpuPlatform = 'autem';
    $request->instanceTemplate->properties->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->instanceTemplate->properties->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->instanceTemplate->properties->networkPerformanceConfig->externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum::DEFAULT;
    $request->instanceTemplate->properties->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::DEFAULT;
    $request->instanceTemplate->properties->postKeyRevocationActionType = InstancePropertiesPostKeyRevocationActionTypeEnum::SHUTDOWN;
    $request->instanceTemplate->properties->privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum::ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE;
    $request->instanceTemplate->properties->reservationAffinity = new ReservationAffinity();
    $request->instanceTemplate->properties->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::ANY_RESERVATION;
    $request->instanceTemplate->properties->reservationAffinity->key = 'porro';
    $request->instanceTemplate->properties->reservationAffinity->values = [
        'voluptatum',
        'consectetur',
    ];
    $request->instanceTemplate->properties->resourceManagerTags = [
        'magni' => 'in',
        'ipsum' => 'impedit',
    ];
    $request->instanceTemplate->properties->resourcePolicies = [
        'est',
        'provident',
        'vitae',
    ];
    $request->instanceTemplate->properties->scheduling = new Scheduling();
    $request->instanceTemplate->properties->scheduling->automaticRestart = false;
    $request->instanceTemplate->properties->scheduling->availabilityDomain = 64942;
    $request->instanceTemplate->properties->scheduling->currentCpus = 531247;
    $request->instanceTemplate->properties->scheduling->currentMemoryMb = 'tempore';
    $request->instanceTemplate->properties->scheduling->hostErrorTimeoutSeconds = 198695;
    $request->instanceTemplate->properties->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::INSTANCE_TERMINATION_ACTION_UNSPECIFIED;
    $request->instanceTemplate->properties->scheduling->latencyTolerant = false;
    $request->instanceTemplate->properties->scheduling->localSsdRecoveryTimeout = new Duration();
    $request->instanceTemplate->properties->scheduling->localSsdRecoveryTimeout->nanos = 978408;
    $request->instanceTemplate->properties->scheduling->localSsdRecoveryTimeout->seconds = 'veritatis';
    $request->instanceTemplate->properties->scheduling->locationHint = 'cum';
    $request->instanceTemplate->properties->scheduling->maintenanceFreezeDurationHours = 410547;
    $request->instanceTemplate->properties->scheduling->maintenanceInterval = SchedulingMaintenanceIntervalEnum::AS_NEEDED;
    $request->instanceTemplate->properties->scheduling->maxRunDuration = new Duration();
    $request->instanceTemplate->properties->scheduling->maxRunDuration->nanos = 666498;
    $request->instanceTemplate->properties->scheduling->maxRunDuration->seconds = 'non';
    $request->instanceTemplate->properties->scheduling->minNodeCpus = 191069;
    $request->instanceTemplate->properties->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
    ];
    $request->instanceTemplate->properties->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::TERMINATE;
    $request->instanceTemplate->properties->scheduling->preemptible = false;
    $request->instanceTemplate->properties->scheduling->provisioningModel = SchedulingProvisioningModelEnum::SPOT;
    $request->instanceTemplate->properties->scheduling->terminationTime = 'modi';
    $request->instanceTemplate->properties->secureTags = [
        'cumque',
        'ab',
        'voluptatem',
        'magni',
    ];
    $request->instanceTemplate->properties->serviceAccounts = [
        new ServiceAccount(),
        new ServiceAccount(),
        new ServiceAccount(),
    ];
    $request->instanceTemplate->properties->serviceIntegrationSpecs = [
        'reiciendis' => new ServiceIntegrationSpec(),
        'error' => new ServiceIntegrationSpec(),
    ];
    $request->instanceTemplate->properties->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->instanceTemplate->properties->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->instanceTemplate->properties->shieldedInstanceConfig->enableSecureBoot = false;
    $request->instanceTemplate->properties->shieldedInstanceConfig->enableVtpm = false;
    $request->instanceTemplate->properties->shieldedVmConfig = new ShieldedVmConfig();
    $request->instanceTemplate->properties->shieldedVmConfig->enableIntegrityMonitoring = false;
    $request->instanceTemplate->properties->shieldedVmConfig->enableSecureBoot = false;
    $request->instanceTemplate->properties->shieldedVmConfig->enableVtpm = false;
    $request->instanceTemplate->properties->tags = new Tags();
    $request->instanceTemplate->properties->tags->fingerprint = 'eos';
    $request->instanceTemplate->properties->tags->items = [
        'debitis',
        'possimus',
        'omnis',
        'nesciunt',
    ];
    $request->instanceTemplate->region = 'perspiciatis';
    $request->instanceTemplate->selfLink = 'expedita';
    $request->instanceTemplate->selfLinkWithId = 'mollitia';
    $request->instanceTemplate->sourceInstance = 'quas';
    $request->instanceTemplate->sourceInstanceParams = new SourceInstanceParams();
    $request->instanceTemplate->sourceInstanceParams->diskConfigs = [
        new DiskInstantiationConfig(),
        new DiskInstantiationConfig(),
        new DiskInstantiationConfig(),
        new DiskInstantiationConfig(),
    ];
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eveniet';
    $request->fields = 'consequuntur';
    $request->key = 'provident';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->project = 'aspernatur';
    $request->quotaUser = 'placeat';
    $request->region = 'magni';
    $request->requestId = 'doloremque';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'officiis';
    $request->userIp = 'inventore';

    $requestSecurity = new ComputeRegionInstanceTemplatesInsertSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceTemplatesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceTemplates->computeRegionInstanceTemplatesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceTemplatesList

Retrieves a list of instance templates that are contained within the specified project and region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceTemplatesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceTemplatesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceTemplatesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceTemplatesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceTemplatesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceTemplatesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'mollitia';
    $request->fields = 'cumque';
    $request->filter = 'dolor';
    $request->key = 'id';
    $request->maxResults = 826099;
    $request->oauthToken = 'optio';
    $request->orderBy = 'commodi';
    $request->pageToken = 'dolore';
    $request->prettyPrint = false;
    $request->project = 'iusto';
    $request->quotaUser = 'nulla';
    $request->region = 'explicabo';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'voluptatem';
    $request->userIp = 'expedita';

    $requestSecurity = new ComputeRegionInstanceTemplatesListSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceTemplatesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceTemplates->computeRegionInstanceTemplatesList($request, $requestSecurity);

    if ($response->instanceTemplateList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
