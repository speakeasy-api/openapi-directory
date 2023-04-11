# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/letmc.com/maintenance/v3-maintenance/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/letmc.com/maintenance/v3-maintenance/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  MaintenanceControllerCreateMaintenanceJobFormRequest,
  MaintenanceControllerCreateMaintenanceJobFormResponse
} from "openapi/dist/sdk/models/operations";
import {
  MaintenanceIssueModelIssuePriorityEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: MaintenanceControllerCreateMaintenanceJobFormRequest = {
  maintenanceIssueModel: {
    documents: [
      {
        mimeType: "provident",
        url: "distinctio",
      },
      {
        mimeType: "quibusdam",
        url: "unde",
      },
      {
        mimeType: "nulla",
        url: "corrupti",
      },
    ],
    externalID: "illum",
    issueFault: "vel",
    issueNotes: "error",
    issuePriority: MaintenanceIssueModelIssuePriorityEnum.Medium,
    issueTitle: "suscipit",
    propertyAddress1: "iure",
    propertyAddress2: "magnam",
    propertyAddress3: "debitis",
    propertyAddress4: "ipsa",
    propertyCountry: "delectus",
    propertyPostcode: "tempora",
    reportedAt: "2022-07-10T15:39:12.517Z",
    tenantEMailAddress: "minus",
    tenantForename: "placeat",
    tenantPhonePrimary: "voluptatum",
    tenantPhoneSecondary: "iusto",
    tenantPresenceRequested: false,
    tenantSurname: "excepturi",
    tenantTitle: "nisi",
  },
  branchID: "recusandae",
  shortName: "temporibus",
};

sdk.maintenanceController.maintenanceControllerCreateMaintenanceJobForm(req).then((res: MaintenanceControllerCreateMaintenanceJobFormResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### maintenanceController

* `maintenanceControllerCreateMaintenanceJobForm` - Create a maintenance job for a specific branch
* `maintenanceControllerCreateMaintenanceJobJson` - Create a maintenance job for a specific branch
* `maintenanceControllerCreateMaintenanceJobRaw` - Create a maintenance job for a specific branch
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

