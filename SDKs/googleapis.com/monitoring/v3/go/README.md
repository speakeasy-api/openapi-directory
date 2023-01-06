# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

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

### services

* `MonitoringServicesCreate` - Create a Service.
* `MonitoringServicesList` - List Services for this Metrics Scope.
* `MonitoringServicesServiceLevelObjectivesCreate` - Create a ServiceLevelObjective for the given Service.
* `MonitoringServicesServiceLevelObjectivesDelete` - Delete the given ServiceLevelObjective.
* `MonitoringServicesServiceLevelObjectivesGet` - Get a ServiceLevelObjective by name.
* `MonitoringServicesServiceLevelObjectivesList` - List the ServiceLevelObjectives for the given Service.
* `MonitoringServicesServiceLevelObjectivesPatch` - Update the given ServiceLevelObjective.

### uptimeCheckIps

* `MonitoringUptimeCheckIpsList` - Returns the list of IP addresses that checkers run from

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
