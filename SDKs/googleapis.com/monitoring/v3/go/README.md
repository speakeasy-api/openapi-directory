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
