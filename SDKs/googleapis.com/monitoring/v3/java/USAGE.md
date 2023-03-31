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