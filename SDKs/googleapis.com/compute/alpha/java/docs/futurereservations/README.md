# futureReservations

### Available Operations

* [computeFutureReservationsAggregatedList](#computefuturereservationsaggregatedlist) - Retrieves an aggregated list of future reservations.
* [computeFutureReservationsCancel](#computefuturereservationscancel) - Cancel the specified future reservation.
* [computeFutureReservationsDelete](#computefuturereservationsdelete) - Deletes the specified future reservation.
* [computeFutureReservationsGet](#computefuturereservationsget) - Retrieves information about the specified future reservation.
* [computeFutureReservationsInsert](#computefuturereservationsinsert) - Creates a new Future Reservation.
* [computeFutureReservationsList](#computefuturereservationslist) - A list of all the future reservations that have been configured for the specified project in specified zone.
* [computeFutureReservationsUpdate](#computefuturereservationsupdate) - Updates the specified future reservation.

## computeFutureReservationsAggregatedList

Retrieves an aggregated list of future reservations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFutureReservationsAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeFutureReservationsAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeFutureReservationsAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeFutureReservationsAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFutureReservationsAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeFutureReservationsAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFutureReservationsAggregatedListRequest req = new ComputeFutureReservationsAggregatedListRequest("excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "sunt";
                fields = "necessitatibus";
                filter = "iste";
                includeAllScopes = false;
                key = "veritatis";
                maxResults = 240352L;
                oauthToken = "quis";
                orderBy = "quis";
                pageToken = "quos";
                prettyPrint = false;
                quotaUser = "ea";
                returnPartialSuccess = false;
                uploadType = "fugiat";
                uploadProtocol = "dicta";
                userIp = "quas";
            }};            

            ComputeFutureReservationsAggregatedListResponse res = sdk.futureReservations.computeFutureReservationsAggregatedList(req, new ComputeFutureReservationsAggregatedListSecurity() {{
                option1 = new ComputeFutureReservationsAggregatedListSecurityOption1("delectus", "sint") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.futureReservationsAggregatedListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeFutureReservationsCancel

Cancel the specified future reservation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFutureReservationsCancelRequest;
import org.openapis.openapi.models.operations.ComputeFutureReservationsCancelResponse;
import org.openapis.openapi.models.operations.ComputeFutureReservationsCancelSecurity;
import org.openapis.openapi.models.operations.ComputeFutureReservationsCancelSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFutureReservationsCancelSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFutureReservationsCancelRequest req = new ComputeFutureReservationsCancelRequest("voluptatibus", "sint", "reprehenderit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "numquam";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "fuga";
                key = "facere";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "nam";
                requestId = "asperiores";
                uploadType = "quam";
                uploadProtocol = "fugiat";
                userIp = "ea";
            }};            

            ComputeFutureReservationsCancelResponse res = sdk.futureReservations.computeFutureReservationsCancel(req, new ComputeFutureReservationsCancelSecurity() {{
                option1 = new ComputeFutureReservationsCancelSecurityOption1("molestiae", "quo") {{
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

## computeFutureReservationsDelete

Deletes the specified future reservation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFutureReservationsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeFutureReservationsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeFutureReservationsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeFutureReservationsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFutureReservationsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFutureReservationsDeleteRequest req = new ComputeFutureReservationsDeleteRequest("deserunt", "totam", "modi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "repellendus";
                alt = AltEnum.MEDIA;
                callback = "unde";
                fields = "expedita";
                key = "eius";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "quibusdam";
                requestId = "voluptas";
                uploadType = "quasi";
                uploadProtocol = "magni";
                userIp = "numquam";
            }};            

            ComputeFutureReservationsDeleteResponse res = sdk.futureReservations.computeFutureReservationsDelete(req, new ComputeFutureReservationsDeleteSecurity() {{
                option1 = new ComputeFutureReservationsDeleteSecurityOption1("velit", "quis") {{
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

## computeFutureReservationsGet

Retrieves information about the specified future reservation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFutureReservationsGetRequest;
import org.openapis.openapi.models.operations.ComputeFutureReservationsGetResponse;
import org.openapis.openapi.models.operations.ComputeFutureReservationsGetSecurity;
import org.openapis.openapi.models.operations.ComputeFutureReservationsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFutureReservationsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeFutureReservationsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFutureReservationsGetRequest req = new ComputeFutureReservationsGetRequest("nesciunt", "sunt", "blanditiis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perferendis";
                alt = AltEnum.PROTO;
                callback = "delectus";
                fields = "ea";
                key = "totam";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "sequi";
                uploadProtocol = "fuga";
                userIp = "assumenda";
            }};            

            ComputeFutureReservationsGetResponse res = sdk.futureReservations.computeFutureReservationsGet(req, new ComputeFutureReservationsGetSecurity() {{
                option1 = new ComputeFutureReservationsGetSecurityOption1("modi", "dolores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.futureReservation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeFutureReservationsInsert

Creates a new Future Reservation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFutureReservationsInsertRequest;
import org.openapis.openapi.models.operations.ComputeFutureReservationsInsertResponse;
import org.openapis.openapi.models.operations.ComputeFutureReservationsInsertSecurity;
import org.openapis.openapi.models.operations.ComputeFutureReservationsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFutureReservationsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationReservedInstanceProperties;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.FutureReservation;
import org.openapis.openapi.models.shared.FutureReservationPlanningStatusEnum;
import org.openapis.openapi.models.shared.FutureReservationSpecificSKUProperties;
import org.openapis.openapi.models.shared.FutureReservationStatus;
import org.openapis.openapi.models.shared.FutureReservationStatusProcurementStatusEnum;
import org.openapis.openapi.models.shared.FutureReservationStatusSpecificSKUProperties;
import org.openapis.openapi.models.shared.FutureReservationTimeWindow;
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

            ComputeFutureReservationsInsertRequest req = new ComputeFutureReservationsInsertRequest("beatae", "rerum") {{
                dollarXgafv = XgafvEnum.TWO;
                futureReservation = new FutureReservation() {{
                    creationTimestamp = "ut";
                    description = "nesciunt";
                    id = "facere";
                    kind = "beatae";
                    name = "Larry Sanford MD";
                    namePrefix = "doloremque";
                    planningStatus = FutureReservationPlanningStatusEnum.DRAFT;
                    selfLink = "perferendis";
                    selfLinkWithId = "dolor";
                    shareSettings = new ShareSettings() {{
                        folderMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsFolderConfig>() {{
                            put("facilis", new ShareSettingsFolderConfig() {{
                                folderId = "eos";
                            }});
                            put("sed", new ShareSettingsFolderConfig() {{
                                folderId = "fugiat";
                            }});
                            put("sint", new ShareSettingsFolderConfig() {{
                                folderId = "tempore";
                            }});
                            put("dolorem", new ShareSettingsFolderConfig() {{
                                folderId = "dolorum";
                            }});
                        }};
                        projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                            put("aperiam", new ShareSettingsProjectConfig() {{
                                projectId = "pariatur";
                            }});
                            put("excepturi", new ShareSettingsProjectConfig() {{
                                projectId = "aliquam";
                            }});
                        }};
                        projects = new String[]{{
                            add("fuga"),
                            add("deserunt"),
                            add("iure"),
                            add("labore"),
                        }};
                        shareType = ShareSettingsShareTypeEnum.DIRECT_PROJECTS_UNDER_SPECIFIC_FOLDERS;
                    }};;
                    specificSkuProperties = new FutureReservationSpecificSKUProperties() {{
                        instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                            guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 360635;
                                    acceleratorType = "odio";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 841280;
                                    acceleratorType = "dicta";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 973047;
                                    acceleratorType = "vero";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 845082;
                                    acceleratorType = "maxime";
                                }}),
                            }};
                            localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                    diskSizeGb = "sit";
                                    interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                }}),
                            }};
                            locationHint = "doloremque";
                            machineType = "repellendus";
                            maintenanceFreezeDurationHours = 188701;
                            maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum.PERIODIC;
                            minCpuPlatform = "pariatur";
                        }};;
                        sourceInstanceTemplate = "quo";
                        totalCount = "sequi";
                    }};;
                    status = new FutureReservationStatus() {{
                        autoCreatedReservations = new String[]{{
                            add("repudiandae"),
                            add("ab"),
                            add("praesentium"),
                            add("nostrum"),
                        }};
                        fulfilledCount = "labore";
                        lockTime = "iusto";
                        procurementStatus = FutureReservationStatusProcurementStatusEnum.CANCELLED;
                        specificSkuProperties = new FutureReservationStatusSpecificSKUProperties() {{
                            sourceInstanceTemplateId = "tenetur";
                        }};;
                    }};;
                    timeWindow = new FutureReservationTimeWindow() {{
                        duration = new Duration() {{
                            nanos = 579952;
                            seconds = "necessitatibus";
                        }};;
                        endTime = "necessitatibus";
                        startTime = "autem";
                    }};;
                    zone = "natus";
                }};;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "ex";
                fields = "error";
                key = "deleniti";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "saepe";
                requestId = "adipisci";
                uploadType = "dolore";
                uploadProtocol = "tempora";
                userIp = "quaerat";
            }};            

            ComputeFutureReservationsInsertResponse res = sdk.futureReservations.computeFutureReservationsInsert(req, new ComputeFutureReservationsInsertSecurity() {{
                option1 = new ComputeFutureReservationsInsertSecurityOption1("debitis", "similique") {{
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

## computeFutureReservationsList

A list of all the future reservations that have been configured for the specified project in specified zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFutureReservationsListRequest;
import org.openapis.openapi.models.operations.ComputeFutureReservationsListResponse;
import org.openapis.openapi.models.operations.ComputeFutureReservationsListSecurity;
import org.openapis.openapi.models.operations.ComputeFutureReservationsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFutureReservationsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeFutureReservationsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFutureReservationsListRequest req = new ComputeFutureReservationsListRequest("porro", "blanditiis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sequi";
                alt = AltEnum.PROTO;
                callback = "fugit";
                fields = "totam";
                filter = "dignissimos";
                key = "corporis";
                maxResults = 779391L;
                oauthToken = "nisi";
                orderBy = "quo";
                pageToken = "inventore";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                returnPartialSuccess = false;
                uploadType = "officiis";
                uploadProtocol = "suscipit";
                userIp = "perferendis";
            }};            

            ComputeFutureReservationsListResponse res = sdk.futureReservations.computeFutureReservationsList(req, new ComputeFutureReservationsListSecurity() {{
                option1 = new ComputeFutureReservationsListSecurityOption1("nisi", "quibusdam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.futureReservationsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeFutureReservationsUpdate

Updates the specified future reservation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFutureReservationsUpdateRequest;
import org.openapis.openapi.models.operations.ComputeFutureReservationsUpdateResponse;
import org.openapis.openapi.models.operations.ComputeFutureReservationsUpdateSecurity;
import org.openapis.openapi.models.operations.ComputeFutureReservationsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFutureReservationsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationReservedInstanceProperties;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.FutureReservation;
import org.openapis.openapi.models.shared.FutureReservationPlanningStatusEnum;
import org.openapis.openapi.models.shared.FutureReservationSpecificSKUProperties;
import org.openapis.openapi.models.shared.FutureReservationStatus;
import org.openapis.openapi.models.shared.FutureReservationStatusProcurementStatusEnum;
import org.openapis.openapi.models.shared.FutureReservationStatusSpecificSKUProperties;
import org.openapis.openapi.models.shared.FutureReservationTimeWindow;
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

            ComputeFutureReservationsUpdateRequest req = new ComputeFutureReservationsUpdateRequest("alias", "voluptate", "repellendus") {{
                dollarXgafv = XgafvEnum.ONE;
                futureReservation1 = new FutureReservation() {{
                    creationTimestamp = "deserunt";
                    description = "error";
                    id = "impedit";
                    kind = "laudantium";
                    name = "Blanche Waelchi DDS";
                    namePrefix = "vitae";
                    planningStatus = FutureReservationPlanningStatusEnum.PLANNING_STATUS_UNSPECIFIED;
                    selfLink = "voluptas";
                    selfLinkWithId = "laboriosam";
                    shareSettings = new ShareSettings() {{
                        folderMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsFolderConfig>() {{
                            put("similique", new ShareSettingsFolderConfig() {{
                                folderId = "veritatis";
                            }});
                        }};
                        projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                            put("excepturi", new ShareSettingsProjectConfig() {{
                                projectId = "veritatis";
                            }});
                            put("ipsum", new ShareSettingsProjectConfig() {{
                                projectId = "iure";
                            }});
                            put("similique", new ShareSettingsProjectConfig() {{
                                projectId = "molestiae";
                            }});
                            put("itaque", new ShareSettingsProjectConfig() {{
                                projectId = "voluptatum";
                            }});
                        }};
                        projects = new String[]{{
                            add("minima"),
                            add("non"),
                            add("qui"),
                            add("et"),
                        }};
                        shareType = ShareSettingsShareTypeEnum.LOCAL;
                    }};;
                    specificSkuProperties = new FutureReservationSpecificSKUProperties() {{
                        instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                            guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 246653;
                                    acceleratorType = "asperiores";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 414172;
                                    acceleratorType = "voluptas";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 553805;
                                    acceleratorType = "esse";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 331817;
                                    acceleratorType = "fugit";
                                }}),
                            }};
                            localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                    diskSizeGb = "expedita";
                                    interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                }}),
                                add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                    diskSizeGb = "autem";
                                    interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVDIMM;
                                }}),
                                add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                    diskSizeGb = "maxime";
                                    interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                }}),
                                add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                    diskSizeGb = "occaecati";
                                    interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                }}),
                            }};
                            locationHint = "doloremque";
                            machineType = "id";
                            maintenanceFreezeDurationHours = 334954;
                            maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum.PERIODIC;
                            minCpuPlatform = "placeat";
                        }};;
                        sourceInstanceTemplate = "necessitatibus";
                        totalCount = "harum";
                    }};;
                    status = new FutureReservationStatus() {{
                        autoCreatedReservations = new String[]{{
                            add("culpa"),
                            add("pariatur"),
                            add("laborum"),
                            add("consequuntur"),
                        }};
                        fulfilledCount = "omnis";
                        lockTime = "maxime";
                        procurementStatus = FutureReservationStatusProcurementStatusEnum.FULFILLED;
                        specificSkuProperties = new FutureReservationStatusSpecificSKUProperties() {{
                            sourceInstanceTemplateId = "iusto";
                        }};;
                    }};;
                    timeWindow = new FutureReservationTimeWindow() {{
                        duration = new Duration() {{
                            nanos = 620421;
                            seconds = "ab";
                        }};;
                        endTime = "deleniti";
                        startTime = "et";
                    }};;
                    zone = "eligendi";
                }};;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "laboriosam";
                fields = "molestiae";
                key = "ab";
                oauthToken = "ex";
                paths = new String[]{{
                    add("dolorem"),
                    add("minus"),
                }};
                prettyPrint = false;
                quotaUser = "ad";
                requestId = "ipsum";
                updateMask = "ipsa";
                uploadType = "nam";
                uploadProtocol = "minima";
                userIp = "vel";
            }};            

            ComputeFutureReservationsUpdateResponse res = sdk.futureReservations.computeFutureReservationsUpdate(req, new ComputeFutureReservationsUpdateSecurity() {{
                option1 = new ComputeFutureReservationsUpdateSecurityOption1("nisi", "minima") {{
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
