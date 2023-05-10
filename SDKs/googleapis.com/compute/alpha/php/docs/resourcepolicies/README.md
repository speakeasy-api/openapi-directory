# resourcePolicies

### Available Operations

* [computeResourcePoliciesAggregatedList](#computeresourcepoliciesaggregatedlist) - Retrieves an aggregated list of resource policies.
* [computeResourcePoliciesDelete](#computeresourcepoliciesdelete) - Deletes the specified resource policy.
* [computeResourcePoliciesGet](#computeresourcepoliciesget) - Retrieves all information of the specified resource policy.
* [computeResourcePoliciesGetIamPolicy](#computeresourcepoliciesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeResourcePoliciesInsert](#computeresourcepoliciesinsert) - Creates a new resource policy.
* [computeResourcePoliciesList](#computeresourcepolicieslist) - A list all the resource policies that have been configured for the specified project in specified region.
* [computeResourcePoliciesPatch](#computeresourcepoliciespatch) - Modify the specified resource policy.
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
    $request->accessToken = 'officia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptate';
    $request->fields = 'hic';
    $request->filter = 'tenetur';
    $request->includeAllScopes = false;
    $request->key = 'eos';
    $request->maxResults = 654300;
    $request->oauthToken = 'beatae';
    $request->orderBy = 'magni';
    $request->pageToken = 'doloribus';
    $request->prettyPrint = false;
    $request->project = 'rerum';
    $request->quotaUser = 'eaque';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'ut';
    $request->userIp = 'quod';

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
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quisquam';
    $request->fields = 'dolores';
    $request->key = 'non';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->project = 'perferendis';
    $request->quotaUser = 'libero';
    $request->region = 'sunt';
    $request->requestId = 'beatae';
    $request->resourcePolicy = 'ratione';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'illo';
    $request->userIp = 'debitis';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'corporis';
    $request->key = 'quidem';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->project = 'amet';
    $request->quotaUser = 'quisquam';
    $request->region = 'eveniet';
    $request->resourcePolicy = 'possimus';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'quas';
    $request->userIp = 'odio';

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
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'dolorem';
    $request->key = 'hic';
    $request->oauthToken = 'dolore';
    $request->optionsRequestedPolicyVersion = 272908;
    $request->prettyPrint = false;
    $request->project = 'harum';
    $request->quotaUser = 'delectus';
    $request->region = 'tempora';
    $request->resource = 'laboriosam';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'porro';
    $request->userIp = 'ducimus';

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
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyGroupPlacementPolicyLocalityEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyGroupPlacementPolicyScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyGroupPlacementPolicyStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyInstanceSchedulePolicy;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyInstanceSchedulePolicySchedule;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyResourceStatusInstanceSchedulePolicyStatus;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicySnapshotSchedulePolicy;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicySnapshotSchedulePolicyRetentionPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnPolicySwitchEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnSourceDiskDeleteEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicySnapshotSchedulePolicySchedule;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyDailyCycle;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyHourlyCycle;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyWeeklyCycle;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyWeeklyCycleDayOfWeek;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyWeeklyCycleDayOfWeekDayEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicySnapshotSchedulePolicySnapshotProperties;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyVmMaintenancePolicy;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyVmMaintenancePolicyConcurrencyControl;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyVmMaintenancePolicyMaintenanceWindow;
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
    $request->resourcePolicy->creationTimestamp = 'expedita';
    $request->resourcePolicy->description = 'error';
    $request->resourcePolicy->diskConsistencyGroupPolicy = [
        'placeat' => 'dignissimos',
    ];
    $request->resourcePolicy->groupPlacementPolicy = new ResourcePolicyGroupPlacementPolicy();
    $request->resourcePolicy->groupPlacementPolicy->availabilityDomainCount = 590745;
    $request->resourcePolicy->groupPlacementPolicy->collocation = ResourcePolicyGroupPlacementPolicyCollocationEnum::UNSPECIFIED_COLLOCATION;
    $request->resourcePolicy->groupPlacementPolicy->locality = ResourcePolicyGroupPlacementPolicyLocalityEnum::STRICT;
    $request->resourcePolicy->groupPlacementPolicy->maxDistance = 386057;
    $request->resourcePolicy->groupPlacementPolicy->scope = ResourcePolicyGroupPlacementPolicyScopeEnum::HOST;
    $request->resourcePolicy->groupPlacementPolicy->style = ResourcePolicyGroupPlacementPolicyStyleEnum::UNSPECIFIED_PLACEMENT_TYPE;
    $request->resourcePolicy->groupPlacementPolicy->tpuTopology = 'debitis';
    $request->resourcePolicy->groupPlacementPolicy->vmCount = 238401;
    $request->resourcePolicy->id = 'quia';
    $request->resourcePolicy->instanceSchedulePolicy = new ResourcePolicyInstanceSchedulePolicy();
    $request->resourcePolicy->instanceSchedulePolicy->expirationTime = 'amet';
    $request->resourcePolicy->instanceSchedulePolicy->startTime = 'blanditiis';
    $request->resourcePolicy->instanceSchedulePolicy->timeZone = 'reprehenderit';
    $request->resourcePolicy->instanceSchedulePolicy->vmStartSchedule = new ResourcePolicyInstanceSchedulePolicySchedule();
    $request->resourcePolicy->instanceSchedulePolicy->vmStartSchedule->schedule = 'enim';
    $request->resourcePolicy->instanceSchedulePolicy->vmStopSchedule = new ResourcePolicyInstanceSchedulePolicySchedule();
    $request->resourcePolicy->instanceSchedulePolicy->vmStopSchedule->schedule = 'laborum';
    $request->resourcePolicy->kind = 'labore';
    $request->resourcePolicy->name = 'Martin Weber';
    $request->resourcePolicy->region = 'quibusdam';
    $request->resourcePolicy->resourceStatus = new ResourcePolicyResourceStatus();
    $request->resourcePolicy->resourceStatus->instanceSchedulePolicy = new ResourcePolicyResourceStatusInstanceSchedulePolicyStatus();
    $request->resourcePolicy->resourceStatus->instanceSchedulePolicy->lastRunStartTime = 'voluptatum';
    $request->resourcePolicy->resourceStatus->instanceSchedulePolicy->nextRunStartTime = 'ducimus';
    $request->resourcePolicy->selfLink = 'nobis';
    $request->resourcePolicy->selfLinkWithId = 'corporis';
    $request->resourcePolicy->snapshotSchedulePolicy = new ResourcePolicySnapshotSchedulePolicy();
    $request->resourcePolicy->snapshotSchedulePolicy->retentionPolicy = new ResourcePolicySnapshotSchedulePolicyRetentionPolicy();
    $request->resourcePolicy->snapshotSchedulePolicy->retentionPolicy->maxRetentionDays = 115012;
    $request->resourcePolicy->snapshotSchedulePolicy->retentionPolicy->onPolicySwitch = ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnPolicySwitchEnum::UNSPECIFIED_ON_POLICY_SWITCH;
    $request->resourcePolicy->snapshotSchedulePolicy->retentionPolicy->onSourceDiskDelete = ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnSourceDiskDeleteEnum::APPLY_RETENTION_POLICY;
    $request->resourcePolicy->snapshotSchedulePolicy->schedule = new ResourcePolicySnapshotSchedulePolicySchedule();
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->dailySchedule = new ResourcePolicyDailyCycle();
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->dailySchedule->daysInCycle = 133849;
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->dailySchedule->duration = 'voluptates';
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->dailySchedule->startTime = 'iusto';
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->hourlySchedule = new ResourcePolicyHourlyCycle();
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->hourlySchedule->duration = 'molestiae';
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->hourlySchedule->hoursInCycle = 761411;
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->hourlySchedule->startTime = 'sit';
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->weeklySchedule = new ResourcePolicyWeeklyCycle();
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->weeklySchedule->dayOfWeeks = [
        new ResourcePolicyWeeklyCycleDayOfWeek(),
        new ResourcePolicyWeeklyCycleDayOfWeek(),
        new ResourcePolicyWeeklyCycleDayOfWeek(),
        new ResourcePolicyWeeklyCycleDayOfWeek(),
    ];
    $request->resourcePolicy->snapshotSchedulePolicy->snapshotProperties = new ResourcePolicySnapshotSchedulePolicySnapshotProperties();
    $request->resourcePolicy->snapshotSchedulePolicy->snapshotProperties->chainName = 'autem';
    $request->resourcePolicy->snapshotSchedulePolicy->snapshotProperties->guestFlush = false;
    $request->resourcePolicy->snapshotSchedulePolicy->snapshotProperties->labels = [
        'dicta' => 'vitae',
        'porro' => 'atque',
        'corrupti' => 'dolorem',
        'ratione' => 'eos',
    ];
    $request->resourcePolicy->snapshotSchedulePolicy->snapshotProperties->storageLocations = [
        'pariatur',
        'minus',
    ];
    $request->resourcePolicy->status = ResourcePolicyStatusEnum::DELETING;
    $request->resourcePolicy->vmMaintenancePolicy = new ResourcePolicyVmMaintenancePolicy();
    $request->resourcePolicy->vmMaintenancePolicy->concurrencyControlGroup = new ResourcePolicyVmMaintenancePolicyConcurrencyControl();
    $request->resourcePolicy->vmMaintenancePolicy->concurrencyControlGroup->concurrencyLimit = 689897;
    $request->resourcePolicy->vmMaintenancePolicy->maintenanceWindow = new ResourcePolicyVmMaintenancePolicyMaintenanceWindow();
    $request->resourcePolicy->vmMaintenancePolicy->maintenanceWindow->dailyMaintenanceWindow = new ResourcePolicyDailyCycle();
    $request->resourcePolicy->vmMaintenancePolicy->maintenanceWindow->dailyMaintenanceWindow->daysInCycle = 106063;
    $request->resourcePolicy->vmMaintenancePolicy->maintenanceWindow->dailyMaintenanceWindow->duration = 'aperiam';
    $request->resourcePolicy->vmMaintenancePolicy->maintenanceWindow->dailyMaintenanceWindow->startTime = 'ipsum';
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'in';
    $request->fields = 'mollitia';
    $request->key = 'corrupti';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->project = 'excepturi';
    $request->quotaUser = 'recusandae';
    $request->region = 'aspernatur';
    $request->requestId = 'enim';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'aliquid';
    $request->userIp = 'dolorum';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'non';
    $request->fields = 'sapiente';
    $request->filter = 'maiores';
    $request->key = 'quasi';
    $request->maxResults = 561468;
    $request->oauthToken = 'molestiae';
    $request->orderBy = 'tempora';
    $request->pageToken = 'excepturi';
    $request->prettyPrint = false;
    $request->project = 'molestiae';
    $request->quotaUser = 'rerum';
    $request->region = 'architecto';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'consequatur';
    $request->userIp = 'laudantium';

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

## computeResourcePoliciesPatch

Modify the specified resource policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicy;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyGroupPlacementPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyGroupPlacementPolicyCollocationEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyGroupPlacementPolicyLocalityEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyGroupPlacementPolicyScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyGroupPlacementPolicyStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyInstanceSchedulePolicy;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyInstanceSchedulePolicySchedule;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyResourceStatusInstanceSchedulePolicyStatus;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicySnapshotSchedulePolicy;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicySnapshotSchedulePolicyRetentionPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnPolicySwitchEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnSourceDiskDeleteEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicySnapshotSchedulePolicySchedule;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyDailyCycle;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyHourlyCycle;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyWeeklyCycle;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyWeeklyCycleDayOfWeek;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyWeeklyCycleDayOfWeekDayEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicySnapshotSchedulePolicySnapshotProperties;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyVmMaintenancePolicy;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyVmMaintenancePolicyConcurrencyControl;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePolicyVmMaintenancePolicyMaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeResourcePoliciesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->resourcePolicy1 = new ResourcePolicy();
    $request->resourcePolicy1->creationTimestamp = 'laboriosam';
    $request->resourcePolicy1->description = 'velit';
    $request->resourcePolicy1->diskConsistencyGroupPolicy = [
        'fuga' => 'dicta',
    ];
    $request->resourcePolicy1->groupPlacementPolicy = new ResourcePolicyGroupPlacementPolicy();
    $request->resourcePolicy1->groupPlacementPolicy->availabilityDomainCount = 388682;
    $request->resourcePolicy1->groupPlacementPolicy->collocation = ResourcePolicyGroupPlacementPolicyCollocationEnum::COLLOCATED;
    $request->resourcePolicy1->groupPlacementPolicy->locality = ResourcePolicyGroupPlacementPolicyLocalityEnum::BEST_EFFORT;
    $request->resourcePolicy1->groupPlacementPolicy->maxDistance = 3524;
    $request->resourcePolicy1->groupPlacementPolicy->scope = ResourcePolicyGroupPlacementPolicyScopeEnum::HOST;
    $request->resourcePolicy1->groupPlacementPolicy->style = ResourcePolicyGroupPlacementPolicyStyleEnum::COMPACT;
    $request->resourcePolicy1->groupPlacementPolicy->tpuTopology = 'porro';
    $request->resourcePolicy1->groupPlacementPolicy->vmCount = 53264;
    $request->resourcePolicy1->id = 'soluta';
    $request->resourcePolicy1->instanceSchedulePolicy = new ResourcePolicyInstanceSchedulePolicy();
    $request->resourcePolicy1->instanceSchedulePolicy->expirationTime = 'cumque';
    $request->resourcePolicy1->instanceSchedulePolicy->startTime = 'at';
    $request->resourcePolicy1->instanceSchedulePolicy->timeZone = 'officiis';
    $request->resourcePolicy1->instanceSchedulePolicy->vmStartSchedule = new ResourcePolicyInstanceSchedulePolicySchedule();
    $request->resourcePolicy1->instanceSchedulePolicy->vmStartSchedule->schedule = 'nihil';
    $request->resourcePolicy1->instanceSchedulePolicy->vmStopSchedule = new ResourcePolicyInstanceSchedulePolicySchedule();
    $request->resourcePolicy1->instanceSchedulePolicy->vmStopSchedule->schedule = 'saepe';
    $request->resourcePolicy1->kind = 'ad';
    $request->resourcePolicy1->name = 'Sophie O'Keefe';
    $request->resourcePolicy1->region = 'ab';
    $request->resourcePolicy1->resourceStatus = new ResourcePolicyResourceStatus();
    $request->resourcePolicy1->resourceStatus->instanceSchedulePolicy = new ResourcePolicyResourceStatusInstanceSchedulePolicyStatus();
    $request->resourcePolicy1->resourceStatus->instanceSchedulePolicy->lastRunStartTime = 'ab';
    $request->resourcePolicy1->resourceStatus->instanceSchedulePolicy->nextRunStartTime = 'perferendis';
    $request->resourcePolicy1->selfLink = 'architecto';
    $request->resourcePolicy1->selfLinkWithId = 'porro';
    $request->resourcePolicy1->snapshotSchedulePolicy = new ResourcePolicySnapshotSchedulePolicy();
    $request->resourcePolicy1->snapshotSchedulePolicy->retentionPolicy = new ResourcePolicySnapshotSchedulePolicyRetentionPolicy();
    $request->resourcePolicy1->snapshotSchedulePolicy->retentionPolicy->maxRetentionDays = 66733;
    $request->resourcePolicy1->snapshotSchedulePolicy->retentionPolicy->onPolicySwitch = ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnPolicySwitchEnum::DO_NOT_RETROACTIVELY_APPLY;
    $request->resourcePolicy1->snapshotSchedulePolicy->retentionPolicy->onSourceDiskDelete = ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnSourceDiskDeleteEnum::KEEP_AUTO_SNAPSHOTS;
    $request->resourcePolicy1->snapshotSchedulePolicy->schedule = new ResourcePolicySnapshotSchedulePolicySchedule();
    $request->resourcePolicy1->snapshotSchedulePolicy->schedule->dailySchedule = new ResourcePolicyDailyCycle();
    $request->resourcePolicy1->snapshotSchedulePolicy->schedule->dailySchedule->daysInCycle = 732041;
    $request->resourcePolicy1->snapshotSchedulePolicy->schedule->dailySchedule->duration = 'aliquam';
    $request->resourcePolicy1->snapshotSchedulePolicy->schedule->dailySchedule->startTime = 'commodi';
    $request->resourcePolicy1->snapshotSchedulePolicy->schedule->hourlySchedule = new ResourcePolicyHourlyCycle();
    $request->resourcePolicy1->snapshotSchedulePolicy->schedule->hourlySchedule->duration = 'magni';
    $request->resourcePolicy1->snapshotSchedulePolicy->schedule->hourlySchedule->hoursInCycle = 619883;
    $request->resourcePolicy1->snapshotSchedulePolicy->schedule->hourlySchedule->startTime = 'fugit';
    $request->resourcePolicy1->snapshotSchedulePolicy->schedule->weeklySchedule = new ResourcePolicyWeeklyCycle();
    $request->resourcePolicy1->snapshotSchedulePolicy->schedule->weeklySchedule->dayOfWeeks = [
        new ResourcePolicyWeeklyCycleDayOfWeek(),
    ];
    $request->resourcePolicy1->snapshotSchedulePolicy->snapshotProperties = new ResourcePolicySnapshotSchedulePolicySnapshotProperties();
    $request->resourcePolicy1->snapshotSchedulePolicy->snapshotProperties->chainName = 'temporibus';
    $request->resourcePolicy1->snapshotSchedulePolicy->snapshotProperties->guestFlush = false;
    $request->resourcePolicy1->snapshotSchedulePolicy->snapshotProperties->labels = [
        'sit' => 'doloribus',
        'ducimus' => 'nemo',
    ];
    $request->resourcePolicy1->snapshotSchedulePolicy->snapshotProperties->storageLocations = [
        'distinctio',
    ];
    $request->resourcePolicy1->status = ResourcePolicyStatusEnum::CREATING;
    $request->resourcePolicy1->vmMaintenancePolicy = new ResourcePolicyVmMaintenancePolicy();
    $request->resourcePolicy1->vmMaintenancePolicy->concurrencyControlGroup = new ResourcePolicyVmMaintenancePolicyConcurrencyControl();
    $request->resourcePolicy1->vmMaintenancePolicy->concurrencyControlGroup->concurrencyLimit = 508858;
    $request->resourcePolicy1->vmMaintenancePolicy->maintenanceWindow = new ResourcePolicyVmMaintenancePolicyMaintenanceWindow();
    $request->resourcePolicy1->vmMaintenancePolicy->maintenanceWindow->dailyMaintenanceWindow = new ResourcePolicyDailyCycle();
    $request->resourcePolicy1->vmMaintenancePolicy->maintenanceWindow->dailyMaintenanceWindow->daysInCycle = 465294;
    $request->resourcePolicy1->vmMaintenancePolicy->maintenanceWindow->dailyMaintenanceWindow->duration = 'animi';
    $request->resourcePolicy1->vmMaintenancePolicy->maintenanceWindow->dailyMaintenanceWindow->startTime = 'neque';
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corrupti';
    $request->fields = 'voluptas';
    $request->key = 'eligendi';
    $request->oauthToken = 'porro';
    $request->paths = [
        'animi',
    ];
    $request->prettyPrint = false;
    $request->project = 'possimus';
    $request->quotaUser = 'voluptatibus';
    $request->region = 'quos';
    $request->requestId = 'ullam';
    $request->resourcePolicyPathParameter = 'fugit';
    $request->updateMask = 'in';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'est';
    $request->userIp = 'consequatur';

    $requestSecurity = new ComputeResourcePoliciesPatchSecurity();
    $requestSecurity->option1 = new ComputeResourcePoliciesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resourcePolicies->computeResourcePoliciesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
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
        new Binding(),
    ];
    $request->regionSetPolicyRequest->etag = 'adipisci';
    $request->regionSetPolicyRequest->policy = new Policy();
    $request->regionSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->regionSetPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->regionSetPolicyRequest->policy->etag = 'sed';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 741815;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'provident';
    $request->fields = 'assumenda';
    $request->key = 'alias';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->project = 'quisquam';
    $request->quotaUser = 'commodi';
    $request->region = 'aut';
    $request->resource = 'quibusdam';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'doloribus';
    $request->userIp = 'laudantium';

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
        'aut',
        'officiis',
        'eaque',
        'officiis',
    ];
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'delectus';
    $request->fields = 'qui';
    $request->key = 'fugit';
    $request->oauthToken = 'exercitationem';
    $request->prettyPrint = false;
    $request->project = 'debitis';
    $request->quotaUser = 'aspernatur';
    $request->region = 'occaecati';
    $request->resource = 'repellendus';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'excepturi';
    $request->userIp = 'temporibus';

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
