# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/paylocity.com/2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AdditionalRates.AddOrUpdateAdditionalRates(ctx, operations.AddOrUpdateAdditionalRatesRequest{
        AdditionalRate: shared.AdditionalRate{
            ChangeReason: sdk.String("corrupti"),
            CostCenter1: sdk.String("provident"),
            CostCenter2: sdk.String("distinctio"),
            CostCenter3: sdk.String("quibusdam"),
            EffectiveDate: sdk.String("unde"),
            EndCheckDate: sdk.String("nulla"),
            Job: sdk.String("corrupti"),
            Rate: sdk.Float64(8472.52),
            RateCode: sdk.String("vel"),
            RateNotes: sdk.String("error"),
            RatePer: sdk.String("deserunt"),
            Shift: sdk.String("suscipit"),
        },
        CompanyID: "iure",
        EmployeeID: "magnam",
    }, operations.AddOrUpdateAdditionalRatesSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AdditionalRates](docs/additionalrates/README.md)

* [AddOrUpdateAdditionalRates](docs/additionalrates/README.md#addorupdateadditionalrates) - Add/update additional rates

### [ClientCredentials](docs/clientcredentials/README.md)

* [AddClientSecret](docs/clientcredentials/README.md#addclientsecret) - Obtain new client secret.

### [CompanyCodes](docs/companycodes/README.md)

* [GetAllCompanyCodesAndDescriptionsByResource](docs/companycodes/README.md#getallcompanycodesanddescriptionsbyresource) - Get All Company Codes

### [CompanySpecificSchema](docs/companyspecificschema/README.md)

* [GetCompanySpecificOpenAPIDocumentation](docs/companyspecificschema/README.md#getcompanyspecificopenapidocumentation) - Get Company-Specific Open API Documentation

### [CustomFields](docs/customfields/README.md)

* [GetAllCustomFieldsByCategory](docs/customfields/README.md#getallcustomfieldsbycategory) - Get All Custom Fields

### [DirectDeposit](docs/directdeposit/README.md)

* [GetAllDirectDeposit](docs/directdeposit/README.md#getalldirectdeposit) - Get All Direct Deposit

### [Earnings](docs/earnings/README.md)

* [AddOrUpdateAnEmployeeEarning](docs/earnings/README.md#addorupdateanemployeeearning) - Add/Update Earning
* [DeleteEarningByEarningCodeAndStartDate](docs/earnings/README.md#deleteearningbyearningcodeandstartdate) - Delete Earning by Earning Code and Start Date
* [GetAllEarnings](docs/earnings/README.md#getallearnings) - Get All Earnings
* [GetEarningByEarningCodeAndStartDate](docs/earnings/README.md#getearningbyearningcodeandstartdate) - Get Earning by Earning Code and Start Date
* [GetEarningsByEarningCode](docs/earnings/README.md#getearningsbyearningcode) - Get Earnings by Earning Code

### [EmergencyContacts](docs/emergencycontacts/README.md)

* [AddOrUpdateEmergencyContacts](docs/emergencycontacts/README.md#addorupdateemergencycontacts) - Add/update emergency contacts

### [Employee](docs/employee/README.md)

* [AddEmployee](docs/employee/README.md#addemployee) - Add new employee
* [GetAllEmployees](docs/employee/README.md#getallemployees) - Get all employees
* [GetEmployee](docs/employee/README.md#getemployee) - Get employee
* [UpdateEmployee](docs/employee/README.md#updateemployee) - Update employee

### [EmployeeBenefitSetup](docs/employeebenefitsetup/README.md)

* [UpdateOrAddEmployeeBenefitSetup](docs/employeebenefitsetup/README.md#updateoraddemployeebenefitsetup) - Add/update employee's benefit setup

### [EmployeeStaging](docs/employeestaging/README.md)

* [AddNewEmployeeToWebLink](docs/employeestaging/README.md#addnewemployeetoweblink) - Add new employee to Web Link

### [LocalTaxes](docs/localtaxes/README.md)

* [AddLocalTax](docs/localtaxes/README.md#addlocaltax) - Add new local tax
* [DeleteLocalTaxByTaxCode](docs/localtaxes/README.md#deletelocaltaxbytaxcode) - Delete local tax by tax code
* [GetAllLocalTaxes](docs/localtaxes/README.md#getalllocaltaxes) - Get all local taxes
* [GetLocalTaxByTaxCode](docs/localtaxes/README.md#getlocaltaxbytaxcode) - Get local taxes by tax code

### [NonPrimaryStateTax](docs/nonprimarystatetax/README.md)

* [AddOrUpdateNonPrimaryStateTax](docs/nonprimarystatetax/README.md#addorupdatenonprimarystatetax) - Add/update non-primary state tax

### [PayStatements](docs/paystatements/README.md)

* [GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYear](docs/paystatements/README.md#getsemployeepaystatementdetaildatabasedonthespecifiedyear) - Get employee pay statement details data for the specified year.
* [GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDate](docs/paystatements/README.md#getsemployeepaystatementdetaildatabasedonthespecifiedyearandcheckdate) - Get employee pay statement details data for the specified year and check date.
* [GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYear](docs/paystatements/README.md#getsemployeepaystatementsummarydatabasedonthespecifiedyear) - Get employee pay statement summary data for the specified year.
* [GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDate](docs/paystatements/README.md#getsemployeepaystatementsummarydatabasedonthespecifiedyearandcheckdate) - Get employee pay statement summary data for the specified year and check date.

### [PrimaryStateTax](docs/primarystatetax/README.md)

* [AddOrUpdatePrimaryStateTax](docs/primarystatetax/README.md#addorupdateprimarystatetax) - Add/update primary state tax

### [SensitiveData](docs/sensitivedata/README.md)

* [AddOrUpdateSensitiveData](docs/sensitivedata/README.md#addorupdatesensitivedata) - Add/update sensitive data
* [GetSensitiveData](docs/sensitivedata/README.md#getsensitivedata) - Get sensitive data
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
