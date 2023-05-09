# resourcePolicies

### Available Operations

* [computeResourcePoliciesAggregatedList](#computeresourcepoliciesaggregatedlist) - Retrieves an aggregated list of resource policies.
* [computeResourcePoliciesDelete](#computeresourcepoliciesdelete) - Deletes the specified resource policy.
* [computeResourcePoliciesGet](#computeresourcepoliciesget) - Retrieves all information of the specified resource policy.
* [computeResourcePoliciesGetIamPolicy](#computeresourcepoliciesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeResourcePoliciesInsert](#computeresourcepoliciesinsert) - Creates a new resource policy.
* [computeResourcePoliciesList](#computeresourcepolicieslist) - A list all the resource policies that have been configured for the specified project in specified region.
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

            ComputeResourcePoliciesAggregatedListRequest req = new ComputeResourcePoliciesAggregatedListRequest("dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequuntur";
                alt = AltEnum.JSON;
                callback = "perspiciatis";
                fields = "reprehenderit";
                filter = "id";
                includeAllScopes = false;
                key = "temporibus";
                maxResults = 353851L;
                oauthToken = "quisquam";
                orderBy = "similique";
                pageToken = "culpa";
                prettyPrint = false;
                quotaUser = "nulla";
                returnPartialSuccess = false;
                uploadType = "earum";
                uploadProtocol = "rerum";
                userIp = "libero";
            }};            

            ComputeResourcePoliciesAggregatedListResponse res = sdk.resourcePolicies.computeResourcePoliciesAggregatedList(req, new ComputeResourcePoliciesAggregatedListSecurity() {{
                option1 = new ComputeResourcePoliciesAggregatedListSecurityOption1("consequatur", "a") {{
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

            ComputeResourcePoliciesDeleteRequest req = new ComputeResourcePoliciesDeleteRequest("voluptas", "aperiam", "alias") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "cupiditate";
                fields = "vel";
                key = "corrupti";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "et";
                requestId = "quia";
                uploadType = "accusantium";
                uploadProtocol = "error";
                userIp = "dignissimos";
            }};            

            ComputeResourcePoliciesDeleteResponse res = sdk.resourcePolicies.computeResourcePoliciesDelete(req, new ComputeResourcePoliciesDeleteSecurity() {{
                option1 = new ComputeResourcePoliciesDeleteSecurityOption1("fuga", "ratione") {{
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

            ComputeResourcePoliciesGetRequest req = new ComputeResourcePoliciesGetRequest("ut", "debitis", "voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eveniet";
                alt = AltEnum.JSON;
                callback = "modi";
                fields = "illo";
                key = "quo";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "tenetur";
                uploadProtocol = "cum";
                userIp = "dignissimos";
            }};            

            ComputeResourcePoliciesGetResponse res = sdk.resourcePolicies.computeResourcePoliciesGet(req, new ComputeResourcePoliciesGetSecurity() {{
                option1 = new ComputeResourcePoliciesGetSecurityOption1("beatae", "aliquam") {{
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

            ComputeResourcePoliciesGetIamPolicyRequest req = new ComputeResourcePoliciesGetIamPolicyRequest("perferendis", "quaerat", "sequi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "repellat";
                fields = "exercitationem";
                key = "ea";
                oauthToken = "vel";
                optionsRequestedPolicyVersion = 926453L;
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "veritatis";
                uploadProtocol = "placeat";
                userIp = "illo";
            }};            

            ComputeResourcePoliciesGetIamPolicyResponse res = sdk.resourcePolicies.computeResourcePoliciesGetIamPolicy(req, new ComputeResourcePoliciesGetIamPolicySecurity() {{
                option1 = new ComputeResourcePoliciesGetIamPolicySecurityOption1("omnis", "facere") {{
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

            ComputeResourcePoliciesInsertRequest req = new ComputeResourcePoliciesInsertRequest("voluptatum", "est") {{
                dollarXgafv = XgafvEnum.TWO;
                resourcePolicy = new ResourcePolicy() {{
                    creationTimestamp = "sapiente";
                    description = "autem";
                    groupPlacementPolicy = new ResourcePolicyGroupPlacementPolicy() {{
                        availabilityDomainCount = 206043;
                        collocation = ResourcePolicyGroupPlacementPolicyCollocationEnum.UNSPECIFIED_COLLOCATION;
                        vmCount = 491259;
                    }};;
                    id = "libero";
                    instanceSchedulePolicy = new ResourcePolicyInstanceSchedulePolicy() {{
                        expirationTime = "amet";
                        startTime = "ab";
                        timeZone = "id";
                        vmStartSchedule = new ResourcePolicyInstanceSchedulePolicySchedule() {{
                            schedule = "nemo";
                        }};;
                        vmStopSchedule = new ResourcePolicyInstanceSchedulePolicySchedule() {{
                            schedule = "vero";
                        }};;
                    }};;
                    kind = "facere";
                    name = "Charlene Mayer I";
                    region = "officia";
                    resourceStatus = new ResourcePolicyResourceStatus() {{
                        instanceSchedulePolicy = new ResourcePolicyResourceStatusInstanceSchedulePolicyStatus() {{
                            lastRunStartTime = "a";
                            nextRunStartTime = "possimus";
                        }};;
                    }};;
                    selfLink = "deserunt";
                    snapshotSchedulePolicy = new ResourcePolicySnapshotSchedulePolicy() {{
                        retentionPolicy = new ResourcePolicySnapshotSchedulePolicyRetentionPolicy() {{
                            maxRetentionDays = 910820;
                            onSourceDiskDelete = ResourcePolicySnapshotSchedulePolicyRetentionPolicyOnSourceDiskDeleteEnum.UNSPECIFIED_ON_SOURCE_DISK_DELETE;
                        }};;
                        schedule = new ResourcePolicySnapshotSchedulePolicySchedule() {{
                            dailySchedule = new ResourcePolicyDailyCycle() {{
                                daysInCycle = 547120;
                                duration = "velit";
                                startTime = "numquam";
                            }};;
                            hourlySchedule = new ResourcePolicyHourlyCycle() {{
                                duration = "expedita";
                                hoursInCycle = 736057;
                                startTime = "officia";
                            }};;
                            weeklySchedule = new ResourcePolicyWeeklyCycle() {{
                                dayOfWeeks = new org.openapis.openapi.models.shared.ResourcePolicyWeeklyCycleDayOfWeek[]{{
                                    add(new ResourcePolicyWeeklyCycleDayOfWeek() {{
                                        day = ResourcePolicyWeeklyCycleDayOfWeekDayEnum.MONDAY;
                                        duration = "molestias";
                                        startTime = "nostrum";
                                    }}),
                                    add(new ResourcePolicyWeeklyCycleDayOfWeek() {{
                                        day = ResourcePolicyWeeklyCycleDayOfWeekDayEnum.SUNDAY;
                                        duration = "aperiam";
                                        startTime = "repudiandae";
                                    }}),
                                    add(new ResourcePolicyWeeklyCycleDayOfWeek() {{
                                        day = ResourcePolicyWeeklyCycleDayOfWeekDayEnum.INVALID;
                                        duration = "dignissimos";
                                        startTime = "saepe";
                                    }}),
                                }};
                            }};;
                        }};;
                        snapshotProperties = new ResourcePolicySnapshotSchedulePolicySnapshotProperties() {{
                            chainName = "vero";
                            guestFlush = false;
                            labels = new java.util.HashMap<String, String>() {{
                                put("eius", "culpa");
                                put("excepturi", "ex");
                            }};
                            storageLocations = new String[]{{
                                add("iste"),
                                add("praesentium"),
                                add("eveniet"),
                                add("possimus"),
                            }};
                        }};;
                    }};;
                    status = ResourcePolicyStatusEnum.INVALID;
                }};;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "saepe";
                fields = "ipsa";
                key = "optio";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "ad";
                requestId = "doloribus";
                uploadType = "soluta";
                uploadProtocol = "unde";
                userIp = "libero";
            }};            

            ComputeResourcePoliciesInsertResponse res = sdk.resourcePolicies.computeResourcePoliciesInsert(req, new ComputeResourcePoliciesInsertSecurity() {{
                option1 = new ComputeResourcePoliciesInsertSecurityOption1("dolore", "unde") {{
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

            ComputeResourcePoliciesListRequest req = new ComputeResourcePoliciesListRequest("quo", "deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aliquid";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "sapiente";
                filter = "consectetur";
                key = "eligendi";
                maxResults = 228521L;
                oauthToken = "accusantium";
                orderBy = "a";
                pageToken = "sit";
                prettyPrint = false;
                quotaUser = "consequatur";
                returnPartialSuccess = false;
                uploadType = "quibusdam";
                uploadProtocol = "animi";
                userIp = "placeat";
            }};            

            ComputeResourcePoliciesListResponse res = sdk.resourcePolicies.computeResourcePoliciesList(req, new ComputeResourcePoliciesListSecurity() {{
                option1 = new ComputeResourcePoliciesListSecurityOption1("iusto", "repellat") {{
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

            ComputeResourcePoliciesSetIamPolicyRequest req = new ComputeResourcePoliciesSetIamPolicyRequest("amet", "corrupti", "expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "doloremque";
                            condition = new Expr() {{
                                description = "odio";
                                expression = "atque";
                                location = "animi";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("recusandae"),
                                add("pariatur"),
                            }};
                            role = "sequi";
                        }}),
                    }};
                    etag = "suscipit";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quo"),
                                            add("dolores"),
                                            add("illo"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("adipisci"),
                                }};
                                service = "velit";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("deserunt"),
                                            add("maxime"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ab"),
                                            add("nostrum"),
                                            add("perferendis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("vitae"),
                                    add("libero"),
                                }};
                                service = "nesciunt";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ducimus"),
                                            add("voluptatum"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("quod"),
                                    add("saepe"),
                                }};
                                service = "est";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "necessitatibus";
                                condition = new Expr() {{
                                    description = "dolorum";
                                    expression = "saepe";
                                    location = "magnam";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("blanditiis"),
                                    add("provident"),
                                }};
                                role = "repellat";
                            }}),
                        }};
                        etag = "accusamus";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "accusamus";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("provident"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "eius";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("consequuntur"),
                                            add("autem"),
                                            add("hic"),
                                            add("ad"),
                                        }};
                                    }}),
                                }};
                                description = "enim";
                                ins = new String[]{{
                                    add("recusandae"),
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
                                                    name = "Meredith Crona";
                                                    value = "optio";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Gayle Macejkovic";
                                                    value = "alias";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jeremiah Champlin";
                                                    value = "vitae";
                                                }}),
                                            }};
                                            field = "iusto";
                                            metric = "nulla";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Irma Gottlieb";
                                                    value = "labore";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mrs. Jane Weissnat";
                                                    value = "facere";
                                                }}),
                                            }};
                                            field = "illo";
                                            metric = "deserunt";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("repudiandae"),
                                    add("rerum"),
                                    add("tempora"),
                                    add("iure"),
                                }};
                                permissions = new String[]{{
                                    add("amet"),
                                    add("consequatur"),
                                    add("omnis"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.IN;
                                        svc = "quisquam";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("eos"),
                                            add("iure"),
                                            add("incidunt"),
                                            add("ad"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "reiciendis";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("perspiciatis"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "itaque";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("tempora"),
                                            add("temporibus"),
                                        }};
                                    }}),
                                }};
                                description = "adipisci";
                                ins = new String[]{{
                                    add("ratione"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Vincent Hagenes";
                                                    value = "perferendis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Joann Klein";
                                                    value = "veniam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Timothy Kovacek PhD";
                                                    value = "rem";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dr. Deborah Langosh";
                                                    value = "non";
                                                }}),
                                            }};
                                            field = "reiciendis";
                                            metric = "minima";
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
                                                    name = "Steve King";
                                                    value = "incidunt";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Toni Bauch";
                                                    value = "excepturi";
                                                }}),
                                            }};
                                            field = "sunt";
                                            metric = "perferendis";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
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
                                                    name = "Melanie Lueilwitz";
                                                    value = "placeat";
                                                }}),
                                            }};
                                            field = "doloremque";
                                            metric = "officiis";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("quo"),
                                    add("dolore"),
                                    add("accusantium"),
                                    add("facere"),
                                }};
                                permissions = new String[]{{
                                    add("mollitia"),
                                    add("vero"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "doloribus";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("cum"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "aut";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("odit"),
                                            add("adipisci"),
                                            add("nostrum"),
                                            add("assumenda"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "dignissimos";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("cupiditate"),
                                            add("aperiam"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "placeat";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("quibusdam"),
                                            add("animi"),
                                        }};
                                    }}),
                                }};
                                description = "placeat";
                                ins = new String[]{{
                                    add("tempore"),
                                    add("distinctio"),
                                    add("necessitatibus"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Blanche Nicolas";
                                                    value = "quia";
                                                }}),
                                            }};
                                            field = "aut";
                                            metric = "laborum";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("ab"),
                                    add("laborum"),
                                }};
                                permissions = new String[]{{
                                    add("distinctio"),
                                    add("laudantium"),
                                    add("tenetur"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.IN;
                                        svc = "porro";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("porro"),
                                            add("esse"),
                                        }};
                                    }}),
                                }};
                                description = "eum";
                                ins = new String[]{{
                                    add("iure"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Fredrick Watsica";
                                                    value = "iusto";
                                                }}),
                                            }};
                                            field = "nostrum";
                                            metric = "accusantium";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Cecelia Grady";
                                                    value = "necessitatibus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Marion Rowe";
                                                    value = "assumenda";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Minnie Hills";
                                                    value = "eius";
                                                }}),
                                            }};
                                            field = "vel";
                                            metric = "dolorem";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("occaecati"),
                                    add("reiciendis"),
                                }};
                                permissions = new String[]{{
                                    add("officia"),
                                    add("id"),
                                    add("tempora"),
                                    add("suscipit"),
                                }};
                            }}),
                        }};
                        version = 213246;
                    }};;
                }};;
                accessToken = "expedita";
                alt = AltEnum.PROTO;
                callback = "cupiditate";
                fields = "vero";
                key = "eveniet";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "pariatur";
                uploadProtocol = "neque";
                userIp = "explicabo";
            }};            

            ComputeResourcePoliciesSetIamPolicyResponse res = sdk.resourcePolicies.computeResourcePoliciesSetIamPolicy(req, new ComputeResourcePoliciesSetIamPolicySecurity() {{
                option1 = new ComputeResourcePoliciesSetIamPolicySecurityOption1("quam", "repellendus") {{
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

            ComputeResourcePoliciesTestIamPermissionsRequest req = new ComputeResourcePoliciesTestIamPermissionsRequest("ex", "iure", "esse") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("saepe"),
                    }};
                }};;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "architecto";
                fields = "fugiat";
                key = "porro";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "repudiandae";
                uploadType = "beatae";
                uploadProtocol = "libero";
                userIp = "aliquam";
            }};            

            ComputeResourcePoliciesTestIamPermissionsResponse res = sdk.resourcePolicies.computeResourcePoliciesTestIamPermissions(req, new ComputeResourcePoliciesTestIamPermissionsSecurity() {{
                option1 = new ComputeResourcePoliciesTestIamPermissionsSecurityOption1("mollitia", "nobis") {{
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
