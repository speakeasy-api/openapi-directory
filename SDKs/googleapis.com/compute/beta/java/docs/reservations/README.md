# reservations

### Available Operations

* [computeReservationsAggregatedList](#computereservationsaggregatedlist) - Retrieves an aggregated list of reservations.
* [computeReservationsDelete](#computereservationsdelete) - Deletes the specified reservation.
* [computeReservationsGet](#computereservationsget) - Retrieves information about the specified reservation.
* [computeReservationsGetIamPolicy](#computereservationsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeReservationsInsert](#computereservationsinsert) - Creates a new reservation. For more information, read Reserving zonal resources.
* [computeReservationsList](#computereservationslist) - A list of all the reservations that have been configured for the specified project in specified zone.
* [computeReservationsResize](#computereservationsresize) - Resizes the reservation (applicable to standalone reservations only). For more information, read Modifying reservations.
* [computeReservationsSetIamPolicy](#computereservationssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeReservationsTestIamPermissions](#computereservationstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeReservationsUpdate](#computereservationsupdate) - Update share settings of the reservation.

## computeReservationsAggregatedList

Retrieves an aggregated list of reservations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeReservationsAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeReservationsAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeReservationsAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeReservationsAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeReservationsAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeReservationsAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeReservationsAggregatedListRequest req = new ComputeReservationsAggregatedListRequest("hic") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.JSON;
                callback = "molestias";
                fields = "repellendus";
                filter = "et";
                includeAllScopes = false;
                key = "nemo";
                maxResults = 927484L;
                oauthToken = "doloribus";
                orderBy = "sit";
                pageToken = "nostrum";
                prettyPrint = false;
                quotaUser = "rem";
                returnPartialSuccess = false;
                uploadType = "inventore";
                uploadProtocol = "praesentium";
                userIp = "nostrum";
            }};            

            ComputeReservationsAggregatedListResponse res = sdk.reservations.computeReservationsAggregatedList(req, new ComputeReservationsAggregatedListSecurity() {{
                option1 = new ComputeReservationsAggregatedListSecurityOption1("aut", "nam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.reservationAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeReservationsDelete

Deletes the specified reservation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeReservationsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeReservationsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeReservationsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeReservationsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeReservationsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeReservationsDeleteRequest req = new ComputeReservationsDeleteRequest("commodi", "qui", "ex") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nemo";
                alt = AltEnum.JSON;
                callback = "doloribus";
                fields = "hic";
                key = "molestias";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "voluptatum";
                requestId = "ratione";
                uploadType = "quo";
                uploadProtocol = "reprehenderit";
                userIp = "labore";
            }};            

            ComputeReservationsDeleteResponse res = sdk.reservations.computeReservationsDelete(req, new ComputeReservationsDeleteSecurity() {{
                option1 = new ComputeReservationsDeleteSecurityOption1("eligendi", "recusandae") {{
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

## computeReservationsGet

Retrieves information about the specified reservation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeReservationsGetRequest;
import org.openapis.openapi.models.operations.ComputeReservationsGetResponse;
import org.openapis.openapi.models.operations.ComputeReservationsGetSecurity;
import org.openapis.openapi.models.operations.ComputeReservationsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeReservationsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeReservationsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeReservationsGetRequest req = new ComputeReservationsGetRequest("fuga", "veniam", "eos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "repellat";
                alt = AltEnum.MEDIA;
                callback = "omnis";
                fields = "soluta";
                key = "voluptatum";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "iste";
                uploadProtocol = "consectetur";
                userIp = "sequi";
            }};            

            ComputeReservationsGetResponse res = sdk.reservations.computeReservationsGet(req, new ComputeReservationsGetSecurity() {{
                option1 = new ComputeReservationsGetSecurityOption1("suscipit", "quos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.reservation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeReservationsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeReservationsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeReservationsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeReservationsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeReservationsGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeReservationsGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeReservationsGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeReservationsGetIamPolicyRequest req = new ComputeReservationsGetIamPolicyRequest("nisi", "ullam", "quia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatibus";
                alt = AltEnum.PROTO;
                callback = "praesentium";
                fields = "quae";
                key = "hic";
                oauthToken = "maiores";
                optionsRequestedPolicyVersion = 326477L;
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "molestias";
                uploadProtocol = "molestias";
                userIp = "animi";
            }};            

            ComputeReservationsGetIamPolicyResponse res = sdk.reservations.computeReservationsGetIamPolicy(req, new ComputeReservationsGetIamPolicySecurity() {{
                option1 = new ComputeReservationsGetIamPolicySecurityOption1("nesciunt", "sapiente") {{
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

## computeReservationsInsert

Creates a new reservation. For more information, read Reserving zonal resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeReservationsInsertRequest;
import org.openapis.openapi.models.operations.ComputeReservationsInsertResponse;
import org.openapis.openapi.models.operations.ComputeReservationsInsertSecurity;
import org.openapis.openapi.models.operations.ComputeReservationsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeReservationsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AllocationResourceStatus;
import org.openapis.openapi.models.shared.AllocationResourceStatusSpecificSKUAllocation;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationReservedInstanceProperties;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum;
import org.openapis.openapi.models.shared.AllocationSpecificSKUReservation;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Reservation;
import org.openapis.openapi.models.shared.ReservationStatusEnum;
import org.openapis.openapi.models.shared.ShareSettings;
import org.openapis.openapi.models.shared.ShareSettingsProjectConfig;
import org.openapis.openapi.models.shared.ShareSettingsShareTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeReservationsInsertRequest req = new ComputeReservationsInsertRequest("praesentium", "ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                reservation = new Reservation() {{
                    commitment = "explicabo";
                    creationTimestamp = "voluptates";
                    description = "sequi";
                    id = "voluptatum";
                    kind = "ratione";
                    name = "Nick Cole II";
                    resourcePolicies = new java.util.HashMap<String, String>() {{
                        put("ducimus", "suscipit");
                        put("dolorum", "pariatur");
                        put("aut", "sunt");
                    }};
                    resourceStatus = new AllocationResourceStatus() {{
                        specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                            sourceInstanceTemplateId = "sapiente";
                        }};;
                    }};;
                    satisfiesPzs = false;
                    selfLink = "debitis";
                    shareSettings = new ShareSettings() {{
                        projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                            put("similique", new ShareSettingsProjectConfig() {{
                                projectId = "quis";
                            }});
                            put("error", new ShareSettingsProjectConfig() {{
                                projectId = "nihil";
                            }});
                            put("aspernatur", new ShareSettingsProjectConfig() {{
                                projectId = "quae";
                            }});
                        }};
                        projects = new String[]{{
                            add("repudiandae"),
                            add("maxime"),
                            add("dolorum"),
                            add("quas"),
                        }};
                        shareType = ShareSettingsShareTypeEnum.LOCAL;
                    }};;
                    specificReservation = new AllocationSpecificSKUReservation() {{
                        assuredCount = "porro";
                        count = "occaecati";
                        inUseCount = "aliquam";
                        instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                            guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 760559;
                                    acceleratorType = "mollitia";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 25296;
                                    acceleratorType = "est";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 639716;
                                    acceleratorType = "voluptatum";
                                }}),
                            }};
                            localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                    diskSizeGb = "aliquam";
                                    interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                }}),
                                add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                    diskSizeGb = "nam";
                                    interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                }}),
                                add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                    diskSizeGb = "praesentium";
                                    interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                }}),
                                add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                    diskSizeGb = "numquam";
                                    interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                }}),
                            }};
                            locationHint = "minus";
                            machineType = "doloribus";
                            maintenanceFreezeDurationHours = 980085;
                            maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum.PERIODIC;
                            minCpuPlatform = "sequi";
                        }};;
                        sourceInstanceTemplate = "tempora";
                    }};;
                    specificReservationRequired = false;
                    status = ReservationStatusEnum.INVALID;
                    zone = "voluptate";
                }};;
                accessToken = "unde";
                alt = AltEnum.MEDIA;
                callback = "officia";
                fields = "sequi";
                key = "deleniti";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "architecto";
                requestId = "consequuntur";
                uploadType = "nostrum";
                uploadProtocol = "laudantium";
                userIp = "corrupti";
            }};            

            ComputeReservationsInsertResponse res = sdk.reservations.computeReservationsInsert(req, new ComputeReservationsInsertSecurity() {{
                option1 = new ComputeReservationsInsertSecurityOption1("tempora", "asperiores") {{
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

## computeReservationsList

A list of all the reservations that have been configured for the specified project in specified zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeReservationsListRequest;
import org.openapis.openapi.models.operations.ComputeReservationsListResponse;
import org.openapis.openapi.models.operations.ComputeReservationsListSecurity;
import org.openapis.openapi.models.operations.ComputeReservationsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeReservationsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeReservationsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeReservationsListRequest req = new ComputeReservationsListRequest("recusandae", "veritatis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "illum";
                fields = "unde";
                filter = "porro";
                key = "animi";
                maxResults = 454988L;
                oauthToken = "labore";
                orderBy = "autem";
                pageToken = "ipsa";
                prettyPrint = false;
                quotaUser = "eligendi";
                returnPartialSuccess = false;
                uploadType = "numquam";
                uploadProtocol = "laudantium";
                userIp = "ad";
            }};            

            ComputeReservationsListResponse res = sdk.reservations.computeReservationsList(req, new ComputeReservationsListSecurity() {{
                option1 = new ComputeReservationsListSecurityOption1("aperiam", "perspiciatis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.reservationList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeReservationsResize

Resizes the reservation (applicable to standalone reservations only). For more information, read Modifying reservations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeReservationsResizeRequest;
import org.openapis.openapi.models.operations.ComputeReservationsResizeResponse;
import org.openapis.openapi.models.operations.ComputeReservationsResizeSecurity;
import org.openapis.openapi.models.operations.ComputeReservationsResizeSecurityOption1;
import org.openapis.openapi.models.operations.ComputeReservationsResizeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReservationsResizeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeReservationsResizeRequest req = new ComputeReservationsResizeRequest("porro", "temporibus", "ea") {{
                dollarXgafv = XgafvEnum.TWO;
                reservationsResizeRequest = new ReservationsResizeRequest() {{
                    specificSkuCount = "quaerat";
                }};;
                accessToken = "iusto";
                alt = AltEnum.JSON;
                callback = "minima";
                fields = "consequuntur";
                key = "reprehenderit";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "quos";
                requestId = "id";
                uploadType = "doloremque";
                uploadProtocol = "iste";
                userIp = "facere";
            }};            

            ComputeReservationsResizeResponse res = sdk.reservations.computeReservationsResize(req, new ComputeReservationsResizeSecurity() {{
                option1 = new ComputeReservationsResizeSecurityOption1("non", "commodi") {{
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

## computeReservationsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeReservationsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeReservationsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeReservationsSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeReservationsSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeReservationsSetIamPolicySecurityOption2;
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
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.ZoneSetPolicyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeReservationsSetIamPolicyRequest req = new ComputeReservationsSetIamPolicyRequest("ducimus", "architecto", "dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                zoneSetPolicyRequest = new ZoneSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "numquam";
                            condition = new Expr() {{
                                description = "omnis";
                                expression = "culpa";
                                location = "aperiam";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("commodi"),
                                add("natus"),
                            }};
                            role = "et";
                        }}),
                        add(new Binding() {{
                            bindingId = "incidunt";
                            condition = new Expr() {{
                                description = "saepe";
                                expression = "dignissimos";
                                location = "cumque";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("qui"),
                                add("asperiores"),
                            }};
                            role = "voluptates";
                        }}),
                    }};
                    etag = "corporis";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptatibus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("commodi"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("assumenda"),
                                    add("itaque"),
                                    add("veritatis"),
                                }};
                                service = "rem";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "molestiae";
                                condition = new Expr() {{
                                    description = "quibusdam";
                                    expression = "sapiente";
                                    location = "error";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("fuga"),
                                    add("excepturi"),
                                    add("corporis"),
                                    add("mollitia"),
                                }};
                                role = "magnam";
                            }}),
                        }};
                        etag = "quo";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "magni";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("minima"),
                                            add("quis"),
                                            add("incidunt"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "illum";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("corrupti"),
                                            add("doloremque"),
                                            add("id"),
                                        }};
                                    }}),
                                }};
                                description = "doloremque";
                                ins = new String[]{{
                                    add("quod"),
                                    add("tenetur"),
                                    add("ad"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Erick Cartwright";
                                                    value = "eum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Herman West";
                                                    value = "est";
                                                }}),
                                            }};
                                            field = "sed";
                                            metric = "labore";
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
                                                    name = "Van Jacobson";
                                                    value = "saepe";
                                                }}),
                                            }};
                                            field = "consequatur";
                                            metric = "libero";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
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
                                                    name = "Mrs. Patty Kutch";
                                                    value = "deserunt";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Merle Trantow I";
                                                    value = "optio";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Tracy Considine";
                                                    value = "fugit";
                                                }}),
                                            }};
                                            field = "soluta";
                                            metric = "rem";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Homer Wisoky";
                                                    value = "voluptatibus";
                                                }}),
                                            }};
                                            field = "tenetur";
                                            metric = "dolor";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("nostrum"),
                                    add("est"),
                                    add("neque"),
                                }};
                                permissions = new String[]{{
                                    add("architecto"),
                                    add("ducimus"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "adipisci";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("tempora"),
                                            add("in"),
                                            add("explicabo"),
                                        }};
                                    }}),
                                }};
                                description = "impedit";
                                ins = new String[]{{
                                    add("fugit"),
                                    add("dicta"),
                                    add("necessitatibus"),
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
                                                    name = "Elvira Boyle";
                                                    value = "nam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Melissa Schneider";
                                                    value = "atque";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dexter Thompson";
                                                    value = "beatae";
                                                }}),
                                            }};
                                            field = "ad";
                                            metric = "cumque";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Irving Reinger";
                                                    value = "repellat";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mrs. Jeffrey Lang";
                                                    value = "maxime";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Julia Rowe";
                                                    value = "impedit";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Paula Bechtelar";
                                                    value = "repudiandae";
                                                }}),
                                            }};
                                            field = "at";
                                            metric = "unde";
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
                                                    name = "Myra Zboncak I";
                                                    value = "sequi";
                                                }}),
                                            }};
                                            field = "pariatur";
                                            metric = "minus";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Agnes Osinski";
                                                    value = "quidem";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Shawn Corwin";
                                                    value = "quisquam";
                                                }}),
                                            }};
                                            field = "totam";
                                            metric = "in";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("magni"),
                                    add("occaecati"),
                                    add("et"),
                                    add("explicabo"),
                                }};
                                permissions = new String[]{{
                                    add("possimus"),
                                    add("sequi"),
                                    add("nulla"),
                                }};
                            }}),
                        }};
                        version = 948043;
                    }};;
                }};;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "porro";
                fields = "alias";
                key = "soluta";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "blanditiis";
                uploadType = "sapiente";
                uploadProtocol = "molestias";
                userIp = "molestiae";
            }};            

            ComputeReservationsSetIamPolicyResponse res = sdk.reservations.computeReservationsSetIamPolicy(req, new ComputeReservationsSetIamPolicySecurity() {{
                option1 = new ComputeReservationsSetIamPolicySecurityOption1("nisi", "consectetur") {{
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

## computeReservationsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeReservationsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeReservationsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeReservationsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeReservationsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeReservationsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeReservationsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeReservationsTestIamPermissionsRequest req = new ComputeReservationsTestIamPermissionsRequest("quidem", "sed", "numquam") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("magnam"),
                        add("quam"),
                        add("perspiciatis"),
                    }};
                }};;
                accessToken = "sunt";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "autem";
                key = "nemo";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "molestias";
                uploadProtocol = "quasi";
                userIp = "sit";
            }};            

            ComputeReservationsTestIamPermissionsResponse res = sdk.reservations.computeReservationsTestIamPermissions(req, new ComputeReservationsTestIamPermissionsSecurity() {{
                option1 = new ComputeReservationsTestIamPermissionsSecurityOption1("nulla", "recusandae") {{
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

## computeReservationsUpdate

Update share settings of the reservation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeReservationsUpdateRequest;
import org.openapis.openapi.models.operations.ComputeReservationsUpdateResponse;
import org.openapis.openapi.models.operations.ComputeReservationsUpdateSecurity;
import org.openapis.openapi.models.operations.ComputeReservationsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeReservationsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AllocationResourceStatus;
import org.openapis.openapi.models.shared.AllocationResourceStatusSpecificSKUAllocation;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationReservedInstanceProperties;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum;
import org.openapis.openapi.models.shared.AllocationSpecificSKUReservation;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Reservation;
import org.openapis.openapi.models.shared.ReservationStatusEnum;
import org.openapis.openapi.models.shared.ShareSettings;
import org.openapis.openapi.models.shared.ShareSettingsProjectConfig;
import org.openapis.openapi.models.shared.ShareSettingsShareTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeReservationsUpdateRequest req = new ComputeReservationsUpdateRequest("libero", "dicta", "molestias") {{
                dollarXgafv = XgafvEnum.TWO;
                reservation1 = new Reservation() {{
                    commitment = "repellendus";
                    creationTimestamp = "dolores";
                    description = "voluptatum";
                    id = "dicta";
                    kind = "incidunt";
                    name = "Loren Metz";
                    resourcePolicies = new java.util.HashMap<String, String>() {{
                        put("vitae", "minima");
                        put("labore", "incidunt");
                        put("doloremque", "enim");
                        put("quaerat", "corporis");
                    }};
                    resourceStatus = new AllocationResourceStatus() {{
                        specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                            sourceInstanceTemplateId = "quis";
                        }};;
                    }};;
                    satisfiesPzs = false;
                    selfLink = "quam";
                    shareSettings = new ShareSettings() {{
                        projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                            put("accusantium", new ShareSettingsProjectConfig() {{
                                projectId = "excepturi";
                            }});
                            put("ipsa", new ShareSettingsProjectConfig() {{
                                projectId = "fugit";
                            }});
                        }};
                        projects = new String[]{{
                            add("labore"),
                            add("dolore"),
                        }};
                        shareType = ShareSettingsShareTypeEnum.LOCAL;
                    }};;
                    specificReservation = new AllocationSpecificSKUReservation() {{
                        assuredCount = "error";
                        count = "similique";
                        inUseCount = "natus";
                        instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                            guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 81271;
                                    acceleratorType = "necessitatibus";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 227251;
                                    acceleratorType = "itaque";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 628424;
                                    acceleratorType = "perferendis";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 897552;
                                    acceleratorType = "rem";
                                }}),
                            }};
                            localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                    diskSizeGb = "deserunt";
                                    interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                }}),
                            }};
                            locationHint = "debitis";
                            machineType = "nobis";
                            maintenanceFreezeDurationHours = 616013;
                            maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum.PERIODIC;
                            minCpuPlatform = "nemo";
                        }};;
                        sourceInstanceTemplate = "minima";
                    }};;
                    specificReservationRequired = false;
                    status = ReservationStatusEnum.READY;
                    zone = "sed";
                }};;
                accessToken = "ratione";
                alt = AltEnum.JSON;
                callback = "aspernatur";
                fields = "rerum";
                key = "rerum";
                oauthToken = "tempore";
                paths = new String[]{{
                    add("pariatur"),
                }};
                prettyPrint = false;
                quotaUser = "doloremque";
                requestId = "voluptates";
                updateMask = "id";
                uploadType = "odit";
                uploadProtocol = "libero";
                userIp = "id";
            }};            

            ComputeReservationsUpdateResponse res = sdk.reservations.computeReservationsUpdate(req, new ComputeReservationsUpdateSecurity() {{
                option1 = new ComputeReservationsUpdateSecurityOption1("quisquam", "placeat") {{
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
