# regionInstances

### Available Operations

* [computeRegionInstancesBulkInsert](#computeregioninstancesbulkinsert) - Creates multiple instances in a given region. Count specifies the number of instances to create.

## computeRegionInstancesBulkInsert

Creates multiple instances in a given region. Count specifies the number of instances to create.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstancesBulkInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BulkInsertInstanceResource;
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
use \OpenAPI\OpenAPI\Models\Shared\LocationPolicy;
use \OpenAPI\OpenAPI\Models\Shared\LocationPolicyLocation;
use \OpenAPI\OpenAPI\Models\Shared\LocationPolicyLocationConstraints;
use \OpenAPI\OpenAPI\Models\Shared\LocationPolicyLocationPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocationPolicyTargetShapeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BulkInsertInstanceResourcePerInstanceProperties;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstancesBulkInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstancesBulkInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstancesBulkInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstancesBulkInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->bulkInsertInstanceResource = new BulkInsertInstanceResource();
    $request->bulkInsertInstanceResource->count = 'beatae';
    $request->bulkInsertInstanceResource->instanceProperties = new InstanceProperties();
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->enableNestedVirtualization = false;
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->enableUefiNetworking = false;
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->numaNodeCount = 73989;
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->performanceMonitoringUnit = AdvancedMachineFeaturesPerformanceMonitoringUnitEnum::STANDARD;
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->threadsPerCore = 640159;
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->visibleCoreCount = 281335;
    $request->bulkInsertInstanceResource->instanceProperties->canIpForward = false;
    $request->bulkInsertInstanceResource->instanceProperties->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->bulkInsertInstanceResource->instanceProperties->confidentialInstanceConfig->confidentialInstanceType = ConfidentialInstanceConfigConfidentialInstanceTypeEnum::SEV_SNP;
    $request->bulkInsertInstanceResource->instanceProperties->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->bulkInsertInstanceResource->instanceProperties->description = 'explicabo';
    $request->bulkInsertInstanceResource->instanceProperties->disks = [
        new AttachedDisk(),
        new AttachedDisk(),
        new AttachedDisk(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->displayDevice = new DisplayDevice();
    $request->bulkInsertInstanceResource->instanceProperties->displayDevice->enableDisplay = false;
    $request->bulkInsertInstanceResource->instanceProperties->guestAccelerators = [
        new AcceleratorConfig(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum::KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
    $request->bulkInsertInstanceResource->instanceProperties->labels = [
        'eligendi' => 'porro',
        'aliquid' => 'laborum',
        'sed' => 'voluptatibus',
        'ipsa' => 'reiciendis',
    ];
    $request->bulkInsertInstanceResource->instanceProperties->machineType = 'nostrum';
    $request->bulkInsertInstanceResource->instanceProperties->metadata = new Metadata();
    $request->bulkInsertInstanceResource->instanceProperties->metadata->fingerprint = 'libero';
    $request->bulkInsertInstanceResource->instanceProperties->metadata->items = [
        new MetadataItems(),
        new MetadataItems(),
        new MetadataItems(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->metadata->kind = 'quibusdam';
    $request->bulkInsertInstanceResource->instanceProperties->minCpuPlatform = 'dolor';
    $request->bulkInsertInstanceResource->instanceProperties->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->bulkInsertInstanceResource->instanceProperties->networkPerformanceConfig->externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum::TIER1;
    $request->bulkInsertInstanceResource->instanceProperties->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::DEFAULT;
    $request->bulkInsertInstanceResource->instanceProperties->postKeyRevocationActionType = InstancePropertiesPostKeyRevocationActionTypeEnum::NOOP;
    $request->bulkInsertInstanceResource->instanceProperties->privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum::ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE;
    $request->bulkInsertInstanceResource->instanceProperties->reservationAffinity = new ReservationAffinity();
    $request->bulkInsertInstanceResource->instanceProperties->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::SPECIFIC_RESERVATION;
    $request->bulkInsertInstanceResource->instanceProperties->reservationAffinity->key = 'commodi';
    $request->bulkInsertInstanceResource->instanceProperties->reservationAffinity->values = [
        'dignissimos',
        'possimus',
        'dolor',
    ];
    $request->bulkInsertInstanceResource->instanceProperties->resourceManagerTags = [
        'voluptatem' => 'alias',
    ];
    $request->bulkInsertInstanceResource->instanceProperties->resourcePolicies = [
        'deleniti',
        'repudiandae',
        'sed',
        'cum',
    ];
    $request->bulkInsertInstanceResource->instanceProperties->scheduling = new Scheduling();
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->automaticRestart = false;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->availabilityDomain = 571693;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->currentCpus = 743610;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->currentMemoryMb = 'voluptatem';
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->hostErrorTimeoutSeconds = 833856;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::INSTANCE_TERMINATION_ACTION_UNSPECIFIED;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->latencyTolerant = false;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->localSsdRecoveryTimeout = new Duration();
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->localSsdRecoveryTimeout->nanos = 311838;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->localSsdRecoveryTimeout->seconds = 'nisi';
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->locationHint = 'possimus';
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->maintenanceFreezeDurationHours = 156247;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->maintenanceInterval = SchedulingMaintenanceIntervalEnum::RECURRENT;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->maxRunDuration = new Duration();
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->maxRunDuration->nanos = 467847;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->maxRunDuration->seconds = 'quisquam';
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->minNodeCpus = 477169;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::MIGRATE;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->preemptible = false;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->provisioningModel = SchedulingProvisioningModelEnum::STANDARD;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->terminationTime = 'dolorum';
    $request->bulkInsertInstanceResource->instanceProperties->secureTags = [
        'voluptates',
    ];
    $request->bulkInsertInstanceResource->instanceProperties->serviceAccounts = [
        new ServiceAccount(),
        new ServiceAccount(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->serviceIntegrationSpecs = [
        'tenetur' => new ServiceIntegrationSpec(),
        'similique' => new ServiceIntegrationSpec(),
        'sint' => new ServiceIntegrationSpec(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->bulkInsertInstanceResource->instanceProperties->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->bulkInsertInstanceResource->instanceProperties->shieldedInstanceConfig->enableSecureBoot = false;
    $request->bulkInsertInstanceResource->instanceProperties->shieldedInstanceConfig->enableVtpm = false;
    $request->bulkInsertInstanceResource->instanceProperties->shieldedVmConfig = new ShieldedVmConfig();
    $request->bulkInsertInstanceResource->instanceProperties->shieldedVmConfig->enableIntegrityMonitoring = false;
    $request->bulkInsertInstanceResource->instanceProperties->shieldedVmConfig->enableSecureBoot = false;
    $request->bulkInsertInstanceResource->instanceProperties->shieldedVmConfig->enableVtpm = false;
    $request->bulkInsertInstanceResource->instanceProperties->tags = new Tags();
    $request->bulkInsertInstanceResource->instanceProperties->tags->fingerprint = 'nobis';
    $request->bulkInsertInstanceResource->instanceProperties->tags->items = [
        'earum',
        'veniam',
        'maiores',
    ];
    $request->bulkInsertInstanceResource->locationPolicy = new LocationPolicy();
    $request->bulkInsertInstanceResource->locationPolicy->locations = [
        'dignissimos' => new LocationPolicyLocation(),
    ];
    $request->bulkInsertInstanceResource->locationPolicy->targetShape = LocationPolicyTargetShapeEnum::ANY_SINGLE_ZONE;
    $request->bulkInsertInstanceResource->minCount = 'hic';
    $request->bulkInsertInstanceResource->namePattern = 'vel';
    $request->bulkInsertInstanceResource->perInstanceProperties = [
        'sit' => new BulkInsertInstanceResourcePerInstanceProperties(),
        'libero' => new BulkInsertInstanceResourcePerInstanceProperties(),
    ];
    $request->bulkInsertInstanceResource->sourceInstanceTemplate = 'quasi';
    $request->accessToken = 'earum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aut';
    $request->fields = 'ducimus';
    $request->key = 'repudiandae';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->project = 'officiis';
    $request->quotaUser = 'dolore';
    $request->region = 'neque';
    $request->requestId = 'molestias';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'odio';
    $request->userIp = 'sunt';

    $requestSecurity = new ComputeRegionInstancesBulkInsertSecurity();
    $requestSecurity->option1 = new ComputeRegionInstancesBulkInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstances->computeRegionInstancesBulkInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
