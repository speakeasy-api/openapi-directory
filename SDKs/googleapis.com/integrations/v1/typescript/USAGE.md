<!-- Start SDK Example Usage -->
```typescript
import {
  IntegrationsCallbackGenerateTokenRequest,
  IntegrationsCallbackGenerateTokenResponse,
  IntegrationsCallbackGenerateTokenProductEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: IntegrationsCallbackGenerateTokenRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  code: "unde",
  fields: "nulla",
  gcpProjectId: "corrupti",
  key: "illum",
  oauthToken: "vel",
  prettyPrint: false,
  product: IntegrationsCallbackGenerateTokenProductEnum.Apigee,
  quotaUser: "deserunt",
  redirectUri: "suscipit",
  state: "iure",
  uploadType: "magnam",
  uploadProtocol: "debitis",
};

sdk.callback.integrationsCallbackGenerateToken(req).then((res: IntegrationsCallbackGenerateTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->