# Properties

### Available Operations

* [AnalyticsdataPropertiesBatchRunPivotReports](#analyticsdatapropertiesbatchrunpivotreports) - Returns multiple pivot reports in a batch. All reports must be for the same GA4 Property.
* [AnalyticsdataPropertiesBatchRunReports](#analyticsdatapropertiesbatchrunreports) - Returns multiple reports in a batch. All reports must be for the same GA4 Property.
* [AnalyticsdataPropertiesCheckCompatibility](#analyticsdatapropertiescheckcompatibility) - This compatibility method lists dimensions and metrics that can be added to a report request and maintain compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics, reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core reports have different compatibility rules. This method checks compatibility for Core reports.
* [AnalyticsdataPropertiesGetMetadata](#analyticsdatapropertiesgetmetadata) - Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions and metrics. In this method, a Google Analytics GA4 Property Identifier is specified in the request, and the metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom metric with parameter name `levels_unlocked` is registered to a property, the Metadata response will contain `customEvent:levels_unlocked`. Universal metadata are dimensions and metrics applicable to any property such as `country` and `totalUsers`.
* [AnalyticsdataPropertiesRunPivotReport](#analyticsdatapropertiesrunpivotreport) - Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in a pivot. Multiple pivots can be specified to further dissect your data.
* [AnalyticsdataPropertiesRunRealtimeReport](#analyticsdatapropertiesrunrealtimereport) - Returns a customized report of realtime event data for your property. Events appear in realtime reports seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360 properties). For a guide to constructing realtime requests & understanding responses, see [Creating a Realtime Report](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-basics).
* [AnalyticsdataPropertiesRunReport](#analyticsdatapropertiesrunreport) - Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for the requested dimensions and metrics. Metrics are individual measurements of user activity on your property, such as active users or event count. Dimensions break down metrics across some common criteria, such as country or event name. For a guide to constructing requests & understanding responses, see [Creating a Report](https://developers.google.com/analytics/devguides/reporting/data/v1/basics).

## AnalyticsdataPropertiesBatchRunPivotReports

Returns multiple pivot reports in a batch. All reports must be for the same GA4 Property.

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
                                    EndDate: sdk.String("libero"),
                                    Name: sdk.String("Anita Gerhold"),
                                    StartDate: sdk.String("ipsa"),
                                },
                                Dimension: sdk.String("molestiae"),
                                Name: sdk.String("Viola Gibson"),
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: sdk.String("rem"),
                                    Name: sdk.String("Mitchell Predovic"),
                                    StartDate: sdk.String("eum"),
                                },
                                Dimension: sdk.String("suscipit"),
                                Name: sdk.String("Alan Lang Jr."),
                            },
                        },
                        CohortsRange: &shared.CohortsRange{
                            EndOffset: sdk.Int(660040),
                            Granularity: shared.CohortsRangeGranularityEnumWeekly.ToPointer(),
                            StartOffset: sdk.Int(206594),
                        },
                    },
                    CurrencyCode: sdk.String("quo"),
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: sdk.String("quo"),
                            Name: sdk.String("Herbert Daugherty V"),
                            StartDate: sdk.String("consequatur"),
                        },
                        shared.DateRange{
                            EndDate: sdk.String("tempora"),
                            Name: sdk.String("Roberto Collier"),
                            StartDate: sdk.String("esse"),
                        },
                        shared.DateRange{
                            EndDate: sdk.String("recusandae"),
                            Name: sdk.String("Lola Schmidt IV"),
                            StartDate: sdk.String("totam"),
                        },
                        shared.DateRange{
                            EndDate: sdk.String("accusamus"),
                            Name: sdk.String("Courtney Mayert"),
                            StartDate: sdk.String("dolores"),
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
                                    DoubleValue: sdk.Float64(4752.89),
                                    Int64Value: sdk.String("accusantium"),
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(7836.48),
                                    Int64Value: sdk.String("eum"),
                                },
                            },
                            FieldName: sdk.String("quas"),
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: sdk.Bool(false),
                                Values: []string{
                                    "consequuntur",
                                    "deleniti",
                                    "fugit",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: shared.NumericFilterOperationEnumGreaterThan.ToPointer(),
                                Value: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(6494.63),
                                    Int64Value: sdk.String("incidunt"),
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: sdk.Bool(false),
                                MatchType: shared.StringFilterMatchTypeEnumEndsWith.ToPointer(),
                                Value: sdk.String("explicabo"),
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
                                    Delimiter: sdk.String("fugit"),
                                    DimensionNames: []string{
                                        "consequuntur",
                                        "ratione",
                                        "explicabo",
                                        "saepe",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("occaecati"),
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("atque"),
                                },
                            },
                            Name: sdk.String("Tamara Vandervort IV"),
                        },
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: sdk.String("quod"),
                                    DimensionNames: []string{
                                        "vero",
                                        "aliquid",
                                        "quasi",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("saepe"),
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("vel"),
                                },
                            },
                            Name: sdk.String("Javier Price"),
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
                                    DoubleValue: sdk.Float64(7567.79),
                                    Int64Value: sdk.String("sit"),
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(6360.61),
                                    Int64Value: sdk.String("tempore"),
                                },
                            },
                            FieldName: sdk.String("adipisci"),
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: sdk.Bool(false),
                                Values: []string{
                                    "consequuntur",
                                    "consequatur",
                                    "minus",
                                    "quaerat",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: shared.NumericFilterOperationEnumGreaterThanOrEqual.ToPointer(),
                                Value: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(2328.65),
                                    Int64Value: sdk.String("esse"),
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: sdk.Bool(false),
                                MatchType: shared.StringFilterMatchTypeEnumEndsWith.ToPointer(),
                                Value: sdk.String("provident"),
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
                            Expression: sdk.String("quas"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Joyce Wilderman"),
                        },
                        shared.Metric{
                            Expression: sdk.String("pariatur"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Howard Upton"),
                        },
                        shared.Metric{
                            Expression: sdk.String("veritatis"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Ann Murphy"),
                        },
                        shared.Metric{
                            Expression: sdk.String("tenetur"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Lila Kassulke"),
                        },
                    },
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            FieldNames: []string{
                                "soluta",
                                "accusantium",
                                "aliquam",
                                "sapiente",
                            },
                            Limit: sdk.String("dicta"),
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                shared.PivotMetricAggregationsEnumMinimum,
                                shared.PivotMetricAggregationsEnumTotal,
                            },
                            Offset: sdk.String("nisi"),
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("voluptatum"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumOrderTypeUnspecified.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("quibusdam"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("ex"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("itaque"),
                                                DimensionValue: sdk.String("dolorum"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("architecto"),
                                                DimensionValue: sdk.String("omnis"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("tenetur"),
                                                DimensionValue: sdk.String("quasi"),
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.Pivot{
                            FieldNames: []string{
                                "et",
                                "voluptate",
                                "ipsa",
                                "minima",
                            },
                            Limit: sdk.String("veritatis"),
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                shared.PivotMetricAggregationsEnumTotal,
                            },
                            Offset: sdk.String("iste"),
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("accusantium"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumCaseInsensitiveAlphanumeric.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("aut"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("laudantium"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("mollitia"),
                                                DimensionValue: sdk.String("ab"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("corrupti"),
                                                DimensionValue: sdk.String("non"),
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("voluptatem"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumOrderTypeUnspecified.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("occaecati"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("numquam"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("explicabo"),
                                                DimensionValue: sdk.String("voluptas"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("aut"),
                                                DimensionValue: sdk.String("dignissimos"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("dicta"),
                                                DimensionValue: sdk.String("maiores"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("natus"),
                                                DimensionValue: sdk.String("velit"),
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("voluptatibus"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumAlphanumeric.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("asperiores"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("aperiam"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("quaerat"),
                                                DimensionValue: sdk.String("consequuntur"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("repellendus"),
                                                DimensionValue: sdk.String("officia"),
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("maxime"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumAlphanumeric.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("officia"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("asperiores"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("quae"),
                                                DimensionValue: sdk.String("quaerat"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("porro"),
                                                DimensionValue: sdk.String("quod"),
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.Pivot{
                            FieldNames: []string{
                                "ab",
                                "adipisci",
                            },
                            Limit: sdk.String("fuga"),
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                shared.PivotMetricAggregationsEnumTotal,
                                shared.PivotMetricAggregationsEnumTotal,
                                shared.PivotMetricAggregationsEnumMaximum,
                            },
                            Offset: sdk.String("est"),
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("totam"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumNumeric.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("vel"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("ducimus"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("vel"),
                                                DimensionValue: sdk.String("labore"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("possimus"),
                                                DimensionValue: sdk.String("facilis"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("cum"),
                                                DimensionValue: sdk.String("commodi"),
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("in"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumAlphanumeric.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("reiciendis"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("assumenda"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("recusandae"),
                                                DimensionValue: sdk.String("aliquid"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("aperiam"),
                                                DimensionValue: sdk.String("cum"),
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("consectetur"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumAlphanumeric.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("exercitationem"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("earum"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("numquam"),
                                                DimensionValue: sdk.String("doloribus"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("suscipit"),
                                                DimensionValue: sdk.String("reiciendis"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("quidem"),
                                                DimensionValue: sdk.String("saepe"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("necessitatibus"),
                                                DimensionValue: sdk.String("dolore"),
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("sunt"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumNumeric.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("adipisci"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("non"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("beatae"),
                                                DimensionValue: sdk.String("dignissimos"),
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    Property: sdk.String("a"),
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
                                    EndDate: sdk.String("consectetur"),
                                    Name: sdk.String("Dr. Maryann Howe"),
                                    StartDate: sdk.String("vitae"),
                                },
                                Dimension: sdk.String("accusamus"),
                                Name: sdk.String("Ricky Cole"),
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: sdk.String("voluptas"),
                                    Name: sdk.String("Gayle Parisian"),
                                    StartDate: sdk.String("dolores"),
                                },
                                Dimension: sdk.String("blanditiis"),
                                Name: sdk.String("Valerie Haag"),
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: sdk.String("ullam"),
                                    Name: sdk.String("Karla Kuvalis"),
                                    StartDate: sdk.String("nesciunt"),
                                },
                                Dimension: sdk.String("culpa"),
                                Name: sdk.String("Dewey Leannon"),
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: sdk.String("nobis"),
                                    Name: sdk.String("Luz Cormier"),
                                    StartDate: sdk.String("asperiores"),
                                },
                                Dimension: sdk.String("facilis"),
                                Name: sdk.String("Kristy Bernier"),
                            },
                        },
                        CohortsRange: &shared.CohortsRange{
                            EndOffset: sdk.Int(671907),
                            Granularity: shared.CohortsRangeGranularityEnumGranularityUnspecified.ToPointer(),
                            StartOffset: sdk.Int(447516),
                        },
                    },
                    CurrencyCode: sdk.String("commodi"),
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: sdk.String("explicabo"),
                            Name: sdk.String("Geneva Bradtke"),
                            StartDate: sdk.String("debitis"),
                        },
                        shared.DateRange{
                            EndDate: sdk.String("illo"),
                            Name: sdk.String("Thomas Lockman"),
                            StartDate: sdk.String("sed"),
                        },
                        shared.DateRange{
                            EndDate: sdk.String("provident"),
                            Name: sdk.String("Jana Emard"),
                            StartDate: sdk.String("quos"),
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
                                    DoubleValue: sdk.Float64(2716.53),
                                    Int64Value: sdk.String("tempora"),
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(4554.44),
                                    Int64Value: sdk.String("reiciendis"),
                                },
                            },
                            FieldName: sdk.String("ex"),
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: sdk.Bool(false),
                                Values: []string{
                                    "non",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: shared.NumericFilterOperationEnumGreaterThanOrEqual.ToPointer(),
                                Value: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(5058.66),
                                    Int64Value: sdk.String("facilis"),
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: sdk.Bool(false),
                                MatchType: shared.StringFilterMatchTypeEnumBeginsWith.ToPointer(),
                                Value: sdk.String("incidunt"),
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
                                    Delimiter: sdk.String("rem"),
                                    DimensionNames: []string{
                                        "nobis",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("error"),
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("veniam"),
                                },
                            },
                            Name: sdk.String("Sophie Wisoky"),
                        },
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: sdk.String("aperiam"),
                                    DimensionNames: []string{
                                        "numquam",
                                        "veniam",
                                        "in",
                                        "officiis",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("beatae"),
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("laudantium"),
                                },
                            },
                            Name: sdk.String("Mabel Robel"),
                        },
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: sdk.String("voluptatum"),
                                    DimensionNames: []string{
                                        "hic",
                                        "expedita",
                                        "debitis",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("neque"),
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("dolorum"),
                                },
                            },
                            Name: sdk.String("Brandi Padberg"),
                        },
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: sdk.String("tempora"),
                                    DimensionNames: []string{
                                        "fugit",
                                        "ut",
                                        "fugiat",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("voluptatem"),
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("culpa"),
                                },
                            },
                            Name: sdk.String("Miguel Adams"),
                        },
                    },
                    KeepEmptyRows: sdk.Bool(false),
                    MetricFilter: &shared.FilterExpression{
                        AndGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{},
                            },
                        },
                        Filter: &shared.Filter{
                            BetweenFilter: &shared.BetweenFilter{
                                FromValue: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(5305.37),
                                    Int64Value: sdk.String("quas"),
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(9221.12),
                                    Int64Value: sdk.String("corporis"),
                                },
                            },
                            FieldName: sdk.String("et"),
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: sdk.Bool(false),
                                Values: []string{
                                    "ex",
                                    "sed",
                                    "sit",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: shared.NumericFilterOperationEnumLessThan.ToPointer(),
                                Value: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(3426.11),
                                    Int64Value: sdk.String("saepe"),
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: sdk.Bool(false),
                                MatchType: shared.StringFilterMatchTypeEnumContains.ToPointer(),
                                Value: sdk.String("consequatur"),
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
                            Expression: sdk.String("dolorem"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Gerald Bradtke"),
                        },
                        shared.Metric{
                            Expression: sdk.String("quidem"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Cameron Reilly"),
                        },
                        shared.Metric{
                            Expression: sdk.String("alias"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Joanna Klocko"),
                        },
                        shared.Metric{
                            Expression: sdk.String("provident"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Miss Brendan Volkman"),
                        },
                    },
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            FieldNames: []string{
                                "fuga",
                                "praesentium",
                                "mollitia",
                                "veniam",
                            },
                            Limit: sdk.String("voluptatem"),
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                shared.PivotMetricAggregationsEnumCount,
                                shared.PivotMetricAggregationsEnumMetricAggregationUnspecified,
                                shared.PivotMetricAggregationsEnumMinimum,
                                shared.PivotMetricAggregationsEnumMinimum,
                            },
                            Offset: sdk.String("asperiores"),
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("suscipit"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumCaseInsensitiveAlphanumeric.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("maxime"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("et"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("amet"),
                                                DimensionValue: sdk.String("assumenda"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("ea"),
                                                DimensionValue: sdk.String("atque"),
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("error"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumNumeric.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("officiis"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("accusamus"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("minima"),
                                                DimensionValue: sdk.String("aspernatur"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("ex"),
                                                DimensionValue: sdk.String("maiores"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("corrupti"),
                                                DimensionValue: sdk.String("at"),
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("error"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumCaseInsensitiveAlphanumeric.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("suscipit"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("repudiandae"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("atque"),
                                                DimensionValue: sdk.String("sunt"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("recusandae"),
                                                DimensionValue: sdk.String("dolorum"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("repellendus"),
                                                DimensionValue: sdk.String("labore"),
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.Pivot{
                            FieldNames: []string{
                                "doloremque",
                                "repudiandae",
                                "dicta",
                                "accusantium",
                            },
                            Limit: sdk.String("beatae"),
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                shared.PivotMetricAggregationsEnumTotal,
                            },
                            Offset: sdk.String("laboriosam"),
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("a"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumCaseInsensitiveAlphanumeric.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("magnam"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("saepe"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("occaecati"),
                                                DimensionValue: sdk.String("officiis"),
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    Property: sdk.String("perspiciatis"),
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
                                    EndDate: sdk.String("adipisci"),
                                    Name: sdk.String("Tracy Cronin"),
                                    StartDate: sdk.String("quis"),
                                },
                                Dimension: sdk.String("reprehenderit"),
                                Name: sdk.String("Jerry Hessel"),
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: sdk.String("non"),
                                    Name: sdk.String("Ms. Brian Kerluke IV"),
                                    StartDate: sdk.String("eveniet"),
                                },
                                Dimension: sdk.String("qui"),
                                Name: sdk.String("Elmer Treutel"),
                            },
                        },
                        CohortsRange: &shared.CohortsRange{
                            EndOffset: sdk.Int(715208),
                            Granularity: shared.CohortsRangeGranularityEnumWeekly.ToPointer(),
                            StartOffset: sdk.Int(523006),
                        },
                    },
                    CurrencyCode: sdk.String("aliquam"),
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: sdk.String("repellat"),
                            Name: sdk.String("Renee Metz"),
                            StartDate: sdk.String("voluptas"),
                        },
                        shared.DateRange{
                            EndDate: sdk.String("alias"),
                            Name: sdk.String("Dominick Daniel"),
                            StartDate: sdk.String("dolore"),
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
                                    DoubleValue: sdk.Float64(2003.64),
                                    Int64Value: sdk.String("quae"),
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(9257.03),
                                    Int64Value: sdk.String("omnis"),
                                },
                            },
                            FieldName: sdk.String("quaerat"),
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: sdk.Bool(false),
                                Values: []string{
                                    "ex",
                                    "ut",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: shared.NumericFilterOperationEnumLessThanOrEqual.ToPointer(),
                                Value: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(2384.13),
                                    Int64Value: sdk.String("debitis"),
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: sdk.Bool(false),
                                MatchType: shared.StringFilterMatchTypeEnumEndsWith.ToPointer(),
                                Value: sdk.String("eum"),
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
                                    Delimiter: sdk.String("esse"),
                                    DimensionNames: []string{
                                        "quis",
                                        "eum",
                                        "reiciendis",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("provident"),
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("aspernatur"),
                                },
                            },
                            Name: sdk.String("Joyce O'Kon"),
                        },
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: sdk.String("provident"),
                                    DimensionNames: []string{
                                        "animi",
                                        "ex",
                                        "aliquid",
                                        "accusantium",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("repellat"),
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("doloribus"),
                                },
                            },
                            Name: sdk.String("Arlene Reichert"),
                        },
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: sdk.String("laborum"),
                                    DimensionNames: []string{
                                        "modi",
                                        "voluptatibus",
                                        "molestias",
                                        "officiis",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("sapiente"),
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("cumque"),
                                },
                            },
                            Name: sdk.String("Luz Goldner Sr."),
                        },
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: sdk.String("cumque"),
                                    DimensionNames: []string{
                                        "perferendis",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("velit"),
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("aspernatur"),
                                },
                            },
                            Name: sdk.String("Monica Lebsack"),
                        },
                    },
                    KeepEmptyRows: sdk.Bool(false),
                    MetricFilter: &shared.FilterExpression{
                        AndGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{},
                            },
                        },
                        Filter: &shared.Filter{
                            BetweenFilter: &shared.BetweenFilter{
                                FromValue: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(9587.41),
                                    Int64Value: sdk.String("eum"),
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(1173.2),
                                    Int64Value: sdk.String("minima"),
                                },
                            },
                            FieldName: sdk.String("beatae"),
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: sdk.Bool(false),
                                Values: []string{
                                    "provident",
                                    "earum",
                                    "soluta",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: shared.NumericFilterOperationEnumGreaterThanOrEqual.ToPointer(),
                                Value: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(8481.51),
                                    Int64Value: sdk.String("eaque"),
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: sdk.Bool(false),
                                MatchType: shared.StringFilterMatchTypeEnumPartialRegexp.ToPointer(),
                                Value: sdk.String("perspiciatis"),
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
                            Expression: sdk.String("aliquid"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Ricardo Effertz"),
                        },
                        shared.Metric{
                            Expression: sdk.String("fuga"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Lynda Tromp Sr."),
                        },
                        shared.Metric{
                            Expression: sdk.String("et"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Ada McClure"),
                        },
                        shared.Metric{
                            Expression: sdk.String("quasi"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Melba Stokes I"),
                        },
                    },
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            FieldNames: []string{
                                "dicta",
                                "iusto",
                            },
                            Limit: sdk.String("esse"),
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                shared.PivotMetricAggregationsEnumCount,
                                shared.PivotMetricAggregationsEnumCount,
                                shared.PivotMetricAggregationsEnumMinimum,
                            },
                            Offset: sdk.String("architecto"),
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("doloremque"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumOrderTypeUnspecified.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("odio"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("tempora"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("ex"),
                                                DimensionValue: sdk.String("consectetur"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("aliquid"),
                                                DimensionValue: sdk.String("ipsa"),
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("laborum"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumOrderTypeUnspecified.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("nostrum"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("fugiat"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("aliquid"),
                                                DimensionValue: sdk.String("officia"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("suscipit"),
                                                DimensionValue: sdk.String("aliquid"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("perferendis"),
                                                DimensionValue: sdk.String("eum"),
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("voluptas"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumCaseInsensitiveAlphanumeric.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("id"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("ab"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("possimus"),
                                                DimensionValue: sdk.String("voluptates"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("mollitia"),
                                                DimensionValue: sdk.String("laborum"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("libero"),
                                                DimensionValue: sdk.String("ad"),
                                            },
                                        },
                                    },
                                },
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("deleniti"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumAlphanumeric.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("vitae"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("repellendus"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("quo"),
                                                DimensionValue: sdk.String("ex"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("ut"),
                                                DimensionValue: sdk.String("ad"),
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.Pivot{
                            FieldNames: []string{
                                "voluptatem",
                                "molestias",
                                "cum",
                            },
                            Limit: sdk.String("aliquid"),
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                shared.PivotMetricAggregationsEnumMinimum,
                            },
                            Offset: sdk.String("omnis"),
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("rerum"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumCaseInsensitiveAlphanumeric.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("culpa"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("voluptatem"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("officiis"),
                                                DimensionValue: sdk.String("architecto"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("fuga"),
                                                DimensionValue: sdk.String("pariatur"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("debitis"),
                                                DimensionValue: sdk.String("voluptatem"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("alias"),
                                                DimensionValue: sdk.String("deleniti"),
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    Property: sdk.String("earum"),
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
                                    EndDate: sdk.String("sapiente"),
                                    Name: sdk.String("Israel Hickle"),
                                    StartDate: sdk.String("ullam"),
                                },
                                Dimension: sdk.String("perferendis"),
                                Name: sdk.String("Jimmie Russel"),
                            },
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: sdk.String("ipsam"),
                                    Name: sdk.String("Ms. Curtis Hackett II"),
                                    StartDate: sdk.String("dolor"),
                                },
                                Dimension: sdk.String("consequatur"),
                                Name: sdk.String("Karen Gleason IV"),
                            },
                        },
                        CohortsRange: &shared.CohortsRange{
                            EndOffset: sdk.Int(65604),
                            Granularity: shared.CohortsRangeGranularityEnumGranularityUnspecified.ToPointer(),
                            StartOffset: sdk.Int(856277),
                        },
                    },
                    CurrencyCode: sdk.String("ipsam"),
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: sdk.String("ipsa"),
                            Name: sdk.String("Conrad Rutherford"),
                            StartDate: sdk.String("necessitatibus"),
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
                                    DoubleValue: sdk.Float64(3321.91),
                                    Int64Value: sdk.String("nesciunt"),
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(7129.27),
                                    Int64Value: sdk.String("eum"),
                                },
                            },
                            FieldName: sdk.String("vel"),
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: sdk.Bool(false),
                                Values: []string{
                                    "magnam",
                                    "exercitationem",
                                    "ab",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: shared.NumericFilterOperationEnumGreaterThan.ToPointer(),
                                Value: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(4218.44),
                                    Int64Value: sdk.String("nobis"),
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: sdk.Bool(false),
                                MatchType: shared.StringFilterMatchTypeEnumBeginsWith.ToPointer(),
                                Value: sdk.String("recusandae"),
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
                                    Delimiter: sdk.String("exercitationem"),
                                    DimensionNames: []string{
                                        "quasi",
                                        "nisi",
                                        "at",
                                        "vero",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("est"),
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("harum"),
                                },
                            },
                            Name: sdk.String("Ora VonRueden"),
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
                                    DoubleValue: sdk.Float64(4558.98),
                                    Int64Value: sdk.String("blanditiis"),
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(6423.52),
                                    Int64Value: sdk.String("voluptas"),
                                },
                            },
                            FieldName: sdk.String("numquam"),
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: sdk.Bool(false),
                                Values: []string{
                                    "quos",
                                    "eius",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: shared.NumericFilterOperationEnumOperationUnspecified.ToPointer(),
                                Value: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(4959.7),
                                    Int64Value: sdk.String("nesciunt"),
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: sdk.Bool(false),
                                MatchType: shared.StringFilterMatchTypeEnumContains.ToPointer(),
                                Value: sdk.String("laudantium"),
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
                            Expression: sdk.String("rem"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Keith Hyatt"),
                        },
                    },
                    Pivots: []shared.Pivot{
                        shared.Pivot{
                            FieldNames: []string{
                                "reiciendis",
                                "soluta",
                                "alias",
                            },
                            Limit: sdk.String("omnis"),
                            MetricAggregations: []shared.PivotMetricAggregationsEnum{
                                shared.PivotMetricAggregationsEnumMinimum,
                            },
                            Offset: sdk.String("iste"),
                            OrderBys: []shared.OrderBy{
                                shared.OrderBy{
                                    Desc: sdk.Bool(false),
                                    Dimension: &shared.DimensionOrderBy{
                                        DimensionName: sdk.String("inventore"),
                                        OrderType: shared.DimensionOrderByOrderTypeEnumCaseInsensitiveAlphanumeric.ToPointer(),
                                    },
                                    Metric: &shared.MetricOrderBy{
                                        MetricName: sdk.String("accusamus"),
                                    },
                                    Pivot: &shared.PivotOrderBy{
                                        MetricName: sdk.String("voluptatibus"),
                                        PivotSelections: []shared.PivotSelection{
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("omnis"),
                                                DimensionValue: sdk.String("delectus"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("minima"),
                                                DimensionValue: sdk.String("praesentium"),
                                            },
                                            shared.PivotSelection{
                                                DimensionName: sdk.String("maxime"),
                                                DimensionValue: sdk.String("magnam"),
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    Property: sdk.String("temporibus"),
                    ReturnPropertyQuota: sdk.Bool(false),
                },
            },
        },
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("itaque"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("earum"),
        PrettyPrint: sdk.Bool(false),
        Property: "modi",
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("voluptatem"),
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

## AnalyticsdataPropertiesBatchRunReports

Returns multiple reports in a batch. All reports must be for the same GA4 Property.

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
    res, err := s.Properties.AnalyticsdataPropertiesBatchRunReports(ctx, operations.AnalyticsdataPropertiesBatchRunReportsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BatchRunReportsRequest: &shared.BatchRunReportsRequest{
            Requests: []shared.RunReportRequest{
                shared.RunReportRequest{
                    CohortSpec: &shared.CohortSpec{
                        CohortReportSettings: &shared.CohortReportSettings{
                            Accumulate: sdk.Bool(false),
                        },
                        Cohorts: []shared.Cohort{
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: sdk.String("quasi"),
                                    Name: sdk.String("Shawna Hamill"),
                                    StartDate: sdk.String("deserunt"),
                                },
                                Dimension: sdk.String("esse"),
                                Name: sdk.String("Melinda Orn"),
                            },
                        },
                        CohortsRange: &shared.CohortsRange{
                            EndOffset: sdk.Int(880679),
                            Granularity: shared.CohortsRangeGranularityEnumMonthly.ToPointer(),
                            StartOffset: sdk.Int(945027),
                        },
                    },
                    CurrencyCode: sdk.String("necessitatibus"),
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: sdk.String("ex"),
                            Name: sdk.String("Miss Alyssa Wintheiser"),
                            StartDate: sdk.String("laborum"),
                        },
                        shared.DateRange{
                            EndDate: sdk.String("consectetur"),
                            Name: sdk.String("Leah Emmerich"),
                            StartDate: sdk.String("soluta"),
                        },
                        shared.DateRange{
                            EndDate: sdk.String("repudiandae"),
                            Name: sdk.String("Theodore Kub"),
                            StartDate: sdk.String("dignissimos"),
                        },
                        shared.DateRange{
                            EndDate: sdk.String("neque"),
                            Name: sdk.String("Casey Sporer"),
                            StartDate: sdk.String("voluptatibus"),
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
                                    DoubleValue: sdk.Float64(3008.24),
                                    Int64Value: sdk.String("quibusdam"),
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(789.69),
                                    Int64Value: sdk.String("facere"),
                                },
                            },
                            FieldName: sdk.String("libero"),
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: sdk.Bool(false),
                                Values: []string{
                                    "voluptatibus",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: shared.NumericFilterOperationEnumOperationUnspecified.ToPointer(),
                                Value: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(7820.9),
                                    Int64Value: sdk.String("aliquam"),
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: sdk.Bool(false),
                                MatchType: shared.StringFilterMatchTypeEnumExact.ToPointer(),
                                Value: sdk.String("illo"),
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
                                    Delimiter: sdk.String("ea"),
                                    DimensionNames: []string{
                                        "vero",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("excepturi"),
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("eum"),
                                },
                            },
                            Name: sdk.String("Leslie Metz DDS"),
                        },
                        shared.Dimension{
                            DimensionExpression: &shared.DimensionExpression{
                                Concatenate: &shared.ConcatenateExpression{
                                    Delimiter: sdk.String("voluptatibus"),
                                    DimensionNames: []string{
                                        "itaque",
                                        "alias",
                                        "nisi",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("itaque"),
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("velit"),
                                },
                            },
                            Name: sdk.String("Kyle Fahey Jr."),
                        },
                    },
                    KeepEmptyRows: sdk.Bool(false),
                    Limit: sdk.String("consequatur"),
                    MetricAggregations: []shared.RunReportRequestMetricAggregationsEnum{
                        shared.RunReportRequestMetricAggregationsEnumCount,
                        shared.RunReportRequestMetricAggregationsEnumMinimum,
                        shared.RunReportRequestMetricAggregationsEnumMaximum,
                    },
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
                                    DoubleValue: sdk.Float64(7051.48),
                                    Int64Value: sdk.String("placeat"),
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(5960.65),
                                    Int64Value: sdk.String("expedita"),
                                },
                            },
                            FieldName: sdk.String("deleniti"),
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: sdk.Bool(false),
                                Values: []string{
                                    "voluptate",
                                    "ullam",
                                    "unde",
                                    "necessitatibus",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: shared.NumericFilterOperationEnumLessThanOrEqual.ToPointer(),
                                Value: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(7699.67),
                                    Int64Value: sdk.String("ipsam"),
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: sdk.Bool(false),
                                MatchType: shared.StringFilterMatchTypeEnumBeginsWith.ToPointer(),
                                Value: sdk.String("est"),
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
                            Expression: sdk.String("labore"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Mr. Eula Feest"),
                        },
                        shared.Metric{
                            Expression: sdk.String("ad"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Margarita Jacobson"),
                        },
                    },
                    Offset: sdk.String("libero"),
                    OrderBys: []shared.OrderBy{
                        shared.OrderBy{
                            Desc: sdk.Bool(false),
                            Dimension: &shared.DimensionOrderBy{
                                DimensionName: sdk.String("dolorum"),
                                OrderType: shared.DimensionOrderByOrderTypeEnumAlphanumeric.ToPointer(),
                            },
                            Metric: &shared.MetricOrderBy{
                                MetricName: sdk.String("fugit"),
                            },
                            Pivot: &shared.PivotOrderBy{
                                MetricName: sdk.String("alias"),
                                PivotSelections: []shared.PivotSelection{
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("vel"),
                                        DimensionValue: sdk.String("quae"),
                                    },
                                },
                            },
                        },
                        shared.OrderBy{
                            Desc: sdk.Bool(false),
                            Dimension: &shared.DimensionOrderBy{
                                DimensionName: sdk.String("quae"),
                                OrderType: shared.DimensionOrderByOrderTypeEnumAlphanumeric.ToPointer(),
                            },
                            Metric: &shared.MetricOrderBy{
                                MetricName: sdk.String("neque"),
                            },
                            Pivot: &shared.PivotOrderBy{
                                MetricName: sdk.String("exercitationem"),
                                PivotSelections: []shared.PivotSelection{
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("et"),
                                        DimensionValue: sdk.String("ipsum"),
                                    },
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("unde"),
                                        DimensionValue: sdk.String("nulla"),
                                    },
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("distinctio"),
                                        DimensionValue: sdk.String("maxime"),
                                    },
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("quia"),
                                        DimensionValue: sdk.String("quia"),
                                    },
                                },
                            },
                        },
                        shared.OrderBy{
                            Desc: sdk.Bool(false),
                            Dimension: &shared.DimensionOrderBy{
                                DimensionName: sdk.String("nostrum"),
                                OrderType: shared.DimensionOrderByOrderTypeEnumCaseInsensitiveAlphanumeric.ToPointer(),
                            },
                            Metric: &shared.MetricOrderBy{
                                MetricName: sdk.String("libero"),
                            },
                            Pivot: &shared.PivotOrderBy{
                                MetricName: sdk.String("dicta"),
                                PivotSelections: []shared.PivotSelection{
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("libero"),
                                        DimensionValue: sdk.String("fugiat"),
                                    },
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("officia"),
                                        DimensionValue: sdk.String("quos"),
                                    },
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("placeat"),
                                        DimensionValue: sdk.String("sit"),
                                    },
                                },
                            },
                        },
                    },
                    Property: sdk.String("iusto"),
                    ReturnPropertyQuota: sdk.Bool(false),
                },
                shared.RunReportRequest{
                    CohortSpec: &shared.CohortSpec{
                        CohortReportSettings: &shared.CohortReportSettings{
                            Accumulate: sdk.Bool(false),
                        },
                        Cohorts: []shared.Cohort{
                            shared.Cohort{
                                DateRange: &shared.DateRange{
                                    EndDate: sdk.String("voluptates"),
                                    Name: sdk.String("Deborah Larson"),
                                    StartDate: sdk.String("distinctio"),
                                },
                                Dimension: sdk.String("voluptatem"),
                                Name: sdk.String("Tamara D'Amore MD"),
                            },
                        },
                        CohortsRange: &shared.CohortsRange{
                            EndOffset: sdk.Int(817339),
                            Granularity: shared.CohortsRangeGranularityEnumWeekly.ToPointer(),
                            StartOffset: sdk.Int(473143),
                        },
                    },
                    CurrencyCode: sdk.String("provident"),
                    DateRanges: []shared.DateRange{
                        shared.DateRange{
                            EndDate: sdk.String("necessitatibus"),
                            Name: sdk.String("Kirk Jast"),
                            StartDate: sdk.String("rerum"),
                        },
                        shared.DateRange{
                            EndDate: sdk.String("laudantium"),
                            Name: sdk.String("Cecelia Wiza"),
                            StartDate: sdk.String("alias"),
                        },
                        shared.DateRange{
                            EndDate: sdk.String("quia"),
                            Name: sdk.String("Miss Grant VonRueden"),
                            StartDate: sdk.String("eos"),
                        },
                        shared.DateRange{
                            EndDate: sdk.String("quibusdam"),
                            Name: sdk.String("Mrs. Mabel Connelly"),
                            StartDate: sdk.String("earum"),
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
                                    DoubleValue: sdk.Float64(9233.06),
                                    Int64Value: sdk.String("similique"),
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(2828.37),
                                    Int64Value: sdk.String("quidem"),
                                },
                            },
                            FieldName: sdk.String("quis"),
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: sdk.Bool(false),
                                Values: []string{
                                    "unde",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: shared.NumericFilterOperationEnumLessThan.ToPointer(),
                                Value: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(9631.98),
                                    Int64Value: sdk.String("cupiditate"),
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: sdk.Bool(false),
                                MatchType: shared.StringFilterMatchTypeEnumExact.ToPointer(),
                                Value: sdk.String("numquam"),
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
                                    Delimiter: sdk.String("at"),
                                    DimensionNames: []string{
                                        "dignissimos",
                                        "optio",
                                        "necessitatibus",
                                    },
                                },
                                LowerCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("corporis"),
                                },
                                UpperCase: &shared.CaseExpression{
                                    DimensionName: sdk.String("qui"),
                                },
                            },
                            Name: sdk.String("Jaime McGlynn"),
                        },
                    },
                    KeepEmptyRows: sdk.Bool(false),
                    Limit: sdk.String("enim"),
                    MetricAggregations: []shared.RunReportRequestMetricAggregationsEnum{
                        shared.RunReportRequestMetricAggregationsEnumMinimum,
                    },
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
                                    DoubleValue: sdk.Float64(4330.77),
                                    Int64Value: sdk.String("modi"),
                                },
                                ToValue: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(3573.47),
                                    Int64Value: sdk.String("magnam"),
                                },
                            },
                            FieldName: sdk.String("voluptates"),
                            InListFilter: &shared.InListFilter{
                                CaseSensitive: sdk.Bool(false),
                                Values: []string{
                                    "tempore",
                                    "aperiam",
                                    "libero",
                                    "ratione",
                                },
                            },
                            NumericFilter: &shared.NumericFilter{
                                Operation: shared.NumericFilterOperationEnumEqual.ToPointer(),
                                Value: &shared.NumericValue{
                                    DoubleValue: sdk.Float64(5208.75),
                                    Int64Value: sdk.String("occaecati"),
                                },
                            },
                            StringFilter: &shared.StringFilter{
                                CaseSensitive: sdk.Bool(false),
                                MatchType: shared.StringFilterMatchTypeEnumBeginsWith.ToPointer(),
                                Value: sdk.String("quo"),
                            },
                        },
                        NotExpression: &shared.FilterExpression{},
                        OrGroup: &shared.FilterExpressionList{
                            Expressions: []shared.FilterExpression{
                                shared.FilterExpression{},
                            },
                        },
                    },
                    Metrics: []shared.Metric{
                        shared.Metric{
                            Expression: sdk.String("fuga"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Jodi Russel"),
                        },
                        shared.Metric{
                            Expression: sdk.String("vero"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Winifred Streich"),
                        },
                        shared.Metric{
                            Expression: sdk.String("aperiam"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Cathy Kirlin"),
                        },
                        shared.Metric{
                            Expression: sdk.String("dolores"),
                            Invisible: sdk.Bool(false),
                            Name: sdk.String("Peter Kuphal"),
                        },
                    },
                    Offset: sdk.String("itaque"),
                    OrderBys: []shared.OrderBy{
                        shared.OrderBy{
                            Desc: sdk.Bool(false),
                            Dimension: &shared.DimensionOrderBy{
                                DimensionName: sdk.String("optio"),
                                OrderType: shared.DimensionOrderByOrderTypeEnumAlphanumeric.ToPointer(),
                            },
                            Metric: &shared.MetricOrderBy{
                                MetricName: sdk.String("quaerat"),
                            },
                            Pivot: &shared.PivotOrderBy{
                                MetricName: sdk.String("commodi"),
                                PivotSelections: []shared.PivotSelection{
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("placeat"),
                                        DimensionValue: sdk.String("quidem"),
                                    },
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("exercitationem"),
                                        DimensionValue: sdk.String("quam"),
                                    },
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("dolorem"),
                                        DimensionValue: sdk.String("modi"),
                                    },
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("ipsa"),
                                        DimensionValue: sdk.String("sint"),
                                    },
                                },
                            },
                        },
                        shared.OrderBy{
                            Desc: sdk.Bool(false),
                            Dimension: &shared.DimensionOrderBy{
                                DimensionName: sdk.String("vero"),
                                OrderType: shared.DimensionOrderByOrderTypeEnumOrderTypeUnspecified.ToPointer(),
                            },
                            Metric: &shared.MetricOrderBy{
                                MetricName: sdk.String("repudiandae"),
                            },
                            Pivot: &shared.PivotOrderBy{
                                MetricName: sdk.String("cum"),
                                PivotSelections: []shared.PivotSelection{
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("earum"),
                                        DimensionValue: sdk.String("veniam"),
                                    },
                                },
                            },
                        },
                        shared.OrderBy{
                            Desc: sdk.Bool(false),
                            Dimension: &shared.DimensionOrderBy{
                                DimensionName: sdk.String("animi"),
                                OrderType: shared.DimensionOrderByOrderTypeEnumOrderTypeUnspecified.ToPointer(),
                            },
                            Metric: &shared.MetricOrderBy{
                                MetricName: sdk.String("nam"),
                            },
                            Pivot: &shared.PivotOrderBy{
                                MetricName: sdk.String("dicta"),
                                PivotSelections: []shared.PivotSelection{
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("necessitatibus"),
                                        DimensionValue: sdk.String("nobis"),
                                    },
                                },
                            },
                        },
                    },
                    Property: sdk.String("ipsa"),
                    ReturnPropertyQuota: sdk.Bool(false),
                },
            },
        },
        AccessToken: sdk.String("ducimus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        Property: "libero",
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.AnalyticsdataPropertiesBatchRunReportsSecurity{
        Option1: &operations.AnalyticsdataPropertiesBatchRunReportsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchRunReportsResponse != nil {
        // handle response
    }
}
```

## AnalyticsdataPropertiesCheckCompatibility

This compatibility method lists dimensions and metrics that can be added to a report request and maintain compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics, reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core reports have different compatibility rules. This method checks compatibility for Core reports.

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
    res, err := s.Properties.AnalyticsdataPropertiesCheckCompatibility(ctx, operations.AnalyticsdataPropertiesCheckCompatibilityRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CheckCompatibilityRequest: &shared.CheckCompatibilityRequest{
            CompatibilityFilter: shared.CheckCompatibilityRequestCompatibilityFilterEnumCompatible.ToPointer(),
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
                            DoubleValue: sdk.Float64(7573.64),
                            Int64Value: sdk.String("sint"),
                        },
                        ToValue: &shared.NumericValue{
                            DoubleValue: sdk.Float64(3145.73),
                            Int64Value: sdk.String("hic"),
                        },
                    },
                    FieldName: sdk.String("animi"),
                    InListFilter: &shared.InListFilter{
                        CaseSensitive: sdk.Bool(false),
                        Values: []string{
                            "totam",
                            "molestias",
                            "odio",
                        },
                    },
                    NumericFilter: &shared.NumericFilter{
                        Operation: shared.NumericFilterOperationEnumOperationUnspecified.ToPointer(),
                        Value: &shared.NumericValue{
                            DoubleValue: sdk.Float64(9011.63),
                            Int64Value: sdk.String("architecto"),
                        },
                    },
                    StringFilter: &shared.StringFilter{
                        CaseSensitive: sdk.Bool(false),
                        MatchType: shared.StringFilterMatchTypeEnumEndsWith.ToPointer(),
                        Value: sdk.String("iste"),
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
                            Delimiter: sdk.String("libero"),
                            DimensionNames: []string{
                                "doloremque",
                            },
                        },
                        LowerCase: &shared.CaseExpression{
                            DimensionName: sdk.String("delectus"),
                        },
                        UpperCase: &shared.CaseExpression{
                            DimensionName: sdk.String("impedit"),
                        },
                    },
                    Name: sdk.String("Dale Ferry"),
                },
                shared.Dimension{
                    DimensionExpression: &shared.DimensionExpression{
                        Concatenate: &shared.ConcatenateExpression{
                            Delimiter: sdk.String("doloremque"),
                            DimensionNames: []string{
                                "veniam",
                                "libero",
                            },
                        },
                        LowerCase: &shared.CaseExpression{
                            DimensionName: sdk.String("architecto"),
                        },
                        UpperCase: &shared.CaseExpression{
                            DimensionName: sdk.String("cupiditate"),
                        },
                    },
                    Name: sdk.String("Sheri Schuppe"),
                },
                shared.Dimension{
                    DimensionExpression: &shared.DimensionExpression{
                        Concatenate: &shared.ConcatenateExpression{
                            Delimiter: sdk.String("itaque"),
                            DimensionNames: []string{
                                "asperiores",
                            },
                        },
                        LowerCase: &shared.CaseExpression{
                            DimensionName: sdk.String("veniam"),
                        },
                        UpperCase: &shared.CaseExpression{
                            DimensionName: sdk.String("consequuntur"),
                        },
                    },
                    Name: sdk.String("Dwight Connelly"),
                },
            },
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
                            DoubleValue: sdk.Float64(688.52),
                            Int64Value: sdk.String("velit"),
                        },
                        ToValue: &shared.NumericValue{
                            DoubleValue: sdk.Float64(7057.1),
                            Int64Value: sdk.String("tempore"),
                        },
                    },
                    FieldName: sdk.String("nisi"),
                    InListFilter: &shared.InListFilter{
                        CaseSensitive: sdk.Bool(false),
                        Values: []string{
                            "quaerat",
                            "blanditiis",
                            "distinctio",
                            "nisi",
                        },
                    },
                    NumericFilter: &shared.NumericFilter{
                        Operation: shared.NumericFilterOperationEnumLessThan.ToPointer(),
                        Value: &shared.NumericValue{
                            DoubleValue: sdk.Float64(3919.33),
                            Int64Value: sdk.String("libero"),
                        },
                    },
                    StringFilter: &shared.StringFilter{
                        CaseSensitive: sdk.Bool(false),
                        MatchType: shared.StringFilterMatchTypeEnumFullRegexp.ToPointer(),
                        Value: sdk.String("facere"),
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
                    Expression: sdk.String("ad"),
                    Invisible: sdk.Bool(false),
                    Name: sdk.String("Courtney Crooks"),
                },
            },
        },
        AccessToken: sdk.String("rerum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        Fields: sdk.String("nostrum"),
        Key: sdk.String("neque"),
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        Property: "est",
        QuotaUser: sdk.String("rem"),
        UploadType: sdk.String("eligendi"),
        UploadProtocol: sdk.String("fugiat"),
    }, operations.AnalyticsdataPropertiesCheckCompatibilitySecurity{
        Option1: &operations.AnalyticsdataPropertiesCheckCompatibilitySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckCompatibilityResponse != nil {
        // handle response
    }
}
```

## AnalyticsdataPropertiesGetMetadata

Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions and metrics. In this method, a Google Analytics GA4 Property Identifier is specified in the request, and the metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom metric with parameter name `levels_unlocked` is registered to a property, the Metadata response will contain `customEvent:levels_unlocked`. Universal metadata are dimensions and metrics applicable to any property such as `country` and `totalUsers`.

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
    res, err := s.Properties.AnalyticsdataPropertiesGetMetadata(ctx, operations.AnalyticsdataPropertiesGetMetadataRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("error"),
        Name: "Justin Kulas",
        OauthToken: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.AnalyticsdataPropertiesGetMetadataSecurity{
        Option1: &operations.AnalyticsdataPropertiesGetMetadataSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Metadata != nil {
        // handle response
    }
}
```

## AnalyticsdataPropertiesRunPivotReport

Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in a pivot. Multiple pivots can be specified to further dissect your data.

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
    res, err := s.Properties.AnalyticsdataPropertiesRunPivotReport(ctx, operations.AnalyticsdataPropertiesRunPivotReportRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RunPivotReportRequest: &shared.RunPivotReportRequest{
            CohortSpec: &shared.CohortSpec{
                CohortReportSettings: &shared.CohortReportSettings{
                    Accumulate: sdk.Bool(false),
                },
                Cohorts: []shared.Cohort{
                    shared.Cohort{
                        DateRange: &shared.DateRange{
                            EndDate: sdk.String("libero"),
                            Name: sdk.String("Virginia Goyette"),
                            StartDate: sdk.String("tempore"),
                        },
                        Dimension: sdk.String("veniam"),
                        Name: sdk.String("Johanna Weimann"),
                    },
                    shared.Cohort{
                        DateRange: &shared.DateRange{
                            EndDate: sdk.String("nemo"),
                            Name: sdk.String("Devin Donnelly"),
                            StartDate: sdk.String("illo"),
                        },
                        Dimension: sdk.String("labore"),
                        Name: sdk.String("Jim Schamberger"),
                    },
                },
                CohortsRange: &shared.CohortsRange{
                    EndOffset: sdk.Int(921719),
                    Granularity: shared.CohortsRangeGranularityEnumGranularityUnspecified.ToPointer(),
                    StartOffset: sdk.Int(805264),
                },
            },
            CurrencyCode: sdk.String("aspernatur"),
            DateRanges: []shared.DateRange{
                shared.DateRange{
                    EndDate: sdk.String("expedita"),
                    Name: sdk.String("Eduardo Walker"),
                    StartDate: sdk.String("corporis"),
                },
                shared.DateRange{
                    EndDate: sdk.String("vero"),
                    Name: sdk.String("Marcos Kerluke"),
                    StartDate: sdk.String("impedit"),
                },
                shared.DateRange{
                    EndDate: sdk.String("commodi"),
                    Name: sdk.String("Mrs. Donna Hand"),
                    StartDate: sdk.String("praesentium"),
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
                            DoubleValue: sdk.Float64(7368.53),
                            Int64Value: sdk.String("amet"),
                        },
                        ToValue: &shared.NumericValue{
                            DoubleValue: sdk.Float64(976.76),
                            Int64Value: sdk.String("dicta"),
                        },
                    },
                    FieldName: sdk.String("laudantium"),
                    InListFilter: &shared.InListFilter{
                        CaseSensitive: sdk.Bool(false),
                        Values: []string{
                            "earum",
                        },
                    },
                    NumericFilter: &shared.NumericFilter{
                        Operation: shared.NumericFilterOperationEnumLessThan.ToPointer(),
                        Value: &shared.NumericValue{
                            DoubleValue: sdk.Float64(2286.46),
                            Int64Value: sdk.String("provident"),
                        },
                    },
                    StringFilter: &shared.StringFilter{
                        CaseSensitive: sdk.Bool(false),
                        MatchType: shared.StringFilterMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("necessitatibus"),
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
                            Delimiter: sdk.String("consequatur"),
                            DimensionNames: []string{
                                "molestiae",
                                "itaque",
                            },
                        },
                        LowerCase: &shared.CaseExpression{
                            DimensionName: sdk.String("facilis"),
                        },
                        UpperCase: &shared.CaseExpression{
                            DimensionName: sdk.String("corrupti"),
                        },
                    },
                    Name: sdk.String("Bobbie Thompson"),
                },
                shared.Dimension{
                    DimensionExpression: &shared.DimensionExpression{
                        Concatenate: &shared.ConcatenateExpression{
                            Delimiter: sdk.String("dicta"),
                            DimensionNames: []string{
                                "velit",
                            },
                        },
                        LowerCase: &shared.CaseExpression{
                            DimensionName: sdk.String("dolor"),
                        },
                        UpperCase: &shared.CaseExpression{
                            DimensionName: sdk.String("sunt"),
                        },
                    },
                    Name: sdk.String("Curtis McCullough PhD"),
                },
                shared.Dimension{
                    DimensionExpression: &shared.DimensionExpression{
                        Concatenate: &shared.ConcatenateExpression{
                            Delimiter: sdk.String("labore"),
                            DimensionNames: []string{
                                "esse",
                                "voluptatem",
                                "perferendis",
                                "rerum",
                            },
                        },
                        LowerCase: &shared.CaseExpression{
                            DimensionName: sdk.String("ea"),
                        },
                        UpperCase: &shared.CaseExpression{
                            DimensionName: sdk.String("aperiam"),
                        },
                    },
                    Name: sdk.String("Kristie Frami"),
                },
                shared.Dimension{
                    DimensionExpression: &shared.DimensionExpression{
                        Concatenate: &shared.ConcatenateExpression{
                            Delimiter: sdk.String("consectetur"),
                            DimensionNames: []string{
                                "dignissimos",
                                "consectetur",
                                "soluta",
                                "natus",
                            },
                        },
                        LowerCase: &shared.CaseExpression{
                            DimensionName: sdk.String("temporibus"),
                        },
                        UpperCase: &shared.CaseExpression{
                            DimensionName: sdk.String("officia"),
                        },
                    },
                    Name: sdk.String("Mandy Collier"),
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
                            DoubleValue: sdk.Float64(6707.62),
                            Int64Value: sdk.String("dignissimos"),
                        },
                        ToValue: &shared.NumericValue{
                            DoubleValue: sdk.Float64(8762.85),
                            Int64Value: sdk.String("qui"),
                        },
                    },
                    FieldName: sdk.String("consectetur"),
                    InListFilter: &shared.InListFilter{
                        CaseSensitive: sdk.Bool(false),
                        Values: []string{
                            "explicabo",
                            "explicabo",
                            "exercitationem",
                            "nihil",
                        },
                    },
                    NumericFilter: &shared.NumericFilter{
                        Operation: shared.NumericFilterOperationEnumEqual.ToPointer(),
                        Value: &shared.NumericValue{
                            DoubleValue: sdk.Float64(680.93),
                            Int64Value: sdk.String("illo"),
                        },
                    },
                    StringFilter: &shared.StringFilter{
                        CaseSensitive: sdk.Bool(false),
                        MatchType: shared.StringFilterMatchTypeEnumPartialRegexp.ToPointer(),
                        Value: sdk.String("deserunt"),
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
                    Expression: sdk.String("distinctio"),
                    Invisible: sdk.Bool(false),
                    Name: sdk.String("Annette Green"),
                },
                shared.Metric{
                    Expression: sdk.String("modi"),
                    Invisible: sdk.Bool(false),
                    Name: sdk.String("Judith Thompson Sr."),
                },
            },
            Pivots: []shared.Pivot{
                shared.Pivot{
                    FieldNames: []string{
                        "voluptate",
                        "similique",
                    },
                    Limit: sdk.String("minima"),
                    MetricAggregations: []shared.PivotMetricAggregationsEnum{
                        shared.PivotMetricAggregationsEnumTotal,
                        shared.PivotMetricAggregationsEnumMetricAggregationUnspecified,
                        shared.PivotMetricAggregationsEnumTotal,
                    },
                    Offset: sdk.String("eum"),
                    OrderBys: []shared.OrderBy{
                        shared.OrderBy{
                            Desc: sdk.Bool(false),
                            Dimension: &shared.DimensionOrderBy{
                                DimensionName: sdk.String("mollitia"),
                                OrderType: shared.DimensionOrderByOrderTypeEnumAlphanumeric.ToPointer(),
                            },
                            Metric: &shared.MetricOrderBy{
                                MetricName: sdk.String("fugiat"),
                            },
                            Pivot: &shared.PivotOrderBy{
                                MetricName: sdk.String("nostrum"),
                                PivotSelections: []shared.PivotSelection{
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("veniam"),
                                        DimensionValue: sdk.String("reiciendis"),
                                    },
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("ab"),
                                        DimensionValue: sdk.String("modi"),
                                    },
                                },
                            },
                        },
                    },
                },
                shared.Pivot{
                    FieldNames: []string{
                        "aut",
                    },
                    Limit: sdk.String("eveniet"),
                    MetricAggregations: []shared.PivotMetricAggregationsEnum{
                        shared.PivotMetricAggregationsEnumMinimum,
                        shared.PivotMetricAggregationsEnumTotal,
                    },
                    Offset: sdk.String("dolorum"),
                    OrderBys: []shared.OrderBy{
                        shared.OrderBy{
                            Desc: sdk.Bool(false),
                            Dimension: &shared.DimensionOrderBy{
                                DimensionName: sdk.String("voluptate"),
                                OrderType: shared.DimensionOrderByOrderTypeEnumOrderTypeUnspecified.ToPointer(),
                            },
                            Metric: &shared.MetricOrderBy{
                                MetricName: sdk.String("nesciunt"),
                            },
                            Pivot: &shared.PivotOrderBy{
                                MetricName: sdk.String("quaerat"),
                                PivotSelections: []shared.PivotSelection{
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("minus"),
                                        DimensionValue: sdk.String("sunt"),
                                    },
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("distinctio"),
                                        DimensionValue: sdk.String("iusto"),
                                    },
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("quas"),
                                        DimensionValue: sdk.String("et"),
                                    },
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("facilis"),
                                        DimensionValue: sdk.String("amet"),
                                    },
                                },
                            },
                        },
                        shared.OrderBy{
                            Desc: sdk.Bool(false),
                            Dimension: &shared.DimensionOrderBy{
                                DimensionName: sdk.String("autem"),
                                OrderType: shared.DimensionOrderByOrderTypeEnumCaseInsensitiveAlphanumeric.ToPointer(),
                            },
                            Metric: &shared.MetricOrderBy{
                                MetricName: sdk.String("alias"),
                            },
                            Pivot: &shared.PivotOrderBy{
                                MetricName: sdk.String("rem"),
                                PivotSelections: []shared.PivotSelection{
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("quos"),
                                        DimensionValue: sdk.String("laudantium"),
                                    },
                                },
                            },
                        },
                        shared.OrderBy{
                            Desc: sdk.Bool(false),
                            Dimension: &shared.DimensionOrderBy{
                                DimensionName: sdk.String("repellendus"),
                                OrderType: shared.DimensionOrderByOrderTypeEnumOrderTypeUnspecified.ToPointer(),
                            },
                            Metric: &shared.MetricOrderBy{
                                MetricName: sdk.String("quae"),
                            },
                            Pivot: &shared.PivotOrderBy{
                                MetricName: sdk.String("eaque"),
                                PivotSelections: []shared.PivotSelection{
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("delectus"),
                                        DimensionValue: sdk.String("mollitia"),
                                    },
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("nulla"),
                                        DimensionValue: sdk.String("officia"),
                                    },
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("sed"),
                                        DimensionValue: sdk.String("voluptatem"),
                                    },
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("alias"),
                                        DimensionValue: sdk.String("eveniet"),
                                    },
                                },
                            },
                        },
                        shared.OrderBy{
                            Desc: sdk.Bool(false),
                            Dimension: &shared.DimensionOrderBy{
                                DimensionName: sdk.String("hic"),
                                OrderType: shared.DimensionOrderByOrderTypeEnumOrderTypeUnspecified.ToPointer(),
                            },
                            Metric: &shared.MetricOrderBy{
                                MetricName: sdk.String("incidunt"),
                            },
                            Pivot: &shared.PivotOrderBy{
                                MetricName: sdk.String("qui"),
                                PivotSelections: []shared.PivotSelection{
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("necessitatibus"),
                                        DimensionValue: sdk.String("harum"),
                                    },
                                },
                            },
                        },
                    },
                },
                shared.Pivot{
                    FieldNames: []string{
                        "beatae",
                    },
                    Limit: sdk.String("aliquid"),
                    MetricAggregations: []shared.PivotMetricAggregationsEnum{
                        shared.PivotMetricAggregationsEnumMaximum,
                        shared.PivotMetricAggregationsEnumCount,
                    },
                    Offset: sdk.String("molestias"),
                    OrderBys: []shared.OrderBy{
                        shared.OrderBy{
                            Desc: sdk.Bool(false),
                            Dimension: &shared.DimensionOrderBy{
                                DimensionName: sdk.String("libero"),
                                OrderType: shared.DimensionOrderByOrderTypeEnumCaseInsensitiveAlphanumeric.ToPointer(),
                            },
                            Metric: &shared.MetricOrderBy{
                                MetricName: sdk.String("sequi"),
                            },
                            Pivot: &shared.PivotOrderBy{
                                MetricName: sdk.String("aliquid"),
                                PivotSelections: []shared.PivotSelection{
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("impedit"),
                                        DimensionValue: sdk.String("ducimus"),
                                    },
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("odit"),
                                        DimensionValue: sdk.String("velit"),
                                    },
                                },
                            },
                        },
                        shared.OrderBy{
                            Desc: sdk.Bool(false),
                            Dimension: &shared.DimensionOrderBy{
                                DimensionName: sdk.String("reiciendis"),
                                OrderType: shared.DimensionOrderByOrderTypeEnumNumeric.ToPointer(),
                            },
                            Metric: &shared.MetricOrderBy{
                                MetricName: sdk.String("nulla"),
                            },
                            Pivot: &shared.PivotOrderBy{
                                MetricName: sdk.String("laborum"),
                                PivotSelections: []shared.PivotSelection{
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("accusamus"),
                                        DimensionValue: sdk.String("doloremque"),
                                    },
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("nisi"),
                                        DimensionValue: sdk.String("rerum"),
                                    },
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("recusandae"),
                                        DimensionValue: sdk.String("voluptates"),
                                    },
                                },
                            },
                        },
                        shared.OrderBy{
                            Desc: sdk.Bool(false),
                            Dimension: &shared.DimensionOrderBy{
                                DimensionName: sdk.String("non"),
                                OrderType: shared.DimensionOrderByOrderTypeEnumCaseInsensitiveAlphanumeric.ToPointer(),
                            },
                            Metric: &shared.MetricOrderBy{
                                MetricName: sdk.String("quia"),
                            },
                            Pivot: &shared.PivotOrderBy{
                                MetricName: sdk.String("ullam"),
                                PivotSelections: []shared.PivotSelection{
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("dicta"),
                                        DimensionValue: sdk.String("voluptatibus"),
                                    },
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("eligendi"),
                                        DimensionValue: sdk.String("quae"),
                                    },
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("officiis"),
                                        DimensionValue: sdk.String("architecto"),
                                    },
                                    shared.PivotSelection{
                                        DimensionName: sdk.String("architecto"),
                                        DimensionValue: sdk.String("enim"),
                                    },
                                },
                            },
                        },
                    },
                },
            },
            Property: sdk.String("optio"),
            ReturnPropertyQuota: sdk.Bool(false),
        },
        AccessToken: sdk.String("rem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("a"),
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        Property: "dicta",
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("dolore"),
    }, operations.AnalyticsdataPropertiesRunPivotReportSecurity{
        Option1: &operations.AnalyticsdataPropertiesRunPivotReportSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunPivotReportResponse != nil {
        // handle response
    }
}
```

## AnalyticsdataPropertiesRunRealtimeReport

Returns a customized report of realtime event data for your property. Events appear in realtime reports seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360 properties). For a guide to constructing realtime requests & understanding responses, see [Creating a Realtime Report](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-basics).

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
    res, err := s.Properties.AnalyticsdataPropertiesRunRealtimeReport(ctx, operations.AnalyticsdataPropertiesRunRealtimeReportRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RunRealtimeReportRequest: &shared.RunRealtimeReportRequest{
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
                            DoubleValue: sdk.Float64(8074.19),
                            Int64Value: sdk.String("modi"),
                        },
                        ToValue: &shared.NumericValue{
                            DoubleValue: sdk.Float64(1635.58),
                            Int64Value: sdk.String("assumenda"),
                        },
                    },
                    FieldName: sdk.String("vero"),
                    InListFilter: &shared.InListFilter{
                        CaseSensitive: sdk.Bool(false),
                        Values: []string{
                            "impedit",
                            "porro",
                            "accusamus",
                            "totam",
                        },
                    },
                    NumericFilter: &shared.NumericFilter{
                        Operation: shared.NumericFilterOperationEnumGreaterThanOrEqual.ToPointer(),
                        Value: &shared.NumericValue{
                            DoubleValue: sdk.Float64(660.74),
                            Int64Value: sdk.String("sint"),
                        },
                    },
                    StringFilter: &shared.StringFilter{
                        CaseSensitive: sdk.Bool(false),
                        MatchType: shared.StringFilterMatchTypeEnumEndsWith.ToPointer(),
                        Value: sdk.String("esse"),
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
                            Delimiter: sdk.String("nesciunt"),
                            DimensionNames: []string{
                                "vel",
                                "neque",
                                "corporis",
                                "voluptas",
                            },
                        },
                        LowerCase: &shared.CaseExpression{
                            DimensionName: sdk.String("consequuntur"),
                        },
                        UpperCase: &shared.CaseExpression{
                            DimensionName: sdk.String("officia"),
                        },
                    },
                    Name: sdk.String("Ms. Verna Gislason"),
                },
                shared.Dimension{
                    DimensionExpression: &shared.DimensionExpression{
                        Concatenate: &shared.ConcatenateExpression{
                            Delimiter: sdk.String("accusantium"),
                            DimensionNames: []string{
                                "saepe",
                                "neque",
                            },
                        },
                        LowerCase: &shared.CaseExpression{
                            DimensionName: sdk.String("facere"),
                        },
                        UpperCase: &shared.CaseExpression{
                            DimensionName: sdk.String("aliquam"),
                        },
                    },
                    Name: sdk.String("Domingo Stark"),
                },
            },
            Limit: sdk.String("velit"),
            MetricAggregations: []shared.RunRealtimeReportRequestMetricAggregationsEnum{
                shared.RunRealtimeReportRequestMetricAggregationsEnumTotal,
            },
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
                            DoubleValue: sdk.Float64(748.95),
                            Int64Value: sdk.String("repellat"),
                        },
                        ToValue: &shared.NumericValue{
                            DoubleValue: sdk.Float64(3632.14),
                            Int64Value: sdk.String("doloribus"),
                        },
                    },
                    FieldName: sdk.String("possimus"),
                    InListFilter: &shared.InListFilter{
                        CaseSensitive: sdk.Bool(false),
                        Values: []string{
                            "incidunt",
                            "explicabo",
                            "ipsam",
                        },
                    },
                    NumericFilter: &shared.NumericFilter{
                        Operation: shared.NumericFilterOperationEnumLessThanOrEqual.ToPointer(),
                        Value: &shared.NumericValue{
                            DoubleValue: sdk.Float64(7614.37),
                            Int64Value: sdk.String("alias"),
                        },
                    },
                    StringFilter: &shared.StringFilter{
                        CaseSensitive: sdk.Bool(false),
                        MatchType: shared.StringFilterMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("nesciunt"),
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
                    Expression: sdk.String("consequuntur"),
                    Invisible: sdk.Bool(false),
                    Name: sdk.String("Henrietta Nienow"),
                },
                shared.Metric{
                    Expression: sdk.String("numquam"),
                    Invisible: sdk.Bool(false),
                    Name: sdk.String("Travis Rempel"),
                },
                shared.Metric{
                    Expression: sdk.String("ex"),
                    Invisible: sdk.Bool(false),
                    Name: sdk.String("Andrew Brekke"),
                },
                shared.Metric{
                    Expression: sdk.String("quisquam"),
                    Invisible: sdk.Bool(false),
                    Name: sdk.String("Dora Paucek Sr."),
                },
            },
            MinuteRanges: []shared.MinuteRange{
                shared.MinuteRange{
                    EndMinutesAgo: sdk.Int(166289),
                    Name: sdk.String("Josephine Lakin"),
                    StartMinutesAgo: sdk.Int(709701),
                },
                shared.MinuteRange{
                    EndMinutesAgo: sdk.Int(706411),
                    Name: sdk.String("Paul Hettinger"),
                    StartMinutesAgo: sdk.Int(230571),
                },
            },
            OrderBys: []shared.OrderBy{
                shared.OrderBy{
                    Desc: sdk.Bool(false),
                    Dimension: &shared.DimensionOrderBy{
                        DimensionName: sdk.String("modi"),
                        OrderType: shared.DimensionOrderByOrderTypeEnumAlphanumeric.ToPointer(),
                    },
                    Metric: &shared.MetricOrderBy{
                        MetricName: sdk.String("quod"),
                    },
                    Pivot: &shared.PivotOrderBy{
                        MetricName: sdk.String("itaque"),
                        PivotSelections: []shared.PivotSelection{
                            shared.PivotSelection{
                                DimensionName: sdk.String("quisquam"),
                                DimensionValue: sdk.String("enim"),
                            },
                            shared.PivotSelection{
                                DimensionName: sdk.String("doloribus"),
                                DimensionValue: sdk.String("assumenda"),
                            },
                            shared.PivotSelection{
                                DimensionName: sdk.String("officiis"),
                                DimensionValue: sdk.String("architecto"),
                            },
                            shared.PivotSelection{
                                DimensionName: sdk.String("alias"),
                                DimensionValue: sdk.String("culpa"),
                            },
                        },
                    },
                },
                shared.OrderBy{
                    Desc: sdk.Bool(false),
                    Dimension: &shared.DimensionOrderBy{
                        DimensionName: sdk.String("ipsa"),
                        OrderType: shared.DimensionOrderByOrderTypeEnumNumeric.ToPointer(),
                    },
                    Metric: &shared.MetricOrderBy{
                        MetricName: sdk.String("necessitatibus"),
                    },
                    Pivot: &shared.PivotOrderBy{
                        MetricName: sdk.String("quia"),
                        PivotSelections: []shared.PivotSelection{
                            shared.PivotSelection{
                                DimensionName: sdk.String("vel"),
                                DimensionValue: sdk.String("perspiciatis"),
                            },
                        },
                    },
                },
                shared.OrderBy{
                    Desc: sdk.Bool(false),
                    Dimension: &shared.DimensionOrderBy{
                        DimensionName: sdk.String("debitis"),
                        OrderType: shared.DimensionOrderByOrderTypeEnumAlphanumeric.ToPointer(),
                    },
                    Metric: &shared.MetricOrderBy{
                        MetricName: sdk.String("architecto"),
                    },
                    Pivot: &shared.PivotOrderBy{
                        MetricName: sdk.String("accusantium"),
                        PivotSelections: []shared.PivotSelection{
                            shared.PivotSelection{
                                DimensionName: sdk.String("veritatis"),
                                DimensionValue: sdk.String("provident"),
                            },
                        },
                    },
                },
            },
            ReturnPropertyQuota: sdk.Bool(false),
        },
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("quod"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        Property: "velit",
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("laboriosam"),
    }, operations.AnalyticsdataPropertiesRunRealtimeReportSecurity{
        Option1: &operations.AnalyticsdataPropertiesRunRealtimeReportSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunRealtimeReportResponse != nil {
        // handle response
    }
}
```

## AnalyticsdataPropertiesRunReport

Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for the requested dimensions and metrics. Metrics are individual measurements of user activity on your property, such as active users or event count. Dimensions break down metrics across some common criteria, such as country or event name. For a guide to constructing requests & understanding responses, see [Creating a Report](https://developers.google.com/analytics/devguides/reporting/data/v1/basics).

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
    res, err := s.Properties.AnalyticsdataPropertiesRunReport(ctx, operations.AnalyticsdataPropertiesRunReportRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RunReportRequest: &shared.RunReportRequest{
            CohortSpec: &shared.CohortSpec{
                CohortReportSettings: &shared.CohortReportSettings{
                    Accumulate: sdk.Bool(false),
                },
                Cohorts: []shared.Cohort{
                    shared.Cohort{
                        DateRange: &shared.DateRange{
                            EndDate: sdk.String("natus"),
                            Name: sdk.String("Felipe Wyman"),
                            StartDate: sdk.String("itaque"),
                        },
                        Dimension: sdk.String("laboriosam"),
                        Name: sdk.String("Ray Mertz"),
                    },
                    shared.Cohort{
                        DateRange: &shared.DateRange{
                            EndDate: sdk.String("aspernatur"),
                            Name: sdk.String("Alton Goyette"),
                            StartDate: sdk.String("id"),
                        },
                        Dimension: sdk.String("saepe"),
                        Name: sdk.String("Angelica Dooley"),
                    },
                },
                CohortsRange: &shared.CohortsRange{
                    EndOffset: sdk.Int(848722),
                    Granularity: shared.CohortsRangeGranularityEnumWeekly.ToPointer(),
                    StartOffset: sdk.Int(247618),
                },
            },
            CurrencyCode: sdk.String("mollitia"),
            DateRanges: []shared.DateRange{
                shared.DateRange{
                    EndDate: sdk.String("recusandae"),
                    Name: sdk.String("Dewey Hand"),
                    StartDate: sdk.String("eveniet"),
                },
                shared.DateRange{
                    EndDate: sdk.String("laborum"),
                    Name: sdk.String("Mrs. Jody Hills"),
                    StartDate: sdk.String("molestias"),
                },
                shared.DateRange{
                    EndDate: sdk.String("laborum"),
                    Name: sdk.String("Sergio Grant Sr."),
                    StartDate: sdk.String("aliquid"),
                },
                shared.DateRange{
                    EndDate: sdk.String("magnam"),
                    Name: sdk.String("Lynne Weissnat"),
                    StartDate: sdk.String("unde"),
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
                            DoubleValue: sdk.Float64(6213.93),
                            Int64Value: sdk.String("mollitia"),
                        },
                        ToValue: &shared.NumericValue{
                            DoubleValue: sdk.Float64(2986.13),
                            Int64Value: sdk.String("nostrum"),
                        },
                    },
                    FieldName: sdk.String("esse"),
                    InListFilter: &shared.InListFilter{
                        CaseSensitive: sdk.Bool(false),
                        Values: []string{
                            "fuga",
                            "facere",
                            "impedit",
                        },
                    },
                    NumericFilter: &shared.NumericFilter{
                        Operation: shared.NumericFilterOperationEnumOperationUnspecified.ToPointer(),
                        Value: &shared.NumericValue{
                            DoubleValue: sdk.Float64(6472.18),
                            Int64Value: sdk.String("quod"),
                        },
                    },
                    StringFilter: &shared.StringFilter{
                        CaseSensitive: sdk.Bool(false),
                        MatchType: shared.StringFilterMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("doloremque"),
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
                            Delimiter: sdk.String("necessitatibus"),
                            DimensionNames: []string{
                                "consequatur",
                                "eaque",
                                "architecto",
                                "similique",
                            },
                        },
                        LowerCase: &shared.CaseExpression{
                            DimensionName: sdk.String("porro"),
                        },
                        UpperCase: &shared.CaseExpression{
                            DimensionName: sdk.String("blanditiis"),
                        },
                    },
                    Name: sdk.String("Anne Torp"),
                },
                shared.Dimension{
                    DimensionExpression: &shared.DimensionExpression{
                        Concatenate: &shared.ConcatenateExpression{
                            Delimiter: sdk.String("impedit"),
                            DimensionNames: []string{
                                "excepturi",
                            },
                        },
                        LowerCase: &shared.CaseExpression{
                            DimensionName: sdk.String("a"),
                        },
                        UpperCase: &shared.CaseExpression{
                            DimensionName: sdk.String("maiores"),
                        },
                    },
                    Name: sdk.String("Cary Abbott"),
                },
                shared.Dimension{
                    DimensionExpression: &shared.DimensionExpression{
                        Concatenate: &shared.ConcatenateExpression{
                            Delimiter: sdk.String("dicta"),
                            DimensionNames: []string{
                                "earum",
                                "doloribus",
                            },
                        },
                        LowerCase: &shared.CaseExpression{
                            DimensionName: sdk.String("velit"),
                        },
                        UpperCase: &shared.CaseExpression{
                            DimensionName: sdk.String("eius"),
                        },
                    },
                    Name: sdk.String("Mrs. Pearl Rosenbaum"),
                },
                shared.Dimension{
                    DimensionExpression: &shared.DimensionExpression{
                        Concatenate: &shared.ConcatenateExpression{
                            Delimiter: sdk.String("excepturi"),
                            DimensionNames: []string{
                                "qui",
                            },
                        },
                        LowerCase: &shared.CaseExpression{
                            DimensionName: sdk.String("impedit"),
                        },
                        UpperCase: &shared.CaseExpression{
                            DimensionName: sdk.String("beatae"),
                        },
                    },
                    Name: sdk.String("Cheryl Conn"),
                },
            },
            KeepEmptyRows: sdk.Bool(false),
            Limit: sdk.String("alias"),
            MetricAggregations: []shared.RunReportRequestMetricAggregationsEnum{
                shared.RunReportRequestMetricAggregationsEnumMinimum,
                shared.RunReportRequestMetricAggregationsEnumMetricAggregationUnspecified,
                shared.RunReportRequestMetricAggregationsEnumMaximum,
            },
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
                            DoubleValue: sdk.Float64(4016.88),
                            Int64Value: sdk.String("quas"),
                        },
                        ToValue: &shared.NumericValue{
                            DoubleValue: sdk.Float64(857.94),
                            Int64Value: sdk.String("ullam"),
                        },
                    },
                    FieldName: sdk.String("quae"),
                    InListFilter: &shared.InListFilter{
                        CaseSensitive: sdk.Bool(false),
                        Values: []string{
                            "incidunt",
                            "quam",
                            "magni",
                        },
                    },
                    NumericFilter: &shared.NumericFilter{
                        Operation: shared.NumericFilterOperationEnumLessThanOrEqual.ToPointer(),
                        Value: &shared.NumericValue{
                            DoubleValue: sdk.Float64(9650.95),
                            Int64Value: sdk.String("omnis"),
                        },
                    },
                    StringFilter: &shared.StringFilter{
                        CaseSensitive: sdk.Bool(false),
                        MatchType: shared.StringFilterMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("nesciunt"),
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
                    Expression: sdk.String("cupiditate"),
                    Invisible: sdk.Bool(false),
                    Name: sdk.String("Miriam Wuckert"),
                },
                shared.Metric{
                    Expression: sdk.String("reiciendis"),
                    Invisible: sdk.Bool(false),
                    Name: sdk.String("Renee Beer"),
                },
            },
            Offset: sdk.String("quas"),
            OrderBys: []shared.OrderBy{
                shared.OrderBy{
                    Desc: sdk.Bool(false),
                    Dimension: &shared.DimensionOrderBy{
                        DimensionName: sdk.String("aliquid"),
                        OrderType: shared.DimensionOrderByOrderTypeEnumNumeric.ToPointer(),
                    },
                    Metric: &shared.MetricOrderBy{
                        MetricName: sdk.String("a"),
                    },
                    Pivot: &shared.PivotOrderBy{
                        MetricName: sdk.String("nobis"),
                        PivotSelections: []shared.PivotSelection{
                            shared.PivotSelection{
                                DimensionName: sdk.String("accusantium"),
                                DimensionValue: sdk.String("dicta"),
                            },
                            shared.PivotSelection{
                                DimensionName: sdk.String("minus"),
                                DimensionValue: sdk.String("commodi"),
                            },
                            shared.PivotSelection{
                                DimensionName: sdk.String("eveniet"),
                                DimensionValue: sdk.String("porro"),
                            },
                        },
                    },
                },
                shared.OrderBy{
                    Desc: sdk.Bool(false),
                    Dimension: &shared.DimensionOrderBy{
                        DimensionName: sdk.String("tempore"),
                        OrderType: shared.DimensionOrderByOrderTypeEnumCaseInsensitiveAlphanumeric.ToPointer(),
                    },
                    Metric: &shared.MetricOrderBy{
                        MetricName: sdk.String("modi"),
                    },
                    Pivot: &shared.PivotOrderBy{
                        MetricName: sdk.String("voluptates"),
                        PivotSelections: []shared.PivotSelection{
                            shared.PivotSelection{
                                DimensionName: sdk.String("eius"),
                                DimensionValue: sdk.String("sequi"),
                            },
                        },
                    },
                },
            },
            Property: sdk.String("eligendi"),
            ReturnPropertyQuota: sdk.Bool(false),
        },
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("blanditiis"),
        Fields: sdk.String("sint"),
        Key: sdk.String("repellat"),
        OauthToken: sdk.String("a"),
        PrettyPrint: sdk.Bool(false),
        Property: "animi",
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("nulla"),
    }, operations.AnalyticsdataPropertiesRunReportSecurity{
        Option1: &operations.AnalyticsdataPropertiesRunReportSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunReportResponse != nil {
        // handle response
    }
}
```
