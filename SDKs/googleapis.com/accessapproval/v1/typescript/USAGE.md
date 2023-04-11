<!-- Start SDK Example Usage -->
```typescript
import {
  AccessapprovalProjectsApprovalRequestsApproveRequest,
  AccessapprovalProjectsApprovalRequestsApproveResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AccessapprovalProjectsApprovalRequestsApproveRequest = {
  dollarXgafv: XgafvEnum.Two,
  approveApprovalRequestMessage: {
    expireTime: "provident",
  },
  accessToken: "distinctio",
  alt: AltEnum.Proto,
  callback: "unde",
  fields: "nulla",
  key: "corrupti",
  name: "illum",
  oauthToken: "vel",
  prettyPrint: false,
  quotaUser: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
};

sdk.projects.accessapprovalProjectsApprovalRequestsApprove(req).then((res: AccessapprovalProjectsApprovalRequestsApproveResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->