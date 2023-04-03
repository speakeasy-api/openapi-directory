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