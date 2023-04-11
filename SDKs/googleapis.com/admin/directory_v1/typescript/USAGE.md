<!-- Start SDK Example Usage -->
```typescript
import {
  DirectoryAspsDeleteRequest,
  DirectoryAspsDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DirectoryAspsDeleteRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  codeId: 602763,
  fields: "nulla",
  key: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
  userKey: "suscipit",
};

sdk.asps.directoryAspsDelete(req).then((res: DirectoryAspsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->