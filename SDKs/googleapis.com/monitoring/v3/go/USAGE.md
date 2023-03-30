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
        Security: operations.MonitoringProjectsAlertPoliciesCreateSecurity{
            Option1: &operations.MonitoringProjectsAlertPoliciesCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.MonitoringProjectsAlertPoliciesCreatePathParams{
            Name: "unde",
        },
        QueryParams: operations.MonitoringProjectsAlertPoliciesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.AlertPolicy{
            AlertStrategy: &shared.AlertStrategy{
                AutoClose: "eum",
                NotificationChannelStrategy: []shared.NotificationChannelStrategy{
                    shared.NotificationChannelStrategy{
                        NotificationChannelNames: []string{
                            "saepe",
                            "inventore",
                        },
                        RenotifyInterval: "sapiente",
                    },
                    shared.NotificationChannelStrategy{
                        NotificationChannelNames: []string{
                            "eum",
                            "voluptatum",
                        },
                        RenotifyInterval: "autem",
                    },
                },
                NotificationRateLimit: &shared.NotificationRateLimit{
                    Period: "vel",
                },
            },
            Combiner: "OR",
            Conditions: []shared.Condition{
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "reprehenderit",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_50",
                                GroupByFields: []string{
                                    "quasi",
                                    "laboriosam",
                                    "dicta",
                                    "est",
                                },
                                PerSeriesAligner: "ALIGN_NONE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "consequatur",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_95",
                                GroupByFields: []string{
                                    "omnis",
                                    "eos",
                                    "accusamus",
                                    "accusamus",
                                },
                                PerSeriesAligner: "ALIGN_PERCENT_CHANGE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "rem",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_95",
                                GroupByFields: []string{
                                    "praesentium",
                                    "occaecati",
                                    "dolor",
                                    "soluta",
                                },
                                PerSeriesAligner: "ALIGN_RATE",
                            },
                        },
                        Duration: "quisquam",
                        Filter: "rerum",
                        Trigger: &shared.Trigger{
                            Count: 582020,
                            Percent: 1433.53,
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: "sed",
                        LabelExtractors: map[string]string{
                            "possimus": "occaecati",
                            "odit": "esse",
                            "rem": "voluptatem",
                            "amet": "est",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: "id",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_INACTIVE",
                        Query: "numquam",
                        Trigger: &shared.Trigger{
                            Count: 568434,
                            Percent: 1352.18,
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "quia",
                                CrossSeriesReducer: "REDUCE_COUNT_FALSE",
                                GroupByFields: []string{
                                    "laborum",
                                },
                                PerSeriesAligner: "ALIGN_NEXT_OLDER",
                            },
                        },
                        Comparison: "COMPARISON_LE",
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "earum",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_50",
                                GroupByFields: []string{
                                    "qui",
                                    "ea",
                                    "laborum",
                                },
                                PerSeriesAligner: "ALIGN_COUNT",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "ut",
                                CrossSeriesReducer: "REDUCE_FRACTION_TRUE",
                                GroupByFields: []string{
                                    "inventore",
                                },
                                PerSeriesAligner: "ALIGN_PERCENT_CHANGE",
                            },
                        },
                        DenominatorFilter: "libero",
                        Duration: "et",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_ACTIVE",
                        Filter: "ipsum",
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: "non",
                        },
                        ThresholdValue: 3581.52,
                        Trigger: &shared.Trigger{
                            Count: 128926,
                            Percent: 7506.86,
                        },
                    },
                    DisplayName: "ipsam",
                    Name: "est",
                },
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "quia",
                                CrossSeriesReducer: "REDUCE_COUNT_TRUE",
                                GroupByFields: []string{
                                    "odio",
                                },
                                PerSeriesAligner: "ALIGN_COUNT_FALSE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "doloribus",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_05",
                                GroupByFields: []string{
                                    "et",
                                },
                                PerSeriesAligner: "ALIGN_INTERPOLATE",
                            },
                        },
                        Duration: "quidem",
                        Filter: "neque",
                        Trigger: &shared.Trigger{
                            Count: 995300,
                            Percent: 6531.08,
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: "culpa",
                        LabelExtractors: map[string]string{
                            "esse": "totam",
                            "voluptatum": "et",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: "fuga",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_UNSPECIFIED",
                        Query: "laboriosam",
                        Trigger: &shared.Trigger{
                            Count: 110375,
                            Percent: 6747.52,
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "ipsam",
                                CrossSeriesReducer: "REDUCE_MEAN",
                                GroupByFields: []string{
                                    "adipisci",
                                    "hic",
                                    "consequatur",
                                    "distinctio",
                                },
                                PerSeriesAligner: "ALIGN_PERCENTILE_95",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "perferendis",
                                CrossSeriesReducer: "REDUCE_MEAN",
                                GroupByFields: []string{
                                    "quo",
                                    "tempore",
                                    "explicabo",
                                },
                                PerSeriesAligner: "ALIGN_PERCENT_CHANGE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "reiciendis",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_50",
                                GroupByFields: []string{
                                    "molestias",
                                    "reiciendis",
                                },
                                PerSeriesAligner: "ALIGN_DELTA",
                            },
                        },
                        Comparison: "COMPARISON_LE",
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "quod",
                                CrossSeriesReducer: "REDUCE_NONE",
                                GroupByFields: []string{
                                    "odio",
                                },
                                PerSeriesAligner: "ALIGN_MIN",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "reiciendis",
                                CrossSeriesReducer: "REDUCE_MEAN",
                                GroupByFields: []string{
                                    "exercitationem",
                                    "deleniti",
                                },
                                PerSeriesAligner: "ALIGN_RATE",
                            },
                        },
                        DenominatorFilter: "est",
                        Duration: "voluptatem",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_NO_OP",
                        Filter: "esse",
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: "sint",
                        },
                        ThresholdValue: 641.47,
                        Trigger: &shared.Trigger{
                            Count: 216822,
                            Percent: 6924.72,
                        },
                    },
                    DisplayName: "error",
                    Name: "similique",
                },
            },
            CreationRecord: &shared.MutationRecord{
                MutateTime: "et",
                MutatedBy: "ut",
            },
            DisplayName: "molestias",
            Documentation: &shared.Documentation{
                Content: "cupiditate",
                MimeType: "sint",
            },
            Enabled: false,
            MutationRecord: &shared.MutationRecord{
                MutateTime: "explicabo",
                MutatedBy: "et",
            },
            Name: "in",
            NotificationChannels: []string{
                "non",
            },
            UserLabels: map[string]string{
                "voluptatem": "aut",
                "libero": "voluptas",
            },
            Validity: &shared.Status{
                Code: 131797,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "voluptas": "nostrum",
                        "voluptatem": "sit",
                        "in": "officia",
                    },
                    map[string]interface{}{
                        "voluptatem": "dolorem",
                        "eum": "quis",
                        "consequatur": "ratione",
                    },
                    map[string]interface{}{
                        "similique": "enim",
                        "nihil": "id",
                        "quis": "sapiente",
                    },
                },
                Message: "et",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.MonitoringProjectsAlertPoliciesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AlertPolicy != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->