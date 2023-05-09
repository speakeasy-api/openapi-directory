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

            ComputeAutoscalersAggregatedListRequest req = new ComputeAutoscalersAggregatedListRequest("suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "vero";
                fields = "aspernatur";
                filter = "architecto";
                includeAllScopes = false;
                key = "magnam";
                maxResults = 92373L;
                oauthToken = "excepturi";
                orderBy = "ullam";
                pageToken = "provident";
                prettyPrint = false;
                quotaUser = "quos";
                returnPartialSuccess = false;
                uploadType = "sint";
                uploadProtocol = "accusantium";
                userIp = "mollitia";
            }};            

            ComputeAutoscalersAggregatedListResponse res = sdk.autoscalers.computeAutoscalersAggregatedList(req, new ComputeAutoscalersAggregatedListSecurity() {{
                option1 = new ComputeAutoscalersAggregatedListSecurityOption1("reiciendis", "mollitia") {{
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

            ComputeAutoscalersDeleteRequest req = new ComputeAutoscalersDeleteRequest("ad", "eum", "dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odit";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "iure";
                key = "doloribus";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "eius";
                requestId = "maxime";
                uploadType = "deleniti";
                uploadProtocol = "facilis";
                userIp = "in";
            }};            

            ComputeAutoscalersDeleteResponse res = sdk.autoscalers.computeAutoscalersDelete(req, new ComputeAutoscalersDeleteSecurity() {{
                option1 = new ComputeAutoscalersDeleteSecurityOption1("architecto", "architecto") {{
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

            ComputeAutoscalersGetRequest req = new ComputeAutoscalersGetRequest("repudiandae", "ullam", "expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellat";
                alt = AltEnum.PROTO;
                callback = "sed";
                fields = "saepe";
                key = "pariatur";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "praesentium";
                uploadProtocol = "natus";
                userIp = "magni";
            }};            

            ComputeAutoscalersGetResponse res = sdk.autoscalers.computeAutoscalersGet(req, new ComputeAutoscalersGetSecurity() {{
                option1 = new ComputeAutoscalersGetSecurityOption1("sunt", "quo") {{
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

            ComputeAutoscalersInsertRequest req = new ComputeAutoscalersInsertRequest("illum", "pariatur") {{
                dollarXgafv = XgafvEnum.TWO;
                autoscaler = new Autoscaler() {{
                    autoscalingPolicy = new AutoscalingPolicy() {{
                        coolDownPeriodSec = 411397;
                        cpuUtilization = new AutoscalingPolicyCpuUtilization() {{
                            predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum.PREDICTIVE_METHOD_UNSPECIFIED;
                            utilizationTarget = 1399.72;
                        }};;
                        customMetricUtilizations = new org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilization[]{{
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "accusantium";
                                metric = "ab";
                                singleInstanceAssignment = 9825.75;
                                utilizationTarget = 6974.29;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_SECOND;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "voluptate";
                                metric = "autem";
                                singleInstanceAssignment = 7220.56;
                                utilizationTarget = 505.88;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.GAUGE;
                            }}),
                        }};
                        loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization() {{
                            utilizationTarget = 3654.96;
                        }};;
                        maxNumReplicas = 975522;
                        minNumReplicas = 16627;
                        mode = AutoscalingPolicyModeEnum.ONLY_UP;
                        scaleDownControl = new AutoscalingPolicyScaleDownControl() {{
                            maxScaledDownReplicas = new FixedOrPercent() {{
                                calculated = 230742;
                                fixed = 11714;
                                percent = 764912;
                            }};;
                            timeWindowSec = 359978;
                        }};;
                        scaleInControl = new AutoscalingPolicyScaleInControl() {{
                            maxScaledInReplicas = new FixedOrPercent() {{
                                calculated = 944124;
                                fixed = 729991;
                                percent = 749999;
                            }};;
                            timeWindowSec = 171629;
                        }};;
                        scalingSchedules = new java.util.HashMap<String, org.openapis.openapi.models.shared.AutoscalingPolicyScalingSchedule>() {{
                            put("totam", new AutoscalingPolicyScalingSchedule() {{
                                description = "dignissimos";
                                disabled = false;
                                durationSec = 54338;
                                minRequiredReplicas = 338985;
                                schedule = "nesciunt";
                                timeZone = "eos";
                            }});
                            put("perferendis", new AutoscalingPolicyScalingSchedule() {{
                                description = "dolores";
                                disabled = false;
                                durationSec = 793698;
                                minRequiredReplicas = 463451;
                                schedule = "dolor";
                                timeZone = "vero";
                            }});
                        }};
                    }};;
                    creationTimestamp = "nostrum";
                    description = "hic";
                    id = "recusandae";
                    kind = "omnis";
                    name = "Freddie Bartoletti";
                    recommendedSize = 500026;
                    region = "error";
                    scalingScheduleStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.ScalingScheduleStatus>() {{
                        put("occaecati", new ScalingScheduleStatus() {{
                            lastStartTime = "rerum";
                            nextStartTime = "adipisci";
                            state = ScalingScheduleStatusStateEnum.READY;
                        }});
                    }};
                    selfLink = "earum";
                    selfLinkWithId = "modi";
                    status = AutoscalerStatusEnum.ERROR;
                    statusDetails = new org.openapis.openapi.models.shared.AutoscalerStatusDetails[]{{
                        add(new AutoscalerStatusDetails() {{
                            message = "deleniti";
                            type = AutoscalerStatusDetailsTypeEnum.UNKNOWN;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "provident";
                            type = AutoscalerStatusDetailsTypeEnum.SCHEDULED_INSTANCES_GREATER_THAN_AUTOSCALER_MAX;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "libero";
                            type = AutoscalerStatusDetailsTypeEnum.ZONE_RESOURCE_STOCKOUT;
                        }}),
                    }};
                    target = "quaerat";
                    zone = "quos";
                }};;
                accessToken = "aliquid";
                alt = AltEnum.JSON;
                callback = "dolorem";
                fields = "dolor";
                key = "qui";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "hic";
                requestId = "excepturi";
                uploadType = "cum";
                uploadProtocol = "voluptate";
                userIp = "dignissimos";
            }};            

            ComputeAutoscalersInsertResponse res = sdk.autoscalers.computeAutoscalersInsert(req, new ComputeAutoscalersInsertSecurity() {{
                option1 = new ComputeAutoscalersInsertSecurityOption1("reiciendis", "amet") {{
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

            ComputeAutoscalersListRequest req = new ComputeAutoscalersListRequest("dolorum", "numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsa";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "odio";
                filter = "quaerat";
                key = "accusamus";
                maxResults = 696344L;
                oauthToken = "voluptatibus";
                orderBy = "voluptas";
                pageToken = "natus";
                prettyPrint = false;
                quotaUser = "eos";
                returnPartialSuccess = false;
                uploadType = "atque";
                uploadProtocol = "sit";
                userIp = "fugiat";
            }};            

            ComputeAutoscalersListResponse res = sdk.autoscalers.computeAutoscalersList(req, new ComputeAutoscalersListSecurity() {{
                option1 = new ComputeAutoscalersListSecurityOption1("ab", "soluta") {{
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

            ComputeAutoscalersPatchRequest req = new ComputeAutoscalersPatchRequest("dolorum", "iusto") {{
                dollarXgafv = XgafvEnum.ONE;
                autoscaler1 = new Autoscaler() {{
                    autoscalingPolicy = new AutoscalingPolicy() {{
                        coolDownPeriodSec = 677082;
                        cpuUtilization = new AutoscalingPolicyCpuUtilization() {{
                            predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum.PREDICTIVE_METHOD_UNSPECIFIED;
                            utilizationTarget = 6070.45;
                        }};;
                        customMetricUtilizations = new org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilization[]{{
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "distinctio";
                                metric = "asperiores";
                                singleInstanceAssignment = 4694.97;
                                utilizationTarget = 2168.97;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_SECOND;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "id";
                                metric = "saepe";
                                singleInstanceAssignment = 2633.22;
                                utilizationTarget = 1372.2;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_MINUTE;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "amet";
                                metric = "optio";
                                singleInstanceAssignment = 8815.86;
                                utilizationTarget = 3200.17;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.GAUGE;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "suscipit";
                                metric = "deserunt";
                                singleInstanceAssignment = 5883.17;
                                utilizationTarget = 3246.83;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.GAUGE;
                            }}),
                        }};
                        loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization() {{
                            utilizationTarget = 5197.11;
                        }};;
                        maxNumReplicas = 628982;
                        minNumReplicas = 55;
                        mode = AutoscalingPolicyModeEnum.ONLY_UP;
                        scaleDownControl = new AutoscalingPolicyScaleDownControl() {{
                            maxScaledDownReplicas = new FixedOrPercent() {{
                                calculated = 311860;
                                fixed = 273542;
                                percent = 425451;
                            }};;
                            timeWindowSec = 798047;
                        }};;
                        scaleInControl = new AutoscalingPolicyScaleInControl() {{
                            maxScaledInReplicas = new FixedOrPercent() {{
                                calculated = 885338;
                                fixed = 185636;
                                percent = 679880;
                            }};;
                            timeWindowSec = 952792;
                        }};;
                        scalingSchedules = new java.util.HashMap<String, org.openapis.openapi.models.shared.AutoscalingPolicyScalingSchedule>() {{
                            put("harum", new AutoscalingPolicyScalingSchedule() {{
                                description = "iusto";
                                disabled = false;
                                durationSec = 215507;
                                minRequiredReplicas = 788740;
                                schedule = "tenetur";
                                timeZone = "amet";
                            }});
                            put("tempore", new AutoscalingPolicyScalingSchedule() {{
                                description = "accusamus";
                                disabled = false;
                                durationSec = 253941;
                                minRequiredReplicas = 313692;
                                schedule = "dolorem";
                                timeZone = "sapiente";
                            }});
                        }};
                    }};;
                    creationTimestamp = "totam";
                    description = "nihil";
                    id = "sit";
                    kind = "expedita";
                    name = "Jane Kassulke";
                    recommendedSize = 646265;
                    region = "quam";
                    scalingScheduleStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.ScalingScheduleStatus>() {{
                        put("incidunt", new ScalingScheduleStatus() {{
                            lastStartTime = "qui";
                            nextStartTime = "cupiditate";
                            state = ScalingScheduleStatusStateEnum.READY;
                        }});
                    }};
                    selfLink = "pariatur";
                    selfLinkWithId = "soluta";
                    status = AutoscalerStatusEnum.ACTIVE;
                    statusDetails = new org.openapis.openapi.models.shared.AutoscalerStatusDetails[]{{
                        add(new AutoscalerStatusDetails() {{
                            message = "totam";
                            type = AutoscalerStatusDetailsTypeEnum.MIN_EQUALS_MAX;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "aspernatur";
                            type = AutoscalerStatusDetailsTypeEnum.CUSTOM_METRIC_DATA_POINTS_TOO_SPARSE;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "distinctio";
                            type = AutoscalerStatusDetailsTypeEnum.SCALING_TARGET_DOES_NOT_EXIST;
                        }}),
                    }};
                    target = "aliquid";
                    zone = "quam";
                }};;
                accessToken = "molestias";
                alt = AltEnum.PROTO;
                autoscalerQueryParameter = "qui";
                callback = "neque";
                fields = "fugit";
                key = "magni";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "sunt";
                requestId = "ullam";
                uploadType = "nam";
                uploadProtocol = "hic";
                userIp = "voluptatem";
            }};            

            ComputeAutoscalersPatchResponse res = sdk.autoscalers.computeAutoscalersPatch(req, new ComputeAutoscalersPatchSecurity() {{
                option1 = new ComputeAutoscalersPatchSecurityOption1("cumque", "soluta") {{
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

            ComputeAutoscalersTestIamPermissionsRequest req = new ComputeAutoscalersTestIamPermissionsRequest("nobis", "et", "saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("nobis"),
                    }};
                }};;
                accessToken = "quos";
                alt = AltEnum.PROTO;
                callback = "cupiditate";
                fields = "aperiam";
                key = "delectus";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "labore";
                uploadProtocol = "adipisci";
                userIp = "dolorum";
            }};            

            ComputeAutoscalersTestIamPermissionsResponse res = sdk.autoscalers.computeAutoscalersTestIamPermissions(req, new ComputeAutoscalersTestIamPermissionsSecurity() {{
                option1 = new ComputeAutoscalersTestIamPermissionsSecurityOption1("architecto", "quae") {{
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

            ComputeAutoscalersUpdateRequest req = new ComputeAutoscalersUpdateRequest("aut", "quas") {{
                dollarXgafv = XgafvEnum.TWO;
                autoscaler1 = new Autoscaler() {{
                    autoscalingPolicy = new AutoscalingPolicy() {{
                        coolDownPeriodSec = 9240;
                        cpuUtilization = new AutoscalingPolicyCpuUtilization() {{
                            predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum.PREDICTIVE_METHOD_UNSPECIFIED;
                            utilizationTarget = 8330.38;
                        }};;
                        customMetricUtilizations = new org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilization[]{{
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "doloribus";
                                metric = "ut";
                                singleInstanceAssignment = 7034.95;
                                utilizationTarget = 5864.1;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_MINUTE;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "quae";
                                metric = "laudantium";
                                singleInstanceAssignment = 4856.28;
                                utilizationTarget = 5804.47;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.GAUGE;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "quisquam";
                                metric = "vero";
                                singleInstanceAssignment = 6064.76;
                                utilizationTarget = 3381.59;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_MINUTE;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "delectus";
                                metric = "voluptate";
                                singleInstanceAssignment = 2317.01;
                                utilizationTarget = 8788.7;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.GAUGE;
                            }}),
                        }};
                        loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization() {{
                            utilizationTarget = 4922.68;
                        }};;
                        maxNumReplicas = 941378;
                        minNumReplicas = 715561;
                        mode = AutoscalingPolicyModeEnum.ONLY_UP;
                        scaleDownControl = new AutoscalingPolicyScaleDownControl() {{
                            maxScaledDownReplicas = new FixedOrPercent() {{
                                calculated = 486160;
                                fixed = 630448;
                                percent = 708548;
                            }};;
                            timeWindowSec = 874288;
                        }};;
                        scaleInControl = new AutoscalingPolicyScaleInControl() {{
                            maxScaledInReplicas = new FixedOrPercent() {{
                                calculated = 498140;
                                fixed = 293020;
                                percent = 844550;
                            }};;
                            timeWindowSec = 848944;
                        }};;
                        scalingSchedules = new java.util.HashMap<String, org.openapis.openapi.models.shared.AutoscalingPolicyScalingSchedule>() {{
                            put("natus", new AutoscalingPolicyScalingSchedule() {{
                                description = "impedit";
                                disabled = false;
                                durationSec = 13236;
                                minRequiredReplicas = 974259;
                                schedule = "exercitationem";
                                timeZone = "nulla";
                            }});
                        }};
                    }};;
                    creationTimestamp = "fugit";
                    description = "porro";
                    id = "maiores";
                    kind = "doloribus";
                    name = "Miss Vicky Kuphal";
                    recommendedSize = 368584;
                    region = "ea";
                    scalingScheduleStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.ScalingScheduleStatus>() {{
                        put("vel", new ScalingScheduleStatus() {{
                            lastStartTime = "possimus";
                            nextStartTime = "magnam";
                            state = ScalingScheduleStatusStateEnum.ACTIVE;
                        }});
                    }};
                    selfLink = "ex";
                    selfLinkWithId = "laudantium";
                    status = AutoscalerStatusEnum.ACTIVE;
                    statusDetails = new org.openapis.openapi.models.shared.AutoscalerStatusDetails[]{{
                        add(new AutoscalerStatusDetails() {{
                            message = "maiores";
                            type = AutoscalerStatusDetailsTypeEnum.BACKEND_SERVICE_DOES_NOT_EXIST;
                        }}),
                    }};
                    target = "ex";
                    zone = "nulla";
                }};;
                accessToken = "excepturi";
                alt = AltEnum.PROTO;
                autoscalerQueryParameter = "nostrum";
                callback = "sapiente";
                fields = "quisquam";
                key = "saepe";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "impedit";
                requestId = "corporis";
                uploadType = "veniam";
                uploadProtocol = "aliquid";
                userIp = "inventore";
            }};            

            ComputeAutoscalersUpdateResponse res = sdk.autoscalers.computeAutoscalersUpdate(req, new ComputeAutoscalersUpdateSecurity() {{
                option1 = new ComputeAutoscalersUpdateSecurityOption1("magnam", "ea") {{
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
