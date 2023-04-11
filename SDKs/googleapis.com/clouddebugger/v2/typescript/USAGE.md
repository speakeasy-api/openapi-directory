<!-- Start SDK Example Usage -->
```typescript
import {
  ClouddebuggerControllerDebuggeesBreakpointsListRequest,
  ClouddebuggerControllerDebuggeesBreakpointsListResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ClouddebuggerControllerDebuggeesBreakpointsListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  agentId: "distinctio",
  alt: AltEnum.Proto,
  callback: "unde",
  debuggeeId: "nulla",
  fields: "corrupti",
  key: "illum",
  oauthToken: "vel",
  prettyPrint: false,
  quotaUser: "error",
  successOnTimeout: false,
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
  waitToken: "iure",
};

sdk.controller.clouddebuggerControllerDebuggeesBreakpointsList(req).then((res: ClouddebuggerControllerDebuggeesBreakpointsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->