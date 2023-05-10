# primaryStateTax

### Available Operations

* [addOrUpdatePrimaryStateTax](#addorupdateprimarystatetax) - Add/update primary state tax

## addOrUpdatePrimaryStateTax

Sends new or updated employee primary state tax information directly to Web Pay.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddOrUpdatePrimaryStateTaxRequest;
use \OpenAPI\OpenAPI\Models\Shared\StateTax;
use \OpenAPI\OpenAPI\Models\Operations\AddOrUpdatePrimaryStateTaxSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddOrUpdatePrimaryStateTaxRequest();
    $request->companyId = 'libero';
    $request->employeeId = 'quasi';
    $request->stateTax = new StateTax();
    $request->stateTax->amount = 2703.28;
    $request->stateTax->deductionsAmount = 2561.39;
    $request->stateTax->dependentsAmount = 1314.82;
    $request->stateTax->exemptions = 5919.35;
    $request->stateTax->exemptions2 = 553.74;
    $request->stateTax->filingStatus = 'molestiae';
    $request->stateTax->higherRate = false;
    $request->stateTax->otherIncomeAmount = 3015.98;
    $request->stateTax->percentage = 4879.35;
    $request->stateTax->specialCheckCalc = 'eius';
    $request->stateTax->taxCalculationCode = 'esse';
    $request->stateTax->taxCode = 'esse';
    $request->stateTax->w4FormYear = 524593;

    $requestSecurity = new AddOrUpdatePrimaryStateTaxSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->primaryStateTax->addOrUpdatePrimaryStateTax($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
