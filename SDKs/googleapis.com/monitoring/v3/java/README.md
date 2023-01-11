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
                    name = "in";
                }};
                queryParams = new MonitoringProjectsAlertPoliciesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "minus";
                    alt = "json";
                    callback = "beatae";
                    fields = "illo";
                    key = "iste";
                    oauthToken = "atque";
                    prettyPrint = false;
                    quotaUser = "incidunt";
                    uploadType = "at";
                    uploadProtocol = "dolor";
                }};
                request = new AlertPolicy() {{
                    alertStrategy = new AlertStrategy() {{
                        autoClose = "totam";
                        notificationRateLimit = new NotificationRateLimit() {{
                            period = "qui";
                        }};
                    }};
                    combiner = "AND";
                    conditions = new openapisdk.models.shared.Condition[]() {{
                        add(new Condition() {{
                            conditionAbsent = new MetricAbsence() {{
                                aggregations = new openapisdk.models.shared.Aggregation[]() {{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "vel";
                                        crossSeriesReducer = "REDUCE_MIN";
                                        groupByFields = new String[]() {{
                                            add("architecto"),
                                            add("harum"),
                                        }};
                                        perSeriesAligner = "ALIGN_COUNT";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "omnis";
                                        crossSeriesReducer = "REDUCE_FRACTION_TRUE";
                                        groupByFields = new String[]() {{
                                            add("id"),
                                            add("quo"),
                                        }};
                                        perSeriesAligner = "ALIGN_COUNT";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "id";
                                        crossSeriesReducer = "REDUCE_FRACTION_TRUE";
                                        groupByFields = new String[]() {{
                                            add("voluptatibus"),
                                            add("laborum"),
                                        }};
                                        perSeriesAligner = "ALIGN_INTERPOLATE";
                                    }}),
                                }};
                                duration = "aliquam";
                                filter = "omnis";
                                trigger = new Trigger() {{
                                    count = 7330020844606414844;
                                    percent = 53.200001;
                                }};
                            }};
                            conditionMatchedLog = new LogMatch() {{
                                filter = "incidunt";
                                labelExtractors = new java.util.HashMap<String, String>() {{
                                    put("et", "nisi");
                                }};
                            }};
                            conditionMonitoringQueryLanguage = new MonitoringQueryLanguageCondition() {{
                                duration = "laboriosam";
                                evaluationMissingData = "EVALUATION_MISSING_DATA_INACTIVE";
                                query = "molestias";
                                trigger = new Trigger() {{
                                    count = 6552395454231848878;
                                    percent = 9.200000;
                                }};
                            }};
                            conditionThreshold = new MetricThreshold() {{
                                aggregations = new openapisdk.models.shared.Aggregation[]() {{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "deleniti";
                                        crossSeriesReducer = "REDUCE_MEAN";
                                        groupByFields = new String[]() {{
                                            add("et"),
                                            add("blanditiis"),
                                            add("nemo"),
                                        }};
                                        perSeriesAligner = "ALIGN_MAX";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "sed";
                                        crossSeriesReducer = "REDUCE_STDDEV";
                                        groupByFields = new String[]() {{
                                            add("quo"),
                                        }};
                                        perSeriesAligner = "ALIGN_MAX";
                                    }}),
                                }};
                                comparison = "COMPARISON_NE";
                                denominatorAggregations = new openapisdk.models.shared.Aggregation[]() {{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "iusto";
                                        crossSeriesReducer = "REDUCE_PERCENTILE_95";
                                        groupByFields = new String[]() {{
                                            add("incidunt"),
                                            add("molestiae"),
                                            add("assumenda"),
                                        }};
                                        perSeriesAligner = "ALIGN_NEXT_OLDER";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "quia";
                                        crossSeriesReducer = "REDUCE_MAX";
                                        groupByFields = new String[]() {{
                                            add("provident"),
                                            add("assumenda"),
                                        }};
                                        perSeriesAligner = "ALIGN_SUM";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "saepe";
                                        crossSeriesReducer = "REDUCE_MEAN";
                                        groupByFields = new String[]() {{
                                            add("quia"),
                                            add("et"),
                                            add("sequi"),
                                        }};
                                        perSeriesAligner = "ALIGN_MAX";
                                    }}),
                                }};
                                denominatorFilter = "quibusdam";
                                duration = "ipsum";
                                evaluationMissingData = "EVALUATION_MISSING_DATA_UNSPECIFIED";
                                filter = "laborum";
                                forecastOptions = new ForecastOptions() {{
                                    forecastHorizon = "quidem";
                                }};
                                thresholdValue = 21.100000;
                                trigger = new Trigger() {{
                                    count = 7309891088640560876;
                                    percent = 13.200000;
                                }};
                            }};
                            displayName = "pariatur";
                            name = "perspiciatis";
                        }}),
                        add(new Condition() {{
                            conditionAbsent = new MetricAbsence() {{
                                aggregations = new openapisdk.models.shared.Aggregation[]() {{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "quis";
                                        crossSeriesReducer = "REDUCE_COUNT_FALSE";
                                        groupByFields = new String[]() {{
                                            add("perspiciatis"),
                                        }};
                                        perSeriesAligner = "ALIGN_FRACTION_TRUE";
                                    }}),
                                }};
                                duration = "ratione";
                                filter = "est";
                                trigger = new Trigger() {{
                                    count = 4132160523853829376;
                                    percent = 50.200001;
                                }};
                            }};
                            conditionMatchedLog = new LogMatch() {{
                                filter = "est";
                                labelExtractors = new java.util.HashMap<String, String>() {{
                                    put("dolorum", "exercitationem");
                                }};
                            }};
                            conditionMonitoringQueryLanguage = new MonitoringQueryLanguageCondition() {{
                                duration = "illum";
                                evaluationMissingData = "EVALUATION_MISSING_DATA_ACTIVE";
                                query = "animi";
                                trigger = new Trigger() {{
                                    count = 4650218171830700322;
                                    percent = 30.100000;
                                }};
                            }};
                            conditionThreshold = new MetricThreshold() {{
                                aggregations = new openapisdk.models.shared.Aggregation[]() {{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "enim";
                                        crossSeriesReducer = "REDUCE_PERCENTILE_50";
                                        groupByFields = new String[]() {{
                                            add("eos"),
                                        }};
                                        perSeriesAligner = "ALIGN_COUNT_FALSE";
                                    }}),
                                }};
                                comparison = "COMPARISON_UNSPECIFIED";
                                denominatorAggregations = new openapisdk.models.shared.Aggregation[]() {{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "facere";
                                        crossSeriesReducer = "REDUCE_PERCENTILE_99";
                                        groupByFields = new String[]() {{
                                            add("ut"),
                                            add("hic"),
                                            add("enim"),
                                        }};
                                        perSeriesAligner = "ALIGN_COUNT";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "non";
                                        crossSeriesReducer = "REDUCE_MAX";
                                        groupByFields = new String[]() {{
                                            add("quae"),
                                            add("ut"),
                                        }};
                                        perSeriesAligner = "ALIGN_PERCENT_CHANGE";
                                    }}),
                                }};
                                denominatorFilter = "consequatur";
                                duration = "consequatur";
                                evaluationMissingData = "EVALUATION_MISSING_DATA_ACTIVE";
                                filter = "dolorem";
                                forecastOptions = new ForecastOptions() {{
                                    forecastHorizon = "eius";
                                }};
                                thresholdValue = 20.100000;
                                trigger = new Trigger() {{
                                    count = 882302016812765810;
                                    percent = 88.099998;
                                }};
                            }};
                            displayName = "laborum";
                            name = "et";
                        }}),
                        add(new Condition() {{
                            conditionAbsent = new MetricAbsence() {{
                                aggregations = new openapisdk.models.shared.Aggregation[]() {{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "magnam";
                                        crossSeriesReducer = "REDUCE_STDDEV";
                                        groupByFields = new String[]() {{
                                            add("vel"),
                                            add("aut"),
                                        }};
                                        perSeriesAligner = "ALIGN_NONE";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "eum";
                                        crossSeriesReducer = "REDUCE_MIN";
                                        groupByFields = new String[]() {{
                                            add("fugit"),
                                        }};
                                        perSeriesAligner = "ALIGN_RATE";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "quia";
                                        crossSeriesReducer = "REDUCE_MAX";
                                        groupByFields = new String[]() {{
                                            add("molestiae"),
                                            add("culpa"),
                                        }};
                                        perSeriesAligner = "ALIGN_MAX";
                                    }}),
                                }};
                                duration = "eum";
                                filter = "non";
                                trigger = new Trigger() {{
                                    count = 3147362487690711331;
                                    percent = 19.100000;
                                }};
                            }};
                            conditionMatchedLog = new LogMatch() {{
                                filter = "ut";
                                labelExtractors = new java.util.HashMap<String, String>() {{
                                    put("at", "enim");
                                    put("et", "est");
                                    put("optio", "magnam");
                                }};
                            }};
                            conditionMonitoringQueryLanguage = new MonitoringQueryLanguageCondition() {{
                                duration = "excepturi";
                                evaluationMissingData = "EVALUATION_MISSING_DATA_UNSPECIFIED";
                                query = "asperiores";
                                trigger = new Trigger() {{
                                    count = 7048466776760112280;
                                    percent = 63.099998;
                                }};
                            }};
                            conditionThreshold = new MetricThreshold() {{
                                aggregations = new openapisdk.models.shared.Aggregation[]() {{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "magni";
                                        crossSeriesReducer = "REDUCE_COUNT_FALSE";
                                        groupByFields = new String[]() {{
                                            add("eaque"),
                                        }};
                                        perSeriesAligner = "ALIGN_PERCENTILE_50";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "consectetur";
                                        crossSeriesReducer = "REDUCE_MAX";
                                        groupByFields = new String[]() {{
                                            add("omnis"),
                                            add("nemo"),
                                            add("atque"),
                                        }};
                                        perSeriesAligner = "ALIGN_COUNT";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "at";
                                        crossSeriesReducer = "REDUCE_COUNT_FALSE";
                                        groupByFields = new String[]() {{
                                            add("nesciunt"),
                                            add("exercitationem"),
                                        }};
                                        perSeriesAligner = "ALIGN_COUNT";
                                    }}),
                                }};
                                comparison = "COMPARISON_GE";
                                denominatorAggregations = new openapisdk.models.shared.Aggregation[]() {{
                                    add(new Aggregation() {{
                                        alignmentPeriod = "sed";
                                        crossSeriesReducer = "REDUCE_COUNT_FALSE";
                                        groupByFields = new String[]() {{
                                            add("eveniet"),
                                        }};
                                        perSeriesAligner = "ALIGN_PERCENTILE_99";
                                    }}),
                                    add(new Aggregation() {{
                                        alignmentPeriod = "fuga";
                                        crossSeriesReducer = "REDUCE_COUNT_TRUE";
                                        groupByFields = new String[]() {{
                                            add("dolorum"),
                                            add("tempora"),
                                            add("doloribus"),
                                        }};
                                        perSeriesAligner = "ALIGN_PERCENTILE_95";
                                    }}),
                                }};
                                denominatorFilter = "dolor";
                                duration = "ab";
                                evaluationMissingData = "EVALUATION_MISSING_DATA_ACTIVE";
                                filter = "et";
                                forecastOptions = new ForecastOptions() {{
                                    forecastHorizon = "dolor";
                                }};
                                thresholdValue = 19.100000;
                                trigger = new Trigger() {{
                                    count = 7693822482088784495;
                                    percent = 7.100000;
                                }};
                            }};
                            displayName = "eveniet";
                            name = "est";
                        }}),
                    }};
                    creationRecord = new MutationRecord() {{
                        mutateTime = "libero";
                        mutatedBy = "eligendi";
                    }};
                    displayName = "corporis";
                    documentation = new Documentation() {{
                        content = "inventore";
                        mimeType = "nihil";
                    }};
                    enabled = true;
                    mutationRecord = new MutationRecord() {{
                        mutateTime = "porro";
                        mutatedBy = "illo";
                    }};
                    name = "aut";
                    notificationChannels = new String[]() {{
                        add("porro"),
                    }};
                    userLabels = new java.util.HashMap<String, String>() {{
                        put("architecto", "ipsam");
                        put("excepturi", "iure");
                    }};
                    validity = new Status() {{
                        code = 6369714796249072041;
                        details = new java.util.HashMap<String, Object>[]() {{
                            add(new java.util.HashMap<String, Object>() {{
                                put("aut", "possimus");
                                put("sunt", "maiores");
                                put("neque", "ducimus");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("totam", "iusto");
                                put("voluptas", "qui");
                                put("sit", "vero");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("voluptas", "sint");
                                put("omnis", "provident");
                                put("non", "eaque");
                            }}),
                        }};
                        message = "veritatis";
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
