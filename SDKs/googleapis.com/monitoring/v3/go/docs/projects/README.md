# Projects

### Available Operations

* [MonitoringProjectsAlertPoliciesCreate](#monitoringprojectsalertpoliciescreate) - Creates a new alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.
* [MonitoringProjectsAlertPoliciesList](#monitoringprojectsalertpolicieslist) - Lists the existing alerting policies for the workspace.
* [MonitoringProjectsCollectdTimeSeriesCreate](#monitoringprojectscollectdtimeseriescreate) - Cloud Monitoring Agent only: Creates a new time series.This method is only for use by the Cloud Monitoring Agent. Use projects.timeSeries.create instead.
* [MonitoringProjectsGroupsCreate](#monitoringprojectsgroupscreate) - Creates a new group.
* [MonitoringProjectsGroupsList](#monitoringprojectsgroupslist) - Lists the existing groups.
* [MonitoringProjectsGroupsMembersList](#monitoringprojectsgroupsmemberslist) - Lists the monitored resources that are members of a group.
* [MonitoringProjectsGroupsUpdate](#monitoringprojectsgroupsupdate) - Updates an existing group. You can change any group attributes except name.
* [MonitoringProjectsMetricDescriptorsCreate](#monitoringprojectsmetricdescriptorscreate) - Creates a new metric descriptor. The creation is executed asynchronously. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics). The metric descriptor is updated if it already exists, except that metric labels are never removed.
* [MonitoringProjectsMetricDescriptorsList](#monitoringprojectsmetricdescriptorslist) - Lists metric descriptors that match a filter.
* [MonitoringProjectsMonitoredResourceDescriptorsList](#monitoringprojectsmonitoredresourcedescriptorslist) - Lists monitored resource descriptors that match a filter.
* [MonitoringProjectsNotificationChannelDescriptorsList](#monitoringprojectsnotificationchanneldescriptorslist) - Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added.
* [MonitoringProjectsNotificationChannelsCreate](#monitoringprojectsnotificationchannelscreate) - Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.
* [MonitoringProjectsNotificationChannelsGetVerificationCode](#monitoringprojectsnotificationchannelsgetverificationcode) - Requests a verification code for an already verified channel that can then be used in a call to VerifyNotificationChannel() on a different channel with an equivalent identity in the same or in a different project. This makes it possible to copy a channel between projects without requiring manual reverification of the channel. If the channel is not in the verified state, this method will fail (in other words, this may only be used if the SendNotificationChannelVerificationCode and VerifyNotificationChannel paths have already been used to put the given channel into the verified state).There is no guarantee that the verification codes returned by this method will be of a similar structure or form as the ones that are delivered to the channel via SendNotificationChannelVerificationCode; while VerifyNotificationChannel() will recognize both the codes delivered via SendNotificationChannelVerificationCode() and returned from GetNotificationChannelVerificationCode(), it is typically the case that the verification codes delivered via SendNotificationChannelVerificationCode() will be shorter and also have a shorter expiration (e.g. codes such as "G-123456") whereas GetVerificationCode() will typically return a much longer, websafe base 64 encoded string that has a longer expiration time.
* [MonitoringProjectsNotificationChannelsList](#monitoringprojectsnotificationchannelslist) - Lists the notification channels that have been created for the project. To list the types of notification channels that are supported, use the ListNotificationChannelDescriptors method.
* [MonitoringProjectsNotificationChannelsSendVerificationCode](#monitoringprojectsnotificationchannelssendverificationcode) - Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel.
* [MonitoringProjectsNotificationChannelsVerify](#monitoringprojectsnotificationchannelsverify) - Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode.
* [MonitoringProjectsSnoozesCreate](#monitoringprojectssnoozescreate) - Creates a Snooze that will prevent alerts, which match the provided criteria, from being opened. The Snooze applies for a specific time interval.
* [MonitoringProjectsSnoozesList](#monitoringprojectssnoozeslist) - Lists the Snoozes associated with a project. Can optionally pass in filter, which specifies predicates to match Snoozes.
* [MonitoringProjectsTimeSeriesCreate](#monitoringprojectstimeseriescreate) - Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response.
* [MonitoringProjectsTimeSeriesCreateService](#monitoringprojectstimeseriescreateservice) - Creates or adds data to one or more service time series. A service time series is a time series for a metric from a Google Cloud service. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This endpoint rejects writes to user-defined metrics. This method is only for use by Google Cloud services. Use projects.timeSeries.create instead.
* [MonitoringProjectsTimeSeriesList](#monitoringprojectstimeserieslist) - Lists time series that match a filter.
* [MonitoringProjectsTimeSeriesQuery](#monitoringprojectstimeseriesquery) - Queries time series using Monitoring Query Language.
* [MonitoringProjectsUptimeCheckConfigsCreate](#monitoringprojectsuptimecheckconfigscreate) - Creates a new Uptime check configuration.
* [MonitoringProjectsUptimeCheckConfigsList](#monitoringprojectsuptimecheckconfigslist) - Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

## MonitoringProjectsAlertPoliciesCreate

Creates a new alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.

### Example Usage

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
                AutoClose: sdk.String("reiciendis"),
                NotificationChannelStrategy: []shared.NotificationChannelStrategy{
                    shared.NotificationChannelStrategy{
                        NotificationChannelNames: []string{
                            "eum",
                            "dolor",
                        },
                        RenotifyInterval: sdk.String("necessitatibus"),
                    },
                    shared.NotificationChannelStrategy{
                        NotificationChannelNames: []string{
                            "nemo",
                        },
                        RenotifyInterval: sdk.String("quasi"),
                    },
                    shared.NotificationChannelStrategy{
                        NotificationChannelNames: []string{
                            "doloribus",
                            "debitis",
                        },
                        RenotifyInterval: sdk.String("eius"),
                    },
                },
                NotificationRateLimit: &shared.NotificationRateLimit{
                    Period: sdk.String("maxime"),
                },
            },
            Combiner: shared.AlertPolicyCombinerEnumOr.ToPointer(),
            Conditions: []shared.Condition{
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("architecto"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceMean.ToPointer(),
                                GroupByFields: []string{
                                    "ullam",
                                    "expedita",
                                    "nihil",
                                    "repellat",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignPercentile95.ToPointer(),
                            },
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("sed"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReducePercentile50.ToPointer(),
                                GroupByFields: []string{
                                    "accusantium",
                                    "consequuntur",
                                    "praesentium",
                                    "natus",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignInterpolate.ToPointer(),
                            },
                        },
                        Duration: sdk.String("sunt"),
                        Filter: sdk.String("quo"),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(848009),
                            Percent: sdk.Float64(8649.34),
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: sdk.String("maxime"),
                        LabelExtractors: map[string]string{
                            "excepturi": "odit",
                            "ea": "accusantium",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: sdk.String("ab"),
                        EvaluationMissingData: shared.MonitoringQueryLanguageConditionEvaluationMissingDataEnumEvaluationMissingDataNoOp.ToPointer(),
                        Query: sdk.String("quidem"),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(373291),
                            Percent: sdk.Float64(4535.43),
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("nam"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceNone.ToPointer(),
                                GroupByFields: []string{
                                    "nemo",
                                    "voluptatibus",
                                    "perferendis",
                                    "fugiat",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignNextOlder.ToPointer(),
                            },
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("aut"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReducePercentile99.ToPointer(),
                                GroupByFields: []string{
                                    "hic",
                                    "libero",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignPercentile99.ToPointer(),
                            },
                        },
                        Comparison: shared.MetricThresholdComparisonEnumComparisonGt.ToPointer(),
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("totam"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceCount.ToPointer(),
                                GroupByFields: []string{
                                    "quis",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignInterpolate.ToPointer(),
                            },
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("eos"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceNone.ToPointer(),
                                GroupByFields: []string{
                                    "minus",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignCount.ToPointer(),
                            },
                        },
                        DenominatorFilter: sdk.String("dolor"),
                        Duration: sdk.String("vero"),
                        EvaluationMissingData: shared.MetricThresholdEvaluationMissingDataEnumEvaluationMissingDataInactive.ToPointer(),
                        Filter: sdk.String("hic"),
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: sdk.String("recusandae"),
                        },
                        ThresholdValue: sdk.Float64(6082.53),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(704415),
                            Percent: sdk.Float64(5966.56),
                        },
                    },
                    DisplayName: sdk.String("voluptatem"),
                    Name: sdk.String("Bobby Kutch V"),
                },
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("adipisci"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReducePercentile05.ToPointer(),
                                GroupByFields: []string{
                                    "modi",
                                    "iste",
                                    "dolorum",
                                    "deleniti",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignPercentile50.ToPointer(),
                            },
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("provident"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReducePercentile99.ToPointer(),
                                GroupByFields: []string{
                                    "delectus",
                                    "quaerat",
                                    "quos",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignMean.ToPointer(),
                            },
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("dolorem"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceMin.ToPointer(),
                                GroupByFields: []string{
                                    "qui",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignNextOlder.ToPointer(),
                            },
                        },
                        Duration: sdk.String("hic"),
                        Filter: sdk.String("excepturi"),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(739551),
                            Percent: sdk.Float64(4521.09),
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: sdk.String("dignissimos"),
                        LabelExtractors: map[string]string{
                            "amet": "dolorum",
                            "numquam": "veritatis",
                            "ipsa": "ipsa",
                            "iure": "odio",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: sdk.String("quaerat"),
                        EvaluationMissingData: shared.MonitoringQueryLanguageConditionEvaluationMissingDataEnumEvaluationMissingDataNoOp.ToPointer(),
                        Query: sdk.String("quidem"),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(976405),
                            Percent: sdk.Float64(3777.52),
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("eos"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceCountTrue.ToPointer(),
                                GroupByFields: []string{
                                    "fugiat",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignDelta.ToPointer(),
                            },
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("soluta"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceFractionTrue.ToPointer(),
                                GroupByFields: []string{
                                    "voluptate",
                                    "dolorum",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignStddev.ToPointer(),
                            },
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("omnis"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReducePercentile50.ToPointer(),
                                GroupByFields: []string{
                                    "asperiores",
                                    "nihil",
                                    "ipsum",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignCount.ToPointer(),
                            },
                        },
                        Comparison: shared.MetricThresholdComparisonEnumComparisonLe.ToPointer(),
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("eius"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceMean.ToPointer(),
                                GroupByFields: []string{
                                    "amet",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignPercentile99.ToPointer(),
                            },
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("accusamus"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceSum.ToPointer(),
                                GroupByFields: []string{
                                    "suscipit",
                                    "deserunt",
                                    "provident",
                                    "minima",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignPercentile95.ToPointer(),
                            },
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("totam"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceCountFalse.ToPointer(),
                                GroupByFields: []string{
                                    "at",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignMin.ToPointer(),
                            },
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("tempora"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceStddev.ToPointer(),
                                GroupByFields: []string{
                                    "officiis",
                                    "qui",
                                    "dolorum",
                                    "a",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignCount.ToPointer(),
                            },
                        },
                        DenominatorFilter: sdk.String("harum"),
                        Duration: sdk.String("iusto"),
                        EvaluationMissingData: shared.MetricThresholdEvaluationMissingDataEnumEvaluationMissingDataUnspecified.ToPointer(),
                        Filter: sdk.String("quisquam"),
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: sdk.String("tenetur"),
                        },
                        ThresholdValue: sdk.Float64(2294.42),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(730856),
                            Percent: sdk.Float64(8802.98),
                        },
                    },
                    DisplayName: sdk.String("numquam"),
                    Name: sdk.String("Florence Will"),
                },
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("expedita"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceMin.ToPointer(),
                                GroupByFields: []string{
                                    "vel",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignFractionTrue.ToPointer(),
                            },
                        },
                        Duration: sdk.String("voluptas"),
                        Filter: sdk.String("deserunt"),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(463575),
                            Percent: sdk.Float64(2148.8),
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: sdk.String("incidunt"),
                        LabelExtractors: map[string]string{
                            "cupiditate": "maxime",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: sdk.String("pariatur"),
                        EvaluationMissingData: shared.MonitoringQueryLanguageConditionEvaluationMissingDataEnumEvaluationMissingDataActive.ToPointer(),
                        Query: sdk.String("dicta"),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(674848),
                            Percent: sdk.Float64(5173.79),
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("aspernatur"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceMin.ToPointer(),
                                GroupByFields: []string{
                                    "facilis",
                                    "aliquid",
                                    "quam",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignStddev.ToPointer(),
                            },
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("temporibus"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReduceMin.ToPointer(),
                                GroupByFields: []string{
                                    "fugit",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignInterpolate.ToPointer(),
                            },
                        },
                        Comparison: shared.MetricThresholdComparisonEnumComparisonLt.ToPointer(),
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: sdk.String("ullam"),
                                CrossSeriesReducer: shared.AggregationCrossSeriesReducerEnumReducePercentile99.ToPointer(),
                                GroupByFields: []string{
                                    "voluptatem",
                                    "cumque",
                                    "soluta",
                                    "nobis",
                                },
                                PerSeriesAligner: shared.AggregationPerSeriesAlignerEnumAlignDelta.ToPointer(),
                            },
                        },
                        DenominatorFilter: sdk.String("saepe"),
                        Duration: sdk.String("ipsum"),
                        EvaluationMissingData: shared.MetricThresholdEvaluationMissingDataEnumEvaluationMissingDataUnspecified.ToPointer(),
                        Filter: sdk.String("nobis"),
                        ForecastOptions: &shared.ForecastOptions{
                            ForecastHorizon: sdk.String("quos"),
                        },
                        ThresholdValue: sdk.Float64(7316.94),
                        Trigger: &shared.Trigger{
                            Count: sdk.Int(584476),
                            Percent: sdk.Float64(456.14),
                        },
                    },
                    DisplayName: sdk.String("delectus"),
                    Name: sdk.String("Joanne Grant"),
                },
            },
            CreationRecord: &shared.MutationRecord{
                MutateTime: sdk.String("architecto"),
                MutatedBy: sdk.String("quae"),
            },
            DisplayName: sdk.String("aut"),
            Documentation: &shared.Documentation{
                Content: sdk.String("quas"),
                MimeType: sdk.String("itaque"),
            },
            Enabled: sdk.Bool(false),
            MutationRecord: &shared.MutationRecord{
                MutateTime: sdk.String("consequatur"),
                MutatedBy: sdk.String("est"),
            },
            Name: sdk.String("Sherman Wyman"),
            NotificationChannels: []string{
                "qui",
                "quae",
                "laudantium",
            },
            UserLabels: map[string]string{
                "occaecati": "voluptatibus",
                "quisquam": "vero",
            },
            Validity: &shared.Status{
                Code: sdk.Int(606476),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "delectus": "voluptate",
                    },
                    map[string]interface{}{
                        "vero": "tenetur",
                    },
                },
                Message: sdk.String("dignissimos"),
            },
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("odio"),
        Key: sdk.String("similique"),
        Name: "Hugo Kuphal",
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sequi"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("impedit"),
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

## MonitoringProjectsAlertPoliciesList

Lists the existing alerting policies for the workspace.

### Example Usage

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
    res, err := s.Projects.MonitoringProjectsAlertPoliciesList(ctx, operations.MonitoringProjectsAlertPoliciesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nulla"),
        Fields: sdk.String("fugit"),
        Filter: sdk.String("porro"),
        Key: sdk.String("maiores"),
        Name: "Ted Romaguera MD",
        OauthToken: sdk.String("tempora"),
        OrderBy: sdk.String("ipsam"),
        PageSize: sdk.Int64(410492),
        PageToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.MonitoringProjectsAlertPoliciesListSecurity{
        Option1: &operations.MonitoringProjectsAlertPoliciesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAlertPoliciesResponse != nil {
        // handle response
    }
}
```

## MonitoringProjectsCollectdTimeSeriesCreate

Cloud Monitoring Agent only: Creates a new time series.This method is only for use by the Cloud Monitoring Agent. Use projects.timeSeries.create instead.

### Example Usage

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
    res, err := s.Projects.MonitoringProjectsCollectdTimeSeriesCreate(ctx, operations.MonitoringProjectsCollectdTimeSeriesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreateCollectdTimeSeriesRequest: &shared.CreateCollectdTimeSeriesRequest{
            CollectdPayloads: []shared.CollectdPayload{
                shared.CollectdPayload{
                    EndTime: sdk.String("laudantium"),
                    Metadata: map[string]shared.TypedValue{
                        "dolor": shared.TypedValue{
                            BoolValue: sdk.Bool(false),
                            DistributionValue: &shared.Distribution{
                                BucketCounts: []string{
                                    "quasi",
                                    "ex",
                                    "nulla",
                                    "excepturi",
                                },
                                BucketOptions: &shared.BucketOptions{
                                    ExplicitBuckets: &shared.Explicit{
                                        Bounds: []float64{
                                            3436.05,
                                            9608.35,
                                            7888.73,
                                            9065.56,
                                        },
                                    },
                                    ExponentialBuckets: &shared.Exponential{
                                        GrowthFactor: sdk.Float64(4113.72),
                                        NumFiniteBuckets: sdk.Int(774048),
                                        Scale: sdk.Float64(3592.71),
                                    },
                                    LinearBuckets: &shared.Linear{
                                        NumFiniteBuckets: sdk.Int(333145),
                                        Offset: sdk.Float64(3994.99),
                                        Width: sdk.Float64(811.01),
                                    },
                                },
                                Count: sdk.String("magnam"),
                                Exemplars: []shared.Exemplar{
                                    shared.Exemplar{
                                        Attachments: []map[string]interface{}{
                                            map[string]interface{}{
                                                "recusandae": "aspernatur",
                                            },
                                            map[string]interface{}{
                                                "eaque": "a",
                                                "libero": "aut",
                                            },
                                            map[string]interface{}{
                                                "deleniti": "impedit",
                                            },
                                            map[string]interface{}{
                                                "fugit": "accusamus",
                                                "inventore": "non",
                                            },
                                        },
                                        Timestamp: sdk.String("et"),
                                        Value: sdk.Float64(6774.12),
                                    },
                                    shared.Exemplar{
                                        Attachments: []map[string]interface{}{
                                            map[string]interface{}{
                                                "velit": "eum",
                                                "autem": "nobis",
                                                "quas": "assumenda",
                                                "nulla": "voluptas",
                                            },
                                            map[string]interface{}{
                                                "quasi": "tempora",
                                                "numquam": "explicabo",
                                                "provident": "ipsa",
                                            },
                                            map[string]interface{}{
                                                "magnam": "odio",
                                                "eius": "esse",
                                            },
                                        },
                                        Timestamp: sdk.String("esse"),
                                        Value: sdk.Float64(5245.93),
                                    },
                                },
                                Mean: sdk.Float64(6832.82),
                                Range: &shared.Range{
                                    Max: sdk.Float64(4420.15),
                                    Min: sdk.Float64(6956.26),
                                },
                                SumOfSquaredDeviation: sdk.Float64(8526.35),
                            },
                            DoubleValue: sdk.Float64(2835.19),
                            Int64Value: sdk.String("eum"),
                            StringValue: sdk.String("suscipit"),
                        },
                    },
                    Plugin: sdk.String("assumenda"),
                    PluginInstance: sdk.String("eos"),
                    StartTime: sdk.String("praesentium"),
                    Type: sdk.String("quisquam"),
                    TypeInstance: sdk.String("veritatis"),
                    Values: []shared.CollectdValue{
                        shared.CollectdValue{
                            DataSourceName: sdk.String("id"),
                            DataSourceType: shared.CollectdValueDataSourceTypeEnumDerive.ToPointer(),
                            Value: &shared.TypedValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "quo",
                                    },
                                    BucketOptions: &shared.BucketOptions{
                                        ExplicitBuckets: &shared.Explicit{
                                            Bounds: []float64{
                                                7774.08,
                                                6813.59,
                                                2594.22,
                                                1783.67,
                                            },
                                        },
                                        ExponentialBuckets: &shared.Exponential{
                                            GrowthFactor: sdk.Float64(3738.13),
                                            NumFiniteBuckets: sdk.Int(69859),
                                            Scale: sdk.Float64(5876),
                                        },
                                        LinearBuckets: &shared.Linear{
                                            NumFiniteBuckets: sdk.Int(9688),
                                            Offset: sdk.Float64(2728.22),
                                            Width: sdk.Float64(8920.5),
                                        },
                                    },
                                    Count: sdk.String("ipsam"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "esse": "recusandae",
                                                    "aperiam": "distinctio",
                                                    "quod": "dignissimos",
                                                    "inventore": "nihil",
                                                },
                                            },
                                            Timestamp: sdk.String("totam"),
                                            Value: sdk.Float64(8827.1),
                                        },
                                    },
                                    Mean: sdk.Float64(3068.1),
                                    Range: &shared.Range{
                                        Max: sdk.Float64(4884.1),
                                        Min: sdk.Float64(5775.43),
                                    },
                                    SumOfSquaredDeviation: sdk.Float64(4145.67),
                                },
                                DoubleValue: sdk.Float64(9594.34),
                                Int64Value: sdk.String("dolores"),
                                StringValue: sdk.String("deserunt"),
                            },
                        },
                    },
                },
                shared.CollectdPayload{
                    EndTime: sdk.String("molestiae"),
                    Metadata: map[string]shared.TypedValue{
                        "porro": shared.TypedValue{
                            BoolValue: sdk.Bool(false),
                            DistributionValue: &shared.Distribution{
                                BucketCounts: []string{
                                    "quas",
                                    "praesentium",
                                },
                                BucketOptions: &shared.BucketOptions{
                                    ExplicitBuckets: &shared.Explicit{
                                        Bounds: []float64{
                                            5361.78,
                                        },
                                    },
                                    ExponentialBuckets: &shared.Exponential{
                                        GrowthFactor: sdk.Float64(1438.29),
                                        NumFiniteBuckets: sdk.Int(681393),
                                        Scale: sdk.Float64(6494.63),
                                    },
                                    LinearBuckets: &shared.Linear{
                                        NumFiniteBuckets: sdk.Int(277596),
                                        Offset: sdk.Float64(5392.24),
                                        Width: sdk.Float64(1288.6),
                                    },
                                },
                                Count: sdk.String("minima"),
                                Exemplars: []shared.Exemplar{
                                    shared.Exemplar{
                                        Attachments: []map[string]interface{}{
                                            map[string]interface{}{
                                                "consequuntur": "ratione",
                                                "explicabo": "saepe",
                                                "occaecati": "atque",
                                                "et": "esse",
                                            },
                                        },
                                        Timestamp: sdk.String("eveniet"),
                                        Value: sdk.Float64(8820.42),
                                    },
                                    shared.Exemplar{
                                        Attachments: []map[string]interface{}{
                                            map[string]interface{}{
                                                "quod": "nam",
                                                "vero": "aliquid",
                                            },
                                        },
                                        Timestamp: sdk.String("quasi"),
                                        Value: sdk.Float64(9040.45),
                                    },
                                },
                                Mean: sdk.Float64(4263.06),
                                Range: &shared.Range{
                                    Max: sdk.Float64(6900.25),
                                    Min: sdk.Float64(4732.21),
                                },
                                SumOfSquaredDeviation: sdk.Float64(6996.22),
                            },
                            DoubleValue: sdk.Float64(5801.97),
                            Int64Value: sdk.String("minima"),
                            StringValue: sdk.String("distinctio"),
                        },
                    },
                    Plugin: sdk.String("eligendi"),
                    PluginInstance: sdk.String("sit"),
                    StartTime: sdk.String("culpa"),
                    Type: sdk.String("tempore"),
                    TypeInstance: sdk.String("adipisci"),
                    Values: []shared.CollectdValue{
                        shared.CollectdValue{
                            DataSourceName: sdk.String("consequuntur"),
                            DataSourceType: shared.CollectdValueDataSourceTypeEnumUnspecifiedDataSourceType.ToPointer(),
                            Value: &shared.TypedValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "quaerat",
                                        "sapiente",
                                        "consectetur",
                                        "esse",
                                    },
                                    BucketOptions: &shared.BucketOptions{
                                        ExplicitBuckets: &shared.Explicit{
                                            Bounds: []float64{
                                                5909.84,
                                                9537.22,
                                                8577.23,
                                            },
                                        },
                                        ExponentialBuckets: &shared.Exponential{
                                            GrowthFactor: sdk.Float64(5578.11),
                                            NumFiniteBuckets: sdk.Int(457223),
                                            Scale: sdk.Float64(974.68),
                                        },
                                        LinearBuckets: &shared.Linear{
                                            NumFiniteBuckets: sdk.Int(951875),
                                            Offset: sdk.Float64(6216.79),
                                            Width: sdk.Float64(5757.51),
                                        },
                                    },
                                    Count: sdk.String("pariatur"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "asperiores": "facere",
                                                    "veritatis": "consequuntur",
                                                    "quasi": "similique",
                                                    "culpa": "aliquid",
                                                },
                                            },
                                            Timestamp: sdk.String("tenetur"),
                                            Value: sdk.Float64(627.13),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "in": "eius",
                                                    "libero": "illum",
                                                },
                                                map[string]interface{}{
                                                    "accusantium": "aliquam",
                                                    "sapiente": "dicta",
                                                    "ullam": "reprehenderit",
                                                },
                                                map[string]interface{}{
                                                    "nisi": "aut",
                                                    "voluptatum": "qui",
                                                },
                                                map[string]interface{}{
                                                    "ex": "deleniti",
                                                    "itaque": "dolorum",
                                                    "architecto": "omnis",
                                                    "tenetur": "quasi",
                                                },
                                            },
                                            Timestamp: sdk.String("at"),
                                            Value: sdk.Float64(920.27),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "minima": "veritatis",
                                                },
                                                map[string]interface{}{
                                                    "adipisci": "iste",
                                                },
                                            },
                                            Timestamp: sdk.String("temporibus"),
                                            Value: sdk.Float64(330.74),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "laudantium": "eum",
                                                },
                                                map[string]interface{}{
                                                    "ab": "corrupti",
                                                    "non": "voluptatem",
                                                    "dolor": "occaecati",
                                                },
                                                map[string]interface{}{
                                                    "impedit": "explicabo",
                                                    "voluptas": "aut",
                                                },
                                            },
                                            Timestamp: sdk.String("dignissimos"),
                                            Value: sdk.Float64(1154.84),
                                        },
                                    },
                                    Mean: sdk.Float64(9816.4),
                                    Range: &shared.Range{
                                        Max: sdk.Float64(6184.8),
                                        Min: sdk.Float64(2446.51),
                                    },
                                    SumOfSquaredDeviation: sdk.Float64(9742.57),
                                },
                                DoubleValue: sdk.Float64(3743.23),
                                Int64Value: sdk.String("asperiores"),
                                StringValue: sdk.String("aperiam"),
                            },
                        },
                        shared.CollectdValue{
                            DataSourceName: sdk.String("ea"),
                            DataSourceType: shared.CollectdValueDataSourceTypeEnumGauge.ToPointer(),
                            Value: &shared.TypedValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "repellendus",
                                    },
                                    BucketOptions: &shared.BucketOptions{
                                        ExplicitBuckets: &shared.Explicit{
                                            Bounds: []float64{
                                                8070.23,
                                                4903.05,
                                                6400.24,
                                            },
                                        },
                                        ExponentialBuckets: &shared.Exponential{
                                            GrowthFactor: sdk.Float64(9894.1),
                                            NumFiniteBuckets: sdk.Int(368102),
                                            Scale: sdk.Float64(653.04),
                                        },
                                        LinearBuckets: &shared.Linear{
                                            NumFiniteBuckets: sdk.Int(312753),
                                            Offset: sdk.Float64(7832.35),
                                            Width: sdk.Float64(8018.36),
                                        },
                                    },
                                    Count: sdk.String("labore"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "id": "suscipit",
                                                    "velit": "culpa",
                                                    "est": "recusandae",
                                                },
                                            },
                                            Timestamp: sdk.String("totam"),
                                            Value: sdk.Float64(8539.4),
                                        },
                                    },
                                    Mean: sdk.Float64(4240.89),
                                    Range: &shared.Range{
                                        Max: sdk.Float64(4976.78),
                                        Min: sdk.Float64(5546.88),
                                    },
                                    SumOfSquaredDeviation: sdk.Float64(4278.34),
                                },
                                DoubleValue: sdk.Float64(2870.51),
                                Int64Value: sdk.String("possimus"),
                                StringValue: sdk.String("facilis"),
                            },
                        },
                        shared.CollectdValue{
                            DataSourceName: sdk.String("cum"),
                            DataSourceType: shared.CollectdValueDataSourceTypeEnumCounter.ToPointer(),
                            Value: &shared.TypedValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "corporis",
                                        "reiciendis",
                                    },
                                    BucketOptions: &shared.BucketOptions{
                                        ExplicitBuckets: &shared.Explicit{
                                            Bounds: []float64{
                                                3631.61,
                                                9249.67,
                                                3975.33,
                                                460.07,
                                            },
                                        },
                                        ExponentialBuckets: &shared.Exponential{
                                            GrowthFactor: sdk.Float64(7386.83),
                                            NumFiniteBuckets: sdk.Int(232627),
                                            Scale: sdk.Float64(4490.83),
                                        },
                                        LinearBuckets: &shared.Linear{
                                            NumFiniteBuckets: sdk.Int(348519),
                                            Offset: sdk.Float64(9372.85),
                                            Width: sdk.Float64(8149.67),
                                        },
                                    },
                                    Count: sdk.String("numquam"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "quidem": "saepe",
                                                    "necessitatibus": "dolore",
                                                    "sunt": "asperiores",
                                                    "adipisci": "non",
                                                },
                                                map[string]interface{}{
                                                    "beatae": "dignissimos",
                                                },
                                            },
                                            Timestamp: sdk.String("a"),
                                            Value: sdk.Float64(8915.23),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "harum": "laboriosam",
                                                    "ipsa": "voluptates",
                                                },
                                            },
                                            Timestamp: sdk.String("libero"),
                                            Value: sdk.Float64(1138.16),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "tempora": "aspernatur",
                                                    "voluptas": "voluptas",
                                                    "voluptas": "minima",
                                                },
                                                map[string]interface{}{
                                                    "dolorum": "adipisci",
                                                    "minus": "dolores",
                                                    "blanditiis": "in",
                                                },
                                                map[string]interface{}{
                                                    "aliquam": "officiis",
                                                    "temporibus": "ullam",
                                                },
                                                map[string]interface{}{
                                                    "cum": "blanditiis",
                                                },
                                            },
                                            Timestamp: sdk.String("quas"),
                                            Value: sdk.Float64(9425.84),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "corrupti": "pariatur",
                                                    "totam": "hic",
                                                    "exercitationem": "nobis",
                                                },
                                            },
                                            Timestamp: sdk.String("sit"),
                                            Value: sdk.Float64(6995.75),
                                        },
                                    },
                                    Mean: sdk.Float64(1488.29),
                                    Range: &shared.Range{
                                        Max: sdk.Float64(9679.66),
                                        Min: sdk.Float64(1318.52),
                                    },
                                    SumOfSquaredDeviation: sdk.Float64(9944.01),
                                },
                                DoubleValue: sdk.Float64(7079.18),
                                Int64Value: sdk.String("voluptate"),
                                StringValue: sdk.String("expedita"),
                            },
                        },
                        shared.CollectdValue{
                            DataSourceName: sdk.String("ab"),
                            DataSourceType: shared.CollectdValueDataSourceTypeEnumDerive.ToPointer(),
                            Value: &shared.TypedValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "laborum",
                                        "sed",
                                    },
                                    BucketOptions: &shared.BucketOptions{
                                        ExplicitBuckets: &shared.Explicit{
                                            Bounds: []float64{
                                                4174.86,
                                                6960.77,
                                            },
                                        },
                                        ExponentialBuckets: &shared.Exponential{
                                            GrowthFactor: sdk.Float64(1312.89),
                                            NumFiniteBuckets: sdk.Int(378326),
                                            Scale: sdk.Float64(6041.18),
                                        },
                                        LinearBuckets: &shared.Linear{
                                            NumFiniteBuckets: sdk.Int(100032),
                                            Offset: sdk.Float64(3828.08),
                                            Width: sdk.Float64(9602.57),
                                        },
                                    },
                                    Count: sdk.String("debitis"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "corrupti": "maiores",
                                                },
                                                map[string]interface{}{
                                                    "sed": "provident",
                                                    "eius": "necessitatibus",
                                                },
                                                map[string]interface{}{
                                                    "ea": "occaecati",
                                                },
                                                map[string]interface{}{
                                                    "voluptatibus": "tempora",
                                                    "tempora": "voluptate",
                                                    "reiciendis": "ex",
                                                },
                                            },
                                            Timestamp: sdk.String("sit"),
                                            Value: sdk.Float64(2484.13),
                                        },
                                    },
                                    Mean: sdk.Float64(8880.44),
                                    Range: &shared.Range{
                                        Max: sdk.Float64(5058.66),
                                        Min: sdk.Float64(7086.09),
                                    },
                                    SumOfSquaredDeviation: sdk.Float64(3103.81),
                                },
                                DoubleValue: sdk.Float64(2777.73),
                                Int64Value: sdk.String("ipsam"),
                                StringValue: sdk.String("debitis"),
                            },
                        },
                    },
                },
            },
            CollectdVersion: sdk.String("rem"),
            Resource: &shared.MonitoredResource{
                Labels: map[string]string{
                    "nobis": "error",
                },
                Type: sdk.String("veniam"),
            },
        },
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("nulla"),
        Key: sdk.String("magni"),
        Name: "Gwen Fritsch",
        OauthToken: sdk.String("officiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("exercitationem"),
    }, operations.MonitoringProjectsCollectdTimeSeriesCreateSecurity{
        Option1: &operations.MonitoringProjectsCollectdTimeSeriesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCollectdTimeSeriesResponse != nil {
        // handle response
    }
}
```

## MonitoringProjectsGroupsCreate

Creates a new group.

### Example Usage

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
    res, err := s.Projects.MonitoringProjectsGroupsCreate(ctx, operations.MonitoringProjectsGroupsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Group: &shared.Group{
            DisplayName: sdk.String("cum"),
            Filter: sdk.String("laboriosam"),
            IsCluster: sdk.Bool(false),
            Name: sdk.String("Bob Mueller"),
            ParentName: sdk.String("debitis"),
        },
        AccessToken: sdk.String("neque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nostrum"),
        Fields: sdk.String("officia"),
        Key: sdk.String("dolorum"),
        Name: "Caleb Goldner",
        OauthToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("culpa"),
        ValidateOnly: sdk.Bool(false),
    }, operations.MonitoringProjectsGroupsCreateSecurity{
        Option1: &operations.MonitoringProjectsGroupsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```

## MonitoringProjectsGroupsList

Lists the existing groups.

### Example Usage

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
    res, err := s.Projects.MonitoringProjectsGroupsList(ctx, operations.MonitoringProjectsGroupsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AncestorsOfGroup: sdk.String("esse"),
        Callback: sdk.String("ipsam"),
        ChildrenOfGroup: sdk.String("sit"),
        DescendantsOfGroup: sdk.String("voluptatum"),
        Fields: sdk.String("quas"),
        Key: sdk.String("repudiandae"),
        Name: "Janet Kuvalis",
        OauthToken: sdk.String("sit"),
        PageSize: sdk.Int64(425508),
        PageToken: sdk.String("nostrum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("consequatur"),
    }, operations.MonitoringProjectsGroupsListSecurity{
        Option1: &operations.MonitoringProjectsGroupsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGroupsResponse != nil {
        // handle response
    }
}
```

## MonitoringProjectsGroupsMembersList

Lists the monitored resources that are members of a group.

### Example Usage

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
    res, err := s.Projects.MonitoringProjectsGroupsMembersList(ctx, operations.MonitoringProjectsGroupsMembersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("dicta"),
        Filter: sdk.String("architecto"),
        IntervalEndTime: sdk.String("occaecati"),
        IntervalStartTime: sdk.String("labore"),
        Key: sdk.String("quidem"),
        Name: "Cameron Reilly",
        OauthToken: sdk.String("alias"),
        PageSize: sdk.Int64(227084),
        PageToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("unde"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.MonitoringProjectsGroupsMembersListSecurity{
        Option1: &operations.MonitoringProjectsGroupsMembersListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGroupMembersResponse != nil {
        // handle response
    }
}
```

## MonitoringProjectsGroupsUpdate

Updates an existing group. You can change any group attributes except name.

### Example Usage

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
    res, err := s.Projects.MonitoringProjectsGroupsUpdate(ctx, operations.MonitoringProjectsGroupsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Group: &shared.Group{
            DisplayName: sdk.String("repellendus"),
            Filter: sdk.String("delectus"),
            IsCluster: sdk.Bool(false),
            Name: sdk.String("Joseph Orn"),
            ParentName: sdk.String("facere"),
        },
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("veniam"),
        Key: sdk.String("voluptatem"),
        Name: "Phil Boyer",
        OauthToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("quidem"),
        ValidateOnly: sdk.Bool(false),
    }, operations.MonitoringProjectsGroupsUpdateSecurity{
        Option1: &operations.MonitoringProjectsGroupsUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```

## MonitoringProjectsMetricDescriptorsCreate

Creates a new metric descriptor. The creation is executed asynchronously. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics). The metric descriptor is updated if it already exists, except that metric labels are never removed.

### Example Usage

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
    res, err := s.Projects.MonitoringProjectsMetricDescriptorsCreate(ctx, operations.MonitoringProjectsMetricDescriptorsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        MetricDescriptor: &shared.MetricDescriptor{
            Description: sdk.String("et"),
            DisplayName: sdk.String("esse"),
            Labels: []shared.LabelDescriptor{
                shared.LabelDescriptor{
                    Description: sdk.String("assumenda"),
                    Key: sdk.String("ea"),
                    ValueType: shared.LabelDescriptorValueTypeEnumBool.ToPointer(),
                },
            },
            LaunchStage: shared.MetricDescriptorLaunchStageEnumAlpha.ToPointer(),
            Metadata: &shared.MetricDescriptorMetadata{
                IngestDelay: sdk.String("officiis"),
                LaunchStage: shared.MetricDescriptorMetadataLaunchStageEnumDeprecated.ToPointer(),
                SamplePeriod: sdk.String("accusamus"),
            },
            MetricKind: shared.MetricDescriptorMetricKindEnumDelta.ToPointer(),
            MonitoredResourceTypes: []string{
                "aspernatur",
                "ex",
            },
            Name: sdk.String("Johnnie Swaniawski"),
            Type: sdk.String("suscipit"),
            Unit: sdk.String("repudiandae"),
            ValueType: shared.MetricDescriptorValueTypeEnumDouble.ToPointer(),
        },
        AccessToken: sdk.String("atque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("repellendus"),
        Name: "Lela Baumbach Jr.",
        OauthToken: sdk.String("beatae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("laboriosam"),
    }, operations.MonitoringProjectsMetricDescriptorsCreateSecurity{
        Option1: &operations.MonitoringProjectsMetricDescriptorsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MetricDescriptor != nil {
        // handle response
    }
}
```

## MonitoringProjectsMetricDescriptorsList

Lists metric descriptors that match a filter.

### Example Usage

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
    res, err := s.Projects.MonitoringProjectsMetricDescriptorsList(ctx, operations.MonitoringProjectsMetricDescriptorsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("a"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("saepe"),
        Filter: sdk.String("consequuntur"),
        Key: sdk.String("occaecati"),
        Name: "Freddie King",
        OauthToken: sdk.String("occaecati"),
        PageSize: sdk.Int64(160230),
        PageToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("reprehenderit"),
    }, operations.MonitoringProjectsMetricDescriptorsListSecurity{
        Option1: &operations.MonitoringProjectsMetricDescriptorsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMetricDescriptorsResponse != nil {
        // handle response
    }
}
```

## MonitoringProjectsMonitoredResourceDescriptorsList

Lists monitored resource descriptors that match a filter.

### Example Usage

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
    res, err := s.Projects.MonitoringProjectsMonitoredResourceDescriptorsList(ctx, operations.MonitoringProjectsMonitoredResourceDescriptorsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("illo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("eveniet"),
        Filter: sdk.String("non"),
        Key: sdk.String("vero"),
        Name: "Vera Beier IV",
        OauthToken: sdk.String("eveniet"),
        PageSize: sdk.Int64(184362),
        PageToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("ratione"),
    }, operations.MonitoringProjectsMonitoredResourceDescriptorsListSecurity{
        Option1: &operations.MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMonitoredResourceDescriptorsResponse != nil {
        // handle response
    }
}
```

## MonitoringProjectsNotificationChannelDescriptorsList

Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added.

### Example Usage

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
    res, err := s.Projects.MonitoringProjectsNotificationChannelDescriptorsList(ctx, operations.MonitoringProjectsNotificationChannelDescriptorsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("rem"),
        Fields: sdk.String("aliquam"),
        Key: sdk.String("ad"),
        Name: "John Hettinger",
        OauthToken: sdk.String("mollitia"),
        PageSize: sdk.Int64(378245),
        PageToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.MonitoringProjectsNotificationChannelDescriptorsListSecurity{
        Option1: &operations.MonitoringProjectsNotificationChannelDescriptorsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNotificationChannelDescriptorsResponse != nil {
        // handle response
    }
}
```

## MonitoringProjectsNotificationChannelsCreate

Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.

### Example Usage

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
    res, err := s.Projects.MonitoringProjectsNotificationChannelsCreate(ctx, operations.MonitoringProjectsNotificationChannelsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        NotificationChannel: &shared.NotificationChannel{
            CreationRecord: &shared.MutationRecord{
                MutateTime: sdk.String("minima"),
                MutatedBy: sdk.String("dolore"),
            },
            Description: sdk.String("dolorum"),
            DisplayName: sdk.String("nesciunt"),
            Enabled: sdk.Bool(false),
            Labels: map[string]string{
                "recusandae": "omnis",
            },
            MutationRecords: []shared.MutationRecord{
                shared.MutationRecord{
                    MutateTime: sdk.String("molestiae"),
                    MutatedBy: sdk.String("ex"),
                },
                shared.MutationRecord{
                    MutateTime: sdk.String("ut"),
                    MutatedBy: sdk.String("culpa"),
                },
            },
            Name: sdk.String("Raquel Larkin"),
            Type: sdk.String("recusandae"),
            UserLabels: map[string]string{
                "provident": "quis",
                "eum": "reiciendis",
            },
            VerificationStatus: shared.NotificationChannelVerificationStatusEnumUnverified.ToPointer(),
        },
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("animi"),
        Key: sdk.String("nostrum"),
        Name: "Eduardo Schuster",
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("doloribus"),
    }, operations.MonitoringProjectsNotificationChannelsCreateSecurity{
        Option1: &operations.MonitoringProjectsNotificationChannelsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationChannel != nil {
        // handle response
    }
}
```

## MonitoringProjectsNotificationChannelsGetVerificationCode

Requests a verification code for an already verified channel that can then be used in a call to VerifyNotificationChannel() on a different channel with an equivalent identity in the same or in a different project. This makes it possible to copy a channel between projects without requiring manual reverification of the channel. If the channel is not in the verified state, this method will fail (in other words, this may only be used if the SendNotificationChannelVerificationCode and VerifyNotificationChannel paths have already been used to put the given channel into the verified state).There is no guarantee that the verification codes returned by this method will be of a similar structure or form as the ones that are delivered to the channel via SendNotificationChannelVerificationCode; while VerifyNotificationChannel() will recognize both the codes delivered via SendNotificationChannelVerificationCode() and returned from GetNotificationChannelVerificationCode(), it is typically the case that the verification codes delivered via SendNotificationChannelVerificationCode() will be shorter and also have a shorter expiration (e.g. codes such as "G-123456") whereas GetVerificationCode() will typically return a much longer, websafe base 64 encoded string that has a longer expiration time.

### Example Usage

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
    res, err := s.Projects.MonitoringProjectsNotificationChannelsGetVerificationCode(ctx, operations.MonitoringProjectsNotificationChannelsGetVerificationCodeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GetNotificationChannelVerificationCodeRequest: &shared.GetNotificationChannelVerificationCodeRequest{
            ExpireTime: sdk.String("in"),
        },
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("placeat"),
        Name: "Tami Maggio",
        OauthToken: sdk.String("cumque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity{
        Option1: &operations.MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNotificationChannelVerificationCodeResponse != nil {
        // handle response
    }
}
```

## MonitoringProjectsNotificationChannelsList

Lists the notification channels that have been created for the project. To list the types of notification channels that are supported, use the ListNotificationChannelDescriptors method.

### Example Usage

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
    res, err := s.Projects.MonitoringProjectsNotificationChannelsList(ctx, operations.MonitoringProjectsNotificationChannelsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("inventore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("quae"),
        Filter: sdk.String("perferendis"),
        Key: sdk.String("velit"),
        Name: "Agnes Gibson",
        OauthToken: sdk.String("impedit"),
        OrderBy: sdk.String("eos"),
        PageSize: sdk.Int64(958741),
        PageToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("beatae"),
    }, operations.MonitoringProjectsNotificationChannelsListSecurity{
        Option1: &operations.MonitoringProjectsNotificationChannelsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNotificationChannelsResponse != nil {
        // handle response
    }
}
```

## MonitoringProjectsNotificationChannelsSendVerificationCode

Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel.

### Example Usage

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
    res, err := s.Projects.MonitoringProjectsNotificationChannelsSendVerificationCode(ctx, operations.MonitoringProjectsNotificationChannelsSendVerificationCodeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "earum": "soluta",
            "hic": "illum",
            "eaque": "earum",
        },
        AccessToken: sdk.String("perspiciatis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("porro"),
        Name: "Connie Corkery",
        OauthToken: sdk.String("ratione"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("animi"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("nulla"),
    }, operations.MonitoringProjectsNotificationChannelsSendVerificationCodeSecurity{
        Option1: &operations.MonitoringProjectsNotificationChannelsSendVerificationCodeSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## MonitoringProjectsNotificationChannelsVerify

Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode.

### Example Usage

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
    res, err := s.Projects.MonitoringProjectsNotificationChannelsVerify(ctx, operations.MonitoringProjectsNotificationChannelsVerifyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        VerifyNotificationChannelRequest: &shared.VerifyNotificationChannelRequest{
            Code: sdk.String("quasi"),
        },
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("suscipit"),
        Name: "Joyce Cummings",
        OauthToken: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.MonitoringProjectsNotificationChannelsVerifySecurity{
        Option1: &operations.MonitoringProjectsNotificationChannelsVerifySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationChannel != nil {
        // handle response
    }
}
```

## MonitoringProjectsSnoozesCreate

Creates a Snooze that will prevent alerts, which match the provided criteria, from being opened. The Snooze applies for a specific time interval.

### Example Usage

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
    res, err := s.Projects.MonitoringProjectsSnoozesCreate(ctx, operations.MonitoringProjectsSnoozesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Snooze: &shared.Snooze{
            Criteria: &shared.Criteria{
                Policies: []string{
                    "iusto",
                },
            },
            DisplayName: sdk.String("esse"),
            Interval: &shared.TimeInterval{
                EndTime: sdk.String("praesentium"),
                StartTime: sdk.String("maiores"),
            },
            Name: sdk.String("Ben Bradtke Sr."),
        },
        AccessToken: sdk.String("odio"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("ex"),
        Key: sdk.String("consectetur"),
        OauthToken: sdk.String("aliquid"),
        Parent: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("nostrum"),
    }, operations.MonitoringProjectsSnoozesCreateSecurity{
        Option1: &operations.MonitoringProjectsSnoozesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Snooze != nil {
        // handle response
    }
}
```

## MonitoringProjectsSnoozesList

Lists the Snoozes associated with a project. Can optionally pass in filter, which specifies predicates to match Snoozes.

### Example Usage

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
    res, err := s.Projects.MonitoringProjectsSnoozesList(ctx, operations.MonitoringProjectsSnoozesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("suscipit"),
        Filter: sdk.String("aliquid"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("eum"),
        PageSize: sdk.Int64(374753),
        PageToken: sdk.String("iste"),
        Parent: "id",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("possimus"),
    }, operations.MonitoringProjectsSnoozesListSecurity{
        Option1: &operations.MonitoringProjectsSnoozesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSnoozesResponse != nil {
        // handle response
    }
}
```

## MonitoringProjectsTimeSeriesCreate

Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response.

### Example Usage

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
    res, err := s.Projects.MonitoringProjectsTimeSeriesCreate(ctx, operations.MonitoringProjectsTimeSeriesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreateTimeSeriesRequest: &shared.CreateTimeSeriesRequest{
            TimeSeries: []shared.TimeSeries{
                shared.TimeSeries{
                    Metadata: &shared.MonitoredResourceMetadata{
                        SystemLabels: map[string]interface{}{
                            "libero": "ad",
                            "deleniti": "enim",
                            "vitae": "repellendus",
                        },
                        UserLabels: map[string]string{
                            "quo": "ex",
                            "ut": "ad",
                        },
                    },
                    Metric: &shared.Metric{
                        Labels: map[string]string{
                            "voluptatem": "molestias",
                            "cum": "aliquid",
                            "beatae": "voluptatum",
                        },
                        Type: sdk.String("omnis"),
                    },
                    MetricKind: shared.TimeSeriesMetricKindEnumMetricKindUnspecified.ToPointer(),
                    Points: []shared.Point{
                        shared.Point{
                            Interval: &shared.TimeInterval{
                                EndTime: sdk.String("est"),
                                StartTime: sdk.String("culpa"),
                            },
                            Value: &shared.TypedValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "sapiente",
                                    },
                                    BucketOptions: &shared.BucketOptions{
                                        ExplicitBuckets: &shared.Explicit{
                                            Bounds: []float64{
                                                1032.98,
                                                6821.19,
                                                8671.68,
                                                8913.15,
                                            },
                                        },
                                        ExponentialBuckets: &shared.Exponential{
                                            GrowthFactor: sdk.Float64(291.9),
                                            NumFiniteBuckets: sdk.Int(1207),
                                            Scale: sdk.Float64(5349.17),
                                        },
                                        LinearBuckets: &shared.Linear{
                                            NumFiniteBuckets: sdk.Int(937219),
                                            Offset: sdk.Float64(4042.44),
                                            Width: sdk.Float64(9583.08),
                                        },
                                    },
                                    Count: sdk.String("rem"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "ratione": "ullam",
                                                    "perferendis": "illum",
                                                    "totam": "impedit",
                                                    "quibusdam": "nam",
                                                },
                                                map[string]interface{}{
                                                    "culpa": "dolor",
                                                    "aliquam": "inventore",
                                                },
                                            },
                                            Timestamp: sdk.String("deleniti"),
                                            Value: sdk.Float64(853.11),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "consequatur": "architecto",
                                                },
                                                map[string]interface{}{
                                                    "modi": "fugit",
                                                },
                                            },
                                            Timestamp: sdk.String("ab"),
                                            Value: sdk.Float64(5137.6),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "fugiat": "ipsam",
                                                },
                                            },
                                            Timestamp: sdk.String("consequuntur"),
                                            Value: sdk.Float64(551.07),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "impedit": "officiis",
                                                    "esse": "necessitatibus",
                                                    "sed": "veniam",
                                                    "nesciunt": "expedita",
                                                },
                                                map[string]interface{}{
                                                    "vel": "voluptatum",
                                                    "magnam": "exercitationem",
                                                },
                                                map[string]interface{}{
                                                    "porro": "autem",
                                                },
                                            },
                                            Timestamp: sdk.String("nobis"),
                                            Value: sdk.Float64(3883.19),
                                        },
                                    },
                                    Mean: sdk.Float64(9272.12),
                                    Range: &shared.Range{
                                        Max: sdk.Float64(1603.93),
                                        Min: sdk.Float64(289.52),
                                    },
                                    SumOfSquaredDeviation: sdk.Float64(3502.07),
                                },
                                DoubleValue: sdk.Float64(8956.92),
                                Int64Value: sdk.String("quasi"),
                                StringValue: sdk.String("nisi"),
                            },
                        },
                        shared.Point{
                            Interval: &shared.TimeInterval{
                                EndTime: sdk.String("at"),
                                StartTime: sdk.String("vero"),
                            },
                            Value: &shared.TypedValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "harum",
                                        "sequi",
                                        "doloribus",
                                    },
                                    BucketOptions: &shared.BucketOptions{
                                        ExplicitBuckets: &shared.Explicit{
                                            Bounds: []float64{
                                                7592.83,
                                                5796.81,
                                                3645.44,
                                                4558.98,
                                            },
                                        },
                                        ExponentialBuckets: &shared.Exponential{
                                            GrowthFactor: sdk.Float64(5010.63),
                                            NumFiniteBuckets: sdk.Int(642352),
                                            Scale: sdk.Float64(3763.89),
                                        },
                                        LinearBuckets: &shared.Linear{
                                            NumFiniteBuckets: sdk.Int(254025),
                                            Offset: sdk.Float64(3649.12),
                                            Width: sdk.Float64(5510.79),
                                        },
                                    },
                                    Count: sdk.String("eius"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "fuga": "laudantium",
                                                },
                                                map[string]interface{}{
                                                    "quasi": "rem",
                                                    "fugiat": "dicta",
                                                },
                                            },
                                            Timestamp: sdk.String("nisi"),
                                            Value: sdk.Float64(1598.45),
                                        },
                                    },
                                    Mean: sdk.Float64(2330.78),
                                    Range: &shared.Range{
                                        Max: sdk.Float64(468.06),
                                        Min: sdk.Float64(5854.32),
                                    },
                                    SumOfSquaredDeviation: sdk.Float64(9707.32),
                                },
                                DoubleValue: sdk.Float64(7468.37),
                                Int64Value: sdk.String("alias"),
                                StringValue: sdk.String("omnis"),
                            },
                        },
                        shared.Point{
                            Interval: &shared.TimeInterval{
                                EndTime: sdk.String("eos"),
                                StartTime: sdk.String("occaecati"),
                            },
                            Value: &shared.TypedValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "magni",
                                        "inventore",
                                        "fuga",
                                    },
                                    BucketOptions: &shared.BucketOptions{
                                        ExplicitBuckets: &shared.Explicit{
                                            Bounds: []float64{
                                                9768.02,
                                                7196.2,
                                                6085.93,
                                                9663.9,
                                            },
                                        },
                                        ExponentialBuckets: &shared.Exponential{
                                            GrowthFactor: sdk.Float64(3283.79),
                                            NumFiniteBuckets: sdk.Int(507636),
                                            Scale: sdk.Float64(8026.92),
                                        },
                                        LinearBuckets: &shared.Linear{
                                            NumFiniteBuckets: sdk.Int(300403),
                                            Offset: sdk.Float64(8363.64),
                                            Width: sdk.Float64(5495.01),
                                        },
                                    },
                                    Count: sdk.String("commodi"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "earum": "modi",
                                                    "nam": "vero",
                                                    "voluptatem": "ipsam",
                                                },
                                                map[string]interface{}{
                                                    "alias": "quasi",
                                                    "non": "maiores",
                                                },
                                            },
                                            Timestamp: sdk.String("enim"),
                                            Value: sdk.Float64(5752.13),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "esse": "nemo",
                                                    "reprehenderit": "est",
                                                    "quis": "sint",
                                                },
                                                map[string]interface{}{
                                                    "impedit": "hic",
                                                    "necessitatibus": "asperiores",
                                                    "ex": "voluptas",
                                                    "debitis": "delectus",
                                                },
                                                map[string]interface{}{
                                                    "minus": "fuga",
                                                },
                                                map[string]interface{}{
                                                    "consectetur": "velit",
                                                    "atque": "ipsum",
                                                    "impedit": "magni",
                                                },
                                            },
                                            Timestamp: sdk.String("soluta"),
                                            Value: sdk.Float64(9227.57),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "iusto": "voluptate",
                                                    "sequi": "dignissimos",
                                                },
                                                map[string]interface{}{
                                                    "quo": "deleniti",
                                                },
                                                map[string]interface{}{
                                                    "iure": "odit",
                                                    "voluptatibus": "vel",
                                                    "magnam": "quibusdam",
                                                    "inventore": "facere",
                                                },
                                            },
                                            Timestamp: sdk.String("libero"),
                                            Value: sdk.Float64(1024.13),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "porro": "aliquam",
                                                },
                                                map[string]interface{}{
                                                    "illo": "accusantium",
                                                },
                                                map[string]interface{}{
                                                    "ea": "beatae",
                                                    "vero": "excepturi",
                                                },
                                                map[string]interface{}{
                                                    "velit": "ut",
                                                    "perspiciatis": "earum",
                                                },
                                            },
                                            Timestamp: sdk.String("dicta"),
                                            Value: sdk.Float64(7722.66),
                                        },
                                    },
                                    Mean: sdk.Float64(9758.84),
                                    Range: &shared.Range{
                                        Max: sdk.Float64(6109.87),
                                        Min: sdk.Float64(9325.62),
                                    },
                                    SumOfSquaredDeviation: sdk.Float64(26.77),
                                },
                                DoubleValue: sdk.Float64(3917.97),
                                Int64Value: sdk.String("itaque"),
                                StringValue: sdk.String("velit"),
                            },
                        },
                    },
                    Resource: &shared.MonitoredResource{
                        Labels: map[string]string{
                            "non": "dolor",
                            "iusto": "sit",
                            "doloremque": "consequatur",
                        },
                        Type: sdk.String("officia"),
                    },
                    Unit: sdk.String("recusandae"),
                    ValueType: shared.TimeSeriesValueTypeEnumInt64.ToPointer(),
                },
                shared.TimeSeries{
                    Metadata: &shared.MonitoredResourceMetadata{
                        SystemLabels: map[string]interface{}{
                            "voluptas": "facilis",
                            "placeat": "perspiciatis",
                            "expedita": "deleniti",
                        },
                        UserLabels: map[string]string{
                            "voluptate": "ullam",
                            "unde": "necessitatibus",
                            "animi": "impedit",
                            "ipsam": "corporis",
                        },
                    },
                    Metric: &shared.Metric{
                        Labels: map[string]string{
                            "error": "esse",
                            "labore": "veritatis",
                            "vero": "consectetur",
                        },
                        Type: sdk.String("vitae"),
                    },
                    MetricKind: shared.TimeSeriesMetricKindEnumMetricKindUnspecified.ToPointer(),
                    Points: []shared.Point{
                        shared.Point{
                            Interval: &shared.TimeInterval{
                                EndTime: sdk.String("ad"),
                                StartTime: sdk.String("qui"),
                            },
                            Value: &shared.TypedValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "ex",
                                        "nemo",
                                        "soluta",
                                    },
                                    BucketOptions: &shared.BucketOptions{
                                        ExplicitBuckets: &shared.Explicit{
                                            Bounds: []float64{
                                                5269.07,
                                                6780.6,
                                                4876.76,
                                            },
                                        },
                                        ExponentialBuckets: &shared.Exponential{
                                            GrowthFactor: sdk.Float64(1446.91),
                                            NumFiniteBuckets: sdk.Int(545),
                                            Scale: sdk.Float64(1680.42),
                                        },
                                        LinearBuckets: &shared.Linear{
                                            NumFiniteBuckets: sdk.Int(425402),
                                            Offset: sdk.Float64(644.35),
                                            Width: sdk.Float64(635.53),
                                        },
                                    },
                                    Count: sdk.String("modi"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "et": "ipsum",
                                                    "unde": "nulla",
                                                    "distinctio": "maxime",
                                                    "quia": "quia",
                                                },
                                                map[string]interface{}{
                                                    "omnis": "libero",
                                                    "dicta": "id",
                                                },
                                            },
                                            Timestamp: sdk.String("libero"),
                                            Value: sdk.Float64(8544.6),
                                        },
                                    },
                                    Mean: sdk.Float64(6374.62),
                                    Range: &shared.Range{
                                        Max: sdk.Float64(5546.03),
                                        Min: sdk.Float64(8119.39),
                                    },
                                    SumOfSquaredDeviation: sdk.Float64(257.56),
                                },
                                DoubleValue: sdk.Float64(4793.85),
                                Int64Value: sdk.String("ipsa"),
                                StringValue: sdk.String("voluptates"),
                            },
                        },
                    },
                    Resource: &shared.MonitoredResource{
                        Labels: map[string]string{
                            "aperiam": "totam",
                        },
                        Type: sdk.String("dolore"),
                    },
                    Unit: sdk.String("eligendi"),
                    ValueType: shared.TimeSeriesValueTypeEnumDistribution.ToPointer(),
                },
                shared.TimeSeries{
                    Metadata: &shared.MonitoredResourceMetadata{
                        SystemLabels: map[string]interface{}{
                            "autem": "esse",
                        },
                        UserLabels: map[string]string{
                            "assumenda": "beatae",
                        },
                    },
                    Metric: &shared.Metric{
                        Labels: map[string]string{
                            "facere": "corrupti",
                            "molestiae": "provident",
                            "accusamus": "necessitatibus",
                        },
                        Type: sdk.String("tempore"),
                    },
                    MetricKind: shared.TimeSeriesMetricKindEnumDelta.ToPointer(),
                    Points: []shared.Point{
                        shared.Point{
                            Interval: &shared.TimeInterval{
                                EndTime: sdk.String("autem"),
                                StartTime: sdk.String("ipsam"),
                            },
                            Value: &shared.TypedValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "laudantium",
                                        "corporis",
                                        "officiis",
                                    },
                                    BucketOptions: &shared.BucketOptions{
                                        ExplicitBuckets: &shared.Explicit{
                                            Bounds: []float64{
                                                7372.79,
                                                8723.03,
                                                51.52,
                                                1566.53,
                                            },
                                        },
                                        ExponentialBuckets: &shared.Exponential{
                                            GrowthFactor: sdk.Float64(6941.58),
                                            NumFiniteBuckets: sdk.Int(684126),
                                            Scale: sdk.Float64(9195.08),
                                        },
                                        LinearBuckets: &shared.Linear{
                                            NumFiniteBuckets: sdk.Int(34070),
                                            Offset: sdk.Float64(7104.56),
                                            Width: sdk.Float64(8852.08),
                                        },
                                    },
                                    Count: sdk.String("eos"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "odit": "explicabo",
                                                    "corporis": "error",
                                                    "earum": "adipisci",
                                                },
                                                map[string]interface{}{
                                                    "similique": "ut",
                                                    "quidem": "quis",
                                                    "beatae": "unde",
                                                    "molestiae": "delectus",
                                                },
                                            },
                                            Timestamp: sdk.String("cupiditate"),
                                            Value: sdk.Float64(1478.01),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "nesciunt": "at",
                                                    "officia": "dignissimos",
                                                },
                                                map[string]interface{}{
                                                    "necessitatibus": "corporis",
                                                    "qui": "expedita",
                                                    "voluptatum": "cupiditate",
                                                    "minima": "placeat",
                                                },
                                            },
                                            Timestamp: sdk.String("enim"),
                                            Value: sdk.Float64(2040.72),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "eum": "modi",
                                                    "corporis": "magnam",
                                                    "voluptates": "maiores",
                                                    "tempore": "aperiam",
                                                },
                                                map[string]interface{}{
                                                    "ratione": "labore",
                                                    "totam": "occaecati",
                                                    "voluptas": "quo",
                                                },
                                            },
                                            Timestamp: sdk.String("velit"),
                                            Value: sdk.Float64(7955.91),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "est": "impedit",
                                                    "delectus": "tempore",
                                                },
                                                map[string]interface{}{
                                                    "odit": "repellat",
                                                    "pariatur": "nemo",
                                                    "reprehenderit": "aperiam",
                                                    "odio": "minima",
                                                },
                                                map[string]interface{}{
                                                    "ducimus": "excepturi",
                                                    "dolores": "error",
                                                },
                                            },
                                            Timestamp: sdk.String("veritatis"),
                                            Value: sdk.Float64(4981.8),
                                        },
                                    },
                                    Mean: sdk.Float64(4527.29),
                                    Range: &shared.Range{
                                        Max: sdk.Float64(8667.89),
                                        Min: sdk.Float64(9326.66),
                                    },
                                    SumOfSquaredDeviation: sdk.Float64(6277.35),
                                },
                                DoubleValue: sdk.Float64(7631.65),
                                Int64Value: sdk.String("ex"),
                                StringValue: sdk.String("quaerat"),
                            },
                        },
                        shared.Point{
                            Interval: &shared.TimeInterval{
                                EndTime: sdk.String("commodi"),
                                StartTime: sdk.String("officiis"),
                            },
                            Value: &shared.TypedValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "quidem",
                                        "exercitationem",
                                        "quam",
                                        "dolorem",
                                    },
                                    BucketOptions: &shared.BucketOptions{
                                        ExplicitBuckets: &shared.Explicit{
                                            Bounds: []float64{
                                                593.83,
                                                5755.34,
                                            },
                                        },
                                        ExponentialBuckets: &shared.Exponential{
                                            GrowthFactor: sdk.Float64(8760.27),
                                            NumFiniteBuckets: sdk.Int(194901),
                                            Scale: sdk.Float64(9185.47),
                                        },
                                        LinearBuckets: &shared.Linear{
                                            NumFiniteBuckets: sdk.Int(741232),
                                            Offset: sdk.Float64(1201.2),
                                            Width: sdk.Float64(9369.28),
                                        },
                                    },
                                    Count: sdk.String("veniam"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "dicta": "consequuntur",
                                                    "necessitatibus": "nobis",
                                                    "ipsa": "ducimus",
                                                },
                                            },
                                            Timestamp: sdk.String("maiores"),
                                            Value: sdk.Float64(873.82),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "pariatur": "libero",
                                                    "excepturi": "occaecati",
                                                },
                                            },
                                            Timestamp: sdk.String("nemo"),
                                            Value: sdk.Float64(3063.82),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "eligendi": "sint",
                                                    "enim": "hic",
                                                    "animi": "quas",
                                                    "totam": "molestias",
                                                },
                                                map[string]interface{}{
                                                    "eaque": "saepe",
                                                    "architecto": "quos",
                                                },
                                            },
                                            Timestamp: sdk.String("iste"),
                                            Value: sdk.Float64(8268.62),
                                        },
                                    },
                                    Mean: sdk.Float64(7316.34),
                                    Range: &shared.Range{
                                        Max: sdk.Float64(7255.74),
                                        Min: sdk.Float64(2440.32),
                                    },
                                    SumOfSquaredDeviation: sdk.Float64(385.57),
                                },
                                DoubleValue: sdk.Float64(9639.76),
                                Int64Value: sdk.String("impedit"),
                                StringValue: sdk.String("cum"),
                            },
                        },
                    },
                    Resource: &shared.MonitoredResource{
                        Labels: map[string]string{
                            "adipisci": "saepe",
                        },
                        Type: sdk.String("deserunt"),
                    },
                    Unit: sdk.String("doloremque"),
                    ValueType: shared.TimeSeriesValueTypeEnumInt64.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("veniam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("molestiae"),
        Name: "Rufus Friesen",
        OauthToken: sdk.String("sed"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        UploadType: sdk.String("veniam"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.MonitoringProjectsTimeSeriesCreateSecurity{
        Option1: &operations.MonitoringProjectsTimeSeriesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## MonitoringProjectsTimeSeriesCreateService

Creates or adds data to one or more service time series. A service time series is a time series for a metric from a Google Cloud service. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This endpoint rejects writes to user-defined metrics. This method is only for use by Google Cloud services. Use projects.timeSeries.create instead.

### Example Usage

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
    res, err := s.Projects.MonitoringProjectsTimeSeriesCreateService(ctx, operations.MonitoringProjectsTimeSeriesCreateServiceRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreateTimeSeriesRequest: &shared.CreateTimeSeriesRequest{
            TimeSeries: []shared.TimeSeries{
                shared.TimeSeries{
                    Metadata: &shared.MonitoredResourceMetadata{
                        SystemLabels: map[string]interface{}{
                            "pariatur": "amet",
                        },
                        UserLabels: map[string]string{
                            "ab": "velit",
                            "facilis": "tempore",
                        },
                    },
                    Metric: &shared.Metric{
                        Labels: map[string]string{
                            "voluptatibus": "quaerat",
                            "blanditiis": "distinctio",
                        },
                        Type: sdk.String("nisi"),
                    },
                    MetricKind: shared.TimeSeriesMetricKindEnumGauge.ToPointer(),
                    Points: []shared.Point{
                        shared.Point{
                            Interval: &shared.TimeInterval{
                                EndTime: sdk.String("libero"),
                                StartTime: sdk.String("minus"),
                            },
                            Value: &shared.TypedValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "facilis",
                                        "ipsum",
                                        "ad",
                                        "voluptatibus",
                                    },
                                    BucketOptions: &shared.BucketOptions{
                                        ExplicitBuckets: &shared.Explicit{
                                            Bounds: []float64{
                                                1623.58,
                                                8915.81,
                                                2908.41,
                                                7009.28,
                                            },
                                        },
                                        ExponentialBuckets: &shared.Exponential{
                                            GrowthFactor: sdk.Float64(1797.95),
                                            NumFiniteBuckets: sdk.Int(440777),
                                            Scale: sdk.Float64(3455.06),
                                        },
                                        LinearBuckets: &shared.Linear{
                                            NumFiniteBuckets: sdk.Int(207296),
                                            Offset: sdk.Float64(4800.61),
                                            Width: sdk.Float64(6649.65),
                                        },
                                    },
                                    Count: sdk.String("rem"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "officiis": "ducimus",
                                                    "dolor": "dicta",
                                                    "error": "porro",
                                                },
                                                map[string]interface{}{
                                                    "dignissimos": "esse",
                                                },
                                                map[string]interface{}{
                                                    "ad": "aspernatur",
                                                    "enim": "delectus",
                                                    "iusto": "dignissimos",
                                                    "libero": "illo",
                                                },
                                                map[string]interface{}{
                                                    "incidunt": "accusamus",
                                                },
                                            },
                                            Timestamp: sdk.String("saepe"),
                                            Value: sdk.Float64(7348.14),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "reiciendis": "earum",
                                                },
                                                map[string]interface{}{
                                                    "praesentium": "nemo",
                                                    "repellat": "quisquam",
                                                },
                                            },
                                            Timestamp: sdk.String("sequi"),
                                            Value: sdk.Float64(4671.19),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "labore": "assumenda",
                                                },
                                                map[string]interface{}{
                                                    "quisquam": "provident",
                                                    "laudantium": "repudiandae",
                                                },
                                                map[string]interface{}{
                                                    "maxime": "aspernatur",
                                                },
                                            },
                                            Timestamp: sdk.String("nam"),
                                            Value: sdk.Float64(7119.91),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "repudiandae": "rerum",
                                                    "dignissimos": "corporis",
                                                    "vero": "similique",
                                                },
                                                map[string]interface{}{
                                                    "iure": "dolorem",
                                                    "commodi": "impedit",
                                                    "commodi": "aut",
                                                    "voluptatem": "ad",
                                                },
                                                map[string]interface{}{
                                                    "amet": "illum",
                                                },
                                            },
                                            Timestamp: sdk.String("praesentium"),
                                            Value: sdk.Float64(6955.26),
                                        },
                                    },
                                    Mean: sdk.Float64(7368.53),
                                    Range: &shared.Range{
                                        Max: sdk.Float64(2304.11),
                                        Min: sdk.Float64(976.76),
                                    },
                                    SumOfSquaredDeviation: sdk.Float64(1181.26),
                                },
                                DoubleValue: sdk.Float64(5149.22),
                                Int64Value: sdk.String("doloremque"),
                                StringValue: sdk.String("earum"),
                            },
                        },
                        shared.Point{
                            Interval: &shared.TimeInterval{
                                EndTime: sdk.String("iusto"),
                                StartTime: sdk.String("amet"),
                            },
                            Value: &shared.TypedValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "dolorum",
                                        "necessitatibus",
                                        "provident",
                                    },
                                    BucketOptions: &shared.BucketOptions{
                                        ExplicitBuckets: &shared.Explicit{
                                            Bounds: []float64{
                                                100.63,
                                                3662.44,
                                                4758.26,
                                                9308.4,
                                            },
                                        },
                                        ExponentialBuckets: &shared.Exponential{
                                            GrowthFactor: sdk.Float64(7087.71),
                                            NumFiniteBuckets: sdk.Int(545779),
                                            Scale: sdk.Float64(439.75),
                                        },
                                        LinearBuckets: &shared.Linear{
                                            NumFiniteBuckets: sdk.Int(574092),
                                            Offset: sdk.Float64(8795.22),
                                            Width: sdk.Float64(1786.35),
                                        },
                                    },
                                    Count: sdk.String("totam"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "dolor": "sunt",
                                                },
                                            },
                                            Timestamp: sdk.String("a"),
                                            Value: sdk.Float64(2232.91),
                                        },
                                    },
                                    Mean: sdk.Float64(5823.2),
                                    Range: &shared.Range{
                                        Max: sdk.Float64(5398.13),
                                        Min: sdk.Float64(1074.72),
                                    },
                                    SumOfSquaredDeviation: sdk.Float64(8682.55),
                                },
                                DoubleValue: sdk.Float64(2875.44),
                                Int64Value: sdk.String("minus"),
                                StringValue: sdk.String("esse"),
                            },
                        },
                    },
                    Resource: &shared.MonitoredResource{
                        Labels: map[string]string{
                            "perferendis": "rerum",
                        },
                        Type: sdk.String("ea"),
                    },
                    Unit: sdk.String("aperiam"),
                    ValueType: shared.TimeSeriesValueTypeEnumDouble.ToPointer(),
                },
                shared.TimeSeries{
                    Metadata: &shared.MonitoredResourceMetadata{
                        SystemLabels: map[string]interface{}{
                            "velit": "porro",
                            "provident": "consectetur",
                            "eligendi": "dignissimos",
                            "consectetur": "soluta",
                        },
                        UserLabels: map[string]string{
                            "temporibus": "officia",
                            "amet": "tenetur",
                            "aspernatur": "quo",
                        },
                    },
                    Metric: &shared.Metric{
                        Labels: map[string]string{
                            "illum": "laborum",
                            "dignissimos": "vero",
                            "qui": "consectetur",
                            "repellat": "explicabo",
                        },
                        Type: sdk.String("explicabo"),
                    },
                    MetricKind: shared.TimeSeriesMetricKindEnumGauge.ToPointer(),
                    Points: []shared.Point{
                        shared.Point{
                            Interval: &shared.TimeInterval{
                                EndTime: sdk.String("non"),
                                StartTime: sdk.String("ab"),
                            },
                            Value: &shared.TypedValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "hic",
                                    },
                                    BucketOptions: &shared.BucketOptions{
                                        ExplicitBuckets: &shared.Explicit{
                                            Bounds: []float64{
                                                9649.25,
                                                2512.12,
                                                7193.89,
                                            },
                                        },
                                        ExponentialBuckets: &shared.Exponential{
                                            GrowthFactor: sdk.Float64(4502.24),
                                            NumFiniteBuckets: sdk.Int(349993),
                                            Scale: sdk.Float64(2883),
                                        },
                                        LinearBuckets: &shared.Linear{
                                            NumFiniteBuckets: sdk.Int(254382),
                                            Offset: sdk.Float64(9211.93),
                                            Width: sdk.Float64(2653.03),
                                        },
                                    },
                                    Count: sdk.String("in"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "aperiam": "odit",
                                                    "deleniti": "enim",
                                                    "voluptate": "similique",
                                                },
                                                map[string]interface{}{
                                                    "libero": "magnam",
                                                    "sit": "modi",
                                                },
                                                map[string]interface{}{
                                                    "nesciunt": "mollitia",
                                                    "dignissimos": "fugiat",
                                                },
                                                map[string]interface{}{
                                                    "molestiae": "veniam",
                                                    "reiciendis": "ab",
                                                },
                                            },
                                            Timestamp: sdk.String("modi"),
                                            Value: sdk.Float64(138.65),
                                        },
                                    },
                                    Mean: sdk.Float64(135.08),
                                    Range: &shared.Range{
                                        Max: sdk.Float64(9116.57),
                                        Min: sdk.Float64(4837.53),
                                    },
                                    SumOfSquaredDeviation: sdk.Float64(4137.58),
                                },
                                DoubleValue: sdk.Float64(2561.14),
                                Int64Value: sdk.String("dolorum"),
                                StringValue: sdk.String("possimus"),
                            },
                        },
                        shared.Point{
                            Interval: &shared.TimeInterval{
                                EndTime: sdk.String("voluptate"),
                                StartTime: sdk.String("consectetur"),
                            },
                            Value: &shared.TypedValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "quaerat",
                                    },
                                    BucketOptions: &shared.BucketOptions{
                                        ExplicitBuckets: &shared.Explicit{
                                            Bounds: []float64{
                                                7912.28,
                                                1226.62,
                                                7151.43,
                                                4813.75,
                                            },
                                        },
                                        ExponentialBuckets: &shared.Exponential{
                                            GrowthFactor: sdk.Float64(5580.51),
                                            NumFiniteBuckets: sdk.Int(91728),
                                            Scale: sdk.Float64(7049.48),
                                        },
                                        LinearBuckets: &shared.Linear{
                                            NumFiniteBuckets: sdk.Int(229276),
                                            Offset: sdk.Float64(4186.37),
                                            Width: sdk.Float64(6854.15),
                                        },
                                    },
                                    Count: sdk.String("alias"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "laudantium": "repellendus",
                                                    "veritatis": "quae",
                                                    "eaque": "saepe",
                                                },
                                            },
                                            Timestamp: sdk.String("delectus"),
                                            Value: sdk.Float64(6512.28),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "sed": "voluptatem",
                                                    "alias": "eveniet",
                                                    "hic": "voluptatem",
                                                },
                                                map[string]interface{}{
                                                    "qui": "qui",
                                                    "necessitatibus": "harum",
                                                },
                                                map[string]interface{}{
                                                    "beatae": "aliquid",
                                                },
                                                map[string]interface{}{
                                                    "optio": "voluptatibus",
                                                    "molestias": "officia",
                                                },
                                            },
                                            Timestamp: sdk.String("libero"),
                                            Value: sdk.Float64(5206.78),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "ea": "impedit",
                                                    "ducimus": "odit",
                                                },
                                            },
                                            Timestamp: sdk.String("velit"),
                                            Value: sdk.Float64(9673.38),
                                        },
                                    },
                                    Mean: sdk.Float64(9979.18),
                                    Range: &shared.Range{
                                        Max: sdk.Float64(8611.23),
                                        Min: sdk.Float64(6711.16),
                                    },
                                    SumOfSquaredDeviation: sdk.Float64(6176.57),
                                },
                                DoubleValue: sdk.Float64(8837.8),
                                Int64Value: sdk.String("doloremque"),
                                StringValue: sdk.String("nisi"),
                            },
                        },
                    },
                    Resource: &shared.MonitoredResource{
                        Labels: map[string]string{
                            "recusandae": "voluptates",
                            "non": "rem",
                            "quia": "ullam",
                        },
                        Type: sdk.String("quisquam"),
                    },
                    Unit: sdk.String("dicta"),
                    ValueType: shared.TimeSeriesValueTypeEnumMoney.ToPointer(),
                },
                shared.TimeSeries{
                    Metadata: &shared.MonitoredResourceMetadata{
                        SystemLabels: map[string]interface{}{
                            "quae": "officiis",
                            "architecto": "architecto",
                            "enim": "optio",
                            "rem": "perferendis",
                        },
                        UserLabels: map[string]string{
                            "reiciendis": "a",
                            "iste": "dicta",
                            "quos": "ullam",
                        },
                    },
                    Metric: &shared.Metric{
                        Labels: map[string]string{
                            "modi": "itaque",
                            "maxime": "modi",
                        },
                        Type: sdk.String("consequuntur"),
                    },
                    MetricKind: shared.TimeSeriesMetricKindEnumCumulative.ToPointer(),
                    Points: []shared.Point{
                        shared.Point{
                            Interval: &shared.TimeInterval{
                                EndTime: sdk.String("doloribus"),
                                StartTime: sdk.String("impedit"),
                            },
                            Value: &shared.TypedValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "accusamus",
                                        "totam",
                                        "reiciendis",
                                        "ab",
                                    },
                                    BucketOptions: &shared.BucketOptions{
                                        ExplicitBuckets: &shared.Explicit{
                                            Bounds: []float64{
                                                4724.14,
                                                4584.12,
                                                4382.56,
                                            },
                                        },
                                        ExponentialBuckets: &shared.Exponential{
                                            GrowthFactor: sdk.Float64(4850.31),
                                            NumFiniteBuckets: sdk.Int(202796),
                                            Scale: sdk.Float64(8955.13),
                                        },
                                        LinearBuckets: &shared.Linear{
                                            NumFiniteBuckets: sdk.Int(423588),
                                            Offset: sdk.Float64(2086.83),
                                            Width: sdk.Float64(3577.58),
                                        },
                                    },
                                    Count: sdk.String("voluptas"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "distinctio": "eius",
                                                    "ipsa": "rem",
                                                },
                                                map[string]interface{}{
                                                    "accusantium": "veniam",
                                                    "saepe": "neque",
                                                    "facere": "aliquam",
                                                    "quos": "doloribus",
                                                },
                                                map[string]interface{}{
                                                    "est": "delectus",
                                                    "velit": "vitae",
                                                    "nesciunt": "similique",
                                                    "illo": "repellat",
                                                },
                                            },
                                            Timestamp: sdk.String("nemo"),
                                            Value: sdk.Float64(9878.9),
                                        },
                                    },
                                    Mean: sdk.Float64(8237.53),
                                    Range: &shared.Range{
                                        Max: sdk.Float64(6033.23),
                                        Min: sdk.Float64(2754.25),
                                    },
                                    SumOfSquaredDeviation: sdk.Float64(1280.21),
                                },
                                DoubleValue: sdk.Float64(3684.91),
                                Int64Value: sdk.String("cupiditate"),
                                StringValue: sdk.String("optio"),
                            },
                        },
                        shared.Point{
                            Interval: &shared.TimeInterval{
                                EndTime: sdk.String("alias"),
                                StartTime: sdk.String("quidem"),
                            },
                            Value: &shared.TypedValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "commodi",
                                    },
                                    BucketOptions: &shared.BucketOptions{
                                        ExplicitBuckets: &shared.Explicit{
                                            Bounds: []float64{
                                                1643.19,
                                                3304.4,
                                                8937.73,
                                                6383.9,
                                            },
                                        },
                                        ExponentialBuckets: &shared.Exponential{
                                            GrowthFactor: sdk.Float64(5750.62),
                                            NumFiniteBuckets: sdk.Int(280859),
                                            Scale: sdk.Float64(2567.68),
                                        },
                                        LinearBuckets: &shared.Linear{
                                            NumFiniteBuckets: sdk.Int(947822),
                                            Offset: sdk.Float64(2367.9),
                                            Width: sdk.Float64(7285.59),
                                        },
                                    },
                                    Count: sdk.String("in"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "ab": "beatae",
                                                    "hic": "nisi",
                                                    "quisquam": "dolor",
                                                    "ducimus": "fuga",
                                                },
                                                map[string]interface{}{
                                                    "architecto": "qui",
                                                    "aliquid": "magni",
                                                },
                                            },
                                            Timestamp: sdk.String("incidunt"),
                                            Value: sdk.Float64(2404.9),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "exercitationem": "expedita",
                                                },
                                                map[string]interface{}{
                                                    "impedit": "sit",
                                                    "nemo": "culpa",
                                                    "consequuntur": "amet",
                                                },
                                                map[string]interface{}{
                                                    "modi": "veniam",
                                                    "quod": "itaque",
                                                    "a": "quisquam",
                                                },
                                            },
                                            Timestamp: sdk.String("enim"),
                                            Value: sdk.Float64(9877.59),
                                        },
                                    },
                                    Mean: sdk.Float64(8268.06),
                                    Range: &shared.Range{
                                        Max: sdk.Float64(8873.63),
                                        Min: sdk.Float64(1039.9),
                                    },
                                    SumOfSquaredDeviation: sdk.Float64(53.15),
                                },
                                DoubleValue: sdk.Float64(6339.82),
                                Int64Value: sdk.String("ipsa"),
                                StringValue: sdk.String("nobis"),
                            },
                        },
                        shared.Point{
                            Interval: &shared.TimeInterval{
                                EndTime: sdk.String("necessitatibus"),
                                StartTime: sdk.String("quia"),
                            },
                            Value: &shared.TypedValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "vel",
                                    },
                                    BucketOptions: &shared.BucketOptions{
                                        ExplicitBuckets: &shared.Explicit{
                                            Bounds: []float64{
                                                8927.08,
                                                3548.21,
                                                1035.78,
                                            },
                                        },
                                        ExponentialBuckets: &shared.Exponential{
                                            GrowthFactor: sdk.Float64(337.71),
                                            NumFiniteBuckets: sdk.Int(18096),
                                            Scale: sdk.Float64(828.76),
                                        },
                                        LinearBuckets: &shared.Linear{
                                            NumFiniteBuckets: sdk.Int(590585),
                                            Offset: sdk.Float64(7658.33),
                                            Width: sdk.Float64(4355.31),
                                        },
                                    },
                                    Count: sdk.String("quibusdam"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "velit": "magnam",
                                                    "dignissimos": "laboriosam",
                                                    "sed": "odio",
                                                    "natus": "provident",
                                                },
                                                map[string]interface{}{
                                                    "doloribus": "facilis",
                                                    "quidem": "itaque",
                                                    "laboriosam": "unde",
                                                },
                                            },
                                            Timestamp: sdk.String("modi"),
                                            Value: sdk.Float64(5951.98),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "aspernatur": "libero",
                                                    "nam": "incidunt",
                                                    "recusandae": "quod",
                                                },
                                                map[string]interface{}{
                                                    "saepe": "autem",
                                                    "quo": "nesciunt",
                                                    "illum": "nemo",
                                                },
                                                map[string]interface{}{
                                                    "facilis": "non",
                                                    "mollitia": "assumenda",
                                                    "recusandae": "distinctio",
                                                    "pariatur": "ad",
                                                },
                                                map[string]interface{}{
                                                    "laborum": "eveniet",
                                                    "laborum": "incidunt",
                                                    "maxime": "ipsam",
                                                    "alias": "suscipit",
                                                },
                                            },
                                            Timestamp: sdk.String("deserunt"),
                                            Value: sdk.Float64(5604.51),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "occaecati": "labore",
                                                    "quo": "perferendis",
                                                    "fugit": "aliquid",
                                                },
                                                map[string]interface{}{
                                                    "quaerat": "eligendi",
                                                    "hic": "nostrum",
                                                },
                                                map[string]interface{}{
                                                    "unde": "nulla",
                                                    "error": "mollitia",
                                                    "magnam": "nostrum",
                                                    "esse": "corrupti",
                                                },
                                            },
                                            Timestamp: sdk.String("fuga"),
                                            Value: sdk.Float64(8152.25),
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "deserunt": "quod",
                                                },
                                                map[string]interface{}{
                                                    "doloremque": "voluptatem",
                                                    "facere": "necessitatibus",
                                                },
                                                map[string]interface{}{
                                                    "consequatur": "eaque",
                                                    "architecto": "similique",
                                                    "porro": "blanditiis",
                                                    "quae": "magni",
                                                },
                                                map[string]interface{}{
                                                    "sed": "necessitatibus",
                                                    "impedit": "ipsa",
                                                    "excepturi": "a",
                                                    "maiores": "laudantium",
                                                },
                                            },
                                            Timestamp: sdk.String("maiores"),
                                            Value: sdk.Float64(6.91),
                                        },
                                    },
                                    Mean: sdk.Float64(9926.67),
                                    Range: &shared.Range{
                                        Max: sdk.Float64(5233.65),
                                        Min: sdk.Float64(1186.15),
                                    },
                                    SumOfSquaredDeviation: sdk.Float64(3805.95),
                                },
                                DoubleValue: sdk.Float64(9382.57),
                                Int64Value: sdk.String("doloribus"),
                                StringValue: sdk.String("velit"),
                            },
                        },
                        shared.Point{
                            Interval: &shared.TimeInterval{
                                EndTime: sdk.String("eius"),
                                StartTime: sdk.String("esse"),
                            },
                            Value: &shared.TypedValue{
                                BoolValue: sdk.Bool(false),
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "eligendi",
                                        "quasi",
                                    },
                                    BucketOptions: &shared.BucketOptions{
                                        ExplicitBuckets: &shared.Explicit{
                                            Bounds: []float64{
                                                8766.49,
                                            },
                                        },
                                        ExponentialBuckets: &shared.Exponential{
                                            GrowthFactor: sdk.Float64(5663.12),
                                            NumFiniteBuckets: sdk.Int(37534),
                                            Scale: sdk.Float64(1858.16),
                                        },
                                        LinearBuckets: &shared.Linear{
                                            NumFiniteBuckets: sdk.Int(771241),
                                            Offset: sdk.Float64(1047.36),
                                            Width: sdk.Float64(2783.29),
                                        },
                                    },
                                    Count: sdk.String("dicta"),
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "alias": "error",
                                                    "vel": "accusantium",
                                                    "id": "laboriosam",
                                                },
                                                map[string]interface{}{
                                                    "quas": "veritatis",
                                                    "ullam": "quae",
                                                },
                                            },
                                            Timestamp: sdk.String("similique"),
                                            Value: sdk.Float64(2781.16),
                                        },
                                    },
                                    Mean: sdk.Float64(4625.83),
                                    Range: &shared.Range{
                                        Max: sdk.Float64(1693.12),
                                        Min: sdk.Float64(6463.29),
                                    },
                                    SumOfSquaredDeviation: sdk.Float64(9650.95),
                                },
                                DoubleValue: sdk.Float64(6095.37),
                                Int64Value: sdk.String("sed"),
                                StringValue: sdk.String("nesciunt"),
                            },
                        },
                    },
                    Resource: &shared.MonitoredResource{
                        Labels: map[string]string{
                            "quis": "cupiditate",
                            "aliquam": "excepturi",
                            "maiores": "laudantium",
                            "velit": "reiciendis",
                        },
                        Type: sdk.String("amet"),
                    },
                    Unit: sdk.String("nemo"),
                    ValueType: shared.TimeSeriesValueTypeEnumValueTypeUnspecified.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("quisquam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quas"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("aliquid"),
        Name: "Tommie Rohan Sr.",
        OauthToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("eveniet"),
        UploadProtocol: sdk.String("porro"),
    }, operations.MonitoringProjectsTimeSeriesCreateServiceSecurity{
        Option1: &operations.MonitoringProjectsTimeSeriesCreateServiceSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## MonitoringProjectsTimeSeriesList

Lists time series that match a filter.

### Example Usage

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
    res, err := s.Projects.MonitoringProjectsTimeSeriesList(ctx, operations.MonitoringProjectsTimeSeriesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quidem"),
        AggregationAlignmentPeriod: sdk.String("modi"),
        AggregationCrossSeriesReducer: operations.MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnumReducePercentile50.ToPointer(),
        AggregationGroupByFields: []string{
            "eius",
        },
        AggregationPerSeriesAligner: operations.MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnumAlignInterpolate.ToPointer(),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("asperiores"),
        Fields: sdk.String("esse"),
        Filter: sdk.String("blanditiis"),
        IntervalEndTime: sdk.String("sint"),
        IntervalStartTime: sdk.String("repellat"),
        Key: sdk.String("a"),
        Name: "Emilio Waters",
        OauthToken: sdk.String("corporis"),
        OrderBy: sdk.String("velit"),
        PageSize: sdk.Int64(887701),
        PageToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        SecondaryAggregationAlignmentPeriod: sdk.String("saepe"),
        SecondaryAggregationCrossSeriesReducer: operations.MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnumReduceCount.ToPointer(),
        SecondaryAggregationGroupByFields: []string{
            "accusantium",
            "officia",
            "impedit",
            "quasi",
        },
        SecondaryAggregationPerSeriesAligner: operations.MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnumAlignSum.ToPointer(),
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("quisquam"),
        View: operations.MonitoringProjectsTimeSeriesListViewEnumFull.ToPointer(),
    }, operations.MonitoringProjectsTimeSeriesListSecurity{
        Option1: &operations.MonitoringProjectsTimeSeriesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTimeSeriesResponse != nil {
        // handle response
    }
}
```

## MonitoringProjectsTimeSeriesQuery

Queries time series using Monitoring Query Language.

### Example Usage

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
    res, err := s.Projects.MonitoringProjectsTimeSeriesQuery(ctx, operations.MonitoringProjectsTimeSeriesQueryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        QueryTimeSeriesRequest: &shared.QueryTimeSeriesRequest{
            PageSize: sdk.Int(620054),
            PageToken: sdk.String("minus"),
            Query: sdk.String("quia"),
        },
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("quos"),
        Key: sdk.String("corrupti"),
        Name: "Tanya Farrell",
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("molestias"),
    }, operations.MonitoringProjectsTimeSeriesQuerySecurity{
        Option1: &operations.MonitoringProjectsTimeSeriesQuerySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryTimeSeriesResponse != nil {
        // handle response
    }
}
```

## MonitoringProjectsUptimeCheckConfigsCreate

Creates a new Uptime check configuration.

### Example Usage

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
    res, err := s.Projects.MonitoringProjectsUptimeCheckConfigsCreate(ctx, operations.MonitoringProjectsUptimeCheckConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UptimeCheckConfig: &shared.UptimeCheckConfig{
            CheckerType: shared.UptimeCheckConfigCheckerTypeEnumCheckerTypeUnspecified.ToPointer(),
            ContentMatchers: []shared.ContentMatcher{
                shared.ContentMatcher{
                    Content: sdk.String("neque"),
                    JSONPathMatcher: &shared.JSONPathMatcher{
                        JSONMatcher: shared.JSONPathMatcherJSONMatcherEnumJSONPathMatcherOptionUnspecified.ToPointer(),
                        JSONPath: sdk.String("earum"),
                    },
                    Matcher: shared.ContentMatcherMatcherEnumNotContainsString.ToPointer(),
                },
                shared.ContentMatcher{
                    Content: sdk.String("ipsam"),
                    JSONPathMatcher: &shared.JSONPathMatcher{
                        JSONMatcher: shared.JSONPathMatcherJSONMatcherEnumJSONPathMatcherOptionUnspecified.ToPointer(),
                        JSONPath: sdk.String("exercitationem"),
                    },
                    Matcher: shared.ContentMatcherMatcherEnumNotContainsString.ToPointer(),
                },
                shared.ContentMatcher{
                    Content: sdk.String("nihil"),
                    JSONPathMatcher: &shared.JSONPathMatcher{
                        JSONMatcher: shared.JSONPathMatcherJSONMatcherEnumJSONPathMatcherOptionUnspecified.ToPointer(),
                        JSONPath: sdk.String("nisi"),
                    },
                    Matcher: shared.ContentMatcherMatcherEnumNotMatchesJSONPath.ToPointer(),
                },
                shared.ContentMatcher{
                    Content: sdk.String("quis"),
                    JSONPathMatcher: &shared.JSONPathMatcher{
                        JSONMatcher: shared.JSONPathMatcherJSONMatcherEnumRegexMatch.ToPointer(),
                        JSONPath: sdk.String("nemo"),
                    },
                    Matcher: shared.ContentMatcherMatcherEnumNotContainsString.ToPointer(),
                },
            },
            DisplayName: sdk.String("pariatur"),
            HTTPCheck: &shared.HTTPCheck{
                AcceptedResponseStatusCodes: []shared.ResponseStatusCode{
                    shared.ResponseStatusCode{
                        StatusClass: shared.ResponseStatusCodeStatusClassEnumStatusClass4Xx.ToPointer(),
                        StatusValue: sdk.Int(831031),
                    },
                },
                AuthInfo: &shared.BasicAuthentication{
                    Password: sdk.String("perferendis"),
                    Username: sdk.String("Magnolia82"),
                },
                Body: sdk.String("repellat"),
                ContentType: shared.HTTPCheckContentTypeEnumUserProvided.ToPointer(),
                CustomContentType: sdk.String("architecto"),
                Headers: map[string]string{
                    "pariatur": "harum",
                },
                MaskHeaders: sdk.Bool(false),
                Path: sdk.String("dolore"),
                PingConfig: &shared.PingConfig{
                    PingsCount: sdk.Int(976762),
                },
                Port: sdk.Int(435353),
                RequestMethod: shared.HTTPCheckRequestMethodEnumMethodUnspecified.ToPointer(),
                UseSsl: sdk.Bool(false),
                ValidateSsl: sdk.Bool(false),
            },
            InternalCheckers: []shared.InternalChecker{
                shared.InternalChecker{
                    DisplayName: sdk.String("soluta"),
                    GcpZone: sdk.String("dolorum"),
                    Name: sdk.String("Lila Langosh"),
                    Network: sdk.String("quasi"),
                    PeerProjectID: sdk.String("mollitia"),
                    State: shared.InternalCheckerStateEnumRunning.ToPointer(),
                },
                shared.InternalChecker{
                    DisplayName: sdk.String("harum"),
                    GcpZone: sdk.String("cumque"),
                    Name: sdk.String("Miss Mamie Lowe"),
                    Network: sdk.String("excepturi"),
                    PeerProjectID: sdk.String("magni"),
                    State: shared.InternalCheckerStateEnumUnspecified.ToPointer(),
                },
                shared.InternalChecker{
                    DisplayName: sdk.String("possimus"),
                    GcpZone: sdk.String("dolor"),
                    Name: sdk.String("Aaron Tillman"),
                    Network: sdk.String("minus"),
                    PeerProjectID: sdk.String("quo"),
                    State: shared.InternalCheckerStateEnumCreating.ToPointer(),
                },
                shared.InternalChecker{
                    DisplayName: sdk.String("asperiores"),
                    GcpZone: sdk.String("voluptatum"),
                    Name: sdk.String("Mr. Zachary Bashirian"),
                    Network: sdk.String("nostrum"),
                    PeerProjectID: sdk.String("at"),
                    State: shared.InternalCheckerStateEnumRunning.ToPointer(),
                },
            },
            IsInternal: sdk.Bool(false),
            MonitoredResource: &shared.MonitoredResource{
                Labels: map[string]string{
                    "pariatur": "vel",
                },
                Type: sdk.String("sapiente"),
            },
            Name: sdk.String("Mrs. Eric Lueilwitz"),
            Period: sdk.String("ad"),
            ResourceGroup: &shared.ResourceGroup{
                GroupID: sdk.String("aliquam"),
                ResourceType: shared.ResourceGroupResourceTypeEnumAwsElbLoadBalancer.ToPointer(),
            },
            SelectedRegions: []shared.UptimeCheckConfigSelectedRegionsEnum{
                shared.UptimeCheckConfigSelectedRegionsEnumUsa,
                shared.UptimeCheckConfigSelectedRegionsEnumUsaVirginia,
                shared.UptimeCheckConfigSelectedRegionsEnumRegionUnspecified,
            },
            TCPCheck: &shared.TCPCheck{
                PingConfig: &shared.PingConfig{
                    PingsCount: sdk.Int(400448),
                },
                Port: sdk.Int(513185),
            },
            Timeout: sdk.String("est"),
            UserLabels: map[string]string{
                "aliquid": "consectetur",
            },
        },
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatum"),
        Fields: sdk.String("ducimus"),
        Key: sdk.String("adipisci"),
        OauthToken: sdk.String("recusandae"),
        Parent: "tempora",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("blanditiis"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("sequi"),
    }, operations.MonitoringProjectsUptimeCheckConfigsCreateSecurity{
        Option1: &operations.MonitoringProjectsUptimeCheckConfigsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UptimeCheckConfig != nil {
        // handle response
    }
}
```

## MonitoringProjectsUptimeCheckConfigsList

Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

### Example Usage

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
    res, err := s.Projects.MonitoringProjectsUptimeCheckConfigsList(ctx, operations.MonitoringProjectsUptimeCheckConfigsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("tenetur"),
        Filter: sdk.String("autem"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("totam"),
        PageSize: sdk.Int64(781193),
        PageToken: sdk.String("deserunt"),
        Parent: "magni",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("animi"),
    }, operations.MonitoringProjectsUptimeCheckConfigsListSecurity{
        Option1: &operations.MonitoringProjectsUptimeCheckConfigsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUptimeCheckConfigsResponse != nil {
        // handle response
    }
}
```
