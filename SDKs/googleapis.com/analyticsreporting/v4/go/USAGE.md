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
            DollarXgafv: "1",
            AccessToken: "eveniet",
            Alt: "json",
            Callback: "reiciendis",
            Fields: "laudantium",
            Key: "autem",
            OauthToken: "quam",
            PrettyPrint: true,
            QuotaUser: "recusandae",
            UploadType: "quisquam",
            UploadProtocol: "quasi",
        },
        Request: &shared.GetReportsRequest{
            ReportRequests: []shared.ReportRequest{
                shared.ReportRequest{
                    CohortGroup: &shared.CohortGroup{
                        Cohorts: []shared.Cohort{
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "ipsum",
                                    StartDate: "ducimus",
                                },
                                Name: "accusamus",
                                Type: "UNSPECIFIED_COHORT_TYPE",
                            },
                        },
                        LifetimeValue: false,
                    },
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: "est",
                            StartDate: "voluptas",
                        },
                    },
                    DimensionFilterClauses: []shared.DimensionFilterClause{
                        shared.DimensionFilterClause{
                            Filters: []shared.DimensionFilter{
                                shared.DimensionFilter{
                                    CaseSensitive: false,
                                    DimensionName: "quis",
                                    Expressions: []string{
                                        "dolores",
                                        "ipsam",
                                    },
                                    Not: false,
                                    Operator: "NUMERIC_GREATER_THAN",
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: false,
                                    DimensionName: "aut",
                                    Expressions: []string{
                                        "qui",
                                        "accusamus",
                                        "sed",
                                    },
                                    Not: true,
                                    Operator: "ENDS_WITH",
                                },
                            },
                            Operator: "AND",
                        },
                        shared.DimensionFilterClause{
                            Filters: []shared.DimensionFilter{
                                shared.DimensionFilter{
                                    CaseSensitive: true,
                                    DimensionName: "laudantium",
                                    Expressions: []string{
                                        "qui",
                                        "molestias",
                                    },
                                    Not: false,
                                    Operator: "IN_LIST",
                                },
                            },
                            Operator: "AND",
                        },
                    },
                    Dimensions: []shared.Dimension{
                        shared.Dimension{
                            HistogramBuckets: []string{
                                "fugiat",
                                "qui",
                                "incidunt",
                            },
                            Name: "sed",
                        },
                        shared.Dimension{
                            HistogramBuckets: []string{
                                "et",
                                "quis",
                                "amet",
                            },
                            Name: "non",
                        },
                        shared.Dimension{
                            HistogramBuckets: []string{
                                "quo",
                            },
                            Name: "vel",
                        },
                    },
                    FiltersExpression: "labore",
                    HideTotals: false,
                    HideValueRanges: false,
                    IncludeEmptyRows: false,
                    MetricFilterClauses: []shared.MetricFilterClause{
                        shared.MetricFilterClause{
                            Filters: []shared.MetricFilter{
                                shared.MetricFilter{
                                    ComparisonValue: "voluptatem",
                                    MetricName: "ut",
                                    Not: false,
                                    Operator: "LESS_THAN",
                                },
                                shared.MetricFilter{
                                    ComparisonValue: "neque",
                                    MetricName: "qui",
                                    Not: true,
                                    Operator: "GREATER_THAN",
                                },
                            },
                            Operator: "OPERATOR_UNSPECIFIED",
                        },
                        shared.MetricFilterClause{
                            Filters: []shared.MetricFilter{
                                shared.MetricFilter{
                                    ComparisonValue: "eveniet",
                                    MetricName: "sit",
                                    Not: true,
                                    Operator: "EQUAL",
                                },
                                shared.MetricFilter{
                                    ComparisonValue: "pariatur",
                                    MetricName: "nesciunt",
                                    Not: false,
                                    Operator: "EQUAL",
                                },
                                shared.MetricFilter{
                                    ComparisonValue: "ducimus",
                                    MetricName: "eos",
                                    Not: false,
                                    Operator: "EQUAL",
                                },
                            },
                            Operator: "AND",
                        },
                    },
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Alias: "atque",
                            Expression: "culpa",
                            FormattingType: "METRIC_TYPE_UNSPECIFIED",
                        },
                        shared.Metric{
                            Alias: "maiores",
                            Expression: "repellat",
                            FormattingType: "TIME",
                        },
                    },
                    OrderBys: []shared.OrderBy{
                        shared.OrderBy{
                            FieldName: "facere",
                            OrderType: "SMART",
                            SortOrder: "DESCENDING",
                        },
                        shared.OrderBy{
                            FieldName: "eos",
                            OrderType: "VALUE",
                            SortOrder: "SORT_ORDER_UNSPECIFIED",
                        },
                        shared.OrderBy{
                            FieldName: "odio",
                            OrderType: "HISTOGRAM_BUCKET",
                            SortOrder: "DESCENDING",
                        },
                    },
                    PageSize: 8943789610899836612,
                    PageToken: "eos",
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            DimensionFilterClauses: []shared.DimensionFilterClause{
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "voluptatem",
                                            Expressions: []string{
                                                "omnis",
                                                "voluptatum",
                                            },
                                            Not: true,
                                            Operator: "PARTIAL",
                                        },
                                    },
                                    Operator: "OR",
                                },
                            },
                            Dimensions: []shared.Dimension{
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "aut",
                                        "qui",
                                        "sed",
                                    },
                                    Name: "quae",
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "aut",
                                    },
                                    Name: "cum",
                                },
                            },
                            MaxGroupCount: 8835520332190525981,
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Alias: "sed",
                                    Expression: "mollitia",
                                    FormattingType: "FLOAT",
                                },
                            },
                            StartGroup: 1612020807983605623,
                        },
                        shared.Pivot{
                            DimensionFilterClauses: []shared.DimensionFilterClause{
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "a",
                                            Expressions: []string{
                                                "nemo",
                                                "tenetur",
                                            },
                                            Not: false,
                                            Operator: "NUMERIC_GREATER_THAN",
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
                                                "cum",
                                                "explicabo",
                                            },
                                            Not: true,
                                            Operator: "NUMERIC_EQUAL",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "qui",
                                            Expressions: []string{
                                                "et",
                                                "enim",
                                                "dolorem",
                                            },
                                            Not: false,
                                            Operator: "NUMERIC_LESS_THAN",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "omnis",
                                            Expressions: []string{
                                                "quia",
                                                "ea",
                                                "mollitia",
                                            },
                                            Not: true,
                                            Operator: "EXACT",
                                        },
                                    },
                                    Operator: "AND",
                                },
                            },
                            Dimensions: []shared.Dimension{
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "voluptatem",
                                    },
                                    Name: "ducimus",
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "voluptatum",
                                        "doloremque",
                                    },
                                    Name: "dolores",
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "quo",
                                    },
                                    Name: "voluptatibus",
                                },
                            },
                            MaxGroupCount: 2340557313826005771,
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Alias: "et",
                                    Expression: "eos",
                                    FormattingType: "FLOAT",
                                },
                            },
                            StartGroup: 312681846893318873,
                        },
                        shared.Pivot{
                            DimensionFilterClauses: []shared.DimensionFilterClause{
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "earum",
                                            Expressions: []string{
                                                "iste",
                                            },
                                            Not: false,
                                            Operator: "IN_LIST",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "voluptates",
                                            Expressions: []string{
                                                "et",
                                            },
                                            Not: false,
                                            Operator: "PARTIAL",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "labore",
                                            Expressions: []string{
                                                "est",
                                                "ipsa",
                                                "quae",
                                            },
                                            Not: false,
                                            Operator: "IN_LIST",
                                        },
                                    },
                                    Operator: "OR",
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "libero",
                                            Expressions: []string{
                                                "minima",
                                                "beatae",
                                                "aliquid",
                                            },
                                            Not: false,
                                            Operator: "EXACT",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "provident",
                                            Expressions: []string{
                                                "voluptate",
                                                "exercitationem",
                                                "facere",
                                            },
                                            Not: false,
                                            Operator: "NUMERIC_GREATER_THAN",
                                        },
                                    },
                                    Operator: "AND",
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "numquam",
                                            Expressions: []string{
                                                "natus",
                                                "quasi",
                                            },
                                            Not: true,
                                            Operator: "NUMERIC_LESS_THAN",
                                        },
                                    },
                                    Operator: "OR",
                                },
                            },
                            Dimensions: []shared.Dimension{
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "voluptatem",
                                    },
                                    Name: "dolorum",
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "quo",
                                        "iste",
                                        "quae",
                                    },
                                    Name: "rerum",
                                },
                            },
                            MaxGroupCount: 2401970533730926172,
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Alias: "aut",
                                    Expression: "magnam",
                                    FormattingType: "INTEGER",
                                },
                            },
                            StartGroup: 5561808368852659813,
                        },
                    },
                    SamplingLevel: "DEFAULT",
                    Segments: []shared.Segment{
                        shared.Segment{
                            DynamicSegment: &shared.DynamicSegment{
                                Name: "error",
                                SessionSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
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
                                                                            CaseSensitive: false,
                                                                            DimensionName: "dignissimos",
                                                                            Expressions: []string{
                                                                                "tempora",
                                                                                "assumenda",
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: "rerum",
                                                                            MinComparisonValue: "similique",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "perspiciatis",
                                                                            MaxComparisonValue: "non",
                                                                            MetricName: "fugiat",
                                                                            Operator: "EQUAL",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "maxime",
                                                                            Expressions: []string{
                                                                                "aspernatur",
                                                                                "dolores",
                                                                            },
                                                                            MaxComparisonValue: "sed",
                                                                            MinComparisonValue: "placeat",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "praesentium",
                                                                            MaxComparisonValue: "deleniti",
                                                                            MetricName: "beatae",
                                                                            Operator: "EQUAL",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "totam",
                                                                            Expressions: []string{
                                                                                "adipisci",
                                                                                "consequatur",
                                                                                "necessitatibus",
                                                                            },
                                                                            MaxComparisonValue: "delectus",
                                                                            MinComparisonValue: "eius",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "labore",
                                                                            MaxComparisonValue: "illum",
                                                                            MetricName: "et",
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
                                                                            DimensionName: "quos",
                                                                            Expressions: []string{
                                                                                "doloremque",
                                                                            },
                                                                            MaxComparisonValue: "provident",
                                                                            MinComparisonValue: "vero",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "rem",
                                                                            MaxComparisonValue: "quo",
                                                                            MetricName: "amet",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "quo",
                                                                            Expressions: []string{
                                                                                "error",
                                                                            },
                                                                            MaxComparisonValue: "reiciendis",
                                                                            MinComparisonValue: "corrupti",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "cupiditate",
                                                                            MaxComparisonValue: "qui",
                                                                            MetricName: "pariatur",
                                                                            Operator: "GREATER_THAN",
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
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "qui",
                                                                    Expressions: []string{
                                                                        "saepe",
                                                                        "quis",
                                                                    },
                                                                    MaxComparisonValue: "quia",
                                                                    MinComparisonValue: "dignissimos",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "sit",
                                                                    MaxComparisonValue: "optio",
                                                                    MetricName: "aut",
                                                                    Operator: "EQUAL",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "voluptas",
                                                                    Expressions: []string{
                                                                        "nobis",
                                                                    },
                                                                    MaxComparisonValue: "sequi",
                                                                    MinComparisonValue: "soluta",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "provident",
                                                                    MaxComparisonValue: "aut",
                                                                    MetricName: "culpa",
                                                                    Operator: "EQUAL",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
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
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "possimus",
                                                                            Expressions: []string{
                                                                                "molestiae",
                                                                                "alias",
                                                                                "repellat",
                                                                            },
                                                                            MaxComparisonValue: "qui",
                                                                            MinComparisonValue: "ullam",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "doloribus",
                                                                            MaxComparisonValue: "dolorum",
                                                                            MetricName: "nisi",
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
                                                                            DimensionName: "dolorem",
                                                                            Expressions: []string{
                                                                                "enim",
                                                                                "recusandae",
                                                                            },
                                                                            MaxComparisonValue: "nostrum",
                                                                            MinComparisonValue: "et",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aliquam",
                                                                            MaxComparisonValue: "numquam",
                                                                            MetricName: "incidunt",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "repudiandae",
                                                                            Expressions: []string{
                                                                                "sint",
                                                                            },
                                                                            MaxComparisonValue: "facere",
                                                                            MinComparisonValue: "assumenda",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "commodi",
                                                                            MaxComparisonValue: "iste",
                                                                            MetricName: "assumenda",
                                                                            Operator: "EQUAL",
                                                                            Scope: "SESSION",
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
                                                                            CaseSensitive: true,
                                                                            DimensionName: "officia",
                                                                            Expressions: []string{
                                                                                "ea",
                                                                                "ullam",
                                                                                "blanditiis",
                                                                            },
                                                                            MaxComparisonValue: "nobis",
                                                                            MinComparisonValue: "excepturi",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quia",
                                                                            MaxComparisonValue: "necessitatibus",
                                                                            MetricName: "est",
                                                                            Operator: "BETWEEN",
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
                                                                    DimensionName: "eligendi",
                                                                    Expressions: []string{
                                                                        "ab",
                                                                        "sint",
                                                                    },
                                                                    MaxComparisonValue: "ea",
                                                                    MinComparisonValue: "ad",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "soluta",
                                                                    MaxComparisonValue: "praesentium",
                                                                    MetricName: "consequatur",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "vel",
                                                                    Expressions: []string{
                                                                        "sed",
                                                                        "consequatur",
                                                                        "inventore",
                                                                    },
                                                                    MaxComparisonValue: "assumenda",
                                                                    MinComparisonValue: "tempora",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "illo",
                                                                    MaxComparisonValue: "nesciunt",
                                                                    MetricName: "voluptatem",
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
                                                                    DimensionName: "quia",
                                                                    Expressions: []string{
                                                                        "enim",
                                                                    },
                                                                    MaxComparisonValue: "voluptates",
                                                                    MinComparisonValue: "dolorem",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "nihil",
                                                                    MaxComparisonValue: "cum",
                                                                    MetricName: "ipsum",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
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
                                                                    DimensionName: "tempore",
                                                                    Expressions: []string{
                                                                        "et",
                                                                        "omnis",
                                                                    },
                                                                    MaxComparisonValue: "quia",
                                                                    MinComparisonValue: "et",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "aut",
                                                                    MaxComparisonValue: "quos",
                                                                    MetricName: "vel",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
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
                                                                            CaseSensitive: false,
                                                                            DimensionName: "quos",
                                                                            Expressions: []string{
                                                                                "aut",
                                                                                "dignissimos",
                                                                            },
                                                                            MaxComparisonValue: "fugit",
                                                                            MinComparisonValue: "quo",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "officia",
                                                                            MaxComparisonValue: "doloremque",
                                                                            MetricName: "sunt",
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
                                                                            DimensionName: "sed",
                                                                            Expressions: []string{
                                                                                "et",
                                                                                "unde",
                                                                                "quo",
                                                                            },
                                                                            MaxComparisonValue: "amet",
                                                                            MinComparisonValue: "sed",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "id",
                                                                            MaxComparisonValue: "aut",
                                                                            MetricName: "sunt",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "dolor",
                                                                            Expressions: []string{
                                                                                "sapiente",
                                                                            },
                                                                            MaxComparisonValue: "et",
                                                                            MinComparisonValue: "saepe",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "cum",
                                                                            MaxComparisonValue: "corrupti",
                                                                            MetricName: "et",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "PRODUCT",
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
                                                                    DimensionName: "excepturi",
                                                                    Expressions: []string{
                                                                        "sed",
                                                                        "error",
                                                                        "optio",
                                                                    },
                                                                    MaxComparisonValue: "accusantium",
                                                                    MinComparisonValue: "voluptatem",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "officia",
                                                                    MaxComparisonValue: "corporis",
                                                                    MetricName: "et",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "officiis",
                                                                    Expressions: []string{
                                                                        "illo",
                                                                        "quisquam",
                                                                    },
                                                                    MaxComparisonValue: "assumenda",
                                                                    MinComparisonValue: "minus",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "harum",
                                                                    MaxComparisonValue: "ab",
                                                                    MetricName: "odio",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "non",
                                                                    Expressions: []string{
                                                                        "libero",
                                                                        "veritatis",
                                                                    },
                                                                    MaxComparisonValue: "sapiente",
                                                                    MinComparisonValue: "ducimus",
                                                                    Operator: "IN_LIST",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "dolore",
                                                                    MaxComparisonValue: "explicabo",
                                                                    MetricName: "suscipit",
                                                                    Operator: "EQUAL",
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
                                                                    DimensionName: "consequatur",
                                                                    Expressions: []string{
                                                                        "natus",
                                                                        "velit",
                                                                        "qui",
                                                                    },
                                                                    MaxComparisonValue: "excepturi",
                                                                    MinComparisonValue: "ex",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ut",
                                                                    MaxComparisonValue: "rerum",
                                                                    MetricName: "commodi",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "dolor",
                                                                    Expressions: []string{
                                                                        "ut",
                                                                    },
                                                                    MaxComparisonValue: "odit",
                                                                    MinComparisonValue: "ea",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "enim",
                                                                    MaxComparisonValue: "cum",
                                                                    MetricName: "et",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "optio",
                                                                    Expressions: []string{
                                                                        "saepe",
                                                                        "optio",
                                                                        "animi",
                                                                    },
                                                                    MaxComparisonValue: "libero",
                                                                    MinComparisonValue: "ut",
                                                                    Operator: "IN_LIST",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "illum",
                                                                    MaxComparisonValue: "tempore",
                                                                    MetricName: "eum",
                                                                    Operator: "GREATER_THAN",
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
                            },
                            SegmentID: "quasi",
                        },
                        shared.Segment{
                            DynamicSegment: &shared.DynamicSegment{
                                Name: "et",
                                SessionSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
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
                                                                            DimensionName: "aut",
                                                                            Expressions: []string{
                                                                                "aliquam",
                                                                            },
                                                                            MaxComparisonValue: "saepe",
                                                                            MinComparisonValue: "dolorem",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "soluta",
                                                                            MaxComparisonValue: "occaecati",
                                                                            MetricName: "quia",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
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
                                                                            CaseSensitive: false,
                                                                            DimensionName: "qui",
                                                                            Expressions: []string{
                                                                                "sed",
                                                                                "laborum",
                                                                            },
                                                                            MaxComparisonValue: "labore",
                                                                            MinComparisonValue: "non",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "non",
                                                                            MaxComparisonValue: "ullam",
                                                                            MetricName: "repellendus",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "SESSION",
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
                                                                            DimensionName: "voluptates",
                                                                            Expressions: []string{
                                                                                "temporibus",
                                                                            },
                                                                            MaxComparisonValue: "a",
                                                                            MinComparisonValue: "cupiditate",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "odit",
                                                                            MaxComparisonValue: "facilis",
                                                                            MetricName: "sit",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "PRODUCT",
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
                                                                    DimensionName: "itaque",
                                                                    Expressions: []string{
                                                                        "quis",
                                                                        "quibusdam",
                                                                    },
                                                                    MaxComparisonValue: "quis",
                                                                    MinComparisonValue: "qui",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "dignissimos",
                                                                    MaxComparisonValue: "officia",
                                                                    MetricName: "officia",
                                                                    Operator: "EQUAL",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "illo",
                                                                    Expressions: []string{
                                                                        "et",
                                                                        "et",
                                                                    },
                                                                    MaxComparisonValue: "vel",
                                                                    MinComparisonValue: "vero",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ut",
                                                                    MaxComparisonValue: "earum",
                                                                    MetricName: "sint",
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
                                                                    DimensionName: "minima",
                                                                    Expressions: []string{
                                                                        "corrupti",
                                                                    },
                                                                    MaxComparisonValue: "ipsa",
                                                                    MinComparisonValue: "sint",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ab",
                                                                    MaxComparisonValue: "porro",
                                                                    MetricName: "quis",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "odio",
                                                                    Expressions: []string{
                                                                        "velit",
                                                                        "officiis",
                                                                    },
                                                                    MaxComparisonValue: "ullam",
                                                                    MinComparisonValue: "quasi",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "sunt",
                                                                    MaxComparisonValue: "soluta",
                                                                    MetricName: "animi",
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
                                                                    CaseSensitive: true,
                                                                    DimensionName: "non",
                                                                    Expressions: []string{
                                                                        "molestiae",
                                                                    },
                                                                    MaxComparisonValue: "mollitia",
                                                                    MinComparisonValue: "non",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "id",
                                                                    MaxComparisonValue: "eos",
                                                                    MetricName: "quia",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "qui",
                                                                    Expressions: []string{
                                                                        "et",
                                                                        "aut",
                                                                    },
                                                                    MaxComparisonValue: "ut",
                                                                    MinComparisonValue: "voluptas",
                                                                    Operator: "IN_LIST",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "molestias",
                                                                    MaxComparisonValue: "odio",
                                                                    MetricName: "quo",
                                                                    Operator: "EQUAL",
                                                                    Scope: "SESSION",
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
                                                FirstStepShouldMatchFirstHit: false,
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "maiores",
                                                                            Expressions: []string{
                                                                                "omnis",
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: "vitae",
                                                                            MinComparisonValue: "excepturi",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "voluptas",
                                                                            MaxComparisonValue: "illo",
                                                                            MetricName: "voluptate",
                                                                            Operator: "LESS_THAN",
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
                                                                            CaseSensitive: false,
                                                                            DimensionName: "qui",
                                                                            Expressions: []string{
                                                                                "et",
                                                                                "maiores",
                                                                                "sed",
                                                                            },
                                                                            MaxComparisonValue: "recusandae",
                                                                            MinComparisonValue: "omnis",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "tenetur",
                                                                            MaxComparisonValue: "beatae",
                                                                            MetricName: "ut",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "maxime",
                                                                            Expressions: []string{
                                                                                "neque",
                                                                                "est",
                                                                            },
                                                                            MaxComparisonValue: "ad",
                                                                            MinComparisonValue: "quibusdam",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ea",
                                                                            MaxComparisonValue: "ducimus",
                                                                            MetricName: "quia",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "quo",
                                                                            Expressions: []string{
                                                                                "rerum",
                                                                                "ipsam",
                                                                                "quia",
                                                                            },
                                                                            MaxComparisonValue: "voluptatibus",
                                                                            MinComparisonValue: "sint",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sed",
                                                                            MaxComparisonValue: "facere",
                                                                            MetricName: "voluptate",
                                                                            Operator: "EQUAL",
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
                                                                            CaseSensitive: false,
                                                                            DimensionName: "consequatur",
                                                                            Expressions: []string{
                                                                                "rerum",
                                                                                "sed",
                                                                            },
                                                                            MaxComparisonValue: "consectetur",
                                                                            MinComparisonValue: "similique",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "nesciunt",
                                                                            MaxComparisonValue: "est",
                                                                            MetricName: "possimus",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "similique",
                                                                            Expressions: []string{
                                                                                "sit",
                                                                                "dolorem",
                                                                            },
                                                                            MaxComparisonValue: "doloremque",
                                                                            MinComparisonValue: "aut",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "a",
                                                                            MaxComparisonValue: "aut",
                                                                            MetricName: "illum",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "ratione",
                                                                            Expressions: []string{
                                                                                "ut",
                                                                            },
                                                                            MaxComparisonValue: "magni",
                                                                            MinComparisonValue: "repellat",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "animi",
                                                                            MaxComparisonValue: "ut",
                                                                            MetricName: "inventore",
                                                                            Operator: "EQUAL",
                                                                            Scope: "PRODUCT",
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
                                                                    DimensionName: "ut",
                                                                    Expressions: []string{
                                                                        "omnis",
                                                                        "neque",
                                                                    },
                                                                    MaxComparisonValue: "quisquam",
                                                                    MinComparisonValue: "maxime",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "eaque",
                                                                    MaxComparisonValue: "voluptatibus",
                                                                    MetricName: "repellendus",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "molestias",
                                                                    Expressions: []string{
                                                                        "minus",
                                                                    },
                                                                    MaxComparisonValue: "recusandae",
                                                                    MinComparisonValue: "ut",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "eius",
                                                                    MaxComparisonValue: "repellat",
                                                                    MetricName: "sit",
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
                                                                    DimensionName: "aliquid",
                                                                    Expressions: []string{
                                                                        "ut",
                                                                    },
                                                                    MaxComparisonValue: "dolorem",
                                                                    MinComparisonValue: "fugiat",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "id",
                                                                    MaxComparisonValue: "velit",
                                                                    MetricName: "qui",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "quos",
                                                                    Expressions: []string{
                                                                        "et",
                                                                        "quam",
                                                                    },
                                                                    MaxComparisonValue: "molestiae",
                                                                    MinComparisonValue: "et",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "aut",
                                                                    MaxComparisonValue: "nihil",
                                                                    MetricName: "perspiciatis",
                                                                    Operator: "EQUAL",
                                                                    Scope: "USER",
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
                                                                            DimensionName: "blanditiis",
                                                                            Expressions: []string{
                                                                                "eaque",
                                                                                "sequi",
                                                                                "quos",
                                                                            },
                                                                            MaxComparisonValue: "unde",
                                                                            MinComparisonValue: "enim",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quas",
                                                                            MaxComparisonValue: "non",
                                                                            MetricName: "dignissimos",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "quasi",
                                                                            Expressions: []string{
                                                                                "ratione",
                                                                            },
                                                                            MaxComparisonValue: "aliquam",
                                                                            MinComparisonValue: "quod",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "deserunt",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "magnam",
                                                                            Operator: "GREATER_THAN",
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
                                                                            DimensionName: "rerum",
                                                                            Expressions: []string{
                                                                                "fugiat",
                                                                                "facere",
                                                                                "non",
                                                                            },
                                                                            MaxComparisonValue: "consectetur",
                                                                            MinComparisonValue: "eum",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "inventore",
                                                                            MaxComparisonValue: "est",
                                                                            MetricName: "sunt",
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
                                                                                "aut",
                                                                            },
                                                                            MaxComparisonValue: "reprehenderit",
                                                                            MinComparisonValue: "laborum",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "praesentium",
                                                                            MaxComparisonValue: "non",
                                                                            MetricName: "consectetur",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "consequatur",
                                                                            Expressions: []string{
                                                                                "vero",
                                                                            },
                                                                            MaxComparisonValue: "rem",
                                                                            MinComparisonValue: "architecto",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aut",
                                                                            MaxComparisonValue: "non",
                                                                            MetricName: "praesentium",
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
                                                                            CaseSensitive: false,
                                                                            DimensionName: "est",
                                                                            Expressions: []string{
                                                                                "tempore",
                                                                                "autem",
                                                                            },
                                                                            MaxComparisonValue: "sunt",
                                                                            MinComparisonValue: "consequuntur",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "dicta",
                                                                            MaxComparisonValue: "asperiores",
                                                                            MetricName: "saepe",
                                                                            Operator: "GREATER_THAN",
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
                                                                            CaseSensitive: false,
                                                                            DimensionName: "culpa",
                                                                            Expressions: []string{
                                                                                "error",
                                                                            },
                                                                            MaxComparisonValue: "non",
                                                                            MinComparisonValue: "natus",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "labore",
                                                                            MaxComparisonValue: "consequatur",
                                                                            MetricName: "quia",
                                                                            Operator: "EQUAL",
                                                                            Scope: "USER",
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
                                                                            CaseSensitive: true,
                                                                            DimensionName: "modi",
                                                                            Expressions: []string{
                                                                                "dolorum",
                                                                                "autem",
                                                                            },
                                                                            MaxComparisonValue: "consequatur",
                                                                            MinComparisonValue: "minima",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ad",
                                                                            MaxComparisonValue: "corrupti",
                                                                            MetricName: "non",
                                                                            Operator: "EQUAL",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "provident",
                                                                            Expressions: []string{
                                                                                "voluptatum",
                                                                                "aperiam",
                                                                            },
                                                                            MaxComparisonValue: "necessitatibus",
                                                                            MinComparisonValue: "commodi",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "nisi",
                                                                            MaxComparisonValue: "nemo",
                                                                            MetricName: "consequatur",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "consequatur",
                                                                            Expressions: []string{
                                                                                "tempora",
                                                                            },
                                                                            MaxComparisonValue: "ea",
                                                                            MinComparisonValue: "tempora",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "assumenda",
                                                                            MaxComparisonValue: "voluptatibus",
                                                                            MetricName: "dolorem",
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
                                                                            DimensionName: "necessitatibus",
                                                                            Expressions: []string{
                                                                                "iusto",
                                                                                "ex",
                                                                                "eum",
                                                                            },
                                                                            MaxComparisonValue: "commodi",
                                                                            MinComparisonValue: "soluta",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "voluptatum",
                                                                            MaxComparisonValue: "blanditiis",
                                                                            MetricName: "velit",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "eaque",
                                                                            Expressions: []string{
                                                                                "expedita",
                                                                                "quaerat",
                                                                            },
                                                                            MaxComparisonValue: "dignissimos",
                                                                            MinComparisonValue: "doloremque",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "et",
                                                                            MaxComparisonValue: "beatae",
                                                                            MetricName: "occaecati",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "consequatur",
                                                                            Expressions: []string{
                                                                                "quasi",
                                                                                "autem",
                                                                            },
                                                                            MaxComparisonValue: "corrupti",
                                                                            MinComparisonValue: "ducimus",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aut",
                                                                            MaxComparisonValue: "molestiae",
                                                                            MetricName: "architecto",
                                                                            Operator: "EQUAL",
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
                                                                    DimensionName: "sed",
                                                                    Expressions: []string{
                                                                        "est",
                                                                    },
                                                                    MaxComparisonValue: "at",
                                                                    MinComparisonValue: "sed",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "at",
                                                                    MaxComparisonValue: "molestiae",
                                                                    MetricName: "assumenda",
                                                                    Operator: "GREATER_THAN",
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
                                                                    DimensionName: "et",
                                                                    Expressions: []string{
                                                                        "occaecati",
                                                                        "incidunt",
                                                                        "est",
                                                                    },
                                                                    MaxComparisonValue: "fuga",
                                                                    MinComparisonValue: "rerum",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "libero",
                                                                    MaxComparisonValue: "eligendi",
                                                                    MetricName: "id",
                                                                    Operator: "EQUAL",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "omnis",
                                                                    Expressions: []string{
                                                                        "doloremque",
                                                                        "quis",
                                                                    },
                                                                    MaxComparisonValue: "iste",
                                                                    MinComparisonValue: "molestias",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "aut",
                                                                    MaxComparisonValue: "tenetur",
                                                                    MetricName: "quo",
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
                                                                    CaseSensitive: true,
                                                                    DimensionName: "et",
                                                                    Expressions: []string{
                                                                        "laborum",
                                                                        "incidunt",
                                                                    },
                                                                    MaxComparisonValue: "rem",
                                                                    MinComparisonValue: "explicabo",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "quas",
                                                                    MaxComparisonValue: "autem",
                                                                    MetricName: "quae",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "qui",
                                                                    Expressions: []string{
                                                                        "hic",
                                                                        "et",
                                                                    },
                                                                    MaxComparisonValue: "illo",
                                                                    MinComparisonValue: "ut",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "eum",
                                                                    MaxComparisonValue: "et",
                                                                    MetricName: "sed",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "beatae",
                                                                    Expressions: []string{
                                                                        "et",
                                                                        "ipsam",
                                                                    },
                                                                    MaxComparisonValue: "eos",
                                                                    MinComparisonValue: "autem",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "vel",
                                                                    MaxComparisonValue: "quo",
                                                                    MetricName: "minus",
                                                                    Operator: "LESS_THAN",
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
                                                                            DimensionName: "ut",
                                                                            Expressions: []string{
                                                                                "libero",
                                                                                "quaerat",
                                                                            },
                                                                            MaxComparisonValue: "ut",
                                                                            MinComparisonValue: "sed",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "nesciunt",
                                                                            MaxComparisonValue: "incidunt",
                                                                            MetricName: "hic",
                                                                            Operator: "EQUAL",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "voluptas",
                                                                            Expressions: []string{
                                                                                "tenetur",
                                                                                "blanditiis",
                                                                            },
                                                                            MaxComparisonValue: "cum",
                                                                            MinComparisonValue: "illum",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "et",
                                                                            MaxComparisonValue: "quia",
                                                                            MetricName: "est",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "autem",
                                                                            Expressions: []string{
                                                                                "ipsam",
                                                                                "ut",
                                                                            },
                                                                            MaxComparisonValue: "quod",
                                                                            MinComparisonValue: "dolor",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "voluptates",
                                                                            MaxComparisonValue: "cupiditate",
                                                                            MetricName: "sapiente",
                                                                            Operator: "GREATER_THAN",
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
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "corporis",
                                                                    Expressions: []string{
                                                                        "voluptatem",
                                                                    },
                                                                    MaxComparisonValue: "id",
                                                                    MinComparisonValue: "corrupti",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "quos",
                                                                    MaxComparisonValue: "tempore",
                                                                    MetricName: "quibusdam",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "praesentium",
                                                                    Expressions: []string{
                                                                        "quae",
                                                                    },
                                                                    MaxComparisonValue: "est",
                                                                    MinComparisonValue: "iusto",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "et",
                                                                    MaxComparisonValue: "dolor",
                                                                    MetricName: "vero",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "vitae",
                                                                    Expressions: []string{
                                                                        "doloribus",
                                                                        "in",
                                                                        "et",
                                                                    },
                                                                    MaxComparisonValue: "quia",
                                                                    MinComparisonValue: "eius",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "et",
                                                                    MaxComparisonValue: "quos",
                                                                    MetricName: "ut",
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
                                                                    DimensionName: "doloribus",
                                                                    Expressions: []string{
                                                                        "commodi",
                                                                        "aspernatur",
                                                                        "voluptates",
                                                                    },
                                                                    MaxComparisonValue: "praesentium",
                                                                    MinComparisonValue: "quidem",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "dicta",
                                                                    MaxComparisonValue: "consequatur",
                                                                    MetricName: "voluptatum",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
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
                                                                    DimensionName: "sit",
                                                                    Expressions: []string{
                                                                        "sint",
                                                                        "sapiente",
                                                                    },
                                                                    MaxComparisonValue: "alias",
                                                                    MinComparisonValue: "minima",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "vel",
                                                                    MaxComparisonValue: "voluptatem",
                                                                    MetricName: "repellendus",
                                                                    Operator: "GREATER_THAN",
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
                            SegmentID: "soluta",
                        },
                        shared.Segment{
                            DynamicSegment: &shared.DynamicSegment{
                                Name: "eos",
                                SessionSegment: &shared.SegmentDefinition{
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
                                                                            DimensionName: "enim",
                                                                            Expressions: []string{
                                                                                "laudantium",
                                                                                "error",
                                                                                "id",
                                                                            },
                                                                            MaxComparisonValue: "voluptates",
                                                                            MinComparisonValue: "nihil",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sit",
                                                                            MaxComparisonValue: "ut",
                                                                            MetricName: "quo",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "quam",
                                                                            Expressions: []string{
                                                                                "iure",
                                                                            },
                                                                            MaxComparisonValue: "dolores",
                                                                            MinComparisonValue: "rerum",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "maiores",
                                                                            MaxComparisonValue: "qui",
                                                                            MetricName: "dolorum",
                                                                            Operator: "BETWEEN",
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
                                                                            DimensionName: "consectetur",
                                                                            Expressions: []string{
                                                                                "aspernatur",
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: "fuga",
                                                                            MinComparisonValue: "autem",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "autem",
                                                                            MaxComparisonValue: "unde",
                                                                            MetricName: "accusantium",
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
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "quam",
                                                                    Expressions: []string{
                                                                        "eum",
                                                                        "ut",
                                                                    },
                                                                    MaxComparisonValue: "dolorem",
                                                                    MinComparisonValue: "nihil",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "dolore",
                                                                    MaxComparisonValue: "similique",
                                                                    MetricName: "similique",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "reprehenderit",
                                                                    Expressions: []string{
                                                                        "corrupti",
                                                                        "occaecati",
                                                                        "harum",
                                                                    },
                                                                    MaxComparisonValue: "aut",
                                                                    MinComparisonValue: "sit",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "omnis",
                                                                    MaxComparisonValue: "omnis",
                                                                    MetricName: "temporibus",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "dolor",
                                                                    Expressions: []string{
                                                                        "quam",
                                                                        "non",
                                                                        "dolorum",
                                                                    },
                                                                    MaxComparisonValue: "iusto",
                                                                    MinComparisonValue: "possimus",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "est",
                                                                    MaxComparisonValue: "similique",
                                                                    MetricName: "placeat",
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
                                                                    CaseSensitive: false,
                                                                    DimensionName: "similique",
                                                                    Expressions: []string{
                                                                        "quod",
                                                                        "velit",
                                                                        "eos",
                                                                    },
                                                                    MaxComparisonValue: "atque",
                                                                    MinComparisonValue: "tempore",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "rem",
                                                                    MaxComparisonValue: "cumque",
                                                                    MetricName: "corrupti",
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
                                                                            CaseSensitive: false,
                                                                            DimensionName: "debitis",
                                                                            Expressions: []string{
                                                                                "perspiciatis",
                                                                            },
                                                                            MaxComparisonValue: "non",
                                                                            MinComparisonValue: "quo",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "dolores",
                                                                            MaxComparisonValue: "debitis",
                                                                            MetricName: "maxime",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "inventore",
                                                                            Expressions: []string{
                                                                                "reprehenderit",
                                                                                "quasi",
                                                                                "fuga",
                                                                            },
                                                                            MaxComparisonValue: "excepturi",
                                                                            MinComparisonValue: "quia",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "totam",
                                                                            MaxComparisonValue: "animi",
                                                                            MetricName: "illum",
                                                                            Operator: "EQUAL",
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
                                                                            DimensionName: "iure",
                                                                            Expressions: []string{
                                                                                "itaque",
                                                                                "aut",
                                                                                "voluptate",
                                                                            },
                                                                            MaxComparisonValue: "vero",
                                                                            MinComparisonValue: "mollitia",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "placeat",
                                                                            MaxComparisonValue: "est",
                                                                            MetricName: "velit",
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
                                                                            CaseSensitive: true,
                                                                            DimensionName: "porro",
                                                                            Expressions: []string{
                                                                                "inventore",
                                                                                "illo",
                                                                                "enim",
                                                                            },
                                                                            MaxComparisonValue: "sit",
                                                                            MinComparisonValue: "porro",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "eos",
                                                                            MaxComparisonValue: "dolore",
                                                                            MetricName: "quia",
                                                                            Operator: "EQUAL",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "cupiditate",
                                                                            Expressions: []string{
                                                                                "mollitia",
                                                                            },
                                                                            MaxComparisonValue: "quia",
                                                                            MinComparisonValue: "et",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sint",
                                                                            MaxComparisonValue: "autem",
                                                                            MetricName: "dolor",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "dignissimos",
                                                                            Expressions: []string{
                                                                                "eligendi",
                                                                                "incidunt",
                                                                                "ut",
                                                                            },
                                                                            MaxComparisonValue: "veniam",
                                                                            MinComparisonValue: "et",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sapiente",
                                                                            MaxComparisonValue: "vero",
                                                                            MetricName: "autem",
                                                                            Operator: "LESS_THAN",
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
                                                                    CaseSensitive: false,
                                                                    DimensionName: "quod",
                                                                    Expressions: []string{
                                                                        "quod",
                                                                    },
                                                                    MaxComparisonValue: "blanditiis",
                                                                    MinComparisonValue: "et",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "facere",
                                                                    MaxComparisonValue: "et",
                                                                    MetricName: "quis",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "error",
                                                                    Expressions: []string{
                                                                        "voluptate",
                                                                    },
                                                                    MaxComparisonValue: "est",
                                                                    MinComparisonValue: "ullam",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "reiciendis",
                                                                    MaxComparisonValue: "laborum",
                                                                    MetricName: "suscipit",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "natus",
                                                                    Expressions: []string{
                                                                        "sunt",
                                                                        "quam",
                                                                        "nesciunt",
                                                                    },
                                                                    MaxComparisonValue: "esse",
                                                                    MinComparisonValue: "quam",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "autem",
                                                                    MaxComparisonValue: "atque",
                                                                    MetricName: "asperiores",
                                                                    Operator: "LESS_THAN",
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
                                                                    CaseSensitive: true,
                                                                    DimensionName: "in",
                                                                    Expressions: []string{
                                                                        "praesentium",
                                                                    },
                                                                    MaxComparisonValue: "harum",
                                                                    MinComparisonValue: "nemo",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ut",
                                                                    MaxComparisonValue: "provident",
                                                                    MetricName: "voluptas",
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
                                                                    DimensionName: "vitae",
                                                                    Expressions: []string{
                                                                        "molestiae",
                                                                    },
                                                                    MaxComparisonValue: "aut",
                                                                    MinComparisonValue: "qui",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "est",
                                                                    MaxComparisonValue: "quo",
                                                                    MetricName: "nesciunt",
                                                                    Operator: "EQUAL",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "officia",
                                                                    Expressions: []string{
                                                                        "esse",
                                                                    },
                                                                    MaxComparisonValue: "dolore",
                                                                    MinComparisonValue: "est",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ab",
                                                                    MaxComparisonValue: "maiores",
                                                                    MetricName: "quia",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "rem",
                                                                    Expressions: []string{
                                                                        "quisquam",
                                                                        "sunt",
                                                                    },
                                                                    MaxComparisonValue: "nam",
                                                                    MinComparisonValue: "omnis",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "cupiditate",
                                                                    MaxComparisonValue: "omnis",
                                                                    MetricName: "dolores",
                                                                    Operator: "EQUAL",
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
                                },
                                UserSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
                                        shared.SegmentFilter{
                                            Not: true,
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
                                                                            DimensionName: "vel",
                                                                            Expressions: []string{
                                                                                "repudiandae",
                                                                                "voluptas",
                                                                                "omnis",
                                                                            },
                                                                            MaxComparisonValue: "eos",
                                                                            MinComparisonValue: "repellat",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "neque",
                                                                            MaxComparisonValue: "aspernatur",
                                                                            MetricName: "enim",
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
                                                                            DimensionName: "est",
                                                                            Expressions: []string{
                                                                                "eos",
                                                                                "atque",
                                                                                "qui",
                                                                            },
                                                                            MaxComparisonValue: "cumque",
                                                                            MinComparisonValue: "et",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "autem",
                                                                            MaxComparisonValue: "ipsam",
                                                                            MetricName: "nihil",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "est",
                                                                            Expressions: []string{
                                                                                "corrupti",
                                                                                "error",
                                                                            },
                                                                            MaxComparisonValue: "illum",
                                                                            MinComparisonValue: "et",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "reiciendis",
                                                                            MaxComparisonValue: "voluptate",
                                                                            MetricName: "omnis",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "nesciunt",
                                                                            Expressions: []string{
                                                                                "non",
                                                                                "et",
                                                                                "debitis",
                                                                            },
                                                                            MaxComparisonValue: "rerum",
                                                                            MinComparisonValue: "necessitatibus",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "cum",
                                                                            MaxComparisonValue: "modi",
                                                                            MetricName: "quis",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "SESSION",
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
                                                                            CaseSensitive: true,
                                                                            DimensionName: "sapiente",
                                                                            Expressions: []string{
                                                                                "aut",
                                                                            },
                                                                            MaxComparisonValue: "non",
                                                                            MinComparisonValue: "porro",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "magni",
                                                                            MaxComparisonValue: "ab",
                                                                            MetricName: "eligendi",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "est",
                                                                            Expressions: []string{
                                                                                "aut",
                                                                            },
                                                                            MaxComparisonValue: "cumque",
                                                                            MinComparisonValue: "tempora",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aut",
                                                                            MaxComparisonValue: "corporis",
                                                                            MetricName: "qui",
                                                                            Operator: "EQUAL",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "aut",
                                                                            Expressions: []string{
                                                                                "dicta",
                                                                                "est",
                                                                            },
                                                                            MaxComparisonValue: "aliquid",
                                                                            MinComparisonValue: "voluptatum",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "odit",
                                                                            MaxComparisonValue: "quas",
                                                                            MetricName: "nemo",
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
                                                                            CaseSensitive: false,
                                                                            DimensionName: "quod",
                                                                            Expressions: []string{
                                                                                "magni",
                                                                                "enim",
                                                                            },
                                                                            MaxComparisonValue: "veritatis",
                                                                            MinComparisonValue: "ut",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "iusto",
                                                                            MaxComparisonValue: "incidunt",
                                                                            MetricName: "dolores",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "qui",
                                                                            Expressions: []string{
                                                                                "doloribus",
                                                                            },
                                                                            MaxComparisonValue: "omnis",
                                                                            MinComparisonValue: "ut",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "exercitationem",
                                                                            MaxComparisonValue: "labore",
                                                                            MetricName: "ipsa",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "corporis",
                                                                            Expressions: []string{
                                                                                "in",
                                                                            },
                                                                            MaxComparisonValue: "est",
                                                                            MinComparisonValue: "et",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "voluptatem",
                                                                            MaxComparisonValue: "corporis",
                                                                            MetricName: "et",
                                                                            Operator: "LESS_THAN",
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
                                                                            DimensionName: "magni",
                                                                            Expressions: []string{
                                                                                "deleniti",
                                                                                "esse",
                                                                            },
                                                                            MaxComparisonValue: "eum",
                                                                            MinComparisonValue: "pariatur",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "autem",
                                                                            MaxComparisonValue: "perferendis",
                                                                            MetricName: "aperiam",
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
                                                                    DimensionName: "maxime",
                                                                    Expressions: []string{
                                                                        "facere",
                                                                    },
                                                                    MaxComparisonValue: "sed",
                                                                    MinComparisonValue: "sit",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "reiciendis",
                                                                    MaxComparisonValue: "hic",
                                                                    MetricName: "et",
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
                                                                    DimensionName: "aut",
                                                                    Expressions: []string{
                                                                        "cupiditate",
                                                                        "et",
                                                                    },
                                                                    MaxComparisonValue: "quasi",
                                                                    MinComparisonValue: "dolores",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "officiis",
                                                                    MaxComparisonValue: "cumque",
                                                                    MetricName: "molestiae",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
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
                                                                    CaseSensitive: true,
                                                                    DimensionName: "id",
                                                                    Expressions: []string{
                                                                        "qui",
                                                                        "voluptates",
                                                                    },
                                                                    MaxComparisonValue: "dolores",
                                                                    MinComparisonValue: "ab",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "alias",
                                                                    MaxComparisonValue: "deleniti",
                                                                    MetricName: "quo",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "vero",
                                                                    Expressions: []string{
                                                                        "est",
                                                                    },
                                                                    MaxComparisonValue: "quam",
                                                                    MinComparisonValue: "accusamus",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "iure",
                                                                    MaxComparisonValue: "quisquam",
                                                                    MetricName: "cumque",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "in",
                                                                    Expressions: []string{
                                                                        "et",
                                                                        "et",
                                                                    },
                                                                    MaxComparisonValue: "labore",
                                                                    MinComparisonValue: "sed",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "sunt",
                                                                    MaxComparisonValue: "et",
                                                                    MetricName: "molestias",
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
                                                                            DimensionName: "repellat",
                                                                            Expressions: []string{
                                                                                "autem",
                                                                                "repellat",
                                                                            },
                                                                            MaxComparisonValue: "libero",
                                                                            MinComparisonValue: "ad",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "veritatis",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "ab",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "repudiandae",
                                                                            Expressions: []string{
                                                                                "ut",
                                                                            },
                                                                            MaxComparisonValue: "explicabo",
                                                                            MinComparisonValue: "recusandae",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "facilis",
                                                                            MaxComparisonValue: "sit",
                                                                            MetricName: "hic",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "quis",
                                                                            Expressions: []string{
                                                                                "voluptatibus",
                                                                                "ipsa",
                                                                            },
                                                                            MaxComparisonValue: "corporis",
                                                                            MinComparisonValue: "et",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "laboriosam",
                                                                            MaxComparisonValue: "deserunt",
                                                                            MetricName: "dignissimos",
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
                                                                            DimensionName: "voluptas",
                                                                            Expressions: []string{
                                                                                "impedit",
                                                                            },
                                                                            MaxComparisonValue: "consequatur",
                                                                            MinComparisonValue: "et",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "et",
                                                                            MaxComparisonValue: "fugit",
                                                                            MetricName: "aut",
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
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "ratione",
                                                                    Expressions: []string{
                                                                        "exercitationem",
                                                                    },
                                                                    MaxComparisonValue: "facilis",
                                                                    MinComparisonValue: "ratione",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "repellendus",
                                                                    MaxComparisonValue: "atque",
                                                                    MetricName: "repellat",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "sed",
                                                                    Expressions: []string{
                                                                        "ut",
                                                                        "accusantium",
                                                                        "voluptas",
                                                                    },
                                                                    MaxComparisonValue: "placeat",
                                                                    MinComparisonValue: "temporibus",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "odio",
                                                                    MaxComparisonValue: "et",
                                                                    MetricName: "omnis",
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
                                        shared.SegmentFilter{
                                            Not: true,
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
                                                                            CaseSensitive: true,
                                                                            DimensionName: "sint",
                                                                            Expressions: []string{
                                                                                "quia",
                                                                            },
                                                                            MaxComparisonValue: "est",
                                                                            MinComparisonValue: "architecto",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "et",
                                                                            MaxComparisonValue: "magni",
                                                                            MetricName: "fuga",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "SESSION",
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
                                                                            DimensionName: "harum",
                                                                            Expressions: []string{
                                                                                "in",
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: "itaque",
                                                                            MinComparisonValue: "cum",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "veritatis",
                                                                            MaxComparisonValue: "voluptates",
                                                                            MetricName: "molestias",
                                                                            Operator: "EQUAL",
                                                                            Scope: "USER",
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
                                                                            CaseSensitive: true,
                                                                            DimensionName: "necessitatibus",
                                                                            Expressions: []string{
                                                                                "quaerat",
                                                                                "molestias",
                                                                                "at",
                                                                            },
                                                                            MaxComparisonValue: "ut",
                                                                            MinComparisonValue: "aliquid",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "dignissimos",
                                                                            MaxComparisonValue: "accusantium",
                                                                            MetricName: "iure",
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
                                                                            DimensionName: "voluptas",
                                                                            Expressions: []string{
                                                                                "nulla",
                                                                                "natus",
                                                                                "quis",
                                                                            },
                                                                            MaxComparisonValue: "eligendi",
                                                                            MinComparisonValue: "quaerat",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sed",
                                                                            MaxComparisonValue: "aspernatur",
                                                                            MetricName: "recusandae",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "et",
                                                                            Expressions: []string{
                                                                                "aut",
                                                                                "rem",
                                                                                "eligendi",
                                                                            },
                                                                            MaxComparisonValue: "et",
                                                                            MinComparisonValue: "sequi",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "facilis",
                                                                            MaxComparisonValue: "eligendi",
                                                                            MetricName: "mollitia",
                                                                            Operator: "LESS_THAN",
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
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "laborum",
                                                                    Expressions: []string{
                                                                        "repudiandae",
                                                                        "est",
                                                                    },
                                                                    MaxComparisonValue: "quibusdam",
                                                                    MinComparisonValue: "sed",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "omnis",
                                                                    MaxComparisonValue: "voluptatem",
                                                                    MetricName: "qui",
                                                                    Operator: "EQUAL",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "quo",
                                                                    Expressions: []string{
                                                                        "perferendis",
                                                                    },
                                                                    MaxComparisonValue: "modi",
                                                                    MinComparisonValue: "quia",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "et",
                                                                    MaxComparisonValue: "dolores",
                                                                    MetricName: "officiis",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
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
                            SegmentID: "voluptatem",
                        },
                    },
                    ViewID: "aperiam",
                },
            },
            UseResourceQuotas: true,
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