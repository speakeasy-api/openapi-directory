# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddOrUpdateAdditionalRatesRequest;
import org.openapis.openapi.models.operations.AddOrUpdateAdditionalRatesResponse;
import org.openapis.openapi.models.operations.AddOrUpdateAdditionalRatesSecurity;
import org.openapis.openapi.models.shared.AdditionalRate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddOrUpdateAdditionalRatesRequest req = new AddOrUpdateAdditionalRatesRequest(                new AdditionalRate() {{
                                changeReason = "corrupti";
                                costCenter1 = "provident";
                                costCenter2 = "distinctio";
                                costCenter3 = "quibusdam";
                                effectiveDate = "unde";
                                endCheckDate = "nulla";
                                job = "corrupti";
                                rate = 8472.52;
                                rateCode = "vel";
                                rateNotes = "error";
                                ratePer = "deserunt";
                                shift = "suscipit";
                            }};, "iure", "magnam");            

            AddOrUpdateAdditionalRatesResponse res = sdk.additionalRates.addOrUpdateAdditionalRates(req, new AddOrUpdateAdditionalRatesSecurity("debitis") {{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [additionalRates](docs/additionalrates/README.md)

* [addOrUpdateAdditionalRates](docs/additionalrates/README.md#addorupdateadditionalrates) - Add/update additional rates

### [clientCredentials](docs/clientcredentials/README.md)

* [addClientSecret](docs/clientcredentials/README.md#addclientsecret) - Obtain new client secret.

### [companyCodes](docs/companycodes/README.md)

* [getAllCompanyCodesAndDescriptionsByResource](docs/companycodes/README.md#getallcompanycodesanddescriptionsbyresource) - Get All Company Codes

### [companySpecificSchema](docs/companyspecificschema/README.md)

* [getCompanySpecificOpenAPIDocumentation](docs/companyspecificschema/README.md#getcompanyspecificopenapidocumentation) - Get Company-Specific Open API Documentation

### [customFields](docs/customfields/README.md)

* [getAllCustomFieldsByCategory](docs/customfields/README.md#getallcustomfieldsbycategory) - Get All Custom Fields

### [directDeposit](docs/directdeposit/README.md)

* [getAllDirectDeposit](docs/directdeposit/README.md#getalldirectdeposit) - Get All Direct Deposit

### [earnings](docs/earnings/README.md)

* [addOrUpdateAnEmployeeEarning](docs/earnings/README.md#addorupdateanemployeeearning) - Add/Update Earning
* [deleteEarningByEarningCodeAndStartDate](docs/earnings/README.md#deleteearningbyearningcodeandstartdate) - Delete Earning by Earning Code and Start Date
* [getAllEarnings](docs/earnings/README.md#getallearnings) - Get All Earnings
* [getEarningByEarningCodeAndStartDate](docs/earnings/README.md#getearningbyearningcodeandstartdate) - Get Earning by Earning Code and Start Date
* [getEarningsByEarningCode](docs/earnings/README.md#getearningsbyearningcode) - Get Earnings by Earning Code

### [emergencyContacts](docs/emergencycontacts/README.md)

* [addOrUpdateEmergencyContacts](docs/emergencycontacts/README.md#addorupdateemergencycontacts) - Add/update emergency contacts

### [employee](docs/employee/README.md)

* [addEmployee](docs/employee/README.md#addemployee) - Add new employee
* [getAllEmployees](docs/employee/README.md#getallemployees) - Get all employees
* [getEmployee](docs/employee/README.md#getemployee) - Get employee
* [updateEmployee](docs/employee/README.md#updateemployee) - Update employee

### [employeeBenefitSetup](docs/employeebenefitsetup/README.md)

* [updateOrAddEmployeeBenefitSetup](docs/employeebenefitsetup/README.md#updateoraddemployeebenefitsetup) - Add/update employee's benefit setup

### [employeeStaging](docs/employeestaging/README.md)

* [addNewEmployeeToWebLink](docs/employeestaging/README.md#addnewemployeetoweblink) - Add new employee to Web Link

### [localTaxes](docs/localtaxes/README.md)

* [addLocalTax](docs/localtaxes/README.md#addlocaltax) - Add new local tax
* [deleteLocalTaxByTaxCode](docs/localtaxes/README.md#deletelocaltaxbytaxcode) - Delete local tax by tax code
* [getAllLocalTaxes](docs/localtaxes/README.md#getalllocaltaxes) - Get all local taxes
* [getLocalTaxByTaxCode](docs/localtaxes/README.md#getlocaltaxbytaxcode) - Get local taxes by tax code

### [nonPrimaryStateTax](docs/nonprimarystatetax/README.md)

* [addOrUpdateNonPrimaryStateTax](docs/nonprimarystatetax/README.md#addorupdatenonprimarystatetax) - Add/update non-primary state tax

### [payStatements](docs/paystatements/README.md)

* [getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYear](docs/paystatements/README.md#getsemployeepaystatementdetaildatabasedonthespecifiedyear) - Get employee pay statement details data for the specified year.
* [getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDate](docs/paystatements/README.md#getsemployeepaystatementdetaildatabasedonthespecifiedyearandcheckdate) - Get employee pay statement details data for the specified year and check date.
* [getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYear](docs/paystatements/README.md#getsemployeepaystatementsummarydatabasedonthespecifiedyear) - Get employee pay statement summary data for the specified year.
* [getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDate](docs/paystatements/README.md#getsemployeepaystatementsummarydatabasedonthespecifiedyearandcheckdate) - Get employee pay statement summary data for the specified year and check date.

### [primaryStateTax](docs/primarystatetax/README.md)

* [addOrUpdatePrimaryStateTax](docs/primarystatetax/README.md#addorupdateprimarystatetax) - Add/update primary state tax

### [sensitiveData](docs/sensitivedata/README.md)

* [addOrUpdateSensitiveData](docs/sensitivedata/README.md#addorupdatesensitivedata) - Add/update sensitive data
* [getSensitiveData](docs/sensitivedata/README.md#getsensitivedata) - Get sensitive data
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
