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