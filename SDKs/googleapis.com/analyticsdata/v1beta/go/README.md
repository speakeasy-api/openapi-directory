# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/analyticsdata/v1beta/go
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

    req := operations.AnalyticsdataPropertiesBatchRunPivotReportsRequest{
        Security: operations.AnalyticsdataPropertiesBatchRunPivotReportsSecurity{
            Option1: &operations.AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.AnalyticsdataPropertiesBatchRunPivotReportsPathParams{
            Property: "unde",
        },
        QueryParams: operations.AnalyticsdataPropertiesBatchRunPivotReportsQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.BatchRunPivotReportsRequest{
            Requests: []shared.RunPivotReportRequest{
                shared.RunPivotReportRequest{
                    CohortSpec: &shared.CohortSpec{
                        CohortReportSettings: &shared.CohortReportSettings{
                            Accumulate: false,
                        },
                        Cohorts: []shared.Cohort{
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "ullam",
                                    Name: "saepe",
                                    StartDate: "inventore",
                                },
                                Dimension: "sapiente",
                                Name: "enim",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "eum",
                                    Name: "voluptatum",
                                    StartDate: "autem",
                                },
                                Dimension: "vel",
                                Name: "non",
                            },
                        },
                        CohortsRange: &shared.CohortsRange{
                            EndOffset: 479977,
                            Granularity: "WEEKLY",
                            StartOffset: 392785,
                        },
                    },
                    CurrencyCode: "molestiae",
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: "quasi",
                            Name: "laboriosam",
                            StartDate: "dicta",
                        },
                        shared.DateRange{
                            EndDate: "est",
                            Name: "voluptatem",
                            StartDate: "consequatur",
                        },
                        shared.DateRange{
                            EndDate: "fugiat",
                            Name: "a",
                            StartDate: "omnis",
                        },
                        shared.DateRange{
                            EndDate: "eos",
                            Name: "accusamus",
                            StartDate: "accusamus",
                        },
                    },
                    DimensionFilter: &shared.FilterExpression{
                        AndGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{},
                                shared.FilterExpression{},
                                shared.FilterExpression{},
                                shared.FilterExpression{},
                            },
                        },
                        Filter: &shared.Filter{
                            BetweenFilter: &shared.BetweenFilter{
                                FromValue: &shared.NumericValue{
                                    DoubleValue: 4736.08,
                                    Int64Value: "quibusdam",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 8009.11,
                                    Int64Value: "praesentium",
                                },
                            },
                            FieldName: "occaecati",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: false,
                                Values: []string{
                                    "soluta",
                                    "sed",
                                    "quisquam",
                                    "rerum",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "LESS_THAN_OR_EQUAL",
                                Value: &shared.NumericValue{
                                    DoubleValue: 1433.53,
                                    Int64Value: "sed",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: false,
                                MatchType: "PARTIAL_REGEXP",
                                Value: "possimus",
                            },
                        },
                        NotExpression: &shared.FilterExpression{},
                        OrGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{},
                                shared.FilterExpression{},
                                shared.FilterExpression{},
                            },
                        },
                    },
                    Dimensions: []shared.Dimension{
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: "esse",
                                    DimensionNames: []string{
                                        "voluptatem",
                                        "amet",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "est",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "id",
                                },
                            },
                            Name: "blanditiis",
                        },
                    },
                    KeepEmptyRows: false,
                    MetricFilter: &shared.FilterExpression{
                        AndGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{},
                            },
                        },
                        Filter: &shared.Filter{
                            BetweenFilter: &shared.BetweenFilter{
                                FromValue: &shared.NumericValue{
                                    DoubleValue: 5684.34,
                                    Int64Value: "dolores",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 187.89,
                                    Int64Value: "quia",
                                },
                            },
                            FieldName: "et",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: false,
                                Values: []string{
                                    "laborum",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "EQUAL",
                                Value: &shared.NumericValue{
                                    DoubleValue: 6169.34,
                                    Int64Value: "iure",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: false,
                                MatchType: "PARTIAL_REGEXP",
                                Value: "ut",
                            },
                        },
                        NotExpression: &shared.FilterExpression{},
                        OrGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{},
                                shared.FilterExpression{},
                                shared.FilterExpression{},
                            },
                        },
                    },
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Expression: "ea",
                            Invisible: false,
                            Name: "laborum",
                        },
                        shared.Metric{
                            Expression: "iusto",
                            Invisible: false,
                            Name: "ut",
                        },
                    },
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            FieldNames: []string{
                                "inventore",
                            },
                            Limit: "ut",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "MAXIMUM",
                                "MAXIMUM",
                                "METRIC_AGGREGATION_UNSPECIFIED",
                            },
                            Offset: "non",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "magni",
                                        OrderType: "NUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "ipsam",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "est",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "quia",
                                                DimensionValue: "similique",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "eaque",
                                                DimensionValue: "odio",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "harum",
                                        OrderType: "NUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "a",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "aut",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "non",
                                                DimensionValue: "quidem",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "neque",
                                                DimensionValue: "asperiores",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "et",
                                                DimensionValue: "culpa",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.Pivot{
                            FieldNames: []string{
                                "esse",
                                "totam",
                            },
                            Limit: "voluptatum",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "MAXIMUM",
                            },
                            Offset: "nesciunt",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "aut",
                                        OrderType: "CASE_INSENSITIVE_ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "expedita",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "ipsam",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "omnis",
                                                DimensionValue: "adipisci",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "hic",
                                        OrderType: "ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "distinctio",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "qui",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "aspernatur",
                                                DimensionValue: "fuga",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.Pivot{
                            FieldNames: []string{
                                "tempore",
                                "explicabo",
                                "aut",
                                "reiciendis",
                            },
                            Limit: "debitis",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "MINIMUM",
                                "COUNT",
                            },
                            Offset: "illo",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "qui",
                                        OrderType: "CASE_INSENSITIVE_ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "sit",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "eaque",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "veniam",
                                                DimensionValue: "reiciendis",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "sed",
                                                DimensionValue: "ea",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "exercitationem",
                                        OrderType: "ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "sed",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "est",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "aut",
                                                DimensionValue: "esse",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "sint",
                                                DimensionValue: "veritatis",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "numquam",
                                        OrderType: "CASE_INSENSITIVE_ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "error",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "similique",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "ut",
                                                DimensionValue: "molestias",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "cupiditate",
                                                DimensionValue: "sint",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "explicabo",
                                                DimensionValue: "et",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "in",
                                                DimensionValue: "vitae",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    Property: "non",
                    ReturnPropertyQuota: false,
                },
                shared.RunPivotReportRequest{
                    CohortSpec: &shared.CohortSpec{
                        CohortReportSettings: &shared.CohortReportSettings{
                            Accumulate: false,
                        },
                        Cohorts: []shared.Cohort{
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "voluptatem",
                                    Name: "aut",
                                    StartDate: "libero",
                                },
                                Dimension: "voluptas",
                                Name: "magni",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "est",
                                    Name: "porro",
                                    StartDate: "voluptas",
                                },
                                Dimension: "nostrum",
                                Name: "voluptatem",
                            },
                        },
                        CohortsRange: &shared.CohortsRange{
                            EndOffset: 183191,
                            Granularity: "DAILY",
                            StartOffset: 586513,
                        },
                    },
                    CurrencyCode: "omnis",
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: "dolorem",
                            Name: "eum",
                            StartDate: "quis",
                        },
                    },
                    DimensionFilter: &shared.FilterExpression{
                        AndGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{},
                            },
                        },
                        Filter: &shared.Filter{
                            BetweenFilter: &shared.BetweenFilter{
                                FromValue: &shared.NumericValue{
                                    DoubleValue: 1464.41,
                                    Int64Value: "cum",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 5696.18,
                                    Int64Value: "enim",
                                },
                            },
                            FieldName: "nihil",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: false,
                                Values: []string{
                                    "quis",
                                    "sapiente",
                                    "et",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "EQUAL",
                                Value: &shared.NumericValue{
                                    DoubleValue: 7561.07,
                                    Int64Value: "in",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: false,
                                MatchType: "BEGINS_WITH",
                                Value: "deserunt",
                            },
                        },
                        NotExpression: &shared.FilterExpression{},
                        OrGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{},
                                shared.FilterExpression{},
                                shared.FilterExpression{},
                                shared.FilterExpression{},
                            },
                        },
                    },
                    Dimensions: []shared.Dimension{
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: "rerum",
                                    DimensionNames: []string{
                                        "necessitatibus",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "tenetur",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "soluta",
                                },
                            },
                            Name: "ducimus",
                        },
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: "ducimus",
                                    DimensionNames: []string{
                                        "reiciendis",
                                        "cumque",
                                        "fugit",
                                        "ullam",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "voluptas",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "vel",
                                },
                            },
                            Name: "velit",
                        },
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: "qui",
                                    DimensionNames: []string{
                                        "aut",
                                        "magnam",
                                        "culpa",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "enim",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "aut",
                                },
                            },
                            Name: "delectus",
                        },
                    },
                    KeepEmptyRows: false,
                    MetricFilter: &shared.FilterExpression{
                        AndGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{},
                                shared.FilterExpression{},
                                shared.FilterExpression{},
                            },
                        },
                        Filter: &shared.Filter{
                            BetweenFilter: &shared.BetweenFilter{
                                FromValue: &shared.NumericValue{
                                    DoubleValue: 5884.65,
                                    Int64Value: "est",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 6596.69,
                                    Int64Value: "et",
                                },
                            },
                            FieldName: "provident",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: false,
                                Values: []string{
                                    "incidunt",
                                    "facilis",
                                    "qui",
                                    "nihil",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "LESS_THAN_OR_EQUAL",
                                Value: &shared.NumericValue{
                                    DoubleValue: 6063.93,
                                    Int64Value: "voluptatum",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: false,
                                MatchType: "MATCH_TYPE_UNSPECIFIED",
                                Value: "rem",
                            },
                        },
                        NotExpression: &shared.FilterExpression{},
                        OrGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{},
                                shared.FilterExpression{},
                            },
                        },
                    },
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Expression: "distinctio",
                            Invisible: false,
                            Name: "quis",
                        },
                        shared.Metric{
                            Expression: "nostrum",
                            Invisible: false,
                            Name: "eum",
                        },
                        shared.Metric{
                            Expression: "et",
                            Invisible: false,
                            Name: "placeat",
                        },
                    },
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            FieldNames: []string{
                                "dolores",
                                "aut",
                                "ullam",
                                "explicabo",
                            },
                            Limit: "similique",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "MINIMUM",
                                "MINIMUM",
                            },
                            Offset: "in",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "et",
                                        OrderType: "NUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "et",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "voluptatem",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "modi",
                                                DimensionValue: "eveniet",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "qui",
                                                DimensionValue: "consequatur",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.Pivot{
                            FieldNames: []string{
                                "iusto",
                            },
                            Limit: "maiores",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "TOTAL",
                                "COUNT",
                                "MINIMUM",
                                "MAXIMUM",
                            },
                            Offset: "ducimus",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "aspernatur",
                                        OrderType: "NUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "aliquid",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "quo",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "repellat",
                                                DimensionValue: "voluptas",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "voluptatem",
                                                DimensionValue: "et",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    Property: "accusamus",
                    ReturnPropertyQuota: false,
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Properties.AnalyticsdataPropertiesBatchRunPivotReports(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchRunPivotReportsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Properties

* `AnalyticsdataPropertiesBatchRunPivotReports` - Returns multiple pivot reports in a batch. All reports must be for the same GA4 Property.
* `AnalyticsdataPropertiesBatchRunReports` - Returns multiple reports in a batch. All reports must be for the same GA4 Property.
* `AnalyticsdataPropertiesCheckCompatibility` - This compatibility method lists dimensions and metrics that can be added to a report request and maintain compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics, reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core reports have different compatibility rules. This method checks compatibility for Core reports.
* `AnalyticsdataPropertiesGetMetadata` - Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions and metrics. In this method, a Google Analytics GA4 Property Identifier is specified in the request, and the metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom metric with parameter name `levels_unlocked` is registered to a property, the Metadata response will contain `customEvent:levels_unlocked`. Universal metadata are dimensions and metrics applicable to any property such as `country` and `totalUsers`.
* `AnalyticsdataPropertiesRunPivotReport` - Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in a pivot. Multiple pivots can be specified to further dissect your data.
* `AnalyticsdataPropertiesRunRealtimeReport` - Returns a customized report of realtime event data for your property. Events appear in realtime reports seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360 properties). For a guide to constructing realtime requests & understanding responses, see [Creating a Realtime Report](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-basics).
* `AnalyticsdataPropertiesRunReport` - Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for the requested dimensions and metrics. Metrics are individual measurements of user activity on your property, such as active users or event count. Dimensions break down metrics across some common criteria, such as country or event name. For a guide to constructing requests & understanding responses, see [Creating a Report](https://developers.google.com/analytics/devguides/reporting/data/v1/basics).
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
