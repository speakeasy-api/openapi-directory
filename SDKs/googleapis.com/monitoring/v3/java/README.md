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

            MonitoringProjectsAlertPoliciesCreateRequest req = new MonitoringProjectsAlertPoliciesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                alertPolicy = new AlertPolicy() {{
                    alertStrategy = new AlertStrategy() {{
                        autoClose = "distinctio";
                        notificationChannelStrategy = new org.openapis.openapi.models.shared.NotificationChannelStrategy[]{{
                            add(new NotificationChannelStrategy() {{
                                notificationChannelNames = new String[]{{
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
                            add(new NotificationChannelStrategy() {{
                                notificationChannelNames = new String[]{{
                                    add("placeat"),
                                    add("voluptatum"),
                                    add("iusto"),
                                    add("excepturi"),
                                }};
                                renotifyInterval = "nisi";
                            }}),
                        }};
                        notificationRateLimit = new NotificationRateLimit() {{
                            period = "recusandae";
                        }};;
                    }};;
                    combiner = AlertPolicyCombinerEnum.AND_WITH_MATCHING_RESOURCE;
                    conditions = new org.openapis.openapi.models.shared.Condition[]{{
                        add(new Condition() {{
                            conditionAbsent = new MetricAbsence() {{
                                aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "veritatis";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_FRACTION_TRUE;
                                        groupByFields = new String[]{{
                                            add("ipsam"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_PERCENTILE95;
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "sapiente";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_PERCENTILE99;
                                        groupByFields = new String[]{{
                                            add("at"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_PERCENTILE50;
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
                                evaluationMissingData = MonitoringQueryLanguageConditionEvaluationMissingDataEnum.EVALUATION_MISSING_DATA_ACTIVE;
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
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_COUNT;
                                        groupByFields = new String[]{{
                                            add("qui"),
                                            add("impedit"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_PERCENTILE99;
                                    }}),
                                }};
                                comparison = MetricThresholdComparisonEnum.COMPARISON_LT;
                                denominatorAggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "excepturi";
                                        crossSeriesReducer = AggregationCrossSeriesReducerEnum.REDUCE_MEAN;
                                        groupByFields = new String[]{{
                                            add("ad"),
                                        }};
                                        perSeriesAligner = AggregationPerSeriesAlignerEnum.ALIGN_COUNT_TRUE;
                                    }}),
                                }};
                                denominatorFilter = "sed";
                                duration = "iste";
                                evaluationMissingData = MetricThresholdEvaluationMissingDataEnum.EVALUATION_MISSING_DATA_UNSPECIFIED;
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
                            name = "Sheryl Kertzmann";
                        }}),
                    }};
                    creationRecord = new MutationRecord() {{
                        mutateTime = "architecto";
                        mutatedBy = "ipsa";
                    }};;
                    displayName = "reiciendis";
                    documentation = new Documentation() {{
                        content = "est";
                        mimeType = "mollitia";
                    }};;
                    enabled = false;
                    mutationRecord = new MutationRecord() {{
                        mutateTime = "laborum";
                        mutatedBy = "dolores";
                    }};;
                    name = "Stacy Champlin";
                    notificationChannels = new String[]{{
                        add("nemo"),
                        add("minima"),
                        add("excepturi"),
                    }};
                    userLabels = new java.util.HashMap<String, String>() {{
                        put("iure", "culpa");
                    }};
                    validity = new Status() {{
                        code = 988374;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("mollitia", "dolorem");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("consequuntur", "repellat");
                                put("mollitia", "occaecati");
                                put("numquam", "commodi");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("molestiae", "velit");
                                put("error", "quia");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("vitae", "laborum");
                                put("animi", "enim");
                            }}),
                        }};
                        message = "odit";
                    }};;
                }};;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "tenetur";
                fields = "ipsam";
                key = "id";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "quasi";
                uploadProtocol = "error";
            }};            

            MonitoringProjectsAlertPoliciesCreateResponse res = sdk.projects.monitoringProjectsAlertPoliciesCreate(req, new MonitoringProjectsAlertPoliciesCreateSecurity() {{
                option1 = new MonitoringProjectsAlertPoliciesCreateSecurityOption1("temporibus", "laborum") {{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [monitoringProjectsAlertPoliciesCreate](docs/projects/README.md#monitoringprojectsalertpoliciescreate) - Creates a new alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.
* [monitoringProjectsAlertPoliciesList](docs/projects/README.md#monitoringprojectsalertpolicieslist) - Lists the existing alerting policies for the workspace.
* [monitoringProjectsCollectdTimeSeriesCreate](docs/projects/README.md#monitoringprojectscollectdtimeseriescreate) - Cloud Monitoring Agent only: Creates a new time series.This method is only for use by the Cloud Monitoring Agent. Use projects.timeSeries.create instead.
* [monitoringProjectsGroupsCreate](docs/projects/README.md#monitoringprojectsgroupscreate) - Creates a new group.
* [monitoringProjectsGroupsList](docs/projects/README.md#monitoringprojectsgroupslist) - Lists the existing groups.
* [monitoringProjectsGroupsMembersList](docs/projects/README.md#monitoringprojectsgroupsmemberslist) - Lists the monitored resources that are members of a group.
* [monitoringProjectsGroupsUpdate](docs/projects/README.md#monitoringprojectsgroupsupdate) - Updates an existing group. You can change any group attributes except name.
* [monitoringProjectsMetricDescriptorsCreate](docs/projects/README.md#monitoringprojectsmetricdescriptorscreate) - Creates a new metric descriptor. The creation is executed asynchronously. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics). The metric descriptor is updated if it already exists, except that metric labels are never removed.
* [monitoringProjectsMetricDescriptorsList](docs/projects/README.md#monitoringprojectsmetricdescriptorslist) - Lists metric descriptors that match a filter.
* [monitoringProjectsMonitoredResourceDescriptorsList](docs/projects/README.md#monitoringprojectsmonitoredresourcedescriptorslist) - Lists monitored resource descriptors that match a filter.
* [monitoringProjectsNotificationChannelDescriptorsList](docs/projects/README.md#monitoringprojectsnotificationchanneldescriptorslist) - Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added.
* [monitoringProjectsNotificationChannelsCreate](docs/projects/README.md#monitoringprojectsnotificationchannelscreate) - Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.
* [monitoringProjectsNotificationChannelsGetVerificationCode](docs/projects/README.md#monitoringprojectsnotificationchannelsgetverificationcode) - Requests a verification code for an already verified channel that can then be used in a call to VerifyNotificationChannel() on a different channel with an equivalent identity in the same or in a different project. This makes it possible to copy a channel between projects without requiring manual reverification of the channel. If the channel is not in the verified state, this method will fail (in other words, this may only be used if the SendNotificationChannelVerificationCode and VerifyNotificationChannel paths have already been used to put the given channel into the verified state).There is no guarantee that the verification codes returned by this method will be of a similar structure or form as the ones that are delivered to the channel via SendNotificationChannelVerificationCode; while VerifyNotificationChannel() will recognize both the codes delivered via SendNotificationChannelVerificationCode() and returned from GetNotificationChannelVerificationCode(), it is typically the case that the verification codes delivered via SendNotificationChannelVerificationCode() will be shorter and also have a shorter expiration (e.g. codes such as "G-123456") whereas GetVerificationCode() will typically return a much longer, websafe base 64 encoded string that has a longer expiration time.
* [monitoringProjectsNotificationChannelsList](docs/projects/README.md#monitoringprojectsnotificationchannelslist) - Lists the notification channels that have been created for the project. To list the types of notification channels that are supported, use the ListNotificationChannelDescriptors method.
* [monitoringProjectsNotificationChannelsSendVerificationCode](docs/projects/README.md#monitoringprojectsnotificationchannelssendverificationcode) - Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel.
* [monitoringProjectsNotificationChannelsVerify](docs/projects/README.md#monitoringprojectsnotificationchannelsverify) - Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode.
* [monitoringProjectsSnoozesCreate](docs/projects/README.md#monitoringprojectssnoozescreate) - Creates a Snooze that will prevent alerts, which match the provided criteria, from being opened. The Snooze applies for a specific time interval.
* [monitoringProjectsSnoozesList](docs/projects/README.md#monitoringprojectssnoozeslist) - Lists the Snoozes associated with a project. Can optionally pass in filter, which specifies predicates to match Snoozes.
* [monitoringProjectsTimeSeriesCreate](docs/projects/README.md#monitoringprojectstimeseriescreate) - Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response.
* [monitoringProjectsTimeSeriesCreateService](docs/projects/README.md#monitoringprojectstimeseriescreateservice) - Creates or adds data to one or more service time series. A service time series is a time series for a metric from a Google Cloud service. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This endpoint rejects writes to user-defined metrics. This method is only for use by Google Cloud services. Use projects.timeSeries.create instead.
* [monitoringProjectsTimeSeriesList](docs/projects/README.md#monitoringprojectstimeserieslist) - Lists time series that match a filter.
* [monitoringProjectsTimeSeriesQuery](docs/projects/README.md#monitoringprojectstimeseriesquery) - Queries time series using Monitoring Query Language.
* [monitoringProjectsUptimeCheckConfigsCreate](docs/projects/README.md#monitoringprojectsuptimecheckconfigscreate) - Creates a new Uptime check configuration.
* [monitoringProjectsUptimeCheckConfigsList](docs/projects/README.md#monitoringprojectsuptimecheckconfigslist) - Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

### [services](docs/services/README.md)

* [monitoringServicesCreate](docs/services/README.md#monitoringservicescreate) - Create a Service.
* [monitoringServicesList](docs/services/README.md#monitoringserviceslist) - List Services for this Metrics Scope.
* [monitoringServicesServiceLevelObjectivesCreate](docs/services/README.md#monitoringservicesservicelevelobjectivescreate) - Create a ServiceLevelObjective for the given Service.
* [monitoringServicesServiceLevelObjectivesDelete](docs/services/README.md#monitoringservicesservicelevelobjectivesdelete) - Delete the given ServiceLevelObjective.
* [monitoringServicesServiceLevelObjectivesGet](docs/services/README.md#monitoringservicesservicelevelobjectivesget) - Get a ServiceLevelObjective by name.
* [monitoringServicesServiceLevelObjectivesList](docs/services/README.md#monitoringservicesservicelevelobjectiveslist) - List the ServiceLevelObjectives for the given Service.
* [monitoringServicesServiceLevelObjectivesPatch](docs/services/README.md#monitoringservicesservicelevelobjectivespatch) - Update the given ServiceLevelObjective.

### [uptimeCheckIps](docs/uptimecheckips/README.md)

* [monitoringUptimeCheckIpsList](docs/uptimecheckips/README.md#monitoringuptimecheckipslist) - Returns the list of IP addresses that checkers run from
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
