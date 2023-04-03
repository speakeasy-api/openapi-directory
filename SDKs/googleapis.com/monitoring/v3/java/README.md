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
import org.openapis.openapi.models.operations.MonitoringProjectsAlertPoliciesCreateRequest;
import org.openapis.openapi.models.operations.MonitoringProjectsAlertPoliciesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringProjectsAlertPoliciesCreateRequest req = new MonitoringProjectsAlertPoliciesCreateRequest() {{
                dollarXgafv = "2";
                alertPolicy = new AlertPolicy() {{
                    alertStrategy = new AlertStrategy() {{
                        autoClose = "provident";
                        notificationChannelStrategy = new org.openapis.openapi.models.shared.NotificationChannelStrategy[]{{
                            add(new NotificationChannelStrategy() {{
                                notificationChannelNames = new String[]{{
                                    add("unde"),
                                    add("nulla"),
                                    add("corrupti"),
                                    add("illum"),
                                }};
                                renotifyInterval = "vel";
                            }}),
                            add(new NotificationChannelStrategy() {{
                                notificationChannelNames = new String[]{{
                                    add("deserunt"),
                                    add("suscipit"),
                                    add("iure"),
                                }};
                                renotifyInterval = "magnam";
                            }}),
                            add(new NotificationChannelStrategy() {{
                                notificationChannelNames = new String[]{{
                                    add("ipsa"),
                                    add("delectus"),
                                    add("tempora"),
                                    add("suscipit"),
                                }};
                                renotifyInterval = "molestiae";
                            }}),
                        }};
                        notificationRateLimit = new NotificationRateLimit() {{
                            period = "minus";
                        }};
                    }};
                    combiner = "AND_WITH_MATCHING_RESOURCE";
                    conditions = new org.openapis.openapi.models.shared.Condition[]{{
                        add(new Condition() {{
                            conditionAbsent = new MetricAbsence() {{
                                aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "excepturi";
                                        crossSeriesReducer = "REDUCE_STDDEV";
                                        groupByFields = new String[]{{
                                            add("temporibus"),
                                            add("ab"),
                                            add("quis"),
                                            add("veritatis"),
                                        }};
                                        perSeriesAligner = "ALIGN_COUNT_FALSE";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "perferendis";
                                        crossSeriesReducer = "REDUCE_STDDEV";
                                        groupByFields = new String[]{{
                                            add("sapiente"),
                                            add("quo"),
                                            add("odit"),
                                            add("at"),
                                        }};
                                        perSeriesAligner = "ALIGN_PERCENTILE_50";
                                    }}),
                                }};
                                duration = "maiores";
                                filter = "molestiae";
                                trigger = new Trigger() {{
                                    count = 799159;
                                    percent = 8009.11;
                                }};
                            }};
                            conditionMatchedLog = new LogMatch() {{
                                filter = "esse";
                                labelExtractors = new java.util.HashMap<String, String>() {{
                                    put("porro", "dolorum");
                                    put("dicta", "nam");
                                    put("officia", "occaecati");
                                }};
                            }};
                            conditionMonitoringQueryLanguage = new MonitoringQueryLanguageCondition() {{
                                duration = "fugit";
                                evaluationMissingData = "EVALUATION_MISSING_DATA_ACTIVE";
                                query = "hic";
                                trigger = new Trigger() {{
                                    count = 758616;
                                    percent = 5218.48;
                                }};
                            }};
                            conditionThreshold = new MetricThreshold() {{
                                aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "commodi";
                                        crossSeriesReducer = "REDUCE_COUNT";
                                        groupByFields = new String[]{{
                                            add("qui"),
                                            add("impedit"),
                                        }};
                                        perSeriesAligner = "ALIGN_PERCENTILE_99";
                                    }}),
                                }};
                                comparison = "COMPARISON_LT";
                                denominatorAggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "excepturi";
                                        crossSeriesReducer = "REDUCE_MEAN";
                                        groupByFields = new String[]{{
                                            add("ad"),
                                        }};
                                        perSeriesAligner = "ALIGN_COUNT_TRUE";
                                    }}),
                                }};
                                denominatorFilter = "sed";
                                duration = "iste";
                                evaluationMissingData = "EVALUATION_MISSING_DATA_UNSPECIFIED";
                                filter = "natus";
                                forecastOptions = new ForecastOptions() {{
                                    forecastHorizon = "laboriosam";
                                }};
                                thresholdValue = 9437.49;
                                trigger = new Trigger() {{
                                    count = 902599;
                                    percent = 6818.2;
                                }};
                            }};
                            displayName = "in";
                            name = "corporis";
                        }}),
                        add(new Condition() {{
                            conditionAbsent = new MetricAbsence() {{
                                aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "iure";
                                        crossSeriesReducer = "REDUCE_PERCENTILE_50";
                                        groupByFields = new String[]{{
                                            add("architecto"),
                                            add("ipsa"),
                                            add("reiciendis"),
                                        }};
                                        perSeriesAligner = "ALIGN_COUNT_FALSE";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "mollitia";
                                        crossSeriesReducer = "REDUCE_FRACTION_TRUE";
                                        groupByFields = new String[]{{
                                            add("dolorem"),
                                        }};
                                        perSeriesAligner = "ALIGN_MAX";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "explicabo";
                                        crossSeriesReducer = "REDUCE_PERCENTILE_99";
                                        groupByFields = new String[]{{
                                            add("omnis"),
                                            add("nemo"),
                                        }};
                                        perSeriesAligner = "ALIGN_MAX";
                                    }}),
                                }};
                                duration = "excepturi";
                                filter = "accusantium";
                                trigger = new Trigger() {{
                                    count = 438601;
                                    percent = 6342.74;
                                }};
                            }};
                            conditionMatchedLog = new LogMatch() {{
                                filter = "doloribus";
                                labelExtractors = new java.util.HashMap<String, String>() {{
                                    put("architecto", "mollitia");
                                    put("dolorem", "culpa");
                                    put("consequuntur", "repellat");
                                    put("mollitia", "occaecati");
                                }};
                            }};
                            conditionMonitoringQueryLanguage = new MonitoringQueryLanguageCondition() {{
                                duration = "numquam";
                                evaluationMissingData = "EVALUATION_MISSING_DATA_INACTIVE";
                                query = "quam";
                                trigger = new Trigger() {{
                                    count = 474697;
                                    percent = 2444.25;
                                }};
                            }};
                            conditionThreshold = new MetricThreshold() {{
                                aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "quia";
                                        crossSeriesReducer = "REDUCE_SUM";
                                        groupByFields = new String[]{{
                                            add("laborum"),
                                        }};
                                        perSeriesAligner = "ALIGN_COUNT_FALSE";
                                    }}),
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
                                }};
                                comparison = "COMPARISON_NE";
                                denominatorAggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "nihil";
                                        crossSeriesReducer = "REDUCE_COUNT_TRUE";
                                        groupByFields = new String[]{{
                                            add("ipsa"),
                                            add("omnis"),
                                            add("voluptate"),
                                            add("cum"),
                                        }};
                                        perSeriesAligner = "ALIGN_NONE";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "doloremque";
                                        crossSeriesReducer = "REDUCE_COUNT";
                                        groupByFields = new String[]{{
                                            add("maiores"),
                                            add("dicta"),
                                        }};
                                        perSeriesAligner = "ALIGN_MAX";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "dolore";
                                        crossSeriesReducer = "REDUCE_COUNT";
                                        groupByFields = new String[]{{
                                            add("harum"),
                                        }};
                                        perSeriesAligner = "ALIGN_MAX";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "accusamus";
                                        crossSeriesReducer = "REDUCE_STDDEV";
                                        groupByFields = new String[]{{
                                            add("quae"),
                                            add("ipsum"),
                                            add("quidem"),
                                            add("molestias"),
                                        }};
                                        perSeriesAligner = "ALIGN_STDDEV";
                                    }}),
                                }};
                                denominatorFilter = "pariatur";
                                duration = "modi";
                                evaluationMissingData = "EVALUATION_MISSING_DATA_ACTIVE";
                                filter = "rem";
                                forecastOptions = new ForecastOptions() {{
                                    forecastHorizon = "voluptates";
                                }};
                                thresholdValue = 939.4;
                                trigger = new Trigger() {{
                                    count = 921158;
                                    percent = 5759.47;
                                }};
                            }};
                            displayName = "veritatis";
                            name = "itaque";
                        }}),
                        add(new Condition() {{
                            conditionAbsent = new MetricAbsence() {{
                                aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "enim";
                                        crossSeriesReducer = "REDUCE_NONE";
                                        groupByFields = new String[]{{
                                            add("quibusdam"),
                                            add("explicabo"),
                                            add("deserunt"),
                                        }};
                                        perSeriesAligner = "ALIGN_FRACTION_TRUE";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "quibusdam";
                                        crossSeriesReducer = "REDUCE_SUM";
                                        groupByFields = new String[]{{
                                            add("qui"),
                                            add("aliquid"),
                                        }};
                                        perSeriesAligner = "ALIGN_COUNT_TRUE";
                                    }}),
                                }};
                                duration = "quos";
                                filter = "perferendis";
                                trigger = new Trigger() {{
                                    count = 164940;
                                    percent = 8289.4;
                                }};
                            }};
                            conditionMatchedLog = new LogMatch() {{
                                filter = "ipsam";
                                labelExtractors = new java.util.HashMap<String, String>() {{
                                    put("fugit", "dolorum");
                                }};
                            }};
                            conditionMonitoringQueryLanguage = new MonitoringQueryLanguageCondition() {{
                                duration = "excepturi";
                                evaluationMissingData = "EVALUATION_MISSING_DATA_INACTIVE";
                                query = "facilis";
                                trigger = new Trigger() {{
                                    count = 735194;
                                    percent = 2884.76;
                                }};
                            }};
                            conditionThreshold = new MetricThreshold() {{
                                aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "eum";
                                        crossSeriesReducer = "REDUCE_MAX";
                                        groupByFields = new String[]{{
                                            add("sint"),
                                            add("aliquid"),
                                            add("provident"),
                                            add("necessitatibus"),
                                        }};
                                        perSeriesAligner = "ALIGN_STDDEV";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "officia";
                                        crossSeriesReducer = "REDUCE_MAX";
                                        groupByFields = new String[]{{
                                            add("a"),
                                            add("dolorum"),
                                            add("in"),
                                            add("in"),
                                        }};
                                        perSeriesAligner = "ALIGN_PERCENTILE_50";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "maiores";
                                        crossSeriesReducer = "REDUCE_FRACTION_TRUE";
                                        groupByFields = new String[]{{
                                            add("magnam"),
                                        }};
                                        perSeriesAligner = "ALIGN_PERCENTILE_99";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "facere";
                                        crossSeriesReducer = "REDUCE_STDDEV";
                                        groupByFields = new String[]{{
                                            add("laborum"),
                                            add("accusamus"),
                                        }};
                                        perSeriesAligner = "ALIGN_NEXT_OLDER";
                                    }}),
                                }};
                                comparison = "COMPARISON_LE";
                                denominatorAggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "accusamus";
                                        crossSeriesReducer = "REDUCE_PERCENTILE_05";
                                        groupByFields = new String[]{{
                                            add("provident"),
                                            add("nam"),
                                            add("id"),
                                        }};
                                        perSeriesAligner = "ALIGN_SUM";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "deleniti";
                                        crossSeriesReducer = "REDUCE_PERCENTILE_05";
                                        groupByFields = new String[]{{
                                            add("deserunt"),
                                        }};
                                        perSeriesAligner = "ALIGN_MEAN";
                                    }}),
                                }};
                                denominatorFilter = "vel";
                                duration = "natus";
                                evaluationMissingData = "EVALUATION_MISSING_DATA_ACTIVE";
                                filter = "molestiae";
                                forecastOptions = new ForecastOptions() {{
                                    forecastHorizon = "perferendis";
                                }};
                                thresholdValue = 4701.32;
                                trigger = new Trigger() {{
                                    count = 301575;
                                    percent = 7160.75;
                                }};
                            }};
                            displayName = "id";
                            name = "labore";
                        }}),
                    }};
                    creationRecord = new MutationRecord() {{
                        mutateTime = "labore";
                        mutatedBy = "suscipit";
                    }};
                    displayName = "natus";
                    documentation = new Documentation() {{
                        content = "nobis";
                        mimeType = "eum";
                    }};
                    enabled = false;
                    mutationRecord = new MutationRecord() {{
                        mutateTime = "vero";
                        mutatedBy = "aspernatur";
                    }};
                    name = "architecto";
                    notificationChannels = new String[]{{
                        add("et"),
                        add("excepturi"),
                    }};
                    userLabels = new java.util.HashMap<String, String>() {{
                        put("provident", "quos");
                        put("sint", "accusantium");
                    }};
                    validity = new Status() {{
                        code = 653201;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("ad", "eum");
                                put("dolor", "necessitatibus");
                                put("odit", "nemo");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("iure", "doloribus");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("eius", "maxime");
                                put("deleniti", "facilis");
                                put("in", "architecto");
                                put("architecto", "repudiandae");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("expedita", "nihil");
                                put("repellat", "quibusdam");
                            }}),
                        }};
                        message = "sed";
                    }};
                }};
                accessToken = "saepe";
                alt = "proto";
                callback = "accusantium";
                fields = "consequuntur";
                key = "praesentium";
                name = "natus";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "sunt";
                uploadType = "quo";
                uploadProtocol = "illum";
            }}            

            MonitoringProjectsAlertPoliciesCreateResponse res = sdk.projects.monitoringProjectsAlertPoliciesCreate(req, new MonitoringProjectsAlertPoliciesCreateSecurity() {{
                option1 = new MonitoringProjectsAlertPoliciesCreateSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.alertPolicy.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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
