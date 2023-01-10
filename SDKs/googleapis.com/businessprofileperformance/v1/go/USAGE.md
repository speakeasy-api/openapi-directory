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
            Name: "esse",
        },
        QueryParams: operations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams{
            DollarXgafv: "2",
            AccessToken: "nihil",
            Alt: "json",
            Callback: "porro",
            DailyMetric: "BUSINESS_CONVERSATIONS",
            DailyRangeEndDateDay: 8314972122484284347,
            DailyRangeEndDateMonth: 6767116943109334658,
            DailyRangeEndDateYear: 3649721261448958116,
            DailyRangeStartDateDay: 2892090493204552756,
            DailyRangeStartDateMonth: 239094355112619542,
            DailyRangeStartDateYear: 7985232766319097258,
            DailySubEntityTypeDayOfWeek: "MONDAY",
            DailySubEntityTypeTimeOfDayHours: 5283083470341778130,
            DailySubEntityTypeTimeOfDayMinutes: 6028810783304602274,
            DailySubEntityTypeTimeOfDayNanos: 7209973335812237129,
            DailySubEntityTypeTimeOfDaySeconds: 8070233394185374730,
            Fields: "eaque",
            Key: "cumque",
            OauthToken: "qui",
            PrettyPrint: true,
            QuotaUser: "est",
            UploadType: "earum",
            UploadProtocol: "sunt",
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