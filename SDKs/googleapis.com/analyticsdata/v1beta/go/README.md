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
        DollarXgafv: "2",
        BatchRunPivotReportsRequest: &shared.BatchRunPivotReportsRequest{
            Requests: []shared.RunPivotReportRequest{
                shared.RunPivotReportRequest{
                    CohortSpec: &shared.CohortSpec{
                        CohortReportSettings: &shared.CohortReportSettings{
                            Accumulate: false,
                        },
                        Cohorts: []shared.Cohort{
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "quibusdam",
                                    Name: "unde",
                                    StartDate: "nulla",
                                },
                                Dimension: "corrupti",
                                Name: "illum",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "vel",
                                    Name: "error",
                                    StartDate: "deserunt",
                                },
                                Dimension: "suscipit",
                                Name: "iure",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "magnam",
                                    Name: "debitis",
                                    StartDate: "ipsa",
                                },
                                Dimension: "delectus",
                                Name: "tempora",
                            },
                        },
                        CohortsRange: &shared.CohortsRange{
                            EndOffset: 383441,
                            Granularity: "DAILY",
                            StartOffset: 791725,
                        },
                    },
                    CurrencyCode: "placeat",
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: "iusto",
                            Name: "excepturi",
                            StartDate: "nisi",
                        },
                        shared.DateRange{
                            EndDate: "recusandae",
                            Name: "temporibus",
                            StartDate: "ab",
                        },
                        shared.DateRange{
                            EndDate: "quis",
                            Name: "veritatis",
                            StartDate: "deserunt",
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
                                    DoubleValue: 3682.41,
                                    Int64Value: "repellendus",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 9571.56,
                                    Int64Value: "quo",
                                },
                            },
                            FieldName: "odit",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: false,
                                Values: []string{
                                    "at",
                                    "maiores",
                                    "molestiae",
                                    "quod",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "GREATER_THAN",
                                Value: &shared.NumericValue{
                                    DoubleValue: 4614.79,
                                    Int64Value: "totam",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: false,
                                MatchType: "FULL_REGEXP",
                                Value: "dolorum",
                            },
                        },
                        NotExpression: &shared.FilterExpression{},
                        OrGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
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
                                        "fugit",
                                        "deleniti",
                                        "hic",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "optio",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "totam",
                                },
                            },
                            Name: "beatae",
                        },
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
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: "ipsum",
                                    DimensionNames: []string{
                                        "aspernatur",
                                        "perferendis",
                                        "ad",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "natus",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "sed",
                                },
                            },
                            Name: "iste",
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
                                    DoubleValue: 6169.34,
                                    Int64Value: "laboriosam",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 9437.49,
                                    Int64Value: "saepe",
                                },
                            },
                            FieldName: "fuga",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: false,
                                Values: []string{
                                    "corporis",
                                    "iste",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "LESS_THAN",
                                Value: &shared.NumericValue{
                                    DoubleValue: 9023.49,
                                    Int64Value: "quidem",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: false,
                                MatchType: "MATCH_TYPE_UNSPECIFIED",
                                Value: "ipsa",
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
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Expression: "mollitia",
                            Invisible: false,
                            Name: "laborum",
                        },
                        shared.Metric{
                            Expression: "dolores",
                            Invisible: false,
                            Name: "dolorem",
                        },
                        shared.Metric{
                            Expression: "corporis",
                            Invisible: false,
                            Name: "explicabo",
                        },
                    },
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            FieldNames: []string{
                                "omnis",
                                "nemo",
                            },
                            Limit: "minima",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "METRIC_AGGREGATION_UNSPECIFIED",
                                "MINIMUM",
                                "MAXIMUM",
                            },
                            Offset: "doloribus",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "architecto",
                                        OrderType: "CASE_INSENSITIVE_ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "dolorem",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "culpa",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "repellat",
                                                DimensionValue: "mollitia",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "occaecati",
                                        OrderType: "ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "commodi",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "quam",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "velit",
                                                DimensionValue: "error",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "quia",
                                                DimensionValue: "quis",
                                            },
                                        },
                                    },
                                },
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
                        shared.Pivot{
                            FieldNames: []string{
                                "incidunt",
                                "enim",
                                "consequatur",
                                "est",
                            },
                            Limit: "quibusdam",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "MAXIMUM",
                            },
                            Offset: "distinctio",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "labore",
                                        OrderType: "ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "qui",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "aliquid",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "quos",
                                                DimensionValue: "perferendis",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "magni",
                                                DimensionValue: "assumenda",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "ipsam",
                                                DimensionValue: "alias",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "fugit",
                                        OrderType: "CASE_INSENSITIVE_ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "excepturi",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "tempora",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "tempore",
                                                DimensionValue: "labore",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "delectus",
                                                DimensionValue: "eum",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "non",
                                                DimensionValue: "eligendi",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "sint",
                                        OrderType: "ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "provident",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "necessitatibus",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "officia",
                                                DimensionValue: "dolor",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "debitis",
                                                DimensionValue: "a",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "dolorum",
                                                DimensionValue: "in",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "in",
                                        OrderType: "NUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "maiores",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "rerum",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "magnam",
                                                DimensionValue: "cumque",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.Pivot{
                            FieldNames: []string{
                                "ea",
                                "aliquid",
                                "laborum",
                                "accusamus",
                            },
                            Limit: "non",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "TOTAL",
                                "COUNT",
                                "COUNT",
                            },
                            Offset: "quidem",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "nam",
                                        OrderType: "CASE_INSENSITIVE_ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "blanditiis",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "deleniti",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "amet",
                                                DimensionValue: "deserunt",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "nisi",
                                                DimensionValue: "vel",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "natus",
                                                DimensionValue: "omnis",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "molestiae",
                                                DimensionValue: "perferendis",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "nihil",
                                        OrderType: "ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "distinctio",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "id",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "labore",
                                                DimensionValue: "suscipit",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "natus",
                                                DimensionValue: "nobis",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "eum",
                                        OrderType: "NUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "aspernatur",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "architecto",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "et",
                                                DimensionValue: "excepturi",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "ullam",
                                                DimensionValue: "provident",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    Property: "quos",
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
                                    EndDate: "accusantium",
                                    Name: "mollitia",
                                    StartDate: "reiciendis",
                                },
                                Dimension: "mollitia",
                                Name: "ad",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "eum",
                                    Name: "dolor",
                                    StartDate: "necessitatibus",
                                },
                                Dimension: "odit",
                                Name: "nemo",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "quasi",
                                    Name: "iure",
                                    StartDate: "doloribus",
                                },
                                Dimension: "debitis",
                                Name: "eius",
                            },
                        },
                        CohortsRange: &shared.CohortsRange{
                            EndOffset: 806194,
                            Granularity: "WEEKLY",
                            StartOffset: 703889,
                        },
                    },
                    CurrencyCode: "in",
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: "architecto",
                            Name: "repudiandae",
                            StartDate: "ullam",
                        },
                    },
                    DimensionFilter: &shared.FilterExpression{
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
                                    DoubleValue: 4692.49,
                                    Int64Value: "repellat",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 8411.4,
                                    Int64Value: "sed",
                                },
                            },
                            FieldName: "saepe",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: false,
                                Values: []string{
                                    "accusantium",
                                    "consequuntur",
                                    "praesentium",
                                    "natus",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "EQUAL",
                                Value: &shared.NumericValue{
                                    DoubleValue: 1238.2,
                                    Int64Value: "quo",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: false,
                                MatchType: "FULL_REGEXP",
                                Value: "pariatur",
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
                                    Delimiter: "excepturi",
                                    DimensionNames: []string{
                                        "ea",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "accusantium",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "ab",
                                },
                            },
                            Name: "maiores",
                        },
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: "quidem",
                                    DimensionNames: []string{
                                        "voluptate",
                                        "autem",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "nam",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "eaque",
                                },
                            },
                            Name: "pariatur",
                        },
                    },
                    KeepEmptyRows: false,
                    MetricFilter: &shared.FilterExpression{
                        AndGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{},
                                shared.FilterExpression{},
                            },
                        },
                        Filter: &shared.Filter{
                            BetweenFilter: &shared.BetweenFilter{
                                FromValue: &shared.NumericValue{
                                    DoubleValue: 9755.22,
                                    Int64Value: "perferendis",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 8558.04,
                                    Int64Value: "amet",
                                },
                            },
                            FieldName: "aut",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: false,
                                Values: []string{
                                    "corporis",
                                    "hic",
                                    "libero",
                                    "nobis",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "EQUAL",
                                Value: &shared.NumericValue{
                                    DoubleValue: 3394.04,
                                    Int64Value: "totam",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: false,
                                MatchType: "ENDS_WITH",
                                Value: "eaque",
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
                            Expression: "eos",
                            Invisible: false,
                            Name: "perferendis",
                        },
                    },
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            FieldNames: []string{
                                "quam",
                                "dolor",
                                "vero",
                                "nostrum",
                            },
                            Limit: "hic",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "MAXIMUM",
                                "MAXIMUM",
                                "MINIMUM",
                                "METRIC_AGGREGATION_UNSPECIFIED",
                            },
                            Offset: "porro",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "blanditiis",
                                        OrderType: "CASE_INSENSITIVE_ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "eaque",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "occaecati",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "adipisci",
                                                DimensionValue: "asperiores",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "earum",
                                                DimensionValue: "modi",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "iste",
                                                DimensionValue: "dolorum",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    Property: "deleniti",
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
                                    EndDate: "provident",
                                    Name: "nobis",
                                    StartDate: "libero",
                                },
                                Dimension: "delectus",
                                Name: "quaerat",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "quos",
                                    Name: "aliquid",
                                    StartDate: "dolorem",
                                },
                                Dimension: "dolorem",
                                Name: "dolor",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "qui",
                                    Name: "ipsum",
                                    StartDate: "hic",
                                },
                                Dimension: "excepturi",
                                Name: "cum",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "voluptate",
                                    Name: "dignissimos",
                                    StartDate: "reiciendis",
                                },
                                Dimension: "amet",
                                Name: "dolorum",
                            },
                        },
                        CohortsRange: &shared.CohortsRange{
                            EndOffset: 254356,
                            Granularity: "GRANULARITY_UNSPECIFIED",
                            StartOffset: 58029,
                        },
                    },
                    CurrencyCode: "ipsa",
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: "odio",
                            Name: "quaerat",
                            StartDate: "accusamus",
                        },
                        shared.DateRange{
                            EndDate: "quidem",
                            Name: "voluptatibus",
                            StartDate: "voluptas",
                        },
                    },
                    DimensionFilter: &shared.FilterExpression{
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
                                    DoubleValue: 1796.03,
                                    Int64Value: "atque",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 246.78,
                                    Int64Value: "fugiat",
                                },
                            },
                            FieldName: "ab",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: false,
                                Values: []string{
                                    "dolorum",
                                    "iusto",
                                    "voluptate",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "GREATER_THAN",
                                Value: &shared.NumericValue{
                                    DoubleValue: 5365.79,
                                    Int64Value: "omnis",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: false,
                                MatchType: "PARTIAL_REGEXP",
                                Value: "distinctio",
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
                                    Delimiter: "ipsum",
                                    DimensionNames: []string{
                                        "id",
                                        "saepe",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "eius",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "aspernatur",
                                },
                            },
                            Name: "perferendis",
                        },
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: "amet",
                                    DimensionNames: []string{
                                        "accusamus",
                                        "ad",
                                        "saepe",
                                        "suscipit",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "deserunt",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "provident",
                                },
                            },
                            Name: "minima",
                        },
                    },
                    KeepEmptyRows: false,
                    MetricFilter: &shared.FilterExpression{
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
                                    DoubleValue: 5197.11,
                                    Int64Value: "similique",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 0.55,
                                    Int64Value: "at",
                                },
                            },
                            FieldName: "quaerat",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: false,
                                Values: []string{
                                    "vel",
                                    "quod",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "GREATER_THAN_OR_EQUAL",
                                Value: &shared.NumericValue{
                                    DoubleValue: 1856.36,
                                    Int64Value: "dolorum",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: false,
                                MatchType: "PARTIAL_REGEXP",
                                Value: "esse",
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
                            Expression: "ipsum",
                            Invisible: false,
                            Name: "quisquam",
                        },
                        shared.Metric{
                            Expression: "tenetur",
                            Invisible: false,
                            Name: "amet",
                        },
                    },
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            FieldNames: []string{
                                "numquam",
                                "enim",
                                "dolorem",
                                "sapiente",
                            },
                            Limit: "totam",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "METRIC_AGGREGATION_UNSPECIFIED",
                                "MAXIMUM",
                            },
                            Offset: "neque",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "vel",
                                        OrderType: "CASE_INSENSITIVE_ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "voluptas",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "deserunt",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "ipsum",
                                                DimensionValue: "incidunt",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "qui",
                                                DimensionValue: "cupiditate",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.Pivot{
                            FieldNames: []string{
                                "pariatur",
                                "soluta",
                                "dicta",
                                "laborum",
                            },
                            Limit: "totam",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "METRIC_AGGREGATION_UNSPECIFIED",
                                "METRIC_AGGREGATION_UNSPECIFIED",
                            },
                            Offset: "distinctio",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "aliquid",
                                        OrderType: "ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "molestias",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "temporibus",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "neque",
                                                DimensionValue: "fugit",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "magni",
                                        OrderType: "ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "sunt",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "ullam",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "hic",
                                                DimensionValue: "voluptatem",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "cumque",
                                                DimensionValue: "soluta",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "nobis",
                                                DimensionValue: "et",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "saepe",
                                        OrderType: "ORDER_TYPE_UNSPECIFIED",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "veritatis",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "nobis",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "tempore",
                                                DimensionValue: "cupiditate",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "aperiam",
                                                DimensionValue: "delectus",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "dolorem",
                                                DimensionValue: "dolore",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.Pivot{
                            FieldNames: []string{
                                "adipisci",
                                "dolorum",
                            },
                            Limit: "architecto",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "METRIC_AGGREGATION_UNSPECIFIED",
                            },
                            Offset: "quas",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "consequatur",
                                        OrderType: "CASE_INSENSITIVE_ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "repellendus",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "porro",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "ut",
                                                DimensionValue: "facilis",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "cupiditate",
                                                DimensionValue: "qui",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "quae",
                                                DimensionValue: "laudantium",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "odio",
                                                DimensionValue: "occaecati",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "voluptatibus",
                                        OrderType: "NUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "vero",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "omnis",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "ipsum",
                                                DimensionValue: "delectus",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "voluptate",
                                                DimensionValue: "consectetur",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "vero",
                                        OrderType: "NUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "dignissimos",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "hic",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "quod",
                                                DimensionValue: "odio",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "similique",
                                                DimensionValue: "facilis",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "vero",
                                                DimensionValue: "ducimus",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "dolore",
                                        OrderType: "NUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "illum",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "sequi",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "impedit",
                                                DimensionValue: "aut",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "voluptatibus",
                                                DimensionValue: "exercitationem",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "nulla",
                                                DimensionValue: "fugit",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    Property: "porro",
                    ReturnPropertyQuota: false,
                },
            },
        },
        AccessToken: "maiores",
        Alt: "proto",
        Callback: "iusto",
        Fields: "eligendi",
        Key: "ducimus",
        OauthToken: "alias",
        PrettyPrint: false,
        Property: "officia",
        QuotaUser: "tempora",
        UploadType: "ipsam",
        UploadProtocol: "ea",
    }

    ctx := context.Background()
    res, err := s.Properties.AnalyticsdataPropertiesBatchRunPivotReports(ctx, req, operations.AnalyticsdataPropertiesBatchRunPivotReportsSecurity{
        Option1: &operations.AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
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
## Available Resources and Operations


### Properties

* `AnalyticsdataPropertiesBatchRunPivotReports` - Returns multiple pivot reports in a batch. All reports must be for the same GA4 Property.
* `AnalyticsdataPropertiesBatchRunReports` - Returns multiple reports in a batch. All reports must be for the same GA4 Property.
* `AnalyticsdataPropertiesCheckCompatibility` - This compatibility method lists dimensions and metrics that can be added to a report request and maintain compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics, reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core reports have different compatibility rules. This method checks compatibility for Core reports.
* `AnalyticsdataPropertiesGetMetadata` - Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions and metrics. In this method, a Google Analytics GA4 Property Identifier is specified in the request, and the metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom metric with parameter name `levels_unlocked` is registered to a property, the Metadata response will contain `customEvent:levels_unlocked`. Universal metadata are dimensions and metrics applicable to any property such as `country` and `totalUsers`.
* `AnalyticsdataPropertiesRunPivotReport` - Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in a pivot. Multiple pivots can be specified to further dissect your data.
* `AnalyticsdataPropertiesRunRealtimeReport` - Returns a customized report of realtime event data for your property. Events appear in realtime reports seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360 properties). For a guide to constructing realtime requests & understanding responses, see [Creating a Realtime Report](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-basics).
* `AnalyticsdataPropertiesRunReport` - Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for the requested dimensions and metrics. Metrics are individual measurements of user activity on your property, such as active users or event count. Dimensions break down metrics across some common criteria, such as country or event name. For a guide to constructing requests & understanding responses, see [Creating a Report](https://developers.google.com/analytics/devguides/reporting/data/v1/basics).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
