# test

## Overview

Operations related to API and Services tests

### Available Operations

* [createTest](#createtest) - Create a new Test
* [getEventsByTestCase](#geteventsbytestcase) - Get events for TestCase
* [getMessagesByTestCase](#getmessagesbytestcase) - Get messages for TestCase
* [getTestResult](#gettestresult) - Get TestResult
* [getTestResultsByService](#gettestresultsbyservice) - Get TestResults by Service
* [getTestResultsByServiceCounter](#gettestresultsbyservicecounter) - Get the TestResults for Service counter
* [reportTestCaseResult](#reporttestcaseresult) - Report and create a new TestCaseResult

## createTest

Create a new Test

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TestRequest;
use \OpenAPI\OpenAPI\Models\Shared\HeaderDTO;
use \OpenAPI\OpenAPI\Models\Shared\TestRunnerTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateTestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestRequest();
    $request->filteredOperations = [
        'ut',
        'eum',
        'suscipit',
        'assumenda',
    ];
    $request->operationHeaders = [
        'praesentium' => [
            new HeaderDTO(),
            new HeaderDTO(),
            new HeaderDTO(),
            new HeaderDTO(),
        ],
    ];
    $request->runnerType = TestRunnerTypeEnum::HTTP;
    $request->secretName = 'ipsa';
    $request->serviceId = 'id';
    $request->testEndpoint = 'quidem';
    $request->timeout = 206594;

    $requestSecurity = new CreateTestSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->test->createTest($request, $requestSecurity);

    if ($response->testResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventsByTestCase

Get events for TestCase

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsByTestCaseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventsByTestCaseRequest();
    $request->id = 'cdca4251-904e-4523-87e0-bc7178e4796f';
    $request->testCaseId = 'dolores';

    $response = $sdk->test->getEventsByTestCase($request);

    if ($response->unidirectionalEvents !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMessagesByTestCase

Get messages for TestCase

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMessagesByTestCaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMessagesByTestCaseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMessagesByTestCaseRequest();
    $request->id = 'a70c6882-82aa-4482-962f-222e9817ee17';
    $request->testCaseId = 'quod';

    $requestSecurity = new GetMessagesByTestCaseSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->test->getMessagesByTestCase($request, $requestSecurity);

    if ($response->requestResponsePairs !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTestResult

Get TestResult

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTestResultRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTestResultSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTestResultRequest();
    $request->id = 'be61e6b7-b95b-4c0a-b3c2-0c4f3789fd87';

    $requestSecurity = new GetTestResultSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->test->getTestResult($request, $requestSecurity);

    if ($response->testResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTestResultsByService

Get TestResults by Service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTestResultsByServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTestResultsByServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTestResultsByServiceRequest();
    $request->serviceId = 'quasi';

    $requestSecurity = new GetTestResultsByServiceSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->test->getTestResultsByService($request, $requestSecurity);

    if ($response->testResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTestResultsByServiceCounter

Get the TestResults for Service counter

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTestResultsByServiceCounterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTestResultsByServiceCounterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTestResultsByServiceCounterRequest();
    $request->serviceId = 'a';

    $requestSecurity = new GetTestResultsByServiceCounterSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->test->getTestResultsByServiceCounter($request, $requestSecurity);

    if ($response->counter !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reportTestCaseResult

Report a TestCaseResult (typically used by a Test runner)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReportTestCaseResultRequest;
use \OpenAPI\OpenAPI\Models\Shared\TestCaseReturnDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReportTestCaseResultRequest();
    $request->testCaseReturnDTO = new TestCaseReturnDTO();
    $request->testCaseReturnDTO->operationName = 'error';
    $request->id = '9dd2efd1-21aa-46f1-a674-bdb04f157560';

    $response = $sdk->test->reportTestCaseResult($request);

    if ($response->testCaseResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
