# resourcePolicies

### Available Operations

* [computeResourcePoliciesAggregatedList](#computeresourcepoliciesaggregatedlist) - Retrieves an aggregated list of resource policies.
* [computeResourcePoliciesDelete](#computeresourcepoliciesdelete) - Deletes the specified resource policy.
* [computeResourcePoliciesGet](#computeresourcepoliciesget) - Retrieves all information of the specified resource policy.
* [computeResourcePoliciesGetIamPolicy](#computeresourcepoliciesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeResourcePoliciesInsert](#computeresourcepoliciesinsert) - Creates a new resource policy.
* [computeResourcePoliciesList](#computeresourcepolicieslist) - A list all the resource policies that have been configured for the specified project in specified region.
* [computeResourcePoliciesPatch](#computeresourcepoliciespatch) - Modify the specified resource policy.
* [computeResourcePoliciesSetIamPolicy](#computeresourcepoliciessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeResourcePoliciesTestIamPermissions](#computeresourcepoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeResourcePoliciesAggregatedList

Retrieves an aggregated list of resource policies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeResourcePoliciesAggregatedListRequest req = new ComputeResourcePoliciesAggregatedListRequest("perferendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "deserunt";
                alt = AltEnum.PROTO;
                callback = "soluta";
                fields = "dolorum";
                filter = "cupiditate";
                includeAllScopes = false;
                key = "similique";
                maxResults = 753540L;
                oauthToken = "a";
                orderBy = "iusto";
                pageToken = "quo";
                prettyPrint = false;
                quotaUser = "optio";
                returnPartialSuccess = false;
                uploadType = "impedit";
                uploadProtocol = "nulla";
                userIp = "a";
            }};            

            ComputeResourcePoliciesAggregatedListResponse res = sdk.resourcePolicies.computeResourcePoliciesAggregatedList(req, new ComputeResourcePoliciesAggregatedListSecurity() {{
                option1 = new ComputeResourcePoliciesAggregatedListSecurityOption1("alias", "eius") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.resourcePolicyAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeResourcePoliciesDelete

Deletes the specified resource policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeResourcePoliciesDeleteRequest req = new ComputeResourcePoliciesDeleteRequest("itaque", "minima", "nulla") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "adipisci";
                fields = "consequuntur";
                key = "nisi";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "quidem";
                requestId = "perspiciatis";
                uploadType = "iure";
                uploadProtocol = "expedita";
                userIp = "nobis";
            }};            

            ComputeResourcePoliciesDeleteResponse res = sdk.resourcePolicies.computeResourcePoliciesDelete(req, new ComputeResourcePoliciesDeleteSecurity() {{
                option1 = new ComputeResourcePoliciesDeleteSecurityOption1("cum", "nulla") {{
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

## computeResourcePoliciesGet

Retrieves all information of the specified resource policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesGetRequest;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesGetResponse;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesGetSecurity;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeResourcePoliciesGetRequest req = new ComputeResourcePoliciesGetRequest("soluta", "omnis", "sed") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                alt = AltEnum.JSON;
                callback = "nesciunt";
                fields = "omnis";
                key = "aliquid";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "perferendis";
                uploadProtocol = "molestiae";
                userIp = "cum";
            }};            

            ComputeResourcePoliciesGetResponse res = sdk.resourcePolicies.computeResourcePoliciesGet(req, new ComputeResourcePoliciesGetSecurity() {{
                option1 = new ComputeResourcePoliciesGetSecurityOption1("delectus", "illum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.resourcePolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeResourcePoliciesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeResourcePoliciesGetIamPolicyRequest req = new ComputeResourcePoliciesGetIamPolicyRequest("assumenda", "quidem", "ratione") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.PROTO;
                callback = "iste";
                fields = "delectus";
                key = "sequi";
                oauthToken = "labore";
                optionsRequestedPolicyVersion = 172645L;
                prettyPrint = false;
                quotaUser = "harum";
                uploadType = "ullam";
                uploadProtocol = "reprehenderit";
                userIp = "ducimus";
            }};            

            ComputeResourcePoliciesGetIamPolicyResponse res = sdk.resourcePolicies.computeResourcePoliciesGetIamPolicy(req, new ComputeResourcePoliciesGetIamPolicySecurity() {{
                option1 = new ComputeResourcePoliciesGetIamPolicySecurityOption1("vel", "labore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeResourcePoliciesInsert

Creates a new resource policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesInsertRequest;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesInsertResponse;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ResourcePolicy;
import org.openapis.openapi.models.shared.ResourcePolicyDailyCycle;
import org.openapis.openapi.models.shared.ResourcePolicyGroupPlacementPolicy;
import org.openapis.openapi.models.shared.ResourcePolicyGroupPlacementPolicyCollocationEnum;
import org.openapis.openapi.models.shared.ResourcePolicyHourlyCycle;
import org.openapis.openapi.models.shared.ResourcePolicyInstanceSchedulePolicy;
import org.openapis.openapi.models.shared.ResourcePolicyInstanceSchedulePolicySchedule;
import org.openapis.openapi.models.shared.ResourcePolicyResourceStatus;
import org.openapis.openapi.models.shared.ResourcePolicyResourceStatusInstanceSchedulePolicyStatus;
import org.openapis.openapi.models.shared.ResourcePolicySnapshotSchedulePolicy;
import org.openapis.openapi.models.shared.ResourcePolicySnapshotSchedulePolicyRetentionPolicy;
import org.openapis.openapi.models.shared.ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnSourceDiskDeleteEnum;
import org.openapis.openapi.models.shared.ResourcePolicySnapshotSchedulePolicySchedule;
import org.openapis.openapi.models.shared.ResourcePolicySnapshotSchedulePolicySnapshotProperties;
import org.openapis.openapi.models.shared.ResourcePolicyStatusEnum;
import org.openapis.openapi.models.shared.ResourcePolicyWeeklyCycle;
import org.openapis.openapi.models.shared.ResourcePolicyWeeklyCycleDayOfWeek;
import org.openapis.openapi.models.shared.ResourcePolicyWeeklyCycleDayOfWeekDayEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeResourcePoliciesInsertRequest req = new ComputeResourcePoliciesInsertRequest("nam", "officiis") {{
                dollarXgafv = XgafvEnum.TWO;
                resourcePolicy = new ResourcePolicy() {{
                    creationTimestamp = "ipsam";
                    description = "assumenda";
                    diskConsistencyGroupPolicy = new java.util.HashMap<String, Object>() {{
                        put("cum", "nesciunt");
                        put("repellendus", "quaerat");
                        put("quasi", "nisi");
                    }};
                    groupPlacementPolicy = new ResourcePolicyGroupPlacementPolicy() {{
                        availabilityDomainCount = 573572;
                        collocation = ResourcePolicyGroupPlacementPolicyCollocationEnum.UNSPECIFIED_COLLOCATION;
                        maxDistance = 178038;
                        vmCount = 151704;
                    }};;
                    id = "ipsam";
                    instanceSchedulePolicy = new ResourcePolicyInstanceSchedulePolicy() {{
                        expirationTime = "optio";
                        startTime = "est";
                        timeZone = "repudiandae";
                        vmStartSchedule = new ResourcePolicyInstanceSchedulePolicySchedule() {{
                            schedule = "voluptatem";
                        }};;
                        vmStopSchedule = new ResourcePolicyInstanceSchedulePolicySchedule() {{
                            schedule = "eius";
                        }};;
                    }};;
                    kind = "alias";
                    name = "Winston Greenholt";
                    region = "eaque";
                    resourceStatus = new ResourcePolicyResourceStatus() {{
                        instanceSchedulePolicy = new ResourcePolicyResourceStatusInstanceSchedulePolicyStatus() {{
                            lastRunStartTime = "enim";
                            nextRunStartTime = "eaque";
                        }};;
                    }};;
                    selfLink = "libero";
                    snapshotSchedulePolicy = new ResourcePolicySnapshotSchedulePolicy() {{
                        retentionPolicy = new ResourcePolicySnapshotSchedulePolicyRetentionPolicy() {{
                            maxRetentionDays = 952358;
                            onSourceDiskDelete = ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnSourceDiskDeleteEnum.UNSPECIFIED_ON_SOURCE_DISK_DELETE;
                        }};;
                        schedule = new ResourcePolicySnapshotSchedulePolicySchedule() {{
                            dailySchedule = new ResourcePolicyDailyCycle() {{
                                daysInCycle = 973273;
                                duration = "vel";
                                startTime = "nostrum";
                            }};;
                            hourlySchedule = new ResourcePolicyHourlyCycle() {{
                                duration = "possimus";
                                hoursInCycle = 180977;
                                startTime = "quae";
                            }};;
                            weeklySchedule = new ResourcePolicyWeeklyCycle() {{
                                dayOfWeeks = new org.openapis.openapi.models.shared.ResourcePolicyWeeklyCycleDayOfWeek[]{{
                                    add(new ResourcePolicyWeeklyCycleDayOfWeek() {{
                                        day = ResourcePolicyWeeklyCycleDayOfWeekDayEnum.WEDNESDAY;
                                        duration = "voluptatem";
                                        startTime = "enim";
                                    }}),
                                    add(new ResourcePolicyWeeklyCycleDayOfWeek() {{
                                        day = ResourcePolicyWeeklyCycleDayOfWeekDayEnum.SUNDAY;
                                        duration = "quos";
                                        startTime = "incidunt";
                                    }}),
                                }};
                            }};;
                        }};;
                        snapshotProperties = new ResourcePolicySnapshotSchedulePolicySnapshotProperties() {{
                            chainName = "rerum";
                            guestFlush = false;
                            labels = new java.util.HashMap<String, String>() {{
                                put("quisquam", "incidunt");
                                put("assumenda", "ea");
                            }};
                            storageLocations = new String[]{{
                                add("optio"),
                            }};
                        }};;
                    }};;
                    status = ResourcePolicyStatusEnum.READY;
                }};;
                accessToken = "suscipit";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "nostrum";
                key = "eveniet";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "facilis";
                requestId = "atque";
                uploadType = "beatae";
                uploadProtocol = "nulla";
                userIp = "incidunt";
            }};            

            ComputeResourcePoliciesInsertResponse res = sdk.resourcePolicies.computeResourcePoliciesInsert(req, new ComputeResourcePoliciesInsertSecurity() {{
                option1 = new ComputeResourcePoliciesInsertSecurityOption1("assumenda", "iusto") {{
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

## computeResourcePoliciesList

A list all the resource policies that have been configured for the specified project in specified region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesListRequest;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesListResponse;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesListSecurity;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeResourcePoliciesListRequest req = new ComputeResourcePoliciesListRequest("commodi", "omnis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "corporis";
                alt = AltEnum.MEDIA;
                callback = "illum";
                fields = "debitis";
                filter = "ipsam";
                key = "sit";
                maxResults = 581449L;
                oauthToken = "possimus";
                orderBy = "ea";
                pageToken = "quisquam";
                prettyPrint = false;
                quotaUser = "hic";
                returnPartialSuccess = false;
                uploadType = "nostrum";
                uploadProtocol = "sequi";
                userIp = "explicabo";
            }};            

            ComputeResourcePoliciesListResponse res = sdk.resourcePolicies.computeResourcePoliciesList(req, new ComputeResourcePoliciesListSecurity() {{
                option1 = new ComputeResourcePoliciesListSecurityOption1("rerum", "incidunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.resourcePolicyList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeResourcePoliciesPatch

Modify the specified resource policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesPatchRequest;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesPatchResponse;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ResourcePolicy;
import org.openapis.openapi.models.shared.ResourcePolicyDailyCycle;
import org.openapis.openapi.models.shared.ResourcePolicyGroupPlacementPolicy;
import org.openapis.openapi.models.shared.ResourcePolicyGroupPlacementPolicyCollocationEnum;
import org.openapis.openapi.models.shared.ResourcePolicyHourlyCycle;
import org.openapis.openapi.models.shared.ResourcePolicyInstanceSchedulePolicy;
import org.openapis.openapi.models.shared.ResourcePolicyInstanceSchedulePolicySchedule;
import org.openapis.openapi.models.shared.ResourcePolicyResourceStatus;
import org.openapis.openapi.models.shared.ResourcePolicyResourceStatusInstanceSchedulePolicyStatus;
import org.openapis.openapi.models.shared.ResourcePolicySnapshotSchedulePolicy;
import org.openapis.openapi.models.shared.ResourcePolicySnapshotSchedulePolicyRetentionPolicy;
import org.openapis.openapi.models.shared.ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnSourceDiskDeleteEnum;
import org.openapis.openapi.models.shared.ResourcePolicySnapshotSchedulePolicySchedule;
import org.openapis.openapi.models.shared.ResourcePolicySnapshotSchedulePolicySnapshotProperties;
import org.openapis.openapi.models.shared.ResourcePolicyStatusEnum;
import org.openapis.openapi.models.shared.ResourcePolicyWeeklyCycle;
import org.openapis.openapi.models.shared.ResourcePolicyWeeklyCycleDayOfWeek;
import org.openapis.openapi.models.shared.ResourcePolicyWeeklyCycleDayOfWeekDayEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeResourcePoliciesPatchRequest req = new ComputeResourcePoliciesPatchRequest("maxime", "sunt", "tempore") {{
                dollarXgafv = XgafvEnum.ONE;
                resourcePolicy1 = new ResourcePolicy() {{
                    creationTimestamp = "dicta";
                    description = "neque";
                    diskConsistencyGroupPolicy = new java.util.HashMap<String, Object>() {{
                        put("quis", "necessitatibus");
                    }};
                    groupPlacementPolicy = new ResourcePolicyGroupPlacementPolicy() {{
                        availabilityDomainCount = 703815;
                        collocation = ResourcePolicyGroupPlacementPolicyCollocationEnum.UNSPECIFIED_COLLOCATION;
                        maxDistance = 829485;
                        vmCount = 738812;
                    }};;
                    id = "ipsa";
                    instanceSchedulePolicy = new ResourcePolicyInstanceSchedulePolicy() {{
                        expirationTime = "officiis";
                        startTime = "aperiam";
                        timeZone = "velit";
                        vmStartSchedule = new ResourcePolicyInstanceSchedulePolicySchedule() {{
                            schedule = "odio";
                        }};;
                        vmStopSchedule = new ResourcePolicyInstanceSchedulePolicySchedule() {{
                            schedule = "molestiae";
                        }};;
                    }};;
                    kind = "ex";
                    name = "Justin Jast";
                    region = "assumenda";
                    resourceStatus = new ResourcePolicyResourceStatus() {{
                        instanceSchedulePolicy = new ResourcePolicyResourceStatusInstanceSchedulePolicyStatus() {{
                            lastRunStartTime = "esse";
                            nextRunStartTime = "beatae";
                        }};;
                    }};;
                    selfLink = "corrupti";
                    snapshotSchedulePolicy = new ResourcePolicySnapshotSchedulePolicy() {{
                        retentionPolicy = new ResourcePolicySnapshotSchedulePolicyRetentionPolicy() {{
                            maxRetentionDays = 881400;
                            onSourceDiskDelete = ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnSourceDiskDeleteEnum.UNSPECIFIED_ON_SOURCE_DISK_DELETE;
                        }};;
                        schedule = new ResourcePolicySnapshotSchedulePolicySchedule() {{
                            dailySchedule = new ResourcePolicyDailyCycle() {{
                                daysInCycle = 908469;
                                duration = "ex";
                                startTime = "blanditiis";
                            }};;
                            hourlySchedule = new ResourcePolicyHourlyCycle() {{
                                duration = "ullam";
                                hoursInCycle = 583010;
                                startTime = "similique";
                            }};;
                            weeklySchedule = new ResourcePolicyWeeklyCycle() {{
                                dayOfWeeks = new org.openapis.openapi.models.shared.ResourcePolicyWeeklyCycleDayOfWeek[]{{
                                    add(new ResourcePolicyWeeklyCycleDayOfWeek() {{
                                        day = ResourcePolicyWeeklyCycleDayOfWeekDayEnum.FRIDAY;
                                        duration = "necessitatibus";
                                        startTime = "tenetur";
                                    }}),
                                    add(new ResourcePolicyWeeklyCycleDayOfWeek() {{
                                        day = ResourcePolicyWeeklyCycleDayOfWeekDayEnum.THURSDAY;
                                        duration = "ratione";
                                        startTime = "qui";
                                    }}),
                                    add(new ResourcePolicyWeeklyCycleDayOfWeek() {{
                                        day = ResourcePolicyWeeklyCycleDayOfWeekDayEnum.MONDAY;
                                        duration = "ut";
                                        startTime = "soluta";
                                    }}),
                                }};
                            }};;
                        }};;
                        snapshotProperties = new ResourcePolicySnapshotSchedulePolicySnapshotProperties() {{
                            chainName = "at";
                            guestFlush = false;
                            labels = new java.util.HashMap<String, String>() {{
                                put("necessitatibus", "ipsum");
                                put("tenetur", "harum");
                                put("assumenda", "at");
                            }};
                            storageLocations = new String[]{{
                                add("quasi"),
                            }};
                        }};;
                    }};;
                    status = ResourcePolicyStatusEnum.INVALID;
                }};;
                accessToken = "praesentium";
                alt = AltEnum.MEDIA;
                callback = "ut";
                fields = "occaecati";
                key = "dolores";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "excepturi";
                requestId = "expedita";
                updateMask = "maiores";
                uploadType = "distinctio";
                uploadProtocol = "itaque";
                userIp = "explicabo";
            }};            

            ComputeResourcePoliciesPatchResponse res = sdk.resourcePolicies.computeResourcePoliciesPatch(req, new ComputeResourcePoliciesPatchSecurity() {{
                option1 = new ComputeResourcePoliciesPatchSecurityOption1("repudiandae", "exercitationem") {{
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

## computeResourcePoliciesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesSetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.AuthorizationLoggingOptions;
import org.openapis.openapi.models.shared.AuthorizationLoggingOptionsPermissionTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.ConditionIamEnum;
import org.openapis.openapi.models.shared.ConditionOpEnum;
import org.openapis.openapi.models.shared.ConditionSysEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.LogConfig;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptions;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptionsLogNameEnum;
import org.openapis.openapi.models.shared.LogConfigCounterOptions;
import org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptions;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptionsLogModeEnum;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.RegionSetPolicyRequest;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeResourcePoliciesSetIamPolicyRequest req = new ComputeResourcePoliciesSetIamPolicyRequest("necessitatibus", "iste", "placeat") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "nostrum";
                            condition = new Expr() {{
                                description = "accusamus";
                                expression = "fuga";
                                location = "accusantium";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("quidem"),
                            }};
                            role = "repellendus";
                        }}),
                        add(new Binding() {{
                            bindingId = "inventore";
                            condition = new Expr() {{
                                description = "consequuntur";
                                expression = "quaerat";
                                location = "unde";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("hic"),
                            }};
                            role = "atque";
                        }}),
                        add(new Binding() {{
                            bindingId = "veritatis";
                            condition = new Expr() {{
                                description = "hic";
                                expression = "magnam";
                                location = "iste";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("rerum"),
                                add("commodi"),
                                add("placeat"),
                                add("eum"),
                            }};
                            role = "rem";
                        }}),
                    }};
                    etag = "dignissimos";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aspernatur"),
                                            add("nostrum"),
                                            add("ducimus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nemo"),
                                            add("quae"),
                                            add("soluta"),
                                            add("nostrum"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("nobis"),
                                }};
                                service = "aut";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("iure"),
                                            add("nostrum"),
                                            add("aspernatur"),
                                            add("aliquam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("delectus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("maiores"),
                                            add("voluptates"),
                                            add("soluta"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsum"),
                                            add("dolorem"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("ipsum"),
                                }};
                                service = "a";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dignissimos"),
                                            add("dicta"),
                                            add("aut"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsum"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("qui"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("aliquid"),
                                    add("sapiente"),
                                    add("repellendus"),
                                    add("fuga"),
                                }};
                                service = "a";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "deleniti";
                                condition = new Expr() {{
                                    description = "accusamus";
                                    expression = "odit";
                                    location = "officiis";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("provident"),
                                    add("magni"),
                                    add("tempora"),
                                }};
                                role = "corporis";
                            }}),
                            add(new Binding() {{
                                bindingId = "maxime";
                                condition = new Expr() {{
                                    description = "distinctio";
                                    expression = "ut";
                                    location = "repudiandae";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("magnam"),
                                    add("cupiditate"),
                                    add("ab"),
                                    add("facilis"),
                                }};
                                role = "non";
                            }}),
                            add(new Binding() {{
                                bindingId = "perferendis";
                                condition = new Expr() {{
                                    description = "sapiente";
                                    expression = "et";
                                    location = "vero";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("totam"),
                                    add("cum"),
                                }};
                                role = "beatae";
                            }}),
                        }};
                        etag = "repellendus";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.IN;
                                        svc = "deleniti";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("quam"),
                                            add("sequi"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.IN;
                                        svc = "est";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("perspiciatis"),
                                            add("nobis"),
                                            add("voluptates"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "quod";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("est"),
                                            add("distinctio"),
                                            add("ea"),
                                            add("odit"),
                                        }};
                                    }}),
                                }};
                                description = "sed";
                                ins = new String[]{{
                                    add("quo"),
                                    add("molestiae"),
                                    add("quia"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Felipe Upton";
                                                    value = "ipsa";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Miss Kellie Grant";
                                                    value = "numquam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Sally Bartoletti";
                                                    value = "minus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Felicia Lind V";
                                                    value = "ex";
                                                }}),
                                            }};
                                            field = "at";
                                            metric = "id";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("magnam"),
                                    add("hic"),
                                    add("error"),
                                    add("modi"),
                                }};
                                permissions = new String[]{{
                                    add("eum"),
                                    add("maxime"),
                                    add("amet"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "assumenda";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("unde"),
                                            add("magnam"),
                                            add("tempore"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "esse";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("fuga"),
                                            add("ipsam"),
                                            add("rem"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "inventore";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("dolores"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.IN;
                                        svc = "repudiandae";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("perferendis"),
                                            add("quas"),
                                        }};
                                    }}),
                                }};
                                description = "ad";
                                ins = new String[]{{
                                    add("quis"),
                                    add("commodi"),
                                    add("perferendis"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Kenny Pacocha";
                                                    value = "est";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Shirley Romaguera";
                                                    value = "amet";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rebecca Keeling";
                                                    value = "delectus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dr. April Ortiz";
                                                    value = "itaque";
                                                }}),
                                            }};
                                            field = "laudantium";
                                            metric = "voluptatum";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Glen Franey";
                                                    value = "at";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Victor Pagac";
                                                    value = "at";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Leticia Stehr";
                                                    value = "repudiandae";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Adam Schumm";
                                                    value = "sapiente";
                                                }}),
                                            }};
                                            field = "numquam";
                                            metric = "vitae";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Edward Rowe";
                                                    value = "numquam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Sidney Sauer";
                                                    value = "minus";
                                                }}),
                                            }};
                                            field = "alias";
                                            metric = "libero";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Bobbie Daniel";
                                                    value = "rem";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Johnnie Casper Jr.";
                                                    value = "expedita";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Roberto Blanda";
                                                    value = "cum";
                                                }}),
                                            }};
                                            field = "fugit";
                                            metric = "cupiditate";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("quas"),
                                    add("minus"),
                                    add("laborum"),
                                    add("dolores"),
                                }};
                                permissions = new String[]{{
                                    add("corrupti"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.IN;
                                        svc = "harum";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("qui"),
                                            add("accusantium"),
                                            add("unde"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "neque";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("est"),
                                            add("nisi"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "ipsa";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("ad"),
                                            add("omnis"),
                                            add("aliquid"),
                                            add("expedita"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "minima";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("soluta"),
                                            add("esse"),
                                            add("vitae"),
                                        }};
                                    }}),
                                }};
                                description = "voluptate";
                                ins = new String[]{{
                                    add("doloremque"),
                                    add("architecto"),
                                    add("occaecati"),
                                    add("quaerat"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Cedric Stehr";
                                                    value = "nobis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Miss Jonathon Jacobi";
                                                    value = "eligendi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ralph Maggio";
                                                    value = "minima";
                                                }}),
                                            }};
                                            field = "ducimus";
                                            metric = "repellendus";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lena Champlin";
                                                    value = "incidunt";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Vernon Gleichner PhD";
                                                    value = "sed";
                                                }}),
                                            }};
                                            field = "placeat";
                                            metric = "ipsum";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Harvey Oberbrunner";
                                                    value = "voluptatibus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Fredrick Bauch";
                                                    value = "nemo";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dwayne Tremblay";
                                                    value = "a";
                                                }}),
                                            }};
                                            field = "expedita";
                                            metric = "ipsum";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("maiores"),
                                    add("praesentium"),
                                    add("eos"),
                                    add("officia"),
                                }};
                                permissions = new String[]{{
                                    add("aliquam"),
                                }};
                            }}),
                        }};
                        version = 722307;
                    }};;
                }};;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "nobis";
                fields = "quam";
                key = "corporis";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "voluptatum";
                uploadType = "error";
                uploadProtocol = "vitae";
                userIp = "porro";
            }};            

            ComputeResourcePoliciesSetIamPolicyResponse res = sdk.resourcePolicies.computeResourcePoliciesSetIamPolicy(req, new ComputeResourcePoliciesSetIamPolicySecurity() {{
                option1 = new ComputeResourcePoliciesSetIamPolicySecurityOption1("cum", "iusto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeResourcePoliciesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeResourcePoliciesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeResourcePoliciesTestIamPermissionsRequest req = new ComputeResourcePoliciesTestIamPermissionsRequest("necessitatibus", "ut", "est") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("cupiditate"),
                        add("dicta"),
                        add("nihil"),
                    }};
                }};;
                accessToken = "laborum";
                alt = AltEnum.PROTO;
                callback = "dolore";
                fields = "quos";
                key = "porro";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "laudantium";
                uploadType = "nemo";
                uploadProtocol = "distinctio";
                userIp = "totam";
            }};            

            ComputeResourcePoliciesTestIamPermissionsResponse res = sdk.resourcePolicies.computeResourcePoliciesTestIamPermissions(req, new ComputeResourcePoliciesTestIamPermissionsSecurity() {{
                option1 = new ComputeResourcePoliciesTestIamPermissionsSecurityOption1("incidunt", "cupiditate") {{
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
