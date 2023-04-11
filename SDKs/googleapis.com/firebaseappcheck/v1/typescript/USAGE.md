<!-- Start SDK Example Usage -->
```typescript
import {
  FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest,
  FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  names: [
    "illum",
    "vel",
    "error",
  ],
  oauthToken: "deserunt",
  parent: "suscipit",
  prettyPrint: false,
  quotaUser: "iure",
  uploadType: "magnam",
  uploadProtocol: "debitis",
};

sdk.projects.firebaseappcheckProjectsAppsAppAttestConfigBatchGet(req).then((res: FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->