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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->fields = 'sed';
    $request->filter = 'sequi';
    $request->includeAllScopes = false;
    $request->key = 'minus';
    $request->maxResults = 380543;
    $request->oauthToken = 'autem';
    $request->orderBy = 'omnis';
    $request->pageToken = 'itaque';
    $request->prettyPrint = false;
    $request->project = 'laboriosam';
    $request->quotaUser = 'harum';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'fugit';
    $request->userIp = 'aliquid';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ab';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vero';
    $request->fields = 'expedita';
    $request->key = 'id';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->project = 'quis';
    $request->quotaUser = 'iusto';
    $request->region = 'unde';
    $request->requestId = 'quos';
    $request->resourcePolicy = 'rem';
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'suscipit';
    $request->userIp = 'in';

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
    $request->accessToken = 'alias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsum';
    $request->fields = 'illo';
    $request->key = 'aperiam';
    $request->oauthToken = 'sequi';
    $request->prettyPrint = false;
    $request->project = 'maiores';
    $request->quotaUser = 'quae';
    $request->region = 'officia';
    $request->resourcePolicy = 'ut';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'eligendi';
    $request->userIp = 'doloremque';

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
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quo';
    $request->fields = 'deleniti';
    $request->key = 'aliquid';
    $request->oauthToken = 'blanditiis';
    $request->optionsRequestedPolicyVersion = 505363;
    $request->prettyPrint = false;
    $request->project = 'doloribus';
    $request->quotaUser = 'at';
    $request->region = 'blanditiis';
    $request->resource = 'debitis';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'vel';
    $request->userIp = 'tenetur';

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
    $request->resourcePolicy->creationTimestamp = 'consequatur';
    $request->resourcePolicy->description = 'consectetur';
    $request->resourcePolicy->diskConsistencyGroupPolicy = [
        'dolores' => 'rem',
    ];
    $request->resourcePolicy->groupPlacementPolicy = new ResourcePolicyGroupPlacementPolicy();
    $request->resourcePolicy->groupPlacementPolicy->availabilityDomainCount = 976295;
    $request->resourcePolicy->groupPlacementPolicy->collocation = ResourcePolicyGroupPlacementPolicyCollocationEnum::COLLOCATED;
    $request->resourcePolicy->groupPlacementPolicy->maxDistance = 638201;
    $request->resourcePolicy->groupPlacementPolicy->vmCount = 652636;
    $request->resourcePolicy->id = 'animi';
    $request->resourcePolicy->instanceSchedulePolicy = new ResourcePolicyInstanceSchedulePolicy();
    $request->resourcePolicy->instanceSchedulePolicy->expirationTime = 'officiis';
    $request->resourcePolicy->instanceSchedulePolicy->startTime = 'vero';
    $request->resourcePolicy->instanceSchedulePolicy->timeZone = 'repudiandae';
    $request->resourcePolicy->instanceSchedulePolicy->vmStartSchedule = new ResourcePolicyInstanceSchedulePolicySchedule();
    $request->resourcePolicy->instanceSchedulePolicy->vmStartSchedule->schedule = 'sit';
    $request->resourcePolicy->instanceSchedulePolicy->vmStopSchedule = new ResourcePolicyInstanceSchedulePolicySchedule();
    $request->resourcePolicy->instanceSchedulePolicy->vmStopSchedule->schedule = 'aut';
    $request->resourcePolicy->kind = 'labore';
    $request->resourcePolicy->name = 'Preston Parisian';
    $request->resourcePolicy->region = 'hic';
    $request->resourcePolicy->resourceStatus = new ResourcePolicyResourceStatus();
    $request->resourcePolicy->resourceStatus->instanceSchedulePolicy = new ResourcePolicyResourceStatusInstanceSchedulePolicyStatus();
    $request->resourcePolicy->resourceStatus->instanceSchedulePolicy->lastRunStartTime = 'quos';
    $request->resourcePolicy->resourceStatus->instanceSchedulePolicy->nextRunStartTime = 'voluptate';
    $request->resourcePolicy->selfLink = 'neque';
    $request->resourcePolicy->snapshotSchedulePolicy = new ResourcePolicySnapshotSchedulePolicy();
    $request->resourcePolicy->snapshotSchedulePolicy->retentionPolicy = new ResourcePolicySnapshotSchedulePolicyRetentionPolicy();
    $request->resourcePolicy->snapshotSchedulePolicy->retentionPolicy->maxRetentionDays = 127032;
    $request->resourcePolicy->snapshotSchedulePolicy->retentionPolicy->onSourceDiskDelete = ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnSourceDiskDeleteEnum::UNSPECIFIED_ON_SOURCE_DISK_DELETE;
    $request->resourcePolicy->snapshotSchedulePolicy->schedule = new ResourcePolicySnapshotSchedulePolicySchedule();
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->dailySchedule = new ResourcePolicyDailyCycle();
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->dailySchedule->daysInCycle = 907301;
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->dailySchedule->duration = 'quis';
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->dailySchedule->startTime = 'alias';
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->hourlySchedule = new ResourcePolicyHourlyCycle();
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->hourlySchedule->duration = 'provident';
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->hourlySchedule->hoursInCycle = 758764;
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->hourlySchedule->startTime = 'exercitationem';
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->weeklySchedule = new ResourcePolicyWeeklyCycle();
    $request->resourcePolicy->snapshotSchedulePolicy->schedule->weeklySchedule->dayOfWeeks = [
        new ResourcePolicyWeeklyCycleDayOfWeek(),
    ];
    $request->resourcePolicy->snapshotSchedulePolicy->snapshotProperties = new ResourcePolicySnapshotSchedulePolicySnapshotProperties();
    $request->resourcePolicy->snapshotSchedulePolicy->snapshotProperties->chainName = 'atque';
    $request->resourcePolicy->snapshotSchedulePolicy->snapshotProperties->guestFlush = false;
    $request->resourcePolicy->snapshotSchedulePolicy->snapshotProperties->labels = [
        'sunt' => 'neque',
        'quae' => 'a',
    ];
    $request->resourcePolicy->snapshotSchedulePolicy->snapshotProperties->storageLocations = [
        'aliquid',
    ];
    $request->resourcePolicy->status = ResourcePolicyStatusEnum::READY;
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quo';
    $request->fields = 'voluptates';
    $request->key = 'enim';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->project = 'officia';
    $request->quotaUser = 'quas';
    $request->region = 'ex';
    $request->requestId = 'voluptatum';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'veritatis';
    $request->userIp = 'modi';

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
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quam';
    $request->fields = 'iste';
    $request->filter = 'doloremque';
    $request->key = 'ullam';
    $request->maxResults = 944768;
    $request->oauthToken = 'asperiores';
    $request->orderBy = 'ducimus';
    $request->pageToken = 'sint';
    $request->prettyPrint = false;
    $request->project = 'odio';
    $request->quotaUser = 'animi';
    $request->region = 'exercitationem';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'culpa';
    $request->userIp = 'vel';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeResourcePoliciesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeResourcePoliciesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->resourcePolicy1 = new ResourcePolicy();
    $request->resourcePolicy1->creationTimestamp = 'non';
    $request->resourcePolicy1->description = 'nobis';
    $request->resourcePolicy1->diskConsistencyGroupPolicy = [
        'vero' => 'reprehenderit',
        'dignissimos' => 'voluptatum',
    ];
    $request->resourcePolicy1->groupPlacementPolicy = new ResourcePolicyGroupPlacementPolicy();
    $request->resourcePolicy1->groupPlacementPolicy->availabilityDomainCount = 652552;
    $request->resourcePolicy1->groupPlacementPolicy->collocation = ResourcePolicyGroupPlacementPolicyCollocationEnum::COLLOCATED;
    $request->resourcePolicy1->groupPlacementPolicy->maxDistance = 295537;
    $request->resourcePolicy1->groupPlacementPolicy->vmCount = 717803;
    $request->resourcePolicy1->id = 'error';
    $request->resourcePolicy1->instanceSchedulePolicy = new ResourcePolicyInstanceSchedulePolicy();
    $request->resourcePolicy1->instanceSchedulePolicy->expirationTime = 'culpa';
    $request->resourcePolicy1->instanceSchedulePolicy->startTime = 'culpa';
    $request->resourcePolicy1->instanceSchedulePolicy->timeZone = 'odit';
    $request->resourcePolicy1->instanceSchedulePolicy->vmStartSchedule = new ResourcePolicyInstanceSchedulePolicySchedule();
    $request->resourcePolicy1->instanceSchedulePolicy->vmStartSchedule->schedule = 'laudantium';
    $request->resourcePolicy1->instanceSchedulePolicy->vmStopSchedule = new ResourcePolicyInstanceSchedulePolicySchedule();
    $request->resourcePolicy1->instanceSchedulePolicy->vmStopSchedule->schedule = 'dolor';
    $request->resourcePolicy1->kind = 'consequuntur';
    $request->resourcePolicy1->name = 'Marco Kemmer';
    $request->resourcePolicy1->region = 'laboriosam';
    $request->resourcePolicy1->resourceStatus = new ResourcePolicyResourceStatus();
    $request->resourcePolicy1->resourceStatus->instanceSchedulePolicy = new ResourcePolicyResourceStatusInstanceSchedulePolicyStatus();
    $request->resourcePolicy1->resourceStatus->instanceSchedulePolicy->lastRunStartTime = 'fugit';
    $request->resourcePolicy1->resourceStatus->instanceSchedulePolicy->nextRunStartTime = 'illum';
    $request->resourcePolicy1->selfLink = 'odit';
    $request->resourcePolicy1->snapshotSchedulePolicy = new ResourcePolicySnapshotSchedulePolicy();
    $request->resourcePolicy1->snapshotSchedulePolicy->retentionPolicy = new ResourcePolicySnapshotSchedulePolicyRetentionPolicy();
    $request->resourcePolicy1->snapshotSchedulePolicy->retentionPolicy->maxRetentionDays = 681125;
    $request->resourcePolicy1->snapshotSchedulePolicy->retentionPolicy->onSourceDiskDelete = ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnSourceDiskDeleteEnum::APPLY_RETENTION_POLICY;
    $request->resourcePolicy1->snapshotSchedulePolicy->schedule = new ResourcePolicySnapshotSchedulePolicySchedule();
    $request->resourcePolicy1->snapshotSchedulePolicy->schedule->dailySchedule = new ResourcePolicyDailyCycle();
    $request->resourcePolicy1->snapshotSchedulePolicy->schedule->dailySchedule->daysInCycle = 82670;
    $request->resourcePolicy1->snapshotSchedulePolicy->schedule->dailySchedule->duration = 'doloribus';
    $request->resourcePolicy1->snapshotSchedulePolicy->schedule->dailySchedule->startTime = 'molestias';
    $request->resourcePolicy1->snapshotSchedulePolicy->schedule->hourlySchedule = new ResourcePolicyHourlyCycle();
    $request->resourcePolicy1->snapshotSchedulePolicy->schedule->hourlySchedule->duration = 'distinctio';
    $request->resourcePolicy1->snapshotSchedulePolicy->schedule->hourlySchedule->hoursInCycle = 86920;
    $request->resourcePolicy1->snapshotSchedulePolicy->schedule->hourlySchedule->startTime = 'tempora';
    $request->resourcePolicy1->snapshotSchedulePolicy->schedule->weeklySchedule = new ResourcePolicyWeeklyCycle();
    $request->resourcePolicy1->snapshotSchedulePolicy->schedule->weeklySchedule->dayOfWeeks = [
        new ResourcePolicyWeeklyCycleDayOfWeek(),
        new ResourcePolicyWeeklyCycleDayOfWeek(),
        new ResourcePolicyWeeklyCycleDayOfWeek(),
    ];
    $request->resourcePolicy1->snapshotSchedulePolicy->snapshotProperties = new ResourcePolicySnapshotSchedulePolicySnapshotProperties();
    $request->resourcePolicy1->snapshotSchedulePolicy->snapshotProperties->chainName = 'deserunt';
    $request->resourcePolicy1->snapshotSchedulePolicy->snapshotProperties->guestFlush = false;
    $request->resourcePolicy1->snapshotSchedulePolicy->snapshotProperties->labels = [
        'harum' => 'placeat',
        'debitis' => 'quo',
    ];
    $request->resourcePolicy1->snapshotSchedulePolicy->snapshotProperties->storageLocations = [
        'repellat',
        'eius',
    ];
    $request->resourcePolicy1->status = ResourcePolicyStatusEnum::DELETING;
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ratione';
    $request->fields = 'qui';
    $request->key = 'voluptates';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->project = 'mollitia';
    $request->quotaUser = 'veniam';
    $request->region = 'at';
    $request->requestId = 'eveniet';
    $request->resourcePolicyPathParameter = 'debitis';
    $request->updateMask = 'inventore';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'cumque';
    $request->userIp = 'repellendus';

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
    ];
    $request->regionSetPolicyRequest->etag = 'officia';
    $request->regionSetPolicyRequest->policy = new Policy();
    $request->regionSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->regionSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->policy->etag = 'excepturi';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 71151;
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corrupti';
    $request->fields = 'tenetur';
    $request->key = 'repudiandae';
    $request->oauthToken = 'ex';
    $request->prettyPrint = false;
    $request->project = 'quos';
    $request->quotaUser = 'magni';
    $request->region = 'repudiandae';
    $request->resource = 'sunt';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'aspernatur';
    $request->userIp = 'illum';

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
        'sed',
        'nesciunt',
        'pariatur',
        'nostrum',
    ];
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deleniti';
    $request->fields = 'sed';
    $request->key = 'magnam';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->project = 'facere';
    $request->quotaUser = 'beatae';
    $request->region = 'consequuntur';
    $request->resource = 'sed';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'provident';
    $request->userIp = 'doloribus';

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
