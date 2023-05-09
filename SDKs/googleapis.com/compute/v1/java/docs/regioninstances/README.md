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
import org.openapis.openapi.models.shared.AliasIpRange;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AttachedDisk;
import org.openapis.openapi.models.shared.AttachedDiskArchitectureEnum;
import org.openapis.openapi.models.shared.AttachedDiskInitializeParams;
import org.openapis.openapi.models.shared.AttachedDiskInitializeParamsArchitectureEnum;
import org.openapis.openapi.models.shared.AttachedDiskInitializeParamsOnUpdateActionEnum;
import org.openapis.openapi.models.shared.AttachedDiskInterfaceEnum;
import org.openapis.openapi.models.shared.AttachedDiskModeEnum;
import org.openapis.openapi.models.shared.AttachedDiskTypeEnum;
import org.openapis.openapi.models.shared.BulkInsertInstanceResource;
import org.openapis.openapi.models.shared.BulkInsertInstanceResourcePerInstanceProperties;
import org.openapis.openapi.models.shared.ConfidentialInstanceConfig;
import org.openapis.openapi.models.shared.CustomerEncryptionKey;
import org.openapis.openapi.models.shared.FileContentBuffer;
import org.openapis.openapi.models.shared.FileContentBufferFileTypeEnum;
import org.openapis.openapi.models.shared.GuestOsFeature;
import org.openapis.openapi.models.shared.GuestOsFeatureTypeEnum;
import org.openapis.openapi.models.shared.InitialStateConfig;
import org.openapis.openapi.models.shared.InstanceProperties;
import org.openapis.openapi.models.shared.InstancePropertiesKeyRevocationActionTypeEnum;
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
import org.openapis.openapi.models.shared.NetworkPerformanceConfig;
import org.openapis.openapi.models.shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
import org.openapis.openapi.models.shared.ReservationAffinity;
import org.openapis.openapi.models.shared.ReservationAffinityConsumeReservationTypeEnum;
import org.openapis.openapi.models.shared.Scheduling;
import org.openapis.openapi.models.shared.SchedulingInstanceTerminationActionEnum;
import org.openapis.openapi.models.shared.SchedulingNodeAffinity;
import org.openapis.openapi.models.shared.SchedulingNodeAffinityOperatorEnum;
import org.openapis.openapi.models.shared.SchedulingOnHostMaintenanceEnum;
import org.openapis.openapi.models.shared.SchedulingProvisioningModelEnum;
import org.openapis.openapi.models.shared.ServiceAccount;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.Tags;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstancesBulkInsertRequest req = new ComputeRegionInstancesBulkInsertRequest("pariatur", "aut") {{
                dollarXgafv = XgafvEnum.TWO;
                bulkInsertInstanceResource = new BulkInsertInstanceResource() {{
                    count = "maxime";
                    instanceProperties = new InstanceProperties() {{
                        advancedMachineFeatures = new AdvancedMachineFeatures() {{
                            enableNestedVirtualization = false;
                            enableUefiNetworking = false;
                            threadsPerCore = 5253;
                            visibleCoreCount = 397003;
                        }};;
                        canIpForward = false;
                        confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                            enableConfidentialCompute = false;
                        }};;
                        description = "eveniet";
                        disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.ARM64;
                                autoDelete = false;
                                boot = false;
                                deviceName = "incidunt";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "fuga";
                                    kmsKeyServiceAccount = "soluta";
                                    rawKey = "praesentium";
                                    rsaEncryptedKey = "quae";
                                    sha256 = "iste";
                                }};
                                diskSizeGb = "facilis";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                                    }}),
                                }};
                                index = 199360;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.X8664;
                                    description = "repudiandae";
                                    diskName = "beatae";
                                    diskSizeGb = "alias";
                                    diskType = "occaecati";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("esse", "accusantium");
                                    }};
                                    licenses = new String[]{{
                                        add("earum"),
                                        add("earum"),
                                        add("magnam"),
                                        add("qui"),
                                    }};
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK;
                                    provisionedIops = "quasi";
                                    provisionedThroughput = "deleniti";
                                    replicaZones = new String[]{{
                                        add("quibusdam"),
                                        add("perferendis"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("ducimus", "magni");
                                        put("cum", "ab");
                                        put("accusamus", "soluta");
                                        put("delectus", "odit");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("non"),
                                        add("voluptates"),
                                        add("odio"),
                                        add("veniam"),
                                    }};
                                    sourceImage = "non";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "laboriosam";
                                        kmsKeyServiceAccount = "sint";
                                        rawKey = "facere";
                                        rsaEncryptedKey = "ipsam";
                                        sha256 = "nihil";
                                    }};
                                    sourceSnapshot = "impedit";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "sed";
                                        kmsKeyServiceAccount = "fugit";
                                        rawKey = "voluptate";
                                        rsaEncryptedKey = "doloremque";
                                        sha256 = "ipsam";
                                    }};
                                }};
                                interface_ = AttachedDiskInterfaceEnum.SCSI;
                                kind = "veritatis";
                                licenses = new String[]{{
                                    add("exercitationem"),
                                    add("totam"),
                                }};
                                mode = AttachedDiskModeEnum.READ_WRITE;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "recusandae";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "reiciendis";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "nulla";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "nesciunt";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "rerum";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "ratione";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "officiis";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "neque";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "voluptas";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }};
                                }};
                                source = "et";
                                type = AttachedDiskTypeEnum.PERSISTENT;
                            }}),
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                autoDelete = false;
                                boot = false;
                                deviceName = "eius";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "tenetur";
                                    kmsKeyServiceAccount = "excepturi";
                                    rawKey = "optio";
                                    rsaEncryptedKey = "temporibus";
                                    sha256 = "iure";
                                }};
                                diskSizeGb = "ullam";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                                    }}),
                                }};
                                index = 980404;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                    description = "iure";
                                    diskName = "sit";
                                    diskSizeGb = "corrupti";
                                    diskType = "nemo";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("nobis", "incidunt");
                                    }};
                                    licenses = new String[]{{
                                        add("eius"),
                                    }};
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK_IF_SOURCE_CHANGED;
                                    provisionedIops = "odit";
                                    provisionedThroughput = "fugit";
                                    replicaZones = new String[]{{
                                        add("illo"),
                                        add("sequi"),
                                        add("officia"),
                                        add("voluptatem"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("doloribus", "et");
                                        put("hic", "earum");
                                        put("nam", "qui");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("praesentium"),
                                        add("quia"),
                                        add("esse"),
                                        add("inventore"),
                                    }};
                                    sourceImage = "odit";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "pariatur";
                                        kmsKeyServiceAccount = "nam";
                                        rawKey = "corporis";
                                        rsaEncryptedKey = "est";
                                        sha256 = "ad";
                                    }};
                                    sourceSnapshot = "sapiente";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "harum";
                                        kmsKeyServiceAccount = "vitae";
                                        rawKey = "eligendi";
                                        rsaEncryptedKey = "similique";
                                        sha256 = "iste";
                                    }};
                                }};
                                interface_ = AttachedDiskInterfaceEnum.SCSI;
                                kind = "quasi";
                                licenses = new String[]{{
                                    add("nemo"),
                                    add("officiis"),
                                    add("aut"),
                                    add("perferendis"),
                                }};
                                mode = AttachedDiskModeEnum.READ_ONLY;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "libero";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "pariatur";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "repellat";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "possimus";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "fuga";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "minima";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "magni";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "facere";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }};
                                }};
                                source = "recusandae";
                                type = AttachedDiskTypeEnum.SCRATCH;
                            }}),
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.X8664;
                                autoDelete = false;
                                boot = false;
                                deviceName = "doloribus";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "non";
                                    kmsKeyServiceAccount = "facilis";
                                    rawKey = "et";
                                    rsaEncryptedKey = "mollitia";
                                    sha256 = "blanditiis";
                                }};
                                diskSizeGb = "debitis";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.GVNIC;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.WINDOWS;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.WINDOWS;
                                    }}),
                                }};
                                index = 208188;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                    description = "ipsum";
                                    diskName = "sit";
                                    diskSizeGb = "iure";
                                    diskType = "similique";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("explicabo", "dolorum");
                                        put("omnis", "alias");
                                    }};
                                    licenses = new String[]{{
                                        add("repellendus"),
                                    }};
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.USE_EXISTING_DISK;
                                    provisionedIops = "ipsum";
                                    provisionedThroughput = "laboriosam";
                                    replicaZones = new String[]{{
                                        add("eligendi"),
                                        add("facere"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("cumque", "molestiae");
                                        put("reprehenderit", "praesentium");
                                        put("blanditiis", "et");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("mollitia"),
                                    }};
                                    sourceImage = "quia";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "officia";
                                        kmsKeyServiceAccount = "nisi";
                                        rawKey = "facere";
                                        rsaEncryptedKey = "maxime";
                                        sha256 = "aperiam";
                                    }};
                                    sourceSnapshot = "ipsam";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "ratione";
                                        kmsKeyServiceAccount = "dolorum";
                                        rawKey = "id";
                                        rsaEncryptedKey = "eum";
                                        sha256 = "quos";
                                    }};
                                }};
                                interface_ = AttachedDiskInterfaceEnum.NVME;
                                kind = "commodi";
                                licenses = new String[]{{
                                    add("sit"),
                                    add("quisquam"),
                                }};
                                mode = AttachedDiskModeEnum.READ_WRITE;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "labore";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "unde";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "accusamus";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "adipisci";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "ducimus";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }};
                                }};
                                source = "recusandae";
                                type = AttachedDiskTypeEnum.PERSISTENT;
                            }}),
                        }};
                        guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 506127;
                                acceleratorType = "quos";
                            }}),
                        }};
                        keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum.KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
                        labels = new java.util.HashMap<String, String>() {{
                            put("placeat", "iusto");
                            put("possimus", "saepe");
                            put("odit", "accusantium");
                            put("error", "rem");
                        }};
                        machineType = "ut";
                        metadata = new Metadata() {{
                            fingerprint = "alias";
                            items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                                add(new MetadataItems() {{
                                    key = "tempora";
                                    value = "perspiciatis";
                                }}),
                                add(new MetadataItems() {{
                                    key = "voluptates";
                                    value = "aliquam";
                                }}),
                                add(new MetadataItems() {{
                                    key = "commodi";
                                    value = "autem";
                                }}),
                            }};
                            kind = "quam";
                        }};;
                        minCpuPlatform = "cumque";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "cum";
                                        externalIpv6PrefixLength = 193157;
                                        kind = "aliquid";
                                        name = "Mr. Mabel Gorczany";
                                        natIP = "porro";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "commodi";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "omnis";
                                        externalIpv6PrefixLength = 871127;
                                        kind = "assumenda";
                                        name = "Elsie Hintz";
                                        natIP = "cupiditate";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "iusto";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "reiciendis";
                                        subnetworkRangeName = "totam";
                                    }}),
                                }};
                                fingerprint = "et";
                                internalIpv6PrefixLength = 980892;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "accusantium";
                                        externalIpv6PrefixLength = 677590;
                                        kind = "quaerat";
                                        name = "Alma McGlynn";
                                        natIP = "facilis";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "perspiciatis";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "impedit";
                                        externalIpv6PrefixLength = 130265;
                                        kind = "ullam";
                                        name = "Alyssa Rempel";
                                        natIP = "quibusdam";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "repellat";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "dolores";
                                        externalIpv6PrefixLength = 53613;
                                        kind = "itaque";
                                        name = "Joanne Boehm";
                                        natIP = "eligendi";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "nulla";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                                ipv6Address = "optio";
                                kind = "maiores";
                                name = "Gilbert Jerde";
                                network = "dolores";
                                networkAttachment = "iusto";
                                networkIP = "voluptate";
                                nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                                queueCount = 108241;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subnetwork = "quibusdam";
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "voluptatibus";
                                        externalIpv6PrefixLength = 275887;
                                        kind = "veritatis";
                                        name = "Rosie Bartell";
                                        natIP = "quos";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "laudantium";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "quos";
                                        externalIpv6PrefixLength = 971426;
                                        kind = "ratione";
                                        name = "Jared Bartell";
                                        natIP = "autem";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "officia";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "totam";
                                        externalIpv6PrefixLength = 452742;
                                        kind = "deserunt";
                                        name = "Maureen Ryan";
                                        natIP = "nam";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "libero";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "beatae";
                                        externalIpv6PrefixLength = 286550;
                                        kind = "rerum";
                                        name = "Brenda Jenkins";
                                        natIP = "reprehenderit";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "a";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "et";
                                        subnetworkRangeName = "optio";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "quia";
                                        subnetworkRangeName = "esse";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "quasi";
                                        subnetworkRangeName = "laudantium";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "consequuntur";
                                        subnetworkRangeName = "hic";
                                    }}),
                                }};
                                fingerprint = "voluptatem";
                                internalIpv6PrefixLength = 454501;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "nesciunt";
                                        externalIpv6PrefixLength = 801097;
                                        kind = "ad";
                                        name = "Velma Hane";
                                        natIP = "totam";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "perferendis";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "laudantium";
                                        externalIpv6PrefixLength = 67334;
                                        kind = "eum";
                                        name = "Esther O'Connell";
                                        natIP = "placeat";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "quaerat";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "aperiam";
                                        externalIpv6PrefixLength = 415623;
                                        kind = "repellendus";
                                        name = "Olivia VonRueden";
                                        natIP = "optio";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "eligendi";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "id";
                                        externalIpv6PrefixLength = 442657;
                                        kind = "facilis";
                                        name = "Omar O'Kon";
                                        natIP = "odio";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "harum";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                                ipv6Address = "illum";
                                kind = "quibusdam";
                                name = "Mr. Mitchell Turcotte";
                                network = "fugiat";
                                networkAttachment = "repellat";
                                networkIP = "quibusdam";
                                nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                                queueCount = 130669;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                subnetwork = "nam";
                            }}),
                        }};
                        networkPerformanceConfig = new NetworkPerformanceConfig() {{
                            totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER1;
                        }};;
                        privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum.ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE;
                        reservationAffinity = new ReservationAffinity() {{
                            consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.UNSPECIFIED;
                            key = "placeat";
                            values = new String[]{{
                                add("quod"),
                                add("explicabo"),
                            }};
                        }};;
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("sequi", "eum");
                            put("aliquam", "ducimus");
                            put("nulla", "eum");
                            put("cum", "praesentium");
                        }};
                        resourcePolicies = new String[]{{
                            add("facere"),
                            add("nam"),
                            add("at"),
                        }};
                        scheduling = new Scheduling() {{
                            automaticRestart = false;
                            instanceTerminationAction = SchedulingInstanceTerminationActionEnum.STOP;
                            locationHint = "aut";
                            minNodeCpus = 510214;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "ab";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("iste"),
                                        add("reprehenderit"),
                                        add("nobis"),
                                        add("unde"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "tempore";
                                    operator = SchedulingNodeAffinityOperatorEnum.IN;
                                    values = new String[]{{
                                        add("cum"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "expedita";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("perferendis"),
                                        add("aut"),
                                        add("repellendus"),
                                        add("ad"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = SchedulingOnHostMaintenanceEnum.TERMINATE;
                            preemptible = false;
                            provisioningModel = SchedulingProvisioningModelEnum.SPOT;
                        }};;
                        serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                            add(new ServiceAccount() {{
                                email = "Lester_Stroman@gmail.com";
                                scopes = new String[]{{
                                    add("cum"),
                                    add("repellendus"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Donato.Casper37@gmail.com";
                                scopes = new String[]{{
                                    add("necessitatibus"),
                                    add("eius"),
                                    add("aspernatur"),
                                    add("natus"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Filiberto_Douglas@gmail.com";
                                scopes = new String[]{{
                                    add("voluptatum"),
                                    add("tempore"),
                                    add("dolorum"),
                                    add("quis"),
                                }};
                            }}),
                        }};
                        shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                            enableIntegrityMonitoring = false;
                            enableSecureBoot = false;
                            enableVtpm = false;
                        }};;
                        tags = new Tags() {{
                            fingerprint = "alias";
                            items = new String[]{{
                                add("dolorum"),
                                add("enim"),
                                add("laborum"),
                                add("nobis"),
                            }};
                        }};;
                    }};;
                    locationPolicy = new LocationPolicy() {{
                        locations = new java.util.HashMap<String, org.openapis.openapi.models.shared.LocationPolicyLocation>() {{
                            put("quisquam", new LocationPolicyLocation() {{
                                constraints = new LocationPolicyLocationConstraints() {{
                                    maxCount = 191173;
                                }};
                                preference = LocationPolicyLocationPreferenceEnum.DENY;
                            }});
                        }};
                        targetShape = LocationPolicyTargetShapeEnum.BALANCED;
                    }};;
                    minCount = "rem";
                    namePattern = "incidunt";
                    perInstanceProperties = new java.util.HashMap<String, org.openapis.openapi.models.shared.BulkInsertInstanceResourcePerInstanceProperties>() {{
                        put("modi", new BulkInsertInstanceResourcePerInstanceProperties() {{
                            name = "Dennis Renner";
                        }});
                        put("culpa", new BulkInsertInstanceResourcePerInstanceProperties() {{
                            name = "Dr. Christopher Turcotte";
                        }});
                    }};
                    sourceInstanceTemplate = "corrupti";
                }};;
                accessToken = "aliquam";
                alt = AltEnum.JSON;
                callback = "vero";
                fields = "officia";
                key = "excepturi";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "quasi";
                requestId = "deserunt";
                uploadType = "quasi";
                uploadProtocol = "ipsa";
                userIp = "officia";
            }};            

            ComputeRegionInstancesBulkInsertResponse res = sdk.regionInstances.computeRegionInstancesBulkInsert(req, new ComputeRegionInstancesBulkInsertSecurity() {{
                option1 = new ComputeRegionInstancesBulkInsertSecurityOption1("ratione", "voluptas") {{
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
