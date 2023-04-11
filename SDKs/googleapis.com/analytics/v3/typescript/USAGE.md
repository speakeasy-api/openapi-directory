<!-- Start SDK Example Usage -->
```typescript
import {
  AnalyticsDataGaGetRequest,
  AnalyticsDataGaGetResponse,
  AnalyticsDataGaGetOutputEnum,
  AnalyticsDataGaGetSamplingLevelEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AnalyticsDataGaGetRequest = {
  alt: AltEnum.Json,
  dimensions: "corrupti",
  endDate: "provident",
  fields: "distinctio",
  filters: "quibusdam",
  ids: "unde",
  includeEmptyRows: false,
  key: "nulla",
  maxResults: 544883,
  metrics: "illum",
  oauthToken: "vel",
  output: AnalyticsDataGaGetOutputEnum.Json,
  prettyPrint: false,
  quotaUser: "deserunt",
  samplingLevel: AnalyticsDataGaGetSamplingLevelEnum.Faster,
  segment: "iure",
  sort: "magnam",
  startDate: "debitis",
  startIndex: 56713,
  userIp: "delectus",
};

sdk.data.analyticsDataGaGet(req).then((res: AnalyticsDataGaGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->