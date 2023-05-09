# autoscalers

### Available Operations

* [computeAutoscalersAggregatedList](#computeautoscalersaggregatedlist) - Retrieves an aggregated list of autoscalers.
* [computeAutoscalersDelete](#computeautoscalersdelete) - Deletes the specified autoscaler.
* [computeAutoscalersGet](#computeautoscalersget) - Returns the specified autoscaler resource.
* [computeAutoscalersInsert](#computeautoscalersinsert) - Creates an autoscaler in the specified project using the data included in the request.
* [computeAutoscalersList](#computeautoscalerslist) - Retrieves a list of autoscalers contained within the specified zone.
* [computeAutoscalersPatch](#computeautoscalerspatch) - Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeAutoscalersUpdate](#computeautoscalersupdate) - Updates an autoscaler in the specified project using the data included in the request.

## computeAutoscalersAggregatedList

Retrieves an aggregated list of autoscalers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeAutoscalersAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeAutoscalersAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeAutoscalersAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeAutoscalersAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeAutoscalersAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeAutoscalersAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeAutoscalersAggregatedListRequest req = new ComputeAutoscalersAggregatedListRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "vel";
                fields = "natus";
                filter = "omnis";
                includeAllScopes = false;
                key = "molestiae";
                maxResults = 19193L;
                oauthToken = "nihil";
                orderBy = "magnam";
                pageToken = "distinctio";
                prettyPrint = false;
                quotaUser = "id";
                returnPartialSuccess = false;
                uploadType = "labore";
                uploadProtocol = "labore";
                userIp = "suscipit";
            }};            

            ComputeAutoscalersAggregatedListResponse res = sdk.autoscalers.computeAutoscalersAggregatedList(req, new ComputeAutoscalersAggregatedListSecurity() {{
                option1 = new ComputeAutoscalersAggregatedListSecurityOption1("natus", "nobis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.autoscalerAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeAutoscalersDelete

Deletes the specified autoscaler.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeAutoscalersDeleteRequest;
import org.openapis.openapi.models.operations.ComputeAutoscalersDeleteResponse;
import org.openapis.openapi.models.operations.ComputeAutoscalersDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeAutoscalersDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeAutoscalersDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeAutoscalersDeleteRequest req = new ComputeAutoscalersDeleteRequest("eum", "vero", "aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "ullam";
                key = "provident";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "sint";
                requestId = "accusantium";
                uploadType = "mollitia";
                uploadProtocol = "reiciendis";
                userIp = "mollitia";
            }};            

            ComputeAutoscalersDeleteResponse res = sdk.autoscalers.computeAutoscalersDelete(req, new ComputeAutoscalersDeleteSecurity() {{
                option1 = new ComputeAutoscalersDeleteSecurityOption1("ad", "eum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeAutoscalersGet

Returns the specified autoscaler resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeAutoscalersGetRequest;
import org.openapis.openapi.models.operations.ComputeAutoscalersGetResponse;
import org.openapis.openapi.models.operations.ComputeAutoscalersGetSecurity;
import org.openapis.openapi.models.operations.ComputeAutoscalersGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeAutoscalersGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeAutoscalersGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeAutoscalersGetRequest req = new ComputeAutoscalersGetRequest("dolor", "necessitatibus", "odit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "doloribus";
                fields = "debitis";
                key = "eius";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "facilis";
                uploadProtocol = "in";
                userIp = "architecto";
            }};            

            ComputeAutoscalersGetResponse res = sdk.autoscalers.computeAutoscalersGet(req, new ComputeAutoscalersGetSecurity() {{
                option1 = new ComputeAutoscalersGetSecurityOption1("architecto", "repudiandae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.autoscaler != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeAutoscalersInsert

Creates an autoscaler in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeAutoscalersInsertRequest;
import org.openapis.openapi.models.operations.ComputeAutoscalersInsertResponse;
import org.openapis.openapi.models.operations.ComputeAutoscalersInsertSecurity;
import org.openapis.openapi.models.operations.ComputeAutoscalersInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeAutoscalersInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Autoscaler;
import org.openapis.openapi.models.shared.AutoscalerStatusDetails;
import org.openapis.openapi.models.shared.AutoscalerStatusDetailsTypeEnum;
import org.openapis.openapi.models.shared.AutoscalerStatusEnum;
import org.openapis.openapi.models.shared.AutoscalingPolicy;
import org.openapis.openapi.models.shared.AutoscalingPolicyCpuUtilization;
import org.openapis.openapi.models.shared.AutoscalingPolicyCpuUtilizationPredictiveMethodEnum;
import org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilization;
import org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum;
import org.openapis.openapi.models.shared.AutoscalingPolicyLoadBalancingUtilization;
import org.openapis.openapi.models.shared.AutoscalingPolicyModeEnum;
import org.openapis.openapi.models.shared.AutoscalingPolicyScaleInControl;
import org.openapis.openapi.models.shared.AutoscalingPolicyScalingSchedule;
import org.openapis.openapi.models.shared.FixedOrPercent;
import org.openapis.openapi.models.shared.ScalingScheduleStatus;
import org.openapis.openapi.models.shared.ScalingScheduleStatusStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeAutoscalersInsertRequest req = new ComputeAutoscalersInsertRequest("ullam", "expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                autoscaler = new Autoscaler() {{
                    autoscalingPolicy = new AutoscalingPolicy() {{
                        coolDownPeriodSec = 998848;
                        cpuUtilization = new AutoscalingPolicyCpuUtilization() {{
                            predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum.OPTIMIZE_AVAILABILITY;
                            utilizationTarget = 1494.48;
                        }};;
                        customMetricUtilizations = new org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilization[]{{
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "pariatur";
                                metric = "accusantium";
                                singleInstanceAssignment = 1624.93;
                                utilizationTarget = 5083.15;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_SECOND;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "magni";
                                metric = "sunt";
                                singleInstanceAssignment = 7790.51;
                                utilizationTarget = 8480.09;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.GAUGE;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "maxime";
                                metric = "ea";
                                singleInstanceAssignment = 5691.01;
                                utilizationTarget = 1399.72;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_SECOND;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "accusantium";
                                metric = "ab";
                                singleInstanceAssignment = 9825.75;
                                utilizationTarget = 6974.29;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_SECOND;
                            }}),
                        }};
                        loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization() {{
                            utilizationTarget = 4535.43;
                        }};;
                        maxNumReplicas = 420075;
                        minNumReplicas = 722056;
                        mode = AutoscalingPolicyModeEnum.OFF;
                        scaleInControl = new AutoscalingPolicyScaleInControl() {{
                            maxScaledInReplicas = new FixedOrPercent() {{
                                calculated = 866383;
                                fixed = 365496;
                                percent = 975522;
                            }};;
                            timeWindowSec = 16627;
                        }};;
                        scalingSchedules = new java.util.HashMap<String, org.openapis.openapi.models.shared.AutoscalingPolicyScalingSchedule>() {{
                            put("amet", new AutoscalingPolicyScalingSchedule() {{
                                description = "aut";
                                disabled = false;
                                durationSec = 764912;
                                minRequiredReplicas = 359978;
                                schedule = "hic";
                                timeZone = "libero";
                            }});
                            put("nobis", new AutoscalingPolicyScalingSchedule() {{
                                description = "dolores";
                                disabled = false;
                                durationSec = 339404;
                                minRequiredReplicas = 521037;
                                schedule = "dignissimos";
                                timeZone = "eaque";
                            }});
                            put("quis", new AutoscalingPolicyScalingSchedule() {{
                                description = "nesciunt";
                                disabled = false;
                                durationSec = 179490;
                                minRequiredReplicas = 18521;
                                schedule = "dolores";
                                timeZone = "minus";
                            }});
                            put("quam", new AutoscalingPolicyScalingSchedule() {{
                                description = "dolor";
                                disabled = false;
                                durationSec = 874573;
                                minRequiredReplicas = 345352;
                                schedule = "hic";
                                timeZone = "recusandae";
                            }});
                        }};
                    }};;
                    creationTimestamp = "omnis";
                    description = "facilis";
                    id = "perspiciatis";
                    kind = "voluptatem";
                    name = "Bobby Kutch V";
                    recommendedSize = 699098;
                    region = "adipisci";
                    scalingScheduleStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.ScalingScheduleStatus>() {{
                        put("earum", new ScalingScheduleStatus() {{
                            lastStartTime = "modi";
                            nextStartTime = "iste";
                            state = ScalingScheduleStatusStateEnum.OBSOLETE;
                        }});
                        put("deleniti", new ScalingScheduleStatus() {{
                            lastStartTime = "pariatur";
                            nextStartTime = "provident";
                            state = ScalingScheduleStatusStateEnum.READY;
                        }});
                        put("libero", new ScalingScheduleStatus() {{
                            lastStartTime = "delectus";
                            nextStartTime = "quaerat";
                            state = ScalingScheduleStatusStateEnum.OBSOLETE;
                        }});
                        put("aliquid", new ScalingScheduleStatus() {{
                            lastStartTime = "dolorem";
                            nextStartTime = "dolorem";
                            state = ScalingScheduleStatusStateEnum.ACTIVE;
                        }});
                    }};
                    selfLink = "qui";
                    status = AutoscalerStatusEnum.ACTIVE;
                    statusDetails = new org.openapis.openapi.models.shared.AutoscalerStatusDetails[]{{
                        add(new AutoscalerStatusDetails() {{
                            message = "excepturi";
                            type = AutoscalerStatusDetailsTypeEnum.SCALING_TARGET_DOES_NOT_EXIST;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "voluptate";
                            type = AutoscalerStatusDetailsTypeEnum.MODE_ONLY_SCALE_OUT;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "reiciendis";
                            type = AutoscalerStatusDetailsTypeEnum.CUSTOM_METRIC_INVALID;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "dolorum";
                            type = AutoscalerStatusDetailsTypeEnum.MIN_EQUALS_MAX;
                        }}),
                    }};
                    target = "veritatis";
                    zone = "ipsa";
                }};;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "odio";
                fields = "quaerat";
                key = "accusamus";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                requestId = "voluptas";
                uploadType = "natus";
                uploadProtocol = "eos";
                userIp = "atque";
            }};            

            ComputeAutoscalersInsertResponse res = sdk.autoscalers.computeAutoscalersInsert(req, new ComputeAutoscalersInsertSecurity() {{
                option1 = new ComputeAutoscalersInsertSecurityOption1("sit", "fugiat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeAutoscalersList

Retrieves a list of autoscalers contained within the specified zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeAutoscalersListRequest;
import org.openapis.openapi.models.operations.ComputeAutoscalersListResponse;
import org.openapis.openapi.models.operations.ComputeAutoscalersListSecurity;
import org.openapis.openapi.models.operations.ComputeAutoscalersListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeAutoscalersListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeAutoscalersListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeAutoscalersListRequest req = new ComputeAutoscalersListRequest("ab", "soluta") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "dolorum";
                fields = "deleniti";
                filter = "omnis";
                key = "necessitatibus";
                maxResults = 714697L;
                oauthToken = "asperiores";
                orderBy = "nihil";
                pageToken = "ipsum";
                prettyPrint = false;
                quotaUser = "voluptate";
                returnPartialSuccess = false;
                uploadType = "id";
                uploadProtocol = "saepe";
                userIp = "eius";
            }};            

            ComputeAutoscalersListResponse res = sdk.autoscalers.computeAutoscalersList(req, new ComputeAutoscalersListSecurity() {{
                option1 = new ComputeAutoscalersListSecurityOption1("aspernatur", "perferendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.autoscalerList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeAutoscalersPatch

Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeAutoscalersPatchRequest;
import org.openapis.openapi.models.operations.ComputeAutoscalersPatchResponse;
import org.openapis.openapi.models.operations.ComputeAutoscalersPatchSecurity;
import org.openapis.openapi.models.operations.ComputeAutoscalersPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeAutoscalersPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Autoscaler;
import org.openapis.openapi.models.shared.AutoscalerStatusDetails;
import org.openapis.openapi.models.shared.AutoscalerStatusDetailsTypeEnum;
import org.openapis.openapi.models.shared.AutoscalerStatusEnum;
import org.openapis.openapi.models.shared.AutoscalingPolicy;
import org.openapis.openapi.models.shared.AutoscalingPolicyCpuUtilization;
import org.openapis.openapi.models.shared.AutoscalingPolicyCpuUtilizationPredictiveMethodEnum;
import org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilization;
import org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum;
import org.openapis.openapi.models.shared.AutoscalingPolicyLoadBalancingUtilization;
import org.openapis.openapi.models.shared.AutoscalingPolicyModeEnum;
import org.openapis.openapi.models.shared.AutoscalingPolicyScaleInControl;
import org.openapis.openapi.models.shared.AutoscalingPolicyScalingSchedule;
import org.openapis.openapi.models.shared.FixedOrPercent;
import org.openapis.openapi.models.shared.ScalingScheduleStatus;
import org.openapis.openapi.models.shared.ScalingScheduleStatusStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeAutoscalersPatchRequest req = new ComputeAutoscalersPatchRequest("amet", "optio") {{
                dollarXgafv = XgafvEnum.TWO;
                autoscaler1 = new Autoscaler() {{
                    autoscalingPolicy = new AutoscalingPolicy() {{
                        coolDownPeriodSec = 320017;
                        cpuUtilization = new AutoscalingPolicyCpuUtilization() {{
                            predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum.OPTIMIZE_AVAILABILITY;
                            utilizationTarget = 3834.64;
                        }};;
                        customMetricUtilizations = new org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilization[]{{
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "provident";
                                metric = "minima";
                                singleInstanceAssignment = 8310.49;
                                utilizationTarget = 5197.11;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_SECOND;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "alias";
                                metric = "at";
                                singleInstanceAssignment = 3118.6;
                                utilizationTarget = 2735.42;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_SECOND;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "quod";
                                metric = "officiis";
                                singleInstanceAssignment = 1856.36;
                                utilizationTarget = 6798.8;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.GAUGE;
                            }}),
                        }};
                        loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization() {{
                            utilizationTarget = 4561.3;
                        }};;
                        maxNumReplicas = 687488;
                        minNumReplicas = 483409;
                        mode = AutoscalingPolicyModeEnum.OFF;
                        scaleInControl = new AutoscalingPolicyScaleInControl() {{
                            maxScaledInReplicas = new FixedOrPercent() {{
                                calculated = 788740;
                                fixed = 947371;
                                percent = 229442;
                            }};;
                            timeWindowSec = 730856;
                        }};;
                        scalingSchedules = new java.util.HashMap<String, org.openapis.openapi.models.shared.AutoscalingPolicyScalingSchedule>() {{
                            put("numquam", new AutoscalingPolicyScalingSchedule() {{
                                description = "enim";
                                disabled = false;
                                durationSec = 213312;
                                minRequiredReplicas = 957451;
                                schedule = "totam";
                                timeZone = "nihil";
                            }});
                            put("sit", new AutoscalingPolicyScalingSchedule() {{
                                description = "expedita";
                                disabled = false;
                                durationSec = 207470;
                                minRequiredReplicas = 153694;
                                schedule = "vel";
                                timeZone = "libero";
                            }});
                            put("voluptas", new AutoscalingPolicyScalingSchedule() {{
                                description = "deserunt";
                                disabled = false;
                                durationSec = 463575;
                                minRequiredReplicas = 214880;
                                schedule = "incidunt";
                                timeZone = "qui";
                            }});
                            put("cupiditate", new AutoscalingPolicyScalingSchedule() {{
                                description = "maxime";
                                disabled = false;
                                durationSec = 863856;
                                minRequiredReplicas = 747080;
                                schedule = "dicta";
                                timeZone = "laborum";
                            }});
                        }};
                    }};;
                    creationTimestamp = "totam";
                    description = "incidunt";
                    id = "aspernatur";
                    kind = "dolores";
                    name = "Cesar Hyatt";
                    recommendedSize = 840429;
                    region = "qui";
                    scalingScheduleStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.ScalingScheduleStatus>() {{
                        put("fugit", new ScalingScheduleStatus() {{
                            lastStartTime = "magni";
                            nextStartTime = "odio";
                            state = ScalingScheduleStatusStateEnum.ACTIVE;
                        }});
                    }};
                    selfLink = "ullam";
                    status = AutoscalerStatusEnum.ERROR;
                    statusDetails = new org.openapis.openapi.models.shared.AutoscalerStatusDetails[]{{
                        add(new AutoscalerStatusDetails() {{
                            message = "voluptatem";
                            type = AutoscalerStatusDetailsTypeEnum.SCHEDULED_INSTANCES_GREATER_THAN_AUTOSCALER_MAX;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "soluta";
                            type = AutoscalerStatusDetailsTypeEnum.SCALING_TARGET_DOES_NOT_EXIST;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "et";
                            type = AutoscalerStatusDetailsTypeEnum.UNSUPPORTED_MAX_RATE_LOAD_BALANCING_CONFIGURATION;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "ipsum";
                            type = AutoscalerStatusDetailsTypeEnum.BACKEND_SERVICE_DOES_NOT_EXIST;
                        }}),
                    }};
                    target = "nobis";
                    zone = "quos";
                }};;
                accessToken = "tempore";
                alt = AltEnum.MEDIA;
                autoscalerQueryParameter = "aperiam";
                callback = "delectus";
                fields = "dolorem";
                key = "dolore";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "adipisci";
                requestId = "dolorum";
                uploadType = "architecto";
                uploadProtocol = "quae";
                userIp = "aut";
            }};            

            ComputeAutoscalersPatchResponse res = sdk.autoscalers.computeAutoscalersPatch(req, new ComputeAutoscalersPatchSecurity() {{
                option1 = new ComputeAutoscalersPatchSecurityOption1("quas", "itaque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeAutoscalersUpdate

Updates an autoscaler in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeAutoscalersUpdateRequest;
import org.openapis.openapi.models.operations.ComputeAutoscalersUpdateResponse;
import org.openapis.openapi.models.operations.ComputeAutoscalersUpdateSecurity;
import org.openapis.openapi.models.operations.ComputeAutoscalersUpdateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeAutoscalersUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Autoscaler;
import org.openapis.openapi.models.shared.AutoscalerStatusDetails;
import org.openapis.openapi.models.shared.AutoscalerStatusDetailsTypeEnum;
import org.openapis.openapi.models.shared.AutoscalerStatusEnum;
import org.openapis.openapi.models.shared.AutoscalingPolicy;
import org.openapis.openapi.models.shared.AutoscalingPolicyCpuUtilization;
import org.openapis.openapi.models.shared.AutoscalingPolicyCpuUtilizationPredictiveMethodEnum;
import org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilization;
import org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum;
import org.openapis.openapi.models.shared.AutoscalingPolicyLoadBalancingUtilization;
import org.openapis.openapi.models.shared.AutoscalingPolicyModeEnum;
import org.openapis.openapi.models.shared.AutoscalingPolicyScaleInControl;
import org.openapis.openapi.models.shared.AutoscalingPolicyScalingSchedule;
import org.openapis.openapi.models.shared.FixedOrPercent;
import org.openapis.openapi.models.shared.ScalingScheduleStatus;
import org.openapis.openapi.models.shared.ScalingScheduleStatusStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeAutoscalersUpdateRequest req = new ComputeAutoscalersUpdateRequest("consequatur", "est") {{
                dollarXgafv = XgafvEnum.TWO;
                autoscaler1 = new Autoscaler() {{
                    autoscalingPolicy = new AutoscalingPolicy() {{
                        coolDownPeriodSec = 785153;
                        cpuUtilization = new AutoscalingPolicyCpuUtilization() {{
                            predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum.OPTIMIZE_AVAILABILITY;
                            utilizationTarget = 2817.3;
                        }};;
                        customMetricUtilizations = new org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilization[]{{
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "cupiditate";
                                metric = "qui";
                                singleInstanceAssignment = 639.55;
                                utilizationTarget = 5123.93;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_SECOND;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "occaecati";
                                metric = "voluptatibus";
                                singleInstanceAssignment = 7875.42;
                                utilizationTarget = 8765.06;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_SECOND;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "quis";
                                metric = "ipsum";
                                singleInstanceAssignment = 9615.71;
                                utilizationTarget = 4551.69;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_MINUTE;
                            }}),
                        }};
                        loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization() {{
                            utilizationTarget = 8788.7;
                        }};;
                        maxNumReplicas = 949319;
                        minNumReplicas = 492268;
                        mode = AutoscalingPolicyModeEnum.ONLY_UP;
                        scaleInControl = new AutoscalingPolicyScaleInControl() {{
                            maxScaledInReplicas = new FixedOrPercent() {{
                                calculated = 715561;
                                fixed = 799203;
                                percent = 486160;
                            }};;
                            timeWindowSec = 630448;
                        }};;
                        scalingSchedules = new java.util.HashMap<String, org.openapis.openapi.models.shared.AutoscalingPolicyScalingSchedule>() {{
                            put("vero", new AutoscalingPolicyScalingSchedule() {{
                                description = "ducimus";
                                disabled = false;
                                durationSec = 293020;
                                minRequiredReplicas = 844550;
                                schedule = "illum";
                                timeZone = "sequi";
                            }});
                            put("natus", new AutoscalingPolicyScalingSchedule() {{
                                description = "impedit";
                                disabled = false;
                                durationSec = 13236;
                                minRequiredReplicas = 974259;
                                schedule = "exercitationem";
                                timeZone = "nulla";
                            }});
                            put("fugit", new AutoscalingPolicyScalingSchedule() {{
                                description = "porro";
                                disabled = false;
                                durationSec = 981830;
                                minRequiredReplicas = 985033;
                                schedule = "iusto";
                                timeZone = "eligendi";
                            }});
                        }};
                    }};;
                    creationTimestamp = "ducimus";
                    description = "alias";
                    id = "officia";
                    kind = "tempora";
                    name = "Terri Collins";
                    recommendedSize = 297842;
                    region = "ratione";
                    scalingScheduleStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.ScalingScheduleStatus>() {{
                        put("laudantium", new ScalingScheduleStatus() {{
                            lastStartTime = "dicta";
                            nextStartTime = "dolor";
                            state = ScalingScheduleStatusStateEnum.READY;
                        }});
                        put("quasi", new ScalingScheduleStatus() {{
                            lastStartTime = "ex";
                            nextStartTime = "nulla";
                            state = ScalingScheduleStatusStateEnum.OBSOLETE;
                        }});
                    }};
                    selfLink = "voluptatibus";
                    status = AutoscalerStatusEnum.DELETING;
                    statusDetails = new org.openapis.openapi.models.shared.AutoscalerStatusDetails[]{{
                        add(new AutoscalerStatusDetails() {{
                            message = "quisquam";
                            type = AutoscalerStatusDetailsTypeEnum.UNSUPPORTED_MAX_RATE_LOAD_BALANCING_CONFIGURATION;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "ea";
                            type = AutoscalerStatusDetailsTypeEnum.SCHEDULED_INSTANCES_GREATER_THAN_AUTOSCALER_MAX;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "corporis";
                            type = AutoscalerStatusDetailsTypeEnum.MISSING_CUSTOM_METRIC_DATA_POINTS;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "aliquid";
                            type = AutoscalerStatusDetailsTypeEnum.BACKEND_SERVICE_DOES_NOT_EXIST;
                        }}),
                    }};
                    target = "magnam";
                    zone = "ea";
                }};;
                accessToken = "quo";
                alt = AltEnum.JSON;
                autoscalerQueryParameter = "recusandae";
                callback = "aspernatur";
                fields = "minima";
                key = "eaque";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "libero";
                requestId = "aut";
                uploadType = "aut";
                uploadProtocol = "deleniti";
                userIp = "impedit";
            }};            

            ComputeAutoscalersUpdateResponse res = sdk.autoscalers.computeAutoscalersUpdate(req, new ComputeAutoscalersUpdateSecurity() {{
                option1 = new ComputeAutoscalersUpdateSecurityOption1("aliquam", "fugit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
