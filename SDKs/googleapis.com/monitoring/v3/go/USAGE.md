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
            Name: "corrupti",
        },
        QueryParams: operations.MonitoringProjectsAlertPoliciesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "enim",
            Alt: "proto",
            Callback: "quo",
            Fields: "necessitatibus",
            Key: "ipsam",
            OauthToken: "non",
            PrettyPrint: true,
            QuotaUser: "reprehenderit",
            UploadType: "vero",
            UploadProtocol: "facilis",
        },
        Request: &shared.AlertPolicy{
            AlertStrategy: &shared.AlertStrategy{
                AutoClose: "debitis",
                NotificationRateLimit: &shared.NotificationRateLimit{
                    Period: "animi",
                },
            },
            Combiner: "AND_WITH_MATCHING_RESOURCE",
            Conditions: []shared.Condition{
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "sunt",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_99",
                                GroupByFields: []string{
                                    "maiores",
                                    "cupiditate",
                                    "labore",
                                },
                                PerSeriesAligner: "ALIGN_SUM",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "laboriosam",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_05",
                                GroupByFields: []string{
                                    "ut",
                                    "veritatis",
                                },
                                PerSeriesAligner: "ALIGN_MIN",
                            },
                        },
                        Duration: "soluta",
                        Filter: "pariatur",
                        Trigger: &shared.Trigger{
                            Count: 8546715417534629051,
                            Percent: 67.199997,
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: "quia",
                        LabelExtractors: map[string]string{
                            "rerum": "temporibus",
                            "nemo": "odio",
                            "possimus": "aspernatur",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: "eaque",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_INACTIVE",
                        Query: "qui",
                        Trigger: &shared.Trigger{
                            Count: 4192959014955667714,
                            Percent: 59.200001,
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "recusandae",
                                CrossSeriesReducer: "REDUCE_COUNT_TRUE",
                                GroupByFields: []string{
                                    "reiciendis",
                                    "nostrum",
                                    "aut",
                                },
                                PerSeriesAligner: "ALIGN_PERCENTILE_99",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "vel",
                                CrossSeriesReducer: "REDUCE_NONE",
                                GroupByFields: []string{
                                    "provident",
                                },
                                PerSeriesAligner: "ALIGN_RATE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "ab",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_05",
                                GroupByFields: []string{
                                    "et",
                                    "omnis",
                                },
                                PerSeriesAligner: "ALIGN_NEXT_OLDER",
                            },
                        },
                        Comparison: "COMPARISON_GE",
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "est",
                                CrossSeriesReducer: "REDUCE_SUM",
                                GroupByFields: []string{
                                    "architecto",
                                    "explicabo",
                                    "autem",
                                },
                                PerSeriesAligner: "ALIGN_FRACTION_TRUE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "iste",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_99",
                                GroupByFields: []string{
                                    "corrupti",
                                },
                                PerSeriesAligner: "ALIGN_PERCENTILE_05",
                            },
                        },
                        DenominatorFilter: "enim",
                        Duration: "numquam",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_UNSPECIFIED",
                        Filter: "ipsam",
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: "quis",
                        },
                        ThresholdValue: 70.099998,
                        Trigger: &shared.Trigger{
                            Count: 8529178827034012331,
                            Percent: 0.200000,
                        },
                    },
                    DisplayName: "sit",
                    Name: "error",
                },
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "omnis",
                                CrossSeriesReducer: "REDUCE_MEAN",
                                GroupByFields: []string{
                                    "ducimus",
                                },
                                PerSeriesAligner: "ALIGN_MEAN",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "ipsum",
                                CrossSeriesReducer: "REDUCE_COUNT",
                                GroupByFields: []string{
                                    "quam",
                                    "mollitia",
                                },
                                PerSeriesAligner: "ALIGN_COUNT_TRUE",
                            },
                        },
                        Duration: "qui",
                        Filter: "sint",
                        Trigger: &shared.Trigger{
                            Count: 575611242920974249,
                            Percent: 12.100000,
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: "vitae",
                        LabelExtractors: map[string]string{
                            "aliquam": "est",
                            "nulla": "molestias",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: "quasi",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_INACTIVE",
                        Query: "expedita",
                        Trigger: &shared.Trigger{
                            Count: 5655887632095028385,
                            Percent: 84.099998,
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "corporis",
                                CrossSeriesReducer: "REDUCE_SUM",
                                GroupByFields: []string{
                                    "ad",
                                },
                                PerSeriesAligner: "ALIGN_COUNT_TRUE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "temporibus",
                                CrossSeriesReducer: "REDUCE_MEAN",
                                GroupByFields: []string{
                                    "cupiditate",
                                    "et",
                                    "sed",
                                },
                                PerSeriesAligner: "ALIGN_MEAN",
                            },
                        },
                        Comparison: "COMPARISON_LE",
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "ea",
                                CrossSeriesReducer: "REDUCE_MEAN",
                                GroupByFields: []string{
                                    "voluptatem",
                                    "molestias",
                                    "dolorem",
                                },
                                PerSeriesAligner: "ALIGN_MEAN",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "neque",
                                CrossSeriesReducer: "REDUCE_STDDEV",
                                GroupByFields: []string{
                                    "aut",
                                    "dolores",
                                },
                                PerSeriesAligner: "ALIGN_PERCENTILE_05",
                            },
                        },
                        DenominatorFilter: "minima",
                        Duration: "non",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_NO_OP",
                        Filter: "quaerat",
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: "ex",
                        },
                        ThresholdValue: 73.199997,
                        Trigger: &shared.Trigger{
                            Count: 2643189024539766149,
                            Percent: 26.200001,
                        },
                    },
                    DisplayName: "unde",
                    Name: "corrupti",
                },
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "sapiente",
                                CrossSeriesReducer: "REDUCE_MEAN",
                                GroupByFields: []string{
                                    "sit",
                                    "aliquam",
                                    "sequi",
                                },
                                PerSeriesAligner: "ALIGN_PERCENTILE_99",
                            },
                        },
                        Duration: "aut",
                        Filter: "voluptates",
                        Trigger: &shared.Trigger{
                            Count: 6864077913755426260,
                            Percent: 67.199997,
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: "quo",
                        LabelExtractors: map[string]string{
                            "qui": "quis",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: "aut",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_INACTIVE",
                        Query: "autem",
                        Trigger: &shared.Trigger{
                            Count: 8195763145929443693,
                            Percent: 60.200001,
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "est",
                                CrossSeriesReducer: "REDUCE_STDDEV",
                                GroupByFields: []string{
                                    "corporis",
                                },
                                PerSeriesAligner: "ALIGN_MAX",
                            },
                        },
                        Comparison: "COMPARISON_LE",
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "beatae",
                                CrossSeriesReducer: "REDUCE_FRACTION_TRUE",
                                GroupByFields: []string{
                                    "consequatur",
                                },
                                PerSeriesAligner: "ALIGN_FRACTION_TRUE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "enim",
                                CrossSeriesReducer: "REDUCE_MEAN",
                                GroupByFields: []string{
                                    "temporibus",
                                    "quod",
                                },
                                PerSeriesAligner: "ALIGN_STDDEV",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "sunt",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_50",
                                GroupByFields: []string{
                                    "sed",
                                    "et",
                                    "omnis",
                                },
                                PerSeriesAligner: "ALIGN_MEAN",
                            },
                        },
                        DenominatorFilter: "aperiam",
                        Duration: "consequatur",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_INACTIVE",
                        Filter: "voluptas",
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: "earum",
                        },
                        ThresholdValue: 92.199997,
                        Trigger: &shared.Trigger{
                            Count: 8838871458553901847,
                            Percent: 32.200001,
                        },
                    },
                    DisplayName: "et",
                    Name: "tempora",
                },
            },
            CreationRecord: &shared.MutationRecord{
                MutateTime: "fugiat",
                MutatedBy: "aliquam",
            },
            DisplayName: "quaerat",
            Documentation: &shared.Documentation{
                Content: "voluptatem",
                MimeType: "ullam",
            },
            Enabled: false,
            MutationRecord: &shared.MutationRecord{
                MutateTime: "perferendis",
                MutatedBy: "reiciendis",
            },
            Name: "et",
            NotificationChannels: []string{
                "rerum",
            },
            UserLabels: map[string]string{
                "ut": "occaecati",
            },
            Validity: &shared.Status{
                Code: 3524904515083528158,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "deleniti": "tenetur",
                        "sunt": "aperiam",
                        "non": "consequatur",
                    },
                },
                Message: "quibusdam",
            },
        },
    }
    
    res, err := s.Projects.MonitoringProjectsAlertPoliciesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AlertPolicy != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->