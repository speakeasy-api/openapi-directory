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

            ComputeRegionAutoscalersDeleteRequest req = new ComputeRegionAutoscalersDeleteRequest("aut", "qui", "earum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rem";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "velit";
                key = "hic";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "tempore";
                requestId = "iste";
                uploadType = "quaerat";
                uploadProtocol = "ex";
                userIp = "perspiciatis";
            }};            

            ComputeRegionAutoscalersDeleteResponse res = sdk.regionAutoscalers.computeRegionAutoscalersDelete(req, new ComputeRegionAutoscalersDeleteSecurity() {{
                option1 = new ComputeRegionAutoscalersDeleteSecurityOption1("numquam", "quas") {{
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

            ComputeRegionAutoscalersGetRequest req = new ComputeRegionAutoscalersGetRequest("vel", "ea", "temporibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "inventore";
                fields = "quas";
                key = "harum";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "amet";
                uploadProtocol = "sapiente";
                userIp = "veniam";
            }};            

            ComputeRegionAutoscalersGetResponse res = sdk.regionAutoscalers.computeRegionAutoscalersGet(req, new ComputeRegionAutoscalersGetSecurity() {{
                option1 = new ComputeRegionAutoscalersGetSecurityOption1("amet", "ad") {{
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

            ComputeRegionAutoscalersInsertRequest req = new ComputeRegionAutoscalersInsertRequest("provident", "non") {{
                dollarXgafv = XgafvEnum.TWO;
                autoscaler = new Autoscaler() {{
                    autoscalingPolicy = new AutoscalingPolicy() {{
                        coolDownPeriodSec = 973;
                        cpuUtilization = new AutoscalingPolicyCpuUtilization() {{
                            predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum.STANDARD;
                            utilizationTarget = 589.99;
                        }};;
                        customMetricUtilizations = new org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilization[]{{
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "excepturi";
                                metric = "suscipit";
                                singleInstanceAssignment = 5493.14;
                                utilizationTarget = 7060.3;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.GAUGE;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "placeat";
                                metric = "unde";
                                singleInstanceAssignment = 2243.96;
                                utilizationTarget = 1881.04;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.GAUGE;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "atque";
                                metric = "doloremque";
                                singleInstanceAssignment = 7614;
                                utilizationTarget = 7906.07;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_MINUTE;
                            }}),
                        }};
                        loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization() {{
                            utilizationTarget = 3286.72;
                        }};;
                        maxNumReplicas = 573155;
                        minNumReplicas = 333975;
                        mode = AutoscalingPolicyModeEnum.ONLY_SCALE_OUT;
                        scaleDownControl = new AutoscalingPolicyScaleDownControl() {{
                            maxScaledDownReplicas = new FixedOrPercent() {{
                                calculated = 592842;
                                fixed = 67412;
                                percent = 890133;
                            }};;
                            timeWindowSec = 314727;
                        }};;
                        scaleInControl = new AutoscalingPolicyScaleInControl() {{
                            maxScaledInReplicas = new FixedOrPercent() {{
                                calculated = 928207;
                                fixed = 178383;
                                percent = 338109;
                            }};;
                            timeWindowSec = 572410;
                        }};;
                        scalingSchedules = new java.util.HashMap<String, org.openapis.openapi.models.shared.AutoscalingPolicyScalingSchedule>() {{
                            put("assumenda", new AutoscalingPolicyScalingSchedule() {{
                                description = "distinctio";
                                disabled = false;
                                durationSec = 838298;
                                minRequiredReplicas = 734344;
                                schedule = "consequuntur";
                                timeZone = "sed";
                            }});
                            put("harum", new AutoscalingPolicyScalingSchedule() {{
                                description = "facere";
                                disabled = false;
                                durationSec = 631436;
                                minRequiredReplicas = 433148;
                                schedule = "amet";
                                timeZone = "est";
                            }});
                            put("adipisci", new AutoscalingPolicyScalingSchedule() {{
                                description = "ut";
                                disabled = false;
                                durationSec = 595672;
                                minRequiredReplicas = 294274;
                                schedule = "quasi";
                                timeZone = "distinctio";
                            }});
                        }};
                    }};;
                    creationTimestamp = "labore";
                    description = "qui";
                    id = "est";
                    kind = "sunt";
                    name = "Antoinette Wolff";
                    recommendedSize = 323016;
                    region = "perspiciatis";
                    scalingScheduleStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.ScalingScheduleStatus>() {{
                        put("atque", new ScalingScheduleStatus() {{
                            lastStartTime = "minus";
                            nextStartTime = "culpa";
                            state = ScalingScheduleStatusStateEnum.READY;
                        }});
                        put("quisquam", new ScalingScheduleStatus() {{
                            lastStartTime = "quidem";
                            nextStartTime = "explicabo";
                            state = ScalingScheduleStatusStateEnum.DISABLED;
                        }});
                        put("laudantium", new ScalingScheduleStatus() {{
                            lastStartTime = "ratione";
                            nextStartTime = "quae";
                            state = ScalingScheduleStatusStateEnum.OBSOLETE;
                        }});
                        put("libero", new ScalingScheduleStatus() {{
                            lastStartTime = "facere";
                            nextStartTime = "cupiditate";
                            state = ScalingScheduleStatusStateEnum.READY;
                        }});
                    }};
                    selfLink = "animi";
                    selfLinkWithId = "nihil";
                    status = AutoscalerStatusEnum.PENDING;
                    statusDetails = new org.openapis.openapi.models.shared.AutoscalerStatusDetails[]{{
                        add(new AutoscalerStatusDetails() {{
                            message = "in";
                            type = AutoscalerStatusDetailsTypeEnum.REGION_RESOURCE_STOCKOUT;
                        }}),
                    }};
                    target = "ad";
                    zone = "animi";
                }};;
                accessToken = "suscipit";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "laborum";
                key = "sint";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "maiores";
                requestId = "repudiandae";
                uploadType = "a";
                uploadProtocol = "consequuntur";
                userIp = "perspiciatis";
            }};            

            ComputeRegionAutoscalersInsertResponse res = sdk.regionAutoscalers.computeRegionAutoscalersInsert(req, new ComputeRegionAutoscalersInsertSecurity() {{
                option1 = new ComputeRegionAutoscalersInsertSecurityOption1("quam", "nemo") {{
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

            ComputeRegionAutoscalersListRequest req = new ComputeRegionAutoscalersListRequest("temporibus", "saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "distinctio";
                fields = "enim";
                filter = "nihil";
                key = "facere";
                maxResults = 90044L;
                oauthToken = "cupiditate";
                orderBy = "eveniet";
                pageToken = "eum";
                prettyPrint = false;
                quotaUser = "illo";
                returnPartialSuccess = false;
                uploadType = "ullam";
                uploadProtocol = "praesentium";
                userIp = "facilis";
            }};            

            ComputeRegionAutoscalersListResponse res = sdk.regionAutoscalers.computeRegionAutoscalersList(req, new ComputeRegionAutoscalersListSecurity() {{
                option1 = new ComputeRegionAutoscalersListSecurityOption1("similique", "illo") {{
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

            ComputeRegionAutoscalersPatchRequest req = new ComputeRegionAutoscalersPatchRequest("sapiente", "minus") {{
                dollarXgafv = XgafvEnum.ONE;
                autoscaler1 = new Autoscaler() {{
                    autoscalingPolicy = new AutoscalingPolicy() {{
                        coolDownPeriodSec = 772518;
                        cpuUtilization = new AutoscalingPolicyCpuUtilization() {{
                            predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum.OPTIMIZE_AVAILABILITY;
                            utilizationTarget = 4099.71;
                        }};;
                        customMetricUtilizations = new org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilization[]{{
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "laudantium";
                                metric = "fugiat";
                                singleInstanceAssignment = 9935.6;
                                utilizationTarget = 112.46;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_MINUTE;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "impedit";
                                metric = "eos";
                                singleInstanceAssignment = 5665.57;
                                utilizationTarget = 7048.47;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.GAUGE;
                            }}),
                        }};
                        loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization() {{
                            utilizationTarget = 1796.98;
                        }};;
                        maxNumReplicas = 147341;
                        minNumReplicas = 775000;
                        mode = AutoscalingPolicyModeEnum.ONLY_UP;
                        scaleDownControl = new AutoscalingPolicyScaleDownControl() {{
                            maxScaledDownReplicas = new FixedOrPercent() {{
                                calculated = 723839;
                                fixed = 799388;
                                percent = 231565;
                            }};;
                            timeWindowSec = 780151;
                        }};;
                        scaleInControl = new AutoscalingPolicyScaleInControl() {{
                            maxScaledInReplicas = new FixedOrPercent() {{
                                calculated = 364859;
                                fixed = 949573;
                                percent = 138608;
                            }};;
                            timeWindowSec = 472913;
                        }};;
                        scalingSchedules = new java.util.HashMap<String, org.openapis.openapi.models.shared.AutoscalingPolicyScalingSchedule>() {{
                            put("suscipit", new AutoscalingPolicyScalingSchedule() {{
                                description = "harum";
                                disabled = false;
                                durationSec = 633467;
                                minRequiredReplicas = 241492;
                                schedule = "beatae";
                                timeZone = "fugit";
                            }});
                            put("dolorum", new AutoscalingPolicyScalingSchedule() {{
                                description = "veritatis";
                                disabled = false;
                                durationSec = 339023;
                                minRequiredReplicas = 260972;
                                schedule = "autem";
                                timeZone = "blanditiis";
                            }});
                            put("ipsum", new AutoscalingPolicyScalingSchedule() {{
                                description = "perferendis";
                                disabled = false;
                                durationSec = 877319;
                                minRequiredReplicas = 552615;
                                schedule = "beatae";
                                timeZone = "molestias";
                            }});
                            put("consequatur", new AutoscalingPolicyScalingSchedule() {{
                                description = "dolorem";
                                disabled = false;
                                durationSec = 964815;
                                minRequiredReplicas = 9784;
                                schedule = "eum";
                                timeZone = "voluptate";
                            }});
                        }};
                    }};;
                    creationTimestamp = "omnis";
                    description = "totam";
                    id = "a";
                    kind = "hic";
                    name = "Betty Murphy";
                    recommendedSize = 999541;
                    region = "hic";
                    scalingScheduleStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.ScalingScheduleStatus>() {{
                        put("eligendi", new ScalingScheduleStatus() {{
                            lastStartTime = "veniam";
                            nextStartTime = "architecto";
                            state = ScalingScheduleStatusStateEnum.OBSOLETE;
                        }});
                    }};
                    selfLink = "ad";
                    selfLinkWithId = "sit";
                    status = AutoscalerStatusEnum.ACTIVE;
                    statusDetails = new org.openapis.openapi.models.shared.AutoscalerStatusDetails[]{{
                        add(new AutoscalerStatusDetails() {{
                            message = "voluptatem";
                            type = AutoscalerStatusDetailsTypeEnum.ZONE_RESOURCE_STOCKOUT;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "fugiat";
                            type = AutoscalerStatusDetailsTypeEnum.MODE_ONLY_UP;
                        }}),
                        add(new AutoscalerStatusDetails() {{
                            message = "illo";
                            type = AutoscalerStatusDetailsTypeEnum.REGION_RESOURCE_STOCKOUT;
                        }}),
                    }};
                    target = "aspernatur";
                    zone = "minima";
                }};;
                accessToken = "repudiandae";
                alt = AltEnum.MEDIA;
                autoscalerQueryParameter = "quam";
                callback = "iusto";
                fields = "illum";
                key = "nostrum";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "quis";
                requestId = "et";
                uploadType = "eaque";
                uploadProtocol = "dolore";
                userIp = "quas";
            }};            

            ComputeRegionAutoscalersPatchResponse res = sdk.regionAutoscalers.computeRegionAutoscalersPatch(req, new ComputeRegionAutoscalersPatchSecurity() {{
                option1 = new ComputeRegionAutoscalersPatchSecurityOption1("quisquam", "perferendis") {{
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

            ComputeRegionAutoscalersTestIamPermissionsRequest req = new ComputeRegionAutoscalersTestIamPermissionsRequest("sequi", "fugiat", "vel") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("tempore"),
                        add("ea"),
                        add("accusantium"),
                        add("eum"),
                    }};
                }};;
                accessToken = "dignissimos";
                alt = AltEnum.MEDIA;
                callback = "distinctio";
                fields = "vero";
                key = "aspernatur";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "facere";
                uploadProtocol = "odio";
                userIp = "repudiandae";
            }};            

            ComputeRegionAutoscalersTestIamPermissionsResponse res = sdk.regionAutoscalers.computeRegionAutoscalersTestIamPermissions(req, new ComputeRegionAutoscalersTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionAutoscalersTestIamPermissionsSecurityOption1("quibusdam", "nemo") {{
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

            ComputeRegionAutoscalersUpdateRequest req = new ComputeRegionAutoscalersUpdateRequest("consequuntur", "corporis") {{
                dollarXgafv = XgafvEnum.ONE;
                autoscaler1 = new Autoscaler() {{
                    autoscalingPolicy = new AutoscalingPolicy() {{
                        coolDownPeriodSec = 93275;
                        cpuUtilization = new AutoscalingPolicyCpuUtilization() {{
                            predictiveMethod = AutoscalingPolicyCpuUtilizationPredictiveMethodEnum.NONE;
                            utilizationTarget = 4110.65;
                        }};;
                        customMetricUtilizations = new org.openapis.openapi.models.shared.AutoscalingPolicyCustomMetricUtilization[]{{
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "delectus";
                                metric = "aliquam";
                                singleInstanceAssignment = 3318.84;
                                utilizationTarget = 4818.07;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_MINUTE;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "excepturi";
                                metric = "iure";
                                singleInstanceAssignment = 4350.66;
                                utilizationTarget = 8862.81;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.GAUGE;
                            }}),
                            add(new AutoscalingPolicyCustomMetricUtilization() {{
                                filter = "totam";
                                metric = "esse";
                                singleInstanceAssignment = 4419.81;
                                utilizationTarget = 5632.01;
                                utilizationTargetType = AutoscalingPolicyCustomMetricUtilizationUtilizationTargetTypeEnum.DELTA_PER_MINUTE;
                            }}),
                        }};
                        loadBalancingUtilization = new AutoscalingPolicyLoadBalancingUtilization() {{
                            utilizationTarget = 2222.16;
                        }};;
                        maxNumReplicas = 260487;
                        minNumReplicas = 960103;
                        mode = AutoscalingPolicyModeEnum.ONLY_SCALE_OUT;
                        scaleDownControl = new AutoscalingPolicyScaleDownControl() {{
                            maxScaledDownReplicas = new FixedOrPercent() {{
                                calculated = 306126;
                                fixed = 261184;
                                percent = 404078;
                            }};;
                            timeWindowSec = 53817;
                        }};;
                        scaleInControl = new AutoscalingPolicyScaleInControl() {{
                            maxScaledInReplicas = new FixedOrPercent() {{
                                calculated = 436906;
                                fixed = 107030;
                                percent = 858817;
                            }};;
                            timeWindowSec = 355325;
                        }};;
                        scalingSchedules = new java.util.HashMap<String, org.openapis.openapi.models.shared.AutoscalingPolicyScalingSchedule>() {{
                            put("mollitia", new AutoscalingPolicyScalingSchedule() {{
                                description = "eveniet";
                                disabled = false;
                                durationSec = 973705;
                                minRequiredReplicas = 434577;
                                schedule = "vero";
                                timeZone = "officia";
                            }});
                            put("minus", new AutoscalingPolicyScalingSchedule() {{
                                description = "molestiae";
                                disabled = false;
                                durationSec = 25164;
                                minRequiredReplicas = 184102;
                                schedule = "beatae";
                                timeZone = "et";
                            }});
                            put("quidem", new AutoscalingPolicyScalingSchedule() {{
                                description = "ullam";
                                disabled = false;
                                durationSec = 525205;
                                minRequiredReplicas = 871840;
                                schedule = "nobis";
                                timeZone = "molestias";
                            }});
                            put("ut", new AutoscalingPolicyScalingSchedule() {{
                                description = "eos";
                                disabled = false;
                                durationSec = 498443;
                                minRequiredReplicas = 570019;
                                schedule = "tempora";
                                timeZone = "laboriosam";
                            }});
                        }};
                    }};;
                    creationTimestamp = "tempora";
                    description = "omnis";
                    id = "expedita";
                    kind = "occaecati";
                    name = "Debra Collins DVM";
                    recommendedSize = 883502;
                    region = "vel";
                    scalingScheduleStatus = new java.util.HashMap<String, org.openapis.openapi.models.shared.ScalingScheduleStatus>() {{
                        put("dicta", new ScalingScheduleStatus() {{
                            lastStartTime = "quibusdam";
                            nextStartTime = "inventore";
                            state = ScalingScheduleStatusStateEnum.OBSOLETE;
                        }});
                        put("quis", new ScalingScheduleStatus() {{
                            lastStartTime = "eaque";
                            nextStartTime = "laudantium";
                            state = ScalingScheduleStatusStateEnum.DISABLED;
                        }});
                        put("quod", new ScalingScheduleStatus() {{
                            lastStartTime = "odit";
                            nextStartTime = "qui";
                            state = ScalingScheduleStatusStateEnum.ACTIVE;
                        }});
                        put("quia", new ScalingScheduleStatus() {{
                            lastStartTime = "hic";
                            nextStartTime = "rem";
                            state = ScalingScheduleStatusStateEnum.READY;
                        }});
                    }};
                    selfLink = "sed";
                    selfLinkWithId = "ipsam";
                    status = AutoscalerStatusEnum.ERROR;
                    statusDetails = new org.openapis.openapi.models.shared.AutoscalerStatusDetails[]{{
                        add(new AutoscalerStatusDetails() {{
                            message = "odit";
                            type = AutoscalerStatusDetailsTypeEnum.UNSUPPORTED_MAX_RATE_LOAD_BALANCING_CONFIGURATION;
                        }}),
                    }};
                    target = "fuga";
                    zone = "omnis";
                }};;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                autoscalerQueryParameter = "aliquid";
                callback = "expedita";
                fields = "explicabo";
                key = "ratione";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "modi";
                requestId = "molestias";
                uploadType = "quaerat";
                uploadProtocol = "similique";
                userIp = "reprehenderit";
            }};            

            ComputeRegionAutoscalersUpdateResponse res = sdk.regionAutoscalers.computeRegionAutoscalersUpdate(req, new ComputeRegionAutoscalersUpdateSecurity() {{
                option1 = new ComputeRegionAutoscalersUpdateSecurityOption1("possimus", "qui") {{
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
