<!-- Start SDK Example Usage -->
```typescript
import {
  WorkloadmanagerProjectsLocationsEvaluationsCreateRequest,
  WorkloadmanagerProjectsLocationsEvaluationsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  ResourceStatusStateEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: WorkloadmanagerProjectsLocationsEvaluationsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  evaluationInput: {
    description: "provident",
    labels: {
      "quibusdam": "unde",
      "nulla": "corrupti",
      "illum": "vel",
    },
    name: "error",
    resourceFilter: {
      gceInstanceFilter: {
        serviceAccounts: [
          "suscipit",
          "iure",
          "magnam",
        ],
      },
      inclusionLabels: {
        "ipsa": "delectus",
        "tempora": "suscipit",
        "molestiae": "minus",
        "placeat": "voluptatum",
      },
      resourceIdPatterns: [
        "excepturi",
        "nisi",
      ],
      scopes: [
        "temporibus",
        "ab",
        "quis",
        "veritatis",
      ],
    },
    resourceStatus: {
      rulesNewerVersions: [
        "perferendis",
        "ipsam",
        "repellendus",
      ],
      state: ResourceStatusStateEnum.Deleting,
    },
    ruleNames: [
      "odit",
      "at",
      "at",
      "maiores",
    ],
  },
  accessToken: "molestiae",
  alt: AltEnum.Proto,
  callback: "quod",
  evaluationId: "esse",
  fields: "totam",
  key: "porro",
  oauthToken: "dolorum",
  parent: "dicta",
  prettyPrint: false,
  quotaUser: "nam",
  requestId: "officia",
  uploadType: "occaecati",
  uploadProtocol: "fugit",
};

sdk.projects.workloadmanagerProjectsLocationsEvaluationsCreate(req).then((res: WorkloadmanagerProjectsLocationsEvaluationsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->