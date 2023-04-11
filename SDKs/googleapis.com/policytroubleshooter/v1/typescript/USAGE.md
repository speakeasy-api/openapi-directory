<!-- Start SDK Example Usage -->
```typescript
import {
  PolicytroubleshooterIamTroubleshootRequest,
  PolicytroubleshooterIamTroubleshootResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PolicytroubleshooterIamTroubleshootRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest: {
    accessTuple: {
      fullResourceName: "provident",
      permission: "distinctio",
      principal: "quibusdam",
    },
  },
  accessToken: "unde",
  alt: AltEnum.Proto,
  callback: "corrupti",
  fields: "illum",
  key: "vel",
  oauthToken: "error",
  prettyPrint: false,
  quotaUser: "deserunt",
  uploadType: "suscipit",
  uploadProtocol: "iure",
};

sdk.iam.policytroubleshooterIamTroubleshoot(req).then((res: PolicytroubleshooterIamTroubleshootResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->