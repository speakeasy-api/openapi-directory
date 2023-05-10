# employeeStaging

### Available Operations

* [addNewEmployeeToWebLink](#addnewemployeetoweblink) - Add new employee to Web Link

## addNewEmployeeToWebLink

Add new employee to Web Link will send partially completed or potentially erroneous new hire record to Web Link, where it can be corrected and competed by company administrator or authorized Paylocity Service Bureau employee.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddNewEmployeeToWebLinkRequest;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployee;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeeAdditionalDirectDeposit;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeeBenefitSetup;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeeCustomBooleanFields;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeeCustomBooleanFieldsCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeeCustomDateFields;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeeCustomDateFieldsCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeeCustomDropDownFields;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeeCustomDropDownFieldsCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeeCustomNumberFields;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeeCustomNumberFieldsCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeeCustomTextFields;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeeCustomTextFieldsCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeeDepartmentPosition;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeeFederalTax;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeeHomeAddress;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeeLocalTax;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeeMainDirectDeposit;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeeNonPrimaryStateTax;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeePrimaryPayRate;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeePrimaryStateTax;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeeStatus;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeeWebTime;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeeWorkAddress;
use \OpenAPI\OpenAPI\Models\Shared\StagedEmployeeWorkEligibility;
use \OpenAPI\OpenAPI\Models\Operations\AddNewEmployeeToWebLinkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddNewEmployeeToWebLinkRequest();
    $request->companyId = 'quae';
    $request->stagedEmployee = new StagedEmployee();
    $request->stagedEmployee->additionalDirectDeposit = [
        new StagedEmployeeAdditionalDirectDeposit(),
        new StagedEmployeeAdditionalDirectDeposit(),
        new StagedEmployeeAdditionalDirectDeposit(),
    ];
    $request->stagedEmployee->benefitSetup = [
        new StagedEmployeeBenefitSetup(),
        new StagedEmployeeBenefitSetup(),
    ];
    $request->stagedEmployee->birthDate = 'occaecati';
    $request->stagedEmployee->customBooleanFields = [
        new StagedEmployeeCustomBooleanFields(),
        new StagedEmployeeCustomBooleanFields(),
        new StagedEmployeeCustomBooleanFields(),
        new StagedEmployeeCustomBooleanFields(),
    ];
    $request->stagedEmployee->customDateFields = [
        new StagedEmployeeCustomDateFields(),
        new StagedEmployeeCustomDateFields(),
        new StagedEmployeeCustomDateFields(),
        new StagedEmployeeCustomDateFields(),
    ];
    $request->stagedEmployee->customDropDownFields = [
        new StagedEmployeeCustomDropDownFields(),
        new StagedEmployeeCustomDropDownFields(),
        new StagedEmployeeCustomDropDownFields(),
        new StagedEmployeeCustomDropDownFields(),
    ];
    $request->stagedEmployee->customNumberFields = [
        new StagedEmployeeCustomNumberFields(),
        new StagedEmployeeCustomNumberFields(),
        new StagedEmployeeCustomNumberFields(),
    ];
    $request->stagedEmployee->customTextFields = [
        new StagedEmployeeCustomTextFields(),
        new StagedEmployeeCustomTextFields(),
    ];
    $request->stagedEmployee->departmentPosition = [
        new StagedEmployeeDepartmentPosition(),
    ];
    $request->stagedEmployee->disabilityDescription = 'delectus';
    $request->stagedEmployee->employeeId = 'voluptate';
    $request->stagedEmployee->ethnicity = 'consectetur';
    $request->stagedEmployee->federalTax = [
        new StagedEmployeeFederalTax(),
        new StagedEmployeeFederalTax(),
        new StagedEmployeeFederalTax(),
        new StagedEmployeeFederalTax(),
    ];
    $request->stagedEmployee->firstName = 'Ursula';
    $request->stagedEmployee->fitwExemptReason = 'dignissimos';
    $request->stagedEmployee->futaExemptReason = 'hic';
    $request->stagedEmployee->gender = 'male';
    $request->stagedEmployee->homeAddress = [
        new StagedEmployeeHomeAddress(),
        new StagedEmployeeHomeAddress(),
        new StagedEmployeeHomeAddress(),
        new StagedEmployeeHomeAddress(),
    ];
    $request->stagedEmployee->isEmployee943 = false;
    $request->stagedEmployee->isSmoker = false;
    $request->stagedEmployee->lastName = 'Kuhic';
    $request->stagedEmployee->localTax = [
        new StagedEmployeeLocalTax(),
        new StagedEmployeeLocalTax(),
        new StagedEmployeeLocalTax(),
    ];
    $request->stagedEmployee->mainDirectDeposit = [
        new StagedEmployeeMainDirectDeposit(),
        new StagedEmployeeMainDirectDeposit(),
        new StagedEmployeeMainDirectDeposit(),
    ];
    $request->stagedEmployee->maritalStatus = 'vero';
    $request->stagedEmployee->medExemptReason = 'ducimus';
    $request->stagedEmployee->middleName = 'dolore';
    $request->stagedEmployee->nonPrimaryStateTax = [
        new StagedEmployeeNonPrimaryStateTax(),
        new StagedEmployeeNonPrimaryStateTax(),
        new StagedEmployeeNonPrimaryStateTax(),
        new StagedEmployeeNonPrimaryStateTax(),
    ];
    $request->stagedEmployee->preferredName = 'illum';
    $request->stagedEmployee->primaryPayRate = [
        new StagedEmployeePrimaryPayRate(),
    ];
    $request->stagedEmployee->primaryStateTax = [
        new StagedEmployeePrimaryStateTax(),
        new StagedEmployeePrimaryStateTax(),
        new StagedEmployeePrimaryStateTax(),
    ];
    $request->stagedEmployee->priorLastName = 'impedit';
    $request->stagedEmployee->salutation = 'aut';
    $request->stagedEmployee->sitwExemptReason = 'voluptatibus';
    $request->stagedEmployee->ssExemptReason = 'exercitationem';
    $request->stagedEmployee->ssn = 'nulla';
    $request->stagedEmployee->status = [
        new StagedEmployeeStatus(),
    ];
    $request->stagedEmployee->suffix = 'porro';
    $request->stagedEmployee->suiExemptReason = 'maiores';
    $request->stagedEmployee->suiState = 'doloribus';
    $request->stagedEmployee->taxDistributionCode1099R = 'iusto';
    $request->stagedEmployee->taxForm = 'eligendi';
    $request->stagedEmployee->veteranDescription = 'ducimus';
    $request->stagedEmployee->webTime = new StagedEmployeeWebTime();
    $request->stagedEmployee->webTime->badgeNumber = 'alias';
    $request->stagedEmployee->webTime->chargeRate = 6394.73;
    $request->stagedEmployee->webTime->isTimeLaborEnabled = false;
    $request->stagedEmployee->workAddress = [
        new StagedEmployeeWorkAddress(),
        new StagedEmployeeWorkAddress(),
    ];
    $request->stagedEmployee->workEligibility = [
        new StagedEmployeeWorkEligibility(),
        new StagedEmployeeWorkEligibility(),
    ];

    $requestSecurity = new AddNewEmployeeToWebLinkSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->employeeStaging->addNewEmployeeToWebLink($request, $requestSecurity);

    if ($response->trackingNumberResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
