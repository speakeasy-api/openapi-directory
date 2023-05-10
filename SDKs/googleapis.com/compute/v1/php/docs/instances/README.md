# instances

### Available Operations

* [computeInstancesAddAccessConfig](#computeinstancesaddaccessconfig) - Adds an access config to an instance's network interface.
* [computeInstancesAddResourcePolicies](#computeinstancesaddresourcepolicies) - Adds existing resource policies to an instance. You can only add one policy right now which will be applied to this instance for scheduling live migrations.
* [computeInstancesAggregatedList](#computeinstancesaggregatedlist) - Retrieves an aggregated list of all of the instances in your project across all regions and zones. The performance of this method degrades when a filter is specified on a project that has a very large number of instances.
* [computeInstancesAttachDisk](#computeinstancesattachdisk) - Attaches an existing Disk resource to an instance. You must first create the disk before you can attach it. It is not possible to create and attach a disk at the same time. For more information, read Adding a persistent disk to your instance.
* [computeInstancesBulkInsert](#computeinstancesbulkinsert) - Creates multiple instances. Count specifies the number of instances to create. For more information, see About bulk creation of VMs.
* [computeInstancesDelete](#computeinstancesdelete) - Deletes the specified Instance resource. For more information, see Deleting an instance.
* [computeInstancesDeleteAccessConfig](#computeinstancesdeleteaccessconfig) - Deletes an access config from an instance's network interface.
* [computeInstancesDetachDisk](#computeinstancesdetachdisk) - Detaches a disk from an instance.
* [computeInstancesGet](#computeinstancesget) - Returns the specified Instance resource.
* [computeInstancesGetEffectiveFirewalls](#computeinstancesgeteffectivefirewalls) - Returns effective firewalls applied to an interface of the instance.
* [computeInstancesGetGuestAttributes](#computeinstancesgetguestattributes) - Returns the specified guest attributes entry.
* [computeInstancesGetIamPolicy](#computeinstancesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeInstancesGetScreenshot](#computeinstancesgetscreenshot) - Returns the screenshot from the specified instance.
* [computeInstancesGetSerialPortOutput](#computeinstancesgetserialportoutput) - Returns the last 1 MB of serial port output from the specified instance.
* [computeInstancesGetShieldedInstanceIdentity](#computeinstancesgetshieldedinstanceidentity) - Returns the Shielded Instance Identity of an instance
* [computeInstancesInsert](#computeinstancesinsert) - Creates an instance resource in the specified project using the data included in the request.
* [computeInstancesList](#computeinstanceslist) - Retrieves the list of instances contained within the specified zone.
* [computeInstancesListReferrers](#computeinstanceslistreferrers) - Retrieves a list of resources that refer to the VM instance specified in the request. For example, if the VM instance is part of a managed or unmanaged instance group, the referrers list includes the instance group. For more information, read Viewing referrers to VM instances.
* [computeInstancesRemoveResourcePolicies](#computeinstancesremoveresourcepolicies) - Removes resource policies from an instance.
* [computeInstancesReset](#computeinstancesreset) - Performs a reset on the instance. This is a hard reset. The VM does not do a graceful shutdown. For more information, see Resetting an instance.
* [computeInstancesResume](#computeinstancesresume) - Resumes an instance that was suspended using the instances().suspend method.
* [computeInstancesSendDiagnosticInterrupt](#computeinstancessenddiagnosticinterrupt) - Sends diagnostic interrupt to the instance.
* [computeInstancesSetDeletionProtection](#computeinstancessetdeletionprotection) - Sets deletion protection on the instance.
* [computeInstancesSetDiskAutoDelete](#computeinstancessetdiskautodelete) - Sets the auto-delete flag for a disk attached to an instance.
* [computeInstancesSetIamPolicy](#computeinstancessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeInstancesSetLabels](#computeinstancessetlabels) - Sets labels on an instance. To learn more about labels, read the Labeling Resources documentation.
* [computeInstancesSetMachineResources](#computeinstancessetmachineresources) - Changes the number and/or type of accelerator for a stopped instance to the values specified in the request.
* [computeInstancesSetMachineType](#computeinstancessetmachinetype) - Changes the machine type for a stopped instance to the machine type specified in the request.
* [computeInstancesSetMetadata](#computeinstancessetmetadata) - Sets metadata for the specified instance to the data included in the request.
* [computeInstancesSetMinCpuPlatform](#computeinstancessetmincpuplatform) - Changes the minimum CPU platform that this instance should use. This method can only be called on a stopped instance. For more information, read Specifying a Minimum CPU Platform.
* [computeInstancesSetName](#computeinstancessetname) - Sets name of an instance.
* [computeInstancesSetScheduling](#computeinstancessetscheduling) - Sets an instance's scheduling options. You can only call this method on a stopped instance, that is, a VM instance that is in a `TERMINATED` state. See Instance Life Cycle for more information on the possible instance states. For more information about setting scheduling options for a VM, see Set VM host maintenance policy.
* [computeInstancesSetServiceAccount](#computeinstancessetserviceaccount) - Sets the service account on the instance. For more information, read Changing the service account and access scopes for an instance.
* [computeInstancesSetShieldedInstanceIntegrityPolicy](#computeinstancessetshieldedinstanceintegritypolicy) - Sets the Shielded Instance integrity policy for an instance. You can only use this method on a running instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInstancesSetTags](#computeinstancessettags) - Sets network tags for the specified instance to the data included in the request.
* [computeInstancesSimulateMaintenanceEvent](#computeinstancessimulatemaintenanceevent) - Simulates a host maintenance event on a VM. For more information, see Simulate a host maintenance event.
* [computeInstancesStart](#computeinstancesstart) - Starts an instance that was stopped using the instances().stop method. For more information, see Restart an instance.
* [computeInstancesStartWithEncryptionKey](#computeinstancesstartwithencryptionkey) - Starts an instance that was stopped using the instances().stop method. For more information, see Restart an instance.
* [computeInstancesStop](#computeinstancesstop) - Stops a running instance, shutting it down cleanly, and allows you to restart the instance at a later time. Stopped instances do not incur VM usage charges while they are stopped. However, resources that the VM is using, such as persistent disks and static IP addresses, will continue to be charged until they are deleted. For more information, see Stopping an instance.
* [computeInstancesSuspend](#computeinstancessuspend) - This method suspends a running instance, saving its state to persistent storage, and allows you to resume the instance at a later time. Suspended instances have no compute costs (cores or RAM), and incur only storage charges for the saved VM memory and localSSD data. Any charged resources the virtual machine was using, such as persistent disks and static IP addresses, will continue to be charged while the instance is suspended. For more information, see Suspending and resuming an instance.
* [computeInstancesTestIamPermissions](#computeinstancestestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeInstancesUpdate](#computeinstancesupdate) - Updates an instance only if the necessary resources are available. This method can update only a specific set of instance properties. See Updating a running instance for a list of updatable instance properties.
* [computeInstancesUpdateAccessConfig](#computeinstancesupdateaccessconfig) - Updates the specified access config from an instance's network interface with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInstancesUpdateDisplayDevice](#computeinstancesupdatedisplaydevice) - Updates the Display config for a VM instance. You can only use this method on a stopped VM instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInstancesUpdateNetworkInterface](#computeinstancesupdatenetworkinterface) - Updates an instance's network interface. This method can only update an interface's alias IP range and attached network. See Modifying alias IP ranges for an existing instance for instructions on changing alias IP ranges. See Migrating a VM between networks for instructions on migrating an interface. This method follows PATCH semantics.
* [computeInstancesUpdateShieldedInstanceConfig](#computeinstancesupdateshieldedinstanceconfig) - Updates the Shielded Instance config for an instance. You can only use this method on a stopped instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

## computeInstancesAddAccessConfig

Adds an access config to an instance's network interface.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesAddAccessConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccessConfig;
use \OpenAPI\OpenAPI\Models\Shared\AccessConfigNetworkTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccessConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesAddAccessConfigSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesAddAccessConfigSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesAddAccessConfigSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesAddAccessConfigRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessConfig = new AccessConfig();
    $request->accessConfig->externalIpv6 = 'mollitia';
    $request->accessConfig->externalIpv6PrefixLength = 530232;
    $request->accessConfig->kind = 'blanditiis';
    $request->accessConfig->name = 'Bernard Gottlieb';
    $request->accessConfig->natIP = 'enim';
    $request->accessConfig->networkTier = AccessConfigNetworkTierEnum::PREMIUM;
    $request->accessConfig->publicPtrDomainName = 'ratione';
    $request->accessConfig->setPublicPtr = false;
    $request->accessConfig->type = AccessConfigTypeEnum::ONE_TO_ONE_NAT;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nulla';
    $request->fields = 'tempora';
    $request->instance = 'quam';
    $request->key = 'consectetur';
    $request->networkInterface = 'nemo';
    $request->oauthToken = 'nesciunt';
    $request->prettyPrint = false;
    $request->project = 'earum';
    $request->quotaUser = 'eum';
    $request->requestId = 'dolor';
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'quos';
    $request->userIp = 'sed';
    $request->zone = 'eaque';

    $requestSecurity = new ComputeInstancesAddAccessConfigSecurity();
    $requestSecurity->option1 = new ComputeInstancesAddAccessConfigSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesAddAccessConfig($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesAddResourcePolicies

Adds existing resource policies to an instance. You can only add one policy right now which will be applied to this instance for scheduling live migrations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesAddResourcePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancesAddResourcePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesAddResourcePoliciesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesAddResourcePoliciesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesAddResourcePoliciesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesAddResourcePoliciesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instancesAddResourcePoliciesRequest = new InstancesAddResourcePoliciesRequest();
    $request->instancesAddResourcePoliciesRequest->resourcePolicies = [
        'nihil',
    ];
    $request->accessToken = 'unde';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'id';
    $request->fields = 'ex';
    $request->instance = 'occaecati';
    $request->key = 'optio';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->project = 'ad';
    $request->quotaUser = 'asperiores';
    $request->requestId = 'nam';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'sapiente';
    $request->userIp = 'quam';
    $request->zone = 'occaecati';

    $requestSecurity = new ComputeInstancesAddResourcePoliciesSecurity();
    $requestSecurity->option1 = new ComputeInstancesAddResourcePoliciesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesAddResourcePolicies($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesAggregatedList

Retrieves an aggregated list of all of the instances in your project across all regions and zones. The performance of this method degrades when a filter is specified on a project that has a very large number of instances.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::JSON;
    $request->callback = 'rem';
    $request->fields = 'fuga';
    $request->filter = 'odio';
    $request->includeAllScopes = false;
    $request->key = 'totam';
    $request->maxResults = 168546;
    $request->oauthToken = 'eos';
    $request->orderBy = 'harum';
    $request->pageToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->project = 'omnis';
    $request->quotaUser = 'quis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'natus';
    $request->userIp = 'aliquam';

    $requestSecurity = new ComputeInstancesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeInstancesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesAggregatedList($request, $requestSecurity);

    if ($response->instanceAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesAttachDisk

Attaches an existing Disk resource to an instance. You must first create the disk before you can attach it. It is not possible to create and attach a disk at the same time. For more information, read Adding a persistent disk to your instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesAttachDiskRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesAttachDiskSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesAttachDiskSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesAttachDiskSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesAttachDiskRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->attachedDisk = new AttachedDisk();
    $request->attachedDisk->architecture = AttachedDiskArchitectureEnum::ARM64;
    $request->attachedDisk->autoDelete = false;
    $request->attachedDisk->boot = false;
    $request->attachedDisk->deviceName = 'praesentium';
    $request->attachedDisk->diskEncryptionKey = new CustomerEncryptionKey();
    $request->attachedDisk->diskEncryptionKey->kmsKeyName = 'eum';
    $request->attachedDisk->diskEncryptionKey->kmsKeyServiceAccount = 'vitae';
    $request->attachedDisk->diskEncryptionKey->rawKey = 'animi';
    $request->attachedDisk->diskEncryptionKey->rsaEncryptedKey = 'possimus';
    $request->attachedDisk->diskEncryptionKey->sha256 = 'libero';
    $request->attachedDisk->diskSizeGb = 'ullam';
    $request->attachedDisk->forceAttach = false;
    $request->attachedDisk->guestOsFeatures = [
        new GuestOsFeature(),
        new GuestOsFeature(),
    ];
    $request->attachedDisk->index = 983067;
    $request->attachedDisk->initializeParams = new AttachedDiskInitializeParams();
    $request->attachedDisk->initializeParams->architecture = AttachedDiskInitializeParamsArchitectureEnum::ARM64;
    $request->attachedDisk->initializeParams->description = 'accusamus';
    $request->attachedDisk->initializeParams->diskName = 'ipsam';
    $request->attachedDisk->initializeParams->diskSizeGb = 'fugiat';
    $request->attachedDisk->initializeParams->diskType = 'odio';
    $request->attachedDisk->initializeParams->labels = [
        'inventore' => 'eligendi',
        'occaecati' => 'doloribus',
    ];
    $request->attachedDisk->initializeParams->licenses = [
        'rem',
        'a',
        'nihil',
        'veniam',
    ];
    $request->attachedDisk->initializeParams->onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum::RECREATE_DISK;
    $request->attachedDisk->initializeParams->provisionedIops = 'magni';
    $request->attachedDisk->initializeParams->provisionedThroughput = 'rerum';
    $request->attachedDisk->initializeParams->replicaZones = [
        'nulla',
        'quod',
        'non',
        'dolore',
    ];
    $request->attachedDisk->initializeParams->resourceManagerTags = [
        'alias' => 'blanditiis',
        'modi' => 'illo',
    ];
    $request->attachedDisk->initializeParams->resourcePolicies = [
        'et',
        'molestiae',
        'autem',
        'dolore',
    ];
    $request->attachedDisk->initializeParams->sourceImage = 'eius';
    $request->attachedDisk->initializeParams->sourceImageEncryptionKey = new CustomerEncryptionKey();
    $request->attachedDisk->initializeParams->sourceImageEncryptionKey->kmsKeyName = 'nostrum';
    $request->attachedDisk->initializeParams->sourceImageEncryptionKey->kmsKeyServiceAccount = 'ex';
    $request->attachedDisk->initializeParams->sourceImageEncryptionKey->rawKey = 'amet';
    $request->attachedDisk->initializeParams->sourceImageEncryptionKey->rsaEncryptedKey = 'voluptate';
    $request->attachedDisk->initializeParams->sourceImageEncryptionKey->sha256 = 'molestias';
    $request->attachedDisk->initializeParams->sourceSnapshot = 'voluptatibus';
    $request->attachedDisk->initializeParams->sourceSnapshotEncryptionKey = new CustomerEncryptionKey();
    $request->attachedDisk->initializeParams->sourceSnapshotEncryptionKey->kmsKeyName = 'ipsum';
    $request->attachedDisk->initializeParams->sourceSnapshotEncryptionKey->kmsKeyServiceAccount = 'hic';
    $request->attachedDisk->initializeParams->sourceSnapshotEncryptionKey->rawKey = 'quidem';
    $request->attachedDisk->initializeParams->sourceSnapshotEncryptionKey->rsaEncryptedKey = 'odit';
    $request->attachedDisk->initializeParams->sourceSnapshotEncryptionKey->sha256 = 'molestiae';
    $request->attachedDisk->interface = AttachedDiskInterfaceEnum::SCSI;
    $request->attachedDisk->kind = 'quia';
    $request->attachedDisk->licenses = [
        'doloribus',
    ];
    $request->attachedDisk->mode = AttachedDiskModeEnum::READ_WRITE;
    $request->attachedDisk->shieldedInstanceInitialState = new InitialStateConfig();
    $request->attachedDisk->shieldedInstanceInitialState->dbs = [
        new FileContentBuffer(),
        new FileContentBuffer(),
    ];
    $request->attachedDisk->shieldedInstanceInitialState->dbxs = [
        new FileContentBuffer(),
    ];
    $request->attachedDisk->shieldedInstanceInitialState->keks = [
        new FileContentBuffer(),
        new FileContentBuffer(),
    ];
    $request->attachedDisk->shieldedInstanceInitialState->pk = new FileContentBuffer();
    $request->attachedDisk->shieldedInstanceInitialState->pk->content = 'nemo';
    $request->attachedDisk->shieldedInstanceInitialState->pk->fileType = FileContentBufferFileTypeEnum::UNDEFINED;
    $request->attachedDisk->source = 'soluta';
    $request->attachedDisk->type = AttachedDiskTypeEnum::PERSISTENT;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maxime';
    $request->fields = 'vel';
    $request->forceAttach = false;
    $request->instance = 'distinctio';
    $request->key = 'cupiditate';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->project = 'quis';
    $request->quotaUser = 'deleniti';
    $request->requestId = 'iusto';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'saepe';
    $request->userIp = 'ad';
    $request->zone = 'magni';

    $requestSecurity = new ComputeInstancesAttachDiskSecurity();
    $requestSecurity->option1 = new ComputeInstancesAttachDiskSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesAttachDisk($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesBulkInsert

Creates multiple instances. Count specifies the number of instances to create. For more information, see About bulk creation of VMs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesBulkInsertRequest;
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
use \OpenAPI\OpenAPI\Models\Shared\LocationPolicy;
use \OpenAPI\OpenAPI\Models\Shared\LocationPolicyLocation;
use \OpenAPI\OpenAPI\Models\Shared\LocationPolicyLocationConstraints;
use \OpenAPI\OpenAPI\Models\Shared\LocationPolicyLocationPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocationPolicyTargetShapeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BulkInsertInstanceResourcePerInstanceProperties;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesBulkInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesBulkInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesBulkInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesBulkInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->bulkInsertInstanceResource = new BulkInsertInstanceResource();
    $request->bulkInsertInstanceResource->count = 'minus';
    $request->bulkInsertInstanceResource->instanceProperties = new InstanceProperties();
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->enableNestedVirtualization = false;
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->enableUefiNetworking = false;
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->threadsPerCore = 400510;
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->visibleCoreCount = 462136;
    $request->bulkInsertInstanceResource->instanceProperties->canIpForward = false;
    $request->bulkInsertInstanceResource->instanceProperties->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->bulkInsertInstanceResource->instanceProperties->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->bulkInsertInstanceResource->instanceProperties->description = 'ea';
    $request->bulkInsertInstanceResource->instanceProperties->disks = [
        new AttachedDisk(),
        new AttachedDisk(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->guestAccelerators = [
        new AcceleratorConfig(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum::STOP;
    $request->bulkInsertInstanceResource->instanceProperties->labels = [
        'velit' => 'quasi',
        'sed' => 'officiis',
        'veniam' => 'quae',
    ];
    $request->bulkInsertInstanceResource->instanceProperties->machineType = 'dolore';
    $request->bulkInsertInstanceResource->instanceProperties->metadata = new Metadata();
    $request->bulkInsertInstanceResource->instanceProperties->metadata->fingerprint = 'in';
    $request->bulkInsertInstanceResource->instanceProperties->metadata->items = [
        new MetadataItems(),
        new MetadataItems(),
        new MetadataItems(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->metadata->kind = 'ut';
    $request->bulkInsertInstanceResource->instanceProperties->minCpuPlatform = 'cumque';
    $request->bulkInsertInstanceResource->instanceProperties->networkInterfaces = [
        new NetworkInterface(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->bulkInsertInstanceResource->instanceProperties->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::DEFAULT;
    $request->bulkInsertInstanceResource->instanceProperties->privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum::INHERIT_FROM_SUBNETWORK;
    $request->bulkInsertInstanceResource->instanceProperties->reservationAffinity = new ReservationAffinity();
    $request->bulkInsertInstanceResource->instanceProperties->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::UNSPECIFIED;
    $request->bulkInsertInstanceResource->instanceProperties->reservationAffinity->key = 'distinctio';
    $request->bulkInsertInstanceResource->instanceProperties->reservationAffinity->values = [
        'fugit',
        'amet',
    ];
    $request->bulkInsertInstanceResource->instanceProperties->resourceManagerTags = [
        'facilis' => 'minus',
        'vero' => 'impedit',
        'omnis' => 'et',
    ];
    $request->bulkInsertInstanceResource->instanceProperties->resourcePolicies = [
        'fuga',
        'est',
        'distinctio',
        'fugiat',
    ];
    $request->bulkInsertInstanceResource->instanceProperties->scheduling = new Scheduling();
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->automaticRestart = false;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::STOP;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->locationHint = 'totam';
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->minNodeCpus = 508044;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::MIGRATE;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->preemptible = false;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->provisioningModel = SchedulingProvisioningModelEnum::SPOT;
    $request->bulkInsertInstanceResource->instanceProperties->serviceAccounts = [
        new ServiceAccount(),
        new ServiceAccount(),
        new ServiceAccount(),
        new ServiceAccount(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->bulkInsertInstanceResource->instanceProperties->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->bulkInsertInstanceResource->instanceProperties->shieldedInstanceConfig->enableSecureBoot = false;
    $request->bulkInsertInstanceResource->instanceProperties->shieldedInstanceConfig->enableVtpm = false;
    $request->bulkInsertInstanceResource->instanceProperties->tags = new Tags();
    $request->bulkInsertInstanceResource->instanceProperties->tags->fingerprint = 'laboriosam';
    $request->bulkInsertInstanceResource->instanceProperties->tags->items = [
        'labore',
        'quas',
        'sed',
        'veniam',
    ];
    $request->bulkInsertInstanceResource->locationPolicy = new LocationPolicy();
    $request->bulkInsertInstanceResource->locationPolicy->locations = [
        'quibusdam' => new LocationPolicyLocation(),
    ];
    $request->bulkInsertInstanceResource->locationPolicy->targetShape = LocationPolicyTargetShapeEnum::ANY_SINGLE_ZONE;
    $request->bulkInsertInstanceResource->minCount = 'voluptate';
    $request->bulkInsertInstanceResource->namePattern = 'reprehenderit';
    $request->bulkInsertInstanceResource->perInstanceProperties = [
        'eveniet' => new BulkInsertInstanceResourcePerInstanceProperties(),
    ];
    $request->bulkInsertInstanceResource->sourceInstanceTemplate = 'voluptate';
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'in';
    $request->key = 'eius';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->project = 'consequatur';
    $request->quotaUser = 'iste';
    $request->requestId = 'accusamus';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'voluptatum';
    $request->userIp = 'facere';
    $request->zone = 'consequuntur';

    $requestSecurity = new ComputeInstancesBulkInsertSecurity();
    $requestSecurity->option1 = new ComputeInstancesBulkInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesBulkInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesDelete

Deletes the specified Instance resource. For more information, see Deleting an instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'illo';
    $request->fields = 'facere';
    $request->instance = 'fugiat';
    $request->key = 'ducimus';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->project = 'provident';
    $request->quotaUser = 'voluptate';
    $request->requestId = 'tempore';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'illum';
    $request->userIp = 'mollitia';
    $request->zone = 'ipsa';

    $requestSecurity = new ComputeInstancesDeleteSecurity();
    $requestSecurity->option1 = new ComputeInstancesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesDeleteAccessConfig

Deletes an access config from an instance's network interface.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesDeleteAccessConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesDeleteAccessConfigSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesDeleteAccessConfigSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesDeleteAccessConfigSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesDeleteAccessConfigRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessConfig = 'quo';
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'id';
    $request->instance = 'eum';
    $request->key = 'cumque';
    $request->networkInterface = 'odio';
    $request->oauthToken = 'atque';
    $request->prettyPrint = false;
    $request->project = 'similique';
    $request->quotaUser = 'quia';
    $request->requestId = 'architecto';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'accusamus';
    $request->userIp = 'illo';
    $request->zone = 'excepturi';

    $requestSecurity = new ComputeInstancesDeleteAccessConfigSecurity();
    $requestSecurity->option1 = new ComputeInstancesDeleteAccessConfigSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesDeleteAccessConfig($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesDetachDisk

Detaches a disk from an instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesDetachDiskRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesDetachDiskSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesDetachDiskSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesDetachDiskSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesDetachDiskRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'repudiandae';
    $request->deviceName = 'minus';
    $request->fields = 'officia';
    $request->instance = 'laboriosam';
    $request->key = 'illo';
    $request->oauthToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->project = 'veritatis';
    $request->quotaUser = 'aliquam';
    $request->requestId = 'excepturi';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'dicta';
    $request->userIp = 'magnam';
    $request->zone = 'doloremque';

    $requestSecurity = new ComputeInstancesDetachDiskSecurity();
    $requestSecurity->option1 = new ComputeInstancesDetachDiskSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesDetachDisk($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesGet

Returns the specified Instance resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'delectus';
    $request->instance = 'quos';
    $request->key = 'id';
    $request->oauthToken = 'officiis';
    $request->prettyPrint = false;
    $request->project = 'ab';
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'itaque';
    $request->userIp = 'repellat';
    $request->zone = 'voluptatem';

    $requestSecurity = new ComputeInstancesGetSecurity();
    $requestSecurity->option1 = new ComputeInstancesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesGet($request, $requestSecurity);

    if ($response->instance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesGetEffectiveFirewalls

Returns effective firewalls applied to an interface of the instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetEffectiveFirewallsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetEffectiveFirewallsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetEffectiveFirewallsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetEffectiveFirewallsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetEffectiveFirewallsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesGetEffectiveFirewallsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'a';
    $request->fields = 'neque';
    $request->instance = 'nihil';
    $request->key = 'recusandae';
    $request->networkInterface = 'numquam';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->project = 'mollitia';
    $request->quotaUser = 'blanditiis';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'quas';
    $request->userIp = 'quis';
    $request->zone = 'enim';

    $requestSecurity = new ComputeInstancesGetEffectiveFirewallsSecurity();
    $requestSecurity->option1 = new ComputeInstancesGetEffectiveFirewallsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesGetEffectiveFirewalls($request, $requestSecurity);

    if ($response->instancesGetEffectiveFirewallsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesGetGuestAttributes

Returns the specified guest attributes entry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetGuestAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetGuestAttributesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetGuestAttributesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetGuestAttributesSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetGuestAttributesSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesGetGuestAttributesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'autem';
    $request->fields = 'voluptate';
    $request->instance = 'nesciunt';
    $request->key = 'magni';
    $request->oauthToken = 'animi';
    $request->prettyPrint = false;
    $request->project = 'dolorum';
    $request->queryPath = 'voluptas';
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'tempore';
    $request->userIp = 'commodi';
    $request->variableKey = 'autem';
    $request->zone = 'praesentium';

    $requestSecurity = new ComputeInstancesGetGuestAttributesSecurity();
    $requestSecurity->option1 = new ComputeInstancesGetGuestAttributesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesGetGuestAttributes($request, $requestSecurity);

    if ($response->guestAttributes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'eaque';
    $request->key = 'delectus';
    $request->oauthToken = 'blanditiis';
    $request->optionsRequestedPolicyVersion = 793029;
    $request->prettyPrint = false;
    $request->project = 'tenetur';
    $request->quotaUser = 'assumenda';
    $request->resource = 'exercitationem';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'tempore';
    $request->userIp = 'laboriosam';
    $request->zone = 'earum';

    $requestSecurity = new ComputeInstancesGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeInstancesGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesGetScreenshot

Returns the screenshot from the specified instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetScreenshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetScreenshotSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetScreenshotSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetScreenshotSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetScreenshotSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesGetScreenshotRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'omnis';
    $request->fields = 'laborum';
    $request->instance = 'molestias';
    $request->key = 'a';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->project = 'labore';
    $request->quotaUser = 'laudantium';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'aliquid';
    $request->userIp = 'repudiandae';
    $request->zone = 'aspernatur';

    $requestSecurity = new ComputeInstancesGetScreenshotSecurity();
    $requestSecurity->option1 = new ComputeInstancesGetScreenshotSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesGetScreenshot($request, $requestSecurity);

    if ($response->screenshot !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesGetSerialPortOutput

Returns the last 1 MB of serial port output from the specified instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetSerialPortOutputRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetSerialPortOutputSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetSerialPortOutputSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetSerialPortOutputSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetSerialPortOutputSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesGetSerialPortOutputRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'excepturi';
    $request->instance = 'repellendus';
    $request->key = 'soluta';
    $request->oauthToken = 'aut';
    $request->port = 353036;
    $request->prettyPrint = false;
    $request->project = 'amet';
    $request->quotaUser = 'iure';
    $request->start = 'quibusdam';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'voluptates';
    $request->userIp = 'nihil';
    $request->zone = 'ad';

    $requestSecurity = new ComputeInstancesGetSerialPortOutputSecurity();
    $requestSecurity->option1 = new ComputeInstancesGetSerialPortOutputSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesGetSerialPortOutput($request, $requestSecurity);

    if ($response->serialPortOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesGetShieldedInstanceIdentity

Returns the Shielded Instance Identity of an instance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetShieldedInstanceIdentityRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetShieldedInstanceIdentitySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetShieldedInstanceIdentitySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetShieldedInstanceIdentitySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetShieldedInstanceIdentitySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesGetShieldedInstanceIdentityRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sit';
    $request->fields = 'iure';
    $request->instance = 'earum';
    $request->key = 'quis';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->project = 'omnis';
    $request->quotaUser = 'sed';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'et';
    $request->userIp = 'illo';
    $request->zone = 'est';

    $requestSecurity = new ComputeInstancesGetShieldedInstanceIdentitySecurity();
    $requestSecurity->option1 = new ComputeInstancesGetShieldedInstanceIdentitySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesGetShieldedInstanceIdentity($request, $requestSecurity);

    if ($response->shieldedInstanceIdentity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesInsert

Creates an instance resource in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Instance;
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
use \OpenAPI\OpenAPI\Models\Shared\InstanceKeyRevocationActionTypeEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\InstanceParams;
use \OpenAPI\OpenAPI\Models\Shared\InstancePrivateIpv6GoogleAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinity;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinityConsumeReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\Scheduling;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingInstanceTerminationActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingNodeAffinity;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingNodeAffinityOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingOnHostMaintenanceEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingProvisioningModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccount;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceIntegrityPolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tags;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instance = new Instance();
    $request->instance->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->instance->advancedMachineFeatures->enableNestedVirtualization = false;
    $request->instance->advancedMachineFeatures->enableUefiNetworking = false;
    $request->instance->advancedMachineFeatures->threadsPerCore = 332237;
    $request->instance->advancedMachineFeatures->visibleCoreCount = 665082;
    $request->instance->canIpForward = false;
    $request->instance->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->instance->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->instance->cpuPlatform = 'rem';
    $request->instance->creationTimestamp = 'cum';
    $request->instance->deletionProtection = false;
    $request->instance->description = 'maiores';
    $request->instance->disks = [
        new AttachedDisk(),
        new AttachedDisk(),
        new AttachedDisk(),
    ];
    $request->instance->displayDevice = new DisplayDevice();
    $request->instance->displayDevice->enableDisplay = false;
    $request->instance->fingerprint = 'sunt';
    $request->instance->guestAccelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->instance->hostname = 'nimble-lard.biz';
    $request->instance->id = 'aspernatur';
    $request->instance->keyRevocationActionType = InstanceKeyRevocationActionTypeEnum::NONE;
    $request->instance->kind = 'fuga';
    $request->instance->labelFingerprint = 'at';
    $request->instance->labels = [
        'laborum' => 'provident',
        'hic' => 'corrupti',
        'soluta' => 'earum',
    ];
    $request->instance->lastStartTimestamp = 'praesentium';
    $request->instance->lastStopTimestamp = 'explicabo';
    $request->instance->lastSuspendedTimestamp = 'odit';
    $request->instance->machineType = 'illo';
    $request->instance->metadata = new Metadata();
    $request->instance->metadata->fingerprint = 'architecto';
    $request->instance->metadata->items = [
        new MetadataItems(),
    ];
    $request->instance->metadata->kind = 'ad';
    $request->instance->minCpuPlatform = 'velit';
    $request->instance->name = 'Sherri Schuster';
    $request->instance->networkInterfaces = [
        new NetworkInterface(),
    ];
    $request->instance->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->instance->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::TIER1;
    $request->instance->params = new InstanceParams();
    $request->instance->params->resourceManagerTags = [
        'repellat' => 'iusto',
        'culpa' => 'voluptate',
    ];
    $request->instance->privateIpv6GoogleAccess = InstancePrivateIpv6GoogleAccessEnum::ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE;
    $request->instance->reservationAffinity = new ReservationAffinity();
    $request->instance->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::UNSPECIFIED;
    $request->instance->reservationAffinity->key = 'assumenda';
    $request->instance->reservationAffinity->values = [
        'sed',
        'optio',
    ];
    $request->instance->resourcePolicies = [
        'magni',
        'modi',
        'voluptatum',
        'dolore',
    ];
    $request->instance->resourceStatus = new ResourceStatus();
    $request->instance->resourceStatus->physicalHost = 'possimus';
    $request->instance->satisfiesPzs = false;
    $request->instance->scheduling = new Scheduling();
    $request->instance->scheduling->automaticRestart = false;
    $request->instance->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::STOP;
    $request->instance->scheduling->locationHint = 'eos';
    $request->instance->scheduling->minNodeCpus = 121161;
    $request->instance->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->instance->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::MIGRATE;
    $request->instance->scheduling->preemptible = false;
    $request->instance->scheduling->provisioningModel = SchedulingProvisioningModelEnum::STANDARD;
    $request->instance->selfLink = 'reiciendis';
    $request->instance->serviceAccounts = [
        new ServiceAccount(),
    ];
    $request->instance->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->instance->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->instance->shieldedInstanceConfig->enableSecureBoot = false;
    $request->instance->shieldedInstanceConfig->enableVtpm = false;
    $request->instance->shieldedInstanceIntegrityPolicy = new ShieldedInstanceIntegrityPolicy();
    $request->instance->shieldedInstanceIntegrityPolicy->updateAutoLearnPolicy = false;
    $request->instance->sourceMachineImage = 'similique';
    $request->instance->sourceMachineImageEncryptionKey = new CustomerEncryptionKey();
    $request->instance->sourceMachineImageEncryptionKey->kmsKeyName = 'eligendi';
    $request->instance->sourceMachineImageEncryptionKey->kmsKeyServiceAccount = 'numquam';
    $request->instance->sourceMachineImageEncryptionKey->rawKey = 'inventore';
    $request->instance->sourceMachineImageEncryptionKey->rsaEncryptedKey = 'necessitatibus';
    $request->instance->sourceMachineImageEncryptionKey->sha256 = 'tenetur';
    $request->instance->startRestricted = false;
    $request->instance->status = InstanceStatusEnum::RUNNING;
    $request->instance->statusMessage = 'nihil';
    $request->instance->tags = new Tags();
    $request->instance->tags->fingerprint = 'quia';
    $request->instance->tags->items = [
        'maiores',
        'dicta',
    ];
    $request->instance->zone = 'dicta';
    $request->accessToken = 'eum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'id';
    $request->fields = 'nobis';
    $request->key = 'quasi';
    $request->oauthToken = 'itaque';
    $request->prettyPrint = false;
    $request->project = 'aliquam';
    $request->quotaUser = 'vitae';
    $request->requestId = 'temporibus';
    $request->sourceInstanceTemplate = 'voluptatum';
    $request->sourceMachineImage = 'deserunt';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'neque';
    $request->userIp = 'impedit';
    $request->zone = 'consequuntur';

    $requestSecurity = new ComputeInstancesInsertSecurity();
    $requestSecurity->option1 = new ComputeInstancesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesList

Retrieves the list of instances contained within the specified zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::JSON;
    $request->callback = 'labore';
    $request->fields = 'repellat';
    $request->filter = 'eos';
    $request->key = 'quibusdam';
    $request->maxResults = 999965;
    $request->oauthToken = 'mollitia';
    $request->orderBy = 'quaerat';
    $request->pageToken = 'officia';
    $request->prettyPrint = false;
    $request->project = 'sunt';
    $request->quotaUser = 'perspiciatis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'a';
    $request->userIp = 'iure';
    $request->zone = 'nulla';

    $requestSecurity = new ComputeInstancesListSecurity();
    $requestSecurity->option1 = new ComputeInstancesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesList($request, $requestSecurity);

    if ($response->instanceList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesListReferrers

Retrieves a list of resources that refer to the VM instance specified in the request. For example, if the VM instance is part of a managed or unmanaged instance group, the referrers list includes the instance group. For more information, read Viewing referrers to VM instances.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesListReferrersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesListReferrersSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesListReferrersSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesListReferrersSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesListReferrersSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesListReferrersRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aspernatur';
    $request->fields = 'et';
    $request->filter = 'ipsam';
    $request->instance = 'et';
    $request->key = 'delectus';
    $request->maxResults = 904288;
    $request->oauthToken = 'sunt';
    $request->orderBy = 'in';
    $request->pageToken = 'architecto';
    $request->prettyPrint = false;
    $request->project = 'sed';
    $request->quotaUser = 'voluptatem';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'error';
    $request->userIp = 'deleniti';
    $request->zone = 'enim';

    $requestSecurity = new ComputeInstancesListReferrersSecurity();
    $requestSecurity->option1 = new ComputeInstancesListReferrersSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesListReferrers($request, $requestSecurity);

    if ($response->instanceListReferrers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesRemoveResourcePolicies

Removes resource policies from an instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesRemoveResourcePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancesRemoveResourcePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesRemoveResourcePoliciesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesRemoveResourcePoliciesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesRemoveResourcePoliciesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesRemoveResourcePoliciesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instancesRemoveResourcePoliciesRequest = new InstancesRemoveResourcePoliciesRequest();
    $request->instancesRemoveResourcePoliciesRequest->resourcePolicies = [
        'unde',
        'reiciendis',
        'quis',
        'modi',
    ];
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'praesentium';
    $request->fields = 'nemo';
    $request->instance = 'dolore';
    $request->key = 'numquam';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->project = 'perspiciatis';
    $request->quotaUser = 'accusamus';
    $request->requestId = 'voluptates';
    $request->uploadType = 'quia';
    $request->uploadProtocol = 'aspernatur';
    $request->userIp = 'ut';
    $request->zone = 'non';

    $requestSecurity = new ComputeInstancesRemoveResourcePoliciesSecurity();
    $requestSecurity->option1 = new ComputeInstancesRemoveResourcePoliciesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesRemoveResourcePolicies($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesReset

Performs a reset on the instance. This is a hard reset. The VM does not do a graceful shutdown. For more information, see Resetting an instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesResetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesResetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesResetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesResetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesResetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquam';
    $request->fields = 'dolorem';
    $request->instance = 'expedita';
    $request->key = 'impedit';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->project = 'minima';
    $request->quotaUser = 'magnam';
    $request->requestId = 'vitae';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'atque';
    $request->userIp = 'quisquam';
    $request->zone = 'sunt';

    $requestSecurity = new ComputeInstancesResetSecurity();
    $requestSecurity->option1 = new ComputeInstancesResetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesReset($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesResume

Resumes an instance that was suspended using the instances().suspend method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesResumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesResumeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesResumeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesResumeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesResumeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusamus';
    $request->fields = 'totam';
    $request->instance = 'ipsam';
    $request->key = 'at';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->project = 'nihil';
    $request->quotaUser = 'laudantium';
    $request->requestId = 'dolorem';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'officiis';
    $request->userIp = 'mollitia';
    $request->zone = 'libero';

    $requestSecurity = new ComputeInstancesResumeSecurity();
    $requestSecurity->option1 = new ComputeInstancesResumeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesResume($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesSendDiagnosticInterrupt

Sends diagnostic interrupt to the instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSendDiagnosticInterruptRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSendDiagnosticInterruptSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSendDiagnosticInterruptSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSendDiagnosticInterruptSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesSendDiagnosticInterruptRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::JSON;
    $request->callback = 'odio';
    $request->fields = 'eligendi';
    $request->instance = 'nesciunt';
    $request->key = 'harum';
    $request->oauthToken = 'aperiam';
    $request->prettyPrint = false;
    $request->project = 'pariatur';
    $request->quotaUser = 'ad';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'culpa';
    $request->userIp = 'aliquam';
    $request->zone = 'ut';

    $requestSecurity = new ComputeInstancesSendDiagnosticInterruptSecurity();
    $requestSecurity->option1 = new ComputeInstancesSendDiagnosticInterruptSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesSendDiagnosticInterrupt($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesSetDeletionProtection

Sets deletion protection on the instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetDeletionProtectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetDeletionProtectionSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetDeletionProtectionSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetDeletionProtectionSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesSetDeletionProtectionRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'architecto';
    $request->deletionProtection = false;
    $request->fields = 'tempore';
    $request->key = 'deserunt';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->project = 'corrupti';
    $request->quotaUser = 'voluptate';
    $request->requestId = 'alias';
    $request->resource = 'iure';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'incidunt';
    $request->userIp = 'ea';
    $request->zone = 'alias';

    $requestSecurity = new ComputeInstancesSetDeletionProtectionSecurity();
    $requestSecurity->option1 = new ComputeInstancesSetDeletionProtectionSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesSetDeletionProtection($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesSetDiskAutoDelete

Sets the auto-delete flag for a disk attached to an instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetDiskAutoDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetDiskAutoDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetDiskAutoDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetDiskAutoDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesSetDiskAutoDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::PROTO;
    $request->autoDelete = false;
    $request->callback = 'maiores';
    $request->deviceName = 'nam';
    $request->fields = 'pariatur';
    $request->instance = 'quod';
    $request->key = 'modi';
    $request->oauthToken = 'vitae';
    $request->prettyPrint = false;
    $request->project = 'delectus';
    $request->quotaUser = 'delectus';
    $request->requestId = 'nemo';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'magnam';
    $request->userIp = 'officiis';
    $request->zone = 'sed';

    $requestSecurity = new ComputeInstancesSetDiskAutoDeleteSecurity();
    $requestSecurity->option1 = new ComputeInstancesSetDiskAutoDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesSetDiskAutoDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ZoneSetPolicyRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->zoneSetPolicyRequest = new ZoneSetPolicyRequest();
    $request->zoneSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->zoneSetPolicyRequest->etag = 'labore';
    $request->zoneSetPolicyRequest->policy = new Policy();
    $request->zoneSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->zoneSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->zoneSetPolicyRequest->policy->etag = 'minima';
    $request->zoneSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->zoneSetPolicyRequest->policy->version = 703431;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugiat';
    $request->fields = 'beatae';
    $request->key = 'dignissimos';
    $request->oauthToken = 'nisi';
    $request->prettyPrint = false;
    $request->project = 'consectetur';
    $request->quotaUser = 'quos';
    $request->resource = 'delectus';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'repudiandae';
    $request->userIp = 'facere';
    $request->zone = 'distinctio';

    $requestSecurity = new ComputeInstancesSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeInstancesSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesSetLabels

Sets labels on an instance. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancesSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetLabelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetLabelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetLabelsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesSetLabelsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instancesSetLabelsRequest = new InstancesSetLabelsRequest();
    $request->instancesSetLabelsRequest->labelFingerprint = 'atque';
    $request->instancesSetLabelsRequest->labels = [
        'nemo' => 'provident',
    ];
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'impedit';
    $request->fields = 'minima';
    $request->instance = 'cumque';
    $request->key = 'rerum';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->project = 'vel';
    $request->quotaUser = 'doloremque';
    $request->requestId = 'delectus';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'impedit';
    $request->userIp = 'illum';
    $request->zone = 'ullam';

    $requestSecurity = new ComputeInstancesSetLabelsSecurity();
    $requestSecurity->option1 = new ComputeInstancesSetLabelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesSetLabels($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesSetMachineResources

Changes the number and/or type of accelerator for a stopped instance to the values specified in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetMachineResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancesSetMachineResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetMachineResourcesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetMachineResourcesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetMachineResourcesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesSetMachineResourcesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instancesSetMachineResourcesRequest = new InstancesSetMachineResourcesRequest();
    $request->instancesSetMachineResourcesRequest->guestAccelerators = [
        new AcceleratorConfig(),
    ];
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'nesciunt';
    $request->instance = 'quas';
    $request->key = 'sunt';
    $request->oauthToken = 'aperiam';
    $request->prettyPrint = false;
    $request->project = 'itaque';
    $request->quotaUser = 'quaerat';
    $request->requestId = 'repellat';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'tempora';
    $request->userIp = 'quaerat';
    $request->zone = 'magnam';

    $requestSecurity = new ComputeInstancesSetMachineResourcesSecurity();
    $requestSecurity->option1 = new ComputeInstancesSetMachineResourcesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesSetMachineResources($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesSetMachineType

Changes the machine type for a stopped instance to the machine type specified in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetMachineTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancesSetMachineTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetMachineTypeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetMachineTypeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetMachineTypeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesSetMachineTypeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instancesSetMachineTypeRequest = new InstancesSetMachineTypeRequest();
    $request->instancesSetMachineTypeRequest->machineType = 'magni';
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cumque';
    $request->fields = 'pariatur';
    $request->instance = 'non';
    $request->key = 'rerum';
    $request->oauthToken = 'illo';
    $request->prettyPrint = false;
    $request->project = 'illum';
    $request->quotaUser = 'nulla';
    $request->requestId = 'amet';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'libero';
    $request->userIp = 'impedit';
    $request->zone = 'repudiandae';

    $requestSecurity = new ComputeInstancesSetMachineTypeSecurity();
    $requestSecurity->option1 = new ComputeInstancesSetMachineTypeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesSetMachineType($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesSetMetadata

Sets metadata for the specified instance to the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Metadata;
use \OpenAPI\OpenAPI\Models\Shared\MetadataItems;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetMetadataSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetMetadataSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetMetadataSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesSetMetadataRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->metadata = new Metadata();
    $request->metadata->fingerprint = 'ut';
    $request->metadata->items = [
        new MetadataItems(),
        new MetadataItems(),
    ];
    $request->metadata->kind = 'harum';
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'blanditiis';
    $request->fields = 'labore';
    $request->instance = 'repudiandae';
    $request->key = 'reiciendis';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->project = 'exercitationem';
    $request->quotaUser = 'voluptatem';
    $request->requestId = 'beatae';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'laboriosam';
    $request->userIp = 'temporibus';
    $request->zone = 'in';

    $requestSecurity = new ComputeInstancesSetMetadataSecurity();
    $requestSecurity->option1 = new ComputeInstancesSetMetadataSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesSetMetadata($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesSetMinCpuPlatform

Changes the minimum CPU platform that this instance should use. This method can only be called on a stopped instance. For more information, read Specifying a Minimum CPU Platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetMinCpuPlatformRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancesSetMinCpuPlatformRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetMinCpuPlatformSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetMinCpuPlatformSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetMinCpuPlatformSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesSetMinCpuPlatformRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instancesSetMinCpuPlatformRequest = new InstancesSetMinCpuPlatformRequest();
    $request->instancesSetMinCpuPlatformRequest->minCpuPlatform = 'nobis';
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facilis';
    $request->fields = 'facere';
    $request->instance = 'aut';
    $request->key = 'itaque';
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->project = 'molestiae';
    $request->quotaUser = 'quaerat';
    $request->requestId = 'distinctio';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'quaerat';
    $request->userIp = 'odit';
    $request->zone = 'ab';

    $requestSecurity = new ComputeInstancesSetMinCpuPlatformSecurity();
    $requestSecurity->option1 = new ComputeInstancesSetMinCpuPlatformSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesSetMinCpuPlatform($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesSetName

Sets name of an instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetNameRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancesSetNameRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetNameSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetNameSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetNameSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesSetNameRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instancesSetNameRequest = new InstancesSetNameRequest();
    $request->instancesSetNameRequest->currentName = 'nemo';
    $request->instancesSetNameRequest->name = 'Melody Grady';
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quisquam';
    $request->fields = 'labore';
    $request->instance = 'sequi';
    $request->key = 'veritatis';
    $request->oauthToken = 'veniam';
    $request->prettyPrint = false;
    $request->project = 'unde';
    $request->quotaUser = 'assumenda';
    $request->requestId = 'adipisci';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'accusamus';
    $request->userIp = 'veniam';
    $request->zone = 'provident';

    $requestSecurity = new ComputeInstancesSetNameSecurity();
    $requestSecurity->option1 = new ComputeInstancesSetNameSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesSetName($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesSetScheduling

Sets an instance's scheduling options. You can only call this method on a stopped instance, that is, a VM instance that is in a `TERMINATED` state. See Instance Life Cycle for more information on the possible instance states. For more information about setting scheduling options for a VM, see Set VM host maintenance policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetSchedulingRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Scheduling;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingInstanceTerminationActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingNodeAffinity;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingNodeAffinityOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingOnHostMaintenanceEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingProvisioningModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetSchedulingSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetSchedulingSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetSchedulingSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesSetSchedulingRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->scheduling = new Scheduling();
    $request->scheduling->automaticRestart = false;
    $request->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::DELETE;
    $request->scheduling->locationHint = 'quod';
    $request->scheduling->minNodeCpus = 7287;
    $request->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
    ];
    $request->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::MIGRATE;
    $request->scheduling->preemptible = false;
    $request->scheduling->provisioningModel = SchedulingProvisioningModelEnum::SPOT;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quos';
    $request->fields = 'aliquid';
    $request->instance = 'sequi';
    $request->key = 'culpa';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->project = 'modi';
    $request->quotaUser = 'et';
    $request->requestId = 'eveniet';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'optio';
    $request->userIp = 'adipisci';
    $request->zone = 'ab';

    $requestSecurity = new ComputeInstancesSetSchedulingSecurity();
    $requestSecurity->option1 = new ComputeInstancesSetSchedulingSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesSetScheduling($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesSetServiceAccount

Sets the service account on the instance. For more information, read Changing the service account and access scopes for an instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetServiceAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancesSetServiceAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetServiceAccountSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetServiceAccountSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetServiceAccountSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesSetServiceAccountRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instancesSetServiceAccountRequest = new InstancesSetServiceAccountRequest();
    $request->instancesSetServiceAccountRequest->email = 'Brannon94@hotmail.com';
    $request->instancesSetServiceAccountRequest->scopes = [
        'tempore',
        'ullam',
        'sunt',
        'quisquam',
    ];
    $request->accessToken = 'sint';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ut';
    $request->fields = 'et';
    $request->instance = 'reiciendis';
    $request->key = 'reiciendis';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->project = 'itaque';
    $request->quotaUser = 'iste';
    $request->requestId = 'quod';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'temporibus';
    $request->userIp = 'iure';
    $request->zone = 'natus';

    $requestSecurity = new ComputeInstancesSetServiceAccountSecurity();
    $requestSecurity->option1 = new ComputeInstancesSetServiceAccountSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesSetServiceAccount($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesSetShieldedInstanceIntegrityPolicy

Sets the Shielded Instance integrity policy for an instance. You can only use this method on a running instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetShieldedInstanceIntegrityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceIntegrityPolicy;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetShieldedInstanceIntegrityPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetShieldedInstanceIntegrityPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetShieldedInstanceIntegrityPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesSetShieldedInstanceIntegrityPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->shieldedInstanceIntegrityPolicy = new ShieldedInstanceIntegrityPolicy();
    $request->shieldedInstanceIntegrityPolicy->updateAutoLearnPolicy = false;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'commodi';
    $request->fields = 'veniam';
    $request->instance = 'debitis';
    $request->key = 'doloremque';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->project = 'aliquid';
    $request->quotaUser = 'porro';
    $request->requestId = 'quisquam';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'mollitia';
    $request->userIp = 'quidem';
    $request->zone = 'delectus';

    $requestSecurity = new ComputeInstancesSetShieldedInstanceIntegrityPolicySecurity();
    $requestSecurity->option1 = new ComputeInstancesSetShieldedInstanceIntegrityPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesSetShieldedInstanceIntegrityPolicy($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesSetTags

Sets network tags for the specified instance to the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tags;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetTagsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetTagsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetTagsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesSetTagsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->tags = new Tags();
    $request->tags->fingerprint = 'beatae';
    $request->tags->items = [
        'eveniet',
        'mollitia',
    ];
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestiae';
    $request->fields = 'inventore';
    $request->instance = 'vel';
    $request->key = 'modi';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->project = 'provident';
    $request->quotaUser = 'non';
    $request->requestId = 'dolore';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'occaecati';
    $request->userIp = 'sit';
    $request->zone = 'asperiores';

    $requestSecurity = new ComputeInstancesSetTagsSecurity();
    $requestSecurity->option1 = new ComputeInstancesSetTagsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesSetTags($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesSimulateMaintenanceEvent

Simulates a host maintenance event on a VM. For more information, see Simulate a host maintenance event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSimulateMaintenanceEventRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSimulateMaintenanceEventSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSimulateMaintenanceEventSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSimulateMaintenanceEventSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesSimulateMaintenanceEventRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'occaecati';
    $request->fields = 'nulla';
    $request->instance = 'ab';
    $request->key = 'natus';
    $request->oauthToken = 'possimus';
    $request->prettyPrint = false;
    $request->project = 'magni';
    $request->quotaUser = 'a';
    $request->requestId = 'cumque';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'delectus';
    $request->userIp = 'natus';
    $request->zone = 'earum';

    $requestSecurity = new ComputeInstancesSimulateMaintenanceEventSecurity();
    $requestSecurity->option1 = new ComputeInstancesSimulateMaintenanceEventSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesSimulateMaintenanceEvent($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesStart

Starts an instance that was stopped using the instances().stop method. For more information, see Restart an instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesStartRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesStartSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesStartSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesStartSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesStartRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequatur';
    $request->fields = 'nemo';
    $request->instance = 'provident';
    $request->key = 'numquam';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->project = 'tempore';
    $request->quotaUser = 'molestias';
    $request->requestId = 'amet';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'illum';
    $request->userIp = 'sed';
    $request->zone = 'adipisci';

    $requestSecurity = new ComputeInstancesStartSecurity();
    $requestSecurity->option1 = new ComputeInstancesStartSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesStart($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesStartWithEncryptionKey

Starts an instance that was stopped using the instances().stop method. For more information, see Restart an instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesStartWithEncryptionKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancesStartWithEncryptionKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomerEncryptionKeyProtectedDisk;
use \OpenAPI\OpenAPI\Models\Shared\CustomerEncryptionKey;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesStartWithEncryptionKeySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesStartWithEncryptionKeySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesStartWithEncryptionKeySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesStartWithEncryptionKeyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instancesStartWithEncryptionKeyRequest = new InstancesStartWithEncryptionKeyRequest();
    $request->instancesStartWithEncryptionKeyRequest->disks = [
        new CustomerEncryptionKeyProtectedDisk(),
        new CustomerEncryptionKeyProtectedDisk(),
        new CustomerEncryptionKeyProtectedDisk(),
    ];
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'asperiores';
    $request->fields = 'occaecati';
    $request->instance = 'doloremque';
    $request->key = 'blanditiis';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->project = 'excepturi';
    $request->quotaUser = 'fugiat';
    $request->requestId = 'laboriosam';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'itaque';
    $request->userIp = 'assumenda';
    $request->zone = 'quaerat';

    $requestSecurity = new ComputeInstancesStartWithEncryptionKeySecurity();
    $requestSecurity->option1 = new ComputeInstancesStartWithEncryptionKeySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesStartWithEncryptionKey($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesStop

Stops a running instance, shutting it down cleanly, and allows you to restart the instance at a later time. Stopped instances do not incur VM usage charges while they are stopped. However, resources that the VM is using, such as persistent disks and static IP addresses, will continue to be charged until they are deleted. For more information, see Stopping an instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesStopRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesStopSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesStopSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesStopSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesStopRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eveniet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'soluta';
    $request->discardLocalSsd = false;
    $request->fields = 'dignissimos';
    $request->instance = 'nemo';
    $request->key = 'neque';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->project = 'placeat';
    $request->quotaUser = 'at';
    $request->requestId = 'excepturi';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'odit';
    $request->userIp = 'quia';
    $request->zone = 'maxime';

    $requestSecurity = new ComputeInstancesStopSecurity();
    $requestSecurity->option1 = new ComputeInstancesStopSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesStop($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesSuspend

This method suspends a running instance, saving its state to persistent storage, and allows you to resume the instance at a later time. Suspended instances have no compute costs (cores or RAM), and incur only storage charges for the saved VM memory and localSSD data. Any charged resources the virtual machine was using, such as persistent disks and static IP addresses, will continue to be charged while the instance is suspended. For more information, see Suspending and resuming an instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSuspendRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSuspendSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSuspendSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSuspendSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesSuspendRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'exercitationem';
    $request->discardLocalSsd = false;
    $request->fields = 'ducimus';
    $request->instance = 'dolore';
    $request->key = 'iste';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->project = 'error';
    $request->quotaUser = 'id';
    $request->requestId = 'harum';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'laborum';
    $request->userIp = 'aspernatur';
    $request->zone = 'vero';

    $requestSecurity = new ComputeInstancesSuspendSecurity();
    $requestSecurity->option1 = new ComputeInstancesSuspendSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesSuspend($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'quasi',
        'tenetur',
    ];
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'id';
    $request->fields = 'tempora';
    $request->key = 'pariatur';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->project = 'quis';
    $request->quotaUser = 'aliquid';
    $request->resource = 'vero';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'dicta';
    $request->userIp = 'sit';
    $request->zone = 'adipisci';

    $requestSecurity = new ComputeInstancesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeInstancesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesUpdate

Updates an instance only if the necessary resources are available. This method can update only a specific set of instance properties. See Updating a running instance for a list of updatable instance properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Instance;
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
use \OpenAPI\OpenAPI\Models\Shared\InstanceKeyRevocationActionTypeEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\InstanceParams;
use \OpenAPI\OpenAPI\Models\Shared\InstancePrivateIpv6GoogleAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinity;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinityConsumeReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\Scheduling;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingInstanceTerminationActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingNodeAffinity;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingNodeAffinityOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingOnHostMaintenanceEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingProvisioningModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccount;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceIntegrityPolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tags;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateMinimalActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateMostDisruptiveAllowedActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instance1 = new Instance();
    $request->instance1->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->instance1->advancedMachineFeatures->enableNestedVirtualization = false;
    $request->instance1->advancedMachineFeatures->enableUefiNetworking = false;
    $request->instance1->advancedMachineFeatures->threadsPerCore = 901607;
    $request->instance1->advancedMachineFeatures->visibleCoreCount = 434936;
    $request->instance1->canIpForward = false;
    $request->instance1->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->instance1->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->instance1->cpuPlatform = 'praesentium';
    $request->instance1->creationTimestamp = 'perspiciatis';
    $request->instance1->deletionProtection = false;
    $request->instance1->description = 'omnis';
    $request->instance1->disks = [
        new AttachedDisk(),
        new AttachedDisk(),
        new AttachedDisk(),
        new AttachedDisk(),
    ];
    $request->instance1->displayDevice = new DisplayDevice();
    $request->instance1->displayDevice->enableDisplay = false;
    $request->instance1->fingerprint = 'accusantium';
    $request->instance1->guestAccelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->instance1->hostname = 'colorful-apricot.com';
    $request->instance1->id = 'quasi';
    $request->instance1->keyRevocationActionType = InstanceKeyRevocationActionTypeEnum::STOP;
    $request->instance1->kind = 'quia';
    $request->instance1->labelFingerprint = 'aspernatur';
    $request->instance1->labels = [
        'illum' => 'veniam',
        'exercitationem' => 'quod',
        'quod' => 'alias',
        'nemo' => 'molestias',
    ];
    $request->instance1->lastStartTimestamp = 'modi';
    $request->instance1->lastStopTimestamp = 'similique';
    $request->instance1->lastSuspendedTimestamp = 'quasi';
    $request->instance1->machineType = 'laudantium';
    $request->instance1->metadata = new Metadata();
    $request->instance1->metadata->fingerprint = 'ut';
    $request->instance1->metadata->items = [
        new MetadataItems(),
        new MetadataItems(),
        new MetadataItems(),
        new MetadataItems(),
    ];
    $request->instance1->metadata->kind = 'nihil';
    $request->instance1->minCpuPlatform = 'voluptas';
    $request->instance1->name = 'Dr. Arturo Kling';
    $request->instance1->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->instance1->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->instance1->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::DEFAULT;
    $request->instance1->params = new InstanceParams();
    $request->instance1->params->resourceManagerTags = [
        'eligendi' => 'commodi',
    ];
    $request->instance1->privateIpv6GoogleAccess = InstancePrivateIpv6GoogleAccessEnum::ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE;
    $request->instance1->reservationAffinity = new ReservationAffinity();
    $request->instance1->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::SPECIFIC_RESERVATION;
    $request->instance1->reservationAffinity->key = 'aut';
    $request->instance1->reservationAffinity->values = [
        'in',
    ];
    $request->instance1->resourcePolicies = [
        'distinctio',
        'blanditiis',
        'saepe',
    ];
    $request->instance1->resourceStatus = new ResourceStatus();
    $request->instance1->resourceStatus->physicalHost = 'sit';
    $request->instance1->satisfiesPzs = false;
    $request->instance1->scheduling = new Scheduling();
    $request->instance1->scheduling->automaticRestart = false;
    $request->instance1->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::STOP;
    $request->instance1->scheduling->locationHint = 'impedit';
    $request->instance1->scheduling->minNodeCpus = 549332;
    $request->instance1->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->instance1->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::MIGRATE;
    $request->instance1->scheduling->preemptible = false;
    $request->instance1->scheduling->provisioningModel = SchedulingProvisioningModelEnum::SPOT;
    $request->instance1->selfLink = 'quas';
    $request->instance1->serviceAccounts = [
        new ServiceAccount(),
        new ServiceAccount(),
    ];
    $request->instance1->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->instance1->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->instance1->shieldedInstanceConfig->enableSecureBoot = false;
    $request->instance1->shieldedInstanceConfig->enableVtpm = false;
    $request->instance1->shieldedInstanceIntegrityPolicy = new ShieldedInstanceIntegrityPolicy();
    $request->instance1->shieldedInstanceIntegrityPolicy->updateAutoLearnPolicy = false;
    $request->instance1->sourceMachineImage = 'officiis';
    $request->instance1->sourceMachineImageEncryptionKey = new CustomerEncryptionKey();
    $request->instance1->sourceMachineImageEncryptionKey->kmsKeyName = 'labore';
    $request->instance1->sourceMachineImageEncryptionKey->kmsKeyServiceAccount = 'nulla';
    $request->instance1->sourceMachineImageEncryptionKey->rawKey = 'accusamus';
    $request->instance1->sourceMachineImageEncryptionKey->rsaEncryptedKey = 'consequatur';
    $request->instance1->sourceMachineImageEncryptionKey->sha256 = 'ut';
    $request->instance1->startRestricted = false;
    $request->instance1->status = InstanceStatusEnum::STOPPING;
    $request->instance1->statusMessage = 'hic';
    $request->instance1->tags = new Tags();
    $request->instance1->tags->fingerprint = 'sed';
    $request->instance1->tags->items = [
        'maxime',
        'ad',
        'quibusdam',
    ];
    $request->instance1->zone = 'facere';
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'labore';
    $request->fields = 'commodi';
    $request->instancePathParameter = 'mollitia';
    $request->key = 'similique';
    $request->minimalAction = ComputeInstancesUpdateMinimalActionEnum::INVALID;
    $request->mostDisruptiveAllowedAction = ComputeInstancesUpdateMostDisruptiveAllowedActionEnum::RESTART;
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->project = 'illum';
    $request->quotaUser = 'ea';
    $request->requestId = 'facere';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'magni';
    $request->userIp = 'blanditiis';
    $request->zone = 'assumenda';

    $requestSecurity = new ComputeInstancesUpdateSecurity();
    $requestSecurity->option1 = new ComputeInstancesUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesUpdateAccessConfig

Updates the specified access config from an instance's network interface with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateAccessConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccessConfig;
use \OpenAPI\OpenAPI\Models\Shared\AccessConfigNetworkTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccessConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateAccessConfigSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateAccessConfigSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateAccessConfigSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesUpdateAccessConfigRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessConfig = new AccessConfig();
    $request->accessConfig->externalIpv6 = 'ipsa';
    $request->accessConfig->externalIpv6PrefixLength = 78158;
    $request->accessConfig->kind = 'nesciunt';
    $request->accessConfig->name = 'Mr. Sabrina Blick';
    $request->accessConfig->natIP = 'ex';
    $request->accessConfig->networkTier = AccessConfigNetworkTierEnum::PREMIUM;
    $request->accessConfig->publicPtrDomainName = 'aliquid';
    $request->accessConfig->setPublicPtr = false;
    $request->accessConfig->type = AccessConfigTypeEnum::DIRECT_IPV6;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->fields = 'ab';
    $request->instance = 'quibusdam';
    $request->key = 'blanditiis';
    $request->networkInterface = 'et';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'explicabo';
    $request->quotaUser = 'iste';
    $request->requestId = 'perferendis';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'aspernatur';
    $request->userIp = 'sapiente';
    $request->zone = 'nemo';

    $requestSecurity = new ComputeInstancesUpdateAccessConfigSecurity();
    $requestSecurity->option1 = new ComputeInstancesUpdateAccessConfigSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesUpdateAccessConfig($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesUpdateDisplayDevice

Updates the Display config for a VM instance. You can only use this method on a stopped VM instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateDisplayDeviceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DisplayDevice;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateDisplayDeviceSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateDisplayDeviceSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateDisplayDeviceSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesUpdateDisplayDeviceRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->displayDevice = new DisplayDevice();
    $request->displayDevice->enableDisplay = false;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'iusto';
    $request->fields = 'culpa';
    $request->instance = 'reiciendis';
    $request->key = 'a';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->project = 'voluptates';
    $request->quotaUser = 'dolorum';
    $request->requestId = 'fugit';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'veritatis';
    $request->userIp = 'vel';
    $request->zone = 'placeat';

    $requestSecurity = new ComputeInstancesUpdateDisplayDeviceSecurity();
    $requestSecurity->option1 = new ComputeInstancesUpdateDisplayDeviceSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesUpdateDisplayDevice($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesUpdateNetworkInterface

Updates an instance's network interface. This method can only update an interface's alias IP range and attached network. See Modifying alias IP ranges for an existing instance for instructions on changing alias IP ranges. See Migrating a VM between networks for instructions on migrating an interface. This method follows PATCH semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateNetworkInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkInterface;
use \OpenAPI\OpenAPI\Models\Shared\AccessConfig;
use \OpenAPI\OpenAPI\Models\Shared\AccessConfigNetworkTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccessConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AliasIpRange;
use \OpenAPI\OpenAPI\Models\Shared\NetworkInterfaceIpv6AccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkInterfaceNicTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkInterfaceStackTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateNetworkInterfaceSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateNetworkInterfaceSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateNetworkInterfaceSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesUpdateNetworkInterfaceRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->networkInterface1 = new NetworkInterface();
    $request->networkInterface1->accessConfigs = [
        new AccessConfig(),
        new AccessConfig(),
        new AccessConfig(),
        new AccessConfig(),
    ];
    $request->networkInterface1->aliasIpRanges = [
        new AliasIpRange(),
    ];
    $request->networkInterface1->fingerprint = 'dignissimos';
    $request->networkInterface1->internalIpv6PrefixLength = 82503;
    $request->networkInterface1->ipv6AccessConfigs = [
        new AccessConfig(),
        new AccessConfig(),
        new AccessConfig(),
    ];
    $request->networkInterface1->ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum::INTERNAL;
    $request->networkInterface1->ipv6Address = 'ab';
    $request->networkInterface1->kind = 'ex';
    $request->networkInterface1->name = 'Rochelle Cormier';
    $request->networkInterface1->network = 'harum';
    $request->networkInterface1->networkAttachment = 'sequi';
    $request->networkInterface1->networkIP = 'libero';
    $request->networkInterface1->nicType = NetworkInterfaceNicTypeEnum::GVNIC;
    $request->networkInterface1->queueCount = 502406;
    $request->networkInterface1->stackType = NetworkInterfaceStackTypeEnum::IPV4_IPV6;
    $request->networkInterface1->subnetwork = 'vero';
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'consequuntur';
    $request->instance = 'veniam';
    $request->key = 'quam';
    $request->networkInterfaceQueryParameter = 'repellendus';
    $request->oauthToken = 'eaque';
    $request->prettyPrint = false;
    $request->project = 'incidunt';
    $request->quotaUser = 'asperiores';
    $request->requestId = 'eius';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'quas';
    $request->userIp = 'incidunt';
    $request->zone = 'iusto';

    $requestSecurity = new ComputeInstancesUpdateNetworkInterfaceSecurity();
    $requestSecurity->option1 = new ComputeInstancesUpdateNetworkInterfaceSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesUpdateNetworkInterface($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstancesUpdateShieldedInstanceConfig

Updates the Shielded Instance config for an instance. You can only use this method on a stopped instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateShieldedInstanceConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateShieldedInstanceConfigSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateShieldedInstanceConfigSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateShieldedInstanceConfigSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesUpdateShieldedInstanceConfigRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->shieldedInstanceConfig->enableSecureBoot = false;
    $request->shieldedInstanceConfig->enableVtpm = false;
    $request->accessToken = 'in';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quia';
    $request->fields = 'repellendus';
    $request->instance = 'blanditiis';
    $request->key = 'ut';
    $request->oauthToken = 'eius';
    $request->prettyPrint = false;
    $request->project = 'cupiditate';
    $request->quotaUser = 'nisi';
    $request->requestId = 'placeat';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'facere';
    $request->userIp = 'earum';
    $request->zone = 'debitis';

    $requestSecurity = new ComputeInstancesUpdateShieldedInstanceConfigSecurity();
    $requestSecurity->option1 = new ComputeInstancesUpdateShieldedInstanceConfigSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesUpdateShieldedInstanceConfig($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
