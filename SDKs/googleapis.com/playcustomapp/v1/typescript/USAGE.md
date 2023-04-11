<!-- Start SDK Example Usage -->
```typescript
import {
  PlaycustomappAccountsCustomAppsCreateRequest,
  PlaycustomappAccountsCustomAppsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PlaycustomappAccountsCustomAppsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  requestBody: "provident".encode(),
  accessToken: "distinctio",
  account: "quibusdam",
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

sdk.accounts.playcustomappAccountsCustomAppsCreate(req).then((res: PlaycustomappAccountsCustomAppsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->