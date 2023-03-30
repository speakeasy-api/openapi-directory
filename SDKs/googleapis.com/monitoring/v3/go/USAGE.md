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
            Name: "corrupti",
        },
        QueryParams: operations.MonitoringProjectsAlertPoliciesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.AlertPolicy{
            AlertStrategy: &shared.AlertStrategy{
                AutoClose: "suscipit",
                NotificationChannelStrategy: []shared.NotificationChannelStrategy{
                    shared.NotificationChannelStrategy{
                        NotificationChannelNames: []string{
                            "debitis",
                            "ipsa",
                        },
                        RenotifyInterval: "delectus",
                    },
                    shared.NotificationChannelStrategy{
                        NotificationChannelNames: []string{
                            "suscipit",
                            "molestiae",
                        },
                        RenotifyInterval: "minus",
                    },
                },
                NotificationRateLimit: &shared.NotificationRateLimit{
                    Period: "placeat",
                },
            },
            Combiner: "OR",
            Conditions: []shared.Condition{
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "nisi",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_50",
                                GroupByFields: []string{
                                    "ab",
                                    "quis",
                                    "veritatis",
                                    "deserunt",
                                },
                                PerSeriesAligner: "ALIGN_NONE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "ipsam",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_95",
                                GroupByFields: []string{
                                    "quo",
                                    "odit",
                                    "at",
                                    "at",
                                },
                                PerSeriesAligner: "ALIGN_PERCENT_CHANGE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "molestiae",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_95",
                                GroupByFields: []string{
                                    "esse",
                                    "totam",
                                    "porro",
                                    "dolorum",
                                },
                                PerSeriesAligner: "ALIGN_RATE",
                            },
                        },
                        Duration: "nam",
                        Filter: "officia",
                        Trigger: &shared.Trigger{
                            Count: 582020,
                            Percent: 1433.53,
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: "deleniti",
                        LabelExtractors: map[string]string{
                            "optio": "totam",
                            "beatae": "commodi",
                            "molestiae": "modi",
                            "qui": "impedit",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: "cum",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_INACTIVE",
                        Query: "ipsum",
                        Trigger: &shared.Trigger{
                            Count: 568434,
                            Percent: 1352.18,
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "ad",
                                CrossSeriesReducer: "REDUCE_COUNT_FALSE",
                                GroupByFields: []string{
                                    "iste",
                                },
                                PerSeriesAligner: "ALIGN_NEXT_OLDER",
                            },
                        },
                        Comparison: "COMPARISON_LE",
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "hic",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_50",
                                GroupByFields: []string{
                                    "in",
                                    "corporis",
                                    "iste",
                                },
                                PerSeriesAligner: "ALIGN_COUNT",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "saepe",
                                CrossSeriesReducer: "REDUCE_FRACTION_TRUE",
                                GroupByFields: []string{
                                    "ipsa",
                                },
                                PerSeriesAligner: "ALIGN_PERCENT_CHANGE",
                            },
                        },
                        DenominatorFilter: "est",
                        Duration: "mollitia",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_ACTIVE",
                        Filter: "dolores",
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: "dolorem",
                        },
                        ThresholdValue: 3581.52,
                        Trigger: &shared.Trigger{
                            Count: 128926,
                            Percent: 7506.86,
                        },
                    },
                    DisplayName: "enim",
                    Name: "omnis",
                },
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "minima",
                                CrossSeriesReducer: "REDUCE_COUNT_TRUE",
                                GroupByFields: []string{
                                    "iure",
                                },
                                PerSeriesAligner: "ALIGN_COUNT_FALSE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "doloribus",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_05",
                                GroupByFields: []string{
                                    "mollitia",
                                },
                                PerSeriesAligner: "ALIGN_INTERPOLATE",
                            },
                        },
                        Duration: "culpa",
                        Filter: "consequuntur",
                        Trigger: &shared.Trigger{
                            Count: 995300,
                            Percent: 6531.08,
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: "occaecati",
                        LabelExtractors: map[string]string{
                            "commodi": "quam",
                            "molestiae": "velit",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: "error",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_UNSPECIFIED",
                        Query: "quis",
                        Trigger: &shared.Trigger{
                            Count: 110375,
                            Percent: 6747.52,
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
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
                            shared.Aggregation{
                                AlignmentPeriod: "voluptatibus",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_50",
                                GroupByFields: []string{
                                    "praesentium",
                                    "voluptatibus",
                                },
                                PerSeriesAligner: "ALIGN_DELTA",
                            },
                        },
                        Comparison: "COMPARISON_LE",
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "cum",
                                CrossSeriesReducer: "REDUCE_NONE",
                                GroupByFields: []string{
                                    "reprehenderit",
                                },
                                PerSeriesAligner: "ALIGN_MIN",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "maiores",
                                CrossSeriesReducer: "REDUCE_MEAN",
                                GroupByFields: []string{
                                    "dolore",
                                    "iusto",
                                },
                                PerSeriesAligner: "ALIGN_RATE",
                            },
                        },
                        DenominatorFilter: "harum",
                        Duration: "enim",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_NO_OP",
                        Filter: "commodi",
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: "repudiandae",
                        },
                        ThresholdValue: 641.47,
                        Trigger: &shared.Trigger{
                            Count: 216822,
                            Percent: 6924.72,
                        },
                    },
                    DisplayName: "molestias",
                    Name: "excepturi",
                },
            },
            CreationRecord: &shared.MutationRecord{
                MutateTime: "pariatur",
                MutatedBy: "modi",
            },
            DisplayName: "praesentium",
            Documentation: &shared.Documentation{
                Content: "rem",
                MimeType: "voluptates",
            },
            Enabled: false,
            MutationRecord: &shared.MutationRecord{
                MutateTime: "quasi",
                MutatedBy: "repudiandae",
            },
            Name: "sint",
            NotificationChannels: []string{
                "itaque",
            },
            UserLabels: map[string]string{
                "enim": "consequatur",
                "est": "quibusdam",
            },
            Validity: &shared.Status{
                Code: 131797,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "quibusdam": "labore",
                        "modi": "qui",
                        "aliquid": "cupiditate",
                    },
                    map[string]interface{}{
                        "perferendis": "magni",
                        "assumenda": "ipsam",
                        "alias": "fugit",
                    },
                    map[string]interface{}{
                        "excepturi": "tempora",
                        "facilis": "tempore",
                        "labore": "delectus",
                    },
                },
                Message: "eum",
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