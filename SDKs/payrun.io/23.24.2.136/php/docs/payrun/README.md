# payRun

### Available Operations

* [deletePayRun](#deletepayrun) - Deletes a pay run
* [deletePayRunEmployee](#deletepayrunemployee) - Deletes a pay run employee
* [getAEAssessmentsFromPayRun](#getaeassessmentsfrompayrun) - Get the auto enrolment assessments
* [getAllPayRunTags](#getallpayruntags) - Get all pay run tags
* [getCommentariesFromPayRun](#getcommentariesfrompayrun) - Get links to all commentaries for the specified pay run
* [getCommentaryFromPayRunByEmployee](#getcommentaryfrompayrunbyemployee) - Get commentary from payrun by specified employee.
* [getEmployeesFromPayRun](#getemployeesfrompayrun) - Get employees from the pay run
* [getPayRunFromPaySchedule](#getpayrunfrompayschedule) - Gets the pay run from the pay schedule
* [getPayRunsFromEmployee](#getpayrunsfromemployee) - Gets the pay runs from the employee
* [getPayRunsFromPaySchedule](#getpayrunsfrompayschedule) - Gets the pay runs from the pay schedule
* [getPayRunsWithTag](#getpayrunswithtag) - Get pay runs with tag
* [getReportLinesFromPayRun](#getreportlinesfrompayrun) - Gets the report lines from the specified pay run

## deletePayRun

Delete the specified pay run

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePayRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePayRunRequest();
    $request->apiVersion = 'officiis';
    $request->authorization = 'eos';
    $request->employerId = 'quibusdam';
    $request->payRunId = 'odio';
    $request->payScheduleId = 'praesentium';

    $response = $sdk->payRun->deletePayRun($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePayRunEmployee

Delete pay run results for a single employee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePayRunEmployeeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePayRunEmployeeRequest();
    $request->apiVersion = 'odit';
    $request->authorization = 'explicabo';
    $request->employeeId = 'corporis';
    $request->employerId = 'error';
    $request->payRunId = 'earum';
    $request->payScheduleId = 'adipisci';

    $response = $sdk->payRun->deletePayRunEmployee($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAEAssessmentsFromPayRun

Gets all auto enrolment assessments from the specified pay run

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAEAssessmentsFromPayRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAEAssessmentsFromPayRunRequest();
    $request->apiVersion = 'recusandae';
    $request->authorization = 'similique';
    $request->employerId = 'ut';
    $request->payRunId = 'quidem';
    $request->payScheduleId = 'quis';

    $response = $sdk->payRun->getAEAssessmentsFromPayRun($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllPayRunTags

Gets all the pay run tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllPayRunTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllPayRunTagsRequest();
    $request->apiVersion = 'beatae';
    $request->authorization = 'unde';
    $request->employerId = 'molestiae';
    $request->payScheduleId = 'delectus';

    $response = $sdk->payRun->getAllPayRunTags($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommentariesFromPayRun

Get links to all commentaries for the specified pay run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCommentariesFromPayRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommentariesFromPayRunRequest();
    $request->apiVersion = 'cupiditate';
    $request->authorization = 'fugit';
    $request->employerId = 'numquam';
    $request->payRunId = 'numquam';
    $request->payScheduleId = 'nesciunt';

    $response = $sdk->payRun->getCommentariesFromPayRun($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommentaryFromPayRunByEmployee

Get commentary from payrun by specified employee.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCommentaryFromPayRunByEmployeeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommentaryFromPayRunByEmployeeRequest();
    $request->apiVersion = 'at';
    $request->authorization = 'officia';
    $request->employeeId = 'dignissimos';
    $request->employerId = 'optio';
    $request->payRunId = 'necessitatibus';
    $request->payScheduleId = 'corporis';

    $response = $sdk->payRun->getCommentaryFromPayRunByEmployee($request);

    if ($response->commentary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployeesFromPayRun

Gets links to all employees included in the specified pay run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeesFromPayRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployeesFromPayRunRequest();
    $request->apiVersion = 'qui';
    $request->authorization = 'expedita';
    $request->employerId = 'voluptatum';
    $request->payRunId = 'cupiditate';
    $request->payScheduleId = 'minima';

    $response = $sdk->payRun->getEmployeesFromPayRun($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayRunFromPaySchedule

Returns the pay run from the pay schedule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayRunFromPayScheduleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayRunFromPayScheduleRequest();
    $request->apiVersion = 'placeat';
    $request->authorization = 'enim';
    $request->employerId = 'neque';
    $request->payRunId = 'in';
    $request->payScheduleId = 'minus';

    $response = $sdk->payRun->getPayRunFromPaySchedule($request);

    if ($response->payRun !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayRunsFromEmployee

Get links to all pay runs for the specified employee.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayRunsFromEmployeeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayRunsFromEmployeeRequest();
    $request->apiVersion = 'eum';
    $request->authorization = 'modi';
    $request->employeeId = 'corporis';
    $request->employerId = 'magnam';

    $response = $sdk->payRun->getPayRunsFromEmployee($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayRunsFromPaySchedule

Get links to all pay runs for the specified pay schedule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayRunsFromPayScheduleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayRunsFromPayScheduleRequest();
    $request->apiVersion = 'voluptates';
    $request->authorization = 'maiores';
    $request->employerId = 'tempore';
    $request->payScheduleId = 'aperiam';

    $response = $sdk->payRun->getPayRunsFromPaySchedule($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayRunsWithTag

Gets the pay runs with the tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayRunsWithTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayRunsWithTagRequest();
    $request->apiVersion = 'libero';
    $request->authorization = 'ratione';
    $request->employerId = 'labore';
    $request->payScheduleId = 'totam';
    $request->tagId = 'occaecati';

    $response = $sdk->payRun->getPayRunsWithTag($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReportLinesFromPayRun

Returns all report lines associated with the specified pay run

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReportLinesFromPayRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportLinesFromPayRunRequest();
    $request->apiVersion = 'voluptas';
    $request->authorization = 'quo';
    $request->employerId = 'velit';
    $request->payRunId = 'minus';
    $request->payScheduleId = 'fuga';

    $response = $sdk->payRun->getReportLinesFromPayRun($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
