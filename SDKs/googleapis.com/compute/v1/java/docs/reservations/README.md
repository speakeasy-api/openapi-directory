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

            ComputeReservationsAggregatedListRequest req = new ComputeReservationsAggregatedListRequest("harum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "itaque";
                alt = AltEnum.JSON;
                callback = "porro";
                fields = "distinctio";
                filter = "in";
                includeAllScopes = false;
                key = "necessitatibus";
                maxResults = 772499L;
                oauthToken = "doloremque";
                orderBy = "modi";
                pageToken = "modi";
                prettyPrint = false;
                quotaUser = "aspernatur";
                returnPartialSuccess = false;
                uploadType = "eligendi";
                uploadProtocol = "facilis";
                userIp = "voluptate";
            }};            

            ComputeReservationsAggregatedListResponse res = sdk.reservations.computeReservationsAggregatedList(req, new ComputeReservationsAggregatedListSecurity() {{
                option1 = new ComputeReservationsAggregatedListSecurityOption1("quas", "veritatis") {{
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

            ComputeReservationsDeleteRequest req = new ComputeReservationsDeleteRequest("tempora", "nisi", "officia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                fields = "voluptas";
                key = "optio";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "similique";
                requestId = "optio";
                uploadType = "ad";
                uploadProtocol = "inventore";
                userIp = "qui";
            }};            

            ComputeReservationsDeleteResponse res = sdk.reservations.computeReservationsDelete(req, new ComputeReservationsDeleteSecurity() {{
                option1 = new ComputeReservationsDeleteSecurityOption1("sapiente", "pariatur") {{
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

            ComputeReservationsGetRequest req = new ComputeReservationsGetRequest("tenetur", "placeat", "dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quas";
                alt = AltEnum.MEDIA;
                callback = "blanditiis";
                fields = "aspernatur";
                key = "consequuntur";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "voluptatum";
                uploadProtocol = "ea";
                userIp = "sunt";
            }};            

            ComputeReservationsGetResponse res = sdk.reservations.computeReservationsGet(req, new ComputeReservationsGetSecurity() {{
                option1 = new ComputeReservationsGetSecurityOption1("occaecati", "facilis") {{
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

            ComputeReservationsGetIamPolicyRequest req = new ComputeReservationsGetIamPolicyRequest("laborum", "odio", "facilis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eaque";
                alt = AltEnum.JSON;
                callback = "non";
                fields = "ad";
                key = "quaerat";
                oauthToken = "occaecati";
                optionsRequestedPolicyVersion = 605683L;
                prettyPrint = false;
                quotaUser = "voluptatem";
                uploadType = "numquam";
                uploadProtocol = "excepturi";
                userIp = "doloremque";
            }};            

            ComputeReservationsGetIamPolicyResponse res = sdk.reservations.computeReservationsGetIamPolicy(req, new ComputeReservationsGetIamPolicySecurity() {{
                option1 = new ComputeReservationsGetIamPolicySecurityOption1("autem", "placeat") {{
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

            ComputeReservationsInsertRequest req = new ComputeReservationsInsertRequest("aut", "nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                reservation = new Reservation() {{
                    commitment = "magni";
                    creationTimestamp = "voluptate";
                    description = "sequi";
                    id = "officia";
                    kind = "doloremque";
                    name = "Vicky Wolf";
                    resourcePolicies = new java.util.HashMap<String, String>() {{
                        put("voluptates", "totam");
                        put("adipisci", "quidem");
                        put("distinctio", "temporibus");
                    }};
                    resourceStatus = new AllocationResourceStatus() {{
                        specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                            sourceInstanceTemplateId = "velit";
                        }};;
                    }};;
                    satisfiesPzs = false;
                    selfLink = "necessitatibus";
                    shareSettings = new ShareSettings() {{
                        projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                            put("et", new ShareSettingsProjectConfig() {{
                                projectId = "expedita";
                            }});
                            put("quibusdam", new ShareSettingsProjectConfig() {{
                                projectId = "corporis";
                            }});
                            put("optio", new ShareSettingsProjectConfig() {{
                                projectId = "sapiente";
                            }});
                        }};
                        shareType = ShareSettingsShareTypeEnum.SPECIFIC_PROJECTS;
                    }};;
                    specificReservation = new AllocationSpecificSKUReservation() {{
                        assuredCount = "iusto";
                        count = "repudiandae";
                        inUseCount = "sapiente";
                        instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                            guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 107832;
                                    acceleratorType = "veritatis";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 362058;
                                    acceleratorType = "nemo";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 461428;
                                    acceleratorType = "facilis";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 386976;
                                    acceleratorType = "modi";
                                }}),
                            }};
                            localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                    diskSizeGb = "voluptates";
                                    interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                }}),
                                add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                    diskSizeGb = "labore";
                                    interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                }}),
                                add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                    diskSizeGb = "velit";
                                    interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                }}),
                            }};
                            locationHint = "earum";
                            machineType = "tenetur";
                            minCpuPlatform = "labore";
                        }};;
                        sourceInstanceTemplate = "quod";
                    }};;
                    specificReservationRequired = false;
                    status = ReservationStatusEnum.DELETING;
                    zone = "est";
                }};;
                accessToken = "quis";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "velit";
                key = "aspernatur";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "odio";
                requestId = "cupiditate";
                uploadType = "enim";
                uploadProtocol = "rem";
                userIp = "aspernatur";
            }};            

            ComputeReservationsInsertResponse res = sdk.reservations.computeReservationsInsert(req, new ComputeReservationsInsertSecurity() {{
                option1 = new ComputeReservationsInsertSecurityOption1("nemo", "ex") {{
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

            ComputeReservationsListRequest req = new ComputeReservationsListRequest("nihil", "officia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "esse";
                alt = AltEnum.PROTO;
                callback = "aliquam";
                fields = "aut";
                filter = "officiis";
                key = "provident";
                maxResults = 309143L;
                oauthToken = "nobis";
                orderBy = "perferendis";
                pageToken = "itaque";
                prettyPrint = false;
                quotaUser = "molestias";
                returnPartialSuccess = false;
                uploadType = "recusandae";
                uploadProtocol = "et";
                userIp = "tempore";
            }};            

            ComputeReservationsListResponse res = sdk.reservations.computeReservationsList(req, new ComputeReservationsListSecurity() {{
                option1 = new ComputeReservationsListSecurityOption1("possimus", "rem") {{
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

            ComputeReservationsResizeRequest req = new ComputeReservationsResizeRequest("voluptate", "sit", "illo") {{
                dollarXgafv = XgafvEnum.ONE;
                reservationsResizeRequest = new ReservationsResizeRequest() {{
                    specificSkuCount = "molestiae";
                }};;
                accessToken = "at";
                alt = AltEnum.MEDIA;
                callback = "asperiores";
                fields = "autem";
                key = "laboriosam";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "quasi";
                requestId = "saepe";
                uploadType = "tempore";
                uploadProtocol = "dolorum";
                userIp = "tenetur";
            }};            

            ComputeReservationsResizeResponse res = sdk.reservations.computeReservationsResize(req, new ComputeReservationsResizeSecurity() {{
                option1 = new ComputeReservationsResizeSecurityOption1("amet", "animi") {{
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

            ComputeReservationsSetIamPolicyRequest req = new ComputeReservationsSetIamPolicyRequest("dolores", "nihil", "nesciunt") {{
                dollarXgafv = XgafvEnum.TWO;
                zoneSetPolicyRequest = new ZoneSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "ad";
                            condition = new Expr() {{
                                description = "autem";
                                expression = "numquam";
                                location = "odit";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("aliquid"),
                                add("alias"),
                            }};
                            role = "animi";
                        }}),
                        add(new Binding() {{
                            bindingId = "error";
                            condition = new Expr() {{
                                description = "hic";
                                expression = "reprehenderit";
                                location = "debitis";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("consequuntur"),
                                add("possimus"),
                                add("reprehenderit"),
                                add("id"),
                            }};
                            role = "perferendis";
                        }}),
                        add(new Binding() {{
                            bindingId = "ipsa";
                            condition = new Expr() {{
                                description = "dolores";
                                expression = "accusamus";
                                location = "delectus";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("eligendi"),
                                add("perferendis"),
                                add("assumenda"),
                                add("placeat"),
                            }};
                            role = "libero";
                        }}),
                    }};
                    etag = "iure";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("iusto"),
                                            add("totam"),
                                            add("itaque"),
                                            add("commodi"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("velit"),
                                            add("eveniet"),
                                            add("incidunt"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quia"),
                                            add("minima"),
                                            add("dolor"),
                                            add("a"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("omnis"),
                                            add("pariatur"),
                                            add("quas"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("fugit"),
                                    add("delectus"),
                                    add("adipisci"),
                                    add("ullam"),
                                }};
                                service = "tenetur";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("placeat"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("necessitatibus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("error"),
                                            add("nemo"),
                                            add("tenetur"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("non"),
                                    add("aliquam"),
                                    add("delectus"),
                                }};
                                service = "vero";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptatem"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("officia"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("amet"),
                                    add("necessitatibus"),
                                    add("dolores"),
                                    add("quia"),
                                }};
                                service = "ipsam";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "adipisci";
                                condition = new Expr() {{
                                    description = "et";
                                    expression = "optio";
                                    location = "nihil";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("neque"),
                                    add("similique"),
                                    add("id"),
                                }};
                                role = "incidunt";
                            }}),
                        }};
                        etag = "provident";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "ipsum";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("suscipit"),
                                            add("veritatis"),
                                        }};
                                    }}),
                                }};
                                description = "assumenda";
                                ins = new String[]{{
                                    add("quos"),
                                    add("eligendi"),
                                    add("sunt"),
                                    add("quia"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Ms. Hilda Adams";
                                                    value = "libero";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Cathy Leffler";
                                                    value = "asperiores";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Pamela Bogan";
                                                    value = "perspiciatis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Louis Kunze";
                                                    value = "aspernatur";
                                                }}),
                                            }};
                                            field = "corrupti";
                                            metric = "nulla";
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
                                                    name = "May Quigley";
                                                    value = "cumque";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Amber Treutel";
                                                    value = "dolorem";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Corey Windler";
                                                    value = "rerum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Darlene Swift";
                                                    value = "odit";
                                                }}),
                                            }};
                                            field = "consectetur";
                                            metric = "explicabo";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Janie Ernser";
                                                    value = "doloribus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ana Moore";
                                                    value = "perspiciatis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Gerald Marks";
                                                    value = "sit";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lela Kling";
                                                    value = "fuga";
                                                }}),
                                            }};
                                            field = "et";
                                            metric = "delectus";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("officia"),
                                    add("voluptate"),
                                    add("qui"),
                                    add("doloremque"),
                                }};
                                permissions = new String[]{{
                                    add("sapiente"),
                                    add("vitae"),
                                    add("aperiam"),
                                    add("sit"),
                                }};
                            }}),
                        }};
                        version = 787747;
                    }};;
                }};;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "optio";
                fields = "placeat";
                key = "error";
                oauthToken = "veniam";
                prettyPrint = false;
                quotaUser = "unde";
                uploadType = "blanditiis";
                uploadProtocol = "totam";
                userIp = "accusantium";
            }};            

            ComputeReservationsSetIamPolicyResponse res = sdk.reservations.computeReservationsSetIamPolicy(req, new ComputeReservationsSetIamPolicySecurity() {{
                option1 = new ComputeReservationsSetIamPolicySecurityOption1("error", "illo") {{
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

            ComputeReservationsTestIamPermissionsRequest req = new ComputeReservationsTestIamPermissionsRequest("pariatur", "velit", "consectetur") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("pariatur"),
                        add("quis"),
                        add("accusantium"),
                        add("facilis"),
                    }};
                }};;
                accessToken = "necessitatibus";
                alt = AltEnum.JSON;
                callback = "dolores";
                fields = "illo";
                key = "enim";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "harum";
                uploadType = "culpa";
                uploadProtocol = "recusandae";
                userIp = "magnam";
            }};            

            ComputeReservationsTestIamPermissionsResponse res = sdk.reservations.computeReservationsTestIamPermissions(req, new ComputeReservationsTestIamPermissionsSecurity() {{
                option1 = new ComputeReservationsTestIamPermissionsSecurityOption1("consectetur", "quod") {{
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

            ComputeReservationsUpdateRequest req = new ComputeReservationsUpdateRequest("ex", "adipisci", "incidunt") {{
                dollarXgafv = XgafvEnum.ONE;
                reservation1 = new Reservation() {{
                    commitment = "id";
                    creationTimestamp = "sit";
                    description = "quod";
                    id = "est";
                    kind = "excepturi";
                    name = "Josephine Aufderhar";
                    resourcePolicies = new java.util.HashMap<String, String>() {{
                        put("fugiat", "facere");
                    }};
                    resourceStatus = new AllocationResourceStatus() {{
                        specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                            sourceInstanceTemplateId = "aspernatur";
                        }};;
                    }};;
                    satisfiesPzs = false;
                    selfLink = "ab";
                    shareSettings = new ShareSettings() {{
                        projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                            put("voluptates", new ShareSettingsProjectConfig() {{
                                projectId = "suscipit";
                            }});
                            put("veniam", new ShareSettingsProjectConfig() {{
                                projectId = "harum";
                            }});
                            put("natus", new ShareSettingsProjectConfig() {{
                                projectId = "quibusdam";
                            }});
                            put("tempore", new ShareSettingsProjectConfig() {{
                                projectId = "maiores";
                            }});
                        }};
                        shareType = ShareSettingsShareTypeEnum.SHARE_TYPE_UNSPECIFIED;
                    }};;
                    specificReservation = new AllocationSpecificSKUReservation() {{
                        assuredCount = "velit";
                        count = "tempora";
                        inUseCount = "blanditiis";
                        instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                            guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 470239;
                                    acceleratorType = "incidunt";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 841758;
                                    acceleratorType = "adipisci";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 918025;
                                    acceleratorType = "ullam";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 539809;
                                    acceleratorType = "similique";
                                }}),
                            }};
                            localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                    diskSizeGb = "natus";
                                    interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                }}),
                                add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                    diskSizeGb = "itaque";
                                    interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                }}),
                                add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                    diskSizeGb = "nesciunt";
                                    interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                }}),
                            }};
                            locationHint = "quisquam";
                            machineType = "vitae";
                            minCpuPlatform = "beatae";
                        }};;
                        sourceInstanceTemplate = "recusandae";
                    }};;
                    specificReservationRequired = false;
                    status = ReservationStatusEnum.INVALID;
                    zone = "ipsam";
                }};;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "repellat";
                fields = "suscipit";
                key = "explicabo";
                oauthToken = "quia";
                paths = new String[]{{
                    add("libero"),
                }};
                prettyPrint = false;
                quotaUser = "nihil";
                requestId = "molestias";
                updateMask = "voluptas";
                uploadType = "assumenda";
                uploadProtocol = "provident";
                userIp = "dicta";
            }};            

            ComputeReservationsUpdateResponse res = sdk.reservations.computeReservationsUpdate(req, new ComputeReservationsUpdateSecurity() {{
                option1 = new ComputeReservationsUpdateSecurityOption1("repellat", "minima") {{
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
