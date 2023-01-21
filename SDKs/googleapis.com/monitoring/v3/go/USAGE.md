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
            Name: "sit",
        },
        QueryParams: operations.MonitoringProjectsAlertPoliciesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.AlertPolicy{
            AlertStrategy: &shared.AlertStrategy{
                AutoClose: "dicta",
                NotificationRateLimit: &shared.NotificationRateLimit{
                    Period: "debitis",
                },
            },
            Combiner: "COMBINE_UNSPECIFIED",
            Conditions: []shared.Condition{
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "dolorem",
                                CrossSeriesReducer: "REDUCE_COUNT_FALSE",
                                GroupByFields: []string{
                                    "iste",
                                },
                                PerSeriesAligner: "ALIGN_PERCENT_CHANGE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "totam",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_99",
                                GroupByFields: []string{
                                    "debitis",
                                    "vel",
                                    "odio",
                                },
                                PerSeriesAligner: "ALIGN_DELTA",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "id",
                                CrossSeriesReducer: "REDUCE_MAX",
                                GroupByFields: []string{
                                    "totam",
                                    "commodi",
                                    "quis",
                                },
                                PerSeriesAligner: "ALIGN_FRACTION_TRUE",
                            },
                        },
                        Duration: "aut",
                        Filter: "odit",
                        Trigger: &shared.Trigger{
                            Count: 5001958211167890979,
                            Percent: 14.200000,
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: "aut",
                        LabelExtractors: map[string]string{
                            "sed": "officiis",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: "autem",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_UNSPECIFIED",
                        Query: "nobis",
                        Trigger: &shared.Trigger{
                            Count: 4345851588384648695,
                            Percent: 77.099998,
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "ipsum",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_50",
                                GroupByFields: []string{
                                    "sint",
                                    "inventore",
                                },
                                PerSeriesAligner: "ALIGN_MEAN",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "exercitationem",
                                CrossSeriesReducer: "REDUCE_COUNT_FALSE",
                                GroupByFields: []string{
                                    "tempore",
                                },
                                PerSeriesAligner: "ALIGN_DELTA",
                            },
                        },
                        Comparison: "COMPARISON_EQ",
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "beatae",
                                CrossSeriesReducer: "REDUCE_COUNT_TRUE",
                                GroupByFields: []string{
                                    "et",
                                    "omnis",
                                    "ipsum",
                                },
                                PerSeriesAligner: "ALIGN_MEAN",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "dolores",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_05",
                                GroupByFields: []string{
                                    "rerum",
                                    "mollitia",
                                },
                                PerSeriesAligner: "ALIGN_MIN",
                            },
                        },
                        DenominatorFilter: "quam",
                        Duration: "reprehenderit",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_ACTIVE",
                        Filter: "qui",
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: "unde",
                        },
                        ThresholdValue: 31.100000,
                        Trigger: &shared.Trigger{
                            Count: 8086159467323165929,
                            Percent: 22.100000,
                        },
                    },
                    DisplayName: "ab",
                    Name: "neque",
                },
            },
            CreationRecord: &shared.MutationRecord{
                MutateTime: "ullam",
                MutatedBy: "et",
            },
            DisplayName: "accusantium",
            Documentation: &shared.Documentation{
                Content: "esse",
                MimeType: "architecto",
            },
            Enabled: false,
            MutationRecord: &shared.MutationRecord{
                MutateTime: "velit",
                MutatedBy: "cumque",
            },
            Name: "soluta",
            NotificationChannels: []string{
                "voluptates",
                "magni",
            },
            UserLabels: map[string]string{
                "optio": "qui",
                "earum": "illo",
                "omnis": "ut",
            },
            Validity: &shared.Status{
                Code: 7442289190031176026,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "error": "reprehenderit",
                        "consectetur": "nostrum",
                    },
                    map[string]interface{}{
                        "laboriosam": "sed",
                    },
                },
                Message: "a",
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