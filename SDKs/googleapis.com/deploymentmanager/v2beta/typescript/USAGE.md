<!-- Start SDK Example Usage -->
```typescript
import {
  DeploymentmanagerCompositeTypesDeleteRequest,
  DeploymentmanagerCompositeTypesDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeploymentmanagerCompositeTypesDeleteRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  compositeType: "unde",
  fields: "nulla",
  key: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  project: "vel",
  quotaUser: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
};

sdk.compositeTypes.deploymentmanagerCompositeTypesDelete(req).then((res: DeploymentmanagerCompositeTypesDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->