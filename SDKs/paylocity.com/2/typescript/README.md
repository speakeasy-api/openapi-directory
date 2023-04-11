# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/paylocity.com/2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/paylocity.com/2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AddOrUpdateAdditionalRatesRequest,
  AddOrUpdateAdditionalRatesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AddOrUpdateAdditionalRatesRequest = {
  additionalRate: {
    changeReason: "corrupti",
    costCenter1: "provident",
    costCenter2: "distinctio",
    costCenter3: "quibusdam",
    effectiveDate: "unde",
    endCheckDate: "nulla",
    job: "corrupti",
    rate: 8472.52,
    rateCode: "vel",
    rateNotes: "error",
    ratePer: "deserunt",
    shift: "suscipit",
  },
  companyId: "iure",
  employeeId: "magnam",
};

sdk.additionalRates.addOrUpdateAdditionalRates(req).then((res: AddOrUpdateAdditionalRatesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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

