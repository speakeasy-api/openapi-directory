# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/businessprofileperformance/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Locations

* `BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeries` -  Returns the values for each date from a given time range and optionally the sub entity type, where applicable, that are associated with the specific daily metrics. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:fetchMultiDailyMetricsTimeSeries?dailyMetrics=WEBSITE_CLICKS&dailyMetrics=CALL_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`
* `BusinessprofileperformanceLocationsGetDailyMetricsTimeSeries` -  Returns the values for each date from a given time range that are associated with the specific daily metric. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:getDailyMetricsTimeSeries?dailyMetric=WEBSITE_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`
* `BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyList` - Returns the search keywords used to find a business in search or maps. Each search keyword is accompanied by impressions which are aggregated on a monthly basis. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345/searchkeywords/impressions/monthly?monthly_range.start_month.year=2022&monthly_range.start_month.month=1&monthly_range.end_month.year=2022&monthly_range.end_month.month=3`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
