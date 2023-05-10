# reservations

### Available Operations

* [computeReservationsAggregatedList](#computereservationsaggregatedlist) - Retrieves an aggregated list of reservations.
* [computeReservationsDelete](#computereservationsdelete) - Deletes the specified reservation.
* [computeReservationsGet](#computereservationsget) - Retrieves information about the specified reservation.
* [computeReservationsGetIamPolicy](#computereservationsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeReservationsInsert](#computereservationsinsert) - Creates a new reservation. For more information, read Reserving zonal resources.
* [computeReservationsList](#computereservationslist) - A list of all the reservations that have been configured for the specified project in specified zone.
* [computeReservationsResize](#computereservationsresize) - Resizes the reservation (applicable to standalone reservations only). For more information, read Modifying reservations.
* [computeReservationsSetIamPolicy](#computereservationssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeReservationsTestIamPermissions](#computereservationstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeReservationsUpdate](#computereservationsupdate) - Update share settings of the reservation.

## computeReservationsAggregatedList

Retrieves an aggregated list of reservations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeReservationsAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'provident';
    $request->fields = 'sint';
    $request->filter = 'beatae';
    $request->includeAllScopes = false;
    $request->key = 'nihil';
    $request->maxResults = 687749;
    $request->oauthToken = 'laudantium';
    $request->orderBy = 'aliquam';
    $request->pageToken = 'non';
    $request->prettyPrint = false;
    $request->project = 'porro';
    $request->quotaUser = 'rem';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'aut';
    $request->userIp = 'aspernatur';

    $requestSecurity = new ComputeReservationsAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeReservationsAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reservations->computeReservationsAggregatedList($request, $requestSecurity);

    if ($response->reservationAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeReservationsDelete

Deletes the specified reservation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeReservationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusamus';
    $request->fields = 'suscipit';
    $request->key = 'eos';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->project = 'dolore';
    $request->quotaUser = 'occaecati';
    $request->requestId = 'modi';
    $request->reservation = 'laboriosam';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'est';
    $request->userIp = 'sed';
    $request->zone = 'nulla';

    $requestSecurity = new ComputeReservationsDeleteSecurity();
    $requestSecurity->option1 = new ComputeReservationsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reservations->computeReservationsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeReservationsGet

Retrieves information about the specified reservation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeReservationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'autem';
    $request->fields = 'impedit';
    $request->key = 'facere';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->project = 'autem';
    $request->quotaUser = 'non';
    $request->reservation = 'quos';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'eos';
    $request->userIp = 'odio';
    $request->zone = 'odit';

    $requestSecurity = new ComputeReservationsGetSecurity();
    $requestSecurity->option1 = new ComputeReservationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reservations->computeReservationsGet($request, $requestSecurity);

    if ($response->reservation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeReservationsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeReservationsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aut';
    $request->fields = 'adipisci';
    $request->key = 'earum';
    $request->oauthToken = 'deleniti';
    $request->optionsRequestedPolicyVersion = 229613;
    $request->prettyPrint = false;
    $request->project = 'culpa';
    $request->quotaUser = 'illo';
    $request->resource = 'necessitatibus';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'saepe';
    $request->userIp = 'quam';
    $request->zone = 'est';

    $requestSecurity = new ComputeReservationsGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeReservationsGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reservations->computeReservationsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeReservationsInsert

Creates a new reservation. For more information, read Reserving zonal resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Reservation;
use \OpenAPI\OpenAPI\Models\Shared\AllocationAggregateReservation;
use \OpenAPI\OpenAPI\Models\Shared\AllocationAggregateReservationReservedResourceInfo;
use \OpenAPI\OpenAPI\Models\Shared\AllocationAggregateReservationReservedResourceInfoAccelerator;
use \OpenAPI\OpenAPI\Models\Shared\AllocationAggregateReservationVmFamilyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AllocationResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\AllocationResourceStatusSpecificSKUAllocation;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettings;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsFolderConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsProjectConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsShareTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUReservation;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationReservedInstanceProperties;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeReservationsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->reservation = new Reservation();
    $request->reservation->aggregateReservation = new AllocationAggregateReservation();
    $request->reservation->aggregateReservation->inUseResources = [
        new AllocationAggregateReservationReservedResourceInfo(),
    ];
    $request->reservation->aggregateReservation->reservedResources = [
        new AllocationAggregateReservationReservedResourceInfo(),
        new AllocationAggregateReservationReservedResourceInfo(),
        new AllocationAggregateReservationReservedResourceInfo(),
        new AllocationAggregateReservationReservedResourceInfo(),
    ];
    $request->reservation->aggregateReservation->vmFamily = AllocationAggregateReservationVmFamilyEnum::VM_FAMILY_CLOUD_TPU_POD_SLICE_CT4_P;
    $request->reservation->commitment = 'esse';
    $request->reservation->creationTimestamp = 'nobis';
    $request->reservation->description = 'ipsa';
    $request->reservation->id = 'corporis';
    $request->reservation->kind = 'officiis';
    $request->reservation->name = 'Robin Smith';
    $request->reservation->resourcePolicies = [
        'tenetur' => 'minima',
        'occaecati' => 'veritatis',
        'a' => 'perspiciatis',
    ];
    $request->reservation->resourceStatus = new AllocationResourceStatus();
    $request->reservation->resourceStatus->specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation();
    $request->reservation->resourceStatus->specificSkuAllocation->sourceInstanceTemplateId = 'corrupti';
    $request->reservation->satisfiesPzs = false;
    $request->reservation->selfLink = 'dolor';
    $request->reservation->selfLinkWithId = 'dolores';
    $request->reservation->shareSettings = new ShareSettings();
    $request->reservation->shareSettings->folderMap = [
        'delectus' => new ShareSettingsFolderConfig(),
        'natus' => new ShareSettingsFolderConfig(),
        'et' => new ShareSettingsFolderConfig(),
    ];
    $request->reservation->shareSettings->projectMap = [
        'qui' => new ShareSettingsProjectConfig(),
        'consequuntur' => new ShareSettingsProjectConfig(),
        'repellat' => new ShareSettingsProjectConfig(),
    ];
    $request->reservation->shareSettings->projects = [
        'quo',
        'officia',
    ];
    $request->reservation->shareSettings->shareType = ShareSettingsShareTypeEnum::SPECIFIC_PROJECTS;
    $request->reservation->specificReservation = new AllocationSpecificSKUReservation();
    $request->reservation->specificReservation->assuredCount = 'alias';
    $request->reservation->specificReservation->count = 'nihil';
    $request->reservation->specificReservation->inUseCount = 'distinctio';
    $request->reservation->specificReservation->instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties();
    $request->reservation->specificReservation->instanceProperties->guestAccelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->reservation->specificReservation->instanceProperties->localSsds = [
        new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk(),
        new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk(),
    ];
    $request->reservation->specificReservation->instanceProperties->locationHint = 'tempora';
    $request->reservation->specificReservation->instanceProperties->machineType = 'corporis';
    $request->reservation->specificReservation->instanceProperties->maintenanceFreezeDurationHours = 53834;
    $request->reservation->specificReservation->instanceProperties->maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum::AS_NEEDED;
    $request->reservation->specificReservation->instanceProperties->minCpuPlatform = 'aperiam';
    $request->reservation->specificReservation->sourceInstanceTemplate = 'mollitia';
    $request->reservation->specificReservationRequired = false;
    $request->reservation->status = ReservationStatusEnum::DELETING;
    $request->reservation->zone = 'nobis';
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'est';
    $request->fields = 'sed';
    $request->key = 'magni';
    $request->oauthToken = 'sunt';
    $request->prettyPrint = false;
    $request->project = 'eveniet';
    $request->quotaUser = 'ratione';
    $request->requestId = 'reiciendis';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'molestiae';
    $request->userIp = 'in';
    $request->zone = 'eaque';

    $requestSecurity = new ComputeReservationsInsertSecurity();
    $requestSecurity->option1 = new ComputeReservationsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reservations->computeReservationsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeReservationsList

A list of all the reservations that have been configured for the specified project in specified zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeReservationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'aspernatur';
    $request->filter = 'vero';
    $request->key = 'nostrum';
    $request->maxResults = 888269;
    $request->oauthToken = 'fugiat';
    $request->orderBy = 'delectus';
    $request->pageToken = 'ea';
    $request->prettyPrint = false;
    $request->project = 'eius';
    $request->quotaUser = 'error';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'deserunt';
    $request->userIp = 'rem';
    $request->zone = 'quam';

    $requestSecurity = new ComputeReservationsListSecurity();
    $requestSecurity->option1 = new ComputeReservationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reservations->computeReservationsList($request, $requestSecurity);

    if ($response->reservationList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeReservationsResize

Resizes the reservation (applicable to standalone reservations only). For more information, read Modifying reservations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsResizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationsResizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsResizeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsResizeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsResizeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeReservationsResizeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->reservationsResizeRequest = new ReservationsResizeRequest();
    $request->reservationsResizeRequest->specificSkuCount = 'optio';
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptate';
    $request->fields = 'quae';
    $request->key = 'quae';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->project = 'minima';
    $request->quotaUser = 'numquam';
    $request->requestId = 'soluta';
    $request->reservation = 'quaerat';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'accusamus';
    $request->userIp = 'cumque';
    $request->zone = 'nisi';

    $requestSecurity = new ComputeReservationsResizeSecurity();
    $requestSecurity->option1 = new ComputeReservationsResizeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reservations->computeReservationsResize($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeReservationsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsSetIamPolicyRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeReservationsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->zoneSetPolicyRequest = new ZoneSetPolicyRequest();
    $request->zoneSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->zoneSetPolicyRequest->etag = 'hic';
    $request->zoneSetPolicyRequest->policy = new Policy();
    $request->zoneSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->zoneSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->zoneSetPolicyRequest->policy->etag = 'assumenda';
    $request->zoneSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->zoneSetPolicyRequest->policy->version = 238004;
    $request->accessToken = 'quia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repudiandae';
    $request->fields = 'rem';
    $request->key = 'repellat';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->project = 'quibusdam';
    $request->quotaUser = 'non';
    $request->resource = 'quasi';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'vitae';
    $request->userIp = 'incidunt';
    $request->zone = 'nemo';

    $requestSecurity = new ComputeReservationsSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeReservationsSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reservations->computeReservationsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeReservationsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeReservationsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'vero',
        'assumenda',
        'praesentium',
    ];
    $request->accessToken = 'eos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'a';
    $request->key = 'consequuntur';
    $request->oauthToken = 'optio';
    $request->prettyPrint = false;
    $request->project = 'vitae';
    $request->quotaUser = 'iure';
    $request->resource = 'nihil';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nulla';
    $request->userIp = 'deleniti';
    $request->zone = 'similique';

    $requestSecurity = new ComputeReservationsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeReservationsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reservations->computeReservationsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeReservationsUpdate

Update share settings of the reservation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Reservation;
use \OpenAPI\OpenAPI\Models\Shared\AllocationAggregateReservation;
use \OpenAPI\OpenAPI\Models\Shared\AllocationAggregateReservationReservedResourceInfo;
use \OpenAPI\OpenAPI\Models\Shared\AllocationAggregateReservationReservedResourceInfoAccelerator;
use \OpenAPI\OpenAPI\Models\Shared\AllocationAggregateReservationVmFamilyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AllocationResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\AllocationResourceStatusSpecificSKUAllocation;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettings;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsFolderConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsProjectConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsShareTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUReservation;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationReservedInstanceProperties;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeReservationsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeReservationsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->reservation1 = new Reservation();
    $request->reservation1->aggregateReservation = new AllocationAggregateReservation();
    $request->reservation1->aggregateReservation->inUseResources = [
        new AllocationAggregateReservationReservedResourceInfo(),
        new AllocationAggregateReservationReservedResourceInfo(),
        new AllocationAggregateReservationReservedResourceInfo(),
    ];
    $request->reservation1->aggregateReservation->reservedResources = [
        new AllocationAggregateReservationReservedResourceInfo(),
        new AllocationAggregateReservationReservedResourceInfo(),
    ];
    $request->reservation1->aggregateReservation->vmFamily = AllocationAggregateReservationVmFamilyEnum::VM_FAMILY_COMPUTE_OPTIMIZED_C3;
    $request->reservation1->commitment = 'iure';
    $request->reservation1->creationTimestamp = 'modi';
    $request->reservation1->description = 'suscipit';
    $request->reservation1->id = 'itaque';
    $request->reservation1->kind = 'minus';
    $request->reservation1->name = 'Holly Langworth IV';
    $request->reservation1->resourcePolicies = [
        'quam' => 'eligendi',
    ];
    $request->reservation1->resourceStatus = new AllocationResourceStatus();
    $request->reservation1->resourceStatus->specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation();
    $request->reservation1->resourceStatus->specificSkuAllocation->sourceInstanceTemplateId = 'fugiat';
    $request->reservation1->satisfiesPzs = false;
    $request->reservation1->selfLink = 'itaque';
    $request->reservation1->selfLinkWithId = 'sit';
    $request->reservation1->shareSettings = new ShareSettings();
    $request->reservation1->shareSettings->folderMap = [
        'recusandae' => new ShareSettingsFolderConfig(),
        'necessitatibus' => new ShareSettingsFolderConfig(),
        'totam' => new ShareSettingsFolderConfig(),
    ];
    $request->reservation1->shareSettings->projectMap = [
        'reprehenderit' => new ShareSettingsProjectConfig(),
        'explicabo' => new ShareSettingsProjectConfig(),
        'aspernatur' => new ShareSettingsProjectConfig(),
        'ab' => new ShareSettingsProjectConfig(),
    ];
    $request->reservation1->shareSettings->projects = [
        'hic',
    ];
    $request->reservation1->shareSettings->shareType = ShareSettingsShareTypeEnum::LOCAL;
    $request->reservation1->specificReservation = new AllocationSpecificSKUReservation();
    $request->reservation1->specificReservation->assuredCount = 'consequuntur';
    $request->reservation1->specificReservation->count = 'minima';
    $request->reservation1->specificReservation->inUseCount = 'similique';
    $request->reservation1->specificReservation->instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties();
    $request->reservation1->specificReservation->instanceProperties->guestAccelerators = [
        new AcceleratorConfig(),
    ];
    $request->reservation1->specificReservation->instanceProperties->localSsds = [
        new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk(),
    ];
    $request->reservation1->specificReservation->instanceProperties->locationHint = 'consectetur';
    $request->reservation1->specificReservation->instanceProperties->machineType = 'laudantium';
    $request->reservation1->specificReservation->instanceProperties->maintenanceFreezeDurationHours = 734486;
    $request->reservation1->specificReservation->instanceProperties->maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum::PERIODIC;
    $request->reservation1->specificReservation->instanceProperties->minCpuPlatform = 'inventore';
    $request->reservation1->specificReservation->sourceInstanceTemplate = 'distinctio';
    $request->reservation1->specificReservationRequired = false;
    $request->reservation1->status = ReservationStatusEnum::DELETING;
    $request->reservation1->zone = 'possimus';
    $request->accessToken = 'magni';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fugiat';
    $request->fields = 'neque';
    $request->key = 'facilis';
    $request->oauthToken = 'iure';
    $request->paths = [
        'voluptas',
    ];
    $request->prettyPrint = false;
    $request->project = 'quisquam';
    $request->quotaUser = 'accusantium';
    $request->requestId = 'dignissimos';
    $request->reservationPathParameter = 'adipisci';
    $request->updateMask = 'aperiam';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'corrupti';
    $request->userIp = 'vero';
    $request->zone = 'voluptate';

    $requestSecurity = new ComputeReservationsUpdateSecurity();
    $requestSecurity->option1 = new ComputeReservationsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reservations->computeReservationsUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
