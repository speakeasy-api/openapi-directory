<!-- Start SDK Example Usage -->
```typescript
import {
  DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest,
  DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudDialogflowV2BatchDeleteEntityTypesRequest: {
    entityTypeNames: [
      "distinctio",
      "quibusdam",
      "unde",
    ],
  },
  accessToken: "nulla",
  alt: AltEnum.Media,
  callback: "illum",
  fields: "vel",
  key: "error",
  oauthToken: "deserunt",
  parent: "suscipit",
  prettyPrint: false,
  quotaUser: "iure",
  uploadType: "magnam",
  uploadProtocol: "debitis",
};

sdk.projects.dialogflowProjectsLocationsAgentEntityTypesBatchDelete(req).then((res: DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->