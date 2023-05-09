# Reports

### Available Operations

* [AnalyticsreportingReportsBatchGet](#analyticsreportingreportsbatchget) - Returns the Analytics data.

## AnalyticsreportingReportsBatchGet

Returns the Analytics data.

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
    res, err := s.Reports.AnalyticsreportingReportsBatchGet(ctx, operations.AnalyticsreportingReportsBatchGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GetReportsRequest: &shared.GetReportsRequest{
            ReportRequests: []shared.ReportRequest{
                shared.ReportRequest{
                    CohortGroup: &shared.CohortGroup{
                        Cohorts: []shared.Cohort{
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: sdk.String("ut"),
                                    StartDate: sdk.String("officiis"),
                                },
                                Name: sdk.String("Orville Raynor"),
                                Type: shared.CohortTypeEnumFirstVisitDate.ToPointer(),
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: sdk.String("tempore"),
                                    StartDate: sdk.String("reiciendis"),
                                },
                                Name: sdk.String("Betty Jast"),
                                Type: shared.CohortTypeEnumUnspecifiedCohortType.ToPointer(),
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: sdk.String("rem"),
                                    StartDate: sdk.String("molestias"),
                                },
                                Name: sdk.String("Kelley Nader"),
                                Type: shared.CohortTypeEnumUnspecifiedCohortType.ToPointer(),
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: sdk.String("fugiat"),
                                    StartDate: sdk.String("corporis"),
                                },
                                Name: sdk.String("Roland Corkery"),
                                Type: shared.CohortTypeEnumUnspecifiedCohortType.ToPointer(),
                            },
                        },
                        LifetimeValue: sdk.Bool(false),
                    },
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: sdk.String("quam"),
                            StartDate: sdk.String("laudantium"),
                        },
                        shared.DateRange{
                            EndDate: sdk.String("exercitationem"),
                            StartDate: sdk.String("vitae"),
                        },
                        shared.DateRange{
                            EndDate: sdk.String("magnam"),
                            StartDate: sdk.String("blanditiis"),
                        },
                    },
                    DimensionFilterClauses: []shared.DimensionFilterClause{
                        shared.DimensionFilterClause{
                            Filters: []shared.DimensionFilter{
                                shared.DimensionFilter{
                                    CaseSensitive: sdk.Bool(false),
                                    DimensionName: sdk.String("quibusdam"),
                                    Expressions: []string{
                                        "ut",
                                        "cupiditate",
                                    },
                                    Not: sdk.Bool(false),
                                    Operator: shared.DimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: sdk.Bool(false),
                                    DimensionName: sdk.String("minima"),
                                    Expressions: []string{
                                        "consectetur",
                                        "nostrum",
                                    },
                                    Not: sdk.Bool(false),
                                    Operator: shared.DimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                },
                            },
                            Operator: shared.DimensionFilterClauseOperatorEnumOperatorUnspecified.ToPointer(),
                        },
                        shared.DimensionFilterClause{
                            Filters: []shared.DimensionFilter{
                                shared.DimensionFilter{
                                    CaseSensitive: sdk.Bool(false),
                                    DimensionName: sdk.String("expedita"),
                                    Expressions: []string{
                                        "voluptatem",
                                        "maiores",
                                        "unde",
                                        "reprehenderit",
                                    },
                                    Not: sdk.Bool(false),
                                    Operator: shared.DimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                },
                            },
                            Operator: shared.DimensionFilterClauseOperatorEnumAnd.ToPointer(),
                        },
                        shared.DimensionFilterClause{
                            Filters: []shared.DimensionFilter{
                                shared.DimensionFilter{
                                    CaseSensitive: sdk.Bool(false),
                                    DimensionName: sdk.String("magni"),
                                    Expressions: []string{
                                        "quod",
                                        "provident",
                                        "delectus",
                                        "dolore",
                                    },
                                    Not: sdk.Bool(false),
                                    Operator: shared.DimensionFilterOperatorEnumExact.ToPointer(),
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: sdk.Bool(false),
                                    DimensionName: sdk.String("labore"),
                                    Expressions: []string{
                                        "sunt",
                                        "consequuntur",
                                    },
                                    Not: sdk.Bool(false),
                                    Operator: shared.DimensionFilterOperatorEnumEndsWith.ToPointer(),
                                },
                            },
                            Operator: shared.DimensionFilterClauseOperatorEnumAnd.ToPointer(),
                        },
                        shared.DimensionFilterClause{
                            Filters: []shared.DimensionFilter{
                                shared.DimensionFilter{
                                    CaseSensitive: sdk.Bool(false),
                                    DimensionName: sdk.String("minima"),
                                    Expressions: []string{
                                        "ducimus",
                                        "excepturi",
                                        "eum",
                                    },
                                    Not: sdk.Bool(false),
                                    Operator: shared.DimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                },
                                shared.DimensionFilter{
                                    CaseSensitive: sdk.Bool(false),
                                    DimensionName: sdk.String("iure"),
                                    Expressions: []string{
                                        "cumque",
                                        "eaque",
                                    },
                                    Not: sdk.Bool(false),
                                    Operator: shared.DimensionFilterOperatorEnumInList.ToPointer(),
                                },
                            },
                            Operator: shared.DimensionFilterClauseOperatorEnumAnd.ToPointer(),
                        },
                    },
                    Dimensions: []shared.Dimension{
                        shared.Dimension{
                            HistogramBuckets: []string{
                                "sapiente",
                                "perspiciatis",
                            },
                            Name: sdk.String("Miss Kelli Maggio MD"),
                        },
                        shared.Dimension{
                            HistogramBuckets: []string{
                                "eligendi",
                                "unde",
                                "veniam",
                            },
                            Name: sdk.String("Sheldon Buckridge"),
                        },
                        shared.Dimension{
                            HistogramBuckets: []string{
                                "soluta",
                                "nihil",
                            },
                            Name: sdk.String("Ramona Wisoky"),
                        },
                    },
                    FiltersExpression: sdk.String("eveniet"),
                    HideTotals: sdk.Bool(false),
                    HideValueRanges: sdk.Bool(false),
                    IncludeEmptyRows: sdk.Bool(false),
                    MetricFilterClauses: []shared.MetricFilterClause{
                        shared.MetricFilterClause{
                            Filters: []shared.MetricFilter{
                                shared.MetricFilter{
                                    ComparisonValue: sdk.String("explicabo"),
                                    MetricName: sdk.String("architecto"),
                                    Not: sdk.Bool(false),
                                    Operator: shared.MetricFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                },
                                shared.MetricFilter{
                                    ComparisonValue: sdk.String("possimus"),
                                    MetricName: sdk.String("dicta"),
                                    Not: sdk.Bool(false),
                                    Operator: shared.MetricFilterOperatorEnumIsMissing.ToPointer(),
                                },
                            },
                            Operator: shared.MetricFilterClauseOperatorEnumOr.ToPointer(),
                        },
                        shared.MetricFilterClause{
                            Filters: []shared.MetricFilter{
                                shared.MetricFilter{
                                    ComparisonValue: sdk.String("quis"),
                                    MetricName: sdk.String("quos"),
                                    Not: sdk.Bool(false),
                                    Operator: shared.MetricFilterOperatorEnumGreaterThan.ToPointer(),
                                },
                                shared.MetricFilter{
                                    ComparisonValue: sdk.String("cupiditate"),
                                    MetricName: sdk.String("excepturi"),
                                    Not: sdk.Bool(false),
                                    Operator: shared.MetricFilterOperatorEnumIsMissing.ToPointer(),
                                },
                            },
                            Operator: shared.MetricFilterClauseOperatorEnumOr.ToPointer(),
                        },
                    },
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Alias: sdk.String("odit"),
                            Expression: sdk.String("quibusdam"),
                            FormattingType: shared.MetricFormattingTypeEnumMetricTypeUnspecified.ToPointer(),
                        },
                    },
                    OrderBys: []shared.OrderBy{
                        shared.OrderBy{
                            FieldName: sdk.String("optio"),
                            OrderType: shared.OrderByOrderTypeEnumOrderTypeUnspecified.ToPointer(),
                            SortOrder: shared.OrderBySortOrderEnumDescending.ToPointer(),
                        },
                        shared.OrderBy{
                            FieldName: sdk.String("excepturi"),
                            OrderType: shared.OrderByOrderTypeEnumValue.ToPointer(),
                            SortOrder: shared.OrderBySortOrderEnumSortOrderUnspecified.ToPointer(),
                        },
                        shared.OrderBy{
                            FieldName: sdk.String("voluptatum"),
                            OrderType: shared.OrderByOrderTypeEnumDelta.ToPointer(),
                            SortOrder: shared.OrderBySortOrderEnumDescending.ToPointer(),
                        },
                    },
                    PageSize: sdk.Int(599413),
                    PageToken: sdk.String("maxime"),
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            DimensionFilterClauses: []shared.DimensionFilterClause{
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            DimensionName: sdk.String("doloremque"),
                                            Expressions: []string{
                                                "quia",
                                                "quibusdam",
                                            },
                                            Not: sdk.Bool(false),
                                            Operator: shared.DimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            DimensionName: sdk.String("voluptate"),
                                            Expressions: []string{
                                                "est",
                                                "est",
                                                "placeat",
                                                "occaecati",
                                            },
                                            Not: sdk.Bool(false),
                                            Operator: shared.DimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            DimensionName: sdk.String("modi"),
                                            Expressions: []string{
                                                "id",
                                                "culpa",
                                                "beatae",
                                                "quod",
                                            },
                                            Not: sdk.Bool(false),
                                            Operator: shared.DimensionFilterOperatorEnumInList.ToPointer(),
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            DimensionName: sdk.String("eveniet"),
                                            Expressions: []string{
                                                "saepe",
                                                "illo",
                                                "minima",
                                            },
                                            Not: sdk.Bool(false),
                                            Operator: shared.DimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                        },
                                    },
                                    Operator: shared.DimensionFilterClauseOperatorEnumAnd.ToPointer(),
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            DimensionName: sdk.String("ipsa"),
                                            Expressions: []string{
                                                "natus",
                                            },
                                            Not: sdk.Bool(false),
                                            Operator: shared.DimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            DimensionName: sdk.String("ducimus"),
                                            Expressions: []string{
                                                "amet",
                                                "ducimus",
                                                "deleniti",
                                                "dolor",
                                            },
                                            Not: sdk.Bool(false),
                                            Operator: shared.DimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            DimensionName: sdk.String("sint"),
                                            Expressions: []string{
                                                "sequi",
                                                "fugiat",
                                                "eius",
                                            },
                                            Not: sdk.Bool(false),
                                            Operator: shared.DimensionFilterOperatorEnumRegexp.ToPointer(),
                                        },
                                    },
                                    Operator: shared.DimensionFilterClauseOperatorEnumAnd.ToPointer(),
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            DimensionName: sdk.String("aliquam"),
                                            Expressions: []string{
                                                "voluptatum",
                                                "corporis",
                                                "dolore",
                                            },
                                            Not: sdk.Bool(false),
                                            Operator: shared.DimensionFilterOperatorEnumPartial.ToPointer(),
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            DimensionName: sdk.String("commodi"),
                                            Expressions: []string{
                                                "provident",
                                                "iusto",
                                            },
                                            Not: sdk.Bool(false),
                                            Operator: shared.DimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                        },
                                    },
                                    Operator: shared.DimensionFilterClauseOperatorEnumOr.ToPointer(),
                                },
                            },
                            Dimensions: []shared.Dimension{
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "dolorem",
                                    },
                                    Name: sdk.String("Jody Block"),
                                },
                            },
                            MaxGroupCount: sdk.Int(112399),
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Alias: sdk.String("veniam"),
                                    Expression: sdk.String("et"),
                                    FormattingType: shared.MetricFormattingTypeEnumPercent.ToPointer(),
                                },
                                shared.Metric{
                                    Alias: sdk.String("animi"),
                                    Expression: sdk.String("mollitia"),
                                    FormattingType: shared.MetricFormattingTypeEnumFloat.ToPointer(),
                                },
                                shared.Metric{
                                    Alias: sdk.String("illum"),
                                    Expression: sdk.String("at"),
                                    FormattingType: shared.MetricFormattingTypeEnumTime.ToPointer(),
                                },
                                shared.Metric{
                                    Alias: sdk.String("nemo"),
                                    Expression: sdk.String("laborum"),
                                    FormattingType: shared.MetricFormattingTypeEnumPercent.ToPointer(),
                                },
                            },
                            StartGroup: sdk.Int(860224),
                        },
                        shared.Pivot{
                            DimensionFilterClauses: []shared.DimensionFilterClause{
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            DimensionName: sdk.String("atque"),
                                            Expressions: []string{
                                                "quo",
                                                "enim",
                                            },
                                            Not: sdk.Bool(false),
                                            Operator: shared.DimensionFilterOperatorEnumInList.ToPointer(),
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            DimensionName: sdk.String("impedit"),
                                            Expressions: []string{
                                                "nobis",
                                            },
                                            Not: sdk.Bool(false),
                                            Operator: shared.DimensionFilterOperatorEnumExact.ToPointer(),
                                        },
                                    },
                                    Operator: shared.DimensionFilterClauseOperatorEnumOr.ToPointer(),
                                },
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            DimensionName: sdk.String("est"),
                                            Expressions: []string{
                                                "aut",
                                            },
                                            Not: sdk.Bool(false),
                                            Operator: shared.DimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                        },
                                    },
                                    Operator: shared.DimensionFilterClauseOperatorEnumAnd.ToPointer(),
                                },
                            },
                            Dimensions: []shared.Dimension{
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "perspiciatis",
                                        "saepe",
                                    },
                                    Name: sdk.String("Mrs. Sarah Berge"),
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "dolor",
                                        "alias",
                                    },
                                    Name: sdk.String("Taylor Paucek"),
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "quibusdam",
                                        "accusamus",
                                        "illum",
                                        "blanditiis",
                                    },
                                    Name: sdk.String("Marguerite Ernser"),
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "beatae",
                                        "explicabo",
                                    },
                                    Name: sdk.String("Miss Priscilla Towne"),
                                },
                            },
                            MaxGroupCount: sdk.Int(196495),
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Alias: sdk.String("fuga"),
                                    Expression: sdk.String("quisquam"),
                                    FormattingType: shared.MetricFormattingTypeEnumInteger.ToPointer(),
                                },
                                shared.Metric{
                                    Alias: sdk.String("suscipit"),
                                    Expression: sdk.String("officia"),
                                    FormattingType: shared.MetricFormattingTypeEnumTime.ToPointer(),
                                },
                            },
                            StartGroup: sdk.Int(216972),
                        },
                        shared.Pivot{
                            DimensionFilterClauses: []shared.DimensionFilterClause{
                                shared.DimensionFilterClause{
                                    Filters: []shared.DimensionFilter{
                                        shared.DimensionFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            DimensionName: sdk.String("itaque"),
                                            Expressions: []string{
                                                "provident",
                                                "dignissimos",
                                                "dicta",
                                                "id",
                                            },
                                            Not: sdk.Bool(false),
                                            Operator: shared.DimensionFilterOperatorEnumExact.ToPointer(),
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            DimensionName: sdk.String("repellat"),
                                            Expressions: []string{
                                                "ex",
                                                "nobis",
                                            },
                                            Not: sdk.Bool(false),
                                            Operator: shared.DimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                        },
                                        shared.DimensionFilter{
                                            CaseSensitive: sdk.Bool(false),
                                            DimensionName: sdk.String("mollitia"),
                                            Expressions: []string{
                                                "quae",
                                            },
                                            Not: sdk.Bool(false),
                                            Operator: shared.DimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                        },
                                    },
                                    Operator: shared.DimensionFilterClauseOperatorEnumOr.ToPointer(),
                                },
                            },
                            Dimensions: []shared.Dimension{
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "omnis",
                                        "ea",
                                        "ipsam",
                                        "soluta",
                                    },
                                    Name: sdk.String("Evelyn Braun IV"),
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "tenetur",
                                        "deleniti",
                                        "deleniti",
                                        "necessitatibus",
                                    },
                                    Name: sdk.String("Jackie Witting"),
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "occaecati",
                                        "officia",
                                        "nemo",
                                    },
                                    Name: sdk.String("Laura Murray"),
                                },
                                shared.Dimension{
                                    HistogramBuckets: []string{
                                        "eveniet",
                                        "possimus",
                                    },
                                    Name: sdk.String("Paula Frami"),
                                },
                            },
                            MaxGroupCount: sdk.Int(37563),
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Alias: sdk.String("officiis"),
                                    Expression: sdk.String("laudantium"),
                                    FormattingType: shared.MetricFormattingTypeEnumPercent.ToPointer(),
                                },
                                shared.Metric{
                                    Alias: sdk.String("fuga"),
                                    Expression: sdk.String("autem"),
                                    FormattingType: shared.MetricFormattingTypeEnumFloat.ToPointer(),
                                },
                                shared.Metric{
                                    Alias: sdk.String("modi"),
                                    Expression: sdk.String("consectetur"),
                                    FormattingType: shared.MetricFormattingTypeEnumInteger.ToPointer(),
                                },
                                shared.Metric{
                                    Alias: sdk.String("officia"),
                                    Expression: sdk.String("cupiditate"),
                                    FormattingType: shared.MetricFormattingTypeEnumCurrency.ToPointer(),
                                },
                            },
                            StartGroup: sdk.Int(410239),
                        },
                    },
                    SamplingLevel: shared.ReportRequestSamplingLevelEnumLarge.ToPointer(),
                    Segments: []shared.Segment{
                        shared.Segment{
                            DynamicSegment: &shared.DynamicSegment{
                                Name: sdk.String("Tricia Brekke"),
                                SessionSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
                                        shared.SegmentFilter{
                                            Not: sdk.Bool(false),
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: sdk.Bool(false),
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("atque"),
                                                                            Expressions: []string{
                                                                                "beatae",
                                                                                "nemo",
                                                                                "eaque",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("aut"),
                                                                            MinComparisonValue: sdk.String("natus"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("accusantium"),
                                                                            MaxComparisonValue: sdk.String("et"),
                                                                            MetricName: sdk.String("unde"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("delectus"),
                                                                            Expressions: []string{
                                                                                "laudantium",
                                                                                "earum",
                                                                                "impedit",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("accusamus"),
                                                                            MinComparisonValue: sdk.String("reprehenderit"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("hic"),
                                                                            MaxComparisonValue: sdk.String("occaecati"),
                                                                            MetricName: sdk.String("perferendis"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("consequatur"),
                                                                            Expressions: []string{
                                                                                "dicta",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("sit"),
                                                                            MinComparisonValue: sdk.String("ad"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("sequi"),
                                                                            MaxComparisonValue: sdk.String("laudantium"),
                                                                            MetricName: sdk.String("excepturi"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("quasi"),
                                                                            Expressions: []string{
                                                                                "aspernatur",
                                                                                "quod",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("suscipit"),
                                                                            MinComparisonValue: sdk.String("tempore"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("harum"),
                                                                            MaxComparisonValue: sdk.String("nisi"),
                                                                            MetricName: sdk.String("blanditiis"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumImmediatelyPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("ducimus"),
                                                                            Expressions: []string{
                                                                                "in",
                                                                                "at",
                                                                                "alias",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("consectetur"),
                                                                            MinComparisonValue: sdk.String("mollitia"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("numquam"),
                                                                            MaxComparisonValue: sdk.String("praesentium"),
                                                                            MetricName: sdk.String("aperiam"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("at"),
                                                                            Expressions: []string{
                                                                                "ipsum",
                                                                                "voluptatem",
                                                                                "tenetur",
                                                                                "aut",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("ex"),
                                                                            MinComparisonValue: sdk.String("cupiditate"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("atque"),
                                                                            MaxComparisonValue: sdk.String("beatae"),
                                                                            MetricName: sdk.String("aut"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("temporibus"),
                                                                            Expressions: []string{
                                                                                "voluptate",
                                                                                "debitis",
                                                                                "sunt",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("ad"),
                                                                            MinComparisonValue: sdk.String("quia"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("iste"),
                                                                            MaxComparisonValue: sdk.String("molestiae"),
                                                                            MetricName: sdk.String("minima"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("quibusdam"),
                                                                            Expressions: []string{
                                                                                "voluptatum",
                                                                                "voluptatem",
                                                                                "amet",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("vitae"),
                                                                            MinComparisonValue: sdk.String("explicabo"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("provident"),
                                                                            MaxComparisonValue: sdk.String("fugit"),
                                                                            MetricName: sdk.String("nobis"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("quasi"),
                                                                            Expressions: []string{
                                                                                "sed",
                                                                                "laborum",
                                                                                "in",
                                                                                "eaque",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("odit"),
                                                                            MinComparisonValue: sdk.String("distinctio"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("sint"),
                                                                            MaxComparisonValue: sdk.String("odio"),
                                                                            MetricName: sdk.String("repudiandae"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
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
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("fugiat"),
                                                                    Expressions: []string{
                                                                        "sed",
                                                                        "fugiat",
                                                                        "recusandae",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("neque"),
                                                                    MinComparisonValue: sdk.String("minima"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("praesentium"),
                                                                    MaxComparisonValue: sdk.String("officiis"),
                                                                    MetricName: sdk.String("sit"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: sdk.Bool(false),
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: sdk.Bool(false),
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumUnspecifiedMatchType.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("similique"),
                                                                            Expressions: []string{
                                                                                "quidem",
                                                                                "ut",
                                                                                "veniam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("eius"),
                                                                            MinComparisonValue: sdk.String("quae"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("dolorum"),
                                                                            MaxComparisonValue: sdk.String("quod"),
                                                                            MetricName: sdk.String("sunt"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("incidunt"),
                                                                            Expressions: []string{
                                                                                "a",
                                                                                "vitae",
                                                                                "maxime",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("placeat"),
                                                                            MinComparisonValue: sdk.String("cupiditate"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("maxime"),
                                                                            MaxComparisonValue: sdk.String("ex"),
                                                                            MetricName: sdk.String("dicta"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("itaque"),
                                                                            Expressions: []string{
                                                                                "voluptates",
                                                                                "harum",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("quaerat"),
                                                                            MinComparisonValue: sdk.String("delectus"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("porro"),
                                                                            MaxComparisonValue: sdk.String("labore"),
                                                                            MetricName: sdk.String("molestias"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("ullam"),
                                                                            Expressions: []string{
                                                                                "ut",
                                                                                "incidunt",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("quibusdam"),
                                                                            MinComparisonValue: sdk.String("doloremque"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("dolorum"),
                                                                            MaxComparisonValue: sdk.String("explicabo"),
                                                                            MetricName: sdk.String("odit"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("debitis"),
                                                                            Expressions: []string{
                                                                                "omnis",
                                                                                "repudiandae",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("ipsum"),
                                                                            MinComparisonValue: sdk.String("minus"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("illo"),
                                                                            MaxComparisonValue: sdk.String("est"),
                                                                            MetricName: sdk.String("placeat"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("tempore"),
                                                                            Expressions: []string{
                                                                                "cumque",
                                                                                "distinctio",
                                                                                "rem",
                                                                                "consectetur",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("nulla"),
                                                                            MinComparisonValue: sdk.String("magni"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("esse"),
                                                                            MaxComparisonValue: sdk.String("deleniti"),
                                                                            MetricName: sdk.String("mollitia"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("facilis"),
                                                                            Expressions: []string{
                                                                                "maxime",
                                                                                "sed",
                                                                                "dolor",
                                                                                "nulla",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("sint"),
                                                                            MinComparisonValue: sdk.String("eius"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("aperiam"),
                                                                            MaxComparisonValue: sdk.String("animi"),
                                                                            MetricName: sdk.String("unde"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("error"),
                                                                            Expressions: []string{
                                                                                "natus",
                                                                                "ad",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("cum"),
                                                                            MinComparisonValue: sdk.String("dolorum"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("nihil"),
                                                                            MaxComparisonValue: sdk.String("quae"),
                                                                            MetricName: sdk.String("ducimus"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("rerum"),
                                                                            Expressions: []string{
                                                                                "laudantium",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("repudiandae"),
                                                                            MinComparisonValue: sdk.String("minus"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("atque"),
                                                                            MaxComparisonValue: sdk.String("autem"),
                                                                            MetricName: sdk.String("eius"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("amet"),
                                                                            Expressions: []string{
                                                                                "commodi",
                                                                                "a",
                                                                                "aliquid",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("qui"),
                                                                            MinComparisonValue: sdk.String("eligendi"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("eum"),
                                                                            MaxComparisonValue: sdk.String("sint"),
                                                                            MetricName: sdk.String("eligendi"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("laboriosam"),
                                                                            Expressions: []string{
                                                                                "reprehenderit",
                                                                                "praesentium",
                                                                                "totam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("error"),
                                                                            MinComparisonValue: sdk.String("alias"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("sequi"),
                                                                            MaxComparisonValue: sdk.String("sapiente"),
                                                                            MetricName: sdk.String("illum"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("corrupti"),
                                                                            Expressions: []string{
                                                                                "quibusdam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("culpa"),
                                                                            MinComparisonValue: sdk.String("dicta"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("asperiores"),
                                                                            MaxComparisonValue: sdk.String("deleniti"),
                                                                            MetricName: sdk.String("optio"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("fugiat"),
                                                                            Expressions: []string{
                                                                                "iste",
                                                                                "amet",
                                                                                "quae",
                                                                                "pariatur",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("officia"),
                                                                            MinComparisonValue: sdk.String("velit"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("facere"),
                                                                            MaxComparisonValue: sdk.String("tempore"),
                                                                            MetricName: sdk.String("minima"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("est"),
                                                                            Expressions: []string{
                                                                                "iste",
                                                                                "numquam",
                                                                                "similique",
                                                                                "optio",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("minus"),
                                                                            MinComparisonValue: sdk.String("sint"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("consectetur"),
                                                                            MaxComparisonValue: sdk.String("ullam"),
                                                                            MetricName: sdk.String("dicta"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("quibusdam"),
                                                                            Expressions: []string{
                                                                                "ad",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("velit"),
                                                                            MinComparisonValue: sdk.String("quia"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("nam"),
                                                                            MaxComparisonValue: sdk.String("quos"),
                                                                            MetricName: sdk.String("velit"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("minima"),
                                                                            Expressions: []string{
                                                                                "facere",
                                                                                "laboriosam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("sint"),
                                                                            MinComparisonValue: sdk.String("architecto"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("alias"),
                                                                            MaxComparisonValue: sdk.String("hic"),
                                                                            MetricName: sdk.String("tenetur"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumImmediatelyPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("fuga"),
                                                                            Expressions: []string{
                                                                                "autem",
                                                                                "nostrum",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("atque"),
                                                                            MinComparisonValue: sdk.String("saepe"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("molestias"),
                                                                            MaxComparisonValue: sdk.String("fuga"),
                                                                            MetricName: sdk.String("non"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("ut"),
                                                                            Expressions: []string{
                                                                                "illum",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("adipisci"),
                                                                            MinComparisonValue: sdk.String("totam"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("quibusdam"),
                                                                            MaxComparisonValue: sdk.String("harum"),
                                                                            MetricName: sdk.String("itaque"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("ad"),
                                                                            Expressions: []string{
                                                                                "ea",
                                                                                "corrupti",
                                                                                "minus",
                                                                                "autem",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("aut"),
                                                                            MinComparisonValue: sdk.String("nisi"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("cupiditate"),
                                                                            MaxComparisonValue: sdk.String("aliquam"),
                                                                            MetricName: sdk.String("suscipit"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("neque"),
                                                                            Expressions: []string{
                                                                                "tempora",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("quibusdam"),
                                                                            MinComparisonValue: sdk.String("deleniti"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("magnam"),
                                                                            MaxComparisonValue: sdk.String("cupiditate"),
                                                                            MetricName: sdk.String("expedita"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("explicabo"),
                                                                            Expressions: []string{
                                                                                "incidunt",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("eligendi"),
                                                                            MinComparisonValue: sdk.String("amet"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("nihil"),
                                                                            MaxComparisonValue: sdk.String("hic"),
                                                                            MetricName: sdk.String("occaecati"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("cum"),
                                                                            Expressions: []string{
                                                                                "porro",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("vel"),
                                                                            MinComparisonValue: sdk.String("omnis"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("adipisci"),
                                                                            MaxComparisonValue: sdk.String("quam"),
                                                                            MetricName: sdk.String("fugit"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("vitae"),
                                                                            Expressions: []string{
                                                                                "labore",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("incidunt"),
                                                                            MinComparisonValue: sdk.String("tempore"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("error"),
                                                                            MaxComparisonValue: sdk.String("doloribus"),
                                                                            MetricName: sdk.String("reprehenderit"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("impedit"),
                                                                            Expressions: []string{
                                                                                "necessitatibus",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("facere"),
                                                                            MinComparisonValue: sdk.String("reprehenderit"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("officia"),
                                                                            MaxComparisonValue: sdk.String("soluta"),
                                                                            MetricName: sdk.String("suscipit"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("unde"),
                                                                            Expressions: []string{
                                                                                "aspernatur",
                                                                                "ea",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("architecto"),
                                                                            MinComparisonValue: sdk.String("earum"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("alias"),
                                                                            MaxComparisonValue: sdk.String("quod"),
                                                                            MetricName: sdk.String("veniam"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
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
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("nobis"),
                                                                    Expressions: []string{
                                                                        "beatae",
                                                                        "cupiditate",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("cupiditate"),
                                                                    MinComparisonValue: sdk.String("ex"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("minima"),
                                                                    MaxComparisonValue: sdk.String("expedita"),
                                                                    MetricName: sdk.String("modi"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("accusantium"),
                                                                    Expressions: []string{
                                                                        "saepe",
                                                                        "sapiente",
                                                                        "iusto",
                                                                        "quasi",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("odit"),
                                                                    MinComparisonValue: sdk.String("tempore"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("animi"),
                                                                    MaxComparisonValue: sdk.String("ducimus"),
                                                                    MetricName: sdk.String("similique"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: sdk.Bool(false),
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: sdk.Bool(false),
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumUnspecifiedMatchType.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("inventore"),
                                                                            Expressions: []string{
                                                                                "vitae",
                                                                                "sit",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("autem"),
                                                                            MinComparisonValue: sdk.String("rem"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("illum"),
                                                                            MaxComparisonValue: sdk.String("necessitatibus"),
                                                                            MetricName: sdk.String("vero"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("asperiores"),
                                                                            Expressions: []string{
                                                                                "perspiciatis",
                                                                                "quam",
                                                                                "earum",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("velit"),
                                                                            MinComparisonValue: sdk.String("fugiat"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("voluptatem"),
                                                                            MaxComparisonValue: sdk.String("quod"),
                                                                            MetricName: sdk.String("minus"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("amet"),
                                                                            Expressions: []string{
                                                                                "quasi",
                                                                                "dicta",
                                                                                "rerum",
                                                                                "neque",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("voluptates"),
                                                                            MinComparisonValue: sdk.String("aliquam"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("alias"),
                                                                            MaxComparisonValue: sdk.String("voluptatum"),
                                                                            MetricName: sdk.String("aut"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("ipsa"),
                                                                            Expressions: []string{
                                                                                "architecto",
                                                                                "deleniti",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("eum"),
                                                                            MinComparisonValue: sdk.String("accusamus"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("odio"),
                                                                            MaxComparisonValue: sdk.String("ullam"),
                                                                            MetricName: sdk.String("provident"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
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
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("dolor"),
                                                                    Expressions: []string{
                                                                        "doloremque",
                                                                        "consequuntur",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("maxime"),
                                                                    MinComparisonValue: sdk.String("quis"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("laudantium"),
                                                                    MaxComparisonValue: sdk.String("recusandae"),
                                                                    MetricName: sdk.String("odit"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("consequatur"),
                                                                    Expressions: []string{
                                                                        "culpa",
                                                                        "at",
                                                                        "dolorem",
                                                                        "sunt",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("ipsa"),
                                                                    MinComparisonValue: sdk.String("incidunt"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("culpa"),
                                                                    MaxComparisonValue: sdk.String("dolore"),
                                                                    MetricName: sdk.String("eius"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("molestiae"),
                                                                    Expressions: []string{
                                                                        "voluptatibus",
                                                                        "sequi",
                                                                        "ducimus",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("minima"),
                                                                    MinComparisonValue: sdk.String("libero"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("tempora"),
                                                                    MaxComparisonValue: sdk.String("sed"),
                                                                    MetricName: sdk.String("quas"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("fugit"),
                                                                    Expressions: []string{
                                                                        "reiciendis",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("nulla"),
                                                                    MinComparisonValue: sdk.String("libero"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("hic"),
                                                                    MaxComparisonValue: sdk.String("eum"),
                                                                    MetricName: sdk.String("sint"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
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
                                            Not: sdk.Bool(false),
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: sdk.Bool(false),
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("dignissimos"),
                                                                            Expressions: []string{
                                                                                "quo",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("optio"),
                                                                            MinComparisonValue: sdk.String("voluptatum"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("sequi"),
                                                                            MaxComparisonValue: sdk.String("quo"),
                                                                            MetricName: sdk.String("facere"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("quis"),
                                                                            Expressions: []string{
                                                                                "temporibus",
                                                                                "doloremque",
                                                                                "amet",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("ipsam"),
                                                                            MinComparisonValue: sdk.String("deleniti"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("quas"),
                                                                            MaxComparisonValue: sdk.String("odit"),
                                                                            MetricName: sdk.String("placeat"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("atque"),
                                                                            Expressions: []string{
                                                                                "eveniet",
                                                                                "odit",
                                                                                "quam",
                                                                                "ullam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("inventore"),
                                                                            MinComparisonValue: sdk.String("laborum"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("perferendis"),
                                                                            MaxComparisonValue: sdk.String("incidunt"),
                                                                            MetricName: sdk.String("ducimus"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("numquam"),
                                                                            Expressions: []string{
                                                                                "omnis",
                                                                                "repudiandae",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("inventore"),
                                                                            MinComparisonValue: sdk.String("quaerat"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("hic"),
                                                                            MaxComparisonValue: sdk.String("natus"),
                                                                            MetricName: sdk.String("laboriosam"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("cum"),
                                                                            Expressions: []string{
                                                                                "repellendus",
                                                                                "incidunt",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("aperiam"),
                                                                            MinComparisonValue: sdk.String("vero"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("laborum"),
                                                                            MaxComparisonValue: sdk.String("quae"),
                                                                            MetricName: sdk.String("quae"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("modi"),
                                                                            Expressions: []string{
                                                                                "autem",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("repudiandae"),
                                                                            MinComparisonValue: sdk.String("commodi"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("exercitationem"),
                                                                            MaxComparisonValue: sdk.String("natus"),
                                                                            MetricName: sdk.String("explicabo"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("hic"),
                                                                            Expressions: []string{
                                                                                "minima",
                                                                                "minus",
                                                                                "provident",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("quibusdam"),
                                                                            MinComparisonValue: sdk.String("explicabo"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("iusto"),
                                                                            MaxComparisonValue: sdk.String("ratione"),
                                                                            MetricName: sdk.String("omnis"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
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
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("nemo"),
                                                                    Expressions: []string{
                                                                        "exercitationem",
                                                                        "nulla",
                                                                        "tempore",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("magnam"),
                                                                    MinComparisonValue: sdk.String("maiores"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("aut"),
                                                                    MaxComparisonValue: sdk.String("voluptatem"),
                                                                    MetricName: sdk.String("vitae"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("reiciendis"),
                                                                    Expressions: []string{
                                                                        "tempore",
                                                                        "vero",
                                                                        "asperiores",
                                                                        "ea",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("voluptate"),
                                                                    MinComparisonValue: sdk.String("aliquid"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("reprehenderit"),
                                                                    MaxComparisonValue: sdk.String("consequuntur"),
                                                                    MetricName: sdk.String("accusantium"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("deserunt"),
                                                                    Expressions: []string{
                                                                        "in",
                                                                        "ad",
                                                                        "voluptatem",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("sit"),
                                                                    MinComparisonValue: sdk.String("enim"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("dolorum"),
                                                                    MaxComparisonValue: sdk.String("ad"),
                                                                    MetricName: sdk.String("nisi"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("fugiat"),
                                                                    Expressions: []string{
                                                                        "tempora",
                                                                        "sequi",
                                                                        "natus",
                                                                        "saepe",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("quibusdam"),
                                                                    MinComparisonValue: sdk.String("corrupti"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("aliquam"),
                                                                    MaxComparisonValue: sdk.String("adipisci"),
                                                                    MetricName: sdk.String("explicabo"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("incidunt"),
                                                                    Expressions: []string{
                                                                        "eos",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("eius"),
                                                                    MinComparisonValue: sdk.String("voluptatem"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("aliquam"),
                                                                    MaxComparisonValue: sdk.String("incidunt"),
                                                                    MetricName: sdk.String("totam"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("porro"),
                                                                    Expressions: []string{
                                                                        "provident",
                                                                        "neque",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("expedita"),
                                                                    MinComparisonValue: sdk.String("excepturi"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("nobis"),
                                                                    MaxComparisonValue: sdk.String("nesciunt"),
                                                                    MetricName: sdk.String("quidem"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("magni"),
                                                                    Expressions: []string{
                                                                        "atque",
                                                                        "blanditiis",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("quibusdam"),
                                                                    MinComparisonValue: sdk.String("odio"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("ad"),
                                                                    MaxComparisonValue: sdk.String("officia"),
                                                                    MetricName: sdk.String("fuga"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: sdk.Bool(false),
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: sdk.Bool(false),
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumImmediatelyPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("corporis"),
                                                                            Expressions: []string{
                                                                                "laboriosam",
                                                                                "omnis",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("tenetur"),
                                                                            MinComparisonValue: sdk.String("vel"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("animi"),
                                                                            MaxComparisonValue: sdk.String("quae"),
                                                                            MetricName: sdk.String("doloremque"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("inventore"),
                                                                            Expressions: []string{
                                                                                "labore",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("perspiciatis"),
                                                                            MinComparisonValue: sdk.String("dolore"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("aut"),
                                                                            MaxComparisonValue: sdk.String("atque"),
                                                                            MetricName: sdk.String("quasi"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("cum"),
                                                                            Expressions: []string{
                                                                                "harum",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("magnam"),
                                                                            MinComparisonValue: sdk.String("illo"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("magnam"),
                                                                            MaxComparisonValue: sdk.String("incidunt"),
                                                                            MetricName: sdk.String("consequatur"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("accusantium"),
                                                                            Expressions: []string{
                                                                                "nesciunt",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("veritatis"),
                                                                            MinComparisonValue: sdk.String("ipsa"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("perferendis"),
                                                                            MaxComparisonValue: sdk.String("qui"),
                                                                            MetricName: sdk.String("velit"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("error"),
                                                                            Expressions: []string{
                                                                                "beatae",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("doloribus"),
                                                                            MinComparisonValue: sdk.String("veniam"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("delectus"),
                                                                            MaxComparisonValue: sdk.String("pariatur"),
                                                                            MetricName: sdk.String("eos"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("quo"),
                                                                            Expressions: []string{
                                                                                "magnam",
                                                                                "praesentium",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("numquam"),
                                                                            MinComparisonValue: sdk.String("iure"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("itaque"),
                                                                            MaxComparisonValue: sdk.String("molestias"),
                                                                            MetricName: sdk.String("assumenda"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("eos"),
                                                                            Expressions: []string{
                                                                                "amet",
                                                                                "nobis",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("quos"),
                                                                            MinComparisonValue: sdk.String("provident"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("consequuntur"),
                                                                            MaxComparisonValue: sdk.String("delectus"),
                                                                            MetricName: sdk.String("quaerat"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("rerum"),
                                                                            Expressions: []string{
                                                                                "ad",
                                                                                "et",
                                                                                "eveniet",
                                                                                "tempora",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("ea"),
                                                                            MinComparisonValue: sdk.String("exercitationem"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("fugiat"),
                                                                            MaxComparisonValue: sdk.String("dolorem"),
                                                                            MetricName: sdk.String("cumque"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("consectetur"),
                                                                            Expressions: []string{
                                                                                "suscipit",
                                                                                "quae",
                                                                                "quam",
                                                                                "dignissimos",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("atque"),
                                                                            MinComparisonValue: sdk.String("animi"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("quaerat"),
                                                                            MaxComparisonValue: sdk.String("excepturi"),
                                                                            MetricName: sdk.String("ab"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("odio"),
                                                                            Expressions: []string{
                                                                                "enim",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("eveniet"),
                                                                            MinComparisonValue: sdk.String("commodi"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("et"),
                                                                            MaxComparisonValue: sdk.String("iste"),
                                                                            MetricName: sdk.String("aut"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("error"),
                                                                            Expressions: []string{
                                                                                "ipsa",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("dolore"),
                                                                            MinComparisonValue: sdk.String("labore"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("ullam"),
                                                                            MaxComparisonValue: sdk.String("quibusdam"),
                                                                            MetricName: sdk.String("recusandae"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("ducimus"),
                                                                            Expressions: []string{
                                                                                "aliquid",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("ea"),
                                                                            MinComparisonValue: sdk.String("odio"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("quisquam"),
                                                                            MaxComparisonValue: sdk.String("delectus"),
                                                                            MetricName: sdk.String("et"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("quis"),
                                                                            Expressions: []string{
                                                                                "consectetur",
                                                                                "qui",
                                                                                "aliquid",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("doloremque"),
                                                                            MinComparisonValue: sdk.String("enim"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("ipsam"),
                                                                            MaxComparisonValue: sdk.String("beatae"),
                                                                            MetricName: sdk.String("repudiandae"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("cum"),
                                                                            Expressions: []string{
                                                                                "quia",
                                                                                "laboriosam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("deleniti"),
                                                                            MinComparisonValue: sdk.String("molestias"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("facere"),
                                                                            MaxComparisonValue: sdk.String("provident"),
                                                                            MetricName: sdk.String("omnis"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("nulla"),
                                                                            Expressions: []string{
                                                                                "amet",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("ipsam"),
                                                                            MinComparisonValue: sdk.String("suscipit"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("ipsa"),
                                                                            MaxComparisonValue: sdk.String("accusamus"),
                                                                            MetricName: sdk.String("error"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("recusandae"),
                                                                            Expressions: []string{
                                                                                "impedit",
                                                                                "reiciendis",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("ad"),
                                                                            MinComparisonValue: sdk.String("perspiciatis"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("dolorem"),
                                                                            MaxComparisonValue: sdk.String("ipsam"),
                                                                            MetricName: sdk.String("voluptatum"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("est"),
                                                                            Expressions: []string{
                                                                                "officia",
                                                                                "officiis",
                                                                                "ratione",
                                                                                "consequuntur",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("neque"),
                                                                            MinComparisonValue: sdk.String("deserunt"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("inventore"),
                                                                            MaxComparisonValue: sdk.String("tempore"),
                                                                            MetricName: sdk.String("maiores"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("laborum"),
                                                                            Expressions: []string{
                                                                                "quod",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("minus"),
                                                                            MinComparisonValue: sdk.String("molestias"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("nihil"),
                                                                            MaxComparisonValue: sdk.String("inventore"),
                                                                            MetricName: sdk.String("ex"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("accusantium"),
                                                                            Expressions: []string{
                                                                                "minus",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("quisquam"),
                                                                            MinComparisonValue: sdk.String("sint"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("alias"),
                                                                            MaxComparisonValue: sdk.String("placeat"),
                                                                            MetricName: sdk.String("in"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("assumenda"),
                                                                            Expressions: []string{
                                                                                "dolores",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("consectetur"),
                                                                            MinComparisonValue: sdk.String("repellat"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("animi"),
                                                                            MaxComparisonValue: sdk.String("est"),
                                                                            MetricName: sdk.String("autem"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("occaecati"),
                                                                            Expressions: []string{
                                                                                "asperiores",
                                                                                "et",
                                                                                "nobis",
                                                                                "quas",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("nemo"),
                                                                            MinComparisonValue: sdk.String("commodi"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("quo"),
                                                                            MaxComparisonValue: sdk.String("libero"),
                                                                            MetricName: sdk.String("id"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("accusamus"),
                                                                            Expressions: []string{
                                                                                "odit",
                                                                                "numquam",
                                                                                "nemo",
                                                                                "numquam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("culpa"),
                                                                            MinComparisonValue: sdk.String("aliquam"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("voluptatibus"),
                                                                            MaxComparisonValue: sdk.String("dolorum"),
                                                                            MetricName: sdk.String("maxime"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("inventore"),
                                                                            Expressions: []string{
                                                                                "optio",
                                                                                "fugiat",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("facere"),
                                                                            MinComparisonValue: sdk.String("exercitationem"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("dolore"),
                                                                            MaxComparisonValue: sdk.String("numquam"),
                                                                            MetricName: sdk.String("officia"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("nisi"),
                                                                            Expressions: []string{
                                                                                "praesentium",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("iusto"),
                                                                            MinComparisonValue: sdk.String("dolorem"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("dignissimos"),
                                                                            MaxComparisonValue: sdk.String("quibusdam"),
                                                                            MetricName: sdk.String("placeat"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumImmediatelyPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("labore"),
                                                                            Expressions: []string{
                                                                                "at",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("impedit"),
                                                                            MinComparisonValue: sdk.String("autem"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("consectetur"),
                                                                            MaxComparisonValue: sdk.String("ea"),
                                                                            MetricName: sdk.String("aspernatur"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("nesciunt"),
                                                                            Expressions: []string{
                                                                                "dolor",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("voluptatum"),
                                                                            MinComparisonValue: sdk.String("doloribus"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("doloremque"),
                                                                            MaxComparisonValue: sdk.String("at"),
                                                                            MetricName: sdk.String("tenetur"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("cum"),
                                                                            Expressions: []string{
                                                                                "magni",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("aspernatur"),
                                                                            MinComparisonValue: sdk.String("earum"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("id"),
                                                                            MaxComparisonValue: sdk.String("exercitationem"),
                                                                            MetricName: sdk.String("commodi"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("quidem"),
                                                                            Expressions: []string{
                                                                                "repellat",
                                                                                "suscipit",
                                                                                "veniam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("consequuntur"),
                                                                            MinComparisonValue: sdk.String("repudiandae"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("libero"),
                                                                            MaxComparisonValue: sdk.String("perspiciatis"),
                                                                            MetricName: sdk.String("illum"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("deleniti"),
                                                                            Expressions: []string{
                                                                                "corrupti",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("ducimus"),
                                                                            MinComparisonValue: sdk.String("molestias"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("fugit"),
                                                                            MaxComparisonValue: sdk.String("labore"),
                                                                            MetricName: sdk.String("neque"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("ratione"),
                                                                            Expressions: []string{
                                                                                "est",
                                                                                "soluta",
                                                                                "neque",
                                                                                "perferendis",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("vero"),
                                                                            MinComparisonValue: sdk.String("excepturi"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("iure"),
                                                                            MaxComparisonValue: sdk.String("doloribus"),
                                                                            MetricName: sdk.String("corporis"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("quibusdam"),
                                                                            Expressions: []string{
                                                                                "alias",
                                                                                "non",
                                                                                "porro",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("voluptatum"),
                                                                            MinComparisonValue: sdk.String("libero"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("quidem"),
                                                                            MaxComparisonValue: sdk.String("soluta"),
                                                                            MetricName: sdk.String("exercitationem"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("magni"),
                                                                            Expressions: []string{
                                                                                "consequuntur",
                                                                                "cum",
                                                                                "aut",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("expedita"),
                                                                            MinComparisonValue: sdk.String("quo"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("libero"),
                                                                            MaxComparisonValue: sdk.String("expedita"),
                                                                            MetricName: sdk.String("odio"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
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
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("labore"),
                                                                    Expressions: []string{
                                                                        "cum",
                                                                        "sunt",
                                                                        "repellendus",
                                                                        "voluptatem",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("non"),
                                                                    MinComparisonValue: sdk.String("ipsum"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("totam"),
                                                                    MaxComparisonValue: sdk.String("facilis"),
                                                                    MetricName: sdk.String("consequatur"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("libero"),
                                                                    Expressions: []string{
                                                                        "architecto",
                                                                        "in",
                                                                        "fuga",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("tenetur"),
                                                                    MinComparisonValue: sdk.String("saepe"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("reprehenderit"),
                                                                    MaxComparisonValue: sdk.String("incidunt"),
                                                                    MetricName: sdk.String("soluta"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("quidem"),
                                                                    Expressions: []string{
                                                                        "labore",
                                                                        "ipsam",
                                                                        "voluptate",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("quod"),
                                                                    MinComparisonValue: sdk.String("nihil"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("illum"),
                                                                    MaxComparisonValue: sdk.String("laborum"),
                                                                    MetricName: sdk.String("reiciendis"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("possimus"),
                                                                    Expressions: []string{
                                                                        "autem",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("tenetur"),
                                                                    MinComparisonValue: sdk.String("rerum"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("odio"),
                                                                    MaxComparisonValue: sdk.String("nisi"),
                                                                    MetricName: sdk.String("hic"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("eum"),
                                                                    Expressions: []string{
                                                                        "quidem",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("sequi"),
                                                                    MinComparisonValue: sdk.String("doloremque"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("debitis"),
                                                                    MaxComparisonValue: sdk.String("consectetur"),
                                                                    MetricName: sdk.String("aperiam"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("quidem"),
                                                                    Expressions: []string{
                                                                        "ipsum",
                                                                        "accusamus",
                                                                        "consectetur",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("tempora"),
                                                                    MinComparisonValue: sdk.String("sequi"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("aliquid"),
                                                                    MaxComparisonValue: sdk.String("placeat"),
                                                                    MetricName: sdk.String("sapiente"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: sdk.Bool(false),
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: sdk.Bool(false),
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumUnspecifiedMatchType.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("consectetur"),
                                                                            Expressions: []string{
                                                                                "ullam",
                                                                                "consectetur",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("porro"),
                                                                            MinComparisonValue: sdk.String("optio"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("vitae"),
                                                                            MaxComparisonValue: sdk.String("quisquam"),
                                                                            MetricName: sdk.String("fugit"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumImmediatelyPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("illum"),
                                                                            Expressions: []string{
                                                                                "minus",
                                                                                "sint",
                                                                                "occaecati",
                                                                                "voluptatem",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("labore"),
                                                                            MinComparisonValue: sdk.String("maxime"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("illo"),
                                                                            MaxComparisonValue: sdk.String("provident"),
                                                                            MetricName: sdk.String("exercitationem"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("suscipit"),
                                                                            Expressions: []string{
                                                                                "praesentium",
                                                                                "optio",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("officiis"),
                                                                            MinComparisonValue: sdk.String("voluptatibus"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("quam"),
                                                                            MaxComparisonValue: sdk.String("deleniti"),
                                                                            MetricName: sdk.String("a"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("eos"),
                                                                            Expressions: []string{
                                                                                "nesciunt",
                                                                                "libero",
                                                                                "error",
                                                                                "perferendis",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("beatae"),
                                                                            MinComparisonValue: sdk.String("saepe"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("sint"),
                                                                            MaxComparisonValue: sdk.String("corporis"),
                                                                            MetricName: sdk.String("explicabo"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("tempora"),
                                                                            Expressions: []string{
                                                                                "harum",
                                                                                "quidem",
                                                                                "inventore",
                                                                                "iste",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("voluptatibus"),
                                                                            MinComparisonValue: sdk.String("odio"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("neque"),
                                                                            MaxComparisonValue: sdk.String("pariatur"),
                                                                            MetricName: sdk.String("excepturi"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("dolore"),
                                                                            Expressions: []string{
                                                                                "nisi",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("molestias"),
                                                                            MinComparisonValue: sdk.String("impedit"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("nesciunt"),
                                                                            MaxComparisonValue: sdk.String("corrupti"),
                                                                            MetricName: sdk.String("in"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("dicta"),
                                                                            Expressions: []string{
                                                                                "vitae",
                                                                                "quos",
                                                                                "eveniet",
                                                                                "officia",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("perspiciatis"),
                                                                            MinComparisonValue: sdk.String("debitis"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("veniam"),
                                                                            MaxComparisonValue: sdk.String("illo"),
                                                                            MetricName: sdk.String("illo"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumUnspecifiedMatchType.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("minima"),
                                                                            Expressions: []string{
                                                                                "tenetur",
                                                                                "libero",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("repellendus"),
                                                                            MinComparisonValue: sdk.String("aliquid"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("rerum"),
                                                                            MaxComparisonValue: sdk.String("beatae"),
                                                                            MetricName: sdk.String("fuga"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("eveniet"),
                                                                            Expressions: []string{
                                                                                "eos",
                                                                                "cupiditate",
                                                                                "est",
                                                                                "occaecati",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("pariatur"),
                                                                            MinComparisonValue: sdk.String("quaerat"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("itaque"),
                                                                            MaxComparisonValue: sdk.String("animi"),
                                                                            MetricName: sdk.String("totam"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("nemo"),
                                                                            Expressions: []string{
                                                                                "optio",
                                                                                "fugit",
                                                                                "at",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("modi"),
                                                                            MinComparisonValue: sdk.String("delectus"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("optio"),
                                                                            MaxComparisonValue: sdk.String("laudantium"),
                                                                            MetricName: sdk.String("quas"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("labore"),
                                                                            Expressions: []string{
                                                                                "aspernatur",
                                                                                "nihil",
                                                                                "quas",
                                                                                "tenetur",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("fugiat"),
                                                                            MinComparisonValue: sdk.String("unde"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("ea"),
                                                                            MaxComparisonValue: sdk.String("molestiae"),
                                                                            MetricName: sdk.String("accusamus"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("corporis"),
                                                                            Expressions: []string{
                                                                                "possimus",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("dolores"),
                                                                            MinComparisonValue: sdk.String("voluptatibus"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("id"),
                                                                            MaxComparisonValue: sdk.String("fuga"),
                                                                            MetricName: sdk.String("ad"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("minus"),
                                                                            Expressions: []string{
                                                                                "repellat",
                                                                                "sed",
                                                                                "ratione",
                                                                                "quaerat",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("minus"),
                                                                            MinComparisonValue: sdk.String("natus"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("veniam"),
                                                                            MaxComparisonValue: sdk.String("tempore"),
                                                                            MetricName: sdk.String("natus"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("repellat"),
                                                                            Expressions: []string{
                                                                                "vitae",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("error"),
                                                                            MinComparisonValue: sdk.String("alias"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("nobis"),
                                                                            MaxComparisonValue: sdk.String("vero"),
                                                                            MetricName: sdk.String("excepturi"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("quisquam"),
                                                                            Expressions: []string{
                                                                                "magni",
                                                                                "dignissimos",
                                                                                "aspernatur",
                                                                                "ullam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("saepe"),
                                                                            MinComparisonValue: sdk.String("impedit"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("suscipit"),
                                                                            MaxComparisonValue: sdk.String("ipsam"),
                                                                            MetricName: sdk.String("error"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("quia"),
                                                                            Expressions: []string{
                                                                                "consequatur",
                                                                                "corrupti",
                                                                                "numquam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("alias"),
                                                                            MinComparisonValue: sdk.String("quod"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("excepturi"),
                                                                            MaxComparisonValue: sdk.String("eveniet"),
                                                                            MetricName: sdk.String("tenetur"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("modi"),
                                                                            Expressions: []string{
                                                                                "cumque",
                                                                                "blanditiis",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("animi"),
                                                                            MinComparisonValue: sdk.String("quibusdam"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("maiores"),
                                                                            MaxComparisonValue: sdk.String("est"),
                                                                            MetricName: sdk.String("optio"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("incidunt"),
                                                                            Expressions: []string{
                                                                                "ipsa",
                                                                                "ipsa",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("quaerat"),
                                                                            MinComparisonValue: sdk.String("nesciunt"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("optio"),
                                                                            MaxComparisonValue: sdk.String("eum"),
                                                                            MetricName: sdk.String("commodi"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("facilis"),
                                                                            Expressions: []string{
                                                                                "dolor",
                                                                                "provident",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("inventore"),
                                                                            MinComparisonValue: sdk.String("sapiente"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("sapiente"),
                                                                            MaxComparisonValue: sdk.String("ipsa"),
                                                                            MetricName: sdk.String("vitae"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("itaque"),
                                                                            Expressions: []string{
                                                                                "beatae",
                                                                                "eveniet",
                                                                                "quas",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("maiores"),
                                                                            MinComparisonValue: sdk.String("voluptate"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("quod"),
                                                                            MaxComparisonValue: sdk.String("ea"),
                                                                            MetricName: sdk.String("error"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
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
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("est"),
                                                                    Expressions: []string{
                                                                        "dignissimos",
                                                                        "debitis",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("quo"),
                                                                    MinComparisonValue: sdk.String("saepe"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("sunt"),
                                                                    MaxComparisonValue: sdk.String("nisi"),
                                                                    MetricName: sdk.String("nulla"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("et"),
                                                                    Expressions: []string{
                                                                        "delectus",
                                                                        "qui",
                                                                        "laboriosam",
                                                                        "neque",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("ab"),
                                                                    MinComparisonValue: sdk.String("quisquam"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("quisquam"),
                                                                    MaxComparisonValue: sdk.String("aperiam"),
                                                                    MetricName: sdk.String("delectus"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("molestias"),
                                                                    Expressions: []string{
                                                                        "dolorem",
                                                                        "sapiente",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("error"),
                                                                    MinComparisonValue: sdk.String("facere"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("eligendi"),
                                                                    MaxComparisonValue: sdk.String("aspernatur"),
                                                                    MetricName: sdk.String("nemo"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("non"),
                                                                    Expressions: []string{
                                                                        "quae",
                                                                        "tempore",
                                                                        "incidunt",
                                                                        "deserunt",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("non"),
                                                                    MinComparisonValue: sdk.String("officia"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("quia"),
                                                                    MaxComparisonValue: sdk.String("ullam"),
                                                                    MetricName: sdk.String("dolor"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("ipsa"),
                                                                    Expressions: []string{
                                                                        "ullam",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("molestiae"),
                                                                    MinComparisonValue: sdk.String("architecto"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("maiores"),
                                                                    MaxComparisonValue: sdk.String("labore"),
                                                                    MetricName: sdk.String("fugit"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            SegmentID: sdk.String("recusandae"),
                        },
                        shared.Segment{
                            DynamicSegment: &shared.DynamicSegment{
                                Name: sdk.String("Mercedes Sauer"),
                                SessionSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
                                        shared.SegmentFilter{
                                            Not: sdk.Bool(false),
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: sdk.Bool(false),
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumImmediatelyPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("recusandae"),
                                                                            Expressions: []string{
                                                                                "architecto",
                                                                                "fuga",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("iusto"),
                                                                            MinComparisonValue: sdk.String("culpa"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("inventore"),
                                                                            MaxComparisonValue: sdk.String("ipsam"),
                                                                            MetricName: sdk.String("impedit"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("odit"),
                                                                            Expressions: []string{
                                                                                "labore",
                                                                                "harum",
                                                                                "dolorum",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("provident"),
                                                                            MinComparisonValue: sdk.String("quibusdam"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("provident"),
                                                                            MaxComparisonValue: sdk.String("omnis"),
                                                                            MetricName: sdk.String("rem"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("perspiciatis"),
                                                                            Expressions: []string{
                                                                                "placeat",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("sapiente"),
                                                                            MinComparisonValue: sdk.String("assumenda"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("eligendi"),
                                                                            MaxComparisonValue: sdk.String("odio"),
                                                                            MetricName: sdk.String("iusto"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumUnspecifiedMatchType.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("vero"),
                                                                            Expressions: []string{
                                                                                "facere",
                                                                                "eius",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("accusamus"),
                                                                            MinComparisonValue: sdk.String("vero"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("recusandae"),
                                                                            MaxComparisonValue: sdk.String("deleniti"),
                                                                            MetricName: sdk.String("nobis"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("distinctio"),
                                                                            Expressions: []string{
                                                                                "porro",
                                                                                "consectetur",
                                                                                "molestias",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("modi"),
                                                                            MinComparisonValue: sdk.String("saepe"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("dolor"),
                                                                            MaxComparisonValue: sdk.String("sint"),
                                                                            MetricName: sdk.String("ea"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("maiores"),
                                                                            Expressions: []string{
                                                                                "quod",
                                                                                "adipisci",
                                                                                "sunt",
                                                                                "quo",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("veniam"),
                                                                            MinComparisonValue: sdk.String("sit"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("qui"),
                                                                            MaxComparisonValue: sdk.String("dolore"),
                                                                            MetricName: sdk.String("possimus"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("deserunt"),
                                                                            Expressions: []string{
                                                                                "eum",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("culpa"),
                                                                            MinComparisonValue: sdk.String("iure"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("sunt"),
                                                                            MaxComparisonValue: sdk.String("facere"),
                                                                            MetricName: sdk.String("dolores"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("rerum"),
                                                                            Expressions: []string{
                                                                                "accusantium",
                                                                                "nihil",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("similique"),
                                                                            MinComparisonValue: sdk.String("est"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("aut"),
                                                                            MaxComparisonValue: sdk.String("placeat"),
                                                                            MetricName: sdk.String("voluptatum"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("dolore"),
                                                                            Expressions: []string{
                                                                                "debitis",
                                                                                "commodi",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("beatae"),
                                                                            MinComparisonValue: sdk.String("voluptate"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("fugiat"),
                                                                            MaxComparisonValue: sdk.String("quidem"),
                                                                            MetricName: sdk.String("iste"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("distinctio"),
                                                                            Expressions: []string{
                                                                                "eaque",
                                                                                "voluptatibus",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("voluptatibus"),
                                                                            MinComparisonValue: sdk.String("cum"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("nisi"),
                                                                            MaxComparisonValue: sdk.String("occaecati"),
                                                                            MetricName: sdk.String("ducimus"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumImmediatelyPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("ipsa"),
                                                                            Expressions: []string{
                                                                                "neque",
                                                                                "autem",
                                                                                "alias",
                                                                                "occaecati",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("iusto"),
                                                                            MinComparisonValue: sdk.String("debitis"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("esse"),
                                                                            MaxComparisonValue: sdk.String("maxime"),
                                                                            MetricName: sdk.String("eos"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("itaque"),
                                                                            Expressions: []string{
                                                                                "vitae",
                                                                                "tempore",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("sit"),
                                                                            MinComparisonValue: sdk.String("quibusdam"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("aut"),
                                                                            MaxComparisonValue: sdk.String("blanditiis"),
                                                                            MetricName: sdk.String("ducimus"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("consequuntur"),
                                                                            Expressions: []string{
                                                                                "est",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("ipsum"),
                                                                            MinComparisonValue: sdk.String("temporibus"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("corrupti"),
                                                                            MaxComparisonValue: sdk.String("ea"),
                                                                            MetricName: sdk.String("sequi"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("est"),
                                                                            Expressions: []string{
                                                                                "corporis",
                                                                                "maxime",
                                                                                "adipisci",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("delectus"),
                                                                            MinComparisonValue: sdk.String("repudiandae"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("nostrum"),
                                                                            MaxComparisonValue: sdk.String("ad"),
                                                                            MetricName: sdk.String("molestiae"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("harum"),
                                                                            Expressions: []string{
                                                                                "reiciendis",
                                                                                "natus",
                                                                                "labore",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("officia"),
                                                                            MinComparisonValue: sdk.String("quam"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("sint"),
                                                                            MaxComparisonValue: sdk.String("rem"),
                                                                            MetricName: sdk.String("a"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("est"),
                                                                            Expressions: []string{
                                                                                "magni",
                                                                                "rem",
                                                                                "assumenda",
                                                                                "libero",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("quia"),
                                                                            MinComparisonValue: sdk.String("porro"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("consequuntur"),
                                                                            MaxComparisonValue: sdk.String("expedita"),
                                                                            MetricName: sdk.String("voluptatibus"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
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
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("vero"),
                                                                    Expressions: []string{
                                                                        "amet",
                                                                        "minima",
                                                                        "ea",
                                                                        "fugiat",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("esse"),
                                                                    MinComparisonValue: sdk.String("officiis"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("modi"),
                                                                    MaxComparisonValue: sdk.String("tempore"),
                                                                    MetricName: sdk.String("dolores"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("fugiat"),
                                                                    Expressions: []string{
                                                                        "voluptatum",
                                                                        "beatae",
                                                                        "natus",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("aliquid"),
                                                                    MinComparisonValue: sdk.String("assumenda"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("quis"),
                                                                    MaxComparisonValue: sdk.String("id"),
                                                                    MetricName: sdk.String("delectus"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("mollitia"),
                                                                    Expressions: []string{
                                                                        "quod",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("labore"),
                                                                    MinComparisonValue: sdk.String("facilis"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("natus"),
                                                                    MaxComparisonValue: sdk.String("fuga"),
                                                                    MetricName: sdk.String("saepe"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("vel"),
                                                                    Expressions: []string{
                                                                        "beatae",
                                                                        "eligendi",
                                                                        "eos",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("dolor"),
                                                                    MinComparisonValue: sdk.String("eligendi"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("omnis"),
                                                                    MaxComparisonValue: sdk.String("fuga"),
                                                                    MetricName: sdk.String("voluptate"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: sdk.Bool(false),
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: sdk.Bool(false),
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumUnspecifiedMatchType.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("distinctio"),
                                                                            Expressions: []string{
                                                                                "dolores",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("impedit"),
                                                                            MinComparisonValue: sdk.String("enim"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("culpa"),
                                                                            MaxComparisonValue: sdk.String("laudantium"),
                                                                            MetricName: sdk.String("fugit"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("necessitatibus"),
                                                                            Expressions: []string{
                                                                                "eos",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("quo"),
                                                                            MinComparisonValue: sdk.String("fugiat"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("optio"),
                                                                            MaxComparisonValue: sdk.String("tempore"),
                                                                            MetricName: sdk.String("est"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("nobis"),
                                                                            Expressions: []string{
                                                                                "necessitatibus",
                                                                                "quisquam",
                                                                                "perspiciatis",
                                                                                "amet",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("consequuntur"),
                                                                            MinComparisonValue: sdk.String("fuga"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("aliquid"),
                                                                            MaxComparisonValue: sdk.String("voluptatum"),
                                                                            MetricName: sdk.String("sunt"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("ea"),
                                                                            Expressions: []string{
                                                                                "nam",
                                                                                "delectus",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("earum"),
                                                                            MinComparisonValue: sdk.String("placeat"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("quod"),
                                                                            MaxComparisonValue: sdk.String("odit"),
                                                                            MetricName: sdk.String("assumenda"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("inventore"),
                                                                            Expressions: []string{
                                                                                "repellat",
                                                                                "quam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("delectus"),
                                                                            MinComparisonValue: sdk.String("minus"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("quibusdam"),
                                                                            MaxComparisonValue: sdk.String("assumenda"),
                                                                            MetricName: sdk.String("animi"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("recusandae"),
                                                                            Expressions: []string{
                                                                                "aliquid",
                                                                                "sit",
                                                                                "vero",
                                                                                "laboriosam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("aut"),
                                                                            MinComparisonValue: sdk.String("reprehenderit"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("praesentium"),
                                                                            MaxComparisonValue: sdk.String("natus"),
                                                                            MetricName: sdk.String("numquam"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("et"),
                                                                            Expressions: []string{
                                                                                "illo",
                                                                                "tempora",
                                                                                "quisquam",
                                                                                "facere",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("excepturi"),
                                                                            MinComparisonValue: sdk.String("aut"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("odit"),
                                                                            MaxComparisonValue: sdk.String("molestiae"),
                                                                            MetricName: sdk.String("recusandae"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumImmediatelyPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("iste"),
                                                                            Expressions: []string{
                                                                                "voluptate",
                                                                                "reiciendis",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("et"),
                                                                            MinComparisonValue: sdk.String("culpa"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("eius"),
                                                                            MaxComparisonValue: sdk.String("iste"),
                                                                            MetricName: sdk.String("quae"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("officiis"),
                                                                            Expressions: []string{
                                                                                "dignissimos",
                                                                                "nostrum",
                                                                                "beatae",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("cum"),
                                                                            MinComparisonValue: sdk.String("vitae"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("commodi"),
                                                                            MaxComparisonValue: sdk.String("fugiat"),
                                                                            MetricName: sdk.String("qui"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("accusantium"),
                                                                            Expressions: []string{
                                                                                "debitis",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("voluptas"),
                                                                            MinComparisonValue: sdk.String("natus"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("sunt"),
                                                                            MaxComparisonValue: sdk.String("veniam"),
                                                                            MetricName: sdk.String("similique"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("omnis"),
                                                                            Expressions: []string{
                                                                                "earum",
                                                                                "nobis",
                                                                                "repellendus",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("necessitatibus"),
                                                                            MinComparisonValue: sdk.String("unde"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("in"),
                                                                            MaxComparisonValue: sdk.String("odit"),
                                                                            MetricName: sdk.String("iste"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumImmediatelyPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("eos"),
                                                                            Expressions: []string{
                                                                                "totam",
                                                                                "fuga",
                                                                                "aliquam",
                                                                                "tempora",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("laboriosam"),
                                                                            MinComparisonValue: sdk.String("quaerat"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("quisquam"),
                                                                            MaxComparisonValue: sdk.String("fuga"),
                                                                            MetricName: sdk.String("commodi"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("tempore"),
                                                                            Expressions: []string{
                                                                                "neque",
                                                                                "est",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("consequuntur"),
                                                                            MinComparisonValue: sdk.String("a"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("dolorem"),
                                                                            MaxComparisonValue: sdk.String("maiores"),
                                                                            MetricName: sdk.String("labore"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("at"),
                                                                            Expressions: []string{
                                                                                "quae",
                                                                                "possimus",
                                                                                "praesentium",
                                                                                "facere",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("fuga"),
                                                                            MinComparisonValue: sdk.String("minima"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("et"),
                                                                            MaxComparisonValue: sdk.String("explicabo"),
                                                                            MetricName: sdk.String("sed"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("laboriosam"),
                                                                            Expressions: []string{
                                                                                "soluta",
                                                                                "quas",
                                                                                "asperiores",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("eos"),
                                                                            MinComparisonValue: sdk.String("quam"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("dolore"),
                                                                            MaxComparisonValue: sdk.String("praesentium"),
                                                                            MetricName: sdk.String("exercitationem"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("in"),
                                                                            Expressions: []string{
                                                                                "similique",
                                                                                "tenetur",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("error"),
                                                                            MinComparisonValue: sdk.String("blanditiis"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("nulla"),
                                                                            MaxComparisonValue: sdk.String("culpa"),
                                                                            MetricName: sdk.String("reprehenderit"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("blanditiis"),
                                                                            Expressions: []string{
                                                                                "hic",
                                                                                "maxime",
                                                                                "numquam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("ut"),
                                                                            MinComparisonValue: sdk.String("fugiat"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("dolores"),
                                                                            MaxComparisonValue: sdk.String("quam"),
                                                                            MetricName: sdk.String("eius"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("ipsa"),
                                                                            Expressions: []string{
                                                                                "ullam",
                                                                                "minus",
                                                                                "placeat",
                                                                                "in",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("minus"),
                                                                            MinComparisonValue: sdk.String("voluptas"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("aut"),
                                                                            MaxComparisonValue: sdk.String("quod"),
                                                                            MetricName: sdk.String("rerum"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumImmediatelyPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("consectetur"),
                                                                            Expressions: []string{
                                                                                "modi",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("facilis"),
                                                                            MinComparisonValue: sdk.String("autem"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("ea"),
                                                                            MaxComparisonValue: sdk.String("fugit"),
                                                                            MetricName: sdk.String("consectetur"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("repudiandae"),
                                                                            Expressions: []string{
                                                                                "mollitia",
                                                                                "facilis",
                                                                                "nostrum",
                                                                                "alias",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("laborum"),
                                                                            MinComparisonValue: sdk.String("voluptates"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("quis"),
                                                                            MaxComparisonValue: sdk.String("earum"),
                                                                            MetricName: sdk.String("voluptatem"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("quas"),
                                                                            Expressions: []string{
                                                                                "sint",
                                                                                "laborum",
                                                                                "sapiente",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("nisi"),
                                                                            MinComparisonValue: sdk.String("id"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("perferendis"),
                                                                            MaxComparisonValue: sdk.String("ullam"),
                                                                            MetricName: sdk.String("incidunt"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("repudiandae"),
                                                                            Expressions: []string{
                                                                                "libero",
                                                                                "aliquam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("quasi"),
                                                                            MinComparisonValue: sdk.String("ipsum"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("expedita"),
                                                                            MaxComparisonValue: sdk.String("saepe"),
                                                                            MetricName: sdk.String("magni"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("ea"),
                                                                            Expressions: []string{
                                                                                "placeat",
                                                                                "illo",
                                                                                "optio",
                                                                                "numquam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("adipisci"),
                                                                            MinComparisonValue: sdk.String("pariatur"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("doloremque"),
                                                                            MaxComparisonValue: sdk.String("doloribus"),
                                                                            MetricName: sdk.String("aliquid"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("inventore"),
                                                                            Expressions: []string{
                                                                                "et",
                                                                                "veritatis",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("ad"),
                                                                            MinComparisonValue: sdk.String("esse"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("tempore"),
                                                                            MaxComparisonValue: sdk.String("debitis"),
                                                                            MetricName: sdk.String("enim"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("hic"),
                                                                            Expressions: []string{
                                                                                "magni",
                                                                                "quasi",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("et"),
                                                                            MinComparisonValue: sdk.String("quas"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("consequatur"),
                                                                            MaxComparisonValue: sdk.String("nihil"),
                                                                            MetricName: sdk.String("esse"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("adipisci"),
                                                                            Expressions: []string{
                                                                                "itaque",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("dolorem"),
                                                                            MinComparisonValue: sdk.String("distinctio"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("perspiciatis"),
                                                                            MaxComparisonValue: sdk.String("pariatur"),
                                                                            MetricName: sdk.String("facilis"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("fugit"),
                                                                            Expressions: []string{
                                                                                "harum",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("voluptate"),
                                                                            MinComparisonValue: sdk.String("distinctio"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("fugiat"),
                                                                            MaxComparisonValue: sdk.String("perspiciatis"),
                                                                            MetricName: sdk.String("cupiditate"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("assumenda"),
                                                                            Expressions: []string{
                                                                                "saepe",
                                                                                "facere",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("necessitatibus"),
                                                                            MinComparisonValue: sdk.String("fugiat"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("voluptate"),
                                                                            MaxComparisonValue: sdk.String("odio"),
                                                                            MetricName: sdk.String("voluptas"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("reiciendis"),
                                                                            Expressions: []string{
                                                                                "iure",
                                                                                "laborum",
                                                                                "ab",
                                                                                "iure",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("deserunt"),
                                                                            MinComparisonValue: sdk.String("blanditiis"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("necessitatibus"),
                                                                            MaxComparisonValue: sdk.String("nemo"),
                                                                            MetricName: sdk.String("vero"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("delectus"),
                                                                            Expressions: []string{
                                                                                "consequuntur",
                                                                                "praesentium",
                                                                                "fugiat",
                                                                                "beatae",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("perferendis"),
                                                                            MinComparisonValue: sdk.String("quaerat"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("harum"),
                                                                            MaxComparisonValue: sdk.String("iusto"),
                                                                            MetricName: sdk.String("debitis"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
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
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("qui"),
                                                                    Expressions: []string{
                                                                        "distinctio",
                                                                        "incidunt",
                                                                        "quaerat",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("eligendi"),
                                                                    MinComparisonValue: sdk.String("expedita"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("totam"),
                                                                    MaxComparisonValue: sdk.String("adipisci"),
                                                                    MetricName: sdk.String("nemo"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("blanditiis"),
                                                                    Expressions: []string{
                                                                        "eius",
                                                                        "suscipit",
                                                                        "inventore",
                                                                        "quisquam",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("accusamus"),
                                                                    MinComparisonValue: sdk.String("quis"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("necessitatibus"),
                                                                    MaxComparisonValue: sdk.String("excepturi"),
                                                                    MetricName: sdk.String("illo"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("perspiciatis"),
                                                                    Expressions: []string{
                                                                        "animi",
                                                                        "iste",
                                                                        "libero",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("deserunt"),
                                                                    MinComparisonValue: sdk.String("dolore"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("aperiam"),
                                                                    MaxComparisonValue: sdk.String("similique"),
                                                                    MetricName: sdk.String("nulla"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: sdk.Bool(false),
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: sdk.Bool(false),
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumImmediatelyPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("doloremque"),
                                                                            Expressions: []string{
                                                                                "adipisci",
                                                                                "odio",
                                                                                "possimus",
                                                                                "culpa",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("animi"),
                                                                            MinComparisonValue: sdk.String("iste"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("deleniti"),
                                                                            MaxComparisonValue: sdk.String("consequuntur"),
                                                                            MetricName: sdk.String("laborum"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("sint"),
                                                                            Expressions: []string{
                                                                                "odit",
                                                                                "quis",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("pariatur"),
                                                                            MinComparisonValue: sdk.String("amet"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("laborum"),
                                                                            MaxComparisonValue: sdk.String("delectus"),
                                                                            MetricName: sdk.String("reiciendis"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("cupiditate"),
                                                                            Expressions: []string{
                                                                                "voluptates",
                                                                                "saepe",
                                                                                "animi",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("modi"),
                                                                            MinComparisonValue: sdk.String("quaerat"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("dolores"),
                                                                            MaxComparisonValue: sdk.String("dignissimos"),
                                                                            MetricName: sdk.String("unde"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("maxime"),
                                                                            Expressions: []string{
                                                                                "non",
                                                                                "ut",
                                                                                "ipsa",
                                                                                "saepe",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("id"),
                                                                            MinComparisonValue: sdk.String("occaecati"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("nam"),
                                                                            MaxComparisonValue: sdk.String("itaque"),
                                                                            MetricName: sdk.String("placeat"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("accusantium"),
                                                                            Expressions: []string{
                                                                                "voluptatum",
                                                                                "nisi",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("pariatur"),
                                                                            MinComparisonValue: sdk.String("necessitatibus"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("repellendus"),
                                                                            MaxComparisonValue: sdk.String("ipsam"),
                                                                            MetricName: sdk.String("aliquid"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumUnspecifiedMatchType.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("quae"),
                                                                            Expressions: []string{
                                                                                "nemo",
                                                                                "accusantium",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("neque"),
                                                                            MinComparisonValue: sdk.String("voluptates"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("fugiat"),
                                                                            MaxComparisonValue: sdk.String("impedit"),
                                                                            MetricName: sdk.String("autem"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("maiores"),
                                                                            Expressions: []string{
                                                                                "dignissimos",
                                                                                "impedit",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("iure"),
                                                                            MinComparisonValue: sdk.String("ullam"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("odio"),
                                                                            MaxComparisonValue: sdk.String("enim"),
                                                                            MetricName: sdk.String("delectus"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("reprehenderit"),
                                                                            Expressions: []string{
                                                                                "recusandae",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("consectetur"),
                                                                            MinComparisonValue: sdk.String("vero"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("optio"),
                                                                            MaxComparisonValue: sdk.String("sapiente"),
                                                                            MetricName: sdk.String("porro"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("dolorum"),
                                                                            Expressions: []string{
                                                                                "ab",
                                                                                "necessitatibus",
                                                                                "maxime",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("veniam"),
                                                                            MinComparisonValue: sdk.String("qui"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("sed"),
                                                                            MaxComparisonValue: sdk.String("modi"),
                                                                            MetricName: sdk.String("at"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("aut"),
                                                                            Expressions: []string{
                                                                                "tempora",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("repudiandae"),
                                                                            MinComparisonValue: sdk.String("hic"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("minima"),
                                                                            MaxComparisonValue: sdk.String("impedit"),
                                                                            MetricName: sdk.String("officiis"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("laborum"),
                                                                            Expressions: []string{
                                                                                "minima",
                                                                                "neque",
                                                                                "debitis",
                                                                                "quidem",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("quidem"),
                                                                            MinComparisonValue: sdk.String("suscipit"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("corrupti"),
                                                                            MaxComparisonValue: sdk.String("odio"),
                                                                            MetricName: sdk.String("tenetur"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumUnspecifiedMatchType.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("dolore"),
                                                                            Expressions: []string{
                                                                                "ipsam",
                                                                                "cum",
                                                                                "sint",
                                                                                "est",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("quod"),
                                                                            MinComparisonValue: sdk.String("voluptates"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("non"),
                                                                            MaxComparisonValue: sdk.String("quae"),
                                                                            MetricName: sdk.String("perferendis"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("doloribus"),
                                                                            Expressions: []string{
                                                                                "magni",
                                                                                "minus",
                                                                                "id",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("earum"),
                                                                            MinComparisonValue: sdk.String("architecto"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("ipsa"),
                                                                            MaxComparisonValue: sdk.String("dolores"),
                                                                            MetricName: sdk.String("nemo"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("pariatur"),
                                                                            Expressions: []string{
                                                                                "magnam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("dignissimos"),
                                                                            MinComparisonValue: sdk.String("sunt"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("maxime"),
                                                                            MaxComparisonValue: sdk.String("nisi"),
                                                                            MetricName: sdk.String("voluptatibus"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("doloribus"),
                                                                            Expressions: []string{
                                                                                "quibusdam",
                                                                                "consequatur",
                                                                                "cumque",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("accusantium"),
                                                                            MinComparisonValue: sdk.String("commodi"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("veniam"),
                                                                            MaxComparisonValue: sdk.String("facere"),
                                                                            MetricName: sdk.String("excepturi"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("at"),
                                                                            Expressions: []string{
                                                                                "dicta",
                                                                                "incidunt",
                                                                                "doloribus",
                                                                                "porro",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("eius"),
                                                                            MinComparisonValue: sdk.String("nesciunt"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("in"),
                                                                            MaxComparisonValue: sdk.String("quae"),
                                                                            MetricName: sdk.String("distinctio"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("laudantium"),
                                                                            Expressions: []string{
                                                                                "reiciendis",
                                                                                "est",
                                                                                "dignissimos",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("eaque"),
                                                                            MinComparisonValue: sdk.String("quo"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("consectetur"),
                                                                            MaxComparisonValue: sdk.String("ipsum"),
                                                                            MetricName: sdk.String("exercitationem"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("neque"),
                                                                            Expressions: []string{
                                                                                "nulla",
                                                                                "beatae",
                                                                                "necessitatibus",
                                                                                "harum",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("deleniti"),
                                                                            MinComparisonValue: sdk.String("maiores"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("tenetur"),
                                                                            MaxComparisonValue: sdk.String("quam"),
                                                                            MetricName: sdk.String("nemo"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("hic"),
                                                                            Expressions: []string{
                                                                                "ipsum",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("doloribus"),
                                                                            MinComparisonValue: sdk.String("quasi"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("eaque"),
                                                                            MaxComparisonValue: sdk.String("error"),
                                                                            MetricName: sdk.String("corporis"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
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
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("mollitia"),
                                                                    Expressions: []string{
                                                                        "odio",
                                                                        "temporibus",
                                                                        "reprehenderit",
                                                                        "soluta",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("voluptas"),
                                                                    MinComparisonValue: sdk.String("odio"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("officiis"),
                                                                    MaxComparisonValue: sdk.String("voluptates"),
                                                                    MetricName: sdk.String("tenetur"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("eius"),
                                                                    Expressions: []string{
                                                                        "pariatur",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("perspiciatis"),
                                                                    MinComparisonValue: sdk.String("exercitationem"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("sunt"),
                                                                    MaxComparisonValue: sdk.String("pariatur"),
                                                                    MetricName: sdk.String("soluta"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("doloribus"),
                                                                    Expressions: []string{
                                                                        "iusto",
                                                                        "quo",
                                                                        "non",
                                                                        "tempore",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("quae"),
                                                                    MinComparisonValue: sdk.String("quis"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("itaque"),
                                                                    MaxComparisonValue: sdk.String("occaecati"),
                                                                    MetricName: sdk.String("odit"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("consequuntur"),
                                                                    Expressions: []string{
                                                                        "ipsam",
                                                                        "debitis",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("repudiandae"),
                                                                    MinComparisonValue: sdk.String("officia"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("laboriosam"),
                                                                    MaxComparisonValue: sdk.String("laudantium"),
                                                                    MetricName: sdk.String("quasi"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("laboriosam"),
                                                                    Expressions: []string{
                                                                        "quae",
                                                                        "nisi",
                                                                        "amet",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("tenetur"),
                                                                    MinComparisonValue: sdk.String("ducimus"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("cupiditate"),
                                                                    MaxComparisonValue: sdk.String("facilis"),
                                                                    MetricName: sdk.String("iusto"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("ex"),
                                                                    Expressions: []string{
                                                                        "quae",
                                                                        "quidem",
                                                                        "voluptatem",
                                                                        "tenetur",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("mollitia"),
                                                                    MinComparisonValue: sdk.String("voluptatem"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("soluta"),
                                                                    MaxComparisonValue: sdk.String("eos"),
                                                                    MetricName: sdk.String("quae"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("voluptates"),
                                                                    Expressions: []string{
                                                                        "quo",
                                                                        "incidunt",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("id"),
                                                                    MinComparisonValue: sdk.String("accusamus"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("quaerat"),
                                                                    MaxComparisonValue: sdk.String("eaque"),
                                                                    MetricName: sdk.String("nisi"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
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
                                            Not: sdk.Bool(false),
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: sdk.Bool(false),
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("nobis"),
                                                                            Expressions: []string{
                                                                                "ab",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("culpa"),
                                                                            MinComparisonValue: sdk.String("ipsa"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("placeat"),
                                                                            MaxComparisonValue: sdk.String("perferendis"),
                                                                            MetricName: sdk.String("rem"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("sequi"),
                                                                            Expressions: []string{
                                                                                "magni",
                                                                                "inventore",
                                                                                "eligendi",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("dolores"),
                                                                            MinComparisonValue: sdk.String("exercitationem"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("iste"),
                                                                            MaxComparisonValue: sdk.String("ratione"),
                                                                            MetricName: sdk.String("consequatur"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("sit"),
                                                                            Expressions: []string{
                                                                                "dolorem",
                                                                                "mollitia",
                                                                                "sequi",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("officiis"),
                                                                            MinComparisonValue: sdk.String("reiciendis"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("aliquam"),
                                                                            MaxComparisonValue: sdk.String("laboriosam"),
                                                                            MetricName: sdk.String("temporibus"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("ea"),
                                                                            Expressions: []string{
                                                                                "delectus",
                                                                                "id",
                                                                                "inventore",
                                                                                "consequatur",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("architecto"),
                                                                            MinComparisonValue: sdk.String("vitae"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("voluptatem"),
                                                                            MaxComparisonValue: sdk.String("unde"),
                                                                            MetricName: sdk.String("et"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("necessitatibus"),
                                                                            Expressions: []string{
                                                                                "laudantium",
                                                                                "tempore",
                                                                                "exercitationem",
                                                                                "velit",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("totam"),
                                                                            MinComparisonValue: sdk.String("nisi"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("nulla"),
                                                                            MaxComparisonValue: sdk.String("necessitatibus"),
                                                                            MetricName: sdk.String("illo"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("at"),
                                                                            Expressions: []string{
                                                                                "aliquam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("asperiores"),
                                                                            MinComparisonValue: sdk.String("debitis"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("sed"),
                                                                            MaxComparisonValue: sdk.String("voluptates"),
                                                                            MetricName: sdk.String("ipsam"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
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
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("ipsa"),
                                                                    Expressions: []string{
                                                                        "ipsa",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("consectetur"),
                                                                    MinComparisonValue: sdk.String("possimus"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("quo"),
                                                                    MaxComparisonValue: sdk.String("adipisci"),
                                                                    MetricName: sdk.String("non"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("natus"),
                                                                    Expressions: []string{
                                                                        "reiciendis",
                                                                        "hic",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("hic"),
                                                                    MinComparisonValue: sdk.String("error"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("repellendus"),
                                                                    MaxComparisonValue: sdk.String("vitae"),
                                                                    MetricName: sdk.String("pariatur"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("consequatur"),
                                                                    Expressions: []string{
                                                                        "alias",
                                                                        "doloribus",
                                                                        "quo",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("quasi"),
                                                                    MinComparisonValue: sdk.String("ullam"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("mollitia"),
                                                                    MaxComparisonValue: sdk.String("cumque"),
                                                                    MetricName: sdk.String("molestias"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("sint"),
                                                                    Expressions: []string{
                                                                        "vitae",
                                                                        "eligendi",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("accusamus"),
                                                                    MinComparisonValue: sdk.String("perspiciatis"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("vero"),
                                                                    MaxComparisonValue: sdk.String("aliquam"),
                                                                    MetricName: sdk.String("architecto"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("omnis"),
                                                                    Expressions: []string{
                                                                        "facere",
                                                                        "ducimus",
                                                                        "quibusdam",
                                                                        "omnis",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("molestiae"),
                                                                    MinComparisonValue: sdk.String("illo"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("repellendus"),
                                                                    MaxComparisonValue: sdk.String("consequatur"),
                                                                    MetricName: sdk.String("dignissimos"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("aut"),
                                                                    Expressions: []string{
                                                                        "deserunt",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("corporis"),
                                                                    MinComparisonValue: sdk.String("praesentium"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("a"),
                                                                    MaxComparisonValue: sdk.String("temporibus"),
                                                                    MetricName: sdk.String("consequuntur"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("nulla"),
                                                                    Expressions: []string{
                                                                        "laudantium",
                                                                        "sapiente",
                                                                        "facere",
                                                                        "laudantium",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("praesentium"),
                                                                    MinComparisonValue: sdk.String("sed"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("deleniti"),
                                                                    MaxComparisonValue: sdk.String("accusamus"),
                                                                    MetricName: sdk.String("voluptas"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("accusamus"),
                                                                    Expressions: []string{
                                                                        "eos",
                                                                        "perferendis",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("eligendi"),
                                                                    MinComparisonValue: sdk.String("facere"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("quisquam"),
                                                                    MaxComparisonValue: sdk.String("veniam"),
                                                                    MetricName: sdk.String("officia"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: sdk.Bool(false),
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: sdk.Bool(false),
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumUnspecifiedMatchType.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("nesciunt"),
                                                                            Expressions: []string{
                                                                                "corporis",
                                                                                "aspernatur",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("veniam"),
                                                                            MinComparisonValue: sdk.String("quasi"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("harum"),
                                                                            MaxComparisonValue: sdk.String("earum"),
                                                                            MetricName: sdk.String("mollitia"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("vero"),
                                                                            Expressions: []string{
                                                                                "voluptate",
                                                                                "itaque",
                                                                                "quisquam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("minus"),
                                                                            MinComparisonValue: sdk.String("corporis"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("nulla"),
                                                                            MaxComparisonValue: sdk.String("quod"),
                                                                            MetricName: sdk.String("saepe"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("eveniet"),
                                                                            Expressions: []string{
                                                                                "laborum",
                                                                                "voluptatum",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("blanditiis"),
                                                                            MinComparisonValue: sdk.String("adipisci"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("et"),
                                                                            MaxComparisonValue: sdk.String("commodi"),
                                                                            MetricName: sdk.String("laboriosam"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("at"),
                                                                            Expressions: []string{
                                                                                "vel",
                                                                                "quibusdam",
                                                                                "iusto",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("voluptate"),
                                                                            MinComparisonValue: sdk.String("cumque"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("fugiat"),
                                                                            MaxComparisonValue: sdk.String("rem"),
                                                                            MetricName: sdk.String("laboriosam"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("odit"),
                                                                            Expressions: []string{
                                                                                "esse",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("quibusdam"),
                                                                            MinComparisonValue: sdk.String("tempora"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("magni"),
                                                                            MaxComparisonValue: sdk.String("molestiae"),
                                                                            MetricName: sdk.String("blanditiis"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("quibusdam"),
                                                                            Expressions: []string{
                                                                                "molestias",
                                                                                "culpa",
                                                                                "molestiae",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("labore"),
                                                                            MinComparisonValue: sdk.String("perspiciatis"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("consectetur"),
                                                                            MaxComparisonValue: sdk.String("provident"),
                                                                            MetricName: sdk.String("totam"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumUnspecifiedMatchType.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("minus"),
                                                                            Expressions: []string{
                                                                                "corporis",
                                                                                "itaque",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("incidunt"),
                                                                            MinComparisonValue: sdk.String("asperiores"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("eligendi"),
                                                                            MaxComparisonValue: sdk.String("accusantium"),
                                                                            MetricName: sdk.String("voluptatem"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("minima"),
                                                                            Expressions: []string{
                                                                                "rerum",
                                                                                "molestiae",
                                                                                "ipsam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("quos"),
                                                                            MinComparisonValue: sdk.String("minus"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("cupiditate"),
                                                                            MaxComparisonValue: sdk.String("tempora"),
                                                                            MetricName: sdk.String("exercitationem"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("delectus"),
                                                                            Expressions: []string{
                                                                                "consequatur",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("suscipit"),
                                                                            MinComparisonValue: sdk.String("occaecati"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("rem"),
                                                                            MaxComparisonValue: sdk.String("nemo"),
                                                                            MetricName: sdk.String("a"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("quasi"),
                                                                            Expressions: []string{
                                                                                "vitae",
                                                                                "nihil",
                                                                                "consectetur",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("illum"),
                                                                            MinComparisonValue: sdk.String("laudantium"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("libero"),
                                                                            MaxComparisonValue: sdk.String("cum"),
                                                                            MetricName: sdk.String("saepe"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumImmediatelyPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("praesentium"),
                                                                            Expressions: []string{
                                                                                "magnam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("mollitia"),
                                                                            MinComparisonValue: sdk.String("doloribus"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("doloremque"),
                                                                            MaxComparisonValue: sdk.String("odio"),
                                                                            MetricName: sdk.String("ratione"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("expedita"),
                                                                            Expressions: []string{
                                                                                "magni",
                                                                                "molestias",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("corporis"),
                                                                            MinComparisonValue: sdk.String("facere"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("est"),
                                                                            MaxComparisonValue: sdk.String("odit"),
                                                                            MetricName: sdk.String("unde"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("est"),
                                                                            Expressions: []string{
                                                                                "debitis",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("quasi"),
                                                                            MinComparisonValue: sdk.String("voluptas"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("veritatis"),
                                                                            MaxComparisonValue: sdk.String("nemo"),
                                                                            MetricName: sdk.String("nisi"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumImmediatelyPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("repudiandae"),
                                                                            Expressions: []string{
                                                                                "perferendis",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("error"),
                                                                            MinComparisonValue: sdk.String("ullam"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("corporis"),
                                                                            MaxComparisonValue: sdk.String("tempore"),
                                                                            MetricName: sdk.String("maiores"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("laborum"),
                                                                            Expressions: []string{
                                                                                "dolorem",
                                                                                "repudiandae",
                                                                                "provident",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("incidunt"),
                                                                            MinComparisonValue: sdk.String("incidunt"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("sit"),
                                                                            MaxComparisonValue: sdk.String("cumque"),
                                                                            MetricName: sdk.String("fuga"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("voluptatibus"),
                                                                            Expressions: []string{
                                                                                "ab",
                                                                                "ipsa",
                                                                                "ducimus",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("voluptatum"),
                                                                            MinComparisonValue: sdk.String("natus"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("sequi"),
                                                                            MaxComparisonValue: sdk.String("fugit"),
                                                                            MetricName: sdk.String("deserunt"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("amet"),
                                                                            Expressions: []string{
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("quam"),
                                                                            MinComparisonValue: sdk.String("odit"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("odit"),
                                                                            MaxComparisonValue: sdk.String("assumenda"),
                                                                            MetricName: sdk.String("quibusdam"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
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
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("in"),
                                                                    Expressions: []string{
                                                                        "distinctio",
                                                                        "error",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("odio"),
                                                                    MinComparisonValue: sdk.String("necessitatibus"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("deleniti"),
                                                                    MaxComparisonValue: sdk.String("possimus"),
                                                                    MetricName: sdk.String("at"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("commodi"),
                                                                    Expressions: []string{
                                                                        "facere",
                                                                        "inventore",
                                                                        "eligendi",
                                                                        "optio",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("maxime"),
                                                                    MinComparisonValue: sdk.String("nesciunt"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("dicta"),
                                                                    MaxComparisonValue: sdk.String("quisquam"),
                                                                    MetricName: sdk.String("quas"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("ducimus"),
                                                                    Expressions: []string{
                                                                        "magnam",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("iure"),
                                                                    MinComparisonValue: sdk.String("eius"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("doloremque"),
                                                                    MaxComparisonValue: sdk.String("culpa"),
                                                                    MetricName: sdk.String("voluptate"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("doloribus"),
                                                                    Expressions: []string{
                                                                        "incidunt",
                                                                        "deserunt",
                                                                        "distinctio",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("magnam"),
                                                                    MinComparisonValue: sdk.String("eius"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("impedit"),
                                                                    MaxComparisonValue: sdk.String("ipsum"),
                                                                    MetricName: sdk.String("deserunt"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("esse"),
                                                                    Expressions: []string{
                                                                        "velit",
                                                                        "perspiciatis",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("omnis"),
                                                                    MinComparisonValue: sdk.String("minima"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("rem"),
                                                                    MaxComparisonValue: sdk.String("voluptatem"),
                                                                    MetricName: sdk.String("corrupti"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("accusamus"),
                                                                    Expressions: []string{
                                                                        "natus",
                                                                        "dolore",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("eius"),
                                                                    MinComparisonValue: sdk.String("minima"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("recusandae"),
                                                                    MaxComparisonValue: sdk.String("nobis"),
                                                                    MetricName: sdk.String("quo"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("consequatur"),
                                                                    Expressions: []string{
                                                                        "beatae",
                                                                        "impedit",
                                                                        "ut",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("qui"),
                                                                    MinComparisonValue: sdk.String("nisi"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("nemo"),
                                                                    MaxComparisonValue: sdk.String("cupiditate"),
                                                                    MetricName: sdk.String("maxime"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("commodi"),
                                                                    Expressions: []string{
                                                                        "asperiores",
                                                                        "facere",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("maxime"),
                                                                    MinComparisonValue: sdk.String("minus"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("neque"),
                                                                    MaxComparisonValue: sdk.String("veniam"),
                                                                    MetricName: sdk.String("nemo"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("et"),
                                                                    Expressions: []string{
                                                                        "quos",
                                                                        "veniam",
                                                                        "ad",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("accusamus"),
                                                                    MinComparisonValue: sdk.String("laudantium"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("cupiditate"),
                                                                    MaxComparisonValue: sdk.String("fugiat"),
                                                                    MetricName: sdk.String("omnis"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("error"),
                                                                    Expressions: []string{
                                                                        "fugit",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("necessitatibus"),
                                                                    MinComparisonValue: sdk.String("omnis"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("perferendis"),
                                                                    MaxComparisonValue: sdk.String("voluptatem"),
                                                                    MetricName: sdk.String("culpa"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("deserunt"),
                                                                    Expressions: []string{
                                                                        "voluptatum",
                                                                        "veritatis",
                                                                        "consequuntur",
                                                                        "dolore",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("fugit"),
                                                                    MinComparisonValue: sdk.String("alias"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("voluptates"),
                                                                    MaxComparisonValue: sdk.String("sapiente"),
                                                                    MetricName: sdk.String("at"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("eius"),
                                                                    Expressions: []string{
                                                                        "dicta",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("deleniti"),
                                                                    MinComparisonValue: sdk.String("perspiciatis"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("recusandae"),
                                                                    MaxComparisonValue: sdk.String("quam"),
                                                                    MetricName: sdk.String("adipisci"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("eveniet"),
                                                                    Expressions: []string{
                                                                        "facilis",
                                                                        "eveniet",
                                                                        "voluptatum",
                                                                        "rerum",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("officia"),
                                                                    MinComparisonValue: sdk.String("saepe"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("mollitia"),
                                                                    MaxComparisonValue: sdk.String("libero"),
                                                                    MetricName: sdk.String("tempore"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("ut"),
                                                                    Expressions: []string{
                                                                        "neque",
                                                                        "eum",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("repudiandae"),
                                                                    MinComparisonValue: sdk.String("excepturi"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("velit"),
                                                                    MaxComparisonValue: sdk.String("quis"),
                                                                    MetricName: sdk.String("inventore"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("unde"),
                                                                    Expressions: []string{
                                                                        "eum",
                                                                        "adipisci",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("architecto"),
                                                                    MinComparisonValue: sdk.String("iure"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("voluptatem"),
                                                                    MaxComparisonValue: sdk.String("quidem"),
                                                                    MetricName: sdk.String("molestiae"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            SegmentID: sdk.String("quis"),
                        },
                        shared.Segment{
                            DynamicSegment: &shared.DynamicSegment{
                                Name: sdk.String("Glen Ebert"),
                                SessionSegment: &shared.SegmentDefinition{
                                    SegmentFilters: []shared.SegmentFilter{
                                        shared.SegmentFilter{
                                            Not: sdk.Bool(false),
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: sdk.Bool(false),
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("ipsam"),
                                                                            Expressions: []string{
                                                                                "voluptate",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("ab"),
                                                                            MinComparisonValue: sdk.String("repellat"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("et"),
                                                                            MaxComparisonValue: sdk.String("quo"),
                                                                            MetricName: sdk.String("alias"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("veritatis"),
                                                                            Expressions: []string{
                                                                                "debitis",
                                                                                "pariatur",
                                                                                "blanditiis",
                                                                                "nulla",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("minus"),
                                                                            MinComparisonValue: sdk.String("nemo"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("a"),
                                                                            MaxComparisonValue: sdk.String("a"),
                                                                            MetricName: sdk.String("nobis"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("velit"),
                                                                            Expressions: []string{
                                                                                "perspiciatis",
                                                                                "alias",
                                                                                "quas",
                                                                                "sint",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("necessitatibus"),
                                                                            MinComparisonValue: sdk.String("totam"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("inventore"),
                                                                            MaxComparisonValue: sdk.String("asperiores"),
                                                                            MetricName: sdk.String("nulla"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("voluptas"),
                                                                            Expressions: []string{
                                                                                "molestiae",
                                                                                "tempore",
                                                                                "facere",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("at"),
                                                                            MinComparisonValue: sdk.String("perspiciatis"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("molestias"),
                                                                            MaxComparisonValue: sdk.String("corrupti"),
                                                                            MetricName: sdk.String("corporis"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("neque"),
                                                                            Expressions: []string{
                                                                                "adipisci",
                                                                                "numquam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("officia"),
                                                                            MinComparisonValue: sdk.String("quis"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("reprehenderit"),
                                                                            MaxComparisonValue: sdk.String("odit"),
                                                                            MetricName: sdk.String("quibusdam"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("nulla"),
                                                                            Expressions: []string{
                                                                                "in",
                                                                                "rem",
                                                                                "nostrum",
                                                                                "expedita",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("vero"),
                                                                            MinComparisonValue: sdk.String("quis"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("esse"),
                                                                            MaxComparisonValue: sdk.String("mollitia"),
                                                                            MetricName: sdk.String("hic"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("minima"),
                                                                            Expressions: []string{
                                                                                "occaecati",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("nihil"),
                                                                            MinComparisonValue: sdk.String("tempore"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("laboriosam"),
                                                                            MaxComparisonValue: sdk.String("explicabo"),
                                                                            MetricName: sdk.String("laudantium"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("modi"),
                                                                            Expressions: []string{
                                                                                "dolorem",
                                                                                "laborum",
                                                                                "eos",
                                                                                "dolor",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("consectetur"),
                                                                            MinComparisonValue: sdk.String("unde"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("id"),
                                                                            MaxComparisonValue: sdk.String("eum"),
                                                                            MetricName: sdk.String("rem"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("deleniti"),
                                                                            Expressions: []string{
                                                                                "illum",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("ratione"),
                                                                            MinComparisonValue: sdk.String("alias"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("hic"),
                                                                            MaxComparisonValue: sdk.String("ducimus"),
                                                                            MetricName: sdk.String("dolores"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumUnspecifiedMatchType.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("deserunt"),
                                                                            Expressions: []string{
                                                                                "dicta",
                                                                                "repellat",
                                                                                "voluptates",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("provident"),
                                                                            MinComparisonValue: sdk.String("illum"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("autem"),
                                                                            MaxComparisonValue: sdk.String("minima"),
                                                                            MetricName: sdk.String("nemo"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("excepturi"),
                                                                            Expressions: []string{
                                                                                "perferendis",
                                                                                "consequatur",
                                                                                "doloremque",
                                                                                "excepturi",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("quod"),
                                                                            MinComparisonValue: sdk.String("vel"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("error"),
                                                                            MaxComparisonValue: sdk.String("explicabo"),
                                                                            MetricName: sdk.String("temporibus"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("nam"),
                                                                            Expressions: []string{
                                                                                "voluptas",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("voluptas"),
                                                                            MinComparisonValue: sdk.String("aspernatur"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("eaque"),
                                                                            MaxComparisonValue: sdk.String("veritatis"),
                                                                            MetricName: sdk.String("officia"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("error"),
                                                                            Expressions: []string{
                                                                                "eius",
                                                                                "deserunt",
                                                                                "voluptates",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("in"),
                                                                            MinComparisonValue: sdk.String("harum"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("fuga"),
                                                                            MaxComparisonValue: sdk.String("ipsam"),
                                                                            MetricName: sdk.String("harum"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("placeat"),
                                                                            Expressions: []string{
                                                                                "repudiandae",
                                                                                "consectetur",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("perferendis"),
                                                                            MinComparisonValue: sdk.String("aliquam"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("quae"),
                                                                            MaxComparisonValue: sdk.String("dolorum"),
                                                                            MetricName: sdk.String("fuga"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("temporibus"),
                                                                            Expressions: []string{
                                                                                "error",
                                                                                "deleniti",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("dolor"),
                                                                            MinComparisonValue: sdk.String("natus"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("consequatur"),
                                                                            MaxComparisonValue: sdk.String("ipsum"),
                                                                            MetricName: sdk.String("quidem"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("molestiae"),
                                                                            Expressions: []string{
                                                                                "nam",
                                                                                "occaecati",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("quasi"),
                                                                            MinComparisonValue: sdk.String("blanditiis"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("aut"),
                                                                            MaxComparisonValue: sdk.String("neque"),
                                                                            MetricName: sdk.String("dicta"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("ut"),
                                                                            Expressions: []string{
                                                                                "sit",
                                                                                "reprehenderit",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("officiis"),
                                                                            MinComparisonValue: sdk.String("accusantium"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("consectetur"),
                                                                            MaxComparisonValue: sdk.String("occaecati"),
                                                                            MetricName: sdk.String("impedit"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("odit"),
                                                                            Expressions: []string{
                                                                                "itaque",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("impedit"),
                                                                            MinComparisonValue: sdk.String("quidem"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("voluptas"),
                                                                            MaxComparisonValue: sdk.String("aperiam"),
                                                                            MetricName: sdk.String("numquam"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("fugit"),
                                                                            Expressions: []string{
                                                                                "magni",
                                                                                "ipsum",
                                                                                "similique",
                                                                                "dolor",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("nulla"),
                                                                            MinComparisonValue: sdk.String("autem"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("voluptas"),
                                                                            MaxComparisonValue: sdk.String("quis"),
                                                                            MetricName: sdk.String("reprehenderit"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
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
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("rem"),
                                                                    Expressions: []string{
                                                                        "molestiae",
                                                                        "hic",
                                                                        "ipsa",
                                                                        "consequatur",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("sed"),
                                                                    MinComparisonValue: sdk.String("fugiat"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("occaecati"),
                                                                    MaxComparisonValue: sdk.String("rem"),
                                                                    MetricName: sdk.String("ex"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("natus"),
                                                                    Expressions: []string{
                                                                        "at",
                                                                        "neque",
                                                                        "animi",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("veritatis"),
                                                                    MinComparisonValue: sdk.String("repellendus"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("odit"),
                                                                    MaxComparisonValue: sdk.String("amet"),
                                                                    MetricName: sdk.String("dolores"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("ut"),
                                                                    Expressions: []string{
                                                                        "rem",
                                                                        "ipsum",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("voluptate"),
                                                                    MinComparisonValue: sdk.String("eveniet"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("reiciendis"),
                                                                    MaxComparisonValue: sdk.String("qui"),
                                                                    MetricName: sdk.String("officia"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("tempore"),
                                                                    Expressions: []string{
                                                                        "inventore",
                                                                        "aut",
                                                                        "debitis",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("fugit"),
                                                                    MinComparisonValue: sdk.String("nostrum"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("reiciendis"),
                                                                    MaxComparisonValue: sdk.String("repellendus"),
                                                                    MetricName: sdk.String("cumque"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("assumenda"),
                                                                    Expressions: []string{
                                                                        "necessitatibus",
                                                                        "adipisci",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("ipsum"),
                                                                    MinComparisonValue: sdk.String("ipsa"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("aliquid"),
                                                                    MaxComparisonValue: sdk.String("dignissimos"),
                                                                    MetricName: sdk.String("exercitationem"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("quae"),
                                                                    Expressions: []string{
                                                                        "voluptas",
                                                                        "molestias",
                                                                        "nostrum",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("vel"),
                                                                    MinComparisonValue: sdk.String("deserunt"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("officiis"),
                                                                    MaxComparisonValue: sdk.String("deleniti"),
                                                                    MetricName: sdk.String("fugit"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("doloribus"),
                                                                    Expressions: []string{
                                                                        "assumenda",
                                                                        "voluptatem",
                                                                        "a",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("cumque"),
                                                                    MinComparisonValue: sdk.String("fugit"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("magni"),
                                                                    MaxComparisonValue: sdk.String("quod"),
                                                                    MetricName: sdk.String("aliquid"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("est"),
                                                                    Expressions: []string{
                                                                        "nesciunt",
                                                                        "optio",
                                                                        "ratione",
                                                                        "a",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("quis"),
                                                                    MinComparisonValue: sdk.String("nostrum"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("provident"),
                                                                    MaxComparisonValue: sdk.String("distinctio"),
                                                                    MetricName: sdk.String("accusamus"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("possimus"),
                                                                    Expressions: []string{
                                                                        "vel",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("eius"),
                                                                    MinComparisonValue: sdk.String("voluptates"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("beatae"),
                                                                    MaxComparisonValue: sdk.String("necessitatibus"),
                                                                    MetricName: sdk.String("ratione"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("numquam"),
                                                                    Expressions: []string{
                                                                        "consequuntur",
                                                                        "consequuntur",
                                                                        "officiis",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("veniam"),
                                                                    MinComparisonValue: sdk.String("ab"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("asperiores"),
                                                                    MaxComparisonValue: sdk.String("autem"),
                                                                    MetricName: sdk.String("nulla"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("magni"),
                                                                    Expressions: []string{
                                                                        "possimus",
                                                                        "dolor",
                                                                        "molestiae",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("quod"),
                                                                    MinComparisonValue: sdk.String("dolorem"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("error"),
                                                                    MaxComparisonValue: sdk.String("occaecati"),
                                                                    MetricName: sdk.String("voluptatem"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("nobis"),
                                                                    Expressions: []string{
                                                                        "sit",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("rerum"),
                                                                    MinComparisonValue: sdk.String("laboriosam"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("molestiae"),
                                                                    MaxComparisonValue: sdk.String("iste"),
                                                                    MetricName: sdk.String("sed"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: sdk.Bool(false),
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: sdk.Bool(false),
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumImmediatelyPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("repellendus"),
                                                                            Expressions: []string{
                                                                                "rem",
                                                                                "voluptatum",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("vel"),
                                                                            MinComparisonValue: sdk.String("quae"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("dolore"),
                                                                            MaxComparisonValue: sdk.String("consectetur"),
                                                                            MetricName: sdk.String("porro"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("adipisci"),
                                                                            Expressions: []string{
                                                                                "labore",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("excepturi"),
                                                                            MinComparisonValue: sdk.String("quisquam"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("quod"),
                                                                            MaxComparisonValue: sdk.String("voluptatibus"),
                                                                            MetricName: sdk.String("voluptas"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("nihil"),
                                                                            Expressions: []string{
                                                                                "necessitatibus",
                                                                                "dignissimos",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("libero"),
                                                                            MinComparisonValue: sdk.String("qui"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("facilis"),
                                                                            MaxComparisonValue: sdk.String("dolorum"),
                                                                            MetricName: sdk.String("quibusdam"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
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
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("nihil"),
                                                                    Expressions: []string{
                                                                        "velit",
                                                                        "doloribus",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("nulla"),
                                                                    MinComparisonValue: sdk.String("ex"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("magni"),
                                                                    MaxComparisonValue: sdk.String("animi"),
                                                                    MetricName: sdk.String("sunt"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("placeat"),
                                                                    Expressions: []string{
                                                                        "natus",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("quam"),
                                                                    MinComparisonValue: sdk.String("atque"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("quo"),
                                                                    MaxComparisonValue: sdk.String("eos"),
                                                                    MetricName: sdk.String("enim"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("veniam"),
                                                                    Expressions: []string{
                                                                        "voluptatem",
                                                                        "sint",
                                                                        "consequuntur",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("magni"),
                                                                    MinComparisonValue: sdk.String("iure"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("quod"),
                                                                    MaxComparisonValue: sdk.String("placeat"),
                                                                    MetricName: sdk.String("numquam"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("nisi"),
                                                                    Expressions: []string{
                                                                        "sint",
                                                                        "esse",
                                                                        "in",
                                                                        "cum",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("soluta"),
                                                                    MinComparisonValue: sdk.String("impedit"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("esse"),
                                                                    MaxComparisonValue: sdk.String("sapiente"),
                                                                    MetricName: sdk.String("ratione"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("eos"),
                                                                    Expressions: []string{
                                                                        "est",
                                                                        "blanditiis",
                                                                        "laboriosam",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("ipsa"),
                                                                    MinComparisonValue: sdk.String("eaque"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("ad"),
                                                                    MaxComparisonValue: sdk.String("atque"),
                                                                    MetricName: sdk.String("illum"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("facere"),
                                                                    Expressions: []string{
                                                                        "sequi",
                                                                        "voluptates",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("tempora"),
                                                                    MinComparisonValue: sdk.String("similique"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("exercitationem"),
                                                                    MaxComparisonValue: sdk.String("laboriosam"),
                                                                    MetricName: sdk.String("quos"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("ad"),
                                                                    Expressions: []string{
                                                                        "omnis",
                                                                        "quo",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("maiores"),
                                                                    MinComparisonValue: sdk.String("maxime"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("quisquam"),
                                                                    MaxComparisonValue: sdk.String("eaque"),
                                                                    MetricName: sdk.String("officiis"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("dolor"),
                                                                    Expressions: []string{
                                                                        "quis",
                                                                        "vel",
                                                                        "praesentium",
                                                                        "sequi",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("illo"),
                                                                    MinComparisonValue: sdk.String("reiciendis"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("assumenda"),
                                                                    MaxComparisonValue: sdk.String("molestias"),
                                                                    MetricName: sdk.String("itaque"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: sdk.Bool(false),
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: sdk.Bool(false),
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumImmediatelyPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("recusandae"),
                                                                            Expressions: []string{
                                                                                "deserunt",
                                                                                "a",
                                                                                "culpa",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("cum"),
                                                                            MinComparisonValue: sdk.String("quod"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("laudantium"),
                                                                            MaxComparisonValue: sdk.String("nisi"),
                                                                            MetricName: sdk.String("necessitatibus"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("dicta"),
                                                                            Expressions: []string{
                                                                                "magnam",
                                                                                "dolorem",
                                                                                "quidem",
                                                                                "consequuntur",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("ratione"),
                                                                            MinComparisonValue: sdk.String("ut"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("dolore"),
                                                                            MaxComparisonValue: sdk.String("inventore"),
                                                                            MetricName: sdk.String("molestiae"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("adipisci"),
                                                                            Expressions: []string{
                                                                                "nesciunt",
                                                                                "sapiente",
                                                                                "nisi",
                                                                                "explicabo",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("similique"),
                                                                            MinComparisonValue: sdk.String("culpa"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("culpa"),
                                                                            MaxComparisonValue: sdk.String("recusandae"),
                                                                            MetricName: sdk.String("labore"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("numquam"),
                                                                            Expressions: []string{
                                                                                "provident",
                                                                                "cumque",
                                                                                "dolore",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("sint"),
                                                                            MinComparisonValue: sdk.String("quia"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("exercitationem"),
                                                                            MaxComparisonValue: sdk.String("necessitatibus"),
                                                                            MetricName: sdk.String("deleniti"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("corporis"),
                                                                            Expressions: []string{
                                                                                "incidunt",
                                                                                "laborum",
                                                                                "culpa",
                                                                                "magnam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("similique"),
                                                                            MinComparisonValue: sdk.String("veniam"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("quas"),
                                                                            MaxComparisonValue: sdk.String("soluta"),
                                                                            MetricName: sdk.String("quibusdam"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("eaque"),
                                                                            Expressions: []string{
                                                                                "sed",
                                                                                "excepturi",
                                                                                "animi",
                                                                                "deserunt",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("rem"),
                                                                            MinComparisonValue: sdk.String("fugiat"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("iure"),
                                                                            MaxComparisonValue: sdk.String("beatae"),
                                                                            MetricName: sdk.String("quidem"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("mollitia"),
                                                                            Expressions: []string{
                                                                                "quae",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("cum"),
                                                                            MinComparisonValue: sdk.String("odio"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("perspiciatis"),
                                                                            MaxComparisonValue: sdk.String("beatae"),
                                                                            MetricName: sdk.String("labore"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("officia"),
                                                                            Expressions: []string{
                                                                                "suscipit",
                                                                                "unde",
                                                                                "cumque",
                                                                                "perferendis",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("deleniti"),
                                                                            MinComparisonValue: sdk.String("totam"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("labore"),
                                                                            MaxComparisonValue: sdk.String("vitae"),
                                                                            MetricName: sdk.String("deleniti"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("quam"),
                                                                            Expressions: []string{
                                                                                "totam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("accusantium"),
                                                                            MinComparisonValue: sdk.String("ut"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("modi"),
                                                                            MaxComparisonValue: sdk.String("dolores"),
                                                                            MetricName: sdk.String("ratione"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("adipisci"),
                                                                            Expressions: []string{
                                                                                "ratione",
                                                                                "quis",
                                                                                "delectus",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("ratione"),
                                                                            MinComparisonValue: sdk.String("in"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("dolorum"),
                                                                            MaxComparisonValue: sdk.String("quisquam"),
                                                                            MetricName: sdk.String("voluptas"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("nam"),
                                                                            Expressions: []string{
                                                                                "officiis",
                                                                                "iste",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("velit"),
                                                                            MinComparisonValue: sdk.String("nam"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("id"),
                                                                            MaxComparisonValue: sdk.String("sequi"),
                                                                            MetricName: sdk.String("optio"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
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
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("doloremque"),
                                                                    Expressions: []string{
                                                                        "recusandae",
                                                                        "iusto",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("impedit"),
                                                                    MinComparisonValue: sdk.String("dolor"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("impedit"),
                                                                    MaxComparisonValue: sdk.String("deserunt"),
                                                                    MetricName: sdk.String("distinctio"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
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
                                            Not: sdk.Bool(false),
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: sdk.Bool(false),
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("est"),
                                                                            Expressions: []string{
                                                                                "ea",
                                                                                "beatae",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("eius"),
                                                                            MinComparisonValue: sdk.String("atque"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("ut"),
                                                                            MaxComparisonValue: sdk.String("magnam"),
                                                                            MetricName: sdk.String("fuga"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("veniam"),
                                                                            Expressions: []string{
                                                                                "nihil",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("exercitationem"),
                                                                            MinComparisonValue: sdk.String("nam"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("qui"),
                                                                            MaxComparisonValue: sdk.String("exercitationem"),
                                                                            MetricName: sdk.String("dolorem"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("exercitationem"),
                                                                            Expressions: []string{
                                                                                "nesciunt",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("tempora"),
                                                                            MinComparisonValue: sdk.String("nesciunt"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("nobis"),
                                                                            MaxComparisonValue: sdk.String("doloremque"),
                                                                            MetricName: sdk.String("similique"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("autem"),
                                                                            Expressions: []string{
                                                                                "earum",
                                                                                "culpa",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("tempora"),
                                                                            MinComparisonValue: sdk.String("nihil"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("molestiae"),
                                                                            MaxComparisonValue: sdk.String("praesentium"),
                                                                            MetricName: sdk.String("fugiat"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumUnspecifiedMatchType.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("natus"),
                                                                            Expressions: []string{
                                                                                "veritatis",
                                                                                "totam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("ab"),
                                                                            MinComparisonValue: sdk.String("deleniti"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("optio"),
                                                                            MaxComparisonValue: sdk.String("aliquid"),
                                                                            MetricName: sdk.String("in"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("facilis"),
                                                                            Expressions: []string{
                                                                                "delectus",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("sunt"),
                                                                            MinComparisonValue: sdk.String("veniam"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("corporis"),
                                                                            MaxComparisonValue: sdk.String("omnis"),
                                                                            MetricName: sdk.String("quidem"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("minima"),
                                                                            Expressions: []string{
                                                                                "aperiam",
                                                                                "et",
                                                                                "ad",
                                                                                "quidem",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("aliquid"),
                                                                            MinComparisonValue: sdk.String("quia"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("quos"),
                                                                            MaxComparisonValue: sdk.String("cum"),
                                                                            MetricName: sdk.String("praesentium"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("molestias"),
                                                                            Expressions: []string{
                                                                                "atque",
                                                                                "mollitia",
                                                                                "laudantium",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("molestias"),
                                                                            MinComparisonValue: sdk.String("quo"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("modi"),
                                                                            MaxComparisonValue: sdk.String("labore"),
                                                                            MetricName: sdk.String("consequuntur"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("aspernatur"),
                                                                            Expressions: []string{
                                                                                "deserunt",
                                                                                "repudiandae",
                                                                                "nam",
                                                                                "et",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("similique"),
                                                                            MinComparisonValue: sdk.String("saepe"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("repudiandae"),
                                                                            MaxComparisonValue: sdk.String("impedit"),
                                                                            MetricName: sdk.String("repellat"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("adipisci"),
                                                                            Expressions: []string{
                                                                                "cupiditate",
                                                                                "modi",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("commodi"),
                                                                            MinComparisonValue: sdk.String("harum"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("dolorum"),
                                                                            MaxComparisonValue: sdk.String("ducimus"),
                                                                            MetricName: sdk.String("id"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("deserunt"),
                                                                            Expressions: []string{
                                                                                "expedita",
                                                                                "magnam",
                                                                                "deserunt",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("perspiciatis"),
                                                                            MinComparisonValue: sdk.String("voluptates"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("veniam"),
                                                                            MaxComparisonValue: sdk.String("rerum"),
                                                                            MetricName: sdk.String("amet"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("rem"),
                                                                            Expressions: []string{
                                                                                "impedit",
                                                                                "fuga",
                                                                                "consectetur",
                                                                                "vel",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("dolor"),
                                                                            MinComparisonValue: sdk.String("magni"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("magni"),
                                                                            MaxComparisonValue: sdk.String("dignissimos"),
                                                                            MetricName: sdk.String("iure"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
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
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("autem"),
                                                                    Expressions: []string{
                                                                        "sint",
                                                                        "nihil",
                                                                        "voluptates",
                                                                        "accusantium",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("veniam"),
                                                                    MinComparisonValue: sdk.String("eius"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("aut"),
                                                                    MaxComparisonValue: sdk.String("neque"),
                                                                    MetricName: sdk.String("nesciunt"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("pariatur"),
                                                                    Expressions: []string{
                                                                        "corrupti",
                                                                        "asperiores",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("repellat"),
                                                                    MinComparisonValue: sdk.String("odit"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("cupiditate"),
                                                                    MaxComparisonValue: sdk.String("ab"),
                                                                    MetricName: sdk.String("vitae"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("animi"),
                                                                    Expressions: []string{
                                                                        "excepturi",
                                                                        "voluptates",
                                                                        "veniam",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("perspiciatis"),
                                                                    MinComparisonValue: sdk.String("laborum"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("fuga"),
                                                                    MaxComparisonValue: sdk.String("a"),
                                                                    MetricName: sdk.String("ipsum"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("aliquid"),
                                                                    Expressions: []string{
                                                                        "dolore",
                                                                        "accusamus",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("deserunt"),
                                                                    MinComparisonValue: sdk.String("mollitia"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("rerum"),
                                                                    MaxComparisonValue: sdk.String("sapiente"),
                                                                    MetricName: sdk.String("dolores"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("quasi"),
                                                                    Expressions: []string{
                                                                        "recusandae",
                                                                        "praesentium",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("quod"),
                                                                    MinComparisonValue: sdk.String("beatae"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("velit"),
                                                                    MaxComparisonValue: sdk.String("nemo"),
                                                                    MetricName: sdk.String("magni"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("placeat"),
                                                                    Expressions: []string{
                                                                        "repellendus",
                                                                        "dolorum",
                                                                        "maxime",
                                                                        "minus",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("ad"),
                                                                    MinComparisonValue: sdk.String("consequuntur"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("reprehenderit"),
                                                                    MaxComparisonValue: sdk.String("atque"),
                                                                    MetricName: sdk.String("architecto"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("fuga"),
                                                                    Expressions: []string{
                                                                        "architecto",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("vel"),
                                                                    MinComparisonValue: sdk.String("cum"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("aliquam"),
                                                                    MaxComparisonValue: sdk.String("inventore"),
                                                                    MetricName: sdk.String("repudiandae"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("consectetur"),
                                                                    Expressions: []string{
                                                                        "explicabo",
                                                                        "fugiat",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("quaerat"),
                                                                    MinComparisonValue: sdk.String("architecto"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("tempora"),
                                                                    MaxComparisonValue: sdk.String("similique"),
                                                                    MetricName: sdk.String("dolores"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("asperiores"),
                                                                    Expressions: []string{
                                                                        "quasi",
                                                                        "fugiat",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("debitis"),
                                                                    MinComparisonValue: sdk.String("minima"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("est"),
                                                                    MaxComparisonValue: sdk.String("dicta"),
                                                                    MetricName: sdk.String("architecto"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("vitae"),
                                                                    Expressions: []string{
                                                                        "deserunt",
                                                                        "tempora",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("velit"),
                                                                    MinComparisonValue: sdk.String("dicta"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("laboriosam"),
                                                                    MaxComparisonValue: sdk.String("sint"),
                                                                    MetricName: sdk.String("dolores"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: sdk.Bool(false),
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: sdk.Bool(false),
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("nesciunt"),
                                                                            Expressions: []string{
                                                                                "nostrum",
                                                                                "qui",
                                                                                "sunt",
                                                                                "rerum",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("corrupti"),
                                                                            MinComparisonValue: sdk.String("qui"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("similique"),
                                                                            MaxComparisonValue: sdk.String("error"),
                                                                            MetricName: sdk.String("doloremque"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("eum"),
                                                                            Expressions: []string{
                                                                                "doloremque",
                                                                                "asperiores",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("doloremque"),
                                                                            MinComparisonValue: sdk.String("fugit"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("eligendi"),
                                                                            MaxComparisonValue: sdk.String("dignissimos"),
                                                                            MetricName: sdk.String("sint"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("cumque"),
                                                                            Expressions: []string{
                                                                                "dolore",
                                                                                "eligendi",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("magni"),
                                                                            MinComparisonValue: sdk.String("libero"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("culpa"),
                                                                            MaxComparisonValue: sdk.String("ratione"),
                                                                            MetricName: sdk.String("odit"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("voluptatum"),
                                                                            Expressions: []string{
                                                                                "mollitia",
                                                                                "facere",
                                                                                "debitis",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("ex"),
                                                                            MinComparisonValue: sdk.String("magni"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("autem"),
                                                                            MaxComparisonValue: sdk.String("est"),
                                                                            MetricName: sdk.String("dolorum"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("molestias"),
                                                                            Expressions: []string{
                                                                                "voluptas",
                                                                                "corporis",
                                                                                "eveniet",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("eos"),
                                                                            MinComparisonValue: sdk.String("aperiam"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("amet"),
                                                                            MaxComparisonValue: sdk.String("aut"),
                                                                            MetricName: sdk.String("quasi"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("fuga"),
                                                                            Expressions: []string{
                                                                                "modi",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("soluta"),
                                                                            MinComparisonValue: sdk.String("libero"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("dignissimos"),
                                                                            MaxComparisonValue: sdk.String("repellendus"),
                                                                            MetricName: sdk.String("labore"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumUnspecifiedMatchType.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("iusto"),
                                                                            Expressions: []string{
                                                                                "ea",
                                                                                "accusantium",
                                                                                "esse",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("facere"),
                                                                            MinComparisonValue: sdk.String("architecto"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("voluptatem"),
                                                                            MaxComparisonValue: sdk.String("aliquid"),
                                                                            MetricName: sdk.String("explicabo"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
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
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("magnam"),
                                                                    Expressions: []string{
                                                                        "neque",
                                                                        "pariatur",
                                                                        "distinctio",
                                                                        "cupiditate",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("cumque"),
                                                                    MinComparisonValue: sdk.String("similique"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("sapiente"),
                                                                    MaxComparisonValue: sdk.String("consectetur"),
                                                                    MetricName: sdk.String("quos"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("libero"),
                                                                    Expressions: []string{
                                                                        "quos",
                                                                        "in",
                                                                        "laudantium",
                                                                        "molestiae",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("voluptatem"),
                                                                    MinComparisonValue: sdk.String("neque"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("natus"),
                                                                    MaxComparisonValue: sdk.String("adipisci"),
                                                                    MetricName: sdk.String("doloribus"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: sdk.Bool(false),
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: sdk.Bool(false),
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("ex"),
                                                                            Expressions: []string{
                                                                                "mollitia",
                                                                                "sequi",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("eos"),
                                                                            MinComparisonValue: sdk.String("laudantium"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("fugit"),
                                                                            MaxComparisonValue: sdk.String("iusto"),
                                                                            MetricName: sdk.String("natus"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("beatae"),
                                                                            Expressions: []string{
                                                                                "quibusdam",
                                                                                "ab",
                                                                                "eligendi",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("accusamus"),
                                                                            MinComparisonValue: sdk.String("officia"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("reprehenderit"),
                                                                            MaxComparisonValue: sdk.String("neque"),
                                                                            MetricName: sdk.String("facere"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("nesciunt"),
                                                                            Expressions: []string{
                                                                                "sequi",
                                                                                "quis",
                                                                                "voluptates",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("aliquam"),
                                                                            MinComparisonValue: sdk.String("perspiciatis"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("adipisci"),
                                                                            MaxComparisonValue: sdk.String("et"),
                                                                            MetricName: sdk.String("consectetur"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("iusto"),
                                                                            Expressions: []string{
                                                                                "optio",
                                                                                "necessitatibus",
                                                                                "minima",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("numquam"),
                                                                            MinComparisonValue: sdk.String("minus"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("porro"),
                                                                            MaxComparisonValue: sdk.String("libero"),
                                                                            MetricName: sdk.String("perferendis"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("vero"),
                                                                            Expressions: []string{
                                                                                "sint",
                                                                                "ducimus",
                                                                                "minima",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("voluptatem"),
                                                                            MinComparisonValue: sdk.String("labore"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("harum"),
                                                                            MaxComparisonValue: sdk.String("error"),
                                                                            MetricName: sdk.String("quod"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("neque"),
                                                                            Expressions: []string{
                                                                                "sed",
                                                                                "quasi",
                                                                                "nemo",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("sunt"),
                                                                            MinComparisonValue: sdk.String("quos"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("id"),
                                                                            MaxComparisonValue: sdk.String("nam"),
                                                                            MetricName: sdk.String("corporis"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("alias"),
                                                                            Expressions: []string{
                                                                                "qui",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("autem"),
                                                                            MinComparisonValue: sdk.String("architecto"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("velit"),
                                                                            MaxComparisonValue: sdk.String("ab"),
                                                                            MetricName: sdk.String("ad"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("nostrum"),
                                                                            Expressions: []string{
                                                                                "totam",
                                                                                "magni",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("sint"),
                                                                            MinComparisonValue: sdk.String("occaecati"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("voluptas"),
                                                                            MaxComparisonValue: sdk.String("architecto"),
                                                                            MetricName: sdk.String("officia"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("in"),
                                                                            Expressions: []string{
                                                                                "totam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("suscipit"),
                                                                            MinComparisonValue: sdk.String("asperiores"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("dolores"),
                                                                            MaxComparisonValue: sdk.String("alias"),
                                                                            MetricName: sdk.String("tempore"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("delectus"),
                                                                            Expressions: []string{
                                                                                "accusantium",
                                                                                "quo",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("id"),
                                                                            MinComparisonValue: sdk.String("alias"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("dignissimos"),
                                                                            MaxComparisonValue: sdk.String("aliquid"),
                                                                            MetricName: sdk.String("ad"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("quae"),
                                                                            Expressions: []string{
                                                                                "eius",
                                                                                "ab",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("distinctio"),
                                                                            MinComparisonValue: sdk.String("facilis"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("aut"),
                                                                            MaxComparisonValue: sdk.String("nostrum"),
                                                                            MetricName: sdk.String("veniam"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("et"),
                                                                            Expressions: []string{
                                                                                "eos",
                                                                                "quaerat",
                                                                                "vitae",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("architecto"),
                                                                            MinComparisonValue: sdk.String("repellendus"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("suscipit"),
                                                                            MaxComparisonValue: sdk.String("consequatur"),
                                                                            MetricName: sdk.String("aliquid"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("beatae"),
                                                                            Expressions: []string{
                                                                                "sunt",
                                                                                "rem",
                                                                                "magni",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("ducimus"),
                                                                            MinComparisonValue: sdk.String("fugit"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("minus"),
                                                                            MaxComparisonValue: sdk.String("cupiditate"),
                                                                            MetricName: sdk.String("placeat"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumUnspecifiedMatchType.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("sint"),
                                                                            Expressions: []string{
                                                                                "rerum",
                                                                                "inventore",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("quas"),
                                                                            MinComparisonValue: sdk.String("deleniti"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("reiciendis"),
                                                                            MaxComparisonValue: sdk.String("cumque"),
                                                                            MetricName: sdk.String("rerum"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("distinctio"),
                                                                            Expressions: []string{
                                                                                "neque",
                                                                                "maxime",
                                                                                "ab",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("nostrum"),
                                                                            MinComparisonValue: sdk.String("repellat"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("molestiae"),
                                                                            MaxComparisonValue: sdk.String("alias"),
                                                                            MetricName: sdk.String("libero"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
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
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("numquam"),
                                                                    Expressions: []string{
                                                                        "sequi",
                                                                        "sunt",
                                                                        "vel",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("exercitationem"),
                                                                    MinComparisonValue: sdk.String("dolor"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("necessitatibus"),
                                                                    MaxComparisonValue: sdk.String("harum"),
                                                                    MetricName: sdk.String("amet"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("vero"),
                                                                    Expressions: []string{
                                                                        "quaerat",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("dicta"),
                                                                    MinComparisonValue: sdk.String("quisquam"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("quasi"),
                                                                    MaxComparisonValue: sdk.String("alias"),
                                                                    MetricName: sdk.String("occaecati"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("dolor"),
                                                                    Expressions: []string{
                                                                        "eum",
                                                                        "dolorem",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("placeat"),
                                                                    MinComparisonValue: sdk.String("vel"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("quibusdam"),
                                                                    MaxComparisonValue: sdk.String("cumque"),
                                                                    MetricName: sdk.String("libero"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                    shared.OrFiltersForSegment{
                                                        SegmentFilterClauses: []shared.SegmentFilterClause{
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("reiciendis"),
                                                                    Expressions: []string{
                                                                        "porro",
                                                                        "soluta",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("aperiam"),
                                                                    MinComparisonValue: sdk.String("molestias"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("totam"),
                                                                    MaxComparisonValue: sdk.String("distinctio"),
                                                                    MetricName: sdk.String("modi"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("recusandae"),
                                                                    Expressions: []string{
                                                                        "nihil",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("dicta"),
                                                                    MinComparisonValue: sdk.String("adipisci"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("in"),
                                                                    MaxComparisonValue: sdk.String("magnam"),
                                                                    MetricName: sdk.String("repellendus"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("a"),
                                                                    Expressions: []string{
                                                                        "vero",
                                                                        "quae",
                                                                        "doloremque",
                                                                        "et",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("possimus"),
                                                                    MinComparisonValue: sdk.String("unde"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("praesentium"),
                                                                    MaxComparisonValue: sdk.String("aperiam"),
                                                                    MetricName: sdk.String("laborum"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("minus"),
                                                                    Expressions: []string{
                                                                        "odio",
                                                                        "rerum",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("provident"),
                                                                    MinComparisonValue: sdk.String("nostrum"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumOperatorUnspecified.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("aliquam"),
                                                                    MaxComparisonValue: sdk.String("accusantium"),
                                                                    MetricName: sdk.String("possimus"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.SegmentFilter{
                                            Not: sdk.Bool(false),
                                            SequenceSegment: &shared.SequenceSegment{
                                                FirstStepShouldMatchFirstHit: sdk.Bool(false),
                                                SegmentSequenceSteps: []shared.SegmentSequenceStep{
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumImmediatelyPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("ipsam"),
                                                                            Expressions: []string{
                                                                                "alias",
                                                                                "perferendis",
                                                                                "aspernatur",
                                                                                "sed",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("sit"),
                                                                            MinComparisonValue: sdk.String("esse"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("ut"),
                                                                            MaxComparisonValue: sdk.String("quae"),
                                                                            MetricName: sdk.String("dolore"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("cupiditate"),
                                                                            Expressions: []string{
                                                                                "alias",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("sit"),
                                                                            MinComparisonValue: sdk.String("iste"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("illum"),
                                                                            MaxComparisonValue: sdk.String("consequuntur"),
                                                                            MetricName: sdk.String("occaecati"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("esse"),
                                                                            Expressions: []string{
                                                                                "accusamus",
                                                                                "quidem",
                                                                                "aliquam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("fuga"),
                                                                            MinComparisonValue: sdk.String("itaque"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("pariatur"),
                                                                            MaxComparisonValue: sdk.String("suscipit"),
                                                                            MetricName: sdk.String("ut"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumUnspecifiedMatchType.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("sunt"),
                                                                            Expressions: []string{
                                                                                "quae",
                                                                                "alias",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("ratione"),
                                                                            MinComparisonValue: sdk.String("sed"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("rerum"),
                                                                            MaxComparisonValue: sdk.String("eos"),
                                                                            MetricName: sdk.String("eligendi"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("distinctio"),
                                                                            Expressions: []string{
                                                                                "consequuntur",
                                                                                "tempora",
                                                                                "voluptate",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("odio"),
                                                                            MinComparisonValue: sdk.String("dicta"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("nemo"),
                                                                            MaxComparisonValue: sdk.String("laboriosam"),
                                                                            MetricName: sdk.String("aliquid"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("nemo"),
                                                                            Expressions: []string{
                                                                                "in",
                                                                                "saepe",
                                                                                "porro",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("dignissimos"),
                                                                            MinComparisonValue: sdk.String("nisi"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("iure"),
                                                                            MaxComparisonValue: sdk.String("ea"),
                                                                            MetricName: sdk.String("labore"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("aliquam"),
                                                                            Expressions: []string{
                                                                                "tempore",
                                                                                "provident",
                                                                                "recusandae",
                                                                                "numquam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("cumque"),
                                                                            MinComparisonValue: sdk.String("a"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("dolores"),
                                                                            MaxComparisonValue: sdk.String("odit"),
                                                                            MetricName: sdk.String("molestiae"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("sit"),
                                                                            Expressions: []string{
                                                                                "rem",
                                                                                "deleniti",
                                                                                "repellat",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("harum"),
                                                                            MinComparisonValue: sdk.String("atque"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumPartial.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("nulla"),
                                                                            MaxComparisonValue: sdk.String("aliquid"),
                                                                            MetricName: sdk.String("asperiores"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("cum"),
                                                                            Expressions: []string{
                                                                                "earum",
                                                                                "corrupti",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("temporibus"),
                                                                            MinComparisonValue: sdk.String("libero"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("praesentium"),
                                                                            MaxComparisonValue: sdk.String("dicta"),
                                                                            MetricName: sdk.String("qui"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("nam"),
                                                                            Expressions: []string{
                                                                                "eligendi",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("animi"),
                                                                            MinComparisonValue: sdk.String("autem"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("omnis"),
                                                                            MaxComparisonValue: sdk.String("voluptatibus"),
                                                                            MetricName: sdk.String("asperiores"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("vitae"),
                                                                            Expressions: []string{
                                                                                "odit",
                                                                                "omnis",
                                                                                "placeat",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("cumque"),
                                                                            MinComparisonValue: sdk.String("officia"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("nemo"),
                                                                            MaxComparisonValue: sdk.String("laboriosam"),
                                                                            MetricName: sdk.String("eaque"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("adipisci"),
                                                                            Expressions: []string{
                                                                                "exercitationem",
                                                                                "excepturi",
                                                                                "illo",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("quas"),
                                                                            MinComparisonValue: sdk.String("facere"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("ab"),
                                                                            MaxComparisonValue: sdk.String("fugiat"),
                                                                            MetricName: sdk.String("magnam"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    shared.SegmentSequenceStep{
                                                        MatchType: shared.SegmentSequenceStepMatchTypeEnumPrecedes.ToPointer(),
                                                        OrFiltersForSegment: []shared.OrFiltersForSegment{
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("ipsum"),
                                                                            Expressions: []string{
                                                                                "asperiores",
                                                                                "praesentium",
                                                                                "accusamus",
                                                                                "inventore",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("ab"),
                                                                            MinComparisonValue: sdk.String("dolore"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumBeginsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("nulla"),
                                                                            MaxComparisonValue: sdk.String("officia"),
                                                                            MetricName: sdk.String("natus"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("deleniti"),
                                                                            Expressions: []string{
                                                                                "magni",
                                                                                "nihil",
                                                                                "laborum",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("aut"),
                                                                            MinComparisonValue: sdk.String("voluptatum"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("reiciendis"),
                                                                            MaxComparisonValue: sdk.String("qui"),
                                                                            MetricName: sdk.String("aspernatur"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("eius"),
                                                                            Expressions: []string{
                                                                                "amet",
                                                                                "iste",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("libero"),
                                                                            MinComparisonValue: sdk.String("nesciunt"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("recusandae"),
                                                                            MaxComparisonValue: sdk.String("deleniti"),
                                                                            MetricName: sdk.String("iure"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("eligendi"),
                                                                            Expressions: []string{
                                                                                "optio",
                                                                                "eveniet",
                                                                                "incidunt",
                                                                                "dignissimos",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("accusantium"),
                                                                            MinComparisonValue: sdk.String("impedit"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("fugit"),
                                                                            MaxComparisonValue: sdk.String("veritatis"),
                                                                            MetricName: sdk.String("non"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumGreaterThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("recusandae"),
                                                                            Expressions: []string{
                                                                                "dicta",
                                                                                "ipsam",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("aspernatur"),
                                                                            MinComparisonValue: sdk.String("placeat"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericBetween.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("ipsa"),
                                                                            MaxComparisonValue: sdk.String("et"),
                                                                            MetricName: sdk.String("quibusdam"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("voluptatum"),
                                                                            Expressions: []string{
                                                                                "dolor",
                                                                                "culpa",
                                                                                "magnam",
                                                                                "facilis",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("natus"),
                                                                            MinComparisonValue: sdk.String("laborum"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("quidem"),
                                                                            MaxComparisonValue: sdk.String("repellat"),
                                                                            MetricName: sdk.String("molestias"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumProduct.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                },
                                                            },
                                                            shared.OrFiltersForSegment{
                                                                SegmentFilterClauses: []shared.SegmentFilterClause{
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("voluptatibus"),
                                                                            Expressions: []string{
                                                                                "provident",
                                                                                "iure",
                                                                                "incidunt",
                                                                                "repellat",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("similique"),
                                                                            MinComparisonValue: sdk.String("ut"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("et"),
                                                                            MaxComparisonValue: sdk.String("voluptates"),
                                                                            MetricName: sdk.String("excepturi"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("natus"),
                                                                            Expressions: []string{
                                                                                "accusamus",
                                                                                "temporibus",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("animi"),
                                                                            MinComparisonValue: sdk.String("autem"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumRegexp.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("neque"),
                                                                            MaxComparisonValue: sdk.String("magnam"),
                                                                            MetricName: sdk.String("numquam"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumUser.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("beatae"),
                                                                            Expressions: []string{
                                                                                "unde",
                                                                                "consequuntur",
                                                                                "ratione",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("quam"),
                                                                            MinComparisonValue: sdk.String("recusandae"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumInList.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("cupiditate"),
                                                                            MaxComparisonValue: sdk.String("blanditiis"),
                                                                            MetricName: sdk.String("numquam"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumHit.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
                                                                    },
                                                                    shared.SegmentFilterClause{
                                                                        DimensionFilter: &shared.SegmentDimensionFilter{
                                                                            CaseSensitive: sdk.Bool(false),
                                                                            DimensionName: sdk.String("consequatur"),
                                                                            Expressions: []string{
                                                                                "ut",
                                                                                "nihil",
                                                                                "sint",
                                                                            },
                                                                            MaxComparisonValue: sdk.String("saepe"),
                                                                            MinComparisonValue: sdk.String("atque"),
                                                                            Operator: shared.SegmentDimensionFilterOperatorEnumExact.ToPointer(),
                                                                        },
                                                                        MetricFilter: &shared.SegmentMetricFilter{
                                                                            ComparisonValue: sdk.String("architecto"),
                                                                            MaxComparisonValue: sdk.String("molestias"),
                                                                            MetricName: sdk.String("dolores"),
                                                                            Operator: shared.SegmentMetricFilterOperatorEnumLessThan.ToPointer(),
                                                                            Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                        },
                                                                        Not: sdk.Bool(false),
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
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("cumque"),
                                                                    Expressions: []string{
                                                                        "rem",
                                                                        "facere",
                                                                        "vel",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("cupiditate"),
                                                                    MinComparisonValue: sdk.String("porro"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumEndsWith.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("ex"),
                                                                    MaxComparisonValue: sdk.String("rem"),
                                                                    MetricName: sdk.String("cupiditate"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumUnspecifiedOperator.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("tempora"),
                                                                    Expressions: []string{
                                                                        "animi",
                                                                        "consequuntur",
                                                                        "doloremque",
                                                                        "magni",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("alias"),
                                                                    MinComparisonValue: sdk.String("reprehenderit"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericGreaterThan.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("eius"),
                                                                    MaxComparisonValue: sdk.String("delectus"),
                                                                    MetricName: sdk.String("similique"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumBetween.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumUnspecifiedScope.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                            shared.SegmentFilterClause{
                                                                DimensionFilter: &shared.SegmentDimensionFilter{
                                                                    CaseSensitive: sdk.Bool(false),
                                                                    DimensionName: sdk.String("ipsum"),
                                                                    Expressions: []string{
                                                                        "eligendi",
                                                                        "facere",
                                                                        "esse",
                                                                    },
                                                                    MaxComparisonValue: sdk.String("tenetur"),
                                                                    MinComparisonValue: sdk.String("ab"),
                                                                    Operator: shared.SegmentDimensionFilterOperatorEnumNumericLessThan.ToPointer(),
                                                                },
                                                                MetricFilter: &shared.SegmentMetricFilter{
                                                                    ComparisonValue: sdk.String("minus"),
                                                                    MaxComparisonValue: sdk.String("ratione"),
                                                                    MetricName: sdk.String("placeat"),
                                                                    Operator: shared.SegmentMetricFilterOperatorEnumEqual.ToPointer(),
                                                                    Scope: shared.SegmentMetricFilterScopeEnumSession.ToPointer(),
                                                                },
                                                                Not: sdk.Bool(false),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            SegmentID: sdk.String("dolorum"),
                        },
                    },
                    ViewID: sdk.String("repellat"),
                },
            },
            UseResourceQuotas: sdk.Bool(false),
        },
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("optio"),
        Fields: sdk.String("eos"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("numquam"),
    }, operations.AnalyticsreportingReportsBatchGetSecurity{
        Option1: &operations.AnalyticsreportingReportsBatchGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReportsResponse != nil {
        // handle response
    }
}
```
