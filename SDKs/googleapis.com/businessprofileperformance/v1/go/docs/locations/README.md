# Locations

### Available Operations

* [BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeries](#businessprofileperformancelocationsfetchmultidailymetricstimeseries) -  Returns the values for each date from a given time range and optionally the sub entity type, where applicable, that are associated with the specific daily metrics. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:fetchMultiDailyMetricsTimeSeries?dailyMetrics=WEBSITE_CLICKS&dailyMetrics=CALL_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`
* [BusinessprofileperformanceLocationsGetDailyMetricsTimeSeries](#businessprofileperformancelocationsgetdailymetricstimeseries) -  Returns the values for each date from a given time range that are associated with the specific daily metric. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:getDailyMetricsTimeSeries?dailyMetric=WEBSITE_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`
* [BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyList](#businessprofileperformancelocationssearchkeywordsimpressionsmonthlylist) - Returns the search keywords used to find a business in search or maps. Each search keyword is accompanied by impressions which are aggregated on a monthly basis. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345/searchkeywords/impressions/monthly?monthly_range.start_month.year=2022&monthly_range.start_month.month=1&monthly_range.end_month.year=2022&monthly_range.end_month.month=3`

## BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeries

 Returns the values for each date from a given time range and optionally the sub entity type, where applicable, that are associated with the specific daily metrics. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:fetchMultiDailyMetricsTimeSeries?dailyMetrics=WEBSITE_CLICKS&dailyMetrics=CALL_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`

### Example Usage

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
        AccessToken: sdk.String("voluptatum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("excepturi"),
        DailyMetrics: []BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum{
            operations.BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnumBusinessFoodMenuClicks,
            operations.BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnumBusinessFoodOrders,
        },
        DailyRangeEndDateDay: sdk.Int64(71036),
        DailyRangeEndDateMonth: sdk.Int64(337396),
        DailyRangeEndDateYear: sdk.Int64(87129),
        DailyRangeStartDateDay: sdk.Int64(648172),
        DailyRangeStartDateMonth: sdk.Int64(20218),
        DailyRangeStartDateYear: sdk.Int64(368241),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("sapiente"),
        Location: "quo",
        OauthToken: sdk.String("odit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchMultiDailyMetricsTimeSeriesResponse != nil {
        // handle response
    }
}
```

## BusinessprofileperformanceLocationsGetDailyMetricsTimeSeries

 Returns the values for each date from a given time range that are associated with the specific daily metric. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:getDailyMetricsTimeSeries?dailyMetric=WEBSITE_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`

### Example Usage

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
    res, err := s.Locations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeries(ctx, operations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("esse"),
        DailyMetric: operations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnumBusinessDirectionRequests.ToPointer(),
        DailyRangeEndDateDay: sdk.Int64(780529),
        DailyRangeEndDateMonth: sdk.Int64(678880),
        DailyRangeEndDateYear: sdk.Int64(118274),
        DailyRangeStartDateDay: sdk.Int64(720633),
        DailyRangeStartDateMonth: sdk.Int64(639921),
        DailyRangeStartDateYear: sdk.Int64(582020),
        DailySubEntityTypeDayOfWeek: operations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnumMonday.ToPointer(),
        DailySubEntityTypeTimeOfDayHours: sdk.Int64(537373),
        DailySubEntityTypeTimeOfDayMinutes: sdk.Int64(944669),
        DailySubEntityTypeTimeOfDayNanos: sdk.Int64(758616),
        DailySubEntityTypeTimeOfDaySeconds: sdk.Int64(521848),
        Fields: sdk.String("beatae"),
        Key: sdk.String("commodi"),
        Name: "Pauline Dibbert",
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDailyMetricsTimeSeriesResponse != nil {
        // handle response
    }
}
```

## BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyList

Returns the search keywords used to find a business in search or maps. Each search keyword is accompanied by impressions which are aggregated on a monthly basis. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345/searchkeywords/impressions/monthly?monthly_range.start_month.year=2022&monthly_range.start_month.month=1&monthly_range.end_month.year=2022&monthly_range.end_month.month=3`

### Example Usage

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
    res, err := s.Locations.BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyList(ctx, operations.BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("iste"),
        Key: sdk.String("dolor"),
        MonthlyRangeEndMonthDay: sdk.Int64(616934),
        MonthlyRangeEndMonthMonth: sdk.Int64(386489),
        MonthlyRangeEndMonthYear: sdk.Int64(943749),
        MonthlyRangeStartMonthDay: sdk.Int64(902599),
        MonthlyRangeStartMonthMonth: sdk.Int64(681820),
        MonthlyRangeStartMonthYear: sdk.Int64(449950),
        OauthToken: sdk.String("corporis"),
        PageSize: sdk.Int64(613064),
        PageToken: sdk.String("iure"),
        Parent: "saepe",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSearchKeywordImpressionsMonthlyResponse != nil {
        // handle response
    }
}
```
