# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.MonitoringProjectsAlertPoliciesCreateSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringProjectsAlertPoliciesCreateSecurityOption2;
import org.openapis.openapi.models.operations.MonitoringProjectsAlertPoliciesCreateSecurity;
import org.openapis.openapi.models.operations.MonitoringProjectsAlertPoliciesCreatePathParams;
import org.openapis.openapi.models.operations.MonitoringProjectsAlertPoliciesCreateQueryParams;
import org.openapis.openapi.models.operations.MonitoringProjectsAlertPoliciesCreateRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsAlertPoliciesCreateResponse;
import org.openapis.openapi.models.shared.AlertPolicyCombinerEnum;
import org.openapis.openapi.models.shared.AlertPolicy;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.MutationRecord;
import org.openapis.openapi.models.shared.Documentation;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.MetricThresholdComparisonEnum;
import org.openapis.openapi.models.shared.MetricThresholdEvaluationMissingDataEnum;
import org.openapis.openapi.models.shared.MetricThreshold;
import org.openapis.openapi.models.shared.Trigger;
import org.openapis.openapi.models.shared.ForecastOptions;
import org.openapis.openapi.models.shared.AggregationCrossSeriesReducerEnum;
import org.openapis.openapi.models.shared.AggregationPerSeriesAlignerEnum;
import org.openapis.openapi.models.shared.Aggregation;
import org.openapis.openapi.models.shared.MonitoringQueryLanguageConditionEvaluationMissingDataEnum;
import org.openapis.openapi.models.shared.MonitoringQueryLanguageCondition;
import org.openapis.openapi.models.shared.LogMatch;
import org.openapis.openapi.models.shared.MetricAbsence;
import org.openapis.openapi.models.shared.AlertStrategy;
import org.openapis.openapi.models.shared.NotificationRateLimit;
import org.openapis.openapi.models.shared.NotificationChannelStrategy;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsAlertPoliciesCreateRequest req = new MonitoringProjectsAlertPoliciesCreateRequest() {{
                security = new MonitoringProjectsAlertPoliciesCreateSecurity() {{
                    option1 = new MonitoringProjectsAlertPoliciesCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new MonitoringProjectsAlertPoliciesCreatePathParams() {{
                    name = "corrupti";
                }};
                queryParams = new MonitoringProjectsAlertPoliciesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new AlertPolicy() {{
                    alertStrategy = new AlertStrategy() {{
                        autoClose = "suscipit";
                        notificationChannelStrategy = new org.openapis.openapi.models.shared.NotificationChannelStrategy[]{{
                            add(new NotificationChannelStrategy() {{
                                notificationChannelNames = new String[]{{
                                    add("debitis"),
                                    add("ipsa"),
                                }};
                                renotifyInterval = "delectus";
                            }}),
                            add(new NotificationChannelStrategy() {{
                                notificationChannelNames = new String[]{{
                                    add("suscipit"),
                                    add("molestiae"),
                                }};
                                renotifyInterval = "minus";
                            }}),
                        }};
                        notificationRateLimit = new NotificationRateLimit() {{
                            period = "placeat";
                        }};
                    }};
                    combiner = "OR";
                    conditions = new org.openapis.openapi.models.shared.Condition[]{{
                        add(new Condition() {{
                            conditionAbsent = new MetricAbsence() {{
                                aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "nisi";
                                        crossSeriesReducer = "REDUCE_PERCENTILE_50";
                                        groupByFields = new String[]{{
                                            add("ab"),
                                            add("quis"),
                                            add("veritatis"),
                                            add("deserunt"),
                                        }};
                                        perSeriesAligner = "ALIGN_NONE";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "ipsam";
                                        crossSeriesReducer = "REDUCE_PERCENTILE_95";
                                        groupByFields = new String[]{{
                                            add("quo"),
                                            add("odit"),
                                            add("at"),
                                            add("at"),
                                        }};
                                        perSeriesAligner = "ALIGN_PERCENT_CHANGE";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "molestiae";
                                        crossSeriesReducer = "REDUCE_PERCENTILE_95";
                                        groupByFields = new String[]{{
                                            add("esse"),
                                            add("totam"),
                                            add("porro"),
                                            add("dolorum"),
                                        }};
                                        perSeriesAligner = "ALIGN_RATE";
                                    }}),
                                }};
                                duration = "nam";
                                filter = "officia";
                                trigger = new Trigger() {{
                                    count = 582020;
                                    percent = 1433.53;
                                }};
                            }};
                            conditionMatchedLog = new LogMatch() {{
                                filter = "deleniti";
                                labelExtractors = new java.util.HashMap<String, String>() {{
                                    put("optio", "totam");
                                    put("beatae", "commodi");
                                    put("molestiae", "modi");
                                    put("qui", "impedit");
                                }};
                            }};
                            conditionMonitoringQueryLanguage = new MonitoringQueryLanguageCondition() {{
                                duration = "cum";
                                evaluationMissingData = "EVALUATION_MISSING_DATA_INACTIVE";
                                query = "ipsum";
                                trigger = new Trigger() {{
                                    count = 568434;
                                    percent = 1352.18;
                                }};
                            }};
                            conditionThreshold = new MetricThreshold() {{
                                aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "ad";
                                        crossSeriesReducer = "REDUCE_COUNT_FALSE";
                                        groupByFields = new String[]{{
                                            add("iste"),
                                        }};
                                        perSeriesAligner = "ALIGN_NEXT_OLDER";
                                    }}),
                                }};
                                comparison = "COMPARISON_LE";
                                denominatorAggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "hic";
                                        crossSeriesReducer = "REDUCE_PERCENTILE_50";
                                        groupByFields = new String[]{{
                                            add("in"),
                                            add("corporis"),
                                            add("iste"),
                                        }};
                                        perSeriesAligner = "ALIGN_COUNT";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "saepe";
                                        crossSeriesReducer = "REDUCE_FRACTION_TRUE";
                                        groupByFields = new String[]{{
                                            add("ipsa"),
                                        }};
                                        perSeriesAligner = "ALIGN_PERCENT_CHANGE";
                                    }}),
                                }};
                                denominatorFilter = "est";
                                duration = "mollitia";
                                evaluationMissingData = "EVALUATION_MISSING_DATA_ACTIVE";
                                filter = "dolores";
                                forecastOptions = new ForecastOptions() {{
                                    forecastHorizon = "dolorem";
                                }};
                                thresholdValue = 3581.52;
                                trigger = new Trigger() {{
                                    count = 128926;
                                    percent = 7506.86;
                                }};
                            }};
                            displayName = "enim";
                            name = "omnis";
                        }}),
                        add(new Condition() {{
                            conditionAbsent = new MetricAbsence() {{
                                aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "minima";
                                        crossSeriesReducer = "REDUCE_COUNT_TRUE";
                                        groupByFields = new String[]{{
                                            add("iure"),
                                        }};
                                        perSeriesAligner = "ALIGN_COUNT_FALSE";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "doloribus";
                                        crossSeriesReducer = "REDUCE_PERCENTILE_05";
                                        groupByFields = new String[]{{
                                            add("mollitia"),
                                        }};
                                        perSeriesAligner = "ALIGN_INTERPOLATE";
                                    }}),
                                }};
                                duration = "culpa";
                                filter = "consequuntur";
                                trigger = new Trigger() {{
                                    count = 995300;
                                    percent = 6531.08;
                                }};
                            }};
                            conditionMatchedLog = new LogMatch() {{
                                filter = "occaecati";
                                labelExtractors = new java.util.HashMap<String, String>() {{
                                    put("commodi", "quam");
                                    put("molestiae", "velit");
                                }};
                            }};
                            conditionMonitoringQueryLanguage = new MonitoringQueryLanguageCondition() {{
                                duration = "error";
                                evaluationMissingData = "EVALUATION_MISSING_DATA_UNSPECIFIED";
                                query = "quis";
                                trigger = new Trigger() {{
                                    count = 110375;
                                    percent = 6747.52;
                                }};
                            }};
                            conditionThreshold = new MetricThreshold() {{
                                aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "enim";
                                        crossSeriesReducer = "REDUCE_MEAN";
                                        groupByFields = new String[]{{
                                            add("sequi"),
                                            add("tenetur"),
                                            add("ipsam"),
                                            add("id"),
                                        }};
                                        perSeriesAligner = "ALIGN_PERCENTILE_95";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "aut";
                                        crossSeriesReducer = "REDUCE_MEAN";
                                        groupByFields = new String[]{{
                                            add("temporibus"),
                                            add("laborum"),
                                            add("quasi"),
                                        }};
                                        perSeriesAligner = "ALIGN_PERCENT_CHANGE";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "voluptatibus";
                                        crossSeriesReducer = "REDUCE_PERCENTILE_50";
                                        groupByFields = new String[]{{
                                            add("praesentium"),
                                            add("voluptatibus"),
                                        }};
                                        perSeriesAligner = "ALIGN_DELTA";
                                    }}),
                                }};
                                comparison = "COMPARISON_LE";
                                denominatorAggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "cum";
                                        crossSeriesReducer = "REDUCE_NONE";
                                        groupByFields = new String[]{{
                                            add("reprehenderit"),
                                        }};
                                        perSeriesAligner = "ALIGN_MIN";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "maiores";
                                        crossSeriesReducer = "REDUCE_MEAN";
                                        groupByFields = new String[]{{
                                            add("dolore"),
                                            add("iusto"),
                                        }};
                                        perSeriesAligner = "ALIGN_RATE";
                                    }}),
                                }};
                                denominatorFilter = "harum";
                                duration = "enim";
                                evaluationMissingData = "EVALUATION_MISSING_DATA_NO_OP";
                                filter = "commodi";
                                forecastOptions = new ForecastOptions() {{
                                    forecastHorizon = "repudiandae";
                                }};
                                thresholdValue = 641.47;
                                trigger = new Trigger() {{
                                    count = 216822;
                                    percent = 6924.72;
                                }};
                            }};
                            displayName = "molestias";
                            name = "excepturi";
                        }}),
                    }};
                    creationRecord = new MutationRecord() {{
                        mutateTime = "pariatur";
                        mutatedBy = "modi";
                    }};
                    displayName = "praesentium";
                    documentation = new Documentation() {{
                        content = "rem";
                        mimeType = "voluptates";
                    }};
                    enabled = false;
                    mutationRecord = new MutationRecord() {{
                        mutateTime = "quasi";
                        mutatedBy = "repudiandae";
                    }};
                    name = "sint";
                    notificationChannels = new String[]{{
                        add("itaque"),
                    }};
                    userLabels = new java.util.HashMap<String, String>() {{
                        put("enim", "consequatur");
                        put("est", "quibusdam");
                    }};
                    validity = new Status() {{
                        code = 131797;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("quibusdam", "labore");
                                put("modi", "qui");
                                put("aliquid", "cupiditate");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("perferendis", "magni");
                                put("assumenda", "ipsam");
                                put("alias", "fugit");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("excepturi", "tempora");
                                put("facilis", "tempore");
                                put("labore", "delectus");
                            }}),
                        }};
                        message = "eum";
                    }};
                }};
            }};            

            MonitoringProjectsAlertPoliciesCreateResponse res = sdk.projects.monitoringProjectsAlertPoliciesCreate(req);

            if (res.alertPolicy.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `monitoringProjectsAlertPoliciesCreate` - Creates a new alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.
* `monitoringProjectsAlertPoliciesList` - Lists the existing alerting policies for the workspace.
* `monitoringProjectsCollectdTimeSeriesCreate` - Cloud Monitoring Agent only: Creates a new time series.This method is only for use by the Cloud Monitoring Agent. Use projects.timeSeries.create instead.
* `monitoringProjectsGroupsCreate` - Creates a new group.
* `monitoringProjectsGroupsList` - Lists the existing groups.
* `monitoringProjectsGroupsMembersList` - Lists the monitored resources that are members of a group.
* `monitoringProjectsGroupsUpdate` - Updates an existing group. You can change any group attributes except name.
* `monitoringProjectsMetricDescriptorsCreate` - Creates a new metric descriptor. The creation is executed asynchronously. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics). The metric descriptor is updated if it already exists, except that metric labels are never removed.
* `monitoringProjectsMetricDescriptorsList` - Lists metric descriptors that match a filter.
* `monitoringProjectsMonitoredResourceDescriptorsList` - Lists monitored resource descriptors that match a filter.
* `monitoringProjectsNotificationChannelDescriptorsList` - Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added.
* `monitoringProjectsNotificationChannelsCreate` - Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.
* `monitoringProjectsNotificationChannelsGetVerificationCode` - Requests a verification code for an already verified channel that can then be used in a call to VerifyNotificationChannel() on a different channel with an equivalent identity in the same or in a different project. This makes it possible to copy a channel between projects without requiring manual reverification of the channel. If the channel is not in the verified state, this method will fail (in other words, this may only be used if the SendNotificationChannelVerificationCode and VerifyNotificationChannel paths have already been used to put the given channel into the verified state).There is no guarantee that the verification codes returned by this method will be of a similar structure or form as the ones that are delivered to the channel via SendNotificationChannelVerificationCode; while VerifyNotificationChannel() will recognize both the codes delivered via SendNotificationChannelVerificationCode() and returned from GetNotificationChannelVerificationCode(), it is typically the case that the verification codes delivered via SendNotificationChannelVerificationCode() will be shorter and also have a shorter expiration (e.g. codes such as "G-123456") whereas GetVerificationCode() will typically return a much longer, websafe base 64 encoded string that has a longer expiration time.
* `monitoringProjectsNotificationChannelsList` - Lists the notification channels that have been created for the project.
* `monitoringProjectsNotificationChannelsSendVerificationCode` - Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel.
* `monitoringProjectsNotificationChannelsVerify` - Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode.
* `monitoringProjectsSnoozesCreate` - Creates a Snooze that will prevent alerts, which match the provided criteria, from being opened. The Snooze applies for a specific time interval.
* `monitoringProjectsSnoozesList` - Lists the Snoozes associated with a project. Can optionally pass in filter, which specifies predicates to match Snoozes.
* `monitoringProjectsTimeSeriesCreate` - Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response.
* `monitoringProjectsTimeSeriesCreateService` - Creates or adds data to one or more service time series. A service time series is a time series for a metric from a Google Cloud service. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This endpoint rejects writes to user-defined metrics. This method is only for use by Google Cloud services. Use projects.timeSeries.create instead.
* `monitoringProjectsTimeSeriesList` - Lists time series that match a filter.
* `monitoringProjectsTimeSeriesQuery` - Queries time series using Monitoring Query Language.
* `monitoringProjectsUptimeCheckConfigsCreate` - Creates a new Uptime check configuration.
* `monitoringProjectsUptimeCheckConfigsList` - Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

### services

* `monitoringServicesCreate` - Create a Service.
* `monitoringServicesList` - List Services for this Metrics Scope.
* `monitoringServicesServiceLevelObjectivesCreate` - Create a ServiceLevelObjective for the given Service.
* `monitoringServicesServiceLevelObjectivesDelete` - Delete the given ServiceLevelObjective.
* `monitoringServicesServiceLevelObjectivesGet` - Get a ServiceLevelObjective by name.
* `monitoringServicesServiceLevelObjectivesList` - List the ServiceLevelObjectives for the given Service.
* `monitoringServicesServiceLevelObjectivesPatch` - Update the given ServiceLevelObjective.

### uptimeCheckIps

* `monitoringUptimeCheckIpsList` - Returns the list of IP addresses that checkers run from
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
