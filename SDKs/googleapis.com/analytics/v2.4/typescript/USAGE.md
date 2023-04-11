<!-- Start SDK Example Usage -->
```typescript
import {
  AnalyticsDataGetRequest,
  AnalyticsDataGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AnalyticsDataGetRequest = {
  alt: AltEnum.Atom,
  dimensions: "corrupti",
  endDate: "provident",
  fields: "distinctio",
  filters: "quibusdam",
  ids: "unde",
  key: "nulla",
  maxResults: 544883,
  metrics: "illum",
  oauthToken: "vel",
  prettyPrint: false,
  quotaUser: "error",
  segment: "deserunt",
  sort: "suscipit",
  startDate: "iure",
  startIndex: 297534,
  userIp: "debitis",
};

sdk.data.analyticsDataGet(req).then((res: AnalyticsDataGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->