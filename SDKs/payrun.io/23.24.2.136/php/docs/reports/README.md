# reports

### Available Operations

* [deleteReportDefinition](#deletereportdefinition) - Deletes a report definition
* [deleteTransformDefinition](#deletetransformdefinition) - Deletes a transform definition
* [getActivePayInstructionsReportOutput](#getactivepayinstructionsreportoutput) - Runs the active pay instructions report
* [getAoeLiabilityReportOuput](#getaoeliabilityreportouput) - Runs the AOE liability report
* [getDpsMessageReportOutput](#getdpsmessagereportoutput) - Runs the DPS message report
* [getEmployerSummaryReportOuput](#getemployersummaryreportouput) - Runs the employer summary report
* [getGrossToNetReportOutput](#getgrosstonetreportoutput) - Runs the gross to net report
* [getHolidayBalanceReportOutput](#getholidaybalancereportoutput) - Runs the holiday balance report
* [getJournalReportOuput](#getjournalreportouput) - Runs the journal report
* [getLastPayDateReportOuput](#getlastpaydatereportouput) - Runs the last pay date report
* [getNetPayReportOutput](#getnetpayreportoutput) - Runs the net pay report
* [getNextPayPeriodDatesReportOutput](#getnextpayperioddatesreportoutput) - Runs the next pay period report
* [getP11SummaryReportOutput](#getp11summaryreportoutput) - Runs the P11 summary report
* [getP32NetReportOutput](#getp32netreportoutput) - Runs the P32 report
* [getP32SummaryNetReportOutput](#getp32summarynetreportoutput) - Runs the P32 summary report
* [getP45ReportOutput](#getp45reportoutput) - Runs the P45 report
* [getP60ReportOutput](#getp60reportoutput) - Runs the P60 report
* [getPapdisReportOuput](#getpapdisreportouput) - Runs the PAPDIS report
* [getPassReportOuput](#getpassreportouput) - Runs the PASS report
* [getPayDashboardPayslipReportOuput](#getpaydashboardpayslipreportouput) - Runs the Pay Dashboard payslips report
* [getPayslip3ReportOutput](#getpayslip3reportoutput) - Runs the verbose payslip report
* [getPensionLiabilityReportOutput](#getpensionliabilityreportoutput) - Runs the pension liability report
* [getReportDefinitionFromApplication](#getreportdefinitionfromapplication) - Get the report definition
* [getReportDefinitionsFromApplication](#getreportdefinitionsfromapplication) - Gets all reports
* [getReportOutput](#getreportoutput) - Runs the specified report definition
* [getTransformDefinitionFromApplication](#gettransformdefinitionfromapplication) - Get the transform definition
* [getTransformDefinitionsFromApplication](#gettransformdefinitionsfromapplication) - Gets all transform definitions
* [postReportDefinition](#postreportdefinition) - Create a new report definition
* [postTransformDefinition](#posttransformdefinition) - Create a new transform definition
* [putReportDefinition](#putreportdefinition) - Updates a report definition
* [putTransformDefinition](#puttransformdefinition) - Updates a transform definition

## deleteReportDefinition

Delete the specified report definition

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReportDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReportDefinitionRequest();
    $request->apiVersion = 'aut';
    $request->authorization = 'quos';
    $request->reportDefinitionId = 'laudantium';

    $response = $sdk->reports->deleteReportDefinition($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTransformDefinition

Delete the specified transform definition

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTransformDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTransformDefinitionRequest();
    $request->apiVersion = 'repellendus';
    $request->authorization = 'veritatis';
    $request->transformDefinitionId = 'quae';

    $response = $sdk->reports->deleteTransformDefinition($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActivePayInstructionsReportOutput

Returns the result of the executed active pay instructions report for the given query parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetActivePayInstructionsReportOutputRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActivePayInstructionsReportOutputRequest();
    $request->activeOn = DateTime::createFromFormat('Y-m-d', '2022-02-04');
    $request->apiVersion = 'delectus';
    $request->authorization = 'mollitia';
    $request->employeeKey = 'nulla';
    $request->employerKey = 'officia';
    $request->fromDate = DateTime::createFromFormat('Y-m-d', '2022-12-20');
    $request->toDate = DateTime::createFromFormat('Y-m-d', '2022-02-02');
    $request->type = 'hic';

    $response = $sdk->reports->getActivePayInstructionsReportOutput($request);

    if ($response->getActivePayInstructionsReportOutput200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAoeLiabilityReportOuput

Returns the result of the executed AOE liability report for the given query parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAoeLiabilityReportOuputRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAoeLiabilityReportOuputRequest();
    $request->apiVersion = 'voluptatem';
    $request->authorization = 'incidunt';
    $request->employerKey = 'qui';
    $request->payScheduleKey = 'qui';
    $request->taxPeriod = 'necessitatibus';
    $request->taxYear = 'harum';
    $request->transformDefinitionKey = 'explicabo';

    $response = $sdk->reports->getAoeLiabilityReportOuput($request);

    if ($response->getAoeLiabilityReportOuput200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDpsMessageReportOutput

Returns the result of the executed DPS message report for the given query parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDpsMessageReportOutputRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDpsMessageReportOutputRequest();
    $request->apiVersion = 'beatae';
    $request->authorization = 'aliquid';
    $request->employerKey = 'modi';
    $request->fromDate = DateTime::createFromFormat('Y-m-d', '2020-01-29');
    $request->maxIndex = 'molestias';
    $request->messageStatuses = 'officia';
    $request->messageTypes = 'libero';
    $request->startIndex = 'totam';
    $request->toDate = DateTime::createFromFormat('Y-m-d', '2022-08-08');

    $response = $sdk->reports->getDpsMessageReportOutput($request);

    if ($response->getDpsMessageReportOutput200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployerSummaryReportOuput

Returns the result of the employer summary report for the given query parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployerSummaryReportOuputRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployerSummaryReportOuputRequest();
    $request->apiVersion = 'ea';
    $request->authorization = 'impedit';
    $request->contextDate = DateTime::createFromFormat('Y-m-d', '2022-11-10');
    $request->employerKey = 'velit';

    $response = $sdk->reports->getEmployerSummaryReportOuput($request);

    if ($response->getEmployerSummaryReportOuput200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGrossToNetReportOutput

Returns the result of the executed gross to net report for the given query parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGrossToNetReportOutputRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGrossToNetReportOutputRequest();
    $request->apiVersion = 'reiciendis';
    $request->authorization = 'repellat';
    $request->employerKey = 'nulla';
    $request->maxIndex = 'laborum';
    $request->payScheduleKey = 'natus';
    $request->startIndex = 'accusamus';
    $request->taxPeriod = 'doloremque';
    $request->taxYear = 'nisi';

    $response = $sdk->reports->getGrossToNetReportOutput($request);

    if ($response->getGrossToNetReportOutput200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHolidayBalanceReportOutput

Returns the result of the executed holiday balance report for the given query parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetHolidayBalanceReportOutputRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHolidayBalanceReportOutputRequest();
    $request->apiVersion = 'rerum';
    $request->authorization = 'recusandae';
    $request->employeeCodes = 'voluptates';
    $request->employerKey = 'non';
    $request->holidayYearEnd = DateTime::createFromFormat('Y-m-d', '2022-09-07');
    $request->maxIndex = 'ullam';
    $request->startIndex = 'quisquam';

    $response = $sdk->reports->getHolidayBalanceReportOutput($request);

    if ($response->getHolidayBalanceReportOutput200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJournalReportOuput

Returns the result of the journal report for the given query parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetJournalReportOuputRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJournalReportOuputRequest();
    $request->apiVersion = 'dicta';
    $request->authorization = 'voluptatibus';
    $request->employerKey = 'eligendi';
    $request->ledgerTarget = 'quae';
    $request->payFrequency = 'officiis';
    $request->taxPeriod = 'architecto';
    $request->taxYear = 'architecto';

    $response = $sdk->reports->getJournalReportOuput($request);

    if ($response->getJournalReportOuput200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLastPayDateReportOuput

Returns the result of the executed last pay date report for the given query parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLastPayDateReportOuputRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLastPayDateReportOuputRequest();
    $request->apiVersion = 'enim';
    $request->authorization = 'optio';
    $request->employeeKey = 'rem';
    $request->employerKey = 'perferendis';

    $response = $sdk->reports->getLastPayDateReportOuput($request);

    if ($response->getLastPayDateReportOuput200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetPayReportOutput

Returns the result of the executed net pay report for the given query parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNetPayReportOutputRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetPayReportOutputRequest();
    $request->apiVersion = 'facilis';
    $request->authorization = 'reiciendis';
    $request->employerKey = 'a';
    $request->maxIndex = 'iste';
    $request->payScheduleKey = 'dicta';
    $request->startIndex = 'quos';
    $request->taxPeriod = 'ullam';
    $request->taxYear = 'dolore';

    $response = $sdk->reports->getNetPayReportOutput($request);

    if ($response->getNetPayReportOutput200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNextPayPeriodDatesReportOutput

Returns the result of the executed next pay period report for the given query parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNextPayPeriodDatesReportOutputRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNextPayPeriodDatesReportOutputRequest();
    $request->apiVersion = 'modi';
    $request->authorization = 'itaque';
    $request->employerKey = 'maxime';
    $request->payScheduleKey = 'modi';

    $response = $sdk->reports->getNextPayPeriodDatesReportOutput($request);

    if ($response->getNextPayPeriodDatesReportOutput200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getP11SummaryReportOutput

Returns the result of the executed P11 summary report for the given query parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetP11SummaryReportOutputRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetP11SummaryReportOutputRequest();
    $request->apiVersion = 'consequuntur';
    $request->authorization = 'assumenda';
    $request->employerKey = 'vero';
    $request->maxIndex = 'doloribus';
    $request->payScheduleKey = 'impedit';
    $request->startIndex = 'porro';
    $request->taxYear = 'accusamus';

    $response = $sdk->reports->getP11SummaryReportOutput($request);

    if ($response->getP11SummaryReportOutput200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getP32NetReportOutput

Returns the result of the executed P32 report for the given query parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetP32NetReportOutputRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetP32NetReportOutputRequest();
    $request->apiVersion = 'totam';
    $request->authorization = 'reiciendis';
    $request->employerKey = 'ab';
    $request->taxYear = 'sint';

    $response = $sdk->reports->getP32NetReportOutput($request);

    if ($response->getP32NetReportOutput200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getP32SummaryNetReportOutput

Returns the result of the executed P32 summary report for the given query parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetP32SummaryNetReportOutputRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetP32SummaryNetReportOutputRequest();
    $request->apiVersion = 'nihil';
    $request->authorization = 'esse';
    $request->employerKey = 'iure';
    $request->taxYear = 'odio';

    $response = $sdk->reports->getP32SummaryNetReportOutput($request);

    if ($response->getP32SummaryNetReportOutput200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getP45ReportOutput

Returns the result of the executed P45 report for the given query parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetP45ReportOutputRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetP45ReportOutputRequest();
    $request->apiVersion = 'nesciunt';
    $request->authorization = 'debitis';
    $request->employeeKey = 'vel';
    $request->employerKey = 'neque';
    $request->transformDefinitionKey = 'corporis';

    $response = $sdk->reports->getP45ReportOutput($request);

    if ($response->getP45ReportOutput200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getP60ReportOutput

Returns the result of the executed P60 report for the given query parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetP60ReportOutputRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetP60ReportOutputRequest();
    $request->apiVersion = 'voluptas';
    $request->authorization = 'consequuntur';
    $request->employeeCodes = 'officia';
    $request->employerKey = 'reprehenderit';
    $request->maxIndex = 'distinctio';
    $request->startIndex = 'eius';
    $request->taxYear = 'ipsa';
    $request->transformDefinitionKey = 'rem';

    $response = $sdk->reports->getP60ReportOutput($request);

    if ($response->getP60ReportOutput200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPapdisReportOuput

Returns the result of the executed PAPDIS report. PAPDIS is a free and open data interface standard designed to allow payroll and middleware software developers to create a file that can be used by pension providers to exchange data. http://www.papdis.org/

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPapdisReportOuputRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPapdisReportOuputRequest();
    $request->apiVersion = 'maiores';
    $request->authorization = 'accusantium';
    $request->employerKey = 'veniam';
    $request->messageFunctionCode = 'saepe';
    $request->payScheduleKey = 'neque';
    $request->paymentDate = DateTime::createFromFormat('Y-m-d', '2022-01-29');
    $request->pensionKey = 'quos';
    $request->taxYear = 'doloribus';
    $request->transformDefinitionKey = 'fugiat';

    $response = $sdk->reports->getPapdisReportOuput($request);

    if ($response->getPapdisReportOuput200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPassReportOuput

Returns the result of the executed PASS report. PASS stands for Payroll and Systemsync. PASS 1.1 is an extension of the PAPDIS V1.1 schema. https://pensionsynckb.systemsyncsolutions.com/display/PKB/PASS+1.1

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPassReportOuputRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPassReportOuputRequest();
    $request->apiVersion = 'est';
    $request->authorization = 'delectus';
    $request->documentId = 'velit';
    $request->employerKey = 'vitae';
    $request->intermediaryId = 'nesciunt';
    $request->messageFunctionCode = 'similique';
    $request->payScheduleKey = 'illo';
    $request->paymentDate = DateTime::createFromFormat('Y-m-d', '2021-11-29');
    $request->pensionKey = 'doloribus';
    $request->taxYear = 'possimus';

    $response = $sdk->reports->getPassReportOuput($request);

    if ($response->getPassReportOuput200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayDashboardPayslipReportOuput

Returns the result of the executed Pay Dashboard payslip report for the given query parameters. See https://api.paydashboard.com for details. For compatability should be returned as JSON with TransformDefinitionKey=Json-Clean.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayDashboardPayslipReportOuputRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayDashboardPayslipReportOuputRequest();
    $request->apiVersion = 'unde';
    $request->authorization = 'incidunt';
    $request->employeeCodes = 'explicabo';
    $request->employerKey = 'ipsam';
    $request->maxIndex = 'cupiditate';
    $request->payScheduleKey = 'optio';
    $request->paymentDate = DateTime::createFromFormat('Y-m-d', '2022-04-21');
    $request->publicationDate = DateTime::createFromFormat('Y-m-d', '2022-08-03');
    $request->startIndex = 'sapiente';
    $request->taxYear = 'consequuntur';
    $request->transformDefinitionKey = 'veniam';

    $response = $sdk->reports->getPayDashboardPayslipReportOuput($request);

    if ($response->getPayDashboardPayslipReportOuput200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayslip3ReportOutput

Returns the result of the executed verbose payslip report for the given query parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayslip3ReportOutputRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayslip3ReportOutputRequest();
    $request->apiVersion = 'debitis';
    $request->authorization = 'officia';
    $request->employeeCodes = 'sint';
    $request->employerKey = 'ut';
    $request->maxIndex = 'numquam';
    $request->payScheduleKey = 'tenetur';
    $request->paymentDate = DateTime::createFromFormat('Y-m-d', '2022-04-10');
    $request->startIndex = 'in';
    $request->taxYear = 'minima';
    $request->transformDefinitionKey = 'ex';

    $response = $sdk->reports->getPayslip3ReportOutput($request);

    if ($response->getPayslip3ReportOutput200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPensionLiabilityReportOutput

Returns the result of the executed pension liability report for the given query parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPensionLiabilityReportOutputRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPensionLiabilityReportOutputRequest();
    $request->apiVersion = 'minus';
    $request->authorization = 'ab';
    $request->employerKey = 'beatae';
    $request->pensionKey = 'hic';
    $request->taxYear = 'nisi';

    $response = $sdk->reports->getPensionLiabilityReportOutput($request);

    if ($response->getPensionLiabilityReportOutput200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReportDefinitionFromApplication

Returns the specified report definition from the authroised application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReportDefinitionFromApplicationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportDefinitionFromApplicationRequest();
    $request->apiVersion = 'quisquam';
    $request->authorization = 'dolor';
    $request->reportDefinitionId = 'ducimus';

    $response = $sdk->reports->getReportDefinitionFromApplication($request);

    if ($response->reportDefinition !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReportDefinitionsFromApplication

Get links to all saved report definitions under authorised application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReportDefinitionsFromApplicationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportDefinitionsFromApplicationRequest();
    $request->apiVersion = 'fuga';
    $request->authorization = 'minima';

    $response = $sdk->reports->getReportDefinitionsFromApplication($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReportOutput

Returns the result of the executed report definition

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReportOutputRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportOutputRequest();
    $request->apiVersion = 'architecto';
    $request->authorization = 'qui';
    $request->reportDefinitionId = 'aliquid';

    $response = $sdk->reports->getReportOutput($request);

    if ($response->getReportOutput200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransformDefinitionFromApplication

Returns the specified transform definition from the authroised application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTransformDefinitionFromApplicationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransformDefinitionFromApplicationRequest();
    $request->apiVersion = 'magni';
    $request->authorization = 'incidunt';
    $request->transformDefinitionId = 'adipisci';

    $response = $sdk->reports->getTransformDefinitionFromApplication($request);

    if ($response->transformDefinition !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransformDefinitionsFromApplication

Get links to all saved transform definitions under authorised application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTransformDefinitionsFromApplicationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransformDefinitionsFromApplicationRequest();
    $request->apiVersion = 'praesentium';
    $request->authorization = 'dolor';

    $response = $sdk->reports->getTransformDefinitionsFromApplication($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postReportDefinition

Creates a new report defintion object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostReportDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinitionReportDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinitionReportDefinitionReportQuery;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinitionReportDefinitionReportQueryGroup;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinitionReportDefinitionReportQueryGroupGroup;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinitionReportDefinitionReportQueryGroupGroupCondition;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinitionReportDefinitionReportQueryGroupGroupFilter;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinitionReportDefinitionReportQueryGroupGroupOrder;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinitionReportDefinitionReportQueryGroupGroupOutput;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinitionReportDefinitionReportQueryVariable;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinitionReportDefinitionReportQueryVariableVariable;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostReportDefinitionRequest();
    $request->apiVersion = 'exercitationem';
    $request->authorization = 'expedita';
    $request->reportDefinition = new ReportDefinition();
    $request->reportDefinition->reportDefinition = new ReportDefinitionReportDefinition();
    $request->reportDefinition->reportDefinition->active = false;
    $request->reportDefinition->reportDefinition->readonly = false;
    $request->reportDefinition->reportDefinition->reportQuery = new ReportDefinitionReportDefinitionReportQuery();
    $request->reportDefinition->reportDefinition->reportQuery->encoding = 'facilis';
    $request->reportDefinition->reportDefinition->reportQuery->excludeNullOrEmptyElements = false;
    $request->reportDefinition->reportDefinition->reportQuery->groups = new ReportDefinitionReportDefinitionReportQueryGroup();
    $request->reportDefinition->reportDefinition->reportQuery->groups->group = [
        new ReportDefinitionReportDefinitionReportQueryGroupGroup(),
        new ReportDefinitionReportDefinitionReportQueryGroupGroup(),
        new ReportDefinitionReportDefinitionReportQueryGroupGroup(),
        new ReportDefinitionReportDefinitionReportQueryGroupGroup(),
    ];
    $request->reportDefinition->reportDefinition->reportQuery->rootNodeName = 'sit';
    $request->reportDefinition->reportDefinition->reportQuery->suppressMetricAttributes = false;
    $request->reportDefinition->reportDefinition->reportQuery->variables = new ReportDefinitionReportDefinitionReportQueryVariable();
    $request->reportDefinition->reportDefinition->reportQuery->variables->variable = [
        new ReportDefinitionReportDefinitionReportQueryVariableVariable(),
        new ReportDefinitionReportDefinitionReportQueryVariableVariable(),
    ];
    $request->reportDefinition->reportDefinition->supportedTransforms = 'culpa';
    $request->reportDefinition->reportDefinition->title = 'Mr.';
    $request->reportDefinition->reportDefinition->version = 'amet';

    $response = $sdk->reports->postReportDefinition($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTransformDefinition

Creates a new transform defintion object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostTransformDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransformDefinition;
use \OpenAPI\OpenAPI\Models\Shared\TransformDefinitionTransformDefinition;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostTransformDefinitionRequest();
    $request->apiVersion = 'deserunt';
    $request->authorization = 'modi';
    $request->transformDefinition = new TransformDefinition();
    $request->transformDefinition->transformDefinition = new TransformDefinitionTransformDefinition();
    $request->transformDefinition->transformDefinition->active = false;
    $request->transformDefinition->transformDefinition->contentType = 'veniam';
    $request->transformDefinition->transformDefinition->definition = 'quod';
    $request->transformDefinition->transformDefinition->definitionType = 'itaque';
    $request->transformDefinition->transformDefinition->readonly = false;
    $request->transformDefinition->transformDefinition->supportedReports = 'a';
    $request->transformDefinition->transformDefinition->taxYear = 788661;
    $request->transformDefinition->transformDefinition->title = 'Mrs.';
    $request->transformDefinition->transformDefinition->version = 'doloribus';

    $response = $sdk->reports->postTransformDefinition($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putReportDefinition

Updates the existing specified report definition object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutReportDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinitionReportDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinitionReportDefinitionReportQuery;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinitionReportDefinitionReportQueryGroup;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinitionReportDefinitionReportQueryGroupGroup;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinitionReportDefinitionReportQueryGroupGroupCondition;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinitionReportDefinitionReportQueryGroupGroupFilter;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinitionReportDefinitionReportQueryGroupGroupOrder;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinitionReportDefinitionReportQueryGroupGroupOutput;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinitionReportDefinitionReportQueryVariable;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinitionReportDefinitionReportQueryVariableVariable;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutReportDefinitionRequest();
    $request->apiVersion = 'assumenda';
    $request->authorization = 'officiis';
    $request->reportDefinition = new ReportDefinition();
    $request->reportDefinition->reportDefinition = new ReportDefinitionReportDefinition();
    $request->reportDefinition->reportDefinition->active = false;
    $request->reportDefinition->reportDefinition->readonly = false;
    $request->reportDefinition->reportDefinition->reportQuery = new ReportDefinitionReportDefinitionReportQuery();
    $request->reportDefinition->reportDefinition->reportQuery->encoding = 'architecto';
    $request->reportDefinition->reportDefinition->reportQuery->excludeNullOrEmptyElements = false;
    $request->reportDefinition->reportDefinition->reportQuery->groups = new ReportDefinitionReportDefinitionReportQueryGroup();
    $request->reportDefinition->reportDefinition->reportQuery->groups->group = [
        new ReportDefinitionReportDefinitionReportQueryGroupGroup(),
    ];
    $request->reportDefinition->reportDefinition->reportQuery->rootNodeName = 'culpa';
    $request->reportDefinition->reportDefinition->reportQuery->suppressMetricAttributes = false;
    $request->reportDefinition->reportDefinition->reportQuery->variables = new ReportDefinitionReportDefinitionReportQueryVariable();
    $request->reportDefinition->reportDefinition->reportQuery->variables->variable = [
        new ReportDefinitionReportDefinitionReportQueryVariableVariable(),
    ];
    $request->reportDefinition->reportDefinition->supportedTransforms = 'nobis';
    $request->reportDefinition->reportDefinition->title = 'Dr.';
    $request->reportDefinition->reportDefinition->version = 'quia';
    $request->reportDefinitionId = 'dicta';

    $response = $sdk->reports->putReportDefinition($request);

    if ($response->reportDefinition !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putTransformDefinition

Updates the existing specified transform definition object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutTransformDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransformDefinition;
use \OpenAPI\OpenAPI\Models\Shared\TransformDefinitionTransformDefinition;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutTransformDefinitionRequest();
    $request->apiVersion = 'vel';
    $request->authorization = 'perspiciatis';
    $request->transformDefinition = new TransformDefinition();
    $request->transformDefinition->transformDefinition = new TransformDefinitionTransformDefinition();
    $request->transformDefinition->transformDefinition->active = false;
    $request->transformDefinition->transformDefinition->contentType = 'debitis';
    $request->transformDefinition->transformDefinition->definition = 'ullam';
    $request->transformDefinition->transformDefinition->definitionType = 'architecto';
    $request->transformDefinition->transformDefinition->readonly = false;
    $request->transformDefinition->transformDefinition->supportedReports = 'accusantium';
    $request->transformDefinition->transformDefinition->taxYear = 18096;
    $request->transformDefinition->transformDefinition->title = 'Mr.';
    $request->transformDefinition->transformDefinition->version = 'provident';
    $request->transformDefinitionId = 'cumque';

    $response = $sdk->reports->putTransformDefinition($request);

    if ($response->transformDefinition !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
