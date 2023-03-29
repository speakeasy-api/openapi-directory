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
                NotificationRateLimit: &shared.NotificationRateLimit{
                    Period: "iusto",
                },
            },
            Combiner: "AND",
            Conditions: []shared.Condition{
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "sapiente",
                                CrossSeriesReducer: "REDUCE_MAX",
                                GroupByFields: []string{
                                    "voluptatum",
                                    "autem",
                                },
                                PerSeriesAligner: "ALIGN_PERCENTILE_95",
                            },
                        },
                        Duration: "non",
                        Filter: "deleniti",
                        Trigger: &shared.Trigger{
                            Count: 568045,
                            Percent: 3927.85,
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: "molestiae",
                        LabelExtractors: map[string]string{
                            "quasi": "laboriosam",
                            "dicta": "est",
                            "voluptatem": "consequatur",
                            "fugiat": "a",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: "omnis",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_UNSPECIFIED",
                        Query: "accusamus",
                        Trigger: &shared.Trigger{
                            Count: 870088,
                            Percent: 9786.19,
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "quibusdam",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_95",
                                GroupByFields: []string{
                                    "occaecati",
                                    "dolor",
                                },
                                PerSeriesAligner: "ALIGN_COUNT_FALSE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "sed",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_99",
                                GroupByFields: []string{
                                    "culpa",
                                    "qui",
                                    "sed",
                                },
                                PerSeriesAligner: "ALIGN_PERCENTILE_05",
                            },
                        },
                        Comparison: "COMPARISON_EQ",
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "odit",
                                CrossSeriesReducer: "REDUCE_STDDEV",
                                GroupByFields: []string{
                                    "voluptatem",
                                    "amet",
                                },
                                PerSeriesAligner: "ALIGN_PERCENTILE_99",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "id",
                                CrossSeriesReducer: "REDUCE_COUNT",
                                GroupByFields: []string{
                                    "similique",
                                },
                                PerSeriesAligner: "ALIGN_RATE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "sit",
                                CrossSeriesReducer: "REDUCE_SUM",
                                GroupByFields: []string{
                                    "voluptatem",
                                    "laborum",
                                    "modi",
                                },
                                PerSeriesAligner: "ALIGN_COUNT_TRUE",
                            },
                        },
                        DenominatorFilter: "iure",
                        Duration: "earum",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_NO_OP",
                        Filter: "soluta",
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: "qui",
                        },
                        ThresholdValue: 3595.08,
                        Trigger: &shared.Trigger{
                            Count: 613064,
                            Percent: 4370.32,
                        },
                    },
                    DisplayName: "ut",
                    Name: "optio",
                },
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "inventore",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_05",
                                GroupByFields: []string{
                                    "et",
                                    "libero",
                                    "ipsum",
                                },
                                PerSeriesAligner: "ALIGN_INTERPOLATE",
                            },
                        },
                        Duration: "ea",
                        Filter: "magni",
                        Trigger: &shared.Trigger{
                            Count: 750686,
                            Percent: 3154.28,
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: "est",
                        LabelExtractors: map[string]string{
                            "quia": "similique",
                            "eaque": "odio",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: "harum",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_NO_OP",
                        Query: "a",
                        Trigger: &shared.Trigger{
                            Count: 102044,
                            Percent: 6527.9,
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "quidem",
                                CrossSeriesReducer: "REDUCE_MIN",
                                GroupByFields: []string{
                                    "et",
                                    "culpa",
                                    "aliquam",
                                    "esse",
                                },
                                PerSeriesAligner: "ALIGN_COUNT",
                            },
                        },
                        Comparison: "COMPARISON_LT",
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "fuga",
                                CrossSeriesReducer: "REDUCE_MIN",
                                GroupByFields: []string{
                                    "aut",
                                    "cum",
                                },
                                PerSeriesAligner: "ALIGN_COUNT_FALSE",
                            },
                        },
                        DenominatorFilter: "ipsam",
                        Duration: "eos",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_NO_OP",
                        Filter: "adipisci",
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: "hic",
                        },
                        ThresholdValue: 3687.25,
                        Trigger: &shared.Trigger{
                            Count: 662527,
                            Percent: 8209.94,
                        },
                    },
                    DisplayName: "perferendis",
                    Name: "aspernatur",
                },
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "quo",
                                CrossSeriesReducer: "REDUCE_FRACTION_TRUE",
                                GroupByFields: []string{
                                    "aut",
                                },
                                PerSeriesAligner: "ALIGN_PERCENT_CHANGE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "debitis",
                                CrossSeriesReducer: "REDUCE_COUNT",
                                GroupByFields: []string{
                                    "reiciendis",
                                    "illo",
                                    "id",
                                },
                                PerSeriesAligner: "ALIGN_COUNT",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "quod",
                                CrossSeriesReducer: "REDUCE_NONE",
                                GroupByFields: []string{
                                    "odio",
                                },
                                PerSeriesAligner: "ALIGN_MIN",
                            },
                        },
                        Duration: "reiciendis",
                        Filter: "sed",
                        Trigger: &shared.Trigger{
                            Count: 359444,
                            Percent: 2961.4,
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: "deleniti",
                        LabelExtractors: map[string]string{
                            "est": "voluptatem",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: "aut",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_INACTIVE",
                        Query: "sint",
                        Trigger: &shared.Trigger{
                            Count: 64147,
                            Percent: 2168.22,
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "error",
                                CrossSeriesReducer: "REDUCE_COUNT_TRUE",
                                GroupByFields: []string{
                                    "ut",
                                    "molestias",
                                    "cupiditate",
                                    "sint",
                                },
                                PerSeriesAligner: "ALIGN_DELTA",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "et",
                                CrossSeriesReducer: "REDUCE_COUNT_FALSE",
                                GroupByFields: []string{
                                    "non",
                                },
                                PerSeriesAligner: "ALIGN_MIN",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "voluptatem",
                                CrossSeriesReducer: "REDUCE_NONE",
                                GroupByFields: []string{
                                    "voluptas",
                                    "magni",
                                    "est",
                                },
                                PerSeriesAligner: "ALIGN_FRACTION_TRUE",
                            },
                        },
                        Comparison: "COMPARISON_EQ",
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "voluptatem",
                                CrossSeriesReducer: "REDUCE_MIN",
                                GroupByFields: []string{
                                    "officia",
                                    "omnis",
                                },
                                PerSeriesAligner: "ALIGN_NONE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "dolorem",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_95",
                                GroupByFields: []string{
                                    "consequatur",
                                    "ratione",
                                },
                                PerSeriesAligner: "ALIGN_COUNT_FALSE",
                            },
                        },
                        DenominatorFilter: "similique",
                        Duration: "enim",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_ACTIVE",
                        Filter: "id",
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: "quis",
                        },
                        ThresholdValue: 9621.89,
                        Trigger: &shared.Trigger{
                            Count: 433288,
                            Percent: 2487.53,
                        },
                    },
                    DisplayName: "possimus",
                    Name: "in",
                },
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "deserunt",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_50",
                                GroupByFields: []string{
                                    "rerum",
                                    "modi",
                                    "necessitatibus",
                                },
                                PerSeriesAligner: "ALIGN_PERCENT_CHANGE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "soluta",
                                CrossSeriesReducer: "REDUCE_COUNT",
                                GroupByFields: []string{
                                    "nulla",
                                    "reiciendis",
                                },
                                PerSeriesAligner: "ALIGN_FRACTION_TRUE",
                            },
                        },
                        Duration: "fugit",
                        Filter: "ullam",
                        Trigger: &shared.Trigger{
                            Count: 767024,
                            Percent: 8137.98,
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: "velit",
                        LabelExtractors: map[string]string{
                            "cum": "aut",
                            "magnam": "culpa",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: "enim",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_NO_OP",
                        Query: "delectus",
                        Trigger: &shared.Trigger{
                            Count: 692532,
                            Percent: 5884.65,
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "distinctio",
                                CrossSeriesReducer: "REDUCE_COUNT_TRUE",
                                GroupByFields: []string{
                                    "a",
                                    "incidunt",
                                    "facilis",
                                },
                                PerSeriesAligner: "ALIGN_MEAN",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "nihil",
                                CrossSeriesReducer: "REDUCE_COUNT_FALSE",
                                GroupByFields: []string{
                                    "voluptatum",
                                    "sit",
                                    "rem",
                                },
                                PerSeriesAligner: "ALIGN_MIN",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "porro",
                                CrossSeriesReducer: "REDUCE_FRACTION_TRUE",
                                GroupByFields: []string{
                                    "nostrum",
                                    "eum",
                                },
                                PerSeriesAligner: "ALIGN_COUNT_TRUE",
                            },
                        },
                        Comparison: "COMPARISON_EQ",
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "debitis",
                                CrossSeriesReducer: "REDUCE_MEAN",
                                GroupByFields: []string{
                                    "ullam",
                                },
                                PerSeriesAligner: "ALIGN_DELTA",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "similique",
                                CrossSeriesReducer: "REDUCE_SUM",
                                GroupByFields: []string{
                                    "omnis",
                                    "in",
                                    "aperiam",
                                },
                                PerSeriesAligner: "ALIGN_COUNT_FALSE",
                            },
                        },
                        DenominatorFilter: "ut",
                        Duration: "et",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_INACTIVE",
                        Filter: "et",
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: "modi",
                        },
                        ThresholdValue: 8965.47,
                        Trigger: &shared.Trigger{
                            Count: 141264,
                            Percent: 3675.62,
                        },
                    },
                    DisplayName: "aspernatur",
                    Name: "iusto",
                },
            },
            CreationRecord: &shared.MutationRecord{
                MutateTime: "maiores",
                MutatedBy: "saepe",
            },
            DisplayName: "quaerat",
            Documentation: &shared.Documentation{
                Content: "aut",
                MimeType: "sed",
            },
            Enabled: false,
            MutationRecord: &shared.MutationRecord{
                MutateTime: "nihil",
                MutatedBy: "ducimus",
            },
            Name: "aspernatur",
            NotificationChannels: []string{
                "sint",
            },
            UserLabels: map[string]string{
                "quo": "totam",
                "repellat": "voluptas",
            },
            Validity: &shared.Status{
                Code: 149448,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "eaque": "neque",
                        "molestias": "et",
                        "dolorem": "quia",
                        "omnis": "pariatur",
                    },
                    map[string]interface{}{
                        "consequatur": "velit",
                        "similique": "eos",
                        "voluptate": "aperiam",
                        "quasi": "voluptatibus",
                    },
                    map[string]interface{}{
                        "quis": "qui",
                        "quam": "quisquam",
                        "ab": "et",
                    },
                    map[string]interface{}{
                        "aut": "sit",
                        "vero": "incidunt",
                    },
                },
                Message: "aut",
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