# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/truora.com/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/truora.com/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.CreateBehaviorInput,
  ReportBehaviorResponse
} from "openapi/dist/sdk/models/operations";
import {
  CreateBehaviorInputCountryEnum,
  CreateBehaviorInputDocumentTypeEnum,
  CreateBehaviorInputReasonEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.CreateBehaviorInput = {
  birthDate: "2021-10-25T05:21:43.948Z",
  country: CreateBehaviorInputCountryEnum.Cr,
  documentId: "quibusdam",
  documentType: CreateBehaviorInputDocumentTypeEnum.Name,
  email: "Karley_Stamm@hotmail.com",
  feedbackDate: "2022-03-26T09:37:56.283Z",
  firstName: "Hunter",
  lastName: "Gulgowski",
  phoneNumber: "debitis",
  reason: CreateBehaviorInputReasonEnum.Rape,
};

sdk.behavior.reportBehavior(req).then((res: ReportBehaviorResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### behavior

* `reportBehavior` - Report Behavior

### checks

* `getHealthDashboard` - Get Health Dashboard
* `createCheck` - Create a background check
* `getCheck` - Get Background Check
* `listCheckDetails` - List Check Details
* `listChecks` - List Checks

### continuous

* `getContinuousCheck` - Lists history associated with a Check. It can be paginated
* `listContinuousChecks` - Lists all continuous checks
* `updateContinuousCheck` - Updates a continuous check
* `createContinuousCheck` - Creates a continuous check that will run background checks recurrently according to the frequency provided.
* `getV1ContinuousChecksContinuousCheckIdHistory` - Lists background check logs. It can be paginated


### customType

* `deleteCustomType` - Delete Custom Type
* `updateCustomType` - Update Custom Type
* `createScoreConfig` - Create Score Configurations
* `listScoreConfigs` - List Score Configurations

### hooks

* `createHook` - Creates a hook subscription
* `deletHook` - Deletes hook
* `listHook` - Lists all hooks
* `updateHook` - Updates hook

### pdf

* `createPDF` - Create PDF
* `getPDF` - Get PDF

### reports

* `batchUpload` - Batch Upload
* `createReport` - Create Report
* `getReport` - Get Report
* `listReports` - List Reports
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

