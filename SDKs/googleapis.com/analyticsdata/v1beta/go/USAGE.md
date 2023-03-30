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
            Property: "corrupti",
        },
        QueryParams: operations.AnalyticsdataPropertiesBatchRunPivotReportsQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
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
                                    EndDate: "magnam",
                                    Name: "debitis",
                                    StartDate: "ipsa",
                                },
                                Dimension: "delectus",
                                Name: "tempora",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "suscipit",
                                    Name: "molestiae",
                                    StartDate: "minus",
                                },
                                Dimension: "placeat",
                                Name: "voluptatum",
                            },
                        },
                        CohortsRange: &shared.CohortsRange{
                            EndOffset: 479977,
                            Granularity: "WEEKLY",
                            StartOffset: 392785,
                        },
                    },
                    CurrencyCode: "recusandae",
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: "ab",
                            Name: "quis",
                            StartDate: "veritatis",
                        },
                        shared.DateRange{
                            EndDate: "deserunt",
                            Name: "perferendis",
                            StartDate: "ipsam",
                        },
                        shared.DateRange{
                            EndDate: "repellendus",
                            Name: "sapiente",
                            StartDate: "quo",
                        },
                        shared.DateRange{
                            EndDate: "odit",
                            Name: "at",
                            StartDate: "at",
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
                                    Int64Value: "quod",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 8009.11,
                                    Int64Value: "esse",
                                },
                            },
                            FieldName: "totam",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: false,
                                Values: []string{
                                    "dolorum",
                                    "dicta",
                                    "nam",
                                    "officia",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "LESS_THAN_OR_EQUAL",
                                Value: &shared.NumericValue{
                                    DoubleValue: 1433.53,
                                    Int64Value: "deleniti",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: false,
                                MatchType: "PARTIAL_REGEXP",
                                Value: "optio",
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
                                    Delimiter: "commodi",
                                    DimensionNames: []string{
                                        "modi",
                                        "qui",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "impedit",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "cum",
                                },
                            },
                            Name: "esse",
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
                                    Int64Value: "aspernatur",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 187.89,
                                    Int64Value: "ad",
                                },
                            },
                            FieldName: "natus",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: false,
                                Values: []string{
                                    "iste",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "EQUAL",
                                Value: &shared.NumericValue{
                                    DoubleValue: 6169.34,
                                    Int64Value: "laboriosam",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: false,
                                MatchType: "PARTIAL_REGEXP",
                                Value: "saepe",
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
                            Expression: "corporis",
                            Invisible: false,
                            Name: "iste",
                        },
                        shared.Metric{
                            Expression: "iure",
                            Invisible: false,
                            Name: "saepe",
                        },
                    },
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            FieldNames: []string{
                                "ipsa",
                            },
                            Limit: "reiciendis",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "MAXIMUM",
                                "MAXIMUM",
                                "METRIC_AGGREGATION_UNSPECIFIED",
                            },
                            Offset: "dolorem",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "explicabo",
                                        OrderType: "NUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "enim",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "omnis",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "minima",
                                                DimensionValue: "excepturi",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "accusantium",
                                                DimensionValue: "iure",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "culpa",
                                        OrderType: "NUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "sapiente",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "architecto",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "dolorem",
                                                DimensionValue: "culpa",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "consequuntur",
                                                DimensionValue: "repellat",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "mollitia",
                                                DimensionValue: "occaecati",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.Pivot{
                            FieldNames: []string{
                                "commodi",
                                "quam",
                            },
                            Limit: "molestiae",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "MAXIMUM",
                            },
                            Offset: "quia",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "vitae",
                                        OrderType: "CASE_INSENSITIVE_ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "animi",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "enim",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "quo",
                                                DimensionValue: "sequi",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "tenetur",
                                        OrderType: "ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "id",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "possimus",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "quasi",
                                                DimensionValue: "error",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.Pivot{
                            FieldNames: []string{
                                "laborum",
                                "quasi",
                                "reiciendis",
                                "voluptatibus",
                            },
                            Limit: "vero",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "MINIMUM",
                                "COUNT",
                            },
                            Offset: "ipsa",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "voluptate",
                                        OrderType: "CASE_INSENSITIVE_ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "perferendis",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "doloremque",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "ut",
                                                DimensionValue: "maiores",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "dicta",
                                                DimensionValue: "corporis",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "dolore",
                                        OrderType: "ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "dicta",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "harum",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "accusamus",
                                                DimensionValue: "commodi",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "repudiandae",
                                                DimensionValue: "quae",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "ipsum",
                                        OrderType: "CASE_INSENSITIVE_ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "molestias",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "excepturi",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "modi",
                                                DimensionValue: "praesentium",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "rem",
                                                DimensionValue: "voluptates",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "quasi",
                                                DimensionValue: "repudiandae",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "sint",
                                                DimensionValue: "veritatis",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    Property: "itaque",
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
                                    EndDate: "enim",
                                    Name: "consequatur",
                                    StartDate: "est",
                                },
                                Dimension: "quibusdam",
                                Name: "explicabo",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "deserunt",
                                    Name: "distinctio",
                                    StartDate: "quibusdam",
                                },
                                Dimension: "labore",
                                Name: "modi",
                            },
                        },
                        CohortsRange: &shared.CohortsRange{
                            EndOffset: 183191,
                            Granularity: "DAILY",
                            StartOffset: 586513,
                        },
                    },
                    CurrencyCode: "quos",
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: "magni",
                            Name: "assumenda",
                            StartDate: "ipsam",
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
                                    Int64Value: "dolorum",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 5696.18,
                                    Int64Value: "tempora",
                                },
                            },
                            FieldName: "facilis",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: false,
                                Values: []string{
                                    "labore",
                                    "delectus",
                                    "eum",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "EQUAL",
                                Value: &shared.NumericValue{
                                    DoubleValue: 7561.07,
                                    Int64Value: "sint",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: false,
                                MatchType: "BEGINS_WITH",
                                Value: "provident",
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
                                    Delimiter: "officia",
                                    DimensionNames: []string{
                                        "debitis",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "a",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "dolorum",
                                },
                            },
                            Name: "in",
                        },
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: "in",
                                    DimensionNames: []string{
                                        "maiores",
                                        "rerum",
                                        "dicta",
                                        "magnam",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "cumque",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "facere",
                                },
                            },
                            Name: "ea",
                        },
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: "aliquid",
                                    DimensionNames: []string{
                                        "accusamus",
                                        "non",
                                        "occaecati",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "enim",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "accusamus",
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
                                    Int64Value: "nam",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 6596.69,
                                    Int64Value: "blanditiis",
                                },
                            },
                            FieldName: "deleniti",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: false,
                                Values: []string{
                                    "amet",
                                    "deserunt",
                                    "nisi",
                                    "vel",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "LESS_THAN_OR_EQUAL",
                                Value: &shared.NumericValue{
                                    DoubleValue: 6063.93,
                                    Int64Value: "molestiae",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: false,
                                MatchType: "MATCH_TYPE_UNSPECIFIED",
                                Value: "nihil",
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
                            Expression: "id",
                            Invisible: false,
                            Name: "labore",
                        },
                        shared.Metric{
                            Expression: "labore",
                            Invisible: false,
                            Name: "suscipit",
                        },
                        shared.Metric{
                            Expression: "natus",
                            Invisible: false,
                            Name: "nobis",
                        },
                    },
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            FieldNames: []string{
                                "aspernatur",
                                "architecto",
                                "magnam",
                                "et",
                            },
                            Limit: "excepturi",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "MINIMUM",
                                "MINIMUM",
                            },
                            Offset: "sint",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "mollitia",
                                        OrderType: "NUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "mollitia",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "ad",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "dolor",
                                                DimensionValue: "necessitatibus",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "odit",
                                                DimensionValue: "nemo",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.Pivot{
                            FieldNames: []string{
                                "iure",
                            },
                            Limit: "doloribus",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "TOTAL",
                                "COUNT",
                                "MINIMUM",
                                "MAXIMUM",
                            },
                            Offset: "in",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "architecto",
                                        OrderType: "NUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "ullam",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "expedita",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "repellat",
                                                DimensionValue: "quibusdam",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "sed",
                                                DimensionValue: "saepe",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    Property: "pariatur",
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