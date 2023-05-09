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

            ComputeReservationsAggregatedListRequest req = new ComputeReservationsAggregatedListRequest("sunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ab";
                alt = AltEnum.PROTO;
                callback = "ad";
                fields = "facere";
                filter = "omnis";
                includeAllScopes = false;
                key = "possimus";
                maxResults = 828330L;
                oauthToken = "aspernatur";
                orderBy = "veritatis";
                pageToken = "quia";
                prettyPrint = false;
                quotaUser = "eveniet";
                returnPartialSuccess = false;
                uploadType = "labore";
                uploadProtocol = "veritatis";
                userIp = "magni";
            }};            

            ComputeReservationsAggregatedListResponse res = sdk.reservations.computeReservationsAggregatedList(req, new ComputeReservationsAggregatedListSecurity() {{
                option1 = new ComputeReservationsAggregatedListSecurityOption1("quibusdam", "distinctio") {{
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

            ComputeReservationsDeleteRequest req = new ComputeReservationsDeleteRequest("recusandae", "placeat", "numquam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "modi";
                alt = AltEnum.MEDIA;
                callback = "dolorem";
                fields = "provident";
                key = "porro";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "consequatur";
                requestId = "voluptas";
                uploadType = "vitae";
                uploadProtocol = "tempora";
                userIp = "ex";
            }};            

            ComputeReservationsDeleteResponse res = sdk.reservations.computeReservationsDelete(req, new ComputeReservationsDeleteSecurity() {{
                option1 = new ComputeReservationsDeleteSecurityOption1("id", "deleniti") {{
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

            ComputeReservationsGetRequest req = new ComputeReservationsGetRequest("pariatur", "tempora", "repudiandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quasi";
                alt = AltEnum.JSON;
                callback = "ipsam";
                fields = "dolor";
                key = "architecto";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "hic";
                uploadProtocol = "in";
                userIp = "expedita";
            }};            

            ComputeReservationsGetResponse res = sdk.reservations.computeReservationsGet(req, new ComputeReservationsGetSecurity() {{
                option1 = new ComputeReservationsGetSecurityOption1("quis", "similique") {{
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

            ComputeReservationsGetIamPolicyRequest req = new ComputeReservationsGetIamPolicyRequest("blanditiis", "labore", "vero") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "esse";
                alt = AltEnum.JSON;
                callback = "sit";
                fields = "voluptate";
                key = "nisi";
                oauthToken = "impedit";
                optionsRequestedPolicyVersion = 153332L;
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "praesentium";
                uploadProtocol = "quis";
                userIp = "ab";
            }};            

            ComputeReservationsGetIamPolicyResponse res = sdk.reservations.computeReservationsGetIamPolicy(req, new ComputeReservationsGetIamPolicySecurity() {{
                option1 = new ComputeReservationsGetIamPolicySecurityOption1("nesciunt", "nihil") {{
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
import org.openapis.openapi.models.shared.AllocationAggregateReservation;
import org.openapis.openapi.models.shared.AllocationAggregateReservationReservedResourceInfo;
import org.openapis.openapi.models.shared.AllocationAggregateReservationReservedResourceInfoAccelerator;
import org.openapis.openapi.models.shared.AllocationAggregateReservationVmFamilyEnum;
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
import org.openapis.openapi.models.shared.ShareSettingsFolderConfig;
import org.openapis.openapi.models.shared.ShareSettingsProjectConfig;
import org.openapis.openapi.models.shared.ShareSettingsShareTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeReservationsInsertRequest req = new ComputeReservationsInsertRequest("voluptates", "assumenda") {{
                dollarXgafv = XgafvEnum.ONE;
                reservation = new Reservation() {{
                    aggregateReservation = new AllocationAggregateReservation() {{
                        inUseResources = new org.openapis.openapi.models.shared.AllocationAggregateReservationReservedResourceInfo[]{{
                            add(new AllocationAggregateReservationReservedResourceInfo() {{
                                accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                    acceleratorCount = 802000;
                                    acceleratorType = "culpa";
                                }};
                            }}),
                            add(new AllocationAggregateReservationReservedResourceInfo() {{
                                accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                    acceleratorCount = 842428;
                                    acceleratorType = "adipisci";
                                }};
                            }}),
                            add(new AllocationAggregateReservationReservedResourceInfo() {{
                                accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                    acceleratorCount = 559232;
                                    acceleratorType = "adipisci";
                                }};
                            }}),
                        }};
                        reservedResources = new org.openapis.openapi.models.shared.AllocationAggregateReservationReservedResourceInfo[]{{
                            add(new AllocationAggregateReservationReservedResourceInfo() {{
                                accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                    acceleratorCount = 929529;
                                    acceleratorType = "hic";
                                }};
                            }}),
                            add(new AllocationAggregateReservationReservedResourceInfo() {{
                                accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                    acceleratorCount = 894935;
                                    acceleratorType = "quos";
                                }};
                            }}),
                            add(new AllocationAggregateReservationReservedResourceInfo() {{
                                accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                    acceleratorCount = 892343;
                                    acceleratorType = "assumenda";
                                }};
                            }}),
                        }};
                        vmFamily = AllocationAggregateReservationVmFamilyEnum.VM_FAMILY_GENERAL_PURPOSE_T2_D;
                    }};;
                    commitment = "odit";
                    creationTimestamp = "odio";
                    description = "alias";
                    id = "tenetur";
                    kind = "necessitatibus";
                    name = "Oscar Fay";
                    resourcePolicies = new java.util.HashMap<String, String>() {{
                        put("ipsa", "cupiditate");
                        put("unde", "perferendis");
                        put("perferendis", "excepturi");
                    }};
                    resourceStatus = new AllocationResourceStatus() {{
                        specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                            sourceInstanceTemplateId = "adipisci";
                        }};;
                    }};;
                    satisfiesPzs = false;
                    selfLink = "porro";
                    selfLinkWithId = "tempore";
                    shareSettings = new ShareSettings() {{
                        folderMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsFolderConfig>() {{
                            put("dolore", new ShareSettingsFolderConfig() {{
                                folderId = "iure";
                            }});
                            put("occaecati", new ShareSettingsFolderConfig() {{
                                folderId = "occaecati";
                            }});
                            put("optio", new ShareSettingsFolderConfig() {{
                                folderId = "harum";
                            }});
                        }};
                        projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                            put("incidunt", new ShareSettingsProjectConfig() {{
                                projectId = "accusamus";
                            }});
                            put("eaque", new ShareSettingsProjectConfig() {{
                                projectId = "error";
                            }});
                            put("commodi", new ShareSettingsProjectConfig() {{
                                projectId = "fugit";
                            }});
                            put("maiores", new ShareSettingsProjectConfig() {{
                                projectId = "eaque";
                            }});
                        }};
                        projects = new String[]{{
                            add("doloribus"),
                            add("magni"),
                            add("minus"),
                            add("praesentium"),
                        }};
                        shareType = ShareSettingsShareTypeEnum.SHARE_TYPE_UNSPECIFIED;
                    }};;
                    specificReservation = new AllocationSpecificSKUReservation() {{
                        assuredCount = "qui";
                        count = "dolore";
                        inUseCount = "nobis";
                        instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                            guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 198903;
                                    acceleratorType = "odio";
                                }}),
                            }};
                            localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                    diskSizeGb = "voluptatibus";
                                    interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                }}),
                                add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                    diskSizeGb = "quis";
                                    interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                }}),
                                add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                    diskSizeGb = "inventore";
                                    interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                }}),
                            }};
                            locationHint = "quam";
                            machineType = "eveniet";
                            maintenanceFreezeDurationHours = 918364;
                            maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum.AS_NEEDED;
                            minCpuPlatform = "non";
                        }};;
                        sourceInstanceTemplate = "doloremque";
                    }};;
                    specificReservationRequired = false;
                    status = ReservationStatusEnum.INVALID;
                    zone = "exercitationem";
                }};;
                accessToken = "qui";
                alt = AltEnum.MEDIA;
                callback = "officiis";
                fields = "sunt";
                key = "illum";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "molestias";
                requestId = "expedita";
                uploadType = "possimus";
                uploadProtocol = "rerum";
                userIp = "omnis";
            }};            

            ComputeReservationsInsertResponse res = sdk.reservations.computeReservationsInsert(req, new ComputeReservationsInsertSecurity() {{
                option1 = new ComputeReservationsInsertSecurityOption1("expedita", "laborum") {{
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

            ComputeReservationsListRequest req = new ComputeReservationsListRequest("consectetur", "eum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quisquam";
                alt = AltEnum.JSON;
                callback = "optio";
                fields = "nobis";
                filter = "fuga";
                key = "eius";
                maxResults = 644780L;
                oauthToken = "expedita";
                orderBy = "dolore";
                pageToken = "animi";
                prettyPrint = false;
                quotaUser = "sequi";
                returnPartialSuccess = false;
                uploadType = "temporibus";
                uploadProtocol = "quasi";
                userIp = "fuga";
            }};            

            ComputeReservationsListResponse res = sdk.reservations.computeReservationsList(req, new ComputeReservationsListSecurity() {{
                option1 = new ComputeReservationsListSecurityOption1("pariatur", "tempora") {{
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

            ComputeReservationsResizeRequest req = new ComputeReservationsResizeRequest("cupiditate", "alias", "nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                reservationsResizeRequest = new ReservationsResizeRequest() {{
                    specificSkuCount = "corporis";
                }};;
                accessToken = "voluptas";
                alt = AltEnum.JSON;
                callback = "sint";
                fields = "nisi";
                key = "eveniet";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "quidem";
                requestId = "tenetur";
                uploadType = "asperiores";
                uploadProtocol = "velit";
                userIp = "culpa";
            }};            

            ComputeReservationsResizeResponse res = sdk.reservations.computeReservationsResize(req, new ComputeReservationsResizeSecurity() {{
                option1 = new ComputeReservationsResizeSecurityOption1("voluptates", "error") {{
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

            ComputeReservationsSetIamPolicyRequest req = new ComputeReservationsSetIamPolicyRequest("quia", "error", "laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                zoneSetPolicyRequest = new ZoneSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "impedit";
                            condition = new Expr() {{
                                description = "minima";
                                expression = "itaque";
                                location = "officia";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("earum"),
                                add("quam"),
                                add("consectetur"),
                            }};
                            role = "deserunt";
                        }}),
                        add(new Binding() {{
                            bindingId = "rerum";
                            condition = new Expr() {{
                                description = "dolorum";
                                expression = "placeat";
                                location = "fugit";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("maxime"),
                                add("quam"),
                                add("laborum"),
                                add("praesentium"),
                            }};
                            role = "distinctio";
                        }}),
                        add(new Binding() {{
                            bindingId = "omnis";
                            condition = new Expr() {{
                                description = "placeat";
                                expression = "temporibus";
                                location = "minima";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("consequatur"),
                                add("dolores"),
                                add("accusamus"),
                                add("vel"),
                            }};
                            role = "error";
                        }}),
                        add(new Binding() {{
                            bindingId = "ullam";
                            condition = new Expr() {{
                                description = "possimus";
                                expression = "eveniet";
                                location = "consectetur";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("hic"),
                                add("rerum"),
                                add("quo"),
                            }};
                            role = "esse";
                        }}),
                    }};
                    etag = "est";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("corrupti"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("nihil"),
                                    add("voluptatum"),
                                    add("quibusdam"),
                                    add("voluptas"),
                                }};
                                service = "illum";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("blanditiis"),
                                            add("aliquid"),
                                            add("impedit"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("optio"),
                                    add("fuga"),
                                }};
                                service = "saepe";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("reiciendis"),
                                            add("consequuntur"),
                                            add("asperiores"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("omnis"),
                                            add("voluptatum"),
                                            add("eum"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("tempora"),
                                    add("beatae"),
                                    add("consequatur"),
                                    add("reprehenderit"),
                                }};
                                service = "excepturi";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("doloremque"),
                                            add("vero"),
                                            add("explicabo"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("eveniet"),
                                            add("nihil"),
                                            add("architecto"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("deserunt"),
                                            add("similique"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quisquam"),
                                            add("quae"),
                                            add("quis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("aut"),
                                    add("dignissimos"),
                                }};
                                service = "ad";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "assumenda";
                                condition = new Expr() {{
                                    description = "voluptates";
                                    expression = "amet";
                                    location = "consectetur";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("voluptatem"),
                                    add("nesciunt"),
                                    add("ipsa"),
                                }};
                                role = "ex";
                            }}),
                            add(new Binding() {{
                                bindingId = "perspiciatis";
                                condition = new Expr() {{
                                    description = "quia";
                                    expression = "officia";
                                    location = "aliquid";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("occaecati"),
                                    add("cumque"),
                                    add("unde"),
                                    add("architecto"),
                                }};
                                role = "doloribus";
                            }}),
                            add(new Binding() {{
                                bindingId = "nemo";
                                condition = new Expr() {{
                                    description = "esse";
                                    expression = "cum";
                                    location = "accusantium";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("excepturi"),
                                    add("quae"),
                                    add("neque"),
                                    add("consectetur"),
                                }};
                                role = "temporibus";
                            }}),
                        }};
                        etag = "veritatis";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "voluptatum";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("magnam"),
                                            add("nisi"),
                                            add("consectetur"),
                                            add("eos"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "dolores";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("debitis"),
                                            add("blanditiis"),
                                            add("incidunt"),
                                            add("error"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "dolor";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("nisi"),
                                            add("vero"),
                                            add("facilis"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "eius";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("laudantium"),
                                            add("nihil"),
                                            add("nihil"),
                                        }};
                                    }}),
                                }};
                                description = "suscipit";
                                ins = new String[]{{
                                    add("quibusdam"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.PERMISSION_TYPE_UNSPECIFIED;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jeannie Lebsack";
                                                    value = "delectus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Ivan Weissnat";
                                                    value = "asperiores";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lola Wiza";
                                                    value = "maxime";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Kenneth Jacobi";
                                                    value = "harum";
                                                }}),
                                            }};
                                            field = "officia";
                                            metric = "saepe";
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
                                                    name = "Cheryl Krajcik DVM";
                                                    value = "dolorum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Natalie White";
                                                    value = "ipsum";
                                                }}),
                                            }};
                                            field = "sequi";
                                            metric = "expedita";
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
                                                    name = "Misty Lind";
                                                    value = "quaerat";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Antoinette McCullough";
                                                    value = "repellendus";
                                                }}),
                                            }};
                                            field = "aut";
                                            metric = "repudiandae";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("ipsam"),
                                    add("dolorum"),
                                }};
                                permissions = new String[]{{
                                    add("natus"),
                                    add("suscipit"),
                                    add("neque"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "accusantium";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("libero"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "minus";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("laboriosam"),
                                            add("nesciunt"),
                                            add("sunt"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "deleniti";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("minus"),
                                            add("eius"),
                                            add("veritatis"),
                                            add("aperiam"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "cumque";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("saepe"),
                                        }};
                                    }}),
                                }};
                                description = "aperiam";
                                ins = new String[]{{
                                    add("nobis"),
                                    add("laboriosam"),
                                    add("odit"),
                                    add("itaque"),
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
                                                    name = "Marcia Nitzsche";
                                                    value = "fuga";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Gregg Ratke";
                                                    value = "quae";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Amanda Weimann";
                                                    value = "illo";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ernest Heathcote";
                                                    value = "corporis";
                                                }}),
                                            }};
                                            field = "recusandae";
                                            metric = "nam";
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
                                                    name = "Dianna Torphy II";
                                                    value = "repellat";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Nelson Boyer";
                                                    value = "maxime";
                                                }}),
                                            }};
                                            field = "ratione";
                                            metric = "accusamus";
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
                                                    name = "Meredith Schuppe";
                                                    value = "dolor";
                                                }}),
                                            }};
                                            field = "libero";
                                            metric = "labore";
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
                                                    name = "Abel Beer DVM";
                                                    value = "cum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Oscar Roberts Jr.";
                                                    value = "excepturi";
                                                }}),
                                            }};
                                            field = "reprehenderit";
                                            metric = "officiis";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("molestiae"),
                                    add("in"),
                                    add("voluptatibus"),
                                }};
                                permissions = new String[]{{
                                    add("illo"),
                                }};
                            }}),
                        }};
                        version = 966738;
                    }};;
                }};;
                accessToken = "aliquam";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "facere";
                key = "blanditiis";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "ullam";
                uploadProtocol = "illum";
                userIp = "perferendis";
            }};            

            ComputeReservationsSetIamPolicyResponse res = sdk.reservations.computeReservationsSetIamPolicy(req, new ComputeReservationsSetIamPolicySecurity() {{
                option1 = new ComputeReservationsSetIamPolicySecurityOption1("porro", "sapiente") {{
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

            ComputeReservationsTestIamPermissionsRequest req = new ComputeReservationsTestIamPermissionsRequest("eum", "officia", "nemo") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("ratione"),
                        add("occaecati"),
                        add("quam"),
                        add("beatae"),
                    }};
                }};;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "non";
                fields = "perferendis";
                key = "dolorum";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "aperiam";
                uploadType = "quisquam";
                uploadProtocol = "error";
                userIp = "reiciendis";
            }};            

            ComputeReservationsTestIamPermissionsResponse res = sdk.reservations.computeReservationsTestIamPermissions(req, new ComputeReservationsTestIamPermissionsSecurity() {{
                option1 = new ComputeReservationsTestIamPermissionsSecurityOption1("odit", "inventore") {{
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
import org.openapis.openapi.models.shared.AllocationAggregateReservation;
import org.openapis.openapi.models.shared.AllocationAggregateReservationReservedResourceInfo;
import org.openapis.openapi.models.shared.AllocationAggregateReservationReservedResourceInfoAccelerator;
import org.openapis.openapi.models.shared.AllocationAggregateReservationVmFamilyEnum;
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
import org.openapis.openapi.models.shared.ShareSettingsFolderConfig;
import org.openapis.openapi.models.shared.ShareSettingsProjectConfig;
import org.openapis.openapi.models.shared.ShareSettingsShareTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeReservationsUpdateRequest req = new ComputeReservationsUpdateRequest("eaque", "illum", "animi") {{
                dollarXgafv = XgafvEnum.ONE;
                reservation1 = new Reservation() {{
                    aggregateReservation = new AllocationAggregateReservation() {{
                        inUseResources = new org.openapis.openapi.models.shared.AllocationAggregateReservationReservedResourceInfo[]{{
                            add(new AllocationAggregateReservationReservedResourceInfo() {{
                                accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                    acceleratorCount = 94651;
                                    acceleratorType = "suscipit";
                                }};
                            }}),
                            add(new AllocationAggregateReservationReservedResourceInfo() {{
                                accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                    acceleratorCount = 526650;
                                    acceleratorType = "hic";
                                }};
                            }}),
                            add(new AllocationAggregateReservationReservedResourceInfo() {{
                                accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                    acceleratorCount = 762167;
                                    acceleratorType = "officia";
                                }};
                            }}),
                            add(new AllocationAggregateReservationReservedResourceInfo() {{
                                accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                    acceleratorCount = 13428;
                                    acceleratorType = "est";
                                }};
                            }}),
                        }};
                        reservedResources = new org.openapis.openapi.models.shared.AllocationAggregateReservationReservedResourceInfo[]{{
                            add(new AllocationAggregateReservationReservedResourceInfo() {{
                                accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                    acceleratorCount = 903843;
                                    acceleratorType = "aliquid";
                                }};
                            }}),
                        }};
                        vmFamily = AllocationAggregateReservationVmFamilyEnum.VM_FAMILY_CLOUD_TPU_POD_SLICE_CT4_P;
                    }};;
                    commitment = "temporibus";
                    creationTimestamp = "aperiam";
                    description = "nemo";
                    id = "laborum";
                    kind = "saepe";
                    name = "Julie Luettgen";
                    resourcePolicies = new java.util.HashMap<String, String>() {{
                        put("molestiae", "exercitationem");
                        put("quas", "modi");
                        put("animi", "nihil");
                        put("neque", "atque");
                    }};
                    resourceStatus = new AllocationResourceStatus() {{
                        specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                            sourceInstanceTemplateId = "reiciendis";
                        }};;
                    }};;
                    satisfiesPzs = false;
                    selfLink = "suscipit";
                    selfLinkWithId = "tempore";
                    shareSettings = new ShareSettings() {{
                        folderMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsFolderConfig>() {{
                            put("voluptatum", new ShareSettingsFolderConfig() {{
                                folderId = "fuga";
                            }});
                        }};
                        projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                            put("adipisci", new ShareSettingsProjectConfig() {{
                                projectId = "adipisci";
                            }});
                            put("quidem", new ShareSettingsProjectConfig() {{
                                projectId = "nesciunt";
                            }});
                        }};
                        projects = new String[]{{
                            add("a"),
                            add("molestias"),
                            add("expedita"),
                            add("libero"),
                        }};
                        shareType = ShareSettingsShareTypeEnum.SHARE_TYPE_UNSPECIFIED;
                    }};;
                    specificReservation = new AllocationSpecificSKUReservation() {{
                        assuredCount = "earum";
                        count = "neque";
                        inUseCount = "recusandae";
                        instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                            guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 410132;
                                    acceleratorType = "totam";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 834135;
                                    acceleratorType = "omnis";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 546034;
                                    acceleratorType = "dolore";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 220128;
                                    acceleratorType = "praesentium";
                                }}),
                            }};
                            localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                    diskSizeGb = "sit";
                                    interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                }}),
                                add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                    diskSizeGb = "labore";
                                    interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                }}),
                                add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                    diskSizeGb = "quae";
                                    interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                }}),
                            }};
                            locationHint = "harum";
                            machineType = "dolor";
                            maintenanceFreezeDurationHours = 395938;
                            maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum.AS_NEEDED;
                            minCpuPlatform = "aliquid";
                        }};;
                        sourceInstanceTemplate = "voluptatibus";
                    }};;
                    specificReservationRequired = false;
                    status = ReservationStatusEnum.CREATING;
                    zone = "distinctio";
                }};;
                accessToken = "ipsum";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "aut";
                key = "tenetur";
                oauthToken = "velit";
                paths = new String[]{{
                    add("repudiandae"),
                    add("error"),
                    add("aut"),
                }};
                prettyPrint = false;
                quotaUser = "recusandae";
                requestId = "qui";
                updateMask = "dolorem";
                uploadType = "pariatur";
                uploadProtocol = "quaerat";
                userIp = "porro";
            }};            

            ComputeReservationsUpdateResponse res = sdk.reservations.computeReservationsUpdate(req, new ComputeReservationsUpdateSecurity() {{
                option1 = new ComputeReservationsUpdateSecurityOption1("quae", "enim") {{
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
