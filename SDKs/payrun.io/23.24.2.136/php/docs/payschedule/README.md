# paySchedule

### Available Operations

* [deletePaySchedule](#deletepayschedule) - Deletes a pay schedule
* [getAllPayScheduleTags](#getallpayscheduletags) - Get all pay schedule tags
* [getEmployeesFromPaySchedule](#getemployeesfrompayschedule) - Get all employees revisions from a pay schedule.
* [getEmployeesFromPayScheduleOnEffectiveDate](#getemployeesfrompayscheduleoneffectivedate) - Get employees from a pay schedule on effective date.
* [getPayRunFromPaySchedule](#getpayrunfrompayschedule) - Gets the pay run from the pay schedule
* [getPayRunsFromPaySchedule](#getpayrunsfrompayschedule) - Gets the pay runs from the pay schedule
* [getPayScheduleFromEmployer](#getpayschedulefromemployer) - Gets the specified pay schedule from the employer
* [getPaySchedulesFromEmployer](#getpayschedulesfromemployer) - Gets the pay schedule from the specified employer
* [getPaySchedulesWithTag](#getpayscheduleswithtag) - Get pay schedule with tag
* [postPaySchedule](#postpayschedule) - Create a new pay schedule
* [putPaySchedule](#putpayschedule) - Updates a pay schedule

## deletePaySchedule

Delete the specified pay schedule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePayScheduleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePayScheduleRequest();
    $request->apiVersion = 'nostrum';
    $request->authorization = 'est';
    $request->employerId = 'impedit';
    $request->payScheduleId = 'delectus';

    $response = $sdk->paySchedule->deletePaySchedule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllPayScheduleTags

Gets all the pay schedule tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllPayScheduleTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllPayScheduleTagsRequest();
    $request->apiVersion = 'tempore';
    $request->authorization = 'vero';
    $request->employerId = 'odit';

    $response = $sdk->paySchedule->getAllPayScheduleTags($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployeesFromPaySchedule

Gets links to all employee revisions that have ever existed in the specified pay schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeesFromPayScheduleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployeesFromPayScheduleRequest();
    $request->apiVersion = 'repellat';
    $request->authorization = 'pariatur';
    $request->employerId = 'nemo';
    $request->payScheduleId = 'reprehenderit';

    $response = $sdk->paySchedule->getEmployeesFromPaySchedule($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployeesFromPayScheduleOnEffectiveDate

Gets links to all employee revisions in the specified pay schedule for the given effective date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeesFromPayScheduleOnEffectiveDateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployeesFromPayScheduleOnEffectiveDateRequest();
    $request->apiVersion = 'aperiam';
    $request->authorization = 'odio';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-07-21');
    $request->employerId = 'ducimus';
    $request->payScheduleId = 'excepturi';

    $response = $sdk->paySchedule->getEmployeesFromPayScheduleOnEffectiveDate($request);

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
    $request->apiVersion = 'dolores';
    $request->authorization = 'error';
    $request->employerId = 'veritatis';
    $request->payRunId = 'ducimus';
    $request->payScheduleId = 'voluptate';

    $response = $sdk->paySchedule->getPayRunFromPaySchedule($request);

    if ($response->payRun !== null) {
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
    $request->apiVersion = 'pariatur';
    $request->authorization = 'itaque';
    $request->employerId = 'similique';
    $request->payScheduleId = 'optio';

    $response = $sdk->paySchedule->getPayRunsFromPaySchedule($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayScheduleFromEmployer

Returns the specified pay schedule object from employer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayScheduleFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayScheduleFromEmployerRequest();
    $request->apiVersion = 'ex';
    $request->authorization = 'quaerat';
    $request->employerId = 'commodi';
    $request->payScheduleId = 'officiis';

    $response = $sdk->paySchedule->getPayScheduleFromEmployer($request);

    if ($response->paySchedule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaySchedulesFromEmployer

Get links to all pay schedules for the specified employer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaySchedulesFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaySchedulesFromEmployerRequest();
    $request->apiVersion = 'placeat';
    $request->authorization = 'quidem';
    $request->employerId = 'exercitationem';

    $response = $sdk->paySchedule->getPaySchedulesFromEmployer($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaySchedulesWithTag

Gets the pay schedules with the tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaySchedulesWithTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaySchedulesWithTagRequest();
    $request->apiVersion = 'quam';
    $request->authorization = 'dolorem';
    $request->employerId = 'modi';
    $request->tagId = 'ipsa';

    $response = $sdk->paySchedule->getPaySchedulesWithTag($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPaySchedule

Create a new pay schedule object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostPayScheduleRequest;
use \OpenAPI\OpenAPI\Models\Shared\PaySchedule;
use \OpenAPI\OpenAPI\Models\Shared\PaySchedulePaySchedule;
use \OpenAPI\OpenAPI\Models\Shared\PaySchedulePaySchedulePayFrequencyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPayScheduleRequest();
    $request->apiVersion = 'sint';
    $request->authorization = 'vero';
    $request->employerId = 'sequi';
    $request->paySchedule = new PaySchedule();
    $request->paySchedule->paySchedule = new PaySchedulePaySchedule();
    $request->paySchedule->paySchedule->metaData = [
        'cum' => 'dicta',
        'earum' => 'veniam',
        'animi' => 'dolores',
        'nam' => 'dicta',
    ];
    $request->paySchedule->paySchedule->name = 'Ms. Kelley Rogahn';
    $request->paySchedule->paySchedule->payFrequency = PaySchedulePaySchedulePayFrequencyEnum::WEEKLY;

    $response = $sdk->paySchedule->postPaySchedule($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPaySchedule

Updates the existing specified pay schedule object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutPayScheduleRequest;
use \OpenAPI\OpenAPI\Models\Shared\PaySchedule;
use \OpenAPI\OpenAPI\Models\Shared\PaySchedulePaySchedule;
use \OpenAPI\OpenAPI\Models\Shared\PaySchedulePaySchedulePayFrequencyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPayScheduleRequest();
    $request->apiVersion = 'quasi';
    $request->authorization = 'laboriosam';
    $request->employerId = 'pariatur';
    $request->paySchedule = new PaySchedule();
    $request->paySchedule->paySchedule = new PaySchedulePaySchedule();
    $request->paySchedule->paySchedule->metaData = [
        'excepturi' => 'occaecati',
        'nemo' => 'aliquam',
        'nostrum' => 'doloribus',
    ];
    $request->paySchedule->paySchedule->name = 'Kirk Haley';
    $request->paySchedule->paySchedule->payFrequency = PaySchedulePaySchedulePayFrequencyEnum::TWO_WEEKLY;
    $request->payScheduleId = 'totam';

    $response = $sdk->paySchedule->putPaySchedule($request);

    if ($response->paySchedule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
