# aeAssessment

### Available Operations

* [deleteAEAssessment](#deleteaeassessment) - Delete auto enrolment assessment
* [getAEAssessmentFromEmployee](#getaeassessmentfromemployee) - Get the auto enrolment assessment
* [getAEAssessmentsFromEmployee](#getaeassessmentsfromemployee) - Get the auto enrolment assessments
* [getAEAssessmentsFromPayRun](#getaeassessmentsfrompayrun) - Get the auto enrolment assessments
* [postNewAEAssessment](#postnewaeassessment) - Insert new auto enrolment assessment
* [putNewAEAssessment](#putnewaeassessment) - Insert new auto enrolment assessment

## deleteAEAssessment

Deletes an existing auto enrolment assessment for the employee. Used to remove historical assessments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAEAssessmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAEAssessmentRequest();
    $request->aeAssessmentId = 'nulla';
    $request->apiVersion = 'corrupti';
    $request->authorization = 'illum';
    $request->employeeId = 'vel';
    $request->employerId = 'error';

    $response = $sdk->aeAssessment->deleteAEAssessment($request);

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
    $request->aeAssessmentId = 'deserunt';
    $request->apiVersion = 'suscipit';
    $request->authorization = 'iure';
    $request->employeeId = 'magnam';
    $request->employerId = 'debitis';

    $response = $sdk->aeAssessment->getAEAssessmentFromEmployee($request);

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
    $request->apiVersion = 'ipsa';
    $request->authorization = 'delectus';
    $request->employeeId = 'tempora';
    $request->employerId = 'suscipit';

    $response = $sdk->aeAssessment->getAEAssessmentsFromEmployee($request);

    if ($response->linkCollection !== null) {
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
    $request->apiVersion = 'molestiae';
    $request->authorization = 'minus';
    $request->employerId = 'placeat';
    $request->payRunId = 'voluptatum';
    $request->payScheduleId = 'iusto';

    $response = $sdk->aeAssessment->getAEAssessmentsFromPayRun($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postNewAEAssessment

Creates a new auto enrolment assessment for the employee. Used to insert historical assessments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostNewAEAssessmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AEAssessment;
use \OpenAPI\OpenAPI\Models\Shared\AEAssessmentAEAssessment;
use \OpenAPI\OpenAPI\Models\Shared\AEAssessmentAEAssessmentAssessmentCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AEAssessmentAEAssessmentAssessmentEventEnum;
use \OpenAPI\OpenAPI\Models\Shared\AEAssessmentAEAssessmentAssessmentOverrideEnum;
use \OpenAPI\OpenAPI\Models\Shared\AEAssessmentAEAssessmentAssessmentResultEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostNewAEAssessmentRequest();
    $request->aeAssessment = new AEAssessment();
    $request->aeAssessment->aeAssessment = new AEAssessmentAEAssessment();
    $request->aeAssessment->aeAssessment->age = 568045;
    $request->aeAssessment->aeAssessment->assessmentCode = AEAssessmentAEAssessmentAssessmentCodeEnum::ELIGIBLE_JOB_HOLDER;
    $request->aeAssessment->aeAssessment->assessmentDate = DateTime::createFromFormat('Y-m-d', '2020-06-29');
    $request->aeAssessment->aeAssessment->assessmentEvent = AEAssessmentAEAssessmentAssessmentEventEnum::NON_ENROLMENT_EVENT;
    $request->aeAssessment->aeAssessment->assessmentOverride = AEAssessmentAEAssessmentAssessmentOverrideEnum::OPT_IN;
    $request->aeAssessment->aeAssessment->assessmentResult = AEAssessmentAEAssessmentAssessmentResultEnum::INCONCLUSIVE;
    $request->aeAssessment->aeAssessment->isMemberOfAlternativePensionScheme = false;
    $request->aeAssessment->aeAssessment->optOutWindowEndDate = DateTime::createFromFormat('Y-m-d', '2022-12-17');
    $request->aeAssessment->aeAssessment->qualifyingEarnings = 3682.41;
    $request->aeAssessment->aeAssessment->reenrolmentDate = DateTime::createFromFormat('Y-m-d', '2020-02-17');
    $request->aeAssessment->aeAssessment->statePensionAge = 778157;
    $request->aeAssessment->aeAssessment->statePensionDate = DateTime::createFromFormat('Y-m-d', '2022-02-17');
    $request->aeAssessment->aeAssessment->taxPeriod = 870088;
    $request->aeAssessment->aeAssessment->taxYear = 978619;
    $request->apiVersion = 'molestiae';
    $request->authorization = 'quod';
    $request->employeeId = 'quod';
    $request->employerId = 'esse';

    $response = $sdk->aeAssessment->postNewAEAssessment($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putNewAEAssessment

Creates a new auto enrolment assessment for the employee. Used to insert historical assessments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutNewAEAssessmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AEAssessment;
use \OpenAPI\OpenAPI\Models\Shared\AEAssessmentAEAssessment;
use \OpenAPI\OpenAPI\Models\Shared\AEAssessmentAEAssessmentAssessmentCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AEAssessmentAEAssessmentAssessmentEventEnum;
use \OpenAPI\OpenAPI\Models\Shared\AEAssessmentAEAssessmentAssessmentOverrideEnum;
use \OpenAPI\OpenAPI\Models\Shared\AEAssessmentAEAssessmentAssessmentResultEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutNewAEAssessmentRequest();
    $request->aeAssessment = new AEAssessment();
    $request->aeAssessment->aeAssessment = new AEAssessmentAEAssessment();
    $request->aeAssessment->aeAssessment->age = 520478;
    $request->aeAssessment->aeAssessment->assessmentCode = AEAssessmentAEAssessmentAssessmentCodeEnum::ENTITLED_WORKER;
    $request->aeAssessment->aeAssessment->assessmentDate = DateTime::createFromFormat('Y-m-d', '2022-10-06');
    $request->aeAssessment->aeAssessment->assessmentEvent = AEAssessmentAEAssessmentAssessmentEventEnum::VOLUNTARY_JOINER;
    $request->aeAssessment->aeAssessment->assessmentOverride = AEAssessmentAEAssessmentAssessmentOverrideEnum::CEASED_MEMBERSHIP;
    $request->aeAssessment->aeAssessment->assessmentResult = AEAssessmentAEAssessmentAssessmentResultEnum::ENROL;
    $request->aeAssessment->aeAssessment->isMemberOfAlternativePensionScheme = false;
    $request->aeAssessment->aeAssessment->optOutWindowEndDate = DateTime::createFromFormat('Y-m-d', '2022-06-18');
    $request->aeAssessment->aeAssessment->qualifyingEarnings = 9446.69;
    $request->aeAssessment->aeAssessment->reenrolmentDate = DateTime::createFromFormat('Y-m-d', '2021-06-08');
    $request->aeAssessment->aeAssessment->statePensionAge = 105907;
    $request->aeAssessment->aeAssessment->statePensionDate = DateTime::createFromFormat('Y-m-d', '2022-07-12');
    $request->aeAssessment->aeAssessment->taxPeriod = 264555;
    $request->aeAssessment->aeAssessment->taxYear = 186332;
    $request->aeAssessmentId = 'impedit';
    $request->apiVersion = 'cum';
    $request->authorization = 'esse';
    $request->employeeId = 'ipsum';
    $request->employerId = 'excepturi';

    $response = $sdk->aeAssessment->putNewAEAssessment($request);

    if ($response->aeAssessment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
