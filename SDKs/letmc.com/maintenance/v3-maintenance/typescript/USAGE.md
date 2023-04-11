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