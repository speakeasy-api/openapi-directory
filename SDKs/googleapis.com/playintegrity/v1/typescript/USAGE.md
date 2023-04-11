<!-- Start SDK Example Usage -->
```typescript
import {
  PlayintegrityDecodeIntegrityTokenRequest,
  PlayintegrityDecodeIntegrityTokenResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PlayintegrityDecodeIntegrityTokenRequest = {
  dollarXgafv: XgafvEnum.Two,
  decodeIntegrityTokenRequest: {
    integrityToken: "provident",
  },
  accessToken: "distinctio",
  alt: AltEnum.Proto,
  callback: "unde",
  fields: "nulla",
  key: "corrupti",
  oauthToken: "illum",
  packageName: "vel",
  prettyPrint: false,
  quotaUser: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
};

sdk.v1.playintegrityDecodeIntegrityToken(req).then((res: PlayintegrityDecodeIntegrityTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->