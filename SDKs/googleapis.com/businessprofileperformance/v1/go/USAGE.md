<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest{
        PathParams: operations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesPathParams{
            Name: "molestiae",
        },
        QueryParams: operations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams{
            DollarXgafv: "1",
            AccessToken: "repellat",
            Alt: "json",
            Callback: "sed",
            DailyMetric: "WEBSITE_CLICKS",
            DailyRangeEndDateDay: 1221540476095319119,
            DailyRangeEndDateMonth: 5012945083598127645,
            DailyRangeEndDateYear: 6870436931398380512,
            DailyRangeStartDateDay: 910907678208424806,
            DailyRangeStartDateMonth: 5210307319228776145,
            DailyRangeStartDateYear: 3304053977307046580,
            DailySubEntityTypeDayOfWeek: "DAY_OF_WEEK_UNSPECIFIED",
            DailySubEntityTypeTimeOfDayHours: 5207396030113692353,
            DailySubEntityTypeTimeOfDayMinutes: 2146413783345853326,
            DailySubEntityTypeTimeOfDayNanos: 149675784360604258,
            DailySubEntityTypeTimeOfDaySeconds: 7863208141981153686,
            Fields: "at",
            Key: "saepe",
            OauthToken: "voluptatem",
            PrettyPrint: true,
            QuotaUser: "soluta",
            UploadType: "est",
            UploadProtocol: "quam",
        },
    }
    
    res, err := s.Locations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeries(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDailyMetricsTimeSeriesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->