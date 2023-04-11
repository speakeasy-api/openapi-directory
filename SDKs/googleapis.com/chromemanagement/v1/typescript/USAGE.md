<!-- Start SDK Example Usage -->
```typescript
import {
  ChromemanagementCustomersAppsCountChromeAppRequestsRequest,
  ChromemanagementCustomersAppsCountChromeAppRequestsResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ChromemanagementCustomersAppsCountChromeAppRequestsRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  customer: "unde",
  fields: "nulla",
  key: "corrupti",
  oauthToken: "illum",
  orderBy: "vel",
  orgUnitId: "error",
  pageSize: 645894,
  pageToken: "suscipit",
  prettyPrint: false,
  quotaUser: "iure",
  uploadType: "magnam",
  uploadProtocol: "debitis",
};

sdk.customers.chromemanagementCustomersAppsCountChromeAppRequests(req).then((res: ChromemanagementCustomersAppsCountChromeAppRequestsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->