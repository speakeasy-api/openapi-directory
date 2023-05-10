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
    $request->accessToken = 'eos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cumque';
    $request->fields = 'ut';
    $request->filter = 'quae';
    $request->includeAllScopes = false;
    $request->key = 'nihil';
    $request->maxResults = 462761;
    $request->oauthToken = 'assumenda';
    $request->orderBy = 'consequatur';
    $request->pageToken = 'cumque';
    $request->prettyPrint = false;
    $request->project = 'placeat';
    $request->quotaUser = 'adipisci';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'non';
    $request->userIp = 'accusantium';

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
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'impedit';
    $request->fields = 'dicta';
    $request->instanceTemplate = 'corporis';
    $request->key = 'impedit';
    $request->oauthToken = 'eveniet';
    $request->prettyPrint = false;
    $request->project = 'cum';
    $request->quotaUser = 'dolore';
    $request->requestId = 'illum';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'officiis';
    $request->userIp = 'quasi';

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
    $request->accessToken = 'animi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatem';
    $request->fields = 'maiores';
    $request->instanceTemplate = 'odio';
    $request->key = 'veniam';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->project = 'itaque';
    $request->quotaUser = 'possimus';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'sed';
    $request->userIp = 'deserunt';

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
    $request->accessToken = 'id';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corporis';
    $request->fields = 'quas';
    $request->key = 'soluta';
    $request->oauthToken = 'cupiditate';
    $request->optionsRequestedPolicyVersion = 602561;
    $request->prettyPrint = false;
    $request->project = 'et';
    $request->quotaUser = 'quisquam';
    $request->resource = 'unde';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'suscipit';
    $request->userIp = 'facere';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceTemplate = new InstanceTemplate();
    $request->instanceTemplate->creationTimestamp = 'nam';
    $request->instanceTemplate->description = 'quaerat';
    $request->instanceTemplate->id = 'corrupti';
    $request->instanceTemplate->kind = 'sint';
    $request->instanceTemplate->name = 'Kristin Boyle';
    $request->instanceTemplate->properties = new InstanceProperties();
    $request->instanceTemplate->properties->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->instanceTemplate->properties->advancedMachineFeatures->enableNestedVirtualization = false;
    $request->instanceTemplate->properties->advancedMachineFeatures->enableUefiNetworking = false;
    $request->instanceTemplate->properties->advancedMachineFeatures->threadsPerCore = 253916;
    $request->instanceTemplate->properties->advancedMachineFeatures->visibleCoreCount = 144621;
    $request->instanceTemplate->properties->canIpForward = false;
    $request->instanceTemplate->properties->confidentialInstanceConfig = new ConfidentialInstanceConfig();
    $request->instanceTemplate->properties->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->instanceTemplate->properties->description = 'inventore';
    $request->instanceTemplate->properties->disks = [
        new AttachedDisk(),
        new AttachedDisk(),
        new AttachedDisk(),
        new AttachedDisk(),
    ];
    $request->instanceTemplate->properties->guestAccelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->instanceTemplate->properties->keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum::STOP;
    $request->instanceTemplate->properties->labels = [
        'possimus' => 'provident',
        'veniam' => 'sit',
    ];
    $request->instanceTemplate->properties->machineType = 'fugit';
    $request->instanceTemplate->properties->metadata = new Metadata();
    $request->instanceTemplate->properties->metadata->fingerprint = 'a';
    $request->instanceTemplate->properties->metadata->items = [
        new MetadataItems(),
    ];
    $request->instanceTemplate->properties->metadata->kind = 'vero';
    $request->instanceTemplate->properties->minCpuPlatform = 'id';
    $request->instanceTemplate->properties->networkInterfaces = [
        new NetworkInterface(),
        new NetworkInterface(),
        new NetworkInterface(),
    ];
    $request->instanceTemplate->properties->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->instanceTemplate->properties->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::DEFAULT;
    $request->instanceTemplate->properties->privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum::ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE;
    $request->instanceTemplate->properties->reservationAffinity = new ReservationAffinity();
    $request->instanceTemplate->properties->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::SPECIFIC_RESERVATION;
    $request->instanceTemplate->properties->reservationAffinity->key = 'voluptas';
    $request->instanceTemplate->properties->reservationAffinity->values = [
        'maiores',
        'nihil',
        'fuga',
    ];
    $request->instanceTemplate->properties->resourceManagerTags = [
        'consequuntur' => 'maiores',
        'esse' => 'explicabo',
        'delectus' => 'quos',
        'deleniti' => 'enim',
    ];
    $request->instanceTemplate->properties->resourcePolicies = [
        'voluptatem',
    ];
    $request->instanceTemplate->properties->scheduling = new Scheduling();
    $request->instanceTemplate->properties->scheduling->automaticRestart = false;
    $request->instanceTemplate->properties->scheduling->instanceTerminationAction = SchedulingInstanceTerminationActionEnum::INSTANCE_TERMINATION_ACTION_UNSPECIFIED;
    $request->instanceTemplate->properties->scheduling->locationHint = 'voluptatem';
    $request->instanceTemplate->properties->scheduling->minNodeCpus = 271216;
    $request->instanceTemplate->properties->scheduling->nodeAffinities = [
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
        new SchedulingNodeAffinity(),
    ];
    $request->instanceTemplate->properties->scheduling->onHostMaintenance = SchedulingOnHostMaintenanceEnum::MIGRATE;
    $request->instanceTemplate->properties->scheduling->preemptible = false;
    $request->instanceTemplate->properties->scheduling->provisioningModel = SchedulingProvisioningModelEnum::SPOT;
    $request->instanceTemplate->properties->serviceAccounts = [
        new ServiceAccount(),
        new ServiceAccount(),
    ];
    $request->instanceTemplate->properties->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->instanceTemplate->properties->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->instanceTemplate->properties->shieldedInstanceConfig->enableSecureBoot = false;
    $request->instanceTemplate->properties->shieldedInstanceConfig->enableVtpm = false;
    $request->instanceTemplate->properties->tags = new Tags();
    $request->instanceTemplate->properties->tags->fingerprint = 'doloremque';
    $request->instanceTemplate->properties->tags->items = [
        'dolores',
        'perferendis',
        'esse',
    ];
    $request->instanceTemplate->region = 'quas';
    $request->instanceTemplate->selfLink = 'blanditiis';
    $request->instanceTemplate->sourceInstance = 'laudantium';
    $request->instanceTemplate->sourceInstanceParams = new SourceInstanceParams();
    $request->instanceTemplate->sourceInstanceParams->diskConfigs = [
        new DiskInstantiationConfig(),
        new DiskInstantiationConfig(),
        new DiskInstantiationConfig(),
        new DiskInstantiationConfig(),
    ];
    $request->accessToken = 'minus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vel';
    $request->fields = 'beatae';
    $request->key = 'quos';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->project = 'soluta';
    $request->quotaUser = 'tenetur';
    $request->requestId = 'necessitatibus';
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'suscipit';
    $request->userIp = 'ullam';

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
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magnam';
    $request->fields = 'doloremque';
    $request->filter = 'accusamus';
    $request->key = 'quod';
    $request->maxResults = 121133;
    $request->oauthToken = 'voluptas';
    $request->orderBy = 'earum';
    $request->pageToken = 'est';
    $request->prettyPrint = false;
    $request->project = 'earum';
    $request->quotaUser = 'nihil';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'rerum';
    $request->userIp = 'perferendis';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->globalSetPolicyRequest = new GlobalSetPolicyRequest();
    $request->globalSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->etag = 'ratione';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'modi';
    $request->globalSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->globalSetPolicyRequest->policy->version = 625683;
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eligendi';
    $request->fields = 'cum';
    $request->key = 'culpa';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->project = 'a';
    $request->quotaUser = 'magnam';
    $request->resource = 'eius';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'quia';
    $request->userIp = 'quod';

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
        'numquam',
        'explicabo',
        'eligendi',
    ];
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odit';
    $request->fields = 'est';
    $request->key = 'at';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->project = 'explicabo';
    $request->quotaUser = 'nulla';
    $request->resource = 'est';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'necessitatibus';
    $request->userIp = 'voluptatum';

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
