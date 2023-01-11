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