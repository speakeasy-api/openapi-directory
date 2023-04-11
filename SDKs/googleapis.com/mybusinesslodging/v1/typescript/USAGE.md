<!-- Start SDK Example Usage -->
```typescript
import {
  MybusinesslodgingLocationsGetLodgingRequest,
  MybusinesslodgingLocationsGetLodgingResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: MybusinesslodgingLocationsGetLodgingRequest = {
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
  readMask: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
};

sdk.locations.mybusinesslodgingLocationsGetLodging(req).then((res: MybusinesslodgingLocationsGetLodgingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->