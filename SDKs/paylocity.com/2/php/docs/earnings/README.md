# earnings

### Available Operations

* [addOrUpdateAnEmployeeEarning](#addorupdateanemployeeearning) - Add/Update Earning
* [deleteEarningByEarningCodeAndStartDate](#deleteearningbyearningcodeandstartdate) - Delete Earning by Earning Code and Start Date
* [getAllEarnings](#getallearnings) - Get All Earnings
* [getEarningByEarningCodeAndStartDate](#getearningbyearningcodeandstartdate) - Get Earning by Earning Code and Start Date
* [getEarningsByEarningCode](#getearningsbyearningcode) - Get Earnings by Earning Code

## addOrUpdateAnEmployeeEarning

Add/Update Earning API sends new or updated employee earnings information directly to Web Pay.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddOrUpdateAnEmployeeEarningRequest;
use \OpenAPI\OpenAPI\Models\Shared\Earning;
use \OpenAPI\OpenAPI\Models\Operations\AddOrUpdateAnEmployeeEarningSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddOrUpdateAnEmployeeEarningRequest();
    $request->companyId = 'odit';
    $request->earning = new Earning();
    $request->earning->agency = 'at';
    $request->earning->amount = 8700.88;
    $request->earning->annualMaximum = 9786.19;
    $request->earning->calculationCode = 'molestiae';
    $request->earning->costCenter1 = 'quod';
    $request->earning->costCenter2 = 'quod';
    $request->earning->costCenter3 = 'esse';
    $request->earning->earningCode = 'totam';
    $request->earning->effectiveDate = 'porro';
    $request->earning->endDate = 'dolorum';
    $request->earning->frequency = 'dicta';
    $request->earning->goal = 7206.33;
    $request->earning->hoursOrUnits = 6399.21;
    $request->earning->isSelfInsured = false;
    $request->earning->jobCode = 'occaecati';
    $request->earning->miscellaneousInfo = 'fugit';
    $request->earning->paidTowardsGoal = 5373.73;
    $request->earning->payPeriodMaximum = 9446.69;
    $request->earning->payPeriodMinimum = 7586.16;
    $request->earning->rate = 5218.48;
    $request->earning->rateCode = 'beatae';
    $request->earning->startDate = 'commodi';
    $request->employeeId = 'molestiae';

    $requestSecurity = new AddOrUpdateAnEmployeeEarningSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->earnings->addOrUpdateAnEmployeeEarning($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEarningByEarningCodeAndStartDate

Delete Earning by Earning Code and Start Date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEarningByEarningCodeAndStartDateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEarningByEarningCodeAndStartDateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEarningByEarningCodeAndStartDateRequest();
    $request->companyId = 'modi';
    $request->earningCode = 'qui';
    $request->employeeId = 'impedit';
    $request->startDate = 'cum';

    $requestSecurity = new DeleteEarningByEarningCodeAndStartDateSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->earnings->deleteEarningByEarningCodeAndStartDate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllEarnings

Get All Earnings returns all earnings for the selected employee.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllEarningsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAllEarningsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllEarningsRequest();
    $request->companyId = 'esse';
    $request->employeeId = 'ipsum';

    $requestSecurity = new GetAllEarningsSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->earnings->getAllEarnings($request, $requestSecurity);

    if ($response->earnings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEarningByEarningCodeAndStartDate

Get Earnings returns the single earning with the provided earning code and start date for the selected employee.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEarningByEarningCodeAndStartDateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEarningByEarningCodeAndStartDateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEarningByEarningCodeAndStartDateRequest();
    $request->companyId = 'excepturi';
    $request->earningCode = 'aspernatur';
    $request->employeeId = 'perferendis';
    $request->startDate = 'ad';

    $requestSecurity = new GetEarningByEarningCodeAndStartDateSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->earnings->getEarningByEarningCodeAndStartDate($request, $requestSecurity);

    if ($response->earning !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEarningsByEarningCode

Get Earnings returns all earnings with the provided earning code for the selected employee.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEarningsByEarningCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEarningsByEarningCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEarningsByEarningCodeRequest();
    $request->companyId = 'natus';
    $request->earningCode = 'sed';
    $request->employeeId = 'iste';

    $requestSecurity = new GetEarningsByEarningCodeSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->earnings->getEarningsByEarningCode($request, $requestSecurity);

    if ($response->earnings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
