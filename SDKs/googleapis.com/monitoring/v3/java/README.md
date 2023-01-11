# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    name = "sit";
                }};
                queryParams = new MonitoringProjectsAlertPoliciesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new AlertPolicy() {{
                    alertStrategy = new AlertStrategy() {{
                        autoClose = "dicta";
                        notificationRateLimit = new NotificationRateLimit() {{
                            period = "debitis";
                        }};
                    }};
                    combiner = "COMBINE_UNSPECIFIED";
                    conditions = new openapisdk.models.shared.Condition[]() {{
                        add(new Condition() {{
                            conditionAbsent = new MetricAbsence() {{
                                aggregations = new openapisdk.models.shared.Aggregation[]() {{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "dolorem";
                                        crossSeriesReducer = "REDUCE_COUNT_FALSE";
                                        groupByFields = new String[]() {{
                                            add("iste"),
                                        }};
                                        perSeriesAligner = "ALIGN_PERCENT_CHANGE";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "totam";
                                        crossSeriesReducer = "REDUCE_PERCENTILE_99";
                                        groupByFields = new String[]() {{
                                            add("debitis"),
                                            add("vel"),
                                            add("odio"),
                                        }};
                                        perSeriesAligner = "ALIGN_DELTA";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "id";
                                        crossSeriesReducer = "REDUCE_MAX";
                                        groupByFields = new String[]() {{
                                            add("totam"),
                                            add("commodi"),
                                            add("quis"),
                                        }};
                                        perSeriesAligner = "ALIGN_FRACTION_TRUE";
                                    }}),
                                }};
                                duration = "aut";
                                filter = "odit";
                                trigger = new Trigger() {{
                                    count = 5001958211167890979;
                                    percent = 14.200000;
                                }};
                            }};
                            conditionMatchedLog = new LogMatch() {{
                                filter = "aut";
                                labelExtractors = new java.util.HashMap<String, String>() {{
                                    put("sed", "officiis");
                                }};
                            }};
                            conditionMonitoringQueryLanguage = new MonitoringQueryLanguageCondition() {{
                                duration = "autem";
                                evaluationMissingData = "EVALUATION_MISSING_DATA_UNSPECIFIED";
                                query = "nobis";
                                trigger = new Trigger() {{
                                    count = 4345851588384648695;
                                    percent = 77.099998;
                                }};
                            }};
                            conditionThreshold = new MetricThreshold() {{
                                aggregations = new openapisdk.models.shared.Aggregation[]() {{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "ipsum";
                                        crossSeriesReducer = "REDUCE_PERCENTILE_50";
                                        groupByFields = new String[]() {{
                                            add("sint"),
                                            add("inventore"),
                                        }};
                                        perSeriesAligner = "ALIGN_MEAN";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "exercitationem";
                                        crossSeriesReducer = "REDUCE_COUNT_FALSE";
                                        groupByFields = new String[]() {{
                                            add("tempore"),
                                        }};
                                        perSeriesAligner = "ALIGN_DELTA";
                                    }}),
                                }};
                                comparison = "COMPARISON_EQ";
                                denominatorAggregations = new openapisdk.models.shared.Aggregation[]() {{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "beatae";
                                        crossSeriesReducer = "REDUCE_COUNT_TRUE";
                                        groupByFields = new String[]() {{
                                            add("et"),
                                            add("omnis"),
                                            add("ipsum"),
                                        }};
                                        perSeriesAligner = "ALIGN_MEAN";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "dolores";
                                        crossSeriesReducer = "REDUCE_PERCENTILE_05";
                                        groupByFields = new String[]() {{
                                            add("rerum"),
                                            add("mollitia"),
                                        }};
                                        perSeriesAligner = "ALIGN_MIN";
                                    }}),
                                }};
                                denominatorFilter = "quam";
                                duration = "reprehenderit";
                                evaluationMissingData = "EVALUATION_MISSING_DATA_ACTIVE";
                                filter = "qui";
                                forecastOptions = new ForecastOptions() {{
                                    forecastHorizon = "unde";
                                }};
                                thresholdValue = 31.100000;
                                trigger = new Trigger() {{
                                    count = 8086159467323165929;
                                    percent = 22.100000;
                                }};
                            }};
                            displayName = "ab";
                            name = "neque";
                        }}),
                    }};
                    creationRecord = new MutationRecord() {{
                        mutateTime = "ullam";
                        mutatedBy = "et";
                    }};
                    displayName = "accusantium";
                    documentation = new Documentation() {{
                        content = "esse";
                        mimeType = "architecto";
                    }};
                    enabled = false;
                    mutationRecord = new MutationRecord() {{
                        mutateTime = "velit";
                        mutatedBy = "cumque";
                    }};
                    name = "soluta";
                    notificationChannels = new String[]() {{
                        add("voluptates"),
                        add("magni"),
                    }};
                    userLabels = new java.util.HashMap<String, String>() {{
                        put("optio", "qui");
                        put("earum", "illo");
                        put("omnis", "ut");
                    }};
                    validity = new Status() {{
                        code = 7442289190031176026;
                        details = new java.util.HashMap<String, Object>[]() {{
                            add(new java.util.HashMap<String, Object>() {{
                                put("error", "reprehenderit");
                                put("consectetur", "nostrum");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("laboriosam", "sed");
                            }}),
                        }};
                        message = "a";
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
