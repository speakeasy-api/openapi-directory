<!-- Start SDK Example Usage -->
```typescript
import {
  StsTokenRequest,
  StsTokenResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: StsTokenRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleIdentityStsV1betaExchangeTokenRequest: {
    audience: "provident",
    grantType: "distinctio",
    options: "quibusdam",
    requestedTokenType: "unde",
    scope: "nulla",
    subjectToken: "corrupti",
    subjectTokenType: "illum",
  },
  accessToken: "vel",
  alt: AltEnum.Media,
  callback: "deserunt",
  fields: "suscipit",
  key: "iure",
  oauthToken: "magnam",
  prettyPrint: false,
  quotaUser: "debitis",
  uploadType: "ipsa",
  uploadProtocol: "delectus",
};

sdk.v1beta.stsToken(req).then((res: StsTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->