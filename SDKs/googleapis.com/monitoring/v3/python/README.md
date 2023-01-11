# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.MonitoringProjectsAlertPoliciesCreateRequest(
    security=operations.MonitoringProjectsAlertPoliciesCreateSecurity(
        option1=operations.MonitoringProjectsAlertPoliciesCreateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.MonitoringProjectsAlertPoliciesCreatePathParams(
        name="repellendus",
    ),
    query_params=operations.MonitoringProjectsAlertPoliciesCreateQueryParams(
        dollar_xgafv="2",
        access_token="omnis",
        alt="proto",
        callback="voluptas",
        fields="corporis",
        key="vero",
        oauth_token="sed",
        pretty_print=False,
        quota_user="molestiae",
        upload_type="rerum",
        upload_protocol="exercitationem",
    ),
    request=shared.AlertPolicy(
        alert_strategy=shared.AlertStrategy(
            auto_close="nesciunt",
            notification_rate_limit=shared.NotificationRateLimit(
                period="omnis",
            ),
        ),
        combiner="COMBINE_UNSPECIFIED",
        conditions=[
            shared.Condition(
                condition_absent=shared.MetricAbsence(
                    aggregations=[
                        shared.Aggregation(
                            alignment_period="praesentium",
                            cross_series_reducer="REDUCE_STDDEV",
                            group_by_fields=[
                                "magni",
                                "quibusdam",
                                "assumenda",
                            ],
                            per_series_aligner="ALIGN_PERCENT_CHANGE",
                        ),
                        shared.Aggregation(
                            alignment_period="minus",
                            cross_series_reducer="REDUCE_SUM",
                            group_by_fields=[
                                "corporis",
                                "quaerat",
                            ],
                            per_series_aligner="ALIGN_SUM",
                        ),
                    ],
                    duration="qui",
                    filter="ab",
                    trigger=shared.Trigger(
                        count=4629249652007334892,
                        percent=87.099998,
                    ),
                ),
                condition_matched_log=shared.LogMatch(
                    filter="enim",
                    label_extractors={
                        "ut": "expedita",
                        "quo": "beatae",
                        "maxime": "vel",
                    },
                ),
                condition_monitoring_query_language=shared.MonitoringQueryLanguageCondition(
                    duration="eum",
                    evaluation_missing_data="EVALUATION_MISSING_DATA_NO_OP",
                    query="sed",
                    trigger=shared.Trigger(
                        count=3440003813319565983,
                        percent=43.200001,
                    ),
                ),
                condition_threshold=shared.MetricThreshold(
                    aggregations=[
                        shared.Aggregation(
                            alignment_period="voluptas",
                            cross_series_reducer="REDUCE_MIN",
                            group_by_fields=[
                                "voluptatem",
                                "et",
                            ],
                            per_series_aligner="ALIGN_NEXT_OLDER",
                        ),
                        shared.Aggregation(
                            alignment_period="maiores",
                            cross_series_reducer="REDUCE_PERCENTILE_95",
                            group_by_fields=[
                                "ullam",
                            ],
                            per_series_aligner="ALIGN_COUNT_FALSE",
                        ),
                        shared.Aggregation(
                            alignment_period="dolores",
                            cross_series_reducer="REDUCE_NONE",
                            group_by_fields=[
                                "rerum",
                                "id",
                            ],
                            per_series_aligner="ALIGN_MEAN",
                        ),
                    ],
                    comparison="COMPARISON_NE",
                    denominator_aggregations=[
                        shared.Aggregation(
                            alignment_period="earum",
                            cross_series_reducer="REDUCE_PERCENTILE_95",
                            group_by_fields=[
                                "explicabo",
                            ],
                            per_series_aligner="ALIGN_PERCENTILE_99",
                        ),
                    ],
                    denominator_filter="eaque",
                    duration="perferendis",
                    evaluation_missing_data="EVALUATION_MISSING_DATA_ACTIVE",
                    filter="neque",
                    forecast_options=shared.ForecastOptions(
                        forecast_horizon="ullam",
                    ),
                    threshold_value=33.099998,
                    trigger=shared.Trigger(
                        count=383869393711336780,
                        percent=97.099998,
                    ),
                ),
                display_name="consequatur",
                name="enim",
            ),
            shared.Condition(
                condition_absent=shared.MetricAbsence(
                    aggregations=[
                        shared.Aggregation(
                            alignment_period="architecto",
                            cross_series_reducer="REDUCE_PERCENTILE_99",
                            group_by_fields=[
                                "quod",
                                "corporis",
                            ],
                            per_series_aligner="ALIGN_MAX",
                        ),
                        shared.Aggregation(
                            alignment_period="necessitatibus",
                            cross_series_reducer="REDUCE_COUNT_FALSE",
                            group_by_fields=[
                                "non",
                                "eligendi",
                            ],
                            per_series_aligner="ALIGN_PERCENTILE_05",
                        ),
                    ],
                    duration="ipsum",
                    filter="eos",
                    trigger=shared.Trigger(
                        count=960635814650371739,
                        percent=58.200001,
                    ),
                ),
                condition_matched_log=shared.LogMatch(
                    filter="sint",
                    label_extractors={
                        "ut": "quis",
                    },
                ),
                condition_monitoring_query_language=shared.MonitoringQueryLanguageCondition(
                    duration="ab",
                    evaluation_missing_data="EVALUATION_MISSING_DATA_NO_OP",
                    query="nam",
                    trigger=shared.Trigger(
                        count=3985253464228977593,
                        percent=5.200000,
                    ),
                ),
                condition_threshold=shared.MetricThreshold(
                    aggregations=[
                        shared.Aggregation(
                            alignment_period="qui",
                            cross_series_reducer="REDUCE_MIN",
                            group_by_fields=[
                                "dolores",
                                "officia",
                                "eligendi",
                            ],
                            per_series_aligner="ALIGN_STDDEV",
                        ),
                    ],
                    comparison="COMPARISON_GE",
                    denominator_aggregations=[
                        shared.Aggregation(
                            alignment_period="aut",
                            cross_series_reducer="REDUCE_PERCENTILE_05",
                            group_by_fields=[
                                "ab",
                                "inventore",
                                "deleniti",
                            ],
                            per_series_aligner="ALIGN_SUM",
                        ),
                    ],
                    denominator_filter="ut",
                    duration="vitae",
                    evaluation_missing_data="EVALUATION_MISSING_DATA_INACTIVE",
                    filter="totam",
                    forecast_options=shared.ForecastOptions(
                        forecast_horizon="omnis",
                    ),
                    threshold_value=67.099998,
                    trigger=shared.Trigger(
                        count=1280576806753042404,
                        percent=72.099998,
                    ),
                ),
                display_name="perspiciatis",
                name="occaecati",
            ),
        ],
        creation_record=shared.MutationRecord(
            mutate_time="iusto",
            mutated_by="eius",
        ),
        display_name="voluptatem",
        documentation=shared.Documentation(
            content="laboriosam",
            mime_type="magni",
        ),
        enabled=True,
        mutation_record=shared.MutationRecord(
            mutate_time="exercitationem",
            mutated_by="maiores",
        ),
        name="et",
        notification_channels=[
            "quo",
            "magni",
        ],
        user_labels={
            "omnis": "consectetur",
            "accusamus": "non",
        },
        validity=shared.Status(
            code=5237954261915984455,
            details=[
                {
                    "facere": "architecto",
                    "delectus": "ipsam",
                    "repudiandae": "illo",
                },
            ],
            message="saepe",
        ),
    ),
)
    
res = s.projects.monitoring_projects_alert_policies_create(req)

if res.alert_policy is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `monitoring_projects_alert_policies_create` - Creates a new alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.
* `monitoring_projects_alert_policies_list` - Lists the existing alerting policies for the workspace.
* `monitoring_projects_collectd_time_series_create` - Cloud Monitoring Agent only: Creates a new time series.This method is only for use by the Cloud Monitoring Agent. Use projects.timeSeries.create instead.
* `monitoring_projects_groups_create` - Creates a new group.
* `monitoring_projects_groups_list` - Lists the existing groups.
* `monitoring_projects_groups_members_list` - Lists the monitored resources that are members of a group.
* `monitoring_projects_groups_update` - Updates an existing group. You can change any group attributes except name.
* `monitoring_projects_metric_descriptors_create` - Creates a new metric descriptor. The creation is executed asynchronously. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics). The metric descriptor is updated if it already exists, except that metric labels are never removed.
* `monitoring_projects_metric_descriptors_list` - Lists metric descriptors that match a filter.
* `monitoring_projects_monitored_resource_descriptors_list` - Lists monitored resource descriptors that match a filter.
* `monitoring_projects_notification_channel_descriptors_list` - Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added.
* `monitoring_projects_notification_channels_create` - Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.
* `monitoring_projects_notification_channels_get_verification_code` - Requests a verification code for an already verified channel that can then be used in a call to VerifyNotificationChannel() on a different channel with an equivalent identity in the same or in a different project. This makes it possible to copy a channel between projects without requiring manual reverification of the channel. If the channel is not in the verified state, this method will fail (in other words, this may only be used if the SendNotificationChannelVerificationCode and VerifyNotificationChannel paths have already been used to put the given channel into the verified state).There is no guarantee that the verification codes returned by this method will be of a similar structure or form as the ones that are delivered to the channel via SendNotificationChannelVerificationCode; while VerifyNotificationChannel() will recognize both the codes delivered via SendNotificationChannelVerificationCode() and returned from GetNotificationChannelVerificationCode(), it is typically the case that the verification codes delivered via SendNotificationChannelVerificationCode() will be shorter and also have a shorter expiration (e.g. codes such as "G-123456") whereas GetVerificationCode() will typically return a much longer, websafe base 64 encoded string that has a longer expiration time.
* `monitoring_projects_notification_channels_list` - Lists the notification channels that have been created for the project.
* `monitoring_projects_notification_channels_send_verification_code` - Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel.
* `monitoring_projects_notification_channels_verify` - Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode.
* `monitoring_projects_snoozes_create` - Creates a Snooze that will prevent alerts, which match the provided criteria, from being opened. The Snooze applies for a specific time interval.
* `monitoring_projects_snoozes_list` - Lists the Snoozes associated with a project. Can optionally pass in filter, which specifies predicates to match Snoozes.
* `monitoring_projects_time_series_create` - Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response.
* `monitoring_projects_time_series_create_service` - Creates or adds data to one or more service time series. A service time series is a time series for a metric from a Google Cloud service. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This endpoint rejects writes to user-defined metrics. This method is only for use by Google Cloud services. Use projects.timeSeries.create instead.
* `monitoring_projects_time_series_list` - Lists time series that match a filter.
* `monitoring_projects_time_series_query` - Queries time series using Monitoring Query Language.
* `monitoring_projects_uptime_check_configs_create` - Creates a new Uptime check configuration.
* `monitoring_projects_uptime_check_configs_list` - Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

### services

* `monitoring_services_create` - Create a Service.
* `monitoring_services_list` - List Services for this Metrics Scope.
* `monitoring_services_service_level_objectives_create` - Create a ServiceLevelObjective for the given Service.
* `monitoring_services_service_level_objectives_delete` - Delete the given ServiceLevelObjective.
* `monitoring_services_service_level_objectives_get` - Get a ServiceLevelObjective by name.
* `monitoring_services_service_level_objectives_list` - List the ServiceLevelObjectives for the given Service.
* `monitoring_services_service_level_objectives_patch` - Update the given ServiceLevelObjective.

### uptimeCheckIps

* `monitoring_uptime_check_ips_list` - Returns the list of IP addresses that checkers run from

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
