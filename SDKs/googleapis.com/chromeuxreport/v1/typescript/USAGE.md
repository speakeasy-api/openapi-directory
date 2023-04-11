<!-- Start SDK Example Usage -->
```typescript
import {
  ChromeuxreportRecordsQueryHistoryRecordRequest,
  ChromeuxreportRecordsQueryHistoryRecordResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  QueryHistoryRequestFormFactorEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ChromeuxreportRecordsQueryHistoryRecordRequest = {
  dollarXgafv: XgafvEnum.Two,
  queryHistoryRequest: {
    formFactor: QueryHistoryRequestFormFactorEnum.Desktop,
    metrics: [
      "quibusdam",
      "unde",
      "nulla",
    ],
    origin: "corrupti",
    url: "illum",
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

sdk.records.chromeuxreportRecordsQueryHistoryRecord(req).then((res: ChromeuxreportRecordsQueryHistoryRecordResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->