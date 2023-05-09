<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Locations.BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeries(ctx, operations.BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        DailyMetrics: []BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum{
            operations.BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnumBusinessFoodOrders,
            operations.BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnumBusinessDirectionRequests,
            operations.BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnumBusinessFoodOrders,
        },
        DailyRangeEndDateDay: sdk.Int64(423655),
        DailyRangeEndDateMonth: sdk.Int64(623564),
        DailyRangeEndDateYear: sdk.Int64(645894),
        DailyRangeStartDateDay: sdk.Int64(384382),
        DailyRangeStartDateMonth: sdk.Int64(437587),
        DailyRangeStartDateYear: sdk.Int64(297534),
        Fields: sdk.String("debitis"),
        Key: sdk.String("ipsa"),
        Location: "delectus",
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchMultiDailyMetricsTimeSeriesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->