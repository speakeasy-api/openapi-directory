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

            ComputeRegionCommitmentsAggregatedListRequest req = new ComputeRegionCommitmentsAggregatedListRequest("quod") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eius";
                alt = AltEnum.MEDIA;
                callback = "maxime";
                fields = "deserunt";
                filter = "explicabo";
                includeAllScopes = false;
                key = "soluta";
                maxResults = 775178L;
                oauthToken = "ratione";
                orderBy = "repellendus";
                pageToken = "accusamus";
                prettyPrint = false;
                quotaUser = "ipsum";
                returnPartialSuccess = false;
                uploadType = "repellendus";
                uploadProtocol = "voluptatibus";
                userIp = "sunt";
            }};            

            ComputeRegionCommitmentsAggregatedListResponse res = sdk.regionCommitments.computeRegionCommitmentsAggregatedList(req, new ComputeRegionCommitmentsAggregatedListSecurity() {{
                option1 = new ComputeRegionCommitmentsAggregatedListSecurityOption1("sed", "quidem") {{
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

            ComputeRegionCommitmentsGetRequest req = new ComputeRegionCommitmentsGetRequest("rerum", "quidem", "facilis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloribus";
                alt = AltEnum.MEDIA;
                callback = "odit";
                fields = "voluptatibus";
                key = "laborum";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "minima";
                uploadProtocol = "numquam";
                userIp = "labore";
            }};            

            ComputeRegionCommitmentsGetResponse res = sdk.regionCommitments.computeRegionCommitmentsGet(req, new ComputeRegionCommitmentsGetSecurity() {{
                option1 = new ComputeRegionCommitmentsGetSecurityOption1("earum", "eveniet") {{
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
import org.openapis.openapi.models.shared.ShareSettingsFolderConfig;
import org.openapis.openapi.models.shared.ShareSettingsProjectConfig;
import org.openapis.openapi.models.shared.ShareSettingsShareTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionCommitmentsInsertRequest req = new ComputeRegionCommitmentsInsertRequest("perferendis", "deserunt") {{
                dollarXgafv = XgafvEnum.TWO;
                commitment = new Commitment() {{
                    autoRenew = false;
                    category = CommitmentCategoryEnum.MACHINE;
                    creationTimestamp = "nostrum";
                    description = "quos";
                    endTimestamp = "praesentium";
                    id = "quas";
                    kind = "ea";
                    licenseResource = new LicenseResourceCommitment() {{
                        amount = "minus";
                        coresPerLicense = "possimus";
                        license = "perspiciatis";
                    }};;
                    mergeSourceCommitments = new String[]{{
                        add("dolorum"),
                        add("architecto"),
                        add("autem"),
                    }};
                    name = "Marguerite Schmeler";
                    plan = CommitmentPlanEnum.TWELVE_MONTH;
                    region = "nisi";
                    reservations = new org.openapis.openapi.models.shared.Reservation[]{{
                        add(new Reservation() {{
                            aggregateReservation = new AllocationAggregateReservation() {{
                                inUseResources = new org.openapis.openapi.models.shared.AllocationAggregateReservationReservedResourceInfo[]{{
                                    add(new AllocationAggregateReservationReservedResourceInfo() {{
                                        accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                            acceleratorCount = 212226;
                                            acceleratorType = "eos";
                                        }};
                                    }}),
                                    add(new AllocationAggregateReservationReservedResourceInfo() {{
                                        accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                            acceleratorCount = 928278;
                                            acceleratorType = "illo";
                                        }};
                                    }}),
                                    add(new AllocationAggregateReservationReservedResourceInfo() {{
                                        accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                            acceleratorCount = 38452;
                                            acceleratorType = "aliquid";
                                        }};
                                    }}),
                                    add(new AllocationAggregateReservationReservedResourceInfo() {{
                                        accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                            acceleratorCount = 592138;
                                            acceleratorType = "nulla";
                                        }};
                                    }}),
                                }};
                                reservedResources = new org.openapis.openapi.models.shared.AllocationAggregateReservationReservedResourceInfo[]{{
                                    add(new AllocationAggregateReservationReservedResourceInfo() {{
                                        accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                            acceleratorCount = 101826;
                                            acceleratorType = "sit";
                                        }};
                                    }}),
                                }};
                                vmFamily = AllocationAggregateReservationVmFamilyEnum.VM_FAMILY_GENERAL_PURPOSE_T2_D;
                            }};
                            commitment = "aperiam";
                            creationTimestamp = "quasi";
                            description = "doloribus";
                            id = "blanditiis";
                            kind = "iure";
                            name = "Olga Bogan";
                            resourcePolicies = new java.util.HashMap<String, String>() {{
                                put("atque", "praesentium");
                                put("possimus", "necessitatibus");
                            }};
                            resourceStatus = new AllocationResourceStatus() {{
                                specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                                    sourceInstanceTemplateId = "sint";
                                }};
                            }};
                            satisfiesPzs = false;
                            selfLink = "voluptas";
                            selfLinkWithId = "cupiditate";
                            shareSettings = new ShareSettings() {{
                                folderMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsFolderConfig>() {{
                                    put("enim", new ShareSettingsFolderConfig() {{
                                        folderId = "commodi";
                                    }});
                                    put("magnam", new ShareSettingsFolderConfig() {{
                                        folderId = "autem";
                                    }});
                                }};
                                projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                                    put("ducimus", new ShareSettingsProjectConfig() {{
                                        projectId = "aperiam";
                                    }});
                                    put("fuga", new ShareSettingsProjectConfig() {{
                                        projectId = "ut";
                                    }});
                                }};
                                projects = new String[]{{
                                    add("minus"),
                                    add("officia"),
                                }};
                                shareType = ShareSettingsShareTypeEnum.SHARE_TYPE_UNSPECIFIED;
                            }};
                            specificReservation = new AllocationSpecificSKUReservation() {{
                                assuredCount = "architecto";
                                count = "soluta";
                                inUseCount = "accusantium";
                                instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 60999;
                                            acceleratorType = "vero";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 813937;
                                            acceleratorType = "pariatur";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 45851;
                                            acceleratorType = "suscipit";
                                        }}),
                                    }};
                                    localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "est";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVDIMM;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "officiis";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                    }};
                                    locationHint = "cum";
                                    machineType = "praesentium";
                                    maintenanceFreezeDurationHours = 925165;
                                    maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum.RECURRENT;
                                    minCpuPlatform = "voluptatibus";
                                }};
                                sourceInstanceTemplate = "dolor";
                            }};
                            specificReservationRequired = false;
                            status = ReservationStatusEnum.INVALID;
                            zone = "deserunt";
                        }}),
                        add(new Reservation() {{
                            aggregateReservation = new AllocationAggregateReservation() {{
                                inUseResources = new org.openapis.openapi.models.shared.AllocationAggregateReservationReservedResourceInfo[]{{
                                    add(new AllocationAggregateReservationReservedResourceInfo() {{
                                        accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                            acceleratorCount = 40712;
                                            acceleratorType = "esse";
                                        }};
                                    }}),
                                    add(new AllocationAggregateReservationReservedResourceInfo() {{
                                        accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                            acceleratorCount = 767607;
                                            acceleratorType = "iure";
                                        }};
                                    }}),
                                    add(new AllocationAggregateReservationReservedResourceInfo() {{
                                        accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                            acceleratorCount = 861860;
                                            acceleratorType = "et";
                                        }};
                                    }}),
                                }};
                                reservedResources = new org.openapis.openapi.models.shared.AllocationAggregateReservationReservedResourceInfo[]{{
                                    add(new AllocationAggregateReservationReservedResourceInfo() {{
                                        accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                            acceleratorCount = 367339;
                                            acceleratorType = "rem";
                                        }};
                                    }}),
                                    add(new AllocationAggregateReservationReservedResourceInfo() {{
                                        accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                            acceleratorCount = 447340;
                                            acceleratorType = "excepturi";
                                        }};
                                    }}),
                                }};
                                vmFamily = AllocationAggregateReservationVmFamilyEnum.VM_FAMILY_GENERAL_PURPOSE_T2_D;
                            }};
                            commitment = "non";
                            creationTimestamp = "sunt";
                            description = "quis";
                            id = "maiores";
                            kind = "omnis";
                            name = "Holly Funk";
                            resourcePolicies = new java.util.HashMap<String, String>() {{
                                put("iusto", "amet");
                                put("nostrum", "labore");
                            }};
                            resourceStatus = new AllocationResourceStatus() {{
                                specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                                    sourceInstanceTemplateId = "cumque";
                                }};
                            }};
                            satisfiesPzs = false;
                            selfLink = "repellat";
                            selfLinkWithId = "a";
                            shareSettings = new ShareSettings() {{
                                folderMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsFolderConfig>() {{
                                    put("dolor", new ShareSettingsFolderConfig() {{
                                        folderId = "sit";
                                    }});
                                    put("aperiam", new ShareSettingsFolderConfig() {{
                                        folderId = "quaerat";
                                    }});
                                    put("excepturi", new ShareSettingsFolderConfig() {{
                                        folderId = "rerum";
                                    }});
                                    put("officia", new ShareSettingsFolderConfig() {{
                                        folderId = "magni";
                                    }});
                                }};
                                projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                                    put("vitae", new ShareSettingsProjectConfig() {{
                                        projectId = "saepe";
                                    }});
                                    put("deserunt", new ShareSettingsProjectConfig() {{
                                        projectId = "aut";
                                    }});
                                    put("soluta", new ShareSettingsProjectConfig() {{
                                        projectId = "eos";
                                    }});
                                    put("consequuntur", new ShareSettingsProjectConfig() {{
                                        projectId = "minima";
                                    }});
                                }};
                                projects = new String[]{{
                                    add("quaerat"),
                                    add("saepe"),
                                    add("dignissimos"),
                                    add("blanditiis"),
                                }};
                                shareType = ShareSettingsShareTypeEnum.DIRECT_PROJECTS_UNDER_SPECIFIC_FOLDERS;
                            }};
                            specificReservation = new AllocationSpecificSKUReservation() {{
                                assuredCount = "corrupti";
                                count = "illum";
                                inUseCount = "sunt";
                                instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 436194;
                                            acceleratorType = "maiores";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 480921;
                                            acceleratorType = "error";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 461709;
                                            acceleratorType = "ea";
                                        }}),
                                    }};
                                    localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "veniam";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "pariatur";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVDIMM;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "vero";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVDIMM;
                                        }}),
                                    }};
                                    locationHint = "velit";
                                    machineType = "rerum";
                                    maintenanceFreezeDurationHours = 490352;
                                    maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum.AS_NEEDED;
                                    minCpuPlatform = "eum";
                                }};
                                sourceInstanceTemplate = "doloremque";
                            }};
                            specificReservationRequired = false;
                            status = ReservationStatusEnum.UPDATING;
                            zone = "tenetur";
                        }}),
                        add(new Reservation() {{
                            aggregateReservation = new AllocationAggregateReservation() {{
                                inUseResources = new org.openapis.openapi.models.shared.AllocationAggregateReservationReservedResourceInfo[]{{
                                    add(new AllocationAggregateReservationReservedResourceInfo() {{
                                        accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                            acceleratorCount = 935232;
                                            acceleratorType = "sed";
                                        }};
                                    }}),
                                }};
                                reservedResources = new org.openapis.openapi.models.shared.AllocationAggregateReservationReservedResourceInfo[]{{
                                    add(new AllocationAggregateReservationReservedResourceInfo() {{
                                        accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                            acceleratorCount = 449166;
                                            acceleratorType = "adipisci";
                                        }};
                                    }}),
                                    add(new AllocationAggregateReservationReservedResourceInfo() {{
                                        accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                            acceleratorCount = 453126;
                                            acceleratorType = "explicabo";
                                        }};
                                    }}),
                                }};
                                vmFamily = AllocationAggregateReservationVmFamilyEnum.VM_FAMILY_COMPUTE_OPTIMIZED_C3;
                            }};
                            commitment = "at";
                            creationTimestamp = "placeat";
                            description = "reprehenderit";
                            id = "possimus";
                            kind = "in";
                            name = "Darrel Wilderman III";
                            resourcePolicies = new java.util.HashMap<String, String>() {{
                                put("tempora", "sed");
                                put("nihil", "nam");
                                put("accusamus", "in");
                                put("eveniet", "rem");
                            }};
                            resourceStatus = new AllocationResourceStatus() {{
                                specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                                    sourceInstanceTemplateId = "aliquid";
                                }};
                            }};
                            satisfiesPzs = false;
                            selfLink = "suscipit";
                            selfLinkWithId = "quidem";
                            shareSettings = new ShareSettings() {{
                                folderMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsFolderConfig>() {{
                                    put("cum", new ShareSettingsFolderConfig() {{
                                        folderId = "unde";
                                    }});
                                    put("at", new ShareSettingsFolderConfig() {{
                                        folderId = "perspiciatis";
                                    }});
                                }};
                                projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                                    put("expedita", new ShareSettingsProjectConfig() {{
                                        projectId = "qui";
                                    }});
                                }};
                                projects = new String[]{{
                                    add("officia"),
                                    add("voluptatem"),
                                    add("vero"),
                                }};
                                shareType = ShareSettingsShareTypeEnum.ORGANIZATION;
                            }};
                            specificReservation = new AllocationSpecificSKUReservation() {{
                                assuredCount = "dolor";
                                count = "est";
                                inUseCount = "facere";
                                instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 8298;
                                            acceleratorType = "officiis";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 25482;
                                            acceleratorType = "minima";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 531031;
                                            acceleratorType = "nisi";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 287665;
                                            acceleratorType = "quasi";
                                        }}),
                                    }};
                                    localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "reprehenderit";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "voluptates";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "dolore";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                    }};
                                    locationHint = "adipisci";
                                    machineType = "saepe";
                                    maintenanceFreezeDurationHours = 165145;
                                    maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum.RECURRENT;
                                    minCpuPlatform = "occaecati";
                                }};
                                sourceInstanceTemplate = "assumenda";
                            }};
                            specificReservationRequired = false;
                            status = ReservationStatusEnum.INVALID;
                            zone = "maiores";
                        }}),
                    }};
                    resources = new org.openapis.openapi.models.shared.ResourceCommitment[]{{
                        add(new ResourceCommitment() {{
                            acceleratorType = "tempore";
                            amount = "modi";
                            type = ResourceCommitmentTypeEnum.ACCELERATOR;
                        }}),
                        add(new ResourceCommitment() {{
                            acceleratorType = "voluptatibus";
                            amount = "illo";
                            type = ResourceCommitmentTypeEnum.ACCELERATOR;
                        }}),
                    }};
                    selfLink = "quaerat";
                    selfLinkWithId = "incidunt";
                    splitSourceCommitment = "fugiat";
                    startTimestamp = "enim";
                    status = CommitmentStatusEnum.EXPIRED;
                    statusMessage = "autem";
                    type = CommitmentTypeEnum.GENERAL_PURPOSE_N2;
                }};;
                accessToken = "eos";
                alt = AltEnum.JSON;
                callback = "sed";
                fields = "dolores";
                key = "velit";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "rem";
                requestId = "harum";
                uploadType = "cumque";
                uploadProtocol = "iure";
                userIp = "incidunt";
            }};            

            ComputeRegionCommitmentsInsertResponse res = sdk.regionCommitments.computeRegionCommitmentsInsert(req, new ComputeRegionCommitmentsInsertSecurity() {{
                option1 = new ComputeRegionCommitmentsInsertSecurityOption1("accusantium", "quisquam") {{
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

            ComputeRegionCommitmentsListRequest req = new ComputeRegionCommitmentsListRequest("distinctio", "ab") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consectetur";
                alt = AltEnum.MEDIA;
                callback = "autem";
                fields = "consequuntur";
                filter = "nostrum";
                key = "soluta";
                maxResults = 277070L;
                oauthToken = "soluta";
                orderBy = "ipsam";
                pageToken = "consequatur";
                prettyPrint = false;
                quotaUser = "assumenda";
                returnPartialSuccess = false;
                uploadType = "illum";
                uploadProtocol = "qui";
                userIp = "ut";
            }};            

            ComputeRegionCommitmentsListResponse res = sdk.regionCommitments.computeRegionCommitmentsList(req, new ComputeRegionCommitmentsListSecurity() {{
                option1 = new ComputeRegionCommitmentsListSecurityOption1("iure", "debitis") {{
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

            ComputeRegionCommitmentsTestIamPermissionsRequest req = new ComputeRegionCommitmentsTestIamPermissionsRequest("deserunt", "veniam", "commodi") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("sed"),
                        add("architecto"),
                        add("cupiditate"),
                        add("ea"),
                    }};
                }};;
                accessToken = "assumenda";
                alt = AltEnum.PROTO;
                callback = "ducimus";
                fields = "quam";
                key = "dolorum";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "ab";
                uploadProtocol = "architecto";
                userIp = "tempore";
            }};            

            ComputeRegionCommitmentsTestIamPermissionsResponse res = sdk.regionCommitments.computeRegionCommitmentsTestIamPermissions(req, new ComputeRegionCommitmentsTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionCommitmentsTestIamPermissionsSecurityOption1("quasi", "incidunt") {{
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
import org.openapis.openapi.models.shared.ShareSettingsFolderConfig;
import org.openapis.openapi.models.shared.ShareSettingsProjectConfig;
import org.openapis.openapi.models.shared.ShareSettingsShareTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionCommitmentsUpdateRequest req = new ComputeRegionCommitmentsUpdateRequest("sit", "inventore", "debitis") {{
                dollarXgafv = XgafvEnum.TWO;
                commitment1 = new Commitment() {{
                    autoRenew = false;
                    category = CommitmentCategoryEnum.LICENSE;
                    creationTimestamp = "maxime";
                    description = "odio";
                    endTimestamp = "explicabo";
                    id = "non";
                    kind = "ab";
                    licenseResource = new LicenseResourceCommitment() {{
                        amount = "id";
                        coresPerLicense = "itaque";
                        license = "mollitia";
                    }};;
                    mergeSourceCommitments = new String[]{{
                        add("eius"),
                        add("dolorem"),
                    }};
                    name = "Lucia Johnson";
                    plan = CommitmentPlanEnum.INVALID;
                    region = "magnam";
                    reservations = new org.openapis.openapi.models.shared.Reservation[]{{
                        add(new Reservation() {{
                            aggregateReservation = new AllocationAggregateReservation() {{
                                inUseResources = new org.openapis.openapi.models.shared.AllocationAggregateReservationReservedResourceInfo[]{{
                                    add(new AllocationAggregateReservationReservedResourceInfo() {{
                                        accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                            acceleratorCount = 125553;
                                            acceleratorType = "doloremque";
                                        }};
                                    }}),
                                }};
                                reservedResources = new org.openapis.openapi.models.shared.AllocationAggregateReservationReservedResourceInfo[]{{
                                    add(new AllocationAggregateReservationReservedResourceInfo() {{
                                        accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                            acceleratorCount = 846818;
                                            acceleratorType = "impedit";
                                        }};
                                    }}),
                                    add(new AllocationAggregateReservationReservedResourceInfo() {{
                                        accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                            acceleratorCount = 234746;
                                            acceleratorType = "exercitationem";
                                        }};
                                    }}),
                                }};
                                vmFamily = AllocationAggregateReservationVmFamilyEnum.VM_FAMILY_CLOUD_TPU_POD_SLICE_CT4_P;
                            }};
                            commitment = "non";
                            creationTimestamp = "aspernatur";
                            description = "porro";
                            id = "reprehenderit";
                            kind = "suscipit";
                            name = "Scott Stroman";
                            resourcePolicies = new java.util.HashMap<String, String>() {{
                                put("quo", "doloribus");
                                put("odit", "occaecati");
                                put("illum", "aliquid");
                                put("velit", "molestias");
                            }};
                            resourceStatus = new AllocationResourceStatus() {{
                                specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                                    sourceInstanceTemplateId = "magni";
                                }};
                            }};
                            satisfiesPzs = false;
                            selfLink = "suscipit";
                            selfLinkWithId = "autem";
                            shareSettings = new ShareSettings() {{
                                folderMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsFolderConfig>() {{
                                    put("eveniet", new ShareSettingsFolderConfig() {{
                                        folderId = "tempore";
                                    }});
                                    put("corporis", new ShareSettingsFolderConfig() {{
                                        folderId = "dolorem";
                                    }});
                                }};
                                projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                                    put("dicta", new ShareSettingsProjectConfig() {{
                                        projectId = "amet";
                                    }});
                                    put("possimus", new ShareSettingsProjectConfig() {{
                                        projectId = "distinctio";
                                    }});
                                    put("eaque", new ShareSettingsProjectConfig() {{
                                        projectId = "porro";
                                    }});
                                }};
                                projects = new String[]{{
                                    add("quo"),
                                }};
                                shareType = ShareSettingsShareTypeEnum.ORGANIZATION;
                            }};
                            specificReservation = new AllocationSpecificSKUReservation() {{
                                assuredCount = "natus";
                                count = "repellat";
                                inUseCount = "hic";
                                instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 370039;
                                            acceleratorType = "suscipit";
                                        }}),
                                    }};
                                    localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "quasi";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVDIMM;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "reprehenderit";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "nostrum";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVDIMM;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "similique";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                    }};
                                    locationHint = "a";
                                    machineType = "id";
                                    maintenanceFreezeDurationHours = 197189;
                                    maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum.PERIODIC;
                                    minCpuPlatform = "dolorum";
                                }};
                                sourceInstanceTemplate = "culpa";
                            }};
                            specificReservationRequired = false;
                            status = ReservationStatusEnum.UPDATING;
                            zone = "reprehenderit";
                        }}),
                    }};
                    resources = new org.openapis.openapi.models.shared.ResourceCommitment[]{{
                        add(new ResourceCommitment() {{
                            acceleratorType = "cumque";
                            amount = "pariatur";
                            type = ResourceCommitmentTypeEnum.UNSPECIFIED;
                        }}),
                        add(new ResourceCommitment() {{
                            acceleratorType = "autem";
                            amount = "expedita";
                            type = ResourceCommitmentTypeEnum.VCPU;
                        }}),
                        add(new ResourceCommitment() {{
                            acceleratorType = "libero";
                            amount = "consectetur";
                            type = ResourceCommitmentTypeEnum.UNSPECIFIED;
                        }}),
                        add(new ResourceCommitment() {{
                            acceleratorType = "eos";
                            amount = "quasi";
                            type = ResourceCommitmentTypeEnum.VCPU;
                        }}),
                    }};
                    selfLink = "facilis";
                    selfLinkWithId = "quis";
                    splitSourceCommitment = "natus";
                    startTimestamp = "totam";
                    status = CommitmentStatusEnum.ACTIVE;
                    statusMessage = "libero";
                    type = CommitmentTypeEnum.GRAPHICS_OPTIMIZED;
                }};;
                accessToken = "repellat";
                alt = AltEnum.PROTO;
                callback = "magni";
                fields = "voluptates";
                key = "quo";
                oauthToken = "nemo";
                paths = new String[]{{
                    add("magnam"),
                    add("ipsam"),
                }};
                prettyPrint = false;
                quotaUser = "id";
                requestId = "quos";
                updateMask = "eos";
                uploadType = "architecto";
                uploadProtocol = "asperiores";
                userIp = "saepe";
            }};            

            ComputeRegionCommitmentsUpdateResponse res = sdk.regionCommitments.computeRegionCommitmentsUpdate(req, new ComputeRegionCommitmentsUpdateSecurity() {{
                option1 = new ComputeRegionCommitmentsUpdateSecurityOption1("maiores", "molestiae") {{
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
import org.openapis.openapi.models.shared.RegionCommitmentsUpdateReservationsRequest;
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

            ComputeRegionCommitmentsUpdateReservationsRequest req = new ComputeRegionCommitmentsUpdateReservationsRequest("distinctio", "nihil", "quia") {{
                dollarXgafv = XgafvEnum.ONE;
                regionCommitmentsUpdateReservationsRequest = new RegionCommitmentsUpdateReservationsRequest() {{
                    reservations = new org.openapis.openapi.models.shared.Reservation[]{{
                        add(new Reservation() {{
                            aggregateReservation = new AllocationAggregateReservation() {{
                                inUseResources = new org.openapis.openapi.models.shared.AllocationAggregateReservationReservedResourceInfo[]{{
                                    add(new AllocationAggregateReservationReservedResourceInfo() {{
                                        accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                            acceleratorCount = 916662;
                                            acceleratorType = "dolores";
                                        }};
                                    }}),
                                }};
                                reservedResources = new org.openapis.openapi.models.shared.AllocationAggregateReservationReservedResourceInfo[]{{
                                    add(new AllocationAggregateReservationReservedResourceInfo() {{
                                        accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                            acceleratorCount = 278577;
                                            acceleratorType = "vitae";
                                        }};
                                    }}),
                                    add(new AllocationAggregateReservationReservedResourceInfo() {{
                                        accelerator = new AllocationAggregateReservationReservedResourceInfoAccelerator() {{
                                            acceleratorCount = 587710;
                                            acceleratorType = "corporis";
                                        }};
                                    }}),
                                }};
                                vmFamily = AllocationAggregateReservationVmFamilyEnum.VM_FAMILY_MEMORY_OPTIMIZED_M3;
                            }};
                            commitment = "porro";
                            creationTimestamp = "nemo";
                            description = "cumque";
                            id = "illum";
                            kind = "officiis";
                            name = "Rochelle Rutherford";
                            resourcePolicies = new java.util.HashMap<String, String>() {{
                                put("est", "dicta");
                                put("reprehenderit", "pariatur");
                                put("nemo", "ullam");
                            }};
                            resourceStatus = new AllocationResourceStatus() {{
                                specificSkuAllocation = new AllocationResourceStatusSpecificSKUAllocation() {{
                                    sourceInstanceTemplateId = "necessitatibus";
                                }};
                            }};
                            satisfiesPzs = false;
                            selfLink = "aut";
                            selfLinkWithId = "unde";
                            shareSettings = new ShareSettings() {{
                                folderMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsFolderConfig>() {{
                                    put("beatae", new ShareSettingsFolderConfig() {{
                                        folderId = "consectetur";
                                    }});
                                }};
                                projectMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.ShareSettingsProjectConfig>() {{
                                    put("dolores", new ShareSettingsProjectConfig() {{
                                        projectId = "dicta";
                                    }});
                                }};
                                projects = new String[]{{
                                    add("ratione"),
                                    add("optio"),
                                    add("neque"),
                                }};
                                shareType = ShareSettingsShareTypeEnum.SHARE_TYPE_UNSPECIFIED;
                            }};
                            specificReservation = new AllocationSpecificSKUReservation() {{
                                assuredCount = "sapiente";
                                count = "at";
                                inUseCount = "explicabo";
                                instanceProperties = new AllocationSpecificSKUAllocationReservedInstanceProperties() {{
                                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = 714165;
                                            acceleratorType = "modi";
                                        }}),
                                    }};
                                    localSsds = new org.openapis.openapi.models.shared.AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[]{{
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "saepe";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "odio";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "ipsam";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.SCSI;
                                        }}),
                                        add(new AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk() {{
                                            diskSizeGb = "quibusdam";
                                            interface_ = AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDiskInterfaceEnum.NVME;
                                        }}),
                                    }};
                                    locationHint = "quae";
                                    machineType = "cumque";
                                    maintenanceFreezeDurationHours = 837761;
                                    maintenanceInterval = AllocationSpecificSKUAllocationReservedInstancePropertiesMaintenanceIntervalEnum.AS_NEEDED;
                                    minCpuPlatform = "temporibus";
                                }};
                                sourceInstanceTemplate = "consequuntur";
                            }};
                            specificReservationRequired = false;
                            status = ReservationStatusEnum.DELETING;
                            zone = "similique";
                        }}),
                    }};
                }};;
                accessToken = "nisi";
                alt = AltEnum.JSON;
                callback = "inventore";
                fields = "labore";
                key = "vel";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "atque";
                requestId = "nostrum";
                uploadType = "magni";
                uploadProtocol = "ut";
                userIp = "velit";
            }};            

            ComputeRegionCommitmentsUpdateReservationsResponse res = sdk.regionCommitments.computeRegionCommitmentsUpdateReservations(req, new ComputeRegionCommitmentsUpdateReservationsSecurity() {{
                option1 = new ComputeRegionCommitmentsUpdateReservationsSecurityOption1("eum", "exercitationem") {{
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
