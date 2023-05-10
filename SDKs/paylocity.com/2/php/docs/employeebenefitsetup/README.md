# employeeBenefitSetup

### Available Operations

* [updateOrAddEmployeeBenefitSetup](#updateoraddemployeebenefitsetup) - Add/update employee's benefit setup

## updateOrAddEmployeeBenefitSetup

Sends new or updated employee benefit setup information directly to Web Pay.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrAddEmployeeBenefitSetupRequest;
use \OpenAPI\OpenAPI\Models\Shared\BenefitSetup;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrAddEmployeeBenefitSetupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrAddEmployeeBenefitSetupRequest();
    $request->benefitSetup = new BenefitSetup();
    $request->benefitSetup->benefitClass = 'porro';
    $request->benefitSetup->benefitClassEffectiveDate = 'doloribus';
    $request->benefitSetup->benefitSalary = 2817.3;
    $request->benefitSetup->benefitSalaryEffectiveDate = 'facilis';
    $request->benefitSetup->doNotApplyAdministrativePeriod = false;
    $request->benefitSetup->isMeasureAcaEligibility = false;
    $request->companyId = 'cupiditate';
    $request->employeeId = 'qui';

    $requestSecurity = new UpdateOrAddEmployeeBenefitSetupSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->employeeBenefitSetup->updateOrAddEmployeeBenefitSetup($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
