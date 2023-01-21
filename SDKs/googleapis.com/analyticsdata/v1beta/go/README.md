# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            Property: "sit",
        },
        QueryParams: operations.AnalyticsdataPropertiesBatchRunPivotReportsQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.BatchRunPivotReportsRequest{
            Requests: []shared.RunPivotReportRequest{
                shared.RunPivotReportRequest{
                    CohortSpec: &shared.CohortSpec{
                        CohortReportSettings: &shared.CohortReportSettings{
                            Accumulate: true,
                        },
                        Cohorts: []shared.Cohort{
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "et",
                                    Name: "ut",
                                    StartDate: "dolorem",
                                },
                                Dimension: "et",
                                Name: "voluptate",
                            },
                        },
                        CohortsRange: &shared.CohortsRange{
                            EndOffset: 3287288577352441706,
                            Granularity: "GRANULARITY_UNSPECIFIED",
                            StartOffset: 4706154865122290029,
                        },
                    },
                    CurrencyCode: "dolores",
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: "debitis",
                            Name: "vel",
                            StartDate: "odio",
                        },
                        shared.DateRange{
                            EndDate: "dolore",
                            Name: "id",
                            StartDate: "aspernatur",
                        },
                        shared.DateRange{
                            EndDate: "accusantium",
                            Name: "totam",
                            StartDate: "commodi",
                        },
                    },
                    DimensionFilter: &shared.FilterExpression{
                        AndGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                        Filter: &shared.Filter{
                            BetweenFilter: &shared.BetweenFilter{
                                FromValue: &shared.NumericValue{
                                    DoubleValue: 93.099998,
                                    Int64Value: "odit",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 49.099998,
                                    Int64Value: "omnis",
                                },
                            },
                            FieldName: "aut",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: true,
                                Values: []string{
                                    "officiis",
                                    "autem",
                                    "consectetur",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "OPERATION_UNSPECIFIED",
                                Value: &shared.NumericValue{
                                    DoubleValue: 22.200001,
                                    Int64Value: "recusandae",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: true,
                                MatchType: "FULL_REGEXP",
                                Value: "eveniet",
                            },
                        },
                        NotExpression: &shared.FilterExpression{
                        
                        },
                        OrGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                    },
                    Dimensions: []shared.Dimension{
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: "inventore",
                                    DimensionNames: []string{
                                        "exercitationem",
                                        "aut",
                                        "reprehenderit",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "tempore",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "maiores",
                                },
                            },
                            Name: "incidunt",
                        },
                    },
                    KeepEmptyRows: false,
                    MetricFilter: &shared.FilterExpression{
                        AndGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                        Filter: &shared.Filter{
                            BetweenFilter: &shared.BetweenFilter{
                                FromValue: &shared.NumericValue{
                                    DoubleValue: 19.100000,
                                    Int64Value: "et",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 81.199997,
                                    Int64Value: "ex",
                                },
                            },
                            FieldName: "dolores",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: true,
                                Values: []string{
                                    "rerum",
                                    "mollitia",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "GREATER_THAN",
                                Value: &shared.NumericValue{
                                    DoubleValue: 63.200001,
                                    Int64Value: "qui",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: false,
                                MatchType: "MATCH_TYPE_UNSPECIFIED",
                                Value: "in",
                            },
                        },
                        NotExpression: &shared.FilterExpression{
                        
                        },
                        OrGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                    },
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Expression: "ut",
                            Invisible: false,
                            Name: "ab",
                        },
                    },
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            FieldNames: []string{
                                "et",
                                "accusantium",
                                "esse",
                            },
                            Limit: "architecto",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "COUNT",
                            },
                            Offset: "cumque",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: true,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "voluptates",
                                        OrderType: "ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "et",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "optio",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "earum",
                                                DimensionValue: "illo",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    Property: "omnis",
                    ReturnPropertyQuota: true,
                },
                shared.RunPivotReportRequest{
                    CohortSpec: &shared.CohortSpec{
                        CohortReportSettings: &shared.CohortReportSettings{
                            Accumulate: false,
                        },
                        Cohorts: []shared.Cohort{
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "commodi",
                                    Name: "error",
                                    StartDate: "reprehenderit",
                                },
                                Dimension: "consectetur",
                                Name: "nostrum",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "ut",
                                    Name: "laboriosam",
                                    StartDate: "sed",
                                },
                                Dimension: "a",
                                Name: "soluta",
                            },
                        },
                        CohortsRange: &shared.CohortsRange{
                            EndOffset: 7540276489530073149,
                            Granularity: "WEEKLY",
                            StartOffset: 3242614188194728891,
                        },
                    },
                    CurrencyCode: "laudantium",
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: "ipsa",
                            Name: "expedita",
                            StartDate: "doloremque",
                        },
                    },
                    DimensionFilter: &shared.FilterExpression{
                        AndGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                        Filter: &shared.Filter{
                            BetweenFilter: &shared.BetweenFilter{
                                FromValue: &shared.NumericValue{
                                    DoubleValue: 26.200001,
                                    Int64Value: "quisquam",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 0.100000,
                                    Int64Value: "maxime",
                                },
                            },
                            FieldName: "eum",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: false,
                                Values: []string{
                                    "rerum",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "LESS_THAN",
                                Value: &shared.NumericValue{
                                    DoubleValue: 9.200000,
                                    Int64Value: "minima",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: false,
                                MatchType: "CONTAINS",
                                Value: "quis",
                            },
                        },
                        NotExpression: &shared.FilterExpression{
                        
                        },
                        OrGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                    },
                    Dimensions: []shared.Dimension{
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: "et",
                                    DimensionNames: []string{
                                        "ad",
                                        "expedita",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "vel",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "qui",
                                },
                            },
                            Name: "modi",
                        },
                    },
                    KeepEmptyRows: true,
                    MetricFilter: &shared.FilterExpression{
                        AndGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                        Filter: &shared.Filter{
                            BetweenFilter: &shared.BetweenFilter{
                                FromValue: &shared.NumericValue{
                                    DoubleValue: 42.200001,
                                    Int64Value: "sunt",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 68.099998,
                                    Int64Value: "quis",
                                },
                            },
                            FieldName: "vel",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: false,
                                Values: []string{
                                    "qui",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "EQUAL",
                                Value: &shared.NumericValue{
                                    DoubleValue: 96.099998,
                                    Int64Value: "porro",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: true,
                                MatchType: "PARTIAL_REGEXP",
                                Value: "accusamus",
                            },
                        },
                        NotExpression: &shared.FilterExpression{
                        
                        },
                        OrGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                    },
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Expression: "rerum",
                            Invisible: true,
                            Name: "laborum",
                        },
                        shared.Metric{
                            Expression: "fugit",
                            Invisible: false,
                            Name: "minus",
                        },
                        shared.Metric{
                            Expression: "soluta",
                            Invisible: false,
                            Name: "consequuntur",
                        },
                    },
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            FieldNames: []string{
                                "inventore",
                                "delectus",
                            },
                            Limit: "ipsa",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "TOTAL",
                                "MAXIMUM",
                            },
                            Offset: "aliquam",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "sed",
                                        OrderType: "CASE_INSENSITIVE_ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "consequuntur",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "non",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "provident",
                                                DimensionValue: "molestiae",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "pariatur",
                                                DimensionValue: "quasi",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "corrupti",
                                                DimensionValue: "enim",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    Property: "qui",
                    ReturnPropertyQuota: true,
                },
                shared.RunPivotReportRequest{
                    CohortSpec: &shared.CohortSpec{
                        CohortReportSettings: &shared.CohortReportSettings{
                            Accumulate: false,
                        },
                        Cohorts: []shared.Cohort{
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "neque",
                                    Name: "consequuntur",
                                    StartDate: "quia",
                                },
                                Dimension: "et",
                                Name: "est",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "occaecati",
                                    Name: "ex",
                                    StartDate: "voluptatem",
                                },
                                Dimension: "quia",
                                Name: "temporibus",
                            },
                        },
                        CohortsRange: &shared.CohortsRange{
                            EndOffset: 289049468571435444,
                            Granularity: "WEEKLY",
                            StartOffset: 5042961816383320698,
                        },
                    },
                    CurrencyCode: "ut",
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: "in",
                            Name: "possimus",
                            StartDate: "voluptatem",
                        },
                        shared.DateRange{
                            EndDate: "dolorum",
                            Name: "doloribus",
                            StartDate: "saepe",
                        },
                    },
                    DimensionFilter: &shared.FilterExpression{
                        AndGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                        Filter: &shared.Filter{
                            BetweenFilter: &shared.BetweenFilter{
                                FromValue: &shared.NumericValue{
                                    DoubleValue: 59.099998,
                                    Int64Value: "ut",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 80.099998,
                                    Int64Value: "est",
                                },
                            },
                            FieldName: "ipsum",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: false,
                                Values: []string{
                                    "nihil",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "LESS_THAN_OR_EQUAL",
                                Value: &shared.NumericValue{
                                    DoubleValue: 69.199997,
                                    Int64Value: "non",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: false,
                                MatchType: "ENDS_WITH",
                                Value: "possimus",
                            },
                        },
                        NotExpression: &shared.FilterExpression{
                        
                        },
                        OrGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                    },
                    Dimensions: []shared.Dimension{
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: "quia",
                                    DimensionNames: []string{
                                        "ducimus",
                                        "enim",
                                        "blanditiis",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "distinctio",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "delectus",
                                },
                            },
                            Name: "rerum",
                        },
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: "dolore",
                                    DimensionNames: []string{
                                        "velit",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "officia",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "modi",
                                },
                            },
                            Name: "sunt",
                        },
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: "voluptas",
                                    DimensionNames: []string{
                                        "et",
                                        "a",
                                        "qui",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: "excepturi",
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: "autem",
                                },
                            },
                            Name: "corporis",
                        },
                    },
                    KeepEmptyRows: false,
                    MetricFilter: &shared.FilterExpression{
                        AndGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                        Filter: &shared.Filter{
                            BetweenFilter: &shared.BetweenFilter{
                                FromValue: &shared.NumericValue{
                                    DoubleValue: 21.100000,
                                    Int64Value: "nisi",
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: 78.199997,
                                    Int64Value: "minus",
                                },
                            },
                            FieldName: "et",
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: false,
                                Values: []string{
                                    "rem",
                                    "eos",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: "OPERATION_UNSPECIFIED",
                                Value: &shared.NumericValue{
                                    DoubleValue: 90.099998,
                                    Int64Value: "praesentium",
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: true,
                                MatchType: "CONTAINS",
                                Value: "adipisci",
                            },
                        },
                        NotExpression: &shared.FilterExpression{
                        
                        },
                        OrGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                                shared.FilterExpression{
                                
                                },
                            },
                        },
                    },
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Expression: "accusantium",
                            Invisible: true,
                            Name: "amet",
                        },
                        shared.Metric{
                            Expression: "nisi",
                            Invisible: true,
                            Name: "est",
                        },
                        shared.Metric{
                            Expression: "quo",
                            Invisible: true,
                            Name: "alias",
                        },
                    },
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            FieldNames: []string{
                                "eius",
                            },
                            Limit: "repellat",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "TOTAL",
                                "TOTAL",
                                "COUNT",
                            },
                            Offset: "et",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "et",
                                        OrderType: "CASE_INSENSITIVE_ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "repellendus",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "voluptas",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "veniam",
                                                DimensionValue: "architecto",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "molestias",
                                                DimensionValue: "rerum",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: true,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "et",
                                        OrderType: "ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "commodi",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "in",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "asperiores",
                                                DimensionValue: "quo",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "ea",
                                                DimensionValue: "soluta",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: true,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "commodi",
                                        OrderType: "CASE_INSENSITIVE_ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "facere",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "in",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "odit",
                                                DimensionValue: "est",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "id",
                                                DimensionValue: "ipsum",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "aut",
                                                DimensionValue: "perspiciatis",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.Pivot{
                            FieldNames: []string{
                                "vero",
                                "voluptatem",
                                "ex",
                            },
                            Limit: "magni",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "MINIMUM",
                                "TOTAL",
                            },
                            Offset: "ea",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "nam",
                                        OrderType: "ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "quae",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "qui",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "minus",
                                                DimensionValue: "sit",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "aut",
                                                DimensionValue: "neque",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "iusto",
                                                DimensionValue: "quia",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "debitis",
                                        OrderType: "CASE_INSENSITIVE_ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "odit",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "enim",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "non",
                                                DimensionValue: "nihil",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "laborum",
                                                DimensionValue: "recusandae",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "nihil",
                                                DimensionValue: "exercitationem",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "perferendis",
                                        OrderType: "ORDER_TYPE_UNSPECIFIED",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "autem",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "hic",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "omnis",
                                                DimensionValue: "libero",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "qui",
                                                DimensionValue: "omnis",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.Pivot{
                            FieldNames: []string{
                                "nostrum",
                                "non",
                            },
                            Limit: "sit",
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                "METRIC_AGGREGATION_UNSPECIFIED",
                            },
                            Offset: "dolorum",
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: true,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "ea",
                                        OrderType: "NUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "fugit",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "aut",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "aliquid",
                                                DimensionValue: "mollitia",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "non",
                                                DimensionValue: "magni",
                                            },
                                            shared.PivotSelection{
                                                DimensionName: "recusandae",
                                                DimensionValue: "illum",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "dolores",
                                        OrderType: "NUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "nihil",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "explicabo",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "iure",
                                                DimensionValue: "et",
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: false,
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: "et",
                                        OrderType: "CASE_INSENSITIVE_ALPHANUMERIC",
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: "necessitatibus",
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: "veniam",
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: "in",
                                                DimensionValue: "odit",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    Property: "molestias",
                    ReturnPropertyQuota: false,
                },
            },
        },
    }
    
    res, err := s.Properties.AnalyticsdataPropertiesBatchRunPivotReports(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchRunPivotReportsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### properties

* `AnalyticsdataPropertiesBatchRunPivotReports` - Returns multiple pivot reports in a batch. All reports must be for the same GA4 Property.
* `AnalyticsdataPropertiesBatchRunReports` - Returns multiple reports in a batch. All reports must be for the same GA4 Property.
* `AnalyticsdataPropertiesCheckCompatibility` - This compatibility method lists dimensions and metrics that can be added to a report request and maintain compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics, reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core reports have different compatibility rules. This method checks compatibility for Core reports.
* `AnalyticsdataPropertiesGetMetadata` - Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions and metrics. In this method, a Google Analytics GA4 Property Identifier is specified in the request, and the metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom metric with parameter name `levels_unlocked` is registered to a property, the Metadata response will contain `customEvent:levels_unlocked`. Universal metadata are dimensions and metrics applicable to any property such as `country` and `totalUsers`.
* `AnalyticsdataPropertiesRunPivotReport` - Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in a pivot. Multiple pivots can be specified to further dissect your data.
* `AnalyticsdataPropertiesRunRealtimeReport` - Returns a customized report of realtime event data for your property. Events appear in realtime reports seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360 properties). For a guide to constructing realtime requests & understanding responses, see [Creating a Realtime Report](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-basics).
* `AnalyticsdataPropertiesRunReport` - Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for the requested dimensions and metrics. Metrics are individual measurements of user activity on your property, such as active users or event count. Dimensions break down metrics across some common criteria, such as country or event name. For a guide to constructing requests & understanding responses, see [Creating a Report](https://developers.google.com/analytics/devguides/reporting/data/v1/basics).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
