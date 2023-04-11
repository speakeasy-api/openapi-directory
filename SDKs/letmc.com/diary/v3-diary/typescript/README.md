# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/letmc.com/diary/v3-diary/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/letmc.com/diary/v3-diary/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CompanyControllerGetBranchesRequest,
  CompanyControllerGetBranchesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CompanyControllerGetBranchesRequest = {
  count: 548814,
  offset: 592845,
  shortName: "distinctio",
};

sdk.companyController.companyControllerGetBranches(req).then((res: CompanyControllerGetBranchesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### companyController

* `companyControllerGetBranches` - All branches defined for a company
* `getV3DiaryShortNameCompanyBranchesBranchID` - Get a specific branch given its unique Object ID (OID)

### diaryController

* `diaryControllerAddFeedbackForm` - Submit appointment feedback
* `diaryControllerAddFeedbackJson` - Submit appointment feedback
* `diaryControllerAddFeedbackRaw` - Submit appointment feedback
* `diaryControllerCancelAppointment` - Cancel an existing appointment using its unique identifier
* `diaryControllerDeleteAppointment` - Delete an existing appointment using its unique identifier
* `diaryControllerGetAllocations` - Get a list of all available allocations for a date + 7 days for a specified appointment type
* `diaryControllerGetAppointment` - Get an appointment by ID
* `diaryControllerGetAppointmentTypes` - A collection of all diary appointment types
* `diaryControllerGetAppointmentsBetweenDates` - A collection of diary appointments linked to a company filtered between specific dates and by appointment type
* `diaryControllerGetRecurringAppointments` - Retrieves all recurring appointments:-
* `diaryControllerPostAppointmentForm` - Post an appointment into a valid diary allocation
* `diaryControllerPostAppointmentJson` - Post an appointment into a valid diary allocation
* `diaryControllerPostAppointmentRaw` - Post an appointment into a valid diary allocation
* `diaryControllerPutAppointmentForm` - Update an existing appointment using its unique identifier
* `diaryControllerPutAppointmentJson` - Update an existing appointment using its unique identifier
* `diaryControllerPutAppointmentRaw` - Update an existing appointment using its unique identifier
* `diaryControllerSearchGuest` - Match Guest Parameters with existing applicants
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

