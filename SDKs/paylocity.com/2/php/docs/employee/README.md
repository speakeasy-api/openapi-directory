# employee

### Available Operations

* [addEmployee](#addemployee) - Add new employee
* [getAllEmployees](#getallemployees) - Get all employees
* [getEmployee](#getemployee) - Get employee
* [updateEmployee](#updateemployee) - Update employee

## addEmployee

New Employee API sends new employee data directly to Web Pay. Companies who use the New Hire Template in Web Pay may require additional fields when hiring employees. New Employee API Requests will honor these required fields.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddEmployeeRequest;
use \OpenAPI\OpenAPI\Models\Shared\Employee;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeAdditionalDirectDeposit;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeAdditionalRate;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeBenefitSetup;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCustomBooleanFields;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCustomBooleanFieldsCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCustomDateFields;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCustomDateFieldsCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCustomDropDownFields;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCustomDropDownFieldsCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCustomNumberFields;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCustomNumberFieldsCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCustomTextFields;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCustomTextFieldsCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeDepartmentPosition;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmergencyContacts;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeFederalTax;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeHomeAddress;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeLocalTax;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeMainDirectDeposit;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeNonPrimaryStateTax;
use \OpenAPI\OpenAPI\Models\Shared\EmployeePrimaryPayRate;
use \OpenAPI\OpenAPI\Models\Shared\EmployeePrimaryStateTax;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeStatus;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeTaxSetup;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeWebTime;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeWorkAddress;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeWorkEligibility;
use \OpenAPI\OpenAPI\Models\Operations\AddEmployeeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddEmployeeRequest();
    $request->companyId = 'excepturi';
    $request->employee = new Employee();
    $request->employee->additionalDirectDeposit = [
        new EmployeeAdditionalDirectDeposit(),
    ];
    $request->employee->additionalRate = [
        new EmployeeAdditionalRate(),
        new EmployeeAdditionalRate(),
    ];
    $request->employee->benefitSetup = new EmployeeBenefitSetup();
    $request->employee->benefitSetup->benefitClass = 'culpa';
    $request->employee->benefitSetup->benefitClassEffectiveDate = 'doloribus';
    $request->employee->benefitSetup->benefitSalary = 9589.5;
    $request->employee->benefitSetup->benefitSalaryEffectiveDate = 'architecto';
    $request->employee->benefitSetup->doNotApplyAdministrativePeriod = false;
    $request->employee->benefitSetup->isMeasureAcaEligibility = false;
    $request->employee->birthDate = 'mollitia';
    $request->employee->coEmpCode = 'dolorem';
    $request->employee->companyFEIN = 'culpa';
    $request->employee->companyName = 'consequuntur';
    $request->employee->currency = 'repellat';
    $request->employee->customBooleanFields = [
        new EmployeeCustomBooleanFields(),
        new EmployeeCustomBooleanFields(),
        new EmployeeCustomBooleanFields(),
    ];
    $request->employee->customDateFields = [
        new EmployeeCustomDateFields(),
        new EmployeeCustomDateFields(),
        new EmployeeCustomDateFields(),
    ];
    $request->employee->customDropDownFields = [
        new EmployeeCustomDropDownFields(),
        new EmployeeCustomDropDownFields(),
    ];
    $request->employee->customNumberFields = [
        new EmployeeCustomNumberFields(),
        new EmployeeCustomNumberFields(),
    ];
    $request->employee->customTextFields = [
        new EmployeeCustomTextFields(),
        new EmployeeCustomTextFields(),
    ];
    $request->employee->departmentPosition = new EmployeeDepartmentPosition();
    $request->employee->departmentPosition->changeReason = 'molestiae';
    $request->employee->departmentPosition->clockBadgeNumber = 'velit';
    $request->employee->departmentPosition->costCenter1 = 'error';
    $request->employee->departmentPosition->costCenter2 = 'quia';
    $request->employee->departmentPosition->costCenter3 = 'quis';
    $request->employee->departmentPosition->effectiveDate = 'vitae';
    $request->employee->departmentPosition->employeeType = 'laborum';
    $request->employee->departmentPosition->equalEmploymentOpportunityClass = 'animi';
    $request->employee->departmentPosition->isMinimumWageExempt = false;
    $request->employee->departmentPosition->isOvertimeExempt = false;
    $request->employee->departmentPosition->isSupervisorReviewer = false;
    $request->employee->departmentPosition->isUnionDuesCollected = false;
    $request->employee->departmentPosition->isUnionInitiationCollected = false;
    $request->employee->departmentPosition->jobTitle = 'Product Marketing Consultant';
    $request->employee->departmentPosition->payGroup = 'sequi';
    $request->employee->departmentPosition->positionCode = 'tenetur';
    $request->employee->departmentPosition->reviewerCompanyNumber = 'ipsam';
    $request->employee->departmentPosition->reviewerEmployeeId = 'id';
    $request->employee->departmentPosition->shift = 'possimus';
    $request->employee->departmentPosition->supervisorCompanyNumber = 'aut';
    $request->employee->departmentPosition->supervisorEmployeeId = 'quasi';
    $request->employee->departmentPosition->tipped = 'error';
    $request->employee->departmentPosition->unionAffiliationDate = 'temporibus';
    $request->employee->departmentPosition->unionCode = 'laborum';
    $request->employee->departmentPosition->unionPosition = 'quasi';
    $request->employee->departmentPosition->workersCompensation = 'reiciendis';
    $request->employee->disabilityDescription = 'voluptatibus';
    $request->employee->emergencyContacts = [
        new EmployeeEmergencyContacts(),
        new EmployeeEmergencyContacts(),
        new EmployeeEmergencyContacts(),
        new EmployeeEmergencyContacts(),
    ];
    $request->employee->employeeId = 'nihil';
    $request->employee->ethnicity = 'praesentium';
    $request->employee->federalTax = new EmployeeFederalTax();
    $request->employee->federalTax->amount = 9767.62;
    $request->employee->federalTax->deductionsAmount = 557.14;
    $request->employee->federalTax->dependentsAmount = 6048.46;
    $request->employee->federalTax->exemptions = 4511.59;
    $request->employee->federalTax->filingStatus = 'cum';
    $request->employee->federalTax->higherRate = false;
    $request->employee->federalTax->otherIncomeAmount = 199.87;
    $request->employee->federalTax->percentage = 391.87;
    $request->employee->federalTax->taxCalculationCode = 'reprehenderit';
    $request->employee->federalTax->w4FormYear = 282807;
    $request->employee->firstName = 'Wilfrid';
    $request->employee->gender = 'female';
    $request->employee->homeAddress = new EmployeeHomeAddress();
    $request->employee->homeAddress->address1 = 'corporis';
    $request->employee->homeAddress->address2 = 'dolore';
    $request->employee->homeAddress->city = 'Birdiechester';
    $request->employee->homeAddress->country = 'Georgia';
    $request->employee->homeAddress->county = 'accusamus';
    $request->employee->homeAddress->emailAddress = 'commodi';
    $request->employee->homeAddress->mobilePhone = 'repudiandae';
    $request->employee->homeAddress->phone = '(365) 682-5590';
    $request->employee->homeAddress->postalCode = '50923-0681';
    $request->employee->homeAddress->state = 'deserunt';
    $request->employee->isHighlyCompensated = false;
    $request->employee->isSmoker = false;
    $request->employee->lastName = 'Rau';
    $request->employee->localTax = [
        new EmployeeLocalTax(),
        new EmployeeLocalTax(),
        new EmployeeLocalTax(),
        new EmployeeLocalTax(),
    ];
    $request->employee->mainDirectDeposit = new EmployeeMainDirectDeposit();
    $request->employee->mainDirectDeposit->accountNumber = 'labore';
    $request->employee->mainDirectDeposit->accountType = 'modi';
    $request->employee->mainDirectDeposit->blockSpecial = false;
    $request->employee->mainDirectDeposit->isSkipPreNote = false;
    $request->employee->mainDirectDeposit->nameOnAccount = 'qui';
    $request->employee->mainDirectDeposit->preNoteDate = 'aliquid';
    $request->employee->mainDirectDeposit->routingNumber = 'cupiditate';
    $request->employee->maritalStatus = 'quos';
    $request->employee->middleName = 'perferendis';
    $request->employee->nonPrimaryStateTax = new EmployeeNonPrimaryStateTax();
    $request->employee->nonPrimaryStateTax->amount = 1649.4;
    $request->employee->nonPrimaryStateTax->deductionsAmount = 8289.4;
    $request->employee->nonPrimaryStateTax->dependentsAmount = 3698.08;
    $request->employee->nonPrimaryStateTax->exemptions = 46.95;
    $request->employee->nonPrimaryStateTax->exemptions2 = 1464.41;
    $request->employee->nonPrimaryStateTax->filingStatus = 'dolorum';
    $request->employee->nonPrimaryStateTax->higherRate = false;
    $request->employee->nonPrimaryStateTax->otherIncomeAmount = 5696.18;
    $request->employee->nonPrimaryStateTax->percentage = 2700.08;
    $request->employee->nonPrimaryStateTax->reciprocityCode = 'facilis';
    $request->employee->nonPrimaryStateTax->specialCheckCalc = 'tempore';
    $request->employee->nonPrimaryStateTax->taxCalculationCode = 'labore';
    $request->employee->nonPrimaryStateTax->taxCode = 'delectus';
    $request->employee->nonPrimaryStateTax->w4FormYear = 433288;
    $request->employee->ownerPercent = 2487.53;
    $request->employee->preferredName = 'eligendi';
    $request->employee->primaryPayRate = new EmployeePrimaryPayRate();
    $request->employee->primaryPayRate->annualSalary = 5761.57;
    $request->employee->primaryPayRate->baseRate = 3960.98;
    $request->employee->primaryPayRate->beginCheckDate = 'provident';
    $request->employee->primaryPayRate->changeReason = 'necessitatibus';
    $request->employee->primaryPayRate->defaultHours = 5722.52;
    $request->employee->primaryPayRate->effectiveDate = 'officia';
    $request->employee->primaryPayRate->isAutoPay = false;
    $request->employee->primaryPayRate->payFrequency = 'dolor';
    $request->employee->primaryPayRate->payGrade = 'debitis';
    $request->employee->primaryPayRate->payRateNote = 'a';
    $request->employee->primaryPayRate->payType = 'dolorum';
    $request->employee->primaryPayRate->ratePer = 'in';
    $request->employee->primaryPayRate->salary = 4491.98;
    $request->employee->primaryStateTax = new EmployeePrimaryStateTax();
    $request->employee->primaryStateTax->amount = 8464.09;
    $request->employee->primaryStateTax->deductionsAmount = 9785.71;
    $request->employee->primaryStateTax->dependentsAmount = 6994.79;
    $request->employee->primaryStateTax->exemptions = 1162.02;
    $request->employee->primaryStateTax->exemptions2 = 2974.37;
    $request->employee->primaryStateTax->filingStatus = 'cumque';
    $request->employee->primaryStateTax->higherRate = false;
    $request->employee->primaryStateTax->otherIncomeAmount = 8137.98;
    $request->employee->primaryStateTax->percentage = 4118.2;
    $request->employee->primaryStateTax->specialCheckCalc = 'aliquid';
    $request->employee->primaryStateTax->taxCalculationCode = 'laborum';
    $request->employee->primaryStateTax->taxCode = 'accusamus';
    $request->employee->primaryStateTax->w4FormYear = 249796;
    $request->employee->priorLastName = 'occaecati';
    $request->employee->salutation = 'enim';
    $request->employee->ssn = 'accusamus';
    $request->employee->status = new EmployeeStatus();
    $request->employee->status->adjustedSeniorityDate = 'delectus';
    $request->employee->status->changeReason = 'quidem';
    $request->employee->status->effectiveDate = 'provident';
    $request->employee->status->employeeStatus = 'nam';
    $request->employee->status->hireDate = 'id';
    $request->employee->status->isEligibleForRehire = false;
    $request->employee->status->reHireDate = 'blanditiis';
    $request->employee->status->statusType = 'deleniti';
    $request->employee->status->terminationDate = 'sapiente';
    $request->employee->suffix = 'amet';
    $request->employee->taxSetup = new EmployeeTaxSetup();
    $request->employee->taxSetup->fitwExemptNotes = 'deserunt';
    $request->employee->taxSetup->fitwExemptReason = 'nisi';
    $request->employee->taxSetup->futaExemptNotes = 'vel';
    $request->employee->taxSetup->futaExemptReason = 'natus';
    $request->employee->taxSetup->isEmployee943 = false;
    $request->employee->taxSetup->isPension = false;
    $request->employee->taxSetup->isStatutory = false;
    $request->employee->taxSetup->medExemptNotes = 'omnis';
    $request->employee->taxSetup->medExemptReason = 'molestiae';
    $request->employee->taxSetup->sitwExemptNotes = 'perferendis';
    $request->employee->taxSetup->sitwExemptReason = 'nihil';
    $request->employee->taxSetup->ssExemptNotes = 'magnam';
    $request->employee->taxSetup->ssExemptReason = 'distinctio';
    $request->employee->taxSetup->suiExemptNotes = 'id';
    $request->employee->taxSetup->suiExemptReason = 'labore';
    $request->employee->taxSetup->suiState = 'labore';
    $request->employee->taxSetup->taxDistributionCode1099R = 'suscipit';
    $request->employee->taxSetup->taxForm = 'natus';
    $request->employee->veteranDescription = 'nobis';
    $request->employee->webTime = new EmployeeWebTime();
    $request->employee->webTime->badgeNumber = 'eum';
    $request->employee->webTime->chargeRate = 8784.53;
    $request->employee->webTime->isTimeLaborEnabled = false;
    $request->employee->workAddress = new EmployeeWorkAddress();
    $request->employee->workAddress->address1 = 'aspernatur';
    $request->employee->workAddress->address2 = 'architecto';
    $request->employee->workAddress->city = 'North Kevon';
    $request->employee->workAddress->country = 'Guatemala';
    $request->employee->workAddress->county = 'provident';
    $request->employee->workAddress->emailAddress = 'quos';
    $request->employee->workAddress->location = 'sint';
    $request->employee->workAddress->mailStop = 'accusantium';
    $request->employee->workAddress->mobilePhone = 'mollitia';
    $request->employee->workAddress->pager = 'reiciendis';
    $request->employee->workAddress->phone = '1-442-913-0498 x2857';
    $request->employee->workAddress->phoneExtension = 'in';
    $request->employee->workAddress->postalCode = '09374';
    $request->employee->workAddress->state = 'repellat';
    $request->employee->workEligibility = new EmployeeWorkEligibility();
    $request->employee->workEligibility->alienOrAdmissionDocumentNumber = 'quibusdam';
    $request->employee->workEligibility->attestedDate = 'sed';
    $request->employee->workEligibility->countryOfIssuance = 'saepe';
    $request->employee->workEligibility->foreignPassportNumber = 'pariatur';
    $request->employee->workEligibility->i94AdmissionNumber = 'accusantium';
    $request->employee->workEligibility->i9DateVerified = 'consequuntur';
    $request->employee->workEligibility->i9Notes = 'praesentium';
    $request->employee->workEligibility->isI9Verified = false;
    $request->employee->workEligibility->isSsnVerified = false;
    $request->employee->workEligibility->ssnDateVerified = 'natus';
    $request->employee->workEligibility->ssnNotes = 'magni';
    $request->employee->workEligibility->visaType = 'sunt';
    $request->employee->workEligibility->workAuthorization = 'quo';
    $request->employee->workEligibility->workUntil = 'illum';

    $requestSecurity = new AddEmployeeSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->employee->addEmployee($request, $requestSecurity);

    if ($response->employeeIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllEmployees

Get All Employees API will return employee data currently available in Web Pay.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllEmployeesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAllEmployeesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllEmployeesRequest();
    $request->companyId = 'pariatur';
    $request->includetotalcount = false;
    $request->pagenumber = 807319;
    $request->pagesize = 411397;

    $requestSecurity = new GetAllEmployeesSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->employee->getAllEmployees($request, $requestSecurity);

    if ($response->employeeInfos !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployee

Get Employee API will return employee data currently available in Web Pay.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployeeRequest();
    $request->companyId = 'excepturi';
    $request->employeeId = 'odit';

    $requestSecurity = new GetEmployeeSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->employee->getEmployee($request, $requestSecurity);

    if ($response->employee !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEmployee

Update Employee API will update existing employee data in WebPay.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEmployeeRequest;
use \OpenAPI\OpenAPI\Models\Shared\Employee;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeAdditionalDirectDeposit;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeAdditionalRate;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeBenefitSetup;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCustomBooleanFields;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCustomBooleanFieldsCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCustomDateFields;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCustomDateFieldsCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCustomDropDownFields;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCustomDropDownFieldsCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCustomNumberFields;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCustomNumberFieldsCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCustomTextFields;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCustomTextFieldsCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeDepartmentPosition;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmergencyContacts;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeFederalTax;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeHomeAddress;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeLocalTax;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeMainDirectDeposit;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeNonPrimaryStateTax;
use \OpenAPI\OpenAPI\Models\Shared\EmployeePrimaryPayRate;
use \OpenAPI\OpenAPI\Models\Shared\EmployeePrimaryStateTax;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeStatus;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeTaxSetup;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeWebTime;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeWorkAddress;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeWorkEligibility;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEmployeeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEmployeeRequest();
    $request->companyId = 'ea';
    $request->employee = new Employee();
    $request->employee->additionalDirectDeposit = [
        new EmployeeAdditionalDirectDeposit(),
    ];
    $request->employee->additionalRate = [
        new EmployeeAdditionalRate(),
    ];
    $request->employee->benefitSetup = new EmployeeBenefitSetup();
    $request->employee->benefitSetup->benefitClass = 'maiores';
    $request->employee->benefitSetup->benefitClassEffectiveDate = 'quidem';
    $request->employee->benefitSetup->benefitSalary = 3732.91;
    $request->employee->benefitSetup->benefitSalaryEffectiveDate = 'voluptate';
    $request->employee->benefitSetup->doNotApplyAdministrativePeriod = false;
    $request->employee->benefitSetup->isMeasureAcaEligibility = false;
    $request->employee->birthDate = 'autem';
    $request->employee->coEmpCode = 'nam';
    $request->employee->companyFEIN = 'eaque';
    $request->employee->companyName = 'pariatur';
    $request->employee->currency = 'nemo';
    $request->employee->customBooleanFields = [
        new EmployeeCustomBooleanFields(),
        new EmployeeCustomBooleanFields(),
        new EmployeeCustomBooleanFields(),
        new EmployeeCustomBooleanFields(),
    ];
    $request->employee->customDateFields = [
        new EmployeeCustomDateFields(),
    ];
    $request->employee->customDropDownFields = [
        new EmployeeCustomDropDownFields(),
        new EmployeeCustomDropDownFields(),
        new EmployeeCustomDropDownFields(),
        new EmployeeCustomDropDownFields(),
    ];
    $request->employee->customNumberFields = [
        new EmployeeCustomNumberFields(),
    ];
    $request->employee->customTextFields = [
        new EmployeeCustomTextFields(),
    ];
    $request->employee->departmentPosition = new EmployeeDepartmentPosition();
    $request->employee->departmentPosition->changeReason = 'cumque';
    $request->employee->departmentPosition->clockBadgeNumber = 'corporis';
    $request->employee->departmentPosition->costCenter1 = 'hic';
    $request->employee->departmentPosition->costCenter2 = 'libero';
    $request->employee->departmentPosition->costCenter3 = 'nobis';
    $request->employee->departmentPosition->effectiveDate = 'dolores';
    $request->employee->departmentPosition->employeeType = 'quis';
    $request->employee->departmentPosition->equalEmploymentOpportunityClass = 'totam';
    $request->employee->departmentPosition->isMinimumWageExempt = false;
    $request->employee->departmentPosition->isOvertimeExempt = false;
    $request->employee->departmentPosition->isSupervisorReviewer = false;
    $request->employee->departmentPosition->isUnionDuesCollected = false;
    $request->employee->departmentPosition->isUnionInitiationCollected = false;
    $request->employee->departmentPosition->jobTitle = 'Central Brand Director';
    $request->employee->departmentPosition->payGroup = 'nesciunt';
    $request->employee->departmentPosition->positionCode = 'eos';
    $request->employee->departmentPosition->reviewerCompanyNumber = 'perferendis';
    $request->employee->departmentPosition->reviewerEmployeeId = 'dolores';
    $request->employee->departmentPosition->shift = 'minus';
    $request->employee->departmentPosition->supervisorCompanyNumber = 'quam';
    $request->employee->departmentPosition->supervisorEmployeeId = 'dolor';
    $request->employee->departmentPosition->tipped = 'vero';
    $request->employee->departmentPosition->unionAffiliationDate = 'nostrum';
    $request->employee->departmentPosition->unionCode = 'hic';
    $request->employee->departmentPosition->unionPosition = 'recusandae';
    $request->employee->departmentPosition->workersCompensation = 'omnis';
    $request->employee->disabilityDescription = 'facilis';
    $request->employee->emergencyContacts = [
        new EmployeeEmergencyContacts(),
        new EmployeeEmergencyContacts(),
        new EmployeeEmergencyContacts(),
    ];
    $request->employee->employeeId = 'voluptatem';
    $request->employee->ethnicity = 'porro';
    $request->employee->federalTax = new EmployeeFederalTax();
    $request->employee->federalTax->amount = 1646.94;
    $request->employee->federalTax->deductionsAmount = 5000.26;
    $request->employee->federalTax->dependentsAmount = 6214.79;
    $request->employee->federalTax->exemptions = 503.7;
    $request->employee->federalTax->filingStatus = 'occaecati';
    $request->employee->federalTax->higherRate = false;
    $request->employee->federalTax->otherIncomeAmount = 6990.98;
    $request->employee->federalTax->percentage = 2378.93;
    $request->employee->federalTax->taxCalculationCode = 'asperiores';
    $request->employee->federalTax->w4FormYear = 934214;
    $request->employee->firstName = 'Dolly';
    $request->employee->gender = 'male';
    $request->employee->homeAddress = new EmployeeHomeAddress();
    $request->employee->homeAddress->address1 = 'dolorum';
    $request->employee->homeAddress->address2 = 'deleniti';
    $request->employee->homeAddress->city = 'Murrieta';
    $request->employee->homeAddress->country = 'Saint Kitts and Nevis';
    $request->employee->homeAddress->county = 'libero';
    $request->employee->homeAddress->emailAddress = 'delectus';
    $request->employee->homeAddress->mobilePhone = 'quaerat';
    $request->employee->homeAddress->phone = '522-312-9574 x4926';
    $request->employee->homeAddress->postalCode = '00044';
    $request->employee->homeAddress->state = 'quaerat';
    $request->employee->isHighlyCompensated = false;
    $request->employee->isSmoker = false;
    $request->employee->lastName = 'Thompson';
    $request->employee->localTax = [
        new EmployeeLocalTax(),
        new EmployeeLocalTax(),
        new EmployeeLocalTax(),
    ];
    $request->employee->mainDirectDeposit = new EmployeeMainDirectDeposit();
    $request->employee->mainDirectDeposit->accountNumber = 'voluptatibus';
    $request->employee->mainDirectDeposit->accountType = 'voluptas';
    $request->employee->mainDirectDeposit->blockSpecial = false;
    $request->employee->mainDirectDeposit->isSkipPreNote = false;
    $request->employee->mainDirectDeposit->nameOnAccount = 'natus';
    $request->employee->mainDirectDeposit->preNoteDate = 'eos';
    $request->employee->mainDirectDeposit->routingNumber = 'atque';
    $request->employee->maritalStatus = 'sit';
    $request->employee->middleName = 'fugiat';
    $request->employee->nonPrimaryStateTax = new EmployeeNonPrimaryStateTax();
    $request->employee->nonPrimaryStateTax->amount = 672.49;
    $request->employee->nonPrimaryStateTax->deductionsAmount = 7438.35;
    $request->employee->nonPrimaryStateTax->dependentsAmount = 6793.93;
    $request->employee->nonPrimaryStateTax->exemptions = 4785.96;
    $request->employee->nonPrimaryStateTax->exemptions2 = 4536.97;
    $request->employee->nonPrimaryStateTax->filingStatus = 'dolorum';
    $request->employee->nonPrimaryStateTax->higherRate = false;
    $request->employee->nonPrimaryStateTax->otherIncomeAmount = 5365.79;
    $request->employee->nonPrimaryStateTax->percentage = 6070.45;
    $request->employee->nonPrimaryStateTax->reciprocityCode = 'necessitatibus';
    $request->employee->nonPrimaryStateTax->specialCheckCalc = 'distinctio';
    $request->employee->nonPrimaryStateTax->taxCalculationCode = 'asperiores';
    $request->employee->nonPrimaryStateTax->taxCode = 'nihil';
    $request->employee->nonPrimaryStateTax->w4FormYear = 216897;
    $request->employee->ownerPercent = 4560.15;
    $request->employee->preferredName = 'id';
    $request->employee->primaryPayRate = new EmployeePrimaryPayRate();
    $request->employee->primaryPayRate->annualSalary = 9064.18;
    $request->employee->primaryPayRate->baseRate = 2633.22;
    $request->employee->primaryPayRate->beginCheckDate = 'aspernatur';
    $request->employee->primaryPayRate->changeReason = 'perferendis';
    $request->employee->primaryPayRate->defaultHours = 2292.19;
    $request->employee->primaryPayRate->effectiveDate = 'optio';
    $request->employee->primaryPayRate->isAutoPay = false;
    $request->employee->primaryPayRate->payFrequency = 'accusamus';
    $request->employee->primaryPayRate->payGrade = 'ad';
    $request->employee->primaryPayRate->payRateNote = 'saepe';
    $request->employee->primaryPayRate->payType = 'suscipit';
    $request->employee->primaryPayRate->ratePer = 'deserunt';
    $request->employee->primaryPayRate->salary = 5883.17;
    $request->employee->primaryStateTax = new EmployeePrimaryStateTax();
    $request->employee->primaryStateTax->amount = 3246.83;
    $request->employee->primaryStateTax->deductionsAmount = 8310.49;
    $request->employee->primaryStateTax->dependentsAmount = 5197.11;
    $request->employee->primaryStateTax->exemptions = 6289.82;
    $request->employee->primaryStateTax->exemptions2 = 0.55;
    $request->employee->primaryStateTax->filingStatus = 'at';
    $request->employee->primaryStateTax->higherRate = false;
    $request->employee->primaryStateTax->otherIncomeAmount = 3118.6;
    $request->employee->primaryStateTax->percentage = 2735.42;
    $request->employee->primaryStateTax->specialCheckCalc = 'vel';
    $request->employee->primaryStateTax->taxCalculationCode = 'quod';
    $request->employee->primaryStateTax->taxCode = 'officiis';
    $request->employee->primaryStateTax->w4FormYear = 185636;
    $request->employee->priorLastName = 'dolorum';
    $request->employee->salutation = 'a';
    $request->employee->ssn = 'esse';
    $request->employee->status = new EmployeeStatus();
    $request->employee->status->adjustedSeniorityDate = 'harum';
    $request->employee->status->changeReason = 'iusto';
    $request->employee->status->effectiveDate = 'ipsum';
    $request->employee->status->employeeStatus = 'quisquam';
    $request->employee->status->hireDate = 'tenetur';
    $request->employee->status->isEligibleForRehire = false;
    $request->employee->status->reHireDate = 'amet';
    $request->employee->status->statusType = 'tempore';
    $request->employee->status->terminationDate = 'accusamus';
    $request->employee->suffix = 'numquam';
    $request->employee->taxSetup = new EmployeeTaxSetup();
    $request->employee->taxSetup->fitwExemptNotes = 'enim';
    $request->employee->taxSetup->fitwExemptReason = 'dolorem';
    $request->employee->taxSetup->futaExemptNotes = 'sapiente';
    $request->employee->taxSetup->futaExemptReason = 'totam';
    $request->employee->taxSetup->isEmployee943 = false;
    $request->employee->taxSetup->isPension = false;
    $request->employee->taxSetup->isStatutory = false;
    $request->employee->taxSetup->medExemptNotes = 'nihil';
    $request->employee->taxSetup->medExemptReason = 'sit';
    $request->employee->taxSetup->sitwExemptNotes = 'expedita';
    $request->employee->taxSetup->sitwExemptReason = 'neque';
    $request->employee->taxSetup->ssExemptNotes = 'sed';
    $request->employee->taxSetup->ssExemptReason = 'vel';
    $request->employee->taxSetup->suiExemptNotes = 'libero';
    $request->employee->taxSetup->suiExemptReason = 'voluptas';
    $request->employee->taxSetup->suiState = 'deserunt';
    $request->employee->taxSetup->taxDistributionCode1099R = 'quam';
    $request->employee->taxSetup->taxForm = 'ipsum';
    $request->employee->veteranDescription = 'incidunt';
    $request->employee->webTime = new EmployeeWebTime();
    $request->employee->webTime->badgeNumber = 'qui';
    $request->employee->webTime->chargeRate = 5867.84;
    $request->employee->webTime->isTimeLaborEnabled = false;
    $request->employee->workAddress = new EmployeeWorkAddress();
    $request->employee->workAddress->address1 = 'maxime';
    $request->employee->workAddress->address2 = 'pariatur';
    $request->employee->workAddress->city = 'Carrollchester';
    $request->employee->workAddress->country = 'Macao';
    $request->employee->workAddress->county = 'incidunt';
    $request->employee->workAddress->emailAddress = 'aspernatur';
    $request->employee->workAddress->location = 'dolores';
    $request->employee->workAddress->mailStop = 'distinctio';
    $request->employee->workAddress->mobilePhone = 'facilis';
    $request->employee->workAddress->pager = 'aliquid';
    $request->employee->workAddress->phone = '681.311.4137 x907';
    $request->employee->workAddress->phoneExtension = 'soluta';
    $request->employee->workAddress->postalCode = '09207-5750';
    $request->employee->workAddress->state = 'delectus';
    $request->employee->workEligibility = new EmployeeWorkEligibility();
    $request->employee->workEligibility->alienOrAdmissionDocumentNumber = 'dolorem';
    $request->employee->workEligibility->attestedDate = 'dolore';
    $request->employee->workEligibility->countryOfIssuance = 'labore';
    $request->employee->workEligibility->foreignPassportNumber = 'adipisci';
    $request->employee->workEligibility->i94AdmissionNumber = 'dolorum';
    $request->employee->workEligibility->i9DateVerified = 'architecto';
    $request->employee->workEligibility->i9Notes = 'quae';
    $request->employee->workEligibility->isI9Verified = false;
    $request->employee->workEligibility->isSsnVerified = false;
    $request->employee->workEligibility->ssnDateVerified = 'aut';
    $request->employee->workEligibility->ssnNotes = 'quas';
    $request->employee->workEligibility->visaType = 'itaque';
    $request->employee->workEligibility->workAuthorization = 'consequatur';
    $request->employee->workEligibility->workUntil = 'est';
    $request->employeeId = 'repellendus';

    $requestSecurity = new UpdateEmployeeSecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->employee->updateEmployee($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
