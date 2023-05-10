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
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolor';
    $request->fields = 'dicta';
    $request->filter = 'voluptatem';
    $request->includeAllScopes = false;
    $request->key = 'alias';
    $request->maxResults = 899002;
    $request->oauthToken = 'deleniti';
    $request->orderBy = 'repudiandae';
    $request->pageToken = 'sed';
    $request->prettyPrint = false;
    $request->project = 'cum';
    $request->quotaUser = 'sint';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'voluptatem';
    $request->userIp = 'repellendus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'possimus';
    $request->fields = 'quia';
    $request->key = 'dolorum';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->project = 'quisquam';
    $request->quotaUser = 'molestiae';
    $request->requestId = 'fugiat';
    $request->reservation = 'ab';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'dolorum';
    $request->userIp = 'perferendis';
    $request->zone = 'voluptates';

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
    $request->accessToken = 'iste';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'similique';
    $request->fields = 'sint';
    $request->key = 'nobis';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->project = 'earum';
    $request->quotaUser = 'veniam';
    $request->reservation = 'maiores';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'dignissimos';
    $request->userIp = 'sint';
    $request->zone = 'hic';

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
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'libero';
    $request->fields = 'quasi';
    $request->key = 'earum';
    $request->oauthToken = 'quam';
    $request->optionsRequestedPolicyVersion = 16232;
    $request->prettyPrint = false;
    $request->project = 'ducimus';
    $request->quotaUser = 'repudiandae';
    $request->resource = 'ducimus';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'dolore';
    $request->userIp = 'neque';
    $request->zone = 'molestias';

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
use \OpenAPI\OpenAPI\Models\Shared\AllocationResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\AllocationResourceStatusSpecificSKUAllocation;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettings;
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->reservation = new Reservation();
    $request->reservation->commitment = 'odio';
    $request->reservation->creationTimestamp = 'sunt';
    $request->reservation->description = 'non';
    $request->reservation->id = 'soluta';
    $request->reservation->kind = 'similique';
    $request->reservation->name = 'Ms. Benny Thompson';
    $request->reservation->resourcePolicies = [
        'expedita' => 'quibusdam',
        'ex' => 'et',
        'cupiditate' => 'dicta',
    ];
    $request->reservation->resourceStatus = new AllocationResourceStatus();
    $request->reservation->resourceStatus->specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation();
    $request->reservation->resourceStatus->specificSkuAllocation->sourceInstanceTemplateId = 'rem';
    $request->reservation->satisfiesPzs = false;
    $request->reservation->selfLink = 'facere';
    $request->reservation->shareSettings = new ShareSettings();
    $request->reservation->shareSettings->projectMap = [
        'reprehenderit' => new ShareSettingsProjectConfig(),
    ];
    $request->reservation->shareSettings->projects = [
        'maxime',
        'vitae',
        'alias',
    ];
    $request->reservation->shareSettings->shareType = ShareSettingsShareTypeEnum::SPECIFIC_PROJECTS;
    $request->reservation->specificReservation = new AllocationSpecificSKUReservation();
    $request->reservation->specificReservation->assuredCount = 'vitae';
    $request->reservation->specificReservation->count = 'blanditiis';
    $request->reservation->specificReservation->inUseCount = 'ipsam';
    $request->reservation->specificReservation->instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties();
    $request->reservation->specificReservation->instanceProperties->guestAccelerators = [
        new AcceleratorConfig(),
    ];
    $request->reservation->specificReservation->instanceProperties->localSsds = [
        new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk(),
        new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk(),
    ];
    $request->reservation->specificReservation->instanceProperties->locationHint = 'doloribus';
    $request->reservation->specificReservation->instanceProperties->machineType = 'repellendus';
    $request->reservation->specificReservation->instanceProperties->maintenanceFreezeDurationHours = 450454;
    $request->reservation->specificReservation->instanceProperties->maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum::PERIODIC;
    $request->reservation->specificReservation->instanceProperties->minCpuPlatform = 'praesentium';
    $request->reservation->specificReservation->sourceInstanceTemplate = 'rerum';
    $request->reservation->specificReservationRequired = false;
    $request->reservation->status = ReservationStatusEnum::UPDATING;
    $request->reservation->zone = 'fugit';
    $request->accessToken = 'vel';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ab';
    $request->fields = 'quia';
    $request->key = 'esse';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->project = 'ea';
    $request->quotaUser = 'odit';
    $request->requestId = 'quos';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'officia';
    $request->userIp = 'ullam';
    $request->zone = 'ipsa';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'blanditiis';
    $request->filter = 'eum';
    $request->key = 'esse';
    $request->maxResults = 892331;
    $request->oauthToken = 'esse';
    $request->orderBy = 'aspernatur';
    $request->pageToken = 'nam';
    $request->prettyPrint = false;
    $request->project = 'neque';
    $request->quotaUser = 'laborum';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'minima';
    $request->userIp = 'ipsa';
    $request->zone = 'qui';

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
    $request->reservationsResizeRequest->specificSkuCount = 'rerum';
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'molestiae';
    $request->fields = 'voluptatibus';
    $request->key = 'sint';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->project = 'nobis';
    $request->quotaUser = 'laboriosam';
    $request->requestId = 'recusandae';
    $request->reservation = 'repellat';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'aspernatur';
    $request->userIp = 'similique';
    $request->zone = 'ad';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->zoneSetPolicyRequest = new ZoneSetPolicyRequest();
    $request->zoneSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->zoneSetPolicyRequest->etag = 'molestiae';
    $request->zoneSetPolicyRequest->policy = new Policy();
    $request->zoneSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->zoneSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->zoneSetPolicyRequest->policy->etag = 'unde';
    $request->zoneSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->zoneSetPolicyRequest->policy->version = 723045;
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'et';
    $request->fields = 'officia';
    $request->key = 'ducimus';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->project = 'repudiandae';
    $request->quotaUser = 'sapiente';
    $request->resource = 'illo';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'voluptatum';
    $request->userIp = 'nam';
    $request->zone = 'vel';

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
        'facilis',
        'sed',
        'deleniti',
        'dolores',
    ];
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'dolorum';
    $request->key = 'perspiciatis';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->project = 'ipsam';
    $request->quotaUser = 'alias';
    $request->resource = 'repudiandae';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'magni';
    $request->userIp = 'doloribus';
    $request->zone = 'dolore';

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
use \OpenAPI\OpenAPI\Models\Shared\AllocationResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\AllocationResourceStatusSpecificSKUAllocation;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettings;
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->reservation1 = new Reservation();
    $request->reservation1->commitment = 'veritatis';
    $request->reservation1->creationTimestamp = 'itaque';
    $request->reservation1->description = 'excepturi';
    $request->reservation1->id = 'eligendi';
    $request->reservation1->kind = 'numquam';
    $request->reservation1->name = 'Grady Herman I';
    $request->reservation1->resourcePolicies = [
        'accusamus' => 'voluptate',
    ];
    $request->reservation1->resourceStatus = new AllocationResourceStatus();
    $request->reservation1->resourceStatus->specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation();
    $request->reservation1->resourceStatus->specificSkuAllocation->sourceInstanceTemplateId = 'corporis';
    $request->reservation1->satisfiesPzs = false;
    $request->reservation1->selfLink = 'esse';
    $request->reservation1->shareSettings = new ShareSettings();
    $request->reservation1->shareSettings->projectMap = [
        'laboriosam' => new ShareSettingsProjectConfig(),
    ];
    $request->reservation1->shareSettings->projects = [
        'voluptatem',
        'consequatur',
        'nesciunt',
        'porro',
    ];
    $request->reservation1->shareSettings->shareType = ShareSettingsShareTypeEnum::LOCAL;
    $request->reservation1->specificReservation = new AllocationSpecificSKUReservation();
    $request->reservation1->specificReservation->assuredCount = 'asperiores';
    $request->reservation1->specificReservation->count = 'aut';
    $request->reservation1->specificReservation->inUseCount = 'consequuntur';
    $request->reservation1->specificReservation->instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties();
    $request->reservation1->specificReservation->instanceProperties->guestAccelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->reservation1->specificReservation->instanceProperties->localSsds = [
        new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk(),
        new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk(),
    ];
    $request->reservation1->specificReservation->instanceProperties->locationHint = 'architecto';
    $request->reservation1->specificReservation->instanceProperties->machineType = 'excepturi';
    $request->reservation1->specificReservation->instanceProperties->maintenanceFreezeDurationHours = 148389;
    $request->reservation1->specificReservation->instanceProperties->maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum::PERIODIC;
    $request->reservation1->specificReservation->instanceProperties->minCpuPlatform = 'enim';
    $request->reservation1->specificReservation->sourceInstanceTemplate = 'architecto';
    $request->reservation1->specificReservationRequired = false;
    $request->reservation1->status = ReservationStatusEnum::INVALID;
    $request->reservation1->zone = 'cumque';
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'incidunt';
    $request->fields = 'dicta';
    $request->key = 'quo';
    $request->oauthToken = 'natus';
    $request->paths = [
        'natus',
        'hic',
        'ut',
    ];
    $request->prettyPrint = false;
    $request->project = 'nisi';
    $request->quotaUser = 'provident';
    $request->requestId = 'delectus';
    $request->reservationPathParameter = 'eum';
    $request->updateMask = 'delectus';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'quod';
    $request->userIp = 'sapiente';
    $request->zone = 'quasi';

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
