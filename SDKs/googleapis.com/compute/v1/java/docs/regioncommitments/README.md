# regionCommitments

### Available Operations

* [computeRegionCommitmentsAggregatedList](#computeregioncommitmentsaggregatedlist) - Retrieves an aggregated list of commitments by region.
* [computeRegionCommitmentsGet](#computeregioncommitmentsget) - Returns the specified commitment resource.
* [computeRegionCommitmentsInsert](#computeregioncommitmentsinsert) - Creates a commitment in the specified project using the data included in the request.
* [computeRegionCommitmentsList](#computeregioncommitmentslist) - Retrieves a list of commitments contained within the specified region.
* [computeRegionCommitmentsUpdate](#computeregioncommitmentsupdate) - Updates the specified commitment with the data included in the request. Update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: auto_renew.

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

            ComputeRegionCommitmentsAggregatedListRequest req = new ComputeRegionCommitmentsAggregatedListRequest("suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maiores";
                alt = AltEnum.JSON;
                callback = "ducimus";
                fields = "ad";
                filter = "quo";
                includeAllScopes = false;
                key = "neque";
                maxResults = 506298L;
                oauthToken = "quae";
                orderBy = "consectetur";
                pageToken = "incidunt";
                prettyPrint = false;
                quotaUser = "tenetur";
                returnPartialSuccess = false;
                uploadType = "blanditiis";
                uploadProtocol = "accusamus";
                userIp = "eius";
            }};            

            ComputeRegionCommitmentsAggregatedListResponse res = sdk.regionCommitments.computeRegionCommitmentsAggregatedList(req, new ComputeRegionCommitmentsAggregatedListSecurity() {{
                option1 = new ComputeRegionCommitmentsAggregatedListSecurityOption1("odit", "assumenda") {{
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

            ComputeRegionCommitmentsGetRequest req = new ComputeRegionCommitmentsGetRequest("officiis", "alias", "sequi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "itaque";
                fields = "omnis";
                key = "molestias";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "nisi";
                uploadProtocol = "modi";
                userIp = "molestiae";
            }};            

            ComputeRegionCommitmentsGetResponse res = sdk.regionCommitments.computeRegionCommitmentsGet(req, new ComputeRegionCommitmentsGetSecurity() {{
                option1 = new ComputeRegionCommitmentsGetSecurityOption1("dolorum", "reiciendis") {{
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

            ComputeRegionCommitmentsInsertRequest req = new ComputeRegionCommitmentsInsertRequest("soluta", "laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                commitment = new Commitment() {{
                    autoRenew = false;
                    category = CommitmentCategoryEnum.LICENSE;
                    creationTimestamp = "ut";
                    description = "quaerat";
                    endTimestamp = "qui";
                    id = "minus";
                    kind = "animi";
                    licenseResource = new LicenseResourceCommitment() {{
                        amount = "ea";
                        coresPerLicense = "amet";
                        license = "illum";
                    }};;
                    mergeSourceCommitments = new String[]{{
                        add("deleniti"),
                    }};
                    name = "Christine Ritchie";
                    plan = CommitmentPlanEnum.INVALID;
                    region = "recusandae";
                    reservations = new org.openapis.openapi.models.shared.Reservation[]{{
                        add(new Reservation() {{
                            commitment = "eius";
                            creationTimestamp = "repellendus";
                            description = "provident";
                            id = "delectus";
                            kind = "repudiandae";
                            name = "Curtis Kshlerin";
                            resourcePolicies = new java.util.HashMap<String, String>() {{
                                put("corporis", "a");
                                put("delectus", "laudantium");
                                put("est", "in");
                                put("laboriosam", "hic");
                            }};
                            resourceStatus = new AllocationResourceStatus() {{
                                specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                                    sourceInstanceTemplateId = "dolorum";
                                }};
                            }};
                            satisfiesPzs = false;
                            selfLink = "unde";
                            shareSettings = new ShareSettings() {{
                                projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                                    put("velit", new ShareSettingsProjectConfig() {{
                                        projectId = "ullam";
                                    }});
                                    put("totam", new ShareSettingsProjectConfig() {{
                                        projectId = "harum";
                                    }});
                                }};
                                shareType = ShareSettingsShareTypeEnum.SHARE_TYPE_UNSPECIFIED;
                            }};
                            specificReservation = new AllocationSpecificSKUReservation() {{
                                assuredCount = "numquam";
                                count = "quos";
                                inUseCount = "non";
                                instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 168195;
                                            acceleratorType = "fugit";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 402770;
                                            acceleratorType = "pariatur";
                                        }}),
                                    }};
                                    localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "vitae";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "odit";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                    }};
                                    locationHint = "sed";
                                    machineType = "doloremque";
                                    minCpuPlatform = "doloremque";
                                }};
                                sourceInstanceTemplate = "blanditiis";
                            }};
                            specificReservationRequired = false;
                            status = ReservationStatusEnum.UPDATING;
                            zone = "quasi";
                        }}),
                        add(new Reservation() {{
                            commitment = "debitis";
                            creationTimestamp = "incidunt";
                            description = "sunt";
                            id = "excepturi";
                            kind = "quam";
                            name = "Dr. Sue Jacobi";
                            resourcePolicies = new java.util.HashMap<String, String>() {{
                                put("pariatur", "iure");
                            }};
                            resourceStatus = new AllocationResourceStatus() {{
                                specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                                    sourceInstanceTemplateId = "cum";
                                }};
                            }};
                            satisfiesPzs = false;
                            selfLink = "officia";
                            shareSettings = new ShareSettings() {{
                                projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                                    put("cupiditate", new ShareSettingsProjectConfig() {{
                                        projectId = "eius";
                                    }});
                                }};
                                shareType = ShareSettingsShareTypeEnum.SHARE_TYPE_UNSPECIFIED;
                            }};
                            specificReservation = new AllocationSpecificSKUReservation() {{
                                assuredCount = "ratione";
                                count = "aperiam";
                                inUseCount = "repellendus";
                                instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 467619;
                                            acceleratorType = "accusantium";
                                        }}),
                                    }};
                                    localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "animi";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                    }};
                                    locationHint = "autem";
                                    machineType = "incidunt";
                                    minCpuPlatform = "cupiditate";
                                }};
                                sourceInstanceTemplate = "voluptatibus";
                            }};
                            specificReservationRequired = false;
                            status = ReservationStatusEnum.INVALID;
                            zone = "voluptatem";
                        }}),
                        add(new Reservation() {{
                            commitment = "delectus";
                            creationTimestamp = "eveniet";
                            description = "aspernatur";
                            id = "ipsa";
                            kind = "atque";
                            name = "Elmer Heller";
                            resourcePolicies = new java.util.HashMap<String, String>() {{
                                put("dolor", "corrupti");
                            }};
                            resourceStatus = new AllocationResourceStatus() {{
                                specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                                    sourceInstanceTemplateId = "quis";
                                }};
                            }};
                            satisfiesPzs = false;
                            selfLink = "eligendi";
                            shareSettings = new ShareSettings() {{
                                projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                                    put("animi", new ShareSettingsProjectConfig() {{
                                        projectId = "expedita";
                                    }});
                                    put("consectetur", new ShareSettingsProjectConfig() {{
                                        projectId = "at";
                                    }});
                                }};
                                shareType = ShareSettingsShareTypeEnum.LOCAL;
                            }};
                            specificReservation = new AllocationSpecificSKUReservation() {{
                                assuredCount = "ea";
                                count = "illum";
                                inUseCount = "facere";
                                instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 11549;
                                            acceleratorType = "temporibus";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 787698;
                                            acceleratorType = "eaque";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 525954;
                                            acceleratorType = "tempora";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 833729;
                                            acceleratorType = "suscipit";
                                        }}),
                                    }};
                                    localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "quasi";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                    }};
                                    locationHint = "reprehenderit";
                                    machineType = "quidem";
                                    minCpuPlatform = "nihil";
                                }};
                                sourceInstanceTemplate = "illum";
                            }};
                            specificReservationRequired = false;
                            status = ReservationStatusEnum.INVALID;
                            zone = "iusto";
                        }}),
                    }};
                    resources = new org.openapis.openapi.models.shared.ResourceCommitment[]{{
                        add(new ResourceCommitment() {{
                            acceleratorType = "illum";
                            amount = "odio";
                            type = ResourceCommitmentTypeEnum.MEMORY;
                        }}),
                        add(new ResourceCommitment() {{
                            acceleratorType = "nobis";
                            amount = "asperiores";
                            type = ResourceCommitmentTypeEnum.UNSPECIFIED;
                        }}),
                        add(new ResourceCommitment() {{
                            acceleratorType = "saepe";
                            amount = "amet";
                            type = ResourceCommitmentTypeEnum.LOCAL_SSD;
                        }}),
                        add(new ResourceCommitment() {{
                            acceleratorType = "cupiditate";
                            amount = "a";
                            type = ResourceCommitmentTypeEnum.ACCELERATOR;
                        }}),
                    }};
                    selfLink = "cumque";
                    splitSourceCommitment = "ducimus";
                    startTimestamp = "rem";
                    status = CommitmentStatusEnum.ACTIVE;
                    statusMessage = "asperiores";
                    type = CommitmentTypeEnum.ACCELERATOR_OPTIMIZED;
                }};;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "sequi";
                fields = "delectus";
                key = "vitae";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "eius";
                requestId = "exercitationem";
                uploadType = "tempore";
                uploadProtocol = "expedita";
                userIp = "quos";
            }};            

            ComputeRegionCommitmentsInsertResponse res = sdk.regionCommitments.computeRegionCommitmentsInsert(req, new ComputeRegionCommitmentsInsertSecurity() {{
                option1 = new ComputeRegionCommitmentsInsertSecurityOption1("quas", "aliquid") {{
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

            ComputeRegionCommitmentsListRequest req = new ComputeRegionCommitmentsListRequest("id", "optio") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sit";
                alt = AltEnum.MEDIA;
                callback = "facere";
                fields = "quisquam";
                filter = "nobis";
                key = "suscipit";
                maxResults = 180202L;
                oauthToken = "a";
                orderBy = "laboriosam";
                pageToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "accusantium";
                returnPartialSuccess = false;
                uploadType = "hic";
                uploadProtocol = "aut";
                userIp = "excepturi";
            }};            

            ComputeRegionCommitmentsListResponse res = sdk.regionCommitments.computeRegionCommitmentsList(req, new ComputeRegionCommitmentsListSecurity() {{
                option1 = new ComputeRegionCommitmentsListSecurityOption1("repellat", "dolorem") {{
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

            ComputeRegionCommitmentsUpdateRequest req = new ComputeRegionCommitmentsUpdateRequest("odio", "eius", "ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                commitment1 = new Commitment() {{
                    autoRenew = false;
                    category = CommitmentCategoryEnum.CATEGORY_UNSPECIFIED;
                    creationTimestamp = "assumenda";
                    description = "maxime";
                    endTimestamp = "sequi";
                    id = "facilis";
                    kind = "corrupti";
                    licenseResource = new LicenseResourceCommitment() {{
                        amount = "alias";
                        coresPerLicense = "exercitationem";
                        license = "impedit";
                    }};;
                    mergeSourceCommitments = new String[]{{
                        add("vitae"),
                        add("cumque"),
                        add("tenetur"),
                        add("doloremque"),
                    }};
                    name = "Florence Klein PhD";
                    plan = CommitmentPlanEnum.TWELVE_MONTH;
                    region = "error";
                    reservations = new org.openapis.openapi.models.shared.Reservation[]{{
                        add(new Reservation() {{
                            commitment = "recusandae";
                            creationTimestamp = "quas";
                            description = "nihil";
                            id = "recusandae";
                            kind = "soluta";
                            name = "Ms. Erica Stroman";
                            resourcePolicies = new java.util.HashMap<String, String>() {{
                                put("enim", "possimus");
                                put("in", "reprehenderit");
                                put("modi", "et");
                                put("quaerat", "voluptatem");
                            }};
                            resourceStatus = new AllocationResourceStatus() {{
                                specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                                    sourceInstanceTemplateId = "porro";
                                }};
                            }};
                            satisfiesPzs = false;
                            selfLink = "vero";
                            shareSettings = new ShareSettings() {{
                                projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                                    put("molestiae", new ShareSettingsProjectConfig() {{
                                        projectId = "aperiam";
                                    }});
                                }};
                                shareType = ShareSettingsShareTypeEnum.SHARE_TYPE_UNSPECIFIED;
                            }};
                            specificReservation = new AllocationSpecificSKUReservation() {{
                                assuredCount = "similique";
                                count = "accusamus";
                                inUseCount = "eaque";
                                instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 651848;
                                            acceleratorType = "necessitatibus";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 154909;
                                            acceleratorType = "voluptatem";
                                        }}),
                                    }};
                                    localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "incidunt";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "placeat";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                    }};
                                    locationHint = "fugiat";
                                    machineType = "omnis";
                                    minCpuPlatform = "hic";
                                }};
                                sourceInstanceTemplate = "quasi";
                            }};
                            specificReservationRequired = false;
                            status = ReservationStatusEnum.DELETING;
                            zone = "corrupti";
                        }}),
                        add(new Reservation() {{
                            commitment = "porro";
                            creationTimestamp = "omnis";
                            description = "doloribus";
                            id = "alias";
                            kind = "rem";
                            name = "Ms. Francis Boyer";
                            resourcePolicies = new java.util.HashMap<String, String>() {{
                                put("odit", "doloremque");
                            }};
                            resourceStatus = new AllocationResourceStatus() {{
                                specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                                    sourceInstanceTemplateId = "laboriosam";
                                }};
                            }};
                            satisfiesPzs = false;
                            selfLink = "blanditiis";
                            shareSettings = new ShareSettings() {{
                                projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                                    put("perspiciatis", new ShareSettingsProjectConfig() {{
                                        projectId = "commodi";
                                    }});
                                    put("adipisci", new ShareSettingsProjectConfig() {{
                                        projectId = "saepe";
                                    }});
                                }};
                                shareType = ShareSettingsShareTypeEnum.SHARE_TYPE_UNSPECIFIED;
                            }};
                            specificReservation = new AllocationSpecificSKUReservation() {{
                                assuredCount = "vel";
                                count = "eligendi";
                                inUseCount = "voluptates";
                                instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 805401;
                                            acceleratorType = "totam";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 288378;
                                            acceleratorType = "deleniti";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 318089;
                                            acceleratorType = "iure";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 369844;
                                            acceleratorType = "atque";
                                        }}),
                                    }};
                                    localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "voluptatem";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "occaecati";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "officia";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                    }};
                                    locationHint = "repellat";
                                    machineType = "iste";
                                    minCpuPlatform = "incidunt";
                                }};
                                sourceInstanceTemplate = "aperiam";
                            }};
                            specificReservationRequired = false;
                            status = ReservationStatusEnum.UPDATING;
                            zone = "corrupti";
                        }}),
                    }};
                    resources = new org.openapis.openapi.models.shared.ResourceCommitment[]{{
                        add(new ResourceCommitment() {{
                            acceleratorType = "ex";
                            amount = "eum";
                            type = ResourceCommitmentTypeEnum.MEMORY;
                        }}),
                        add(new ResourceCommitment() {{
                            acceleratorType = "quisquam";
                            amount = "doloremque";
                            type = ResourceCommitmentTypeEnum.MEMORY;
                        }}),
                        add(new ResourceCommitment() {{
                            acceleratorType = "repellat";
                            amount = "beatae";
                            type = ResourceCommitmentTypeEnum.ACCELERATOR;
                        }}),
                        add(new ResourceCommitment() {{
                            acceleratorType = "ab";
                            amount = "tempora";
                            type = ResourceCommitmentTypeEnum.LOCAL_SSD;
                        }}),
                    }};
                    selfLink = "illo";
                    splitSourceCommitment = "magnam";
                    startTimestamp = "corrupti";
                    status = CommitmentStatusEnum.CREATING;
                    statusMessage = "ullam";
                    type = CommitmentTypeEnum.GENERAL_PURPOSE_E2;
                }};;
                accessToken = "voluptas";
                alt = AltEnum.JSON;
                callback = "quisquam";
                fields = "id";
                key = "saepe";
                oauthToken = "voluptatibus";
                paths = new String[]{{
                    add("iste"),
                }};
                prettyPrint = false;
                quotaUser = "incidunt";
                requestId = "ipsa";
                updateMask = "molestiae";
                uploadType = "nemo";
                uploadProtocol = "vitae";
                userIp = "magnam";
            }};            

            ComputeRegionCommitmentsUpdateResponse res = sdk.regionCommitments.computeRegionCommitmentsUpdate(req, new ComputeRegionCommitmentsUpdateSecurity() {{
                option1 = new ComputeRegionCommitmentsUpdateSecurityOption1("laboriosam", "quia") {{
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
