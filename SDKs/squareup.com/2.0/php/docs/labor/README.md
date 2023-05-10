# labor

### Available Operations

* [createBreakType](#createbreaktype) - CreateBreakType
* [createShift](#createshift) - CreateShift
* [deleteBreakType](#deletebreaktype) - DeleteBreakType
* [deleteShift](#deleteshift) - DeleteShift
* [getBreakType](#getbreaktype) - GetBreakType
* [getEmployeeWage](#getemployeewage) - GetEmployeeWage
* [getShift](#getshift) - GetShift
* [getTeamMemberWage](#getteammemberwage) - GetTeamMemberWage
* [listBreakTypes](#listbreaktypes) - ListBreakTypes
* [listEmployeeWages](#listemployeewages) - ListEmployeeWages
* [listTeamMemberWages](#listteammemberwages) - ListTeamMemberWages
* [listWorkweekConfigs](#listworkweekconfigs) - ListWorkweekConfigs
* [searchShifts](#searchshifts) - SearchShifts
* [updateBreakType](#updatebreaktype) - UpdateBreakType
* [updateShift](#updateshift) - UpdateShift
* [updateWorkweekConfig](#updateworkweekconfig) - UpdateWorkweekConfig

## createBreakType

Creates a new `BreakType`.

A `BreakType` is a template for creating `Break` objects.
You must provide the following values in your request to this
endpoint:

- `location_id`
- `break_name`
- `expected_duration`
- `is_paid`

You can only have three `BreakType` instances per location. If you attempt to add a fourth
`BreakType` for a location, an `INVALID_REQUEST_ERROR` "Exceeded limit of 3 breaks per location."
is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateBreakTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\BreakType;
use \OpenAPI\OpenAPI\Models\Operations\CreateBreakTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBreakTypeRequest();
    $request->breakType = new BreakType();
    $request->breakType->breakName = 'nobis';
    $request->breakType->createdAt = 'laboriosam';
    $request->breakType->expectedDuration = 'recusandae';
    $request->breakType->id = '205e16de-ab3f-4ec9-978a-64584273a841';
    $request->breakType->isPaid = false;
    $request->breakType->locationId = 'rem';
    $request->breakType->updatedAt = 'fugiat';
    $request->breakType->version = 117380;
    $request->idempotencyKey = 'nisi';

    $requestSecurity = new CreateBreakTypeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->labor->createBreakType($request, $requestSecurity);

    if ($response->createBreakTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createShift

Creates a new `Shift`.

A `Shift` represents a complete workday for a single employee.
You must provide the following values in your request to this
endpoint:

- `location_id`
- `employee_id`
- `start_at`

An attempt to create a new `Shift` can result in a `BAD_REQUEST` error when:
- The `status` of the new `Shift` is `OPEN` and the employee has another
shift with an `OPEN` status.
- The `start_at` date is in the future.
- The `start_at` or `end_at` date overlaps another shift for the same employee.
- The `Break` instances are set in the request and a break `start_at`
is before the `Shift.start_at`, a break `end_at` is after
the `Shift.end_at`, or both.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateShiftRequest;
use \OpenAPI\OpenAPI\Models\Shared\Shift;
use \OpenAPI\OpenAPI\Models\Shared\BreakT;
use \OpenAPI\OpenAPI\Models\Shared\ShiftWage;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Operations\CreateShiftSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateShiftRequest();
    $request->idempotencyKey = 'consequuntur';
    $request->shift = new Shift();
    $request->shift->breaks = [
        new BreakT(),
    ];
    $request->shift->createdAt = 'aperiam';
    $request->shift->employeeId = 'cupiditate';
    $request->shift->endAt = 'reiciendis';
    $request->shift->id = 'b0929921-aefb-49f5-8c4d-86e68e4be056';
    $request->shift->locationId = 'alias';
    $request->shift->startAt = 'quasi';
    $request->shift->status = 'non';
    $request->shift->teamMemberId = 'maiores';
    $request->shift->timezone = 'enim';
    $request->shift->updatedAt = 'sint';
    $request->shift->version = 858778;
    $request->shift->wage = new ShiftWage();
    $request->shift->wage->hourlyRate = new Money();
    $request->shift->wage->hourlyRate->amount = 643678;
    $request->shift->wage->hourlyRate->currency = 'esse';
    $request->shift->wage->title = 'Mrs.';

    $requestSecurity = new CreateShiftSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->labor->createShift($request, $requestSecurity);

    if ($response->createShiftResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBreakType

Deletes an existing `BreakType`.

A `BreakType` can be deleted even if it is referenced from a `Shift`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBreakTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBreakTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBreakTypeRequest();
    $request->id = '7a59ecfe-f66e-4f1c-aa33-83c2beb47737';

    $requestSecurity = new DeleteBreakTypeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->labor->deleteBreakType($request, $requestSecurity);

    if ($response->deleteBreakTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteShift

Deletes a `Shift`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteShiftRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteShiftSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteShiftRequest();
    $request->id = '3c8d72f6-4d1d-4b1f-ac43-10661e96349e';

    $requestSecurity = new DeleteShiftSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->labor->deleteShift($request, $requestSecurity);

    if ($response->deleteShiftResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBreakType

Returns a single `BreakType` specified by `id`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBreakTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBreakTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBreakTypeRequest();
    $request->id = '1cf9e06e-3a43-4700-8ae6-b6bc9b8f759e';

    $requestSecurity = new GetBreakTypeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->labor->getBreakType($request, $requestSecurity);

    if ($response->getBreakTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployeeWage

Returns a single `EmployeeWage` specified by `id`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeeWageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeeWageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployeeWageRequest();
    $request->id = 'ac55a974-1d31-4135-a965-bb8a72026114';

    $requestSecurity = new GetEmployeeWageSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->labor->getEmployeeWage($request, $requestSecurity);

    if ($response->getEmployeeWageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getShift

Returns a single `Shift` specified by `id`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetShiftRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetShiftSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetShiftRequest();
    $request->id = '35e139db-c225-49b1-abda-8c070e1084cb';

    $requestSecurity = new GetShiftSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->labor->getShift($request, $requestSecurity);

    if ($response->getShiftResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeamMemberWage

Returns a single `TeamMemberWage` specified by `id `.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamMemberWageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamMemberWageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamMemberWageRequest();
    $request->id = '0672d1ad-879e-4eb9-a65b-85efbd02bae0';

    $requestSecurity = new GetTeamMemberWageSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->labor->getTeamMemberWage($request, $requestSecurity);

    if ($response->getTeamMemberWageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBreakTypes

Returns a paginated list of `BreakType` instances for a business.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListBreakTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBreakTypesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBreakTypesRequest();
    $request->cursor = 'expedita';
    $request->limit = 885208;
    $request->locationId = 'eos';

    $requestSecurity = new ListBreakTypesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->labor->listBreakTypes($request, $requestSecurity);

    if ($response->listBreakTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEmployeeWages

Returns a paginated list of `EmployeeWage` instances for a business.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListEmployeeWagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEmployeeWagesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEmployeeWagesRequest();
    $request->cursor = 'quibusdam';
    $request->employeeId = 'odio';
    $request->limit = 510128;

    $requestSecurity = new ListEmployeeWagesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->labor->listEmployeeWages($request, $requestSecurity);

    if ($response->listEmployeeWagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTeamMemberWages

Returns a paginated list of `TeamMemberWage` instances for a business.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListTeamMemberWagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTeamMemberWagesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTeamMemberWagesRequest();
    $request->cursor = 'odit';
    $request->limit = 127688;
    $request->teamMemberId = 'corporis';

    $requestSecurity = new ListTeamMemberWagesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->labor->listTeamMemberWages($request, $requestSecurity);

    if ($response->listTeamMemberWagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkweekConfigs

Returns a list of `WorkweekConfig` instances for a business.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkweekConfigsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkweekConfigsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkweekConfigsRequest();
    $request->cursor = 'error';
    $request->limit = 937117;

    $requestSecurity = new ListWorkweekConfigsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->labor->listWorkweekConfigs($request, $requestSecurity);

    if ($response->listWorkweekConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchShifts

Returns a paginated list of `Shift` records for a business.
The list to be returned can be filtered by:
- Location IDs.
- Employee IDs.
- Shift status (`OPEN` and `CLOSED`).
- Shift start.
- Shift end.
- Workday details.

The list can be sorted by:
- `start_at`.
- `end_at`.
- `created_at`.
- `updated_at`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SearchShiftsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShiftQuery;
use \OpenAPI\OpenAPI\Models\Shared\ShiftFilter;
use \OpenAPI\OpenAPI\Models\Shared\TimeRange;
use \OpenAPI\OpenAPI\Models\Shared\ShiftWorkday;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\ShiftSort;
use \OpenAPI\OpenAPI\Models\Operations\SearchShiftsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchShiftsRequest();
    $request->cursor = 'adipisci';
    $request->limit = 923306;
    $request->query = new ShiftQuery();
    $request->query->filter = new ShiftFilter();
    $request->query->filter->employeeIds = [
        'ut',
        'quidem',
        'quis',
    ];
    $request->query->filter->end = new TimeRange();
    $request->query->filter->end->endAt = 'beatae';
    $request->query->filter->end->startAt = 'unde';
    $request->query->filter->locationIds = [
        'delectus',
        'cupiditate',
    ];
    $request->query->filter->start = new TimeRange();
    $request->query->filter->start->endAt = 'fugit';
    $request->query->filter->start->startAt = 'numquam';
    $request->query->filter->status = 'numquam';
    $request->query->filter->teamMemberIds = [
        'at',
    ];
    $request->query->filter->workday = new ShiftWorkday();
    $request->query->filter->workday->dateRange = new DateRange();
    $request->query->filter->workday->dateRange->endDate = 'officia';
    $request->query->filter->workday->dateRange->startDate = 'dignissimos';
    $request->query->filter->workday->defaultTimezone = 'optio';
    $request->query->filter->workday->matchShiftsBy = 'necessitatibus';
    $request->query->sort = new ShiftSort();
    $request->query->sort->field = 'corporis';
    $request->query->sort->order = 'qui';

    $requestSecurity = new SearchShiftsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->labor->searchShifts($request, $requestSecurity);

    if ($response->searchShiftsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBreakType

Updates an existing `BreakType`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBreakTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateBreakTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\BreakType;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBreakTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBreakTypeRequest();
    $request->updateBreakTypeRequest = new UpdateBreakTypeRequest();
    $request->updateBreakTypeRequest->breakType = new BreakType();
    $request->updateBreakTypeRequest->breakType->breakName = 'expedita';
    $request->updateBreakTypeRequest->breakType->createdAt = 'voluptatum';
    $request->updateBreakTypeRequest->breakType->expectedDuration = 'cupiditate';
    $request->updateBreakTypeRequest->breakType->id = '5c537c64-54ef-4b0b-b489-6c3ca5acfbe2';
    $request->updateBreakTypeRequest->breakType->isPaid = false;
    $request->updateBreakTypeRequest->breakType->locationId = 'repellat';
    $request->updateBreakTypeRequest->breakType->updatedAt = 'pariatur';
    $request->updateBreakTypeRequest->breakType->version = 362888;
    $request->id = '70757792-9177-4dea-8646-ecb573409e3e';

    $requestSecurity = new UpdateBreakTypeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->labor->updateBreakType($request, $requestSecurity);

    if ($response->updateBreakTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateShift

Updates an existing `Shift`.

When adding a `Break` to a `Shift`, any earlier `Break` instances in the `Shift` have
the `end_at` property set to a valid RFC-3339 datetime string.

When closing a `Shift`, all `Break` instances in the `Shift` must be complete with `end_at`
set on each `Break`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateShiftRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateShiftRequest;
use \OpenAPI\OpenAPI\Models\Shared\Shift;
use \OpenAPI\OpenAPI\Models\Shared\BreakT;
use \OpenAPI\OpenAPI\Models\Shared\ShiftWage;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Operations\UpdateShiftSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateShiftRequest();
    $request->updateShiftRequest = new UpdateShiftRequest();
    $request->updateShiftRequest->shift = new Shift();
    $request->updateShiftRequest->shift->breaks = [
        new BreakT(),
        new BreakT(),
        new BreakT(),
    ];
    $request->updateShiftRequest->shift->createdAt = 'dicta';
    $request->updateShiftRequest->shift->employeeId = 'earum';
    $request->updateShiftRequest->shift->endAt = 'veniam';
    $request->updateShiftRequest->shift->id = 'a2b12eb0-7f11-46db-9954-5fc95fa88970';
    $request->updateShiftRequest->shift->locationId = 'saepe';
    $request->updateShiftRequest->shift->startAt = 'architecto';
    $request->updateShiftRequest->shift->status = 'quos';
    $request->updateShiftRequest->shift->teamMemberId = 'iste';
    $request->updateShiftRequest->shift->timezone = 'assumenda';
    $request->updateShiftRequest->shift->updatedAt = 'tempore';
    $request->updateShiftRequest->shift->version = 725574;
    $request->updateShiftRequest->shift->wage = new ShiftWage();
    $request->updateShiftRequest->shift->wage->hourlyRate = new Money();
    $request->updateShiftRequest->shift->wage->hourlyRate->amount = 244032;
    $request->updateShiftRequest->shift->wage->hourlyRate->currency = 'doloremque';
    $request->updateShiftRequest->shift->wage->title = 'Dr.';
    $request->id = 'cb33ea05-5b19-47cd-84e2-f52d82d3513b';

    $requestSecurity = new UpdateShiftSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->labor->updateShift($request, $requestSecurity);

    if ($response->updateShiftResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkweekConfig

Updates a `WorkweekConfig`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkweekConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateWorkweekConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkweekConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkweekConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkweekConfigRequest();
    $request->updateWorkweekConfigRequest = new UpdateWorkweekConfigRequest();
    $request->updateWorkweekConfigRequest->workweekConfig = new WorkweekConfig();
    $request->updateWorkweekConfigRequest->workweekConfig->createdAt = 'tempore';
    $request->updateWorkweekConfigRequest->workweekConfig->id = '6f48b656-bcdb-435f-b2e4-b27537a8cd9e';
    $request->updateWorkweekConfigRequest->workweekConfig->startOfDayLocalTime = 'ducimus';
    $request->updateWorkweekConfigRequest->workweekConfig->startOfWeek = 'dolor';
    $request->updateWorkweekConfigRequest->workweekConfig->updatedAt = 'dicta';
    $request->updateWorkweekConfigRequest->workweekConfig->version = 622894;
    $request->id = 'c177d525-f77b-4114-aeb5-2ff785fc3781';

    $requestSecurity = new UpdateWorkweekConfigSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->labor->updateWorkweekConfig($request, $requestSecurity);

    if ($response->updateWorkweekConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
