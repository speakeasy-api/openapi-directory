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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.MonitoringProjectsAlertPoliciesCreate(ctx, operations.MonitoringProjectsAlertPoliciesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AlertPolicy: &shared.AlertPolicy{
            AlertStrategy: &shared.AlertStrategy{
                AutoClose: sdk.String("provident"),
                NotificationChannelStrategy: []shared.NotificationChannelStrategy{
                    shared.NotificationChannelStrategy{
                        NotificationChannelNames: []string{
                            "unde",
                            "nulla",
                            "corrupti",
                            "illum",
                        },
                        RenotifyInterval: sdk.String("vel"),
                    },
                    shared.NotificationChannelStrategy{
                        NotificationChannelNames: []string{
                            "deserunt",
                            "suscipit",
                            "iure",
                        },
                        RenotifyInterval: sdk.String("magnam"),
                    },
                    shared.NotificationChannelStrategy{
                        NotificationChannelNames: []string{
                            "ipsa",
                            "delectus",
                            "tempora",
                            "suscipit",
                        },
                        RenotifyInterval: sdk.String("molestiae"),
                    },
                },
                NotificationRateLimit: &shared.NotificationRateLimit{
                    Period: sdk.String("minus"),
                },
            },
            Combiner: shared.AlertPolicyCombinerEnumAndWithMatchingResource.ToPointer(),
            Conditions: []shared.Condition{
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("excepturi"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceStddev.ToPointer(),
                                GroupByFields: []string{
                                    "temporibus",
                                    "ab",
                                    "quis",
                                    "veritatis",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignCountFalse.ToPointer(),
                            },
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("perferendis"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceStddev.ToPointer(),
                                GroupByFields: []string{
                                    "sapiente",
                                    "quo",
                                    "odit",
                                    "at",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignPercentile50.ToPointer(),
                            },
                        },
                        Duration: sdk.String("maiores"),
                        Filter: sdk.String("molestiae"),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(799159),
                            Percent: sdk.Float64(8009.11),
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: sdk.String("esse"),
                        LabelExtractors: map[string]string{
                            "porro": "dolorum",
                            "dicta": "nam",
                            "officia": "occaecati",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: sdk.String("fugit"),
                        EvaluationMissingData: shared.MonitoringQueryLanguageConditionEvaluationMissingDataEnumEvaluationMissingDataActive.ToPointer(),
                        Query: sdk.String("hic"),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(758616),
                            Percent: sdk.Float64(5218.48),
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("commodi"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceCount.ToPointer(),
                                GroupByFields: []string{
                                    "qui",
                                    "impedit",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignPercentile99.ToPointer(),
                            },
                        },
                        Comparison: shared.MetricThresholdComparisonEnumComparisonLt.ToPointer(),
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("excepturi"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceMean.ToPointer(),
                                GroupByFields: []string{
                                    "ad",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignCountTrue.ToPointer(),
                            },
                        },
                        DenominatorFilter: sdk.String("sed"),
                        Duration: sdk.String("iste"),
                        EvaluationMissingData: shared.MetricThresholdEvaluationMissingDataEnumEvaluationMissingDataUnspecified.ToPointer(),
                        Filter: sdk.String("natus"),
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: sdk.String("laboriosam"),
                        },
                        ThresholdValue: sdk.Float64(9437.49),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(902599),
                            Percent: sdk.Float64(6818.2),
                        },
                    },
                    DisplayName: sdk.String("in"),
                    Name: sdk.String("Sheryl Kertzmann"),
                },
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("ipsa"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReducePercentile05.ToPointer(),
                                GroupByFields: []string{
                                    "mollitia",
                                    "laborum",
                                    "dolores",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignInterpolate.ToPointer(),
                            },
                        },
                        Duration: sdk.String("corporis"),
                        Filter: sdk.String("explicabo"),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(750686),
                            Percent: sdk.Float64(3154.28),
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: sdk.String("omnis"),
                        LabelExtractors: map[string]string{
                            "minima": "excepturi",
                            "accusantium": "iure",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: sdk.String("culpa"),
                        EvaluationMissingData: shared.MonitoringQueryLanguageConditionEvaluationMissingDataEnumEvaluationMissingDataNoOp.ToPointer(),
                        Query: sdk.String("sapiente"),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(102044),
                            Percent: sdk.Float64(6527.9),
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("culpa"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceMin.ToPointer(),
                                GroupByFields: []string{
                                    "mollitia",
                                    "occaecati",
                                    "numquam",
                                    "commodi",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignCount.ToPointer(),
                            },
                        },
                        Comparison: shared.MetricThresholdComparisonEnumComparisonLt.ToPointer(),
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("error"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceMin.ToPointer(),
                                GroupByFields: []string{
                                    "vitae",
                                    "laborum",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignCountFalse.ToPointer(),
                            },
                        },
                        DenominatorFilter: sdk.String("enim"),
                        Duration: sdk.String("odit"),
                        EvaluationMissingData: shared.MetricThresholdEvaluationMissingDataEnumEvaluationMissingDataNoOp.ToPointer(),
                        Filter: sdk.String("sequi"),
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: sdk.String("tenetur"),
                        },
                        ThresholdValue: sdk.Float64(3687.25),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(662527),
                            Percent: sdk.Float64(8209.94),
                        },
                    },
                    DisplayName: sdk.String("aut"),
                    Name: sdk.String("Sabrina Smitham DVM"),
                },
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("vero"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceCount.ToPointer(),
                                GroupByFields: []string{
                                    "voluptatibus",
                                    "ipsa",
                                    "omnis",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignCount.ToPointer(),
                            },
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("cum"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceNone.ToPointer(),
                                GroupByFields: []string{
                                    "reprehenderit",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignMin.ToPointer(),
                            },
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("maiores"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceMean.ToPointer(),
                                GroupByFields: []string{
                                    "dolore",
                                    "iusto",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignRate.ToPointer(),
                            },
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("harum"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceSum.ToPointer(),
                                GroupByFields: []string{
                                    "commodi",
                                    "repudiandae",
                                    "quae",
                                    "ipsum",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignFractionTrue.ToPointer(),
                            },
                        },
                        Duration: sdk.String("molestias"),
                        Filter: sdk.String("excepturi"),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(865103),
                            Percent: sdk.Float64(2653.89),
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: sdk.String("praesentium"),
                        LabelExtractors: map[string]string{
                            "voluptates": "quasi",
                            "repudiandae": "sint",
                            "veritatis": "itaque",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: sdk.String("incidunt"),
                        EvaluationMissingData: shared.MonitoringQueryLanguageConditionEvaluationMissingDataEnumEvaluationMissingDataInactive.ToPointer(),
                        Query: sdk.String("consequatur"),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(667411),
                            Percent: sdk.Float64(8423.42),
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("deserunt"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReducePercentile99.ToPointer(),
                                GroupByFields: []string{
                                    "labore",
                                    "modi",
                                    "qui",
                                    "aliquid",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignCountTrue.ToPointer(),
                            },
                        },
                        Comparison: shared.MetricThresholdComparisonEnumComparisonLt.ToPointer(),
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("magni"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReducePercentile95.ToPointer(),
                                GroupByFields: []string{
                                    "alias",
                                    "fugit",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignCountFalse.ToPointer(),
                            },
                        },
                        DenominatorFilter: sdk.String("excepturi"),
                        Duration: sdk.String("tempora"),
                        EvaluationMissingData: shared.MetricThresholdEvaluationMissingDataEnumEvaluationMissingDataActive.ToPointer(),
                        Filter: sdk.String("tempore"),
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: sdk.String("labore"),
                        },
                        ThresholdValue: sdk.Float64(9621.89),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(433288),
                            Percent: sdk.Float64(2487.53),
                        },
                    },
                    DisplayName: sdk.String("eligendi"),
                    Name: sdk.String("Gilbert Medhurst"),
                },
            },
            CreationRecord: &shared.MutationRecord{
                MutateTime: sdk.String("officia"),
                MutatedBy: sdk.String("dolor"),
            },
            DisplayName: sdk.String("debitis"),
            Documentation: &shared.Documentation{
                Content: sdk.String("a"),
                MimeType: sdk.String("dolorum"),
            },
            Enabled: sdk.Bool(false),
            MutationRecord: &shared.MutationRecord{
                MutateTime: sdk.String("in"),
                MutatedBy: sdk.String("in"),
            },
            Name: sdk.String("Mrs. Emilio Price"),
            NotificationChannels: []string{
                "ea",
                "aliquid",
                "laborum",
                "accusamus",
            },
            UserLabels: map[string]string{
                "occaecati": "enim",
            },
            Validity: &shared.Status{
                Code: sdk.Int(881736),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "provident": "nam",
                        "id": "blanditiis",
                        "deleniti": "sapiente",
                    },
                    map[string]interface{}{
                        "deserunt": "nisi",
                    },
                    map[string]interface{}{
                        "natus": "omnis",
                        "molestiae": "perferendis",
                    },
                    map[string]interface{}{
                        "magnam": "distinctio",
                        "id": "labore",
                    },
                },
                Message: sdk.String("labore"),
            },
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("eum"),
        Key: sdk.String("vero"),
        Name: "Ms. Julie Gusikowski",
        OauthToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.MonitoringProjectsAlertPoliciesCreateSecurity{
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


### [Projects](docs/projects/README.md)

* [MonitoringProjectsAlertPoliciesCreate](docs/projects/README.md#monitoringprojectsalertpoliciescreate) - Creates a new alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.
* [MonitoringProjectsAlertPoliciesList](docs/projects/README.md#monitoringprojectsalertpolicieslist) - Lists the existing alerting policies for the workspace.
* [MonitoringProjectsCollectdTimeSeriesCreate](docs/projects/README.md#monitoringprojectscollectdtimeseriescreate) - Cloud Monitoring Agent only: Creates a new time series.This method is only for use by the Cloud Monitoring Agent. Use projects.timeSeries.create instead.
* [MonitoringProjectsGroupsCreate](docs/projects/README.md#monitoringprojectsgroupscreate) - Creates a new group.
* [MonitoringProjectsGroupsList](docs/projects/README.md#monitoringprojectsgroupslist) - Lists the existing groups.
* [MonitoringProjectsGroupsMembersList](docs/projects/README.md#monitoringprojectsgroupsmemberslist) - Lists the monitored resources that are members of a group.
* [MonitoringProjectsGroupsUpdate](docs/projects/README.md#monitoringprojectsgroupsupdate) - Updates an existing group. You can change any group attributes except name.
* [MonitoringProjectsMetricDescriptorsCreate](docs/projects/README.md#monitoringprojectsmetricdescriptorscreate) - Creates a new metric descriptor. The creation is executed asynchronously. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics). The metric descriptor is updated if it already exists, except that metric labels are never removed.
* [MonitoringProjectsMetricDescriptorsList](docs/projects/README.md#monitoringprojectsmetricdescriptorslist) - Lists metric descriptors that match a filter.
* [MonitoringProjectsMonitoredResourceDescriptorsList](docs/projects/README.md#monitoringprojectsmonitoredresourcedescriptorslist) - Lists monitored resource descriptors that match a filter.
* [MonitoringProjectsNotificationChannelDescriptorsList](docs/projects/README.md#monitoringprojectsnotificationchanneldescriptorslist) - Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added.
* [MonitoringProjectsNotificationChannelsCreate](docs/projects/README.md#monitoringprojectsnotificationchannelscreate) - Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.
* [MonitoringProjectsNotificationChannelsGetVerificationCode](docs/projects/README.md#monitoringprojectsnotificationchannelsgetverificationcode) - Requests a verification code for an already verified channel that can then be used in a call to VerifyNotificationChannel() on a different channel with an equivalent identity in the same or in a different project. This makes it possible to copy a channel between projects without requiring manual reverification of the channel. If the channel is not in the verified state, this method will fail (in other words, this may only be used if the SendNotificationChannelVerificationCode and VerifyNotificationChannel paths have already been used to put the given channel into the verified state).There is no guarantee that the verification codes returned by this method will be of a similar structure or form as the ones that are delivered to the channel via SendNotificationChannelVerificationCode; while VerifyNotificationChannel() will recognize both the codes delivered via SendNotificationChannelVerificationCode() and returned from GetNotificationChannelVerificationCode(), it is typically the case that the verification codes delivered via SendNotificationChannelVerificationCode() will be shorter and also have a shorter expiration (e.g. codes such as "G-123456") whereas GetVerificationCode() will typically return a much longer, websafe base 64 encoded string that has a longer expiration time.
* [MonitoringProjectsNotificationChannelsList](docs/projects/README.md#monitoringprojectsnotificationchannelslist) - Lists the notification channels that have been created for the project. To list the types of notification channels that are supported, use the ListNotificationChannelDescriptors method.
* [MonitoringProjectsNotificationChannelsSendVerificationCode](docs/projects/README.md#monitoringprojectsnotificationchannelssendverificationcode) - Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel.
* [MonitoringProjectsNotificationChannelsVerify](docs/projects/README.md#monitoringprojectsnotificationchannelsverify) - Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode.
* [MonitoringProjectsSnoozesCreate](docs/projects/README.md#monitoringprojectssnoozescreate) - Creates a Snooze that will prevent alerts, which match the provided criteria, from being opened. The Snooze applies for a specific time interval.
* [MonitoringProjectsSnoozesList](docs/projects/README.md#monitoringprojectssnoozeslist) - Lists the Snoozes associated with a project. Can optionally pass in filter, which specifies predicates to match Snoozes.
* [MonitoringProjectsTimeSeriesCreate](docs/projects/README.md#monitoringprojectstimeseriescreate) - Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response.
* [MonitoringProjectsTimeSeriesCreateService](docs/projects/README.md#monitoringprojectstimeseriescreateservice) - Creates or adds data to one or more service time series. A service time series is a time series for a metric from a Google Cloud service. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This endpoint rejects writes to user-defined metrics. This method is only for use by Google Cloud services. Use projects.timeSeries.create instead.
* [MonitoringProjectsTimeSeriesList](docs/projects/README.md#monitoringprojectstimeserieslist) - Lists time series that match a filter.
* [MonitoringProjectsTimeSeriesQuery](docs/projects/README.md#monitoringprojectstimeseriesquery) - Queries time series using Monitoring Query Language.
* [MonitoringProjectsUptimeCheckConfigsCreate](docs/projects/README.md#monitoringprojectsuptimecheckconfigscreate) - Creates a new Uptime check configuration.
* [MonitoringProjectsUptimeCheckConfigsList](docs/projects/README.md#monitoringprojectsuptimecheckconfigslist) - Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

### [Services](docs/services/README.md)

* [MonitoringServicesCreate](docs/services/README.md#monitoringservicescreate) - Create a Service.
* [MonitoringServicesList](docs/services/README.md#monitoringserviceslist) - List Services for this Metrics Scope.
* [MonitoringServicesServiceLevelObjectivesCreate](docs/services/README.md#monitoringservicesservicelevelobjectivescreate) - Create a ServiceLevelObjective for the given Service.
* [MonitoringServicesServiceLevelObjectivesDelete](docs/services/README.md#monitoringservicesservicelevelobjectivesdelete) - Delete the given ServiceLevelObjective.
* [MonitoringServicesServiceLevelObjectivesGet](docs/services/README.md#monitoringservicesservicelevelobjectivesget) - Get a ServiceLevelObjective by name.
* [MonitoringServicesServiceLevelObjectivesList](docs/services/README.md#monitoringservicesservicelevelobjectiveslist) - List the ServiceLevelObjectives for the given Service.
* [MonitoringServicesServiceLevelObjectivesPatch](docs/services/README.md#monitoringservicesservicelevelobjectivespatch) - Update the given ServiceLevelObjective.

### [UptimeCheckIps](docs/uptimecheckips/README.md)

* [MonitoringUptimeCheckIpsList](docs/uptimecheckips/README.md#monitoringuptimecheckipslist) - Returns the list of IP addresses that checkers run from
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
