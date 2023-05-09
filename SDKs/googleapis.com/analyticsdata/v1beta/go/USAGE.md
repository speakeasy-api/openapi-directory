<!-- Start SDK Example Usage -->
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
    res, err := s.Properties.AnalyticsdataPropertiesBatchRunPivotReports(ctx, operations.AnalyticsdataPropertiesBatchRunPivotReportsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchRunPivotReportsRequest: &shared.BatchRunPivotReportsRequest{
            Requests: []shared.RunPivotReportRequest{
                shared.RunPivotReportRequest{
                    CohortSpec: &shared.CohortSpec{
                        CohortReportSettings: &shared.CohortReportSettings{
                            Accumulate: sdk.Bool(false),
                        },
                        Cohorts: []shared.Cohort{
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: sdk.String("quibusdam"),
                                    Name: sdk.String("Ismael Little"),
                                    StartDate: sdk.String("error"),
                                },
                                Dimension: sdk.String("deserunt"),
                                Name: sdk.String("Willie Gulgowski DVM"),
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: sdk.String("tempora"),
                                    Name: sdk.String("Minnie Schiller"),
                                    StartDate: sdk.String("iusto"),
                                },
                                Dimension: sdk.String("excepturi"),
                                Name: sdk.String("Mrs. Sophie Smith MD"),
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: sdk.String("perferendis"),
                                    Name: sdk.String("Estelle Will"),
                                    StartDate: sdk.String("at"),
                                },
                                Dimension: sdk.String("at"),
                                Name: sdk.String("Javier Schmidt"),
                            },
                        },
                        CohortsRange: &shared.CohortsRange{
                            EndOffset: sdk.Int(520478),
                            Granularity: shared.CohortsRangeGranularityEnumMonthly.ToPointer(),
                            StartOffset: sdk.Int(678880),
                        },
                    },
                    CurrencyCode: sdk.String("dicta"),
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: sdk.String("officia"),
                            Name: sdk.String("Wayne Lind"),
                            StartDate: sdk.String("totam"),
                        },
                        shared.DateRange{
                            EndDate: sdk.String("beatae"),
                            Name: sdk.String("Tanya Gleason"),
                            StartDate: sdk.String("cum"),
                        },
                        shared.DateRange{
                            EndDate: sdk.String("esse"),
                            Name: sdk.String("Mrs. Miriam Collier"),
                            StartDate: sdk.String("sed"),
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
                                    DoubleValue: sdk.Float64(2223.21),
                                    Int64Value: sdk.String("natus"),
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(3864.89),
                                    Int64Value: sdk.String("hic"),
                                },
                            },
                            FieldName: sdk.String("saepe"),
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: sdk.Bool(false),
                                Values: []string{
                                    "in",
                                    "corporis",
                                    "iste",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: shared.NumericFilterOperationEnumLessThan.ToPointer(),
                                Value: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(9023.49),
                                    Int64Value: sdk.String("quidem"),
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: sdk.Bool(false),
                                MatchType: shared.StringFilterMatchTypeEnumMatchTypeUnspecified.ToPointer(),
                                Value: sdk.String("ipsa"),
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
                                    Delimiter: sdk.String("mollitia"),
                                    DimensionNames: []string{
                                        "dolores",
                                        "dolorem",
                                        "corporis",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("explicabo"),
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("nobis"),
                                },
                            },
                            Name: sdk.String("Guadalupe Hickle"),
                        },
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: sdk.String("accusantium"),
                                    DimensionNames: []string{
                                        "culpa",
                                        "doloribus",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("sapiente"),
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("architecto"),
                                },
                            },
                            Name: sdk.String("Mike Nicolas"),
                        },
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: sdk.String("mollitia"),
                                    DimensionNames: []string{
                                        "numquam",
                                        "commodi",
                                        "quam",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("molestiae"),
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("velit"),
                                },
                            },
                            Name: sdk.String("Miss Eugene Hauck"),
                        },
                    },
                    KeepEmptyRows: sdk.Bool(false),
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
                                    DoubleValue: sdk.Float64(1381.83),
                                    Int64Value: sdk.String("quo"),
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(1965.82),
                                    Int64Value: sdk.String("tenetur"),
                                },
                            },
                            FieldName: sdk.String("ipsam"),
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: sdk.Bool(false),
                                Values: []string{
                                    "possimus",
                                    "aut",
                                    "quasi",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: shared.NumericFilterOperationEnumLessThanOrEqual.ToPointer(),
                                Value: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(8379.45),
                                    Int64Value: sdk.String("laborum"),
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: sdk.Bool(false),
                                MatchType: shared.StringFilterMatchTypeEnumMatchTypeUnspecified.ToPointer(),
                                Value: sdk.String("reiciendis"),
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
                            Expression: sdk.String("nihil"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Jan Bednar"),
                        },
                        shared.Metric{
                            Expression: sdk.String("cum"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Sharon Kiehn"),
                        },
                        shared.Metric{
                            Expression: sdk.String("dicta"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Miss Valerie Kshlerin"),
                        },
                        shared.Metric{
                            Expression: sdk.String("accusamus"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Elvira Bergnaum"),
                        },
                    },
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            FieldNames: []string{
                                "pariatur",
                                "modi",
                                "praesentium",
                            },
                            Limit: sdk.String("rem"),
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                shared.PivotMetricAggregationsEnumMetricAggregationUnspecified,
                                shared.PivotMetricAggregationsEnumCount,
                                shared.PivotMetricAggregationsEnumMinimum,
                                shared.PivotMetricAggregationsEnumMetricAggregationUnspecified,
                            },
                            Offset: sdk.String("itaque"),
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("enim"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumOrderTypeUnspecified.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("est"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("quibusdam"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("deserunt"),
                                                DimensionValue: sdk.String("distinctio"),
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("quibusdam"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumAlphanumeric.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("modi"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("qui"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("cupiditate"),
                                                DimensionValue: sdk.String("quos"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("perferendis"),
                                                DimensionValue: sdk.String("magni"),
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.Pivot{
                            FieldNames: []string{
                                "ipsam",
                                "alias",
                                "fugit",
                                "dolorum",
                            },
                            Limit: sdk.String("excepturi"),
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                shared.PivotMetricAggregationsEnumMaximum,
                                shared.PivotMetricAggregationsEnumMaximum,
                            },
                            Offset: sdk.String("labore"),
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("eum"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumOrderTypeUnspecified.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("eligendi"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("sint"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("provident"),
                                                DimensionValue: sdk.String("necessitatibus"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("sint"),
                                                DimensionValue: sdk.String("officia"),
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("dolor"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumNumeric.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("a"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("dolorum"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("in"),
                                                DimensionValue: sdk.String("illum"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("maiores"),
                                                DimensionValue: sdk.String("rerum"),
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("dicta"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumAlphanumeric.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("cumque"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("facere"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("aliquid"),
                                                DimensionValue: sdk.String("laborum"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("accusamus"),
                                                DimensionValue: sdk.String("non"),
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("occaecati"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumAlphanumeric.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("accusamus"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("delectus"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("provident"),
                                                DimensionValue: sdk.String("nam"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("id"),
                                                DimensionValue: sdk.String("blanditiis"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("deleniti"),
                                                DimensionValue: sdk.String("sapiente"),
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.Pivot{
                            FieldNames: []string{
                                "deserunt",
                            },
                            Limit: sdk.String("nisi"),
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                shared.PivotMetricAggregationsEnumMaximum,
                                shared.PivotMetricAggregationsEnumMaximum,
                            },
                            Offset: sdk.String("molestiae"),
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("nihil"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumAlphanumeric.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("distinctio"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("id"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("labore"),
                                                DimensionValue: sdk.String("suscipit"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("natus"),
                                                DimensionValue: sdk.String("nobis"),
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    Property: sdk.String("eum"),
                    ReturnPropertyQuota: sdk.Bool(false),
                },
                shared.RunPivotReportRequest{
                    CohortSpec: &shared.CohortSpec{
                        CohortReportSettings: &shared.CohortReportSettings{
                            Accumulate: sdk.Bool(false),
                        },
                        Cohorts: []shared.Cohort{
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: sdk.String("aspernatur"),
                                    Name: sdk.String("Danielle Bosco"),
                                    StartDate: sdk.String("provident"),
                                },
                                Dimension: sdk.String("quos"),
                                Name: sdk.String("Kenneth O'Hara"),
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: sdk.String("ad"),
                                    Name: sdk.String("Carmen Treutel"),
                                    StartDate: sdk.String("quasi"),
                                },
                                Dimension: sdk.String("iure"),
                                Name: sdk.String("Doyle Gibson"),
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: sdk.String("facilis"),
                                    Name: sdk.String("Alice Bradtke"),
                                    StartDate: sdk.String("expedita"),
                                },
                                Dimension: sdk.String("nihil"),
                                Name: sdk.String("Marty Cormier"),
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: sdk.String("accusantium"),
                                    Name: sdk.String("Irma Morissette DDS"),
                                    StartDate: sdk.String("illum"),
                                },
                                Dimension: sdk.String("pariatur"),
                                Name: sdk.String("Nathaniel Marks"),
                            },
                        },
                        CohortsRange: &shared.CohortsRange{
                            EndOffset: sdk.Int(33222),
                            Granularity: shared.CohortsRangeGranularityEnumGranularityUnspecified.ToPointer(),
                            StartOffset: sdk.Int(982575),
                        },
                    },
                    CurrencyCode: sdk.String("quidem"),
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: sdk.String("voluptate"),
                            Name: sdk.String("Candice Beatty"),
                            StartDate: sdk.String("voluptatibus"),
                        },
                        shared.DateRange{
                            EndDate: sdk.String("perferendis"),
                            Name: sdk.String("Vincent Anderson"),
                            StartDate: sdk.String("hic"),
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
                                    DoubleValue: sdk.Float64(7499.99),
                                    Int64Value: sdk.String("dolores"),
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(3394.04),
                                    Int64Value: sdk.String("totam"),
                                },
                            },
                            FieldName: sdk.String("dignissimos"),
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: sdk.Bool(false),
                                Values: []string{
                                    "quis",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: shared.NumericFilterOperationEnumEqual.ToPointer(),
                                Value: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(1794.9),
                                    Int64Value: sdk.String("perferendis"),
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: sdk.Bool(false),
                                MatchType: shared.StringFilterMatchTypeEnumExact.ToPointer(),
                                Value: sdk.String("minus"),
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
                    Dimensions: []shared.Dimension{
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: sdk.String("vero"),
                                    DimensionNames: []string{
                                        "hic",
                                        "recusandae",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("omnis"),
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("facilis"),
                                },
                            },
                            Name: sdk.String("George Sawayn"),
                        },
                    },
                    KeepEmptyRows: sdk.Bool(false),
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
                                    DoubleValue: sdk.Float64(503.7),
                                    Int64Value: sdk.String("occaecati"),
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(6990.98),
                                    Int64Value: sdk.String("adipisci"),
                                },
                            },
                            FieldName: sdk.String("asperiores"),
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: sdk.Bool(false),
                                Values: []string{
                                    "modi",
                                    "iste",
                                    "dolorum",
                                    "deleniti",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: shared.NumericFilterOperationEnumGreaterThanOrEqual.ToPointer(),
                                Value: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(5899.1),
                                    Int64Value: sdk.String("nobis"),
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: sdk.Bool(false),
                                MatchType: shared.StringFilterMatchTypeEnumFullRegexp.ToPointer(),
                                Value: sdk.String("delectus"),
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
                            Expression: sdk.String("aliquid"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Dawn Fadel"),
                        },
                        shared.Metric{
                            Expression: sdk.String("hic"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Felipe Klein"),
                        },
                        shared.Metric{
                            Expression: sdk.String("amet"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Mr. Bradley Bogan"),
                        },
                    },
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            FieldNames: []string{
                                "accusamus",
                                "quidem",
                            },
                            Limit: sdk.String("voluptatibus"),
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                shared.PivotMetricAggregationsEnumMaximum,
                                shared.PivotMetricAggregationsEnumMetricAggregationUnspecified,
                            },
                            Offset: sdk.String("atque"),
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("fugiat"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumOrderTypeUnspecified.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("soluta"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("dolorum"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("voluptate"),
                                                DimensionValue: sdk.String("dolorum"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("deleniti"),
                                                DimensionValue: sdk.String("omnis"),
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.Pivot{
                            FieldNames: []string{
                                "distinctio",
                                "asperiores",
                                "nihil",
                                "ipsum",
                            },
                            Limit: sdk.String("voluptate"),
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                shared.PivotMetricAggregationsEnumCount,
                                shared.PivotMetricAggregationsEnumTotal,
                                shared.PivotMetricAggregationsEnumMetricAggregationUnspecified,
                            },
                            Offset: sdk.String("perferendis"),
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("optio"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumNumeric.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("ad"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("saepe"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("deserunt"),
                                                DimensionValue: sdk.String("provident"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("minima"),
                                                DimensionValue: sdk.String("repellendus"),
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    Property: sdk.String("totam"),
                    ReturnPropertyQuota: sdk.Bool(false),
                },
                shared.RunPivotReportRequest{
                    CohortSpec: &shared.CohortSpec{
                        CohortReportSettings: &shared.CohortReportSettings{
                            Accumulate: sdk.Bool(false),
                        },
                        Cohorts: []shared.Cohort{
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: sdk.String("alias"),
                                    Name: sdk.String("Alex Goodwin"),
                                    StartDate: sdk.String("officiis"),
                                },
                                Dimension: sdk.String("qui"),
                                Name: sdk.String("Randal Klocko"),
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: sdk.String("ipsum"),
                                    Name: sdk.String("Saul Fay"),
                                    StartDate: sdk.String("numquam"),
                                },
                                Dimension: sdk.String("enim"),
                                Name: sdk.String("Jeannie Leannon MD"),
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: sdk.String("neque"),
                                    Name: sdk.String("Gina Renner"),
                                    StartDate: sdk.String("quam"),
                                },
                                Dimension: sdk.String("ipsum"),
                                Name: sdk.String("Norma McGlynn"),
                            },
                        },
                        CohortsRange: &shared.CohortsRange{
                            EndOffset: sdk.Int(747080),
                            Granularity: shared.CohortsRangeGranularityEnumGranularityUnspecified.ToPointer(),
                            StartOffset: sdk.Int(674848),
                        },
                    },
                    CurrencyCode: sdk.String("totam"),
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: sdk.String("aspernatur"),
                            Name: sdk.String("Verna Purdy"),
                            StartDate: sdk.String("molestias"),
                        },
                        shared.DateRange{
                            EndDate: sdk.String("temporibus"),
                            Name: sdk.String("Gladys Considine"),
                            StartDate: sdk.String("sunt"),
                        },
                    },
                    DimensionFilter: &shared.FilterExpression{
                        AndGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{},
                                shared.FilterExpression{},
                            },
                        },
                        Filter: &shared.Filter{
                            BetweenFilter: &shared.BetweenFilter{
                                FromValue: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(7220.81),
                                    Int64Value: sdk.String("hic"),
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(304.52),
                                    Int64Value: sdk.String("cumque"),
                                },
                            },
                            FieldName: sdk.String("soluta"),
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: sdk.Bool(false),
                                Values: []string{
                                    "et",
                                    "saepe",
                                    "ipsum",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: shared.NumericFilterOperationEnumOperationUnspecified.ToPointer(),
                                Value: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(7492.55),
                                    Int64Value: sdk.String("quos"),
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: sdk.Bool(false),
                                MatchType: shared.StringFilterMatchTypeEnumFullRegexp.ToPointer(),
                                Value: sdk.String("cupiditate"),
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
                                    Delimiter: sdk.String("dolorem"),
                                    DimensionNames: []string{
                                        "labore",
                                        "adipisci",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("dolorum"),
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("architecto"),
                                },
                            },
                            Name: sdk.String("Margaret Luettgen MD"),
                        },
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: sdk.String("repellendus"),
                                    DimensionNames: []string{
                                        "doloribus",
                                        "ut",
                                        "facilis",
                                        "cupiditate",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("qui"),
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("quae"),
                                },
                            },
                            Name: sdk.String("Darren McClure"),
                        },
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: sdk.String("vero"),
                                    DimensionNames: []string{
                                        "quis",
                                        "ipsum",
                                        "delectus",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("voluptate"),
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("consectetur"),
                                },
                            },
                            Name: sdk.String("Roman Kulas"),
                        },
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: sdk.String("quod"),
                                    DimensionNames: []string{
                                        "similique",
                                        "facilis",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("vero"),
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("ducimus"),
                                },
                            },
                            Name: sdk.String("Rosemarie Stanton"),
                        },
                    },
                    KeepEmptyRows: sdk.Bool(false),
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
                                    DoubleValue: sdk.Float64(132.36),
                                    Int64Value: sdk.String("voluptatibus"),
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(3472.33),
                                    Int64Value: sdk.String("nulla"),
                                },
                            },
                            FieldName: sdk.String("fugit"),
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: sdk.Bool(false),
                                Values: []string{
                                    "maiores",
                                    "doloribus",
                                    "iusto",
                                    "eligendi",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: shared.NumericFilterOperationEnumLessThan.ToPointer(),
                                Value: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(40.48),
                                    Int64Value: sdk.String("officia"),
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: sdk.Bool(false),
                                MatchType: shared.StringFilterMatchTypeEnumExact.ToPointer(),
                                Value: sdk.String("ipsam"),
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
                            Expression: sdk.String("vel"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Clifford Dickens"),
                        },
                    },
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            FieldNames: []string{
                                "maiores",
                            },
                            Limit: sdk.String("quasi"),
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                shared.PivotMetricAggregationsEnumCount,
                                shared.PivotMetricAggregationsEnumMinimum,
                            },
                            Offset: sdk.String("voluptatibus"),
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("sapiente"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumNumeric.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("saepe"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("ea"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("corporis"),
                                                DimensionValue: sdk.String("veniam"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("aliquid"),
                                                DimensionValue: sdk.String("inventore"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("magnam"),
                                                DimensionValue: sdk.String("ea"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("quo"),
                                                DimensionValue: sdk.String("consectetur"),
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("recusandae"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumOrderTypeUnspecified.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("minima"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("eaque"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("libero"),
                                                DimensionValue: sdk.String("aut"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("aut"),
                                                DimensionValue: sdk.String("deleniti"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("impedit"),
                                                DimensionValue: sdk.String("aliquam"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("fugit"),
                                                DimensionValue: sdk.String("accusamus"),
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    Property: sdk.String("inventore"),
                    ReturnPropertyQuota: sdk.Bool(false),
                },
            },
        },
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("placeat"),
        OauthToken: sdk.String("velit"),
        PrettyPrint: sdk.Bool(false),
        Property: "eum",
        QuotaUser: sdk.String("autem"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("quas"),
    }, operations.AnalyticsdataPropertiesBatchRunPivotReportsSecurity{
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