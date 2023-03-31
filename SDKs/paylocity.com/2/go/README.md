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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AddOrUpdateAdditionalRatesRequest{
        AdditionalRate: shared.AdditionalRate{
            ChangeReason: "corrupti",
            CostCenter1: "provident",
            CostCenter2: "distinctio",
            CostCenter3: "quibusdam",
            EffectiveDate: "unde",
            EndCheckDate: "nulla",
            Job: "corrupti",
            Rate: 8472.52,
            RateCode: "vel",
            RateNotes: "error",
            RatePer: "deserunt",
            Shift: "suscipit",
        },
        CompanyID: "iure",
        EmployeeID: "magnam",
    }

    ctx := context.Background()
    res, err := s.AdditionalRates.AddOrUpdateAdditionalRates(ctx, req, operations.AddOrUpdateAdditionalRatesSecurity{
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


### AdditionalRates

* `AddOrUpdateAdditionalRates` - Add/update additional rates

### ClientCredentials

* `AddClientSecret` - Obtain new client secret.

### CompanyCodes

* `GetAllCompanyCodesAndDescriptionsByResource` - Get All Company Codes

### CompanySpecificSchema

* `GetCompanySpecificOpenAPIDocumentation` - Get Company-Specific Open API Documentation

### CustomFields

* `GetAllCustomFieldsByCategory` - Get All Custom Fields

### DirectDeposit

* `GetAllDirectDeposit` - Get All Direct Deposit

### Earnings

* `AddOrUpdateAnEmployeeEarning` - Add/Update Earning
* `DeleteEarningByEarningCodeAndStartDate` - Delete Earning by Earning Code and Start Date
* `GetAllEarnings` - Get All Earnings
* `GetEarningByEarningCodeAndStartDate` - Get Earning by Earning Code and Start Date
* `GetEarningsByEarningCode` - Get Earnings by Earning Code

### EmergencyContacts

* `AddOrUpdateEmergencyContacts` - Add/update emergency contacts

### Employee

* `AddEmployee` - Add new employee
* `GetAllEmployees` - Get all employees
* `GetEmployee` - Get employee
* `UpdateEmployee` - Update employee

### EmployeeBenefitSetup

* `UpdateOrAddEmployeeBenefitSetup` - Add/update employee's benefit setup

### EmployeeStaging

* `AddNewEmployeeToWebLink` - Add new employee to Web Link

### LocalTaxes

* `AddLocalTax` - Add new local tax
* `DeleteLocalTaxByTaxCode` - Delete local tax by tax code
* `GetAllLocalTaxes` - Get all local taxes
* `GetLocalTaxByTaxCode` - Get local taxes by tax code

### NonPrimaryStateTax

* `AddOrUpdateNonPrimaryStateTax` - Add/update non-primary state tax

### PayStatements

* `GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYear` - Get employee pay statement details data for the specified year.
* `GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDate` - Get employee pay statement details data for the specified year and check date.
* `GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYear` - Get employee pay statement summary data for the specified year.
* `GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDate` - Get employee pay statement summary data for the specified year and check date.

### PrimaryStateTax

* `AddOrUpdatePrimaryStateTax` - Add/update primary state tax

### SensitiveData

* `AddOrUpdateSensitiveData` - Add/update sensitive data
* `GetSensitiveData` - Get sensitive data
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
