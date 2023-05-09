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

            ComputeResourcePoliciesAggregatedListRequest req = new ComputeResourcePoliciesAggregatedListRequest("architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "impedit";
                alt = AltEnum.PROTO;
                callback = "fugit";
                fields = "impedit";
                filter = "quod";
                includeAllScopes = false;
                key = "numquam";
                maxResults = 225984L;
                oauthToken = "perferendis";
                orderBy = "modi";
                pageToken = "qui";
                prettyPrint = false;
                quotaUser = "quo";
                returnPartialSuccess = false;
                uploadType = "laboriosam";
                uploadProtocol = "explicabo";
                userIp = "sed";
            }};            

            ComputeResourcePoliciesAggregatedListResponse res = sdk.resourcePolicies.computeResourcePoliciesAggregatedList(req, new ComputeResourcePoliciesAggregatedListSecurity() {{
                option1 = new ComputeResourcePoliciesAggregatedListSecurityOption1("illum", "aperiam") {{
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

            ComputeResourcePoliciesDeleteRequest req = new ComputeResourcePoliciesDeleteRequest("eius", "beatae", "voluptates") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ratione";
                alt = AltEnum.PROTO;
                callback = "quam";
                fields = "ea";
                key = "molestiae";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "excepturi";
                requestId = "excepturi";
                uploadType = "officia";
                uploadProtocol = "illum";
                userIp = "labore";
            }};            

            ComputeResourcePoliciesDeleteResponse res = sdk.resourcePolicies.computeResourcePoliciesDelete(req, new ComputeResourcePoliciesDeleteSecurity() {{
                option1 = new ComputeResourcePoliciesDeleteSecurityOption1("quisquam", "harum") {{
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

            ComputeResourcePoliciesGetRequest req = new ComputeResourcePoliciesGetRequest("esse", "laborum", "unde") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dicta";
                alt = AltEnum.JSON;
                callback = "assumenda";
                fields = "quam";
                key = "quaerat";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "illum";
                uploadProtocol = "laudantium";
                userIp = "expedita";
            }};            

            ComputeResourcePoliciesGetResponse res = sdk.resourcePolicies.computeResourcePoliciesGet(req, new ComputeResourcePoliciesGetSecurity() {{
                option1 = new ComputeResourcePoliciesGetSecurityOption1("et", "debitis") {{
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

            ComputeResourcePoliciesGetIamPolicyRequest req = new ComputeResourcePoliciesGetIamPolicyRequest("quae", "nostrum", "expedita") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "illo";
                alt = AltEnum.MEDIA;
                callback = "esse";
                fields = "ex";
                key = "repellendus";
                oauthToken = "aspernatur";
                optionsRequestedPolicyVersion = 433683L;
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "facilis";
                uploadProtocol = "alias";
                userIp = "eius";
            }};            

            ComputeResourcePoliciesGetIamPolicyResponse res = sdk.resourcePolicies.computeResourcePoliciesGetIamPolicy(req, new ComputeResourcePoliciesGetIamPolicySecurity() {{
                option1 = new ComputeResourcePoliciesGetIamPolicySecurityOption1("molestiae", "eos") {{
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
import org.openapis.openapi.models.shared.ResourcePolicyGroupPlacementPolicyLocalityEnum;
import org.openapis.openapi.models.shared.ResourcePolicyGroupPlacementPolicyScopeEnum;
import org.openapis.openapi.models.shared.ResourcePolicyGroupPlacementPolicyStyleEnum;
import org.openapis.openapi.models.shared.ResourcePolicyHourlyCycle;
import org.openapis.openapi.models.shared.ResourcePolicyInstanceSchedulePolicy;
import org.openapis.openapi.models.shared.ResourcePolicyInstanceSchedulePolicySchedule;
import org.openapis.openapi.models.shared.ResourcePolicyResourceStatus;
import org.openapis.openapi.models.shared.ResourcePolicyResourceStatusInstanceSchedulePolicyStatus;
import org.openapis.openapi.models.shared.ResourcePolicySnapshotSchedulePolicy;
import org.openapis.openapi.models.shared.ResourcePolicySnapshotSchedulePolicyRetentionPolicy;
import org.openapis.openapi.models.shared.ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnPolicySwitchEnum;
import org.openapis.openapi.models.shared.ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnSourceDiskDeleteEnum;
import org.openapis.openapi.models.shared.ResourcePolicySnapshotSchedulePolicySchedule;
import org.openapis.openapi.models.shared.ResourcePolicySnapshotSchedulePolicySnapshotProperties;
import org.openapis.openapi.models.shared.ResourcePolicyStatusEnum;
import org.openapis.openapi.models.shared.ResourcePolicyVmMaintenancePolicy;
import org.openapis.openapi.models.shared.ResourcePolicyVmMaintenancePolicyConcurrencyControl;
import org.openapis.openapi.models.shared.ResourcePolicyVmMaintenancePolicyMaintenanceWindow;
import org.openapis.openapi.models.shared.ResourcePolicyWeeklyCycle;
import org.openapis.openapi.models.shared.ResourcePolicyWeeklyCycleDayOfWeek;
import org.openapis.openapi.models.shared.ResourcePolicyWeeklyCycleDayOfWeekDayEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeResourcePoliciesInsertRequest req = new ComputeResourcePoliciesInsertRequest("consequatur", "totam") {{
                dollarXgafv = XgafvEnum.TWO;
                resourcePolicy = new ResourcePolicy() {{
                    creationTimestamp = "quis";
                    description = "saepe";
                    diskConsistencyGroupPolicy = new java.util.HashMap<String, Object>() {{
                        put("similique", "placeat");
                    }};
                    groupPlacementPolicy = new ResourcePolicyGroupPlacementPolicy() {{
                        availabilityDomainCount = 650548;
                        collocation = ResourcePolicyGroupPlacementPolicyCollocationEnum.CLUSTERED;
                        locality = ResourcePolicyGroupPlacementPolicyLocalityEnum.BEST_EFFORT;
                        maxDistance = 910800;
                        scope = ResourcePolicyGroupPlacementPolicyScopeEnum.UNSPECIFIED_SCOPE;
                        style = ResourcePolicyGroupPlacementPolicyStyleEnum.FULLY_SPREAD;
                        tpuTopology = "quisquam";
                        vmCount = 684723;
                    }};;
                    id = "veritatis";
                    instanceSchedulePolicy = new ResourcePolicyInstanceSchedulePolicy() {{
                        expirationTime = "dolorem";
                        startTime = "architecto";
                        timeZone = "nam";
                        vmStartSchedule = new ResourcePolicyInstanceSchedulePolicySchedule() {{
                            schedule = "a";
                        }};;
                        vmStopSchedule = new ResourcePolicyInstanceSchedulePolicySchedule() {{
                            schedule = "qui";
                        }};;
                    }};;
                    kind = "id";
                    name = "Beverly Jerde";
                    region = "ducimus";
                    resourceStatus = new ResourcePolicyResourceStatus() {{
                        instanceSchedulePolicy = new ResourcePolicyResourceStatusInstanceSchedulePolicyStatus() {{
                            lastRunStartTime = "maxime";
                            nextRunStartTime = "eius";
                        }};;
                    }};;
                    selfLink = "doloribus";
                    selfLinkWithId = "iusto";
                    snapshotSchedulePolicy = new ResourcePolicySnapshotSchedulePolicy() {{
                        retentionPolicy = new ResourcePolicySnapshotSchedulePolicyRetentionPolicy() {{
                            maxRetentionDays = 792266;
                            onPolicySwitch = ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnPolicySwitchEnum.DO_NOT_RETROACTIVELY_APPLY;
                            onSourceDiskDelete = ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnSourceDiskDeleteEnum.UNSPECIFIED_ON_SOURCE_DISK_DELETE;
                        }};;
                        schedule = new ResourcePolicySnapshotSchedulePolicySchedule() {{
                            dailySchedule = new ResourcePolicyDailyCycle() {{
                                daysInCycle = 300725;
                                duration = "optio";
                                startTime = "repellat";
                            }};;
                            hourlySchedule = new ResourcePolicyHourlyCycle() {{
                                duration = "aperiam";
                                hoursInCycle = 565381;
                                startTime = "reprehenderit";
                            }};;
                            weeklySchedule = new ResourcePolicyWeeklyCycle() {{
                                dayOfWeeks = new org.openapis.openapi.models.shared.ResourcePolicyWeeklyCycleDayOfWeek[]{{
                                    add(new ResourcePolicyWeeklyCycleDayOfWeek() {{
                                        day = ResourcePolicyWeeklyCycleDayOfWeekDayEnum.SUNDAY;
                                        duration = "ullam";
                                        startTime = "accusantium";
                                    }}),
                                    add(new ResourcePolicyWeeklyCycleDayOfWeek() {{
                                        day = ResourcePolicyWeeklyCycleDayOfWeekDayEnum.TUESDAY;
                                        duration = "ut";
                                        startTime = "eligendi";
                                    }}),
                                    add(new ResourcePolicyWeeklyCycleDayOfWeek() {{
                                        day = ResourcePolicyWeeklyCycleDayOfWeekDayEnum.SATURDAY;
                                        duration = "nobis";
                                        startTime = "quae";
                                    }}),
                                    add(new ResourcePolicyWeeklyCycleDayOfWeek() {{
                                        day = ResourcePolicyWeeklyCycleDayOfWeekDayEnum.MONDAY;
                                        duration = "incidunt";
                                        startTime = "maxime";
                                    }}),
                                }};
                            }};;
                        }};;
                        snapshotProperties = new ResourcePolicySnapshotSchedulePolicySnapshotProperties() {{
                            chainName = "labore";
                            guestFlush = false;
                            labels = new java.util.HashMap<String, String>() {{
                                put("fugiat", "a");
                            }};
                            storageLocations = new String[]{{
                                add("dolore"),
                                add("eos"),
                            }};
                        }};;
                    }};;
                    status = ResourcePolicyStatusEnum.CREATING;
                    vmMaintenancePolicy = new ResourcePolicyVmMaintenancePolicy() {{
                        concurrencyControlGroup = new ResourcePolicyVmMaintenancePolicyConcurrencyControl() {{
                            concurrencyLimit = 316548;
                        }};;
                        maintenanceWindow = new ResourcePolicyVmMaintenancePolicyMaintenanceWindow() {{
                            dailyMaintenanceWindow = new ResourcePolicyDailyCycle() {{
                                daysInCycle = 965228;
                                duration = "fugit";
                                startTime = "consequatur";
                            }};;
                        }};;
                    }};;
                }};;
                accessToken = "aperiam";
                alt = AltEnum.PROTO;
                callback = "magnam";
                fields = "tempore";
                key = "deserunt";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "deserunt";
                requestId = "facilis";
                uploadType = "non";
                uploadProtocol = "tempore";
                userIp = "modi";
            }};            

            ComputeResourcePoliciesInsertResponse res = sdk.resourcePolicies.computeResourcePoliciesInsert(req, new ComputeResourcePoliciesInsertSecurity() {{
                option1 = new ComputeResourcePoliciesInsertSecurityOption1("ad", "distinctio") {{
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

            ComputeResourcePoliciesListRequest req = new ComputeResourcePoliciesListRequest("quidem", "adipisci") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ut";
                alt = AltEnum.MEDIA;
                callback = "illo";
                fields = "magnam";
                filter = "error";
                key = "sed";
                maxResults = 103535L;
                oauthToken = "officiis";
                orderBy = "temporibus";
                pageToken = "unde";
                prettyPrint = false;
                quotaUser = "corporis";
                returnPartialSuccess = false;
                uploadType = "deleniti";
                uploadProtocol = "reiciendis";
                userIp = "iusto";
            }};            

            ComputeResourcePoliciesListResponse res = sdk.resourcePolicies.computeResourcePoliciesList(req, new ComputeResourcePoliciesListSecurity() {{
                option1 = new ComputeResourcePoliciesListSecurityOption1("molestiae", "aliquid") {{
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
import org.openapis.openapi.models.shared.ResourcePolicyGroupPlacementPolicyLocalityEnum;
import org.openapis.openapi.models.shared.ResourcePolicyGroupPlacementPolicyScopeEnum;
import org.openapis.openapi.models.shared.ResourcePolicyGroupPlacementPolicyStyleEnum;
import org.openapis.openapi.models.shared.ResourcePolicyHourlyCycle;
import org.openapis.openapi.models.shared.ResourcePolicyInstanceSchedulePolicy;
import org.openapis.openapi.models.shared.ResourcePolicyInstanceSchedulePolicySchedule;
import org.openapis.openapi.models.shared.ResourcePolicyResourceStatus;
import org.openapis.openapi.models.shared.ResourcePolicyResourceStatusInstanceSchedulePolicyStatus;
import org.openapis.openapi.models.shared.ResourcePolicySnapshotSchedulePolicy;
import org.openapis.openapi.models.shared.ResourcePolicySnapshotSchedulePolicyRetentionPolicy;
import org.openapis.openapi.models.shared.ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnPolicySwitchEnum;
import org.openapis.openapi.models.shared.ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnSourceDiskDeleteEnum;
import org.openapis.openapi.models.shared.ResourcePolicySnapshotSchedulePolicySchedule;
import org.openapis.openapi.models.shared.ResourcePolicySnapshotSchedulePolicySnapshotProperties;
import org.openapis.openapi.models.shared.ResourcePolicyStatusEnum;
import org.openapis.openapi.models.shared.ResourcePolicyVmMaintenancePolicy;
import org.openapis.openapi.models.shared.ResourcePolicyVmMaintenancePolicyConcurrencyControl;
import org.openapis.openapi.models.shared.ResourcePolicyVmMaintenancePolicyMaintenanceWindow;
import org.openapis.openapi.models.shared.ResourcePolicyWeeklyCycle;
import org.openapis.openapi.models.shared.ResourcePolicyWeeklyCycleDayOfWeek;
import org.openapis.openapi.models.shared.ResourcePolicyWeeklyCycleDayOfWeekDayEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeResourcePoliciesPatchRequest req = new ComputeResourcePoliciesPatchRequest("quisquam", "nam", "officiis") {{
                dollarXgafv = XgafvEnum.ONE;
                resourcePolicy1 = new ResourcePolicy() {{
                    creationTimestamp = "explicabo";
                    description = "culpa";
                    diskConsistencyGroupPolicy = new java.util.HashMap<String, Object>() {{
                        put("dolorem", "iusto");
                        put("in", "dolor");
                        put("pariatur", "eos");
                    }};
                    groupPlacementPolicy = new ResourcePolicyGroupPlacementPolicy() {{
                        availabilityDomainCount = 448704;
                        collocation = ResourcePolicyGroupPlacementPolicyCollocationEnum.COLLOCATED;
                        locality = ResourcePolicyGroupPlacementPolicyLocalityEnum.STRICT;
                        maxDistance = 195268;
                        scope = ResourcePolicyGroupPlacementPolicyScopeEnum.HOST;
                        style = ResourcePolicyGroupPlacementPolicyStyleEnum.FULLY_SPREAD;
                        tpuTopology = "perspiciatis";
                        vmCount = 104328;
                    }};;
                    id = "aliquam";
                    instanceSchedulePolicy = new ResourcePolicyInstanceSchedulePolicy() {{
                        expirationTime = "consequatur";
                        startTime = "iusto";
                        timeZone = "iusto";
                        vmStartSchedule = new ResourcePolicyInstanceSchedulePolicySchedule() {{
                            schedule = "non";
                        }};;
                        vmStopSchedule = new ResourcePolicyInstanceSchedulePolicySchedule() {{
                            schedule = "consequatur";
                        }};;
                    }};;
                    kind = "dolorem";
                    name = "Mrs. Kelly Reinger";
                    region = "incidunt";
                    resourceStatus = new ResourcePolicyResourceStatus() {{
                        instanceSchedulePolicy = new ResourcePolicyResourceStatusInstanceSchedulePolicyStatus() {{
                            lastRunStartTime = "in";
                            nextRunStartTime = "architecto";
                        }};;
                    }};;
                    selfLink = "veritatis";
                    selfLinkWithId = "quisquam";
                    snapshotSchedulePolicy = new ResourcePolicySnapshotSchedulePolicy() {{
                        retentionPolicy = new ResourcePolicySnapshotSchedulePolicyRetentionPolicy() {{
                            maxRetentionDays = 367386;
                            onPolicySwitch = ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnPolicySwitchEnum.DO_NOT_RETROACTIVELY_APPLY;
                            onSourceDiskDelete = ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnSourceDiskDeleteEnum.APPLY_RETENTION_POLICY;
                        }};;
                        schedule = new ResourcePolicySnapshotSchedulePolicySchedule() {{
                            dailySchedule = new ResourcePolicyDailyCycle() {{
                                daysInCycle = 427042;
                                duration = "velit";
                                startTime = "unde";
                            }};;
                            hourlySchedule = new ResourcePolicyHourlyCycle() {{
                                duration = "et";
                                hoursInCycle = 805778;
                                startTime = "in";
                            }};;
                            weeklySchedule = new ResourcePolicyWeeklyCycle() {{
                                dayOfWeeks = new org.openapis.openapi.models.shared.ResourcePolicyWeeklyCycleDayOfWeek[]{{
                                    add(new ResourcePolicyWeeklyCycleDayOfWeek() {{
                                        day = ResourcePolicyWeeklyCycleDayOfWeekDayEnum.MONDAY;
                                        duration = "libero";
                                        startTime = "vitae";
                                    }}),
                                    add(new ResourcePolicyWeeklyCycleDayOfWeek() {{
                                        day = ResourcePolicyWeeklyCycleDayOfWeekDayEnum.WEDNESDAY;
                                        duration = "corrupti";
                                        startTime = "quam";
                                    }}),
                                }};
                            }};;
                        }};;
                        snapshotProperties = new ResourcePolicySnapshotSchedulePolicySnapshotProperties() {{
                            chainName = "atque";
                            guestFlush = false;
                            labels = new java.util.HashMap<String, String>() {{
                                put("veniam", "dolorem");
                                put("commodi", "minima");
                                put("hic", "illum");
                                put("sed", "eum");
                            }};
                            storageLocations = new String[]{{
                                add("velit"),
                                add("minima"),
                                add("adipisci"),
                                add("aliquam"),
                            }};
                        }};;
                    }};;
                    status = ResourcePolicyStatusEnum.EXPIRED;
                    vmMaintenancePolicy = new ResourcePolicyVmMaintenancePolicy() {{
                        concurrencyControlGroup = new ResourcePolicyVmMaintenancePolicyConcurrencyControl() {{
                            concurrencyLimit = 584103;
                        }};;
                        maintenanceWindow = new ResourcePolicyVmMaintenancePolicyMaintenanceWindow() {{
                            dailyMaintenanceWindow = new ResourcePolicyDailyCycle() {{
                                daysInCycle = 655420;
                                duration = "suscipit";
                                startTime = "aperiam";
                            }};;
                        }};;
                    }};;
                }};;
                accessToken = "similique";
                alt = AltEnum.PROTO;
                callback = "quo";
                fields = "architecto";
                key = "suscipit";
                oauthToken = "dolore";
                paths = new String[]{{
                    add("eveniet"),
                    add("molestiae"),
                    add("magni"),
                    add("provident"),
                }};
                prettyPrint = false;
                quotaUser = "sit";
                requestId = "architecto";
                updateMask = "nulla";
                uploadType = "repellat";
                uploadProtocol = "voluptatum";
                userIp = "cumque";
            }};            

            ComputeResourcePoliciesPatchResponse res = sdk.resourcePolicies.computeResourcePoliciesPatch(req, new ComputeResourcePoliciesPatchSecurity() {{
                option1 = new ComputeResourcePoliciesPatchSecurityOption1("voluptatibus", "id") {{
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

            ComputeResourcePoliciesSetIamPolicyRequest req = new ComputeResourcePoliciesSetIamPolicyRequest("labore", "perferendis", "atque") {{
                dollarXgafv = XgafvEnum.ONE;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "alias";
                            condition = new Expr() {{
                                description = "aperiam";
                                expression = "minima";
                                location = "reprehenderit";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("nihil"),
                            }};
                            role = "mollitia";
                        }}),
                    }};
                    etag = "occaecati";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sit"),
                                            add("minus"),
                                            add("culpa"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quaerat"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("autem"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("sapiente"),
                                    add("distinctio"),
                                }};
                                service = "id";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("iste"),
                                            add("voluptatibus"),
                                            add("cum"),
                                            add("sapiente"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("amet"),
                                            add("ipsam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptatibus"),
                                            add("enim"),
                                            add("labore"),
                                            add("explicabo"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sunt"),
                                            add("incidunt"),
                                            add("alias"),
                                            add("veritatis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("magni"),
                                    add("a"),
                                    add("odio"),
                                    add("quaerat"),
                                }};
                                service = "adipisci";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quasi"),
                                            add("vel"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolorem"),
                                            add("ab"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nobis"),
                                            add("assumenda"),
                                            add("fuga"),
                                            add("necessitatibus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("neque"),
                                            add("alias"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("tempore"),
                                }};
                                service = "in";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("eos"),
                                            add("voluptates"),
                                            add("porro"),
                                            add("molestias"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sit"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("alias"),
                                    add("officia"),
                                    add("officiis"),
                                    add("quibusdam"),
                                }};
                                service = "neque";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "accusamus";
                                condition = new Expr() {{
                                    description = "est";
                                    expression = "beatae";
                                    location = "consectetur";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("quidem"),
                                    add("occaecati"),
                                    add("nostrum"),
                                }};
                                role = "perspiciatis";
                            }}),
                        }};
                        etag = "quisquam";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.IN;
                                        svc = "unde";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("eum"),
                                            add("unde"),
                                            add("unde"),
                                            add("quaerat"),
                                        }};
                                    }}),
                                }};
                                description = "reiciendis";
                                ins = new String[]{{
                                    add("esse"),
                                    add("inventore"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Vicky Schneider";
                                                    value = "aliquam";
                                                }}),
                                            }};
                                            field = "quo";
                                            metric = "libero";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.PERMISSION_TYPE_UNSPECIFIED;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Sherri Klein";
                                                    value = "at";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Armando McClure V";
                                                    value = "neque";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Alexandra Reinger";
                                                    value = "quos";
                                                }}),
                                            }};
                                            field = "odio";
                                            metric = "quidem";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("quod"),
                                    add("quo"),
                                }};
                                permissions = new String[]{{
                                    add("natus"),
                                    add("corrupti"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "provident";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("illum"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "occaecati";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("dolores"),
                                            add("in"),
                                            add("voluptates"),
                                            add("fugit"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "ratione";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("nesciunt"),
                                            add("saepe"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "ad";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("possimus"),
                                        }};
                                    }}),
                                }};
                                description = "necessitatibus";
                                ins = new String[]{{
                                    add("inventore"),
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
                                                    name = "Randy Doyle";
                                                    value = "consequatur";
                                                }}),
                                            }};
                                            field = "perspiciatis";
                                            metric = "eos";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jacquelyn Ernser";
                                                    value = "provident";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Gene Russel";
                                                    value = "voluptate";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ricardo Kohler";
                                                    value = "at";
                                                }}),
                                            }};
                                            field = "at";
                                            metric = "non";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("nemo"),
                                    add("quidem"),
                                    add("suscipit"),
                                    add("itaque"),
                                }};
                                permissions = new String[]{{
                                    add("animi"),
                                    add("nesciunt"),
                                }};
                            }}),
                        }};
                        version = 317466;
                    }};;
                }};;
                accessToken = "ab";
                alt = AltEnum.PROTO;
                callback = "facilis";
                fields = "ducimus";
                key = "quibusdam";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "a";
                uploadProtocol = "enim";
                userIp = "excepturi";
            }};            

            ComputeResourcePoliciesSetIamPolicyResponse res = sdk.resourcePolicies.computeResourcePoliciesSetIamPolicy(req, new ComputeResourcePoliciesSetIamPolicySecurity() {{
                option1 = new ComputeResourcePoliciesSetIamPolicySecurityOption1("quae", "natus") {{
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

            ComputeResourcePoliciesTestIamPermissionsRequest req = new ComputeResourcePoliciesTestIamPermissionsRequest("tenetur", "distinctio", "illum") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("dicta"),
                        add("tempore"),
                        add("maxime"),
                        add("minus"),
                    }};
                }};;
                accessToken = "iure";
                alt = AltEnum.MEDIA;
                callback = "eos";
                fields = "quam";
                key = "nostrum";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "harum";
                uploadType = "error";
                uploadProtocol = "laborum";
                userIp = "sunt";
            }};            

            ComputeResourcePoliciesTestIamPermissionsResponse res = sdk.resourcePolicies.computeResourcePoliciesTestIamPermissions(req, new ComputeResourcePoliciesTestIamPermissionsSecurity() {{
                option1 = new ComputeResourcePoliciesTestIamPermissionsSecurityOption1("ipsum", "debitis") {{
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
