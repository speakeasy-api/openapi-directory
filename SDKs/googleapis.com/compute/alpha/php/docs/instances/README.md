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
* [computeInstancesPerformMaintenance](#computeinstancesperformmaintenance) - Perform a manual maintenance on the instance.
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
* [computeInstancesSetSecurityPolicy](#computeinstancessetsecuritypolicy) - Sets the Google Cloud Armor security policy for the specified instance. For more information, see Google Cloud Armor Overview
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
    $request->accessConfig->externalIpv6 = 'libero';
    $request->accessConfig->externalIpv6PrefixLength = 474124;
    $request->accessConfig->kind = 'eius';
    $request->accessConfig->name = 'Marvin Jacobson';
    $request->accessConfig->natIP = 'quisquam';
    $request->accessConfig->networkTier = AccessConfigNetworkTierEnum::SELECT;
    $request->accessConfig->publicDnsName = 'eveniet';
    $request->accessConfig->publicPtrDomainName = 'eveniet';
    $request->accessConfig->securityPolicy = 'voluptatem';
    $request->accessConfig->setPublicDns = false;
    $request->accessConfig->setPublicPtr = false;
    $request->accessConfig->type = AccessConfigTypeEnum::ONE_TO_ONE_NAT;
    $request->accessToken = 'magni';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sapiente';
    $request->fields = 'veritatis';
    $request->instance = 'provident';
    $request->key = 'veniam';
    $request->networkInterface = 'quos';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->project = 'facere';
    $request->quotaUser = 'eius';
    $request->requestId = 'doloremque';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'aut';
    $request->userIp = 'sequi';
    $request->zone = 'reiciendis';

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
        'saepe',
        'nobis',
        'est',
        'quia',
    ];
    $request->accessToken = 'natus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->fields = 'earum';
    $request->instance = 'ipsum';
    $request->key = 'itaque';
    $request->oauthToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->project = 'consequatur';
    $request->quotaUser = 'harum';
    $request->requestId = 'nobis';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'consequatur';
    $request->userIp = 'temporibus';
    $request->zone = 'doloribus';

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
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->fields = 'nulla';
    $request->filter = 'nemo';
    $request->includeAllScopes = false;
    $request->key = 'ratione';
    $request->maxResults = 293187;
    $request->oauthToken = 'perferendis';
    $request->orderBy = 'enim';
    $request->pageToken = 'impedit';
    $request->prettyPrint = false;
    $request->project = 'libero';
    $request->quotaUser = 'dolor';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'vitae';
    $request->userIp = 'pariatur';

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
use \OpenAPI\OpenAPI\Models\Shared\AttachedDiskInitializeParamsInterfaceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDiskInitializeParamsOnUpdateActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDiskInterfaceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDiskModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDiskSavedStateEnum;
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
    $request->attachedDisk->architecture = AttachedDiskArchitectureEnum::ARM64;
    $request->attachedDisk->autoDelete = false;
    $request->attachedDisk->boot = false;
    $request->attachedDisk->deviceName = 'quia';
    $request->attachedDisk->diskEncryptionKey = new CustomerEncryptionKey();
    $request->attachedDisk->diskEncryptionKey->kmsKeyName = 'reiciendis';
    $request->attachedDisk->diskEncryptionKey->kmsKeyServiceAccount = 'modi';
    $request->attachedDisk->diskEncryptionKey->rawKey = 'doloribus';
    $request->attachedDisk->diskEncryptionKey->rsaEncryptedKey = 'et';
    $request->attachedDisk->diskEncryptionKey->sha256 = 'qui';
    $request->attachedDisk->diskSizeGb = 'iusto';
    $request->attachedDisk->forceAttach = false;
    $request->attachedDisk->guestOsFeatures = [
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
    ];
    $request->attachedDisk->index = 694148;
    $request->attachedDisk->initializeParams = new AttachedDiskInitializeParams();
    $request->attachedDisk->initializeParams->architecture = AttachedDiskInitializeParamsArchitectureEnum::ARCHITECTURE_UNSPECIFIED;
    $request->attachedDisk->initializeParams->description = 'saepe';
    $request->attachedDisk->initializeParams->diskName = 'voluptatem';
    $request->attachedDisk->initializeParams->diskSizeGb = 'soluta';
    $request->attachedDisk->initializeParams->diskType = 'hic';
    $request->attachedDisk->initializeParams->guestOsFeatures = [
        new GuestOsFeature(),
    ];
    $request->attachedDisk->initializeParams->interface = AttachedDiskInitializeParamsInterfaceEnum::UNSPECIFIED;
    $request->attachedDisk->initializeParams->labels = [
        'fugit' => 'inventore',
        'reprehenderit' => 'sint',
        'dignissimos' => 'voluptatum',
    ];
    $request->attachedDisk->initializeParams->licenseCodes = [
        'consequatur',
        'similique',
        'eligendi',
        'impedit',
    ];
    $request->attachedDisk->initializeParams->licenses = [
        'odio',
        'voluptate',
        'mollitia',
    ];
    $request->attachedDisk->initializeParams->multiWriter = false;
    $request->attachedDisk->initializeParams->onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum::USE_EXISTING_DISK;
    $request->attachedDisk->initializeParams->provisionedIops = 'tempore';
    $request->attachedDisk->initializeParams->provisionedThroughput = 'voluptate';
    $request->attachedDisk->initializeParams->replicaZones = [
        'esse',
        'alias',
        'consequuntur',
    ];
    $request->attachedDisk->initializeParams->resourceManagerTags = [
        'est' => 'nemo',
    ];
    $request->attachedDisk->initializeParams->resourcePolicies = [
        'quae',
    ];
    $request->attachedDisk->initializeParams->sourceImage = 'quaerat';
    $request->attachedDisk->initializeParams->sourceImageEncryptionKey = new CustomerEncryptionKey();
    $request->attachedDisk->initializeParams->sourceImageEncryptionKey->kmsKeyName = 'suscipit';
    $request->attachedDisk->initializeParams->sourceImageEncryptionKey->kmsKeyServiceAccount = 'rerum';
    $request->attachedDisk->initializeParams->sourceImageEncryptionKey->rawKey = 'laboriosam';
    $request->attachedDisk->initializeParams->sourceImageEncryptionKey->rsaEncryptedKey = 'aliquam';
    $request->attachedDisk->initializeParams->sourceImageEncryptionKey->sha256 = 'repudiandae';
    $request->attachedDisk->initializeParams->sourceInstantSnapshot = 'unde';
    $request->attachedDisk->initializeParams->sourceSnapshot = 'excepturi';
    $request->attachedDisk->initializeParams->sourceSnapshotEncryptionKey = new CustomerEncryptionKey();
    $request->attachedDisk->initializeParams->sourceSnapshotEncryptionKey->kmsKeyName = 'voluptatibus';
    $request->attachedDisk->initializeParams->sourceSnapshotEncryptionKey->kmsKeyServiceAccount = 'facilis';
    $request->attachedDisk->initializeParams->sourceSnapshotEncryptionKey->rawKey = 'doloremque';
    $request->attachedDisk->initializeParams->sourceSnapshotEncryptionKey->rsaEncryptedKey = 'officiis';
    $request->attachedDisk->initializeParams->sourceSnapshotEncryptionKey->sha256 = 'nisi';
    $request->attachedDisk->initializeParams->storagePool = 'reprehenderit';
    $request->attachedDisk->interface = AttachedDiskInterfaceEnum::SCSI;
    $request->attachedDisk->kind = 'alias';
    $request->attachedDisk->licenses = [
        'ut',
        'hic',
        'facere',
    ];
    $request->attachedDisk->locked = false;
    $request->attachedDisk->mode = AttachedDiskModeEnum::READ_WRITE;
    $request->attachedDisk->savedState = AttachedDiskSavedStateEnum::PRESERVED;
    $request->attachedDisk->shieldedInstanceInitialState = new InitialStateConfig();
    $request->attachedDisk->shieldedInstanceInitialState->dbs = [
        new FileContentBuffer(),
        new FileContentBuffer(),
        new FileContentBuffer(),
        new FileContentBuffer(),
    ];
    $request->attachedDisk->shieldedInstanceInitialState->dbxs = [
        new FileContentBuffer(),
        new FileContentBuffer(),
    ];
    $request->attachedDisk->shieldedInstanceInitialState->keks = [
        new FileContentBuffer(),
        new FileContentBuffer(),
    ];
    $request->attachedDisk->shieldedInstanceInitialState->pk = new FileContentBuffer();
    $request->attachedDisk->shieldedInstanceInitialState->pk->content = 'dolore';
    $request->attachedDisk->shieldedInstanceInitialState->pk->fileType = FileContentBufferFileTypeEnum::BIN;
    $request->attachedDisk->source = 'recusandae';
    $request->attachedDisk->type = AttachedDiskTypeEnum::SCRATCH;
    $request->attachedDisk->userLicenses = [
        'neque',
        'mollitia',
    ];
    $request->accessToken = 'velit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'est';
    $request->fields = 'quasi';
    $request->forceAttach = false;
    $request->instance = 'rerum';
    $request->key = 'blanditiis';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'perspiciatis';
    $request->requestId = 'natus';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'dolorem';
    $request->userIp = 'sunt';
    $request->zone = 'fuga';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesBulkInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesBulkInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesBulkInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesBulkInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->bulkInsertInstanceResource = new BulkInsertInstanceResource();
    $request->bulkInsertInstanceResource->count = 'cumque';
    $request->bulkInsertInstanceResource->instanceProperties = new InstanceProperties();
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->enableNestedVirtualization = false;
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->enableUefiNetworking = false;
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->numaNodeCount = 44264;
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->performanceMonitoringUnit = AdvancedMachineFeaturesPerformanceMonitoringUnitEnum::ENHANCED;
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->threadsPerCore = 852229;
    $request->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->visibleCoreCount = 559209;
    $request->bulkInsertInstanceResource->instanceProperties->canIpForward = false;
    $request->bulkInsertInstanceResource->instanceProperties->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->bulkInsertInstanceResource->instanceProperties->confidentialInstanceConfig->confidentialInstanceType = ConfidentialInstanceConfigConfidentialInstanceTypeEnum::SEV;
    $request->bulkInsertInstanceResource->instanceProperties->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->bulkInsertInstanceResource->instanceProperties->description = 'fuga';
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
        'rerum' => 'voluptate',
        'perferendis' => 'maiores',
        'harum' => 'ratione',
        'molestias' => 'odio',
    ];
    $request->bulkInsertInstanceResource->instanceProperties->machineType = 'non';
    $request->bulkInsertInstanceResource->instanceProperties->metadata = new Metadata();
    $request->bulkInsertInstanceResource->instanceProperties->metadata->fingerprint = 'magni';
    $request->bulkInsertInstanceResource->instanceProperties->metadata->items = [
        new MetadataItems(),
        new MetadataItems(),
        new MetadataItems(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->metadata->kind = 'consequatur';
    $request->bulkInsertInstanceResource->instanceProperties->minCpuPlatform = 'illum';
    $request->bulkInsertInstanceResource->instanceProperties->networkInterfaces = [
        new NetworkInterface(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->bulkInsertInstanceResource->instanceProperties->networkPerformanceConfig->externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum::DEFAULT;
    $request->bulkInsertInstanceResource->instanceProperties->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::DEFAULT;
    $request->bulkInsertInstanceResource->instanceProperties->postKeyRevocationActionType = InstancePropertiesPostKeyRevocationActionTypeEnum::POST_KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
    $request->bulkInsertInstanceResource->instanceProperties->privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum::ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE;
    $request->bulkInsertInstanceResource->instanceProperties->reservationAffinity = new ReservationAffinity();
    $request->bulkInsertInstanceResource->instanceProperties->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::ANY_RESERVATION;
    $request->bulkInsertInstanceResource->instanceProperties->reservationAffinity->key = 'officiis';
    $request->bulkInsertInstanceResource->instanceProperties->reservationAffinity->values = [
        'culpa',
        'architecto',
        'iure',
        'eveniet',
    ];
    $request->bulkInsertInstanceResource->instanceProperties->resourceManagerTags = [
        'praesentium' => 'iste',
        'tempora' => 'ad',
        'ab' => 'harum',
        'facere' => 'ducimus',
    ];
    $request->bulkInsertInstanceResource->instanceProperties->resourcePolicies = [
        'accusamus',
        'officiis',
    ];
    $request->bulkInsertInstanceResource->instanceProperties->scheduling = new Scheduling();
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->automaticRestart = false;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->availabilityDomain = 896512;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->currentCpus = 720552;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->currentMemoryMb = 'nemo';
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->hostErrorTimeoutSeconds = 84154;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::INSTANCE_TERMINATION_ACTION_UNSPECIFIED;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->latencyTolerant = false;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->localSsdRecoveryTimeout = new Duration();
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->localSsdRecoveryTimeout->nanos = 772125;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->localSsdRecoveryTimeout->seconds = 'modi';
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->locationHint = 'possimus';
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->maintenanceFreezeDurationHours = 626637;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->maintenanceInterval = SchedulingMaintenanceIntervalEnum::AS_NEEDED;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->maxRunDuration = new Duration();
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->maxRunDuration->nanos = 992347;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->maxRunDuration->seconds = 'est';
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->minNodeCpus = 832589;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::MIGRATE;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->preemptible = false;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->provisioningModel = SchedulingProvisioningModelEnum::SPOT;
    $request->bulkInsertInstanceResource->instanceProperties->scheduling->terminationTime = 'quasi';
    $request->bulkInsertInstanceResource->instanceProperties->secureTags = [
        'delectus',
    ];
    $request->bulkInsertInstanceResource->instanceProperties->serviceAccounts = [
        new ServiceAccount(),
    ];
    $request->bulkInsertInstanceResource->instanceProperties->serviceIntegrationSpecs = [
        'nulla' => new ServiceIntegrationSpec(),
        'dolore' => new ServiceIntegrationSpec(),
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
    $request->bulkInsertInstanceResource->instanceProperties->tags->fingerprint = 'itaque';
    $request->bulkInsertInstanceResource->instanceProperties->tags->items = [
        'nam',
        'dignissimos',
    ];
    $request->bulkInsertInstanceResource->locationPolicy = new LocationPolicy();
    $request->bulkInsertInstanceResource->locationPolicy->locations = [
        'sapiente' => new LocationPolicyLocation(),
    ];
    $request->bulkInsertInstanceResource->locationPolicy->targetShape = LocationPolicyTargetShapeEnum::ANY;
    $request->bulkInsertInstanceResource->minCount = 'doloribus';
    $request->bulkInsertInstanceResource->namePattern = 'nemo';
    $request->bulkInsertInstanceResource->perInstanceProperties = [
        'corrupti' => new BulkInsertInstanceResourcePerInstanceProperties(),
        'exercitationem' => new BulkInsertInstanceResourcePerInstanceProperties(),
    ];
    $request->bulkInsertInstanceResource->sourceInstanceTemplate = 'commodi';
    $request->accessToken = 'laudantium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consequatur';
    $request->fields = 'incidunt';
    $request->key = 'dolores';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->project = 'earum';
    $request->quotaUser = 'consequatur';
    $request->requestId = 'voluptatem';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'architecto';
    $request->userIp = 'quibusdam';
    $request->zone = 'autem';

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
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'modi';
    $request->fields = 'ratione';
    $request->instance = 'aliquam';
    $request->key = 'ea';
    $request->oauthToken = 'aliquam';
    $request->prettyPrint = false;
    $request->project = 'corporis';
    $request->quotaUser = 'at';
    $request->requestId = 'ipsa';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'aut';
    $request->userIp = 'molestias';
    $request->zone = 'quaerat';

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
    $request->accessConfig = 'expedita';
    $request->accessToken = 'libero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quis';
    $request->fields = 'cumque';
    $request->instance = 'cumque';
    $request->key = 'vero';
    $request->networkInterface = 'a';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->project = 'ipsam';
    $request->quotaUser = 'quod';
    $request->requestId = 'facilis';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'illo';
    $request->userIp = 'reiciendis';
    $request->zone = 'debitis';

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
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->deviceName = 'aspernatur';
    $request->fields = 'atque';
    $request->instance = 'animi';
    $request->key = 'eius';
    $request->oauthToken = 'ad';
    $request->prettyPrint = false;
    $request->project = 'mollitia';
    $request->quotaUser = 'minus';
    $request->requestId = 'quos';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'distinctio';
    $request->userIp = 'praesentium';
    $request->zone = 'ullam';

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
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->fields = 'explicabo';
    $request->instance = 'placeat';
    $request->key = 'animi';
    $request->oauthToken = 'expedita';
    $request->prettyPrint = false;
    $request->project = 'laborum';
    $request->quotaUser = 'atque';
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'laborum';
    $request->userIp = 'magnam';
    $request->zone = 'veritatis';

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
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nulla';
    $request->fields = 'nemo';
    $request->instance = 'omnis';
    $request->key = 'iure';
    $request->networkInterface = 'hic';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->project = 'eius';
    $request->quotaUser = 'esse';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'inventore';
    $request->userIp = 'similique';
    $request->zone = 'id';

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
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->fields = 'numquam';
    $request->instance = 'rerum';
    $request->key = 'atque';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->project = 'placeat';
    $request->queryPath = 'necessitatibus';
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'ducimus';
    $request->userIp = 'incidunt';
    $request->variableKey = 'voluptatibus';
    $request->zone = 'nihil';

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
    $request->accessToken = 'nam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->fields = 'aliquam';
    $request->key = 'totam';
    $request->oauthToken = 'soluta';
    $request->optionsRequestedPolicyVersion = 842539;
    $request->prettyPrint = false;
    $request->project = 'iure';
    $request->quotaUser = 'mollitia';
    $request->resource = 'autem';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'perferendis';
    $request->userIp = 'tempora';
    $request->zone = 'aliquam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maxime';
    $request->fields = 'ratione';
    $request->instance = 'soluta';
    $request->key = 'quos';
    $request->oauthToken = 'sit';
    $request->prettyPrint = false;
    $request->project = 'laudantium';
    $request->quotaUser = 'sit';
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'quaerat';
    $request->userIp = 'nesciunt';
    $request->zone = 'molestiae';

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
    $request->accessToken = 'eveniet';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laboriosam';
    $request->fields = 'sit';
    $request->instance = 'labore';
    $request->key = 'ullam';
    $request->oauthToken = 'excepturi';
    $request->port = 746315;
    $request->prettyPrint = false;
    $request->project = 'voluptates';
    $request->quotaUser = 'rerum';
    $request->start = 'cum';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'fugiat';
    $request->userIp = 'perferendis';
    $request->zone = 'qui';

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
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corrupti';
    $request->fields = 'iure';
    $request->instance = 'quidem';
    $request->key = 'quod';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->project = 'et';
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'exercitationem';
    $request->userIp = 'minima';
    $request->zone = 'laudantium';

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
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'excepturi';
    $request->fields = 'corporis';
    $request->instance = 'nam';
    $request->key = 'itaque';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->project = 'porro';
    $request->quotaUser = 'nulla';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'qui';
    $request->userIp = 'in';
    $request->zone = 'enim';

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
use \OpenAPI\OpenAPI\Models\Shared\NetworkInterfaceSubInterface;
use \OpenAPI\OpenAPI\Models\Shared\NetworkInterfaceSubInterfaceIpAllocationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceParams;
use \OpenAPI\OpenAPI\Models\Shared\InstancePostKeyRevocationActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancePrivateIpv6GoogleAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinity;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinityConsumeReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatusScheduling;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatusServiceIntegrationStatus;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatusServiceIntegrationStatusBackupDRStatus;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatusServiceIntegrationStatusBackupDRStatusStateEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceIntegrityPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedVmConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedVmIntegrityPolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tags;
use \OpenAPI\OpenAPI\Models\Shared\UpcomingMaintenance;
use \OpenAPI\OpenAPI\Models\Shared\UpcomingMaintenanceMaintenanceStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpcomingMaintenanceTimeWindow;
use \OpenAPI\OpenAPI\Models\Shared\UpcomingMaintenanceTypeEnum;
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
    $request->instance->advancedMachineFeatures->numaNodeCount = 773678;
    $request->instance->advancedMachineFeatures->performanceMonitoringUnit = AdvancedMachineFeaturesPerformanceMonitoringUnitEnum::ARCHITECTURAL;
    $request->instance->advancedMachineFeatures->threadsPerCore = 335672;
    $request->instance->advancedMachineFeatures->visibleCoreCount = 281753;
    $request->instance->canIpForward = false;
    $request->instance->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->instance->confidentialInstanceConfig->confidentialInstanceType = ConfidentialInstanceConfigConfidentialInstanceTypeEnum::SEV_SNP;
    $request->instance->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->instance->cpuPlatform = 'fuga';
    $request->instance->creationTimestamp = 'labore';
    $request->instance->deletionProtection = false;
    $request->instance->description = 'adipisci';
    $request->instance->disks = [
        new AttachedDisk(),
    ];
    $request->instance->displayDevice = new DisplayDevice();
    $request->instance->displayDevice->enableDisplay = false;
    $request->instance->eraseWindowsVssSignature = false;
    $request->instance->fingerprint = 'cum';
    $request->instance->guestAccelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->instance->hostname = 'knobby-tankful.com';
    $request->instance->id = 'esse';
    $request->instance->instanceEncryptionKey = new CustomerEncryptionKey();
    $request->instance->instanceEncryptionKey->kmsKeyName = 'ex';
    $request->instance->instanceEncryptionKey->kmsKeyServiceAccount = 'amet';
    $request->instance->instanceEncryptionKey->rawKey = 'minus';
    $request->instance->instanceEncryptionKey->rsaEncryptedKey = 'ad';
    $request->instance->instanceEncryptionKey->sha256 = 'explicabo';
    $request->instance->keyRevocationActionType = InstanceKeyRevocationActionTypeEnum::KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
    $request->instance->kind = 'blanditiis';
    $request->instance->labelFingerprint = 'eligendi';
    $request->instance->labels = [
        'amet' => 'recusandae',
    ];
    $request->instance->lastStartTimestamp = 'perspiciatis';
    $request->instance->lastStopTimestamp = 'corrupti';
    $request->instance->lastSuspendedTimestamp = 'sit';
    $request->instance->machineType = 'magni';
    $request->instance->metadata = new Metadata();
    $request->instance->metadata->fingerprint = 'repellendus';
    $request->instance->metadata->items = [
        new MetadataItems(),
        new MetadataItems(),
        new MetadataItems(),
    ];
    $request->instance->metadata->kind = 'ratione';
    $request->instance->minCpuPlatform = 'sapiente';
    $request->instance->name = 'Nadine Gutkowski';
    $request->instance->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->instance->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->instance->networkPerformanceConfig->externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum::DEFAULT;
    $request->instance->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::TIER1;
    $request->instance->params = new InstanceParams();
    $request->instance->params->resourceManagerTags = [
        'nobis' => 'ea',
        'iusto' => 'dolore',
        'repudiandae' => 'recusandae',
    ];
    $request->instance->postKeyRevocationActionType = InstancePostKeyRevocationActionTypeEnum::POST_KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
    $request->instance->preservedStateSizeGb = 'quisquam';
    $request->instance->privateIpv6GoogleAccess = InstancePrivateIpv6GoogleAccessEnum::INHERIT_FROM_SUBNETWORK;
    $request->instance->reservationAffinity = new ReservationAffinity();
    $request->instance->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::SPECIFIC_THEN_ANY_RESERVATION;
    $request->instance->reservationAffinity->key = 'sunt';
    $request->instance->reservationAffinity->values = [
        'itaque',
        'assumenda',
        'optio',
    ];
    $request->instance->resourcePolicies = [
        'a',
        'quam',
    ];
    $request->instance->resourceStatus = new ResourceStatus();
    $request->instance->resourceStatus->physicalHost = 'quos';
    $request->instance->resourceStatus->scheduling = new ResourceStatusScheduling();
    $request->instance->resourceStatus->scheduling->availabilityDomain = 493774;
    $request->instance->resourceStatus->scheduling->terminationTimestamp = 'earum';
    $request->instance->resourceStatus->serviceIntegrationStatuses = [
        'magni' => new ResourceStatusServiceIntegrationStatus(),
    ];
    $request->instance->satisfiesPzs = false;
    $request->instance->scheduling = new Scheduling();
    $request->instance->scheduling->automaticRestart = false;
    $request->instance->scheduling->availabilityDomain = 923652;
    $request->instance->scheduling->currentCpus = 29897;
    $request->instance->scheduling->currentMemoryMb = 'eius';
    $request->instance->scheduling->hostErrorTimeoutSeconds = 700666;
    $request->instance->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::DELETE;
    $request->instance->scheduling->latencyTolerant = false;
    $request->instance->scheduling->localSsdRecoveryTimeout = new Duration();
    $request->instance->scheduling->localSsdRecoveryTimeout->nanos = 863492;
    $request->instance->scheduling->localSsdRecoveryTimeout->seconds = 'velit';
    $request->instance->scheduling->locationHint = 'necessitatibus';
    $request->instance->scheduling->maintenanceFreezeDurationHours = 817352;
    $request->instance->scheduling->maintenanceInterval = SchedulingMaintenanceIntervalEnum::AS_NEEDED;
    $request->instance->scheduling->maxRunDuration = new Duration();
    $request->instance->scheduling->maxRunDuration->nanos = 768546;
    $request->instance->scheduling->maxRunDuration->seconds = 'ullam';
    $request->instance->scheduling->minNodeCpus = 427107;
    $request->instance->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->instance->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::MIGRATE;
    $request->instance->scheduling->preemptible = false;
    $request->instance->scheduling->provisioningModel = SchedulingProvisioningModelEnum::STANDARD;
    $request->instance->scheduling->terminationTime = 'voluptatibus';
    $request->instance->secureTags = [
        'aspernatur',
        'harum',
    ];
    $request->instance->selfLink = 'illum';
    $request->instance->selfLinkWithId = 'dolor';
    $request->instance->serviceAccounts = [
        new ServiceAccount(),
        new ServiceAccount(),
        new ServiceAccount(),
        new ServiceAccount(),
    ];
    $request->instance->serviceIntegrationSpecs = [
        'earum' => new ServiceIntegrationSpec(),
        'vitae' => new ServiceIntegrationSpec(),
        'impedit' => new ServiceIntegrationSpec(),
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
    $request->instance->sourceMachineImage = 'eligendi';
    $request->instance->sourceMachineImageEncryptionKey = new CustomerEncryptionKey();
    $request->instance->sourceMachineImageEncryptionKey->kmsKeyName = 'veniam';
    $request->instance->sourceMachineImageEncryptionKey->kmsKeyServiceAccount = 'aperiam';
    $request->instance->sourceMachineImageEncryptionKey->rawKey = 'consectetur';
    $request->instance->sourceMachineImageEncryptionKey->rsaEncryptedKey = 'repellat';
    $request->instance->sourceMachineImageEncryptionKey->sha256 = 'voluptas';
    $request->instance->startRestricted = false;
    $request->instance->status = InstanceStatusEnum::SUSPENDING;
    $request->instance->statusMessage = 'nesciunt';
    $request->instance->tags = new Tags();
    $request->instance->tags->fingerprint = 'iste';
    $request->instance->tags->items = [
        'cumque',
        'assumenda',
        'alias',
    ];
    $request->instance->upcomingMaintenance = new UpcomingMaintenance();
    $request->instance->upcomingMaintenance->canReschedule = false;
    $request->instance->upcomingMaintenance->date = 'deserunt';
    $request->instance->upcomingMaintenance->latestWindowStartTime = 'vel';
    $request->instance->upcomingMaintenance->maintenanceStatus = UpcomingMaintenanceMaintenanceStatusEnum::ONGOING;
    $request->instance->upcomingMaintenance->startTimeWindow = new UpcomingMaintenanceTimeWindow();
    $request->instance->upcomingMaintenance->startTimeWindow->earliest = 'perspiciatis';
    $request->instance->upcomingMaintenance->startTimeWindow->latest = 'accusantium';
    $request->instance->upcomingMaintenance->time = 'voluptatibus';
    $request->instance->upcomingMaintenance->type = UpcomingMaintenanceTypeEnum::UNKNOWN_TYPE;
    $request->instance->upcomingMaintenance->windowEndTime = 'nemo';
    $request->instance->upcomingMaintenance->windowStartTime = 'quam';
    $request->instance->zone = 'reiciendis';
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nemo';
    $request->fields = 'ab';
    $request->key = 'atque';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->project = 'culpa';
    $request->quotaUser = 'possimus';
    $request->requestId = 'molestiae';
    $request->sourceInstanceTemplate = 'officiis';
    $request->sourceMachineImage = 'reiciendis';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'aperiam';
    $request->userIp = 'reprehenderit';
    $request->zone = 'animi';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eveniet';
    $request->alt = AltEnum::JSON;
    $request->callback = 'adipisci';
    $request->fields = 'hic';
    $request->filter = 'dolorem';
    $request->key = 'adipisci';
    $request->maxResults = 762233;
    $request->oauthToken = 'similique';
    $request->orderBy = 'odio';
    $request->pageToken = 'unde';
    $request->prettyPrint = false;
    $request->project = 'asperiores';
    $request->quotaUser = 'nam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'fugiat';
    $request->userIp = 'recusandae';
    $request->zone = 'non';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'neque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'soluta';
    $request->fields = 'fuga';
    $request->filter = 'qui';
    $request->instance = 'commodi';
    $request->key = 'a';
    $request->maxResults = 835965;
    $request->oauthToken = 'sequi';
    $request->orderBy = 'eum';
    $request->pageToken = 'rem';
    $request->prettyPrint = false;
    $request->project = 'expedita';
    $request->quotaUser = 'animi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'dolores';
    $request->userIp = 'dicta';
    $request->zone = 'laboriosam';

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

## computeInstancesPerformMaintenance

Perform a manual maintenance on the instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesPerformMaintenanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesPerformMaintenanceSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesPerformMaintenanceSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesPerformMaintenanceSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesPerformMaintenanceRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magnam';
    $request->fields = 'dicta';
    $request->instance = 'nostrum';
    $request->key = 'molestias';
    $request->oauthToken = 'neque';
    $request->prettyPrint = false;
    $request->project = 'quis';
    $request->quotaUser = 'optio';
    $request->requestId = 'esse';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'autem';
    $request->userIp = 'tempora';
    $request->zone = 'beatae';

    $requestSecurity = new ComputeInstancesPerformMaintenanceSecurity();
    $requestSecurity->option1 = new ComputeInstancesPerformMaintenanceSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesPerformMaintenance($request, $requestSecurity);

    if ($response->operation !== null) {
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
        'ratione',
    ];
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sequi';
    $request->fields = 'recusandae';
    $request->instance = 'fugiat';
    $request->key = 'quod';
    $request->oauthToken = 'sit';
    $request->prettyPrint = false;
    $request->project = 'modi';
    $request->quotaUser = 'eum';
    $request->requestId = 'rerum';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'nemo';
    $request->userIp = 'architecto';
    $request->zone = 'vel';

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
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maxime';
    $request->fields = 'deserunt';
    $request->instance = 'eius';
    $request->key = 'molestias';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->project = 'dolores';
    $request->quotaUser = 'reprehenderit';
    $request->requestId = 'minus';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'odit';
    $request->userIp = 'maxime';
    $request->zone = 'aspernatur';

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
        new CustomerEncryptionKeyProtectedDisk(),
        new CustomerEncryptionKeyProtectedDisk(),
    ];
    $request->instancesResumeRequest->instanceEncryptionKey = new CustomerEncryptionKey();
    $request->instancesResumeRequest->instanceEncryptionKey->kmsKeyName = 'minima';
    $request->instancesResumeRequest->instanceEncryptionKey->kmsKeyServiceAccount = 'ipsam';
    $request->instancesResumeRequest->instanceEncryptionKey->rawKey = 'sequi';
    $request->instancesResumeRequest->instanceEncryptionKey->rsaEncryptedKey = 'quaerat';
    $request->instancesResumeRequest->instanceEncryptionKey->sha256 = 'accusantium';
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->fields = 'quo';
    $request->instance = 'quis';
    $request->key = 'facere';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->project = 'harum';
    $request->quotaUser = 'adipisci';
    $request->requestId = 'optio';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'reprehenderit';
    $request->userIp = 'quo';
    $request->zone = 'vitae';

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
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestias';
    $request->fields = 'beatae';
    $request->instance = 'itaque';
    $request->key = 'atque';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->project = 'similique';
    $request->quotaUser = 'qui';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'quam';
    $request->userIp = 'assumenda';
    $request->zone = 'temporibus';

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
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'inventore';
    $request->deletionProtection = false;
    $request->fields = 'fugit';
    $request->key = 'earum';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->project = 'at';
    $request->quotaUser = 'debitis';
    $request->requestId = 'eum';
    $request->resource = 'non';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'sapiente';
    $request->userIp = 'porro';
    $request->zone = 'impedit';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::MEDIA;
    $request->autoDelete = false;
    $request->callback = 'natus';
    $request->deviceName = 'nulla';
    $request->fields = 'quaerat';
    $request->instance = 'aut';
    $request->key = 'architecto';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->project = 'possimus';
    $request->quotaUser = 'reiciendis';
    $request->requestId = 'est';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'iste';
    $request->userIp = 'ex';
    $request->zone = 'odit';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->zoneSetPolicyRequest = new ZoneSetPolicyRequest();
    $request->zoneSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->zoneSetPolicyRequest->etag = 'libero';
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
        new Binding(),
    ];
    $request->zoneSetPolicyRequest->policy->etag = 'consequuntur';
    $request->zoneSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->zoneSetPolicyRequest->policy->version = 47902;
    $request->accessToken = 'animi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'itaque';
    $request->fields = 'non';
    $request->key = 'quia';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->project = 'architecto';
    $request->quotaUser = 'deserunt';
    $request->resource = 'fuga';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'illo';
    $request->userIp = 'perferendis';
    $request->zone = 'eveniet';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instancesSetLabelsRequest = new InstancesSetLabelsRequest();
    $request->instancesSetLabelsRequest->labelFingerprint = 'fuga';
    $request->instancesSetLabelsRequest->labels = [
        'quo' => 'sunt',
        'necessitatibus' => 'iste',
        'veritatis' => 'adipisci',
    ];
    $request->accessToken = 'quis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quos';
    $request->fields = 'ea';
    $request->instance = 'fugiat';
    $request->key = 'dicta';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->project = 'delectus';
    $request->quotaUser = 'sint';
    $request->requestId = 'voluptatibus';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'reprehenderit';
    $request->userIp = 'est';
    $request->zone = 'numquam';

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
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odit';
    $request->fields = 'nam';
    $request->instance = 'asperiores';
    $request->key = 'quam';
    $request->oauthToken = 'fugiat';
    $request->prettyPrint = false;
    $request->project = 'ea';
    $request->quotaUser = 'molestiae';
    $request->requestId = 'quo';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'totam';
    $request->userIp = 'modi';
    $request->zone = 'id';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instancesSetMachineTypeRequest = new InstancesSetMachineTypeRequest();
    $request->instancesSetMachineTypeRequest->machineType = 'excepturi';
    $request->accessToken = 'unde';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eius';
    $request->fields = 'quasi';
    $request->instance = 'quibusdam';
    $request->key = 'voluptas';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->project = 'magni';
    $request->quotaUser = 'numquam';
    $request->requestId = 'velit';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'nesciunt';
    $request->userIp = 'sunt';
    $request->zone = 'blanditiis';

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
    $request->metadata->fingerprint = 'perferendis';
    $request->metadata->items = [
        new MetadataItems(),
        new MetadataItems(),
        new MetadataItems(),
        new MetadataItems(),
    ];
    $request->metadata->kind = 'delectus';
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quidem';
    $request->fields = 'eaque';
    $request->instance = 'sequi';
    $request->key = 'fuga';
    $request->oauthToken = 'assumenda';
    $request->prettyPrint = false;
    $request->project = 'modi';
    $request->quotaUser = 'dolores';
    $request->requestId = 'beatae';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'repellendus';
    $request->userIp = 'ut';
    $request->zone = 'nesciunt';

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
    $request->instancesSetMinCpuPlatformRequest->minCpuPlatform = 'beatae';
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quo';
    $request->fields = 'libero';
    $request->instance = 'eaque';
    $request->key = 'animi';
    $request->oauthToken = 'doloremque';
    $request->prettyPrint = false;
    $request->project = 'consequatur';
    $request->quotaUser = 'perferendis';
    $request->requestId = 'dolor';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'facilis';
    $request->userIp = 'eos';
    $request->zone = 'sed';

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
    $request->instancesSetNameRequest->currentName = 'sint';
    $request->instancesSetNameRequest->name = 'Leonard Padberg PhD';
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatibus';
    $request->fields = 'fuga';
    $request->instance = 'deserunt';
    $request->key = 'iure';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->project = 'quasi';
    $request->quotaUser = 'cumque';
    $request->requestId = 'corporis';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'quibusdam';
    $request->userIp = 'dicta';
    $request->zone = 'voluptatibus';

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
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingMaintenanceIntervalEnum;
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
    $request->scheduling->availabilityDomain = 845082;
    $request->scheduling->currentCpus = 804525;
    $request->scheduling->currentMemoryMb = 'consequuntur';
    $request->scheduling->hostErrorTimeoutSeconds = 26722;
    $request->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::INSTANCE_TERMINATION_ACTION_UNSPECIFIED;
    $request->scheduling->latencyTolerant = false;
    $request->scheduling->localSsdRecoveryTimeout = new Duration();
    $request->scheduling->localSsdRecoveryTimeout->nanos = 40710;
    $request->scheduling->localSsdRecoveryTimeout->seconds = 'repellendus';
    $request->scheduling->locationHint = 'ratione';
    $request->scheduling->maintenanceFreezeDurationHours = 553896;
    $request->scheduling->maintenanceInterval = SchedulingMaintenanceIntervalEnum::RECURRENT;
    $request->scheduling->maxRunDuration = new Duration();
    $request->scheduling->maxRunDuration->nanos = 776186;
    $request->scheduling->maxRunDuration->seconds = 'sequi';
    $request->scheduling->minNodeCpus = 777784;
    $request->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::MIGRATE;
    $request->scheduling->preemptible = false;
    $request->scheduling->provisioningModel = SchedulingProvisioningModelEnum::STANDARD;
    $request->scheduling->terminationTime = 'nostrum';
    $request->accessToken = 'labore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sunt';
    $request->fields = 'tenetur';
    $request->instance = 'occaecati';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->project = 'autem';
    $request->quotaUser = 'natus';
    $request->requestId = 'quasi';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'ex';
    $request->userIp = 'error';
    $request->zone = 'deleniti';

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

## computeInstancesSetSecurityPolicy

Sets the Google Cloud Armor security policy for the specified instance. For more information, see Google Cloud Armor Overview

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetSecurityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancesSetSecurityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetSecurityPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetSecurityPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesSetSecurityPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesSetSecurityPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instancesSetSecurityPolicyRequest = new InstancesSetSecurityPolicyRequest();
    $request->instancesSetSecurityPolicyRequest->networkInterfaces = [
        'adipisci',
        'dolore',
        'tempora',
        'quaerat',
    ];
    $request->instancesSetSecurityPolicyRequest->securityPolicy = 'debitis';
    $request->accessToken = 'similique';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'blanditiis';
    $request->fields = 'libero';
    $request->instance = 'sequi';
    $request->key = 'laborum';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->project = 'totam';
    $request->quotaUser = 'dignissimos';
    $request->requestId = 'corporis';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'nisi';
    $request->userIp = 'quo';
    $request->zone = 'inventore';

    $requestSecurity = new ComputeInstancesSetSecurityPolicySecurity();
    $requestSecurity->option1 = new ComputeInstancesSetSecurityPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instances->computeInstancesSetSecurityPolicy($request, $requestSecurity);

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
    $request->instancesSetServiceAccountRequest->email = 'Geovany_Aufderhar@hotmail.com';
    $request->instancesSetServiceAccountRequest->scopes = [
        'voluptate',
    ];
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'error';
    $request->instance = 'impedit';
    $request->key = 'laudantium';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->project = 'officia';
    $request->quotaUser = 'repudiandae';
    $request->requestId = 'nemo';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'quod';
    $request->userIp = 'vitae';
    $request->zone = 'vel';

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
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'similique';
    $request->fields = 'veritatis';
    $request->instance = 'temporibus';
    $request->key = 'excepturi';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->project = 'ipsum';
    $request->quotaUser = 'iure';
    $request->requestId = 'similique';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'itaque';
    $request->userIp = 'voluptatum';
    $request->zone = 'possimus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->shieldedVmIntegrityPolicy = new ShieldedVmIntegrityPolicy();
    $request->shieldedVmIntegrityPolicy->updateAutoLearnPolicy = false;
    $request->accessToken = 'non';
    $request->alt = AltEnum::JSON;
    $request->callback = 'et';
    $request->fields = 'amet';
    $request->instance = 'tenetur';
    $request->key = 'velit';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->project = 'commodi';
    $request->quotaUser = 'voluptas';
    $request->requestId = 'quos';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'veniam';
    $request->userIp = 'fugit';
    $request->zone = 'assumenda';

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
    $request->tags->fingerprint = 'molestiae';
    $request->tags->items = [
        'aliquam',
        'maxime',
    ];
    $request->accessToken = 'nostrum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'asperiores';
    $request->fields = 'doloremque';
    $request->instance = 'id';
    $request->key = 'veniam';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->project = 'placeat';
    $request->quotaUser = 'necessitatibus';
    $request->requestId = 'harum';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'culpa';
    $request->userIp = 'pariatur';
    $request->zone = 'laborum';

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
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->fields = 'iusto';
    $request->instance = 'natus';
    $request->key = 'ab';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->project = 'et';
    $request->quotaUser = 'eligendi';
    $request->requestId = 'sint';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'laboriosam';
    $request->userIp = 'molestiae';
    $request->withExtendedNotifications = false;
    $request->zone = 'ab';

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
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->callback = 'minus';
    $request->fields = 'ad';
    $request->instance = 'ipsum';
    $request->key = 'ipsa';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->project = 'minima';
    $request->quotaUser = 'vel';
    $request->requestId = 'nisi';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'et';
    $request->userIp = 'autem';
    $request->zone = 'dolor';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instancesStartWithEncryptionKeyRequest = new InstancesStartWithEncryptionKeyRequest();
    $request->instancesStartWithEncryptionKeyRequest->disks = [
        new CustomerEncryptionKeyProtectedDisk(),
    ];
    $request->instancesStartWithEncryptionKeyRequest->instanceEncryptionKey = new CustomerEncryptionKey();
    $request->instancesStartWithEncryptionKeyRequest->instanceEncryptionKey->kmsKeyName = 'suscipit';
    $request->instancesStartWithEncryptionKeyRequest->instanceEncryptionKey->kmsKeyServiceAccount = 'amet';
    $request->instancesStartWithEncryptionKeyRequest->instanceEncryptionKey->rawKey = 'deleniti';
    $request->instancesStartWithEncryptionKeyRequest->instanceEncryptionKey->rsaEncryptedKey = 'exercitationem';
    $request->instancesStartWithEncryptionKeyRequest->instanceEncryptionKey->sha256 = 'illo';
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempore';
    $request->fields = 'fugit';
    $request->instance = 'nostrum';
    $request->key = 'magni';
    $request->oauthToken = 'sunt';
    $request->prettyPrint = false;
    $request->project = 'quidem';
    $request->quotaUser = 'perspiciatis';
    $request->requestId = 'asperiores';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'saepe';
    $request->userIp = 'ipsa';
    $request->zone = 'esse';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reprehenderit';
    $request->discardLocalSsd = false;
    $request->fields = 'quidem';
    $request->instance = 'quas';
    $request->key = 'officia';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->project = 'alias';
    $request->quotaUser = 'nam';
    $request->requestId = 'minus';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'quis';
    $request->userIp = 'hic';
    $request->zone = 'dolorum';

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
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nisi';
    $request->discardLocalSsd = false;
    $request->fields = 'quis';
    $request->instance = 'perferendis';
    $request->key = 'itaque';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->project = 'asperiores';
    $request->quotaUser = 'ratione';
    $request->requestId = 'eos';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'sint';
    $request->userIp = 'incidunt';
    $request->zone = 'pariatur';

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
        'itaque',
    ];
    $request->accessToken = 'quo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'debitis';
    $request->key = 'animi';
    $request->oauthToken = 'aliquam';
    $request->prettyPrint = false;
    $request->project = 'quasi';
    $request->quotaUser = 'repellendus';
    $request->resource = 'architecto';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'labore';
    $request->userIp = 'nisi';
    $request->zone = 'voluptas';

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
use \OpenAPI\OpenAPI\Models\Shared\NetworkInterfaceSubInterface;
use \OpenAPI\OpenAPI\Models\Shared\NetworkInterfaceSubInterfaceIpAllocationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceParams;
use \OpenAPI\OpenAPI\Models\Shared\InstancePostKeyRevocationActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancePrivateIpv6GoogleAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinity;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinityConsumeReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatusScheduling;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatusServiceIntegrationStatus;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatusServiceIntegrationStatusBackupDRStatus;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatusServiceIntegrationStatusBackupDRStatusStateEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceIntegrityPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedVmConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedVmIntegrityPolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tags;
use \OpenAPI\OpenAPI\Models\Shared\UpcomingMaintenance;
use \OpenAPI\OpenAPI\Models\Shared\UpcomingMaintenanceMaintenanceStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpcomingMaintenanceTimeWindow;
use \OpenAPI\OpenAPI\Models\Shared\UpcomingMaintenanceTypeEnum;
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
    $request->instance1->advancedMachineFeatures->numaNodeCount = 506107;
    $request->instance1->advancedMachineFeatures->performanceMonitoringUnit = AdvancedMachineFeaturesPerformanceMonitoringUnitEnum::ENHANCED;
    $request->instance1->advancedMachineFeatures->threadsPerCore = 67582;
    $request->instance1->advancedMachineFeatures->visibleCoreCount = 324600;
    $request->instance1->canIpForward = false;
    $request->instance1->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->instance1->confidentialInstanceConfig->confidentialInstanceType = ConfidentialInstanceConfigConfidentialInstanceTypeEnum::SEV;
    $request->instance1->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->instance1->cpuPlatform = 'repellat';
    $request->instance1->creationTimestamp = 'sapiente';
    $request->instance1->deletionProtection = false;
    $request->instance1->description = 'a';
    $request->instance1->disks = [
        new AttachedDisk(),
        new AttachedDisk(),
    ];
    $request->instance1->displayDevice = new DisplayDevice();
    $request->instance1->displayDevice->enableDisplay = false;
    $request->instance1->eraseWindowsVssSignature = false;
    $request->instance1->fingerprint = 'amet';
    $request->instance1->guestAccelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->instance1->hostname = 'tasty-vacation.info';
    $request->instance1->id = 'tempora';
    $request->instance1->instanceEncryptionKey = new CustomerEncryptionKey();
    $request->instance1->instanceEncryptionKey->kmsKeyName = 'maiores';
    $request->instance1->instanceEncryptionKey->kmsKeyServiceAccount = 'facere';
    $request->instance1->instanceEncryptionKey->rawKey = 'illum';
    $request->instance1->instanceEncryptionKey->rsaEncryptedKey = 'exercitationem';
    $request->instance1->instanceEncryptionKey->sha256 = 'saepe';
    $request->instance1->keyRevocationActionType = InstanceKeyRevocationActionTypeEnum::NONE;
    $request->instance1->kind = 'sint';
    $request->instance1->labelFingerprint = 'minima';
    $request->instance1->labels = [
        'sequi' => 'sequi',
        'occaecati' => 'voluptatum',
    ];
    $request->instance1->lastStartTimestamp = 'illum';
    $request->instance1->lastStopTimestamp = 'laborum';
    $request->instance1->lastSuspendedTimestamp = 'sapiente';
    $request->instance1->machineType = 'soluta';
    $request->instance1->metadata = new Metadata();
    $request->instance1->metadata->fingerprint = 'eius';
    $request->instance1->metadata->items = [
        new MetadataItems(),
    ];
    $request->instance1->metadata->kind = 'dolorum';
    $request->instance1->minCpuPlatform = 'deleniti';
    $request->instance1->name = 'Brad Effertz';
    $request->instance1->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->instance1->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->instance1->networkPerformanceConfig->externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum::TIER1;
    $request->instance1->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::DEFAULT;
    $request->instance1->params = new InstanceParams();
    $request->instance1->params->resourceManagerTags = [
        'deleniti' => 'aut',
        'nesciunt' => 'error',
        'necessitatibus' => 'culpa',
        'quis' => 'asperiores',
    ];
    $request->instance1->postKeyRevocationActionType = InstancePostKeyRevocationActionTypeEnum::POST_KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
    $request->instance1->preservedStateSizeGb = 'harum';
    $request->instance1->privateIpv6GoogleAccess = InstancePrivateIpv6GoogleAccessEnum::ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE;
    $request->instance1->reservationAffinity = new ReservationAffinity();
    $request->instance1->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::SPECIFIC_RESERVATION;
    $request->instance1->reservationAffinity->key = 'similique';
    $request->instance1->reservationAffinity->values = [
        'tempora',
    ];
    $request->instance1->resourcePolicies = [
        'sapiente',
        'possimus',
    ];
    $request->instance1->resourceStatus = new ResourceStatus();
    $request->instance1->resourceStatus->physicalHost = 'nisi';
    $request->instance1->resourceStatus->scheduling = new ResourceStatusScheduling();
    $request->instance1->resourceStatus->scheduling->availabilityDomain = 69575;
    $request->instance1->resourceStatus->scheduling->terminationTimestamp = 'omnis';
    $request->instance1->resourceStatus->serviceIntegrationStatuses = [
        'ipsum' => new ResourceStatusServiceIntegrationStatus(),
    ];
    $request->instance1->satisfiesPzs = false;
    $request->instance1->scheduling = new Scheduling();
    $request->instance1->scheduling->automaticRestart = false;
    $request->instance1->scheduling->availabilityDomain = 611361;
    $request->instance1->scheduling->currentCpus = 861477;
    $request->instance1->scheduling->currentMemoryMb = 'dolorum';
    $request->instance1->scheduling->hostErrorTimeoutSeconds = 804333;
    $request->instance1->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::STOP;
    $request->instance1->scheduling->latencyTolerant = false;
    $request->instance1->scheduling->localSsdRecoveryTimeout = new Duration();
    $request->instance1->scheduling->localSsdRecoveryTimeout->nanos = 245635;
    $request->instance1->scheduling->localSsdRecoveryTimeout->seconds = 'voluptatum';
    $request->instance1->scheduling->locationHint = 'eveniet';
    $request->instance1->scheduling->maintenanceFreezeDurationHours = 842370;
    $request->instance1->scheduling->maintenanceInterval = SchedulingMaintenanceIntervalEnum::AS_NEEDED;
    $request->instance1->scheduling->maxRunDuration = new Duration();
    $request->instance1->scheduling->maxRunDuration->nanos = 825211;
    $request->instance1->scheduling->maxRunDuration->seconds = 'nobis';
    $request->instance1->scheduling->minNodeCpus = 389627;
    $request->instance1->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->instance1->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::MIGRATE;
    $request->instance1->scheduling->preemptible = false;
    $request->instance1->scheduling->provisioningModel = SchedulingProvisioningModelEnum::STANDARD;
    $request->instance1->scheduling->terminationTime = 'optio';
    $request->instance1->secureTags = [
        'delectus',
        'quae',
    ];
    $request->instance1->selfLink = 'vero';
    $request->instance1->selfLinkWithId = 'amet';
    $request->instance1->serviceAccounts = [
        new ServiceAccount(),
        new ServiceAccount(),
        new ServiceAccount(),
    ];
    $request->instance1->serviceIntegrationSpecs = [
        'quasi' => new ServiceIntegrationSpec(),
        'veniam' => new ServiceIntegrationSpec(),
        'provident' => new ServiceIntegrationSpec(),
        'consequuntur' => new ServiceIntegrationSpec(),
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
    $request->instance1->sourceMachineImage = 'aut';
    $request->instance1->sourceMachineImageEncryptionKey = new CustomerEncryptionKey();
    $request->instance1->sourceMachineImageEncryptionKey->kmsKeyName = 'maxime';
    $request->instance1->sourceMachineImageEncryptionKey->kmsKeyServiceAccount = 'provident';
    $request->instance1->sourceMachineImageEncryptionKey->rawKey = 'aperiam';
    $request->instance1->sourceMachineImageEncryptionKey->rsaEncryptedKey = 'repellendus';
    $request->instance1->sourceMachineImageEncryptionKey->sha256 = 'ab';
    $request->instance1->startRestricted = false;
    $request->instance1->status = InstanceStatusEnum::SUSPENDED;
    $request->instance1->statusMessage = 'magnam';
    $request->instance1->tags = new Tags();
    $request->instance1->tags->fingerprint = 'natus';
    $request->instance1->tags->items = [
        'dicta',
    ];
    $request->instance1->upcomingMaintenance = new UpcomingMaintenance();
    $request->instance1->upcomingMaintenance->canReschedule = false;
    $request->instance1->upcomingMaintenance->date = 'repellat';
    $request->instance1->upcomingMaintenance->latestWindowStartTime = 'dolores';
    $request->instance1->upcomingMaintenance->maintenanceStatus = UpcomingMaintenanceMaintenanceStatusEnum::UNKNOWN;
    $request->instance1->upcomingMaintenance->startTimeWindow = new UpcomingMaintenanceTimeWindow();
    $request->instance1->upcomingMaintenance->startTimeWindow->earliest = 'quibusdam';
    $request->instance1->upcomingMaintenance->startTimeWindow->latest = 'totam';
    $request->instance1->upcomingMaintenance->time = 'provident';
    $request->instance1->upcomingMaintenance->type = UpcomingMaintenanceTypeEnum::UNSCHEDULED;
    $request->instance1->upcomingMaintenance->windowEndTime = 'totam';
    $request->instance1->upcomingMaintenance->windowStartTime = 'id';
    $request->instance1->zone = 'neque';
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->clearSecureTag = false;
    $request->fields = 'occaecati';
    $request->instancePathParameter = 'pariatur';
    $request->key = 'similique';
    $request->minimalAction = ComputeInstancesUpdateMinimalActionEnum::NO_EFFECT;
    $request->mostDisruptiveAllowedAction = ComputeInstancesUpdateMostDisruptiveAllowedActionEnum::REFRESH;
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->project = 'nobis';
    $request->quotaUser = 'nisi';
    $request->requestId = 'natus';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'quia';
    $request->userIp = 'facilis';
    $request->zone = 'atque';

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
    $request->accessConfig->externalIpv6 = 'illo';
    $request->accessConfig->externalIpv6PrefixLength = 676140;
    $request->accessConfig->kind = 'provident';
    $request->accessConfig->name = 'Shawna Jaskolski';
    $request->accessConfig->natIP = 'nisi';
    $request->accessConfig->networkTier = AccessConfigNetworkTierEnum::SELECT;
    $request->accessConfig->publicDnsName = 'tempora';
    $request->accessConfig->publicPtrDomainName = 'mollitia';
    $request->accessConfig->securityPolicy = 'quas';
    $request->accessConfig->setPublicDns = false;
    $request->accessConfig->setPublicPtr = false;
    $request->accessConfig->type = AccessConfigTypeEnum::ONE_TO_ONE_NAT;
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'asperiores';
    $request->fields = 'rem';
    $request->instance = 'quod';
    $request->key = 'commodi';
    $request->networkInterface = 'natus';
    $request->oauthToken = 'beatae';
    $request->prettyPrint = false;
    $request->project = 'placeat';
    $request->quotaUser = 'molestiae';
    $request->requestId = 'dolor';
    $request->uploadType = 'quia';
    $request->uploadProtocol = 'nulla';
    $request->userIp = 'occaecati';
    $request->zone = 'doloribus';

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
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestias';
    $request->fields = 'magnam';
    $request->instance = 'voluptate';
    $request->key = 'aliquid';
    $request->oauthToken = 'officia';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'animi';
    $request->requestId = 'vero';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'possimus';
    $request->userIp = 'optio';
    $request->zone = 'quo';

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
use \OpenAPI\OpenAPI\Models\Shared\NetworkInterfaceSubInterface;
use \OpenAPI\OpenAPI\Models\Shared\NetworkInterfaceSubInterfaceIpAllocationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateNetworkInterfaceSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateNetworkInterfaceSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstancesUpdateNetworkInterfaceSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstancesUpdateNetworkInterfaceRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->networkInterface1 = new NetworkInterface();
    $request->networkInterface1->accessConfigs = [
        new AccessConfig(),
    ];
    $request->networkInterface1->aliasIpRanges = [
        new AliasIpRange(),
        new AliasIpRange(),
        new AliasIpRange(),
        new AliasIpRange(),
    ];
    $request->networkInterface1->fingerprint = 'quas';
    $request->networkInterface1->internalIpv6PrefixLength = 635302;
    $request->networkInterface1->ipv6AccessConfigs = [
        new AccessConfig(),
    ];
    $request->networkInterface1->ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum::EXTERNAL;
    $request->networkInterface1->ipv6Address = 'dicta';
    $request->networkInterface1->kind = 'eos';
    $request->networkInterface1->name = 'Mathew Effertz';
    $request->networkInterface1->network = 'dolore';
    $request->networkInterface1->networkAttachment = 'rem';
    $request->networkInterface1->networkIP = 'provident';
    $request->networkInterface1->nicType = NetworkInterfaceNicTypeEnum::GVNIC;
    $request->networkInterface1->parentNicName = 'alias';
    $request->networkInterface1->queueCount = 492261;
    $request->networkInterface1->stackType = NetworkInterfaceStackTypeEnum::IPV4_IPV6;
    $request->networkInterface1->subinterfaces = [
        new NetworkInterfaceSubInterface(),
    ];
    $request->networkInterface1->subnetwork = 'mollitia';
    $request->networkInterface1->vlan = 72;
    $request->accessToken = 'sit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'commodi';
    $request->instance = 'voluptas';
    $request->key = 'eveniet';
    $request->networkInterfaceQueryParameter = 'eligendi';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->project = 'dolorem';
    $request->quotaUser = 'eum';
    $request->requestId = 'possimus';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'neque';
    $request->userIp = 'inventore';
    $request->zone = 'omnis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->shieldedInstanceConfig->enableSecureBoot = false;
    $request->shieldedInstanceConfig->enableVtpm = false;
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corrupti';
    $request->fields = 'optio';
    $request->instance = 'molestiae';
    $request->key = 'atque';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->project = 'optio';
    $request->quotaUser = 'cupiditate';
    $request->requestId = 'quia';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'cupiditate';
    $request->userIp = 'praesentium';
    $request->zone = 'accusamus';

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
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'deserunt';
    $request->instance = 'nobis';
    $request->key = 'quam';
    $request->oauthToken = 'placeat';
    $request->prettyPrint = false;
    $request->project = 'est';
    $request->quotaUser = 'non';
    $request->requestId = 'placeat';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'minus';
    $request->userIp = 'similique';
    $request->zone = 'corrupti';

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
