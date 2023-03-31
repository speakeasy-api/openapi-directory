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

    req := operations.MonitoringProjectsAlertPoliciesCreateRequest{
        DollarXgafv: "2",
        AlertPolicy: &shared.AlertPolicy{
            AlertStrategy: &shared.AlertStrategy{
                AutoClose: "provident",
                NotificationChannelStrategy: []shared.NotificationChannelStrategy{
                    shared.NotificationChannelStrategy{
                        NotificationChannelNames: []string{
                            "unde",
                            "nulla",
                            "corrupti",
                            "illum",
                        },
                        RenotifyInterval: "vel",
                    },
                    shared.NotificationChannelStrategy{
                        NotificationChannelNames: []string{
                            "deserunt",
                            "suscipit",
                            "iure",
                        },
                        RenotifyInterval: "magnam",
                    },
                    shared.NotificationChannelStrategy{
                        NotificationChannelNames: []string{
                            "ipsa",
                            "delectus",
                            "tempora",
                            "suscipit",
                        },
                        RenotifyInterval: "molestiae",
                    },
                },
                NotificationRateLimit: &shared.NotificationRateLimit{
                    Period: "minus",
                },
            },
            Combiner: "AND_WITH_MATCHING_RESOURCE",
            Conditions: []shared.Condition{
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "excepturi",
                                CrossSeriesReducer: "REDUCE_STDDEV",
                                GroupByFields: []string{
                                    "temporibus",
                                    "ab",
                                    "quis",
                                    "veritatis",
                                },
                                PerSeriesAligner: "ALIGN_COUNT_FALSE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "perferendis",
                                CrossSeriesReducer: "REDUCE_STDDEV",
                                GroupByFields: []string{
                                    "sapiente",
                                    "quo",
                                    "odit",
                                    "at",
                                },
                                PerSeriesAligner: "ALIGN_PERCENTILE_50",
                            },
                        },
                        Duration: "maiores",
                        Filter: "molestiae",
                        Trigger: &shared.Trigger{
                            Count: 799159,
                            Percent: 8009.11,
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: "esse",
                        LabelExtractors: map[string]string{
                            "porro": "dolorum",
                            "dicta": "nam",
                            "officia": "occaecati",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: "fugit",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_ACTIVE",
                        Query: "hic",
                        Trigger: &shared.Trigger{
                            Count: 758616,
                            Percent: 5218.48,
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "commodi",
                                CrossSeriesReducer: "REDUCE_COUNT",
                                GroupByFields: []string{
                                    "qui",
                                    "impedit",
                                },
                                PerSeriesAligner: "ALIGN_PERCENTILE_99",
                            },
                        },
                        Comparison: "COMPARISON_LT",
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "excepturi",
                                CrossSeriesReducer: "REDUCE_MEAN",
                                GroupByFields: []string{
                                    "ad",
                                },
                                PerSeriesAligner: "ALIGN_COUNT_TRUE",
                            },
                        },
                        DenominatorFilter: "sed",
                        Duration: "iste",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_UNSPECIFIED",
                        Filter: "natus",
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: "laboriosam",
                        },
                        ThresholdValue: 9437.49,
                        Trigger: &shared.Trigger{
                            Count: 902599,
                            Percent: 6818.2,
                        },
                    },
                    DisplayName: "in",
                    Name: "corporis",
                },
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "iure",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_50",
                                GroupByFields: []string{
                                    "architecto",
                                    "ipsa",
                                    "reiciendis",
                                },
                                PerSeriesAligner: "ALIGN_COUNT_FALSE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "mollitia",
                                CrossSeriesReducer: "REDUCE_FRACTION_TRUE",
                                GroupByFields: []string{
                                    "dolorem",
                                },
                                PerSeriesAligner: "ALIGN_MAX",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "explicabo",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_99",
                                GroupByFields: []string{
                                    "omnis",
                                    "nemo",
                                },
                                PerSeriesAligner: "ALIGN_MAX",
                            },
                        },
                        Duration: "excepturi",
                        Filter: "accusantium",
                        Trigger: &shared.Trigger{
                            Count: 438601,
                            Percent: 6342.74,
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: "doloribus",
                        LabelExtractors: map[string]string{
                            "architecto": "mollitia",
                            "dolorem": "culpa",
                            "consequuntur": "repellat",
                            "mollitia": "occaecati",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: "numquam",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_INACTIVE",
                        Query: "quam",
                        Trigger: &shared.Trigger{
                            Count: 474697,
                            Percent: 2444.25,
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "quia",
                                CrossSeriesReducer: "REDUCE_SUM",
                                GroupByFields: []string{
                                    "laborum",
                                },
                                PerSeriesAligner: "ALIGN_COUNT_FALSE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "enim",
                                CrossSeriesReducer: "REDUCE_MEAN",
                                GroupByFields: []string{
                                    "sequi",
                                    "tenetur",
                                    "ipsam",
                                    "id",
                                },
                                PerSeriesAligner: "ALIGN_PERCENTILE_95",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "aut",
                                CrossSeriesReducer: "REDUCE_MEAN",
                                GroupByFields: []string{
                                    "temporibus",
                                    "laborum",
                                    "quasi",
                                },
                                PerSeriesAligner: "ALIGN_PERCENT_CHANGE",
                            },
                        },
                        Comparison: "COMPARISON_NE",
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "nihil",
                                CrossSeriesReducer: "REDUCE_COUNT_TRUE",
                                GroupByFields: []string{
                                    "ipsa",
                                    "omnis",
                                    "voluptate",
                                    "cum",
                                },
                                PerSeriesAligner: "ALIGN_NONE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "doloremque",
                                CrossSeriesReducer: "REDUCE_COUNT",
                                GroupByFields: []string{
                                    "maiores",
                                    "dicta",
                                },
                                PerSeriesAligner: "ALIGN_MAX",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "dolore",
                                CrossSeriesReducer: "REDUCE_COUNT",
                                GroupByFields: []string{
                                    "harum",
                                },
                                PerSeriesAligner: "ALIGN_MAX",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "accusamus",
                                CrossSeriesReducer: "REDUCE_STDDEV",
                                GroupByFields: []string{
                                    "quae",
                                    "ipsum",
                                    "quidem",
                                    "molestias",
                                },
                                PerSeriesAligner: "ALIGN_STDDEV",
                            },
                        },
                        DenominatorFilter: "pariatur",
                        Duration: "modi",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_ACTIVE",
                        Filter: "rem",
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: "voluptates",
                        },
                        ThresholdValue: 939.4,
                        Trigger: &shared.Trigger{
                            Count: 921158,
                            Percent: 5759.47,
                        },
                    },
                    DisplayName: "veritatis",
                    Name: "itaque",
                },
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "enim",
                                CrossSeriesReducer: "REDUCE_NONE",
                                GroupByFields: []string{
                                    "quibusdam",
                                    "explicabo",
                                    "deserunt",
                                },
                                PerSeriesAligner: "ALIGN_FRACTION_TRUE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "quibusdam",
                                CrossSeriesReducer: "REDUCE_SUM",
                                GroupByFields: []string{
                                    "qui",
                                    "aliquid",
                                },
                                PerSeriesAligner: "ALIGN_COUNT_TRUE",
                            },
                        },
                        Duration: "quos",
                        Filter: "perferendis",
                        Trigger: &shared.Trigger{
                            Count: 164940,
                            Percent: 8289.4,
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: "ipsam",
                        LabelExtractors: map[string]string{
                            "fugit": "dolorum",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: "excepturi",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_INACTIVE",
                        Query: "facilis",
                        Trigger: &shared.Trigger{
                            Count: 735194,
                            Percent: 2884.76,
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "eum",
                                CrossSeriesReducer: "REDUCE_MAX",
                                GroupByFields: []string{
                                    "sint",
                                    "aliquid",
                                    "provident",
                                    "necessitatibus",
                                },
                                PerSeriesAligner: "ALIGN_STDDEV",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "officia",
                                CrossSeriesReducer: "REDUCE_MAX",
                                GroupByFields: []string{
                                    "a",
                                    "dolorum",
                                    "in",
                                    "in",
                                },
                                PerSeriesAligner: "ALIGN_PERCENTILE_50",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "maiores",
                                CrossSeriesReducer: "REDUCE_FRACTION_TRUE",
                                GroupByFields: []string{
                                    "magnam",
                                },
                                PerSeriesAligner: "ALIGN_PERCENTILE_99",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "facere",
                                CrossSeriesReducer: "REDUCE_STDDEV",
                                GroupByFields: []string{
                                    "laborum",
                                    "accusamus",
                                },
                                PerSeriesAligner: "ALIGN_NEXT_OLDER",
                            },
                        },
                        Comparison: "COMPARISON_LE",
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "accusamus",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_05",
                                GroupByFields: []string{
                                    "provident",
                                    "nam",
                                    "id",
                                },
                                PerSeriesAligner: "ALIGN_SUM",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "deleniti",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_05",
                                GroupByFields: []string{
                                    "deserunt",
                                },
                                PerSeriesAligner: "ALIGN_MEAN",
                            },
                        },
                        DenominatorFilter: "vel",
                        Duration: "natus",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_ACTIVE",
                        Filter: "molestiae",
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: "perferendis",
                        },
                        ThresholdValue: 4701.32,
                        Trigger: &shared.Trigger{
                            Count: 301575,
                            Percent: 7160.75,
                        },
                    },
                    DisplayName: "id",
                    Name: "labore",
                },
            },
            CreationRecord: &shared.MutationRecord{
                MutateTime: "labore",
                MutatedBy: "suscipit",
            },
            DisplayName: "natus",
            Documentation: &shared.Documentation{
                Content: "nobis",
                MimeType: "eum",
            },
            Enabled: false,
            MutationRecord: &shared.MutationRecord{
                MutateTime: "vero",
                MutatedBy: "aspernatur",
            },
            Name: "architecto",
            NotificationChannels: []string{
                "et",
                "excepturi",
            },
            UserLabels: map[string]string{
                "provident": "quos",
                "sint": "accusantium",
            },
            Validity: &shared.Status{
                Code: 653201,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "ad": "eum",
                        "dolor": "necessitatibus",
                        "odit": "nemo",
                    },
                    map[string]interface{}{
                        "iure": "doloribus",
                    },
                    map[string]interface{}{
                        "eius": "maxime",
                        "deleniti": "facilis",
                        "in": "architecto",
                        "architecto": "repudiandae",
                    },
                    map[string]interface{}{
                        "expedita": "nihil",
                        "repellat": "quibusdam",
                    },
                },
                Message: "sed",
            },
        },
        AccessToken: "saepe",
        Alt: "proto",
        Callback: "accusantium",
        Fields: "consequuntur",
        Key: "praesentium",
        Name: "natus",
        OauthToken: "magni",
        PrettyPrint: false,
        QuotaUser: "sunt",
        UploadType: "quo",
        UploadProtocol: "illum",
    }

    ctx := context.Background()
    res, err := s.Projects.MonitoringProjectsAlertPoliciesCreate(ctx, req, operations.MonitoringProjectsAlertPoliciesCreateSecurity{
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