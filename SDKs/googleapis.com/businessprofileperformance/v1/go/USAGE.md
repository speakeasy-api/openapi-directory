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
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        DailyMetrics: []BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum{
            "BUSINESS_FOOD_ORDERS",
            "BUSINESS_DIRECTION_REQUESTS",
            "BUSINESS_FOOD_ORDERS",
        },
        DailyRangeEndDateDay: 423655,
        DailyRangeEndDateMonth: 623564,
        DailyRangeEndDateYear: 645894,
        DailyRangeStartDateDay: 384382,
        DailyRangeStartDateMonth: 437587,
        DailyRangeStartDateYear: 297534,
        Fields: "debitis",
        Key: "ipsa",
        Location: "delectus",
        OauthToken: "tempora",
        PrettyPrint: false,
        QuotaUser: "suscipit",
        UploadType: "molestiae",
        UploadProtocol: "minus",
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