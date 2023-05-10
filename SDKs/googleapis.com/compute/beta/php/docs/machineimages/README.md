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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'non';
    $request->fields = 'suscipit';
    $request->key = 'amet';
    $request->machineImage = 'deleniti';
    $request->oauthToken = 'exercitationem';
    $request->prettyPrint = false;
    $request->project = 'illo';
    $request->quotaUser = 'fugit';
    $request->requestId = 'id';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'fugit';
    $request->userIp = 'nostrum';

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
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perspiciatis';
    $request->fields = 'asperiores';
    $request->key = 'eos';
    $request->machineImage = 'saepe';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->project = 'esse';
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'autem';
    $request->userIp = 'reprehenderit';

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
    $request->accessToken = 'quas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'modi';
    $request->fields = 'alias';
    $request->key = 'nam';
    $request->oauthToken = 'minus';
    $request->optionsRequestedPolicyVersion = 24078;
    $request->prettyPrint = false;
    $request->project = 'quis';
    $request->quotaUser = 'hic';
    $request->resource = 'dolorum';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'voluptatem';
    $request->userIp = 'at';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->machineImage = new MachineImage();
    $request->machineImage->creationTimestamp = 'quis';
    $request->machineImage->description = 'perferendis';
    $request->machineImage->guestFlush = false;
    $request->machineImage->id = 'itaque';
    $request->machineImage->instanceProperties = new InstanceProperties();
    $request->machineImage->instanceProperties->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->machineImage->instanceProperties->advancedMachineFeatures->enableNestedVirtualization = false;
    $request->machineImage->instanceProperties->advancedMachineFeatures->enableUefiNetworking = false;
    $request->machineImage->instanceProperties->advancedMachineFeatures->threadsPerCore = 816346;
    $request->machineImage->instanceProperties->advancedMachineFeatures->visibleCoreCount = 990122;
    $request->machineImage->instanceProperties->canIpForward = false;
    $request->machineImage->instanceProperties->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->machineImage->instanceProperties->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->machineImage->instanceProperties->description = 'ratione';
    $request->machineImage->instanceProperties->disks = [
        new AttachedDisk(),
    ];
    $request->machineImage->instanceProperties->displayDevice = new DisplayDevice();
    $request->machineImage->instanceProperties->displayDevice->enableDisplay = false;
    $request->machineImage->instanceProperties->guestAccelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->machineImage->instanceProperties->keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum::NONE;
    $request->machineImage->instanceProperties->labels = [
        'pariatur' => 'aspernatur',
        'aperiam' => 'itaque',
    ];
    $request->machineImage->instanceProperties->machineType = 'quo';
    $request->machineImage->instanceProperties->metadata = new Metadata();
    $request->machineImage->instanceProperties->metadata->fingerprint = 'perspiciatis';
    $request->machineImage->instanceProperties->metadata->items = [
        new MetadataItems(),
    ];
    $request->machineImage->instanceProperties->metadata->kind = 'debitis';
    $request->machineImage->instanceProperties->minCpuPlatform = 'animi';
    $request->machineImage->instanceProperties->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->machineImage->instanceProperties->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->machineImage->instanceProperties->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::DEFAULT;
    $request->machineImage->instanceProperties->postKeyRevocationActionType = InstancePropertiesPostKeyRevocationActionTypeEnum::SHUTDOWN;
    $request->machineImage->instanceProperties->privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum::ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE;
    $request->machineImage->instanceProperties->reservationAffinity = new ReservationAffinity();
    $request->machineImage->instanceProperties->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::UNSPECIFIED;
    $request->machineImage->instanceProperties->reservationAffinity->key = 'labore';
    $request->machineImage->instanceProperties->reservationAffinity->values = [
        'voluptas',
        'saepe',
    ];
    $request->machineImage->instanceProperties->resourceManagerTags = [
        'veniam' => 'ab',
        'minima' => 'nisi',
        'repellat' => 'sapiente',
    ];
    $request->machineImage->instanceProperties->resourcePolicies = [
        'molestiae',
        'amet',
        'voluptatibus',
        'temporibus',
    ];
    $request->machineImage->instanceProperties->scheduling = new Scheduling();
    $request->machineImage->instanceProperties->scheduling->automaticRestart = false;
    $request->machineImage->instanceProperties->scheduling->hostErrorTimeoutSeconds = 945921;
    $request->machineImage->instanceProperties->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::INSTANCE_TERMINATION_ACTION_UNSPECIFIED;
    $request->machineImage->instanceProperties->scheduling->locationHint = 'tempora';
    $request->machineImage->instanceProperties->scheduling->maintenanceFreezeDurationHours = 979244;
    $request->machineImage->instanceProperties->scheduling->maintenanceInterval = SchedulingMaintenanceIntervalEnum::PERIODIC;
    $request->machineImage->instanceProperties->scheduling->maxRunDuration = new Duration();
    $request->machineImage->instanceProperties->scheduling->maxRunDuration->nanos = 814385;
    $request->machineImage->instanceProperties->scheduling->maxRunDuration->seconds = 'illum';
    $request->machineImage->instanceProperties->scheduling->minNodeCpus = 346523;
    $request->machineImage->instanceProperties->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->machineImage->instanceProperties->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::TERMINATE;
    $request->machineImage->instanceProperties->scheduling->preemptible = false;
    $request->machineImage->instanceProperties->scheduling->provisioningModel = SchedulingProvisioningModelEnum::STANDARD;
    $request->machineImage->instanceProperties->scheduling->terminationTime = 'minima';
    $request->machineImage->instanceProperties->serviceAccounts = [
        new ServiceAccount(),
        new ServiceAccount(),
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
    $request->machineImage->instanceProperties->tags->fingerprint = 'sequi';
    $request->machineImage->instanceProperties->tags->items = [
        'occaecati',
    ];
    $request->machineImage->kind = 'voluptatum';
    $request->machineImage->machineImageEncryptionKey = new CustomerEncryptionKey();
    $request->machineImage->machineImageEncryptionKey->kmsKeyName = 'illum';
    $request->machineImage->machineImageEncryptionKey->kmsKeyServiceAccount = 'laborum';
    $request->machineImage->machineImageEncryptionKey->rawKey = 'sapiente';
    $request->machineImage->machineImageEncryptionKey->rsaEncryptedKey = 'soluta';
    $request->machineImage->machineImageEncryptionKey->sha256 = 'eius';
    $request->machineImage->name = 'Jan Leuschke';
    $request->machineImage->satisfiesPzs = false;
    $request->machineImage->savedDisks = [
        new SavedDisk(),
    ];
    $request->machineImage->selfLink = 'neque';
    $request->machineImage->sourceDiskEncryptionKeys = [
        new SourceDiskEncryptionKey(),
        new SourceDiskEncryptionKey(),
        new SourceDiskEncryptionKey(),
    ];
    $request->machineImage->sourceInstance = 'quos';
    $request->machineImage->sourceInstanceProperties = new SourceInstanceProperties();
    $request->machineImage->sourceInstanceProperties->canIpForward = false;
    $request->machineImage->sourceInstanceProperties->deletionProtection = false;
    $request->machineImage->sourceInstanceProperties->description = 'saepe';
    $request->machineImage->sourceInstanceProperties->disks = [
        new SavedAttachedDisk(),
        new SavedAttachedDisk(),
    ];
    $request->machineImage->sourceInstanceProperties->guestAccelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->machineImage->sourceInstanceProperties->keyRevocationActionType = SourceInstancePropertiesKeyRevocationActionTypeEnum::NONE;
    $request->machineImage->sourceInstanceProperties->labels = [
        'nesciunt' => 'error',
    ];
    $request->machineImage->sourceInstanceProperties->machineType = 'necessitatibus';
    $request->machineImage->sourceInstanceProperties->metadata = new Metadata();
    $request->machineImage->sourceInstanceProperties->metadata->fingerprint = 'culpa';
    $request->machineImage->sourceInstanceProperties->metadata->items = [
        new MetadataItems(),
        new MetadataItems(),
    ];
    $request->machineImage->sourceInstanceProperties->metadata->kind = 'asperiores';
    $request->machineImage->sourceInstanceProperties->minCpuPlatform = 'iste';
    $request->machineImage->sourceInstanceProperties->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->machineImage->sourceInstanceProperties->postKeyRevocationActionType = SourceInstancePropertiesPostKeyRevocationActionTypeEnum::NOOP;
    $request->machineImage->sourceInstanceProperties->scheduling = new Scheduling();
    $request->machineImage->sourceInstanceProperties->scheduling->automaticRestart = false;
    $request->machineImage->sourceInstanceProperties->scheduling->hostErrorTimeoutSeconds = 539751;
    $request->machineImage->sourceInstanceProperties->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::INSTANCE_TERMINATION_ACTION_UNSPECIFIED;
    $request->machineImage->sourceInstanceProperties->scheduling->locationHint = 'qui';
    $request->machineImage->sourceInstanceProperties->scheduling->maintenanceFreezeDurationHours = 272040;
    $request->machineImage->sourceInstanceProperties->scheduling->maintenanceInterval = SchedulingMaintenanceIntervalEnum::PERIODIC;
    $request->machineImage->sourceInstanceProperties->scheduling->maxRunDuration = new Duration();
    $request->machineImage->sourceInstanceProperties->scheduling->maxRunDuration->nanos = 264042;
    $request->machineImage->sourceInstanceProperties->scheduling->maxRunDuration->seconds = 'sapiente';
    $request->machineImage->sourceInstanceProperties->scheduling->minNodeCpus = 819845;
    $request->machineImage->sourceInstanceProperties->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->machineImage->sourceInstanceProperties->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::MIGRATE;
    $request->machineImage->sourceInstanceProperties->scheduling->preemptible = false;
    $request->machineImage->sourceInstanceProperties->scheduling->provisioningModel = SchedulingProvisioningModelEnum::STANDARD;
    $request->machineImage->sourceInstanceProperties->scheduling->terminationTime = 'aut';
    $request->machineImage->sourceInstanceProperties->serviceAccounts = [
        new ServiceAccount(),
    ];
    $request->machineImage->sourceInstanceProperties->tags = new Tags();
    $request->machineImage->sourceInstanceProperties->tags->fingerprint = 'iste';
    $request->machineImage->sourceInstanceProperties->tags->items = [
        'dolorum',
        'maxime',
        'assumenda',
        'velit',
    ];
    $request->machineImage->status = MachineImageStatusEnum::INVALID;
    $request->machineImage->storageLocations = [
        'quibusdam',
        'doloremque',
        'assumenda',
        'nobis',
    ];
    $request->machineImage->totalStorageBytes = 'laboriosam';
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'temporibus';
    $request->fields = 'optio';
    $request->key = 'quam';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'quae';
    $request->quotaUser = 'vero';
    $request->requestId = 'amet';
    $request->sourceInstance = 'culpa';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'quasi';
    $request->userIp = 'veniam';

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
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maxime';
    $request->fields = 'provident';
    $request->filter = 'aperiam';
    $request->key = 'repellendus';
    $request->maxResults = 66408;
    $request->oauthToken = 'cum';
    $request->orderBy = 'magnam';
    $request->pageToken = 'natus';
    $request->prettyPrint = false;
    $request->project = 'aperiam';
    $request->quotaUser = 'dicta';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'dolores';
    $request->userIp = 'harum';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->globalSetPolicyRequest = new GlobalSetPolicyRequest();
    $request->globalSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->etag = 'provident';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'id';
    $request->globalSetPolicyRequest->policy->rules = [
        new Rule(),
    ];
    $request->globalSetPolicyRequest->policy->version = 173265;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::JSON;
    $request->callback = 'occaecati';
    $request->fields = 'pariatur';
    $request->key = 'similique';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->project = 'facilis';
    $request->quotaUser = 'in';
    $request->resource = 'nobis';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'natus';
    $request->userIp = 'eaque';

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
        'atque',
        'atque',
        'illo',
    ];
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'incidunt';
    $request->fields = 'maiores';
    $request->key = 'ea';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->project = 'sequi';
    $request->quotaUser = 'nisi';
    $request->resource = 'autem';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'mollitia';
    $request->userIp = 'quas';

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
