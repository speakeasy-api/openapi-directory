<!-- Start SDK Example Usage -->
```typescript
import {
  AnalyticsadminAccountSummariesListRequest,
  AnalyticsadminAccountSummariesListResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AnalyticsadminAccountSummariesListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  pageSize: 847252,
  pageToken: "vel",
  prettyPrint: false,
  quotaUser: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
};

sdk.accountSummaries.analyticsadminAccountSummariesList(req).then((res: AnalyticsadminAccountSummariesListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->