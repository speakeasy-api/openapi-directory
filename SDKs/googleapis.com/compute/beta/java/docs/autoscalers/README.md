# autoscalers

### Available Operations

* [computeAutoscalersAggregatedList](#computeautoscalersaggregatedlist) - Retrieves an aggregated list of autoscalers.
* [computeAutoscalersDelete](#computeautoscalersdelete) - Deletes the specified autoscaler.
* [computeAutoscalersGet](#computeautoscalersget) - Returns the specified autoscaler resource.
* [computeAutoscalersInsert](#computeautoscalersinsert) - Creates an autoscaler in the specified project using the data included in the request.
* [computeAutoscalersList](#computeautoscalerslist) - Retrieves a list of autoscalers contained within the specified zone.
* [computeAutoscalersPatch](#computeautoscalerspatch) - Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeAutoscalersTestIamPermissions](#computeautoscalerstestiampermissions) - Returns permissions that a caller has on the specified resource.
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

            ComputeAutoscalersAggregatedListRequest req = new ComputeAutoscalersAggregatedListRequest("vero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "et";
                fields = "excepturi";
                filter = "ullam";
                includeAllScopes = false;
                key = "provident";
                maxResults = 551816L;
                oauthToken = "sint";
                orderBy = "accusantium";
                pageToken = "mollitia";
                prettyPrint = false;
                quotaUser = "reiciendis";
                returnPartialSuccess = false;
                uploadType = "mollitia";
                uploadProtocol = "ad";
                userIp = "eum";
            }};            

            ComputeAutoscalersAggregatedListResponse res = sdk.autoscalers.computeAutoscalersAggregatedList(req, new ComputeAutoscalersAggregatedListSecurity() {{
                option1 = new ComputeAutoscalersAggregatedListSecurityOption1("dolor", "necessitatibus") {{
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

            ComputeAutoscalersDeleteRequest req = new ComputeAutoscalersDeleteRequest("odit", "nemo", "quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "eius";
                fields = "maxime";
                key = "deleniti";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "in";
                requestId = "architecto";
                uploadType = "architecto";
                uploadProtocol = "repudiandae";
                userIp = "ullam";
            }};            

            ComputeAutoscalersDeleteResponse res = sdk.autoscalers.computeAutoscalersDelete(req, new ComputeAutoscalersDeleteSecurity() {{
                option1 = new ComputeAutoscalersDeleteSecurityOption1("expedita", "nihil") {{
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

            ComputeAutoscalersGetRequest req = new ComputeAutoscalersGetRequest("repellat", "quibusdam", "sed") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                callback = "consequuntur";
                fields = "praesentium";
                key = "natus";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "sunt";
                uploadType = "quo";
                uploadProtocol = "illum";
                userIp = "pariatur";
            }};            

            ComputeAutoscalersGetResponse res = sdk.autoscalers.computeAutoscalersGet(req, new ComputeAutoscalersGetSecurity() {{
                option1 = new ComputeAutoscalersGetSecurityOption1("maxime", "ea") {{
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
import org.openapis.openapi.models.shared.AutoscalingPolicyScaleDownControl;
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

            ComputeAutoscalersInsertRequest req = new ComputeAutoscalersInsertRequest("excepturi", "odit") {{
                dollarXgafv = XgafvEnum.ONE;
                autoscaler = new Autoscaler() {{
                    autoscalingPolicy = new AutoscalingPolicy() {{
                        coolDownPeriodSec = 33222;
                        cpuUtilization = new AutoscalingPolicyCpuUtilization() {{
                            predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum.NONE;
                            utilizationTarget = 9825.75;
                        }};;
                        customMetricUtilizations = new org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilization[]{{
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "ipsam";
                                metric = "voluptate";
                                singleInstanceAssignment = 4200.75;
                                utilizationTarget = 7220.56;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_MINUTE;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "pariatur";
                                metric = "nemo";
                                singleInstanceAssignment = 9755.22;
                                utilizationTarget = 166.27;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.GAUGE;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "amet";
                                metric = "aut";
                                singleInstanceAssignment = 7649.12;
                                utilizationTarget = 3599.78;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.GAUGE;
                            }}),
                        }};
                        loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization() {{
                            utilizationTarget = 7299.91;
                        }};;
                        maxNumReplicas = 749999;
                        minNumReplicas = 171629;
                        mode = AutoscalingPolicyModeEnum.ON;
                        scaleDownControl = new AutoscalingPolicyScaleDownControl() {{
                            maxScaledDownReplicas = new FixedOrPercent() {{
                                calculated = 521037;
                                fixed = 489549;
                                percent = 54338;
                            }};;
                            timeWindowSec = 338985;
                        }};;
                        scaleInControl = new AutoscalingPolicyScaleInControl() {{
                            maxScaledInReplicas = new FixedOrPercent() {{
                                calculated = 199996;
                                fixed = 179490;
                                percent = 18521;
                            }};;
                            timeWindowSec = 170986;
                        }};;
                        scalingSchedules = new java.util.HashMap<String, org.openapis.openapi.models.shared.AutoscalingPolicyScalingSchedule>() {{
                            put("quam", new AutoscalingPolicyScalingSchedule() {{
                                description = "dolor";
                                disabled = false;
                                durationSec = 874573;
                                minRequiredReplicas = 345352;
                                schedule = "hic";
                                timeZone = "recusandae";
                            }});
                            put("omnis", new AutoscalingPolicyScalingSchedule() {{
                                description = "facilis";
                                disabled = false;
                                durationSec = 596656;
                                minRequiredReplicas = 31838;
                                schedule = "porro";
                                timeZone = "consequuntur";
                            }});
                            put("blanditiis", new AutoscalingPolicyScalingSchedule() {{
                                description = "error";
                                disabled = false;
                                durationSec = 50370;
                                minRequiredReplicas = 577229;
                                schedule = "rerum";
                                timeZone = "adipisci";
                            }});
                            put("asperiores", new AutoscalingPolicyScalingSchedule() {{
                                description = "earum";
                                disabled = false;
                                durationSec = 267262;
                                minRequiredReplicas = 613966;
                                schedule = "dolorum";
                                timeZone = "deleniti";
                            }});
                        }};
                    }};;
                    creationTimestamp = "pariatur";
                    description = "provident";
                    id = "nobis";
                    kind = "libero";
                    name = "Alex Luettgen";
                    recommendedSize = 209843;
                    region = "dolor";
                    scalingScheduleStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.ScalingScheduleStatus>() {{
                        put("ipsum", new ScalingScheduleStatus() {{
                            lastStartTime = "hic";
                            nextStartTime = "excepturi";
                            state = ScalingScheduleStatusStateEnum.OBSOLETE;
                        }});
                    }};
                    selfLink = "voluptate";
                    status = AutoscalerStatusEnum.DELETING;
                    statusDetails = new org.openapis.openapi.models.shared.AutoscalerStatusDetails[]{{
                        add(new AutoscalerStatusDetails() {{
                            message = "amet";
                            type = AutoscalerStatusDetailsTypeEnum.REGION_RESOURCE_STOCKOUT;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "numquam";
                            type = AutoscalerStatusDetailsTypeEnum.BACKEND_SERVICE_DOES_NOT_EXIST;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "ipsa";
                            type = AutoscalerStatusDetailsTypeEnum.BACKEND_SERVICE_DOES_NOT_EXIST;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "iure";
                            type = AutoscalerStatusDetailsTypeEnum.MODE_ONLY_SCALE_OUT;
                        }}),
                    }};
                    target = "quaerat";
                    zone = "accusamus";
                }};;
                accessToken = "quidem";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "natus";
                key = "eos";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "sit";
                requestId = "fugiat";
                uploadType = "ab";
                uploadProtocol = "soluta";
                userIp = "dolorum";
            }};            

            ComputeAutoscalersInsertResponse res = sdk.autoscalers.computeAutoscalersInsert(req, new ComputeAutoscalersInsertSecurity() {{
                option1 = new ComputeAutoscalersInsertSecurityOption1("iusto", "voluptate") {{
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

            ComputeAutoscalersListRequest req = new ComputeAutoscalersListRequest("dolorum", "deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "necessitatibus";
                alt = AltEnum.PROTO;
                callback = "asperiores";
                fields = "nihil";
                filter = "ipsum";
                key = "voluptate";
                maxResults = 663078L;
                oauthToken = "saepe";
                orderBy = "eius";
                pageToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "perferendis";
                returnPartialSuccess = false;
                uploadType = "amet";
                uploadProtocol = "optio";
                userIp = "accusamus";
            }};            

            ComputeAutoscalersListResponse res = sdk.autoscalers.computeAutoscalersList(req, new ComputeAutoscalersListSecurity() {{
                option1 = new ComputeAutoscalersListSecurityOption1("ad", "saepe") {{
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
import org.openapis.openapi.models.shared.AutoscalingPolicyScaleDownControl;
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

            ComputeAutoscalersPatchRequest req = new ComputeAutoscalersPatchRequest("suscipit", "deserunt") {{
                dollarXgafv = XgafvEnum.TWO;
                autoscaler1 = new Autoscaler() {{
                    autoscalingPolicy = new AutoscalingPolicy() {{
                        coolDownPeriodSec = 324683;
                        cpuUtilization = new AutoscalingPolicyCpuUtilization() {{
                            predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum.PREDICTIVE_METHOD_UNSPECIFIED;
                            utilizationTarget = 5197.11;
                        }};;
                        customMetricUtilizations = new org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilization[]{{
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
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "esse";
                                metric = "harum";
                                singleInstanceAssignment = 4834.09;
                                utilizationTarget = 2155.07;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.GAUGE;
                            }}),
                        }};
                        loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization() {{
                            utilizationTarget = 9473.71;
                        }};;
                        maxNumReplicas = 229442;
                        minNumReplicas = 730856;
                        mode = AutoscalingPolicyModeEnum.ONLY_UP;
                        scaleDownControl = new AutoscalingPolicyScaleDownControl() {{
                            maxScaledDownReplicas = new FixedOrPercent() {{
                                calculated = 253941;
                                fixed = 313692;
                                percent = 213312;
                            }};;
                            timeWindowSec = 957451;
                        }};;
                        scaleInControl = new AutoscalingPolicyScaleInControl() {{
                            maxScaledInReplicas = new FixedOrPercent() {{
                                calculated = 518201;
                                fixed = 471752;
                                percent = 25662;
                            }};;
                            timeWindowSec = 711584;
                        }};;
                        scalingSchedules = new java.util.HashMap<String, org.openapis.openapi.models.shared.AutoscalingPolicyScalingSchedule>() {{
                            put("sed", new AutoscalingPolicyScalingSchedule() {{
                                description = "vel";
                                disabled = false;
                                durationSec = 730442;
                                minRequiredReplicas = 374170;
                                schedule = "deserunt";
                                timeZone = "quam";
                            }});
                        }};
                    }};;
                    creationTimestamp = "ipsum";
                    description = "incidunt";
                    id = "qui";
                    kind = "cupiditate";
                    name = "Miss Jody Rogahn";
                    recommendedSize = 276894;
                    region = "aspernatur";
                    scalingScheduleStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.ScalingScheduleStatus>() {{
                        put("distinctio", new ScalingScheduleStatus() {{
                            lastStartTime = "facilis";
                            nextStartTime = "aliquid";
                            state = ScalingScheduleStatusStateEnum.DISABLED;
                        }});
                    }};
                    selfLink = "molestias";
                    status = AutoscalerStatusEnum.PENDING;
                    statusDetails = new org.openapis.openapi.models.shared.AutoscalerStatusDetails[]{{
                        add(new AutoscalerStatusDetails() {{
                            message = "neque";
                            type = AutoscalerStatusDetailsTypeEnum.CAPPED_AT_MAX_NUM_REPLICAS;
                        }}),
                    }};
                    target = "magni";
                    zone = "odio";
                }};;
                accessToken = "sunt";
                alt = AltEnum.MEDIA;
                autoscalerQueryParameter = "nam";
                callback = "hic";
                fields = "voluptatem";
                key = "cumque";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "nobis";
                requestId = "et";
                uploadType = "saepe";
                uploadProtocol = "ipsum";
                userIp = "veritatis";
            }};            

            ComputeAutoscalersPatchResponse res = sdk.autoscalers.computeAutoscalersPatch(req, new ComputeAutoscalersPatchSecurity() {{
                option1 = new ComputeAutoscalersPatchSecurityOption1("nobis", "quos") {{
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

## computeAutoscalersTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeAutoscalersTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeAutoscalersTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeAutoscalersTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeAutoscalersTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeAutoscalersTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeAutoscalersTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeAutoscalersTestIamPermissionsRequest req = new ComputeAutoscalersTestIamPermissionsRequest("tempore", "cupiditate", "aperiam") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("dolore"),
                    }};
                }};;
                accessToken = "labore";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "architecto";
                key = "quae";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "itaque";
                uploadProtocol = "consequatur";
                userIp = "est";
            }};            

            ComputeAutoscalersTestIamPermissionsResponse res = sdk.autoscalers.computeAutoscalersTestIamPermissions(req, new ComputeAutoscalersTestIamPermissionsSecurity() {{
                option1 = new ComputeAutoscalersTestIamPermissionsSecurityOption1("repellendus", "porro") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testPermissionsResponse != null) {
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
import org.openapis.openapi.models.shared.AutoscalingPolicyScaleDownControl;
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

            ComputeAutoscalersUpdateRequest req = new ComputeAutoscalersUpdateRequest("doloribus", "ut") {{
                dollarXgafv = XgafvEnum.TWO;
                autoscaler1 = new Autoscaler() {{
                    autoscalingPolicy = new AutoscalingPolicy() {{
                        coolDownPeriodSec = 586410;
                        cpuUtilization = new AutoscalingPolicyCpuUtilization() {{
                            predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum.NONE;
                            utilizationTarget = 639.55;
                        }};;
                        customMetricUtilizations = new org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilization[]{{
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "odio";
                                metric = "occaecati";
                                singleInstanceAssignment = 9774.96;
                                utilizationTarget = 7875.42;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.GAUGE;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "omnis";
                                metric = "quis";
                                singleInstanceAssignment = 2184.03;
                                utilizationTarget = 9615.71;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_SECOND;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "consectetur";
                                metric = "vero";
                                singleInstanceAssignment = 9493.19;
                                utilizationTarget = 4922.68;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.GAUGE;
                            }}),
                        }};
                        loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization() {{
                            utilizationTarget = 7155.61;
                        }};;
                        maxNumReplicas = 799203;
                        minNumReplicas = 486160;
                        mode = AutoscalingPolicyModeEnum.ONLY_SCALE_OUT;
                        scaleDownControl = new AutoscalingPolicyScaleDownControl() {{
                            maxScaledDownReplicas = new FixedOrPercent() {{
                                calculated = 708548;
                                fixed = 874288;
                                percent = 498140;
                            }};;
                            timeWindowSec = 293020;
                        }};;
                        scaleInControl = new AutoscalingPolicyScaleInControl() {{
                            maxScaledInReplicas = new FixedOrPercent() {{
                                calculated = 844550;
                                fixed = 848944;
                                percent = 194342;
                            }};;
                            timeWindowSec = 617877;
                        }};;
                        scalingSchedules = new java.util.HashMap<String, org.openapis.openapi.models.shared.AutoscalingPolicyScalingSchedule>() {{
                            put("aut", new AutoscalingPolicyScalingSchedule() {{
                                description = "voluptatibus";
                                disabled = false;
                                durationSec = 347233;
                                minRequiredReplicas = 862310;
                                schedule = "fugit";
                                timeZone = "porro";
                            }});
                            put("maiores", new AutoscalingPolicyScalingSchedule() {{
                                description = "doloribus";
                                disabled = false;
                                durationSec = 478370;
                                minRequiredReplicas = 753570;
                                schedule = "ducimus";
                                timeZone = "alias";
                            }});
                            put("officia", new AutoscalingPolicyScalingSchedule() {{
                                description = "tempora";
                                disabled = false;
                                durationSec = 368584;
                                minRequiredReplicas = 410492;
                                schedule = "aspernatur";
                                timeZone = "vel";
                            }});
                            put("possimus", new AutoscalingPolicyScalingSchedule() {{
                                description = "magnam";
                                disabled = false;
                                durationSec = 189848;
                                minRequiredReplicas = 401132;
                                schedule = "laudantium";
                                timeZone = "dicta";
                            }});
                        }};
                    }};;
                    creationTimestamp = "dolor";
                    description = "maiores";
                    id = "quasi";
                    kind = "ex";
                    name = "Marshall Wiza";
                    recommendedSize = 788873;
                    region = "saepe";
                    scalingScheduleStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.ScalingScheduleStatus>() {{
                        put("impedit", new ScalingScheduleStatus() {{
                            lastStartTime = "corporis";
                            nextStartTime = "veniam";
                            state = ScalingScheduleStatusStateEnum.DISABLED;
                        }});
                        put("inventore", new ScalingScheduleStatus() {{
                            lastStartTime = "magnam";
                            nextStartTime = "ea";
                            state = ScalingScheduleStatusStateEnum.READY;
                        }});
                    }};
                    selfLink = "consectetur";
                    status = AutoscalerStatusEnum.PENDING;
                    statusDetails = new org.openapis.openapi.models.shared.AutoscalerStatusDetails[]{{
                        add(new AutoscalerStatusDetails() {{
                            message = "minima";
                            type = AutoscalerStatusDetailsTypeEnum.BACKEND_SERVICE_DOES_NOT_EXIST;
                        }}),
                    }};
                    target = "a";
                    zone = "libero";
                }};;
                accessToken = "aut";
                alt = AltEnum.JSON;
                autoscalerQueryParameter = "deleniti";
                callback = "impedit";
                fields = "aliquam";
                key = "fugit";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "inventore";
                requestId = "non";
                uploadType = "et";
                uploadProtocol = "dolorum";
                userIp = "laborum";
            }};            

            ComputeAutoscalersUpdateResponse res = sdk.autoscalers.computeAutoscalersUpdate(req, new ComputeAutoscalersUpdateSecurity() {{
                option1 = new ComputeAutoscalersUpdateSecurityOption1("placeat", "velit") {{
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
