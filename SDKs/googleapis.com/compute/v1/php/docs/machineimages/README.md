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
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laboriosam';
    $request->fields = 'nulla';
    $request->key = 'dolore';
    $request->machineImage = 'itaque';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->project = 'nam';
    $request->quotaUser = 'dignissimos';
    $request->requestId = 'consequuntur';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'alias';
    $request->userIp = 'doloribus';

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
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'exercitationem';
    $request->fields = 'commodi';
    $request->key = 'laudantium';
    $request->machineImage = 'est';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->project = 'incidunt';
    $request->quotaUser = 'dolores';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'earum';
    $request->userIp = 'consequatur';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quibusdam';
    $request->fields = 'autem';
    $request->key = 'voluptates';
    $request->oauthToken = 'tempore';
    $request->optionsRequestedPolicyVersion = 587157;
    $request->prettyPrint = false;
    $request->project = 'modi';
    $request->quotaUser = 'ratione';
    $request->resource = 'aliquam';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'aliquam';
    $request->userIp = 'corporis';

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
use \OpenAPI\OpenAPI\Models\Shared\InstancePropertiesPrivateIpv6GoogleAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinity;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinityConsumeReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Scheduling;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingInstanceTerminationActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingNodeAffinity;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingNodeAffinityOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingOnHostMaintenanceEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingProvisioningModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccount;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceConfig;
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
    $request->machineImage->creationTimestamp = 'ipsa';
    $request->machineImage->description = 'amet';
    $request->machineImage->guestFlush = false;
    $request->machineImage->id = 'aut';
    $request->machineImage->instanceProperties = new InstanceProperties();
    $request->machineImage->instanceProperties->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->machineImage->instanceProperties->advancedMachineFeatures->enableNestedVirtualization = false;
    $request->machineImage->instanceProperties->advancedMachineFeatures->enableUefiNetworking = false;
    $request->machineImage->instanceProperties->advancedMachineFeatures->threadsPerCore = 562402;
    $request->machineImage->instanceProperties->advancedMachineFeatures->visibleCoreCount = 310542;
    $request->machineImage->instanceProperties->canIpForward = false;
    $request->machineImage->instanceProperties->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->machineImage->instanceProperties->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->machineImage->instanceProperties->description = 'repellat';
    $request->machineImage->instanceProperties->disks = [
        new AttachedDisk(),
        new AttachedDisk(),
        new AttachedDisk(),
    ];
    $request->machineImage->instanceProperties->guestAccelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->machineImage->instanceProperties->keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum::NONE;
    $request->machineImage->instanceProperties->labels = [
        'cumque' => 'cumque',
        'vero' => 'a',
    ];
    $request->machineImage->instanceProperties->machineType = 'tenetur';
    $request->machineImage->instanceProperties->metadata = new Metadata();
    $request->machineImage->instanceProperties->metadata->fingerprint = 'ipsam';
    $request->machineImage->instanceProperties->metadata->items = [
        new MetadataItems(),
        new MetadataItems(),
        new MetadataItems(),
        new MetadataItems(),
    ];
    $request->machineImage->instanceProperties->metadata->kind = 'facilis';
    $request->machineImage->instanceProperties->minCpuPlatform = 'doloremque';
    $request->machineImage->instanceProperties->networkInterfaces = [
        new NetworkInterface(),
    ];
    $request->machineImage->instanceProperties->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->machineImage->instanceProperties->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::TIER1;
    $request->machineImage->instanceProperties->privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum::INHERIT_FROM_SUBNETWORK;
    $request->machineImage->instanceProperties->reservationAffinity = new ReservationAffinity();
    $request->machineImage->instanceProperties->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::NO_RESERVATION;
    $request->machineImage->instanceProperties->reservationAffinity->key = 'quasi';
    $request->machineImage->instanceProperties->reservationAffinity->values = [
        'ipsam',
        'aspernatur',
        'atque',
        'animi',
    ];
    $request->machineImage->instanceProperties->resourceManagerTags = [
        'ad' => 'mollitia',
        'minus' => 'quos',
    ];
    $request->machineImage->instanceProperties->resourcePolicies = [
        'distinctio',
    ];
    $request->machineImage->instanceProperties->scheduling = new Scheduling();
    $request->machineImage->instanceProperties->scheduling->automaticRestart = false;
    $request->machineImage->instanceProperties->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::INSTANCE_TERMINATION_ACTION_UNSPECIFIED;
    $request->machineImage->instanceProperties->scheduling->locationHint = 'ullam';
    $request->machineImage->instanceProperties->scheduling->minNodeCpus = 982059;
    $request->machineImage->instanceProperties->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->machineImage->instanceProperties->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::TERMINATE;
    $request->machineImage->instanceProperties->scheduling->preemptible = false;
    $request->machineImage->instanceProperties->scheduling->provisioningModel = SchedulingProvisioningModelEnum::STANDARD;
    $request->machineImage->instanceProperties->serviceAccounts = [
        new ServiceAccount(),
    ];
    $request->machineImage->instanceProperties->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->machineImage->instanceProperties->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->machineImage->instanceProperties->shieldedInstanceConfig->enableSecureBoot = false;
    $request->machineImage->instanceProperties->shieldedInstanceConfig->enableVtpm = false;
    $request->machineImage->instanceProperties->tags = new Tags();
    $request->machineImage->instanceProperties->tags->fingerprint = 'placeat';
    $request->machineImage->instanceProperties->tags->items = [
        'expedita',
        'laborum',
        'atque',
    ];
    $request->machineImage->kind = 'assumenda';
    $request->machineImage->machineImageEncryptionKey = new CustomerEncryptionKey();
    $request->machineImage->machineImageEncryptionKey->kmsKeyName = 'laborum';
    $request->machineImage->machineImageEncryptionKey->kmsKeyServiceAccount = 'magnam';
    $request->machineImage->machineImageEncryptionKey->rawKey = 'veritatis';
    $request->machineImage->machineImageEncryptionKey->rsaEncryptedKey = 'fugit';
    $request->machineImage->machineImageEncryptionKey->sha256 = 'nihil';
    $request->machineImage->name = 'Drew Hickle';
    $request->machineImage->satisfiesPzs = false;
    $request->machineImage->savedDisks = [
        new SavedDisk(),
        new SavedDisk(),
        new SavedDisk(),
        new SavedDisk(),
    ];
    $request->machineImage->selfLink = 'sapiente';
    $request->machineImage->sourceDiskEncryptionKeys = [
        new SourceDiskEncryptionKey(),
        new SourceDiskEncryptionKey(),
    ];
    $request->machineImage->sourceInstance = 'esse';
    $request->machineImage->sourceInstanceProperties = new SourceInstanceProperties();
    $request->machineImage->sourceInstanceProperties->canIpForward = false;
    $request->machineImage->sourceInstanceProperties->deletionProtection = false;
    $request->machineImage->sourceInstanceProperties->description = 'quasi';
    $request->machineImage->sourceInstanceProperties->disks = [
        new SavedAttachedDisk(),
    ];
    $request->machineImage->sourceInstanceProperties->guestAccelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->machineImage->sourceInstanceProperties->keyRevocationActionType = SourceInstancePropertiesKeyRevocationActionTypeEnum::NONE;
    $request->machineImage->sourceInstanceProperties->labels = [
        'distinctio' => 'porro',
    ];
    $request->machineImage->sourceInstanceProperties->machineType = 'nihil';
    $request->machineImage->sourceInstanceProperties->metadata = new Metadata();
    $request->machineImage->sourceInstanceProperties->metadata->fingerprint = 'numquam';
    $request->machineImage->sourceInstanceProperties->metadata->items = [
        new MetadataItems(),
        new MetadataItems(),
        new MetadataItems(),
    ];
    $request->machineImage->sourceInstanceProperties->metadata->kind = 'atque';
    $request->machineImage->sourceInstanceProperties->minCpuPlatform = 'aliquid';
    $request->machineImage->sourceInstanceProperties->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->machineImage->sourceInstanceProperties->scheduling = new Scheduling();
    $request->machineImage->sourceInstanceProperties->scheduling->automaticRestart = false;
    $request->machineImage->sourceInstanceProperties->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::STOP;
    $request->machineImage->sourceInstanceProperties->scheduling->locationHint = 'quisquam';
    $request->machineImage->sourceInstanceProperties->scheduling->minNodeCpus = 770597;
    $request->machineImage->sourceInstanceProperties->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->machineImage->sourceInstanceProperties->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::MIGRATE;
    $request->machineImage->sourceInstanceProperties->scheduling->preemptible = false;
    $request->machineImage->sourceInstanceProperties->scheduling->provisioningModel = SchedulingProvisioningModelEnum::STANDARD;
    $request->machineImage->sourceInstanceProperties->serviceAccounts = [
        new ServiceAccount(),
        new ServiceAccount(),
    ];
    $request->machineImage->sourceInstanceProperties->tags = new Tags();
    $request->machineImage->sourceInstanceProperties->tags->fingerprint = 'ducimus';
    $request->machineImage->sourceInstanceProperties->tags->items = [
        'incidunt',
        'deleniti',
        'aliquam',
    ];
    $request->machineImage->status = MachineImageStatusEnum::INVALID;
    $request->machineImage->storageLocations = [
        'quibusdam',
        'iure',
        'mollitia',
    ];
    $request->machineImage->totalStorageBytes = 'autem';
    $request->accessToken = 'hic';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->fields = 'aliquam';
    $request->key = 'architecto';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'maxime';
    $request->requestId = 'ratione';
    $request->sourceInstance = 'soluta';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'sit';
    $request->userIp = 'laudantium';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nesciunt';
    $request->fields = 'molestiae';
    $request->filter = 'adipisci';
    $request->key = 'eveniet';
    $request->maxResults = 56956;
    $request->oauthToken = 'laboriosam';
    $request->orderBy = 'sit';
    $request->pageToken = 'labore';
    $request->prettyPrint = false;
    $request->project = 'ullam';
    $request->quotaUser = 'excepturi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'voluptates';
    $request->userIp = 'rerum';

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
    $request->globalSetPolicyRequest->etag = 'fugiat';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'tenetur';
    $request->globalSetPolicyRequest->policy->rules = [
        new Rule(),
    ];
    $request->globalSetPolicyRequest->policy->version = 340397;
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quidem';
    $request->fields = 'quod';
    $request->key = 'a';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->project = 'ipsam';
    $request->quotaUser = 'eos';
    $request->resource = 'exercitationem';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'laudantium';
    $request->userIp = 'quibusdam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'excepturi',
        'corporis',
        'nam',
    ];
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'porro';
    $request->fields = 'nulla';
    $request->key = 'consequatur';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->project = 'in';
    $request->quotaUser = 'enim';
    $request->resource = 'vel';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'consectetur';
    $request->userIp = 'quis';

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
