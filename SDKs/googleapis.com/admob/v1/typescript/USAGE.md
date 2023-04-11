<!-- Start SDK Example Usage -->
```typescript
import {
  AdmobAccountsAdUnitsListRequest,
  AdmobAccountsAdUnitsListResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AdmobAccountsAdUnitsListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  pageSize: 847252,
  pageToken: "vel",
  parent: "error",
  prettyPrint: false,
  quotaUser: "deserunt",
  uploadType: "suscipit",
  uploadProtocol: "iure",
};

sdk.accounts.admobAccountsAdUnitsList(req).then((res: AdmobAccountsAdUnitsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->