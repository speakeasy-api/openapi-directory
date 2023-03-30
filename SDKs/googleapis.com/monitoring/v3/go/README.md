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
