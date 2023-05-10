# machineImages

### Available Operations

* [computeMachineImagesDelete](#computemachineimagesdelete) - Deletes the specified machine image. Deleting a machine image is permanent and cannot be undone.
* [computeMachineImagesGet](#computemachineimagesget) - Returns the specified machine image.
* [computeMachineImagesGetIamPolicy](#computemachineimagesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeMachineImagesInsert](#computemachineimagesinsert) - Creates a machine image in the specified project using the data that is included in the request. If you are creating a new machine image to update an existing instance, your new machine image should use the same network or, if applicable, the same subnetwork as the original instance.
* [computeMachineImagesList](#computemachineimageslist) - Retrieves a list of machine images that are contained within the specified project.
* [computeMachineImagesSetIamPolicy](#computemachineimagessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeMachineImagesTestIamPermissions](#computemachineimagestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeMachineImagesDelete

Deletes the specified machine image. Deleting a machine image is permanent and cannot be undone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeMachineImagesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'excepturi';
    $request->fields = 'alias';
    $request->key = 'deleniti';
    $request->machineImage = 'quasi';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->project = 'aspernatur';
    $request->quotaUser = 'quod';
    $request->requestId = 'suscipit';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'recusandae';
    $request->userIp = 'harum';

    $requestSecurity = new ComputeMachineImagesDeleteSecurity();
    $requestSecurity->option1 = new ComputeMachineImagesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->machineImages->computeMachineImagesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeMachineImagesGet

Returns the specified machine image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeMachineImagesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloremque';
    $request->fields = 'doloribus';
    $request->key = 'vel';
    $request->machineImage = 'enim';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->project = 'quidem';
    $request->quotaUser = 'in';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'alias';
    $request->userIp = 'consectetur';

    $requestSecurity = new ComputeMachineImagesGetSecurity();
    $requestSecurity->option1 = new ComputeMachineImagesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->machineImages->computeMachineImagesGet($request, $requestSecurity);

    if ($response->machineImage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeMachineImagesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeMachineImagesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->fields = 'aperiam';
    $request->key = 'hic';
    $request->oauthToken = 'blanditiis';
    $request->optionsRequestedPolicyVersion = 870212;
    $request->prettyPrint = false;
    $request->project = 'repudiandae';
    $request->quotaUser = 'ipsum';
    $request->resource = 'voluptatem';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'aut';
    $request->userIp = 'ex';

    $requestSecurity = new ComputeMachineImagesGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeMachineImagesGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->machineImages->computeMachineImagesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeMachineImagesInsert

Creates a machine image in the specified project using the data that is included in the request. If you are creating a new machine image to update an existing instance, your new machine image should use the same network or, if applicable, the same subnetwork as the original instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MachineImage;
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
use \OpenAPI\OpenAPI\Models\Shared\SavedDisk;
use \OpenAPI\OpenAPI\Models\Shared\SavedDiskArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Shared\SavedDiskStorageBytesStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceDiskEncryptionKey;
use \OpenAPI\OpenAPI\Models\Shared\SourceInstanceProperties;
use \OpenAPI\OpenAPI\Models\Shared\SavedAttachedDisk;
use \OpenAPI\OpenAPI\Models\Shared\SavedAttachedDiskInterfaceEnum;
use \OpenAPI\OpenAPI\Models\Shared\SavedAttachedDiskModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SavedAttachedDiskStorageBytesStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SavedAttachedDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceInstancePropertiesKeyRevocationActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceInstancePropertiesPostKeyRevocationActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MachineImageStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeMachineImagesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->machineImage = new MachineImage();
    $request->machineImage->creationTimestamp = 'fugiat';
    $request->machineImage->description = 'atque';
    $request->machineImage->guestFlush = false;
    $request->machineImage->id = 'beatae';
    $request->machineImage->instanceProperties = new InstanceProperties();
    $request->machineImage->instanceProperties->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->machineImage->instanceProperties->advancedMachineFeatures->enableNestedVirtualization = false;
    $request->machineImage->instanceProperties->advancedMachineFeatures->enableUefiNetworking = false;
    $request->machineImage->instanceProperties->advancedMachineFeatures->numaNodeCount = 15706;
    $request->machineImage->instanceProperties->advancedMachineFeatures->performanceMonitoringUnit = AdvancedMachineFeaturesPerformanceMonitoringUnitEnum::ENHANCED;
    $request->machineImage->instanceProperties->advancedMachineFeatures->threadsPerCore = 103068;
    $request->machineImage->instanceProperties->advancedMachineFeatures->visibleCoreCount = 543317;
    $request->machineImage->instanceProperties->canIpForward = false;
    $request->machineImage->instanceProperties->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->machineImage->instanceProperties->confidentialInstanceConfig->confidentialInstanceType = ConfidentialInstanceConfigConfidentialInstanceTypeEnum::TDX;
    $request->machineImage->instanceProperties->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->machineImage->instanceProperties->description = 'unde';
    $request->machineImage->instanceProperties->disks = [
        new AttachedDisk(),
        new AttachedDisk(),
    ];
    $request->machineImage->instanceProperties->displayDevice = new DisplayDevice();
    $request->machineImage->instanceProperties->displayDevice->enableDisplay = false;
    $request->machineImage->instanceProperties->guestAccelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->machineImage->instanceProperties->keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum::KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
    $request->machineImage->instanceProperties->labels = [
        'quia' => 'aspernatur',
        'iste' => 'molestiae',
    ];
    $request->machineImage->instanceProperties->machineType = 'minima';
    $request->machineImage->instanceProperties->metadata = new Metadata();
    $request->machineImage->instanceProperties->metadata->fingerprint = 'et';
    $request->machineImage->instanceProperties->metadata->items = [
        new MetadataItems(),
    ];
    $request->machineImage->instanceProperties->metadata->kind = 'quibusdam';
    $request->machineImage->instanceProperties->minCpuPlatform = 'culpa';
    $request->machineImage->instanceProperties->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->machineImage->instanceProperties->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->machineImage->instanceProperties->networkPerformanceConfig->externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum::DEFAULT;
    $request->machineImage->instanceProperties->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::DEFAULT;
    $request->machineImage->instanceProperties->postKeyRevocationActionType = InstancePropertiesPostKeyRevocationActionTypeEnum::NOOP;
    $request->machineImage->instanceProperties->privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum::ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE;
    $request->machineImage->instanceProperties->reservationAffinity = new ReservationAffinity();
    $request->machineImage->instanceProperties->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::ANY_RESERVATION;
    $request->machineImage->instanceProperties->reservationAffinity->key = 'provident';
    $request->machineImage->instanceProperties->reservationAffinity->values = [
        'nobis',
    ];
    $request->machineImage->instanceProperties->resourceManagerTags = [
        'laboriosam' => 'quasi',
        'porro' => 'sed',
        'laborum' => 'in',
        'eaque' => 'odit',
    ];
    $request->machineImage->instanceProperties->resourcePolicies = [
        'soluta',
        'sint',
        'odio',
    ];
    $request->machineImage->instanceProperties->scheduling = new Scheduling();
    $request->machineImage->instanceProperties->scheduling->automaticRestart = false;
    $request->machineImage->instanceProperties->scheduling->availabilityDomain = 918286;
    $request->machineImage->instanceProperties->scheduling->currentCpus = 879644;
    $request->machineImage->instanceProperties->scheduling->currentMemoryMb = 'quasi';
    $request->machineImage->instanceProperties->scheduling->hostErrorTimeoutSeconds = 38115;
    $request->machineImage->instanceProperties->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::DELETE;
    $request->machineImage->instanceProperties->scheduling->latencyTolerant = false;
    $request->machineImage->instanceProperties->scheduling->localSsdRecoveryTimeout = new Duration();
    $request->machineImage->instanceProperties->scheduling->localSsdRecoveryTimeout->nanos = 855199;
    $request->machineImage->instanceProperties->scheduling->localSsdRecoveryTimeout->seconds = 'id';
    $request->machineImage->instanceProperties->scheduling->locationHint = 'sed';
    $request->machineImage->instanceProperties->scheduling->maintenanceFreezeDurationHours = 853351;
    $request->machineImage->instanceProperties->scheduling->maintenanceInterval = SchedulingMaintenanceIntervalEnum::RECURRENT;
    $request->machineImage->instanceProperties->scheduling->maxRunDuration = new Duration();
    $request->machineImage->instanceProperties->scheduling->maxRunDuration->nanos = 208432;
    $request->machineImage->instanceProperties->scheduling->maxRunDuration->seconds = 'minima';
    $request->machineImage->instanceProperties->scheduling->minNodeCpus = 948374;
    $request->machineImage->instanceProperties->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->machineImage->instanceProperties->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::TERMINATE;
    $request->machineImage->instanceProperties->scheduling->preemptible = false;
    $request->machineImage->instanceProperties->scheduling->provisioningModel = SchedulingProvisioningModelEnum::SPOT;
    $request->machineImage->instanceProperties->scheduling->terminationTime = 'quasi';
    $request->machineImage->instanceProperties->secureTags = [
        'tenetur',
        'dolorem',
        'adipisci',
    ];
    $request->machineImage->instanceProperties->serviceAccounts = [
        new ServiceAccount(),
        new ServiceAccount(),
        new ServiceAccount(),
        new ServiceAccount(),
    ];
    $request->machineImage->instanceProperties->serviceIntegrationSpecs = [
        'id' => new ServiceIntegrationSpec(),
        'quidem' => new ServiceIntegrationSpec(),
        'ut' => new ServiceIntegrationSpec(),
    ];
    $request->machineImage->instanceProperties->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->machineImage->instanceProperties->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->machineImage->instanceProperties->shieldedInstanceConfig->enableSecureBoot = false;
    $request->machineImage->instanceProperties->shieldedInstanceConfig->enableVtpm = false;
    $request->machineImage->instanceProperties->shieldedVmConfig = new ShieldedVmConfig();
    $request->machineImage->instanceProperties->shieldedVmConfig->enableIntegrityMonitoring = false;
    $request->machineImage->instanceProperties->shieldedVmConfig->enableSecureBoot = false;
    $request->machineImage->instanceProperties->shieldedVmConfig->enableVtpm = false;
    $request->machineImage->instanceProperties->tags = new Tags();
    $request->machineImage->instanceProperties->tags->fingerprint = 'veniam';
    $request->machineImage->instanceProperties->tags->items = [
        'quae',
        'dolores',
    ];
    $request->machineImage->kind = 'dolorum';
    $request->machineImage->machineImageEncryptionKey = new CustomerEncryptionKey();
    $request->machineImage->machineImageEncryptionKey->kmsKeyName = 'quod';
    $request->machineImage->machineImageEncryptionKey->kmsKeyServiceAccount = 'sunt';
    $request->machineImage->machineImageEncryptionKey->rawKey = 'iure';
    $request->machineImage->machineImageEncryptionKey->rsaEncryptedKey = 'voluptatem';
    $request->machineImage->machineImageEncryptionKey->sha256 = 'incidunt';
    $request->machineImage->name = 'Randal Brown';
    $request->machineImage->satisfiesPzs = false;
    $request->machineImage->savedDisks = [
        new SavedDisk(),
        new SavedDisk(),
        new SavedDisk(),
    ];
    $request->machineImage->selfLink = 'asperiores';
    $request->machineImage->selfLinkWithId = 'maxime';
    $request->machineImage->sourceDiskEncryptionKeys = [
        new SourceDiskEncryptionKey(),
        new SourceDiskEncryptionKey(),
    ];
    $request->machineImage->sourceInstance = 'dicta';
    $request->machineImage->sourceInstanceProperties = new SourceInstanceProperties();
    $request->machineImage->sourceInstanceProperties->canIpForward = false;
    $request->machineImage->sourceInstanceProperties->deletionProtection = false;
    $request->machineImage->sourceInstanceProperties->description = 'deserunt';
    $request->machineImage->sourceInstanceProperties->disks = [
        new SavedAttachedDisk(),
        new SavedAttachedDisk(),
        new SavedAttachedDisk(),
    ];
    $request->machineImage->sourceInstanceProperties->guestAccelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->machineImage->sourceInstanceProperties->keyRevocationActionType = SourceInstancePropertiesKeyRevocationActionTypeEnum::KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
    $request->machineImage->sourceInstanceProperties->labels = [
        'harum' => 'quaerat',
        'delectus' => 'sit',
        'porro' => 'labore',
        'molestias' => 'qui',
    ];
    $request->machineImage->sourceInstanceProperties->machineType = 'soluta';
    $request->machineImage->sourceInstanceProperties->metadata = new Metadata();
    $request->machineImage->sourceInstanceProperties->metadata->fingerprint = 'ullam';
    $request->machineImage->sourceInstanceProperties->metadata->items = [
        new MetadataItems(),
        new MetadataItems(),
    ];
    $request->machineImage->sourceInstanceProperties->metadata->kind = 'ut';
    $request->machineImage->sourceInstanceProperties->minCpuPlatform = 'incidunt';
    $request->machineImage->sourceInstanceProperties->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->machineImage->sourceInstanceProperties->postKeyRevocationActionType = SourceInstancePropertiesPostKeyRevocationActionTypeEnum::NOOP;
    $request->machineImage->sourceInstanceProperties->scheduling = new Scheduling();
    $request->machineImage->sourceInstanceProperties->scheduling->automaticRestart = false;
    $request->machineImage->sourceInstanceProperties->scheduling->availabilityDomain = 524463;
    $request->machineImage->sourceInstanceProperties->scheduling->currentCpus = 677203;
    $request->machineImage->sourceInstanceProperties->scheduling->currentMemoryMb = 'explicabo';
    $request->machineImage->sourceInstanceProperties->scheduling->hostErrorTimeoutSeconds = 142591;
    $request->machineImage->sourceInstanceProperties->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::INSTANCE_TERMINATION_ACTION_UNSPECIFIED;
    $request->machineImage->sourceInstanceProperties->scheduling->latencyTolerant = false;
    $request->machineImage->sourceInstanceProperties->scheduling->localSsdRecoveryTimeout = new Duration();
    $request->machineImage->sourceInstanceProperties->scheduling->localSsdRecoveryTimeout->nanos = 459348;
    $request->machineImage->sourceInstanceProperties->scheduling->localSsdRecoveryTimeout->seconds = 'est';
    $request->machineImage->sourceInstanceProperties->scheduling->locationHint = 'est';
    $request->machineImage->sourceInstanceProperties->scheduling->maintenanceFreezeDurationHours = 882985;
    $request->machineImage->sourceInstanceProperties->scheduling->maintenanceInterval = SchedulingMaintenanceIntervalEnum::RECURRENT;
    $request->machineImage->sourceInstanceProperties->scheduling->maxRunDuration = new Duration();
    $request->machineImage->sourceInstanceProperties->scheduling->maxRunDuration->nanos = 461186;
    $request->machineImage->sourceInstanceProperties->scheduling->maxRunDuration->seconds = 'omnis';
    $request->machineImage->sourceInstanceProperties->scheduling->minNodeCpus = 918147;
    $request->machineImage->sourceInstanceProperties->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
    ];
    $request->machineImage->sourceInstanceProperties->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::TERMINATE;
    $request->machineImage->sourceInstanceProperties->scheduling->preemptible = false;
    $request->machineImage->sourceInstanceProperties->scheduling->provisioningModel = SchedulingProvisioningModelEnum::SPOT;
    $request->machineImage->sourceInstanceProperties->scheduling->terminationTime = 'illo';
    $request->machineImage->sourceInstanceProperties->serviceAccounts = [
        new ServiceAccount(),
        new ServiceAccount(),
        new ServiceAccount(),
    ];
    $request->machineImage->sourceInstanceProperties->tags = new Tags();
    $request->machineImage->sourceInstanceProperties->tags->fingerprint = 'placeat';
    $request->machineImage->sourceInstanceProperties->tags->items = [
        'et',
    ];
    $request->machineImage->status = MachineImageStatusEnum::READY;
    $request->machineImage->storageLocations = [
        'cumque',
        'distinctio',
        'rem',
        'consectetur',
    ];
    $request->machineImage->totalStorageBytes = 'nulla';
    $request->accessToken = 'magni';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->fields = 'deleniti';
    $request->key = 'mollitia';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->project = 'neque';
    $request->quotaUser = 'facilis';
    $request->requestId = 'sapiente';
    $request->sourceInstance = 'maxime';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'dolor';
    $request->userIp = 'nulla';

    $requestSecurity = new ComputeMachineImagesInsertSecurity();
    $requestSecurity->option1 = new ComputeMachineImagesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->machineImages->computeMachineImagesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeMachineImagesList

Retrieves a list of machine images that are contained within the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeMachineImagesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eius';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aperiam';
    $request->fields = 'animi';
    $request->filter = 'unde';
    $request->key = 'rem';
    $request->maxResults = 435411;
    $request->oauthToken = 'error';
    $request->orderBy = 'aliquam';
    $request->pageToken = 'natus';
    $request->prettyPrint = false;
    $request->project = 'ad';
    $request->quotaUser = 'cum';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'quod';
    $request->userIp = 'nihil';

    $requestSecurity = new ComputeMachineImagesListSecurity();
    $requestSecurity->option1 = new ComputeMachineImagesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->machineImages->computeMachineImagesList($request, $requestSecurity);

    if ($response->machineImageList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeMachineImagesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalSetPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\RuleActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\ConditionIamEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConditionOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConditionSysEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfig;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCloudAuditOptions;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationLoggingOptions;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationLoggingOptionsPermissionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCloudAuditOptionsLogNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCounterOptions;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCounterOptionsCustomField;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigDataAccessOptions;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigDataAccessOptionsLogModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeMachineImagesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->globalSetPolicyRequest = new GlobalSetPolicyRequest();
    $request->globalSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->etag = 'tenetur';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'rerum';
    $request->globalSetPolicyRequest->policy->rules = [
        new Rule(),
    ];
    $request->globalSetPolicyRequest->policy->version = 515192;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'porro';
    $request->fields = 'atque';
    $request->key = 'autem';
    $request->oauthToken = 'eius';
    $request->prettyPrint = false;
    $request->project = 'unde';
    $request->quotaUser = 'sunt';
    $request->resource = 'amet';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'commodi';
    $request->userIp = 'a';

    $requestSecurity = new ComputeMachineImagesSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeMachineImagesSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->machineImages->computeMachineImagesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeMachineImagesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeMachineImagesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'eligendi',
    ];
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sint';
    $request->fields = 'eligendi';
    $request->key = 'incidunt';
    $request->oauthToken = 'quisquam';
    $request->prettyPrint = false;
    $request->project = 'quod';
    $request->quotaUser = 'laboriosam';
    $request->resource = 'quidem';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'praesentium';
    $request->userIp = 'totam';

    $requestSecurity = new ComputeMachineImagesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeMachineImagesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->machineImages->computeMachineImagesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
