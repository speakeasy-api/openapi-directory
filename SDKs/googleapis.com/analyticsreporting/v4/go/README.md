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
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            UploadType: "et",
            UploadProtocol: "nihil",
        },
        Request: &shared.GetReportsRequest{
            ReportRequests: []shared.ReportRequest{
                shared.ReportRequest{
                    CohortGroup: &shared.CohortGroup{
                        Cohorts: []shared.Cohort{
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "debitis",
                                    StartDate: "voluptatum",
                                },
                                Name: "et",
                                Type: "FIRST_VISIT_DATE",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "dolorem",
                                    StartDate: "et",
                                },
                                Name: "voluptate",
                                Type: "FIRST_VISIT_DATE",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "vitae",
                                    StartDate: "totam",
                                },
                                Name: "dolores",
                                Type: "FIRST_VISIT_DATE",
                            },
                        },
                        LifetimeValue: true,
                    },
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: "odio",
                            StartDate: "dolore",
                        },
                        shared.DateRange{
                            EndDate: "id",
                            StartDate: "aspernatur",
                        },
                    },
                    DimensionFilterClauses: []shared.DimensionFilterClause{
                        shared.DimensionFilterClause{
                            Filters: []shared.DimensionFilter{
                                shared.DimensionFilter{
                                    CaseSensitive: false,
                                    DimensionName: "quis",
                                    Expressions: []string{
                                        "aut",
                                        "odit",
                                    },
                                    Not: true,
                                    Operator: "PARTIAL",
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: true,
                                    DimensionName: "aut",
                                    Expressions: []string{
                                        "sed",
                                    },
                                    Not: false,
                                    Operator: "NUMERIC_GREATER_THAN",
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: true,
                                    DimensionName: "nobis",
                                    Expressions: []string{
                                        "qui",
                                    },
                                    Not: true,
                                    Operator: "NUMERIC_LESS_THAN",
                                },
                            },
                            Operator: "OPERATOR_UNSPECIFIED",
                        },
                        shared.DimensionFilterClause{
                            Filters: []shared.DimensionFilter{
                                shared.DimensionFilter{
                                    CaseSensitive: false,
                                    DimensionName: "sint",
                                    Expressions: []string{
                                        "ut",
                                    },
                                    Not: false,
                                    Operator: "PARTIAL",
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: false,
                                    DimensionName: "tempore",
                                    Expressions: []string{
                                        "incidunt",
                                    },
                                    Not: false,
                                    Operator: "ENDS_WITH",
                                },
                            },
                            Operator: "OR",
                        },
                        shared.DimensionFilterClause{
                            Filters: []shared.DimensionFilter{
                                shared.DimensionFilter{
                                    CaseSensitive: false,
                                    DimensionName: "omnis",
                                    Expressions: []string{
                                        "ex",
                                    },
                                    Not: true,
                                    Operator: "NUMERIC_GREATER_THAN",
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: true,
                                    DimensionName: "rerum",
                                    Expressions: []string{
                                        "voluptas",
                                        "quam",
                                    },
                                    Not: false,
                                    Operator: "PARTIAL",
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: false,
                                    DimensionName: "unde",
                                    Expressions: []string{
                                        "autem",
                                        "qui",
                                    },
                                    Not: false,
                                    Operator: "NUMERIC_EQUAL",
                                },
                            },
                            Operator: "OPERATOR_UNSPECIFIED",
                        },
                    },
                    Dimensions: []shared.Dimension{
                        shared.Dimension{
                            HistogramBuckets: []string{
                                "et",
                                "accusantium",
                                "esse",
                            },
                            Name: "architecto",
                        },
                    },
                    FiltersExpression: "quam",
                    HideTotals: false,
                    HideValueRanges: false,
                    IncludeEmptyRows: true,
                    MetricFilterClauses: []shared.MetricFilterClause{
                        shared.MetricFilterClause{
                            Filters: []shared.MetricFilter{
                                shared.MetricFilter{
                                    ComparisonValue: "magni",
                                    MetricName: "et",
                                    Not: true,
                                    Operator: "OPERATOR_UNSPECIFIED",
                                },
                                shared.MetricFilter{
                                    ComparisonValue: "earum",
                                    MetricName: "illo",
                                    Not: true,
                                    Operator: "IS_MISSING",
                                },
                            },
                            Operator: "AND",
                        },
                        shared.MetricFilterClause{
                            Filters: []shared.MetricFilter{
                                shared.MetricFilter{
                                    ComparisonValue: "commodi",
                                    MetricName: "error",
                                    Not: false,
                                    Operator: "GREATER_THAN",
                                },
                                shared.MetricFilter{
                                    ComparisonValue: "nostrum",
                                    MetricName: "ut",
                                    Not: false,
                                    Operator: "OPERATOR_UNSPECIFIED",
                                },
                            },
                            Operator: "OPERATOR_UNSPECIFIED",
                        },
                    },
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Alias: "aut",
                            Expression: "quas",
                            FormattingType: "FLOAT",
                        },
                    },
                    OrderBys: []shared.OrderBy{
                        shared.OrderBy{
                            FieldName: "autem",
                            OrderType: "SMART",
                            SortOrder: "ASCENDING",
                        },
                    },
                    PageSize: 8204648627352676445,
                    PageToken: "perferendis",
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            DimensionFilterClauses: []shared.DimensionFilterClause{
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "ea",
                                            Expressions: []string{
                                                "eum",
                                            },
                                            Not: false,
                                            Operator: "NUMERIC_EQUAL",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "reiciendis",
                                            Expressions: []string{
                                                "cumque",
                                                "minima",
                                                "necessitatibus",
                                            },
                                            Not: true,
                                            Operator: "OPERATOR_UNSPECIFIED",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "labore",
                                            Expressions: []string{
                                                "impedit",
                                                "ad",
                                            },
                                            Not: true,
                                            Operator: "OPERATOR_UNSPECIFIED",
                                        },
                                    },
                                    Operator: "OR",
                                },
                            },
                            Dimensions: []shared.Dimension{
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "tempora",
                                    },
                                    Name: "deserunt",
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "sunt",
                                        "sit",
                                        "autem",
                                    },
                                    Name: "quis",
                                },
                            },
                            MaxGroupCount: 952897656927189675,
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Alias: "placeat",
                                    Expression: "qui",
                                    FormattingType: "INTEGER",
                                },
                                shared.Metric{
                                    Alias: "quis",
                                    Expression: "adipisci",
                                    FormattingType: "TIME",
                                },
                            },
                            StartGroup: 4230816687517220040,
                        },
                    },
                    SamplingLevel: "SMALL",
                    Segments: []shared.Segment{
                        shared.Segment{
                            DynamicSegment: &shared.DynamicSegment{
                                Name: "numquam",
                                SessionSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
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
                                                                            DimensionName: "aperiam",
                                                                            Expressions: []string{
                                                                                "excepturi",
                                                                                "mollitia",
                                                                                "inventore",
                                                                            },
                                                                            MaxComparisonValue: "delectus",
                                                                            MinComparisonValue: "ipsa",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "animi",
                                                                            MaxComparisonValue: "ut",
                                                                            MetricName: "aliquam",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "consequuntur",
                                                                            Expressions: []string{
                                                                                "cupiditate",
                                                                                "provident",
                                                                                "molestiae",
                                                                            },
                                                                            MaxComparisonValue: "pariatur",
                                                                            MinComparisonValue: "quasi",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "enim",
                                                                            MaxComparisonValue: "qui",
                                                                            MetricName: "sit",
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
                                                                            DimensionName: "et",
                                                                            Expressions: []string{
                                                                                "occaecati",
                                                                            },
                                                                            MaxComparisonValue: "ex",
                                                                            MinComparisonValue: "voluptatem",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "temporibus",
                                                                            MaxComparisonValue: "velit",
                                                                            MetricName: "quae",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "possimus",
                                                                            Expressions: []string{
                                                                                "dolorum",
                                                                                "doloribus",
                                                                                "saepe",
                                                                            },
                                                                            MaxComparisonValue: "sunt",
                                                                            MinComparisonValue: "earum",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ut",
                                                                            MaxComparisonValue: "asperiores",
                                                                            MetricName: "et",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "nihil",
                                                                            Expressions: []string{
                                                                                "suscipit",
                                                                            },
                                                                            MaxComparisonValue: "impedit",
                                                                            MinComparisonValue: "non",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ut",
                                                                            MaxComparisonValue: "possimus",
                                                                            MetricName: "illo",
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
                                                                            DimensionName: "blanditiis",
                                                                            Expressions: []string{
                                                                                "delectus",
                                                                            },
                                                                            MaxComparisonValue: "rerum",
                                                                            MinComparisonValue: "dolore",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "velit",
                                                                            MaxComparisonValue: "officia",
                                                                            MetricName: "modi",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "a",
                                                                            Expressions: []string{
                                                                                "excepturi",
                                                                                "autem",
                                                                            },
                                                                            MaxComparisonValue: "corporis",
                                                                            MinComparisonValue: "dicta",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "doloremque",
                                                                            MaxComparisonValue: "quae",
                                                                            MetricName: "nisi",
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
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "eos",
                                                                            Expressions: []string{
                                                                                "reiciendis",
                                                                            },
                                                                            MaxComparisonValue: "aspernatur",
                                                                            MinComparisonValue: "praesentium",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "nihil",
                                                                            MaxComparisonValue: "adipisci",
                                                                            MetricName: "consequatur",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "nisi",
                                                                            Expressions: []string{
                                                                                "est",
                                                                                "quo",
                                                                                "vero",
                                                                            },
                                                                            MaxComparisonValue: "alias",
                                                                            MinComparisonValue: "totam",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "eius",
                                                                            MaxComparisonValue: "repellat",
                                                                            MetricName: "beatae",
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
                                                                            DimensionName: "necessitatibus",
                                                                            Expressions: []string{
                                                                                "culpa",
                                                                                "repellendus",
                                                                            },
                                                                            MaxComparisonValue: "voluptas",
                                                                            MinComparisonValue: "ut",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "architecto",
                                                                            MaxComparisonValue: "molestias",
                                                                            MetricName: "rerum",
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
                                                                            DimensionName: "quibusdam",
                                                                            Expressions: []string{
                                                                                "quo",
                                                                            },
                                                                            MaxComparisonValue: "ea",
                                                                            MinComparisonValue: "soluta",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "commodi",
                                                                            MaxComparisonValue: "blanditiis",
                                                                            MetricName: "facere",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "id",
                                                                            Expressions: []string{
                                                                                "aut",
                                                                            },
                                                                            MaxComparisonValue: "perspiciatis",
                                                                            MinComparisonValue: "et",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "voluptatem",
                                                                            MaxComparisonValue: "ex",
                                                                            MetricName: "magni",
                                                                            Operator: "EQUAL",
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
                                                                            DimensionName: "beatae",
                                                                            Expressions: []string{
                                                                                "qui",
                                                                            },
                                                                            MaxComparisonValue: "magni",
                                                                            MinComparisonValue: "minus",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aut",
                                                                            MaxComparisonValue: "neque",
                                                                            MetricName: "iusto",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "odit",
                                                                            Expressions: []string{
                                                                                "ut",
                                                                                "non",
                                                                                "nihil",
                                                                            },
                                                                            MaxComparisonValue: "laborum",
                                                                            MinComparisonValue: "recusandae",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "exercitationem",
                                                                            MaxComparisonValue: "iste",
                                                                            MetricName: "perferendis",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "omnis",
                                                                            Expressions: []string{
                                                                                "qui",
                                                                                "omnis",
                                                                                "minus",
                                                                            },
                                                                            MaxComparisonValue: "nostrum",
                                                                            MinComparisonValue: "non",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "repellat",
                                                                            MaxComparisonValue: "quo",
                                                                            MetricName: "dolorum",
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
                                                                            DimensionName: "aut",
                                                                            Expressions: []string{
                                                                                "aliquid",
                                                                                "mollitia",
                                                                                "non",
                                                                            },
                                                                            MaxComparisonValue: "magni",
                                                                            MinComparisonValue: "recusandae",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "consequatur",
                                                                            MaxComparisonValue: "dolores",
                                                                            MetricName: "hic",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "et",
                                                                            Expressions: []string{
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: "explicabo",
                                                                            MinComparisonValue: "necessitatibus",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "qui",
                                                                            MaxComparisonValue: "in",
                                                                            MetricName: "odit",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "similique",
                                                                            Expressions: []string{
                                                                                "id",
                                                                                "laboriosam",
                                                                            },
                                                                            MaxComparisonValue: "quam",
                                                                            MinComparisonValue: "maiores",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "iusto",
                                                                            MaxComparisonValue: "aperiam",
                                                                            MetricName: "repellendus",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
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
                                                                            DimensionName: "aut",
                                                                            Expressions: []string{
                                                                                "quia",
                                                                                "quaerat",
                                                                            },
                                                                            MaxComparisonValue: "ea",
                                                                            MinComparisonValue: "et",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "recusandae",
                                                                            MaxComparisonValue: "qui",
                                                                            MetricName: "qui",
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
                                                                    CaseSensitive: true,
                                                                    DimensionName: "voluptatem",
                                                                    Expressions: []string{
                                                                        "fugiat",
                                                                        "nesciunt",
                                                                    },
                                                                    MaxComparisonValue: "et",
                                                                    MinComparisonValue: "qui",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "eligendi",
                                                                    MaxComparisonValue: "velit",
                                                                    MetricName: "fuga",
                                                                    Operator: "EQUAL",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "voluptatem",
                                                                    Expressions: []string{
                                                                        "quae",
                                                                    },
                                                                    MaxComparisonValue: "placeat",
                                                                    MinComparisonValue: "vitae",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "officiis",
                                                                    MaxComparisonValue: "commodi",
                                                                    MetricName: "sed",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "cum",
                                                                    Expressions: []string{
                                                                        "aut",
                                                                    },
                                                                    MaxComparisonValue: "eaque",
                                                                    MinComparisonValue: "facilis",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ut",
                                                                    MaxComparisonValue: "et",
                                                                    MetricName: "quam",
                                                                    Operator: "BETWEEN",
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
                                                                    DimensionName: "amet",
                                                                    Expressions: []string{
                                                                        "in",
                                                                    },
                                                                    MaxComparisonValue: "consectetur",
                                                                    MinComparisonValue: "minima",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "et",
                                                                    MaxComparisonValue: "consequatur",
                                                                    MetricName: "eum",
                                                                    Operator: "EQUAL",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "dolores",
                                                                    Expressions: []string{
                                                                        "ullam",
                                                                    },
                                                                    MaxComparisonValue: "architecto",
                                                                    MinComparisonValue: "architecto",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "consequatur",
                                                                    MaxComparisonValue: "veniam",
                                                                    MetricName: "hic",
                                                                    Operator: "EQUAL",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "voluptatibus",
                                                                    Expressions: []string{
                                                                        "consectetur",
                                                                    },
                                                                    MaxComparisonValue: "modi",
                                                                    MinComparisonValue: "eos",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "itaque",
                                                                    MaxComparisonValue: "ipsum",
                                                                    MetricName: "natus",
                                                                    Operator: "EQUAL",
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
                                                                    DimensionName: "eius",
                                                                    Expressions: []string{
                                                                        "amet",
                                                                        "blanditiis",
                                                                        "unde",
                                                                    },
                                                                    MaxComparisonValue: "nihil",
                                                                    MinComparisonValue: "asperiores",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "hic",
                                                                    MaxComparisonValue: "quo",
                                                                    MetricName: "est",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "possimus",
                                                                    Expressions: []string{
                                                                        "laborum",
                                                                        "voluptas",
                                                                        "modi",
                                                                    },
                                                                    MaxComparisonValue: "atque",
                                                                    MinComparisonValue: "soluta",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "qui",
                                                                    MaxComparisonValue: "nihil",
                                                                    MetricName: "quas",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "HIT",
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
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "voluptas",
                                                                            Expressions: []string{
                                                                                "sit",
                                                                                "saepe",
                                                                                "est",
                                                                            },
                                                                            MaxComparisonValue: "odio",
                                                                            MinComparisonValue: "delectus",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "voluptatem",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "et",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "asperiores",
                                                                            Expressions: []string{
                                                                                "hic",
                                                                                "doloribus",
                                                                            },
                                                                            MaxComparisonValue: "corrupti",
                                                                            MinComparisonValue: "nemo",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "neque",
                                                                            MaxComparisonValue: "autem",
                                                                            MetricName: "saepe",
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
                                                                            DimensionName: "autem",
                                                                            Expressions: []string{
                                                                                "consequuntur",
                                                                            },
                                                                            MaxComparisonValue: "autem",
                                                                            MinComparisonValue: "vitae",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "non",
                                                                            MaxComparisonValue: "aut",
                                                                            MetricName: "autem",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "quaerat",
                                                                            Expressions: []string{
                                                                                "harum",
                                                                                "laudantium",
                                                                                "odio",
                                                                            },
                                                                            MaxComparisonValue: "deserunt",
                                                                            MinComparisonValue: "qui",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "omnis",
                                                                            MaxComparisonValue: "veritatis",
                                                                            MetricName: "minus",
                                                                            Operator: "EQUAL",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "doloribus",
                                                                            Expressions: []string{
                                                                                "cupiditate",
                                                                                "similique",
                                                                            },
                                                                            MaxComparisonValue: "omnis",
                                                                            MinComparisonValue: "voluptatem",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "maiores",
                                                                            MaxComparisonValue: "est",
                                                                            MetricName: "expedita",
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
                                                                            CaseSensitive: false,
                                                                            DimensionName: "et",
                                                                            Expressions: []string{
                                                                                "itaque",
                                                                                "provident",
                                                                            },
                                                                            MaxComparisonValue: "voluptatem",
                                                                            MinComparisonValue: "qui",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "omnis",
                                                                            MaxComparisonValue: "corporis",
                                                                            MetricName: "quasi",
                                                                            Operator: "GREATER_THAN",
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
                                                                    DimensionName: "iure",
                                                                    Expressions: []string{
                                                                        "occaecati",
                                                                        "aut",
                                                                        "repudiandae",
                                                                    },
                                                                    MaxComparisonValue: "voluptas",
                                                                    MinComparisonValue: "eligendi",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "dolorem",
                                                                    MaxComparisonValue: "similique",
                                                                    MetricName: "ad",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "aut",
                                                                    Expressions: []string{
                                                                        "dolores",
                                                                        "et",
                                                                        "quos",
                                                                    },
                                                                    MaxComparisonValue: "est",
                                                                    MinComparisonValue: "est",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "explicabo",
                                                                    MaxComparisonValue: "quis",
                                                                    MetricName: "eius",
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
                                                                    DimensionName: "debitis",
                                                                    Expressions: []string{
                                                                        "mollitia",
                                                                    },
                                                                    MaxComparisonValue: "officiis",
                                                                    MinComparisonValue: "repellendus",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "repellat",
                                                                    MaxComparisonValue: "eveniet",
                                                                    MetricName: "ad",
                                                                    Operator: "EQUAL",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "nostrum",
                                                                    Expressions: []string{
                                                                        "nemo",
                                                                    },
                                                                    MaxComparisonValue: "recusandae",
                                                                    MinComparisonValue: "nostrum",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "aut",
                                                                    MaxComparisonValue: "quo",
                                                                    MetricName: "minus",
                                                                    Operator: "EQUAL",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "magni",
                                                                    Expressions: []string{
                                                                        "ut",
                                                                        "ut",
                                                                        "distinctio",
                                                                    },
                                                                    MaxComparisonValue: "dolor",
                                                                    MinComparisonValue: "nemo",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "reiciendis",
                                                                    MaxComparisonValue: "in",
                                                                    MetricName: "voluptatem",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "UNSPECIFIED_SCOPE",
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
                                                                            DimensionName: "sit",
                                                                            Expressions: []string{
                                                                                "aperiam",
                                                                            },
                                                                            MaxComparisonValue: "nulla",
                                                                            MinComparisonValue: "odit",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ea",
                                                                            MaxComparisonValue: "mollitia",
                                                                            MetricName: "eveniet",
                                                                            Operator: "EQUAL",
                                                                            Scope: "PRODUCT",
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
                                                                            DimensionName: "vel",
                                                                            Expressions: []string{
                                                                                "nesciunt",
                                                                            },
                                                                            MaxComparisonValue: "tenetur",
                                                                            MinComparisonValue: "fugiat",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "dolor",
                                                                            MaxComparisonValue: "enim",
                                                                            MetricName: "animi",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "est",
                                                                            Expressions: []string{
                                                                                "ea",
                                                                                "omnis",
                                                                            },
                                                                            MaxComparisonValue: "pariatur",
                                                                            MinComparisonValue: "id",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "esse",
                                                                            MaxComparisonValue: "in",
                                                                            MetricName: "amet",
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
                                                                            DimensionName: "sapiente",
                                                                            Expressions: []string{
                                                                                "autem",
                                                                                "placeat",
                                                                                "velit",
                                                                            },
                                                                            MaxComparisonValue: "minus",
                                                                            MinComparisonValue: "praesentium",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "voluptas",
                                                                            MaxComparisonValue: "consequatur",
                                                                            MetricName: "aut",
                                                                            Operator: "EQUAL",
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
                                                                            DimensionName: "minus",
                                                                            Expressions: []string{
                                                                                "enim",
                                                                                "eaque",
                                                                                "qui",
                                                                            },
                                                                            MaxComparisonValue: "maxime",
                                                                            MinComparisonValue: "libero",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ea",
                                                                            MaxComparisonValue: "porro",
                                                                            MetricName: "labore",
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
                                                                            DimensionName: "ut",
                                                                            Expressions: []string{
                                                                                "hic",
                                                                            },
                                                                            MaxComparisonValue: "qui",
                                                                            MinComparisonValue: "cum",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "consequatur",
                                                                            MaxComparisonValue: "molestiae",
                                                                            MetricName: "laudantium",
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
                                                                    CaseSensitive: true,
                                                                    DimensionName: "porro",
                                                                    Expressions: []string{
                                                                        "ipsa",
                                                                    },
                                                                    MaxComparisonValue: "ipsa",
                                                                    MinComparisonValue: "rerum",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "rem",
                                                                    MaxComparisonValue: "dolore",
                                                                    MetricName: "doloribus",
                                                                    Operator: "EQUAL",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "eos",
                                                                    Expressions: []string{
                                                                        "vitae",
                                                                        "sit",
                                                                        "asperiores",
                                                                    },
                                                                    MaxComparisonValue: "earum",
                                                                    MinComparisonValue: "distinctio",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "et",
                                                                    MaxComparisonValue: "alias",
                                                                    MetricName: "in",
                                                                    Operator: "EQUAL",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "cum",
                                                                    Expressions: []string{
                                                                        "odit",
                                                                    },
                                                                    MaxComparisonValue: "alias",
                                                                    MinComparisonValue: "voluptas",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ratione",
                                                                    MaxComparisonValue: "dolore",
                                                                    MetricName: "est",
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
                                                                    DimensionName: "odit",
                                                                    Expressions: []string{
                                                                        "voluptate",
                                                                        "ut",
                                                                        "inventore",
                                                                    },
                                                                    MaxComparisonValue: "et",
                                                                    MinComparisonValue: "enim",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "hic",
                                                                    MaxComparisonValue: "cumque",
                                                                    MetricName: "quia",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
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
                                },
                                UserSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
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
                                                                            DimensionName: "non",
                                                                            Expressions: []string{
                                                                                "mollitia",
                                                                            },
                                                                            MaxComparisonValue: "dolorum",
                                                                            MinComparisonValue: "at",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aut",
                                                                            MaxComparisonValue: "voluptate",
                                                                            MetricName: "excepturi",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "quo",
                                                                            Expressions: []string{
                                                                                "maxime",
                                                                            },
                                                                            MaxComparisonValue: "ratione",
                                                                            MinComparisonValue: "voluptatem",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "eum",
                                                                            MaxComparisonValue: "sed",
                                                                            MetricName: "expedita",
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
                                                                            DimensionName: "ratione",
                                                                            Expressions: []string{
                                                                                "ipsam",
                                                                            },
                                                                            MaxComparisonValue: "dolor",
                                                                            MinComparisonValue: "facilis",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sunt",
                                                                            MaxComparisonValue: "doloremque",
                                                                            MetricName: "minus",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "harum",
                                                                            Expressions: []string{
                                                                                "natus",
                                                                                "quibusdam",
                                                                            },
                                                                            MaxComparisonValue: "ullam",
                                                                            MinComparisonValue: "veniam",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "error",
                                                                            MaxComparisonValue: "omnis",
                                                                            MetricName: "aliquid",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "et",
                                                                            Expressions: []string{
                                                                                "saepe",
                                                                                "sit",
                                                                                "esse",
                                                                            },
                                                                            MaxComparisonValue: "voluptate",
                                                                            MinComparisonValue: "tenetur",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "animi",
                                                                            MaxComparisonValue: "facere",
                                                                            MetricName: "consequatur",
                                                                            Operator: "GREATER_THAN",
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
                                                                            DimensionName: "aut",
                                                                            Expressions: []string{
                                                                                "incidunt",
                                                                                "est",
                                                                                "a",
                                                                            },
                                                                            MaxComparisonValue: "quia",
                                                                            MinComparisonValue: "sit",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "pariatur",
                                                                            MaxComparisonValue: "sunt",
                                                                            MetricName: "nobis",
                                                                            Operator: "EQUAL",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "ex",
                                                                            Expressions: []string{
                                                                                "eos",
                                                                                "quas",
                                                                            },
                                                                            MaxComparisonValue: "et",
                                                                            MinComparisonValue: "temporibus",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "tempora",
                                                                            MaxComparisonValue: "voluptatem",
                                                                            MetricName: "deleniti",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "ab",
                                                                            Expressions: []string{
                                                                                "exercitationem",
                                                                            },
                                                                            MaxComparisonValue: "voluptas",
                                                                            MinComparisonValue: "neque",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sit",
                                                                            MaxComparisonValue: "quibusdam",
                                                                            MetricName: "dolore",
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
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "qui",
                                                                            Expressions: []string{
                                                                                "ad",
                                                                                "minus",
                                                                            },
                                                                            MaxComparisonValue: "sit",
                                                                            MinComparisonValue: "est",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quisquam",
                                                                            MaxComparisonValue: "ipsum",
                                                                            MetricName: "dolor",
                                                                            Operator: "EQUAL",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "sed",
                                                                            Expressions: []string{
                                                                                "quae",
                                                                                "id",
                                                                                "eaque",
                                                                            },
                                                                            MaxComparisonValue: "et",
                                                                            MinComparisonValue: "et",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aliquid",
                                                                            MaxComparisonValue: "voluptate",
                                                                            MetricName: "beatae",
                                                                            Operator: "GREATER_THAN",
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
                                                                            DimensionName: "illo",
                                                                            Expressions: []string{
                                                                                "quis",
                                                                            },
                                                                            MaxComparisonValue: "quia",
                                                                            MinComparisonValue: "ab",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "eveniet",
                                                                            MaxComparisonValue: "id",
                                                                            MetricName: "placeat",
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
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "nemo",
                                                                    Expressions: []string{
                                                                        "animi",
                                                                    },
                                                                    MaxComparisonValue: "earum",
                                                                    MinComparisonValue: "neque",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "et",
                                                                    MaxComparisonValue: "quam",
                                                                    MetricName: "iste",
                                                                    Operator: "EQUAL",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "enim",
                                                                    Expressions: []string{
                                                                        "cupiditate",
                                                                    },
                                                                    MaxComparisonValue: "aperiam",
                                                                    MinComparisonValue: "id",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "explicabo",
                                                                    MaxComparisonValue: "cumque",
                                                                    MetricName: "sint",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "placeat",
                                                                    Expressions: []string{
                                                                        "minima",
                                                                        "exercitationem",
                                                                        "est",
                                                                    },
                                                                    MaxComparisonValue: "unde",
                                                                    MinComparisonValue: "modi",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "omnis",
                                                                    MaxComparisonValue: "explicabo",
                                                                    MetricName: "voluptatum",
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
                                                                    CaseSensitive: true,
                                                                    DimensionName: "velit",
                                                                    Expressions: []string{
                                                                        "maxime",
                                                                        "omnis",
                                                                    },
                                                                    MaxComparisonValue: "dolor",
                                                                    MinComparisonValue: "non",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "dolorem",
                                                                    MaxComparisonValue: "minima",
                                                                    MetricName: "sint",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "iste",
                                                                    Expressions: []string{
                                                                        "adipisci",
                                                                        "impedit",
                                                                        "tempora",
                                                                    },
                                                                    MaxComparisonValue: "aut",
                                                                    MinComparisonValue: "omnis",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "animi",
                                                                    MaxComparisonValue: "cum",
                                                                    MetricName: "occaecati",
                                                                    Operator: "EQUAL",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "distinctio",
                                                                    Expressions: []string{
                                                                        "non",
                                                                        "accusantium",
                                                                    },
                                                                    MaxComparisonValue: "ut",
                                                                    MinComparisonValue: "consequatur",
                                                                    Operator: "IN_LIST",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "animi",
                                                                    MaxComparisonValue: "exercitationem",
                                                                    MetricName: "quia",
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
                                },
                            },
                            SegmentID: "et",
                        },
                        shared.Segment{
                            DynamicSegment: &shared.DynamicSegment{
                                Name: "ut",
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
                                                                            CaseSensitive: false,
                                                                            DimensionName: "quia",
                                                                            Expressions: []string{
                                                                                "voluptates",
                                                                                "consequatur",
                                                                            },
                                                                            MaxComparisonValue: "explicabo",
                                                                            MinComparisonValue: "qui",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ipsum",
                                                                            MaxComparisonValue: "autem",
                                                                            MetricName: "perferendis",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "ipsa",
                                                                            Expressions: []string{
                                                                                "est",
                                                                                "velit",
                                                                            },
                                                                            MaxComparisonValue: "eveniet",
                                                                            MinComparisonValue: "nam",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "omnis",
                                                                            MaxComparisonValue: "mollitia",
                                                                            MetricName: "velit",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "non",
                                                                            Expressions: []string{
                                                                                "tempora",
                                                                                "aliquid",
                                                                                "molestiae",
                                                                            },
                                                                            MaxComparisonValue: "fugit",
                                                                            MinComparisonValue: "quam",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "a",
                                                                            MaxComparisonValue: "quo",
                                                                            MetricName: "delectus",
                                                                            Operator: "GREATER_THAN",
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
                                                                            DimensionName: "cupiditate",
                                                                            Expressions: []string{
                                                                                "praesentium",
                                                                                "excepturi",
                                                                                "aut",
                                                                            },
                                                                            MaxComparisonValue: "architecto",
                                                                            MinComparisonValue: "omnis",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sunt",
                                                                            MaxComparisonValue: "modi",
                                                                            MetricName: "nisi",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "est",
                                                                            Expressions: []string{
                                                                                "id",
                                                                            },
                                                                            MaxComparisonValue: "repellat",
                                                                            MinComparisonValue: "repellendus",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aspernatur",
                                                                            MaxComparisonValue: "ad",
                                                                            MetricName: "velit",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "enim",
                                                                            Expressions: []string{
                                                                                "non",
                                                                                "nam",
                                                                            },
                                                                            MaxComparisonValue: "in",
                                                                            MinComparisonValue: "eum",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ut",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "odio",
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
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "odio",
                                                                            Expressions: []string{
                                                                                "eligendi",
                                                                            },
                                                                            MaxComparisonValue: "animi",
                                                                            MinComparisonValue: "est",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ea",
                                                                            MaxComparisonValue: "voluptas",
                                                                            MetricName: "necessitatibus",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "ullam",
                                                                            Expressions: []string{
                                                                                "debitis",
                                                                                "nihil",
                                                                                "magni",
                                                                            },
                                                                            MaxComparisonValue: "vitae",
                                                                            MinComparisonValue: "excepturi",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "totam",
                                                                            MaxComparisonValue: "blanditiis",
                                                                            MetricName: "voluptatibus",
                                                                            Operator: "EQUAL",
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
                                                                            DimensionName: "asperiores",
                                                                            Expressions: []string{
                                                                                "consectetur",
                                                                            },
                                                                            MaxComparisonValue: "sequi",
                                                                            MinComparisonValue: "reprehenderit",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "libero",
                                                                            MaxComparisonValue: "enim",
                                                                            MetricName: "sint",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "quo",
                                                                            Expressions: []string{
                                                                                "illo",
                                                                                "enim",
                                                                            },
                                                                            MaxComparisonValue: "est",
                                                                            MinComparisonValue: "aut",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "mollitia",
                                                                            MaxComparisonValue: "praesentium",
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
                                                    shared.SegmentSequenceStep{
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "consequatur",
                                                                            Expressions: []string{
                                                                                "vel",
                                                                                "at",
                                                                                "cumque",
                                                                            },
                                                                            MaxComparisonValue: "occaecati",
                                                                            MinComparisonValue: "iusto",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "deserunt",
                                                                            MaxComparisonValue: "maiores",
                                                                            MetricName: "error",
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
                                                                            CaseSensitive: true,
                                                                            DimensionName: "voluptates",
                                                                            Expressions: []string{
                                                                                "est",
                                                                            },
                                                                            MaxComparisonValue: "vel",
                                                                            MinComparisonValue: "optio",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "a",
                                                                            MaxComparisonValue: "rerum",
                                                                            MetricName: "repudiandae",
                                                                            Operator: "EQUAL",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "dignissimos",
                                                                            Expressions: []string{
                                                                                "alias",
                                                                                "vitae",
                                                                                "ipsum",
                                                                            },
                                                                            MaxComparisonValue: "enim",
                                                                            MinComparisonValue: "magni",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ea",
                                                                            MaxComparisonValue: "dolor",
                                                                            MetricName: "consequatur",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
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
                                                                    DimensionName: "explicabo",
                                                                    Expressions: []string{
                                                                        "ducimus",
                                                                    },
                                                                    MaxComparisonValue: "et",
                                                                    MinComparisonValue: "explicabo",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ut",
                                                                    MaxComparisonValue: "libero",
                                                                    MetricName: "consequatur",
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
                                                                    DimensionName: "ut",
                                                                    Expressions: []string{
                                                                        "sed",
                                                                    },
                                                                    MaxComparisonValue: "sint",
                                                                    MinComparisonValue: "est",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "omnis",
                                                                    MaxComparisonValue: "reiciendis",
                                                                    MetricName: "ipsam",
                                                                    Operator: "EQUAL",
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
                                                                    DimensionName: "voluptatum",
                                                                    Expressions: []string{
                                                                        "rem",
                                                                        "autem",
                                                                        "enim",
                                                                    },
                                                                    MaxComparisonValue: "quia",
                                                                    MinComparisonValue: "voluptas",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "numquam",
                                                                    MaxComparisonValue: "et",
                                                                    MetricName: "officiis",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "aliquid",
                                                                    Expressions: []string{
                                                                        "asperiores",
                                                                        "tempora",
                                                                    },
                                                                    MaxComparisonValue: "voluptate",
                                                                    MinComparisonValue: "est",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "mollitia",
                                                                    MaxComparisonValue: "aut",
                                                                    MetricName: "recusandae",
                                                                    Operator: "GREATER_THAN",
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
                                                                            DimensionName: "totam",
                                                                            Expressions: []string{
                                                                                "veritatis",
                                                                            },
                                                                            MaxComparisonValue: "fuga",
                                                                            MinComparisonValue: "atque",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "consequatur",
                                                                            MaxComparisonValue: "qui",
                                                                            MetricName: "numquam",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "fugit",
                                                                            Expressions: []string{
                                                                                "et",
                                                                                "autem",
                                                                                "quod",
                                                                            },
                                                                            MaxComparisonValue: "ut",
                                                                            MinComparisonValue: "ut",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quibusdam",
                                                                            MaxComparisonValue: "harum",
                                                                            MetricName: "repudiandae",
                                                                            Operator: "BETWEEN",
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
                                                                            DimensionName: "rerum",
                                                                            Expressions: []string{
                                                                                "libero",
                                                                            },
                                                                            MaxComparisonValue: "cumque",
                                                                            MinComparisonValue: "accusamus",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "est",
                                                                            MaxComparisonValue: "inventore",
                                                                            MetricName: "quibusdam",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
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
                                                                    DimensionName: "animi",
                                                                    Expressions: []string{
                                                                        "labore",
                                                                        "est",
                                                                        "quod",
                                                                    },
                                                                    MaxComparisonValue: "et",
                                                                    MinComparisonValue: "sit",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "omnis",
                                                                    MaxComparisonValue: "reprehenderit",
                                                                    MetricName: "quod",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "ipsum",
                                                                    Expressions: []string{
                                                                        "sunt",
                                                                        "incidunt",
                                                                        "sed",
                                                                    },
                                                                    MaxComparisonValue: "repellendus",
                                                                    MinComparisonValue: "error",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "non",
                                                                    MaxComparisonValue: "nihil",
                                                                    MetricName: "ipsa",
                                                                    Operator: "EQUAL",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "vitae",
                                                                    Expressions: []string{
                                                                        "assumenda",
                                                                        "corrupti",
                                                                    },
                                                                    MaxComparisonValue: "ad",
                                                                    MinComparisonValue: "eum",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "optio",
                                                                    MaxComparisonValue: "et",
                                                                    MetricName: "consequatur",
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
                                                                    DimensionName: "eius",
                                                                    Expressions: []string{
                                                                        "nisi",
                                                                        "sit",
                                                                        "est",
                                                                    },
                                                                    MaxComparisonValue: "rerum",
                                                                    MinComparisonValue: "quisquam",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "itaque",
                                                                    MaxComparisonValue: "reiciendis",
                                                                    MetricName: "expedita",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "modi",
                                                                    Expressions: []string{
                                                                        "suscipit",
                                                                        "tempora",
                                                                    },
                                                                    MaxComparisonValue: "illum",
                                                                    MinComparisonValue: "quae",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "consectetur",
                                                                    MaxComparisonValue: "voluptatibus",
                                                                    MetricName: "doloremque",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "explicabo",
                                                                    Expressions: []string{
                                                                        "rem",
                                                                        "explicabo",
                                                                        "veritatis",
                                                                    },
                                                                    MaxComparisonValue: "ducimus",
                                                                    MinComparisonValue: "ut",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "inventore",
                                                                    MaxComparisonValue: "voluptatem",
                                                                    MetricName: "voluptates",
                                                                    Operator: "GREATER_THAN",
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
                                },
                                UserSegment: &shared.SegmentDefinition{
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
                                                                            DimensionName: "et",
                                                                            Expressions: []string{
                                                                                "impedit",
                                                                            },
                                                                            MaxComparisonValue: "molestiae",
                                                                            MinComparisonValue: "aut",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "consectetur",
                                                                            MaxComparisonValue: "repellendus",
                                                                            MetricName: "molestias",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "repellat",
                                                                            Expressions: []string{
                                                                                "facilis",
                                                                                "id",
                                                                                "reprehenderit",
                                                                            },
                                                                            MaxComparisonValue: "sit",
                                                                            MinComparisonValue: "at",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "doloribus",
                                                                            MaxComparisonValue: "qui",
                                                                            MetricName: "eius",
                                                                            Operator: "EQUAL",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "quos",
                                                                            Expressions: []string{
                                                                                "iusto",
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: "praesentium",
                                                                            MinComparisonValue: "consectetur",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "itaque",
                                                                            MaxComparisonValue: "corrupti",
                                                                            MetricName: "voluptatem",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
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
                                                                            DimensionName: "est",
                                                                            Expressions: []string{
                                                                                "laudantium",
                                                                            },
                                                                            MaxComparisonValue: "quia",
                                                                            MinComparisonValue: "eaque",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "cum",
                                                                            MaxComparisonValue: "vel",
                                                                            MetricName: "sunt",
                                                                            Operator: "BETWEEN",
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
                                                                            DimensionName: "dolores",
                                                                            Expressions: []string{
                                                                                "perferendis",
                                                                            },
                                                                            MaxComparisonValue: "quas",
                                                                            MinComparisonValue: "aut",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "minima",
                                                                            MaxComparisonValue: "pariatur",
                                                                            MetricName: "nesciunt",
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
                                                                    DimensionName: "accusantium",
                                                                    Expressions: []string{
                                                                        "rem",
                                                                    },
                                                                    MaxComparisonValue: "et",
                                                                    MinComparisonValue: "ipsa",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "odit",
                                                                    MaxComparisonValue: "repudiandae",
                                                                    MetricName: "pariatur",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "PRODUCT",
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
                                                        MatchType: "UNSPECIFIED_MATCH_TYPE",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "quas",
                                                                            Expressions: []string{
                                                                                "ut",
                                                                            },
                                                                            MaxComparisonValue: "voluptas",
                                                                            MinComparisonValue: "quisquam",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "voluptas",
                                                                            MaxComparisonValue: "non",
                                                                            MetricName: "deleniti",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "et",
                                                                            Expressions: []string{
                                                                                "soluta",
                                                                                "enim",
                                                                            },
                                                                            MaxComparisonValue: "commodi",
                                                                            MinComparisonValue: "quia",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "placeat",
                                                                            MaxComparisonValue: "rem",
                                                                            MetricName: "laudantium",
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
                                                                            CaseSensitive: true,
                                                                            DimensionName: "minima",
                                                                            Expressions: []string{
                                                                                "sit",
                                                                                "dolorem",
                                                                            },
                                                                            MaxComparisonValue: "earum",
                                                                            MinComparisonValue: "fugiat",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "molestias",
                                                                            MaxComparisonValue: "asperiores",
                                                                            MetricName: "suscipit",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "HIT",
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
                                                                            DimensionName: "magnam",
                                                                            Expressions: []string{
                                                                                "corporis",
                                                                            },
                                                                            MaxComparisonValue: "accusamus",
                                                                            MinComparisonValue: "fugit",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "vel",
                                                                            MaxComparisonValue: "veniam",
                                                                            MetricName: "quidem",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "consequatur",
                                                                            Expressions: []string{
                                                                                "ullam",
                                                                            },
                                                                            MaxComparisonValue: "dolor",
                                                                            MinComparisonValue: "dolor",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "in",
                                                                            MaxComparisonValue: "enim",
                                                                            MetricName: "iusto",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "voluptate",
                                                                            Expressions: []string{
                                                                                "rerum",
                                                                                "reiciendis",
                                                                            },
                                                                            MaxComparisonValue: "aut",
                                                                            MinComparisonValue: "unde",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ratione",
                                                                            MaxComparisonValue: "autem",
                                                                            MetricName: "a",
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
                                                                            DimensionName: "iure",
                                                                            Expressions: []string{
                                                                                "est",
                                                                                "temporibus",
                                                                            },
                                                                            MaxComparisonValue: "consequatur",
                                                                            MinComparisonValue: "non",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "inventore",
                                                                            MaxComparisonValue: "reprehenderit",
                                                                            MetricName: "quos",
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
                                                                    CaseSensitive: true,
                                                                    DimensionName: "voluptas",
                                                                    Expressions: []string{
                                                                        "nesciunt",
                                                                        "nihil",
                                                                    },
                                                                    MaxComparisonValue: "aspernatur",
                                                                    MinComparisonValue: "hic",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "libero",
                                                                    MaxComparisonValue: "accusantium",
                                                                    MetricName: "facere",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "temporibus",
                                                                    Expressions: []string{
                                                                        "rem",
                                                                        "aut",
                                                                        "voluptate",
                                                                    },
                                                                    MaxComparisonValue: "a",
                                                                    MinComparisonValue: "consequatur",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "assumenda",
                                                                    MaxComparisonValue: "rerum",
                                                                    MetricName: "non",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "iure",
                                                                    Expressions: []string{
                                                                        "quia",
                                                                        "molestiae",
                                                                        "dolor",
                                                                    },
                                                                    MaxComparisonValue: "nostrum",
                                                                    MinComparisonValue: "aut",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "neque",
                                                                    MaxComparisonValue: "pariatur",
                                                                    MetricName: "enim",
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
                                    },
                                },
                            },
                            SegmentID: "magnam",
                        },
                        shared.Segment{
                            DynamicSegment: &shared.DynamicSegment{
                                Name: "et",
                                SessionSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
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
                                                                            CaseSensitive: false,
                                                                            DimensionName: "et",
                                                                            Expressions: []string{
                                                                                "praesentium",
                                                                                "labore",
                                                                                "accusamus",
                                                                            },
                                                                            MaxComparisonValue: "aut",
                                                                            MinComparisonValue: "alias",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aperiam",
                                                                            MaxComparisonValue: "voluptatem",
                                                                            MetricName: "dolorum",
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
                                                                            DimensionName: "laborum",
                                                                            Expressions: []string{
                                                                                "delectus",
                                                                            },
                                                                            MaxComparisonValue: "tenetur",
                                                                            MinComparisonValue: "expedita",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ut",
                                                                            MaxComparisonValue: "sed",
                                                                            MetricName: "qui",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "aliquid",
                                                                            Expressions: []string{
                                                                                "nihil",
                                                                                "consequatur",
                                                                                "quae",
                                                                            },
                                                                            MaxComparisonValue: "et",
                                                                            MinComparisonValue: "quae",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "et",
                                                                            MaxComparisonValue: "corrupti",
                                                                            MetricName: "ipsum",
                                                                            Operator: "EQUAL",
                                                                            Scope: "HIT",
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
                                                                            DimensionName: "eaque",
                                                                            Expressions: []string{
                                                                                "dolore",
                                                                            },
                                                                            MaxComparisonValue: "sapiente",
                                                                            MinComparisonValue: "eum",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "incidunt",
                                                                            MaxComparisonValue: "neque",
                                                                            MetricName: "quo",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "eveniet",
                                                                            Expressions: []string{
                                                                                "hic",
                                                                                "porro",
                                                                            },
                                                                            MaxComparisonValue: "aut",
                                                                            MinComparisonValue: "minima",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "maiores",
                                                                            MaxComparisonValue: "rem",
                                                                            MetricName: "aperiam",
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
                                                                            CaseSensitive: true,
                                                                            DimensionName: "ea",
                                                                            Expressions: []string{
                                                                                "voluptas",
                                                                            },
                                                                            MaxComparisonValue: "et",
                                                                            MinComparisonValue: "debitis",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "at",
                                                                            MaxComparisonValue: "vero",
                                                                            MetricName: "quis",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "vitae",
                                                                            Expressions: []string{
                                                                                "fugit",
                                                                            },
                                                                            MaxComparisonValue: "et",
                                                                            MinComparisonValue: "consequuntur",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "magni",
                                                                            MaxComparisonValue: "ipsum",
                                                                            MetricName: "voluptas",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "assumenda",
                                                                            Expressions: []string{
                                                                                "sapiente",
                                                                            },
                                                                            MaxComparisonValue: "doloribus",
                                                                            MinComparisonValue: "accusantium",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "rem",
                                                                            MaxComparisonValue: "corporis",
                                                                            MetricName: "pariatur",
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
                                                                            DimensionName: "iste",
                                                                            Expressions: []string{
                                                                                "fuga",
                                                                                "corporis",
                                                                                "quo",
                                                                            },
                                                                            MaxComparisonValue: "laborum",
                                                                            MinComparisonValue: "ex",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "voluptatem",
                                                                            MaxComparisonValue: "accusantium",
                                                                            MetricName: "et",
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
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "iusto",
                                                                    Expressions: []string{
                                                                        "voluptates",
                                                                    },
                                                                    MaxComparisonValue: "quia",
                                                                    MinComparisonValue: "tenetur",
                                                                    Operator: "IN_LIST",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "rerum",
                                                                    MaxComparisonValue: "accusamus",
                                                                    MetricName: "aliquam",
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
                                                                    DimensionName: "ab",
                                                                    Expressions: []string{
                                                                        "commodi",
                                                                        "fugiat",
                                                                        "quis",
                                                                    },
                                                                    MaxComparisonValue: "saepe",
                                                                    MinComparisonValue: "illo",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "qui",
                                                                    MaxComparisonValue: "quia",
                                                                    MetricName: "aperiam",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "aliquam",
                                                                    Expressions: []string{
                                                                        "non",
                                                                        "earum",
                                                                        "voluptatem",
                                                                    },
                                                                    MaxComparisonValue: "impedit",
                                                                    MinComparisonValue: "in",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ut",
                                                                    MaxComparisonValue: "sint",
                                                                    MetricName: "ab",
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
                                                                    CaseSensitive: false,
                                                                    DimensionName: "neque",
                                                                    Expressions: []string{
                                                                        "est",
                                                                        "non",
                                                                    },
                                                                    MaxComparisonValue: "sit",
                                                                    MinComparisonValue: "est",
                                                                    Operator: "IN_LIST",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "in",
                                                                    MaxComparisonValue: "mollitia",
                                                                    MetricName: "minima",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "SESSION",
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
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "dicta",
                                                                            Expressions: []string{
                                                                                "ut",
                                                                                "expedita",
                                                                            },
                                                                            MaxComparisonValue: "assumenda",
                                                                            MinComparisonValue: "autem",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "labore",
                                                                            MaxComparisonValue: "amet",
                                                                            MetricName: "in",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "omnis",
                                                                            Expressions: []string{
                                                                                "possimus",
                                                                                "quo",
                                                                                "odio",
                                                                            },
                                                                            MaxComparisonValue: "eos",
                                                                            MinComparisonValue: "enim",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "exercitationem",
                                                                            MaxComparisonValue: "debitis",
                                                                            MetricName: "ut",
                                                                            Operator: "GREATER_THAN",
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
                                                                            DimensionName: "eum",
                                                                            Expressions: []string{
                                                                                "illo",
                                                                                "quas",
                                                                            },
                                                                            MaxComparisonValue: "in",
                                                                            MinComparisonValue: "ipsum",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "dolorem",
                                                                            MaxComparisonValue: "quas",
                                                                            MetricName: "eum",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "mollitia",
                                                                            Expressions: []string{
                                                                                "sit",
                                                                                "et",
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: "praesentium",
                                                                            MinComparisonValue: "voluptates",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "voluptatem",
                                                                            MaxComparisonValue: "deleniti",
                                                                            MetricName: "facere",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "SESSION",
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
                                                                            DimensionName: "exercitationem",
                                                                            Expressions: []string{
                                                                                "qui",
                                                                            },
                                                                            MaxComparisonValue: "odit",
                                                                            MinComparisonValue: "qui",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aliquid",
                                                                            MaxComparisonValue: "repellendus",
                                                                            MetricName: "sint",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "ipsam",
                                                                            Expressions: []string{
                                                                                "cum",
                                                                            },
                                                                            MaxComparisonValue: "aut",
                                                                            MinComparisonValue: "modi",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quia",
                                                                            MaxComparisonValue: "quis",
                                                                            MetricName: "in",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "dolorem",
                                                                            Expressions: []string{
                                                                                "assumenda",
                                                                            },
                                                                            MaxComparisonValue: "labore",
                                                                            MinComparisonValue: "id",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "voluptates",
                                                                            MaxComparisonValue: "amet",
                                                                            MetricName: "sint",
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
                                                                            DimensionName: "ab",
                                                                            Expressions: []string{
                                                                                "facilis",
                                                                                "quis",
                                                                                "sunt",
                                                                            },
                                                                            MaxComparisonValue: "quis",
                                                                            MinComparisonValue: "qui",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "temporibus",
                                                                            MaxComparisonValue: "nemo",
                                                                            MetricName: "ea",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "dolor",
                                                                            Expressions: []string{
                                                                                "corrupti",
                                                                            },
                                                                            MaxComparisonValue: "iusto",
                                                                            MinComparisonValue: "necessitatibus",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quod",
                                                                            MaxComparisonValue: "maxime",
                                                                            MetricName: "minima",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "nostrum",
                                                                            Expressions: []string{
                                                                                "tenetur",
                                                                            },
                                                                            MaxComparisonValue: "numquam",
                                                                            MinComparisonValue: "quam",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aut",
                                                                            MaxComparisonValue: "fugiat",
                                                                            MetricName: "cumque",
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
                                                                        "delectus",
                                                                    },
                                                                    MaxComparisonValue: "recusandae",
                                                                    MinComparisonValue: "voluptate",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "autem",
                                                                    MaxComparisonValue: "sed",
                                                                    MetricName: "voluptas",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
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
                                                        MatchType: "PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "vel",
                                                                            Expressions: []string{
                                                                                "ipsum",
                                                                            },
                                                                            MaxComparisonValue: "in",
                                                                            MinComparisonValue: "dolorem",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sint",
                                                                            MaxComparisonValue: "non",
                                                                            MetricName: "qui",
                                                                            Operator: "EQUAL",
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
                                                                            DimensionName: "adipisci",
                                                                            Expressions: []string{
                                                                                "accusantium",
                                                                                "exercitationem",
                                                                                "doloremque",
                                                                            },
                                                                            MaxComparisonValue: "et",
                                                                            MinComparisonValue: "perspiciatis",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "inventore",
                                                                            MaxComparisonValue: "voluptatem",
                                                                            MetricName: "soluta",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "est",
                                                                            Expressions: []string{
                                                                                "dolor",
                                                                            },
                                                                            MaxComparisonValue: "nobis",
                                                                            MinComparisonValue: "ipsam",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "nihil",
                                                                            MaxComparisonValue: "harum",
                                                                            MetricName: "quisquam",
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
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "vel",
                                                                    Expressions: []string{
                                                                        "nulla",
                                                                    },
                                                                    MaxComparisonValue: "voluptatem",
                                                                    MinComparisonValue: "dolor",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ea",
                                                                    MaxComparisonValue: "iure",
                                                                    MetricName: "ratione",
                                                                    Operator: "EQUAL",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "officia",
                                                                    Expressions: []string{
                                                                        "molestiae",
                                                                        "voluptatem",
                                                                    },
                                                                    MaxComparisonValue: "impedit",
                                                                    MinComparisonValue: "debitis",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "rerum",
                                                                    MaxComparisonValue: "ut",
                                                                    MetricName: "corrupti",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "perspiciatis",
                                                                    Expressions: []string{
                                                                        "voluptatem",
                                                                    },
                                                                    MaxComparisonValue: "quidem",
                                                                    MinComparisonValue: "rerum",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "facilis",
                                                                    MaxComparisonValue: "cum",
                                                                    MetricName: "occaecati",
                                                                    Operator: "EQUAL",
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
                                                                    DimensionName: "nostrum",
                                                                    Expressions: []string{
                                                                        "eos",
                                                                    },
                                                                    MaxComparisonValue: "sit",
                                                                    MinComparisonValue: "et",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ut",
                                                                    MaxComparisonValue: "voluptatum",
                                                                    MetricName: "dolor",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "est",
                                                                    Expressions: []string{
                                                                        "iure",
                                                                        "provident",
                                                                    },
                                                                    MaxComparisonValue: "eum",
                                                                    MinComparisonValue: "repellat",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "repellendus",
                                                                    MaxComparisonValue: "cupiditate",
                                                                    MetricName: "natus",
                                                                    Operator: "GREATER_THAN",
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
                                                                    DimensionName: "sit",
                                                                    Expressions: []string{
                                                                        "est",
                                                                        "at",
                                                                    },
                                                                    MaxComparisonValue: "ut",
                                                                    MinComparisonValue: "incidunt",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "est",
                                                                    MaxComparisonValue: "necessitatibus",
                                                                    MetricName: "ut",
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
                                UserSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
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
                                                                            CaseSensitive: true,
                                                                            DimensionName: "ut",
                                                                            Expressions: []string{
                                                                                "sed",
                                                                                "ducimus",
                                                                            },
                                                                            MaxComparisonValue: "vel",
                                                                            MinComparisonValue: "optio",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sunt",
                                                                            MaxComparisonValue: "consequuntur",
                                                                            MetricName: "autem",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "modi",
                                                                            Expressions: []string{
                                                                                "repellendus",
                                                                                "asperiores",
                                                                                "molestiae",
                                                                            },
                                                                            MaxComparisonValue: "laboriosam",
                                                                            MinComparisonValue: "reprehenderit",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quis",
                                                                            MaxComparisonValue: "facilis",
                                                                            MetricName: "mollitia",
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
                                                                            DimensionName: "ea",
                                                                            Expressions: []string{
                                                                                "ut",
                                                                                "sit",
                                                                                "fuga",
                                                                            },
                                                                            MaxComparisonValue: "eveniet",
                                                                            MinComparisonValue: "culpa",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "repudiandae",
                                                                            MaxComparisonValue: "aspernatur",
                                                                            MetricName: "consequuntur",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "est",
                                                                            Expressions: []string{
                                                                                "neque",
                                                                                "quia",
                                                                                "qui",
                                                                            },
                                                                            MaxComparisonValue: "qui",
                                                                            MinComparisonValue: "dolores",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quisquam",
                                                                            MaxComparisonValue: "iure",
                                                                            MetricName: "hic",
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
                                                                            DimensionName: "est",
                                                                            Expressions: []string{
                                                                                "ipsa",
                                                                                "aut",
                                                                            },
                                                                            MaxComparisonValue: "quisquam",
                                                                            MinComparisonValue: "quibusdam",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "corporis",
                                                                            MaxComparisonValue: "laboriosam",
                                                                            MetricName: "hic",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "beatae",
                                                                            Expressions: []string{
                                                                                "sunt",
                                                                                "sequi",
                                                                                "corrupti",
                                                                            },
                                                                            MaxComparisonValue: "porro",
                                                                            MinComparisonValue: "at",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "id",
                                                                            MaxComparisonValue: "consequatur",
                                                                            MetricName: "quis",
                                                                            Operator: "EQUAL",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "neque",
                                                                            Expressions: []string{
                                                                                "ab",
                                                                            },
                                                                            MaxComparisonValue: "earum",
                                                                            MinComparisonValue: "omnis",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aliquid",
                                                                            MaxComparisonValue: "quia",
                                                                            MetricName: "animi",
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
                                                                            CaseSensitive: true,
                                                                            DimensionName: "maiores",
                                                                            Expressions: []string{
                                                                                "autem",
                                                                                "deleniti",
                                                                                "quam",
                                                                            },
                                                                            MaxComparisonValue: "amet",
                                                                            MinComparisonValue: "consequuntur",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sunt",
                                                                            MaxComparisonValue: "non",
                                                                            MetricName: "blanditiis",
                                                                            Operator: "EQUAL",
                                                                            Scope: "PRODUCT",
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
                                                                            DimensionName: "est",
                                                                            Expressions: []string{
                                                                                "in",
                                                                            },
                                                                            MaxComparisonValue: "est",
                                                                            MinComparisonValue: "omnis",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "omnis",
                                                                            MaxComparisonValue: "quidem",
                                                                            MetricName: "id",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "rerum",
                                                                            Expressions: []string{
                                                                                "voluptas",
                                                                                "molestiae",
                                                                            },
                                                                            MaxComparisonValue: "ut",
                                                                            MinComparisonValue: "qui",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "voluptatem",
                                                                            MaxComparisonValue: "sit",
                                                                            MetricName: "aspernatur",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "sunt",
                                                                            Expressions: []string{
                                                                                "voluptates",
                                                                                "sit",
                                                                                "nulla",
                                                                            },
                                                                            MaxComparisonValue: "non",
                                                                            MinComparisonValue: "est",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "maxime",
                                                                            MaxComparisonValue: "eum",
                                                                            MetricName: "sapiente",
                                                                            Operator: "GREATER_THAN",
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
                                                                    CaseSensitive: true,
                                                                    DimensionName: "quidem",
                                                                    Expressions: []string{
                                                                        "et",
                                                                    },
                                                                    MaxComparisonValue: "doloribus",
                                                                    MinComparisonValue: "impedit",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "impedit",
                                                                    MaxComparisonValue: "voluptas",
                                                                    MetricName: "eligendi",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "at",
                                                                    Expressions: []string{
                                                                        "qui",
                                                                    },
                                                                    MaxComparisonValue: "ducimus",
                                                                    MinComparisonValue: "facere",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "sit",
                                                                    MaxComparisonValue: "porro",
                                                                    MetricName: "omnis",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "qui",
                                                                    Expressions: []string{
                                                                        "qui",
                                                                        "officia",
                                                                        "quia",
                                                                    },
                                                                    MaxComparisonValue: "laborum",
                                                                    MinComparisonValue: "recusandae",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ut",
                                                                    MaxComparisonValue: "qui",
                                                                    MetricName: "aut",
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
                                                                    DimensionName: "ut",
                                                                    Expressions: []string{
                                                                        "incidunt",
                                                                        "amet",
                                                                    },
                                                                    MaxComparisonValue: "voluptatem",
                                                                    MinComparisonValue: "dolorum",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "et",
                                                                    MaxComparisonValue: "maxime",
                                                                    MetricName: "pariatur",
                                                                    Operator: "EQUAL",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "voluptatem",
                                                                    Expressions: []string{
                                                                        "aut",
                                                                    },
                                                                    MaxComparisonValue: "error",
                                                                    MinComparisonValue: "excepturi",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "quia",
                                                                    MaxComparisonValue: "eveniet",
                                                                    MetricName: "ut",
                                                                    Operator: "EQUAL",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "inventore",
                                                                    Expressions: []string{
                                                                        "iure",
                                                                        "sed",
                                                                    },
                                                                    MaxComparisonValue: "dolores",
                                                                    MinComparisonValue: "rem",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "molestias",
                                                                    MaxComparisonValue: "repellendus",
                                                                    MetricName: "doloremque",
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
                                                                    CaseSensitive: true,
                                                                    DimensionName: "eaque",
                                                                    Expressions: []string{
                                                                        "dolorem",
                                                                        "nulla",
                                                                    },
                                                                    MaxComparisonValue: "nam",
                                                                    MinComparisonValue: "velit",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "culpa",
                                                                    MaxComparisonValue: "in",
                                                                    MetricName: "qui",
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
                                                                            DimensionName: "reiciendis",
                                                                            Expressions: []string{
                                                                                "quas",
                                                                                "pariatur",
                                                                                "omnis",
                                                                            },
                                                                            MaxComparisonValue: "molestiae",
                                                                            MinComparisonValue: "soluta",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aut",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "omnis",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
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
                                                                            DimensionName: "ab",
                                                                            Expressions: []string{
                                                                                "ut",
                                                                            },
                                                                            MaxComparisonValue: "tempore",
                                                                            MinComparisonValue: "molestiae",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aut",
                                                                            MaxComparisonValue: "sequi",
                                                                            MetricName: "eum",
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
                                                                            CaseSensitive: false,
                                                                            DimensionName: "officiis",
                                                                            Expressions: []string{
                                                                                "delectus",
                                                                            },
                                                                            MaxComparisonValue: "harum",
                                                                            MinComparisonValue: "esse",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "autem",
                                                                            MaxComparisonValue: "deserunt",
                                                                            MetricName: "ut",
                                                                            Operator: "GREATER_THAN",
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
                                                                            DimensionName: "cupiditate",
                                                                            Expressions: []string{
                                                                                "id",
                                                                            },
                                                                            MaxComparisonValue: "suscipit",
                                                                            MinComparisonValue: "dicta",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "facere",
                                                                            MaxComparisonValue: "architecto",
                                                                            MetricName: "voluptatem",
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
                                                                    DimensionName: "maiores",
                                                                    Expressions: []string{
                                                                        "earum",
                                                                        "alias",
                                                                    },
                                                                    MaxComparisonValue: "quia",
                                                                    MinComparisonValue: "ut",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "quas",
                                                                    MaxComparisonValue: "magni",
                                                                    MetricName: "fuga",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "facere",
                                                                    Expressions: []string{
                                                                        "accusantium",
                                                                        "repellat",
                                                                        "quam",
                                                                    },
                                                                    MaxComparisonValue: "quo",
                                                                    MinComparisonValue: "vero",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "vel",
                                                                    MaxComparisonValue: "exercitationem",
                                                                    MetricName: "laudantium",
                                                                    Operator: "EQUAL",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "qui",
                                                                    Expressions: []string{
                                                                        "modi",
                                                                        "occaecati",
                                                                        "dolor",
                                                                    },
                                                                    MaxComparisonValue: "et",
                                                                    MinComparisonValue: "ea",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "sed",
                                                                    MaxComparisonValue: "dolorem",
                                                                    MetricName: "accusamus",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
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
                            },
                            SegmentID: "fuga",
                        },
                    },
                    ViewID: "accusamus",
                },
                shared.ReportRequest{
                    CohortGroup: &shared.CohortGroup{
                        Cohorts: []shared.Cohort{
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "similique",
                                    StartDate: "recusandae",
                                },
                                Name: "error",
                                Type: "FIRST_VISIT_DATE",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "atque",
                                    StartDate: "rerum",
                                },
                                Name: "voluptates",
                                Type: "FIRST_VISIT_DATE",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "reiciendis",
                                    StartDate: "ipsam",
                                },
                                Name: "modi",
                                Type: "UNSPECIFIED_COHORT_TYPE",
                            },
                        },
                        LifetimeValue: false,
                    },
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: "quisquam",
                            StartDate: "quis",
                        },
                    },
                    DimensionFilterClauses: []shared.DimensionFilterClause{
                        shared.DimensionFilterClause{
                            Filters: []shared.DimensionFilter{
                                shared.DimensionFilter{
                                    CaseSensitive: true,
                                    DimensionName: "ducimus",
                                    Expressions: []string{
                                        "commodi",
                                        "ut",
                                        "molestias",
                                    },
                                    Not: false,
                                    Operator: "REGEXP",
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: false,
                                    DimensionName: "et",
                                    Expressions: []string{
                                        "ducimus",
                                        "nisi",
                                    },
                                    Not: true,
                                    Operator: "REGEXP",
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: false,
                                    DimensionName: "cum",
                                    Expressions: []string{
                                        "ab",
                                        "facere",
                                    },
                                    Not: true,
                                    Operator: "PARTIAL",
                                },
                            },
                            Operator: "AND",
                        },
                    },
                    Dimensions: []shared.Dimension{
                        shared.Dimension{
                            HistogramBuckets: []string{
                                "quidem",
                            },
                            Name: "fuga",
                        },
                    },
                    FiltersExpression: "officiis",
                    HideTotals: true,
                    HideValueRanges: true,
                    IncludeEmptyRows: false,
                    MetricFilterClauses: []shared.MetricFilterClause{
                        shared.MetricFilterClause{
                            Filters: []shared.MetricFilter{
                                shared.MetricFilter{
                                    ComparisonValue: "qui",
                                    MetricName: "debitis",
                                    Not: false,
                                    Operator: "GREATER_THAN",
                                },
                            },
                            Operator: "OPERATOR_UNSPECIFIED",
                        },
                    },
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Alias: "iusto",
                            Expression: "distinctio",
                            FormattingType: "INTEGER",
                        },
                        shared.Metric{
                            Alias: "ut",
                            Expression: "expedita",
                            FormattingType: "CURRENCY",
                        },
                        shared.Metric{
                            Alias: "commodi",
                            Expression: "exercitationem",
                            FormattingType: "CURRENCY",
                        },
                    },
                    OrderBys: []shared.OrderBy{
                        shared.OrderBy{
                            FieldName: "odit",
                            OrderType: "HISTOGRAM_BUCKET",
                            SortOrder: "ASCENDING",
                        },
                        shared.OrderBy{
                            FieldName: "aliquam",
                            OrderType: "SMART",
                            SortOrder: "DESCENDING",
                        },
                    },
                    PageSize: 7824488412278888279,
                    PageToken: "aut",
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            DimensionFilterClauses: []shared.DimensionFilterClause{
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "et",
                                            Expressions: []string{
                                                "minima",
                                            },
                                            Not: false,
                                            Operator: "OPERATOR_UNSPECIFIED",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "error",
                                            Expressions: []string{
                                                "sed",
                                                "ipsa",
                                                "explicabo",
                                            },
                                            Not: false,
                                            Operator: "NUMERIC_LESS_THAN",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "soluta",
                                            Expressions: []string{
                                                "expedita",
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
                                        "delectus",
                                    },
                                    Name: "suscipit",
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "dolor",
                                        "ipsa",
                                    },
                                    Name: "quos",
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "laborum",
                                    },
                                    Name: "a",
                                },
                            },
                            MaxGroupCount: 7045185900456319079,
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Alias: "eos",
                                    Expression: "voluptas",
                                    FormattingType: "INTEGER",
                                },
                                shared.Metric{
                                    Alias: "quia",
                                    Expression: "voluptas",
                                    FormattingType: "CURRENCY",
                                },
                                shared.Metric{
                                    Alias: "omnis",
                                    Expression: "dolores",
                                    FormattingType: "PERCENT",
                                },
                            },
                            StartGroup: 4835771613389976289,
                        },
                        shared.Pivot{
                            DimensionFilterClauses: []shared.DimensionFilterClause{
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "et",
                                            Expressions: []string{
                                                "enim",
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
                                            DimensionName: "est",
                                            Expressions: []string{
                                                "quo",
                                                "rerum",
                                            },
                                            Not: false,
                                            Operator: "EXACT",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "minus",
                                            Expressions: []string{
                                                "vero",
                                                "est",
                                                "et",
                                            },
                                            Not: true,
                                            Operator: "IN_LIST",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "nobis",
                                            Expressions: []string{
                                                "est",
                                            },
                                            Not: true,
                                            Operator: "IN_LIST",
                                        },
                                    },
                                    Operator: "OPERATOR_UNSPECIFIED",
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "ea",
                                            Expressions: []string{
                                                "est",
                                            },
                                            Not: false,
                                            Operator: "REGEXP",
                                        },
                                    },
                                    Operator: "OR",
                                },
                            },
                            Dimensions: []shared.Dimension{
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "et",
                                        "cumque",
                                        "aut",
                                    },
                                    Name: "deserunt",
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "provident",
                                        "aut",
                                    },
                                    Name: "ullam",
                                },
                            },
                            MaxGroupCount: 7948683775972459905,
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Alias: "aut",
                                    Expression: "possimus",
                                    FormattingType: "CURRENCY",
                                },
                            },
                            StartGroup: 4333862210572785286,
                        },
                        shared.Pivot{
                            DimensionFilterClauses: []shared.DimensionFilterClause{
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "ut",
                                            Expressions: []string{
                                                "nam",
                                            },
                                            Not: true,
                                            Operator: "NUMERIC_LESS_THAN",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "possimus",
                                            Expressions: []string{
                                                "deserunt",
                                            },
                                            Not: false,
                                            Operator: "NUMERIC_EQUAL",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "tempore",
                                            Expressions: []string{
                                                "cum",
                                                "ut",
                                            },
                                            Not: true,
                                            Operator: "NUMERIC_EQUAL",
                                        },
                                    },
                                    Operator: "OPERATOR_UNSPECIFIED",
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "hic",
                                            Expressions: []string{
                                                "qui",
                                            },
                                            Not: false,
                                            Operator: "ENDS_WITH",
                                        },
                                    },
                                    Operator: "OR",
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "hic",
                                            Expressions: []string{
                                                "iste",
                                                "qui",
                                                "veritatis",
                                            },
                                            Not: false,
                                            Operator: "EXACT",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "iste",
                                            Expressions: []string{
                                                "libero",
                                            },
                                            Not: true,
                                            Operator: "NUMERIC_EQUAL",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "a",
                                            Expressions: []string{
                                                "numquam",
                                                "dolores",
                                                "tempore",
                                            },
                                            Not: false,
                                            Operator: "BEGINS_WITH",
                                        },
                                    },
                                    Operator: "OR",
                                },
                            },
                            Dimensions: []shared.Dimension{
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "omnis",
                                        "adipisci",
                                        "praesentium",
                                    },
                                    Name: "qui",
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "in",
                                        "et",
                                        "est",
                                    },
                                    Name: "eos",
                                },
                            },
                            MaxGroupCount: 2145358840908556445,
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Alias: "eum",
                                    Expression: "ex",
                                    FormattingType: "PERCENT",
                                },
                                shared.Metric{
                                    Alias: "deleniti",
                                    Expression: "quam",
                                    FormattingType: "TIME",
                                },
                            },
                            StartGroup: 5670313331134481218,
                        },
                    },
                    SamplingLevel: "DEFAULT",
                    Segments: []shared.Segment{
                        shared.Segment{
                            DynamicSegment: &shared.DynamicSegment{
                                Name: "molestias",
                                SessionSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
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
                                                                            CaseSensitive: true,
                                                                            DimensionName: "ratione",
                                                                            Expressions: []string{
                                                                                "in",
                                                                                "corporis",
                                                                                "dolores",
                                                                            },
                                                                            MaxComparisonValue: "perferendis",
                                                                            MinComparisonValue: "laboriosam",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "necessitatibus",
                                                                            MaxComparisonValue: "aperiam",
                                                                            MetricName: "veniam",
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
                                            },
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "eveniet",
                                                                    Expressions: []string{
                                                                        "reiciendis",
                                                                        "non",
                                                                        "dolor",
                                                                    },
                                                                    MaxComparisonValue: "maiores",
                                                                    MinComparisonValue: "itaque",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ad",
                                                                    MaxComparisonValue: "aperiam",
                                                                    MetricName: "earum",
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
                                                                    DimensionName: "sint",
                                                                    Expressions: []string{
                                                                        "qui",
                                                                        "mollitia",
                                                                        "neque",
                                                                    },
                                                                    MaxComparisonValue: "autem",
                                                                    MinComparisonValue: "ab",
                                                                    Operator: "IN_LIST",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "fugit",
                                                                    MaxComparisonValue: "saepe",
                                                                    MetricName: "enim",
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
                                                                    CaseSensitive: true,
                                                                    DimensionName: "eum",
                                                                    Expressions: []string{
                                                                        "assumenda",
                                                                        "fuga",
                                                                    },
                                                                    MaxComparisonValue: "aut",
                                                                    MinComparisonValue: "corrupti",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "et",
                                                                    MaxComparisonValue: "iusto",
                                                                    MetricName: "voluptatem",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "quod",
                                                                    Expressions: []string{
                                                                        "quod",
                                                                    },
                                                                    MaxComparisonValue: "impedit",
                                                                    MinComparisonValue: "nostrum",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "dicta",
                                                                    MaxComparisonValue: "vero",
                                                                    MetricName: "ea",
                                                                    Operator: "GREATER_THAN",
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
                                                                            DimensionName: "facilis",
                                                                            Expressions: []string{
                                                                                "aut",
                                                                            },
                                                                            MaxComparisonValue: "id",
                                                                            MinComparisonValue: "sequi",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quis",
                                                                            MaxComparisonValue: "molestiae",
                                                                            MetricName: "aliquam",
                                                                            Operator: "EQUAL",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "id",
                                                                            Expressions: []string{
                                                                                "possimus",
                                                                                "eius",
                                                                            },
                                                                            MaxComparisonValue: "aut",
                                                                            MinComparisonValue: "adipisci",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "illum",
                                                                            MaxComparisonValue: "in",
                                                                            MetricName: "fuga",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "ratione",
                                                                            Expressions: []string{
                                                                                "inventore",
                                                                                "reprehenderit",
                                                                                "autem",
                                                                            },
                                                                            MaxComparisonValue: "tenetur",
                                                                            MinComparisonValue: "facilis",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "est",
                                                                            MaxComparisonValue: "voluptatem",
                                                                            MetricName: "magnam",
                                                                            Operator: "EQUAL",
                                                                            Scope: "HIT",
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
                                                                            DimensionName: "alias",
                                                                            Expressions: []string{
                                                                                "vel",
                                                                            },
                                                                            MaxComparisonValue: "cumque",
                                                                            MinComparisonValue: "ea",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quisquam",
                                                                            MaxComparisonValue: "explicabo",
                                                                            MetricName: "id",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "consequuntur",
                                                                            Expressions: []string{
                                                                                "quia",
                                                                                "cupiditate",
                                                                            },
                                                                            MaxComparisonValue: "sed",
                                                                            MinComparisonValue: "maxime",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "consequatur",
                                                                            MaxComparisonValue: "excepturi",
                                                                            MetricName: "ut",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
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
                                                                            DimensionName: "accusantium",
                                                                            Expressions: []string{
                                                                                "iusto",
                                                                                "voluptatum",
                                                                            },
                                                                            MaxComparisonValue: "illo",
                                                                            MinComparisonValue: "exercitationem",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "nemo",
                                                                            MaxComparisonValue: "voluptate",
                                                                            MetricName: "harum",
                                                                            Operator: "LESS_THAN",
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
                                                                            DimensionName: "quidem",
                                                                            Expressions: []string{
                                                                                "dolores",
                                                                                "cum",
                                                                                "dicta",
                                                                            },
                                                                            MaxComparisonValue: "cupiditate",
                                                                            MinComparisonValue: "impedit",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "reprehenderit",
                                                                            MaxComparisonValue: "nesciunt",
                                                                            MetricName: "aut",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
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
                                                                            DimensionName: "aut",
                                                                            Expressions: []string{
                                                                                "odit",
                                                                            },
                                                                            MaxComparisonValue: "et",
                                                                            MinComparisonValue: "debitis",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "mollitia",
                                                                            MaxComparisonValue: "odio",
                                                                            MetricName: "molestiae",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "rem",
                                                                            Expressions: []string{
                                                                                "eum",
                                                                                "at",
                                                                            },
                                                                            MaxComparisonValue: "tempora",
                                                                            MinComparisonValue: "ut",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sit",
                                                                            MaxComparisonValue: "maiores",
                                                                            MetricName: "aliquid",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "in",
                                                                            Expressions: []string{
                                                                                "velit",
                                                                                "architecto",
                                                                                "dolor",
                                                                            },
                                                                            MaxComparisonValue: "tempora",
                                                                            MinComparisonValue: "velit",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aut",
                                                                            MaxComparisonValue: "nobis",
                                                                            MetricName: "iste",
                                                                            Operator: "GREATER_THAN",
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
                                                                    DimensionName: "assumenda",
                                                                    Expressions: []string{
                                                                        "quos",
                                                                        "vel",
                                                                    },
                                                                    MaxComparisonValue: "aut",
                                                                    MinComparisonValue: "beatae",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "et",
                                                                    MaxComparisonValue: "rem",
                                                                    MetricName: "provident",
                                                                    Operator: "EQUAL",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "aut",
                                                                    Expressions: []string{
                                                                        "fugiat",
                                                                        "doloribus",
                                                                    },
                                                                    MaxComparisonValue: "saepe",
                                                                    MinComparisonValue: "ut",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "minus",
                                                                    MaxComparisonValue: "accusantium",
                                                                    MetricName: "reiciendis",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "aut",
                                                                    Expressions: []string{
                                                                        "ea",
                                                                    },
                                                                    MaxComparisonValue: "quis",
                                                                    MinComparisonValue: "culpa",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "rem",
                                                                    MaxComparisonValue: "non",
                                                                    MetricName: "aperiam",
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
                                                                    DimensionName: "quasi",
                                                                    Expressions: []string{
                                                                        "dolor",
                                                                        "ut",
                                                                    },
                                                                    MaxComparisonValue: "sit",
                                                                    MinComparisonValue: "ut",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "iusto",
                                                                    MaxComparisonValue: "sed",
                                                                    MetricName: "numquam",
                                                                    Operator: "EQUAL",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "molestiae",
                                                                    Expressions: []string{
                                                                        "eaque",
                                                                        "voluptatum",
                                                                        "debitis",
                                                                    },
                                                                    MaxComparisonValue: "perspiciatis",
                                                                    MinComparisonValue: "aut",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "est",
                                                                    MaxComparisonValue: "nisi",
                                                                    MetricName: "voluptatibus",
                                                                    Operator: "EQUAL",
                                                                    Scope: "SESSION",
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
                                                        MatchType: "IMMEDIATELY_PRECEDES",
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "ut",
                                                                            Expressions: []string{
                                                                                "officia",
                                                                                "optio",
                                                                                "omnis",
                                                                            },
                                                                            MaxComparisonValue: "sit",
                                                                            MinComparisonValue: "quas",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "maxime",
                                                                            MaxComparisonValue: "quibusdam",
                                                                            MetricName: "asperiores",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "beatae",
                                                                            Expressions: []string{
                                                                                "blanditiis",
                                                                            },
                                                                            MaxComparisonValue: "voluptatem",
                                                                            MinComparisonValue: "ea",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "at",
                                                                            MaxComparisonValue: "fugit",
                                                                            MetricName: "dolore",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "vel",
                                                                            Expressions: []string{
                                                                                "atque",
                                                                                "repellendus",
                                                                                "ut",
                                                                            },
                                                                            MaxComparisonValue: "possimus",
                                                                            MinComparisonValue: "cumque",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "tempore",
                                                                            MaxComparisonValue: "maiores",
                                                                            MetricName: "dignissimos",
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
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "qui",
                                                                    Expressions: []string{
                                                                        "est",
                                                                        "consequatur",
                                                                        "quia",
                                                                    },
                                                                    MaxComparisonValue: "ad",
                                                                    MinComparisonValue: "nemo",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "neque",
                                                                    MaxComparisonValue: "totam",
                                                                    MetricName: "dolores",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "odio",
                                                                    Expressions: []string{
                                                                        "placeat",
                                                                    },
                                                                    MaxComparisonValue: "nostrum",
                                                                    MinComparisonValue: "repellat",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "eum",
                                                                    MaxComparisonValue: "impedit",
                                                                    MetricName: "est",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "voluptatibus",
                                                                    Expressions: []string{
                                                                        "cupiditate",
                                                                        "minus",
                                                                    },
                                                                    MaxComparisonValue: "in",
                                                                    MinComparisonValue: "debitis",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "animi",
                                                                    MaxComparisonValue: "distinctio",
                                                                    MetricName: "hic",
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
                                },
                            },
                            SegmentID: "labore",
                        },
                        shared.Segment{
                            DynamicSegment: &shared.DynamicSegment{
                                Name: "totam",
                                SessionSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
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
                                                                            DimensionName: "qui",
                                                                            Expressions: []string{
                                                                                "explicabo",
                                                                            },
                                                                            MaxComparisonValue: "qui",
                                                                            MinComparisonValue: "maiores",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "molestiae",
                                                                            MaxComparisonValue: "voluptas",
                                                                            MetricName: "officia",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "nemo",
                                                                            Expressions: []string{
                                                                                "quae",
                                                                                "odit",
                                                                                "expedita",
                                                                            },
                                                                            MaxComparisonValue: "ut",
                                                                            MinComparisonValue: "occaecati",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "itaque",
                                                                            MaxComparisonValue: "harum",
                                                                            MetricName: "nulla",
                                                                            Operator: "EQUAL",
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
                                                                            DimensionName: "doloribus",
                                                                            Expressions: []string{
                                                                                "quis",
                                                                                "vel",
                                                                                "magni",
                                                                            },
                                                                            MaxComparisonValue: "architecto",
                                                                            MinComparisonValue: "est",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "dolores",
                                                                            MaxComparisonValue: "in",
                                                                            MetricName: "aperiam",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "ut",
                                                                            Expressions: []string{
                                                                                "ut",
                                                                                "velit",
                                                                                "velit",
                                                                            },
                                                                            MaxComparisonValue: "totam",
                                                                            MinComparisonValue: "doloribus",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "et",
                                                                            MaxComparisonValue: "voluptatem",
                                                                            MetricName: "quae",
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
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "at",
                                                                    Expressions: []string{
                                                                        "fugit",
                                                                        "repellat",
                                                                        "non",
                                                                    },
                                                                    MaxComparisonValue: "blanditiis",
                                                                    MinComparisonValue: "omnis",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "nemo",
                                                                    MaxComparisonValue: "corporis",
                                                                    MetricName: "cupiditate",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "expedita",
                                                                    Expressions: []string{
                                                                        "quibusdam",
                                                                        "magni",
                                                                    },
                                                                    MaxComparisonValue: "quia",
                                                                    MinComparisonValue: "earum",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "alias",
                                                                    MaxComparisonValue: "culpa",
                                                                    MetricName: "rerum",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "iusto",
                                                                    Expressions: []string{
                                                                        "provident",
                                                                        "voluptatem",
                                                                        "veniam",
                                                                    },
                                                                    MaxComparisonValue: "aspernatur",
                                                                    MinComparisonValue: "sed",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "numquam",
                                                                    MaxComparisonValue: "explicabo",
                                                                    MetricName: "et",
                                                                    Operator: "EQUAL",
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
                                                                            DimensionName: "hic",
                                                                            Expressions: []string{
                                                                                "qui",
                                                                                "qui",
                                                                            },
                                                                            MaxComparisonValue: "eius",
                                                                            MinComparisonValue: "voluptas",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "aut",
                                                                            MaxComparisonValue: "officiis",
                                                                            MetricName: "aliquid",
                                                                            Operator: "EQUAL",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "voluptate",
                                                                            Expressions: []string{
                                                                                "velit",
                                                                            },
                                                                            MaxComparisonValue: "maiores",
                                                                            MinComparisonValue: "sunt",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "est",
                                                                            MaxComparisonValue: "reprehenderit",
                                                                            MetricName: "totam",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "veritatis",
                                                                            Expressions: []string{
                                                                                "et",
                                                                                "nisi",
                                                                                "cupiditate",
                                                                            },
                                                                            MaxComparisonValue: "vitae",
                                                                            MinComparisonValue: "quos",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "perspiciatis",
                                                                            MaxComparisonValue: "quo",
                                                                            MetricName: "nulla",
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
                                                                            CaseSensitive: true,
                                                                            DimensionName: "ut",
                                                                            Expressions: []string{
                                                                                "sunt",
                                                                                "iusto",
                                                                                "nihil",
                                                                            },
                                                                            MaxComparisonValue: "qui",
                                                                            MinComparisonValue: "a",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "at",
                                                                            MaxComparisonValue: "aliquam",
                                                                            MetricName: "incidunt",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "fugit",
                                                                            Expressions: []string{
                                                                                "quia",
                                                                                "neque",
                                                                                "incidunt",
                                                                            },
                                                                            MaxComparisonValue: "et",
                                                                            MinComparisonValue: "neque",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "tempore",
                                                                            MaxComparisonValue: "ipsum",
                                                                            MetricName: "omnis",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "PRODUCT",
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
                                                                            DimensionName: "labore",
                                                                            Expressions: []string{
                                                                                "saepe",
                                                                                "libero",
                                                                            },
                                                                            MaxComparisonValue: "nobis",
                                                                            MinComparisonValue: "ut",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "qui",
                                                                            MaxComparisonValue: "hic",
                                                                            MetricName: "sed",
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
                                                                                "nisi",
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: "unde",
                                                                            MinComparisonValue: "in",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "vel",
                                                                            MaxComparisonValue: "rerum",
                                                                            MetricName: "minus",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "sit",
                                                                            Expressions: []string{
                                                                                "excepturi",
                                                                            },
                                                                            MaxComparisonValue: "quia",
                                                                            MinComparisonValue: "dolore",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "voluptas",
                                                                            MaxComparisonValue: "quis",
                                                                            MetricName: "dolor",
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
                                                                            DimensionName: "voluptatem",
                                                                            Expressions: []string{
                                                                                "est",
                                                                            },
                                                                            MaxComparisonValue: "ducimus",
                                                                            MinComparisonValue: "adipisci",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "et",
                                                                            MaxComparisonValue: "vel",
                                                                            MetricName: "dolores",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "PRODUCT",
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
                                                                            DimensionName: "voluptas",
                                                                            Expressions: []string{
                                                                                "voluptates",
                                                                            },
                                                                            MaxComparisonValue: "repellat",
                                                                            MinComparisonValue: "eligendi",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sit",
                                                                            MaxComparisonValue: "optio",
                                                                            MetricName: "atque",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "voluptas",
                                                                            Expressions: []string{
                                                                                "aliquid",
                                                                                "quasi",
                                                                                "impedit",
                                                                            },
                                                                            MaxComparisonValue: "tempora",
                                                                            MinComparisonValue: "consequatur",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "non",
                                                                            MaxComparisonValue: "nesciunt",
                                                                            MetricName: "dolorem",
                                                                            Operator: "EQUAL",
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
                                                                            DimensionName: "perferendis",
                                                                            Expressions: []string{
                                                                                "ut",
                                                                            },
                                                                            MaxComparisonValue: "quas",
                                                                            MinComparisonValue: "qui",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ut",
                                                                            MaxComparisonValue: "qui",
                                                                            MetricName: "harum",
                                                                            Operator: "GREATER_THAN",
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
                                                                            DimensionName: "accusantium",
                                                                            Expressions: []string{
                                                                                "veritatis",
                                                                                "qui",
                                                                                "facere",
                                                                            },
                                                                            MaxComparisonValue: "aut",
                                                                            MinComparisonValue: "nesciunt",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "consequatur",
                                                                            MaxComparisonValue: "praesentium",
                                                                            MetricName: "temporibus",
                                                                            Operator: "EQUAL",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "enim",
                                                                            Expressions: []string{
                                                                                "impedit",
                                                                                "ratione",
                                                                                "adipisci",
                                                                            },
                                                                            MaxComparisonValue: "eius",
                                                                            MinComparisonValue: "quisquam",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quia",
                                                                            MaxComparisonValue: "est",
                                                                            MetricName: "voluptatem",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "ipsum",
                                                                            Expressions: []string{
                                                                                "iusto",
                                                                                "quis",
                                                                            },
                                                                            MaxComparisonValue: "et",
                                                                            MinComparisonValue: "soluta",
                                                                            Operator: "NUMERIC_LESS_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "laborum",
                                                                            MaxComparisonValue: "quibusdam",
                                                                            MetricName: "eum",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
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
                                                                    DimensionName: "voluptatem",
                                                                    Expressions: []string{
                                                                        "est",
                                                                        "natus",
                                                                        "et",
                                                                    },
                                                                    MaxComparisonValue: "ea",
                                                                    MinComparisonValue: "voluptas",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ipsa",
                                                                    MaxComparisonValue: "in",
                                                                    MetricName: "quibusdam",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "nemo",
                                                                    Expressions: []string{
                                                                        "ut",
                                                                        "dicta",
                                                                    },
                                                                    MaxComparisonValue: "inventore",
                                                                    MinComparisonValue: "perspiciatis",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "esse",
                                                                    MaxComparisonValue: "facere",
                                                                    MetricName: "commodi",
                                                                    Operator: "GREATER_THAN",
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
                                                                    DimensionName: "nisi",
                                                                    Expressions: []string{
                                                                        "dolorem",
                                                                    },
                                                                    MaxComparisonValue: "impedit",
                                                                    MinComparisonValue: "laboriosam",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "soluta",
                                                                    MaxComparisonValue: "ut",
                                                                    MetricName: "est",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "aut",
                                                                    Expressions: []string{
                                                                        "dolorum",
                                                                    },
                                                                    MaxComparisonValue: "nostrum",
                                                                    MinComparisonValue: "laboriosam",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "quidem",
                                                                    MaxComparisonValue: "doloribus",
                                                                    MetricName: "at",
                                                                    Operator: "EQUAL",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "quis",
                                                                    Expressions: []string{
                                                                        "tenetur",
                                                                        "alias",
                                                                    },
                                                                    MaxComparisonValue: "similique",
                                                                    MinComparisonValue: "iure",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "et",
                                                                    MaxComparisonValue: "deleniti",
                                                                    MetricName: "laudantium",
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
                                                                    DimensionName: "debitis",
                                                                    Expressions: []string{
                                                                        "minus",
                                                                    },
                                                                    MaxComparisonValue: "sed",
                                                                    MinComparisonValue: "magnam",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "fuga",
                                                                    MaxComparisonValue: "voluptatem",
                                                                    MetricName: "officia",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "nobis",
                                                                    Expressions: []string{
                                                                        "aperiam",
                                                                        "enim",
                                                                    },
                                                                    MaxComparisonValue: "sequi",
                                                                    MinComparisonValue: "laborum",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "aliquid",
                                                                    MaxComparisonValue: "maiores",
                                                                    MetricName: "velit",
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
                                },
                            },
                            SegmentID: "doloremque",
                        },
                    },
                    ViewID: "cum",
                },
                shared.ReportRequest{
                    CohortGroup: &shared.CohortGroup{
                        Cohorts: []shared.Cohort{
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "illum",
                                    StartDate: "enim",
                                },
                                Name: "aspernatur",
                                Type: "UNSPECIFIED_COHORT_TYPE",
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: "quasi",
                                    StartDate: "omnis",
                                },
                                Name: "sapiente",
                                Type: "UNSPECIFIED_COHORT_TYPE",
                            },
                        },
                        LifetimeValue: false,
                    },
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: "et",
                            StartDate: "accusamus",
                        },
                        shared.DateRange{
                            EndDate: "voluptatibus",
                            StartDate: "enim",
                        },
                        shared.DateRange{
                            EndDate: "in",
                            StartDate: "reiciendis",
                        },
                    },
                    DimensionFilterClauses: []shared.DimensionFilterClause{
                        shared.DimensionFilterClause{
                            Filters: []shared.DimensionFilter{
                                shared.DimensionFilter{
                                    CaseSensitive: false,
                                    DimensionName: "fugit",
                                    Expressions: []string{
                                        "fugit",
                                    },
                                    Not: false,
                                    Operator: "PARTIAL",
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: true,
                                    DimensionName: "veritatis",
                                    Expressions: []string{
                                        "possimus",
                                        "ipsum",
                                    },
                                    Not: true,
                                    Operator: "ENDS_WITH",
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: false,
                                    DimensionName: "maiores",
                                    Expressions: []string{
                                        "qui",
                                    },
                                    Not: false,
                                    Operator: "ENDS_WITH",
                                },
                            },
                            Operator: "OR",
                        },
                        shared.DimensionFilterClause{
                            Filters: []shared.DimensionFilter{
                                shared.DimensionFilter{
                                    CaseSensitive: false,
                                    DimensionName: "aut",
                                    Expressions: []string{
                                        "et",
                                    },
                                    Not: true,
                                    Operator: "ENDS_WITH",
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: true,
                                    DimensionName: "natus",
                                    Expressions: []string{
                                        "incidunt",
                                        "voluptatem",
                                    },
                                    Not: false,
                                    Operator: "PARTIAL",
                                },
                            },
                            Operator: "OR",
                        },
                        shared.DimensionFilterClause{
                            Filters: []shared.DimensionFilter{
                                shared.DimensionFilter{
                                    CaseSensitive: true,
                                    DimensionName: "neque",
                                    Expressions: []string{
                                        "et",
                                        "aut",
                                    },
                                    Not: true,
                                    Operator: "BEGINS_WITH",
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: true,
                                    DimensionName: "minus",
                                    Expressions: []string{
                                        "tempora",
                                        "officia",
                                        "ducimus",
                                    },
                                    Not: false,
                                    Operator: "PARTIAL",
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: false,
                                    DimensionName: "nostrum",
                                    Expressions: []string{
                                        "qui",
                                        "enim",
                                        "corporis",
                                    },
                                    Not: true,
                                    Operator: "BEGINS_WITH",
                                },
                            },
                            Operator: "OR",
                        },
                    },
                    Dimensions: []shared.Dimension{
                        shared.Dimension{
                            HistogramBuckets: []string{
                                "consequatur",
                            },
                            Name: "laborum",
                        },
                        shared.Dimension{
                            HistogramBuckets: []string{
                                "laboriosam",
                                "fugiat",
                                "et",
                            },
                            Name: "nesciunt",
                        },
                    },
                    FiltersExpression: "tempore",
                    HideTotals: false,
                    HideValueRanges: false,
                    IncludeEmptyRows: true,
                    MetricFilterClauses: []shared.MetricFilterClause{
                        shared.MetricFilterClause{
                            Filters: []shared.MetricFilter{
                                shared.MetricFilter{
                                    ComparisonValue: "a",
                                    MetricName: "quis",
                                    Not: true,
                                    Operator: "LESS_THAN",
                                },
                            },
                            Operator: "OPERATOR_UNSPECIFIED",
                        },
                        shared.MetricFilterClause{
                            Filters: []shared.MetricFilter{
                                shared.MetricFilter{
                                    ComparisonValue: "est",
                                    MetricName: "blanditiis",
                                    Not: false,
                                    Operator: "LESS_THAN",
                                },
                                shared.MetricFilter{
                                    ComparisonValue: "tempore",
                                    MetricName: "tempore",
                                    Not: false,
                                    Operator: "OPERATOR_UNSPECIFIED",
                                },
                                shared.MetricFilter{
                                    ComparisonValue: "ea",
                                    MetricName: "aut",
                                    Not: true,
                                    Operator: "EQUAL",
                                },
                            },
                            Operator: "OR",
                        },
                        shared.MetricFilterClause{
                            Filters: []shared.MetricFilter{
                                shared.MetricFilter{
                                    ComparisonValue: "atque",
                                    MetricName: "vel",
                                    Not: false,
                                    Operator: "GREATER_THAN",
                                },
                                shared.MetricFilter{
                                    ComparisonValue: "ut",
                                    MetricName: "unde",
                                    Not: false,
                                    Operator: "IS_MISSING",
                                },
                                shared.MetricFilter{
                                    ComparisonValue: "maiores",
                                    MetricName: "repellendus",
                                    Not: false,
                                    Operator: "IS_MISSING",
                                },
                            },
                            Operator: "OR",
                        },
                    },
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Alias: "rem",
                            Expression: "quas",
                            FormattingType: "PERCENT",
                        },
                        shared.Metric{
                            Alias: "saepe",
                            Expression: "harum",
                            FormattingType: "PERCENT",
                        },
                    },
                    OrderBys: []shared.OrderBy{
                        shared.OrderBy{
                            FieldName: "necessitatibus",
                            OrderType: "DIMENSION_AS_INTEGER",
                            SortOrder: "DESCENDING",
                        },
                        shared.OrderBy{
                            FieldName: "eaque",
                            OrderType: "SMART",
                            SortOrder: "ASCENDING",
                        },
                    },
                    PageSize: 6642368765562709634,
                    PageToken: "adipisci",
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            DimensionFilterClauses: []shared.DimensionFilterClause{
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: false,
                                            DimensionName: "sed",
                                            Expressions: []string{
                                                "saepe",
                                            },
                                            Not: true,
                                            Operator: "OPERATOR_UNSPECIFIED",
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: true,
                                            DimensionName: "facere",
                                            Expressions: []string{
                                                "voluptate",
                                                "assumenda",
                                            },
                                            Not: true,
                                            Operator: "ENDS_WITH",
                                        },
                                    },
                                    Operator: "OPERATOR_UNSPECIFIED",
                                },
                            },
                            Dimensions: []shared.Dimension{
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "aut",
                                    },
                                    Name: "ullam",
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "laudantium",
                                    },
                                    Name: "iure",
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "doloribus",
                                        "rem",
                                    },
                                    Name: "sit",
                                },
                            },
                            MaxGroupCount: 2527312800803801365,
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Alias: "quod",
                                    Expression: "ut",
                                    FormattingType: "TIME",
                                },
                                shared.Metric{
                                    Alias: "atque",
                                    Expression: "et",
                                    FormattingType: "METRIC_TYPE_UNSPECIFIED",
                                },
                                shared.Metric{
                                    Alias: "ipsum",
                                    Expression: "dolor",
                                    FormattingType: "INTEGER",
                                },
                            },
                            StartGroup: 7766695469374726972,
                        },
                    },
                    SamplingLevel: "DEFAULT",
                    Segments: []shared.Segment{
                        shared.Segment{
                            DynamicSegment: &shared.DynamicSegment{
                                Name: "fuga",
                                SessionSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
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
                                                                            DimensionName: "atque",
                                                                            Expressions: []string{
                                                                                "qui",
                                                                            },
                                                                            MaxComparisonValue: "voluptas",
                                                                            MinComparisonValue: "sunt",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "est",
                                                                            MaxComparisonValue: "excepturi",
                                                                            MetricName: "vel",
                                                                            Operator: "EQUAL",
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
                                                                    DimensionName: "voluptatibus",
                                                                    Expressions: []string{
                                                                        "nam",
                                                                    },
                                                                    MaxComparisonValue: "dolor",
                                                                    MinComparisonValue: "itaque",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "sapiente",
                                                                    MaxComparisonValue: "molestiae",
                                                                    MetricName: "aut",
                                                                    Operator: "EQUAL",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "incidunt",
                                                                    Expressions: []string{
                                                                        "suscipit",
                                                                        "officiis",
                                                                    },
                                                                    MaxComparisonValue: "cum",
                                                                    MinComparisonValue: "totam",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "quo",
                                                                    MaxComparisonValue: "quos",
                                                                    MetricName: "beatae",
                                                                    Operator: "EQUAL",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "consequatur",
                                                                    Expressions: []string{
                                                                        "distinctio",
                                                                        "ipsam",
                                                                    },
                                                                    MaxComparisonValue: "dolor",
                                                                    MinComparisonValue: "aut",
                                                                    Operator: "IN_LIST",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ullam",
                                                                    MaxComparisonValue: "assumenda",
                                                                    MetricName: "blanditiis",
                                                                    Operator: "EQUAL",
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
                                                                    DimensionName: "est",
                                                                    Expressions: []string{
                                                                        "consequatur",
                                                                        "fugiat",
                                                                    },
                                                                    MaxComparisonValue: "tenetur",
                                                                    MinComparisonValue: "nihil",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "aspernatur",
                                                                    MaxComparisonValue: "dignissimos",
                                                                    MetricName: "inventore",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "optio",
                                                                    Expressions: []string{
                                                                        "ut",
                                                                        "est",
                                                                        "a",
                                                                    },
                                                                    MaxComparisonValue: "id",
                                                                    MinComparisonValue: "facere",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ut",
                                                                    MaxComparisonValue: "voluptatum",
                                                                    MetricName: "alias",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "magni",
                                                                    Expressions: []string{
                                                                        "omnis",
                                                                    },
                                                                    MaxComparisonValue: "velit",
                                                                    MinComparisonValue: "molestiae",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "quia",
                                                                    MaxComparisonValue: "dolor",
                                                                    MetricName: "sit",
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
                                                                    DimensionName: "non",
                                                                    Expressions: []string{
                                                                        "molestias",
                                                                        "voluptas",
                                                                        "deserunt",
                                                                    },
                                                                    MaxComparisonValue: "amet",
                                                                    MinComparisonValue: "optio",
                                                                    Operator: "IN_LIST",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "et",
                                                                    MaxComparisonValue: "dolorem",
                                                                    MetricName: "minus",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "PRODUCT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "quia",
                                                                    Expressions: []string{
                                                                        "sint",
                                                                        "distinctio",
                                                                        "maiores",
                                                                    },
                                                                    MaxComparisonValue: "exercitationem",
                                                                    MinComparisonValue: "sunt",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "nobis",
                                                                    MaxComparisonValue: "quos",
                                                                    MetricName: "facilis",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
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
                                                                            DimensionName: "possimus",
                                                                            Expressions: []string{
                                                                                "eveniet",
                                                                                "alias",
                                                                                "tenetur",
                                                                            },
                                                                            MaxComparisonValue: "dolorem",
                                                                            MinComparisonValue: "porro",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sed",
                                                                            MaxComparisonValue: "cum",
                                                                            MetricName: "repellat",
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
                                                                            CaseSensitive: false,
                                                                            DimensionName: "quisquam",
                                                                            Expressions: []string{
                                                                                "nihil",
                                                                                "laudantium",
                                                                            },
                                                                            MaxComparisonValue: "magni",
                                                                            MinComparisonValue: "vel",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "incidunt",
                                                                            MaxComparisonValue: "qui",
                                                                            MetricName: "magnam",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
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
                                                                            DimensionName: "omnis",
                                                                            Expressions: []string{
                                                                                "labore",
                                                                                "sapiente",
                                                                                "accusamus",
                                                                            },
                                                                            MaxComparisonValue: "velit",
                                                                            MinComparisonValue: "amet",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sunt",
                                                                            MaxComparisonValue: "molestias",
                                                                            MetricName: "quis",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "culpa",
                                                                            Expressions: []string{
                                                                                "nihil",
                                                                            },
                                                                            MaxComparisonValue: "aut",
                                                                            MinComparisonValue: "et",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ut",
                                                                            MaxComparisonValue: "alias",
                                                                            MetricName: "qui",
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
                                                                            CaseSensitive: true,
                                                                            DimensionName: "aliquam",
                                                                            Expressions: []string{
                                                                                "repellat",
                                                                                "ut",
                                                                            },
                                                                            MaxComparisonValue: "necessitatibus",
                                                                            MinComparisonValue: "deserunt",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "veritatis",
                                                                            MaxComparisonValue: "sed",
                                                                            MetricName: "praesentium",
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
                                                                            DimensionName: "et",
                                                                            Expressions: []string{
                                                                                "eum",
                                                                                "non",
                                                                            },
                                                                            MaxComparisonValue: "qui",
                                                                            MinComparisonValue: "eum",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "magni",
                                                                            MaxComparisonValue: "illum",
                                                                            MetricName: "occaecati",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "laboriosam",
                                                                            Expressions: []string{
                                                                                "distinctio",
                                                                                "vel",
                                                                                "est",
                                                                            },
                                                                            MaxComparisonValue: "incidunt",
                                                                            MinComparisonValue: "aut",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "molestiae",
                                                                            MaxComparisonValue: "tenetur",
                                                                            MetricName: "nemo",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "voluptatem",
                                                                            Expressions: []string{
                                                                                "excepturi",
                                                                                "maxime",
                                                                                "ipsa",
                                                                            },
                                                                            MaxComparisonValue: "est",
                                                                            MinComparisonValue: "autem",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "recusandae",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "dolorem",
                                                                            Operator: "EQUAL",
                                                                            Scope: "PRODUCT",
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
                                                                            DimensionName: "sit",
                                                                            Expressions: []string{
                                                                                "minima",
                                                                                "eos",
                                                                            },
                                                                            MaxComparisonValue: "accusantium",
                                                                            MinComparisonValue: "minima",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "consectetur",
                                                                            MaxComparisonValue: "est",
                                                                            MetricName: "tempora",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "est",
                                                                            Expressions: []string{
                                                                                "omnis",
                                                                            },
                                                                            MaxComparisonValue: "sint",
                                                                            MinComparisonValue: "quidem",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quae",
                                                                            MaxComparisonValue: "ut",
                                                                            MetricName: "labore",
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
                                                                            DimensionName: "modi",
                                                                            Expressions: []string{
                                                                                "placeat",
                                                                            },
                                                                            MaxComparisonValue: "doloribus",
                                                                            MinComparisonValue: "quibusdam",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sint",
                                                                            MaxComparisonValue: "ipsam",
                                                                            MetricName: "qui",
                                                                            Operator: "GREATER_THAN",
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
                                                                    CaseSensitive: false,
                                                                    DimensionName: "et",
                                                                    Expressions: []string{
                                                                        "sapiente",
                                                                    },
                                                                    MaxComparisonValue: "consequatur",
                                                                    MinComparisonValue: "et",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "dolore",
                                                                    MaxComparisonValue: "dignissimos",
                                                                    MetricName: "quia",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "maxime",
                                                                    Expressions: []string{
                                                                        "aut",
                                                                        "autem",
                                                                    },
                                                                    MaxComparisonValue: "deleniti",
                                                                    MinComparisonValue: "impedit",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "omnis",
                                                                    MaxComparisonValue: "velit",
                                                                    MetricName: "commodi",
                                                                    Operator: "BETWEEN",
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
                                },
                                UserSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
                                        shared.SegmentFilter{
                                            Not: true,
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
                                                                            CaseSensitive: true,
                                                                            DimensionName: "sed",
                                                                            Expressions: []string{
                                                                                "soluta",
                                                                                "vel",
                                                                            },
                                                                            MaxComparisonValue: "fuga",
                                                                            MinComparisonValue: "ut",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "nulla",
                                                                            MaxComparisonValue: "numquam",
                                                                            MetricName: "quia",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "delectus",
                                                                            Expressions: []string{
                                                                                "incidunt",
                                                                                "delectus",
                                                                                "qui",
                                                                            },
                                                                            MaxComparisonValue: "iste",
                                                                            MinComparisonValue: "fuga",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ex",
                                                                            MaxComparisonValue: "magnam",
                                                                            MetricName: "a",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "et",
                                                                            Expressions: []string{
                                                                                "saepe",
                                                                                "dolores",
                                                                                "quasi",
                                                                            },
                                                                            MaxComparisonValue: "recusandae",
                                                                            MinComparisonValue: "numquam",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "occaecati",
                                                                            MaxComparisonValue: "aut",
                                                                            MetricName: "est",
                                                                            Operator: "BETWEEN",
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
                                                                                "consequuntur",
                                                                            },
                                                                            MaxComparisonValue: "exercitationem",
                                                                            MinComparisonValue: "hic",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "porro",
                                                                            MaxComparisonValue: "est",
                                                                            MetricName: "deserunt",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "quam",
                                                                            Expressions: []string{
                                                                                "omnis",
                                                                                "qui",
                                                                                "neque",
                                                                            },
                                                                            MaxComparisonValue: "officia",
                                                                            MinComparisonValue: "quo",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "reprehenderit",
                                                                            MaxComparisonValue: "non",
                                                                            MetricName: "quia",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "aliquid",
                                                                            Expressions: []string{
                                                                                "unde",
                                                                                "ducimus",
                                                                                "ut",
                                                                            },
                                                                            MaxComparisonValue: "dolor",
                                                                            MinComparisonValue: "quidem",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "dolores",
                                                                            MaxComparisonValue: "fuga",
                                                                            MetricName: "et",
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
                                                                            DimensionName: "tenetur",
                                                                            Expressions: []string{
                                                                                "cupiditate",
                                                                                "quia",
                                                                            },
                                                                            MaxComparisonValue: "facere",
                                                                            MinComparisonValue: "sequi",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "enim",
                                                                            MaxComparisonValue: "qui",
                                                                            MetricName: "unde",
                                                                            Operator: "EQUAL",
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
                                                                    DimensionName: "provident",
                                                                    Expressions: []string{
                                                                        "perspiciatis",
                                                                    },
                                                                    MaxComparisonValue: "dolorem",
                                                                    MinComparisonValue: "magni",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "non",
                                                                    MaxComparisonValue: "a",
                                                                    MetricName: "recusandae",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "et",
                                                                    Expressions: []string{
                                                                        "ratione",
                                                                    },
                                                                    MaxComparisonValue: "voluptas",
                                                                    MinComparisonValue: "quas",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "incidunt",
                                                                    MaxComparisonValue: "sapiente",
                                                                    MetricName: "dolore",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "amet",
                                                                    Expressions: []string{
                                                                        "quod",
                                                                        "quisquam",
                                                                    },
                                                                    MaxComparisonValue: "ex",
                                                                    MinComparisonValue: "id",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "non",
                                                                    MaxComparisonValue: "non",
                                                                    MetricName: "quam",
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
                                },
                            },
                            SegmentID: "nisi",
                        },
                        shared.Segment{
                            DynamicSegment: &shared.DynamicSegment{
                                Name: "repudiandae",
                                SessionSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
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
                                                                            DimensionName: "nesciunt",
                                                                            Expressions: []string{
                                                                                "quos",
                                                                            },
                                                                            MaxComparisonValue: "et",
                                                                            MinComparisonValue: "magni",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ad",
                                                                            MaxComparisonValue: "sapiente",
                                                                            MetricName: "at",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "eum",
                                                                            Expressions: []string{
                                                                                "non",
                                                                            },
                                                                            MaxComparisonValue: "corrupti",
                                                                            MinComparisonValue: "nam",
                                                                            Operator: "OPERATOR_UNSPECIFIED",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "adipisci",
                                                                            MaxComparisonValue: "enim",
                                                                            MetricName: "laborum",
                                                                            Operator: "LESS_THAN",
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
                                                                            DimensionName: "doloremque",
                                                                            Expressions: []string{
                                                                                "quaerat",
                                                                            },
                                                                            MaxComparisonValue: "natus",
                                                                            MinComparisonValue: "illo",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "reprehenderit",
                                                                            MaxComparisonValue: "hic",
                                                                            MetricName: "commodi",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "nostrum",
                                                                            Expressions: []string{
                                                                                "iusto",
                                                                                "esse",
                                                                                "architecto",
                                                                            },
                                                                            MaxComparisonValue: "est",
                                                                            MinComparisonValue: "aliquam",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "corporis",
                                                                            MaxComparisonValue: "tempora",
                                                                            MetricName: "quas",
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
                                                                            DimensionName: "doloremque",
                                                                            Expressions: []string{
                                                                                "ut",
                                                                                "omnis",
                                                                            },
                                                                            MaxComparisonValue: "qui",
                                                                            MinComparisonValue: "voluptate",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "numquam",
                                                                            MaxComparisonValue: "voluptates",
                                                                            MetricName: "voluptatem",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "qui",
                                                                            Expressions: []string{
                                                                                "sapiente",
                                                                                "exercitationem",
                                                                            },
                                                                            MaxComparisonValue: "consequatur",
                                                                            MinComparisonValue: "ut",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "repellendus",
                                                                            MaxComparisonValue: "et",
                                                                            MetricName: "harum",
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
                                                                    DimensionName: "amet",
                                                                    Expressions: []string{
                                                                        "quia",
                                                                    },
                                                                    MaxComparisonValue: "nihil",
                                                                    MinComparisonValue: "voluptas",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "quia",
                                                                    MaxComparisonValue: "voluptas",
                                                                    MetricName: "laboriosam",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "soluta",
                                                                    Expressions: []string{
                                                                        "explicabo",
                                                                        "corporis",
                                                                    },
                                                                    MaxComparisonValue: "quia",
                                                                    MinComparisonValue: "sunt",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "placeat",
                                                                    MaxComparisonValue: "voluptatem",
                                                                    MetricName: "voluptas",
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
                                                                        "rerum",
                                                                    },
                                                                    MaxComparisonValue: "natus",
                                                                    MinComparisonValue: "facilis",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "odio",
                                                                    MaxComparisonValue: "fuga",
                                                                    MetricName: "aut",
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
                                                                    CaseSensitive: true,
                                                                    DimensionName: "cupiditate",
                                                                    Expressions: []string{
                                                                        "et",
                                                                    },
                                                                    MaxComparisonValue: "et",
                                                                    MinComparisonValue: "cupiditate",
                                                                    Operator: "NUMERIC_BETWEEN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "vero",
                                                                    MaxComparisonValue: "quis",
                                                                    MetricName: "consequatur",
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
                                                                    CaseSensitive: true,
                                                                    DimensionName: "ad",
                                                                    Expressions: []string{
                                                                        "molestias",
                                                                        "perspiciatis",
                                                                    },
                                                                    MaxComparisonValue: "molestiae",
                                                                    MinComparisonValue: "voluptatem",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "sit",
                                                                    MaxComparisonValue: "aspernatur",
                                                                    MetricName: "molestias",
                                                                    Operator: "EQUAL",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "magni",
                                                                    Expressions: []string{
                                                                        "itaque",
                                                                        "tempora",
                                                                    },
                                                                    MaxComparisonValue: "vitae",
                                                                    MinComparisonValue: "quo",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "iusto",
                                                                    MaxComparisonValue: "dolores",
                                                                    MetricName: "nobis",
                                                                    Operator: "GREATER_THAN",
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
                                                                            DimensionName: "ut",
                                                                            Expressions: []string{
                                                                                "voluptatem",
                                                                            },
                                                                            MaxComparisonValue: "adipisci",
                                                                            MinComparisonValue: "nobis",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "necessitatibus",
                                                                            MaxComparisonValue: "sequi",
                                                                            MetricName: "velit",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "qui",
                                                                            Expressions: []string{
                                                                                "tempora",
                                                                                "voluptatem",
                                                                            },
                                                                            MaxComparisonValue: "dignissimos",
                                                                            MinComparisonValue: "velit",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "vitae",
                                                                            MaxComparisonValue: "quasi",
                                                                            MetricName: "ipsum",
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
                                                                            CaseSensitive: true,
                                                                            DimensionName: "aperiam",
                                                                            Expressions: []string{
                                                                                "aut",
                                                                                "in",
                                                                            },
                                                                            MaxComparisonValue: "eum",
                                                                            MinComparisonValue: "quibusdam",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "totam",
                                                                            MaxComparisonValue: "similique",
                                                                            MetricName: "sunt",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "amet",
                                                                            Expressions: []string{
                                                                                "perspiciatis",
                                                                                "cupiditate",
                                                                                "asperiores",
                                                                            },
                                                                            MaxComparisonValue: "quasi",
                                                                            MinComparisonValue: "eius",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "pariatur",
                                                                            MaxComparisonValue: "eligendi",
                                                                            MetricName: "sit",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "quis",
                                                                            Expressions: []string{
                                                                                "sint",
                                                                                "enim",
                                                                            },
                                                                            MaxComparisonValue: "quia",
                                                                            MinComparisonValue: "voluptatem",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "dolorem",
                                                                            MaxComparisonValue: "beatae",
                                                                            MetricName: "at",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "HIT",
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
                                                                            DimensionName: "aliquam",
                                                                            Expressions: []string{
                                                                                "laboriosam",
                                                                                "totam",
                                                                            },
                                                                            MaxComparisonValue: "atque",
                                                                            MinComparisonValue: "corrupti",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "dolorum",
                                                                            MaxComparisonValue: "placeat",
                                                                            MetricName: "ut",
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
                                                                            DimensionName: "autem",
                                                                            Expressions: []string{
                                                                                "consequatur",
                                                                            },
                                                                            MaxComparisonValue: "delectus",
                                                                            MinComparisonValue: "qui",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quaerat",
                                                                            MaxComparisonValue: "voluptatem",
                                                                            MetricName: "et",
                                                                            Operator: "GREATER_THAN",
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
                                                                            DimensionName: "illo",
                                                                            Expressions: []string{
                                                                                "rerum",
                                                                                "fugit",
                                                                                "impedit",
                                                                            },
                                                                            MaxComparisonValue: "aut",
                                                                            MinComparisonValue: "modi",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "voluptatibus",
                                                                            MaxComparisonValue: "illo",
                                                                            MetricName: "aut",
                                                                            Operator: "UNSPECIFIED_OPERATOR",
                                                                            Scope: "UNSPECIFIED_SCOPE",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "dolor",
                                                                            Expressions: []string{
                                                                                "doloremque",
                                                                            },
                                                                            MaxComparisonValue: "sit",
                                                                            MinComparisonValue: "aspernatur",
                                                                            Operator: "ENDS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "voluptatibus",
                                                                            MaxComparisonValue: "ea",
                                                                            MetricName: "tempora",
                                                                            Operator: "LESS_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "excepturi",
                                                                            Expressions: []string{
                                                                                "animi",
                                                                                "odio",
                                                                            },
                                                                            MaxComparisonValue: "officia",
                                                                            MinComparisonValue: "odio",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sunt",
                                                                            MaxComparisonValue: "corrupti",
                                                                            MetricName: "perspiciatis",
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
                                                                    CaseSensitive: true,
                                                                    DimensionName: "aliquid",
                                                                    Expressions: []string{
                                                                        "atque",
                                                                        "non",
                                                                    },
                                                                    MaxComparisonValue: "dicta",
                                                                    MinComparisonValue: "recusandae",
                                                                    Operator: "IN_LIST",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "inventore",
                                                                    MaxComparisonValue: "natus",
                                                                    MetricName: "voluptatibus",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "dolor",
                                                                    Expressions: []string{
                                                                        "in",
                                                                    },
                                                                    MaxComparisonValue: "dolore",
                                                                    MinComparisonValue: "laudantium",
                                                                    Operator: "REGEXP",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "repellendus",
                                                                    MaxComparisonValue: "corrupti",
                                                                    MetricName: "ex",
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
                                                                            DimensionName: "eos",
                                                                            Expressions: []string{
                                                                                "consectetur",
                                                                                "rerum",
                                                                            },
                                                                            MaxComparisonValue: "magnam",
                                                                            MinComparisonValue: "dicta",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "accusantium",
                                                                            MaxComparisonValue: "architecto",
                                                                            MetricName: "omnis",
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
                                                                    CaseSensitive: false,
                                                                    DimensionName: "laboriosam",
                                                                    Expressions: []string{
                                                                        "dolorem",
                                                                        "et",
                                                                    },
                                                                    MaxComparisonValue: "quibusdam",
                                                                    MinComparisonValue: "cupiditate",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "dolorem",
                                                                    MaxComparisonValue: "quos",
                                                                    MetricName: "deleniti",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "aperiam",
                                                                    Expressions: []string{
                                                                        "accusantium",
                                                                        "fuga",
                                                                    },
                                                                    MaxComparisonValue: "ut",
                                                                    MinComparisonValue: "delectus",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "vitae",
                                                                    MaxComparisonValue: "neque",
                                                                    MetricName: "est",
                                                                    Operator: "LESS_THAN",
                                                                    Scope: "SESSION",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "consectetur",
                                                                    Expressions: []string{
                                                                        "ut",
                                                                        "et",
                                                                        "culpa",
                                                                    },
                                                                    MaxComparisonValue: "officia",
                                                                    MinComparisonValue: "veritatis",
                                                                    Operator: "NUMERIC_GREATER_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ad",
                                                                    MaxComparisonValue: "aut",
                                                                    MetricName: "esse",
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
                                                                    DimensionName: "rerum",
                                                                    Expressions: []string{
                                                                        "debitis",
                                                                        "blanditiis",
                                                                    },
                                                                    MaxComparisonValue: "dolorum",
                                                                    MinComparisonValue: "saepe",
                                                                    Operator: "BEGINS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "eligendi",
                                                                    MaxComparisonValue: "alias",
                                                                    MetricName: "deleniti",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "veniam",
                                                                    Expressions: []string{
                                                                        "inventore",
                                                                        "voluptas",
                                                                    },
                                                                    MaxComparisonValue: "minus",
                                                                    MinComparisonValue: "dicta",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "eum",
                                                                    MaxComparisonValue: "nesciunt",
                                                                    MetricName: "ea",
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
                                UserSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
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
                                                                            CaseSensitive: false,
                                                                            DimensionName: "facere",
                                                                            Expressions: []string{
                                                                                "accusamus",
                                                                                "placeat",
                                                                            },
                                                                            MaxComparisonValue: "qui",
                                                                            MinComparisonValue: "natus",
                                                                            Operator: "NUMERIC_BETWEEN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "iure",
                                                                            MaxComparisonValue: "exercitationem",
                                                                            MetricName: "delectus",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "ducimus",
                                                                            Expressions: []string{
                                                                                "modi",
                                                                            },
                                                                            MaxComparisonValue: "amet",
                                                                            MinComparisonValue: "modi",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "incidunt",
                                                                            MaxComparisonValue: "ab",
                                                                            MetricName: "sequi",
                                                                            Operator: "GREATER_THAN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: true,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "hic",
                                                                            Expressions: []string{
                                                                                "id",
                                                                            },
                                                                            MaxComparisonValue: "in",
                                                                            MinComparisonValue: "doloribus",
                                                                            Operator: "IN_LIST",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "occaecati",
                                                                            MaxComparisonValue: "iste",
                                                                            MetricName: "asperiores",
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
                                                                            DimensionName: "sint",
                                                                            Expressions: []string{
                                                                                "consequatur",
                                                                                "adipisci",
                                                                            },
                                                                            MaxComparisonValue: "quod",
                                                                            MinComparisonValue: "sed",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ipsum",
                                                                            MaxComparisonValue: "saepe",
                                                                            MetricName: "velit",
                                                                            Operator: "EQUAL",
                                                                            Scope: "PRODUCT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "rem",
                                                                            Expressions: []string{
                                                                                "sint",
                                                                                "quia",
                                                                                "adipisci",
                                                                            },
                                                                            MaxComparisonValue: "ad",
                                                                            MinComparisonValue: "et",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "doloribus",
                                                                            MaxComparisonValue: "iste",
                                                                            MetricName: "distinctio",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "voluptatum",
                                                                            Expressions: []string{
                                                                                "consectetur",
                                                                            },
                                                                            MaxComparisonValue: "nihil",
                                                                            MinComparisonValue: "libero",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "possimus",
                                                                            MaxComparisonValue: "non",
                                                                            MetricName: "rerum",
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
                                                                            CaseSensitive: true,
                                                                            DimensionName: "culpa",
                                                                            Expressions: []string{
                                                                                "quae",
                                                                                "incidunt",
                                                                                "voluptas",
                                                                            },
                                                                            MaxComparisonValue: "nam",
                                                                            MinComparisonValue: "optio",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ratione",
                                                                            MaxComparisonValue: "quaerat",
                                                                            MetricName: "qui",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "SESSION",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "cum",
                                                                            Expressions: []string{
                                                                                "maxime",
                                                                                "sunt",
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: "dolore",
                                                                            MinComparisonValue: "placeat",
                                                                            Operator: "BEGINS_WITH",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "ut",
                                                                            MaxComparisonValue: "sapiente",
                                                                            MetricName: "laborum",
                                                                            Operator: "EQUAL",
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
                                                                            DimensionName: "velit",
                                                                            Expressions: []string{
                                                                                "quo",
                                                                                "maiores",
                                                                            },
                                                                            MaxComparisonValue: "nesciunt",
                                                                            MinComparisonValue: "velit",
                                                                            Operator: "EXACT",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "repellat",
                                                                            MaxComparisonValue: "placeat",
                                                                            MetricName: "accusantium",
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
                                                                            DimensionName: "modi",
                                                                            Expressions: []string{
                                                                                "quia",
                                                                                "eaque",
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: "assumenda",
                                                                            MinComparisonValue: "incidunt",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quia",
                                                                            MaxComparisonValue: "unde",
                                                                            MetricName: "ipsam",
                                                                            Operator: "EQUAL",
                                                                            Scope: "USER",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: false,
                                                                            DimensionName: "error",
                                                                            Expressions: []string{
                                                                                "sit",
                                                                                "sapiente",
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: "nobis",
                                                                            MinComparisonValue: "possimus",
                                                                            Operator: "REGEXP",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "illum",
                                                                            MaxComparisonValue: "iusto",
                                                                            MetricName: "sunt",
                                                                            Operator: "EQUAL",
                                                                            Scope: "HIT",
                                                                        },
                                                                        Not: false,
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: true,
                                                                            DimensionName: "esse",
                                                                            Expressions: []string{
                                                                                "non",
                                                                                "nam",
                                                                            },
                                                                            MaxComparisonValue: "enim",
                                                                            MinComparisonValue: "enim",
                                                                            Operator: "NUMERIC_GREATER_THAN",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "quo",
                                                                            MaxComparisonValue: "sint",
                                                                            MetricName: "quis",
                                                                            Operator: "BETWEEN",
                                                                            Scope: "UNSPECIFIED_SCOPE",
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
                                                                            DimensionName: "aperiam",
                                                                            Expressions: []string{
                                                                                "illum",
                                                                                "hic",
                                                                            },
                                                                            MaxComparisonValue: "quisquam",
                                                                            MinComparisonValue: "sit",
                                                                            Operator: "PARTIAL",
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: "sed",
                                                                            MaxComparisonValue: "itaque",
                                                                            MetricName: "qui",
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
                                            SimpleSegment: &shared.SimpleSegment{
                                                OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "illum",
                                                                    Expressions: []string{
                                                                        "eos",
                                                                    },
                                                                    MaxComparisonValue: "asperiores",
                                                                    MinComparisonValue: "dicta",
                                                                    Operator: "NUMERIC_LESS_THAN",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "accusantium",
                                                                    MaxComparisonValue: "omnis",
                                                                    MetricName: "nobis",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "USER",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "expedita",
                                                                    Expressions: []string{
                                                                        "soluta",
                                                                    },
                                                                    MaxComparisonValue: "ut",
                                                                    MinComparisonValue: "aperiam",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "repellendus",
                                                                    MaxComparisonValue: "officia",
                                                                    MetricName: "in",
                                                                    Operator: "UNSPECIFIED_OPERATOR",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: false,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "et",
                                                                    Expressions: []string{
                                                                        "ea",
                                                                        "magnam",
                                                                        "a",
                                                                    },
                                                                    MaxComparisonValue: "nulla",
                                                                    MinComparisonValue: "harum",
                                                                    Operator: "ENDS_WITH",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "quaerat",
                                                                    MaxComparisonValue: "ut",
                                                                    MetricName: "sed",
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
                                                                    DimensionName: "labore",
                                                                    Expressions: []string{
                                                                        "magni",
                                                                        "voluptatum",
                                                                        "minima",
                                                                    },
                                                                    MaxComparisonValue: "necessitatibus",
                                                                    MinComparisonValue: "totam",
                                                                    Operator: "OPERATOR_UNSPECIFIED",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "ea",
                                                                    MaxComparisonValue: "labore",
                                                                    MetricName: "quasi",
                                                                    Operator: "BETWEEN",
                                                                    Scope: "HIT",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: false,
                                                                    DimensionName: "quibusdam",
                                                                    Expressions: []string{
                                                                        "quisquam",
                                                                    },
                                                                    MaxComparisonValue: "est",
                                                                    MinComparisonValue: "necessitatibus",
                                                                    Operator: "PARTIAL",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "dolores",
                                                                    MaxComparisonValue: "perspiciatis",
                                                                    MetricName: "ab",
                                                                    Operator: "GREATER_THAN",
                                                                    Scope: "UNSPECIFIED_SCOPE",
                                                                },
                                                                Not: true,
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: true,
                                                                    DimensionName: "possimus",
                                                                    Expressions: []string{
                                                                        "facere",
                                                                    },
                                                                    MaxComparisonValue: "accusamus",
                                                                    MinComparisonValue: "veritatis",
                                                                    Operator: "EXACT",
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: "praesentium",
                                                                    MaxComparisonValue: "omnis",
                                                                    MetricName: "qui",
                                                                    Operator: "GREATER_THAN",
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
                                },
                            },
                            SegmentID: "nam",
                        },
                    },
                    ViewID: "quia",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### reports

* `AnalyticsreportingReportsBatchGet` - Returns the Analytics data.

### userActivity

* `AnalyticsreportingUserActivitySearch` - Returns User Activity data.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
