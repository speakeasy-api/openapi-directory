# employeeStaging

### Available Operations

* [addNewEmployeeToWebLink](#addnewemployeetoweblink) - Add new employee to Web Link

## addNewEmployeeToWebLink

Add new employee to Web Link will send partially completed or potentially erroneous new hire record to Web Link, where it can be corrected and competed by company administrator or authorized Paylocity Service Bureau employee.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddNewEmployeeToWebLinkRequest;
import org.openapis.openapi.models.operations.AddNewEmployeeToWebLinkResponse;
import org.openapis.openapi.models.operations.AddNewEmployeeToWebLinkSecurity;
import org.openapis.openapi.models.shared.StagedEmployee;
import org.openapis.openapi.models.shared.StagedEmployeeAdditionalDirectDeposit;
import org.openapis.openapi.models.shared.StagedEmployeeBenefitSetup;
import org.openapis.openapi.models.shared.StagedEmployeeCustomBooleanFields;
import org.openapis.openapi.models.shared.StagedEmployeeCustomBooleanFieldsCategoryEnum;
import org.openapis.openapi.models.shared.StagedEmployeeCustomDateFields;
import org.openapis.openapi.models.shared.StagedEmployeeCustomDateFieldsCategoryEnum;
import org.openapis.openapi.models.shared.StagedEmployeeCustomDropDownFields;
import org.openapis.openapi.models.shared.StagedEmployeeCustomDropDownFieldsCategoryEnum;
import org.openapis.openapi.models.shared.StagedEmployeeCustomNumberFields;
import org.openapis.openapi.models.shared.StagedEmployeeCustomNumberFieldsCategoryEnum;
import org.openapis.openapi.models.shared.StagedEmployeeCustomTextFields;
import org.openapis.openapi.models.shared.StagedEmployeeCustomTextFieldsCategoryEnum;
import org.openapis.openapi.models.shared.StagedEmployeeDepartmentPosition;
import org.openapis.openapi.models.shared.StagedEmployeeFederalTax;
import org.openapis.openapi.models.shared.StagedEmployeeHomeAddress;
import org.openapis.openapi.models.shared.StagedEmployeeLocalTax;
import org.openapis.openapi.models.shared.StagedEmployeeMainDirectDeposit;
import org.openapis.openapi.models.shared.StagedEmployeeNonPrimaryStateTax;
import org.openapis.openapi.models.shared.StagedEmployeePrimaryPayRate;
import org.openapis.openapi.models.shared.StagedEmployeePrimaryStateTax;
import org.openapis.openapi.models.shared.StagedEmployeeStatus;
import org.openapis.openapi.models.shared.StagedEmployeeWebTime;
import org.openapis.openapi.models.shared.StagedEmployeeWorkAddress;
import org.openapis.openapi.models.shared.StagedEmployeeWorkEligibility;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddNewEmployeeToWebLinkRequest req = new AddNewEmployeeToWebLinkRequest("libero",                 new StagedEmployee() {{
                                additionalDirectDeposit = new org.openapis.openapi.models.shared.StagedEmployeeAdditionalDirectDeposit[]{{
                                    add(new StagedEmployeeAdditionalDirectDeposit() {{
                                        accountNumber = "accusamus";
                                        accountType = "similique";
                                        amount = 2724.37;
                                        amountType = "aspernatur";
                                        isSkipPreNote = false;
                                        preNoteDate = "voluptas";
                                        routingNumber = "voluptas";
                                    }}),
                                }};
                                benefitSetup = new org.openapis.openapi.models.shared.StagedEmployeeBenefitSetup[]{{
                                    add(new StagedEmployeeBenefitSetup() {{
                                        benefitClass = "minima";
                                        benefitClassEffectiveDate = "nobis";
                                        benefitSalary = 6801.16;
                                        benefitSalaryEffectiveDate = "adipisci";
                                        doNotApplyAdministrativePeriod = false;
                                        isMeasureAcaEligibility = false;
                                    }}),
                                    add(new StagedEmployeeBenefitSetup() {{
                                        benefitClass = "minus";
                                        benefitClassEffectiveDate = "dolores";
                                        benefitSalary = 5039.34;
                                        benefitSalaryEffectiveDate = "in";
                                        doNotApplyAdministrativePeriod = false;
                                        isMeasureAcaEligibility = false;
                                    }}),
                                }};
                                birthDate = "dolore";
                                customBooleanFields = new org.openapis.openapi.models.shared.StagedEmployeeCustomBooleanFields[]{{
                                    add(new StagedEmployeeCustomBooleanFields(StagedEmployeeCustomBooleanFieldsCategoryEnum.PAYROLL_AND_HR, "temporibus", false) {{
                                        category = StagedEmployeeCustomBooleanFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "officiis";
                                        value = false;
                                    }}),
                                    add(new StagedEmployeeCustomBooleanFields(StagedEmployeeCustomBooleanFieldsCategoryEnum.PAYROLL_AND_HR, "adipisci", false) {{
                                        category = StagedEmployeeCustomBooleanFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "ullam";
                                        value = false;
                                    }}),
                                }};
                                customDateFields = new org.openapis.openapi.models.shared.StagedEmployeeCustomDateFields[]{{
                                    add(new StagedEmployeeCustomDateFields(StagedEmployeeCustomDateFieldsCategoryEnum.PAYROLL_AND_HR, "hic", "nesciunt") {{
                                        category = StagedEmployeeCustomDateFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "blanditiis";
                                        value = "quas";
                                    }}),
                                    add(new StagedEmployeeCustomDateFields(StagedEmployeeCustomDateFieldsCategoryEnum.PAYROLL_AND_HR, "pariatur", "totam") {{
                                        category = StagedEmployeeCustomDateFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "culpa";
                                        value = "corrupti";
                                    }}),
                                    add(new StagedEmployeeCustomDateFields(StagedEmployeeCustomDateFieldsCategoryEnum.PAYROLL_AND_HR, "nobis", "sit") {{
                                        category = StagedEmployeeCustomDateFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "hic";
                                        value = "exercitationem";
                                    }}),
                                }};
                                customDropDownFields = new org.openapis.openapi.models.shared.StagedEmployeeCustomDropDownFields[]{{
                                    add(new StagedEmployeeCustomDropDownFields(StagedEmployeeCustomDropDownFieldsCategoryEnum.PAYROLL_AND_HR, "explicabo", "asperiores") {{
                                        category = StagedEmployeeCustomDropDownFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "sed";
                                        value = "reiciendis";
                                    }}),
                                    add(new StagedEmployeeCustomDropDownFields(StagedEmployeeCustomDropDownFieldsCategoryEnum.PAYROLL_AND_HR, "expedita", "ab") {{
                                        category = StagedEmployeeCustomDropDownFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "facilis";
                                        value = "voluptate";
                                    }}),
                                    add(new StagedEmployeeCustomDropDownFields(StagedEmployeeCustomDropDownFieldsCategoryEnum.PAYROLL_AND_HR, "laborum", "sed") {{
                                        category = StagedEmployeeCustomDropDownFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "iste";
                                        value = "dolore";
                                    }}),
                                }};
                                customNumberFields = new org.openapis.openapi.models.shared.StagedEmployeeCustomNumberFields[]{{
                                    add(new StagedEmployeeCustomNumberFields(StagedEmployeeCustomNumberFieldsCategoryEnum.PAYROLL_AND_HR, "explicabo", 3783.26) {{
                                        category = StagedEmployeeCustomNumberFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "commodi";
                                        value = 6960.77;
                                    }}),
                                    add(new StagedEmployeeCustomNumberFields(StagedEmployeeCustomNumberFieldsCategoryEnum.PAYROLL_AND_HR, "suscipit", 9602.57) {{
                                        category = StagedEmployeeCustomNumberFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "unde";
                                        value = 1000.32;
                                    }}),
                                }};
                                customTextFields = new org.openapis.openapi.models.shared.StagedEmployeeCustomTextFields[]{{
                                    add(new StagedEmployeeCustomTextFields(StagedEmployeeCustomTextFieldsCategoryEnum.PAYROLL_AND_HR, "perferendis", "corrupti") {{
                                        category = StagedEmployeeCustomTextFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "illo";
                                        value = "reiciendis";
                                    }}),
                                    add(new StagedEmployeeCustomTextFields(StagedEmployeeCustomTextFieldsCategoryEnum.PAYROLL_AND_HR, "sed", "provident") {{
                                        category = StagedEmployeeCustomTextFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "maiores";
                                        value = "incidunt";
                                    }}),
                                    add(new StagedEmployeeCustomTextFields(StagedEmployeeCustomTextFieldsCategoryEnum.PAYROLL_AND_HR, "ipsum", "ea") {{
                                        category = StagedEmployeeCustomTextFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "eius";
                                        value = "necessitatibus";
                                    }}),
                                    add(new StagedEmployeeCustomTextFields(StagedEmployeeCustomTextFieldsCategoryEnum.PAYROLL_AND_HR, "voluptatibus", "tempora") {{
                                        category = StagedEmployeeCustomTextFieldsCategoryEnum.PAYROLL_AND_HR;
                                        label = "occaecati";
                                        value = "quos";
                                    }}),
                                }};
                                departmentPosition = new org.openapis.openapi.models.shared.StagedEmployeeDepartmentPosition[]{{
                                    add(new StagedEmployeeDepartmentPosition() {{
                                        changeReason = "voluptate";
                                        clockBadgeNumber = "reiciendis";
                                        costCenter1 = "ex";
                                        costCenter2 = "sit";
                                        costCenter3 = "non";
                                        effectiveDate = "officiis";
                                        employeeType = "praesentium";
                                        equalEmploymentOpportunityClass = "facilis";
                                        isMinimumWageExempt = false;
                                        isOvertimeExempt = false;
                                        isSupervisorReviewer = false;
                                        isUnionDuesCollected = false;
                                        isUnionInitiationCollected = false;
                                        jobTitle = "Product Response Coordinator";
                                        payGroup = "debitis";
                                        positionCode = "rem";
                                        shift = "sit";
                                        supervisorCompanyNumber = "nobis";
                                        supervisorEmployeeId = "error";
                                        tipped = "veniam";
                                        unionAffiliationDate = "minima";
                                        unionCode = "recusandae";
                                        unionPosition = "reiciendis";
                                        workersCompensation = "nulla";
                                    }}),
                                    add(new StagedEmployeeDepartmentPosition() {{
                                        changeReason = "magni";
                                        clockBadgeNumber = "aperiam";
                                        costCenter1 = "saepe";
                                        costCenter2 = "numquam";
                                        costCenter3 = "veniam";
                                        effectiveDate = "in";
                                        employeeType = "officiis";
                                        equalEmploymentOpportunityClass = "beatae";
                                        isMinimumWageExempt = false;
                                        isOvertimeExempt = false;
                                        isSupervisorReviewer = false;
                                        isUnionDuesCollected = false;
                                        isUnionInitiationCollected = false;
                                        jobTitle = "Central Tactics Analyst";
                                        payGroup = "cum";
                                        positionCode = "laboriosam";
                                        shift = "dolorum";
                                        supervisorCompanyNumber = "voluptatum";
                                        supervisorEmployeeId = "error";
                                        tipped = "hic";
                                        unionAffiliationDate = "expedita";
                                        unionCode = "debitis";
                                        unionPosition = "neque";
                                        workersCompensation = "dolorum";
                                    }}),
                                }};
                                disabilityDescription = "nostrum";
                                employeeId = "officia";
                                ethnicity = "dolorum";
                                federalTax = new org.openapis.openapi.models.shared.StagedEmployeeFederalTax[]{{
                                    add(new StagedEmployeeFederalTax() {{
                                        amount = 8792.35;
                                        deductionsAmount = 2726.83;
                                        dependentsAmount = 5436.78;
                                        exemptions = 1482.68;
                                        filingStatus = "ut";
                                        higherRate = false;
                                        otherIncomeAmount = 8563.03;
                                        percentage = 302.35;
                                        taxCalculationCode = "culpa";
                                        w4FormYear = 710337L;
                                    }}),
                                    add(new StagedEmployeeFederalTax() {{
                                        amount = 2996.43;
                                        deductionsAmount = 78.84;
                                        dependentsAmount = 4602.2;
                                        exemptions = 3726.79;
                                        filingStatus = "sit";
                                        higherRate = false;
                                        otherIncomeAmount = 5305.37;
                                        percentage = 5580.65;
                                        taxCalculationCode = "repudiandae";
                                        w4FormYear = 361151L;
                                    }}),
                                    add(new StagedEmployeeFederalTax() {{
                                        amount = 894.94;
                                        deductionsAmount = 5027.1;
                                        dependentsAmount = 4059.42;
                                        exemptions = 1536.27;
                                        filingStatus = "sit";
                                        higherRate = false;
                                        otherIncomeAmount = 4255.08;
                                        percentage = 3426.11;
                                        taxCalculationCode = "saepe";
                                        w4FormYear = 622231L;
                                    }}),
                                }};
                                firstName = "Addison";
                                fitwExemptReason = "incidunt";
                                futaExemptReason = "reiciendis";
                                gender = "female";
                                homeAddress = new org.openapis.openapi.models.shared.StagedEmployeeHomeAddress[]{{
                                    add(new StagedEmployeeHomeAddress() {{
                                        address1 = "dicta";
                                        address2 = "architecto";
                                        city = "Edythechester";
                                        country = "Maldives";
                                        county = "laborum";
                                        emailAddress = "nam";
                                        mobilePhone = "tenetur";
                                        phone = "1-226-569-5899 x066";
                                        postalCode = "86563";
                                        state = "voluptatem";
                                    }}),
                                    add(new StagedEmployeeHomeAddress() {{
                                        address1 = "quisquam";
                                        address2 = "repudiandae";
                                        city = "New Imaworth";
                                        country = "Macao";
                                        county = "suscipit";
                                        emailAddress = "quidem";
                                        mobilePhone = "maxime";
                                        phone = "(528) 556-8886";
                                        postalCode = "14958";
                                        state = "error";
                                    }}),
                                    add(new StagedEmployeeHomeAddress() {{
                                        address1 = "blanditiis";
                                        address2 = "suscipit";
                                        city = "Mentor";
                                        country = "Mali";
                                        county = "sunt";
                                        emailAddress = "recusandae";
                                        mobilePhone = "dolorum";
                                        phone = "(490) 910-1133 x29539";
                                        postalCode = "58542";
                                        state = "eveniet";
                                    }}),
                                }};
                                isEmployee943 = false;
                                isSmoker = false;
                                lastName = "McClure";
                                localTax = new org.openapis.openapi.models.shared.StagedEmployeeLocalTax[]{{
                                    add(new StagedEmployeeLocalTax() {{
                                        exemptions = 1458.7;
                                        exemptions2 = 6611.18;
                                        filingStatus = "quis";
                                        residentPSD = "reprehenderit";
                                        taxCode = "error";
                                        workPSD = "illo";
                                    }}),
                                }};
                                mainDirectDeposit = new org.openapis.openapi.models.shared.StagedEmployeeMainDirectDeposit[]{{
                                    add(new StagedEmployeeMainDirectDeposit() {{
                                        accountNumber = "quidem";
                                        accountType = "eveniet";
                                        isSkipPreNote = false;
                                        preNoteDate = "non";
                                        routingNumber = "vero";
                                    }}),
                                    add(new StagedEmployeeMainDirectDeposit() {{
                                        accountNumber = "doloremque";
                                        accountType = "iure";
                                        isSkipPreNote = false;
                                        preNoteDate = "ipsa";
                                        routingNumber = "totam";
                                    }}),
                                }};
                                maritalStatus = "quae";
                                medExemptReason = "molestiae";
                                middleName = "eveniet";
                                nonPrimaryStateTax = new org.openapis.openapi.models.shared.StagedEmployeeNonPrimaryStateTax[]{{
                                    add(new StagedEmployeeNonPrimaryStateTax() {{
                                        amount = 7398.84;
                                        deductionsAmount = 4347.61;
                                        dependentsAmount = 8980.63;
                                        exemptions = 1875.52;
                                        exemptions2 = 6725.82;
                                        filingStatus = "distinctio";
                                        higherRate = false;
                                        otherIncomeAmount = 5289.4;
                                        percentage = 5230.06;
                                        reciprocityCode = "aliquam";
                                        specialCheckCalc = "ad";
                                        taxCalculationCode = "repellat";
                                        taxCode = "alias";
                                        w4FormYear = 362189L;
                                    }}),
                                }};
                                preferredName = "perspiciatis";
                                primaryPayRate = new org.openapis.openapi.models.shared.StagedEmployeePrimaryPayRate[]{{
                                    add(new StagedEmployeePrimaryPayRate() {{
                                        baseRate = 6490.78;
                                        changeReason = "voluptas";
                                        defaultHours = 51.89;
                                        effectiveDate = "maiores";
                                        isAutoPay = false;
                                        payFrequency = "reiciendis";
                                        payGrade = "dolores";
                                        payType = "id";
                                        ratePer = "minima";
                                        salary = 2931.44;
                                    }}),
                                    add(new StagedEmployeePrimaryPayRate() {{
                                        baseRate = 6803.49;
                                        changeReason = "nesciunt";
                                        defaultHours = 632.07;
                                        effectiveDate = "recusandae";
                                        isAutoPay = false;
                                        payFrequency = "omnis";
                                        payGrade = "quaerat";
                                        payType = "molestiae";
                                        ratePer = "ex";
                                        salary = 2840;
                                    }}),
                                }};
                                primaryStateTax = new org.openapis.openapi.models.shared.StagedEmployeePrimaryStateTax[]{{
                                    add(new StagedEmployeePrimaryStateTax() {{
                                        amount = 2384.13;
                                        deductionsAmount = 8906.53;
                                        dependentsAmount = 5145.13;
                                        exemptions = 4326.06;
                                        exemptions2 = 3679.27;
                                        filingStatus = "recusandae";
                                        higherRate = false;
                                        otherIncomeAmount = 4565.2;
                                        percentage = 5920.81;
                                        specialCheckCalc = "quis";
                                        taxCalculationCode = "eum";
                                        taxCode = "reiciendis";
                                        w4FormYear = 592780L;
                                    }}),
                                    add(new StagedEmployeePrimaryStateTax() {{
                                        amount = 1334.39;
                                        deductionsAmount = 3545.06;
                                        dependentsAmount = 968.04;
                                        exemptions = 6570.2;
                                        exemptions2 = 3433.92;
                                        filingStatus = "mollitia";
                                        higherRate = false;
                                        otherIncomeAmount = 5910.27;
                                        percentage = 8217.19;
                                        specialCheckCalc = "animi";
                                        taxCalculationCode = "ex";
                                        taxCode = "aliquid";
                                        w4FormYear = 37565L;
                                    }}),
                                    add(new StagedEmployeePrimaryStateTax() {{
                                        amount = 9992.78;
                                        deductionsAmount = 9846.32;
                                        dependentsAmount = 3518.93;
                                        exemptions = 4481.43;
                                        exemptions2 = 7214.07;
                                        filingStatus = "earum";
                                        higherRate = false;
                                        otherIncomeAmount = 6375.83;
                                        percentage = 6720.41;
                                        specialCheckCalc = "placeat";
                                        taxCalculationCode = "modi";
                                        taxCode = "voluptatibus";
                                        w4FormYear = 564064L;
                                    }}),
                                }};
                                priorLastName = "officiis";
                                salutation = "sapiente";
                                sitwExemptReason = "cumque";
                                ssExemptReason = "vitae";
                                ssn = "rerum";
                                status = new org.openapis.openapi.models.shared.StagedEmployeeStatus[]{{
                                    add(new StagedEmployeeStatus() {{
                                        adjustedSeniorityDate = "quis";
                                        changeReason = "inventore";
                                        effectiveDate = "fugit";
                                        employeeStatus = "cumque";
                                        hireDate = "quae";
                                        isEligibleForRehire = false;
                                    }}),
                                    add(new StagedEmployeeStatus() {{
                                        adjustedSeniorityDate = "perferendis";
                                        changeReason = "velit";
                                        effectiveDate = "aspernatur";
                                        employeeStatus = "eum";
                                        hireDate = "eius";
                                        isEligibleForRehire = false;
                                    }}),
                                }};
                                suffix = "rem";
                                suiExemptReason = "at";
                                suiState = "impedit";
                                taxDistributionCode1099R = "eos";
                                taxForm = "sapiente";
                                veteranDescription = "eum";
                                webTime = new StagedEmployeeWebTime() {{
                                    badgeNumber = "dicta";
                                    chargeRate = 3251.18;
                                    isTimeLaborEnabled = false;
                                }};;
                                workAddress = new org.openapis.openapi.models.shared.StagedEmployeeWorkAddress[]{{
                                    add(new StagedEmployeeWorkAddress() {{
                                        address1 = "cupiditate";
                                        address2 = "provident";
                                        city = "Richmond";
                                        country = "United Kingdom";
                                        county = "illum";
                                        emailAddress = "eaque";
                                        mobilePhone = "earum";
                                        pager = "perspiciatis";
                                        phone = "937.521.7616 x88000";
                                        phoneExtension = "ducimus";
                                        postalCode = "53201-9880";
                                        state = "tempora";
                                    }}),
                                }};
                                workEligibility = new org.openapis.openapi.models.shared.StagedEmployeeWorkEligibility[]{{
                                    add(new StagedEmployeeWorkEligibility() {{
                                        alienOrAdmissionDocumentNumber = "molestiae";
                                        attestedDate = "dicta";
                                        countryOfIssuance = "iusto";
                                        foreignPassportNumber = "esse";
                                        i94AdmissionNumber = "praesentium";
                                        i9DateVerified = "maiores";
                                        i9Notes = "reiciendis";
                                        isI9Verified = false;
                                        isSsnVerified = false;
                                        ssnDateVerified = "vel";
                                        ssnNotes = "architecto";
                                        visaType = "fugiat";
                                        workAuthorization = "doloremque";
                                        workUntil = "dicta";
                                    }}),
                                    add(new StagedEmployeeWorkEligibility() {{
                                        alienOrAdmissionDocumentNumber = "odio";
                                        attestedDate = "tempora";
                                        countryOfIssuance = "esse";
                                        foreignPassportNumber = "ex";
                                        i94AdmissionNumber = "consectetur";
                                        i9DateVerified = "aliquid";
                                        i9Notes = "ipsa";
                                        isI9Verified = false;
                                        isSsnVerified = false;
                                        ssnDateVerified = "laborum";
                                        ssnNotes = "sunt";
                                        visaType = "nostrum";
                                        workAuthorization = "fugiat";
                                        workUntil = "expedita";
                                    }}),
                                }};
                            }};);            

            AddNewEmployeeToWebLinkResponse res = sdk.employeeStaging.addNewEmployeeToWebLink(req, new AddNewEmployeeToWebLinkSecurity("aliquid") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.trackingNumberResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
