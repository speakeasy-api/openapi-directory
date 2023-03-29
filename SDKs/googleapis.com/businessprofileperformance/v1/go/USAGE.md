<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest{
        PathParams: operations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesPathParams{
            Name: "unde",
        },
        QueryParams: operations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            DailyMetric: "BUSINESS_FOOD_ORDERS",
            DailyRangeEndDateDay: 544883,
            DailyRangeEndDateMonth: 847252,
            DailyRangeEndDateYear: 423655,
            DailyRangeStartDateDay: 623564,
            DailyRangeStartDateMonth: 645894,
            DailyRangeStartDateYear: 384382,
            DailySubEntityTypeDayOfWeek: "WEDNESDAY",
            DailySubEntityTypeTimeOfDayHours: 297534,
            DailySubEntityTypeTimeOfDayMinutes: 891773,
            DailySubEntityTypeTimeOfDayNanos: 56713,
            DailySubEntityTypeTimeOfDaySeconds: 963663,
            Fields: "enim",
            Key: "eum",
            OauthToken: "voluptatum",
            PrettyPrint: false,
            QuotaUser: "autem",
            UploadType: "vel",
            UploadProtocol: "non",
        },
    }

    ctx := context.Background()
    res, err := s.Locations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeries(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDailyMetricsTimeSeriesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->