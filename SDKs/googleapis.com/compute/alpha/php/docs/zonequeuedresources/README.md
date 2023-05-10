# zoneQueuedResources

### Available Operations

* [computeZoneQueuedResourcesAggregatedList](#computezonequeuedresourcesaggregatedlist) - Retrieves an aggregated list of all of the queued resources in a project across all zones.
* [computeZoneQueuedResourcesCancel](#computezonequeuedresourcescancel) - Cancels a QueuedResource. Only a resource in ACCEPTED state may be cancelled.
* [computeZoneQueuedResourcesDelete](#computezonequeuedresourcesdelete) - Deletes a QueuedResource. For a QueuedResource in ACCEPTED state, call cancel on the resource before deleting, to make sure no VMs have been provisioned and may require cleaning up. For a QueuedResource in PROVISIONING state the request to delete is registered for execution following the provisioning.
* [computeZoneQueuedResourcesGet](#computezonequeuedresourcesget) - Returns the specified QueuedResource resource.
* [computeZoneQueuedResourcesInsert](#computezonequeuedresourcesinsert) - Creates a QueuedResource.
* [computeZoneQueuedResourcesList](#computezonequeuedresourceslist) - Retrieves the list of QueuedResource resources.

## computeZoneQueuedResourcesAggregatedList

Retrieves an aggregated list of all of the queued resources in a project across all zones.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeZoneQueuedResourcesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'cum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'animi';
    $request->fields = 'temporibus';
    $request->filter = 'deserunt';
    $request->includeAllScopes = false;
    $request->key = 'natus';
    $request->maxResults = 820446;
    $request->oauthToken = 'est';
    $request->orderBy = 'perferendis';
    $request->pageToken = 'iste';
    $request->prettyPrint = false;
    $request->project = 'sapiente';
    $request->quotaUser = 'molestias';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'facilis';
    $request->userIp = 'ut';

    $requestSecurity = new ComputeZoneQueuedResourcesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeZoneQueuedResourcesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->zoneQueuedResources->computeZoneQueuedResourcesAggregatedList($request, $requestSecurity);

    if ($response->queuedResourcesAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeZoneQueuedResourcesCancel

Cancels a QueuedResource. Only a resource in ACCEPTED state may be cancelled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesCancelSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesCancelSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesCancelSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeZoneQueuedResourcesCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'hic';
    $request->fields = 'iste';
    $request->key = 'repudiandae';
    $request->oauthToken = 'eius';
    $request->prettyPrint = false;
    $request->project = 'facere';
    $request->queuedResource = 'blanditiis';
    $request->quotaUser = 'dolor';
    $request->requestId = 'fuga';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'nisi';
    $request->userIp = 'assumenda';
    $request->zone = 'pariatur';

    $requestSecurity = new ComputeZoneQueuedResourcesCancelSecurity();
    $requestSecurity->option1 = new ComputeZoneQueuedResourcesCancelSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->zoneQueuedResources->computeZoneQueuedResourcesCancel($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeZoneQueuedResourcesDelete

Deletes a QueuedResource. For a QueuedResource in ACCEPTED state, call cancel on the resource before deleting, to make sure no VMs have been provisioned and may require cleaning up. For a QueuedResource in PROVISIONING state the request to delete is registered for execution following the provisioning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeZoneQueuedResourcesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->fields = 'at';
    $request->key = 'temporibus';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->project = 'a';
    $request->queuedResource = 'culpa';
    $request->quotaUser = 'consequatur';
    $request->requestId = 'doloribus';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'quos';
    $request->userIp = 'pariatur';
    $request->zone = 'nulla';

    $requestSecurity = new ComputeZoneQueuedResourcesDeleteSecurity();
    $requestSecurity->option1 = new ComputeZoneQueuedResourcesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->zoneQueuedResources->computeZoneQueuedResourcesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeZoneQueuedResourcesGet

Returns the specified QueuedResource resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeZoneQueuedResourcesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->fields = 'voluptatum';
    $request->key = 'corporis';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->project = 'architecto';
    $request->queuedResource = 'totam';
    $request->quotaUser = 'quia';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'culpa';
    $request->userIp = 'possimus';
    $request->zone = 'eligendi';

    $requestSecurity = new ComputeZoneQueuedResourcesGetSecurity();
    $requestSecurity->option1 = new ComputeZoneQueuedResourcesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->zoneQueuedResources->computeZoneQueuedResourcesGet($request, $requestSecurity);

    if ($response->queuedResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeZoneQueuedResourcesInsert

Creates a QueuedResource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueuedResource;
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
use \OpenAPI\OpenAPI\Models\Shared\QueuingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\QueuedResourceStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueuedResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\QueuedResourceStatusFailedData;
use \OpenAPI\OpenAPI\Models\Shared\QueuedResourceStatusFailedDataError;
use \OpenAPI\OpenAPI\Models\Shared\QueuedResourceStatusFailedDataErrorErrors;
use \OpenAPI\OpenAPI\Models\Shared\QueuedResourceStatusFailedDataErrorErrorsErrorDetails;
use \OpenAPI\OpenAPI\Models\Shared\ErrorInfo;
use \OpenAPI\OpenAPI\Models\Shared\Help;
use \OpenAPI\OpenAPI\Models\Shared\HelpLink;
use \OpenAPI\OpenAPI\Models\Shared\LocalizedMessage;
use \OpenAPI\OpenAPI\Models\Shared\QuotaExceededInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeZoneQueuedResourcesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->queuedResource = new QueuedResource();
    $request->queuedResource->bulkInsertInstanceResource = new BulkInsertInstanceResource();
    $request->queuedResource->bulkInsertInstanceResource->count = 'eaque';
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties = new InstanceProperties();
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->enableNestedVirtualization = false;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->enableUefiNetworking = false;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->numaNodeCount = 380375;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->performanceMonitoringUnit = AdvancedMachineFeaturesPerformanceMonitoringUnitEnum::ENHANCED;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->threadsPerCore = 167298;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->advancedMachineFeatures->visibleCoreCount = 784207;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->canIpForward = false;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->confidentialInstanceConfig->confidentialInstanceType = ConfidentialInstanceConfigConfidentialInstanceTypeEnum::CONFIDENTIAL_INSTANCE_TYPE_UNSPECIFIED;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->description = 'rem';
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->disks = [
        new AttachedDisk(),
    ];
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->displayDevice = new DisplayDevice();
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->displayDevice->enableDisplay = false;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->guestAccelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum::NONE;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->labels = [
        'quibusdam' => 'vitae',
    ];
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->machineType = 'quasi';
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->metadata = new Metadata();
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->metadata->fingerprint = 'veniam';
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->metadata->items = [
        new MetadataItems(),
        new MetadataItems(),
    ];
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->metadata->kind = 'ut';
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->minCpuPlatform = 'vero';
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->networkPerformanceConfig->externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum::TIER1;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::DEFAULT;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->postKeyRevocationActionType = InstancePropertiesPostKeyRevocationActionTypeEnum::NOOP;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum::ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->reservationAffinity = new ReservationAffinity();
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::SPECIFIC_THEN_ANY_RESERVATION;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->reservationAffinity->key = 'laudantium';
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->reservationAffinity->values = [
        'asperiores',
        'harum',
    ];
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->resourceManagerTags = [
        'temporibus' => 'commodi',
        'distinctio' => 'ut',
    ];
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->resourcePolicies = [
        'quas',
        'eos',
    ];
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->scheduling = new Scheduling();
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->scheduling->automaticRestart = false;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->scheduling->availabilityDomain = 859870;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->scheduling->currentCpus = 718759;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->scheduling->currentMemoryMb = 'est';
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->scheduling->hostErrorTimeoutSeconds = 861925;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::STOP;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->scheduling->latencyTolerant = false;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->scheduling->localSsdRecoveryTimeout = new Duration();
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->scheduling->localSsdRecoveryTimeout->nanos = 161698;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->scheduling->localSsdRecoveryTimeout->seconds = 'tenetur';
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->scheduling->locationHint = 'hic';
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->scheduling->maintenanceFreezeDurationHours = 843359;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->scheduling->maintenanceInterval = SchedulingMaintenanceIntervalEnum::PERIODIC;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->scheduling->maxRunDuration = new Duration();
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->scheduling->maxRunDuration->nanos = 41752;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->scheduling->maxRunDuration->seconds = 'neque';
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->scheduling->minNodeCpus = 754769;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
    ];
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::TERMINATE;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->scheduling->preemptible = false;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->scheduling->provisioningModel = SchedulingProvisioningModelEnum::STANDARD;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->scheduling->terminationTime = 'soluta';
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->secureTags = [
        'voluptatibus',
    ];
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->serviceAccounts = [
        new ServiceAccount(),
        new ServiceAccount(),
        new ServiceAccount(),
        new ServiceAccount(),
    ];
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->serviceIntegrationSpecs = [
        'harum' => new ServiceIntegrationSpec(),
    ];
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->shieldedInstanceConfig->enableSecureBoot = false;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->shieldedInstanceConfig->enableVtpm = false;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->shieldedVmConfig = new ShieldedVmConfig();
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->shieldedVmConfig->enableIntegrityMonitoring = false;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->shieldedVmConfig->enableSecureBoot = false;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->shieldedVmConfig->enableVtpm = false;
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->tags = new Tags();
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->tags->fingerprint = 'corporis';
    $request->queuedResource->bulkInsertInstanceResource->instanceProperties->tags->items = [
        'quos',
        'eum',
    ];
    $request->queuedResource->bulkInsertInstanceResource->locationPolicy = new LocationPolicy();
    $request->queuedResource->bulkInsertInstanceResource->locationPolicy->locations = [
        'consectetur' => new LocationPolicyLocation(),
        'pariatur' => new LocationPolicyLocation(),
    ];
    $request->queuedResource->bulkInsertInstanceResource->locationPolicy->targetShape = LocationPolicyTargetShapeEnum::ANY;
    $request->queuedResource->bulkInsertInstanceResource->minCount = 'atque';
    $request->queuedResource->bulkInsertInstanceResource->namePattern = 'maxime';
    $request->queuedResource->bulkInsertInstanceResource->perInstanceProperties = [
        'aliquid' => new BulkInsertInstanceResourcePerInstanceProperties(),
    ];
    $request->queuedResource->bulkInsertInstanceResource->sourceInstanceTemplate = 'eveniet';
    $request->queuedResource->creationTimestamp = 'deserunt';
    $request->queuedResource->description = 'rem';
    $request->queuedResource->id = 'incidunt';
    $request->queuedResource->kind = 'fuga';
    $request->queuedResource->name = 'Max Beier';
    $request->queuedResource->queuingPolicy = new QueuingPolicy();
    $request->queuedResource->queuingPolicy->validUntilDuration = new Duration();
    $request->queuedResource->queuingPolicy->validUntilDuration->nanos = 980995;
    $request->queuedResource->queuingPolicy->validUntilDuration->seconds = 'maxime';
    $request->queuedResource->queuingPolicy->validUntilTime = 'reprehenderit';
    $request->queuedResource->selfLink = 'alias';
    $request->queuedResource->selfLinkWithId = 'rerum';
    $request->queuedResource->state = QueuedResourceStateEnum::CANCELLED;
    $request->queuedResource->status = new QueuedResourceStatus();
    $request->queuedResource->status->failedData = new QueuedResourceStatusFailedData();
    $request->queuedResource->status->failedData->error = new QueuedResourceStatusFailedDataError();
    $request->queuedResource->status->failedData->error->errors = [
        new QueuedResourceStatusFailedDataErrorErrors(),
        new QueuedResourceStatusFailedDataErrorErrors(),
        new QueuedResourceStatusFailedDataErrorErrors(),
        new QueuedResourceStatusFailedDataErrorErrors(),
    ];
    $request->queuedResource->status->provisioningOperations = [
        'beatae',
        'alias',
        'occaecati',
        'architecto',
    ];
    $request->queuedResource->status->queuingPolicy = new QueuingPolicy();
    $request->queuedResource->status->queuingPolicy->validUntilDuration = new Duration();
    $request->queuedResource->status->queuingPolicy->validUntilDuration->nanos = 458572;
    $request->queuedResource->status->queuingPolicy->validUntilDuration->seconds = 'accusantium';
    $request->queuedResource->status->queuingPolicy->validUntilTime = 'asperiores';
    $request->queuedResource->zone = 'earum';
    $request->accessToken = 'earum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'qui';
    $request->key = 'quasi';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->project = 'voluptate';
    $request->quotaUser = 'quibusdam';
    $request->requestId = 'perferendis';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'ducimus';
    $request->userIp = 'magni';
    $request->zone = 'cum';

    $requestSecurity = new ComputeZoneQueuedResourcesInsertSecurity();
    $requestSecurity->option1 = new ComputeZoneQueuedResourcesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->zoneQueuedResources->computeZoneQueuedResourcesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeZoneQueuedResourcesList

Retrieves the list of QueuedResource resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeZoneQueuedResourcesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeZoneQueuedResourcesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'delectus';
    $request->fields = 'odit';
    $request->filter = 'voluptates';
    $request->key = 'non';
    $request->maxResults = 913945;
    $request->oauthToken = 'odio';
    $request->orderBy = 'veniam';
    $request->pageToken = 'non';
    $request->prettyPrint = false;
    $request->project = 'laboriosam';
    $request->quotaUser = 'sint';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'ipsam';
    $request->userIp = 'nihil';
    $request->zone = 'impedit';

    $requestSecurity = new ComputeZoneQueuedResourcesListSecurity();
    $requestSecurity->option1 = new ComputeZoneQueuedResourcesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->zoneQueuedResources->computeZoneQueuedResourcesList($request, $requestSecurity);

    if ($response->queuedResourceList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
