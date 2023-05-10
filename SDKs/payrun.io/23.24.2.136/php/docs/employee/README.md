# employee

### Available Operations

* [deleteEmployee](#deleteemployee) - Delete an Employee
* [deleteEmployeeRevision](#deleteemployeerevision) - Delete an Employee revision matching the specified revision date.
* [deleteEmployeeRevisionByNumber](#deleteemployeerevisionbynumber) - Delete an Employee revision matching the specified revision number.
* [deleteEmployeeSecret](#deleteemployeesecret) - Deletes employee secret
* [getAEAssessmentFromEmployee](#getaeassessmentfromemployee) - Get the auto enrolment assessment
* [getAEAssessmentsFromEmployee](#getaeassessmentsfromemployee) - Get the auto enrolment assessments
* [getAllEmployeeTags](#getallemployeetags) - Get all employee tags
* [getCommentariesFromEmployee](#getcommentariesfromemployee) - Get links to all commentaries for the specified employee
* [getCommentaryFromEmployee](#getcommentaryfromemployee) - Get commentary from employee
* [getCommentaryFromPayRunByEmployee](#getcommentaryfrompayrunbyemployee) - Get commentary from payrun by specified employee.
* [getEmployeeByEffectiveDate](#getemployeebyeffectivedate) - Get employee by effective date.
* [getEmployeeFromEmployer](#getemployeefromemployer) - Get employee from employer
* [getEmployeeRevisionByNumber](#getemployeerevisionbynumber) - Gets the employee by revision number
* [getEmployeeRevisionSummaries](#getemployeerevisionsummaries) - Get all employee revision summaries
* [getEmployeeRevisionSummaryByNumber](#getemployeerevisionsummarybynumber) - Gets the employee summary by revision number
* [getEmployeeRevisions](#getemployeerevisions) - Get all employee revisions
* [getEmployeeSecret](#getemployeesecret) - Get employee secret
* [getEmployeeSecrets](#getemployeesecrets) - Get all employee secret links
* [getEmployeeSummariesByEffectiveDate](#getemployeesummariesbyeffectivedate) - Get employee summaries from employer at a given effective date.
* [getEmployeeSummariesFromEmployer](#getemployeesummariesfromemployer) - Get employee summaries from employer.
* [getEmployeeSummaryByEffectiveDate](#getemployeesummarybyeffectivedate) - Get employee summary by effective date.
* [getEmployeeSummaryFromEmployer](#getemployeesummaryfromemployer) - Get employee summary from employer
* [getEmployeesByEffectiveDate](#getemployeesbyeffectivedate) - Get employees from employer at a given effective date.
* [getEmployeesFromEmployer](#getemployeesfromemployer) - Get employees from employer.
* [getEmployeesFromPayRun](#getemployeesfrompayrun) - Get employees from the pay run
* [getEmployeesFromPaySchedule](#getemployeesfrompayschedule) - Get all employees revisions from a pay schedule.
* [getEmployeesFromPayScheduleOnEffectiveDate](#getemployeesfrompayscheduleoneffectivedate) - Get employees from a pay schedule on effective date.
* [getEmployeesWithTag](#getemployeeswithtag) - Get employees with tag
* [getPayRunsFromEmployee](#getpayrunsfromemployee) - Gets the pay runs from the employee
* [patchEmployee](#patchemployee) - Patches the employee
* [postEmployeeIntoEmployer](#postemployeeintoemployer) - Create a new Employee
* [postEmployeeSecret](#postemployeesecret) - Create a new employee secret
* [putEmployeeIntoEmployer](#putemployeeintoemployer) - Updates the Employee
* [putEmployeeSecret](#putemployeesecret) - Create a new employee secret

## deleteEmployee

Delete the specified employee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEmployeeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEmployeeRequest();
    $request->apiVersion = 'dolores';
    $request->authorization = 'quis';
    $request->employeeId = 'totam';
    $request->employerId = 'dignissimos';

    $response = $sdk->employee->deleteEmployee($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEmployeeRevision

Deletes the specified employee revision for the matching revision date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEmployeeRevisionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEmployeeRevisionRequest();
    $request->apiVersion = 'eaque';
    $request->authorization = 'quis';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-10-27');
    $request->employeeId = 'perferendis';
    $request->employerId = 'dolores';

    $response = $sdk->employee->deleteEmployeeRevision($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEmployeeRevisionByNumber

Deletes the specified employee revision for the matching revision number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEmployeeRevisionByNumberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEmployeeRevisionByNumberRequest();
    $request->apiVersion = 'minus';
    $request->authorization = 'quam';
    $request->employeeId = 'dolor';
    $request->employerId = 'vero';
    $request->revisionNumber = 'nostrum';

    $response = $sdk->employee->deleteEmployeeRevisionByNumber($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEmployeeSecret

Deletes an employee secret from the given resource location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEmployeeSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEmployeeSecretRequest();
    $request->apiVersion = 'hic';
    $request->authorization = 'recusandae';
    $request->employeeId = 'omnis';
    $request->employerId = 'facilis';
    $request->secretId = 'perspiciatis';

    $response = $sdk->employee->deleteEmployeeSecret($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAEAssessmentFromEmployee

Gets the auto enrolment assessment from the specified employee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAEAssessmentFromEmployeeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAEAssessmentFromEmployeeRequest();
    $request->aeAssessmentId = 'voluptatem';
    $request->apiVersion = 'porro';
    $request->authorization = 'consequuntur';
    $request->employeeId = 'blanditiis';
    $request->employerId = 'error';

    $response = $sdk->employee->getAEAssessmentFromEmployee($request);

    if ($response->aeAssessment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAEAssessmentsFromEmployee

Gets all auto enrolment assessments from the specified employee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAEAssessmentsFromEmployeeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAEAssessmentsFromEmployeeRequest();
    $request->apiVersion = 'eaque';
    $request->authorization = 'occaecati';
    $request->employeeId = 'rerum';
    $request->employerId = 'adipisci';

    $response = $sdk->employee->getAEAssessmentsFromEmployee($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllEmployeeTags

Gets all the employee tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllEmployeeTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllEmployeeTagsRequest();
    $request->apiVersion = 'asperiores';
    $request->authorization = 'earum';
    $request->employerId = 'modi';

    $response = $sdk->employee->getAllEmployeeTags($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommentariesFromEmployee

Get links to all commentaries for the specified employee.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCommentariesFromEmployeeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommentariesFromEmployeeRequest();
    $request->apiVersion = 'iste';
    $request->authorization = 'dolorum';
    $request->employeeId = 'deleniti';
    $request->employerId = 'pariatur';

    $response = $sdk->employee->getCommentariesFromEmployee($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommentaryFromEmployee

Gets the specified commentary report from the employee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCommentaryFromEmployeeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommentaryFromEmployeeRequest();
    $request->apiVersion = 'provident';
    $request->authorization = 'nobis';
    $request->commentaryId = 'libero';
    $request->employeeId = 'delectus';
    $request->employerId = 'quaerat';

    $response = $sdk->employee->getCommentaryFromEmployee($request);

    if ($response->commentary !== null) {
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
    $request->apiVersion = 'quos';
    $request->authorization = 'aliquid';
    $request->employeeId = 'dolorem';
    $request->employerId = 'dolorem';
    $request->payRunId = 'dolor';
    $request->payScheduleId = 'qui';

    $response = $sdk->employee->getCommentaryFromPayRunByEmployee($request);

    if ($response->commentary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployeeByEffectiveDate

Returns the employee's state at the specified effective date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeeByEffectiveDateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployeeByEffectiveDateRequest();
    $request->apiVersion = 'ipsum';
    $request->authorization = 'hic';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2021-07-10');
    $request->employeeId = 'voluptate';
    $request->employerId = 'dignissimos';

    $response = $sdk->employee->getEmployeeByEffectiveDate($request);

    if ($response->employee !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployeeFromEmployer

Gets the specified employee from employer by employee code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeeFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployeeFromEmployerRequest();
    $request->apiVersion = 'reiciendis';
    $request->authorization = 'amet';
    $request->employeeId = 'dolorum';
    $request->employerId = 'numquam';

    $response = $sdk->employee->getEmployeeFromEmployer($request);

    if ($response->employee !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployeeRevisionByNumber

Get the employee revision matching the specified revision number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeeRevisionByNumberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployeeRevisionByNumberRequest();
    $request->apiVersion = 'veritatis';
    $request->authorization = 'ipsa';
    $request->employeeId = 'ipsa';
    $request->employerId = 'iure';
    $request->revisionNumber = 'odio';

    $response = $sdk->employee->getEmployeeRevisionByNumber($request);

    if ($response->employee !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployeeRevisionSummaries

Gets links to all employee revision summaries

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeeRevisionSummariesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployeeRevisionSummariesRequest();
    $request->apiVersion = 'quaerat';
    $request->authorization = 'accusamus';
    $request->employeeId = 'quidem';
    $request->employerId = 'voluptatibus';

    $response = $sdk->employee->getEmployeeRevisionSummaries($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployeeRevisionSummaryByNumber

Get the employee revision summary matching the specified revision number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeeRevisionSummaryByNumberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployeeRevisionSummaryByNumberRequest();
    $request->apiVersion = 'voluptas';
    $request->authorization = 'natus';
    $request->employeeId = 'eos';
    $request->employerId = 'atque';
    $request->revisionNumber = 'sit';

    $response = $sdk->employee->getEmployeeRevisionSummaryByNumber($request);

    if ($response->employeeSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployeeRevisions

Gets links to all employee revisions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeeRevisionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployeeRevisionsRequest();
    $request->apiVersion = 'fugiat';
    $request->authorization = 'ab';
    $request->employeeId = 'soluta';
    $request->employerId = 'dolorum';

    $response = $sdk->employee->getEmployeeRevisions($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployeeSecret

Get the public visible employee secret object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeeSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployeeSecretRequest();
    $request->apiVersion = 'iusto';
    $request->authorization = 'voluptate';
    $request->employeeId = 'dolorum';
    $request->employerId = 'deleniti';
    $request->secretId = 'omnis';

    $response = $sdk->employee->getEmployeeSecret($request);

    if ($response->employeeSecret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployeeSecrets

Get all the employee secret links

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeeSecretsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployeeSecretsRequest();
    $request->apiVersion = 'necessitatibus';
    $request->authorization = 'distinctio';
    $request->employeeId = 'asperiores';
    $request->employerId = 'nihil';

    $response = $sdk->employee->getEmployeeSecrets($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployeeSummariesByEffectiveDate

Get links to all employee summaries for the employer on specified effective date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeeSummariesByEffectiveDateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployeeSummariesByEffectiveDateRequest();
    $request->apiVersion = 'ipsum';
    $request->authorization = 'voluptate';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2021-03-10');
    $request->employerId = 'eius';

    $response = $sdk->employee->getEmployeeSummariesByEffectiveDate($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployeeSummariesFromEmployer

Get links to all employee summaries for the specified employer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeeSummariesFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployeeSummariesFromEmployerRequest();
    $request->apiVersion = 'aspernatur';
    $request->authorization = 'perferendis';
    $request->employerId = 'amet';

    $response = $sdk->employee->getEmployeeSummariesFromEmployer($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployeeSummaryByEffectiveDate

Gets the employee summary for the specified effective date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeeSummaryByEffectiveDateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployeeSummaryByEffectiveDateRequest();
    $request->apiVersion = 'optio';
    $request->authorization = 'accusamus';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-02-04');
    $request->employeeId = 'suscipit';
    $request->employerId = 'deserunt';

    $response = $sdk->employee->getEmployeeSummaryByEffectiveDate($request);

    if ($response->employeeSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployeeSummaryFromEmployer

Gets the specified employee summary data from employer by employee code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeeSummaryFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployeeSummaryFromEmployerRequest();
    $request->apiVersion = 'provident';
    $request->authorization = 'minima';
    $request->employeeId = 'repellendus';
    $request->employerId = 'totam';

    $response = $sdk->employee->getEmployeeSummaryFromEmployer($request);

    if ($response->employeeSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployeesByEffectiveDate

Get links to all employees for the employer on specified effective date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeesByEffectiveDateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployeesByEffectiveDateRequest();
    $request->apiVersion = 'similique';
    $request->authorization = 'alias';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-01-24');
    $request->employerId = 'tempora';

    $response = $sdk->employee->getEmployeesByEffectiveDate($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployeesFromEmployer

Get links to all employees for the specified employer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeesFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployeesFromEmployerRequest();
    $request->apiVersion = 'vel';
    $request->authorization = 'quod';
    $request->employerId = 'officiis';

    $response = $sdk->employee->getEmployeesFromEmployer($request);

    if ($response->linkCollection !== null) {
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
    $request->authorization = 'dolorum';
    $request->employerId = 'a';
    $request->payRunId = 'esse';
    $request->payScheduleId = 'harum';

    $response = $sdk->employee->getEmployeesFromPayRun($request);

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
    $request->apiVersion = 'iusto';
    $request->authorization = 'ipsum';
    $request->employerId = 'quisquam';
    $request->payScheduleId = 'tenetur';

    $response = $sdk->employee->getEmployeesFromPaySchedule($request);

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
    $request->apiVersion = 'amet';
    $request->authorization = 'tempore';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-03-28');
    $request->employerId = 'enim';
    $request->payScheduleId = 'dolorem';

    $response = $sdk->employee->getEmployeesFromPayScheduleOnEffectiveDate($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployeesWithTag

Gets the employees with the tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeesWithTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployeesWithTagRequest();
    $request->apiVersion = 'sapiente';
    $request->authorization = 'totam';
    $request->employerId = 'nihil';
    $request->tagId = 'sit';

    $response = $sdk->employee->getEmployeesWithTag($request);

    if ($response->linkCollection !== null) {
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
    $request->apiVersion = 'expedita';
    $request->authorization = 'neque';
    $request->employeeId = 'sed';
    $request->employerId = 'vel';

    $response = $sdk->employee->getPayRunsFromEmployee($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchEmployee

Patches the specified employee with the supplied values

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchEmployeeRequest;
use \OpenAPI\OpenAPI\Models\Shared\Employee;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployee;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeAEAssessmentOverrideEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeAEExclusionReasonCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeAddress;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeBankAccount;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeEmployeePartner;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeLeaverReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeMaritalStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeNicLiabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeePaySchedule;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeePaymentMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeRegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeRuleExclusionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeSecondedEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeStarterDeclarationEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeTerritoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeWorkingWeekEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchEmployeeRequest();
    $request->apiVersion = 'libero';
    $request->authorization = 'voluptas';
    $request->employee = new Employee();
    $request->employee->employee = new EmployeeEmployee();
    $request->employee->employee->aeAssessmentOverride = EmployeeEmployeeAEAssessmentOverrideEnum::CEASED_MEMBERSHIP;
    $request->employee->employee->aeAssessmentOverrideDate = DateTime::createFromFormat('Y-m-d', '2022-10-14');
    $request->employee->employee->aeExclusionReasonCode = EmployeeEmployeeAEExclusionReasonCodeEnum::TEMPORARY_UK_WORKER;
    $request->employee->employee->aePostponementDate = DateTime::createFromFormat('Y-m-d', '2022-05-31');
    $request->employee->employee->address = new EmployeeEmployeeAddress();
    $request->employee->employee->address->address1 = 'maxime';
    $request->employee->employee->address->address2 = 'pariatur';
    $request->employee->employee->address->address3 = 'soluta';
    $request->employee->employee->address->address4 = 'dicta';
    $request->employee->employee->address->country = 'Pakistan';
    $request->employee->employee->address->postcode = '21177-3458';
    $request->employee->employee->bankAccount = new EmployeeEmployeeBankAccount();
    $request->employee->employee->bankAccount->accountName = 'qui';
    $request->employee->employee->bankAccount->accountNumber = 'neque';
    $request->employee->employee->bankAccount->branchName = 'fugit';
    $request->employee->employee->bankAccount->reference = 'magni';
    $request->employee->employee->bankAccount->sortCode = 'odio';
    $request->employee->employee->code = 'sunt';
    $request->employee->employee->dateOfBirth = DateTime::createFromFormat('Y-m-d', '2022-04-12');
    $request->employee->employee->deactivated = false;
    $request->employee->employee->directorshipAppointmentDate = DateTime::createFromFormat('Y-m-d', '2022-11-28');
    $request->employee->employee->eeaCitizen = false;
    $request->employee->employee->epm6 = false;
    $request->employee->employee->effectiveDate = DateTime::createFromFormat('Y-m-d', '2020-10-05');
    $request->employee->employee->employeePartner = new EmployeeEmployeeEmployeePartner();
    $request->employee->employee->employeePartner->firstName = 'Nella';
    $request->employee->employee->employeePartner->initials = 'et';
    $request->employee->employee->employeePartner->lastName = 'Turner';
    $request->employee->employee->employeePartner->middleName = 'ipsum';
    $request->employee->employee->employeePartner->niNumber = 'veritatis';
    $request->employee->employee->firstName = 'Nellie';
    $request->employee->employee->gender = EmployeeEmployeeGenderEnum::MALE;
    $request->employee->employee->hoursPerWeek = 7316.94;
    $request->employee->employee->initials = 'cupiditate';
    $request->employee->employee->irregularEmployment = false;
    $request->employee->employee->isAgencyWorker = false;
    $request->employee->employee->lastName = 'Bayer';
    $request->employee->employee->leaverReason = EmployeeEmployeeLeaverReasonEnum::OTHER;
    $request->employee->employee->leavingDate = DateTime::createFromFormat('Y-m-d', '2022-09-16');
    $request->employee->employee->maritalStatus = EmployeeEmployeeMaritalStatusEnum::SINGLE;
    $request->employee->employee->metaData = [
        'dolorum' => 'architecto',
    ];
    $request->employee->employee->middleName = 'quae';
    $request->employee->employee->nextRevisionDate = DateTime::createFromFormat('Y-m-d', '2022-06-12');
    $request->employee->employee->niNumber = 'itaque';
    $request->employee->employee->nicLiability = EmployeeEmployeeNicLiabilityEnum::HAS_OTHER_JOB;
    $request->employee->employee->offPayrollWorker = false;
    $request->employee->employee->onStrike = false;
    $request->employee->employee->p45IssuedDate = DateTime::createFromFormat('Y-m-d', '2021-05-02');
    $request->employee->employee->passportNumber = 'porro';
    $request->employee->employee->paySchedule = new EmployeeEmployeePaySchedule();
    $request->employee->employee->paySchedule->atHref = 'doloribus';
    $request->employee->employee->paySchedule->atRel = 'ut';
    $request->employee->employee->paySchedule->atTitle = 'facilis';
    $request->employee->employee->paymentMethod = EmployeeEmployeePaymentMethodEnum::BACS;
    $request->employee->employee->paymentToANonIndividual = false;
    $request->employee->employee->region = EmployeeEmployeeRegionEnum::NOT_SET;
    $request->employee->employee->revision = 63955;
    $request->employee->employee->ruleExclusions = EmployeeEmployeeRuleExclusionsEnum::LEAVER_END_INSTRUCTIONS_RULE;
    $request->employee->employee->seconded = EmployeeEmployeeSecondedEnum::STAY183_DAYS_OR_MORE;
    $request->employee->employee->startDate = DateTime::createFromFormat('Y-m-d', '2021-01-17');
    $request->employee->employee->starterDeclaration = EmployeeEmployeeStarterDeclarationEnum::C;
    $request->employee->employee->territory = EmployeeEmployeeTerritoryEnum::UNITED_KINGDOM;
    $request->employee->employee->title = 'Dr.';
    $request->employee->employee->veteranPeriodStartDate = DateTime::createFromFormat('Y-m-d', '2022-04-29');
    $request->employee->employee->workingWeek = EmployeeEmployeeWorkingWeekEnum::TUESDAY;
    $request->employeeId = 'delectus';
    $request->employerId = 'voluptate';

    $response = $sdk->employee->patchEmployee($request);

    if ($response->employee !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postEmployeeIntoEmployer

Create a new employee object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostEmployeeIntoEmployerRequest;
use \OpenAPI\OpenAPI\Models\Shared\Employee;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployee;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeAEAssessmentOverrideEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeAEExclusionReasonCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeAddress;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeBankAccount;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeEmployeePartner;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeLeaverReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeMaritalStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeNicLiabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeePaySchedule;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeePaymentMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeRegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeRuleExclusionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeSecondedEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeStarterDeclarationEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeTerritoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeWorkingWeekEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostEmployeeIntoEmployerRequest();
    $request->apiVersion = 'consectetur';
    $request->authorization = 'vero';
    $request->employee = new Employee();
    $request->employee->employee = new EmployeeEmployee();
    $request->employee->employee->aeAssessmentOverride = EmployeeEmployeeAEAssessmentOverrideEnum::EXCLUDED;
    $request->employee->employee->aeAssessmentOverrideDate = DateTime::createFromFormat('Y-m-d', '2022-01-22');
    $request->employee->employee->aeExclusionReasonCode = EmployeeEmployeeAEExclusionReasonCodeEnum::WORKER_WULS_WITHIN12_MONTH;
    $request->employee->employee->aePostponementDate = DateTime::createFromFormat('Y-m-d', '2021-07-17');
    $request->employee->employee->address = new EmployeeEmployeeAddress();
    $request->employee->employee->address->address1 = 'similique';
    $request->employee->employee->address->address2 = 'facilis';
    $request->employee->employee->address->address3 = 'vero';
    $request->employee->employee->address->address4 = 'ducimus';
    $request->employee->employee->address->country = 'France';
    $request->employee->employee->address->postcode = '81670-9381';
    $request->employee->employee->bankAccount = new EmployeeEmployeeBankAccount();
    $request->employee->employee->bankAccount->accountName = 'porro';
    $request->employee->employee->bankAccount->accountNumber = 'maiores';
    $request->employee->employee->bankAccount->branchName = 'doloribus';
    $request->employee->employee->bankAccount->reference = 'iusto';
    $request->employee->employee->bankAccount->sortCode = 'eligendi';
    $request->employee->employee->code = 'ducimus';
    $request->employee->employee->dateOfBirth = DateTime::createFromFormat('Y-m-d', '2022-05-12');
    $request->employee->employee->deactivated = false;
    $request->employee->employee->directorshipAppointmentDate = DateTime::createFromFormat('Y-m-d', '2022-08-19');
    $request->employee->employee->eeaCitizen = false;
    $request->employee->employee->epm6 = false;
    $request->employee->employee->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-11-12');
    $request->employee->employee->employeePartner = new EmployeeEmployeeEmployeePartner();
    $request->employee->employee->employeePartner->firstName = 'Hilbert';
    $request->employee->employee->employeePartner->initials = 'possimus';
    $request->employee->employee->employeePartner->lastName = 'Gulgowski';
    $request->employee->employee->employeePartner->middleName = 'ratione';
    $request->employee->employee->employeePartner->niNumber = 'ex';
    $request->employee->employee->firstName = 'Johnpaul';
    $request->employee->employee->gender = EmployeeEmployeeGenderEnum::UNKNOWN;
    $request->employee->employee->hoursPerWeek = 2243.17;
    $request->employee->employee->initials = 'maiores';
    $request->employee->employee->irregularEmployment = false;
    $request->employee->employee->isAgencyWorker = false;
    $request->employee->employee->lastName = 'Boyle';
    $request->employee->employee->leaverReason = EmployeeEmployeeLeaverReasonEnum::REDUNDANT;
    $request->employee->employee->leavingDate = DateTime::createFromFormat('Y-m-d', '2021-04-17');
    $request->employee->employee->maritalStatus = EmployeeEmployeeMaritalStatusEnum::WIDOWED;
    $request->employee->employee->metaData = [
        'sapiente' => 'quisquam',
        'saepe' => 'ea',
    ];
    $request->employee->employee->middleName = 'impedit';
    $request->employee->employee->nextRevisionDate = DateTime::createFromFormat('Y-m-d', '2022-09-01');
    $request->employee->employee->niNumber = 'aliquid';
    $request->employee->employee->nicLiability = EmployeeEmployeeNicLiabilityEnum::HAS_OTHER_JOB;
    $request->employee->employee->offPayrollWorker = false;
    $request->employee->employee->onStrike = false;
    $request->employee->employee->p45IssuedDate = DateTime::createFromFormat('Y-m-d', '2022-08-05');
    $request->employee->employee->passportNumber = 'quo';
    $request->employee->employee->paySchedule = new EmployeeEmployeePaySchedule();
    $request->employee->employee->paySchedule->atHref = 'consectetur';
    $request->employee->employee->paySchedule->atRel = 'recusandae';
    $request->employee->employee->paySchedule->atTitle = 'aspernatur';
    $request->employee->employee->paymentMethod = EmployeeEmployeePaymentMethodEnum::CASH;
    $request->employee->employee->paymentToANonIndividual = false;
    $request->employee->employee->region = EmployeeEmployeeRegionEnum::NOT_SET;
    $request->employee->employee->revision = 952871;
    $request->employee->employee->ruleExclusions = EmployeeEmployeeRuleExclusionsEnum::YTD_INSTRUCTION_RULE;
    $request->employee->employee->seconded = EmployeeEmployeeSecondedEnum::NOT_SET;
    $request->employee->employee->startDate = DateTime::createFromFormat('Y-m-d', '2022-06-20');
    $request->employee->employee->starterDeclaration = EmployeeEmployeeStarterDeclarationEnum::C;
    $request->employee->employee->territory = EmployeeEmployeeTerritoryEnum::UNITED_KINGDOM;
    $request->employee->employee->title = 'Mrs.';
    $request->employee->employee->veteranPeriodStartDate = DateTime::createFromFormat('Y-m-d', '2022-02-12');
    $request->employee->employee->workingWeek = EmployeeEmployeeWorkingWeekEnum::NONE;
    $request->employerId = 'non';

    $response = $sdk->employee->postEmployeeIntoEmployer($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postEmployeeSecret

Create new employee secret using auto generated resource location key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostEmployeeSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostEmployeeSecretRequest();
    $request->apiVersion = 'et';
    $request->authorization = 'dolorum';
    $request->employeeId = 'laborum';
    $request->employerId = 'placeat';

    $response = $sdk->employee->postEmployeeSecret($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putEmployeeIntoEmployer

Updates the existing specified employee object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutEmployeeIntoEmployerRequest;
use \OpenAPI\OpenAPI\Models\Shared\Employee;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployee;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeAEAssessmentOverrideEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeAEExclusionReasonCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeAddress;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeBankAccount;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeEmployeePartner;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeLeaverReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeMaritalStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeNicLiabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeePaySchedule;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeePaymentMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeRegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeRuleExclusionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeSecondedEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeStarterDeclarationEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeTerritoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmployeeWorkingWeekEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutEmployeeIntoEmployerRequest();
    $request->apiVersion = 'velit';
    $request->authorization = 'eum';
    $request->employee = new Employee();
    $request->employee->employee = new EmployeeEmployee();
    $request->employee->employee->aeAssessmentOverride = EmployeeEmployeeAEAssessmentOverrideEnum::VOLUNTARY_JOINER;
    $request->employee->employee->aeAssessmentOverrideDate = DateTime::createFromFormat('Y-m-d', '2021-04-30');
    $request->employee->employee->aeExclusionReasonCode = EmployeeEmployeeAEExclusionReasonCodeEnum::WORKER_WULS_BEYOND12_MONTH;
    $request->employee->employee->aePostponementDate = DateTime::createFromFormat('Y-m-d', '2021-11-11');
    $request->employee->employee->address = new EmployeeEmployeeAddress();
    $request->employee->employee->address->address1 = 'libero';
    $request->employee->employee->address->address2 = 'quasi';
    $request->employee->employee->address->address3 = 'tempora';
    $request->employee->employee->address->address4 = 'numquam';
    $request->employee->employee->address->country = 'Bulgaria';
    $request->employee->employee->address->postcode = '04342-4456';
    $request->employee->employee->bankAccount = new EmployeeEmployeeBankAccount();
    $request->employee->employee->bankAccount->accountName = 'reprehenderit';
    $request->employee->employee->bankAccount->accountNumber = 'quidem';
    $request->employee->employee->bankAccount->branchName = 'fugiat';
    $request->employee->employee->bankAccount->reference = 'ut';
    $request->employee->employee->bankAccount->sortCode = 'eum';
    $request->employee->employee->code = 'suscipit';
    $request->employee->employee->dateOfBirth = DateTime::createFromFormat('Y-m-d', '2022-06-16');
    $request->employee->employee->deactivated = false;
    $request->employee->employee->directorshipAppointmentDate = DateTime::createFromFormat('Y-m-d', '2021-06-04');
    $request->employee->employee->eeaCitizen = false;
    $request->employee->employee->epm6 = false;
    $request->employee->employee->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-12-11');
    $request->employee->employee->employeePartner = new EmployeeEmployeeEmployeePartner();
    $request->employee->employee->employeePartner->firstName = 'Maggie';
    $request->employee->employee->employeePartner->initials = 'quidem';
    $request->employee->employee->employeePartner->lastName = 'DuBuque';
    $request->employee->employee->employeePartner->middleName = 'quo';
    $request->employee->employee->employeePartner->niNumber = 'illum';
    $request->employee->employee->firstName = 'Orion';
    $request->employee->employee->gender = EmployeeEmployeeGenderEnum::FEMALE;
    $request->employee->employee->hoursPerWeek = 2594.22;
    $request->employee->employee->initials = 'eos';
    $request->employee->employee->irregularEmployment = false;
    $request->employee->employee->isAgencyWorker = false;
    $request->employee->employee->lastName = 'Hintz';
    $request->employee->employee->leaverReason = EmployeeEmployeeLeaverReasonEnum::RESIGNED;
    $request->employee->employee->leavingDate = DateTime::createFromFormat('Y-m-d', '2022-12-24');
    $request->employee->employee->maritalStatus = EmployeeEmployeeMaritalStatusEnum::SINGLE;
    $request->employee->employee->metaData = [
        'ipsam' => 'aspernatur',
        'sequi' => 'quo',
        'esse' => 'recusandae',
        'aperiam' => 'distinctio',
    ];
    $request->employee->employee->middleName = 'quod';
    $request->employee->employee->nextRevisionDate = DateTime::createFromFormat('Y-m-d', '2022-12-03');
    $request->employee->employee->niNumber = 'nihil';
    $request->employee->employee->nicLiability = EmployeeEmployeeNicLiabilityEnum::IS_APPRENTICE;
    $request->employee->employee->offPayrollWorker = false;
    $request->employee->employee->onStrike = false;
    $request->employee->employee->p45IssuedDate = DateTime::createFromFormat('Y-m-d', '2022-01-30');
    $request->employee->employee->passportNumber = 'odio';
    $request->employee->employee->paySchedule = new EmployeeEmployeePaySchedule();
    $request->employee->employee->paySchedule->atHref = 'occaecati';
    $request->employee->employee->paySchedule->atRel = 'commodi';
    $request->employee->employee->paySchedule->atTitle = 'sapiente';
    $request->employee->employee->paymentMethod = EmployeeEmployeePaymentMethodEnum::CASH;
    $request->employee->employee->paymentToANonIndividual = false;
    $request->employee->employee->region = EmployeeEmployeeRegionEnum::SCOTLAND;
    $request->employee->employee->revision = 475289;
    $request->employee->employee->ruleExclusions = EmployeeEmployeeRuleExclusionsEnum::NONE;
    $request->employee->employee->seconded = EmployeeEmployeeSecondedEnum::IN_OUT_UK;
    $request->employee->employee->startDate = DateTime::createFromFormat('Y-m-d', '2022-06-11');
    $request->employee->employee->starterDeclaration = EmployeeEmployeeStarterDeclarationEnum::B;
    $request->employee->employee->territory = EmployeeEmployeeTerritoryEnum::UNITED_KINGDOM;
    $request->employee->employee->title = 'Mr.';
    $request->employee->employee->veteranPeriodStartDate = DateTime::createFromFormat('Y-m-d', '2022-09-18');
    $request->employee->employee->workingWeek = EmployeeEmployeeWorkingWeekEnum::ALL_WEEK_DAYS;
    $request->employeeId = 'mollitia';
    $request->employerId = 'incidunt';

    $response = $sdk->employee->putEmployeeIntoEmployer($request);

    if ($response->employee !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putEmployeeSecret

Create / update an employee secret at the given resource location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutEmployeeSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutEmployeeSecretRequest();
    $request->apiVersion = 'atque';
    $request->authorization = 'explicabo';
    $request->employeeId = 'minima';
    $request->employerId = 'nisi';
    $request->secretId = 'fugit';

    $response = $sdk->employee->putEmployeeSecret($request);

    if ($response->employeeSecret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
