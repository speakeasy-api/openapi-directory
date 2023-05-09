# regionInstances

### Available Operations

* [computeRegionInstancesBulkInsert](#computeregioninstancesbulkinsert) - Creates multiple instances in a given region. Count specifies the number of instances to create.

## computeRegionInstancesBulkInsert

Creates multiple instances in a given region. Count specifies the number of instances to create.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstancesBulkInsertRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstancesBulkInsertResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstancesBulkInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstancesBulkInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstancesBulkInsertSecurityOption2;
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
import org.openapis.openapi.models.shared.BulkInsertInstanceResource;
import org.openapis.openapi.models.shared.BulkInsertInstanceResourcePerInstanceProperties;
import org.openapis.openapi.models.shared.ConfidentialInstanceConfig;
import org.openapis.openapi.models.shared.ConfidentialInstanceConfigConfidentialInstanceTypeEnum;
import org.openapis.openapi.models.shared.CustomerEncryptionKey;
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
import org.openapis.openapi.models.shared.LocationPolicy;
import org.openapis.openapi.models.shared.LocationPolicyLocation;
import org.openapis.openapi.models.shared.LocationPolicyLocationConstraints;
import org.openapis.openapi.models.shared.LocationPolicyLocationPreferenceEnum;
import org.openapis.openapi.models.shared.LocationPolicyTargetShapeEnum;
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
import org.openapis.openapi.models.shared.Tags;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstancesBulkInsertRequest req = new ComputeRegionInstancesBulkInsertRequest("atque", "sapiente") {{
                dollarXgafv = XgafvEnum.TWO;
                bulkInsertInstanceResource = new BulkInsertInstanceResource() {{
                    count = "rem";
                    instanceProperties = new InstanceProperties() {{
                        advancedMachineFeatures = new AdvancedMachineFeatures() {{
                            enableNestedVirtualization = false;
                            enableUefiNetworking = false;
                            numaNodeCount = 242202;
                            performanceMonitoringUnit = AdvancedMachineFeaturesPerformanceMonitoringUnitEnum.PERFORMANCE_MONITORING_UNIT_UNSPECIFIED;
                            threadsPerCore = 42883;
                            visibleCoreCount = 705109;
                        }};;
                        canIpForward = false;
                        confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                            confidentialInstanceType = ConfidentialInstanceConfigConfidentialInstanceTypeEnum.SEV;
                            enableConfidentialCompute = false;
                        }};;
                        description = "impedit";
                        disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.X8664;
                                autoDelete = false;
                                boot = false;
                                deviceName = "aliquid";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "voluptatum";
                                    kmsKeyServiceAccount = "culpa";
                                    rawKey = "culpa";
                                    rsaEncryptedKey = "ex";
                                    sha256 = "eius";
                                }};
                                diskSizeGb = "vero";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.BARE_METAL_LINUX_COMPATIBLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SECURE_BOOT;
                                    }}),
                                }};
                                index = 277990;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.X8664;
                                    description = "perferendis";
                                    diskName = "facere";
                                    diskSizeGb = "labore";
                                    diskType = "illum";
                                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                                        }}),
                                    }};
                                    interface_ = AttachedDiskInitializeParamsInterfaceEnum.NVME;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("fuga", "molestiae");
                                        put("repellendus", "eveniet");
                                    }};
                                    licenseCodes = new String[]{{
                                        add("ipsa"),
                                        add("laudantium"),
                                    }};
                                    licenses = new String[]{{
                                        add("aliquid"),
                                        add("quis"),
                                        add("illo"),
                                    }};
                                    multiWriter = false;
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK;
                                    provisionedIops = "laboriosam";
                                    provisionedThroughput = "natus";
                                    replicaZones = new String[]{{
                                        add("ex"),
                                        add("sunt"),
                                        add("quaerat"),
                                        add("rerum"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("labore", "nam");
                                        put("ut", "reprehenderit");
                                        put("deserunt", "aperiam");
                                        put("eos", "ducimus");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("accusamus"),
                                        add("optio"),
                                        add("culpa"),
                                        add("unde"),
                                    }};
                                    sourceImage = "rerum";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "numquam";
                                        kmsKeyServiceAccount = "sit";
                                        rawKey = "maiores";
                                        rsaEncryptedKey = "eos";
                                        sha256 = "sunt";
                                    }};
                                    sourceInstantSnapshot = "earum";
                                    sourceSnapshot = "libero";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "at";
                                        kmsKeyServiceAccount = "dignissimos";
                                        rawKey = "distinctio";
                                        rsaEncryptedKey = "dolores";
                                        sha256 = "minima";
                                    }};
                                    storagePool = "suscipit";
                                }};
                                interface_ = AttachedDiskInterfaceEnum.NVDIMM;
                                kind = "ipsa";
                                licenses = new String[]{{
                                    add("laboriosam"),
                                    add("ipsa"),
                                    add("ratione"),
                                }};
                                locked = false;
                                mode = AttachedDiskModeEnum.READ_WRITE;
                                savedState = AttachedDiskSavedStateEnum.PRESERVED;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "iste";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "sunt";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "labore";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "ex";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "sit";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "esse";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "molestiae";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "a";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "ducimus";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "occaecati";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }};
                                }};
                                source = "temporibus";
                                type = AttachedDiskTypeEnum.SCRATCH;
                                userLicenses = new String[]{{
                                    add("consectetur"),
                                    add("numquam"),
                                }};
                            }}),
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.ARM64;
                                autoDelete = false;
                                boot = false;
                                deviceName = "animi";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "perferendis";
                                    kmsKeyServiceAccount = "quis";
                                    rawKey = "beatae";
                                    rsaEncryptedKey = "dolor";
                                    sha256 = "consequatur";
                                }};
                                diskSizeGb = "laborum";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                                    }}),
                                }};
                                index = 978833;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                    description = "similique";
                                    diskName = "culpa";
                                    diskSizeGb = "nulla";
                                    diskType = "quos";
                                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.GVNIC;
                                        }}),
                                    }};
                                    interface_ = AttachedDiskInitializeParamsInterfaceEnum.NVME;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("ipsam", "atque");
                                        put("consequatur", "dicta");
                                    }};
                                    licenseCodes = new String[]{{
                                        add("amet"),
                                        add("et"),
                                        add("impedit"),
                                    }};
                                    licenses = new String[]{{
                                        add("enim"),
                                        add("dignissimos"),
                                        add("rem"),
                                    }};
                                    multiWriter = false;
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK_IF_SOURCE_CHANGED;
                                    provisionedIops = "cumque";
                                    provisionedThroughput = "minus";
                                    replicaZones = new String[]{{
                                        add("molestiae"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("optio", "dolores");
                                        put("aperiam", "voluptas");
                                        put("cum", "ducimus");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("mollitia"),
                                    }};
                                    sourceImage = "rem";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "voluptates";
                                        kmsKeyServiceAccount = "praesentium";
                                        rawKey = "ratione";
                                        rsaEncryptedKey = "sit";
                                        sha256 = "ullam";
                                    }};
                                    sourceInstantSnapshot = "magni";
                                    sourceSnapshot = "necessitatibus";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "molestias";
                                        kmsKeyServiceAccount = "mollitia";
                                        rawKey = "perspiciatis";
                                        rsaEncryptedKey = "provident";
                                        sha256 = "enim";
                                    }};
                                    storagePool = "aliquam";
                                }};
                                interface_ = AttachedDiskInterfaceEnum.NVME;
                                kind = "repellat";
                                licenses = new String[]{{
                                    add("autem"),
                                }};
                                locked = false;
                                mode = AttachedDiskModeEnum.READ_WRITE;
                                savedState = AttachedDiskSavedStateEnum.DISK_SAVED_STATE_UNSPECIFIED;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "non";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "quisquam";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "quisquam";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "modi";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "ex";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "quod";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "iusto";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "ipsam";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "aut";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }};
                                }};
                                source = "modi";
                                type = AttachedDiskTypeEnum.PERSISTENT;
                                userLicenses = new String[]{{
                                    add("facilis"),
                                    add("sed"),
                                }};
                            }}),
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.X8664;
                                autoDelete = false;
                                boot = false;
                                deviceName = "fugiat";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "modi";
                                    kmsKeyServiceAccount = "vero";
                                    rawKey = "aliquam";
                                    rsaEncryptedKey = "pariatur";
                                    sha256 = "labore";
                                }};
                                diskSizeGb = "optio";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.WINDOWS;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.TDX_CAPABLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.BARE_METAL_LINUX_COMPATIBLE;
                                    }}),
                                }};
                                index = 87426;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                    description = "mollitia";
                                    diskName = "sed";
                                    diskSizeGb = "ipsam";
                                    diskType = "nemo";
                                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                                        }}),
                                    }};
                                    interface_ = AttachedDiskInitializeParamsInterfaceEnum.UNSPECIFIED;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("libero", "quibusdam");
                                    }};
                                    licenseCodes = new String[]{{
                                        add("deserunt"),
                                        add("minus"),
                                        add("voluptatibus"),
                                        add("quas"),
                                    }};
                                    licenses = new String[]{{
                                        add("similique"),
                                        add("beatae"),
                                        add("quis"),
                                        add("commodi"),
                                    }};
                                    multiWriter = false;
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.USE_EXISTING_DISK;
                                    provisionedIops = "exercitationem";
                                    provisionedThroughput = "magnam";
                                    replicaZones = new String[]{{
                                        add("quibusdam"),
                                        add("ipsa"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("perferendis", "veritatis");
                                        put("aliquid", "voluptates");
                                        put("nesciunt", "dignissimos");
                                        put("laborum", "animi");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("aut"),
                                        add("mollitia"),
                                        add("atque"),
                                    }};
                                    sourceImage = "sed";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "vitae";
                                        kmsKeyServiceAccount = "quas";
                                        rawKey = "asperiores";
                                        rsaEncryptedKey = "odit";
                                        sha256 = "ea";
                                    }};
                                    sourceInstantSnapshot = "veniam";
                                    sourceSnapshot = "deleniti";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "veritatis";
                                        kmsKeyServiceAccount = "error";
                                        rawKey = "unde";
                                        rsaEncryptedKey = "fuga";
                                        sha256 = "nobis";
                                    }};
                                    storagePool = "eum";
                                }};
                                interface_ = AttachedDiskInterfaceEnum.SCSI;
                                kind = "architecto";
                                licenses = new String[]{{
                                    add("illum"),
                                }};
                                locked = false;
                                mode = AttachedDiskModeEnum.READ_WRITE;
                                savedState = AttachedDiskSavedStateEnum.DISK_SAVED_STATE_UNSPECIFIED;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "cumque";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "sequi";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "reiciendis";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "beatae";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "possimus";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "quam";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "facere";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "distinctio";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "voluptate";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }};
                                }};
                                source = "et";
                                type = AttachedDiskTypeEnum.SCRATCH;
                                userLicenses = new String[]{{
                                    add("recusandae"),
                                }};
                            }}),
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                autoDelete = false;
                                boot = false;
                                deviceName = "quo";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "nam";
                                    kmsKeyServiceAccount = "omnis";
                                    rawKey = "dignissimos";
                                    rsaEncryptedKey = "ut";
                                    sha256 = "veniam";
                                }};
                                diskSizeGb = "ut";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                                    }}),
                                }};
                                index = 234563;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                    description = "nisi";
                                    diskName = "error";
                                    diskSizeGb = "amet";
                                    diskType = "esse";
                                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.SECURE_BOOT;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                        }}),
                                    }};
                                    interface_ = AttachedDiskInitializeParamsInterfaceEnum.SCSI;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("itaque", "tempore");
                                        put("occaecati", "laborum");
                                        put("necessitatibus", "quae");
                                    }};
                                    licenseCodes = new String[]{{
                                        add("quam"),
                                        add("nam"),
                                        add("maiores"),
                                    }};
                                    licenses = new String[]{{
                                        add("ab"),
                                        add("tempora"),
                                        add("mollitia"),
                                        add("tempora"),
                                    }};
                                    multiWriter = false;
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK_IF_SOURCE_CHANGED;
                                    provisionedIops = "nobis";
                                    provisionedThroughput = "esse";
                                    replicaZones = new String[]{{
                                        add("pariatur"),
                                        add("quas"),
                                        add("debitis"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("quae", "deserunt");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("tempora"),
                                        add("ipsam"),
                                        add("unde"),
                                    }};
                                    sourceImage = "earum";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "dicta";
                                        kmsKeyServiceAccount = "culpa";
                                        rawKey = "architecto";
                                        rsaEncryptedKey = "perspiciatis";
                                        sha256 = "molestias";
                                    }};
                                    sourceInstantSnapshot = "dicta";
                                    sourceSnapshot = "minima";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "cumque";
                                        kmsKeyServiceAccount = "cupiditate";
                                        rawKey = "dignissimos";
                                        rsaEncryptedKey = "magnam";
                                        sha256 = "deleniti";
                                    }};
                                    storagePool = "harum";
                                }};
                                interface_ = AttachedDiskInterfaceEnum.NVME;
                                kind = "atque";
                                licenses = new String[]{{
                                    add("perspiciatis"),
                                    add("eos"),
                                    add("velit"),
                                }};
                                locked = false;
                                mode = AttachedDiskModeEnum.READ_WRITE;
                                savedState = AttachedDiskSavedStateEnum.PRESERVED;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "eos";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "porro";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "libero";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "ipsa";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "amet";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "dolorum";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "ratione";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "blanditiis";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }};
                                }};
                                source = "odit";
                                type = AttachedDiskTypeEnum.SCRATCH;
                                userLicenses = new String[]{{
                                    add("quos"),
                                }};
                            }}),
                        }};
                        displayDevice = new DisplayDevice() {{
                            enableDisplay = false;
                        }};;
                        guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 309175;
                                acceleratorType = "at";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 938699;
                                acceleratorType = "tempore";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 35952;
                                acceleratorType = "minus";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 414158;
                                acceleratorType = "tempore";
                            }}),
                        }};
                        keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum.NONE;
                        labels = new java.util.HashMap<String, String>() {{
                            put("non", "harum");
                        }};
                        machineType = "fugiat";
                        metadata = new Metadata() {{
                            fingerprint = "quod";
                            items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                                add(new MetadataItems() {{
                                    key = "molestiae";
                                    value = "dolor";
                                }}),
                            }};
                            kind = "repellendus";
                        }};;
                        minCpuPlatform = "provident";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "soluta";
                                        externalIpv6PrefixLength = 222439;
                                        kind = "rem";
                                        name = "Rolando Hudson";
                                        natIP = "soluta";
                                        networkTier = AccessConfigNetworkTierEnum.SELECT;
                                        publicDnsName = "non";
                                        publicPtrDomainName = "quidem";
                                        securityPolicy = "distinctio";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "fugit";
                                        subnetworkRangeName = "dolores";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "laudantium";
                                        subnetworkRangeName = "architecto";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "fugiat";
                                        subnetworkRangeName = "dolorem";
                                    }}),
                                }};
                                fingerprint = "at";
                                internalIpv6PrefixLength = 688834;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "dolorem";
                                        externalIpv6PrefixLength = 738948;
                                        kind = "quaerat";
                                        name = "Delbert Hansen";
                                        natIP = "repellendus";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "quod";
                                        publicPtrDomainName = "voluptatibus";
                                        securityPolicy = "explicabo";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "assumenda";
                                        externalIpv6PrefixLength = 928418;
                                        kind = "fugit";
                                        name = "Sherry Ledner";
                                        natIP = "veniam";
                                        networkTier = AccessConfigNetworkTierEnum.SELECT;
                                        publicDnsName = "quod";
                                        publicPtrDomainName = "dolorum";
                                        securityPolicy = "similique";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                                ipv6Address = "enim";
                                kind = "quas";
                                name = "Roderick Hermiston";
                                network = "delectus";
                                networkAttachment = "doloremque";
                                networkIP = "quia";
                                nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                                parentNicName = "cum";
                                queueCount = 446804;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "earum";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                        subnetwork = "reiciendis";
                                        vlan = 507543;
                                    }}),
                                }};
                                subnetwork = "impedit";
                                vlan = 482244;
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "tempora";
                                        externalIpv6PrefixLength = 697405;
                                        kind = "sequi";
                                        name = "Adrian Herzog";
                                        natIP = "iure";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicDnsName = "ducimus";
                                        publicPtrDomainName = "neque";
                                        securityPolicy = "ex";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "similique";
                                        externalIpv6PrefixLength = 847969;
                                        kind = "reprehenderit";
                                        name = "Ed Russel";
                                        natIP = "corporis";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "libero";
                                        publicPtrDomainName = "amet";
                                        securityPolicy = "rerum";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "optio";
                                        subnetworkRangeName = "soluta";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "possimus";
                                        subnetworkRangeName = "voluptatem";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "quos";
                                        subnetworkRangeName = "qui";
                                    }}),
                                }};
                                fingerprint = "quia";
                                internalIpv6PrefixLength = 285053;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "omnis";
                                        externalIpv6PrefixLength = 415745;
                                        kind = "possimus";
                                        name = "Santiago Mitchell";
                                        natIP = "omnis";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "blanditiis";
                                        publicPtrDomainName = "voluptatibus";
                                        securityPolicy = "minima";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "aliquam";
                                        externalIpv6PrefixLength = 789038;
                                        kind = "est";
                                        name = "Lola Schamberger";
                                        natIP = "sed";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicDnsName = "placeat";
                                        publicPtrDomainName = "accusamus";
                                        securityPolicy = "temporibus";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "rerum";
                                kind = "fugiat";
                                name = "Sadie Ziemann";
                                network = "vitae";
                                networkAttachment = "aliquam";
                                networkIP = "similique";
                                nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                                parentNicName = "laborum";
                                queueCount = 12743;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "voluptatum";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                        subnetwork = "enim";
                                        vlan = 213799;
                                    }}),
                                }};
                                subnetwork = "amet";
                                vlan = 886853;
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "unde";
                                        externalIpv6PrefixLength = 961176;
                                        kind = "explicabo";
                                        name = "Dr. Vivian Larkin";
                                        natIP = "quia";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "nobis";
                                        publicPtrDomainName = "voluptatibus";
                                        securityPolicy = "est";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "excepturi";
                                        externalIpv6PrefixLength = 296159;
                                        kind = "maxime";
                                        name = "Lance Buckridge";
                                        natIP = "quibusdam";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicDnsName = "at";
                                        publicPtrDomainName = "odit";
                                        securityPolicy = "iure";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "cupiditate";
                                        subnetworkRangeName = "expedita";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "accusamus";
                                        subnetworkRangeName = "libero";
                                    }}),
                                }};
                                fingerprint = "esse";
                                internalIpv6PrefixLength = 439149;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "a";
                                        externalIpv6PrefixLength = 278806;
                                        kind = "aspernatur";
                                        name = "Freda Zemlak";
                                        natIP = "voluptas";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicDnsName = "iure";
                                        publicPtrDomainName = "ad";
                                        securityPolicy = "iusto";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "vel";
                                        externalIpv6PrefixLength = 257951;
                                        kind = "explicabo";
                                        name = "Jacqueline Walter";
                                        natIP = "eos";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicDnsName = "veritatis";
                                        publicPtrDomainName = "error";
                                        securityPolicy = "voluptates";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "repellendus";
                                kind = "et";
                                name = "Miss Kelley Bartoletti";
                                network = "et";
                                networkAttachment = "eius";
                                networkIP = "voluptatem";
                                nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                                parentNicName = "temporibus";
                                queueCount = 877632;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "natus";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                        subnetwork = "repellat";
                                        vlan = 162462;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "eius";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                        subnetwork = "necessitatibus";
                                        vlan = 507668;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "autem";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                                        subnetwork = "optio";
                                        vlan = 566081;
                                    }}),
                                }};
                                subnetwork = "saepe";
                                vlan = 768661;
                            }}),
                        }};
                        networkPerformanceConfig = new NetworkPerformanceConfig() {{
                            externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum.DEFAULT_;
                            totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.DEFAULT_;
                        }};;
                        postKeyRevocationActionType = InstancePropertiesPostKeyRevocationActionTypeEnum.SHUTDOWN;
                        privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum.ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE;
                        reservationAffinity = new ReservationAffinity() {{
                            consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.SPECIFIC_RESERVATION;
                            key = "debitis";
                            values = new String[]{{
                                add("itaque"),
                                add("corporis"),
                                add("delectus"),
                                add("pariatur"),
                            }};
                        }};;
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("quidem", "earum");
                            put("vero", "magni");
                            put("magni", "veniam");
                        }};
                        resourcePolicies = new String[]{{
                            add("deserunt"),
                            add("dolorem"),
                            add("dolore"),
                            add("amet"),
                        }};
                        scheduling = new Scheduling() {{
                            automaticRestart = false;
                            availabilityDomain = 81064;
                            currentCpus = 225381;
                            currentMemoryMb = "autem";
                            hostErrorTimeoutSeconds = 452277;
                            instanceTerminationAction = SchedulingInstanceTerminationActionEnum.STOP;
                            latencyTolerant = false;
                            localSsdRecoveryTimeout = new Duration() {{
                                nanos = 892660;
                                seconds = "quod";
                            }};;
                            locationHint = "exercitationem";
                            maintenanceFreezeDurationHours = 634733;
                            maintenanceInterval = SchedulingMaintenanceIntervalEnum.AS_NEEDED;
                            maxRunDuration = new Duration() {{
                                nanos = 67196;
                                seconds = "doloremque";
                            }};;
                            minNodeCpus = 484788;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "itaque";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("dolores"),
                                        add("expedita"),
                                        add("quidem"),
                                        add("ex"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "ratione";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("consequuntur"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "officiis";
                                    operator = SchedulingNodeAffinityOperatorEnum.IN;
                                    values = new String[]{{
                                        add("vero"),
                                        add("hic"),
                                        add("et"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "odit";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("sequi"),
                                        add("vero"),
                                        add("in"),
                                        add("aliquam"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = SchedulingOnHostMaintenanceEnum.TERMINATE;
                            preemptible = false;
                            provisioningModel = SchedulingProvisioningModelEnum.STANDARD;
                            terminationTime = "adipisci";
                        }};;
                        secureTags = new String[]{{
                            add("sit"),
                            add("quo"),
                            add("unde"),
                        }};
                        serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                            add(new ServiceAccount() {{
                                email = "Fiona_Legros58@yahoo.com";
                                scopes = new String[]{{
                                    add("illum"),
                                    add("nemo"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Vladimir96@yahoo.com";
                                scopes = new String[]{{
                                    add("consequuntur"),
                                    add("rerum"),
                                    add("doloremque"),
                                    add("eaque"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Liana_Bradtke13@hotmail.com";
                                scopes = new String[]{{
                                    add("sint"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Norene.Heathcote@yahoo.com";
                                scopes = new String[]{{
                                    add("pariatur"),
                                    add("voluptatem"),
                                    add("magnam"),
                                    add("exercitationem"),
                                }};
                            }}),
                        }};
                        serviceIntegrationSpecs = new java.util.HashMap<String, org.openapis.openapi.models.shared.ServiceIntegrationSpec>() {{
                            put("repellat", new ServiceIntegrationSpec() {{
                                backupDr = new ServiceIntegrationSpecBackupDRSpec() {{
                                    plan = "aliquid";
                                }};
                            }});
                            put("cupiditate", new ServiceIntegrationSpec() {{
                                backupDr = new ServiceIntegrationSpecBackupDRSpec() {{
                                    plan = "veniam";
                                }};
                            }});
                            put("esse", new ServiceIntegrationSpec() {{
                                backupDr = new ServiceIntegrationSpecBackupDRSpec() {{
                                    plan = "amet";
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
                            fingerprint = "veritatis";
                            items = new String[]{{
                                add("veniam"),
                            }};
                        }};;
                    }};;
                    locationPolicy = new LocationPolicy() {{
                        locations = new java.util.HashMap<String, org.openapis.openapi.models.shared.LocationPolicyLocation>() {{
                            put("cum", new LocationPolicyLocation() {{
                                constraints = new LocationPolicyLocationConstraints() {{
                                    maxCount = 918055;
                                }};
                                names = new String[]{{
                                    add("numquam"),
                                    add("ipsa"),
                                    add("beatae"),
                                }};
                                preference = LocationPolicyLocationPreferenceEnum.DENY;
                            }});
                        }};
                        targetShape = LocationPolicyTargetShapeEnum.ANY;
                    }};;
                    minCount = "doloremque";
                    namePattern = "dolor";
                    perInstanceProperties = new java.util.HashMap<String, org.openapis.openapi.models.shared.BulkInsertInstanceResourcePerInstanceProperties>() {{
                        put("soluta", new BulkInsertInstanceResourcePerInstanceProperties() {{
                            hostname = "round-graduation.net";
                            name = "Stanley Kutch";
                        }});
                        put("enim", new BulkInsertInstanceResourcePerInstanceProperties() {{
                            hostname = "unique-priest.com";
                            name = "Danny Sawayn";
                        }});
                    }};
                    sourceInstanceTemplate = "necessitatibus";
                }};;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "modi";
                fields = "modi";
                key = "aspernatur";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "facilis";
                requestId = "voluptate";
                uploadType = "quas";
                uploadProtocol = "veritatis";
                userIp = "tempora";
            }};            

            ComputeRegionInstancesBulkInsertResponse res = sdk.regionInstances.computeRegionInstancesBulkInsert(req, new ComputeRegionInstancesBulkInsertSecurity() {{
                option1 = new ComputeRegionInstancesBulkInsertSecurityOption1("nisi", "officia") {{
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
