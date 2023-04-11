<!-- Start SDK Example Usage -->
```typescript
import {
  StsIntrospectRequest,
  StsIntrospectResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: StsIntrospectRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleIdentityStsV1IntrospectTokenRequest: {
    token: "provident",
    tokenTypeHint: "distinctio",
  },
  accessToken: "quibusdam",
  alt: AltEnum.Media,
  callback: "nulla",
  fields: "corrupti",
  key: "illum",
  oauthToken: "vel",
  prettyPrint: false,
  quotaUser: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
};

sdk.v1.stsIntrospect(req).then((res: StsIntrospectResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->