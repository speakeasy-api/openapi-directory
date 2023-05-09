# employee

### Available Operations

* [addEmployee](#addemployee) - Add new employee
* [getAllEmployees](#getallemployees) - Get all employees
* [getEmployee](#getemployee) - Get employee
* [updateEmployee](#updateemployee) - Update employee

## addEmployee

New Employee API sends new employee data directly to Web Pay. Companies who use the New Hire Template in Web Pay may require additional fields when hiring employees. New Employee API Requests will honor these required fields.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddEmployeeRequest;
import org.openapis.openapi.models.operations.AddEmployeeResponse;
import org.openapis.openapi.models.operations.AddEmployeeSecurity;
import org.openapis.openapi.models.shared.Employee;
import org.openapis.openapi.models.shared.EmployeeAdditionalDirectDeposit;
import org.openapis.openapi.models.shared.EmployeeAdditionalRate;
import org.openapis.openapi.models.shared.EmployeeBenefitSetup;
import org.openapis.openapi.models.shared.EmployeeCustomBooleanFields;
import org.openapis.openapi.models.shared.EmployeeCustomBooleanFieldsCategoryEnum;
import org.openapis.openapi.models.shared.EmployeeCustomDateFields;
import org.openapis.openapi.models.shared.EmployeeCustomDateFieldsCategoryEnum;
import org.openapis.openapi.models.shared.EmployeeCustomDropDownFields;
import org.openapis.openapi.models.shared.EmployeeCustomDropDownFieldsCategoryEnum;
import org.openapis.openapi.models.shared.EmployeeCustomNumberFields;
import org.openapis.openapi.models.shared.EmployeeCustomNumberFieldsCategoryEnum;
import org.openapis.openapi.models.shared.EmployeeCustomTextFields;
import org.openapis.openapi.models.shared.EmployeeCustomTextFieldsCategoryEnum;
import org.openapis.openapi.models.shared.EmployeeDepartmentPosition;
import org.openapis.openapi.models.shared.EmployeeEmergencyContacts;
import org.openapis.openapi.models.shared.EmployeeFederalTax;
import org.openapis.openapi.models.shared.EmployeeHomeAddress;
import org.openapis.openapi.models.shared.EmployeeLocalTax;
import org.openapis.openapi.models.shared.EmployeeMainDirectDeposit;
import org.openapis.openapi.models.shared.EmployeeNonPrimaryStateTax;
import org.openapis.openapi.models.shared.EmployeePrimaryPayRate;
import org.openapis.openapi.models.shared.EmployeePrimaryStateTax;
import org.openapis.openapi.models.shared.EmployeeStatus;
import org.openapis.openapi.models.shared.EmployeeTaxSetup;
import org.openapis.openapi.models.shared.EmployeeWebTime;
import org.openapis.openapi.models.shared.EmployeeWorkAddress;
import org.openapis.openapi.models.shared.EmployeeWorkEligibility;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddEmployeeRequest req = new AddEmployeeRequest("occaecati",                 new Employee() {{
                                additionalDirectDeposit = new org.openapis.openapi.models.shared.EmployeeAdditionalDirectDeposit[]{{
                                    add(new EmployeeAdditionalDirectDeposit() {{
                                        accountNumber = "commodi";
                                        accountType = "quam";
                                        amount = 4746.97;
                                        amountType = "velit";
                                        blockSpecial = false;
                                        isSkipPreNote = false;
                                        nameOnAccount = "error";
                                        preNoteDate = "quia";
                                        routingNumber = "quis";
                                    }}),
                                    add(new EmployeeAdditionalDirectDeposit() {{
                                        accountNumber = "vitae";
                                        accountType = "laborum";
                                        amount = 6563.3;
                                        amountType = "enim";
                                        blockSpecial = false;
                                        isSkipPreNote = false;
                                        nameOnAccount = "odit";
                                        preNoteDate = "quo";
                                        routingNumber = "sequi";
                                    }}),
                                }};
                                additionalRate = new org.openapis.openapi.models.shared.EmployeeAdditionalRate[]{{
                                    add(new EmployeeAdditionalRate() {{
                                        changeReason = "ipsam";
                                        costCenter1 = "id";
                                        costCenter2 = "possimus";
                                        costCenter3 = "aut";
                                        effectiveDate = "quasi";
                                        endCheckDate = "error";
                                        job = "temporibus";
                                        rate = 6736.6;
                                        rateCode = "quasi";
                                        rateNotes = "reiciendis";
                                        ratePer = "voluptatibus";
                                        shift = "vero";
                                    }}),
                                    add(new EmployeeAdditionalRate() {{
                                        changeReason = "nihil";
                                        costCenter1 = "praesentium";
                                        costCenter2 = "voluptatibus";
                                        costCenter3 = "ipsa";
                                        effectiveDate = "omnis";
                                        endCheckDate = "voluptate";
                                        job = "cum";
                                        rate = 199.87;
                                        rateCode = "doloremque";
                                        rateNotes = "reprehenderit";
                                        ratePer = "ut";
                                        shift = "maiores";
                                    }}),
                                    add(new EmployeeAdditionalRate() {{
                                        changeReason = "dicta";
                                        costCenter1 = "corporis";
                                        costCenter2 = "dolore";
                                        costCenter3 = "iusto";
                                        effectiveDate = "dicta";
                                        endCheckDate = "harum";
                                        job = "enim";
                                        rate = 8804.76;
                                        rateCode = "commodi";
                                        rateNotes = "repudiandae";
                                        ratePer = "quae";
                                        shift = "ipsum";
                                    }}),
                                    add(new EmployeeAdditionalRate() {{
                                        changeReason = "quidem";
                                        costCenter1 = "molestias";
                                        costCenter2 = "excepturi";
                                        costCenter3 = "pariatur";
                                        effectiveDate = "modi";
                                        endCheckDate = "praesentium";
                                        job = "rem";
                                        rate = 9167.23;
                                        rateCode = "quasi";
                                        rateNotes = "repudiandae";
                                        ratePer = "sint";
                                        shift = "veritatis";
                                    }}),
                                }};
                                benefitSetup = new EmployeeBenefitSetup() {{
                                    benefitClass = "itaque";
                                    benefitClassEffectiveDate = "incidunt";
                                    benefitSalary = 3185.69;
                                    benefitSalaryEffectiveDate = "consequatur";
                                    doNotApplyAdministrativePeriod = false;
                                    isMeasureAcaEligibility = false;
                                }};;
                                birthDate = "est";
                                coEmpCode = "quibusdam";
                                companyFEIN = "explicabo";
                                companyName = "deserunt";
                                currency = "distinctio";
                                customBooleanFields = new org.openapis.openapi.models.shared.EmployeeCustomBooleanFields[]{{
                                    add(new EmployeeCustomBooleanFields(EmployeeCustomBooleanFieldsCategoryEnum.PAYROLL_AND_HR, "modi", false) {{
                                        category = EmployeeCustomBooleanFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "labore";
                                        value = false;
                                    }}),
                                    add(new EmployeeCustomBooleanFields(EmployeeCustomBooleanFieldsCategoryEnum.PAYROLL_AND_HR, "aliquid", false) {{
                                        category = EmployeeCustomBooleanFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "qui";
                                        value = false;
                                    }}),
                                    add(new EmployeeCustomBooleanFields(EmployeeCustomBooleanFieldsCategoryEnum.PAYROLL_AND_HR, "quos", false) {{
                                        category = EmployeeCustomBooleanFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "cupiditate";
                                        value = false;
                                    }}),
                                    add(new EmployeeCustomBooleanFields(EmployeeCustomBooleanFieldsCategoryEnum.PAYROLL_AND_HR, "magni", false) {{
                                        category = EmployeeCustomBooleanFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "perferendis";
                                        value = false;
                                    }}),
                                }};
                                customDateFields = new org.openapis.openapi.models.shared.EmployeeCustomDateFields[]{{
                                    add(new EmployeeCustomDateFields(EmployeeCustomDateFieldsCategoryEnum.PAYROLL_AND_HR, "fugit", "dolorum") {{
                                        category = EmployeeCustomDateFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "ipsam";
                                        value = "alias";
                                    }}),
                                    add(new EmployeeCustomDateFields(EmployeeCustomDateFieldsCategoryEnum.PAYROLL_AND_HR, "facilis", "tempore") {{
                                        category = EmployeeCustomDateFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "excepturi";
                                        value = "tempora";
                                    }}),
                                    add(new EmployeeCustomDateFields(EmployeeCustomDateFieldsCategoryEnum.PAYROLL_AND_HR, "eum", "non") {{
                                        category = EmployeeCustomDateFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "labore";
                                        value = "delectus";
                                    }}),
                                    add(new EmployeeCustomDateFields(EmployeeCustomDateFieldsCategoryEnum.PAYROLL_AND_HR, "aliquid", "provident") {{
                                        category = EmployeeCustomDateFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "eligendi";
                                        value = "sint";
                                    }}),
                                }};
                                customDropDownFields = new org.openapis.openapi.models.shared.EmployeeCustomDropDownFields[]{{
                                    add(new EmployeeCustomDropDownFields(EmployeeCustomDropDownFieldsCategoryEnum.PAYROLL_AND_HR, "dolor", "debitis") {{
                                        category = EmployeeCustomDropDownFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "sint";
                                        value = "officia";
                                    }}),
                                    add(new EmployeeCustomDropDownFields(EmployeeCustomDropDownFieldsCategoryEnum.PAYROLL_AND_HR, "in", "in") {{
                                        category = EmployeeCustomDropDownFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "a";
                                        value = "dolorum";
                                    }}),
                                    add(new EmployeeCustomDropDownFields(EmployeeCustomDropDownFieldsCategoryEnum.PAYROLL_AND_HR, "rerum", "dicta") {{
                                        category = EmployeeCustomDropDownFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "illum";
                                        value = "maiores";
                                    }}),
                                    add(new EmployeeCustomDropDownFields(EmployeeCustomDropDownFieldsCategoryEnum.PAYROLL_AND_HR, "facere", "ea") {{
                                        category = EmployeeCustomDropDownFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "magnam";
                                        value = "cumque";
                                    }}),
                                }};
                                customNumberFields = new org.openapis.openapi.models.shared.EmployeeCustomNumberFields[]{{
                                    add(new EmployeeCustomNumberFields(EmployeeCustomNumberFieldsCategoryEnum.PAYROLL_AND_HR, "non", 5812.73) {{
                                        category = EmployeeCustomNumberFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "laborum";
                                        value = 8811.04;
                                    }}),
                                    add(new EmployeeCustomNumberFields(EmployeeCustomNumberFieldsCategoryEnum.PAYROLL_AND_HR, "delectus", 6925.32) {{
                                        category = EmployeeCustomNumberFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "enim";
                                        value = 8817.36;
                                    }}),
                                }};
                                customTextFields = new org.openapis.openapi.models.shared.EmployeeCustomTextFields[]{{
                                    add(new EmployeeCustomTextFields(EmployeeCustomTextFieldsCategoryEnum.PAYROLL_AND_HR, "blanditiis", "deleniti") {{
                                        category = EmployeeCustomTextFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "nam";
                                        value = "id";
                                    }}),
                                    add(new EmployeeCustomTextFields(EmployeeCustomTextFieldsCategoryEnum.PAYROLL_AND_HR, "deserunt", "nisi") {{
                                        category = EmployeeCustomTextFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "sapiente";
                                        value = "amet";
                                    }}),
                                    add(new EmployeeCustomTextFields(EmployeeCustomTextFieldsCategoryEnum.PAYROLL_AND_HR, "omnis", "molestiae") {{
                                        category = EmployeeCustomTextFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "vel";
                                        value = "natus";
                                    }}),
                                }};
                                departmentPosition = new EmployeeDepartmentPosition() {{
                                    changeReason = "perferendis";
                                    clockBadgeNumber = "nihil";
                                    costCenter1 = "magnam";
                                    costCenter2 = "distinctio";
                                    costCenter3 = "id";
                                    effectiveDate = "labore";
                                    employeeType = "labore";
                                    equalEmploymentOpportunityClass = "suscipit";
                                    isMinimumWageExempt = false;
                                    isOvertimeExempt = false;
                                    isSupervisorReviewer = false;
                                    isUnionDuesCollected = false;
                                    isUnionInitiationCollected = false;
                                    jobTitle = "Customer Mobility Administrator";
                                    payGroup = "vero";
                                    positionCode = "aspernatur";
                                    reviewerCompanyNumber = "architecto";
                                    reviewerEmployeeId = "magnam";
                                    shift = "et";
                                    supervisorCompanyNumber = "excepturi";
                                    supervisorEmployeeId = "ullam";
                                    tipped = "provident";
                                    unionAffiliationDate = "quos";
                                    unionCode = "sint";
                                    unionPosition = "accusantium";
                                    workersCompensation = "mollitia";
                                }};;
                                disabilityDescription = "reiciendis";
                                emergencyContacts = new org.openapis.openapi.models.shared.EmployeeEmergencyContacts[]{{
                                    add(new EmployeeEmergencyContacts("pariatur", "accusantium") {{
                                        address1 = "ad";
                                        address2 = "eum";
                                        city = "Fort Brown";
                                        country = "Guinea-Bissau";
                                        county = "quasi";
                                        email = "Wilton80@yahoo.com";
                                        firstName = "Kaitlyn";
                                        homePhone = "facilis";
                                        lastName = "King";
                                        mobilePhone = "architecto";
                                        notes = "architecto";
                                        pager = "repudiandae";
                                        primaryPhone = "ullam";
                                        priority = "expedita";
                                        relationship = "nihil";
                                        state = "repellat";
                                        syncEmployeeInfo = false;
                                        workExtension = "quibusdam";
                                        workPhone = "sed";
                                        zip = "saepe";
                                    }}),
                                    add(new EmployeeEmergencyContacts("perferendis", "fugiat") {{
                                        address1 = "consequuntur";
                                        address2 = "praesentium";
                                        city = "Cummerataland";
                                        country = "Sao Tome and Principe";
                                        county = "illum";
                                        email = "Raegan.Jenkins@hotmail.com";
                                        firstName = "Gwendolyn";
                                        homePhone = "accusantium";
                                        lastName = "Bernhard";
                                        mobilePhone = "maiores";
                                        notes = "quidem";
                                        pager = "ipsam";
                                        primaryPhone = "voluptate";
                                        priority = "autem";
                                        relationship = "nam";
                                        state = "eaque";
                                        syncEmployeeInfo = false;
                                        workExtension = "pariatur";
                                        workPhone = "nemo";
                                        zip = "voluptatibus";
                                    }}),
                                    add(new EmployeeEmergencyContacts("facilis", "perspiciatis") {{
                                        address1 = "amet";
                                        address2 = "aut";
                                        city = "Hesselshire";
                                        country = "Romania";
                                        county = "nobis";
                                        email = "Eulalia.Lebsack@gmail.com";
                                        firstName = "Eulah";
                                        homePhone = "nesciunt";
                                        lastName = "Daugherty";
                                        mobilePhone = "perferendis";
                                        notes = "dolores";
                                        pager = "minus";
                                        primaryPhone = "quam";
                                        priority = "dolor";
                                        relationship = "vero";
                                        state = "nostrum";
                                        syncEmployeeInfo = false;
                                        workExtension = "hic";
                                        workPhone = "recusandae";
                                        zip = "omnis";
                                    }}),
                                }};
                                employeeId = "voluptatem";
                                ethnicity = "porro";
                                federalTax = new EmployeeFederalTax() {{
                                    amount = 1646.94;
                                    deductionsAmount = 5000.26;
                                    dependentsAmount = 6214.79;
                                    exemptions = 503.7;
                                    filingStatus = "occaecati";
                                    higherRate = false;
                                    otherIncomeAmount = 6990.98;
                                    percentage = 2378.93;
                                    taxCalculationCode = "asperiores";
                                    w4FormYear = 934214L;
                                }};;
                                firstName = "Dolly";
                                gender = "male";
                                homeAddress = new EmployeeHomeAddress() {{
                                    address1 = "dolorum";
                                    address2 = "deleniti";
                                    city = "Murrieta";
                                    country = "Saint Kitts and Nevis";
                                    county = "libero";
                                    emailAddress = "delectus";
                                    mobilePhone = "quaerat";
                                    phone = "522-312-9574 x4926";
                                    postalCode = "00044";
                                    state = "quaerat";
                                }};;
                                isHighlyCompensated = false;
                                isSmoker = false;
                                lastName = "Thompson";
                                localTax = new org.openapis.openapi.models.shared.EmployeeLocalTax[]{{
                                    add(new EmployeeLocalTax() {{
                                        exemptions = 9764.05;
                                        exemptions2 = 3777.52;
                                        filingStatus = "natus";
                                        residentPSD = "eos";
                                        taxCode = "atque";
                                        workPSD = "sit";
                                    }}),
                                    add(new EmployeeLocalTax() {{
                                        exemptions = 8546.14;
                                        exemptions2 = 672.49;
                                        filingStatus = "soluta";
                                        residentPSD = "dolorum";
                                        taxCode = "iusto";
                                        workPSD = "voluptate";
                                    }}),
                                    add(new EmployeeLocalTax() {{
                                        exemptions = 6770.82;
                                        exemptions2 = 5365.79;
                                        filingStatus = "omnis";
                                        residentPSD = "necessitatibus";
                                        taxCode = "distinctio";
                                        workPSD = "asperiores";
                                    }}),
                                }};
                                mainDirectDeposit = new EmployeeMainDirectDeposit() {{
                                    accountNumber = "nihil";
                                    accountType = "ipsum";
                                    blockSpecial = false;
                                    isSkipPreNote = false;
                                    nameOnAccount = "voluptate";
                                    preNoteDate = "id";
                                    routingNumber = "saepe";
                                }};;
                                maritalStatus = "eius";
                                middleName = "aspernatur";
                                nonPrimaryStateTax = new EmployeeNonPrimaryStateTax() {{
                                    amount = 206.51;
                                    deductionsAmount = 2292.19;
                                    dependentsAmount = 7583.79;
                                    exemptions = 8815.86;
                                    exemptions2 = 3200.17;
                                    filingStatus = "saepe";
                                    higherRate = false;
                                    otherIncomeAmount = 3834.64;
                                    percentage = 6457.85;
                                    reciprocityCode = "provident";
                                    specialCheckCalc = "minima";
                                    taxCalculationCode = "repellendus";
                                    taxCode = "totam";
                                    w4FormYear = 628982L;
                                }};;
                                ownerPercent = 0.55;
                                preferredName = "at";
                                primaryPayRate = new EmployeePrimaryPayRate() {{
                                    annualSalary = 3118.6;
                                    baseRate = 2735.42;
                                    beginCheckDate = "vel";
                                    changeReason = "quod";
                                    defaultHours = 8853.38;
                                    effectiveDate = "qui";
                                    isAutoPay = false;
                                    payFrequency = "dolorum";
                                    payGrade = "a";
                                    payRateNote = "esse";
                                    payType = "harum";
                                    ratePer = "iusto";
                                    salary = 2155.07;
                                }};;
                                primaryStateTax = new EmployeePrimaryStateTax() {{
                                    amount = 7887.4;
                                    deductionsAmount = 9473.71;
                                    dependentsAmount = 2294.42;
                                    exemptions = 7308.56;
                                    exemptions2 = 8802.98;
                                    filingStatus = "numquam";
                                    higherRate = false;
                                    otherIncomeAmount = 3136.92;
                                    percentage = 2133.12;
                                    specialCheckCalc = "sapiente";
                                    taxCalculationCode = "totam";
                                    taxCode = "nihil";
                                    w4FormYear = 25662L;
                                }};;
                                priorLastName = "expedita";
                                salutation = "neque";
                                ssn = "sed";
                                status = new EmployeeStatus() {{
                                    adjustedSeniorityDate = "vel";
                                    changeReason = "libero";
                                    effectiveDate = "voluptas";
                                    employeeStatus = "deserunt";
                                    hireDate = "quam";
                                    isEligibleForRehire = false;
                                    reHireDate = "ipsum";
                                    statusType = "incidunt";
                                    terminationDate = "qui";
                                }};;
                                suffix = "cupiditate";
                                taxSetup = new EmployeeTaxSetup() {{
                                    fitwExemptNotes = "maxime";
                                    fitwExemptReason = "pariatur";
                                    futaExemptNotes = "soluta";
                                    futaExemptReason = "dicta";
                                    isEmployee943 = false;
                                    isPension = false;
                                    isStatutory = false;
                                    medExemptNotes = "laborum";
                                    medExemptReason = "totam";
                                    sitwExemptNotes = "incidunt";
                                    sitwExemptReason = "aspernatur";
                                    ssExemptNotes = "dolores";
                                    ssExemptReason = "distinctio";
                                    suiExemptNotes = "facilis";
                                    suiExemptReason = "aliquid";
                                    suiState = "quam";
                                    taxDistributionCode1099R = "molestias";
                                    taxForm = "temporibus";
                                }};;
                                veteranDescription = "qui";
                                webTime = new EmployeeWebTime() {{
                                    badgeNumber = "neque";
                                    chargeRate = 1448.47;
                                    isTimeLaborEnabled = false;
                                }};;
                                workAddress = new EmployeeWorkAddress() {{
                                    address1 = "magni";
                                    address2 = "odio";
                                    city = "West Mireyashire";
                                    country = "Antarctica (the territory South of 60 deg S)";
                                    county = "cumque";
                                    emailAddress = "soluta";
                                    location = "nobis";
                                    mailStop = "et";
                                    mobilePhone = "saepe";
                                    pager = "ipsum";
                                    phone = "(757) 609-2222";
                                    phoneExtension = "dolorum";
                                    postalCode = "00590";
                                    state = "est";
                                }};;
                                workEligibility = new EmployeeWorkEligibility() {{
                                    alienOrAdmissionDocumentNumber = "repellendus";
                                    attestedDate = "porro";
                                    countryOfIssuance = "doloribus";
                                    foreignPassportNumber = "ut";
                                    i94AdmissionNumber = "facilis";
                                    i9DateVerified = "cupiditate";
                                    i9Notes = "qui";
                                    isI9Verified = false;
                                    isSsnVerified = false;
                                    ssnDateVerified = "quae";
                                    ssnNotes = "laudantium";
                                    visaType = "odio";
                                    workAuthorization = "occaecati";
                                    workUntil = "voluptatibus";
                                }};;
                            }};);            

            AddEmployeeResponse res = sdk.employee.addEmployee(req, new AddEmployeeSecurity("quisquam") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.employeeIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllEmployees

Get All Employees API will return employee data currently available in Web Pay.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllEmployeesRequest;
import org.openapis.openapi.models.operations.GetAllEmployeesResponse;
import org.openapis.openapi.models.operations.GetAllEmployeesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllEmployeesRequest req = new GetAllEmployeesRequest("vero") {{
                includetotalcount = false;
                pagenumber = 606476L;
                pagesize = 338159L;
            }};            

            GetAllEmployeesResponse res = sdk.employee.getAllEmployees(req, new GetAllEmployeesSecurity("ipsum") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.employeeInfos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployee

Get Employee API will return employee data currently available in Web Pay.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployeeRequest;
import org.openapis.openapi.models.operations.GetEmployeeResponse;
import org.openapis.openapi.models.operations.GetEmployeeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployeeRequest req = new GetEmployeeRequest("delectus", "voluptate");            

            GetEmployeeResponse res = sdk.employee.getEmployee(req, new GetEmployeeSecurity("consectetur") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.employee != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEmployee

Update Employee API will update existing employee data in WebPay.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEmployeeRequest;
import org.openapis.openapi.models.operations.UpdateEmployeeResponse;
import org.openapis.openapi.models.operations.UpdateEmployeeSecurity;
import org.openapis.openapi.models.shared.Employee;
import org.openapis.openapi.models.shared.EmployeeAdditionalDirectDeposit;
import org.openapis.openapi.models.shared.EmployeeAdditionalRate;
import org.openapis.openapi.models.shared.EmployeeBenefitSetup;
import org.openapis.openapi.models.shared.EmployeeCustomBooleanFields;
import org.openapis.openapi.models.shared.EmployeeCustomBooleanFieldsCategoryEnum;
import org.openapis.openapi.models.shared.EmployeeCustomDateFields;
import org.openapis.openapi.models.shared.EmployeeCustomDateFieldsCategoryEnum;
import org.openapis.openapi.models.shared.EmployeeCustomDropDownFields;
import org.openapis.openapi.models.shared.EmployeeCustomDropDownFieldsCategoryEnum;
import org.openapis.openapi.models.shared.EmployeeCustomNumberFields;
import org.openapis.openapi.models.shared.EmployeeCustomNumberFieldsCategoryEnum;
import org.openapis.openapi.models.shared.EmployeeCustomTextFields;
import org.openapis.openapi.models.shared.EmployeeCustomTextFieldsCategoryEnum;
import org.openapis.openapi.models.shared.EmployeeDepartmentPosition;
import org.openapis.openapi.models.shared.EmployeeEmergencyContacts;
import org.openapis.openapi.models.shared.EmployeeFederalTax;
import org.openapis.openapi.models.shared.EmployeeHomeAddress;
import org.openapis.openapi.models.shared.EmployeeLocalTax;
import org.openapis.openapi.models.shared.EmployeeMainDirectDeposit;
import org.openapis.openapi.models.shared.EmployeeNonPrimaryStateTax;
import org.openapis.openapi.models.shared.EmployeePrimaryPayRate;
import org.openapis.openapi.models.shared.EmployeePrimaryStateTax;
import org.openapis.openapi.models.shared.EmployeeStatus;
import org.openapis.openapi.models.shared.EmployeeTaxSetup;
import org.openapis.openapi.models.shared.EmployeeWebTime;
import org.openapis.openapi.models.shared.EmployeeWorkAddress;
import org.openapis.openapi.models.shared.EmployeeWorkEligibility;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateEmployeeRequest req = new UpdateEmployeeRequest("vero",                 new Employee() {{
                                additionalDirectDeposit = new org.openapis.openapi.models.shared.EmployeeAdditionalDirectDeposit[]{{
                                    add(new EmployeeAdditionalDirectDeposit() {{
                                        accountNumber = "dignissimos";
                                        accountType = "hic";
                                        amount = 7155.61;
                                        amountType = "quod";
                                        blockSpecial = false;
                                        isSkipPreNote = false;
                                        nameOnAccount = "odio";
                                        preNoteDate = "similique";
                                        routingNumber = "facilis";
                                    }}),
                                    add(new EmployeeAdditionalDirectDeposit() {{
                                        accountNumber = "vero";
                                        accountType = "ducimus";
                                        amount = 2930.2;
                                        amountType = "quibusdam";
                                        blockSpecial = false;
                                        isSkipPreNote = false;
                                        nameOnAccount = "illum";
                                        preNoteDate = "sequi";
                                        routingNumber = "natus";
                                    }}),
                                    add(new EmployeeAdditionalDirectDeposit() {{
                                        accountNumber = "impedit";
                                        accountType = "aut";
                                        amount = 9742.59;
                                        amountType = "exercitationem";
                                        blockSpecial = false;
                                        isSkipPreNote = false;
                                        nameOnAccount = "nulla";
                                        preNoteDate = "fugit";
                                        routingNumber = "porro";
                                    }}),
                                    add(new EmployeeAdditionalDirectDeposit() {{
                                        accountNumber = "maiores";
                                        accountType = "doloribus";
                                        amount = 4783.7;
                                        amountType = "eligendi";
                                        blockSpecial = false;
                                        isSkipPreNote = false;
                                        nameOnAccount = "ducimus";
                                        preNoteDate = "alias";
                                        routingNumber = "officia";
                                    }}),
                                }};
                                additionalRate = new org.openapis.openapi.models.shared.EmployeeAdditionalRate[]{{
                                    add(new EmployeeAdditionalRate() {{
                                        changeReason = "ipsam";
                                        costCenter1 = "ea";
                                        costCenter2 = "aspernatur";
                                        costCenter3 = "vel";
                                        effectiveDate = "possimus";
                                        endCheckDate = "magnam";
                                        job = "ratione";
                                        rate = 4011.32;
                                        rateCode = "laudantium";
                                        rateNotes = "dicta";
                                        ratePer = "dolor";
                                        shift = "maiores";
                                    }}),
                                    add(new EmployeeAdditionalRate() {{
                                        changeReason = "quasi";
                                        costCenter1 = "ex";
                                        costCenter2 = "nulla";
                                        costCenter3 = "excepturi";
                                        effectiveDate = "voluptatibus";
                                        endCheckDate = "nostrum";
                                        job = "sapiente";
                                        rate = 7888.73;
                                        rateCode = "saepe";
                                        rateNotes = "ea";
                                        ratePer = "impedit";
                                        shift = "corporis";
                                    }}),
                                }};
                                benefitSetup = new EmployeeBenefitSetup() {{
                                    benefitClass = "veniam";
                                    benefitClassEffectiveDate = "aliquid";
                                    benefitSalary = 811.01;
                                    benefitSalaryEffectiveDate = "magnam";
                                    doNotApplyAdministrativePeriod = false;
                                    isMeasureAcaEligibility = false;
                                }};;
                                birthDate = "ea";
                                coEmpCode = "quo";
                                companyFEIN = "consectetur";
                                companyName = "recusandae";
                                currency = "aspernatur";
                                customBooleanFields = new org.openapis.openapi.models.shared.EmployeeCustomBooleanFields[]{{
                                    add(new EmployeeCustomBooleanFields(EmployeeCustomBooleanFieldsCategoryEnum.PAYROLL_AND_HR, "a", false) {{
                                        category = EmployeeCustomBooleanFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "eaque";
                                        value = false;
                                    }}),
                                    add(new EmployeeCustomBooleanFields(EmployeeCustomBooleanFieldsCategoryEnum.PAYROLL_AND_HR, "aut", false) {{
                                        category = EmployeeCustomBooleanFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "libero";
                                        value = false;
                                    }}),
                                }};
                                customDateFields = new org.openapis.openapi.models.shared.EmployeeCustomDateFields[]{{
                                    add(new EmployeeCustomDateFields(EmployeeCustomDateFieldsCategoryEnum.PAYROLL_AND_HR, "aliquam", "fugit") {{
                                        category = EmployeeCustomDateFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "deleniti";
                                        value = "impedit";
                                    }}),
                                }};
                                customDropDownFields = new org.openapis.openapi.models.shared.EmployeeCustomDropDownFields[]{{
                                    add(new EmployeeCustomDropDownFields(EmployeeCustomDropDownFieldsCategoryEnum.PAYROLL_AND_HR, "et", "dolorum") {{
                                        category = EmployeeCustomDropDownFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "inventore";
                                        value = "non";
                                    }}),
                                    add(new EmployeeCustomDropDownFields(EmployeeCustomDropDownFieldsCategoryEnum.PAYROLL_AND_HR, "velit", "eum") {{
                                        category = EmployeeCustomDropDownFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "laborum";
                                        value = "placeat";
                                    }}),
                                    add(new EmployeeCustomDropDownFields(EmployeeCustomDropDownFieldsCategoryEnum.PAYROLL_AND_HR, "quas", "assumenda") {{
                                        category = EmployeeCustomDropDownFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "autem";
                                        value = "nobis";
                                    }}),
                                    add(new EmployeeCustomDropDownFields(EmployeeCustomDropDownFieldsCategoryEnum.PAYROLL_AND_HR, "libero", "quasi") {{
                                        category = EmployeeCustomDropDownFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "nulla";
                                        value = "voluptas";
                                    }}),
                                }};
                                customNumberFields = new org.openapis.openapi.models.shared.EmployeeCustomNumberFields[]{{
                                    add(new EmployeeCustomNumberFields(EmployeeCustomNumberFieldsCategoryEnum.PAYROLL_AND_HR, "provident", 553.74) {{
                                        category = EmployeeCustomNumberFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "numquam";
                                        value = 1314.82;
                                    }}),
                                    add(new EmployeeCustomNumberFields(EmployeeCustomNumberFieldsCategoryEnum.PAYROLL_AND_HR, "odio", 2621.18) {{
                                        category = EmployeeCustomNumberFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "molestiae";
                                        value = 3015.98;
                                    }}),
                                }};
                                customTextFields = new org.openapis.openapi.models.shared.EmployeeCustomTextFields[]{{
                                    add(new EmployeeCustomTextFields(EmployeeCustomTextFieldsCategoryEnum.PAYROLL_AND_HR, "fuga", "reprehenderit") {{
                                        category = EmployeeCustomTextFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "esse";
                                        value = "rem";
                                    }}),
                                    add(new EmployeeCustomTextFields(EmployeeCustomTextFieldsCategoryEnum.PAYROLL_AND_HR, "ut", "eum") {{
                                        category = EmployeeCustomTextFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "quidem";
                                        value = "fugiat";
                                    }}),
                                }};
                                departmentPosition = new EmployeeDepartmentPosition() {{
                                    changeReason = "suscipit";
                                    clockBadgeNumber = "assumenda";
                                    costCenter1 = "eos";
                                    costCenter2 = "praesentium";
                                    costCenter3 = "quisquam";
                                    effectiveDate = "veritatis";
                                    employeeType = "ipsa";
                                    equalEmploymentOpportunityClass = "id";
                                    isMinimumWageExempt = false;
                                    isOvertimeExempt = false;
                                    isSupervisorReviewer = false;
                                    isUnionDuesCollected = false;
                                    isUnionInitiationCollected = false;
                                    jobTitle = "International Implementation Consultant";
                                    payGroup = "illum";
                                    positionCode = "quo";
                                    reviewerCompanyNumber = "fuga";
                                    reviewerEmployeeId = "eius";
                                    shift = "eos";
                                    supervisorCompanyNumber = "voluptas";
                                    supervisorEmployeeId = "ab";
                                    tipped = "cupiditate";
                                    unionAffiliationDate = "consequatur";
                                    unionCode = "tempora";
                                    unionPosition = "debitis";
                                    workersCompensation = "ipsam";
                                }};;
                                disabilityDescription = "aspernatur";
                                emergencyContacts = new org.openapis.openapi.models.shared.EmployeeEmergencyContacts[]{{
                                    add(new EmployeeEmergencyContacts("consequuntur", "deleniti") {{
                                        address1 = "quo";
                                        address2 = "esse";
                                        city = "Atlanta";
                                        country = "Portugal";
                                        county = "quod";
                                        email = "Arely_Kovacek@yahoo.com";
                                        firstName = "Elna";
                                        homePhone = "odio";
                                        lastName = "Mayert";
                                        mobilePhone = "commodi";
                                        notes = "sapiente";
                                        pager = "dolores";
                                        primaryPhone = "deserunt";
                                        priority = "molestiae";
                                        relationship = "accusantium";
                                        state = "porro";
                                        syncEmployeeInfo = false;
                                        workExtension = "eum";
                                        workPhone = "quas";
                                        zip = "praesentium";
                                    }}),
                                }};
                                employeeId = "fugit";
                                ethnicity = "fuga";
                                federalTax = new EmployeeFederalTax() {{
                                    amount = 6494.63;
                                    deductionsAmount = 2775.96;
                                    dependentsAmount = 5392.24;
                                    exemptions = 1288.6;
                                    filingStatus = "minima";
                                    higherRate = false;
                                    otherIncomeAmount = 3926.76;
                                    percentage = 1470.14;
                                    taxCalculationCode = "sapiente";
                                    w4FormYear = 159870L;
                                }};;
                                firstName = "Cicero";
                                gender = "female";
                                homeAddress = new EmployeeHomeAddress() {{
                                    address1 = "saepe";
                                    address2 = "occaecati";
                                    city = "Audreyport";
                                    country = "Turkey";
                                    county = "accusamus";
                                    emailAddress = "veritatis";
                                    mobilePhone = "esse";
                                    phone = "783-294-6465 x37706";
                                    postalCode = "27107-3924";
                                    state = "blanditiis";
                                }};;
                                isHighlyCompensated = false;
                                isSmoker = false;
                                lastName = "McLaughlin";
                                localTax = new org.openapis.openapi.models.shared.EmployeeLocalTax[]{{
                                    add(new EmployeeLocalTax() {{
                                        exemptions = 8577.23;
                                        exemptions2 = 5578.11;
                                        filingStatus = "esse";
                                        residentPSD = "quasi";
                                        taxCode = "a";
                                        workPSD = "error";
                                    }}),
                                    add(new EmployeeLocalTax() {{
                                        exemptions = 5757.51;
                                        exemptions2 = 8630.23;
                                        filingStatus = "possimus";
                                        residentPSD = "quia";
                                        taxCode = "eveniet";
                                        workPSD = "asperiores";
                                    }}),
                                    add(new EmployeeLocalTax() {{
                                        exemptions = 8155.24;
                                        exemptions2 = 850.01;
                                        filingStatus = "consequuntur";
                                        residentPSD = "quasi";
                                        taxCode = "similique";
                                        workPSD = "culpa";
                                    }}),
                                    add(new EmployeeLocalTax() {{
                                        exemptions = 3984.34;
                                        exemptions2 = 9492.98;
                                        filingStatus = "quae";
                                        residentPSD = "earum";
                                        taxCode = "vel";
                                        workPSD = "in";
                                    }}),
                                }};
                                mainDirectDeposit = new EmployeeMainDirectDeposit() {{
                                    accountNumber = "eius";
                                    accountType = "libero";
                                    blockSpecial = false;
                                    isSkipPreNote = false;
                                    nameOnAccount = "illum";
                                    preNoteDate = "soluta";
                                    routingNumber = "accusantium";
                                }};;
                                maritalStatus = "aliquam";
                                middleName = "sapiente";
                                nonPrimaryStateTax = new EmployeeNonPrimaryStateTax() {{
                                    amount = 1197.71;
                                    deductionsAmount = 3553.69;
                                    dependentsAmount = 4438.79;
                                    exemptions = 3567.07;
                                    exemptions2 = 3917.74;
                                    filingStatus = "aut";
                                    higherRate = false;
                                    otherIncomeAmount = 5318.49;
                                    percentage = 1852.32;
                                    reciprocityCode = "quibusdam";
                                    specialCheckCalc = "ex";
                                    taxCalculationCode = "deleniti";
                                    taxCode = "itaque";
                                    w4FormYear = 680270L;
                                }};;
                                ownerPercent = 996.15;
                                preferredName = "omnis";
                                primaryPayRate = new EmployeePrimaryPayRate() {{
                                    annualSalary = 9453.02;
                                    baseRate = 984.78;
                                    beginCheckDate = "at";
                                    changeReason = "et";
                                    defaultHours = 4541.62;
                                    effectiveDate = "ipsa";
                                    isAutoPay = false;
                                    payFrequency = "minima";
                                    payGrade = "veritatis";
                                    payRateNote = "consectetur";
                                    payType = "adipisci";
                                    ratePer = "iste";
                                    salary = 8395.13;
                                }};;
                                primaryStateTax = new EmployeePrimaryStateTax() {{
                                    amount = 330.74;
                                    deductionsAmount = 5223.71;
                                    dependentsAmount = 156.06;
                                    exemptions = 5130.75;
                                    exemptions2 = 4287.96;
                                    filingStatus = "mollitia";
                                    higherRate = false;
                                    otherIncomeAmount = 680.74;
                                    percentage = 5445.91;
                                    specialCheckCalc = "non";
                                    taxCalculationCode = "voluptatem";
                                    taxCode = "dolor";
                                    w4FormYear = 580152L;
                                }};;
                                priorLastName = "numquam";
                                salutation = "impedit";
                                ssn = "explicabo";
                                status = new EmployeeStatus() {{
                                    adjustedSeniorityDate = "voluptas";
                                    changeReason = "aut";
                                    effectiveDate = "dignissimos";
                                    employeeStatus = "dicta";
                                    hireDate = "maiores";
                                    isEligibleForRehire = false;
                                    reHireDate = "natus";
                                    statusType = "velit";
                                    terminationDate = "voluptatibus";
                                }};;
                                suffix = "voluptas";
                                taxSetup = new EmployeeTaxSetup() {{
                                    fitwExemptNotes = "asperiores";
                                    fitwExemptReason = "aperiam";
                                    futaExemptNotes = "ea";
                                    futaExemptReason = "quaerat";
                                    isEmployee943 = false;
                                    isPension = false;
                                    isStatutory = false;
                                    medExemptNotes = "consequuntur";
                                    medExemptReason = "repellendus";
                                    sitwExemptNotes = "officia";
                                    sitwExemptReason = "maxime";
                                    ssExemptNotes = "dignissimos";
                                    ssExemptReason = "officia";
                                    suiExemptNotes = "asperiores";
                                    suiExemptReason = "nemo";
                                    suiState = "quae";
                                    taxDistributionCode1099R = "quaerat";
                                    taxForm = "porro";
                                }};;
                                veteranDescription = "quod";
                                webTime = new EmployeeWebTime() {{
                                    badgeNumber = "labore";
                                    chargeRate = 704.47;
                                    isTimeLaborEnabled = false;
                                }};;
                                workAddress = new EmployeeWorkAddress() {{
                                    address1 = "adipisci";
                                    address2 = "fuga";
                                    city = "Homenickburgh";
                                    country = "New Caledonia";
                                    county = "est";
                                    emailAddress = "recusandae";
                                    location = "totam";
                                    mailStop = "fugiat";
                                    mobilePhone = "vel";
                                    pager = "ducimus";
                                    phone = "528-774-4398 x3930";
                                    phoneExtension = "cum";
                                    postalCode = "43982";
                                    state = "doloribus";
                                }};;
                                workEligibility = new EmployeeWorkEligibility() {{
                                    alienOrAdmissionDocumentNumber = "suscipit";
                                    attestedDate = "reiciendis";
                                    countryOfIssuance = "quidem";
                                    foreignPassportNumber = "saepe";
                                    i94AdmissionNumber = "necessitatibus";
                                    i9DateVerified = "dolore";
                                    i9Notes = "sunt";
                                    isI9Verified = false;
                                    isSsnVerified = false;
                                    ssnDateVerified = "asperiores";
                                    ssnNotes = "adipisci";
                                    visaType = "non";
                                    workAuthorization = "amet";
                                    workUntil = "beatae";
                                }};;
                            }};, "dignissimos");            

            UpdateEmployeeResponse res = sdk.employee.updateEmployee(req, new UpdateEmployeeSecurity("a") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
