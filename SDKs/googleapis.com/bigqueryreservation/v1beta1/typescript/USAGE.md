<!-- Start SDK Example Usage -->
```typescript
import {
  BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest,
  BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
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
    failureStatus: {
      code: 592845,
      details: [
        {
          "unde": "nulla",
          "corrupti": "illum",
          "vel": "error",
          "deserunt": "suscipit",
        },
        {
          "magnam": "debitis",
          "ipsa": "delectus",
        },
        {
          "suscipit": "molestiae",
          "minus": "placeat",
        },
      ],
      message: "voluptatum",
    },
    multiRegionAuxiliary: false,
    plan: CapacityCommitmentPlanEnum.Trial,
    renewalPlan: CapacityCommitmentRenewalPlanEnum.Trial,
    slotCount: "nisi",
  },
  accessToken: "recusandae",
  alt: AltEnum.Proto,
  callback: "ab",
  capacityCommitmentId: "quis",
  enforceSingleAdminProjectPerOrg: false,
  fields: "veritatis",
  key: "deserunt",
  oauthToken: "perferendis",
  parent: "ipsam",
  prettyPrint: false,
  quotaUser: "repellendus",
  uploadType: "sapiente",
  uploadProtocol: "quo",
};

sdk.projects.bigqueryreservationProjectsLocationsCapacityCommitmentsCreate(req).then((res: BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->