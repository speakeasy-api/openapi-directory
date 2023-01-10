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
            Name: "repellendus",
        },
        QueryParams: operations.MonitoringProjectsAlertPoliciesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "omnis",
            Alt: "proto",
            Callback: "voluptas",
            Fields: "corporis",
            Key: "vero",
            OauthToken: "sed",
            PrettyPrint: false,
            QuotaUser: "molestiae",
            UploadType: "rerum",
            UploadProtocol: "exercitationem",
        },
        Request: &shared.AlertPolicy{
            AlertStrategy: &shared.AlertStrategy{
                AutoClose: "nesciunt",
                NotificationRateLimit: &shared.NotificationRateLimit{
                    Period: "omnis",
                },
            },
            Combiner: "COMBINE_UNSPECIFIED",
            Conditions: []shared.Condition{
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "praesentium",
                                CrossSeriesReducer: "REDUCE_STDDEV",
                                GroupByFields: []string{
                                    "magni",
                                    "quibusdam",
                                    "assumenda",
                                },
                                PerSeriesAligner: "ALIGN_PERCENT_CHANGE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "minus",
                                CrossSeriesReducer: "REDUCE_SUM",
                                GroupByFields: []string{
                                    "corporis",
                                    "quaerat",
                                },
                                PerSeriesAligner: "ALIGN_SUM",
                            },
                        },
                        Duration: "qui",
                        Filter: "ab",
                        Trigger: &shared.Trigger{
                            Count: 4629249652007334892,
                            Percent: 87.099998,
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: "enim",
                        LabelExtractors: map[string]string{
                            "ut": "expedita",
                            "quo": "beatae",
                            "maxime": "vel",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: "eum",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_NO_OP",
                        Query: "sed",
                        Trigger: &shared.Trigger{
                            Count: 3440003813319565983,
                            Percent: 43.200001,
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "voluptas",
                                CrossSeriesReducer: "REDUCE_MIN",
                                GroupByFields: []string{
                                    "voluptatem",
                                    "et",
                                },
                                PerSeriesAligner: "ALIGN_NEXT_OLDER",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "maiores",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_95",
                                GroupByFields: []string{
                                    "ullam",
                                },
                                PerSeriesAligner: "ALIGN_COUNT_FALSE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "dolores",
                                CrossSeriesReducer: "REDUCE_NONE",
                                GroupByFields: []string{
                                    "rerum",
                                    "id",
                                },
                                PerSeriesAligner: "ALIGN_MEAN",
                            },
                        },
                        Comparison: "COMPARISON_NE",
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "earum",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_95",
                                GroupByFields: []string{
                                    "explicabo",
                                },
                                PerSeriesAligner: "ALIGN_PERCENTILE_99",
                            },
                        },
                        DenominatorFilter: "eaque",
                        Duration: "perferendis",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_ACTIVE",
                        Filter: "neque",
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: "ullam",
                        },
                        ThresholdValue: 33.099998,
                        Trigger: &shared.Trigger{
                            Count: 383869393711336780,
                            Percent: 97.099998,
                        },
                    },
                    DisplayName: "consequatur",
                    Name: "enim",
                },
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "architecto",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_99",
                                GroupByFields: []string{
                                    "quod",
                                    "corporis",
                                },
                                PerSeriesAligner: "ALIGN_MAX",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "necessitatibus",
                                CrossSeriesReducer: "REDUCE_COUNT_FALSE",
                                GroupByFields: []string{
                                    "non",
                                    "eligendi",
                                },
                                PerSeriesAligner: "ALIGN_PERCENTILE_05",
                            },
                        },
                        Duration: "ipsum",
                        Filter: "eos",
                        Trigger: &shared.Trigger{
                            Count: 960635814650371739,
                            Percent: 58.200001,
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: "sint",
                        LabelExtractors: map[string]string{
                            "ut": "quis",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: "ab",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_NO_OP",
                        Query: "nam",
                        Trigger: &shared.Trigger{
                            Count: 3985253464228977593,
                            Percent: 5.200000,
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "qui",
                                CrossSeriesReducer: "REDUCE_MIN",
                                GroupByFields: []string{
                                    "dolores",
                                    "officia",
                                    "eligendi",
                                },
                                PerSeriesAligner: "ALIGN_STDDEV",
                            },
                        },
                        Comparison: "COMPARISON_GE",
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "aut",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_05",
                                GroupByFields: []string{
                                    "ab",
                                    "inventore",
                                    "deleniti",
                                },
                                PerSeriesAligner: "ALIGN_SUM",
                            },
                        },
                        DenominatorFilter: "ut",
                        Duration: "vitae",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_INACTIVE",
                        Filter: "totam",
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: "omnis",
                        },
                        ThresholdValue: 67.099998,
                        Trigger: &shared.Trigger{
                            Count: 1280576806753042404,
                            Percent: 72.099998,
                        },
                    },
                    DisplayName: "perspiciatis",
                    Name: "occaecati",
                },
            },
            CreationRecord: &shared.MutationRecord{
                MutateTime: "iusto",
                MutatedBy: "eius",
            },
            DisplayName: "voluptatem",
            Documentation: &shared.Documentation{
                Content: "laboriosam",
                MimeType: "magni",
            },
            Enabled: true,
            MutationRecord: &shared.MutationRecord{
                MutateTime: "exercitationem",
                MutatedBy: "maiores",
            },
            Name: "et",
            NotificationChannels: []string{
                "quo",
                "magni",
            },
            UserLabels: map[string]string{
                "omnis": "consectetur",
                "accusamus": "non",
            },
            Validity: &shared.Status{
                Code: 5237954261915984455,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "facere": "architecto",
                        "delectus": "ipsam",
                        "repudiandae": "illo",
                    },
                },
                Message: "saepe",
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