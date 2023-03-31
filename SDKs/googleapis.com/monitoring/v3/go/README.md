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
        DollarXgafv: "2",
        AlertPolicy: &shared.AlertPolicy{
            AlertStrategy: &shared.AlertStrategy{
                AutoClose: "provident",
                NotificationChannelStrategy: []shared.NotificationChannelStrategy{
                    shared.NotificationChannelStrategy{
                        NotificationChannelNames: []string{
                            "unde",
                            "nulla",
                            "corrupti",
                            "illum",
                        },
                        RenotifyInterval: "vel",
                    },
                    shared.NotificationChannelStrategy{
                        NotificationChannelNames: []string{
                            "deserunt",
                            "suscipit",
                            "iure",
                        },
                        RenotifyInterval: "magnam",
                    },
                    shared.NotificationChannelStrategy{
                        NotificationChannelNames: []string{
                            "ipsa",
                            "delectus",
                            "tempora",
                            "suscipit",
                        },
                        RenotifyInterval: "molestiae",
                    },
                },
                NotificationRateLimit: &shared.NotificationRateLimit{
                    Period: "minus",
                },
            },
            Combiner: "AND_WITH_MATCHING_RESOURCE",
            Conditions: []shared.Condition{
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "excepturi",
                                CrossSeriesReducer: "REDUCE_STDDEV",
                                GroupByFields: []string{
                                    "temporibus",
                                    "ab",
                                    "quis",
                                    "veritatis",
                                },
                                PerSeriesAligner: "ALIGN_COUNT_FALSE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "perferendis",
                                CrossSeriesReducer: "REDUCE_STDDEV",
                                GroupByFields: []string{
                                    "sapiente",
                                    "quo",
                                    "odit",
                                    "at",
                                },
                                PerSeriesAligner: "ALIGN_PERCENTILE_50",
                            },
                        },
                        Duration: "maiores",
                        Filter: "molestiae",
                        Trigger: &shared.Trigger{
                            Count: 799159,
                            Percent: 8009.11,
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: "esse",
                        LabelExtractors: map[string]string{
                            "porro": "dolorum",
                            "dicta": "nam",
                            "officia": "occaecati",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: "fugit",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_ACTIVE",
                        Query: "hic",
                        Trigger: &shared.Trigger{
                            Count: 758616,
                            Percent: 5218.48,
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "commodi",
                                CrossSeriesReducer: "REDUCE_COUNT",
                                GroupByFields: []string{
                                    "qui",
                                    "impedit",
                                },
                                PerSeriesAligner: "ALIGN_PERCENTILE_99",
                            },
                        },
                        Comparison: "COMPARISON_LT",
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "excepturi",
                                CrossSeriesReducer: "REDUCE_MEAN",
                                GroupByFields: []string{
                                    "ad",
                                },
                                PerSeriesAligner: "ALIGN_COUNT_TRUE",
                            },
                        },
                        DenominatorFilter: "sed",
                        Duration: "iste",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_UNSPECIFIED",
                        Filter: "natus",
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: "laboriosam",
                        },
                        ThresholdValue: 9437.49,
                        Trigger: &shared.Trigger{
                            Count: 902599,
                            Percent: 6818.2,
                        },
                    },
                    DisplayName: "in",
                    Name: "corporis",
                },
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "iure",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_50",
                                GroupByFields: []string{
                                    "architecto",
                                    "ipsa",
                                    "reiciendis",
                                },
                                PerSeriesAligner: "ALIGN_COUNT_FALSE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "mollitia",
                                CrossSeriesReducer: "REDUCE_FRACTION_TRUE",
                                GroupByFields: []string{
                                    "dolorem",
                                },
                                PerSeriesAligner: "ALIGN_MAX",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "explicabo",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_99",
                                GroupByFields: []string{
                                    "omnis",
                                    "nemo",
                                },
                                PerSeriesAligner: "ALIGN_MAX",
                            },
                        },
                        Duration: "excepturi",
                        Filter: "accusantium",
                        Trigger: &shared.Trigger{
                            Count: 438601,
                            Percent: 6342.74,
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: "doloribus",
                        LabelExtractors: map[string]string{
                            "architecto": "mollitia",
                            "dolorem": "culpa",
                            "consequuntur": "repellat",
                            "mollitia": "occaecati",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: "numquam",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_INACTIVE",
                        Query: "quam",
                        Trigger: &shared.Trigger{
                            Count: 474697,
                            Percent: 2444.25,
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "quia",
                                CrossSeriesReducer: "REDUCE_SUM",
                                GroupByFields: []string{
                                    "laborum",
                                },
                                PerSeriesAligner: "ALIGN_COUNT_FALSE",
                            },
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
                        },
                        Comparison: "COMPARISON_NE",
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "nihil",
                                CrossSeriesReducer: "REDUCE_COUNT_TRUE",
                                GroupByFields: []string{
                                    "ipsa",
                                    "omnis",
                                    "voluptate",
                                    "cum",
                                },
                                PerSeriesAligner: "ALIGN_NONE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "doloremque",
                                CrossSeriesReducer: "REDUCE_COUNT",
                                GroupByFields: []string{
                                    "maiores",
                                    "dicta",
                                },
                                PerSeriesAligner: "ALIGN_MAX",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "dolore",
                                CrossSeriesReducer: "REDUCE_COUNT",
                                GroupByFields: []string{
                                    "harum",
                                },
                                PerSeriesAligner: "ALIGN_MAX",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "accusamus",
                                CrossSeriesReducer: "REDUCE_STDDEV",
                                GroupByFields: []string{
                                    "quae",
                                    "ipsum",
                                    "quidem",
                                    "molestias",
                                },
                                PerSeriesAligner: "ALIGN_STDDEV",
                            },
                        },
                        DenominatorFilter: "pariatur",
                        Duration: "modi",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_ACTIVE",
                        Filter: "rem",
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: "voluptates",
                        },
                        ThresholdValue: 939.4,
                        Trigger: &shared.Trigger{
                            Count: 921158,
                            Percent: 5759.47,
                        },
                    },
                    DisplayName: "veritatis",
                    Name: "itaque",
                },
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "enim",
                                CrossSeriesReducer: "REDUCE_NONE",
                                GroupByFields: []string{
                                    "quibusdam",
                                    "explicabo",
                                    "deserunt",
                                },
                                PerSeriesAligner: "ALIGN_FRACTION_TRUE",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "quibusdam",
                                CrossSeriesReducer: "REDUCE_SUM",
                                GroupByFields: []string{
                                    "qui",
                                    "aliquid",
                                },
                                PerSeriesAligner: "ALIGN_COUNT_TRUE",
                            },
                        },
                        Duration: "quos",
                        Filter: "perferendis",
                        Trigger: &shared.Trigger{
                            Count: 164940,
                            Percent: 8289.4,
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: "ipsam",
                        LabelExtractors: map[string]string{
                            "fugit": "dolorum",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: "excepturi",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_INACTIVE",
                        Query: "facilis",
                        Trigger: &shared.Trigger{
                            Count: 735194,
                            Percent: 2884.76,
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "eum",
                                CrossSeriesReducer: "REDUCE_MAX",
                                GroupByFields: []string{
                                    "sint",
                                    "aliquid",
                                    "provident",
                                    "necessitatibus",
                                },
                                PerSeriesAligner: "ALIGN_STDDEV",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "officia",
                                CrossSeriesReducer: "REDUCE_MAX",
                                GroupByFields: []string{
                                    "a",
                                    "dolorum",
                                    "in",
                                    "in",
                                },
                                PerSeriesAligner: "ALIGN_PERCENTILE_50",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "maiores",
                                CrossSeriesReducer: "REDUCE_FRACTION_TRUE",
                                GroupByFields: []string{
                                    "magnam",
                                },
                                PerSeriesAligner: "ALIGN_PERCENTILE_99",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "facere",
                                CrossSeriesReducer: "REDUCE_STDDEV",
                                GroupByFields: []string{
                                    "laborum",
                                    "accusamus",
                                },
                                PerSeriesAligner: "ALIGN_NEXT_OLDER",
                            },
                        },
                        Comparison: "COMPARISON_LE",
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "accusamus",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_05",
                                GroupByFields: []string{
                                    "provident",
                                    "nam",
                                    "id",
                                },
                                PerSeriesAligner: "ALIGN_SUM",
                            },
                            shared.Aggregation{
                                AlignmentPeriod: "deleniti",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_05",
                                GroupByFields: []string{
                                    "deserunt",
                                },
                                PerSeriesAligner: "ALIGN_MEAN",
                            },
                        },
                        DenominatorFilter: "vel",
                        Duration: "natus",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_ACTIVE",
                        Filter: "molestiae",
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: "perferendis",
                        },
                        ThresholdValue: 4701.32,
                        Trigger: &shared.Trigger{
                            Count: 301575,
                            Percent: 7160.75,
                        },
                    },
                    DisplayName: "id",
                    Name: "labore",
                },
            },
            CreationRecord: &shared.MutationRecord{
                MutateTime: "labore",
                MutatedBy: "suscipit",
            },
            DisplayName: "natus",
            Documentation: &shared.Documentation{
                Content: "nobis",
                MimeType: "eum",
            },
            Enabled: false,
            MutationRecord: &shared.MutationRecord{
                MutateTime: "vero",
                MutatedBy: "aspernatur",
            },
            Name: "architecto",
            NotificationChannels: []string{
                "et",
                "excepturi",
            },
            UserLabels: map[string]string{
                "provident": "quos",
                "sint": "accusantium",
            },
            Validity: &shared.Status{
                Code: 653201,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "ad": "eum",
                        "dolor": "necessitatibus",
                        "odit": "nemo",
                    },
                    map[string]interface{}{
                        "iure": "doloribus",
                    },
                    map[string]interface{}{
                        "eius": "maxime",
                        "deleniti": "facilis",
                        "in": "architecto",
                        "architecto": "repudiandae",
                    },
                    map[string]interface{}{
                        "expedita": "nihil",
                        "repellat": "quibusdam",
                    },
                },
                Message: "sed",
            },
        },
        AccessToken: "saepe",
        Alt: "proto",
        Callback: "accusantium",
        Fields: "consequuntur",
        Key: "praesentium",
        Name: "natus",
        OauthToken: "magni",
        PrettyPrint: false,
        QuotaUser: "sunt",
        UploadType: "quo",
        UploadProtocol: "illum",
    }

    ctx := context.Background()
    res, err := s.Projects.MonitoringProjectsAlertPoliciesCreate(ctx, req, operations.MonitoringProjectsAlertPoliciesCreateSecurity{
        Option1: &operations.MonitoringProjectsAlertPoliciesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
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
## Available Resources and Operations


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

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
