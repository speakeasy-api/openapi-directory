# SDK

## Overview

API for reading and writing personnel data incl. data about attendances and absences

### Available Operations

* [deleteCompanyAttendancesId](#deletecompanyattendancesid) - This endpoint is responsible for deleting attendance data for the company employees.
* [deleteCompanyTimeOffsId](#deletecompanytimeoffsid) - This endpoint is responsible for deleting absence period data for the company employees.
* [getCompanyAttendances](#getcompanyattendances) - This endpoint is responsible for fetching attendance data for the company employees. It is possible to paginate results, filter by period, the date and/or time it was updated, and/or specific employees. The result will contain a list of attendance periods, structured as defined here.
* [getCompanyEmployees](#getcompanyemployees) - List Employees
* [getCompanyEmployeesEmployeeId](#getcompanyemployeesemployeeid) - Show employee by ID
* [getCompanyEmployeesEmployeeIdProfilePictureWidth](#getcompanyemployeesemployeeidprofilepicturewidth) - Show employee profile picture
* [getCompanyTimeOffTypes](#getcompanytimeofftypes) - Provides a list of available time-off types, for example 'Paid vacation', 'Parental leave' or 'Home office'
* [getCompanyTimeOffs](#getcompanytimeoffs) - This endpoint is responsible for fetching absence data for the company employees. It is possible to paginate results, filter by period and/or specific employees. The result will contain a list of absence periods, structured as defined here.
* [getCompanyTimeOffsId](#getcompanytimeoffsid) - Absence Period
* [patchCompanyAttendancesId](#patchcompanyattendancesid) - This endpoint is responsible for updating attendance data for the company employees. Attributes are not required and if not specified, the current value will be used. It is not possible to change the employee id.
* [postCompanyAttendances](#postcompanyattendances) - This endpoint is responsible for adding attendance data for the company employees. It is possible to add attendances for one or many employees at the same time. The payload sent on the request should be a list of attendance periods, in the form of an array containing attendance period objects.
* [postCompanyEmployees](#postcompanyemployees) - Create an employee
* [postCompanyTimeOffs](#postcompanytimeoffs) - This endpoint is responsible for adding absence data for the company employees.

## deleteCompanyAttendancesId

This endpoint is responsible for deleting attendance data for the company employees.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCompanyAttendancesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCompanyAttendancesIdRequest();
    $request->id = 592845;

    $response = $sdk->sdk->deleteCompanyAttendancesId($request);

    if ($response->response !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCompanyTimeOffsId

This endpoint is responsible for deleting absence period data for the company employees.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCompanyTimeOffsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCompanyTimeOffsIdRequest();
    $request->id = 715190;

    $response = $sdk->sdk->deleteCompanyTimeOffsId($request);

    if ($response->response !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompanyAttendances

This endpoint is responsible for fetching attendance data for the company employees. It is possible to paginate results, filter by period, the date and/or time it was updated, and/or specific employees. The result will contain a list of attendance periods, structured as defined here.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompanyAttendancesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompanyAttendancesRequest();
    $request->employees = [
        602763,
        857946,
        544883,
        847252,
    ];
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2022-05-18');
    $request->limit = 645894;
    $request->offset = 384382;
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2022-09-14');
    $request->updatedFrom = 'debitis';
    $request->updatedTo = 'ipsa';

    $response = $sdk->sdk->getCompanyAttendances($request);

    if ($response->attendancePeriodsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompanyEmployees

List Employees

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getCompanyEmployees();

    if ($response->employeesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompanyEmployeesEmployeeId

Show employee by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompanyEmployeesEmployeeIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompanyEmployeesEmployeeIdRequest();
    $request->employeeId = 963663;

    $response = $sdk->sdk->getCompanyEmployeesEmployeeId($request);

    if ($response->employeeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompanyEmployeesEmployeeIdProfilePictureWidth

Show employee profile picture

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompanyEmployeesEmployeeIdProfilePictureWidthRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompanyEmployeesEmployeeIdProfilePictureWidthRequest();
    $request->employeeId = 272656;
    $request->width = 383441;

    $response = $sdk->sdk->getCompanyEmployeesEmployeeIdProfilePictureWidth($request);

    if ($response->getCompanyEmployeesEmployeeIdProfilePictureWidth200ImagePngBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompanyTimeOffTypes

Provides a list of available time-off types, for example 'Paid vacation', 'Parental leave' or 'Home office'

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompanyTimeOffTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompanyTimeOffTypesRequest();
    $request->limit = 477665;
    $request->offset = 791725;

    $response = $sdk->sdk->getCompanyTimeOffTypes($request);

    if ($response->getCompanyTimeOffTypes200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompanyTimeOffs

This endpoint is responsible for fetching absence data for the company employees. It is possible to paginate results, filter by period and/or specific employees. The result will contain a list of absence periods, structured as defined here.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompanyTimeOffsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompanyTimeOffsRequest();
    $request->employees = [
        528895,
        479977,
        568045,
        392785,
    ];
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2020-06-29');
    $request->limit = 71036;
    $request->offset = 337396;
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2022-05-09');
    $request->updatedFrom = 'perferendis';
    $request->updatedTo = 'ipsam';

    $response = $sdk->sdk->getCompanyTimeOffs($request);

    if ($response->absencePeriodsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompanyTimeOffsId

Absence Period

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompanyTimeOffsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompanyTimeOffsIdRequest();
    $request->id = 832620;

    $response = $sdk->sdk->getCompanyTimeOffsId($request);

    if ($response->absencePeriodResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchCompanyAttendancesId

This endpoint is responsible for updating attendance data for the company employees. Attributes are not required and if not specified, the current value will be used. It is not possible to change the employee id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchCompanyAttendancesIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAttendancePeriodRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchCompanyAttendancesIdRequest();
    $request->updateAttendancePeriodRequest = new UpdateAttendancePeriodRequest();
    $request->updateAttendancePeriodRequest->break = 957156;
    $request->updateAttendancePeriodRequest->comment = 'quo';
    $request->updateAttendancePeriodRequest->date = DateTime::createFromFormat('Y-m-d', '2022-02-17');
    $request->updateAttendancePeriodRequest->endTime = 'at';
    $request->updateAttendancePeriodRequest->startTime = 'maiores';
    $request->id = 473608;

    $response = $sdk->sdk->patchCompanyAttendancesId($request);

    if ($response->response !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCompanyAttendances

This endpoint is responsible for adding attendance data for the company employees. It is possible to add attendances for one or many employees at the same time. The payload sent on the request should be a list of attendance periods, in the form of an array containing attendance period objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\NewAttendancePeriodRequest;
use \OpenAPI\OpenAPI\Models\Shared\NewAttendancePeriodRequestAttendances;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NewAttendancePeriodRequest();
    $request->attendances = [
        new NewAttendancePeriodRequestAttendances(),
        new NewAttendancePeriodRequestAttendances(),
        new NewAttendancePeriodRequestAttendances(),
        new NewAttendancePeriodRequestAttendances(),
    ];

    $response = $sdk->sdk->postCompanyAttendances($request);

    if ($response->newAttendancePeriodResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCompanyEmployees

Creates new employee. Status of the employee will be set to `active` if `hire_date` provided is in past. Otherwise status will be set to `onboarding`. This endpoint will respond with `id` of created employee in case of success.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCompanyEmployeesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostCompanyEmployeesRequestBodyEmployeeGenderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCompanyEmployeesRequestBody();
    $request->employeeDepartment = 'quod';
    $request->employeeEmail = 'esse';
    $request->employeeFirstName = 'totam';
    $request->employeeGender = PostCompanyEmployeesRequestBodyEmployeeGenderEnum::DIVERSE;
    $request->employeeHireDate = DateTime::createFromFormat('Y-m-d', '2022-10-06');
    $request->employeeLastName = 'nam';
    $request->employeePosition = 'officia';
    $request->employeeWeeklyHours = 5820.2;

    $response = $sdk->sdk->postCompanyEmployees($request);

    if ($response->response !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCompanyTimeOffs

This endpoint is responsible for adding absence data for the company employees.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateTimeOffPeriodRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTimeOffPeriodRequest();
    $request->comment = 'fugit';
    $request->employeeId = 537373;
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2020-09-22');
    $request->halfDayEnd = false;
    $request->halfDayStart = false;
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2022-10-15');
    $request->timeOffTypeId = 414662;

    $response = $sdk->sdk->postCompanyTimeOffs($request);

    if ($response->postCompanyTimeOffs201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
