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

    req := operations.BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesRequest{
        PathParams: operations.BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesPathParams{
            Location: "unde",
        },
        QueryParams: operations.BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            DailyMetrics: []BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum{
                "BUSINESS_DIRECTION_REQUESTS",
                "BUSINESS_FOOD_ORDERS",
                "BUSINESS_CONVERSATIONS",
                "CALL_CLICKS",
            },
            DailyRangeEndDateDay: 645894,
            DailyRangeEndDateMonth: 384382,
            DailyRangeEndDateYear: 437587,
            DailyRangeStartDateDay: 297534,
            DailyRangeStartDateMonth: 891773,
            DailyRangeStartDateYear: 56713,
            Fields: "sapiente",
            Key: "enim",
            OauthToken: "eum",
            PrettyPrint: false,
            QuotaUser: "voluptatum",
            UploadType: "autem",
            UploadProtocol: "vel",
        },
    }

    ctx := context.Background()
    res, err := s.Locations.BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeries(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchMultiDailyMetricsTimeSeriesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->