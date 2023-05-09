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
    res, err := s.Projects.MonitoringProjectsAlertPoliciesCreate(ctx, operations.MonitoringProjectsAlertPoliciesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AlertPolicy: &shared.AlertPolicy{
            AlertStrategy: &shared.AlertStrategy{
                AutoClose: sdk.String("provident"),
                NotificationChannelStrategy: []shared.NotificationChannelStrategy{
                    shared.NotificationChannelStrategy{
                        NotificationChannelNames: []string{
                            "unde",
                            "nulla",
                            "corrupti",
                            "illum",
                        },
                        RenotifyInterval: sdk.String("vel"),
                    },
                    shared.NotificationChannelStrategy{
                        NotificationChannelNames: []string{
                            "deserunt",
                            "suscipit",
                            "iure",
                        },
                        RenotifyInterval: sdk.String("magnam"),
                    },
                    shared.NotificationChannelStrategy{
                        NotificationChannelNames: []string{
                            "ipsa",
                            "delectus",
                            "tempora",
                            "suscipit",
                        },
                        RenotifyInterval: sdk.String("molestiae"),
                    },
                },
                NotificationRateLimit: &shared.NotificationRateLimit{
                    Period: sdk.String("minus"),
                },
            },
            Combiner: shared.AlertPolicyCombinerEnumAndWithMatchingResource.ToPointer(),
            Conditions: []shared.Condition{
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("excepturi"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceStddev.ToPointer(),
                                GroupByFields: []string{
                                    "temporibus",
                                    "ab",
                                    "quis",
                                    "veritatis",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignCountFalse.ToPointer(),
                            },
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("perferendis"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceStddev.ToPointer(),
                                GroupByFields: []string{
                                    "sapiente",
                                    "quo",
                                    "odit",
                                    "at",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignPercentile50.ToPointer(),
                            },
                        },
                        Duration: sdk.String("maiores"),
                        Filter: sdk.String("molestiae"),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(799159),
                            Percent: sdk.Float64(8009.11),
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: sdk.String("esse"),
                        LabelExtractors: map[string]string{
                            "porro": "dolorum",
                            "dicta": "nam",
                            "officia": "occaecati",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: sdk.String("fugit"),
                        EvaluationMissingData: shared.MonitoringQueryLanguageConditionEvaluationMissingDataEnumEvaluationMissingDataActive.ToPointer(),
                        Query: sdk.String("hic"),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(758616),
                            Percent: sdk.Float64(5218.48),
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("commodi"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceCount.ToPointer(),
                                GroupByFields: []string{
                                    "qui",
                                    "impedit",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignPercentile99.ToPointer(),
                            },
                        },
                        Comparison: shared.MetricThresholdComparisonEnumComparisonLt.ToPointer(),
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("excepturi"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceMean.ToPointer(),
                                GroupByFields: []string{
                                    "ad",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignCountTrue.ToPointer(),
                            },
                        },
                        DenominatorFilter: sdk.String("sed"),
                        Duration: sdk.String("iste"),
                        EvaluationMissingData: shared.MetricThresholdEvaluationMissingDataEnumEvaluationMissingDataUnspecified.ToPointer(),
                        Filter: sdk.String("natus"),
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: sdk.String("laboriosam"),
                        },
                        ThresholdValue: sdk.Float64(9437.49),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(902599),
                            Percent: sdk.Float64(6818.2),
                        },
                    },
                    DisplayName: sdk.String("in"),
                    Name: sdk.String("Sheryl Kertzmann"),
                },
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("ipsa"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReducePercentile05.ToPointer(),
                                GroupByFields: []string{
                                    "mollitia",
                                    "laborum",
                                    "dolores",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignInterpolate.ToPointer(),
                            },
                        },
                        Duration: sdk.String("corporis"),
                        Filter: sdk.String("explicabo"),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(750686),
                            Percent: sdk.Float64(3154.28),
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: sdk.String("omnis"),
                        LabelExtractors: map[string]string{
                            "minima": "excepturi",
                            "accusantium": "iure",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: sdk.String("culpa"),
                        EvaluationMissingData: shared.MonitoringQueryLanguageConditionEvaluationMissingDataEnumEvaluationMissingDataNoOp.ToPointer(),
                        Query: sdk.String("sapiente"),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(102044),
                            Percent: sdk.Float64(6527.9),
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("culpa"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceMin.ToPointer(),
                                GroupByFields: []string{
                                    "mollitia",
                                    "occaecati",
                                    "numquam",
                                    "commodi",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignCount.ToPointer(),
                            },
                        },
                        Comparison: shared.MetricThresholdComparisonEnumComparisonLt.ToPointer(),
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("error"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceMin.ToPointer(),
                                GroupByFields: []string{
                                    "vitae",
                                    "laborum",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignCountFalse.ToPointer(),
                            },
                        },
                        DenominatorFilter: sdk.String("enim"),
                        Duration: sdk.String("odit"),
                        EvaluationMissingData: shared.MetricThresholdEvaluationMissingDataEnumEvaluationMissingDataNoOp.ToPointer(),
                        Filter: sdk.String("sequi"),
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: sdk.String("tenetur"),
                        },
                        ThresholdValue: sdk.Float64(3687.25),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(662527),
                            Percent: sdk.Float64(8209.94),
                        },
                    },
                    DisplayName: sdk.String("aut"),
                    Name: sdk.String("Sabrina Smitham DVM"),
                },
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("vero"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceCount.ToPointer(),
                                GroupByFields: []string{
                                    "voluptatibus",
                                    "ipsa",
                                    "omnis",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignCount.ToPointer(),
                            },
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("cum"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceNone.ToPointer(),
                                GroupByFields: []string{
                                    "reprehenderit",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignMin.ToPointer(),
                            },
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("maiores"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceMean.ToPointer(),
                                GroupByFields: []string{
                                    "dolore",
                                    "iusto",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignRate.ToPointer(),
                            },
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("harum"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceSum.ToPointer(),
                                GroupByFields: []string{
                                    "commodi",
                                    "repudiandae",
                                    "quae",
                                    "ipsum",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignFractionTrue.ToPointer(),
                            },
                        },
                        Duration: sdk.String("molestias"),
                        Filter: sdk.String("excepturi"),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(865103),
                            Percent: sdk.Float64(2653.89),
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: sdk.String("praesentium"),
                        LabelExtractors: map[string]string{
                            "voluptates": "quasi",
                            "repudiandae": "sint",
                            "veritatis": "itaque",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: sdk.String("incidunt"),
                        EvaluationMissingData: shared.MonitoringQueryLanguageConditionEvaluationMissingDataEnumEvaluationMissingDataInactive.ToPointer(),
                        Query: sdk.String("consequatur"),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(667411),
                            Percent: sdk.Float64(8423.42),
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("deserunt"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReducePercentile99.ToPointer(),
                                GroupByFields: []string{
                                    "labore",
                                    "modi",
                                    "qui",
                                    "aliquid",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignCountTrue.ToPointer(),
                            },
                        },
                        Comparison: shared.MetricThresholdComparisonEnumComparisonLt.ToPointer(),
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("magni"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReducePercentile95.ToPointer(),
                                GroupByFields: []string{
                                    "alias",
                                    "fugit",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignCountFalse.ToPointer(),
                            },
                        },
                        DenominatorFilter: sdk.String("excepturi"),
                        Duration: sdk.String("tempora"),
                        EvaluationMissingData: shared.MetricThresholdEvaluationMissingDataEnumEvaluationMissingDataActive.ToPointer(),
                        Filter: sdk.String("tempore"),
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: sdk.String("labore"),
                        },
                        ThresholdValue: sdk.Float64(9621.89),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(433288),
                            Percent: sdk.Float64(2487.53),
                        },
                    },
                    DisplayName: sdk.String("eligendi"),
                    Name: sdk.String("Gilbert Medhurst"),
                },
            },
            CreationRecord: &shared.MutationRecord{
                MutateTime: sdk.String("officia"),
                MutatedBy: sdk.String("dolor"),
            },
            DisplayName: sdk.String("debitis"),
            Documentation: &shared.Documentation{
                Content: sdk.String("a"),
                MimeType: sdk.String("dolorum"),
            },
            Enabled: sdk.Bool(false),
            MutationRecord: &shared.MutationRecord{
                MutateTime: sdk.String("in"),
                MutatedBy: sdk.String("in"),
            },
            Name: sdk.String("Mrs. Emilio Price"),
            NotificationChannels: []string{
                "ea",
                "aliquid",
                "laborum",
                "accusamus",
            },
            UserLabels: map[string]string{
                "occaecati": "enim",
            },
            Validity: &shared.Status{
                Code: sdk.Int(881736),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "provident": "nam",
                        "id": "blanditiis",
                        "deleniti": "sapiente",
                    },
                    map[string]interface{}{
                        "deserunt": "nisi",
                    },
                    map[string]interface{}{
                        "natus": "omnis",
                        "molestiae": "perferendis",
                    },
                    map[string]interface{}{
                        "magnam": "distinctio",
                        "id": "labore",
                    },
                },
                Message: sdk.String("labore"),
            },
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("eum"),
        Key: sdk.String("vero"),
        Name: "Ms. Julie Gusikowski",
        OauthToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.MonitoringProjectsAlertPoliciesCreateSecurity{
        Option1: &operations.MonitoringProjectsAlertPoliciesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AlertPolicy != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->