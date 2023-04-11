<!-- Start SDK Example Usage -->
```typescript
import {
  BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest,
  BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  CapacityCommitmentEditionEnum,
  CapacityCommitmentPlanEnum,
  CapacityCommitmentRenewalPlanEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  capacityCommitmentInput: {
    edition: CapacityCommitmentEditionEnum.Enterprise,
    failureStatus: {
      code: 715190,
      details: [
        {
          "nulla": "corrupti",
          "illum": "vel",
          "error": "deserunt",
        },
        {
          "iure": "magnam",
          "debitis": "ipsa",
        },
        {
          "tempora": "suscipit",
          "molestiae": "minus",
          "placeat": "voluptatum",
          "iusto": "excepturi",
        },
        {
          "recusandae": "temporibus",
          "ab": "quis",
        },
      ],
      message: "veritatis",
    },
    multiRegionAuxiliary: false,
    plan: CapacityCommitmentPlanEnum.Annual,
    renewalPlan: CapacityCommitmentRenewalPlanEnum.CommitmentPlanUnspecified,
    slotCount: "ipsam",
  },
  accessToken: "repellendus",
  alt: AltEnum.Proto,
  callback: "quo",
  capacityCommitmentId: "odit",
  enforceSingleAdminProjectPerOrg: false,
  fields: "at",
  key: "at",
  oauthToken: "maiores",
  parent: "molestiae",
  prettyPrint: false,
  quotaUser: "quod",
  uploadType: "quod",
  uploadProtocol: "esse",
};

sdk.projects.bigqueryreservationProjectsLocationsCapacityCommitmentsCreate(req).then((res: BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->