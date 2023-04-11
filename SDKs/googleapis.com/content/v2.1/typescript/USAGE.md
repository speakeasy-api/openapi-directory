<!-- Start SDK Example Usage -->
```typescript
import {
  ContentAccountsAuthinfoRequest,
  ContentAccountsAuthinfoResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ContentAccountsAuthinfoRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  prettyPrint: false,
  quotaUser: "illum",
  uploadType: "vel",
  uploadProtocol: "error",
};

sdk.accounts.contentAccountsAuthinfo(req).then((res: ContentAccountsAuthinfoResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->