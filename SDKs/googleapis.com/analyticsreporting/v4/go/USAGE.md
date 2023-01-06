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
    
    req := operations.AnalyticsreportingReportsBatchGetRequest{
        Security: operations.AnalyticsreportingReportsBatchGetSecurity{
            Option1: &operations.AnalyticsreportingReportsBatchGetSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.AnalyticsreportingReportsBatchGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "illum",
            Alt: "json",
            Callback: "est",
            Fields: "repellendus",
            Key: "consequatur",
            OauthToken: "laudantium",
            PrettyPrint: false,
            QuotaUser: "et",
            UploadType: "repudiandae",
            UploadProtocol: "ipsum",
        },
        Request: &shared.GetReportsRequest{
            ReportRequests: []shared.ReportRequest{
                shared.ReportRequest{
                    CohortGroup: &shared.CohortGroup{
                        Cohorts: []shared.Cohort{
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "praesentium",
                                    StartDate: "dolorum",
                                },
                                Name: "voluptatem",
                                Type: "UNSPECIFIED_COHORT_TYPE",
                            },
                        },
                        LifetimeValue: true,
                    },
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: "sapiente",
                            StartDate: "et",
                        },
                        shared.DateRange{
                            EndDate: "rem",
                            StartDate: "suscipit",
                        },
                        shared.DateRange{
                            EndDate: "voluptas",
                            StartDate: "doloremque",
                        },
                    },
                    DimensionFilterClauses: []shared.DimensionFilterClause{
                        shared.DimensionFilterClause{
                            Filters: []shared.DimensionFilter{
                                shared.DimensionFilter{
                                    CaseSensitive: true,
                                    DimensionName: "voluptatem",
                                    Expressions: []string{
                                        "laborum",
                                        "et",
                                        "reprehenderit",
                                    },
                                    Not: true,
                                    Operator: "NUMERIC_GREATER_THAN",
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: true,
                                    DimensionName: "quo",
                                    Expressions: []string{
                                        "vel",
                                        "rerum",
                                        "eligendi",
                                    },
                                    Not: true,
                                    Operator: "NUMERIC_EQUAL",
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: true,
                                    DimensionName: "sunt",
                                    Expressions: []string{
                                        "delectus",
                                        "quo",
                                        "natus",
                                    },
                                    Not: false,
                                    Operator: "NUMERIC_LESS_THAN",
                                },
                            },
                            Operator: "OPERATOR_UNSPECIFIED",
                        },
                    },
                    Dimensions: []shared.Dimension{
                        shared.Dimension{
                            HistogramBuckets: []string{
                                "saepe",
                                "et",
                                "quas",
                            },
                            Name: "odio",
                        },
                        shared.Dimension{
                            HistogramBuckets: []string{
                                "earum",
                                "nisi",
                            },
                            Name: "et",
                        },
                        shared.Dimension{
                            HistogramBuckets: []string{
                                "sunt",
                            },
                            Name: "occaecati",
                        },
                    },
                    FiltersExpression: "occaecati",
                    HideTotals: true,
                    HideValueRanges: false,
                    IncludeEmptyRows: true,
                    MetricFilterClauses: []shared.MetricFilterClause{
                        shared.MetricFilterClause{
                            Filters: []shared.MetricFilter{
                                shared.MetricFilter{
                                    ComparisonValue: "nemo",
                                    MetricName: "molestiae",
                                    Not: false,
                                    Operator: "GREATER_THAN",
                                },
                                shared.MetricFilter{
                                    ComparisonValue: "aut",
                                    MetricName: "et",
                                    Not: false,
                                    Operator: "OPERATOR_UNSPECIFIED",
                                },
                                shared.MetricFilter{
                                    ComparisonValue: "et",
                                    MetricName: "tempore",
                                    Not: false,
                                    Operator: "LESS_THAN",
                                },
                            },
                            Operator: "OPERATOR_UNSPECIFIED",
                        },
                        shared.MetricFilterClause{
                            Filters: []shared.MetricFilter{
                                shared.MetricFilter{
                                    ComparisonValue: "sit",
                                    MetricName: "quis",
                                    Not: false,
                                    Operator: "IS_MISSING",
                                },
                            },
                            Operator: "OPERATOR_UNSPECIFIED",
                        },
                    },
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Alias: "placeat",
                            Expression: "quis",
                            FormattingType: "METRIC_TYPE_UNSPECIFIED",
                        },
                        shared.Metric{
                            Alias: "numquam",
                            Expression: "non",
                            FormattingType: "METRIC_TYPE_UNSPECIFIED",
                        },
                    },
                    OrderBys: []shared.OrderBy{
                        shared.OrderBy{
                            FieldName: "id",
                            OrderType: "SMART",
                            SortOrder: "SORT_ORDER_UNSPECIFIED",
                        },
                    },
                    PageSize: 1814978640069239714,
                    PageToken: "et",
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            DimensionFilterClauses: []shared.DimensionFilterClause{
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "et",
                                            Expressions: []string{
                                                "sed",
                                                "quos",
                                                "vel",
                                            },
                                            Not: false,
                                            Operator: "BEGINS_WITH",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "molestiae",
                                            Expressions: []string{
                                                "qui",
                                                "quis",
                                                "culpa",
                                            },
                                            Not: false,
                                            Operator: "IN_LIST",
                                        },
                                    },
                                    Operator: "OPERATOR_UNSPECIFIED",
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "molestias",
                                            Expressions: []string{
                                                "corrupti",
                                                "recusandae",
                                            },
                                            Not: true,
                                            Operator: "EXACT",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "alias",
                                            Expressions: []string{
                                                "est",
                                            },
                                            Not: true,
                                            Operator: "NUMERIC_LESS_THAN",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "tempore",
                                            Expressions: []string{
                                                "odio",
                                                "at",
                                                "earum",
                                            },
                                            Not: true,
                                            Operator: "BEGINS_WITH",
                                        },
                                    },
                                    Operator: "OPERATOR_UNSPECIFIED",
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "incidunt",
                                            Expressions: []string{
                                                "a",
                                                "et",
                                            },
                                            Not: true,
                                            Operator: "NUMERIC_LESS_THAN",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "totam",
                                            Expressions: []string{
                                                "quia",
                                                "sint",
                                                "autem",
                                            },
                                            Not: false,
                                            Operator: "NUMERIC_EQUAL",
                                        },
                                    },
                                    Operator: "OR",
                                },
                            },
                            Dimensions: []shared.Dimension{
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "exercitationem",
                                        "ea",
                                        "quos",
                                    },
                                    Name: "deleniti",
                                },
                            },
                            MaxGroupCount: 5146871061699696712,
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Alias: "rerum",
                                    Expression: "dolores",
                                    FormattingType: "TIME",
                                },
                            },
                            StartGroup: 1592166979501841607,
                        },
                        shared.Pivot{
                            DimensionFilterClauses: []shared.DimensionFilterClause{
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "non",
                                            Expressions: []string{
                                                "accusantium",
                                                "sapiente",
                                                "iure",
                                            },
                                            Not: true,
                                            Operator: "NUMERIC_EQUAL",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "ut",
                                            Expressions: []string{
                                                "in",
                                                "tempora",
                                                "molestiae",
                                            },
                                            Not: true,
                                            Operator: "IN_LIST",
                                        },
                                    },
                                    Operator: "AND",
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "quis",
                                            Expressions: []string{
                                                "iste",
                                                "ea",
                                            },
                                            Not: true,
                                            Operator: "PARTIAL",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "magni",
                                            Expressions: []string{
                                                "eius",
                                                "fugiat",
                                                "ut",
                                            },
                                            Not: false,
                                            Operator: "BEGINS_WITH",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "exercitationem",
                                            Expressions: []string{
                                                "voluptatem",
                                                "porro",
                                                "amet",
                                            },
                                            Not: false,
                                            Operator: "ENDS_WITH",
                                        },
                                    },
                                    Operator: "AND",
                                },
                            },
                            Dimensions: []shared.Dimension{
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "quibusdam",
                                        "cum",
                                        "id",
                                    },
                                    Name: "repellendus",
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "autem",
                                        "ipsum",
                                        "id",
                                    },
                                    Name: "aut",
                                },
                            },
                            MaxGroupCount: 977918952990982802,
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Alias: "magnam",
                                    Expression: "aspernatur",
                                    FormattingType: "METRIC_TYPE_UNSPECIFIED",
                                },
                            },
                            StartGroup: 6194562792020924521,
                        },
                    },
                    SamplingLevel: "SAMPLING_UNSPECIFIED",
                    Segments: []shared.Segment{
                        shared.Segment{
                            DynamicSegment: &shared.DynamicSegment{
                                Name: "pariatur",
                                SessionSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
                                        shared.SegmentFilter{
                                            Not: true,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: true,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "vel",
                                                                            Expressions: []string{
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: "est",
                                                                            MinComparisonValue: "quia",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quod",
                                                                            MaxComparisonValue: "aut",
                                                                            MetricName: "numquam",
                                                                            Operator: "EQUAL",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "officiis",
                                                                            Expressions: []string{
                                                                                "ut",
                                                                                "et",
                                                                                "sit",
                                                                            },
                                                                            MaxComparisonValue: "esse",
                                                                            MinComparisonValue: "eos",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "earum",
                                                                            MaxComparisonValue: "dolores",
                                                                            MetricName: "et",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "eligendi",
                                                                            Expressions: []string{
                                                                                "minus",
                                                                                "minus",
                                                                                "consequatur",
                                                                            },
                                                                            MaxComparisonValue: "labore",
                                                                            MinComparisonValue: "eveniet",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quis",
                                                                            MaxComparisonValue: "sint",
                                                                            MetricName: "cumque",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "quis",
                                                                            Expressions: []string{
                                                                                "enim",
                                                                                "minima",
                                                                            },
                                                                            MaxComparisonValue: "incidunt",
                                                                            MinComparisonValue: "excepturi",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "similique",
                                                                            MaxComparisonValue: "illum",
                                                                            MetricName: "soluta",
                                                                            Operator: "EQUAL",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "consequatur",
                                                                            Expressions: []string{
                                                                                "cupiditate",
                                                                                "quas",
                                                                            },
                                                                            MaxComparisonValue: "autem",
                                                                            MinComparisonValue: "natus",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "et",
                                                                            MaxComparisonValue: "incidunt",
                                                                            MetricName: "qui",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "et",
                                                                            Expressions: []string{
                                                                                "quia",
                                                                                "et",
                                                                                "maiores",
                                                                            },
                                                                            MaxComparisonValue: "qui",
                                                                            MinComparisonValue: "velit",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "voluptatem",
                                                                            MaxComparisonValue: "in",
                                                                            MetricName: "accusamus",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "laboriosam",
                                                                            Expressions: []string{
                                                                                "facere",
                                                                            },
                                                                            MaxComparisonValue: "nihil",
                                                                            MinComparisonValue: "repellendus",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sunt",
                                                                            MaxComparisonValue: "rerum",
                                                                            MetricName: "qui",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "numquam",
                                                                            Expressions: []string{
                                                                                "enim",
                                                                                "voluptates",
                                                                            },
                                                                            MaxComparisonValue: "dolore",
                                                                            MinComparisonValue: "sunt",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sequi",
                                                                            MaxComparisonValue: "id",
                                                                            MetricName: "nemo",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "similique",
                                                                            Expressions: []string{
                                                                                "officia",
                                                                                "eum",
                                                                            },
                                                                            MaxComparisonValue: "consequatur",
                                                                            MinComparisonValue: "sit",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quaerat",
                                                                            MaxComparisonValue: "ut",
                                                                            MetricName: "molestiae",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "eos",
                                                                            Expressions: []string{
                                                                                "maiores",
                                                                            },
                                                                            MaxComparisonValue: "ipsam",
                                                                            MinComparisonValue: "non",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "veritatis",
                                                                            MaxComparisonValue: "aut",
                                                                            MetricName: "eveniet",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "temporibus",
                                                                            Expressions: []string{
                                                                                "doloribus",
                                                                                "sapiente",
                                                                                "rerum",
                                                                            },
                                                                            MaxComparisonValue: "esse",
                                                                            MinComparisonValue: "beatae",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "iste",
                                                                            MaxComparisonValue: "nulla",
                                                                            MetricName: "autem",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "sapiente",
                                                                            Expressions: []string{
                                                                                "dolor",
                                                                            },
                                                                            MaxComparisonValue: "fugit",
                                                                            MinComparisonValue: "et",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aliquam",
                                                                            MaxComparisonValue: "reprehenderit",
                                                                            MetricName: "excepturi",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "assumenda",
                                                                            Expressions: []string{
                                                                                "velit",
                                                                                "eos",
                                                                                "officiis",
                                                                            },
                                                                            MaxComparisonValue: "omnis",
                                                                            MinComparisonValue: "nam",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "fuga",
                                                                            MaxComparisonValue: "dolorem",
                                                                            MetricName: "et",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "ab",
                                                                    Expressions: []string{
                                                                        "aut",
                                                                    },
                                                                    MaxComparisonValue: "impedit",
                                                                    MinComparisonValue: "sint",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "quo",
                                                                    MaxComparisonValue: "libero",
                                                                    MetricName: "non",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: false,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: true,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "nam",
                                                                            Expressions: []string{
                                                                                "cum",
                                                                                "dolorum",
                                                                                "illum",
                                                                            },
                                                                            MaxComparisonValue: "voluptatem",
                                                                            MinComparisonValue: "ut",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "qui",
                                                                            MaxComparisonValue: "sequi",
                                                                            MetricName: "sunt",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "provident",
                                                                            Expressions: []string{
                                                                                "sunt",
                                                                                "quia",
                                                                            },
                                                                            MaxComparisonValue: "voluptatibus",
                                                                            MinComparisonValue: "nobis",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "expedita",
                                                                            MaxComparisonValue: "fugit",
                                                                            MetricName: "quia",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "molestiae",
                                                                            Expressions: []string{
                                                                                "non",
                                                                            },
                                                                            MaxComparisonValue: "doloremque",
                                                                            MinComparisonValue: "aliquam",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "qui",
                                                                            MaxComparisonValue: "aut",
                                                                            MetricName: "quas",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "non",
                                                                            Expressions: []string{
                                                                                "voluptatem",
                                                                                "officiis",
                                                                            },
                                                                            MaxComparisonValue: "in",
                                                                            MinComparisonValue: "et",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "rerum",
                                                                            MaxComparisonValue: "dicta",
                                                                            MetricName: "velit",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "adipisci",
                                                                            Expressions: []string{
                                                                                "atque",
                                                                                "aliquam",
                                                                            },
                                                                            MaxComparisonValue: "pariatur",
                                                                            MinComparisonValue: "at",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quidem",
                                                                            MaxComparisonValue: "fugit",
                                                                            MetricName: "tempora",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "UNSPECIFIED_MATCH_TYPE",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "quia",
                                                                            Expressions: []string{
                                                                                "cupiditate",
                                                                                "aut",
                                                                            },
                                                                            MaxComparisonValue: "nam",
                                                                            MinComparisonValue: "nihil",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "animi",
                                                                            MaxComparisonValue: "cum",
                                                                            MetricName: "voluptate",
                                                                            Operator: "EQUAL",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "beatae",
                                                                            Expressions: []string{
                                                                                "similique",
                                                                                "qui",
                                                                            },
                                                                            MaxComparisonValue: "id",
                                                                            MinComparisonValue: "mollitia",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quis",
                                                                            MaxComparisonValue: "sit",
                                                                            MetricName: "debitis",
                                                                            Operator: "EQUAL",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "voluptatem",
                                                                            Expressions: []string{
                                                                                "corrupti",
                                                                                "est",
                                                                            },
                                                                            MaxComparisonValue: "vero",
                                                                            MinComparisonValue: "autem",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "labore",
                                                                            MaxComparisonValue: "suscipit",
                                                                            MetricName: "quis",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "quam",
                                                                            Expressions: []string{
                                                                                "delectus",
                                                                            },
                                                                            MaxComparisonValue: "sapiente",
                                                                            MinComparisonValue: "eos",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quia",
                                                                            MaxComparisonValue: "nihil",
                                                                            MetricName: "est",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "corporis",
                                                                            Expressions: []string{
                                                                                "sunt",
                                                                                "aut",
                                                                                "ut",
                                                                            },
                                                                            MaxComparisonValue: "quisquam",
                                                                            MinComparisonValue: "eaque",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "corrupti",
                                                                            MaxComparisonValue: "sunt",
                                                                            MetricName: "ipsa",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "et",
                                                                            Expressions: []string{
                                                                                "vero",
                                                                            },
                                                                            MaxComparisonValue: "molestiae",
                                                                            MinComparisonValue: "aliquam",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "dolor",
                                                                            MaxComparisonValue: "placeat",
                                                                            MetricName: "ut",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "atque",
                                                                    Expressions: []string{
                                                                        "enim",
                                                                        "quia",
                                                                    },
                                                                    MaxComparisonValue: "occaecati",
                                                                    MinComparisonValue: "omnis",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "illo",
                                                                    MaxComparisonValue: "ab",
                                                                    MetricName: "distinctio",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "USER",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "ipsum",
                                                                    Expressions: []string{
                                                                        "vitae",
                                                                        "culpa",
                                                                    },
                                                                    MaxComparisonValue: "voluptatibus",
                                                                    MinComparisonValue: "soluta",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "et",
                                                                    MaxComparisonValue: "error",
                                                                    MetricName: "aut",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "magnam",
                                                                    Expressions: []string{
                                                                        "maiores",
                                                                    },
                                                                    MaxComparisonValue: "laudantium",
                                                                    MinComparisonValue: "quam",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "beatae",
                                                                    MaxComparisonValue: "facere",
                                                                    MetricName: "placeat",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "deleniti",
                                                                    Expressions: []string{
                                                                        "saepe",
                                                                        "qui",
                                                                    },
                                                                    MaxComparisonValue: "est",
                                                                    MinComparisonValue: "non",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "doloribus",
                                                                    MaxComparisonValue: "reiciendis",
                                                                    MetricName: "expedita",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "ea",
                                                                    Expressions: []string{
                                                                        "expedita",
                                                                        "aut",
                                                                        "non",
                                                                    },
                                                                    MaxComparisonValue: "necessitatibus",
                                                                    MinComparisonValue: "reprehenderit",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "suscipit",
                                                                    MaxComparisonValue: "dolores",
                                                                    MetricName: "omnis",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "recusandae",
                                                                    Expressions: []string{
                                                                        "accusamus",
                                                                        "culpa",
                                                                        "consequatur",
                                                                    },
                                                                    MaxComparisonValue: "animi",
                                                                    MinComparisonValue: "minima",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "dicta",
                                                                    MaxComparisonValue: "id",
                                                                    MetricName: "vitae",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "nesciunt",
                                                                    Expressions: []string{
                                                                        "suscipit",
                                                                        "labore",
                                                                        "voluptatum",
                                                                    },
                                                                    MaxComparisonValue: "quisquam",
                                                                    MinComparisonValue: "pariatur",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "incidunt",
                                                                    MaxComparisonValue: "sit",
                                                                    MetricName: "voluptas",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                UserSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
                                        shared.SegmentFilter{
                                            Not: true,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: true,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "quo",
                                                                            Expressions: []string{
                                                                                "soluta",
                                                                            },
                                                                            MaxComparisonValue: "tempore",
                                                                            MinComparisonValue: "vitae",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "voluptatem",
                                                                            MaxComparisonValue: "porro",
                                                                            MetricName: "quo",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "et",
                                                                            Expressions: []string{
                                                                                "omnis",
                                                                            },
                                                                            MaxComparisonValue: "modi",
                                                                            MinComparisonValue: "animi",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ullam",
                                                                            MaxComparisonValue: "assumenda",
                                                                            MetricName: "amet",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "necessitatibus",
                                                                            Expressions: []string{
                                                                                "eius",
                                                                            },
                                                                            MaxComparisonValue: "error",
                                                                            MinComparisonValue: "aliquam",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "consequatur",
                                                                            MaxComparisonValue: "laboriosam",
                                                                            MetricName: "vero",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "voluptas",
                                                                            Expressions: []string{
                                                                                "delectus",
                                                                            },
                                                                            MaxComparisonValue: "soluta",
                                                                            MinComparisonValue: "eveniet",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sit",
                                                                            MaxComparisonValue: "est",
                                                                            MetricName: "quia",
                                                                            Operator: "EQUAL",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "ipsam",
                                                                            Expressions: []string{
                                                                                "consequatur",
                                                                            },
                                                                            MaxComparisonValue: "praesentium",
                                                                            MinComparisonValue: "enim",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "velit",
                                                                            MaxComparisonValue: "sit",
                                                                            MetricName: "non",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "qui",
                                                                            Expressions: []string{
                                                                                "et",
                                                                                "minus",
                                                                            },
                                                                            MaxComparisonValue: "quibusdam",
                                                                            MinComparisonValue: "distinctio",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "temporibus",
                                                                            MaxComparisonValue: "aut",
                                                                            MetricName: "tempore",
                                                                            Operator: "EQUAL",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "recusandae",
                                                                            Expressions: []string{
                                                                                "molestias",
                                                                                "possimus",
                                                                                "earum",
                                                                            },
                                                                            MaxComparisonValue: "amet",
                                                                            MinComparisonValue: "eos",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "minus",
                                                                            MaxComparisonValue: "animi",
                                                                            MetricName: "laudantium",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "aut",
                                                                    Expressions: []string{
                                                                        "fugit",
                                                                        "quaerat",
                                                                    },
                                                                    MaxComparisonValue: "exercitationem",
                                                                    MinComparisonValue: "ut",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "rerum",
                                                                    MaxComparisonValue: "assumenda",
                                                                    MetricName: "porro",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "quia",
                                                                    Expressions: []string{
                                                                        "sed",
                                                                        "occaecati",
                                                                    },
                                                                    MaxComparisonValue: "quidem",
                                                                    MinComparisonValue: "maxime",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "dignissimos",
                                                                    MaxComparisonValue: "ullam",
                                                                    MetricName: "nisi",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "id",
                                                                    Expressions: []string{
                                                                        "quia",
                                                                    },
                                                                    MaxComparisonValue: "et",
                                                                    MinComparisonValue: "officiis",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "distinctio",
                                                                    MaxComparisonValue: "aliquam",
                                                                    MetricName: "illum",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "similique",
                                                                    Expressions: []string{
                                                                        "illo",
                                                                        "minus",
                                                                    },
                                                                    MaxComparisonValue: "et",
                                                                    MinComparisonValue: "laudantium",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "expedita",
                                                                    MaxComparisonValue: "omnis",
                                                                    MetricName: "at",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "illum",
                                                                    Expressions: []string{
                                                                        "necessitatibus",
                                                                        "aspernatur",
                                                                    },
                                                                    MaxComparisonValue: "quasi",
                                                                    MinComparisonValue: "tempore",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "quos",
                                                                    MaxComparisonValue: "voluptas",
                                                                    MetricName: "quam",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: true,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: false,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "impedit",
                                                                            Expressions: []string{
                                                                                "dignissimos",
                                                                            },
                                                                            MaxComparisonValue: "dolor",
                                                                            MinComparisonValue: "voluptatem",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "est",
                                                                            MaxComparisonValue: "reprehenderit",
                                                                            MetricName: "facilis",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "facilis",
                                                                            Expressions: []string{
                                                                                "nihil",
                                                                                "sunt",
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: "vitae",
                                                                            MinComparisonValue: "provident",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "laborum",
                                                                            MaxComparisonValue: "voluptas",
                                                                            MetricName: "veniam",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "qui",
                                                                            Expressions: []string{
                                                                                "nihil",
                                                                                "sit",
                                                                                "est",
                                                                            },
                                                                            MaxComparisonValue: "praesentium",
                                                                            MinComparisonValue: "sint",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "atque",
                                                                            MaxComparisonValue: "iusto",
                                                                            MetricName: "rem",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "amet",
                                                                            Expressions: []string{
                                                                                "est",
                                                                                "eveniet",
                                                                            },
                                                                            MaxComparisonValue: "consequatur",
                                                                            MinComparisonValue: "quia",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "nesciunt",
                                                                            MaxComparisonValue: "necessitatibus",
                                                                            MetricName: "ipsa",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "quisquam",
                                                                            Expressions: []string{
                                                                                "saepe",
                                                                                "quam",
                                                                            },
                                                                            MaxComparisonValue: "autem",
                                                                            MinComparisonValue: "doloremque",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "laudantium",
                                                                            MaxComparisonValue: "maxime",
                                                                            MetricName: "omnis",
                                                                            Operator: "EQUAL",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "assumenda",
                                                                            Expressions: []string{
                                                                                "porro",
                                                                            },
                                                                            MaxComparisonValue: "et",
                                                                            MinComparisonValue: "asperiores",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sed",
                                                                            MaxComparisonValue: "sequi",
                                                                            MetricName: "modi",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "aliquid",
                                                                            Expressions: []string{
                                                                                "labore",
                                                                                "totam",
                                                                                "placeat",
                                                                            },
                                                                            MaxComparisonValue: "doloremque",
                                                                            MinComparisonValue: "est",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "non",
                                                                            MaxComparisonValue: "vel",
                                                                            MetricName: "quia",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "et",
                                                                    Expressions: []string{
                                                                        "officia",
                                                                    },
                                                                    MaxComparisonValue: "iusto",
                                                                    MinComparisonValue: "et",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "enim",
                                                                    MaxComparisonValue: "possimus",
                                                                    MetricName: "illo",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "temporibus",
                                                                    Expressions: []string{
                                                                        "corrupti",
                                                                        "perferendis",
                                                                        "dicta",
                                                                    },
                                                                    MaxComparisonValue: "id",
                                                                    MinComparisonValue: "amet",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "et",
                                                                    MaxComparisonValue: "sapiente",
                                                                    MetricName: "qui",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "dolor",
                                                                    Expressions: []string{
                                                                        "aliquam",
                                                                    },
                                                                    MaxComparisonValue: "ducimus",
                                                                    MinComparisonValue: "enim",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "impedit",
                                                                    MaxComparisonValue: "est",
                                                                    MetricName: "quo",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "vitae",
                                                                    Expressions: []string{
                                                                        "ut",
                                                                        "voluptates",
                                                                    },
                                                                    MaxComparisonValue: "eos",
                                                                    MinComparisonValue: "culpa",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ut",
                                                                    MaxComparisonValue: "nobis",
                                                                    MetricName: "non",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "distinctio",
                                                                    Expressions: []string{
                                                                        "consequatur",
                                                                        "vel",
                                                                        "nam",
                                                                    },
                                                                    MaxComparisonValue: "et",
                                                                    MinComparisonValue: "error",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "non",
                                                                    MaxComparisonValue: "aut",
                                                                    MetricName: "aut",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: false,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: true,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "UNSPECIFIED_MATCH_TYPE",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "modi",
                                                                            Expressions: []string{
                                                                                "non",
                                                                            },
                                                                            MaxComparisonValue: "earum",
                                                                            MinComparisonValue: "laborum",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quo",
                                                                            MaxComparisonValue: "est",
                                                                            MetricName: "sint",
                                                                            Operator: "EQUAL",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "magni",
                                                                            Expressions: []string{
                                                                                "consectetur",
                                                                                "voluptas",
                                                                                "repellendus",
                                                                            },
                                                                            MaxComparisonValue: "eos",
                                                                            MinComparisonValue: "quasi",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "suscipit",
                                                                            MaxComparisonValue: "maxime",
                                                                            MetricName: "ab",
                                                                            Operator: "EQUAL",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "sunt",
                                                                            Expressions: []string{
                                                                                "corporis",
                                                                                "dicta",
                                                                                "sapiente",
                                                                            },
                                                                            MaxComparisonValue: "qui",
                                                                            MinComparisonValue: "voluptatem",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "voluptas",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "culpa",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "corrupti",
                                                                            Expressions: []string{
                                                                                "quasi",
                                                                            },
                                                                            MaxComparisonValue: "odit",
                                                                            MinComparisonValue: "sit",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sint",
                                                                            MaxComparisonValue: "voluptate",
                                                                            MetricName: "aperiam",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "autem",
                                                                            Expressions: []string{
                                                                                "at",
                                                                                "quibusdam",
                                                                            },
                                                                            MaxComparisonValue: "qui",
                                                                            MinComparisonValue: "nostrum",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "debitis",
                                                                            MaxComparisonValue: "id",
                                                                            MetricName: "fugiat",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "aliquid",
                                                                            Expressions: []string{
                                                                                "ut",
                                                                            },
                                                                            MaxComparisonValue: "dolor",
                                                                            MinComparisonValue: "tempora",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "harum",
                                                                            MaxComparisonValue: "est",
                                                                            MetricName: "quibusdam",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "repellat",
                                                                            Expressions: []string{
                                                                                "dolore",
                                                                                "omnis",
                                                                            },
                                                                            MaxComparisonValue: "aliquam",
                                                                            MinComparisonValue: "provident",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aut",
                                                                            MaxComparisonValue: "at",
                                                                            MetricName: "omnis",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "UNSPECIFIED_MATCH_TYPE",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "ut",
                                                                            Expressions: []string{
                                                                                "accusamus",
                                                                                "beatae",
                                                                            },
                                                                            MaxComparisonValue: "rerum",
                                                                            MinComparisonValue: "aspernatur",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "facilis",
                                                                            MaxComparisonValue: "iure",
                                                                            MetricName: "quo",
                                                                            Operator: "EQUAL",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "ea",
                                                                            Expressions: []string{
                                                                                "ipsum",
                                                                                "quae",
                                                                                "minima",
                                                                            },
                                                                            MaxComparisonValue: "eaque",
                                                                            MinComparisonValue: "consequatur",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "officia",
                                                                            MaxComparisonValue: "nihil",
                                                                            MetricName: "qui",
                                                                            Operator: "EQUAL",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "iste",
                                                                            Expressions: []string{
                                                                                "deleniti",
                                                                            },
                                                                            MaxComparisonValue: "sed",
                                                                            MinComparisonValue: "dolor",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "nisi",
                                                                            MaxComparisonValue: "rerum",
                                                                            MetricName: "alias",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "maxime",
                                                                    Expressions: []string{
                                                                        "neque",
                                                                    },
                                                                    MaxComparisonValue: "minus",
                                                                    MinComparisonValue: "corrupti",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "quaerat",
                                                                    MaxComparisonValue: "quasi",
                                                                    MetricName: "quibusdam",
                                                                    Operator: "EQUAL",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "nisi",
                                                                    Expressions: []string{
                                                                        "quos",
                                                                        "et",
                                                                        "repellat",
                                                                    },
                                                                    MaxComparisonValue: "alias",
                                                                    MinComparisonValue: "rem",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "sit",
                                                                    MaxComparisonValue: "odit",
                                                                    MetricName: "voluptatem",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "adipisci",
                                                                    Expressions: []string{
                                                                        "sunt",
                                                                        "deleniti",
                                                                    },
                                                                    MaxComparisonValue: "qui",
                                                                    MinComparisonValue: "et",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "animi",
                                                                    MaxComparisonValue: "quidem",
                                                                    MetricName: "dolorum",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "nam",
                                                                    Expressions: []string{
                                                                        "explicabo",
                                                                        "rem",
                                                                    },
                                                                    MaxComparisonValue: "et",
                                                                    MinComparisonValue: "ipsa",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "qui",
                                                                    MaxComparisonValue: "quas",
                                                                    MetricName: "qui",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "nemo",
                                                                    Expressions: []string{
                                                                        "quibusdam",
                                                                    },
                                                                    MaxComparisonValue: "numquam",
                                                                    MinComparisonValue: "modi",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "est",
                                                                    MaxComparisonValue: "et",
                                                                    MetricName: "dolores",
                                                                    Operator: "EQUAL",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "quasi",
                                                                    Expressions: []string{
                                                                        "consectetur",
                                                                    },
                                                                    MaxComparisonValue: "quas",
                                                                    MinComparisonValue: "magni",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "molestiae",
                                                                    MaxComparisonValue: "atque",
                                                                    MetricName: "laboriosam",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "dolor",
                                                                    Expressions: []string{
                                                                        "est",
                                                                        "praesentium",
                                                                        "quam",
                                                                    },
                                                                    MaxComparisonValue: "sed",
                                                                    MinComparisonValue: "iste",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "in",
                                                                    MaxComparisonValue: "laboriosam",
                                                                    MetricName: "molestiae",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            SegmentID: "accusantium",
                        },
                    },
                    ViewID: "qui",
                },
                shared.ReportRequest{
                    CohortGroup: &shared.CohortGroup{
                        Cohorts: []shared.Cohort{
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "labore",
                                    StartDate: "maiores",
                                },
                                Name: "voluptatem",
                                Type: "FIRST_VISIT_DATE",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "rerum",
                                    StartDate: "nesciunt",
                                },
                                Name: "quia",
                                Type: "UNSPECIFIED_COHORT_TYPE",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "qui",
                                    StartDate: "hic",
                                },
                                Name: "eum",
                                Type: "FIRST_VISIT_DATE",
                            },
                        },
                        LifetimeValue: true,
                    },
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: "reiciendis",
                            StartDate: "minus",
                        },
                        shared.DateRange{
                            EndDate: "excepturi",
                            StartDate: "voluptatem",
                        },
                        shared.DateRange{
                            EndDate: "magni",
                            StartDate: "dolores",
                        },
                    },
                    DimensionFilterClauses: []shared.DimensionFilterClause{
                        shared.DimensionFilterClause{
                            Filters: []shared.DimensionFilter{
                                shared.DimensionFilter{
                                    CaseSensitive: true,
                                    DimensionName: "quibusdam",
                                    Expressions: []string{
                                        "reiciendis",
                                        "cum",
                                        "velit",
                                    },
                                    Not: true,
                                    Operator: "EXACT",
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: false,
                                    DimensionName: "doloribus",
                                    Expressions: []string{
                                        "architecto",
                                        "alias",
                                    },
                                    Not: false,
                                    Operator: "BEGINS_WITH",
                                },
                            },
                            Operator: "OPERATOR_UNSPECIFIED",
                        },
                        shared.DimensionFilterClause{
                            Filters: []shared.DimensionFilter{
                                shared.DimensionFilter{
                                    CaseSensitive: true,
                                    DimensionName: "laborum",
                                    Expressions: []string{
                                        "ipsum",
                                    },
                                    Not: true,
                                    Operator: "REGEXP",
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: true,
                                    DimensionName: "laudantium",
                                    Expressions: []string{
                                        "quo",
                                    },
                                    Not: true,
                                    Operator: "IN_LIST",
                                },
                            },
                            Operator: "AND",
                        },
                        shared.DimensionFilterClause{
                            Filters: []shared.DimensionFilter{
                                shared.DimensionFilter{
                                    CaseSensitive: false,
                                    DimensionName: "esse",
                                    Expressions: []string{
                                        "at",
                                        "delectus",
                                        "aut",
                                    },
                                    Not: true,
                                    Operator: "OPERATOR_UNSPECIFIED",
                                },
                            },
                            Operator: "AND",
                        },
                    },
                    Dimensions: []shared.Dimension{
                        shared.Dimension{
                            HistogramBuckets: []string{
                                "et",
                            },
                            Name: "ratione",
                        },
                    },
                    FiltersExpression: "at",
                    HideTotals: true,
                    HideValueRanges: false,
                    IncludeEmptyRows: true,
                    MetricFilterClauses: []shared.MetricFilterClause{
                        shared.MetricFilterClause{
                            Filters: []shared.MetricFilter{
                                shared.MetricFilter{
                                    ComparisonValue: "excepturi",
                                    MetricName: "id",
                                    Not: true,
                                    Operator: "IS_MISSING",
                                },
                            },
                            Operator: "OR",
                        },
                        shared.MetricFilterClause{
                            Filters: []shared.MetricFilter{
                                shared.MetricFilter{
                                    ComparisonValue: "suscipit",
                                    MetricName: "cupiditate",
                                    Not: true,
                                    Operator: "IS_MISSING",
                                },
                                shared.MetricFilter{
                                    ComparisonValue: "nihil",
                                    MetricName: "in",
                                    Not: false,
                                    Operator: "IS_MISSING",
                                },
                            },
                            Operator: "OPERATOR_UNSPECIFIED",
                        },
                    },
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Alias: "sint",
                            Expression: "autem",
                            FormattingType: "FLOAT",
                        },
                        shared.Metric{
                            Alias: "suscipit",
                            Expression: "ipsam",
                            FormattingType: "CURRENCY",
                        },
                        shared.Metric{
                            Alias: "est",
                            Expression: "dolores",
                            FormattingType: "FLOAT",
                        },
                    },
                    OrderBys: []shared.OrderBy{
                        shared.OrderBy{
                            FieldName: "ex",
                            OrderType: "DELTA",
                            SortOrder: "ASCENDING",
                        },
                        shared.OrderBy{
                            FieldName: "optio",
                            OrderType: "VALUE",
                            SortOrder: "DESCENDING",
                        },
                    },
                    PageSize: 1874707870929859061,
                    PageToken: "sunt",
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            DimensionFilterClauses: []shared.DimensionFilterClause{
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "corporis",
                                            Expressions: []string{
                                                "illum",
                                                "enim",
                                                "aut",
                                            },
                                            Not: false,
                                            Operator: "NUMERIC_EQUAL",
                                        },
                                    },
                                    Operator: "OPERATOR_UNSPECIFIED",
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "omnis",
                                            Expressions: []string{
                                                "at",
                                                "vitae",
                                                "non",
                                            },
                                            Not: false,
                                            Operator: "IN_LIST",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "placeat",
                                            Expressions: []string{
                                                "qui",
                                            },
                                            Not: false,
                                            Operator: "REGEXP",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "deleniti",
                                            Expressions: []string{
                                                "aspernatur",
                                                "dicta",
                                                "veritatis",
                                            },
                                            Not: true,
                                            Operator: "EXACT",
                                        },
                                    },
                                    Operator: "OR",
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "quia",
                                            Expressions: []string{
                                                "veritatis",
                                            },
                                            Not: true,
                                            Operator: "NUMERIC_GREATER_THAN",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "repellendus",
                                            Expressions: []string{
                                                "sequi",
                                            },
                                            Not: true,
                                            Operator: "ENDS_WITH",
                                        },
                                    },
                                    Operator: "AND",
                                },
                            },
                            Dimensions: []shared.Dimension{
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "deleniti",
                                        "ea",
                                    },
                                    Name: "laborum",
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "dolores",
                                        "qui",
                                    },
                                    Name: "ea",
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "dolorem",
                                        "sint",
                                    },
                                    Name: "praesentium",
                                },
                            },
                            MaxGroupCount: 1025390314690018706,
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Alias: "nam",
                                    Expression: "sint",
                                    FormattingType: "TIME",
                                },
                            },
                            StartGroup: 1240933187850382646,
                        },
                        shared.Pivot{
                            DimensionFilterClauses: []shared.DimensionFilterClause{
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "dicta",
                                            Expressions: []string{
                                                "totam",
                                                "cumque",
                                                "cupiditate",
                                            },
                                            Not: true,
                                            Operator: "OPERATOR_UNSPECIFIED",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "omnis",
                                            Expressions: []string{
                                                "at",
                                                "totam",
                                            },
                                            Not: true,
                                            Operator: "REGEXP",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "excepturi",
                                            Expressions: []string{
                                                "qui",
                                            },
                                            Not: true,
                                            Operator: "PARTIAL",
                                        },
                                    },
                                    Operator: "OPERATOR_UNSPECIFIED",
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "est",
                                            Expressions: []string{
                                                "veniam",
                                                "dignissimos",
                                            },
                                            Not: false,
                                            Operator: "BEGINS_WITH",
                                        },
                                    },
                                    Operator: "OR",
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "qui",
                                            Expressions: []string{
                                                "in",
                                                "pariatur",
                                            },
                                            Not: true,
                                            Operator: "BEGINS_WITH",
                                        },
                                    },
                                    Operator: "OPERATOR_UNSPECIFIED",
                                },
                            },
                            Dimensions: []shared.Dimension{
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "esse",
                                    },
                                    Name: "non",
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "deserunt",
                                    },
                                    Name: "maiores",
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "voluptas",
                                        "mollitia",
                                    },
                                    Name: "fugit",
                                },
                            },
                            MaxGroupCount: 196952708654416386,
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Alias: "aut",
                                    Expression: "quo",
                                    FormattingType: "TIME",
                                },
                                shared.Metric{
                                    Alias: "at",
                                    Expression: "veritatis",
                                    FormattingType: "INTEGER",
                                },
                                shared.Metric{
                                    Alias: "amet",
                                    Expression: "molestiae",
                                    FormattingType: "FLOAT",
                                },
                            },
                            StartGroup: 4810246019628772601,
                        },
                    },
                    SamplingLevel: "DEFAULT",
                    Segments: []shared.Segment{
                        shared.Segment{
                            DynamicSegment: &shared.DynamicSegment{
                                Name: "expedita",
                                SessionSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
                                        shared.SegmentFilter{
                                            Not: false,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: false,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "id",
                                                                            Expressions: []string{
                                                                                "magni",
                                                                                "minima",
                                                                                "doloremque",
                                                                            },
                                                                            MaxComparisonValue: "iure",
                                                                            MinComparisonValue: "maiores",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "itaque",
                                                                            MaxComparisonValue: "minima",
                                                                            MetricName: "molestiae",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "voluptas",
                                                                            Expressions: []string{
                                                                                "vel",
                                                                                "mollitia",
                                                                            },
                                                                            MaxComparisonValue: "est",
                                                                            MinComparisonValue: "omnis",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "temporibus",
                                                                            MaxComparisonValue: "pariatur",
                                                                            MetricName: "tenetur",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "sint",
                                                                    Expressions: []string{
                                                                        "exercitationem",
                                                                        "quia",
                                                                    },
                                                                    MaxComparisonValue: "est",
                                                                    MinComparisonValue: "fuga",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ex",
                                                                    MaxComparisonValue: "ex",
                                                                    MetricName: "eius",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "natus",
                                                                    Expressions: []string{
                                                                        "impedit",
                                                                    },
                                                                    MaxComparisonValue: "molestiae",
                                                                    MinComparisonValue: "temporibus",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "vitae",
                                                                    MaxComparisonValue: "qui",
                                                                    MetricName: "necessitatibus",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "est",
                                                                    Expressions: []string{
                                                                        "quis",
                                                                    },
                                                                    MaxComparisonValue: "nisi",
                                                                    MinComparisonValue: "sit",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "qui",
                                                                    MaxComparisonValue: "quae",
                                                                    MetricName: "nemo",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "consectetur",
                                                                    Expressions: []string{
                                                                        "odit",
                                                                        "quo",
                                                                    },
                                                                    MaxComparisonValue: "nam",
                                                                    MinComparisonValue: "et",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "qui",
                                                                    MaxComparisonValue: "sit",
                                                                    MetricName: "et",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "accusantium",
                                                                    Expressions: []string{
                                                                        "consequuntur",
                                                                    },
                                                                    MaxComparisonValue: "sed",
                                                                    MinComparisonValue: "delectus",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "expedita",
                                                                    MaxComparisonValue: "necessitatibus",
                                                                    MetricName: "eveniet",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: false,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: false,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "UNSPECIFIED_MATCH_TYPE",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "et",
                                                                            Expressions: []string{
                                                                                "ea",
                                                                                "omnis",
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: "ipsum",
                                                                            MinComparisonValue: "quisquam",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "nostrum",
                                                                            MaxComparisonValue: "vel",
                                                                            MetricName: "quia",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "occaecati",
                                                                            Expressions: []string{
                                                                                "in",
                                                                            },
                                                                            MaxComparisonValue: "doloribus",
                                                                            MinComparisonValue: "eveniet",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "reiciendis",
                                                                            MaxComparisonValue: "laudantium",
                                                                            MetricName: "autem",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "quasi",
                                                                            Expressions: []string{
                                                                                "minima",
                                                                            },
                                                                            MaxComparisonValue: "ipsum",
                                                                            MinComparisonValue: "ducimus",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "iure",
                                                                            MaxComparisonValue: "voluptatum",
                                                                            MetricName: "et",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "quis",
                                                                            Expressions: []string{
                                                                                "dolores",
                                                                                "ipsam",
                                                                            },
                                                                            MaxComparisonValue: "et",
                                                                            MinComparisonValue: "corporis",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aut",
                                                                            MaxComparisonValue: "possimus",
                                                                            MetricName: "qui",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "quisquam",
                                                                            Expressions: []string{
                                                                                "voluptatum",
                                                                            },
                                                                            MaxComparisonValue: "laudantium",
                                                                            MinComparisonValue: "perspiciatis",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "molestias",
                                                                            MaxComparisonValue: "dolore",
                                                                            MetricName: "voluptas",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "sed",
                                                                    Expressions: []string{
                                                                        "et",
                                                                        "quis",
                                                                        "amet",
                                                                    },
                                                                    MaxComparisonValue: "non",
                                                                    MinComparisonValue: "et",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "vel",
                                                                    MaxComparisonValue: "labore",
                                                                    MetricName: "alias",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "voluptatem",
                                                                    Expressions: []string{
                                                                        "aut",
                                                                        "consequatur",
                                                                        "neque",
                                                                    },
                                                                    MaxComparisonValue: "qui",
                                                                    MinComparisonValue: "molestiae",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "quo",
                                                                    MaxComparisonValue: "libero",
                                                                    MetricName: "eveniet",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "ea",
                                                                    Expressions: []string{
                                                                        "ducimus",
                                                                        "eos",
                                                                    },
                                                                    MaxComparisonValue: "aut",
                                                                    MinComparisonValue: "accusamus",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "odit",
                                                                    MaxComparisonValue: "atque",
                                                                    MetricName: "culpa",
                                                                    Operator: "EQUAL",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "laboriosam",
                                                                    Expressions: []string{
                                                                        "aliquam",
                                                                        "libero",
                                                                    },
                                                                    MaxComparisonValue: "eos",
                                                                    MinComparisonValue: "eveniet",
                                                                    Operator: "IN_LIST",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "odio",
                                                                    MaxComparisonValue: "eligendi",
                                                                    MetricName: "officia",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "quos",
                                                                    Expressions: []string{
                                                                        "voluptatem",
                                                                        "cumque",
                                                                    },
                                                                    MaxComparisonValue: "omnis",
                                                                    MinComparisonValue: "voluptatum",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "eos",
                                                                    MaxComparisonValue: "perferendis",
                                                                    MetricName: "autem",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                UserSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
                                        shared.SegmentFilter{
                                            Not: true,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: false,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "UNSPECIFIED_MATCH_TYPE",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "mollitia",
                                                                            Expressions: []string{
                                                                                "pariatur",
                                                                                "rerum",
                                                                                "deserunt",
                                                                            },
                                                                            MaxComparisonValue: "blanditiis",
                                                                            MinComparisonValue: "a",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "nemo",
                                                                            MaxComparisonValue: "tenetur",
                                                                            MetricName: "perferendis",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "vel",
                                                                            Expressions: []string{
                                                                                "explicabo",
                                                                            },
                                                                            MaxComparisonValue: "aut",
                                                                            MinComparisonValue: "accusantium",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "qui",
                                                                            MaxComparisonValue: "enim",
                                                                            MetricName: "et",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "saepe",
                                                                            Expressions: []string{
                                                                                "incidunt",
                                                                                "quia",
                                                                                "ea",
                                                                            },
                                                                            MaxComparisonValue: "mollitia",
                                                                            MinComparisonValue: "sed",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "reiciendis",
                                                                            MaxComparisonValue: "quis",
                                                                            MetricName: "minima",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "doloremque",
                                                                            Expressions: []string{
                                                                                "sit",
                                                                            },
                                                                            MaxComparisonValue: "quo",
                                                                            MinComparisonValue: "voluptatibus",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "repellendus",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "eos",
                                                                            Operator: "EQUAL",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "fugit",
                                                                    Expressions: []string{
                                                                        "quis",
                                                                        "et",
                                                                        "inventore",
                                                                    },
                                                                    MaxComparisonValue: "voluptates",
                                                                    MinComparisonValue: "fugit",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "pariatur",
                                                                    MaxComparisonValue: "quia",
                                                                    MetricName: "sunt",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "sint",
                                                                    Expressions: []string{
                                                                        "eos",
                                                                        "officiis",
                                                                        "id",
                                                                    },
                                                                    MaxComparisonValue: "libero",
                                                                    MinComparisonValue: "porro",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "beatae",
                                                                    MaxComparisonValue: "aliquid",
                                                                    MetricName: "molestias",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "exercitationem",
                                                                    Expressions: []string{
                                                                        "rerum",
                                                                        "suscipit",
                                                                    },
                                                                    MaxComparisonValue: "est",
                                                                    MinComparisonValue: "aut",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "numquam",
                                                                    MaxComparisonValue: "eum",
                                                                    MetricName: "natus",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "ducimus",
                                                                    Expressions: []string{
                                                                        "voluptatem",
                                                                    },
                                                                    MaxComparisonValue: "dolorum",
                                                                    MinComparisonValue: "amet",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "iste",
                                                                    MaxComparisonValue: "quae",
                                                                    MetricName: "rerum",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "eligendi",
                                                                    Expressions: []string{
                                                                        "praesentium",
                                                                        "natus",
                                                                        "error",
                                                                    },
                                                                    MaxComparisonValue: "fugiat",
                                                                    MinComparisonValue: "aut",
                                                                    Operator: "IN_LIST",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "aliquam",
                                                                    MaxComparisonValue: "autem",
                                                                    MetricName: "consequatur",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: false,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: true,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "perspiciatis",
                                                                            Expressions: []string{
                                                                                "fugiat",
                                                                                "voluptatum",
                                                                            },
                                                                            MaxComparisonValue: "ullam",
                                                                            MinComparisonValue: "corporis",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "maxime",
                                                                            MaxComparisonValue: "perspiciatis",
                                                                            MetricName: "aspernatur",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "deleniti",
                                                                            Expressions: []string{
                                                                                "dolorem",
                                                                                "vero",
                                                                                "illum",
                                                                            },
                                                                            MaxComparisonValue: "alias",
                                                                            MinComparisonValue: "totam",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "adipisci",
                                                                            MaxComparisonValue: "consequatur",
                                                                            MetricName: "necessitatibus",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "illum",
                                                                            Expressions: []string{
                                                                                "iste",
                                                                            },
                                                                            MaxComparisonValue: "delectus",
                                                                            MinComparisonValue: "omnis",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "repudiandae",
                                                                            MaxComparisonValue: "quos",
                                                                            MetricName: "odio",
                                                                            Operator: "EQUAL",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "rem",
                                                                            Expressions: []string{
                                                                                "amet",
                                                                                "et",
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: "placeat",
                                                                            MinComparisonValue: "molestiae",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "et",
                                                                            MaxComparisonValue: "error",
                                                                            MetricName: "reiciendis",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "aut",
                                                                            Expressions: []string{
                                                                                "ab",
                                                                                "voluptate",
                                                                                "voluptates",
                                                                            },
                                                                            MaxComparisonValue: "rerum",
                                                                            MinComparisonValue: "qui",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "saepe",
                                                                            MaxComparisonValue: "quis",
                                                                            MetricName: "quia",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "aut",
                                                                            Expressions: []string{
                                                                                "modi",
                                                                                "est",
                                                                            },
                                                                            MaxComparisonValue: "in",
                                                                            MinComparisonValue: "voluptas",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "nobis",
                                                                            MaxComparisonValue: "sequi",
                                                                            MetricName: "soluta",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "ut",
                                                                            Expressions: []string{
                                                                                "voluptatem",
                                                                            },
                                                                            MaxComparisonValue: "ullam",
                                                                            MinComparisonValue: "vel",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quidem",
                                                                            MaxComparisonValue: "possimus",
                                                                            MetricName: "recusandae",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "ullam",
                                                                            Expressions: []string{
                                                                                "doloribus",
                                                                                "dolorum",
                                                                                "nisi",
                                                                            },
                                                                            MaxComparisonValue: "accusamus",
                                                                            MinComparisonValue: "ipsam",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "perspiciatis",
                                                                            MaxComparisonValue: "ut",
                                                                            MetricName: "dolorem",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "et",
                                                                            Expressions: []string{
                                                                                "aliquam",
                                                                                "numquam",
                                                                            },
                                                                            MaxComparisonValue: "incidunt",
                                                                            MinComparisonValue: "quia",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "nulla",
                                                                            MaxComparisonValue: "quia",
                                                                            MetricName: "repudiandae",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "assumenda",
                                                                            Expressions: []string{
                                                                                "consequuntur",
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: "eum",
                                                                            MinComparisonValue: "doloremque",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sed",
                                                                            MaxComparisonValue: "officia",
                                                                            MetricName: "quisquam",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "excepturi",
                                                                            Expressions: []string{
                                                                                "quia",
                                                                                "necessitatibus",
                                                                            },
                                                                            MaxComparisonValue: "est",
                                                                            MinComparisonValue: "vero",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "omnis",
                                                                            MaxComparisonValue: "provident",
                                                                            MetricName: "voluptatem",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "ad",
                                                                    Expressions: []string{
                                                                        "soluta",
                                                                    },
                                                                    MaxComparisonValue: "praesentium",
                                                                    MinComparisonValue: "consequatur",
                                                                    Operator: "IN_LIST",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "deserunt",
                                                                    MaxComparisonValue: "dolores",
                                                                    MetricName: "rem",
                                                                    Operator: "EQUAL",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "inventore",
                                                                    Expressions: []string{
                                                                        "tempora",
                                                                        "quas",
                                                                        "illo",
                                                                    },
                                                                    MaxComparisonValue: "nesciunt",
                                                                    MinComparisonValue: "voluptatem",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "eius",
                                                                    MaxComparisonValue: "et",
                                                                    MetricName: "deleniti",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: false,
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: false,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "excepturi",
                                                                            Expressions: []string{
                                                                                "accusamus",
                                                                            },
                                                                            MaxComparisonValue: "et",
                                                                            MinComparisonValue: "accusamus",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aut",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "omnis",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "UNSPECIFIED_MATCH_TYPE",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "architecto",
                                                                            Expressions: []string{
                                                                                "consectetur",
                                                                                "autem",
                                                                            },
                                                                            MaxComparisonValue: "inventore",
                                                                            MinComparisonValue: "quam",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "architecto",
                                                                            MaxComparisonValue: "aut",
                                                                            MetricName: "autem",
                                                                            Operator: "EQUAL",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "fugit",
                                                                            Expressions: []string{
                                                                                "earum",
                                                                                "officia",
                                                                                "doloremque",
                                                                            },
                                                                            MaxComparisonValue: "sunt",
                                                                            MinComparisonValue: "dignissimos",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ducimus",
                                                                            MaxComparisonValue: "sit",
                                                                            MetricName: "praesentium",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "nihil",
                                                                            Expressions: []string{
                                                                                "aut",
                                                                                "sunt",
                                                                                "harum",
                                                                            },
                                                                            MaxComparisonValue: "atque",
                                                                            MinComparisonValue: "nihil",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "dolor",
                                                                            MaxComparisonValue: "sunt",
                                                                            MetricName: "sapiente",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "corrupti",
                                                                            Expressions: []string{
                                                                                "omnis",
                                                                            },
                                                                            MaxComparisonValue: "tenetur",
                                                                            MinComparisonValue: "qui",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "consequatur",
                                                                            MaxComparisonValue: "officiis",
                                                                            MetricName: "excepturi",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "accusantium",
                                                                            Expressions: []string{
                                                                                "qui",
                                                                                "officia",
                                                                            },
                                                                            MaxComparisonValue: "corporis",
                                                                            MinComparisonValue: "et",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "expedita",
                                                                            MaxComparisonValue: "sed",
                                                                            MetricName: "voluptatibus",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "sed",
                                                                    Expressions: []string{
                                                                        "ab",
                                                                        "odio",
                                                                    },
                                                                    MaxComparisonValue: "non",
                                                                    MinComparisonValue: "quidem",
                                                                    Operator: "IN_LIST",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "possimus",
                                                                    MaxComparisonValue: "non",
                                                                    MetricName: "id",
                                                                    Operator: "EQUAL",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "qui",
                                                                    Expressions: []string{
                                                                        "explicabo",
                                                                        "suscipit",
                                                                    },
                                                                    MaxComparisonValue: "dolorem",
                                                                    MinComparisonValue: "et",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "consequatur",
                                                                    MaxComparisonValue: "ratione",
                                                                    MetricName: "consequatur",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "excepturi",
                                                                    Expressions: []string{
                                                                        "maxime",
                                                                    },
                                                                    MaxComparisonValue: "ut",
                                                                    MinComparisonValue: "rerum",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "voluptatum",
                                                                    MaxComparisonValue: "omnis",
                                                                    MetricName: "sunt",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "ea",
                                                                    Expressions: []string{
                                                                        "enim",
                                                                        "cum",
                                                                        "et",
                                                                    },
                                                                    MaxComparisonValue: "quo",
                                                                    MinComparisonValue: "voluptatum",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "repudiandae",
                                                                    MaxComparisonValue: "optio",
                                                                    MetricName: "aut",
                                                                    Operator: "EQUAL",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "ut",
                                                                    Expressions: []string{
                                                                        "illum",
                                                                        "tempore",
                                                                    },
                                                                    MaxComparisonValue: "eum",
                                                                    MinComparisonValue: "dolorem",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "sed",
                                                                    MaxComparisonValue: "quasi",
                                                                    MetricName: "et",
                                                                    Operator: "EQUAL",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "nihil",
                                                                    Expressions: []string{
                                                                        "inventore",
                                                                        "aut",
                                                                    },
                                                                    MaxComparisonValue: "aut",
                                                                    MinComparisonValue: "quia",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "saepe",
                                                                    MaxComparisonValue: "dolorem",
                                                                    MetricName: "est",
                                                                    Operator: "EQUAL",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "facere",
                                                                    Expressions: []string{
                                                                        "aut",
                                                                    },
                                                                    MaxComparisonValue: "qui",
                                                                    MinComparisonValue: "at",
                                                                    Operator: "IN_LIST",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "laborum",
                                                                    MaxComparisonValue: "labore",
                                                                    MetricName: "non",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "a",
                                                                    Expressions: []string{
                                                                        "porro",
                                                                    },
                                                                    MaxComparisonValue: "impedit",
                                                                    MinComparisonValue: "soluta",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "dolorem",
                                                                    MaxComparisonValue: "voluptates",
                                                                    MetricName: "ipsum",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "odit",
                                                                    Expressions: []string{
                                                                        "sit",
                                                                        "doloremque",
                                                                    },
                                                                    MaxComparisonValue: "harum",
                                                                    MinComparisonValue: "esse",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "voluptatem",
                                                                    MaxComparisonValue: "facilis",
                                                                    MetricName: "itaque",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: false,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            SegmentID: "quis",
                        },
                    },
                    ViewID: "qui",
                },
            },
            UseResourceQuotas: false,
        },
    }
    
    res, err := s.Reports.AnalyticsreportingReportsBatchGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReportsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->