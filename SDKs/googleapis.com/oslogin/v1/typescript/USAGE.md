<!-- Start SDK Example Usage -->
```typescript
import {
  OsloginUsersGetLoginProfileRequest,
  OsloginUsersGetLoginProfileResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: OsloginUsersGetLoginProfileRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  name: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  projectId: "vel",
  quotaUser: "error",
  systemId: "deserunt",
  uploadType: "suscipit",
  uploadProtocol: "iure",
};

sdk.users.osloginUsersGetLoginProfile(req).then((res: OsloginUsersGetLoginProfileResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->