# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/monitoring/v3/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.MonitoringProjectsAlertPoliciesCreateRequest(
    dollar_xgafv="2",
    alert_policy=shared.AlertPolicy(
        alert_strategy=shared.AlertStrategy(
            auto_close="provident",
            notification_channel_strategy=[
                shared.NotificationChannelStrategy(
                    notification_channel_names=[
                        "unde",
                        "nulla",
                        "corrupti",
                        "illum",
                    ],
                    renotify_interval="vel",
                ),
                shared.NotificationChannelStrategy(
                    notification_channel_names=[
                        "deserunt",
                        "suscipit",
                        "iure",
                    ],
                    renotify_interval="magnam",
                ),
                shared.NotificationChannelStrategy(
                    notification_channel_names=[
                        "ipsa",
                        "delectus",
                        "tempora",
                        "suscipit",
                    ],
                    renotify_interval="molestiae",
                ),
            ],
            notification_rate_limit=shared.NotificationRateLimit(
                period="minus",
            ),
        ),
        combiner="AND_WITH_MATCHING_RESOURCE",
        conditions=[
            shared.Condition(
                condition_absent=shared.MetricAbsence(
                    aggregations=[
                        shared.Aggregation(
                            alignment_period="excepturi",
                            cross_series_reducer="REDUCE_STDDEV",
                            group_by_fields=[
                                "temporibus",
                                "ab",
                                "quis",
                                "veritatis",
                            ],
                            per_series_aligner="ALIGN_COUNT_FALSE",
                        ),
                        shared.Aggregation(
                            alignment_period="perferendis",
                            cross_series_reducer="REDUCE_STDDEV",
                            group_by_fields=[
                                "sapiente",
                                "quo",
                                "odit",
                                "at",
                            ],
                            per_series_aligner="ALIGN_PERCENTILE_50",
                        ),
                    ],
                    duration="maiores",
                    filter="molestiae",
                    trigger=shared.Trigger(
                        count=799159,
                        percent=8009.11,
                    ),
                ),
                condition_matched_log=shared.LogMatch(
                    filter="esse",
                    label_extractors={
                        "porro": "dolorum",
                        "dicta": "nam",
                        "officia": "occaecati",
                    },
                ),
                condition_monitoring_query_language=shared.MonitoringQueryLanguageCondition(
                    duration="fugit",
                    evaluation_missing_data="EVALUATION_MISSING_DATA_ACTIVE",
                    query="hic",
                    trigger=shared.Trigger(
                        count=758616,
                        percent=5218.48,
                    ),
                ),
                condition_threshold=shared.MetricThreshold(
                    aggregations=[
                        shared.Aggregation(
                            alignment_period="commodi",
                            cross_series_reducer="REDUCE_COUNT",
                            group_by_fields=[
                                "qui",
                                "impedit",
                            ],
                            per_series_aligner="ALIGN_PERCENTILE_99",
                        ),
                    ],
                    comparison="COMPARISON_LT",
                    denominator_aggregations=[
                        shared.Aggregation(
                            alignment_period="excepturi",
                            cross_series_reducer="REDUCE_MEAN",
                            group_by_fields=[
                                "ad",
                            ],
                            per_series_aligner="ALIGN_COUNT_TRUE",
                        ),
                    ],
                    denominator_filter="sed",
                    duration="iste",
                    evaluation_missing_data="EVALUATION_MISSING_DATA_UNSPECIFIED",
                    filter="natus",
                    forecast_options=shared.ForecastOptions(
                        forecast_horizon="laboriosam",
                    ),
                    threshold_value=9437.49,
                    trigger=shared.Trigger(
                        count=902599,
                        percent=6818.2,
                    ),
                ),
                display_name="in",
                name="corporis",
            ),
            shared.Condition(
                condition_absent=shared.MetricAbsence(
                    aggregations=[
                        shared.Aggregation(
                            alignment_period="iure",
                            cross_series_reducer="REDUCE_PERCENTILE_50",
                            group_by_fields=[
                                "architecto",
                                "ipsa",
                                "reiciendis",
                            ],
                            per_series_aligner="ALIGN_COUNT_FALSE",
                        ),
                        shared.Aggregation(
                            alignment_period="mollitia",
                            cross_series_reducer="REDUCE_FRACTION_TRUE",
                            group_by_fields=[
                                "dolorem",
                            ],
                            per_series_aligner="ALIGN_MAX",
                        ),
                        shared.Aggregation(
                            alignment_period="explicabo",
                            cross_series_reducer="REDUCE_PERCENTILE_99",
                            group_by_fields=[
                                "omnis",
                                "nemo",
                            ],
                            per_series_aligner="ALIGN_MAX",
                        ),
                    ],
                    duration="excepturi",
                    filter="accusantium",
                    trigger=shared.Trigger(
                        count=438601,
                        percent=6342.74,
                    ),
                ),
                condition_matched_log=shared.LogMatch(
                    filter="doloribus",
                    label_extractors={
                        "architecto": "mollitia",
                        "dolorem": "culpa",
                        "consequuntur": "repellat",
                        "mollitia": "occaecati",
                    },
                ),
                condition_monitoring_query_language=shared.MonitoringQueryLanguageCondition(
                    duration="numquam",
                    evaluation_missing_data="EVALUATION_MISSING_DATA_INACTIVE",
                    query="quam",
                    trigger=shared.Trigger(
                        count=474697,
                        percent=2444.25,
                    ),
                ),
                condition_threshold=shared.MetricThreshold(
                    aggregations=[
                        shared.Aggregation(
                            alignment_period="quia",
                            cross_series_reducer="REDUCE_SUM",
                            group_by_fields=[
                                "laborum",
                            ],
                            per_series_aligner="ALIGN_COUNT_FALSE",
                        ),
                        shared.Aggregation(
                            alignment_period="enim",
                            cross_series_reducer="REDUCE_MEAN",
                            group_by_fields=[
                                "sequi",
                                "tenetur",
                                "ipsam",
                                "id",
                            ],
                            per_series_aligner="ALIGN_PERCENTILE_95",
                        ),
                        shared.Aggregation(
                            alignment_period="aut",
                            cross_series_reducer="REDUCE_MEAN",
                            group_by_fields=[
                                "temporibus",
                                "laborum",
                                "quasi",
                            ],
                            per_series_aligner="ALIGN_PERCENT_CHANGE",
                        ),
                    ],
                    comparison="COMPARISON_NE",
                    denominator_aggregations=[
                        shared.Aggregation(
                            alignment_period="nihil",
                            cross_series_reducer="REDUCE_COUNT_TRUE",
                            group_by_fields=[
                                "ipsa",
                                "omnis",
                                "voluptate",
                                "cum",
                            ],
                            per_series_aligner="ALIGN_NONE",
                        ),
                        shared.Aggregation(
                            alignment_period="doloremque",
                            cross_series_reducer="REDUCE_COUNT",
                            group_by_fields=[
                                "maiores",
                                "dicta",
                            ],
                            per_series_aligner="ALIGN_MAX",
                        ),
                        shared.Aggregation(
                            alignment_period="dolore",
                            cross_series_reducer="REDUCE_COUNT",
                            group_by_fields=[
                                "harum",
                            ],
                            per_series_aligner="ALIGN_MAX",
                        ),
                        shared.Aggregation(
                            alignment_period="accusamus",
                            cross_series_reducer="REDUCE_STDDEV",
                            group_by_fields=[
                                "quae",
                                "ipsum",
                                "quidem",
                                "molestias",
                            ],
                            per_series_aligner="ALIGN_STDDEV",
                        ),
                    ],
                    denominator_filter="pariatur",
                    duration="modi",
                    evaluation_missing_data="EVALUATION_MISSING_DATA_ACTIVE",
                    filter="rem",
                    forecast_options=shared.ForecastOptions(
                        forecast_horizon="voluptates",
                    ),
                    threshold_value=939.4,
                    trigger=shared.Trigger(
                        count=921158,
                        percent=5759.47,
                    ),
                ),
                display_name="veritatis",
                name="itaque",
            ),
            shared.Condition(
                condition_absent=shared.MetricAbsence(
                    aggregations=[
                        shared.Aggregation(
                            alignment_period="enim",
                            cross_series_reducer="REDUCE_NONE",
                            group_by_fields=[
                                "quibusdam",
                                "explicabo",
                                "deserunt",
                            ],
                            per_series_aligner="ALIGN_FRACTION_TRUE",
                        ),
                        shared.Aggregation(
                            alignment_period="quibusdam",
                            cross_series_reducer="REDUCE_SUM",
                            group_by_fields=[
                                "qui",
                                "aliquid",
                            ],
                            per_series_aligner="ALIGN_COUNT_TRUE",
                        ),
                    ],
                    duration="quos",
                    filter="perferendis",
                    trigger=shared.Trigger(
                        count=164940,
                        percent=8289.4,
                    ),
                ),
                condition_matched_log=shared.LogMatch(
                    filter="ipsam",
                    label_extractors={
                        "fugit": "dolorum",
                    },
                ),
                condition_monitoring_query_language=shared.MonitoringQueryLanguageCondition(
                    duration="excepturi",
                    evaluation_missing_data="EVALUATION_MISSING_DATA_INACTIVE",
                    query="facilis",
                    trigger=shared.Trigger(
                        count=735194,
                        percent=2884.76,
                    ),
                ),
                condition_threshold=shared.MetricThreshold(
                    aggregations=[
                        shared.Aggregation(
                            alignment_period="eum",
                            cross_series_reducer="REDUCE_MAX",
                            group_by_fields=[
                                "sint",
                                "aliquid",
                                "provident",
                                "necessitatibus",
                            ],
                            per_series_aligner="ALIGN_STDDEV",
                        ),
                        shared.Aggregation(
                            alignment_period="officia",
                            cross_series_reducer="REDUCE_MAX",
                            group_by_fields=[
                                "a",
                                "dolorum",
                                "in",
                                "in",
                            ],
                            per_series_aligner="ALIGN_PERCENTILE_50",
                        ),
                        shared.Aggregation(
                            alignment_period="maiores",
                            cross_series_reducer="REDUCE_FRACTION_TRUE",
                            group_by_fields=[
                                "magnam",
                            ],
                            per_series_aligner="ALIGN_PERCENTILE_99",
                        ),
                        shared.Aggregation(
                            alignment_period="facere",
                            cross_series_reducer="REDUCE_STDDEV",
                            group_by_fields=[
                                "laborum",
                                "accusamus",
                            ],
                            per_series_aligner="ALIGN_NEXT_OLDER",
                        ),
                    ],
                    comparison="COMPARISON_LE",
                    denominator_aggregations=[
                        shared.Aggregation(
                            alignment_period="accusamus",
                            cross_series_reducer="REDUCE_PERCENTILE_05",
                            group_by_fields=[
                                "provident",
                                "nam",
                                "id",
                            ],
                            per_series_aligner="ALIGN_SUM",
                        ),
                        shared.Aggregation(
                            alignment_period="deleniti",
                            cross_series_reducer="REDUCE_PERCENTILE_05",
                            group_by_fields=[
                                "deserunt",
                            ],
                            per_series_aligner="ALIGN_MEAN",
                        ),
                    ],
                    denominator_filter="vel",
                    duration="natus",
                    evaluation_missing_data="EVALUATION_MISSING_DATA_ACTIVE",
                    filter="molestiae",
                    forecast_options=shared.ForecastOptions(
                        forecast_horizon="perferendis",
                    ),
                    threshold_value=4701.32,
                    trigger=shared.Trigger(
                        count=301575,
                        percent=7160.75,
                    ),
                ),
                display_name="id",
                name="labore",
            ),
        ],
        creation_record=shared.MutationRecord(
            mutate_time="labore",
            mutated_by="suscipit",
        ),
        display_name="natus",
        documentation=shared.Documentation(
            content="nobis",
            mime_type="eum",
        ),
        enabled=False,
        mutation_record=shared.MutationRecord(
            mutate_time="vero",
            mutated_by="aspernatur",
        ),
        name="architecto",
        notification_channels=[
            "et",
            "excepturi",
        ],
        user_labels={
            "provident": "quos",
            "sint": "accusantium",
        },
        validity=shared.Status(
            code=653201,
            details=[
                {
                    "ad": "eum",
                    "dolor": "necessitatibus",
                    "odit": "nemo",
                },
                {
                    "iure": "doloribus",
                },
                {
                    "eius": "maxime",
                    "deleniti": "facilis",
                    "in": "architecto",
                    "architecto": "repudiandae",
                },
                {
                    "expedita": "nihil",
                    "repellat": "quibusdam",
                },
            ],
            message="sed",
        ),
    ),
    access_token="saepe",
    alt="proto",
    callback="accusantium",
    fields_="consequuntur",
    key="praesentium",
    name="natus",
    oauth_token="magni",
    pretty_print=False,
    quota_user="sunt",
    upload_type="quo",
    upload_protocol="illum",
)
    
res = s.projects.monitoring_projects_alert_policies_create(req, operations.MonitoringProjectsAlertPoliciesCreateSecurity(
    option1=operations.MonitoringProjectsAlertPoliciesCreateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.alert_policy is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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

### uptime_check_ips

* `monitoring_uptime_check_ips_list` - Returns the list of IP addresses that checkers run from
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
