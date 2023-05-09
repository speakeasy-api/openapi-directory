# regionAutoscalers

### Available Operations

* [computeRegionAutoscalersDelete](#computeregionautoscalersdelete) - Deletes the specified autoscaler.
* [computeRegionAutoscalersGet](#computeregionautoscalersget) - Returns the specified autoscaler.
* [computeRegionAutoscalersInsert](#computeregionautoscalersinsert) - Creates an autoscaler in the specified project using the data included in the request.
* [computeRegionAutoscalersList](#computeregionautoscalerslist) - Retrieves a list of autoscalers contained within the specified region.
* [computeRegionAutoscalersPatch](#computeregionautoscalerspatch) - Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
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

            ComputeRegionAutoscalersDeleteRequest req = new ComputeRegionAutoscalersDeleteRequest("nihil", "saepe", "ad") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "recusandae";
                alt = AltEnum.MEDIA;
                callback = "modi";
                fields = "labore";
                key = "ab";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "perferendis";
                requestId = "architecto";
                uploadType = "porro";
                uploadProtocol = "ab";
                userIp = "ipsum";
            }};            

            ComputeRegionAutoscalersDeleteResponse res = sdk.regionAutoscalers.computeRegionAutoscalersDelete(req, new ComputeRegionAutoscalersDeleteSecurity() {{
                option1 = new ComputeRegionAutoscalersDeleteSecurityOption1("quos", "tempore") {{
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

            ComputeRegionAutoscalersGetRequest req = new ComputeRegionAutoscalersGetRequest("aliquam", "commodi", "magni") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugit";
                alt = AltEnum.JSON;
                callback = "temporibus";
                fields = "minima";
                key = "sit";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "ducimus";
                uploadType = "nemo";
                uploadProtocol = "illo";
                userIp = "distinctio";
            }};            

            ComputeRegionAutoscalersGetResponse res = sdk.regionAutoscalers.computeRegionAutoscalersGet(req, new ComputeRegionAutoscalersGetSecurity() {{
                option1 = new ComputeRegionAutoscalersGetSecurityOption1("fugit", "praesentium") {{
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

            ComputeRegionAutoscalersInsertRequest req = new ComputeRegionAutoscalersInsertRequest("quam", "animi") {{
                dollarXgafv = XgafvEnum.ONE;
                autoscaler = new Autoscaler() {{
                    autoscalingPolicy = new AutoscalingPolicy() {{
                        coolDownPeriodSec = 230967;
                        cpuUtilization = new AutoscalingPolicyCpuUtilization() {{
                            predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum.OPTIMIZE_AVAILABILITY;
                            utilizationTarget = 5490.5;
                        }};;
                        customMetricUtilizations = new org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilization[]{{
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "eligendi";
                                metric = "porro";
                                singleInstanceAssignment = 1877.98;
                                utilizationTarget = 6578.95;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.GAUGE;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "voluptatibus";
                                metric = "quos";
                                singleInstanceAssignment = 3570.36;
                                utilizationTarget = 1462.19;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_SECOND;
                            }}),
                        }};
                        loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization() {{
                            utilizationTarget = 1245.06;
                        }};;
                        maxNumReplicas = 668199;
                        minNumReplicas = 8479;
                        mode = AutoscalingPolicyModeEnum.ON;
                        scaleInControl = new AutoscalingPolicyScaleInControl() {{
                            maxScaledInReplicas = new FixedOrPercent() {{
                                calculated = 365493;
                                fixed = 239057;
                                percent = 570136;
                            }};;
                            timeWindowSec = 6677;
                        }};;
                        scalingSchedules = new java.util.HashMap<String, org.openapis.openapi.models.shared.AutoscalingPolicyScalingSchedule>() {{
                            put("incidunt", new AutoscalingPolicyScalingSchedule() {{
                                description = "soluta";
                                disabled = false;
                                durationSec = 864197;
                                minRequiredReplicas = 36456;
                                schedule = "provident";
                                timeZone = "assumenda";
                            }});
                        }};
                    }};;
                    creationTimestamp = "alias";
                    description = "a";
                    id = "quisquam";
                    kind = "commodi";
                    name = "Rosemarie Wilderman";
                    recommendedSize = 941780;
                    region = "eveniet";
                    scalingScheduleStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.ScalingScheduleStatus>() {{
                        put("officiis", new ScalingScheduleStatus() {{
                            lastStartTime = "eaque";
                            nextStartTime = "officiis";
                            state = ScalingScheduleStatusStateEnum.DISABLED;
                        }});
                    }};
                    selfLink = "voluptas";
                    status = AutoscalerStatusEnum.PENDING;
                    statusDetails = new org.openapis.openapi.models.shared.AutoscalerStatusDetails[]{{
                        add(new AutoscalerStatusDetails() {{
                            message = "fugit";
                            type = AutoscalerStatusDetailsTypeEnum.MISSING_LOAD_BALANCING_DATA_POINTS;
                        }}),
                    }};
                    target = "debitis";
                    zone = "aspernatur";
                }};;
                accessToken = "occaecati";
                alt = AltEnum.PROTO;
                callback = "reprehenderit";
                fields = "excepturi";
                key = "temporibus";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "excepturi";
                requestId = "possimus";
                uploadType = "blanditiis";
                uploadProtocol = "esse";
                userIp = "omnis";
            }};            

            ComputeRegionAutoscalersInsertResponse res = sdk.regionAutoscalers.computeRegionAutoscalersInsert(req, new ComputeRegionAutoscalersInsertSecurity() {{
                option1 = new ComputeRegionAutoscalersInsertSecurityOption1("consequatur", "eveniet") {{
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

            ComputeRegionAutoscalersListRequest req = new ComputeRegionAutoscalersListRequest("sed", "voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eaque";
                alt = AltEnum.JSON;
                callback = "labore";
                fields = "deserunt";
                filter = "consectetur";
                key = "sequi";
                maxResults = 863012L;
                oauthToken = "perspiciatis";
                orderBy = "iusto";
                pageToken = "consequatur";
                prettyPrint = false;
                quotaUser = "rerum";
                returnPartialSuccess = false;
                uploadType = "fugit";
                uploadProtocol = "libero";
                userIp = "minima";
            }};            

            ComputeRegionAutoscalersListResponse res = sdk.regionAutoscalers.computeRegionAutoscalersList(req, new ComputeRegionAutoscalersListSecurity() {{
                option1 = new ComputeRegionAutoscalersListSecurityOption1("ipsum", "veritatis") {{
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

            ComputeRegionAutoscalersPatchRequest req = new ComputeRegionAutoscalersPatchRequest("rerum", "doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                autoscaler1 = new Autoscaler() {{
                    autoscalingPolicy = new AutoscalingPolicy() {{
                        coolDownPeriodSec = 232017;
                        cpuUtilization = new AutoscalingPolicyCpuUtilization() {{
                            predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum.NONE;
                            utilizationTarget = 8986.86;
                        }};;
                        customMetricUtilizations = new org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilization[]{{
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "fuga";
                                metric = "dolor";
                                singleInstanceAssignment = 9585.67;
                                utilizationTarget = 5232.59;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.GAUGE;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "veniam";
                                metric = "vero";
                                singleInstanceAssignment = 2213.88;
                                utilizationTarget = 5777.73;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_MINUTE;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "delectus";
                                metric = "fugit";
                                singleInstanceAssignment = 1808.2;
                                utilizationTarget = 6794.04;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_SECOND;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "ducimus";
                                metric = "porro";
                                singleInstanceAssignment = 7017.82;
                                utilizationTarget = 4835.12;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_SECOND;
                            }}),
                        }};
                        loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization() {{
                            utilizationTarget = 9944.23;
                        }};;
                        maxNumReplicas = 69010;
                        minNumReplicas = 733148;
                        mode = AutoscalingPolicyModeEnum.ON;
                        scaleInControl = new AutoscalingPolicyScaleInControl() {{
                            maxScaledInReplicas = new FixedOrPercent() {{
                                calculated = 206355;
                                fixed = 908334;
                                percent = 811396;
                            }};;
                            timeWindowSec = 867440;
                        }};;
                        scalingSchedules = new java.util.HashMap<String, org.openapis.openapi.models.shared.AutoscalingPolicyScalingSchedule>() {{
                            put("alias", new AutoscalingPolicyScalingSchedule() {{
                                description = "atque";
                                disabled = false;
                                durationSec = 46445;
                                minRequiredReplicas = 990541;
                                schedule = "rerum";
                                timeZone = "deleniti";
                            }});
                            put("consequatur", new AutoscalingPolicyScalingSchedule() {{
                                description = "impedit";
                                disabled = false;
                                durationSec = 44116;
                                minRequiredReplicas = 324028;
                                schedule = "voluptas";
                                timeZone = "adipisci";
                            }});
                            put("autem", new AutoscalingPolicyScalingSchedule() {{
                                description = "porro";
                                disabled = false;
                                durationSec = 358756;
                                minRequiredReplicas = 192970;
                                schedule = "illum";
                                timeZone = "ut";
                            }});
                            put("quae", new AutoscalingPolicyScalingSchedule() {{
                                description = "ipsam";
                                disabled = false;
                                durationSec = 580244;
                                minRequiredReplicas = 624507;
                                schedule = "exercitationem";
                                timeZone = "nostrum";
                            }});
                        }};
                    }};;
                    creationTimestamp = "minus";
                    description = "ad";
                    id = "maxime";
                    kind = "reprehenderit";
                    name = "Mrs. Arlene Keebler";
                    recommendedSize = 592378;
                    region = "nihil";
                    scalingScheduleStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.ScalingScheduleStatus>() {{
                        put("consectetur", new ScalingScheduleStatus() {{
                            lastStartTime = "odio";
                            nextStartTime = "molestiae";
                            state = ScalingScheduleStatusStateEnum.ACTIVE;
                        }});
                        put("excepturi", new ScalingScheduleStatus() {{
                            lastStartTime = "temporibus";
                            nextStartTime = "temporibus";
                            state = ScalingScheduleStatusStateEnum.OBSOLETE;
                        }});
                        put("quo", new ScalingScheduleStatus() {{
                            lastStartTime = "corrupti";
                            nextStartTime = "numquam";
                            state = ScalingScheduleStatusStateEnum.OBSOLETE;
                        }});
                        put("explicabo", new ScalingScheduleStatus() {{
                            lastStartTime = "impedit";
                            nextStartTime = "alias";
                            state = ScalingScheduleStatusStateEnum.ACTIVE;
                        }});
                    }};
                    selfLink = "aliquid";
                    status = AutoscalerStatusEnum.DELETING;
                    statusDetails = new org.openapis.openapi.models.shared.AutoscalerStatusDetails[]{{
                        add(new AutoscalerStatusDetails() {{
                            message = "sint";
                            type = AutoscalerStatusDetailsTypeEnum.CUSTOM_METRIC_DATA_POINTS_TOO_SPARSE;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "quod";
                            type = AutoscalerStatusDetailsTypeEnum.MIN_EQUALS_MAX;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "nobis";
                            type = AutoscalerStatusDetailsTypeEnum.MODE_ONLY_UP;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "eligendi";
                            type = AutoscalerStatusDetailsTypeEnum.MORE_THAN_ONE_BACKEND_SERVICE;
                        }}),
                    }};
                    target = "delectus";
                    zone = "corrupti";
                }};;
                accessToken = "similique";
                alt = AltEnum.JSON;
                autoscalerQueryParameter = "deserunt";
                callback = "impedit";
                fields = "quae";
                key = "necessitatibus";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "numquam";
                requestId = "illum";
                uploadType = "aspernatur";
                uploadProtocol = "officia";
                userIp = "cumque";
            }};            

            ComputeRegionAutoscalersPatchResponse res = sdk.regionAutoscalers.computeRegionAutoscalersPatch(req, new ComputeRegionAutoscalersPatchSecurity() {{
                option1 = new ComputeRegionAutoscalersPatchSecurityOption1("eveniet", "libero") {{
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

            ComputeRegionAutoscalersUpdateRequest req = new ComputeRegionAutoscalersUpdateRequest("aut", "minus") {{
                dollarXgafv = XgafvEnum.TWO;
                autoscaler1 = new Autoscaler() {{
                    autoscalingPolicy = new AutoscalingPolicy() {{
                        coolDownPeriodSec = 918944;
                        cpuUtilization = new AutoscalingPolicyCpuUtilization() {{
                            predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum.NONE;
                            utilizationTarget = 442.4;
                        }};;
                        customMetricUtilizations = new org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilization[]{{
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "deleniti";
                                metric = "necessitatibus";
                                singleInstanceAssignment = 7890.74;
                                utilizationTarget = 9624.42;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_SECOND;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "inventore";
                                metric = "quos";
                                singleInstanceAssignment = 6345.82;
                                utilizationTarget = 5666.23;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_MINUTE;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "consequatur";
                                metric = "dolor";
                                singleInstanceAssignment = 9042.89;
                                utilizationTarget = 5764.89;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_MINUTE;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "doloribus";
                                metric = "sit";
                                singleInstanceAssignment = 409.67;
                                utilizationTarget = 6334.39;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_MINUTE;
                            }}),
                        }};
                        loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization() {{
                            utilizationTarget = 5601.74;
                        }};;
                        maxNumReplicas = 711124;
                        minNumReplicas = 127759;
                        mode = AutoscalingPolicyModeEnum.OFF;
                        scaleInControl = new AutoscalingPolicyScaleInControl() {{
                            maxScaledInReplicas = new FixedOrPercent() {{
                                calculated = 998295;
                                fixed = 10588;
                                percent = 391495;
                            }};;
                            timeWindowSec = 860911;
                        }};;
                        scalingSchedules = new java.util.HashMap<String, org.openapis.openapi.models.shared.AutoscalingPolicyScalingSchedule>() {{
                            put("temporibus", new AutoscalingPolicyScalingSchedule() {{
                                description = "architecto";
                                disabled = false;
                                durationSec = 487101;
                                minRequiredReplicas = 534537;
                                schedule = "ullam";
                                timeZone = "consequuntur";
                            }});
                            put("assumenda", new AutoscalingPolicyScalingSchedule() {{
                                description = "fugit";
                                disabled = false;
                                durationSec = 510928;
                                minRequiredReplicas = 727508;
                                schedule = "voluptates";
                                timeZone = "ab";
                            }});
                        }};
                    }};;
                    creationTimestamp = "at";
                    description = "expedita";
                    id = "ipsa";
                    kind = "ab";
                    name = "Miss Tyler Mueller";
                    recommendedSize = 506352;
                    region = "consectetur";
                    scalingScheduleStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.ScalingScheduleStatus>() {{
                        put("nemo", new ScalingScheduleStatus() {{
                            lastStartTime = "cupiditate";
                            nextStartTime = "dolorem";
                            state = ScalingScheduleStatusStateEnum.OBSOLETE;
                        }});
                    }};
                    selfLink = "atque";
                    status = AutoscalerStatusEnum.DELETING;
                    statusDetails = new org.openapis.openapi.models.shared.AutoscalerStatusDetails[]{{
                        add(new AutoscalerStatusDetails() {{
                            message = "similique";
                            type = AutoscalerStatusDetailsTypeEnum.MODE_ONLY_SCALE_OUT;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "pariatur";
                            type = AutoscalerStatusDetailsTypeEnum.SCALING_TARGET_DOES_NOT_EXIST;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "et";
                            type = AutoscalerStatusDetailsTypeEnum.MISSING_LOAD_BALANCING_DATA_POINTS;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "quod";
                            type = AutoscalerStatusDetailsTypeEnum.MIN_EQUALS_MAX;
                        }}),
                    }};
                    target = "cumque";
                    zone = "quasi";
                }};;
                accessToken = "nostrum";
                alt = AltEnum.PROTO;
                autoscalerQueryParameter = "accusamus";
                callback = "voluptas";
                fields = "placeat";
                key = "at";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "natus";
                requestId = "dignissimos";
                uploadType = "dolorum";
                uploadProtocol = "nisi";
                userIp = "esse";
            }};            

            ComputeRegionAutoscalersUpdateResponse res = sdk.regionAutoscalers.computeRegionAutoscalersUpdate(req, new ComputeRegionAutoscalersUpdateSecurity() {{
                option1 = new ComputeRegionAutoscalersUpdateSecurityOption1("veniam", "minima") {{
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
