# regionAutoscalers

### Available Operations

* [computeRegionAutoscalersDelete](#computeregionautoscalersdelete) - Deletes the specified autoscaler.
* [computeRegionAutoscalersGet](#computeregionautoscalersget) - Returns the specified autoscaler.
* [computeRegionAutoscalersInsert](#computeregionautoscalersinsert) - Creates an autoscaler in the specified project using the data included in the request.
* [computeRegionAutoscalersList](#computeregionautoscalerslist) - Retrieves a list of autoscalers contained within the specified region.
* [computeRegionAutoscalersPatch](#computeregionautoscalerspatch) - Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeRegionAutoscalersTestIamPermissions](#computeregionautoscalerstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeRegionAutoscalersUpdate](#computeregionautoscalersupdate) - Updates an autoscaler in the specified project using the data included in the request.

## computeRegionAutoscalersDelete

Deletes the specified autoscaler.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersDeleteRequest;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersDeleteResponse;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionAutoscalersDeleteRequest req = new ComputeRegionAutoscalersDeleteRequest("natus", "modi", "saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quaerat";
                alt = AltEnum.MEDIA;
                callback = "quisquam";
                fields = "doloremque";
                key = "cumque";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "ullam";
                requestId = "soluta";
                uploadType = "nam";
                uploadProtocol = "iusto";
                userIp = "quasi";
            }};            

            ComputeRegionAutoscalersDeleteResponse res = sdk.regionAutoscalers.computeRegionAutoscalersDelete(req, new ComputeRegionAutoscalersDeleteSecurity() {{
                option1 = new ComputeRegionAutoscalersDeleteSecurityOption1("suscipit", "consectetur") {{
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

## computeRegionAutoscalersGet

Returns the specified autoscaler.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionAutoscalersGetRequest req = new ComputeRegionAutoscalersGetRequest("voluptas", "dolorem", "distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consectetur";
                alt = AltEnum.JSON;
                callback = "autem";
                fields = "ut";
                key = "consequuntur";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "hic";
                uploadProtocol = "eius";
                userIp = "tenetur";
            }};            

            ComputeRegionAutoscalersGetResponse res = sdk.regionAutoscalers.computeRegionAutoscalersGet(req, new ComputeRegionAutoscalersGetSecurity() {{
                option1 = new ComputeRegionAutoscalersGetSecurityOption1("vel", "repellendus") {{
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

## computeRegionAutoscalersInsert

Creates an autoscaler in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersInsertRequest;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersInsertResponse;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersInsertSecurityOption2;
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

            ComputeRegionAutoscalersInsertRequest req = new ComputeRegionAutoscalersInsertRequest("omnis", "voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                autoscaler = new Autoscaler() {{
                    autoscalingPolicy = new AutoscalingPolicy() {{
                        coolDownPeriodSec = 490066;
                        cpuUtilization = new AutoscalingPolicyCpuUtilization() {{
                            predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum.PREDICTIVE_METHOD_UNSPECIFIED;
                            utilizationTarget = 3745.77;
                        }};;
                        customMetricUtilizations = new org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilization[]{{
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "esse";
                                metric = "blanditiis";
                                singleInstanceAssignment = 1415.03;
                                utilizationTarget = 1699.58;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_MINUTE;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "officiis";
                                metric = "qui";
                                singleInstanceAssignment = 7920.31;
                                utilizationTarget = 8809.07;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.GAUGE;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "harum";
                                metric = "quam";
                                singleInstanceAssignment = 1333.34;
                                utilizationTarget = 2627.3;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_SECOND;
                            }}),
                        }};
                        loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization() {{
                            utilizationTarget = 298.18;
                        }};;
                        maxNumReplicas = 325642;
                        minNumReplicas = 313056;
                        mode = AutoscalingPolicyModeEnum.OFF;
                        scaleDownControl = new AutoscalingPolicyScaleDownControl() {{
                            maxScaledDownReplicas = new FixedOrPercent() {{
                                calculated = 265847;
                                fixed = 739428;
                                percent = 905295;
                            }};;
                            timeWindowSec = 440210;
                        }};;
                        scaleInControl = new AutoscalingPolicyScaleInControl() {{
                            maxScaledInReplicas = new FixedOrPercent() {{
                                calculated = 366375;
                                fixed = 361660;
                                percent = 820542;
                            }};;
                            timeWindowSec = 182151;
                        }};;
                        scalingSchedules = new java.util.HashMap<String, org.openapis.openapi.models.shared.AutoscalingPolicyScalingSchedule>() {{
                            put("odio", new AutoscalingPolicyScalingSchedule() {{
                                description = "maiores";
                                disabled = false;
                                durationSec = 271639;
                                minRequiredReplicas = 309303;
                                schedule = "praesentium";
                                timeZone = "minima";
                            }});
                        }};
                    }};;
                    creationTimestamp = "non";
                    description = "voluptatum";
                    id = "dolore";
                    kind = "laudantium";
                    name = "Jessica Monahan";
                    recommendedSize = 93289;
                    region = "incidunt";
                    scalingScheduleStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.ScalingScheduleStatus>() {{
                        put("minima", new ScalingScheduleStatus() {{
                            lastStartTime = "eos";
                            nextStartTime = "deserunt";
                            state = ScalingScheduleStatusStateEnum.ACTIVE;
                        }});
                        put("repellat", new ScalingScheduleStatus() {{
                            lastStartTime = "eligendi";
                            nextStartTime = "amet";
                            state = ScalingScheduleStatusStateEnum.OBSOLETE;
                        }});
                    }};
                    selfLink = "dolor";
                    status = AutoscalerStatusEnum.ERROR;
                    statusDetails = new org.openapis.openapi.models.shared.AutoscalerStatusDetails[]{{
                        add(new AutoscalerStatusDetails() {{
                            message = "possimus";
                            type = AutoscalerStatusDetailsTypeEnum.SCHEDULED_INSTANCES_GREATER_THAN_AUTOSCALER_MAX;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "repellendus";
                            type = AutoscalerStatusDetailsTypeEnum.MISSING_CUSTOM_METRIC_DATA_POINTS;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "expedita";
                            type = AutoscalerStatusDetailsTypeEnum.ALL_INSTANCES_UNHEALTHY;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "voluptatem";
                            type = AutoscalerStatusDetailsTypeEnum.MODE_OFF;
                        }}),
                    }};
                    target = "molestias";
                    zone = "atque";
                }};;
                accessToken = "eligendi";
                alt = AltEnum.PROTO;
                callback = "iste";
                fields = "id";
                key = "corporis";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "qui";
                requestId = "maxime";
                uploadType = "officiis";
                uploadProtocol = "quo";
                userIp = "ex";
            }};            

            ComputeRegionAutoscalersInsertResponse res = sdk.regionAutoscalers.computeRegionAutoscalersInsert(req, new ComputeRegionAutoscalersInsertSecurity() {{
                option1 = new ComputeRegionAutoscalersInsertSecurityOption1("molestiae", "dolor") {{
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

## computeRegionAutoscalersList

Retrieves a list of autoscalers contained within the specified region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersListRequest;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersListResponse;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionAutoscalersListRequest req = new ComputeRegionAutoscalersListRequest("beatae", "itaque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "beatae";
                alt = AltEnum.MEDIA;
                callback = "eaque";
                fields = "accusantium";
                filter = "pariatur";
                key = "quisquam";
                maxResults = 593864L;
                oauthToken = "nisi";
                orderBy = "ratione";
                pageToken = "enim";
                prettyPrint = false;
                quotaUser = "ut";
                returnPartialSuccess = false;
                uploadType = "laudantium";
                uploadProtocol = "assumenda";
                userIp = "laborum";
            }};            

            ComputeRegionAutoscalersListResponse res = sdk.regionAutoscalers.computeRegionAutoscalersList(req, new ComputeRegionAutoscalersListSecurity() {{
                option1 = new ComputeRegionAutoscalersListSecurityOption1("itaque", "recusandae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.regionAutoscalerList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionAutoscalersPatch

Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersPatchRequest;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersPatchResponse;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersPatchSecurity;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersPatchSecurityOption2;
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

            ComputeRegionAutoscalersPatchRequest req = new ComputeRegionAutoscalersPatchRequest("occaecati", "sit") {{
                dollarXgafv = XgafvEnum.ONE;
                autoscaler1 = new Autoscaler() {{
                    autoscalingPolicy = new AutoscalingPolicy() {{
                        coolDownPeriodSec = 304671;
                        cpuUtilization = new AutoscalingPolicyCpuUtilization() {{
                            predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum.OPTIMIZE_AVAILABILITY;
                            utilizationTarget = 404.44;
                        }};;
                        customMetricUtilizations = new org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilization[]{{
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "quibusdam";
                                metric = "necessitatibus";
                                singleInstanceAssignment = 7035.38;
                                utilizationTarget = 3030.86;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_MINUTE;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "delectus";
                                metric = "impedit";
                                singleInstanceAssignment = 164.89;
                                utilizationTarget = 6333.8;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.GAUGE;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "id";
                                metric = "quas";
                                singleInstanceAssignment = 7504.3;
                                utilizationTarget = 1376.13;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_MINUTE;
                            }}),
                        }};
                        loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization() {{
                            utilizationTarget = 7292.74;
                        }};;
                        maxNumReplicas = 600460;
                        minNumReplicas = 3041;
                        mode = AutoscalingPolicyModeEnum.ONLY_SCALE_OUT;
                        scaleDownControl = new AutoscalingPolicyScaleDownControl() {{
                            maxScaledDownReplicas = new FixedOrPercent() {{
                                calculated = 156609;
                                fixed = 340478;
                                percent = 409162;
                            }};;
                            timeWindowSec = 730624;
                        }};;
                        scaleInControl = new AutoscalingPolicyScaleInControl() {{
                            maxScaledInReplicas = new FixedOrPercent() {{
                                calculated = 84354;
                                fixed = 434240;
                                percent = 923604;
                            }};;
                            timeWindowSec = 470068;
                        }};;
                        scalingSchedules = new java.util.HashMap<String, org.openapis.openapi.models.shared.AutoscalingPolicyScalingSchedule>() {{
                            put("dolorem", new AutoscalingPolicyScalingSchedule() {{
                                description = "eveniet";
                                disabled = false;
                                durationSec = 738954;
                                minRequiredReplicas = 411953;
                                schedule = "consequatur";
                                timeZone = "suscipit";
                            }});
                        }};
                    }};;
                    creationTimestamp = "ducimus";
                    description = "sed";
                    id = "deleniti";
                    kind = "accusamus";
                    name = "Brittany Cummings";
                    recommendedSize = 962782;
                    region = "beatae";
                    scalingScheduleStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.ScalingScheduleStatus>() {{
                        put("nam", new ScalingScheduleStatus() {{
                            lastStartTime = "expedita";
                            nextStartTime = "occaecati";
                            state = ScalingScheduleStatusStateEnum.DISABLED;
                        }});
                    }};
                    selfLink = "doloremque";
                    status = AutoscalerStatusEnum.PENDING;
                    statusDetails = new org.openapis.openapi.models.shared.AutoscalerStatusDetails[]{{
                        add(new AutoscalerStatusDetails() {{
                            message = "a";
                            type = AutoscalerStatusDetailsTypeEnum.SCHEDULED_INSTANCES_GREATER_THAN_AUTOSCALER_MAX;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "necessitatibus";
                            type = AutoscalerStatusDetailsTypeEnum.ZONE_RESOURCE_STOCKOUT;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "quasi";
                            type = AutoscalerStatusDetailsTypeEnum.NOT_ENOUGH_QUOTA_AVAILABLE;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "voluptatum";
                            type = AutoscalerStatusDetailsTypeEnum.UNSUPPORTED_MAX_RATE_LOAD_BALANCING_CONFIGURATION;
                        }}),
                    }};
                    target = "vitae";
                    zone = "maxime";
                }};;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                autoscalerQueryParameter = "autem";
                callback = "eligendi";
                fields = "consequatur";
                key = "sunt";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "praesentium";
                requestId = "qui";
                uploadType = "eveniet";
                uploadProtocol = "quod";
                userIp = "rem";
            }};            

            ComputeRegionAutoscalersPatchResponse res = sdk.regionAutoscalers.computeRegionAutoscalersPatch(req, new ComputeRegionAutoscalersPatchSecurity() {{
                option1 = new ComputeRegionAutoscalersPatchSecurityOption1("fugiat", "tenetur") {{
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

## computeRegionAutoscalersTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionAutoscalersTestIamPermissionsRequest req = new ComputeRegionAutoscalersTestIamPermissionsRequest("consectetur", "suscipit", "modi") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("excepturi"),
                    }};
                }};;
                accessToken = "nemo";
                alt = AltEnum.PROTO;
                callback = "repellendus";
                fields = "facilis";
                key = "possimus";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "quae";
                uploadProtocol = "voluptatem";
                userIp = "dolor";
            }};            

            ComputeRegionAutoscalersTestIamPermissionsResponse res = sdk.regionAutoscalers.computeRegionAutoscalersTestIamPermissions(req, new ComputeRegionAutoscalersTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionAutoscalersTestIamPermissionsSecurityOption1("exercitationem", "sunt") {{
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

## computeRegionAutoscalersUpdate

Updates an autoscaler in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersUpdateRequest;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersUpdateResponse;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersUpdateSecurity;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersUpdateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionAutoscalersUpdateSecurityOption2;
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

            ComputeRegionAutoscalersUpdateRequest req = new ComputeRegionAutoscalersUpdateRequest("nulla", "laudantium") {{
                dollarXgafv = XgafvEnum.ONE;
                autoscaler1 = new Autoscaler() {{
                    autoscalingPolicy = new AutoscalingPolicy() {{
                        coolDownPeriodSec = 990818;
                        cpuUtilization = new AutoscalingPolicyCpuUtilization() {{
                            predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum.PREDICTIVE_METHOD_UNSPECIFIED;
                            utilizationTarget = 8375.55;
                        }};;
                        customMetricUtilizations = new org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilization[]{{
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "odio";
                                metric = "accusamus";
                                singleInstanceAssignment = 5143.93;
                                utilizationTarget = 3195.2;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_MINUTE;
                            }}),
                        }};
                        loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization() {{
                            utilizationTarget = 8852.97;
                        }};;
                        maxNumReplicas = 835289;
                        minNumReplicas = 549972;
                        mode = AutoscalingPolicyModeEnum.ON;
                        scaleDownControl = new AutoscalingPolicyScaleDownControl() {{
                            maxScaledDownReplicas = new FixedOrPercent() {{
                                calculated = 721263;
                                fixed = 27651;
                                percent = 849936;
                            }};;
                            timeWindowSec = 924297;
                        }};;
                        scaleInControl = new AutoscalingPolicyScaleInControl() {{
                            maxScaledInReplicas = new FixedOrPercent() {{
                                calculated = 948563;
                                fixed = 439877;
                                percent = 251071;
                            }};;
                            timeWindowSec = 674572;
                        }};;
                        scalingSchedules = new java.util.HashMap<String, org.openapis.openapi.models.shared.AutoscalingPolicyScalingSchedule>() {{
                            put("atque", new AutoscalingPolicyScalingSchedule() {{
                                description = "veniam";
                                disabled = false;
                                durationSec = 789654;
                                minRequiredReplicas = 902243;
                                schedule = "delectus";
                                timeZone = "sapiente";
                            }});
                        }};
                    }};;
                    creationTimestamp = "error";
                    description = "nulla";
                    id = "dicta";
                    kind = "voluptatem";
                    name = "Israel Bartell";
                    recommendedSize = 670142;
                    region = "illo";
                    scalingScheduleStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.ScalingScheduleStatus>() {{
                        put("ut", new ScalingScheduleStatus() {{
                            lastStartTime = "explicabo";
                            nextStartTime = "necessitatibus";
                            state = ScalingScheduleStatusStateEnum.ACTIVE;
                        }});
                        put("dolorem", new ScalingScheduleStatus() {{
                            lastStartTime = "quisquam";
                            nextStartTime = "porro";
                            state = ScalingScheduleStatusStateEnum.OBSOLETE;
                        }});
                    }};
                    selfLink = "aliquid";
                    status = AutoscalerStatusEnum.ERROR;
                    statusDetails = new org.openapis.openapi.models.shared.AutoscalerStatusDetails[]{{
                        add(new AutoscalerStatusDetails() {{
                            message = "delectus";
                            type = AutoscalerStatusDetailsTypeEnum.SCHEDULED_INSTANCES_LESS_THAN_AUTOSCALER_MIN;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "veniam";
                            type = AutoscalerStatusDetailsTypeEnum.MODE_OFF;
                        }}),
                    }};
                    target = "perferendis";
                    zone = "maiores";
                }};;
                accessToken = "provident";
                alt = AltEnum.JSON;
                autoscalerQueryParameter = "nihil";
                callback = "accusamus";
                fields = "dolores";
                key = "tempora";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "quas";
                requestId = "iure";
                uploadType = "dicta";
                uploadProtocol = "amet";
                userIp = "aperiam";
            }};            

            ComputeRegionAutoscalersUpdateResponse res = sdk.regionAutoscalers.computeRegionAutoscalersUpdate(req, new ComputeRegionAutoscalersUpdateSecurity() {{
                option1 = new ComputeRegionAutoscalersUpdateSecurityOption1("magnam", "ipsam") {{
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
