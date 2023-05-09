# projects

### Available Operations

* [monitoringProjectsAlertPoliciesCreate](#monitoringprojectsalertpoliciescreate) - Creates a new alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.
* [monitoringProjectsAlertPoliciesList](#monitoringprojectsalertpolicieslist) - Lists the existing alerting policies for the workspace.
* [monitoringProjectsCollectdTimeSeriesCreate](#monitoringprojectscollectdtimeseriescreate) - Cloud Monitoring Agent only: Creates a new time series.This method is only for use by the Cloud Monitoring Agent. Use projects.timeSeries.create instead.
* [monitoringProjectsGroupsCreate](#monitoringprojectsgroupscreate) - Creates a new group.
* [monitoringProjectsGroupsList](#monitoringprojectsgroupslist) - Lists the existing groups.
* [monitoringProjectsGroupsMembersList](#monitoringprojectsgroupsmemberslist) - Lists the monitored resources that are members of a group.
* [monitoringProjectsGroupsUpdate](#monitoringprojectsgroupsupdate) - Updates an existing group. You can change any group attributes except name.
* [monitoringProjectsMetricDescriptorsCreate](#monitoringprojectsmetricdescriptorscreate) - Creates a new metric descriptor. The creation is executed asynchronously. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics). The metric descriptor is updated if it already exists, except that metric labels are never removed.
* [monitoringProjectsMetricDescriptorsList](#monitoringprojectsmetricdescriptorslist) - Lists metric descriptors that match a filter.
* [monitoringProjectsMonitoredResourceDescriptorsList](#monitoringprojectsmonitoredresourcedescriptorslist) - Lists monitored resource descriptors that match a filter.
* [monitoringProjectsNotificationChannelDescriptorsList](#monitoringprojectsnotificationchanneldescriptorslist) - Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added.
* [monitoringProjectsNotificationChannelsCreate](#monitoringprojectsnotificationchannelscreate) - Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.
* [monitoringProjectsNotificationChannelsGetVerificationCode](#monitoringprojectsnotificationchannelsgetverificationcode) - Requests a verification code for an already verified channel that can then be used in a call to VerifyNotificationChannel() on a different channel with an equivalent identity in the same or in a different project. This makes it possible to copy a channel between projects without requiring manual reverification of the channel. If the channel is not in the verified state, this method will fail (in other words, this may only be used if the SendNotificationChannelVerificationCode and VerifyNotificationChannel paths have already been used to put the given channel into the verified state).There is no guarantee that the verification codes returned by this method will be of a similar structure or form as the ones that are delivered to the channel via SendNotificationChannelVerificationCode; while VerifyNotificationChannel() will recognize both the codes delivered via SendNotificationChannelVerificationCode() and returned from GetNotificationChannelVerificationCode(), it is typically the case that the verification codes delivered via SendNotificationChannelVerificationCode() will be shorter and also have a shorter expiration (e.g. codes such as "G-123456") whereas GetVerificationCode() will typically return a much longer, websafe base 64 encoded string that has a longer expiration time.
* [monitoringProjectsNotificationChannelsList](#monitoringprojectsnotificationchannelslist) - Lists the notification channels that have been created for the project. To list the types of notification channels that are supported, use the ListNotificationChannelDescriptors method.
* [monitoringProjectsNotificationChannelsSendVerificationCode](#monitoringprojectsnotificationchannelssendverificationcode) - Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel.
* [monitoringProjectsNotificationChannelsVerify](#monitoringprojectsnotificationchannelsverify) - Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode.
* [monitoringProjectsSnoozesCreate](#monitoringprojectssnoozescreate) - Creates a Snooze that will prevent alerts, which match the provided criteria, from being opened. The Snooze applies for a specific time interval.
* [monitoringProjectsSnoozesList](#monitoringprojectssnoozeslist) - Lists the Snoozes associated with a project. Can optionally pass in filter, which specifies predicates to match Snoozes.
* [monitoringProjectsTimeSeriesCreate](#monitoringprojectstimeseriescreate) - Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response.
* [monitoringProjectsTimeSeriesCreateService](#monitoringprojectstimeseriescreateservice) - Creates or adds data to one or more service time series. A service time series is a time series for a metric from a Google Cloud service. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This endpoint rejects writes to user-defined metrics. This method is only for use by Google Cloud services. Use projects.timeSeries.create instead.
* [monitoringProjectsTimeSeriesList](#monitoringprojectstimeserieslist) - Lists time series that match a filter.
* [monitoringProjectsTimeSeriesQuery](#monitoringprojectstimeseriesquery) - Queries time series using Monitoring Query Language.
* [monitoringProjectsUptimeCheckConfigsCreate](#monitoringprojectsuptimecheckconfigscreate) - Creates a new Uptime check configuration.
* [monitoringProjectsUptimeCheckConfigsList](#monitoringprojectsuptimecheckconfigslist) - Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

## monitoringProjectsAlertPoliciesCreate

Creates a new alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsAlertPoliciesCreateRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsAlertPoliciesCreateResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsAlertPoliciesCreateSecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsAlertPoliciesCreateSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsAlertPoliciesCreateSecurityOption2;
import org.openapis.openapi.models.shared.Aggregation;
import org.openapis.openapi.models.shared.AggregationCrossSeriesReducerEnum;
import org.openapis.openapi.models.shared.AggregationPerSeriesAlignerEnum;
import org.openapis.openapi.models.shared.AlertPolicy;
import org.openapis.openapi.models.shared.AlertPolicyCombinerEnum;
import org.openapis.openapi.models.shared.AlertStrategy;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.Documentation;
import org.openapis.openapi.models.shared.ForecastOptions;
import org.openapis.openapi.models.shared.LogMatch;
import org.openapis.openapi.models.shared.MetricAbsence;
import org.openapis.openapi.models.shared.MetricThreshold;
import org.openapis.openapi.models.shared.MetricThresholdComparisonEnum;
import org.openapis.openapi.models.shared.MetricThresholdEvaluationMissingDataEnum;
import org.openapis.openapi.models.shared.MonitoringQueryLanguageCondition;
import org.openapis.openapi.models.shared.MonitoringQueryLanguageConditionEvaluationMissingDataEnum;
import org.openapis.openapi.models.shared.MutationRecord;
import org.openapis.openapi.models.shared.NotificationChannelStrategy;
import org.openapis.openapi.models.shared.NotificationRateLimit;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.Trigger;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsAlertPoliciesCreateRequest req = new MonitoringProjectsAlertPoliciesCreateRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                alertPolicy = new AlertPolicy() {{
                    alertStrategy = new AlertStrategy() {{
                        autoClose = "voluptatibus";
                        notificationChannelStrategy = new org.openapis.openapi.models.shared.NotificationChannelStrategy[]{{
                            add(new NotificationChannelStrategy() {{
                                notificationChannelNames = new String[]{{
                                    add("praesentium"),
                                    add("voluptatibus"),
                                }};
                                renotifyInterval = "ipsa";
                            }}),
                            add(new NotificationChannelStrategy() {{
                                notificationChannelNames = new String[]{{
                                    add("voluptate"),
                                    add("cum"),
                                    add("perferendis"),
                                }};
                                renotifyInterval = "doloremque";
                            }}),
                            add(new NotificationChannelStrategy() {{
                                notificationChannelNames = new String[]{{
                                    add("ut"),
                                    add("maiores"),
                                }};
                                renotifyInterval = "dicta";
                            }}),
                            add(new NotificationChannelStrategy() {{
                                notificationChannelNames = new String[]{{
                                    add("dolore"),
                                    add("iusto"),
                                }};
                                renotifyInterval = "dicta";
                            }}),
                        }};
                        notificationRateLimit = new NotificationRateLimit() {{
                            period = "harum";
                        }};;
                    }};;
                    combiner = AlertPolicyCombinerEnum.AND;
                    conditions = new org.openapis.openapi.models.shared.Condition[]{{
                        add(new Condition() {{
                            conditionAbsent = new MetricAbsence() {{
                                aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "repudiandae";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_NONE;
                                        groupByFields = new String[]{{
                                            add("quidem"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_STDDEV;
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "excepturi";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_PERCENTILE50;
                                        groupByFields = new String[]{{
                                            add("praesentium"),
                                            add("rem"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_PERCENTILE05;
                                    }}),
                                }};
                                duration = "quasi";
                                filter = "repudiandae";
                                trigger = new Trigger() {{
                                    count = 575947;
                                    percent = 831.12;
                                }};
                            }};
                            conditionMatchedLog = new LogMatch() {{
                                filter = "itaque";
                                labelExtractors = new java.util.HashMap<String, String>() {{
                                    put("enim", "consequatur");
                                    put("est", "quibusdam");
                                }};
                            }};
                            conditionMonitoringQueryLanguage = new MonitoringQueryLanguageCondition() {{
                                duration = "explicabo";
                                evaluationMissingData = MonitoringQueryLanguageConditionEvaluationMissingDataEnum.EVALUATION_MISSING_DATA_ACTIVE;
                                query = "distinctio";
                                trigger = new Trigger() {{
                                    count = 841386;
                                    percent = 2894.06;
                                }};
                            }};
                            conditionThreshold = new MetricThreshold() {{
                                aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "qui";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_STDDEV;
                                        groupByFields = new String[]{{
                                            add("quos"),
                                            add("perferendis"),
                                            add("magni"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_PERCENTILE95;
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "ipsam";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_NONE;
                                        groupByFields = new String[]{{
                                            add("dolorum"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_STDDEV;
                                    }}),
                                }};
                                comparison = MetricThresholdComparisonEnum.COMPARISON_GT;
                                denominatorAggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "tempore";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_SUM;
                                        groupByFields = new String[]{{
                                            add("eum"),
                                            add("non"),
                                            add("eligendi"),
                                            add("sint"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_MEAN;
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "provident";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_PERCENTILE50;
                                        groupByFields = new String[]{{
                                            add("officia"),
                                            add("dolor"),
                                            add("debitis"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_PERCENT_CHANGE;
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "dolorum";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_COUNT;
                                        groupByFields = new String[]{{
                                            add("illum"),
                                            add("maiores"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_FRACTION_TRUE;
                                    }}),
                                }};
                                denominatorFilter = "dicta";
                                duration = "magnam";
                                evaluationMissingData = MetricThresholdEvaluationMissingDataEnum.EVALUATION_MISSING_DATA_NO_OP;
                                filter = "facere";
                                forecastOptions = new ForecastOptions() {{
                                    forecastHorizon = "ea";
                                }};
                                thresholdValue = 3965.06;
                                trigger = new Trigger() {{
                                    count = 675439;
                                    percent = 8811.04;
                                }};
                            }};
                            displayName = "non";
                            name = "Jon Tillman";
                        }}),
                        add(new Condition() {{
                            conditionAbsent = new MetricAbsence() {{
                                aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "nam";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_FRACTION_TRUE;
                                        groupByFields = new String[]{{
                                            add("deleniti"),
                                            add("sapiente"),
                                            add("amet"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_COUNT_FALSE;
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "nisi";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_STDDEV;
                                        groupByFields = new String[]{{
                                            add("omnis"),
                                            add("molestiae"),
                                            add("perferendis"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_COUNT;
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "magnam";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_PERCENTILE99;
                                        groupByFields = new String[]{{
                                            add("labore"),
                                            add("labore"),
                                            add("suscipit"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_COUNT_TRUE;
                                    }}),
                                }};
                                duration = "nobis";
                                filter = "eum";
                                trigger = new Trigger() {{
                                    count = 878453;
                                    percent = 1354.74;
                                }};
                            }};
                            conditionMatchedLog = new LogMatch() {{
                                filter = "architecto";
                                labelExtractors = new java.util.HashMap<String, String>() {{
                                    put("et", "excepturi");
                                    put("ullam", "provident");
                                }};
                            }};
                            conditionMonitoringQueryLanguage = new MonitoringQueryLanguageCondition() {{
                                duration = "quos";
                                evaluationMissingData = MonitoringQueryLanguageConditionEvaluationMissingDataEnum.EVALUATION_MISSING_DATA_ACTIVE;
                                query = "accusantium";
                                trigger = new Trigger() {{
                                    count = 653201;
                                    percent = 9689.62;
                                }};
                            }};
                            conditionThreshold = new MetricThreshold() {{
                                aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "ad";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_COUNT;
                                        groupByFields = new String[]{{
                                            add("necessitatibus"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_RATE;
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "nemo";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_MEAN;
                                        groupByFields = new String[]{{
                                            add("doloribus"),
                                            add("debitis"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_NEXT_OLDER;
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "maxime";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_COUNT_TRUE;
                                        groupByFields = new String[]{{
                                            add("in"),
                                            add("architecto"),
                                            add("architecto"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_PERCENTILE05;
                                    }}),
                                }};
                                comparison = MetricThresholdComparisonEnum.COMPARISON_GE;
                                denominatorAggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "nihil";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_PERCENTILE05;
                                        groupByFields = new String[]{{
                                            add("sed"),
                                            add("saepe"),
                                            add("pariatur"),
                                            add("accusantium"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_INTERPOLATE;
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "praesentium";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_COUNT_FALSE;
                                        groupByFields = new String[]{{
                                            add("sunt"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_PERCENTILE99;
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "illum";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_PERCENTILE50;
                                        groupByFields = new String[]{{
                                            add("ea"),
                                            add("excepturi"),
                                            add("odit"),
                                            add("ea"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_NONE;
                                    }}),
                                }};
                                denominatorFilter = "ab";
                                duration = "maiores";
                                evaluationMissingData = MetricThresholdEvaluationMissingDataEnum.EVALUATION_MISSING_DATA_ACTIVE;
                                filter = "ipsam";
                                forecastOptions = new ForecastOptions() {{
                                    forecastHorizon = "voluptate";
                                }};
                                thresholdValue = 4200.75;
                                trigger = new Trigger() {{
                                    count = 722056;
                                    percent = 505.88;
                                }};
                            }};
                            displayName = "pariatur";
                            name = "Camille Armstrong";
                        }}),
                        add(new Condition() {{
                            conditionAbsent = new MetricAbsence() {{
                                aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "cumque";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_STDDEV;
                                        groupByFields = new String[]{{
                                            add("libero"),
                                            add("nobis"),
                                            add("dolores"),
                                            add("quis"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_SUM;
                                    }}),
                                }};
                                duration = "dignissimos";
                                filter = "eaque";
                                trigger = new Trigger() {{
                                    count = 338985;
                                    percent = 1999.96;
                                }};
                            }};
                            conditionMatchedLog = new LogMatch() {{
                                filter = "eos";
                                labelExtractors = new java.util.HashMap<String, String>() {{
                                    put("dolores", "minus");
                                }};
                            }};
                            conditionMonitoringQueryLanguage = new MonitoringQueryLanguageCondition() {{
                                duration = "quam";
                                evaluationMissingData = MonitoringQueryLanguageConditionEvaluationMissingDataEnum.EVALUATION_MISSING_DATA_UNSPECIFIED;
                                query = "vero";
                                trigger = new Trigger() {{
                                    count = 345352;
                                    percent = 9441.2;
                                }};
                            }};
                            conditionThreshold = new MetricThreshold() {{
                                aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "omnis";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_FRACTION_TRUE;
                                        groupByFields = new String[]{{
                                            add("voluptatem"),
                                            add("porro"),
                                            add("consequuntur"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_SUM;
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "error";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_NONE;
                                        groupByFields = new String[]{{
                                            add("rerum"),
                                            add("adipisci"),
                                            add("asperiores"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_PERCENTILE05;
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "modi";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_COUNT_FALSE;
                                        groupByFields = new String[]{{
                                            add("deleniti"),
                                            add("pariatur"),
                                            add("provident"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_PERCENTILE99;
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "libero";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_PERCENTILE05;
                                        groupByFields = new String[]{{
                                            add("quos"),
                                            add("aliquid"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_NEXT_OLDER;
                                    }}),
                                }};
                                comparison = MetricThresholdComparisonEnum.COMPARISON_GT;
                                denominatorAggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "qui";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_MAX;
                                        groupByFields = new String[]{{
                                            add("excepturi"),
                                            add("cum"),
                                            add("voluptate"),
                                            add("dignissimos"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_PERCENT_CHANGE;
                                    }}),
                                }};
                                denominatorFilter = "amet";
                                duration = "dolorum";
                                evaluationMissingData = MetricThresholdEvaluationMissingDataEnum.EVALUATION_MISSING_DATA_INACTIVE;
                                filter = "veritatis";
                                forecastOptions = new ForecastOptions() {{
                                    forecastHorizon = "ipsa";
                                }};
                                thresholdValue = 564.18;
                                trigger = new Trigger() {{
                                    count = 434417;
                                    percent = 4878.38;
                                }};
                            }};
                            displayName = "quaerat";
                            name = "Rickey Wolf";
                        }}),
                        add(new Condition() {{
                            conditionAbsent = new MetricAbsence() {{
                                aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "atque";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_NONE;
                                        groupByFields = new String[]{{
                                            add("ab"),
                                            add("soluta"),
                                            add("dolorum"),
                                            add("iusto"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_COUNT;
                                    }}),
                                }};
                                duration = "dolorum";
                                filter = "deleniti";
                                trigger = new Trigger() {{
                                    count = 607045;
                                    percent = 8966.72;
                                }};
                            }};
                            conditionMatchedLog = new LogMatch() {{
                                filter = "distinctio";
                                labelExtractors = new java.util.HashMap<String, String>() {{
                                    put("nihil", "ipsum");
                                    put("voluptate", "id");
                                    put("saepe", "eius");
                                    put("aspernatur", "perferendis");
                                }};
                            }};
                            conditionMonitoringQueryLanguage = new MonitoringQueryLanguageCondition() {{
                                duration = "amet";
                                evaluationMissingData = MonitoringQueryLanguageConditionEvaluationMissingDataEnum.EVALUATION_MISSING_DATA_NO_OP;
                                query = "accusamus";
                                trigger = new Trigger() {{
                                    count = 320017;
                                    percent = 9044.25;
                                }};
                            }};
                            conditionThreshold = new MetricThreshold() {{
                                aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "deserunt";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_COUNT_FALSE;
                                        groupByFields = new String[]{{
                                            add("repellendus"),
                                            add("totam"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_COUNT_TRUE;
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "alias";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_PERCENTILE50;
                                        groupByFields = new String[]{{
                                            add("tempora"),
                                            add("vel"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_PERCENTILE95;
                                    }}),
                                }};
                                comparison = MetricThresholdComparisonEnum.COMPARISON_NE;
                                denominatorAggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "dolorum";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_PERCENTILE05;
                                        groupByFields = new String[]{{
                                            add("harum"),
                                            add("iusto"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_NEXT_OLDER;
                                    }}),
                                }};
                                denominatorFilter = "quisquam";
                                duration = "tenetur";
                                evaluationMissingData = MetricThresholdEvaluationMissingDataEnum.EVALUATION_MISSING_DATA_UNSPECIFIED;
                                filter = "tempore";
                                forecastOptions = new ForecastOptions() {{
                                    forecastHorizon = "accusamus";
                                }};
                                thresholdValue = 2539.41;
                                trigger = new Trigger() {{
                                    count = 313692;
                                    percent = 2133.12;
                                }};
                            }};
                            displayName = "sapiente";
                            name = "Christian Balistreri";
                        }}),
                    }};
                    creationRecord = new MutationRecord() {{
                        mutateTime = "sed";
                        mutatedBy = "vel";
                    }};;
                    displayName = "libero";
                    documentation = new Documentation() {{
                        content = "voluptas";
                        mimeType = "deserunt";
                    }};;
                    enabled = false;
                    mutationRecord = new MutationRecord() {{
                        mutateTime = "quam";
                        mutatedBy = "ipsum";
                    }};;
                    name = "Norma McGlynn";
                    notificationChannels = new String[]{{
                        add("dicta"),
                        add("laborum"),
                        add("totam"),
                    }};
                    userLabels = new java.util.HashMap<String, String>() {{
                        put("aspernatur", "dolores");
                        put("distinctio", "facilis");
                    }};
                    validity = new Status() {{
                        code = 396060;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("temporibus", "qui");
                                put("neque", "fugit");
                                put("magni", "odio");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("ullam", "nam");
                            }}),
                        }};
                        message = "hic";
                    }};;
                }};;
                accessToken = "voluptatem";
                alt = AltEnum.PROTO;
                callback = "soluta";
                fields = "nobis";
                key = "et";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "veritatis";
                uploadProtocol = "nobis";
            }};            

            MonitoringProjectsAlertPoliciesCreateResponse res = sdk.projects.monitoringProjectsAlertPoliciesCreate(req, new MonitoringProjectsAlertPoliciesCreateSecurity() {{
                option1 = new MonitoringProjectsAlertPoliciesCreateSecurityOption1("quos", "tempore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.alertPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringProjectsAlertPoliciesList

Lists the existing alerting policies for the workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsAlertPoliciesListRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsAlertPoliciesListResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsAlertPoliciesListSecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsAlertPoliciesListSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsAlertPoliciesListSecurityOption2;
import org.openapis.openapi.models.operations.MonitoringProjectsAlertPoliciesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsAlertPoliciesListRequest req = new MonitoringProjectsAlertPoliciesListRequest("cupiditate") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "dolore";
                fields = "labore";
                filter = "adipisci";
                key = "dolorum";
                oauthToken = "architecto";
                orderBy = "quae";
                pageSize = 16429L;
                pageToken = "quas";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "consequatur";
                uploadProtocol = "est";
            }};            

            MonitoringProjectsAlertPoliciesListResponse res = sdk.projects.monitoringProjectsAlertPoliciesList(req, new MonitoringProjectsAlertPoliciesListSecurity() {{
                option1 = new MonitoringProjectsAlertPoliciesListSecurityOption1("repellendus", "porro") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listAlertPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringProjectsCollectdTimeSeriesCreate

Cloud Monitoring Agent only: Creates a new time series.This method is only for use by the Cloud Monitoring Agent. Use projects.timeSeries.create instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsCollectdTimeSeriesCreateRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsCollectdTimeSeriesCreateResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsCollectdTimeSeriesCreateSecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsCollectdTimeSeriesCreateSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsCollectdTimeSeriesCreateSecurityOption2;
import org.openapis.openapi.models.operations.MonitoringProjectsCollectdTimeSeriesCreateSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BucketOptions;
import org.openapis.openapi.models.shared.CollectdPayload;
import org.openapis.openapi.models.shared.CollectdValue;
import org.openapis.openapi.models.shared.CollectdValueDataSourceTypeEnum;
import org.openapis.openapi.models.shared.CreateCollectdTimeSeriesRequest;
import org.openapis.openapi.models.shared.Distribution;
import org.openapis.openapi.models.shared.Exemplar;
import org.openapis.openapi.models.shared.Explicit;
import org.openapis.openapi.models.shared.Exponential;
import org.openapis.openapi.models.shared.Linear;
import org.openapis.openapi.models.shared.MonitoredResource;
import org.openapis.openapi.models.shared.Range;
import org.openapis.openapi.models.shared.TypedValue;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsCollectdTimeSeriesCreateRequest req = new MonitoringProjectsCollectdTimeSeriesCreateRequest("doloribus") {{
                dollarXgafv = XgafvEnum.ONE;
                createCollectdTimeSeriesRequest = new CreateCollectdTimeSeriesRequest() {{
                    collectdPayloads = new org.openapis.openapi.models.shared.CollectdPayload[]{{
                        add(new CollectdPayload() {{
                            endTime = "cupiditate";
                            metadata = new java.util.HashMap<String, org.openapis.openapi.models.shared.TypedValue>() {{
                                put("quae", new TypedValue() {{
                                    boolValue = false;
                                    distributionValue = new Distribution() {{
                                        bucketCounts = new String[]{{
                                            add("odio"),
                                            add("occaecati"),
                                            add("voluptatibus"),
                                        }};
                                        bucketOptions = new BucketOptions() {{
                                            explicitBuckets = new Explicit() {{
                                                bounds = new Double[]{{
                                                    add(8765.06),
                                                    add(6064.76),
                                                    add(3381.59),
                                                    add(2184.03),
                                                }};
                                            }};
                                            exponentialBuckets = new Exponential() {{
                                                growthFactor = 9615.71;
                                                numFiniteBuckets = 455169;
                                                scale = 2317.01;
                                            }};
                                            linearBuckets = new Linear() {{
                                                numFiniteBuckets = 878870;
                                                offset = 9493.19;
                                                width = 4922.68;
                                            }};
                                        }};
                                        count = "hic";
                                        exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                            add(new Exemplar() {{
                                                attachments = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("similique", "facilis");
                                                        put("vero", "ducimus");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("quibusdam", "illum");
                                                        put("sequi", "natus");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("aut", "voluptatibus");
                                                        put("exercitationem", "nulla");
                                                        put("fugit", "porro");
                                                        put("maiores", "doloribus");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("eligendi", "ducimus");
                                                        put("alias", "officia");
                                                    }}),
                                                }};
                                                timestamp = "tempora";
                                                value = 3685.84;
                                            }}),
                                            add(new Exemplar() {{
                                                attachments = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("vel", "possimus");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("ratione", "ex");
                                                        put("laudantium", "dicta");
                                                    }}),
                                                }};
                                                timestamp = "dolor";
                                                value = 9807;
                                            }}),
                                            add(new Exemplar() {{
                                                attachments = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("nulla", "excepturi");
                                                        put("voluptatibus", "nostrum");
                                                    }}),
                                                }};
                                                timestamp = "sapiente";
                                                value = 7888.73;
                                            }}),
                                        }};
                                        mean = 9065.56;
                                        range = new Range() {{
                                            max = 4113.72;
                                            min = 7740.48;
                                        }};
                                        sumOfSquaredDeviation = 3592.71;
                                    }};
                                    doubleValue = 3331.45;
                                    int64Value = "aliquid";
                                    stringValue = "inventore";
                                }});
                            }};
                            plugin = "magnam";
                            pluginInstance = "ea";
                            startTime = "quo";
                            type = "consectetur";
                            typeInstance = "recusandae";
                            values = new org.openapis.openapi.models.shared.CollectdValue[]{{
                                add(new CollectdValue() {{
                                    dataSourceName = "minima";
                                    dataSourceType = CollectdValueDataSourceTypeEnum.UNSPECIFIED_DATA_SOURCE_TYPE;
                                    value = new TypedValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("libero"),
                                                add("aut"),
                                                add("aut"),
                                                add("deleniti"),
                                            }};
                                            bucketOptions = new BucketOptions() {{
                                                explicitBuckets = new Explicit() {{
                                                    bounds = new Double[]{{
                                                        add(3045.82),
                                                        add(1469.46),
                                                        add(8828.6),
                                                        add(795.22),
                                                    }};
                                                }};
                                                exponentialBuckets = new Exponential() {{
                                                    growthFactor = 2506.22;
                                                    numFiniteBuckets = 89603;
                                                    scale = 6774.12;
                                                }};
                                                linearBuckets = new Linear() {{
                                                    numFiniteBuckets = 672048;
                                                    offset = 8104.24;
                                                    width = 2453.67;
                                                }};
                                            }};
                                            count = "eum";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("assumenda", "nulla");
                                                            put("voluptas", "libero");
                                                            put("quasi", "tempora");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("explicabo", "provident");
                                                            put("ipsa", "molestiae");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("odio", "eius");
                                                            put("esse", "esse");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("fuga", "reprehenderit");
                                                            put("quidem", "fugiat");
                                                            put("ut", "eum");
                                                        }}),
                                                    }};
                                                    timestamp = "suscipit";
                                                    value = 8268.71;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quisquam", "veritatis");
                                                            put("ipsa", "id");
                                                            put("quidem", "neque");
                                                        }}),
                                                    }};
                                                    timestamp = "quo";
                                                    value = 8472.76;
                                                }}),
                                            }};
                                            mean = 7774.08;
                                            range = new Range() {{
                                                max = 6813.59;
                                                min = 2594.22;
                                            }};
                                            sumOfSquaredDeviation = 1783.67;
                                        }};
                                        doubleValue = 3738.13;
                                        int64Value = "ab";
                                        stringValue = "cupiditate";
                                    }};
                                }}),
                            }};
                        }}),
                        add(new CollectdPayload() {{
                            endTime = "consequatur";
                            metadata = new java.util.HashMap<String, org.openapis.openapi.models.shared.TypedValue>() {{
                                put("debitis", new TypedValue() {{
                                    boolValue = false;
                                    distributionValue = new Distribution() {{
                                        bucketCounts = new String[]{{
                                            add("aspernatur"),
                                            add("sequi"),
                                        }};
                                        bucketOptions = new BucketOptions() {{
                                            explicitBuckets = new Explicit() {{
                                                bounds = new Double[]{{
                                                    add(4598.56),
                                                    add(9251.64),
                                                    add(446.12),
                                                    add(7151.79),
                                                }};
                                            }};
                                            exponentialBuckets = new Exponential() {{
                                                growthFactor = 7997.96;
                                                numFiniteBuckets = 490819;
                                                scale = 769.56;
                                            }};
                                            linearBuckets = new Linear() {{
                                                numFiniteBuckets = 469498;
                                                offset = 5188.35;
                                                width = 8827.1;
                                            }};
                                        }};
                                        count = "aliquam";
                                        exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                            add(new Exemplar() {{
                                                attachments = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("sapiente", "dolores");
                                                        put("deserunt", "molestiae");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("porro", "eum");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("praesentium", "consequuntur");
                                                        put("deleniti", "fugit");
                                                        put("fuga", "mollitia");
                                                    }}),
                                                }};
                                                timestamp = "incidunt";
                                                value = 5392.24;
                                            }}),
                                            add(new Exemplar() {{
                                                attachments = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("nisi", "fugit");
                                                        put("sapiente", "consequuntur");
                                                    }}),
                                                }};
                                                timestamp = "ratione";
                                                value = 1294.12;
                                            }}),
                                        }};
                                        mean = 9039.84;
                                        range = new Range() {{
                                            max = 5789.22;
                                            min = 5438.06;
                                        }};
                                        sumOfSquaredDeviation = 922.6;
                                    }};
                                    doubleValue = 4569.11;
                                    int64Value = "eveniet";
                                    stringValue = "accusamus";
                                }});
                                put("veritatis", new TypedValue() {{
                                    boolValue = false;
                                    distributionValue = new Distribution() {{
                                        bucketCounts = new String[]{{
                                            add("quod"),
                                            add("nam"),
                                        }};
                                        bucketOptions = new BucketOptions() {{
                                            explicitBuckets = new Explicit() {{
                                                bounds = new Double[]{{
                                                    add(3990.25),
                                                    add(934.59),
                                                    add(9040.45),
                                                    add(4263.06),
                                                }};
                                            }};
                                            exponentialBuckets = new Exponential() {{
                                                growthFactor = 6900.25;
                                                numFiniteBuckets = 473221;
                                                scale = 6996.22;
                                            }};
                                            linearBuckets = new Linear() {{
                                                numFiniteBuckets = 580197;
                                                offset = 3277.2;
                                                width = 7162.44;
                                            }};
                                        }};
                                        count = "eligendi";
                                        exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                            add(new Exemplar() {{
                                                attachments = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("adipisci", "cumque");
                                                        put("consequuntur", "consequatur");
                                                        put("minus", "quaerat");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("consectetur", "esse");
                                                        put("blanditiis", "provident");
                                                        put("a", "nulla");
                                                        put("quas", "esse");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("a", "error");
                                                    }}),
                                                }};
                                                timestamp = "sint";
                                                value = 8630.23;
                                            }}),
                                        }};
                                        mean = 8207.67;
                                        range = new Range() {{
                                            max = 1576.32;
                                            min = 9088.44;
                                        }};
                                        sumOfSquaredDeviation = 9924.3;
                                    }};
                                    doubleValue = 8155.24;
                                    int64Value = "veritatis";
                                    stringValue = "consequuntur";
                                }});
                            }};
                            plugin = "quasi";
                            pluginInstance = "similique";
                            startTime = "culpa";
                            type = "aliquid";
                            typeInstance = "tenetur";
                            values = new org.openapis.openapi.models.shared.CollectdValue[]{{
                                add(new CollectdValue() {{
                                    dataSourceName = "earum";
                                    dataSourceType = CollectdValueDataSourceTypeEnum.COUNTER;
                                    value = new TypedValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("eius"),
                                                add("libero"),
                                            }};
                                            bucketOptions = new BucketOptions() {{
                                                explicitBuckets = new Explicit() {{
                                                    bounds = new Double[]{{
                                                        add(7422.38),
                                                        add(333.04),
                                                        add(3069.86),
                                                        add(9589.83),
                                                    }};
                                                }};
                                                exponentialBuckets = new Exponential() {{
                                                    growthFactor = 1197.71;
                                                    numFiniteBuckets = 355369;
                                                    scale = 4438.79;
                                                }};
                                                linearBuckets = new Linear() {{
                                                    numFiniteBuckets = 356707;
                                                    offset = 3917.74;
                                                    width = 163.28;
                                                }};
                                            }};
                                            count = "voluptatum";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("deleniti", "itaque");
                                                            put("dolorum", "architecto");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("tenetur", "quasi");
                                                            put("at", "et");
                                                            put("voluptate", "ipsa");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("veritatis", "consectetur");
                                                            put("adipisci", "iste");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("accusantium", "rem");
                                                            put("aut", "laudantium");
                                                            put("eum", "mollitia");
                                                            put("ab", "corrupti");
                                                        }}),
                                                    }};
                                                    timestamp = "non";
                                                    value = 324.65;
                                                }}),
                                            }};
                                            mean = 2211.61;
                                            range = new Range() {{
                                                max = 5801.52;
                                                min = 2531.91;
                                            }};
                                            sumOfSquaredDeviation = 7710.89;
                                        }};
                                        doubleValue = 1310.55;
                                        int64Value = "voluptas";
                                        stringValue = "aut";
                                    }};
                                }}),
                            }};
                        }}),
                        add(new CollectdPayload() {{
                            endTime = "dignissimos";
                            metadata = new java.util.HashMap<String, org.openapis.openapi.models.shared.TypedValue>() {{
                                put("maiores", new TypedValue() {{
                                    boolValue = false;
                                    distributionValue = new Distribution() {{
                                        bucketCounts = new String[]{{
                                            add("velit"),
                                            add("voluptatibus"),
                                            add("voluptas"),
                                        }};
                                        bucketOptions = new BucketOptions() {{
                                            explicitBuckets = new Explicit() {{
                                                bounds = new Double[]{{
                                                    add(456.59),
                                                    add(4090.54),
                                                    add(3100.67),
                                                    add(1629.54),
                                                }};
                                            }};
                                            exponentialBuckets = new Exponential() {{
                                                growthFactor = 8315.2;
                                                numFiniteBuckets = 638762;
                                                scale = 8070.23;
                                            }};
                                            linearBuckets = new Linear() {{
                                                numFiniteBuckets = 490305;
                                                offset = 6400.24;
                                                width = 9894.1;
                                            }};
                                        }};
                                        count = "nemo";
                                        exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                            add(new Exemplar() {{
                                                attachments = new java.util.HashMap<String, Object>[]{{
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("quod", "labore");
                                                        put("ab", "adipisci");
                                                        put("fuga", "id");
                                                        put("suscipit", "velit");
                                                    }}),
                                                    add(new java.util.HashMap<String, Object>() {{
                                                        put("est", "recusandae");
                                                        put("totam", "fugiat");
                                                        put("vel", "ducimus");
                                                    }}),
                                                }};
                                                timestamp = "quos";
                                                value = 4278.34;
                                            }}),
                                        }};
                                        mean = 2870.51;
                                        range = new Range() {{
                                            max = 8225.6;
                                            min = 7065.75;
                                        }};
                                        sumOfSquaredDeviation = 7382.27;
                                    }};
                                    doubleValue = 4148.57;
                                    int64Value = "in";
                                    stringValue = "corporis";
                                }});
                            }};
                            plugin = "reiciendis";
                            pluginInstance = "assumenda";
                            startTime = "nemo";
                            type = "recusandae";
                            typeInstance = "aliquid";
                            values = new org.openapis.openapi.models.shared.CollectdValue[]{{
                                add(new CollectdValue() {{
                                    dataSourceName = "cum";
                                    dataSourceType = CollectdValueDataSourceTypeEnum.GAUGE;
                                    value = new TypedValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("exercitationem"),
                                                add("earum"),
                                            }};
                                            bucketOptions = new BucketOptions() {{
                                                explicitBuckets = new Explicit() {{
                                                    bounds = new Double[]{{
                                                        add(2572.33),
                                                        add(9854.92),
                                                        add(3817.6),
                                                        add(9689.72),
                                                    }};
                                                }};
                                                exponentialBuckets = new Exponential() {{
                                                    growthFactor = 6971.42;
                                                    numFiniteBuckets = 904949;
                                                    scale = 8970.71;
                                                }};
                                                linearBuckets = new Linear() {{
                                                    numFiniteBuckets = 296556;
                                                    offset = 1210.59;
                                                    width = 9920.12;
                                                }};
                                            }};
                                            count = "adipisci";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("dignissimos", "a");
                                                        }}),
                                                    }};
                                                    timestamp = "debitis";
                                                    value = 2334.2;
                                                }}),
                                            }};
                                            mean = 3581.07;
                                            range = new Range() {{
                                                max = 6897.68;
                                                min = 3852.37;
                                            }};
                                            sumOfSquaredDeviation = 583.56;
                                        }};
                                        doubleValue = 9167.27;
                                        int64Value = "libero";
                                        stringValue = "vitae";
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                    collectdVersion = "accusamus";
                    resource = new MonitoredResource() {{
                        labels = new java.util.HashMap<String, String>() {{
                            put("tempora", "aspernatur");
                            put("voluptas", "voluptas");
                            put("voluptas", "minima");
                        }};
                        type = "nobis";
                    }};;
                }};;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "minus";
                fields = "dolores";
                key = "blanditiis";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "aliquam";
                uploadProtocol = "officiis";
            }};            

            MonitoringProjectsCollectdTimeSeriesCreateResponse res = sdk.projects.monitoringProjectsCollectdTimeSeriesCreate(req, new MonitoringProjectsCollectdTimeSeriesCreateSecurity() {{
                option1 = new MonitoringProjectsCollectdTimeSeriesCreateSecurityOption1("temporibus", "ullam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.createCollectdTimeSeriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringProjectsGroupsCreate

Creates a new group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsGroupsCreateRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsGroupsCreateResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsGroupsCreateSecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsGroupsCreateSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsGroupsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Group;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsGroupsCreateRequest req = new MonitoringProjectsGroupsCreateRequest("adipisci") {{
                dollarXgafv = XgafvEnum.TWO;
                group = new Group() {{
                    displayName = "blanditiis";
                    filter = "quas";
                    isCluster = false;
                    name = "Danny Nader";
                    parentName = "totam";
                }};;
                accessToken = "hic";
                alt = AltEnum.MEDIA;
                callback = "nobis";
                fields = "sit";
                key = "rerum";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "explicabo";
                uploadProtocol = "asperiores";
                validateOnly = false;
            }};            

            MonitoringProjectsGroupsCreateResponse res = sdk.projects.monitoringProjectsGroupsCreate(req, new MonitoringProjectsGroupsCreateSecurity() {{
                option1 = new MonitoringProjectsGroupsCreateSecurityOption1("facilis", "voluptate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.group != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringProjectsGroupsList

Lists the existing groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsGroupsListRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsGroupsListResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsGroupsListSecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsGroupsListSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsGroupsListSecurityOption2;
import org.openapis.openapi.models.operations.MonitoringProjectsGroupsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsGroupsListRequest req = new MonitoringProjectsGroupsListRequest("expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iste";
                alt = AltEnum.JSON;
                ancestorsOfGroup = "laborum";
                callback = "sed";
                childrenOfGroup = "in";
                descendantsOfGroup = "commodi";
                fields = "quidem";
                key = "explicabo";
                oauthToken = "voluptas";
                pageSize = 604118L;
                pageToken = "architecto";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "sapiente";
                uploadProtocol = "debitis";
            }};            

            MonitoringProjectsGroupsListResponse res = sdk.projects.monitoringProjectsGroupsList(req, new MonitoringProjectsGroupsListSecurity() {{
                option1 = new MonitoringProjectsGroupsListSecurityOption1("illo", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringProjectsGroupsMembersList

Lists the monitored resources that are members of a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsGroupsMembersListRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsGroupsMembersListResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsGroupsMembersListSecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsGroupsMembersListSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsGroupsMembersListSecurityOption2;
import org.openapis.openapi.models.operations.MonitoringProjectsGroupsMembersListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsGroupsMembersListRequest req = new MonitoringProjectsGroupsMembersListRequest("perferendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maiores";
                alt = AltEnum.JSON;
                callback = "sed";
                fields = "provident";
                filter = "eius";
                intervalEndTime = "necessitatibus";
                intervalStartTime = "ipsum";
                key = "ea";
                oauthToken = "occaecati";
                pageSize = 552078L;
                pageToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "tempora";
                uploadProtocol = "voluptate";
            }};            

            MonitoringProjectsGroupsMembersListResponse res = sdk.projects.monitoringProjectsGroupsMembersList(req, new MonitoringProjectsGroupsMembersListSecurity() {{
                option1 = new MonitoringProjectsGroupsMembersListSecurityOption1("reiciendis", "ex") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listGroupMembersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringProjectsGroupsUpdate

Updates an existing group. You can change any group attributes except name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsGroupsUpdateRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsGroupsUpdateResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsGroupsUpdateSecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsGroupsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsGroupsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Group;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsGroupsUpdateRequest req = new MonitoringProjectsGroupsUpdateRequest("sit") {{
                dollarXgafv = XgafvEnum.ONE;
                group = new Group() {{
                    displayName = "officiis";
                    filter = "praesentium";
                    isCluster = false;
                    name = "Alex Gottlieb";
                    parentName = "rem";
                }};;
                accessToken = "sit";
                alt = AltEnum.PROTO;
                callback = "error";
                fields = "veniam";
                key = "minima";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "nulla";
                uploadProtocol = "magni";
                validateOnly = false;
            }};            

            MonitoringProjectsGroupsUpdateResponse res = sdk.projects.monitoringProjectsGroupsUpdate(req, new MonitoringProjectsGroupsUpdateSecurity() {{
                option1 = new MonitoringProjectsGroupsUpdateSecurityOption1("aperiam", "saepe") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.group != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringProjectsMetricDescriptorsCreate

Creates a new metric descriptor. The creation is executed asynchronously. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics). The metric descriptor is updated if it already exists, except that metric labels are never removed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsMetricDescriptorsCreateRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsMetricDescriptorsCreateResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsMetricDescriptorsCreateSecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsMetricDescriptorsCreateSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsMetricDescriptorsCreateSecurityOption2;
import org.openapis.openapi.models.operations.MonitoringProjectsMetricDescriptorsCreateSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LabelDescriptor;
import org.openapis.openapi.models.shared.LabelDescriptorValueTypeEnum;
import org.openapis.openapi.models.shared.MetricDescriptor;
import org.openapis.openapi.models.shared.MetricDescriptorLaunchStageEnum;
import org.openapis.openapi.models.shared.MetricDescriptorMetadata;
import org.openapis.openapi.models.shared.MetricDescriptorMetadataLaunchStageEnum;
import org.openapis.openapi.models.shared.MetricDescriptorMetricKindEnum;
import org.openapis.openapi.models.shared.MetricDescriptorValueTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsMetricDescriptorsCreateRequest req = new MonitoringProjectsMetricDescriptorsCreateRequest("numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                metricDescriptor = new MetricDescriptor() {{
                    description = "in";
                    displayName = "officiis";
                    labels = new org.openapis.openapi.models.shared.LabelDescriptor[]{{
                        add(new LabelDescriptor() {{
                            description = "laudantium";
                            key = "exercitationem";
                            valueType = LabelDescriptorValueTypeEnum.BOOL;
                        }}),
                    }};
                    launchStage = MetricDescriptorLaunchStageEnum.BETA;
                    metadata = new MetricDescriptorMetadata() {{
                        ingestDelay = "laboriosam";
                        launchStage = MetricDescriptorMetadataLaunchStageEnum.BETA;
                        samplePeriod = "voluptatum";
                    }};;
                    metricKind = MetricDescriptorMetricKindEnum.DELTA;
                    monitoredResourceTypes = new String[]{{
                        add("expedita"),
                        add("debitis"),
                        add("neque"),
                        add("dolorum"),
                    }};
                    name = "Brandi Padberg";
                    type = "tempora";
                    unit = "atque";
                    valueType = MetricDescriptorValueTypeEnum.BOOL;
                }};;
                accessToken = "ut";
                alt = AltEnum.PROTO;
                callback = "voluptatem";
                fields = "culpa";
                key = "expedita";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "esse";
                uploadProtocol = "ipsam";
            }};            

            MonitoringProjectsMetricDescriptorsCreateResponse res = sdk.projects.monitoringProjectsMetricDescriptorsCreate(req, new MonitoringProjectsMetricDescriptorsCreateSecurity() {{
                option1 = new MonitoringProjectsMetricDescriptorsCreateSecurityOption1("sit", "voluptatum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.metricDescriptor != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringProjectsMetricDescriptorsList

Lists metric descriptors that match a filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsMetricDescriptorsListRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsMetricDescriptorsListResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsMetricDescriptorsListSecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsMetricDescriptorsListSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsMetricDescriptorsListSecurityOption2;
import org.openapis.openapi.models.operations.MonitoringProjectsMetricDescriptorsListSecurityOption3;
import org.openapis.openapi.models.operations.MonitoringProjectsMetricDescriptorsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsMetricDescriptorsListRequest req = new MonitoringProjectsMetricDescriptorsListRequest("quas") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "blanditiis";
                fields = "ex";
                filter = "sed";
                key = "sit";
                oauthToken = "vel";
                pageSize = 342611L;
                pageToken = "saepe";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "consequatur";
                uploadProtocol = "incidunt";
            }};            

            MonitoringProjectsMetricDescriptorsListResponse res = sdk.projects.monitoringProjectsMetricDescriptorsList(req, new MonitoringProjectsMetricDescriptorsListSecurity() {{
                option1 = new MonitoringProjectsMetricDescriptorsListSecurityOption1("reiciendis", "dolorem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listMetricDescriptorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringProjectsMonitoredResourceDescriptorsList

Lists monitored resource descriptors that match a filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsMonitoredResourceDescriptorsListRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsMonitoredResourceDescriptorsListResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsMonitoredResourceDescriptorsListSecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption2;
import org.openapis.openapi.models.operations.MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption3;
import org.openapis.openapi.models.operations.MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsMonitoredResourceDescriptorsListRequest req = new MonitoringProjectsMonitoredResourceDescriptorsListRequest("harum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "architecto";
                alt = AltEnum.MEDIA;
                callback = "labore";
                fields = "quidem";
                filter = "atque";
                key = "laborum";
                oauthToken = "nam";
                pageSize = 948861L;
                pageToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "amet";
                uploadProtocol = "deserunt";
            }};            

            MonitoringProjectsMonitoredResourceDescriptorsListResponse res = sdk.projects.monitoringProjectsMonitoredResourceDescriptorsList(req, new MonitoringProjectsMonitoredResourceDescriptorsListSecurity() {{
                option1 = new MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption1("voluptate", "unde") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listMonitoredResourceDescriptorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringProjectsNotificationChannelDescriptorsList

Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelDescriptorsListRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelDescriptorsListResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelDescriptorsListSecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelDescriptorsListSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelDescriptorsListSecurityOption2;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelDescriptorsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsNotificationChannelDescriptorsListRequest req = new MonitoringProjectsNotificationChannelDescriptorsListRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "voluptates";
                fields = "perferendis";
                key = "est";
                oauthToken = "quidem";
                pageSize = 440666L;
                pageToken = "facere";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "praesentium";
                uploadProtocol = "mollitia";
            }};            

            MonitoringProjectsNotificationChannelDescriptorsListResponse res = sdk.projects.monitoringProjectsNotificationChannelDescriptorsList(req, new MonitoringProjectsNotificationChannelDescriptorsListSecurity() {{
                option1 = new MonitoringProjectsNotificationChannelDescriptorsListSecurityOption1("veniam", "voluptatem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listNotificationChannelDescriptorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringProjectsNotificationChannelsCreate

Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsCreateRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsCreateResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsCreateSecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsCreateSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MutationRecord;
import org.openapis.openapi.models.shared.NotificationChannel;
import org.openapis.openapi.models.shared.NotificationChannelVerificationStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsNotificationChannelsCreateRequest req = new MonitoringProjectsNotificationChannelsCreateRequest("quisquam") {{
                dollarXgafv = XgafvEnum.TWO;
                notificationChannel = new NotificationChannel() {{
                    creationRecord = new MutationRecord() {{
                        mutateTime = "quasi";
                        mutatedBy = "atque";
                    }};;
                    description = "reprehenderit";
                    displayName = "asperiores";
                    enabled = false;
                    labels = new java.util.HashMap<String, String>() {{
                        put("suscipit", "quidem");
                        put("maxime", "et");
                        put("esse", "amet");
                    }};
                    mutationRecords = new org.openapis.openapi.models.shared.MutationRecord[]{{
                        add(new MutationRecord() {{
                            mutateTime = "ea";
                            mutatedBy = "atque";
                        }}),
                        add(new MutationRecord() {{
                            mutateTime = "error";
                            mutatedBy = "officiis";
                        }}),
                        add(new MutationRecord() {{
                            mutateTime = "officiis";
                            mutatedBy = "accusamus";
                        }}),
                        add(new MutationRecord() {{
                            mutateTime = "natus";
                            mutatedBy = "minima";
                        }}),
                    }};
                    name = "Tara Wuckert";
                    type = "error";
                    userLabels = new java.util.HashMap<String, String>() {{
                        put("suscipit", "repudiandae");
                        put("atque", "atque");
                        put("sunt", "recusandae");
                    }};
                    verificationStatus = NotificationChannelVerificationStatusEnum.VERIFIED;
                }};;
                accessToken = "repellendus";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "doloremque";
                key = "repudiandae";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "beatae";
                uploadProtocol = "dolores";
            }};            

            MonitoringProjectsNotificationChannelsCreateResponse res = sdk.projects.monitoringProjectsNotificationChannelsCreate(req, new MonitoringProjectsNotificationChannelsCreateSecurity() {{
                option1 = new MonitoringProjectsNotificationChannelsCreateSecurityOption1("enim", "laboriosam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.notificationChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringProjectsNotificationChannelsGetVerificationCode

Requests a verification code for an already verified channel that can then be used in a call to VerifyNotificationChannel() on a different channel with an equivalent identity in the same or in a different project. This makes it possible to copy a channel between projects without requiring manual reverification of the channel. If the channel is not in the verified state, this method will fail (in other words, this may only be used if the SendNotificationChannelVerificationCode and VerifyNotificationChannel paths have already been used to put the given channel into the verified state).There is no guarantee that the verification codes returned by this method will be of a similar structure or form as the ones that are delivered to the channel via SendNotificationChannelVerificationCode; while VerifyNotificationChannel() will recognize both the codes delivered via SendNotificationChannelVerificationCode() and returned from GetNotificationChannelVerificationCode(), it is typically the case that the verification codes delivered via SendNotificationChannelVerificationCode() will be shorter and also have a shorter expiration (e.g. codes such as "G-123456") whereas GetVerificationCode() will typically return a much longer, websafe base 64 encoded string that has a longer expiration time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsGetVerificationCodeRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsGetVerificationCodeResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetNotificationChannelVerificationCodeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsNotificationChannelsGetVerificationCodeRequest req = new MonitoringProjectsNotificationChannelsGetVerificationCodeRequest("velit") {{
                dollarXgafv = XgafvEnum.TWO;
                getNotificationChannelVerificationCodeRequest = new GetNotificationChannelVerificationCodeRequest() {{
                    expireTime = "molestias";
                }};;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "consequuntur";
                fields = "occaecati";
                key = "officiis";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "adipisci";
                uploadProtocol = "eveniet";
            }};            

            MonitoringProjectsNotificationChannelsGetVerificationCodeResponse res = sdk.projects.monitoringProjectsNotificationChannelsGetVerificationCode(req, new MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity() {{
                option1 = new MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption1("occaecati", "consequuntur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.getNotificationChannelVerificationCodeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringProjectsNotificationChannelsList

Lists the notification channels that have been created for the project. To list the types of notification channels that are supported, use the ListNotificationChannelDescriptors method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsListRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsListResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsListSecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsListSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsListSecurityOption2;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsNotificationChannelsListRequest req = new MonitoringProjectsNotificationChannelsListRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quis";
                alt = AltEnum.MEDIA;
                callback = "error";
                fields = "illo";
                filter = "corporis";
                key = "quidem";
                oauthToken = "eveniet";
                orderBy = "non";
                pageSize = 878493L;
                pageToken = "doloremque";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "ipsa";
                uploadProtocol = "totam";
            }};            

            MonitoringProjectsNotificationChannelsListResponse res = sdk.projects.monitoringProjectsNotificationChannelsList(req, new MonitoringProjectsNotificationChannelsListSecurity() {{
                option1 = new MonitoringProjectsNotificationChannelsListSecurityOption1("quae", "molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listNotificationChannelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringProjectsNotificationChannelsSendVerificationCode

Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsSendVerificationCodeRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsSendVerificationCodeResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsSendVerificationCodeSecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsSendVerificationCodeSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsSendVerificationCodeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsNotificationChannelsSendVerificationCodeRequest req = new MonitoringProjectsNotificationChannelsSendVerificationCodeRequest("eveniet") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("iure", "necessitatibus");
                    put("ratione", "laborum");
                    put("distinctio", "voluptatum");
                }};
                accessToken = "rem";
                alt = AltEnum.JSON;
                callback = "ad";
                fields = "repellat";
                key = "alias";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                uploadType = "nihil";
                uploadProtocol = "mollitia";
            }};            

            MonitoringProjectsNotificationChannelsSendVerificationCodeResponse res = sdk.projects.monitoringProjectsNotificationChannelsSendVerificationCode(req, new MonitoringProjectsNotificationChannelsSendVerificationCodeSecurity() {{
                option1 = new MonitoringProjectsNotificationChannelsSendVerificationCodeSecurityOption1("voluptas", "alias") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringProjectsNotificationChannelsVerify

Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsVerifyRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsVerifyResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsVerifySecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsVerifySecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsNotificationChannelsVerifySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.VerifyNotificationChannelRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsNotificationChannelsVerifyRequest req = new MonitoringProjectsNotificationChannelsVerifyRequest("maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                verifyNotificationChannelRequest = new VerifyNotificationChannelRequest() {{
                    code = "dolores";
                }};;
                accessToken = "id";
                alt = AltEnum.JSON;
                callback = "dolore";
                fields = "dolorum";
                key = "nesciunt";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "omnis";
                uploadProtocol = "quaerat";
            }};            

            MonitoringProjectsNotificationChannelsVerifyResponse res = sdk.projects.monitoringProjectsNotificationChannelsVerify(req, new MonitoringProjectsNotificationChannelsVerifySecurity() {{
                option1 = new MonitoringProjectsNotificationChannelsVerifySecurityOption1("molestiae", "ex") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.notificationChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringProjectsSnoozesCreate

Creates a Snooze that will prevent alerts, which match the provided criteria, from being opened. The Snooze applies for a specific time interval.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsSnoozesCreateRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsSnoozesCreateResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsSnoozesCreateSecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsSnoozesCreateSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsSnoozesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Criteria;
import org.openapis.openapi.models.shared.Snooze;
import org.openapis.openapi.models.shared.TimeInterval;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsSnoozesCreateRequest req = new MonitoringProjectsSnoozesCreateRequest("ut") {{
                dollarXgafv = XgafvEnum.TWO;
                snooze = new Snooze() {{
                    criteria = new Criteria() {{
                        policies = new String[]{{
                            add("debitis"),
                        }};
                    }};;
                    displayName = "laudantium";
                    interval = new TimeInterval() {{
                        endTime = "eum";
                        startTime = "nemo";
                    }};;
                    name = "Cory Medhurst";
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.MEDIA;
                callback = "aspernatur";
                fields = "ullam";
                key = "quasi";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "mollitia";
                uploadProtocol = "provident";
            }};            

            MonitoringProjectsSnoozesCreateResponse res = sdk.projects.monitoringProjectsSnoozesCreate(req, new MonitoringProjectsSnoozesCreateSecurity() {{
                option1 = new MonitoringProjectsSnoozesCreateSecurityOption1("possimus", "animi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.snooze != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringProjectsSnoozesList

Lists the Snoozes associated with a project. Can optionally pass in filter, which specifies predicates to match Snoozes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsSnoozesListRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsSnoozesListResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsSnoozesListSecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsSnoozesListSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsSnoozesListSecurityOption2;
import org.openapis.openapi.models.operations.MonitoringProjectsSnoozesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsSnoozesListRequest req = new MonitoringProjectsSnoozesListRequest("ex") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusantium";
                alt = AltEnum.PROTO;
                callback = "doloribus";
                fields = "ullam";
                filter = "in";
                key = "nam";
                oauthToken = "earum";
                pageSize = 637583L;
                pageToken = "laborum";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "modi";
                uploadProtocol = "voluptatibus";
            }};            

            MonitoringProjectsSnoozesListResponse res = sdk.projects.monitoringProjectsSnoozesList(req, new MonitoringProjectsSnoozesListSecurity() {{
                option1 = new MonitoringProjectsSnoozesListSecurityOption1("molestias", "officiis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listSnoozesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringProjectsTimeSeriesCreate

Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesCreateRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesCreateResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesCreateSecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesCreateSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesCreateSecurityOption2;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesCreateSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BucketOptions;
import org.openapis.openapi.models.shared.CreateTimeSeriesRequest;
import org.openapis.openapi.models.shared.Distribution;
import org.openapis.openapi.models.shared.Exemplar;
import org.openapis.openapi.models.shared.Explicit;
import org.openapis.openapi.models.shared.Exponential;
import org.openapis.openapi.models.shared.Linear;
import org.openapis.openapi.models.shared.Metric;
import org.openapis.openapi.models.shared.MonitoredResource;
import org.openapis.openapi.models.shared.MonitoredResourceMetadata;
import org.openapis.openapi.models.shared.Point;
import org.openapis.openapi.models.shared.Range;
import org.openapis.openapi.models.shared.TimeInterval;
import org.openapis.openapi.models.shared.TimeSeries;
import org.openapis.openapi.models.shared.TimeSeriesMetricKindEnum;
import org.openapis.openapi.models.shared.TimeSeriesValueTypeEnum;
import org.openapis.openapi.models.shared.TypedValue;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsTimeSeriesCreateRequest req = new MonitoringProjectsTimeSeriesCreateRequest("sapiente") {{
                dollarXgafv = XgafvEnum.TWO;
                createTimeSeriesRequest = new CreateTimeSeriesRequest() {{
                    timeSeries = new org.openapis.openapi.models.shared.TimeSeries[]{{
                        add(new TimeSeries() {{
                            metadata = new MonitoredResourceMetadata() {{
                                systemLabels = new java.util.HashMap<String, Object>() {{
                                    put("tempora", "quis");
                                    put("inventore", "fugit");
                                    put("cumque", "quae");
                                }};
                                userLabels = new java.util.HashMap<String, String>() {{
                                    put("velit", "aspernatur");
                                }};
                            }};
                            metric = new Metric() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("eius", "rem");
                                    put("at", "impedit");
                                }};
                                type = "eos";
                            }};
                            metricKind = TimeSeriesMetricKindEnum.CUMULATIVE;
                            points = new org.openapis.openapi.models.shared.Point[]{{
                                add(new Point() {{
                                    interval = new TimeInterval() {{
                                        endTime = "dicta";
                                        startTime = "minima";
                                    }};
                                    value = new TypedValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("cupiditate"),
                                            }};
                                            bucketOptions = new BucketOptions() {{
                                                explicitBuckets = new Explicit() {{
                                                    bounds = new Double[]{{
                                                        add(9364.69),
                                                        add(7453.98),
                                                        add(9407.82),
                                                    }};
                                                }};
                                                exponentialBuckets = new Exponential() {{
                                                    growthFactor = 8481.51;
                                                    numFiniteBuckets = 52508;
                                                    scale = 9358.33;
                                                }};
                                                linearBuckets = new Linear() {{
                                                    numFiniteBuckets = 596211;
                                                    offset = 9834.27;
                                                    width = 8918.01;
                                                }};
                                            }};
                                            count = "aliquid";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("fugit", "cumque");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ratione", "animi");
                                                            put("necessitatibus", "nulla");
                                                            put("consequatur", "quasi");
                                                        }}),
                                                    }};
                                                    timestamp = "et";
                                                    value = 4977.77;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("suscipit", "adipisci");
                                                            put("quasi", "magni");
                                                            put("doloribus", "nulla");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ipsa", "tempora");
                                                            put("nihil", "molestiae");
                                                            put("dicta", "iusto");
                                                            put("esse", "praesentium");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("reiciendis", "vel");
                                                            put("architecto", "fugiat");
                                                            put("doloremque", "dicta");
                                                            put("odio", "tempora");
                                                        }}),
                                                    }};
                                                    timestamp = "esse";
                                                    value = 4037.93;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ipsa", "laborum");
                                                            put("sunt", "nostrum");
                                                        }}),
                                                    }};
                                                    timestamp = "fugiat";
                                                    value = 7137.67;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("suscipit", "aliquid");
                                                            put("perferendis", "eum");
                                                            put("voluptas", "iste");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ab", "error");
                                                            put("possimus", "voluptates");
                                                            put("mollitia", "laborum");
                                                        }}),
                                                    }};
                                                    timestamp = "libero";
                                                    value = 3240.83;
                                                }}),
                                            }};
                                            mean = 5369.23;
                                            range = new Range() {{
                                                max = 3162.2;
                                                min = 1104.77;
                                            }};
                                            sumOfSquaredDeviation = 8333.16;
                                        }};
                                        doubleValue = 4050.36;
                                        int64Value = "quo";
                                        stringValue = "ex";
                                    }};
                                }}),
                                add(new Point() {{
                                    interval = new TimeInterval() {{
                                        endTime = "ut";
                                        startTime = "ad";
                                    }};
                                    value = new TypedValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("voluptatem"),
                                                add("molestias"),
                                                add("cum"),
                                            }};
                                            bucketOptions = new BucketOptions() {{
                                                explicitBuckets = new Explicit() {{
                                                    bounds = new Double[]{{
                                                        add(1097.84),
                                                        add(5308.6),
                                                    }};
                                                }};
                                                exponentialBuckets = new Exponential() {{
                                                    growthFactor = 6063.08;
                                                    numFiniteBuckets = 85233;
                                                    scale = 7032.18;
                                                }};
                                                linearBuckets = new Linear() {{
                                                    numFiniteBuckets = 665678;
                                                    offset = 6347.86;
                                                    width = 296.34;
                                                }};
                                            }};
                                            count = "sapiente";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("pariatur", "debitis");
                                                            put("voluptatem", "alias");
                                                            put("deleniti", "earum");
                                                        }}),
                                                    }};
                                                    timestamp = "ex";
                                                    value = 9583.08;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("nemo", "asperiores");
                                                            put("ratione", "ullam");
                                                            put("perferendis", "illum");
                                                            put("totam", "impedit");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("nam", "ipsam");
                                                            put("culpa", "dolor");
                                                            put("aliquam", "inventore");
                                                            put("deleniti", "veritatis");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("dolor", "consequatur");
                                                            put("architecto", "sit");
                                                        }}),
                                                    }};
                                                    timestamp = "modi";
                                                    value = 1442.86;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quae", "dolor");
                                                            put("fugiat", "ipsam");
                                                            put("consequuntur", "ipsa");
                                                        }}),
                                                    }};
                                                    timestamp = "quas";
                                                    value = 9111.98;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("esse", "necessitatibus");
                                                            put("sed", "veniam");
                                                            put("nesciunt", "expedita");
                                                            put("eum", "vel");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("magnam", "exercitationem");
                                                            put("ab", "porro");
                                                            put("autem", "nobis");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("recusandae", "consequuntur");
                                                            put("voluptatem", "exercitationem");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quasi", "nisi");
                                                            put("at", "vero");
                                                            put("est", "harum");
                                                            put("sequi", "doloribus");
                                                        }}),
                                                    }};
                                                    timestamp = "repudiandae";
                                                    value = 7592.83;
                                                }}),
                                            }};
                                            mean = 5796.81;
                                            range = new Range() {{
                                                max = 3645.44;
                                                min = 4558.98;
                                            }};
                                            sumOfSquaredDeviation = 5010.63;
                                        }};
                                        doubleValue = 6423.52;
                                        int64Value = "voluptas";
                                        stringValue = "numquam";
                                    }};
                                }}),
                            }};
                            resource = new MonitoredResource() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("quos", "eius");
                                    put("aspernatur", "ducimus");
                                }};
                                type = "nesciunt";
                            }};
                            unit = "fuga";
                            valueType = TimeSeriesValueTypeEnum.DOUBLE;
                        }}),
                    }};
                }};;
                accessToken = "incidunt";
                alt = AltEnum.JSON;
                callback = "rem";
                fields = "fugiat";
                key = "dicta";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "consectetur";
                uploadProtocol = "aperiam";
            }};            

            MonitoringProjectsTimeSeriesCreateResponse res = sdk.projects.monitoringProjectsTimeSeriesCreate(req, new MonitoringProjectsTimeSeriesCreateSecurity() {{
                option1 = new MonitoringProjectsTimeSeriesCreateSecurityOption1("cupiditate", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringProjectsTimeSeriesCreateService

Creates or adds data to one or more service time series. A service time series is a time series for a metric from a Google Cloud service. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This endpoint rejects writes to user-defined metrics. This method is only for use by Google Cloud services. Use projects.timeSeries.create instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesCreateServiceRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesCreateServiceResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesCreateServiceSecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesCreateServiceSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesCreateServiceSecurityOption2;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesCreateServiceSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BucketOptions;
import org.openapis.openapi.models.shared.CreateTimeSeriesRequest;
import org.openapis.openapi.models.shared.Distribution;
import org.openapis.openapi.models.shared.Exemplar;
import org.openapis.openapi.models.shared.Explicit;
import org.openapis.openapi.models.shared.Exponential;
import org.openapis.openapi.models.shared.Linear;
import org.openapis.openapi.models.shared.Metric;
import org.openapis.openapi.models.shared.MonitoredResource;
import org.openapis.openapi.models.shared.MonitoredResourceMetadata;
import org.openapis.openapi.models.shared.Point;
import org.openapis.openapi.models.shared.Range;
import org.openapis.openapi.models.shared.TimeInterval;
import org.openapis.openapi.models.shared.TimeSeries;
import org.openapis.openapi.models.shared.TimeSeriesMetricKindEnum;
import org.openapis.openapi.models.shared.TimeSeriesValueTypeEnum;
import org.openapis.openapi.models.shared.TypedValue;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsTimeSeriesCreateServiceRequest req = new MonitoringProjectsTimeSeriesCreateServiceRequest("soluta") {{
                dollarXgafv = XgafvEnum.ONE;
                createTimeSeriesRequest = new CreateTimeSeriesRequest() {{
                    timeSeries = new org.openapis.openapi.models.shared.TimeSeries[]{{
                        add(new TimeSeries() {{
                            metadata = new MonitoredResourceMetadata() {{
                                systemLabels = new java.util.HashMap<String, Object>() {{
                                    put("occaecati", "iste");
                                }};
                                userLabels = new java.util.HashMap<String, String>() {{
                                    put("inventore", "fuga");
                                }};
                            }};
                            metric = new Metric() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("voluptatibus", "distinctio");
                                    put("omnis", "delectus");
                                    put("minima", "praesentium");
                                    put("maxime", "magnam");
                                }};
                                type = "temporibus";
                            }};
                            metricKind = TimeSeriesMetricKindEnum.DELTA;
                            points = new org.openapis.openapi.models.shared.Point[]{{
                                add(new Point() {{
                                    interval = new TimeInterval() {{
                                        endTime = "itaque";
                                        startTime = "commodi";
                                    }};
                                    value = new TypedValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("earum"),
                                                add("modi"),
                                                add("nam"),
                                            }};
                                            bucketOptions = new BucketOptions() {{
                                                explicitBuckets = new Explicit() {{
                                                    bounds = new Double[]{{
                                                        add(329.01),
                                                        add(3719.19),
                                                        add(4259.46),
                                                        add(13.83),
                                                    }};
                                                }};
                                                exponentialBuckets = new Exponential() {{
                                                    growthFactor = 938.94;
                                                    numFiniteBuckets = 247685;
                                                    scale = 9785.48;
                                                }};
                                                linearBuckets = new Linear() {{
                                                    numFiniteBuckets = 318233;
                                                    offset = 5752.13;
                                                    width = 8587.78;
                                                }};
                                            }};
                                            count = "deserunt";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("est", "quis");
                                                            put("sint", "accusamus");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("hic", "necessitatibus");
                                                            put("asperiores", "ex");
                                                            put("voluptas", "debitis");
                                                            put("delectus", "quae");
                                                        }}),
                                                    }};
                                                    timestamp = "minus";
                                                    value = 6854.78;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("velit", "atque");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("impedit", "magni");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("repudiandae", "nam");
                                                            put("dolore", "iusto");
                                                            put("voluptate", "sequi");
                                                        }}),
                                                    }};
                                                    timestamp = "dignissimos";
                                                    value = 2055.66;
                                                }}),
                                            }};
                                            mean = 7781.72;
                                            range = new Range() {{
                                                max = 5354.68;
                                                min = 8442.35;
                                            }};
                                            sumOfSquaredDeviation = 4378.14;
                                        }};
                                        doubleValue = 1390.72;
                                        int64Value = "voluptatibus";
                                        stringValue = "vel";
                                    }};
                                }}),
                                add(new Point() {{
                                    interval = new TimeInterval() {{
                                        endTime = "magnam";
                                        startTime = "quibusdam";
                                    }};
                                    value = new TypedValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("facere"),
                                            }};
                                            bucketOptions = new BucketOptions() {{
                                                explicitBuckets = new Explicit() {{
                                                    bounds = new Double[]{{
                                                        add(1024.13),
                                                        add(9754.25),
                                                        add(1563.83),
                                                    }};
                                                }};
                                                exponentialBuckets = new Exponential() {{
                                                    growthFactor = 7820.9;
                                                    numFiniteBuckets = 304198;
                                                    scale = 2470.45;
                                                }};
                                                linearBuckets = new Linear() {{
                                                    numFiniteBuckets = 75359;
                                                    offset = 365.61;
                                                    width = 4246.63;
                                                }};
                                            }};
                                            count = "ea";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("eum", "velit");
                                                            put("ut", "perspiciatis");
                                                            put("earum", "dicta");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("voluptatibus", "iste");
                                                            put("itaque", "alias");
                                                            put("nisi", "itaque");
                                                            put("velit", "laborum");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("dolor", "iusto");
                                                            put("sit", "doloremque");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("officia", "recusandae");
                                                        }}),
                                                    }};
                                                    timestamp = "ea";
                                                    value = 6931.53;
                                                }}),
                                            }};
                                            mean = 3774.06;
                                            range = new Range() {{
                                                max = 7051.48;
                                                min = 8093.65;
                                            }};
                                            sumOfSquaredDeviation = 5960.65;
                                        }};
                                        doubleValue = 7090.36;
                                        int64Value = "deleniti";
                                        stringValue = "a";
                                    }};
                                }}),
                            }};
                            resource = new MonitoredResource() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("ullam", "unde");
                                    put("necessitatibus", "animi");
                                }};
                                type = "impedit";
                            }};
                            unit = "ipsam";
                            valueType = TimeSeriesValueTypeEnum.INT64;
                        }}),
                        add(new TimeSeries() {{
                            metadata = new MonitoredResourceMetadata() {{
                                systemLabels = new java.util.HashMap<String, Object>() {{
                                    put("error", "esse");
                                    put("labore", "veritatis");
                                    put("vero", "consectetur");
                                }};
                                userLabels = new java.util.HashMap<String, String>() {{
                                    put("inventore", "dolorem");
                                }};
                            }};
                            metric = new Metric() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("qui", "iste");
                                    put("ex", "nemo");
                                }};
                                type = "soluta";
                            }};
                            metricKind = TimeSeriesMetricKindEnum.DELTA;
                            points = new org.openapis.openapi.models.shared.Point[]{{
                                add(new Point() {{
                                    interval = new TimeInterval() {{
                                        endTime = "dolorum";
                                        startTime = "odio";
                                    }};
                                    value = new TypedValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("alias"),
                                            }};
                                            bucketOptions = new BucketOptions() {{
                                                explicitBuckets = new Explicit() {{
                                                    bounds = new Double[]{{
                                                        add(4254.02),
                                                    }};
                                                }};
                                                exponentialBuckets = new Exponential() {{
                                                    growthFactor = 644.35;
                                                    numFiniteBuckets = 63553;
                                                    scale = 2643.33;
                                                }};
                                                linearBuckets = new Linear() {{
                                                    numFiniteBuckets = 208253;
                                                    offset = 3483.57;
                                                    width = 9323.94;
                                                }};
                                            }};
                                            count = "et";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("distinctio", "maxime");
                                                            put("quia", "quia");
                                                            put("nostrum", "omnis");
                                                            put("libero", "dicta");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("libero", "fugiat");
                                                            put("officia", "quos");
                                                            put("placeat", "sit");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ipsa", "voluptates");
                                                            put("inventore", "aperiam");
                                                        }}),
                                                    }};
                                                    timestamp = "totam";
                                                    value = 2928.88;
                                                }}),
                                            }};
                                            mean = 7551.06;
                                            range = new Range() {{
                                                max = 7150.53;
                                                min = 322.73;
                                            }};
                                            sumOfSquaredDeviation = 4181.09;
                                        }};
                                        doubleValue = 4566.88;
                                        int64Value = "dolores";
                                        stringValue = "assumenda";
                                    }};
                                }}),
                                add(new Point() {{
                                    interval = new TimeInterval() {{
                                        endTime = "beatae";
                                        startTime = "est";
                                    }};
                                    value = new TypedValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("corrupti"),
                                                add("molestiae"),
                                                add("provident"),
                                                add("accusamus"),
                                            }};
                                            bucketOptions = new BucketOptions() {{
                                                explicitBuckets = new Explicit() {{
                                                    bounds = new Double[]{{
                                                        add(7332.89),
                                                        add(5750.78),
                                                        add(4097.26),
                                                        add(4218.19),
                                                    }};
                                                }};
                                                exponentialBuckets = new Exponential() {{
                                                    growthFactor = 3735.11;
                                                    numFiniteBuckets = 702952;
                                                    scale = 5156.38;
                                                }};
                                                linearBuckets = new Linear() {{
                                                    numFiniteBuckets = 357207;
                                                    offset = 8890.6;
                                                    width = 9729.12;
                                                }};
                                            }};
                                            count = "cum";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quidem", "fuga");
                                                        }}),
                                                    }};
                                                    timestamp = "repudiandae";
                                                    value = 340.7;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("eos", "quibusdam");
                                                            put("odio", "praesentium");
                                                            put("odit", "explicabo");
                                                            put("corporis", "error");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("adipisci", "recusandae");
                                                            put("similique", "ut");
                                                            put("quidem", "quis");
                                                            put("beatae", "unde");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("delectus", "cupiditate");
                                                            put("fugit", "numquam");
                                                        }}),
                                                    }};
                                                    timestamp = "numquam";
                                                    value = 2010.1;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("dignissimos", "optio");
                                                            put("necessitatibus", "corporis");
                                                            put("qui", "expedita");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("cupiditate", "minima");
                                                            put("placeat", "enim");
                                                            put("neque", "in");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("eum", "modi");
                                                            put("corporis", "magnam");
                                                            put("voluptates", "maiores");
                                                            put("tempore", "aperiam");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ratione", "labore");
                                                            put("totam", "occaecati");
                                                            put("voluptas", "quo");
                                                        }}),
                                                    }};
                                                    timestamp = "velit";
                                                    value = 7955.91;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("est", "impedit");
                                                            put("delectus", "tempore");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("odit", "repellat");
                                                            put("pariatur", "nemo");
                                                            put("reprehenderit", "aperiam");
                                                            put("odio", "minima");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ducimus", "excepturi");
                                                            put("dolores", "error");
                                                        }}),
                                                    }};
                                                    timestamp = "veritatis";
                                                    value = 4981.8;
                                                }}),
                                            }};
                                            mean = 4527.29;
                                            range = new Range() {{
                                                max = 8667.89;
                                                min = 9326.66;
                                            }};
                                            sumOfSquaredDeviation = 6277.35;
                                        }};
                                        doubleValue = 7631.65;
                                        int64Value = "ex";
                                        stringValue = "quaerat";
                                    }};
                                }}),
                                add(new Point() {{
                                    interval = new TimeInterval() {{
                                        endTime = "commodi";
                                        startTime = "officiis";
                                    }};
                                    value = new TypedValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("quidem"),
                                                add("exercitationem"),
                                                add("quam"),
                                                add("dolorem"),
                                            }};
                                            bucketOptions = new BucketOptions() {{
                                                explicitBuckets = new Explicit() {{
                                                    bounds = new Double[]{{
                                                        add(593.83),
                                                        add(5755.34),
                                                    }};
                                                }};
                                                exponentialBuckets = new Exponential() {{
                                                    growthFactor = 8760.27;
                                                    numFiniteBuckets = 194901;
                                                    scale = 9185.47;
                                                }};
                                                linearBuckets = new Linear() {{
                                                    numFiniteBuckets = 741232;
                                                    offset = 1201.2;
                                                    width = 9369.28;
                                                }};
                                            }};
                                            count = "veniam";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("dicta", "consequuntur");
                                                            put("necessitatibus", "nobis");
                                                            put("ipsa", "ducimus");
                                                        }}),
                                                    }};
                                                    timestamp = "maiores";
                                                    value = 873.82;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("pariatur", "libero");
                                                            put("excepturi", "occaecati");
                                                        }}),
                                                    }};
                                                    timestamp = "nemo";
                                                    value = 3063.82;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("eligendi", "sint");
                                                            put("enim", "hic");
                                                            put("animi", "quas");
                                                            put("totam", "molestias");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("eaque", "saepe");
                                                            put("architecto", "quos");
                                                        }}),
                                                    }};
                                                    timestamp = "iste";
                                                    value = 8268.62;
                                                }}),
                                            }};
                                            mean = 7316.34;
                                            range = new Range() {{
                                                max = 7255.74;
                                                min = 2440.32;
                                            }};
                                            sumOfSquaredDeviation = 385.57;
                                        }};
                                        doubleValue = 9639.76;
                                        int64Value = "impedit";
                                        stringValue = "cum";
                                    }};
                                }}),
                            }};
                            resource = new MonitoredResource() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("adipisci", "saepe");
                                }};
                                type = "deserunt";
                            }};
                            unit = "doloremque";
                            valueType = TimeSeriesValueTypeEnum.INT64;
                        }}),
                        add(new TimeSeries() {{
                            metadata = new MonitoredResourceMetadata() {{
                                systemLabels = new java.util.HashMap<String, Object>() {{
                                    put("libero", "architecto");
                                    put("cupiditate", "molestiae");
                                }};
                                userLabels = new java.util.HashMap<String, String>() {{
                                    put("possimus", "non");
                                    put("magnam", "itaque");
                                    put("sed", "asperiores");
                                    put("veniam", "consequuntur");
                                }};
                            }};
                            metric = new Metric() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("laudantium", "odit");
                                    put("pariatur", "amet");
                                    put("exercitationem", "ab");
                                    put("velit", "facilis");
                                }};
                                type = "tempore";
                            }};
                            metricKind = TimeSeriesMetricKindEnum.GAUGE;
                            points = new org.openapis.openapi.models.shared.Point[]{{
                                add(new Point() {{
                                    interval = new TimeInterval() {{
                                        endTime = "quaerat";
                                        startTime = "blanditiis";
                                    }};
                                    value = new TypedValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("nisi"),
                                                add("quis"),
                                                add("nisi"),
                                            }};
                                            bucketOptions = new BucketOptions() {{
                                                explicitBuckets = new Explicit() {{
                                                    bounds = new Double[]{{
                                                        add(7945.07),
                                                        add(8152),
                                                        add(7060.61),
                                                    }};
                                                }};
                                                exponentialBuckets = new Exponential() {{
                                                    growthFactor = 2176.63;
                                                    numFiniteBuckets = 318917;
                                                    scale = 9738.19;
                                                }};
                                                linearBuckets = new Linear() {{
                                                    numFiniteBuckets = 974589;
                                                    offset = 1623.58;
                                                    width = 8915.81;
                                                }};
                                            }};
                                            count = "labore";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("nostrum", "neque");
                                                            put("iusto", "est");
                                                        }}),
                                                    }};
                                                    timestamp = "rem";
                                                    value = 7538.9;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("officiis", "ducimus");
                                                            put("dolor", "dicta");
                                                            put("error", "porro");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("dignissimos", "esse");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ad", "aspernatur");
                                                            put("enim", "delectus");
                                                            put("iusto", "dignissimos");
                                                            put("libero", "illo");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("incidunt", "accusamus");
                                                        }}),
                                                    }};
                                                    timestamp = "saepe";
                                                    value = 7348.14;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("reiciendis", "earum");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("praesentium", "nemo");
                                                            put("repellat", "quisquam");
                                                        }}),
                                                    }};
                                                    timestamp = "sequi";
                                                    value = 4671.19;
                                                }}),
                                            }};
                                            mean = 5349.08;
                                            range = new Range() {{
                                                max = 755.66;
                                                min = 2902.48;
                                            }};
                                            sumOfSquaredDeviation = 8288.41;
                                        }};
                                        doubleValue = 3041.73;
                                        int64Value = "quisquam";
                                        stringValue = "provident";
                                    }};
                                }}),
                                add(new Point() {{
                                    interval = new TimeInterval() {{
                                        endTime = "laudantium";
                                        startTime = "repudiandae";
                                    }};
                                    value = new TypedValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("maxime"),
                                            }};
                                            bucketOptions = new BucketOptions() {{
                                                explicitBuckets = new Explicit() {{
                                                    bounds = new Double[]{{
                                                        add(7239.42),
                                                    }};
                                                }};
                                                exponentialBuckets = new Exponential() {{
                                                    growthFactor = 7119.91;
                                                    numFiniteBuckets = 559174;
                                                    scale = 5908.58;
                                                }};
                                                linearBuckets = new Linear() {{
                                                    numFiniteBuckets = 922299;
                                                    offset = 7000.45;
                                                    width = 4923.61;
                                                }};
                                            }};
                                            count = "corporis";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("iure", "dolorem");
                                                            put("commodi", "impedit");
                                                            put("commodi", "aut");
                                                            put("voluptatem", "ad");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("amet", "illum");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quidem", "cum");
                                                            put("amet", "quasi");
                                                            put("dicta", "laudantium");
                                                        }}),
                                                    }};
                                                    timestamp = "doloremque";
                                                    value = 9384.12;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("provident", "dolorum");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("provident", "repudiandae");
                                                            put("consequatur", "nemo");
                                                            put("molestiae", "itaque");
                                                            put("facilis", "corrupti");
                                                        }}),
                                                    }};
                                                    timestamp = "aperiam";
                                                    value = 5740.92;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("totam", "dicta");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("velit", "dolor");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("a", "dolor");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("atque", "beatae");
                                                            put("at", "labore");
                                                            put("minus", "esse");
                                                        }}),
                                                    }};
                                                    timestamp = "voluptatem";
                                                    value = 209.5;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("aperiam", "dignissimos");
                                                            put("repellat", "velit");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("provident", "consectetur");
                                                            put("eligendi", "dignissimos");
                                                            put("consectetur", "soluta");
                                                            put("natus", "temporibus");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("amet", "tenetur");
                                                            put("aspernatur", "quo");
                                                            put("itaque", "illum");
                                                        }}),
                                                    }};
                                                    timestamp = "laborum";
                                                    value = 4904.2;
                                                }}),
                                            }};
                                            mean = 8762.85;
                                            range = new Range() {{
                                                max = 1853.48;
                                                min = 2323.83;
                                            }};
                                            sumOfSquaredDeviation = 9958.16;
                                        }};
                                        doubleValue = 1286.96;
                                        int64Value = "explicabo";
                                        stringValue = "exercitationem";
                                    }};
                                }}),
                                add(new Point() {{
                                    interval = new TimeInterval() {{
                                        endTime = "nihil";
                                        startTime = "non";
                                    }};
                                    value = new TypedValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("illo"),
                                            }};
                                            bucketOptions = new BucketOptions() {{
                                                explicitBuckets = new Explicit() {{
                                                    bounds = new Double[]{{
                                                        add(6444.79),
                                                        add(9649.25),
                                                        add(2512.12),
                                                        add(7193.89),
                                                    }};
                                                }};
                                                exponentialBuckets = new Exponential() {{
                                                    growthFactor = 4502.24;
                                                    numFiniteBuckets = 349993;
                                                    scale = 2883;
                                                }};
                                                linearBuckets = new Linear() {{
                                                    numFiniteBuckets = 254382;
                                                    offset = 9211.93;
                                                    width = 2653.03;
                                                }};
                                            }};
                                            count = "in";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("aperiam", "odit");
                                                            put("deleniti", "enim");
                                                            put("voluptate", "similique");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("libero", "magnam");
                                                            put("sit", "modi");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("nesciunt", "mollitia");
                                                            put("dignissimos", "fugiat");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("molestiae", "veniam");
                                                            put("reiciendis", "ab");
                                                        }}),
                                                    }};
                                                    timestamp = "modi";
                                                    value = 138.65;
                                                }}),
                                            }};
                                            mean = 135.08;
                                            range = new Range() {{
                                                max = 9116.57;
                                                min = 4837.53;
                                            }};
                                            sumOfSquaredDeviation = 4137.58;
                                        }};
                                        doubleValue = 2561.14;
                                        int64Value = "dolorum";
                                        stringValue = "possimus";
                                    }};
                                }}),
                                add(new Point() {{
                                    interval = new TimeInterval() {{
                                        endTime = "voluptate";
                                        startTime = "consectetur";
                                    }};
                                    value = new TypedValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("quaerat"),
                                            }};
                                            bucketOptions = new BucketOptions() {{
                                                explicitBuckets = new Explicit() {{
                                                    bounds = new Double[]{{
                                                        add(7912.28),
                                                        add(1226.62),
                                                        add(7151.43),
                                                        add(4813.75),
                                                    }};
                                                }};
                                                exponentialBuckets = new Exponential() {{
                                                    growthFactor = 5580.51;
                                                    numFiniteBuckets = 91728;
                                                    scale = 7049.48;
                                                }};
                                                linearBuckets = new Linear() {{
                                                    numFiniteBuckets = 229276;
                                                    offset = 4186.37;
                                                    width = 6854.15;
                                                }};
                                            }};
                                            count = "alias";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("laudantium", "repellendus");
                                                            put("veritatis", "quae");
                                                            put("eaque", "saepe");
                                                        }}),
                                                    }};
                                                    timestamp = "delectus";
                                                    value = 6512.28;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("sed", "voluptatem");
                                                            put("alias", "eveniet");
                                                            put("hic", "voluptatem");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("qui", "qui");
                                                            put("necessitatibus", "harum");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("beatae", "aliquid");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("optio", "voluptatibus");
                                                            put("molestias", "officia");
                                                        }}),
                                                    }};
                                                    timestamp = "libero";
                                                    value = 5206.78;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ea", "impedit");
                                                            put("ducimus", "odit");
                                                        }}),
                                                    }};
                                                    timestamp = "velit";
                                                    value = 9673.38;
                                                }}),
                                            }};
                                            mean = 9979.18;
                                            range = new Range() {{
                                                max = 8611.23;
                                                min = 6711.16;
                                            }};
                                            sumOfSquaredDeviation = 6176.57;
                                        }};
                                        doubleValue = 8837.8;
                                        int64Value = "doloremque";
                                        stringValue = "nisi";
                                    }};
                                }}),
                            }};
                            resource = new MonitoredResource() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("recusandae", "voluptates");
                                    put("non", "rem");
                                    put("quia", "ullam");
                                }};
                                type = "quisquam";
                            }};
                            unit = "dicta";
                            valueType = TimeSeriesValueTypeEnum.MONEY;
                        }}),
                    }};
                }};;
                accessToken = "eligendi";
                alt = AltEnum.JSON;
                callback = "officiis";
                fields = "architecto";
                key = "architecto";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "optio";
                uploadType = "rem";
                uploadProtocol = "perferendis";
            }};            

            MonitoringProjectsTimeSeriesCreateServiceResponse res = sdk.projects.monitoringProjectsTimeSeriesCreateService(req, new MonitoringProjectsTimeSeriesCreateServiceSecurity() {{
                option1 = new MonitoringProjectsTimeSeriesCreateServiceSecurityOption1("facilis", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringProjectsTimeSeriesList

Lists time series that match a filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesListRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesListResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesListSecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesListSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesListSecurityOption2;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesListSecurityOption3;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsTimeSeriesListRequest req = new MonitoringProjectsTimeSeriesListRequest("a") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dicta";
                aggregationAlignmentPeriod = "quos";
                aggregationCrossSeriesReducer = MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum.REDUCE_SUM;
                aggregationGroupByFields = new String[]{{
                    add("modi"),
                    add("itaque"),
                }};
                aggregationPerSeriesAligner = MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum.ALIGN_PERCENTILE95;
                alt = AltEnum.JSON;
                callback = "consequuntur";
                fields = "assumenda";
                filter = "vero";
                intervalEndTime = "doloribus";
                intervalStartTime = "impedit";
                key = "porro";
                oauthToken = "accusamus";
                orderBy = "totam";
                pageSize = 969168L;
                pageToken = "ab";
                prettyPrint = false;
                quotaUser = "sint";
                secondaryAggregationAlignmentPeriod = "nihil";
                secondaryAggregationCrossSeriesReducer = MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum.REDUCE_COUNT;
                secondaryAggregationGroupByFields = new String[]{{
                    add("odio"),
                    add("nesciunt"),
                }};
                secondaryAggregationPerSeriesAligner = MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum.ALIGN_PERCENTILE05;
                uploadType = "vel";
                uploadProtocol = "neque";
                view = MonitoringProjectsTimeSeriesListViewEnum.FULL;
            }};            

            MonitoringProjectsTimeSeriesListResponse res = sdk.projects.monitoringProjectsTimeSeriesList(req, new MonitoringProjectsTimeSeriesListSecurity() {{
                option1 = new MonitoringProjectsTimeSeriesListSecurityOption1("voluptas", "consequuntur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listTimeSeriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringProjectsTimeSeriesQuery

Queries time series using Monitoring Query Language.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesQueryRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesQueryResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesQuerySecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesQuerySecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesQuerySecurityOption2;
import org.openapis.openapi.models.operations.MonitoringProjectsTimeSeriesQuerySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.QueryTimeSeriesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsTimeSeriesQueryRequest req = new MonitoringProjectsTimeSeriesQueryRequest("officia") {{
                dollarXgafv = XgafvEnum.ONE;
                queryTimeSeriesRequest = new QueryTimeSeriesRequest() {{
                    pageSize = 716033;
                    pageToken = "eius";
                    query = "ipsa";
                }};;
                accessToken = "rem";
                alt = AltEnum.PROTO;
                callback = "accusantium";
                fields = "veniam";
                key = "saepe";
                oauthToken = "neque";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "aliquam";
                uploadProtocol = "quos";
            }};            

            MonitoringProjectsTimeSeriesQueryResponse res = sdk.projects.monitoringProjectsTimeSeriesQuery(req, new MonitoringProjectsTimeSeriesQuerySecurity() {{
                option1 = new MonitoringProjectsTimeSeriesQuerySecurityOption1("doloribus", "fugiat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.queryTimeSeriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringProjectsUptimeCheckConfigsCreate

Creates a new Uptime check configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsUptimeCheckConfigsCreateRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsUptimeCheckConfigsCreateResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsUptimeCheckConfigsCreateSecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsUptimeCheckConfigsCreateSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsUptimeCheckConfigsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BasicAuthentication;
import org.openapis.openapi.models.shared.ContentMatcher;
import org.openapis.openapi.models.shared.ContentMatcherMatcherEnum;
import org.openapis.openapi.models.shared.HttpCheck;
import org.openapis.openapi.models.shared.HttpCheckContentTypeEnum;
import org.openapis.openapi.models.shared.HttpCheckRequestMethodEnum;
import org.openapis.openapi.models.shared.InternalChecker;
import org.openapis.openapi.models.shared.InternalCheckerStateEnum;
import org.openapis.openapi.models.shared.JsonPathMatcher;
import org.openapis.openapi.models.shared.JsonPathMatcherJsonMatcherEnum;
import org.openapis.openapi.models.shared.MonitoredResource;
import org.openapis.openapi.models.shared.PingConfig;
import org.openapis.openapi.models.shared.ResourceGroup;
import org.openapis.openapi.models.shared.ResourceGroupResourceTypeEnum;
import org.openapis.openapi.models.shared.ResponseStatusCode;
import org.openapis.openapi.models.shared.ResponseStatusCodeStatusClassEnum;
import org.openapis.openapi.models.shared.TcpCheck;
import org.openapis.openapi.models.shared.UptimeCheckConfig;
import org.openapis.openapi.models.shared.UptimeCheckConfigCheckerTypeEnum;
import org.openapis.openapi.models.shared.UptimeCheckConfigSelectedRegionsEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsUptimeCheckConfigsCreateRequest req = new MonitoringProjectsUptimeCheckConfigsCreateRequest("est") {{
                dollarXgafv = XgafvEnum.TWO;
                uptimeCheckConfig = new UptimeCheckConfig() {{
                    checkerType = UptimeCheckConfigCheckerTypeEnum.CHECKER_TYPE_UNSPECIFIED;
                    contentMatchers = new org.openapis.openapi.models.shared.ContentMatcher[]{{
                        add(new ContentMatcher() {{
                            content = "nesciunt";
                            jsonPathMatcher = new JsonPathMatcher() {{
                                jsonMatcher = JsonPathMatcherJsonMatcherEnum.EXACT_MATCH;
                                jsonPath = "illo";
                            }};
                            matcher = ContentMatcherMatcherEnum.NOT_MATCHES_JSON_PATH;
                        }}),
                    }};
                    displayName = "nemo";
                    httpCheck = new HttpCheck() {{
                        acceptedResponseStatusCodes = new org.openapis.openapi.models.shared.ResponseStatusCode[]{{
                            add(new ResponseStatusCode() {{
                                statusClass = ResponseStatusCodeStatusClassEnum.STATUS_CLASS5_XX;
                                statusValue = 603323;
                            }}),
                            add(new ResponseStatusCode() {{
                                statusClass = ResponseStatusCodeStatusClassEnum.STATUS_CLASS1_XX;
                                statusValue = 128021;
                            }}),
                            add(new ResponseStatusCode() {{
                                statusClass = ResponseStatusCodeStatusClassEnum.STATUS_CLASS2_XX;
                                statusValue = 583193;
                            }}),
                            add(new ResponseStatusCode() {{
                                statusClass = ResponseStatusCodeStatusClassEnum.STATUS_CLASS5_XX;
                                statusValue = 2064;
                            }}),
                        }};
                        authInfo = new BasicAuthentication() {{
                            password = "quidem";
                            username = "Cloyd.Jerde33";
                        }};;
                        body = "debitis";
                        contentType = HttpCheckContentTypeEnum.URL_ENCODED;
                        customContentType = "sint";
                        headers = new java.util.HashMap<String, String>() {{
                            put("numquam", "tenetur");
                            put("adipisci", "libero");
                        }};
                        maskHeaders = false;
                        path = "in";
                        pingConfig = new PingConfig() {{
                            pingsCount = 329651;
                        }};;
                        port = 403147;
                        requestMethod = HttpCheckRequestMethodEnum.POST;
                        useSsl = false;
                        validateSsl = false;
                    }};;
                    internalCheckers = new org.openapis.openapi.models.shared.InternalChecker[]{{
                        add(new InternalChecker() {{
                            displayName = "beatae";
                            gcpZone = "hic";
                            name = "Adrienne Ernser";
                            network = "minima";
                            peerProjectId = "architecto";
                            state = InternalCheckerStateEnum.UNSPECIFIED;
                        }}),
                    }};
                    isInternal = false;
                    monitoredResource = new MonitoredResource() {{
                        labels = new java.util.HashMap<String, String>() {{
                            put("magni", "incidunt");
                            put("adipisci", "praesentium");
                        }};
                        type = "dolor";
                    }};;
                    name = "Kristy Quigley II";
                    period = "culpa";
                    resourceGroup = new ResourceGroup() {{
                        groupId = "consequuntur";
                        resourceType = ResourceGroupResourceTypeEnum.RESOURCE_TYPE_UNSPECIFIED;
                    }};;
                    selectedRegions = new org.openapis.openapi.models.shared.UptimeCheckConfigSelectedRegionsEnum[]{{
                        add(UptimeCheckConfigSelectedRegionsEnum.EUROPE),
                        add(UptimeCheckConfigSelectedRegionsEnum.EUROPE),
                        add(UptimeCheckConfigSelectedRegionsEnum.USA_IOWA),
                    }};
                    tcpCheck = new TcpCheck() {{
                        pingConfig = new PingConfig() {{
                            pingsCount = 932250;
                        }};;
                        port = 955569;
                    }};;
                    timeout = "quisquam";
                    userLabels = new java.util.HashMap<String, String>() {{
                        put("doloribus", "assumenda");
                        put("officiis", "architecto");
                    }};
                }};;
                accessToken = "alias";
                alt = AltEnum.MEDIA;
                callback = "ipsa";
                fields = "nobis";
                key = "necessitatibus";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "vel";
                uploadProtocol = "perspiciatis";
            }};            

            MonitoringProjectsUptimeCheckConfigsCreateResponse res = sdk.projects.monitoringProjectsUptimeCheckConfigsCreate(req, new MonitoringProjectsUptimeCheckConfigsCreateSecurity() {{
                option1 = new MonitoringProjectsUptimeCheckConfigsCreateSecurityOption1("debitis", "ullam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.uptimeCheckConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringProjectsUptimeCheckConfigsList

Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringProjectsUptimeCheckConfigsListRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsUptimeCheckConfigsListResponse;
import org.openapis.openapi.models.operations.MonitoringProjectsUptimeCheckConfigsListSecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsUptimeCheckConfigsListSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsUptimeCheckConfigsListSecurityOption2;
import org.openapis.openapi.models.operations.MonitoringProjectsUptimeCheckConfigsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsUptimeCheckConfigsListRequest req = new MonitoringProjectsUptimeCheckConfigsListRequest("architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "provident";
                fields = "cumque";
                filter = "iure";
                key = "quibusdam";
                oauthToken = "quod";
                pageSize = 363224L;
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "magnam";
                uploadProtocol = "dignissimos";
            }};            

            MonitoringProjectsUptimeCheckConfigsListResponse res = sdk.projects.monitoringProjectsUptimeCheckConfigsList(req, new MonitoringProjectsUptimeCheckConfigsListSecurity() {{
                option1 = new MonitoringProjectsUptimeCheckConfigsListSecurityOption1("laboriosam", "sed") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listUptimeCheckConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
