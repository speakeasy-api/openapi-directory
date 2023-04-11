<!-- Start SDK Example Usage -->
```typescript
import {
  VideointelligenceOperationsProjectsLocationsOperationsCancelRequest,
  VideointelligenceOperationsProjectsLocationsOperationsCancelResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: VideointelligenceOperationsProjectsLocationsOperationsCancelRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  name: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.operations.videointelligenceOperationsProjectsLocationsOperationsCancel(req).then((res: VideointelligenceOperationsProjectsLocationsOperationsCancelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->