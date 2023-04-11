<!-- Start SDK Example Usage -->
```typescript
import {
  HomegraphAgentUsersDeleteRequest,
  HomegraphAgentUsersDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: HomegraphAgentUsersDeleteRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  agentUserId: "distinctio",
  alt: AltEnum.Proto,
  callback: "unde",
  fields: "nulla",
  key: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  requestId: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
};

sdk.agentUsers.homegraphAgentUsersDelete(req).then((res: HomegraphAgentUsersDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->