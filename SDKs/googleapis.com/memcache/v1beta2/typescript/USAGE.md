<!-- Start SDK Example Usage -->
```typescript
import {
  MemcacheProjectsLocationsInstancesApplyParametersRequest,
  MemcacheProjectsLocationsInstancesApplyParametersResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: MemcacheProjectsLocationsInstancesApplyParametersRequest = {
  dollarXgafv: XgafvEnum.Two,
  applyParametersRequest: {
    applyAll: false,
    nodeIds: [
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
  name: "deserunt",
  oauthToken: "suscipit",
  prettyPrint: false,
  quotaUser: "iure",
  uploadType: "magnam",
  uploadProtocol: "debitis",
};

sdk.projects.memcacheProjectsLocationsInstancesApplyParameters(req).then((res: MemcacheProjectsLocationsInstancesApplyParametersResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->