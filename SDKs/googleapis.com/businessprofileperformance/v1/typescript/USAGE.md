<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest, BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest = {
  pathParams: {
    name: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    dailyMetric: "BUSINESS_IMPRESSIONS_DESKTOP_MAPS",
    dailyRangeEndDateDay: 1774932891286980153,
    dailyRangeEndDateMonth: 6044372234677422456,
    dailyRangeEndDateYear: 8274930044578894929,
    dailyRangeStartDateDay: 1543572285742637646,
    dailyRangeStartDateMonth: 2661732831099943416,
    dailyRangeStartDateYear: 8325060299420976708,
    dailySubEntityTypeDayOfWeek: "WEDNESDAY",
    dailySubEntityTypeTimeOfDayHours: 2518412263346885298,
    dailySubEntityTypeTimeOfDayMinutes: 5617773211005988520,
    dailySubEntityTypeTimeOfDayNanos: 2339563716805116249,
    dailySubEntityTypeTimeOfDaySeconds: 7144924247938981575,
    fields: "dolorem",
    key: "et",
    oauthToken: "voluptate",
    prettyPrint: true,
    quotaUser: "vitae",
    uploadType: "totam",
    uploadProtocol: "dolores",
  },
};

sdk.locations.businessprofileperformanceLocationsGetDailyMetricsTimeSeries(req).then((res: BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->