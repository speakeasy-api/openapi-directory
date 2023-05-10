# resourcePolicies

### Available Operations

* [computeResourcePoliciesAggregatedList](#computeresourcepoliciesaggregatedlist) - Retrieves an aggregated list of resource policies.
* [computeResourcePoliciesDelete](#computeresourcepoliciesdelete) - Deletes the specified resource policy.
* [computeResourcePoliciesGet](#computeresourcepoliciesget) - Retrieves all information of the specified resource policy.
* [computeResourcePoliciesGetIamPolicy](#computeresourcepoliciesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeResourcePoliciesInsert](#computeresourcepoliciesinsert) - Creates a new resource policy.
* [computeResourcePoliciesList](#computeresourcepolicieslist) - A list all the resource policies that have been configured for the specified project in specified region.
* [computeResourcePoliciesSetIamPolicy](#computeresourcepoliciessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeResourcePoliciesTestIamPermissions](#computeresourcepoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeResourcePoliciesAggregatedList

Retrieves an aggregated list of resource policies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeResourcePoliciesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ab';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'iste';
    $request->fields = 'sunt';
    $request->filter = 'corporis';
    $request->includeAllScopes = false;
    $request->key = 'quae';
    $request->maxResults = 2056;
    $request->oauthToken = 'ratione';
    $request->orderBy = 'sed';
    $request->pageToken = 'amet';
    $request->prettyPrint = false;
    $request->project = 'rerum';
    $request->quotaUser = 'eos';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'voluptatem';
    $request->userIp = 'cupiditate';

    $requestSecurity = new ComputeResourcePoliciesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeResourcePoliciesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resourcePolicies->computeResourcePoliciesAggregatedList($request, $requestSecurity);

    if ($response->resourcePolicyAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeResourcePoliciesDelete

Deletes the specified resource policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeResourcePoliciesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->fields = 'voluptate';
    $request->key = 'odio';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->project = 'earum';
    $request->quotaUser = 'nemo';
    $request->region = 'laboriosam';
    $request->requestId = 'aliquid';
    $request->resourcePolicy = 'iste';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'nemo';
    $request->userIp = 'facilis';

    $requestSecurity = new ComputeResourcePoliciesDeleteSecurity();
    $requestSecurity->option1 = new ComputeResourcePoliciesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resourcePolicies->computeResourcePoliciesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeResourcePoliciesGet

Retrieves all information of the specified resource policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeResourcePoliciesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dignissimos';
    $request->fields = 'nisi';
    $request->key = 'magni';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->project = 'ea';
    $request->quotaUser = 'labore';
    $request->region = 'perspiciatis';
    $request->resourcePolicy = 'possimus';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'aliquam';
    $request->userIp = 'necessitatibus';

    $requestSecurity = new ComputeResourcePoliciesGetSecurity();
    $requestSecurity->option1 = new ComputeResourcePoliciesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resourcePolicies->computeResourcePoliciesGet($request, $requestSecurity);

    if ($response->resourcePolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeResourcePoliciesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeResourcePoliciesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->fields = 'cumque';
    $request->key = 'a';
    $request->oauthToken = 'at';
    $request->optionsRequestedPolicyVersion = 173926;
    $request->prettyPrint = false;
    $request->project = 'odit';
    $request->quotaUser = 'molestiae';
    $request->region = 'ex';
    $request->resource = 'officiis';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'expedita';
    $request->userIp = 'rem';

    $requestSecurity = new ComputeResourcePoliciesGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeResourcePoliciesGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resourcePolicies->computeResourcePoliciesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeResourcePoliciesInsert

Creates a new resource policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicy;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyGroupPlacementPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyGroupPlacementPolicyCollocationEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyInstanceSchedulePolicy;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyInstanceSchedulePolicySchedule;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyResourceStatusInstanceSchedulePolicyStatus;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicySnapshotSchedulePolicy;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicySnapshotSchedulePolicyRetentionPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnSourceDiskDeleteEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicySnapshotSchedulePolicySchedule;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyDailyCycle;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyHourlyCycle;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyWeeklyCycle;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyWeeklyCycleDayOfWeek;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyWeeklyCycleDayOfWeekDayEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicySnapshotSchedulePolicySnapshotProperties;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeResourcePoliciesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->resourcePolicy = new ResourcePolicy();
    $request->resourcePolicy->creationTimestamp = 'repellat';
    $request->resourcePolicy->description = 'harum';
    $request->resourcePolicy->groupPlacementPolicy = new ResourcePolicyGroupPlacementPolicy();
    $request->resourcePolicy->groupPlacementPolicy->availabilityDomainCount = 538493;
    $request->resourcePolicy->groupPlacementPolicy->collocation = ResourcePolicyGroupPlacementPolicyCollocationEnum::COLLOCATED;
    $request->resourcePolicy->groupPlacementPolicy->vmCount = 861675;
    $request->resourcePolicy->id = 'aliquid';
    $request->resourcePolicy->instanceSchedulePolicy = new ResourcePolicyInstanceSchedulePolicy();
    $request->resourcePolicy->instanceSchedulePolicy->expirationTime = 'asperiores';
    $request->resourcePolicy->instanceSchedulePolicy->startTime = 'similique';
    $request->resourcePolicy->instanceSchedulePolicy->timeZone = 'veniam';
    $request->resourcePolicy->instanceSchedulePolicy->vmStartSchedule = new ResourcePolicyInstanceSchedulePolicySchedule();
    $request->resourcePolicy->instanceSchedulePolicy->vmStartSchedule->schedule = 'cum';
    $request->resourcePolicy->instanceSchedulePolicy->vmStopSchedule = new ResourcePolicyInstanceSchedulePolicySchedule();
    $request->resourcePolicy->instanceSchedulePolicy->vmStopSchedule->schedule = 'vel';
    $request->resourcePolicy->kind = 'earum';
    $request->resourcePolicy->name = 'Jake Renner';
    $request->resourcePolicy->region = 'dicta';
    $request->resourcePolicy->resourceStatus = new ResourcePolicyResourceStatus();
    $request->resourcePolicy->resourceStatus->instanceSchedulePolicy = new ResourcePolicyResourceStatusInstanceSchedulePolicyStatus();
    $request->resourcePolicy->resourceStatus->instanceSchedulePolicy->lastRunStartTime = 'qui';
    $request->resourcePolicy->resourceStatus->instanceSchedulePolicy->nextRunStartTime = 'asperiores';
    $request->resourcePolicy->selfLink = 'blanditiis';
    $request->resourcePolicy->snapshotSchedulePolicy = new ResourcePolicySnapshotSchedulePolicy();
    $request->resourcePolicy->snapshotSchedulePolicy->retentionPolicy = new ResourcePolicySnapshotSchedulePolicyRetentionPolicy();
    $request->resourcePolicy->snapshotSchedulePolicy->retentionPolicy->maxRetentionDays = 200301;
    $request->resourcePolicy->snapshotSchedulePolicy->retentionPolicy->onSourceDiskDelete = ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnSourceDiskDeleteEnum::UNSPECIFIED_ON_SOURCE_DISK_DELETE;
    $request->resourcePolicy->snapshotSchedulePolicy->schedule = new ResourcePolicySnapshotSchedulePolicySchedule();
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->dailySchedule = new ResourcePolicyDailyCycle();
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->dailySchedule->daysInCycle = 80904;
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->dailySchedule->duration = 'eligendi';
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->dailySchedule->startTime = 'animi';
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->hourlySchedule = new ResourcePolicyHourlyCycle();
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->hourlySchedule->duration = 'autem';
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->hourlySchedule->hoursInCycle = 673487;
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->hourlySchedule->startTime = 'omnis';
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->weeklySchedule = new ResourcePolicyWeeklyCycle();
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->weeklySchedule->dayOfWeeks = [
        new ResourcePolicyWeeklyCycleDayOfWeek(),
        new ResourcePolicyWeeklyCycleDayOfWeek(),
        new ResourcePolicyWeeklyCycleDayOfWeek(),
        new ResourcePolicyWeeklyCycleDayOfWeek(),
    ];
    $request->resourcePolicy->snapshotSchedulePolicy->snapshotProperties = new ResourcePolicySnapshotSchedulePolicySnapshotProperties();
    $request->resourcePolicy->snapshotSchedulePolicy->snapshotProperties->chainName = 'asperiores';
    $request->resourcePolicy->snapshotSchedulePolicy->snapshotProperties->guestFlush = false;
    $request->resourcePolicy->snapshotSchedulePolicy->snapshotProperties->labels = [
        'quis' => 'nisi',
        'vitae' => 'unde',
        'odit' => 'omnis',
        'placeat' => 'cumque',
    ];
    $request->resourcePolicy->snapshotSchedulePolicy->snapshotProperties->storageLocations = [
        'occaecati',
        'nemo',
        'laboriosam',
    ];
    $request->resourcePolicy->status = ResourcePolicyStatusEnum::CREATING;
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::JSON;
    $request->callback = 'adipisci';
    $request->fields = 'occaecati';
    $request->key = 'exercitationem';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->project = 'illo';
    $request->quotaUser = 'quas';
    $request->region = 'facere';
    $request->requestId = 'fuga';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'fugiat';
    $request->userIp = 'magnam';

    $requestSecurity = new ComputeResourcePoliciesInsertSecurity();
    $requestSecurity->option1 = new ComputeResourcePoliciesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resourcePolicies->computeResourcePoliciesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeResourcePoliciesList

A list all the resource policies that have been configured for the specified project in specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeResourcePoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quas';
    $request->fields = 'officiis';
    $request->filter = 'ipsum';
    $request->key = 'quisquam';
    $request->maxResults = 992888;
    $request->oauthToken = 'praesentium';
    $request->orderBy = 'accusamus';
    $request->pageToken = 'inventore';
    $request->prettyPrint = false;
    $request->project = 'ab';
    $request->quotaUser = 'dolore';
    $request->region = 'amet';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'officia';
    $request->userIp = 'natus';

    $requestSecurity = new ComputeResourcePoliciesListSecurity();
    $requestSecurity->option1 = new ComputeResourcePoliciesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resourcePolicies->computeResourcePoliciesList($request, $requestSecurity);

    if ($response->resourcePolicyList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeResourcePoliciesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionSetPolicyRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeResourcePoliciesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionSetPolicyRequest = new RegionSetPolicyRequest();
    $request->regionSetPolicyRequest->bindings = [
        new Binding(),
    ];
    $request->regionSetPolicyRequest->etag = 'deleniti';
    $request->regionSetPolicyRequest->policy = new Policy();
    $request->regionSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->regionSetPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->regionSetPolicyRequest->policy->etag = 'nihil';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 13700;
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->fields = 'qui';
    $request->key = 'aspernatur';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->project = 'voluptatum';
    $request->quotaUser = 'eius';
    $request->region = 'quaerat';
    $request->resource = 'amet';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'libero';
    $request->userIp = 'nesciunt';

    $requestSecurity = new ComputeResourcePoliciesSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeResourcePoliciesSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resourcePolicies->computeResourcePoliciesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeResourcePoliciesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeResourcePoliciesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'deleniti',
        'iure',
        'quis',
        'eum',
    ];
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'optio';
    $request->fields = 'eveniet';
    $request->key = 'incidunt';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->project = 'accusantium';
    $request->quotaUser = 'impedit';
    $request->region = 'fugiat';
    $request->resource = 'fugit';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'non';
    $request->userIp = 'reprehenderit';

    $requestSecurity = new ComputeResourcePoliciesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeResourcePoliciesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resourcePolicies->computeResourcePoliciesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
