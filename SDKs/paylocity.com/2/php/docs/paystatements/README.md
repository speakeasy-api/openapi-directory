# payStatements

### Available Operations

* [getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYear](#getsemployeepaystatementdetaildatabasedonthespecifiedyear) - Get employee pay statement details data for the specified year.
* [getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDate](#getsemployeepaystatementdetaildatabasedonthespecifiedyearandcheckdate) - Get employee pay statement details data for the specified year and check date.
* [getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYear](#getsemployeepaystatementsummarydatabasedonthespecifiedyear) - Get employee pay statement summary data for the specified year.
* [getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDate](#getsemployeepaystatementsummarydatabasedonthespecifiedyearandcheckdate) - Get employee pay statement summary data for the specified year and check date.

## getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYear

Get pay statement details API will return employee pay statement details data currently available in Web Pay for the specified year.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest();
    $request->codegroup = 'aspernatur';
    $request->companyId = 'minima';
    $request->employeeId = 'eaque';
    $request->includetotalcount = false;
    $request->pagenumber = 952871;
    $request->pagesize = 725595;
    $request->year = 'aut';

    $requestSecurity = new GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payStatements->getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYear($request, $requestSecurity);

    if ($response->payStatementDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDate

Get pay statement details API will return employee pay statement detail data currently available in Web Pay for the specified year and check date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest();
    $request->checkDate = 'aut';
    $request->codegroup = 'deleniti';
    $request->companyId = 'impedit';
    $request->employeeId = 'aliquam';
    $request->includetotalcount = false;
    $request->pagenumber = 146946;
    $request->pagesize = 882860;
    $request->year = 'inventore';

    $requestSecurity = new GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payStatements->getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDate($request, $requestSecurity);

    if ($response->payStatementDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYear

Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest();
    $request->codegroup = 'non';
    $request->companyId = 'et';
    $request->employeeId = 'dolorum';
    $request->includetotalcount = false;
    $request->pagenumber = 672048;
    $request->pagesize = 810424;
    $request->year = 'velit';

    $requestSecurity = new GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payStatements->getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYear($request, $requestSecurity);

    if ($response->payStatementSummaries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDate

Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year and check date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateRequest();
    $request->checkDate = 'eum';
    $request->codegroup = 'autem';
    $request->companyId = 'nobis';
    $request->employeeId = 'quas';
    $request->includetotalcount = false;
    $request->pagenumber = 829603;
    $request->pagesize = 860552;
    $request->year = 'voluptas';

    $requestSecurity = new GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payStatements->getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDate($request, $requestSecurity);

    if ($response->payStatementSummaries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
