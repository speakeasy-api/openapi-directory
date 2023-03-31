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

import org.openapis.openapi.models.operations.AddOrUpdateAdditionalRatesSecurity;
import org.openapis.openapi.models.operations.AddOrUpdateAdditionalRatesPathParams;
import org.openapis.openapi.models.operations.AddOrUpdateAdditionalRatesRequest;
import org.openapis.openapi.models.operations.AddOrUpdateAdditionalRatesResponse;
import org.openapis.openapi.models.shared.AdditionalRate;
import org.openapis.openapi.models.shared.SchemePaylocityAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddOrUpdateAdditionalRatesRequest req = new AddOrUpdateAdditionalRatesRequest() {{
                security = new AddOrUpdateAdditionalRatesSecurity() {{
                    paylocityAuth = new SchemePaylocityAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AddOrUpdateAdditionalRatesPathParams() {{
                    companyId = "corrupti";
                    employeeId = "provident";
                }};
                request = new AdditionalRate() {{
                    changeReason = "distinctio";
                    costCenter1 = "quibusdam";
                    costCenter2 = "unde";
                    costCenter3 = "nulla";
                    effectiveDate = "corrupti";
                    endCheckDate = "illum";
                    job = "vel";
                    rate = 6235.64;
                    rateCode = "deserunt";
                    rateNotes = "suscipit";
                    ratePer = "iure";
                    shift = "magnam";
                }};
            }};            

            AddOrUpdateAdditionalRatesResponse res = sdk.additionalRates.addOrUpdateAdditionalRates(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### additionalRates

* `addOrUpdateAdditionalRates` - Add/update additional rates

### clientCredentials

* `addClientSecret` - Obtain new client secret.

### companyCodes

* `getAllCompanyCodesAndDescriptionsByResource` - Get All Company Codes

### companySpecificSchema

* `getCompanySpecificOpenAPIDocumentation` - Get Company-Specific Open API Documentation

### customFields

* `getAllCustomFieldsByCategory` - Get All Custom Fields

### directDeposit

* `getAllDirectDeposit` - Get All Direct Deposit

### earnings

* `addOrUpdateAnEmployeeEarning` - Add/Update Earning
* `deleteEarningByEarningCodeAndStartDate` - Delete Earning by Earning Code and Start Date
* `getAllEarnings` - Get All Earnings
* `getEarningByEarningCodeAndStartDate` - Get Earning by Earning Code and Start Date
* `getEarningsByEarningCode` - Get Earnings by Earning Code

### emergencyContacts

* `addOrUpdateEmergencyContacts` - Add/update emergency contacts

### employee

* `addEmployee` - Add new employee
* `getAllEmployees` - Get all employees
* `getEmployee` - Get employee
* `updateEmployee` - Update employee

### employeeBenefitSetup

* `updateOrAddEmployeeBenefitSetup` - Add/update employee's benefit setup

### employeeStaging

* `addNewEmployeeToWebLink` - Add new employee to Web Link

### localTaxes

* `addLocalTax` - Add new local tax
* `deleteLocalTaxByTaxCode` - Delete local tax by tax code
* `getAllLocalTaxes` - Get all local taxes
* `getLocalTaxByTaxCode` - Get local taxes by tax code

### nonPrimaryStateTax

* `addOrUpdateNonPrimaryStateTax` - Add/update non-primary state tax

### payStatements

* `getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYear` - Get employee pay statement details data for the specified year.
* `getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDate` - Get employee pay statement details data for the specified year and check date.
* `getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYear` - Get employee pay statement summary data for the specified year.
* `getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDate` - Get employee pay statement summary data for the specified year and check date.

### primaryStateTax

* `addOrUpdatePrimaryStateTax` - Add/update primary state tax

### sensitiveData

* `addOrUpdateSensitiveData` - Add/update sensitive data
* `getSensitiveData` - Get sensitive data
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
