<!-- Start SDK Example Usage -->
```typescript
import {
  BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesRequest,
  BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesResponse,
  BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  dailyMetrics: [
    BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum.BusinessFoodOrders,
    BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum.BusinessDirectionRequests,
    BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum.BusinessFoodOrders,
  ],
  dailyRangeEndDateDay: 423655,
  dailyRangeEndDateMonth: 623564,
  dailyRangeEndDateYear: 645894,
  dailyRangeStartDateDay: 384382,
  dailyRangeStartDateMonth: 437587,
  dailyRangeStartDateYear: 297534,
  fields: "debitis",
  key: "ipsa",
  location: "delectus",
  oauthToken: "tempora",
  prettyPrint: false,
  quotaUser: "suscipit",
  uploadType: "molestiae",
  uploadProtocol: "minus",
};

sdk.locations.businessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeries(req).then((res: BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->