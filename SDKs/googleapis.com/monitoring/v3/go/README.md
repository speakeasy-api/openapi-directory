# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/monitoring/v3/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Projects

* `MonitoringProjectsAlertPoliciesCreate` - Creates a new alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.
* `MonitoringProjectsAlertPoliciesList` - Lists the existing alerting policies for the workspace.
* `MonitoringProjectsCollectdTimeSeriesCreate` - Cloud Monitoring Agent only: Creates a new time series.This method is only for use by the Cloud Monitoring Agent. Use projects.timeSeries.create instead.
* `MonitoringProjectsGroupsCreate` - Creates a new group.
* `MonitoringProjectsGroupsList` - Lists the existing groups.
* `MonitoringProjectsGroupsMembersList` - Lists the monitored resources that are members of a group.
* `MonitoringProjectsGroupsUpdate` - Updates an existing group. You can change any group attributes except name.
* `MonitoringProjectsMetricDescriptorsCreate` - Creates a new metric descriptor. The creation is executed asynchronously. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics). The metric descriptor is updated if it already exists, except that metric labels are never removed.
* `MonitoringProjectsMetricDescriptorsList` - Lists metric descriptors that match a filter.
* `MonitoringProjectsMonitoredResourceDescriptorsList` - Lists monitored resource descriptors that match a filter.
* `MonitoringProjectsNotificationChannelDescriptorsList` - Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added.
* `MonitoringProjectsNotificationChannelsCreate` - Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.
* `MonitoringProjectsNotificationChannelsGetVerificationCode` - Requests a verification code for an already verified channel that can then be used in a call to VerifyNotificationChannel() on a different channel with an equivalent identity in the same or in a different project. This makes it possible to copy a channel between projects without requiring manual reverification of the channel. If the channel is not in the verified state, this method will fail (in other words, this may only be used if the SendNotificationChannelVerificationCode and VerifyNotificationChannel paths have already been used to put the given channel into the verified state).There is no guarantee that the verification codes returned by this method will be of a similar structure or form as the ones that are delivered to the channel via SendNotificationChannelVerificationCode; while VerifyNotificationChannel() will recognize both the codes delivered via SendNotificationChannelVerificationCode() and returned from GetNotificationChannelVerificationCode(), it is typically the case that the verification codes delivered via SendNotificationChannelVerificationCode() will be shorter and also have a shorter expiration (e.g. codes such as "G-123456") whereas GetVerificationCode() will typically return a much longer, websafe base 64 encoded string that has a longer expiration time.
* `MonitoringProjectsNotificationChannelsList` - Lists the notification channels that have been created for the project.
* `MonitoringProjectsNotificationChannelsSendVerificationCode` - Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel.
* `MonitoringProjectsNotificationChannelsVerify` - Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode.
* `MonitoringProjectsSnoozesCreate` - Creates a Snooze that will prevent alerts, which match the provided criteria, from being opened. The Snooze applies for a specific time interval.
* `MonitoringProjectsSnoozesList` - Lists the Snoozes associated with a project. Can optionally pass in filter, which specifies predicates to match Snoozes.
* `MonitoringProjectsTimeSeriesCreate` - Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response.
* `MonitoringProjectsTimeSeriesCreateService` - Creates or adds data to one or more service time series. A service time series is a time series for a metric from a Google Cloud service. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This endpoint rejects writes to user-defined metrics. This method is only for use by Google Cloud services. Use projects.timeSeries.create instead.
* `MonitoringProjectsTimeSeriesList` - Lists time series that match a filter.
* `MonitoringProjectsTimeSeriesQuery` - Queries time series using Monitoring Query Language.
* `MonitoringProjectsUptimeCheckConfigsCreate` - Creates a new Uptime check configuration.
* `MonitoringProjectsUptimeCheckConfigsList` - Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

### Services

* `MonitoringServicesCreate` - Create a Service.
* `MonitoringServicesList` - List Services for this Metrics Scope.
* `MonitoringServicesServiceLevelObjectivesCreate` - Create a ServiceLevelObjective for the given Service.
* `MonitoringServicesServiceLevelObjectivesDelete` - Delete the given ServiceLevelObjective.
* `MonitoringServicesServiceLevelObjectivesGet` - Get a ServiceLevelObjective by name.
* `MonitoringServicesServiceLevelObjectivesList` - List the ServiceLevelObjectives for the given Service.
* `MonitoringServicesServiceLevelObjectivesPatch` - Update the given ServiceLevelObjective.

### UptimeCheckIps

* `MonitoringUptimeCheckIpsList` - Returns the list of IP addresses that checkers run from
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
