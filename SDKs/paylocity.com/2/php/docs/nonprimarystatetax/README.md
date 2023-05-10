# nonPrimaryStateTax

### Available Operations

* [addOrUpdateNonPrimaryStateTax](#addorupdatenonprimarystatetax) - Add/update non-primary state tax

## addOrUpdateNonPrimaryStateTax

Sends new or updated employee non-primary state tax information directly to Web Pay.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddOrUpdateNonPrimaryStateTaxRequest;
use \OpenAPI\OpenAPI\Models\Shared\NonPrimaryStateTax;
use \OpenAPI\OpenAPI\Models\Operations\AddOrUpdateNonPrimaryStateTaxSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddOrUpdateNonPrimaryStateTaxRequest();
    $request->companyId = 'nostrum';
    $request->employeeId = 'sapiente';
    $request->nonPrimaryStateTax = new NonPrimaryStateTax();
    $request->nonPrimaryStateTax->amount = 7888.73;
    $request->nonPrimaryStateTax->deductionsAmount = 9065.56;
    $request->nonPrimaryStateTax->dependentsAmount = 4113.72;
    $request->nonPrimaryStateTax->exemptions = 7740.48;
    $request->nonPrimaryStateTax->exemptions2 = 3592.71;
    $request->nonPrimaryStateTax->filingStatus = 'veniam';
    $request->nonPrimaryStateTax->higherRate = false;
    $request->nonPrimaryStateTax->otherIncomeAmount = 3994.99;
    $request->nonPrimaryStateTax->percentage = 811.01;
    $request->nonPrimaryStateTax->reciprocityCode = 'magnam';
    $request->nonPrimaryStateTax->specialCheckCalc = 'ea';
    $request->nonPrimaryStateTax->taxCalculationCode = 'quo';
    $request->nonPrimaryStateTax->taxCode = 'consectetur';
    $request->nonPrimaryStateTax->w4FormYear = 926213;

    $requestSecurity = new AddOrUpdateNonPrimaryStateTaxSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nonPrimaryStateTax->addOrUpdateNonPrimaryStateTax($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
