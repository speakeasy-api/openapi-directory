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
* [computeInstancesGetShieldedVmIdentity](#computeinstancesgetshieldedvmidentity) - Returns the Shielded VM Identity of an instance
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
* [computeInstancesSetShieldedVmIntegrityPolicy](#computeinstancessetshieldedvmintegritypolicy) - Sets the Shielded VM integrity policy for a VM instance. You can only use this method on a running VM instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
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
* [computeInstancesUpdateShieldedVmConfig](#computeinstancesupdateshieldedvmconfig) - Updates the Shielded VM config for a VM instance. You can only use this method on a stopped VM instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

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
    $request->accessConfig->externalIpv6 = 'voluptate';
    $request->accessConfig->externalIpv6PrefixLength = 164989;
    $request->accessConfig->kind = 'excepturi';
    $request->accessConfig->name = 'Erma Streich';
    $request->accessConfig->natIP = 'illo';
    $request->accessConfig->networkTier = AccessConfigNetworkTierEnum::STANDARD_OVERRIDES_FIXED_STANDARD;
    $request->accessConfig->publicPtrDomainName = 'nulla';
    $request->accessConfig->setPublicPtr = false;
    $request->accessConfig->type = AccessConfigTypeEnum::DIRECT_IPV6;
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'impedit';
    $request->fields = 'repudiandae';
    $request->instance = 'dolores';
    $request->key = 'ut';
    $request->networkInterface = 'nihil';
    $request->oauthToken = 'harum';
    $request->prettyPrint = false;
    $request->project = 'voluptate';
    $request->quotaUser = 'aliquid';
    $request->requestId = 'blanditiis';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'repudiandae';
    $request->userIp = 'reiciendis';
    $request->zone = 'asperiores';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instancesAddResourcePoliciesRequest = new InstancesAddResourcePoliciesRequest();
    $request->instancesAddResourcePoliciesRequest->resourcePolicies = [
        'beatae',
    ];
    $request->accessToken = 'qui';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'temporibus';
    $request->fields = 'in';
    $request->instance = 'veritatis';
    $request->key = 'nobis';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->project = 'tenetur';
    $request->quotaUser = 'facilis';
    $request->requestId = 'facere';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'itaque';
    $request->userIp = 'rerum';
    $request->zone = 'molestiae';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quaerat';
    $request->fields = 'odit';
    $request->filter = 'ab';
    $request->includeAllScopes = false;
    $request->key = 'unde';
    $request->maxResults = 365473;
    $request->oauthToken = 'dolorem';
    $request->orderBy = 'rerum';
    $request->pageToken = 'ut';
    $request->prettyPrint = false;
    $request->project = 'tempora';
    $request->quotaUser = 'quidem';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'nesciunt';
    $request->userIp = 'quisquam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->attachedDisk = new AttachedDisk();
    $request->attachedDisk->architecture = AttachedDiskArchitectureEnum::ARCHITECTURE_UNSPECIFIED;
    $request->attachedDisk->autoDelete = false;
    $request->attachedDisk->boot = false;
    $request->attachedDisk->deviceName = 'veritatis';
    $request->attachedDisk->diskEncryptionKey = new CustomerEncryptionKey();
    $request->attachedDisk->diskEncryptionKey->kmsKeyName = 'veniam';
    $request->attachedDisk->diskEncryptionKey->kmsKeyServiceAccount = 'unde';
    $request->attachedDisk->diskEncryptionKey->rawKey = 'assumenda';
    $request->attachedDisk->diskEncryptionKey->rsaEncryptedKey = 'adipisci';
    $request->attachedDisk->diskEncryptionKey->sha256 = 'velit';
    $request->attachedDisk->diskSizeGb = 'accusamus';
    $request->attachedDisk->forceAttach = false;
    $request->attachedDisk->guestOsFeatures = [
        new GuestOsFeature(),
        new GuestOsFeature(),
    ];
    $request->attachedDisk->index = 591367;
    $request->attachedDisk->initializeParams = new AttachedDiskInitializeParams();
    $request->attachedDisk->initializeParams->architecture = AttachedDiskInitializeParamsArchitectureEnum::ARM64;
    $request->attachedDisk->initializeParams->description = 'dolor';
    $request->attachedDisk->initializeParams->diskName = 'quod';
    $request->attachedDisk->initializeParams->diskSizeGb = 'consequatur';
    $request->attachedDisk->initializeParams->diskType = 'accusantium';
    $request->attachedDisk->initializeParams->guestOsFeatures = [
        new GuestOsFeature(),
    ];
    $request->attachedDisk->initializeParams->labels = [
        'amet' => 'occaecati',
    ];
    $request->attachedDisk->initializeParams->licenses = [
        'aliquid',
        'sequi',
        'culpa',
    ];
    $request->attachedDisk->initializeParams->multiWriter = false;
    $request->attachedDisk->initializeParams->onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum::USE_EXISTING_DISK;
    $request->attachedDisk->initializeParams->provisionedIops = 'modi';
    $request->attachedDisk->initializeParams->provisionedThroughput = 'et';
    $request->attachedDisk->initializeParams->replicaZones = [
        'aliquid',
        'optio',
        'adipisci',
        'ab',
    ];
    $request->attachedDisk->initializeParams->resourceManagerTags = [
        'porro' => 'explicabo',
        'reiciendis' => 'dicta',
        'hic' => 'porro',
        'tempore' => 'ullam',
    ];
    $request->attachedDisk->initializeParams->resourcePolicies = [
        'quisquam',
    ];
    $request->attachedDisk->initializeParams->sourceImage = 'sint';
    $request->attachedDisk->initializeParams->sourceImageEncryptionKey = new CustomerEncryptionKey();
    $request->attachedDisk->initializeParams->sourceImageEncryptionKey->kmsKeyName = 'id';
    $request->attachedDisk->initializeParams->sourceImageEncryptionKey->kmsKeyServiceAccount = 'ut';
    $request->attachedDisk->initializeParams->sourceImageEncryptionKey->rawKey = 'et';
    $request->attachedDisk->initializeParams->sourceImageEncryptionKey->rsaEncryptedKey = 'reiciendis';
    $request->attachedDisk->initializeParams->sourceImageEncryptionKey->sha256 = 'reiciendis';
    $request->attachedDisk->initializeParams->sourceSnapshot = 'distinctio';
    $request->attachedDisk->initializeParams->sourceSnapshotEncryptionKey = new CustomerEncryptionKey();
    $request->attachedDisk->initializeParams->sourceSnapshotEncryptionKey->kmsKeyName = 'itaque';
    $request->attachedDisk->initializeParams->sourceSnapshotEncryptionKey->kmsKeyServiceAccount = 'iste';
    $request->attachedDisk->initializeParams->sourceSnapshotEncryptionKey->rawKey = 'quod';
    $request->attachedDisk->initializeParams->sourceSnapshotEncryptionKey->rsaEncryptedKey = 'quidem';
    $request->attachedDisk->initializeParams->sourceSnapshotEncryptionKey->sha256 = 'temporibus';
    $request->attachedDisk->interface = AttachedDiskInterfaceEnum::NVME;
    $request->attachedDisk->kind = 'natus';
    $request->attachedDisk->licenses = [
        'repudiandae',
        'earum',
    ];
    $request->attachedDisk->locked = false;
    $request->attachedDisk->mode = AttachedDiskModeEnum::READ_ONLY;
    $request->attachedDisk->shieldedInstanceInitialState = new InitialStateConfig();
    $request->attachedDisk->shieldedInstanceInitialState->dbs = [
        new FileContentBuffer(),
        new FileContentBuffer(),
    ];
    $request->attachedDisk->shieldedInstanceInitialState->dbxs = [
        new FileContentBuffer(),
        new FileContentBuffer(),
        new FileContentBuffer(),
        new FileContentBuffer(),
    ];
    $request->attachedDisk->shieldedInstanceInitialState->keks = [
        new FileContentBuffer(),
    ];
    $request->attachedDisk->shieldedInstanceInitialState->pk = new FileContentBuffer();
    $request->attachedDisk->shieldedInstanceInitialState->pk->content = 'esse';
    $request->attachedDisk->shieldedInstanceInitialState->pk->fileType = FileContentBufferFileTypeEnum::UNDEFINED;
    $request->attachedDisk->source = 'porro';
    $request->attachedDisk->type = AttachedDiskTypeEnum::SCRATCH;
    $request->attachedDisk->userLicenses = [
        'mollitia',
        'quidem',
    ];
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'beatae';
    $request->fields = 'suscipit';
    $request->forceAttach = false;
    $request->instance = 'eveniet';
    $request->key = 'mollitia';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->project = 'porro';
    $request->quotaUser = 'molestiae';
    $request->requestId = 'inventore';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'modi';
    $request->userIp = 'dicta';
    $request->zone = 'provident';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesBulkInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesBulkInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesBulkInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesBulkInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->bulkInsertInstanceResource = new BulkInsertInstanceResource();
    $request->bulkInsertInstanceResource->count = 'dolore';
    $request->bulkInsertInstanceResource->instanceProperties = new InstanceProperties();
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->enableNestedVirtualization = false;
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->enableUefiNetworking = false;
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->threadsPerCore = 742272;
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->visibleCoreCount = 581017;
    $request->bulkInsertInstanceResource->instanceProperties->canIpForward = false;
    $request->bulkInsertInstanceResource->instanceProperties->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->bulkInsertInstanceResource->instanceProperties->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->bulkInsertInstanceResource->instanceProperties->description = 'sit';
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
    ];
    $request->bulkInsertInstanceResource->instanceProperties->keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum::STOP;
    $request->bulkInsertInstanceResource->instanceProperties->labels = [
        'occaecati' => 'nulla',
    ];
    $request->bulkInsertInstanceResource->instanceProperties->machineType = 'ab';
    $request->bulkInsertInstanceResource->instanceProperties->metadata = new Metadata();
    $request->bulkInsertInstanceResource->instanceProperties->metadata->fingerprint = 'natus';
    $request->bulkInsertInstanceResource->instanceProperties->metadata->items = [
        new MetadataItems(),
        new MetadataItems(),
        new MetadataItems(),
        new MetadataItems(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->metadata->kind = 'magni';
    $request->bulkInsertInstanceResource->instanceProperties->minCpuPlatform = 'a';
    $request->bulkInsertInstanceResource->instanceProperties->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->bulkInsertInstanceResource->instanceProperties->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::DEFAULT;
    $request->bulkInsertInstanceResource->instanceProperties->postKeyRevocationActionType = InstancePropertiesPostKeyRevocationActionTypeEnum::SHUTDOWN;
    $request->bulkInsertInstanceResource->instanceProperties->privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum::ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE;
    $request->bulkInsertInstanceResource->instanceProperties->reservationAffinity = new ReservationAffinity();
    $request->bulkInsertInstanceResource->instanceProperties->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::UNSPECIFIED;
    $request->bulkInsertInstanceResource->instanceProperties->reservationAffinity->key = 'fugit';
    $request->bulkInsertInstanceResource->instanceProperties->reservationAffinity->values = [
        'vitae',
        'consequatur',
        'nemo',
        'provident',
    ];
    $request->bulkInsertInstanceResource->instanceProperties->resourceManagerTags = [
        'numquam' => 'tempore',
        'molestias' => 'amet',
    ];
    $request->bulkInsertInstanceResource->instanceProperties->resourcePolicies = [
        'illum',
        'sed',
    ];
    $request->bulkInsertInstanceResource->instanceProperties->scheduling = new Scheduling();
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->automaticRestart = false;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->hostErrorTimeoutSeconds = 240555;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::INSTANCE_TERMINATION_ACTION_UNSPECIFIED;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->locationHint = 'id';
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->maintenanceFreezeDurationHours = 495096;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->maintenanceInterval = SchedulingMaintenanceIntervalEnum::PERIODIC;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->maxRunDuration = new Duration();
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->maxRunDuration->nanos = 174757;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->maxRunDuration->seconds = 'asperiores';
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->minNodeCpus = 581857;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::TERMINATE;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->preemptible = false;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->provisioningModel = SchedulingProvisioningModelEnum::SPOT;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->terminationTime = 'excepturi';
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
    $request->bulkInsertInstanceResource->instanceProperties->shieldedVmConfig = new ShieldedVmConfig();
    $request->bulkInsertInstanceResource->instanceProperties->shieldedVmConfig->enableIntegrityMonitoring = false;
    $request->bulkInsertInstanceResource->instanceProperties->shieldedVmConfig->enableSecureBoot = false;
    $request->bulkInsertInstanceResource->instanceProperties->shieldedVmConfig->enableVtpm = false;
    $request->bulkInsertInstanceResource->instanceProperties->tags = new Tags();
    $request->bulkInsertInstanceResource->instanceProperties->tags->fingerprint = 'laboriosam';
    $request->bulkInsertInstanceResource->instanceProperties->tags->items = [
        'itaque',
        'assumenda',
        'quaerat',
    ];
    $request->bulkInsertInstanceResource->locationPolicy = new LocationPolicy();
    $request->bulkInsertInstanceResource->locationPolicy->locations = [
        'eveniet' => new LocationPolicyLocation(),
        'optio' => new LocationPolicyLocation(),
        'soluta' => new LocationPolicyLocation(),
    ];
    $request->bulkInsertInstanceResource->locationPolicy->targetShape = LocationPolicyTargetShapeEnum::ANY_SINGLE_ZONE;
    $request->bulkInsertInstanceResource->minCount = 'nemo';
    $request->bulkInsertInstanceResource->namePattern = 'neque';
    $request->bulkInsertInstanceResource->perInstanceProperties = [
        'placeat' => new BulkInsertInstanceResourcePerInstanceProperties(),
        'at' => new BulkInsertInstanceResourcePerInstanceProperties(),
    ];
    $request->bulkInsertInstanceResource->sourceInstanceTemplate = 'excepturi';
    $request->accessToken = 'eos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quia';
    $request->fields = 'maxime';
    $request->key = 'excepturi';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->project = 'maiores';
    $request->quotaUser = 'exercitationem';
    $request->requestId = 'ducimus';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'iste';
    $request->userIp = 'inventore';
    $request->zone = 'error';

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
    $request->accessToken = 'harum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laborum';
    $request->fields = 'aspernatur';
    $request->instance = 'vero';
    $request->key = 'odio';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->project = 'quasi';
    $request->quotaUser = 'tenetur';
    $request->requestId = 'accusantium';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'id';
    $request->userIp = 'tempora';
    $request->zone = 'pariatur';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessConfig = 'quis';
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'reiciendis';
    $request->fields = 'dicta';
    $request->instance = 'sit';
    $request->key = 'adipisci';
    $request->networkInterface = 'inventore';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->project = 'iure';
    $request->quotaUser = 'praesentium';
    $request->requestId = 'perspiciatis';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'hic';
    $request->userIp = 'accusantium';
    $request->zone = 'minus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->deviceName = 'saepe';
    $request->fields = 'quia';
    $request->instance = 'aspernatur';
    $request->key = 'minus';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->project = 'veniam';
    $request->quotaUser = 'exercitationem';
    $request->requestId = 'quod';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'alias';
    $request->userIp = 'nemo';
    $request->zone = 'molestias';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'similique';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laudantium';
    $request->fields = 'ut';
    $request->instance = 'possimus';
    $request->key = 'nihil';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->project = 'facere';
    $request->quotaUser = 'omnis';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'vitae';
    $request->userIp = 'reiciendis';
    $request->zone = 'cumque';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eligendi';
    $request->fields = 'commodi';
    $request->instance = 'enim';
    $request->key = 'harum';
    $request->networkInterface = 'aut';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->project = 'in';
    $request->quotaUser = 'rerum';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'blanditiis';
    $request->userIp = 'saepe';
    $request->zone = 'sit';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quas';
    $request->fields = 'ullam';
    $request->instance = 'veritatis';
    $request->key = 'quas';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->project = 'officiis';
    $request->queryPath = 'labore';
    $request->quotaUser = 'nulla';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'consequatur';
    $request->userIp = 'ut';
    $request->variableKey = 'laborum';
    $request->zone = 'hic';

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
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ad';
    $request->fields = 'quibusdam';
    $request->key = 'facere';
    $request->oauthToken = 'pariatur';
    $request->optionsRequestedPolicyVersion = 697401;
    $request->prettyPrint = false;
    $request->project = 'labore';
    $request->quotaUser = 'commodi';
    $request->resource = 'mollitia';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'quasi';
    $request->userIp = 'quo';
    $request->zone = 'voluptatibus';

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
    $request->accessToken = 'ea';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corrupti';
    $request->fields = 'magni';
    $request->instance = 'blanditiis';
    $request->key = 'assumenda';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->project = 'ipsa';
    $request->quotaUser = 'inventore';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'et';
    $request->userIp = 'error';
    $request->zone = 'inventore';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ex';
    $request->fields = 'quaerat';
    $request->instance = 'aliquid';
    $request->key = 'eum';
    $request->oauthToken = 'quaerat';
    $request->port = 315151;
    $request->prettyPrint = false;
    $request->project = 'cumque';
    $request->quotaUser = 'ab';
    $request->start = 'quibusdam';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'et';
    $request->userIp = 'delectus';
    $request->zone = 'explicabo';

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
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aspernatur';
    $request->fields = 'sapiente';
    $request->instance = 'nemo';
    $request->key = 'laboriosam';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->project = 'quidem';
    $request->quotaUser = 'iusto';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'reiciendis';
    $request->userIp = 'a';
    $request->zone = 'consequatur';

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

## computeInstancesGetShieldedVmIdentity

Returns the Shielded VM Identity of an instance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetShieldedVmIdentityRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetShieldedVmIdentitySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetShieldedVmIdentitySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetShieldedVmIdentitySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesGetShieldedVmIdentitySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesGetShieldedVmIdentityRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eos';
    $request->fields = 'veritatis';
    $request->instance = 'vel';
    $request->key = 'placeat';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->project = 'saepe';
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'veritatis';
    $request->userIp = 'harum';
    $request->zone = 'cumque';

    $requestSecurity = new ComputeInstancesGetShieldedVmIdentitySecurity();
    $requestSecurity->option1 = new ComputeInstancesGetShieldedVmIdentitySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesGetShieldedVmIdentity($request, $requestSecurity);

    if ($response->shieldedVmIdentity !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\InstancePostKeyRevocationActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancePrivateIpv6GoogleAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinity;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinityConsumeReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatusScheduling;
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
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceIntegrityPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedVmConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedVmIntegrityPolicy;
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
    $request->instance->advancedMachineFeatures->threadsPerCore = 406575;
    $request->instance->advancedMachineFeatures->visibleCoreCount = 219804;
    $request->instance->canIpForward = false;
    $request->instance->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->instance->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->instance->cpuPlatform = 'officiis';
    $request->instance->creationTimestamp = 'sed';
    $request->instance->deletionProtection = false;
    $request->instance->description = 'quam';
    $request->instance->disks = [
        new AttachedDisk(),
        new AttachedDisk(),
        new AttachedDisk(),
    ];
    $request->instance->displayDevice = new DisplayDevice();
    $request->instance->displayDevice->enableDisplay = false;
    $request->instance->eraseWindowsVssSignature = false;
    $request->instance->fingerprint = 'harum';
    $request->instance->guestAccelerators = [
        new AcceleratorConfig(),
    ];
    $request->instance->hostname = 'self-assured-baggie.name';
    $request->instance->id = 'aliquam';
    $request->instance->instanceEncryptionKey = new CustomerEncryptionKey();
    $request->instance->instanceEncryptionKey->kmsKeyName = 'vero';
    $request->instance->instanceEncryptionKey->kmsKeyServiceAccount = 'dolorum';
    $request->instance->instanceEncryptionKey->rawKey = 'omnis';
    $request->instance->instanceEncryptionKey->rsaEncryptedKey = 'occaecati';
    $request->instance->instanceEncryptionKey->sha256 = 'consequuntur';
    $request->instance->keyRevocationActionType = InstanceKeyRevocationActionTypeEnum::KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
    $request->instance->kind = 'quam';
    $request->instance->labelFingerprint = 'repellendus';
    $request->instance->labels = [
        'incidunt' => 'asperiores',
    ];
    $request->instance->lastStartTimestamp = 'eius';
    $request->instance->lastStopTimestamp = 'ipsa';
    $request->instance->lastSuspendedTimestamp = 'quas';
    $request->instance->machineType = 'incidunt';
    $request->instance->metadata = new Metadata();
    $request->instance->metadata->fingerprint = 'iusto';
    $request->instance->metadata->items = [
        new MetadataItems(),
        new MetadataItems(),
        new MetadataItems(),
    ];
    $request->instance->metadata->kind = 'in';
    $request->instance->minCpuPlatform = 'numquam';
    $request->instance->name = 'Kari Labadie';
    $request->instance->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->instance->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->instance->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::DEFAULT;
    $request->instance->params = new InstanceParams();
    $request->instance->params->resourceManagerTags = [
        'tempore' => 'facere',
        'earum' => 'debitis',
        'impedit' => 'reiciendis',
        'ex' => 'tempore',
    ];
    $request->instance->postKeyRevocationActionType = InstancePostKeyRevocationActionTypeEnum::POST_KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
    $request->instance->privateIpv6GoogleAccess = InstancePrivateIpv6GoogleAccessEnum::ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE;
    $request->instance->reservationAffinity = new ReservationAffinity();
    $request->instance->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::SPECIFIC_THEN_ANY_RESERVATION;
    $request->instance->reservationAffinity->key = 'maxime';
    $request->instance->reservationAffinity->values = [
        'consectetur',
        'corporis',
    ];
    $request->instance->resourcePolicies = [
        'aspernatur',
        'eveniet',
    ];
    $request->instance->resourceStatus = new ResourceStatus();
    $request->instance->resourceStatus->physicalHost = 'tempore';
    $request->instance->resourceStatus->scheduling = new ResourceStatusScheduling();
    $request->instance->resourceStatus->scheduling->terminationTimestamp = 'asperiores';
    $request->instance->satisfiesPzs = false;
    $request->instance->scheduling = new Scheduling();
    $request->instance->scheduling->automaticRestart = false;
    $request->instance->scheduling->hostErrorTimeoutSeconds = 838509;
    $request->instance->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::STOP;
    $request->instance->scheduling->locationHint = 'enim';
    $request->instance->scheduling->maintenanceFreezeDurationHours = 368658;
    $request->instance->scheduling->maintenanceInterval = SchedulingMaintenanceIntervalEnum::PERIODIC;
    $request->instance->scheduling->maxRunDuration = new Duration();
    $request->instance->scheduling->maxRunDuration->nanos = 783508;
    $request->instance->scheduling->maxRunDuration->seconds = 'dolores';
    $request->instance->scheduling->minNodeCpus = 610213;
    $request->instance->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->instance->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::TERMINATE;
    $request->instance->scheduling->preemptible = false;
    $request->instance->scheduling->provisioningModel = SchedulingProvisioningModelEnum::SPOT;
    $request->instance->scheduling->terminationTime = 'ea';
    $request->instance->selfLink = 'consequatur';
    $request->instance->serviceAccounts = [
        new ServiceAccount(),
        new ServiceAccount(),
        new ServiceAccount(),
    ];
    $request->instance->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->instance->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->instance->shieldedInstanceConfig->enableSecureBoot = false;
    $request->instance->shieldedInstanceConfig->enableVtpm = false;
    $request->instance->shieldedInstanceIntegrityPolicy = new ShieldedInstanceIntegrityPolicy();
    $request->instance->shieldedInstanceIntegrityPolicy->updateAutoLearnPolicy = false;
    $request->instance->shieldedVmConfig = new ShieldedVmConfig();
    $request->instance->shieldedVmConfig->enableIntegrityMonitoring = false;
    $request->instance->shieldedVmConfig->enableSecureBoot = false;
    $request->instance->shieldedVmConfig->enableVtpm = false;
    $request->instance->shieldedVmIntegrityPolicy = new ShieldedVmIntegrityPolicy();
    $request->instance->shieldedVmIntegrityPolicy->updateAutoLearnPolicy = false;
    $request->instance->sourceMachineImage = 'accusantium';
    $request->instance->sourceMachineImageEncryptionKey = new CustomerEncryptionKey();
    $request->instance->sourceMachineImageEncryptionKey->kmsKeyName = 'ea';
    $request->instance->sourceMachineImageEncryptionKey->kmsKeyServiceAccount = 'laborum';
    $request->instance->sourceMachineImageEncryptionKey->rawKey = 'et';
    $request->instance->sourceMachineImageEncryptionKey->rsaEncryptedKey = 'fugit';
    $request->instance->sourceMachineImageEncryptionKey->sha256 = 'quos';
    $request->instance->startRestricted = false;
    $request->instance->status = InstanceStatusEnum::STAGING;
    $request->instance->statusMessage = 'voluptate';
    $request->instance->tags = new Tags();
    $request->instance->tags->fingerprint = 'autem';
    $request->instance->tags->items = [
        'voluptates',
        'debitis',
    ];
    $request->instance->zone = 'earum';
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'doloremque';
    $request->fields = 'porro';
    $request->key = 'suscipit';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->project = 'vel';
    $request->quotaUser = 'itaque';
    $request->requestId = 'nulla';
    $request->sourceInstanceTemplate = 'excepturi';
    $request->sourceMachineImage = 'quod';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'nesciunt';
    $request->userIp = 'temporibus';
    $request->zone = 'temporibus';

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
    $request->accessToken = 'non';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nostrum';
    $request->fields = 'dignissimos';
    $request->filter = 'illo';
    $request->key = 'corporis';
    $request->maxResults = 55356;
    $request->oauthToken = 'occaecati';
    $request->orderBy = 'dolorum';
    $request->pageToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'deleniti';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'doloremque';
    $request->userIp = 'quibusdam';
    $request->zone = 'adipisci';

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
    $request->accessToken = 'veniam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'architecto';
    $request->fields = 'maiores';
    $request->filter = 'perspiciatis';
    $request->instance = 'quod';
    $request->key = 'magni';
    $request->maxResults = 274844;
    $request->oauthToken = 'fugit';
    $request->orderBy = 'quisquam';
    $request->pageToken = 'odio';
    $request->prettyPrint = false;
    $request->project = 'quidem';
    $request->quotaUser = 'iure';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'culpa';
    $request->userIp = 'illo';
    $request->zone = 'reiciendis';

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
        'quod',
    ];
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'facere';
    $request->fields = 'repellat';
    $request->instance = 'exercitationem';
    $request->key = 'quidem';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->project = 'molestiae';
    $request->quotaUser = 'vitae';
    $request->requestId = 'excepturi';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iste';
    $request->userIp = 'eaque';
    $request->zone = 'reiciendis';

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
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'nobis';
    $request->instance = 'expedita';
    $request->key = 'modi';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->project = 'atque';
    $request->quotaUser = 'at';
    $request->requestId = 'rem';
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'tempore';
    $request->userIp = 'eos';
    $request->zone = 'laboriosam';

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
use \OpenAPI\OpenAPI\Models\Shared\InstancesResumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomerEncryptionKeyProtectedDisk;
use \OpenAPI\OpenAPI\Models\Shared\CustomerEncryptionKey;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesResumeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesResumeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesResumeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesResumeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instancesResumeRequest = new InstancesResumeRequest();
    $request->instancesResumeRequest->disks = [
        new CustomerEncryptionKeyProtectedDisk(),
        new CustomerEncryptionKeyProtectedDisk(),
    ];
    $request->instancesResumeRequest->instanceEncryptionKey = new CustomerEncryptionKey();
    $request->instancesResumeRequest->instanceEncryptionKey->kmsKeyName = 'perspiciatis';
    $request->instancesResumeRequest->instanceEncryptionKey->kmsKeyServiceAccount = 'dicta';
    $request->instancesResumeRequest->instanceEncryptionKey->rawKey = 'assumenda';
    $request->instancesResumeRequest->instanceEncryptionKey->rsaEncryptedKey = 'reprehenderit';
    $request->instancesResumeRequest->instanceEncryptionKey->sha256 = 'tempora';
    $request->accessToken = 'ad';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sequi';
    $request->fields = 'eligendi';
    $request->instance = 'consequuntur';
    $request->key = 'quae';
    $request->oauthToken = 'veniam';
    $request->prettyPrint = false;
    $request->project = 'sint';
    $request->quotaUser = 'minus';
    $request->requestId = 'excepturi';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'nesciunt';
    $request->userIp = 'maiores';
    $request->zone = 'veniam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aperiam';
    $request->fields = 'itaque';
    $request->instance = 'sed';
    $request->key = 'corporis';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->project = 'odio';
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'nobis';
    $request->userIp = 'beatae';
    $request->zone = 'repellendus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nobis';
    $request->deletionProtection = false;
    $request->fields = 'possimus';
    $request->key = 'laborum';
    $request->oauthToken = 'optio';
    $request->prettyPrint = false;
    $request->project = 'debitis';
    $request->quotaUser = 'architecto';
    $request->requestId = 'reiciendis';
    $request->resource = 'consequatur';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'odit';
    $request->userIp = 'inventore';
    $request->zone = 'laboriosam';

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
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::JSON;
    $request->autoDelete = false;
    $request->callback = 'aspernatur';
    $request->deviceName = 'sequi';
    $request->fields = 'sint';
    $request->instance = 'accusamus';
    $request->key = 'deleniti';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->project = 'consequuntur';
    $request->quotaUser = 'enim';
    $request->requestId = 'minus';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'accusantium';
    $request->userIp = 'nulla';
    $request->zone = 'inventore';

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
    $request->zoneSetPolicyRequest->etag = 'excepturi';
    $request->zoneSetPolicyRequest->policy = new Policy();
    $request->zoneSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->zoneSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->zoneSetPolicyRequest->policy->etag = 'doloribus';
    $request->zoneSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
    ];
    $request->zoneSetPolicyRequest->policy->version = 236372;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'velit';
    $request->fields = 'sint';
    $request->key = 'eos';
    $request->oauthToken = 'nisi';
    $request->prettyPrint = false;
    $request->project = 'commodi';
    $request->quotaUser = 'impedit';
    $request->resource = 'facilis';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'error';
    $request->userIp = 'quaerat';
    $request->zone = 'delectus';

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
    $request->instancesSetLabelsRequest->labelFingerprint = 'deserunt';
    $request->instancesSetLabelsRequest->labels = [
        'odit' => 'rerum',
        'consequuntur' => 'magnam',
        'et' => 'et',
    ];
    $request->accessToken = 'ratione';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perspiciatis';
    $request->fields = 'nostrum';
    $request->instance = 'temporibus';
    $request->key = 'et';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->project = 'nisi';
    $request->quotaUser = 'aliquid';
    $request->requestId = 'excepturi';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'repellat';
    $request->userIp = 'placeat';
    $request->zone = 'eligendi';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instancesSetMachineResourcesRequest = new InstancesSetMachineResourcesRequest();
    $request->instancesSetMachineResourcesRequest->guestAccelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolores';
    $request->fields = 'dicta';
    $request->instance = 'molestiae';
    $request->key = 'maxime';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->project = 'molestias';
    $request->quotaUser = 'quam';
    $request->requestId = 'molestiae';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'voluptate';
    $request->userIp = 'eum';
    $request->zone = 'consectetur';

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
    $request->instancesSetMachineTypeRequest->machineType = 'tempora';
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'incidunt';
    $request->fields = 'alias';
    $request->instance = 'adipisci';
    $request->key = 'atque';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->project = 'asperiores';
    $request->quotaUser = 'distinctio';
    $request->requestId = 'minima';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'molestiae';
    $request->userIp = 'et';
    $request->zone = 'accusamus';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->metadata = new Metadata();
    $request->metadata->fingerprint = 'deleniti';
    $request->metadata->items = [
        new MetadataItems(),
    ];
    $request->metadata->kind = 'perspiciatis';
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ullam';
    $request->fields = 'molestiae';
    $request->instance = 'adipisci';
    $request->key = 'totam';
    $request->oauthToken = 'perspiciatis';
    $request->prettyPrint = false;
    $request->project = 'optio';
    $request->quotaUser = 'itaque';
    $request->requestId = 'at';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'id';
    $request->userIp = 'cumque';
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instancesSetMinCpuPlatformRequest = new InstancesSetMinCpuPlatformRequest();
    $request->instancesSetMinCpuPlatformRequest->minCpuPlatform = 'quibusdam';
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::JSON;
    $request->callback = 'occaecati';
    $request->fields = 'exercitationem';
    $request->instance = 'unde';
    $request->key = 'labore';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->project = 'vel';
    $request->quotaUser = 'laboriosam';
    $request->requestId = 'soluta';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'magni';
    $request->userIp = 'mollitia';
    $request->zone = 'officiis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instancesSetNameRequest = new InstancesSetNameRequest();
    $request->instancesSetNameRequest->currentName = 'quas';
    $request->instancesSetNameRequest->name = 'Wilma Ebert';
    $request->accessToken = 'iste';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->fields = 'tempora';
    $request->instance = 'libero';
    $request->key = 'iure';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->project = 'id';
    $request->quotaUser = 'qui';
    $request->requestId = 'explicabo';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'eum';
    $request->userIp = 'nesciunt';
    $request->zone = 'commodi';

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
use \OpenAPI\OpenAPI\Models\Shared\SchedulingMaintenanceIntervalEnum;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->scheduling = new Scheduling();
    $request->scheduling->automaticRestart = false;
    $request->scheduling->hostErrorTimeoutSeconds = 542601;
    $request->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::DELETE;
    $request->scheduling->locationHint = 'totam';
    $request->scheduling->maintenanceFreezeDurationHours = 371045;
    $request->scheduling->maintenanceInterval = SchedulingMaintenanceIntervalEnum::PERIODIC;
    $request->scheduling->maxRunDuration = new Duration();
    $request->scheduling->maxRunDuration->nanos = 367727;
    $request->scheduling->maxRunDuration->seconds = 'sequi';
    $request->scheduling->minNodeCpus = 762734;
    $request->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::MIGRATE;
    $request->scheduling->preemptible = false;
    $request->scheduling->provisioningModel = SchedulingProvisioningModelEnum::SPOT;
    $request->scheduling->terminationTime = 'accusantium';
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempore';
    $request->fields = 'necessitatibus';
    $request->instance = 'reiciendis';
    $request->key = 'incidunt';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->project = 'dolores';
    $request->quotaUser = 'illo';
    $request->requestId = 'recusandae';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'magni';
    $request->userIp = 'sit';
    $request->zone = 'voluptas';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instancesSetServiceAccountRequest = new InstancesSetServiceAccountRequest();
    $request->instancesSetServiceAccountRequest->email = 'Jarod.Gibson@hotmail.com';
    $request->instancesSetServiceAccountRequest->scopes = [
        'aliquid',
        'officia',
    ];
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eveniet';
    $request->fields = 'eveniet';
    $request->instance = 'voluptatem';
    $request->key = 'repellat';
    $request->oauthToken = 'magni';
    $request->prettyPrint = false;
    $request->project = 'libero';
    $request->quotaUser = 'sapiente';
    $request->requestId = 'veritatis';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'veniam';
    $request->userIp = 'quos';
    $request->zone = 'totam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->shieldedInstanceIntegrityPolicy = new ShieldedInstanceIntegrityPolicy();
    $request->shieldedInstanceIntegrityPolicy->updateAutoLearnPolicy = false;
    $request->accessToken = 'eius';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vero';
    $request->fields = 'aut';
    $request->instance = 'sequi';
    $request->key = 'reiciendis';
    $request->oauthToken = 'neque';
    $request->prettyPrint = false;
    $request->project = 'assumenda';
    $request->quotaUser = 'saepe';
    $request->requestId = 'nobis';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'quia';
    $request->userIp = 'natus';
    $request->zone = 'molestiae';

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

## computeInstancesSetShieldedVmIntegrityPolicy

Sets the Shielded VM integrity policy for a VM instance. You can only use this method on a running VM instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetShieldedVmIntegrityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedVmIntegrityPolicy;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetShieldedVmIntegrityPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetShieldedVmIntegrityPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetShieldedVmIntegrityPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesSetShieldedVmIntegrityPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->shieldedVmIntegrityPolicy = new ShieldedVmIntegrityPolicy();
    $request->shieldedVmIntegrityPolicy->updateAutoLearnPolicy = false;
    $request->accessToken = 'earum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'itaque';
    $request->fields = 'cupiditate';
    $request->instance = 'consequatur';
    $request->key = 'harum';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->project = 'numquam';
    $request->quotaUser = 'consequatur';
    $request->requestId = 'temporibus';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'quos';
    $request->userIp = 'commodi';
    $request->zone = 'blanditiis';

    $requestSecurity = new ComputeInstancesSetShieldedVmIntegrityPolicySecurity();
    $requestSecurity->option1 = new ComputeInstancesSetShieldedVmIntegrityPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesSetShieldedVmIntegrityPolicy($request, $requestSecurity);

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->tags = new Tags();
    $request->tags->fingerprint = 'nulla';
    $request->tags->items = [
        'ratione',
        'dolore',
    ];
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'impedit';
    $request->fields = 'libero';
    $request->instance = 'dolor';
    $request->key = 'nesciunt';
    $request->oauthToken = 'vitae';
    $request->prettyPrint = false;
    $request->project = 'pariatur';
    $request->quotaUser = 'numquam';
    $request->requestId = 'provident';
    $request->uploadType = 'quia';
    $request->uploadProtocol = 'reiciendis';
    $request->userIp = 'modi';
    $request->zone = 'doloribus';

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
    $request->accessToken = 'qui';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'a';
    $request->fields = 'quidem';
    $request->instance = 'aperiam';
    $request->key = 'saepe';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->project = 'soluta';
    $request->quotaUser = 'hic';
    $request->requestId = 'beatae';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'deleniti';
    $request->userIp = 'fugit';
    $request->zone = 'inventore';

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
    $request->accessToken = 'sint';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatum';
    $request->fields = 'nulla';
    $request->instance = 'consequatur';
    $request->key = 'similique';
    $request->oauthToken = 'eligendi';
    $request->prettyPrint = false;
    $request->project = 'impedit';
    $request->quotaUser = 'officia';
    $request->requestId = 'odio';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'mollitia';
    $request->userIp = 'repudiandae';
    $request->zone = 'tempore';

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
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequuntur';
    $request->fields = 'architecto';
    $request->instance = 'est';
    $request->key = 'nemo';
    $request->oauthToken = 'magni';
    $request->prettyPrint = false;
    $request->project = 'quae';
    $request->quotaUser = 'quaerat';
    $request->requestId = 'suscipit';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'laboriosam';
    $request->userIp = 'aliquam';
    $request->zone = 'repudiandae';

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
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facilis';
    $request->discardLocalSsd = false;
    $request->fields = 'doloremque';
    $request->instance = 'officiis';
    $request->key = 'nisi';
    $request->oauthToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->project = 'necessitatibus';
    $request->quotaUser = 'alias';
    $request->requestId = 'provident';
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'hic';
    $request->userIp = 'facere';
    $request->zone = 'tenetur';

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
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'exercitationem';
    $request->discardLocalSsd = false;
    $request->fields = 'dolore';
    $request->instance = 'sit';
    $request->key = 'recusandae';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->project = 'exercitationem';
    $request->quotaUser = 'neque';
    $request->requestId = 'mollitia';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'ut';
    $request->userIp = 'est';
    $request->zone = 'quasi';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'sapiente',
        'recusandae',
        'perspiciatis',
    ];
    $request->accessToken = 'natus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'sunt';
    $request->key = 'fuga';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->project = 'cumque';
    $request->quotaUser = 'aperiam';
    $request->resource = 'ad';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'quas';
    $request->userIp = 'quis';
    $request->zone = 'fuga';

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
use \OpenAPI\OpenAPI\Models\Shared\InstancePostKeyRevocationActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancePrivateIpv6GoogleAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinity;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinityConsumeReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatusScheduling;
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
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceIntegrityPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedVmConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedVmIntegrityPolicy;
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instance1 = new Instance();
    $request->instance1->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->instance1->advancedMachineFeatures->enableNestedVirtualization = false;
    $request->instance1->advancedMachineFeatures->enableUefiNetworking = false;
    $request->instance1->advancedMachineFeatures->threadsPerCore = 160353;
    $request->instance1->advancedMachineFeatures->visibleCoreCount = 850623;
    $request->instance1->canIpForward = false;
    $request->instance1->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->instance1->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->instance1->cpuPlatform = 'delectus';
    $request->instance1->creationTimestamp = 'rerum';
    $request->instance1->deletionProtection = false;
    $request->instance1->description = 'voluptate';
    $request->instance1->disks = [
        new AttachedDisk(),
    ];
    $request->instance1->displayDevice = new DisplayDevice();
    $request->instance1->displayDevice->enableDisplay = false;
    $request->instance1->eraseWindowsVssSignature = false;
    $request->instance1->fingerprint = 'maiores';
    $request->instance1->guestAccelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->instance1->hostname = 'deserted-millennium.info';
    $request->instance1->id = 'non';
    $request->instance1->instanceEncryptionKey = new CustomerEncryptionKey();
    $request->instance1->instanceEncryptionKey->kmsKeyName = 'magni';
    $request->instance1->instanceEncryptionKey->kmsKeyServiceAccount = 'sint';
    $request->instance1->instanceEncryptionKey->rawKey = 'consequatur';
    $request->instance1->instanceEncryptionKey->rsaEncryptedKey = 'illum';
    $request->instance1->instanceEncryptionKey->sha256 = 'adipisci';
    $request->instance1->keyRevocationActionType = InstanceKeyRevocationActionTypeEnum::KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
    $request->instance1->kind = 'ex';
    $request->instance1->labelFingerprint = 'quis';
    $request->instance1->labels = [
        'et' => 'officiis',
        'quo' => 'culpa',
    ];
    $request->instance1->lastStartTimestamp = 'architecto';
    $request->instance1->lastStopTimestamp = 'iure';
    $request->instance1->lastSuspendedTimestamp = 'eveniet';
    $request->instance1->machineType = 'doloribus';
    $request->instance1->metadata = new Metadata();
    $request->instance1->metadata->fingerprint = 'praesentium';
    $request->instance1->metadata->items = [
        new MetadataItems(),
        new MetadataItems(),
        new MetadataItems(),
    ];
    $request->instance1->metadata->kind = 'tempora';
    $request->instance1->minCpuPlatform = 'ad';
    $request->instance1->name = 'Opal Schumm';
    $request->instance1->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->instance1->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->instance1->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::TIER1;
    $request->instance1->params = new InstanceParams();
    $request->instance1->params->resourceManagerTags = [
        'nam' => 'nemo',
        'veritatis' => 'molestias',
        'impedit' => 'modi',
        'possimus' => 'similique',
    ];
    $request->instance1->postKeyRevocationActionType = InstancePostKeyRevocationActionTypeEnum::NOOP;
    $request->instance1->privateIpv6GoogleAccess = InstancePrivateIpv6GoogleAccessEnum::INHERIT_FROM_SUBNETWORK;
    $request->instance1->reservationAffinity = new ReservationAffinity();
    $request->instance1->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::SPECIFIC_THEN_ANY_RESERVATION;
    $request->instance1->reservationAffinity->key = 'repellendus';
    $request->instance1->reservationAffinity->values = [
        'nemo',
    ];
    $request->instance1->resourcePolicies = [
        'quasi',
        'odit',
    ];
    $request->instance1->resourceStatus = new ResourceStatus();
    $request->instance1->resourceStatus->physicalHost = 'delectus';
    $request->instance1->resourceStatus->scheduling = new ResourceStatusScheduling();
    $request->instance1->resourceStatus->scheduling->terminationTimestamp = 'doloremque';
    $request->instance1->satisfiesPzs = false;
    $request->instance1->scheduling = new Scheduling();
    $request->instance1->scheduling->automaticRestart = false;
    $request->instance1->scheduling->hostErrorTimeoutSeconds = 389585;
    $request->instance1->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::STOP;
    $request->instance1->scheduling->locationHint = 'dolore';
    $request->instance1->scheduling->maintenanceFreezeDurationHours = 932883;
    $request->instance1->scheduling->maintenanceInterval = SchedulingMaintenanceIntervalEnum::PERIODIC;
    $request->instance1->scheduling->maxRunDuration = new Duration();
    $request->instance1->scheduling->maxRunDuration->nanos = 316335;
    $request->instance1->scheduling->maxRunDuration->seconds = 'nam';
    $request->instance1->scheduling->minNodeCpus = 489923;
    $request->instance1->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
    ];
    $request->instance1->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::TERMINATE;
    $request->instance1->scheduling->preemptible = false;
    $request->instance1->scheduling->provisioningModel = SchedulingProvisioningModelEnum::SPOT;
    $request->instance1->scheduling->terminationTime = 'doloribus';
    $request->instance1->selfLink = 'nemo';
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
    $request->instance1->shieldedVmConfig = new ShieldedVmConfig();
    $request->instance1->shieldedVmConfig->enableIntegrityMonitoring = false;
    $request->instance1->shieldedVmConfig->enableSecureBoot = false;
    $request->instance1->shieldedVmConfig->enableVtpm = false;
    $request->instance1->shieldedVmIntegrityPolicy = new ShieldedVmIntegrityPolicy();
    $request->instance1->shieldedVmIntegrityPolicy->updateAutoLearnPolicy = false;
    $request->instance1->sourceMachineImage = 'corrupti';
    $request->instance1->sourceMachineImageEncryptionKey = new CustomerEncryptionKey();
    $request->instance1->sourceMachineImageEncryptionKey->kmsKeyName = 'exercitationem';
    $request->instance1->sourceMachineImageEncryptionKey->kmsKeyServiceAccount = 'commodi';
    $request->instance1->sourceMachineImageEncryptionKey->rawKey = 'laudantium';
    $request->instance1->sourceMachineImageEncryptionKey->rsaEncryptedKey = 'est';
    $request->instance1->sourceMachineImageEncryptionKey->sha256 = 'consequatur';
    $request->instance1->startRestricted = false;
    $request->instance1->status = InstanceStatusEnum::REPAIRING;
    $request->instance1->statusMessage = 'dolores';
    $request->instance1->tags = new Tags();
    $request->instance1->tags->fingerprint = 'labore';
    $request->instance1->tags->items = [
        'consequatur',
        'voluptatem',
        'officia',
        'architecto',
    ];
    $request->instance1->zone = 'quibusdam';
    $request->accessToken = 'autem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempore';
    $request->fields = 'cupiditate';
    $request->instancePathParameter = 'modi';
    $request->key = 'ratione';
    $request->minimalAction = ComputeInstancesUpdateMinimalActionEnum::NO_EFFECT;
    $request->mostDisruptiveAllowedAction = ComputeInstancesUpdateMostDisruptiveAllowedActionEnum::NO_EFFECT;
    $request->oauthToken = 'aliquam';
    $request->prettyPrint = false;
    $request->project = 'corporis';
    $request->quotaUser = 'at';
    $request->requestId = 'ipsa';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'aut';
    $request->userIp = 'molestias';
    $request->zone = 'quaerat';

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
    $request->accessConfig->externalIpv6 = 'expedita';
    $request->accessConfig->externalIpv6PrefixLength = 728466;
    $request->accessConfig->kind = 'mollitia';
    $request->accessConfig->name = 'Erma Runolfsson';
    $request->accessConfig->natIP = 'tenetur';
    $request->accessConfig->networkTier = AccessConfigNetworkTierEnum::PREMIUM;
    $request->accessConfig->publicPtrDomainName = 'quod';
    $request->accessConfig->setPublicPtr = false;
    $request->accessConfig->type = AccessConfigTypeEnum::ONE_TO_ONE_NAT;
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->fields = 'debitis';
    $request->instance = 'enim';
    $request->key = 'quasi';
    $request->networkInterface = 'accusamus';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->project = 'aspernatur';
    $request->quotaUser = 'atque';
    $request->requestId = 'animi';
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'ad';
    $request->userIp = 'mollitia';
    $request->zone = 'minus';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->displayDevice = new DisplayDevice();
    $request->displayDevice->enableDisplay = false;
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'praesentium';
    $request->fields = 'ullam';
    $request->instance = 'maiores';
    $request->key = 'corrupti';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->project = 'placeat';
    $request->quotaUser = 'explicabo';
    $request->requestId = 'placeat';
    $request->uploadType = 'animi';
    $request->uploadProtocol = 'expedita';
    $request->userIp = 'laborum';
    $request->zone = 'atque';

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
    ];
    $request->networkInterface1->aliasIpRanges = [
        new AliasIpRange(),
        new AliasIpRange(),
    ];
    $request->networkInterface1->fingerprint = 'veritatis';
    $request->networkInterface1->internalIpv6PrefixLength = 146820;
    $request->networkInterface1->ipv6AccessConfigs = [
        new AccessConfig(),
        new AccessConfig(),
    ];
    $request->networkInterface1->ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum::INTERNAL;
    $request->networkInterface1->ipv6Address = 'nulla';
    $request->networkInterface1->kind = 'nemo';
    $request->networkInterface1->name = 'Gabriel Weissnat';
    $request->networkInterface1->network = 'esse';
    $request->networkInterface1->networkAttachment = 'quasi';
    $request->networkInterface1->networkIP = 'inventore';
    $request->networkInterface1->nicType = NetworkInterfaceNicTypeEnum::UNSPECIFIED_NIC_TYPE;
    $request->networkInterface1->queueCount = 661028;
    $request->networkInterface1->stackType = NetworkInterfaceStackTypeEnum::IPV4_IPV6;
    $request->networkInterface1->subnetwork = 'distinctio';
    $request->accessToken = 'porro';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'numquam';
    $request->fields = 'rerum';
    $request->instance = 'atque';
    $request->key = 'aliquid';
    $request->networkInterfaceQueryParameter = 'placeat';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->project = 'quisquam';
    $request->quotaUser = 'impedit';
    $request->requestId = 'ducimus';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'voluptatibus';
    $request->userIp = 'nihil';
    $request->zone = 'ducimus';

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
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquam';
    $request->fields = 'totam';
    $request->instance = 'soluta';
    $request->key = 'quibusdam';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->project = 'mollitia';
    $request->quotaUser = 'autem';
    $request->requestId = 'hic';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'tempora';
    $request->userIp = 'aliquam';
    $request->zone = 'architecto';

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

## computeInstancesUpdateShieldedVmConfig

Updates the Shielded VM config for a VM instance. You can only use this method on a stopped VM instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateShieldedVmConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedVmConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateShieldedVmConfigSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateShieldedVmConfigSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateShieldedVmConfigSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesUpdateShieldedVmConfigRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->shieldedVmConfig = new ShieldedVmConfig();
    $request->shieldedVmConfig->enableIntegrityMonitoring = false;
    $request->shieldedVmConfig->enableSecureBoot = false;
    $request->shieldedVmConfig->enableVtpm = false;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ratione';
    $request->fields = 'soluta';
    $request->instance = 'quos';
    $request->key = 'sit';
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->project = 'sit';
    $request->quotaUser = 'perspiciatis';
    $request->requestId = 'quaerat';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'molestiae';
    $request->userIp = 'adipisci';
    $request->zone = 'eveniet';

    $requestSecurity = new ComputeInstancesUpdateShieldedVmConfigSecurity();
    $requestSecurity->option1 = new ComputeInstancesUpdateShieldedVmConfigSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesUpdateShieldedVmConfig($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
