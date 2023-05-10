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
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'asperiores';
    $request->fields = 'animi';
    $request->instanceTemplate = 'soluta';
    $request->key = 'excepturi';
    $request->oauthToken = 'voluptates';
    $request->prettyPrint = false;
    $request->project = 'veniam';
    $request->quotaUser = 'perspiciatis';
    $request->region = 'laborum';
    $request->requestId = 'incidunt';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'a';
    $request->userIp = 'ipsum';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ex';
    $request->fields = 'dolore';
    $request->instanceTemplate = 'accusamus';
    $request->key = 'deserunt';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->project = 'autem';
    $request->quotaUser = 'rerum';
    $request->region = 'sapiente';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'reiciendis';
    $request->userIp = 'doloribus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceTemplate = new InstanceTemplate();
    $request->instanceTemplate->creationTimestamp = 'quaerat';
    $request->instanceTemplate->description = 'recusandae';
    $request->instanceTemplate->id = 'praesentium';
    $request->instanceTemplate->kind = 'quod';
    $request->instanceTemplate->name = 'Lula Franecki';
    $request->instanceTemplate->properties = new InstanceProperties();
    $request->instanceTemplate->properties->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->instanceTemplate->properties->advancedMachineFeatures->enableNestedVirtualization = false;
    $request->instanceTemplate->properties->advancedMachineFeatures->enableUefiNetworking = false;
    $request->instanceTemplate->properties->advancedMachineFeatures->threadsPerCore = 679557;
    $request->instanceTemplate->properties->advancedMachineFeatures->visibleCoreCount = 780631;
    $request->instanceTemplate->properties->canIpForward = false;
    $request->instanceTemplate->properties->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->instanceTemplate->properties->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->instanceTemplate->properties->description = 'placeat';
    $request->instanceTemplate->properties->disks = [
        new AttachedDisk(),
        new AttachedDisk(),
        new AttachedDisk(),
        new AttachedDisk(),
    ];
    $request->instanceTemplate->properties->displayDevice = new DisplayDevice();
    $request->instanceTemplate->properties->displayDevice->enableDisplay = false;
    $request->instanceTemplate->properties->guestAccelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->instanceTemplate->properties->keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum::STOP;
    $request->instanceTemplate->properties->labels = [
        'minus' => 'ad',
        'consequuntur' => 'qui',
        'reprehenderit' => 'atque',
        'architecto' => 'numquam',
    ];
    $request->instanceTemplate->properties->machineType = 'recusandae';
    $request->instanceTemplate->properties->metadata = new Metadata();
    $request->instanceTemplate->properties->metadata->fingerprint = 'porro';
    $request->instanceTemplate->properties->metadata->items = [
        new MetadataItems(),
        new MetadataItems(),
        new MetadataItems(),
    ];
    $request->instanceTemplate->properties->metadata->kind = 'aperiam';
    $request->instanceTemplate->properties->minCpuPlatform = 'architecto';
    $request->instanceTemplate->properties->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->instanceTemplate->properties->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->instanceTemplate->properties->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::TIER1;
    $request->instanceTemplate->properties->postKeyRevocationActionType = InstancePropertiesPostKeyRevocationActionTypeEnum::SHUTDOWN;
    $request->instanceTemplate->properties->privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum::ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE;
    $request->instanceTemplate->properties->reservationAffinity = new ReservationAffinity();
    $request->instanceTemplate->properties->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::ANY_RESERVATION;
    $request->instanceTemplate->properties->reservationAffinity->key = 'repudiandae';
    $request->instanceTemplate->properties->reservationAffinity->values = [
        'quae',
        'consectetur',
        'quaerat',
    ];
    $request->instanceTemplate->properties->resourceManagerTags = [
        'fugiat' => 'quaerat',
    ];
    $request->instanceTemplate->properties->resourcePolicies = [
        'perferendis',
    ];
    $request->instanceTemplate->properties->scheduling = new Scheduling();
    $request->instanceTemplate->properties->scheduling->automaticRestart = false;
    $request->instanceTemplate->properties->scheduling->hostErrorTimeoutSeconds = 273823;
    $request->instanceTemplate->properties->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::INSTANCE_TERMINATION_ACTION_UNSPECIFIED;
    $request->instanceTemplate->properties->scheduling->locationHint = 'dolores';
    $request->instanceTemplate->properties->scheduling->maintenanceFreezeDurationHours = 332909;
    $request->instanceTemplate->properties->scheduling->maintenanceInterval = SchedulingMaintenanceIntervalEnum::PERIODIC;
    $request->instanceTemplate->properties->scheduling->maxRunDuration = new Duration();
    $request->instanceTemplate->properties->scheduling->maxRunDuration->nanos = 892527;
    $request->instanceTemplate->properties->scheduling->maxRunDuration->seconds = 'asperiores';
    $request->instanceTemplate->properties->scheduling->minNodeCpus = 479864;
    $request->instanceTemplate->properties->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
    ];
    $request->instanceTemplate->properties->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::TERMINATE;
    $request->instanceTemplate->properties->scheduling->preemptible = false;
    $request->instanceTemplate->properties->scheduling->provisioningModel = SchedulingProvisioningModelEnum::STANDARD;
    $request->instanceTemplate->properties->scheduling->terminationTime = 'minima';
    $request->instanceTemplate->properties->serviceAccounts = [
        new ServiceAccount(),
        new ServiceAccount(),
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
    $request->instanceTemplate->properties->tags->fingerprint = 'est';
    $request->instanceTemplate->properties->tags->items = [
        'architecto',
    ];
    $request->instanceTemplate->region = 'fugiat';
    $request->instanceTemplate->selfLink = 'eum';
    $request->instanceTemplate->sourceInstance = 'vitae';
    $request->instanceTemplate->sourceInstanceParams = new SourceInstanceParams();
    $request->instanceTemplate->sourceInstanceParams->diskConfigs = [
        new DiskInstantiationConfig(),
        new DiskInstantiationConfig(),
    ];
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'velit';
    $request->fields = 'dicta';
    $request->key = 'in';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->project = 'sint';
    $request->quotaUser = 'dolores';
    $request->region = 'repudiandae';
    $request->requestId = 'fuga';
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'totam';
    $request->userIp = 'laboriosam';

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
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nostrum';
    $request->fields = 'qui';
    $request->filter = 'sunt';
    $request->key = 'rerum';
    $request->maxResults = 548083;
    $request->oauthToken = 'qui';
    $request->orderBy = 'quas';
    $request->pageToken = 'similique';
    $request->prettyPrint = false;
    $request->project = 'error';
    $request->quotaUser = 'doloremque';
    $request->region = 'amet';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'eum';
    $request->userIp = 'commodi';

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
