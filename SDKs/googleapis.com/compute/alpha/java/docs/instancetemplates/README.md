# instanceTemplates

### Available Operations

* [computeInstanceTemplatesAggregatedList](#computeinstancetemplatesaggregatedlist) - Retrieves the list of all InstanceTemplates resources, regional and global, available to the specified project.
* [computeInstanceTemplatesDelete](#computeinstancetemplatesdelete) - Deletes the specified instance template. Deleting an instance template is permanent and cannot be undone. It is not possible to delete templates that are already in use by a managed instance group.
* [computeInstanceTemplatesGet](#computeinstancetemplatesget) - Returns the specified instance template.
* [computeInstanceTemplatesGetIamPolicy](#computeinstancetemplatesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeInstanceTemplatesInsert](#computeinstancetemplatesinsert) - Creates an instance template in the specified project using the data that is included in the request. If you are creating a new template to update an existing instance group, your new instance template must use the same network or, if applicable, the same subnetwork as the original template.
* [computeInstanceTemplatesList](#computeinstancetemplateslist) - Retrieves a list of instance templates that are contained within the specified project.
* [computeInstanceTemplatesSetIamPolicy](#computeinstancetemplatessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeInstanceTemplatesTestIamPermissions](#computeinstancetemplatestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeInstanceTemplatesAggregatedList

Retrieves the list of all InstanceTemplates resources, regional and global, available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceTemplatesAggregatedListRequest req = new ComputeInstanceTemplatesAggregatedListRequest("harum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "alias";
                alt = AltEnum.MEDIA;
                callback = "placeat";
                fields = "dolore";
                filter = "repudiandae";
                includeAllScopes = false;
                key = "consectetur";
                maxResults = 19398L;
                oauthToken = "aliquam";
                orderBy = "perspiciatis";
                pageToken = "quae";
                prettyPrint = false;
                quotaUser = "dolorum";
                returnPartialSuccess = false;
                uploadType = "fuga";
                uploadProtocol = "sequi";
                userIp = "ullam";
            }};            

            ComputeInstanceTemplatesAggregatedListResponse res = sdk.instanceTemplates.computeInstanceTemplatesAggregatedList(req, new ComputeInstanceTemplatesAggregatedListSecurity() {{
                option1 = new ComputeInstanceTemplatesAggregatedListSecurityOption1("temporibus", "aliquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instanceTemplateAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstanceTemplatesDelete

Deletes the specified instance template. Deleting an instance template is permanent and cannot be undone. It is not possible to delete templates that are already in use by a managed instance group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceTemplatesDeleteRequest req = new ComputeInstanceTemplatesDeleteRequest("error", "deleniti") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "natus";
                alt = AltEnum.PROTO;
                callback = "consequatur";
                fields = "ipsum";
                key = "quidem";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "quidem";
                requestId = "molestiae";
                uploadType = "reprehenderit";
                uploadProtocol = "nam";
                userIp = "occaecati";
            }};            

            ComputeInstanceTemplatesDeleteResponse res = sdk.instanceTemplates.computeInstanceTemplatesDelete(req, new ComputeInstanceTemplatesDeleteSecurity() {{
                option1 = new ComputeInstanceTemplatesDeleteSecurityOption1("quasi", "blanditiis") {{
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

## computeInstanceTemplatesGet

Returns the specified instance template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesGetRequest;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesGetResponse;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesGetSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceTemplatesGetRequest req = new ComputeInstanceTemplatesGetRequest("a", "aut") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dicta";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "quos";
                key = "ut";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "sit";
                uploadType = "reprehenderit";
                uploadProtocol = "officiis";
                userIp = "accusantium";
            }};            

            ComputeInstanceTemplatesGetResponse res = sdk.instanceTemplates.computeInstanceTemplatesGet(req, new ComputeInstanceTemplatesGetSecurity() {{
                option1 = new ComputeInstanceTemplatesGetSecurityOption1("voluptates", "consectetur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instanceTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstanceTemplatesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceTemplatesGetIamPolicyRequest req = new ComputeInstanceTemplatesGetIamPolicyRequest("occaecati", "impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "saepe";
                alt = AltEnum.JSON;
                callback = "consectetur";
                fields = "itaque";
                key = "impedit";
                oauthToken = "quidem";
                optionsRequestedPolicyVersion = 28946L;
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "aperiam";
                uploadProtocol = "numquam";
                userIp = "nisi";
            }};            

            ComputeInstanceTemplatesGetIamPolicyResponse res = sdk.instanceTemplates.computeInstanceTemplatesGetIamPolicy(req, new ComputeInstanceTemplatesGetIamPolicySecurity() {{
                option1 = new ComputeInstanceTemplatesGetIamPolicySecurityOption1("voluptas", "fugit") {{
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

## computeInstanceTemplatesInsert

Creates an instance template in the specified project using the data that is included in the request. If you are creating a new template to update an existing instance group, your new instance template must use the same network or, if applicable, the same subnetwork as the original template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesInsertRequest;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesInsertResponse;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AccessConfig;
import org.openapis.openapi.models.shared.AccessConfigNetworkTierEnum;
import org.openapis.openapi.models.shared.AccessConfigTypeEnum;
import org.openapis.openapi.models.shared.AdvancedMachineFeatures;
import org.openapis.openapi.models.shared.AdvancedMachineFeaturesPerformanceMonitoringUnitEnum;
import org.openapis.openapi.models.shared.AliasIpRange;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AttachedDisk;
import org.openapis.openapi.models.shared.AttachedDiskArchitectureEnum;
import org.openapis.openapi.models.shared.AttachedDiskInitializeParams;
import org.openapis.openapi.models.shared.AttachedDiskInitializeParamsArchitectureEnum;
import org.openapis.openapi.models.shared.AttachedDiskInitializeParamsInterfaceEnum;
import org.openapis.openapi.models.shared.AttachedDiskInitializeParamsOnUpdateActionEnum;
import org.openapis.openapi.models.shared.AttachedDiskInterfaceEnum;
import org.openapis.openapi.models.shared.AttachedDiskModeEnum;
import org.openapis.openapi.models.shared.AttachedDiskSavedStateEnum;
import org.openapis.openapi.models.shared.AttachedDiskTypeEnum;
import org.openapis.openapi.models.shared.ConfidentialInstanceConfig;
import org.openapis.openapi.models.shared.ConfidentialInstanceConfigConfidentialInstanceTypeEnum;
import org.openapis.openapi.models.shared.CustomerEncryptionKey;
import org.openapis.openapi.models.shared.DiskInstantiationConfig;
import org.openapis.openapi.models.shared.DiskInstantiationConfigInstantiateFromEnum;
import org.openapis.openapi.models.shared.DisplayDevice;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.FileContentBuffer;
import org.openapis.openapi.models.shared.FileContentBufferFileTypeEnum;
import org.openapis.openapi.models.shared.GuestOsFeature;
import org.openapis.openapi.models.shared.GuestOsFeatureTypeEnum;
import org.openapis.openapi.models.shared.InitialStateConfig;
import org.openapis.openapi.models.shared.InstanceProperties;
import org.openapis.openapi.models.shared.InstancePropertiesKeyRevocationActionTypeEnum;
import org.openapis.openapi.models.shared.InstancePropertiesPostKeyRevocationActionTypeEnum;
import org.openapis.openapi.models.shared.InstancePropertiesPrivateIpv6GoogleAccessEnum;
import org.openapis.openapi.models.shared.InstanceTemplate;
import org.openapis.openapi.models.shared.Metadata;
import org.openapis.openapi.models.shared.MetadataItems;
import org.openapis.openapi.models.shared.NetworkInterface;
import org.openapis.openapi.models.shared.NetworkInterfaceIpv6AccessTypeEnum;
import org.openapis.openapi.models.shared.NetworkInterfaceNicTypeEnum;
import org.openapis.openapi.models.shared.NetworkInterfaceStackTypeEnum;
import org.openapis.openapi.models.shared.NetworkInterfaceSubInterface;
import org.openapis.openapi.models.shared.NetworkInterfaceSubInterfaceIpAllocationModeEnum;
import org.openapis.openapi.models.shared.NetworkPerformanceConfig;
import org.openapis.openapi.models.shared.NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum;
import org.openapis.openapi.models.shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
import org.openapis.openapi.models.shared.ReservationAffinity;
import org.openapis.openapi.models.shared.ReservationAffinityConsumeReservationTypeEnum;
import org.openapis.openapi.models.shared.Scheduling;
import org.openapis.openapi.models.shared.SchedulingInstanceTerminationActionEnum;
import org.openapis.openapi.models.shared.SchedulingMaintenanceIntervalEnum;
import org.openapis.openapi.models.shared.SchedulingNodeAffinity;
import org.openapis.openapi.models.shared.SchedulingNodeAffinityOperatorEnum;
import org.openapis.openapi.models.shared.SchedulingOnHostMaintenanceEnum;
import org.openapis.openapi.models.shared.SchedulingProvisioningModelEnum;
import org.openapis.openapi.models.shared.ServiceAccount;
import org.openapis.openapi.models.shared.ServiceIntegrationSpec;
import org.openapis.openapi.models.shared.ServiceIntegrationSpecBackupDRSpec;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.ShieldedVmConfig;
import org.openapis.openapi.models.shared.SourceInstanceParams;
import org.openapis.openapi.models.shared.Tags;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceTemplatesInsertRequest req = new ComputeInstanceTemplatesInsertRequest("recusandae") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceTemplate = new InstanceTemplate() {{
                    creationTimestamp = "ipsum";
                    description = "similique";
                    id = "dolor";
                    kind = "nulla";
                    name = "Angelica Hodkiewicz";
                    properties = new InstanceProperties() {{
                        advancedMachineFeatures = new AdvancedMachineFeatures() {{
                            enableNestedVirtualization = false;
                            enableUefiNetworking = false;
                            numaNodeCount = 875216;
                            performanceMonitoringUnit = AdvancedMachineFeaturesPerformanceMonitoringUnitEnum.PERFORMANCE_MONITORING_UNIT_UNSPECIFIED;
                            threadsPerCore = 841346;
                            visibleCoreCount = 893605;
                        }};;
                        canIpForward = false;
                        confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                            confidentialInstanceType = ConfidentialInstanceConfigConfidentialInstanceTypeEnum.SEV_SNP;
                            enableConfidentialCompute = false;
                        }};;
                        description = "earum";
                        disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.X8664;
                                autoDelete = false;
                                boot = false;
                                deviceName = "ipsa";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "consequatur";
                                    kmsKeyServiceAccount = "sed";
                                    rawKey = "fugiat";
                                    rsaEncryptedKey = "veritatis";
                                    sha256 = "occaecati";
                                }};
                                diskSizeGb = "rem";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.TDX_CAPABLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                                    }}),
                                }};
                                index = 618782;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARM64;
                                    description = "at";
                                    diskName = "neque";
                                    diskSizeGb = "animi";
                                    diskType = "veritatis";
                                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.GVNIC;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.GVNIC;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.GVNIC;
                                        }}),
                                    }};
                                    interface_ = AttachedDiskInitializeParamsInterfaceEnum.SCSI;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("ut", "ullam");
                                        put("rem", "ipsum");
                                        put("voluptate", "eveniet");
                                        put("atque", "reiciendis");
                                    }};
                                    licenseCodes = new String[]{{
                                        add("officia"),
                                    }};
                                    licenses = new String[]{{
                                        add("laboriosam"),
                                        add("tempore"),
                                        add("harum"),
                                        add("inventore"),
                                    }};
                                    multiWriter = false;
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK;
                                    provisionedIops = "debitis";
                                    provisionedThroughput = "fugit";
                                    replicaZones = new String[]{{
                                        add("ipsam"),
                                        add("reiciendis"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("cumque", "aliquam");
                                        put("corrupti", "ipsa");
                                        put("assumenda", "voluptas");
                                        put("necessitatibus", "adipisci");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("ipsa"),
                                    }};
                                    sourceImage = "totam";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "aliquid";
                                        kmsKeyServiceAccount = "dignissimos";
                                        rawKey = "exercitationem";
                                        rsaEncryptedKey = "quod";
                                        sha256 = "tempore";
                                    }};
                                    sourceInstantSnapshot = "sapiente";
                                    sourceSnapshot = "quae";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "blanditiis";
                                        kmsKeyServiceAccount = "voluptas";
                                        rawKey = "molestias";
                                        rsaEncryptedKey = "nostrum";
                                        sha256 = "vel";
                                    }};
                                    storagePool = "deserunt";
                                }};
                                interface_ = AttachedDiskInterfaceEnum.NVME;
                                kind = "officiis";
                                licenses = new String[]{{
                                    add("fugit"),
                                    add("eligendi"),
                                    add("facere"),
                                }};
                                locked = false;
                                mode = AttachedDiskModeEnum.READ_WRITE;
                                savedState = AttachedDiskSavedStateEnum.PRESERVED;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "voluptatem";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "cumque";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "deleniti";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "quod";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "vel";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "sapiente";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "ratione";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "quis";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "totam";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "distinctio";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "est";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }};
                                }};
                                source = "possimus";
                                type = AttachedDiskTypeEnum.PERSISTENT;
                                userLicenses = new String[]{{
                                    add("eius"),
                                    add("voluptates"),
                                }};
                            }}),
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                autoDelete = false;
                                boot = false;
                                deviceName = "beatae";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "necessitatibus";
                                    kmsKeyServiceAccount = "ratione";
                                    rawKey = "porro";
                                    rsaEncryptedKey = "fuga";
                                    sha256 = "corrupti";
                                }};
                                diskSizeGb = "numquam";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                    }}),
                                }};
                                index = 331099;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                    description = "neque";
                                    diskName = "asperiores";
                                    diskSizeGb = "autem";
                                    diskType = "nulla";
                                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.GVNIC;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                                        }}),
                                    }};
                                    interface_ = AttachedDiskInitializeParamsInterfaceEnum.UNSPECIFIED;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("molestiae", "quod");
                                    }};
                                    licenseCodes = new String[]{{
                                        add("eaque"),
                                    }};
                                    licenses = new String[]{{
                                        add("occaecati"),
                                        add("voluptatem"),
                                        add("iure"),
                                    }};
                                    multiWriter = false;
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK_IF_SOURCE_CHANGED;
                                    provisionedIops = "nobis";
                                    provisionedThroughput = "quae";
                                    replicaZones = new String[]{{
                                        add("rerum"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("deleniti", "molestiae");
                                        put("iste", "sed");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("commodi"),
                                    }};
                                    sourceImage = "amet";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "eveniet";
                                        kmsKeyServiceAccount = "autem";
                                        rawKey = "nihil";
                                        rsaEncryptedKey = "repellendus";
                                        sha256 = "non";
                                    }};
                                    sourceInstantSnapshot = "rem";
                                    sourceSnapshot = "voluptatum";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "vel";
                                        kmsKeyServiceAccount = "quae";
                                        rawKey = "quis";
                                        rsaEncryptedKey = "dolore";
                                        sha256 = "consectetur";
                                    }};
                                    storagePool = "porro";
                                }};
                                interface_ = AttachedDiskInterfaceEnum.NVDIMM;
                                kind = "officia";
                                licenses = new String[]{{
                                    add("sit"),
                                }};
                                locked = false;
                                mode = AttachedDiskModeEnum.READ_ONLY;
                                savedState = AttachedDiskSavedStateEnum.PRESERVED;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "ipsum";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "voluptatibus";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "porro";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "explicabo";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "necessitatibus";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "libero";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "facilis";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "quibusdam";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }};
                                }};
                                source = "alias";
                                type = AttachedDiskTypeEnum.SCRATCH;
                                userLicenses = new String[]{{
                                    add("nihil"),
                                }};
                            }}),
                        }};
                        displayDevice = new DisplayDevice() {{
                            enableDisplay = false;
                        }};;
                        guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 243727;
                                acceleratorType = "doloribus";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 857388;
                                acceleratorType = "ex";
                            }}),
                        }};
                        keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum.STOP;
                        labels = new java.util.HashMap<String, String>() {{
                            put("animi", "sunt");
                        }};
                        machineType = "voluptatem";
                        metadata = new Metadata() {{
                            fingerprint = "saepe";
                            items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                                add(new MetadataItems() {{
                                    key = "placeat";
                                    value = "odit";
                                }}),
                                add(new MetadataItems() {{
                                    key = "natus";
                                    value = "quam";
                                }}),
                            }};
                            kind = "atque";
                        }};;
                        minCpuPlatform = "saepe";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "enim";
                                        externalIpv6PrefixLength = 413095;
                                        kind = "officia";
                                        name = "Bridget Bartell";
                                        natIP = "magni";
                                        networkTier = AccessConfigNetworkTierEnum.SELECT;
                                        publicDnsName = "doloribus";
                                        publicPtrDomainName = "quod";
                                        securityPolicy = "placeat";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "natus";
                                        subnetworkRangeName = "natus";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "nisi";
                                        subnetworkRangeName = "optio";
                                    }}),
                                }};
                                fingerprint = "sint";
                                internalIpv6PrefixLength = 458585;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "cum";
                                        externalIpv6PrefixLength = 746540;
                                        kind = "impedit";
                                        name = "Joy Will";
                                        natIP = "perspiciatis";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "quos";
                                        publicPtrDomainName = "est";
                                        securityPolicy = "blanditiis";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "ipsa";
                                        externalIpv6PrefixLength = 52016;
                                        kind = "quo";
                                        name = "Leah Stanton";
                                        natIP = "facere";
                                        networkTier = AccessConfigNetworkTierEnum.SELECT;
                                        publicDnsName = "sequi";
                                        publicPtrDomainName = "voluptates";
                                        securityPolicy = "tempora";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                                ipv6Address = "exercitationem";
                                kind = "laboriosam";
                                name = "Jay Kassulke";
                                network = "odio";
                                networkAttachment = "omnis";
                                networkIP = "quo";
                                nicType = NetworkInterfaceNicTypeEnum.VIRTIO_NET;
                                parentNicName = "maxime";
                                queueCount = 384541;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "officiis";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                                        subnetwork = "eaque";
                                        vlan = 222984;
                                    }}),
                                }};
                                subnetwork = "maiores";
                                vlan = 340416;
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "praesentium";
                                        externalIpv6PrefixLength = 192982;
                                        kind = "illo";
                                        name = "Henry Shanahan";
                                        natIP = "at";
                                        networkTier = AccessConfigNetworkTierEnum.SELECT;
                                        publicDnsName = "quam";
                                        publicPtrDomainName = "nobis";
                                        securityPolicy = "qui";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "recusandae";
                                        externalIpv6PrefixLength = 539450;
                                        kind = "deserunt";
                                        name = "Shannon Ritchie";
                                        natIP = "laudantium";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicDnsName = "necessitatibus";
                                        publicPtrDomainName = "consequuntur";
                                        securityPolicy = "aliquam";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "magnam";
                                        subnetworkRangeName = "dolorem";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "quidem";
                                        subnetworkRangeName = "consequuntur";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "ratione";
                                        subnetworkRangeName = "ut";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "explicabo";
                                        subnetworkRangeName = "dolore";
                                    }}),
                                }};
                                fingerprint = "inventore";
                                internalIpv6PrefixLength = 472574;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "vitae";
                                        externalIpv6PrefixLength = 241190;
                                        kind = "debitis";
                                        name = "Miss Jeannie Hudson";
                                        natIP = "cupiditate";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicDnsName = "recusandae";
                                        publicPtrDomainName = "labore";
                                        securityPolicy = "fuga";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "molestias";
                                        externalIpv6PrefixLength = 654738;
                                        kind = "expedita";
                                        name = "Alberta McLaughlin";
                                        natIP = "sint";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "maxime";
                                        publicPtrDomainName = "exercitationem";
                                        securityPolicy = "necessitatibus";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "quidem";
                                        externalIpv6PrefixLength = 648667;
                                        kind = "corporis";
                                        name = "Barry Osinski";
                                        natIP = "similique";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicDnsName = "sit";
                                        publicPtrDomainName = "quas";
                                        securityPolicy = "soluta";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "dolor";
                                        externalIpv6PrefixLength = 523187;
                                        kind = "eaque";
                                        name = "Aaron Marks";
                                        natIP = "rem";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicDnsName = "illum";
                                        publicPtrDomainName = "iure";
                                        securityPolicy = "beatae";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                                ipv6Address = "repellendus";
                                kind = "mollitia";
                                name = "Nathan Berge";
                                network = "cum";
                                networkAttachment = "perspiciatis";
                                networkIP = "beatae";
                                nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                                parentNicName = "modi";
                                queueCount = 608085;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "suscipit";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                                        subnetwork = "cumque";
                                        vlan = 18931;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "deleniti";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                                        subnetwork = "fugiat";
                                        vlan = 286431;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "vitae";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                                        subnetwork = "tempore";
                                        vlan = 727237;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "quam";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                        subnetwork = "totam";
                                        vlan = 34531;
                                    }}),
                                }};
                                subnetwork = "ut";
                                vlan = 996522;
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "dolores";
                                        externalIpv6PrefixLength = 189804;
                                        kind = "pariatur";
                                        name = "Anita Fisher";
                                        natIP = "quis";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicDnsName = "ratione";
                                        publicPtrDomainName = "in";
                                        securityPolicy = "nihil";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "quisquam";
                                        externalIpv6PrefixLength = 374148;
                                        kind = "impedit";
                                        name = "Archie Kutch";
                                        natIP = "velit";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicDnsName = "suscipit";
                                        publicPtrDomainName = "id";
                                        securityPolicy = "sequi";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "fugit";
                                        subnetworkRangeName = "amet";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "quasi";
                                        subnetworkRangeName = "doloremque";
                                    }}),
                                }};
                                fingerprint = "quis";
                                internalIpv6PrefixLength = 928386;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "impedit";
                                        externalIpv6PrefixLength = 224402;
                                        kind = "quaerat";
                                        name = "Dr. Kenny Reichel";
                                        natIP = "libero";
                                        networkTier = AccessConfigNetworkTierEnum.SELECT;
                                        publicDnsName = "beatae";
                                        publicPtrDomainName = "explicabo";
                                        securityPolicy = "est";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "ea";
                                        externalIpv6PrefixLength = 108837;
                                        kind = "eius";
                                        name = "Austin Goyette";
                                        natIP = "voluptatum";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicDnsName = "sint";
                                        publicPtrDomainName = "doloremque";
                                        securityPolicy = "voluptatum";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "nihil";
                                kind = "exercitationem";
                                name = "Sylvester Davis";
                                network = "praesentium";
                                networkAttachment = "sed";
                                networkIP = "exercitationem";
                                nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                                parentNicName = "nesciunt";
                                queueCount = 274574;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "nobis";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                        subnetwork = "similique";
                                        vlan = 268013;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "itaque";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                                        subnetwork = "autem";
                                        vlan = 934162;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "culpa";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                        subnetwork = "nihil";
                                        vlan = 347326;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "molestiae";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                                        subnetwork = "fugiat";
                                        vlan = 66632;
                                    }}),
                                }};
                                subnetwork = "voluptate";
                                vlan = 90091;
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "qui";
                                        externalIpv6PrefixLength = 620507;
                                        kind = "eius";
                                        name = "Christy Bernhard";
                                        natIP = "optio";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicDnsName = "in";
                                        publicPtrDomainName = "cupiditate";
                                        securityPolicy = "facilis";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "facilis";
                                        externalIpv6PrefixLength = 158896;
                                        kind = "delectus";
                                        name = "Lynn Effertz";
                                        natIP = "quidem";
                                        networkTier = AccessConfigNetworkTierEnum.SELECT;
                                        publicDnsName = "ipsam";
                                        publicPtrDomainName = "minima";
                                        securityPolicy = "assumenda";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "et";
                                        externalIpv6PrefixLength = 324028;
                                        kind = "quidem";
                                        name = "Lori Roob";
                                        natIP = "praesentium";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicDnsName = "dolorum";
                                        publicPtrDomainName = "amet";
                                        securityPolicy = "molestias";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "atque";
                                        externalIpv6PrefixLength = 651776;
                                        kind = "laudantium";
                                        name = "Cedric Brown";
                                        natIP = "consequuntur";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "aut";
                                        publicPtrDomainName = "optio";
                                        securityPolicy = "aspernatur";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "repudiandae";
                                        subnetworkRangeName = "nam";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "et";
                                        subnetworkRangeName = "similique";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "saepe";
                                        subnetworkRangeName = "ab";
                                    }}),
                                }};
                                fingerprint = "repudiandae";
                                internalIpv6PrefixLength = 772602;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "laudantium";
                                        externalIpv6PrefixLength = 777889;
                                        kind = "adipisci";
                                        name = "Shelly Gleason";
                                        natIP = "quidem";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicDnsName = "ducimus";
                                        publicPtrDomainName = "id";
                                        securityPolicy = "accusantium";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "deserunt";
                                        externalIpv6PrefixLength = 519797;
                                        kind = "expedita";
                                        name = "Joanna Metz";
                                        natIP = "veniam";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicDnsName = "amet";
                                        publicPtrDomainName = "eum";
                                        securityPolicy = "praesentium";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "maxime";
                                        externalIpv6PrefixLength = 772419;
                                        kind = "fuga";
                                        name = "Gina Ernser";
                                        natIP = "magni";
                                        networkTier = AccessConfigNetworkTierEnum.SELECT;
                                        publicDnsName = "iure";
                                        publicPtrDomainName = "sit";
                                        securityPolicy = "necessitatibus";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "vel";
                                        externalIpv6PrefixLength = 417741;
                                        kind = "earum";
                                        name = "Mrs. Jessie Volkman";
                                        natIP = "beatae";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "neque";
                                        publicPtrDomainName = "nesciunt";
                                        securityPolicy = "aliquam";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                                ipv6Address = "molestiae";
                                kind = "corrupti";
                                name = "Emanuel Conn";
                                network = "ab";
                                networkAttachment = "vitae";
                                networkIP = "magnam";
                                nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                                parentNicName = "asperiores";
                                queueCount = 657481;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "voluptates";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                        subnetwork = "perspiciatis";
                                        vlan = 671182;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "incidunt";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                        subnetwork = "a";
                                        vlan = 215566;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "amet";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                                        subnetwork = "aliquid";
                                        vlan = 404799;
                                    }}),
                                }};
                                subnetwork = "dolore";
                                vlan = 881052;
                            }}),
                        }};
                        networkPerformanceConfig = new NetworkPerformanceConfig() {{
                            externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum.TIER1;
                            totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER1;
                        }};;
                        postKeyRevocationActionType = InstancePropertiesPostKeyRevocationActionTypeEnum.POST_KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
                        privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum.INHERIT_FROM_SUBNETWORK;
                        reservationAffinity = new ReservationAffinity() {{
                            consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.UNSPECIFIED;
                            key = "dolores";
                            values = new String[]{{
                                add("doloribus"),
                                add("quasi"),
                                add("quaerat"),
                                add("recusandae"),
                            }};
                        }};;
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("quod", "beatae");
                            put("expedita", "velit");
                            put("nemo", "magni");
                        }};
                        resourcePolicies = new String[]{{
                            add("porro"),
                            add("placeat"),
                            add("recusandae"),
                        }};
                        scheduling = new Scheduling() {{
                            automaticRestart = false;
                            availabilityDomain = 830425;
                            currentCpus = 677366;
                            currentMemoryMb = "maxime";
                            hostErrorTimeoutSeconds = 793275;
                            instanceTerminationAction = SchedulingInstanceTerminationActionEnum.DELETE;
                            latencyTolerant = false;
                            localSsdRecoveryTimeout = new Duration() {{
                                nanos = 164223;
                                seconds = "qui";
                            }};;
                            locationHint = "reprehenderit";
                            maintenanceFreezeDurationHours = 543775;
                            maintenanceInterval = SchedulingMaintenanceIntervalEnum.AS_NEEDED;
                            maxRunDuration = new Duration() {{
                                nanos = 254226;
                                seconds = "recusandae";
                            }};;
                            minNodeCpus = 784985;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "aperiam";
                                    operator = SchedulingNodeAffinityOperatorEnum.IN;
                                    values = new String[]{{
                                        add("cum"),
                                        add("quo"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "aliquam";
                                    operator = SchedulingNodeAffinityOperatorEnum.IN;
                                    values = new String[]{{
                                        add("harum"),
                                        add("quae"),
                                        add("consectetur"),
                                        add("quaerat"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "explicabo";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("architecto"),
                                        add("perferendis"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = SchedulingOnHostMaintenanceEnum.MIGRATE;
                            preemptible = false;
                            provisioningModel = SchedulingProvisioningModelEnum.STANDARD;
                            terminationTime = "dolores";
                        }};;
                        secureTags = new String[]{{
                            add("debitis"),
                            add("asperiores"),
                        }};
                        serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                            add(new ServiceAccount() {{
                                email = "Russel49@gmail.com";
                                scopes = new String[]{{
                                    add("dicta"),
                                    add("architecto"),
                                    add("fugiat"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Bernita.Gerhold@yahoo.com";
                                scopes = new String[]{{
                                    add("dicta"),
                                }};
                            }}),
                        }};
                        serviceIntegrationSpecs = new java.util.HashMap<String, org.openapis.openapi.models.shared.ServiceIntegrationSpec>() {{
                            put("laboriosam", new ServiceIntegrationSpec() {{
                                backupDr = new ServiceIntegrationSpecBackupDRSpec() {{
                                    plan = "sint";
                                }};
                            }});
                            put("dolores", new ServiceIntegrationSpec() {{
                                backupDr = new ServiceIntegrationSpecBackupDRSpec() {{
                                    plan = "repudiandae";
                                }};
                            }});
                        }};
                        shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                            enableIntegrityMonitoring = false;
                            enableSecureBoot = false;
                            enableVtpm = false;
                        }};;
                        shieldedVmConfig = new ShieldedVmConfig() {{
                            enableIntegrityMonitoring = false;
                            enableSecureBoot = false;
                            enableVtpm = false;
                        }};;
                        tags = new Tags() {{
                            fingerprint = "fuga";
                            items = new String[]{{
                                add("totam"),
                                add("laboriosam"),
                            }};
                        }};;
                    }};;
                    region = "esse";
                    selfLink = "nesciunt";
                    selfLinkWithId = "vero";
                    sourceInstance = "nostrum";
                    sourceInstanceParams = new SourceInstanceParams() {{
                        diskConfigs = new org.openapis.openapi.models.shared.DiskInstantiationConfig[]{{
                            add(new DiskInstantiationConfig() {{
                                autoDelete = false;
                                customImage = "sunt";
                                deviceName = "rerum";
                                instantiateFrom = DiskInstantiationConfigInstantiateFromEnum.DEFAULT_;
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "qui";
                alt = AltEnum.MEDIA;
                callback = "similique";
                fields = "error";
                key = "doloremque";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "accusantium";
                requestId = "eum";
                uploadType = "commodi";
                uploadProtocol = "doloremque";
                userIp = "asperiores";
            }};            

            ComputeInstanceTemplatesInsertResponse res = sdk.instanceTemplates.computeInstanceTemplatesInsert(req, new ComputeInstanceTemplatesInsertSecurity() {{
                option1 = new ComputeInstanceTemplatesInsertSecurityOption1("doloremque", "fugit") {{
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

## computeInstanceTemplatesList

Retrieves a list of instance templates that are contained within the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesListRequest;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesListResponse;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesListSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceTemplatesListRequest req = new ComputeInstanceTemplatesListRequest("quaerat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dignissimos";
                alt = AltEnum.MEDIA;
                callback = "quidem";
                fields = "ut";
                filter = "optio";
                key = "cumque";
                maxResults = 401781L;
                oauthToken = "dolore";
                orderBy = "eligendi";
                pageToken = "magni";
                prettyPrint = false;
                quotaUser = "libero";
                returnPartialSuccess = false;
                uploadType = "sequi";
                uploadProtocol = "culpa";
                userIp = "ratione";
            }};            

            ComputeInstanceTemplatesListResponse res = sdk.instanceTemplates.computeInstanceTemplatesList(req, new ComputeInstanceTemplatesListSecurity() {{
                option1 = new ComputeInstanceTemplatesListSecurityOption1("odit", "optio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instanceTemplateList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstanceTemplatesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesSetIamPolicySecurityOption2;
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
import org.openapis.openapi.models.shared.GlobalSetPolicyRequest;
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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceTemplatesSetIamPolicyRequest req = new ComputeInstanceTemplatesSetIamPolicyRequest("labore", "voluptatum") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "facere";
                            condition = new Expr() {{
                                description = "debitis";
                                expression = "ex";
                                location = "magni";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("est"),
                                add("dolorum"),
                            }};
                            role = "quaerat";
                        }}),
                        add(new Binding() {{
                            bindingId = "exercitationem";
                            condition = new Expr() {{
                                description = "molestias";
                                expression = "id";
                                location = "voluptas";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("eos"),
                                add("aperiam"),
                                add("deleniti"),
                                add("amet"),
                            }};
                            role = "aut";
                        }}),
                        add(new Binding() {{
                            bindingId = "quasi";
                            condition = new Expr() {{
                                description = "laboriosam";
                                expression = "maxime";
                                location = "fuga";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("soluta"),
                                add("libero"),
                            }};
                            role = "molestias";
                        }}),
                    }};
                    etag = "dignissimos";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("eum"),
                                            add("quia"),
                                            add("quae"),
                                            add("sed"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ea"),
                                            add("accusantium"),
                                            add("esse"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("voluptas"),
                                }};
                                service = "voluptatem";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sint"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("beatae"),
                                            add("magnam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("pariatur"),
                                }};
                                service = "distinctio";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("similique"),
                                            add("omnis"),
                                            add("sapiente"),
                                            add("consectetur"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("at"),
                                            add("quia"),
                                            add("libero"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("in"),
                                            add("laudantium"),
                                            add("molestiae"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("magnam"),
                                }};
                                service = "natus";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolore"),
                                            add("provident"),
                                            add("est"),
                                            add("mollitia"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("ex"),
                                    add("minima"),
                                }};
                                service = "mollitia";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "eos";
                                condition = new Expr() {{
                                    description = "laudantium";
                                    expression = "adipisci";
                                    location = "fugit";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("facilis"),
                                    add("quam"),
                                    add("beatae"),
                                }};
                                role = "error";
                            }}),
                        }};
                        etag = "quibusdam";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.IN;
                                        svc = "reprehenderit";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("blanditiis"),
                                            add("suscipit"),
                                            add("itaque"),
                                            add("nesciunt"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "quis";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("perspiciatis"),
                                            add("id"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "consectetur";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("iusto"),
                                            add("quas"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "minima";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("id"),
                                            add("porro"),
                                            add("libero"),
                                            add("perferendis"),
                                        }};
                                    }}),
                                }};
                                description = "accusamus";
                                ins = new String[]{{
                                    add("vero"),
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
                                                    name = "Lucille Hessel";
                                                    value = "quod";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Nathaniel DuBuque";
                                                    value = "quasi";
                                                }}),
                                            }};
                                            field = "nemo";
                                            metric = "sunt";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Tasha Fay Sr.";
                                                    value = "qui";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Alice Goodwin II";
                                                    value = "assumenda";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Bernice Jakubowski";
                                                    value = "sint";
                                                }}),
                                            }};
                                            field = "occaecati";
                                            metric = "repudiandae";
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
                                                    name = "Arnold Bogan";
                                                    value = "asperiores";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Todd Abernathy";
                                                    value = "fuga";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Cindy Senger";
                                                    value = "accusantium";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Alfonso Abernathy";
                                                    value = "aliquid";
                                                }}),
                                            }};
                                            field = "ad";
                                            metric = "reprehenderit";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("ex"),
                                }};
                                permissions = new String[]{{
                                    add("ab"),
                                    add("distinctio"),
                                }};
                            }}),
                        }};
                        version = 708387;
                    }};;
                }};;
                accessToken = "maiores";
                alt = AltEnum.JSON;
                callback = "nostrum";
                fields = "veniam";
                key = "fugit";
                oauthToken = "ducimus";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "cum";
                uploadProtocol = "eos";
                userIp = "quaerat";
            }};            

            ComputeInstanceTemplatesSetIamPolicyResponse res = sdk.instanceTemplates.computeInstanceTemplatesSetIamPolicy(req, new ComputeInstanceTemplatesSetIamPolicySecurity() {{
                option1 = new ComputeInstanceTemplatesSetIamPolicySecurityOption1("vitae", "architecto") {{
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

## computeInstanceTemplatesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstanceTemplatesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceTemplatesTestIamPermissionsRequest req = new ComputeInstanceTemplatesTestIamPermissionsRequest("repellendus", "assumenda") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("aliquid"),
                    }};
                }};;
                accessToken = "at";
                alt = AltEnum.PROTO;
                callback = "beatae";
                fields = "soluta";
                key = "sunt";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "ducimus";
                uploadProtocol = "fugit";
                userIp = "quidem";
            }};            

            ComputeInstanceTemplatesTestIamPermissionsResponse res = sdk.instanceTemplates.computeInstanceTemplatesTestIamPermissions(req, new ComputeInstanceTemplatesTestIamPermissionsSecurity() {{
                option1 = new ComputeInstanceTemplatesTestIamPermissionsSecurityOption1("minus", "cupiditate") {{
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
