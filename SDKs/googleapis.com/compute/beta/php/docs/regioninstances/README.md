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
use \OpenAPI\OpenAPI\Models\Shared\ConfidentialInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDisk;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDiskArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomerEncryptionKey;
use \OpenAPI\OpenAPI\Models\Shared\GuestOsFeature;
use \OpenAPI\OpenAPI\Models\Shared\GuestOsFeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDiskInitializeParams;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDiskInitializeParamsArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDiskInitializeParamsOnUpdateActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDiskInterfaceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDiskModeEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancePropertiesPostKeyRevocationActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancePropertiesPrivateIpv6GoogleAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinity;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinityConsumeReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Scheduling;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingInstanceTerminationActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingMaintenanceIntervalEnum;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingNodeAffinity;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingNodeAffinityOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingOnHostMaintenanceEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingProvisioningModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccount;
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->bulkInsertInstanceResource = new BulkInsertInstanceResource();
    $request->bulkInsertInstanceResource->count = 'asperiores';
    $request->bulkInsertInstanceResource->instanceProperties = new InstanceProperties();
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->enableNestedVirtualization = false;
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->enableUefiNetworking = false;
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->threadsPerCore = 40256;
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->visibleCoreCount = 147489;
    $request->bulkInsertInstanceResource->instanceProperties->canIpForward = false;
    $request->bulkInsertInstanceResource->instanceProperties->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->bulkInsertInstanceResource->instanceProperties->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->bulkInsertInstanceResource->instanceProperties->description = 'quaerat';
    $request->bulkInsertInstanceResource->instanceProperties->disks = [
        new AttachedDisk(),
        new AttachedDisk(),
        new AttachedDisk(),
        new AttachedDisk(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->displayDevice = new DisplayDevice();
    $request->bulkInsertInstanceResource->instanceProperties->displayDevice->enableDisplay = false;
    $request->bulkInsertInstanceResource->instanceProperties->guestAccelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum::NONE;
    $request->bulkInsertInstanceResource->instanceProperties->labels = [
        'ut' => 'optio',
        'cumque' => 'ex',
        'dolore' => 'eligendi',
    ];
    $request->bulkInsertInstanceResource->instanceProperties->machineType = 'magni';
    $request->bulkInsertInstanceResource->instanceProperties->metadata = new Metadata();
    $request->bulkInsertInstanceResource->instanceProperties->metadata->fingerprint = 'libero';
    $request->bulkInsertInstanceResource->instanceProperties->metadata->items = [
        new MetadataItems(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->metadata->kind = 'culpa';
    $request->bulkInsertInstanceResource->instanceProperties->minCpuPlatform = 'ratione';
    $request->bulkInsertInstanceResource->instanceProperties->networkInterfaces = [
        new NetworkInterface(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->bulkInsertInstanceResource->instanceProperties->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::TIER1;
    $request->bulkInsertInstanceResource->instanceProperties->postKeyRevocationActionType = InstancePropertiesPostKeyRevocationActionTypeEnum::NOOP;
    $request->bulkInsertInstanceResource->instanceProperties->privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum::ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE;
    $request->bulkInsertInstanceResource->instanceProperties->reservationAffinity = new ReservationAffinity();
    $request->bulkInsertInstanceResource->instanceProperties->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::SPECIFIC_RESERVATION;
    $request->bulkInsertInstanceResource->instanceProperties->reservationAffinity->key = 'mollitia';
    $request->bulkInsertInstanceResource->instanceProperties->reservationAffinity->values = [
        'debitis',
        'ex',
        'magni',
        'reiciendis',
    ];
    $request->bulkInsertInstanceResource->instanceProperties->resourceManagerTags = [
        'est' => 'dolorum',
        'quaerat' => 'exercitationem',
    ];
    $request->bulkInsertInstanceResource->instanceProperties->resourcePolicies = [
        'id',
        'voluptas',
        'corporis',
    ];
    $request->bulkInsertInstanceResource->instanceProperties->scheduling = new Scheduling();
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->automaticRestart = false;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->hostErrorTimeoutSeconds = 911982;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::DELETE;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->locationHint = 'aperiam';
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->maintenanceFreezeDurationHours = 534039;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->maintenanceInterval = SchedulingMaintenanceIntervalEnum::PERIODIC;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->maxRunDuration = new Duration();
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->maxRunDuration->nanos = 228915;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->maxRunDuration->seconds = 'aut';
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->minNodeCpus = 96566;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::TERMINATE;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->preemptible = false;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->provisioningModel = SchedulingProvisioningModelEnum::STANDARD;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->terminationTime = 'ratione';
    $request->bulkInsertInstanceResource->instanceProperties->serviceAccounts = [
        new ServiceAccount(),
        new ServiceAccount(),
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
    $request->bulkInsertInstanceResource->instanceProperties->tags->fingerprint = 'soluta';
    $request->bulkInsertInstanceResource->instanceProperties->tags->items = [
        'molestias',
        'dignissimos',
        'repellendus',
    ];
    $request->bulkInsertInstanceResource->locationPolicy = new LocationPolicy();
    $request->bulkInsertInstanceResource->locationPolicy->locations = [
        'repellat' => new LocationPolicyLocation(),
        'eum' => new LocationPolicyLocation(),
    ];
    $request->bulkInsertInstanceResource->locationPolicy->targetShape = LocationPolicyTargetShapeEnum::ANY;
    $request->bulkInsertInstanceResource->minCount = 'quae';
    $request->bulkInsertInstanceResource->namePattern = 'sed';
    $request->bulkInsertInstanceResource->perInstanceProperties = [
        'culpa' => new BulkInsertInstanceResourcePerInstanceProperties(),
        'ea' => new BulkInsertInstanceResourcePerInstanceProperties(),
    ];
    $request->bulkInsertInstanceResource->sourceInstanceTemplate = 'accusantium';
    $request->accessToken = 'esse';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'voluptas';
    $request->key = 'voluptatem';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->project = 'explicabo';
    $request->quotaUser = 'sint';
    $request->region = 'quaerat';
    $request->requestId = 'nostrum';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'magnam';
    $request->userIp = 'cumque';

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
