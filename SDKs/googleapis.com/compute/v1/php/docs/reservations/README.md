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
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'architecto';
    $request->fields = 'officia';
    $request->filter = 'reiciendis';
    $request->includeAllScopes = false;
    $request->key = 'quo';
    $request->maxResults = 446020;
    $request->oauthToken = 'veritatis';
    $request->orderBy = 'totam';
    $request->pageToken = 'suscipit';
    $request->prettyPrint = false;
    $request->project = 'asperiores';
    $request->quotaUser = 'voluptatibus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'alias';
    $request->userIp = 'tempore';

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
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'possimus';
    $request->key = 'delectus';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->project = 'accusantium';
    $request->quotaUser = 'quo';
    $request->requestId = 'id';
    $request->reservation = 'alias';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'dignissimos';
    $request->userIp = 'aliquid';
    $request->zone = 'ad';

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
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ex';
    $request->fields = 'eius';
    $request->key = 'ab';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->project = 'facilis';
    $request->quotaUser = 'maiores';
    $request->reservation = 'aut';
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'veniam';
    $request->userIp = 'fugit';
    $request->zone = 'ducimus';

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
    $request->accessToken = 'cum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quaerat';
    $request->fields = 'vitae';
    $request->key = 'architecto';
    $request->oauthToken = 'repellendus';
    $request->optionsRequestedPolicyVersion = 825257;
    $request->prettyPrint = false;
    $request->project = 'suscipit';
    $request->quotaUser = 'consequatur';
    $request->resource = 'aliquid';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'quibusdam';
    $request->userIp = 'beatae';
    $request->zone = 'soluta';

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
    $request->reservation->commitment = 'rem';
    $request->reservation->creationTimestamp = 'magni';
    $request->reservation->description = 'ducimus';
    $request->reservation->id = 'fugit';
    $request->reservation->kind = 'quidem';
    $request->reservation->name = 'Terrance Schroeder';
    $request->reservation->resourcePolicies = [
        'vitae' => 'ex',
    ];
    $request->reservation->resourceStatus = new AllocationResourceStatus();
    $request->reservation->resourceStatus->specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation();
    $request->reservation->resourceStatus->specificSkuAllocation->sourceInstanceTemplateId = 'sint';
    $request->reservation->satisfiesPzs = false;
    $request->reservation->selfLink = 'dignissimos';
    $request->reservation->shareSettings = new ShareSettings();
    $request->reservation->shareSettings->projectMap = [
        'inventore' => new ShareSettingsProjectConfig(),
        'quas' => new ShareSettingsProjectConfig(),
        'deleniti' => new ShareSettingsProjectConfig(),
    ];
    $request->reservation->shareSettings->shareType = ShareSettingsShareTypeEnum::LOCAL;
    $request->reservation->specificReservation = new AllocationSpecificSKUReservation();
    $request->reservation->specificReservation->assuredCount = 'reiciendis';
    $request->reservation->specificReservation->count = 'cumque';
    $request->reservation->specificReservation->inUseCount = 'rerum';
    $request->reservation->specificReservation->instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties();
    $request->reservation->specificReservation->instanceProperties->guestAccelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->reservation->specificReservation->instanceProperties->localSsds = [
        new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk(),
    ];
    $request->reservation->specificReservation->instanceProperties->locationHint = 'distinctio';
    $request->reservation->specificReservation->instanceProperties->machineType = 'excepturi';
    $request->reservation->specificReservation->instanceProperties->minCpuPlatform = 'neque';
    $request->reservation->specificReservation->sourceInstanceTemplate = 'maxime';
    $request->reservation->specificReservationRequired = false;
    $request->reservation->status = ReservationStatusEnum::CREATING;
    $request->reservation->zone = 'nostrum';
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'alias';
    $request->key = 'libero';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->project = 'quasi';
    $request->quotaUser = 'nihil';
    $request->requestId = 'blanditiis';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'blanditiis';
    $request->userIp = 'sequi';
    $request->zone = 'sunt';

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
    $request->accessToken = 'exercitationem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'necessitatibus';
    $request->filter = 'harum';
    $request->key = 'amet';
    $request->maxResults = 731671;
    $request->oauthToken = 'ex';
    $request->orderBy = 'vero';
    $request->pageToken = 'odit';
    $request->prettyPrint = false;
    $request->project = 'quaerat';
    $request->quotaUser = 'dicta';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'adipisci';
    $request->userIp = 'quasi';
    $request->zone = 'alias';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->reservationsResizeRequest = new ReservationsResizeRequest();
    $request->reservationsResizeRequest->specificSkuCount = 'perspiciatis';
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eum';
    $request->fields = 'eum';
    $request->key = 'dolorem';
    $request->oauthToken = 'placeat';
    $request->prettyPrint = false;
    $request->project = 'vel';
    $request->quotaUser = 'commodi';
    $request->requestId = 'quibusdam';
    $request->reservation = 'cumque';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'expedita';
    $request->userIp = 'reprehenderit';
    $request->zone = 'nulla';

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
    ];
    $request->zoneSetPolicyRequest->etag = 'porro';
    $request->zoneSetPolicyRequest->policy = new Policy();
    $request->zoneSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->zoneSetPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->zoneSetPolicyRequest->policy->etag = 'molestias';
    $request->zoneSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->zoneSetPolicyRequest->policy->version = 520852;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aperiam';
    $request->fields = 'praesentium';
    $request->key = 'recusandae';
    $request->oauthToken = 'eaque';
    $request->prettyPrint = false;
    $request->project = 'nihil';
    $request->quotaUser = 'dicta';
    $request->resource = 'adipisci';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'in';
    $request->userIp = 'magnam';
    $request->zone = 'repellendus';

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
        'a',
        'voluptates',
    ];
    $request->accessToken = 'vero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'doloremque';
    $request->fields = 'et';
    $request->key = 'possimus';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->project = 'esse';
    $request->quotaUser = 'praesentium';
    $request->resource = 'aperiam';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'dicta';
    $request->userIp = 'doloremque';
    $request->zone = 'minus';

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
    $request->reservation1->commitment = 'odio';
    $request->reservation1->creationTimestamp = 'rerum';
    $request->reservation1->description = 'provident';
    $request->reservation1->id = 'nostrum';
    $request->reservation1->kind = 'perferendis';
    $request->reservation1->name = 'Ruth Schuppe';
    $request->reservation1->resourcePolicies = [
        'soluta' => 'quia',
        'similique' => 'ipsam',
        'a' => 'alias',
    ];
    $request->reservation1->resourceStatus = new AllocationResourceStatus();
    $request->reservation1->resourceStatus->specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation();
    $request->reservation1->resourceStatus->specificSkuAllocation->sourceInstanceTemplateId = 'perferendis';
    $request->reservation1->satisfiesPzs = false;
    $request->reservation1->selfLink = 'aspernatur';
    $request->reservation1->shareSettings = new ShareSettings();
    $request->reservation1->shareSettings->projectMap = [
        'sit' => new ShareSettingsProjectConfig(),
    ];
    $request->reservation1->shareSettings->shareType = ShareSettingsShareTypeEnum::ORGANIZATION;
    $request->reservation1->specificReservation = new AllocationSpecificSKUReservation();
    $request->reservation1->specificReservation->assuredCount = 'accusamus';
    $request->reservation1->specificReservation->count = 'ut';
    $request->reservation1->specificReservation->inUseCount = 'quae';
    $request->reservation1->specificReservation->instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties();
    $request->reservation1->specificReservation->instanceProperties->guestAccelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->reservation1->specificReservation->instanceProperties->localSsds = [
        new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk(),
        new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk(),
        new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk(),
    ];
    $request->reservation1->specificReservation->instanceProperties->locationHint = 'maiores';
    $request->reservation1->specificReservation->instanceProperties->machineType = 'cupiditate';
    $request->reservation1->specificReservation->instanceProperties->minCpuPlatform = 'aperiam';
    $request->reservation1->specificReservation->sourceInstanceTemplate = 'alias';
    $request->reservation1->specificReservationRequired = false;
    $request->reservation1->status = ReservationStatusEnum::CREATING;
    $request->reservation1->zone = 'iste';
    $request->accessToken = 'earum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consequuntur';
    $request->fields = 'occaecati';
    $request->key = 'doloremque';
    $request->oauthToken = 'qui';
    $request->paths = [
        'quos',
        'accusamus',
    ];
    $request->prettyPrint = false;
    $request->project = 'quidem';
    $request->quotaUser = 'aliquam';
    $request->requestId = 'fuga';
    $request->reservationPathParameter = 'itaque';
    $request->updateMask = 'iste';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'suscipit';
    $request->userIp = 'ut';
    $request->zone = 'sunt';

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
