# regionCommitments

### Available Operations

* [computeRegionCommitmentsAggregatedList](#computeregioncommitmentsaggregatedlist) - Retrieves an aggregated list of commitments by region.
* [computeRegionCommitmentsGet](#computeregioncommitmentsget) - Returns the specified commitment resource.
* [computeRegionCommitmentsInsert](#computeregioncommitmentsinsert) - Creates a commitment in the specified project using the data included in the request.
* [computeRegionCommitmentsList](#computeregioncommitmentslist) - Retrieves a list of commitments contained within the specified region.
* [computeRegionCommitmentsTestIamPermissions](#computeregioncommitmentstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeRegionCommitmentsUpdate](#computeregioncommitmentsupdate) - Updates the specified commitment with the data included in the request. Update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: auto_renew.
* [computeRegionCommitmentsUpdateReservations](#computeregioncommitmentsupdatereservations) - Transfers GPUs or local SSDs between reservations within commitments.

## computeRegionCommitmentsAggregatedList

Retrieves an aggregated list of commitments by region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionCommitmentsAggregatedListRequest req = new ComputeRegionCommitmentsAggregatedListRequest("voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatem";
                alt = AltEnum.JSON;
                callback = "sit";
                fields = "iure";
                filter = "similique";
                includeAllScopes = false;
                key = "ex";
                maxResults = 127802L;
                oauthToken = "dolorum";
                orderBy = "omnis";
                pageToken = "alias";
                prettyPrint = false;
                quotaUser = "consequatur";
                returnPartialSuccess = false;
                uploadType = "repellendus";
                uploadProtocol = "cum";
                userIp = "ipsum";
            }};            

            ComputeRegionCommitmentsAggregatedListResponse res = sdk.regionCommitments.computeRegionCommitmentsAggregatedList(req, new ComputeRegionCommitmentsAggregatedListSecurity() {{
                option1 = new ComputeRegionCommitmentsAggregatedListSecurityOption1("laboriosam", "quaerat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.commitmentAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionCommitmentsGet

Returns the specified commitment resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionCommitmentsGetRequest req = new ComputeRegionCommitmentsGetRequest("eligendi", "facere", "quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestiae";
                alt = AltEnum.MEDIA;
                callback = "praesentium";
                fields = "blanditiis";
                key = "et";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "quia";
                uploadProtocol = "officia";
                userIp = "nisi";
            }};            

            ComputeRegionCommitmentsGetResponse res = sdk.regionCommitments.computeRegionCommitmentsGet(req, new ComputeRegionCommitmentsGetSecurity() {{
                option1 = new ComputeRegionCommitmentsGetSecurityOption1("facere", "maxime") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.commitment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionCommitmentsInsert

Creates a commitment in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsInsertRequest;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsInsertResponse;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AllocationResourceStatus;
import org.openapis.openapi.models.shared.AllocationResourceStatusSpecificSKUAllocation;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationReservedInstanceProperties;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum;
import org.openapis.openapi.models.shared.AllocationSpecificSKUReservation;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Commitment;
import org.openapis.openapi.models.shared.CommitmentCategoryEnum;
import org.openapis.openapi.models.shared.CommitmentPlanEnum;
import org.openapis.openapi.models.shared.CommitmentStatusEnum;
import org.openapis.openapi.models.shared.CommitmentTypeEnum;
import org.openapis.openapi.models.shared.LicenseResourceCommitment;
import org.openapis.openapi.models.shared.Reservation;
import org.openapis.openapi.models.shared.ReservationStatusEnum;
import org.openapis.openapi.models.shared.ResourceCommitment;
import org.openapis.openapi.models.shared.ResourceCommitmentTypeEnum;
import org.openapis.openapi.models.shared.ShareSettings;
import org.openapis.openapi.models.shared.ShareSettingsProjectConfig;
import org.openapis.openapi.models.shared.ShareSettingsShareTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionCommitmentsInsertRequest req = new ComputeRegionCommitmentsInsertRequest("aperiam", "ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                commitment = new Commitment() {{
                    autoRenew = false;
                    category = CommitmentCategoryEnum.MACHINE;
                    creationTimestamp = "id";
                    description = "eum";
                    endTimestamp = "quos";
                    id = "magnam";
                    kind = "commodi";
                    licenseResource = new LicenseResourceCommitment() {{
                        amount = "voluptate";
                        coresPerLicense = "sit";
                        license = "quisquam";
                    }};;
                    mergeSourceCommitments = new String[]{{
                        add("vitae"),
                        add("labore"),
                        add("placeat"),
                        add("nemo"),
                    }};
                    name = "Karl Thiel I";
                    plan = CommitmentPlanEnum.THIRTY_SIX_MONTH;
                    region = "ducimus";
                    reservations = new org.openapis.openapi.models.shared.Reservation[]{{
                        add(new Reservation() {{
                            commitment = "recusandae";
                            creationTimestamp = "ipsum";
                            description = "nesciunt";
                            id = "praesentium";
                            kind = "quos";
                            name = "Shari Schroeder";
                            resourcePolicies = new java.util.HashMap<String, String>() {{
                                put("odit", "accusantium");
                                put("error", "rem");
                                put("ut", "alias");
                                put("blanditiis", "tempora");
                            }};
                            resourceStatus = new AllocationResourceStatus() {{
                                specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                                    sourceInstanceTemplateId = "perspiciatis";
                                }};
                            }};
                            satisfiesPzs = false;
                            selfLink = "voluptates";
                            shareSettings = new ShareSettings() {{
                                projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                                    put("commodi", new ShareSettingsProjectConfig() {{
                                        projectId = "autem";
                                    }});
                                    put("quam", new ShareSettingsProjectConfig() {{
                                        projectId = "cumque";
                                    }});
                                }};
                                projects = new String[]{{
                                    add("iusto"),
                                    add("cum"),
                                }};
                                shareType = ShareSettingsShareTypeEnum.LOCAL;
                            }};
                            specificReservation = new AllocationSpecificSKUReservation() {{
                                assuredCount = "aliquid";
                                count = "veniam";
                                inUseCount = "laudantium";
                                instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 63427;
                                            acceleratorType = "consequuntur";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 713296;
                                            acceleratorType = "porro";
                                        }}),
                                    }};
                                    localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "commodi";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "omnis";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "assumenda";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                    }};
                                    locationHint = "nisi";
                                    machineType = "ipsam";
                                    maintenanceFreezeDurationHours = 354003;
                                    maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum.PERIODIC;
                                    minCpuPlatform = "id";
                                }};
                                sourceInstanceTemplate = "cupiditate";
                            }};
                            specificReservationRequired = false;
                            status = ReservationStatusEnum.INVALID;
                            zone = "iusto";
                        }}),
                        add(new Reservation() {{
                            commitment = "quos";
                            creationTimestamp = "vitae";
                            description = "reiciendis";
                            id = "totam";
                            kind = "et";
                            name = "Enrique Bashirian";
                            resourcePolicies = new java.util.HashMap<String, String>() {{
                                put("nisi", "cupiditate");
                            }};
                            resourceStatus = new AllocationResourceStatus() {{
                                specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                                    sourceInstanceTemplateId = "perspiciatis";
                                }};
                            }};
                            satisfiesPzs = false;
                            selfLink = "quo";
                            shareSettings = new ShareSettings() {{
                                projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                                    put("ut", new ShareSettingsProjectConfig() {{
                                        projectId = "perspiciatis";
                                    }});
                                    put("voluptatibus", new ShareSettingsProjectConfig() {{
                                        projectId = "impedit";
                                    }});
                                    put("explicabo", new ShareSettingsProjectConfig() {{
                                        projectId = "ullam";
                                    }});
                                }};
                                projects = new String[]{{
                                    add("debitis"),
                                    add("libero"),
                                }};
                                shareType = ShareSettingsShareTypeEnum.SHARE_TYPE_UNSPECIFIED;
                            }};
                            specificReservation = new AllocationSpecificSKUReservation() {{
                                assuredCount = "reprehenderit";
                                count = "quibusdam";
                                inUseCount = "laudantium";
                                instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 474816;
                                            acceleratorType = "dolores";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 53613;
                                            acceleratorType = "itaque";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 321482;
                                            acceleratorType = "dolore";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 82913;
                                            acceleratorType = "porro";
                                        }}),
                                    }};
                                    localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "eligendi";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "nulla";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "eligendi";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "maiores";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                    }};
                                    locationHint = "aliquid";
                                    machineType = "commodi";
                                    maintenanceFreezeDurationHours = 963571;
                                    maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum.PERIODIC;
                                    minCpuPlatform = "aspernatur";
                                }};
                                sourceInstanceTemplate = "dolores";
                            }};
                            specificReservationRequired = false;
                            status = ReservationStatusEnum.INVALID;
                            zone = "voluptate";
                        }}),
                        add(new Reservation() {{
                            commitment = "sequi";
                            creationTimestamp = "beatae";
                            description = "autem";
                            id = "quibusdam";
                            kind = "accusamus";
                            name = "Troy Bogisich";
                            resourcePolicies = new java.util.HashMap<String, String>() {{
                                put("non", "debitis");
                            }};
                            resourceStatus = new AllocationResourceStatus() {{
                                specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                                    sourceInstanceTemplateId = "quos";
                                }};
                            }};
                            satisfiesPzs = false;
                            selfLink = "inventore";
                            shareSettings = new ShareSettings() {{
                                projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                                    put("culpa", new ShareSettingsProjectConfig() {{
                                        projectId = "quos";
                                    }});
                                    put("reiciendis", new ShareSettingsProjectConfig() {{
                                        projectId = "ratione";
                                    }});
                                    put("voluptates", new ShareSettingsProjectConfig() {{
                                        projectId = "voluptate";
                                    }});
                                }};
                                projects = new String[]{{
                                    add("harum"),
                                }};
                                shareType = ShareSettingsShareTypeEnum.ORGANIZATION;
                            }};
                            specificReservation = new AllocationSpecificSKUReservation() {{
                                assuredCount = "autem";
                                count = "beatae";
                                inUseCount = "officia";
                                instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 520422;
                                            acceleratorType = "voluptate";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 646375;
                                            acceleratorType = "magni";
                                        }}),
                                    }};
                                    localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "impedit";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "exercitationem";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                    }};
                                    locationHint = "aliquid";
                                    machineType = "libero";
                                    maintenanceFreezeDurationHours = 297223;
                                    maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum.PERIODIC;
                                    minCpuPlatform = "beatae";
                                }};
                                sourceInstanceTemplate = "labore";
                            }};
                            specificReservationRequired = false;
                            status = ReservationStatusEnum.READY;
                            zone = "autem";
                        }}),
                        add(new Reservation() {{
                            commitment = "ipsa";
                            creationTimestamp = "ea";
                            description = "voluptates";
                            id = "laudantium";
                            kind = "reprehenderit";
                            name = "Randal Brown DDS";
                            resourcePolicies = new java.util.HashMap<String, String>() {{
                                put("esse", "quasi");
                            }};
                            resourceStatus = new AllocationResourceStatus() {{
                                specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                                    sourceInstanceTemplateId = "laudantium";
                                }};
                            }};
                            satisfiesPzs = false;
                            selfLink = "consequuntur";
                            shareSettings = new ShareSettings() {{
                                projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                                    put("voluptatem", new ShareSettingsProjectConfig() {{
                                        projectId = "voluptate";
                                    }});
                                    put("assumenda", new ShareSettingsProjectConfig() {{
                                        projectId = "nesciunt";
                                    }});
                                    put("quod", new ShareSettingsProjectConfig() {{
                                        projectId = "ad";
                                    }});
                                    put("sit", new ShareSettingsProjectConfig() {{
                                        projectId = "excepturi";
                                    }});
                                }};
                                projects = new String[]{{
                                    add("id"),
                                    add("similique"),
                                }};
                                shareType = ShareSettingsShareTypeEnum.SHARE_TYPE_UNSPECIFIED;
                            }};
                            specificReservation = new AllocationSpecificSKUReservation() {{
                                assuredCount = "sed";
                                count = "perferendis";
                                inUseCount = "dolores";
                                instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 67334;
                                            acceleratorType = "eum";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 157489;
                                            acceleratorType = "eius";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 647125;
                                            acceleratorType = "accusamus";
                                        }}),
                                    }};
                                    localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "placeat";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "quaerat";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "aperiam";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                    }};
                                    locationHint = "repellendus";
                                    machineType = "iusto";
                                    maintenanceFreezeDurationHours = 702513;
                                    maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum.PERIODIC;
                                    minCpuPlatform = "repudiandae";
                                }};
                                sourceInstanceTemplate = "unde";
                            }};
                            specificReservationRequired = false;
                            status = ReservationStatusEnum.READY;
                            zone = "optio";
                        }}),
                    }};
                    resources = new org.openapis.openapi.models.shared.ResourceCommitment[]{{
                        add(new ResourceCommitment() {{
                            acceleratorType = "eligendi";
                            amount = "cumque";
                            type = ResourceCommitmentTypeEnum.UNSPECIFIED;
                        }}),
                        add(new ResourceCommitment() {{
                            acceleratorType = "reprehenderit";
                            amount = "facilis";
                            type = ResourceCommitmentTypeEnum.MEMORY;
                        }}),
                    }};
                    selfLink = "dolorum";
                    splitSourceCommitment = "animi";
                    startTimestamp = "iure";
                    status = CommitmentStatusEnum.CANCELLED;
                    statusMessage = "odio";
                    type = CommitmentTypeEnum.GENERAL_PURPOSE_N2;
                }};;
                accessToken = "harum";
                alt = AltEnum.JSON;
                callback = "tempore";
                fields = "illum";
                key = "quibusdam";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                requestId = "saepe";
                uploadType = "veritatis";
                uploadProtocol = "aperiam";
                userIp = "temporibus";
            }};            

            ComputeRegionCommitmentsInsertResponse res = sdk.regionCommitments.computeRegionCommitmentsInsert(req, new ComputeRegionCommitmentsInsertSecurity() {{
                option1 = new ComputeRegionCommitmentsInsertSecurityOption1("fugiat", "repellat") {{
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

## computeRegionCommitmentsList

Retrieves a list of commitments contained within the specified region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsListRequest;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsListResponse;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionCommitmentsListRequest req = new ComputeRegionCommitmentsListRequest("quibusdam", "iusto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "accusamus";
                fields = "eaque";
                filter = "a";
                key = "placeat";
                maxResults = 253759L;
                oauthToken = "quod";
                orderBy = "explicabo";
                pageToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "sequi";
                returnPartialSuccess = false;
                uploadType = "eum";
                uploadProtocol = "aliquam";
                userIp = "ducimus";
            }};            

            ComputeRegionCommitmentsListResponse res = sdk.regionCommitments.computeRegionCommitmentsList(req, new ComputeRegionCommitmentsListSecurity() {{
                option1 = new ComputeRegionCommitmentsListSecurityOption1("nulla", "eum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.commitmentList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionCommitmentsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionCommitmentsTestIamPermissionsRequest req = new ComputeRegionCommitmentsTestIamPermissionsRequest("cum", "praesentium", "provident") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("at"),
                        add("maxime"),
                        add("aut"),
                    }};
                }};;
                accessToken = "praesentium";
                alt = AltEnum.PROTO;
                callback = "ab";
                fields = "error";
                key = "illum";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                uploadType = "nobis";
                uploadProtocol = "unde";
                userIp = "tempore";
            }};            

            ComputeRegionCommitmentsTestIamPermissionsResponse res = sdk.regionCommitments.computeRegionCommitmentsTestIamPermissions(req, new ComputeRegionCommitmentsTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionCommitmentsTestIamPermissionsSecurityOption1("adipisci", "beatae") {{
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

## computeRegionCommitmentsUpdate

Updates the specified commitment with the data included in the request. Update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: auto_renew.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsUpdateRequest;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsUpdateResponse;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsUpdateSecurity;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AllocationResourceStatus;
import org.openapis.openapi.models.shared.AllocationResourceStatusSpecificSKUAllocation;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationReservedInstanceProperties;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum;
import org.openapis.openapi.models.shared.AllocationSpecificSKUReservation;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Commitment;
import org.openapis.openapi.models.shared.CommitmentCategoryEnum;
import org.openapis.openapi.models.shared.CommitmentPlanEnum;
import org.openapis.openapi.models.shared.CommitmentStatusEnum;
import org.openapis.openapi.models.shared.CommitmentTypeEnum;
import org.openapis.openapi.models.shared.LicenseResourceCommitment;
import org.openapis.openapi.models.shared.Reservation;
import org.openapis.openapi.models.shared.ReservationStatusEnum;
import org.openapis.openapi.models.shared.ResourceCommitment;
import org.openapis.openapi.models.shared.ResourceCommitmentTypeEnum;
import org.openapis.openapi.models.shared.ShareSettings;
import org.openapis.openapi.models.shared.ShareSettingsProjectConfig;
import org.openapis.openapi.models.shared.ShareSettingsShareTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionCommitmentsUpdateRequest req = new ComputeRegionCommitmentsUpdateRequest("cum", "expedita", "illum") {{
                dollarXgafv = XgafvEnum.TWO;
                commitment1 = new Commitment() {{
                    autoRenew = false;
                    category = CommitmentCategoryEnum.CATEGORY_UNSPECIFIED;
                    creationTimestamp = "aut";
                    description = "repellendus";
                    endTimestamp = "ad";
                    id = "dolorum";
                    kind = "nesciunt";
                    licenseResource = new LicenseResourceCommitment() {{
                        amount = "officia";
                        coresPerLicense = "perferendis";
                        license = "iste";
                    }};;
                    mergeSourceCommitments = new String[]{{
                        add("nostrum"),
                        add("deleniti"),
                        add("voluptate"),
                        add("cum"),
                    }};
                    name = "Miss Dale Goldner";
                    plan = CommitmentPlanEnum.THIRTY_SIX_MONTH;
                    region = "quibusdam";
                    reservations = new org.openapis.openapi.models.shared.Reservation[]{{
                        add(new Reservation() {{
                            commitment = "eius";
                            creationTimestamp = "aspernatur";
                            description = "natus";
                            id = "consequatur";
                            kind = "ullam";
                            name = "Bessie White";
                            resourcePolicies = new java.util.HashMap<String, String>() {{
                                put("dolorum", "quis");
                                put("alias", "necessitatibus");
                                put("dolorum", "enim");
                            }};
                            resourceStatus = new AllocationResourceStatus() {{
                                specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                                    sourceInstanceTemplateId = "laborum";
                                }};
                            }};
                            satisfiesPzs = false;
                            selfLink = "nobis";
                            shareSettings = new ShareSettings() {{
                                projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                                    put("quisquam", new ShareSettingsProjectConfig() {{
                                        projectId = "ratione";
                                    }});
                                }};
                                projects = new String[]{{
                                    add("soluta"),
                                    add("rem"),
                                }};
                                shareType = ShareSettingsShareTypeEnum.ORGANIZATION;
                            }};
                            specificReservation = new AllocationSpecificSKUReservation() {{
                                assuredCount = "esse";
                                count = "modi";
                                inUseCount = "error";
                                instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 729858;
                                            acceleratorType = "assumenda";
                                        }}),
                                    }};
                                    localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "culpa";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "perferendis";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "ipsa";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "quis";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                    }};
                                    locationHint = "aliquam";
                                    machineType = "non";
                                    maintenanceFreezeDurationHours = 874762;
                                    maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum.PERIODIC;
                                    minCpuPlatform = "officia";
                                }};
                                sourceInstanceTemplate = "excepturi";
                            }};
                            specificReservationRequired = false;
                            status = ReservationStatusEnum.READY;
                            zone = "quasi";
                        }}),
                        add(new Reservation() {{
                            commitment = "deserunt";
                            creationTimestamp = "quasi";
                            description = "ipsa";
                            id = "officia";
                            kind = "ratione";
                            name = "Sylvia Weimann";
                            resourcePolicies = new java.util.HashMap<String, String>() {{
                                put("illum", "est");
                                put("qui", "consectetur");
                                put("quaerat", "magni");
                                put("expedita", "aperiam");
                            }};
                            resourceStatus = new AllocationResourceStatus() {{
                                specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                                    sourceInstanceTemplateId = "consequatur";
                                }};
                            }};
                            satisfiesPzs = false;
                            selfLink = "ut";
                            shareSettings = new ShareSettings() {{
                                projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                                    put("quis", new ShareSettingsProjectConfig() {{
                                        projectId = "eos";
                                    }});
                                    put("ut", new ShareSettingsProjectConfig() {{
                                        projectId = "temporibus";
                                    }});
                                    put("nam", new ShareSettingsProjectConfig() {{
                                        projectId = "similique";
                                    }});
                                }};
                                projects = new String[]{{
                                    add("culpa"),
                                    add("architecto"),
                                    add("voluptate"),
                                }};
                                shareType = ShareSettingsShareTypeEnum.SHARE_TYPE_UNSPECIFIED;
                            }};
                            specificReservation = new AllocationSpecificSKUReservation() {{
                                assuredCount = "blanditiis";
                                count = "quaerat";
                                inUseCount = "reiciendis";
                                instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 711256;
                                            acceleratorType = "odio";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 602628;
                                            acceleratorType = "odit";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 813397;
                                            acceleratorType = "qui";
                                        }}),
                                    }};
                                    localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "quos";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "ut";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "suscipit";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                    }};
                                    locationHint = "porro";
                                    machineType = "cumque";
                                    maintenanceFreezeDurationHours = 555985;
                                    maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum.PERIODIC;
                                    minCpuPlatform = "fugiat";
                                }};
                                sourceInstanceTemplate = "vero";
                            }};
                            specificReservationRequired = false;
                            status = ReservationStatusEnum.INVALID;
                            zone = "harum";
                        }}),
                        add(new Reservation() {{
                            commitment = "doloremque";
                            creationTimestamp = "sed";
                            description = "cum";
                            id = "architecto";
                            kind = "neque";
                            name = "Jack Leuschke";
                            resourcePolicies = new java.util.HashMap<String, String>() {{
                                put("quos", "tempore");
                                put("doloribus", "a");
                                put("maiores", "aliquam");
                                put("tempora", "necessitatibus");
                            }};
                            resourceStatus = new AllocationResourceStatus() {{
                                specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                                    sourceInstanceTemplateId = "minus";
                                }};
                            }};
                            satisfiesPzs = false;
                            selfLink = "rem";
                            shareSettings = new ShareSettings() {{
                                projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                                    put("aliquam", new ShareSettingsProjectConfig() {{
                                        projectId = "temporibus";
                                    }});
                                    put("sapiente", new ShareSettingsProjectConfig() {{
                                        projectId = "autem";
                                    }});
                                    put("et", new ShareSettingsProjectConfig() {{
                                        projectId = "recusandae";
                                    }});
                                    put("error", new ShareSettingsProjectConfig() {{
                                        projectId = "voluptas";
                                    }});
                                }};
                                projects = new String[]{{
                                    add("expedita"),
                                }};
                                shareType = ShareSettingsShareTypeEnum.SHARE_TYPE_UNSPECIFIED;
                            }};
                            specificReservation = new AllocationSpecificSKUReservation() {{
                                assuredCount = "unde";
                                count = "tempore";
                                inUseCount = "nemo";
                                instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 227883;
                                            acceleratorType = "veritatis";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 685354;
                                            acceleratorType = "veritatis";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 902332;
                                            acceleratorType = "adipisci";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 398498;
                                            acceleratorType = "eaque";
                                        }}),
                                    }};
                                    localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "deserunt";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                    }};
                                    locationHint = "pariatur";
                                    machineType = "aliquid";
                                    maintenanceFreezeDurationHours = 120796;
                                    maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum.PERIODIC;
                                    minCpuPlatform = "ea";
                                }};
                                sourceInstanceTemplate = "sequi";
                            }};
                            specificReservationRequired = false;
                            status = ReservationStatusEnum.READY;
                            zone = "necessitatibus";
                        }}),
                        add(new Reservation() {{
                            commitment = "vitae";
                            creationTimestamp = "quisquam";
                            description = "vitae";
                            id = "repudiandae";
                            kind = "dolores";
                            name = "Louise Orn";
                            resourcePolicies = new java.util.HashMap<String, String>() {{
                                put("fuga", "tempora");
                            }};
                            resourceStatus = new AllocationResourceStatus() {{
                                specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                                    sourceInstanceTemplateId = "sed";
                                }};
                            }};
                            satisfiesPzs = false;
                            selfLink = "molestias";
                            shareSettings = new ShareSettings() {{
                                projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                                    put("asperiores", new ShareSettingsProjectConfig() {{
                                        projectId = "neque";
                                    }});
                                }};
                                projects = new String[]{{
                                    add("rem"),
                                    add("quibusdam"),
                                }};
                                shareType = ShareSettingsShareTypeEnum.ORGANIZATION;
                            }};
                            specificReservation = new AllocationSpecificSKUReservation() {{
                                assuredCount = "dolorem";
                                count = "laborum";
                                inUseCount = "hic";
                                instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 17020;
                                            acceleratorType = "doloremque";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 27133;
                                            acceleratorType = "fugiat";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 362069;
                                            acceleratorType = "nulla";
                                        }}),
                                    }};
                                    localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "facere";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "temporibus";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "voluptatem";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "impedit";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                    }};
                                    locationHint = "laboriosam";
                                    machineType = "voluptas";
                                    maintenanceFreezeDurationHours = 110615;
                                    maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum.PERIODIC;
                                    minCpuPlatform = "veritatis";
                                }};
                                sourceInstanceTemplate = "repellat";
                            }};
                            specificReservationRequired = false;
                            status = ReservationStatusEnum.UPDATING;
                            zone = "animi";
                        }}),
                    }};
                    resources = new org.openapis.openapi.models.shared.ResourceCommitment[]{{
                        add(new ResourceCommitment() {{
                            acceleratorType = "facere";
                            amount = "vero";
                            type = ResourceCommitmentTypeEnum.ACCELERATOR;
                        }}),
                    }};
                    selfLink = "magni";
                    splitSourceCommitment = "non";
                    startTimestamp = "nesciunt";
                    status = CommitmentStatusEnum.CREATING;
                    statusMessage = "dolor";
                    type = CommitmentTypeEnum.GENERAL_PURPOSE_N2;
                }};;
                accessToken = "odit";
                alt = AltEnum.MEDIA;
                callback = "fugit";
                fields = "eius";
                key = "at";
                oauthToken = "consequatur";
                paths = new String[]{{
                    add("doloremque"),
                    add("nemo"),
                }};
                prettyPrint = false;
                quotaUser = "id";
                requestId = "velit";
                updateMask = "dolorum";
                uploadType = "saepe";
                uploadProtocol = "voluptatum";
                userIp = "cupiditate";
            }};            

            ComputeRegionCommitmentsUpdateResponse res = sdk.regionCommitments.computeRegionCommitmentsUpdate(req, new ComputeRegionCommitmentsUpdateSecurity() {{
                option1 = new ComputeRegionCommitmentsUpdateSecurityOption1("quia", "nostrum") {{
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

## computeRegionCommitmentsUpdateReservations

Transfers GPUs or local SSDs between reservations within commitments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsUpdateReservationsRequest;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsUpdateReservationsResponse;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsUpdateReservationsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsUpdateReservationsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionCommitmentsUpdateReservationsSecurityOption2;
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AllocationResourceStatus;
import org.openapis.openapi.models.shared.AllocationResourceStatusSpecificSKUAllocation;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationReservedInstanceProperties;
import org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum;
import org.openapis.openapi.models.shared.AllocationSpecificSKUReservation;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionCommitmentsUpdateReservationsRequest;
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

            ComputeRegionCommitmentsUpdateReservationsRequest req = new ComputeRegionCommitmentsUpdateReservationsRequest("aliquid", "sequi", "voluptates") {{
                dollarXgafv = XgafvEnum.TWO;
                regionCommitmentsUpdateReservationsRequest = new RegionCommitmentsUpdateReservationsRequest() {{
                    reservations = new org.openapis.openapi.models.shared.Reservation[]{{
                        add(new Reservation() {{
                            commitment = "neque";
                            creationTimestamp = "corrupti";
                            description = "quae";
                            id = "recusandae";
                            kind = "similique";
                            name = "Randall Pfannerstill";
                            resourcePolicies = new java.util.HashMap<String, String>() {{
                                put("labore", "esse");
                                put("nemo", "quia");
                                put("voluptas", "sint");
                            }};
                            resourceStatus = new AllocationResourceStatus() {{
                                specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                                    sourceInstanceTemplateId = "ullam";
                                }};
                            }};
                            satisfiesPzs = false;
                            selfLink = "est";
                            shareSettings = new ShareSettings() {{
                                projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                                    put("quidem", new ShareSettingsProjectConfig() {{
                                        projectId = "non";
                                    }});
                                    put("non", new ShareSettingsProjectConfig() {{
                                        projectId = "eius";
                                    }});
                                    put("totam", new ShareSettingsProjectConfig() {{
                                        projectId = "nisi";
                                    }});
                                }};
                                projects = new String[]{{
                                    add("modi"),
                                    add("recusandae"),
                                }};
                                shareType = ShareSettingsShareTypeEnum.SPECIFIC_PROJECTS;
                            }};
                            specificReservation = new AllocationSpecificSKUReservation() {{
                                assuredCount = "iusto";
                                count = "voluptatem";
                                inUseCount = "excepturi";
                                instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 531387;
                                            acceleratorType = "possimus";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 998014;
                                            acceleratorType = "ex";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 895939;
                                            acceleratorType = "magni";
                                        }}),
                                    }};
                                    localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "dolorem";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "impedit";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "nemo";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "nam";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                    }};
                                    locationHint = "earum";
                                    machineType = "nam";
                                    maintenanceFreezeDurationHours = 525610;
                                    maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum.PERIODIC;
                                    minCpuPlatform = "autem";
                                }};
                                sourceInstanceTemplate = "alias";
                            }};
                            specificReservationRequired = false;
                            status = ReservationStatusEnum.INVALID;
                            zone = "veniam";
                        }}),
                        add(new Reservation() {{
                            commitment = "quam";
                            creationTimestamp = "deserunt";
                            description = "cumque";
                            id = "sit";
                            kind = "dignissimos";
                            name = "Omar Osinski";
                            resourcePolicies = new java.util.HashMap<String, String>() {{
                                put("rem", "nemo");
                                put("reiciendis", "iusto");
                                put("distinctio", "quam");
                            }};
                            resourceStatus = new AllocationResourceStatus() {{
                                specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                                    sourceInstanceTemplateId = "minus";
                                }};
                            }};
                            satisfiesPzs = false;
                            selfLink = "sapiente";
                            shareSettings = new ShareSettings() {{
                                projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                                    put("iure", new ShareSettingsProjectConfig() {{
                                        projectId = "eius";
                                    }});
                                    put("voluptates", new ShareSettingsProjectConfig() {{
                                        projectId = "fuga";
                                    }});
                                }};
                                projects = new String[]{{
                                    add("atque"),
                                    add("soluta"),
                                    add("porro"),
                                    add("nesciunt"),
                                }};
                                shareType = ShareSettingsShareTypeEnum.SHARE_TYPE_UNSPECIFIED;
                            }};
                            specificReservation = new AllocationSpecificSKUReservation() {{
                                assuredCount = "vel";
                                count = "nesciunt";
                                inUseCount = "deserunt";
                                instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 256785;
                                            acceleratorType = "cum";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 160408;
                                            acceleratorType = "voluptate";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 482244;
                                            acceleratorType = "possimus";
                                        }}),
                                    }};
                                    localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "corrupti";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "itaque";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "quibusdam";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                    }};
                                    locationHint = "similique";
                                    machineType = "exercitationem";
                                    maintenanceFreezeDurationHours = 441323;
                                    maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum.PERIODIC;
                                    minCpuPlatform = "suscipit";
                                }};
                                sourceInstanceTemplate = "cumque";
                            }};
                            specificReservationRequired = false;
                            status = ReservationStatusEnum.DELETING;
                            zone = "ad";
                        }}),
                        add(new Reservation() {{
                            commitment = "neque";
                            creationTimestamp = "numquam";
                            description = "esse";
                            id = "sunt";
                            kind = "explicabo";
                            name = "Doris Kohler";
                            resourcePolicies = new java.util.HashMap<String, String>() {{
                                put("molestiae", "ex");
                            }};
                            resourceStatus = new AllocationResourceStatus() {{
                                specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                                    sourceInstanceTemplateId = "neque";
                                }};
                            }};
                            satisfiesPzs = false;
                            selfLink = "nobis";
                            shareSettings = new ShareSettings() {{
                                projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                                    put("voluptatibus", new ShareSettingsProjectConfig() {{
                                        projectId = "minus";
                                    }});
                                    put("ducimus", new ShareSettingsProjectConfig() {{
                                        projectId = "soluta";
                                    }});
                                }};
                                projects = new String[]{{
                                    add("a"),
                                    add("similique"),
                                }};
                                shareType = ShareSettingsShareTypeEnum.LOCAL;
                            }};
                            specificReservation = new AllocationSpecificSKUReservation() {{
                                assuredCount = "fugit";
                                count = "sequi";
                                inUseCount = "itaque";
                                instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 755044;
                                            acceleratorType = "facere";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 150658;
                                            acceleratorType = "eos";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 97672;
                                            acceleratorType = "accusamus";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 926284;
                                            acceleratorType = "consectetur";
                                        }}),
                                    }};
                                    localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "illo";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "nam";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "eaque";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "nulla";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                    }};
                                    locationHint = "porro";
                                    machineType = "numquam";
                                    maintenanceFreezeDurationHours = 35440;
                                    maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum.PERIODIC;
                                    minCpuPlatform = "corporis";
                                }};
                                sourceInstanceTemplate = "doloribus";
                            }};
                            specificReservationRequired = false;
                            status = ReservationStatusEnum.DELETING;
                            zone = "molestias";
                        }}),
                    }};
                }};;
                accessToken = "quam";
                alt = AltEnum.JSON;
                callback = "eius";
                fields = "voluptatibus";
                key = "quas";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "repellendus";
                requestId = "maiores";
                uploadType = "aliquid";
                uploadProtocol = "saepe";
                userIp = "incidunt";
            }};            

            ComputeRegionCommitmentsUpdateReservationsResponse res = sdk.regionCommitments.computeRegionCommitmentsUpdateReservations(req, new ComputeRegionCommitmentsUpdateReservationsSecurity() {{
                option1 = new ComputeRegionCommitmentsUpdateReservationsSecurityOption1("quas", "earum") {{
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
