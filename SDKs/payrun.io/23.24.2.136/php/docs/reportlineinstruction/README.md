# reportLineInstruction

### Available Operations

* [deleteReportingInstruction](#deletereportinginstruction) - Deletes a reporting instruction
* [getReportingInstructionFromEmployer](#getreportinginstructionfromemployer) - Gets the specified reporting instruction from the employer
* [getReportingInstructionsFromEmployer](#getreportinginstructionsfromemployer) - Gets the reporting instructions from the specified employer
* [postReportingInstruction](#postreportinginstruction) - Creates a new Reporting Instruction
* [putReportingInstruction](#putreportinginstruction) - Update a reporting Instruction

## deleteReportingInstruction

Delete the specified reporting instruction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReportingInstructionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReportingInstructionRequest();
    $request->apiVersion = 'fugiat';
    $request->authorization = 'nostrum';
    $request->employerId = 'molestiae';
    $request->reportingInstructionId = 'veniam';

    $response = $sdk->reportLineInstruction->deleteReportingInstruction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReportingInstructionFromEmployer

Returns the specified pay instruction from employee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReportingInstructionFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportingInstructionFromEmployerRequest();
    $request->apiVersion = 'reiciendis';
    $request->authorization = 'ab';
    $request->employerId = 'modi';
    $request->reportingInstructionId = 'aut';

    $response = $sdk->reportLineInstruction->getReportingInstructionFromEmployer($request);

    if ($response->reportingInstruction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReportingInstructionsFromEmployer

Get links to all pay instructions for the specified employee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReportingInstructionsFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportingInstructionsFromEmployerRequest();
    $request->apiVersion = 'aut';
    $request->authorization = 'eveniet';
    $request->employerId = 'odio';

    $response = $sdk->reportLineInstruction->getReportingInstructionsFromEmployer($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postReportingInstruction

Creates a new reporting instruction object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostReportingInstructionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportingInstruction;
use \OpenAPI\OpenAPI\Models\Shared\ReportingInstructionReportingInstruction;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostReportingInstructionRequest();
    $request->apiVersion = 'commodi';
    $request->authorization = 'numquam';
    $request->employerId = 'dolorum';
    $request->reportingInstruction = new ReportingInstruction();
    $request->reportingInstruction->reportingInstruction = new ReportingInstructionReportingInstruction();
    $request->reportingInstruction->reportingInstruction->endDate = DateTime::createFromFormat('Y-m-d', '2021-08-23');
    $request->reportingInstruction->reportingInstruction->startDate = DateTime::createFromFormat('Y-m-d', '2022-10-19');
    $request->reportingInstruction->reportingInstruction->taxMonth = 310629;
    $request->reportingInstruction->reportingInstruction->taxYear = 929476;
    $request->reportingInstruction->reportingInstruction->value = 7912.28;

    $response = $sdk->reportLineInstruction->postReportingInstruction($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putReportingInstruction

Updates the existing specified reporting instruction object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutReportingInstructionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportingInstruction;
use \OpenAPI\OpenAPI\Models\Shared\ReportingInstructionReportingInstruction;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutReportingInstructionRequest();
    $request->apiVersion = 'sunt';
    $request->authorization = 'distinctio';
    $request->employerId = 'iusto';
    $request->reportingInstruction = new ReportingInstruction();
    $request->reportingInstruction->reportingInstruction = new ReportingInstructionReportingInstruction();
    $request->reportingInstruction->reportingInstruction->endDate = DateTime::createFromFormat('Y-m-d', '2022-10-26');
    $request->reportingInstruction->reportingInstruction->startDate = DateTime::createFromFormat('Y-m-d', '2022-07-17');
    $request->reportingInstruction->reportingInstruction->taxMonth = 418637;
    $request->reportingInstruction->reportingInstruction->taxYear = 685415;
    $request->reportingInstruction->reportingInstruction->value = 53.1;
    $request->reportingInstructionId = 'rem';

    $response = $sdk->reportLineInstruction->putReportingInstruction($request);

    if ($response->reportingInstruction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
