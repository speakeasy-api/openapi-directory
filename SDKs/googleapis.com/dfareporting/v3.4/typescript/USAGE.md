<!-- Start SDK Example Usage -->
```typescript
import {
  DfareportingAccountActiveAdSummariesGetRequest,
  DfareportingAccountActiveAdSummariesGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DfareportingAccountActiveAdSummariesGetRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  prettyPrint: false,
  profileId: "illum",
  quotaUser: "vel",
  summaryAccountId: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
};

sdk.accountActiveAdSummaries.dfareportingAccountActiveAdSummariesGet(req).then((res: DfareportingAccountActiveAdSummariesGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->