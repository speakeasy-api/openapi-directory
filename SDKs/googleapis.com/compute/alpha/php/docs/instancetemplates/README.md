# instanceTemplates

### Available Operations

* [computeInstanceTemplatesAggregatedList](#computeinstancetemplatesaggregatedlist) - Retrieves the list of all InstanceTemplates resources, regional and global, available to the specified project.
* [computeInstanceTemplatesDelete](#computeinstancetemplatesdelete) - Deletes the specified instance template. Deleting an instance template is permanent and cannot be undone. It is not possible to delete templates that are already in use by a managed instance group.
* [computeInstanceTemplatesGet](#computeinstancetemplatesget) - Returns the specified instance template.
* [computeInstanceTemplatesGetIamPolicy](#computeinstancetemplatesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeInstanceTemplatesInsert](#computeinstancetemplatesinsert) - Creates an instance template in the specified project using the data that is included in the request. If you are creating a new template to update an existing instance group, your new instance template must use the same network or, if applicable, the same subnetwork as the original template.
* [computeInstanceTemplatesList](#computeinstancetemplateslist) - Retrieves a list of instance templates that are contained within the specified project.
* [computeInstanceTemplatesSetIamPolicy](#computeinstancetemplatessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeInstanceTemplatesTestIamPermissions](#computeinstancetemplatestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeInstanceTemplatesAggregatedList

Retrieves the list of all InstanceTemplates resources, regional and global, available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceTemplatesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aperiam';
    $request->fields = 'itaque';
    $request->filter = 'sed';
    $request->includeAllScopes = false;
    $request->key = 'corporis';
    $request->maxResults = 164004;
    $request->oauthToken = 'odio';
    $request->orderBy = 'suscipit';
    $request->pageToken = 'quis';
    $request->prettyPrint = false;
    $request->project = 'nobis';
    $request->quotaUser = 'beatae';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'ex';
    $request->userIp = 'consequuntur';

    $requestSecurity = new ComputeInstanceTemplatesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeInstanceTemplatesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceTemplates->computeInstanceTemplatesAggregatedList($request, $requestSecurity);

    if ($response->instanceTemplateAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceTemplatesDelete

Deletes the specified instance template. Deleting an instance template is permanent and cannot be undone. It is not possible to delete templates that are already in use by a managed instance group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceTemplatesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laborum';
    $request->fields = 'optio';
    $request->instanceTemplate = 'debitis';
    $request->key = 'architecto';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->project = 'consequatur';
    $request->quotaUser = 'sunt';
    $request->requestId = 'odit';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'laboriosam';
    $request->userIp = 'quod';

    $requestSecurity = new ComputeInstanceTemplatesDeleteSecurity();
    $requestSecurity->option1 = new ComputeInstanceTemplatesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceTemplates->computeInstanceTemplatesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceTemplatesGet

Returns the specified instance template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceTemplatesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sequi';
    $request->fields = 'sint';
    $request->instanceTemplate = 'accusamus';
    $request->key = 'deleniti';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->project = 'consequuntur';
    $request->quotaUser = 'enim';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'quibusdam';
    $request->userIp = 'accusantium';

    $requestSecurity = new ComputeInstanceTemplatesGetSecurity();
    $requestSecurity->option1 = new ComputeInstanceTemplatesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceTemplates->computeInstanceTemplatesGet($request, $requestSecurity);

    if ($response->instanceTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceTemplatesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceTemplatesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quibusdam';
    $request->fields = 'excepturi';
    $request->key = 'nostrum';
    $request->oauthToken = 'sint';
    $request->optionsRequestedPolicyVersion = 984080;
    $request->prettyPrint = false;
    $request->project = 'magnam';
    $request->quotaUser = 'adipisci';
    $request->resource = 'natus';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'velit';
    $request->userIp = 'sint';

    $requestSecurity = new ComputeInstanceTemplatesGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeInstanceTemplatesGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceTemplates->computeInstanceTemplatesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceTemplatesInsert

Creates an instance template in the specified project using the data that is included in the request. If you are creating a new template to update an existing instance group, your new instance template must use the same network or, if applicable, the same subnetwork as the original template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceTemplate;
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
use \OpenAPI\OpenAPI\Models\Shared\SourceInstanceParams;
use \OpenAPI\OpenAPI\Models\Shared\DiskInstantiationConfig;
use \OpenAPI\OpenAPI\Models\Shared\DiskInstantiationConfigInstantiateFromEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceTemplatesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceTemplate = new InstanceTemplate();
    $request->instanceTemplate->creationTimestamp = 'nisi';
    $request->instanceTemplate->description = 'commodi';
    $request->instanceTemplate->id = 'impedit';
    $request->instanceTemplate->kind = 'facilis';
    $request->instanceTemplate->name = 'Jeremiah Hahn';
    $request->instanceTemplate->properties = new InstanceProperties();
    $request->instanceTemplate->properties->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->instanceTemplate->properties->advancedMachineFeatures->enableNestedVirtualization = false;
    $request->instanceTemplate->properties->advancedMachineFeatures->enableUefiNetworking = false;
    $request->instanceTemplate->properties->advancedMachineFeatures->numaNodeCount = 646456;
    $request->instanceTemplate->properties->advancedMachineFeatures->performanceMonitoringUnit = AdvancedMachineFeaturesPerformanceMonitoringUnitEnum::PERFORMANCE_MONITORING_UNIT_UNSPECIFIED;
    $request->instanceTemplate->properties->advancedMachineFeatures->threadsPerCore = 141314;
    $request->instanceTemplate->properties->advancedMachineFeatures->visibleCoreCount = 698088;
    $request->instanceTemplate->properties->canIpForward = false;
    $request->instanceTemplate->properties->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->instanceTemplate->properties->confidentialInstanceConfig->confidentialInstanceType = ConfidentialInstanceConfigConfidentialInstanceTypeEnum::CONFIDENTIAL_INSTANCE_TYPE_UNSPECIFIED;
    $request->instanceTemplate->properties->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->instanceTemplate->properties->description = 'magnam';
    $request->instanceTemplate->properties->disks = [
        new AttachedDisk(),
    ];
    $request->instanceTemplate->properties->displayDevice = new DisplayDevice();
    $request->instanceTemplate->properties->displayDevice->enableDisplay = false;
    $request->instanceTemplate->properties->guestAccelerators = [
        new AcceleratorConfig(),
    ];
    $request->instanceTemplate->properties->keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum::KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
    $request->instanceTemplate->properties->labels = [
        'perspiciatis' => 'nostrum',
        'temporibus' => 'et',
    ];
    $request->instanceTemplate->properties->machineType = 'debitis';
    $request->instanceTemplate->properties->metadata = new Metadata();
    $request->instanceTemplate->properties->metadata->fingerprint = 'nisi';
    $request->instanceTemplate->properties->metadata->items = [
        new MetadataItems(),
        new MetadataItems(),
    ];
    $request->instanceTemplate->properties->metadata->kind = 'excepturi';
    $request->instanceTemplate->properties->minCpuPlatform = 'quas';
    $request->instanceTemplate->properties->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->instanceTemplate->properties->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->instanceTemplate->properties->networkPerformanceConfig->externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum::TIER1;
    $request->instanceTemplate->properties->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::TIER1;
    $request->instanceTemplate->properties->postKeyRevocationActionType = InstancePropertiesPostKeyRevocationActionTypeEnum::NOOP;
    $request->instanceTemplate->properties->privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum::ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE;
    $request->instanceTemplate->properties->reservationAffinity = new ReservationAffinity();
    $request->instanceTemplate->properties->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::SPECIFIC_RESERVATION;
    $request->instanceTemplate->properties->reservationAffinity->key = 'commodi';
    $request->instanceTemplate->properties->reservationAffinity->values = [
        'dicta',
    ];
    $request->instanceTemplate->properties->resourceManagerTags = [
        'maxime' => 'dolores',
        'molestias' => 'quam',
    ];
    $request->instanceTemplate->properties->resourcePolicies = [
        'aliquid',
        'voluptate',
    ];
    $request->instanceTemplate->properties->scheduling = new Scheduling();
    $request->instanceTemplate->properties->scheduling->automaticRestart = false;
    $request->instanceTemplate->properties->scheduling->availabilityDomain = 433265;
    $request->instanceTemplate->properties->scheduling->currentCpus = 232557;
    $request->instanceTemplate->properties->scheduling->currentMemoryMb = 'velit';
    $request->instanceTemplate->properties->scheduling->hostErrorTimeoutSeconds = 273839;
    $request->instanceTemplate->properties->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::DELETE;
    $request->instanceTemplate->properties->scheduling->latencyTolerant = false;
    $request->instanceTemplate->properties->scheduling->localSsdRecoveryTimeout = new Duration();
    $request->instanceTemplate->properties->scheduling->localSsdRecoveryTimeout->nanos = 323569;
    $request->instanceTemplate->properties->scheduling->localSsdRecoveryTimeout->seconds = 'incidunt';
    $request->instanceTemplate->properties->scheduling->locationHint = 'alias';
    $request->instanceTemplate->properties->scheduling->maintenanceFreezeDurationHours = 239580;
    $request->instanceTemplate->properties->scheduling->maintenanceInterval = SchedulingMaintenanceIntervalEnum::PERIODIC;
    $request->instanceTemplate->properties->scheduling->maxRunDuration = new Duration();
    $request->instanceTemplate->properties->scheduling->maxRunDuration->nanos = 734296;
    $request->instanceTemplate->properties->scheduling->maxRunDuration->seconds = 'asperiores';
    $request->instanceTemplate->properties->scheduling->minNodeCpus = 716975;
    $request->instanceTemplate->properties->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->instanceTemplate->properties->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::TERMINATE;
    $request->instanceTemplate->properties->scheduling->preemptible = false;
    $request->instanceTemplate->properties->scheduling->provisioningModel = SchedulingProvisioningModelEnum::SPOT;
    $request->instanceTemplate->properties->scheduling->terminationTime = 'et';
    $request->instanceTemplate->properties->secureTags = [
        'excepturi',
        'deleniti',
        'inventore',
        'perspiciatis',
    ];
    $request->instanceTemplate->properties->serviceAccounts = [
        new ServiceAccount(),
    ];
    $request->instanceTemplate->properties->serviceIntegrationSpecs = [
        'ullam' => new ServiceIntegrationSpec(),
        'molestiae' => new ServiceIntegrationSpec(),
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
    $request->instanceTemplate->properties->tags->fingerprint = 'adipisci';
    $request->instanceTemplate->properties->tags->items = [
        'perspiciatis',
        'optio',
        'itaque',
    ];
    $request->instanceTemplate->region = 'at';
    $request->instanceTemplate->selfLink = 'nam';
    $request->instanceTemplate->selfLinkWithId = 'id';
    $request->instanceTemplate->sourceInstance = 'cumque';
    $request->instanceTemplate->sourceInstanceParams = new SourceInstanceParams();
    $request->instanceTemplate->sourceInstanceParams->diskConfigs = [
        new DiskInstantiationConfig(),
        new DiskInstantiationConfig(),
    ];
    $request->accessToken = 'a';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'culpa';
    $request->fields = 'dolor';
    $request->key = 'occaecati';
    $request->oauthToken = 'exercitationem';
    $request->prettyPrint = false;
    $request->project = 'unde';
    $request->quotaUser = 'labore';
    $request->requestId = 'pariatur';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'laboriosam';
    $request->userIp = 'soluta';

    $requestSecurity = new ComputeInstanceTemplatesInsertSecurity();
    $requestSecurity->option1 = new ComputeInstanceTemplatesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceTemplates->computeInstanceTemplatesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceTemplatesList

Retrieves a list of instance templates that are contained within the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceTemplatesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'magni';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officiis';
    $request->fields = 'aliquam';
    $request->filter = 'quas';
    $request->key = 'aut';
    $request->maxResults = 422215;
    $request->oauthToken = 'dolorem';
    $request->orderBy = 'explicabo';
    $request->pageToken = 'rerum';
    $request->prettyPrint = false;
    $request->project = 'iste';
    $request->quotaUser = 'occaecati';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'tempora';
    $request->userIp = 'libero';

    $requestSecurity = new ComputeInstanceTemplatesListSecurity();
    $requestSecurity->option1 = new ComputeInstanceTemplatesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceTemplates->computeInstanceTemplatesList($request, $requestSecurity);

    if ($response->instanceTemplateList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceTemplatesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesSetIamPolicyRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceTemplatesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->globalSetPolicyRequest = new GlobalSetPolicyRequest();
    $request->globalSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->etag = 'id';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'accusantium';
    $request->globalSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
    ];
    $request->globalSetPolicyRequest->policy->version = 202642;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'atque';
    $request->fields = 'explicabo';
    $request->key = 'totam';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->project = 'nemo';
    $request->quotaUser = 'sequi';
    $request->resource = 'optio';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'ab';
    $request->userIp = 'alias';

    $requestSecurity = new ComputeInstanceTemplatesSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeInstanceTemplatesSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceTemplates->computeInstanceTemplatesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceTemplatesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceTemplatesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceTemplatesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'autem',
    ];
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'reiciendis';
    $request->fields = 'incidunt';
    $request->key = 'provident';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->project = 'illo';
    $request->quotaUser = 'recusandae';
    $request->resource = 'quod';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'sit';
    $request->userIp = 'voluptas';

    $requestSecurity = new ComputeInstanceTemplatesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeInstanceTemplatesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceTemplates->computeInstanceTemplatesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
