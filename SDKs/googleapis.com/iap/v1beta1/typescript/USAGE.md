<!-- Start SDK Example Usage -->
```typescript
import {
  IapGetIamPolicyRequest,
  IapGetIamPolicyResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: IapGetIamPolicyRequest = {
  dollarXgafv: XgafvEnum.Two,
  getIamPolicyRequest: {
    options: {
      requestedPolicyVersion: 592845,
    },
  },
  accessToken: "distinctio",
  alt: AltEnum.Proto,
  callback: "unde",
  fields: "nulla",
  key: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  resource: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
};

sdk.v1beta1.iapGetIamPolicy(req).then((res: IapGetIamPolicyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->