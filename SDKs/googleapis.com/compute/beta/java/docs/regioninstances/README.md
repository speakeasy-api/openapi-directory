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
import org.openapis.openapi.models.shared.NetworkPerformanceConfig;
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
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.ShieldedVmConfig;
import org.openapis.openapi.models.shared.Tags;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstancesBulkInsertRequest req = new ComputeRegionInstancesBulkInsertRequest("amet", "aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                bulkInsertInstanceResource = new BulkInsertInstanceResource() {{
                    count = "eligendi";
                    instanceProperties = new InstanceProperties() {{
                        advancedMachineFeatures = new AdvancedMachineFeatures() {{
                            enableNestedVirtualization = false;
                            enableUefiNetworking = false;
                            threadsPerCore = 36925;
                            visibleCoreCount = 348874;
                        }};;
                        canIpForward = false;
                        confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                            enableConfidentialCompute = false;
                        }};;
                        description = "nihil";
                        disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.ARM64;
                                autoDelete = false;
                                boot = false;
                                deviceName = "similique";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "voluptate";
                                    kmsKeyServiceAccount = "quasi";
                                    rawKey = "modi";
                                    rsaEncryptedKey = "quaerat";
                                    sha256 = "distinctio";
                                }};
                                diskSizeGb = "aliquid";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                index = 794575;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                    description = "voluptas";
                                    diskName = "corrupti";
                                    diskSizeGb = "minima";
                                    diskType = "expedita";
                                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.WINDOWS;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                                        }}),
                                    }};
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("officia", "natus");
                                        put("sed", "vitae");
                                    }};
                                    licenses = new String[]{{
                                        add("et"),
                                        add("molestiae"),
                                        add("eius"),
                                        add("temporibus"),
                                    }};
                                    multiWriter = false;
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.USE_EXISTING_DISK;
                                    provisionedIops = "adipisci";
                                    provisionedThroughput = "dicta";
                                    replicaZones = new String[]{{
                                        add("minima"),
                                        add("iusto"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("at", "non");
                                        put("iure", "optio");
                                        put("minus", "ipsa");
                                        put("tempore", "expedita");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("autem"),
                                        add("quia"),
                                    }};
                                    sourceImage = "animi";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "nesciunt";
                                        kmsKeyServiceAccount = "perferendis";
                                        rawKey = "labore";
                                        rsaEncryptedKey = "cumque";
                                        sha256 = "asperiores";
                                    }};
                                    sourceSnapshot = "consequuntur";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "ipsa";
                                        kmsKeyServiceAccount = "non";
                                        rawKey = "commodi";
                                        rsaEncryptedKey = "distinctio";
                                        sha256 = "nulla";
                                    }};
                                }};
                                interface_ = AttachedDiskInterfaceEnum.SCSI;
                                kind = "aliquam";
                                licenses = new String[]{{
                                    add("velit"),
                                    add("quibusdam"),
                                }};
                                locked = false;
                                mode = AttachedDiskModeEnum.READ_WRITE;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "necessitatibus";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "eos";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "doloribus";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "praesentium";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }};
                                }};
                                source = "accusantium";
                                type = AttachedDiskTypeEnum.SCRATCH;
                                userLicenses = new String[]{{
                                    add("id"),
                                    add("mollitia"),
                                }};
                            }}),
                        }};
                        displayDevice = new DisplayDevice() {{
                            enableDisplay = false;
                        }};;
                        guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 148955;
                                acceleratorType = "eligendi";
                            }}),
                        }};
                        keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum.KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
                        labels = new java.util.HashMap<String, String>() {{
                            put("voluptas", "laborum");
                            put("exercitationem", "eligendi");
                            put("maiores", "minus");
                            put("at", "similique");
                        }};
                        machineType = "libero";
                        metadata = new Metadata() {{
                            fingerprint = "nihil";
                            items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                                add(new MetadataItems() {{
                                    key = "rem";
                                    value = "impedit";
                                }}),
                                add(new MetadataItems() {{
                                    key = "recusandae";
                                    value = "eligendi";
                                }}),
                                add(new MetadataItems() {{
                                    key = "maiores";
                                    value = "in";
                                }}),
                                add(new MetadataItems() {{
                                    key = "quibusdam";
                                    value = "sed";
                                }}),
                            }};
                            kind = "ullam";
                        }};;
                        minCpuPlatform = "praesentium";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "ab";
                                        externalIpv6PrefixLength = 931571;
                                        kind = "adipisci";
                                        name = "Miss Janis Gibson";
                                        natIP = "laborum";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "nisi";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "expedita";
                                        externalIpv6PrefixLength = 136208;
                                        kind = "dolorem";
                                        name = "Stephen Lind PhD";
                                        natIP = "laudantium";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "perferendis";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "labore";
                                        externalIpv6PrefixLength = 971461;
                                        kind = "velit";
                                        name = "Joshua Jacobson";
                                        natIP = "eum";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "non";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "modi";
                                        externalIpv6PrefixLength = 655178;
                                        kind = "eveniet";
                                        name = "Julian Kohler IV";
                                        natIP = "assumenda";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "ipsam";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "amet";
                                        subnetworkRangeName = "voluptate";
                                    }}),
                                }};
                                fingerprint = "magni";
                                internalIpv6PrefixLength = 556291;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "similique";
                                        externalIpv6PrefixLength = 208974;
                                        kind = "adipisci";
                                        name = "Margie Kuphal";
                                        natIP = "numquam";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "consequuntur";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "optio";
                                        externalIpv6PrefixLength = 953569;
                                        kind = "ut";
                                        name = "Abraham Satterfield";
                                        natIP = "perferendis";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "ullam";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "consectetur";
                                        externalIpv6PrefixLength = 512780;
                                        kind = "repellendus";
                                        name = "Thomas Kunze";
                                        natIP = "dolores";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "deleniti";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "porro";
                                        externalIpv6PrefixLength = 127101;
                                        kind = "velit";
                                        name = "Beulah Hermann";
                                        natIP = "libero";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "ea";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "harum";
                                kind = "alias";
                                name = "Kelley Baumbach";
                                network = "enim";
                                networkAttachment = "excepturi";
                                networkIP = "distinctio";
                                nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                                queueCount = 43917;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                subnetwork = "deserunt";
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "voluptas";
                                        externalIpv6PrefixLength = 345002;
                                        kind = "officiis";
                                        name = "Carrie Morar";
                                        natIP = "corporis";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "alias";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "eum";
                                        externalIpv6PrefixLength = 659077;
                                        kind = "odio";
                                        name = "Randal Okuneva";
                                        natIP = "animi";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "ullam";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "nihil";
                                        externalIpv6PrefixLength = 31033;
                                        kind = "animi";
                                        name = "Ms. Clifford Champlin";
                                        natIP = "beatae";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "deserunt";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "quae";
                                        subnetworkRangeName = "doloremque";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "molestiae";
                                        subnetworkRangeName = "nobis";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "inventore";
                                        subnetworkRangeName = "voluptatum";
                                    }}),
                                }};
                                fingerprint = "aperiam";
                                internalIpv6PrefixLength = 452874;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "debitis";
                                        externalIpv6PrefixLength = 589111;
                                        kind = "porro";
                                        name = "Teri Lockman";
                                        natIP = "dignissimos";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "ipsam";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "enim";
                                        externalIpv6PrefixLength = 723498;
                                        kind = "magnam";
                                        name = "April Kovacek";
                                        natIP = "quos";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "quae";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "quaerat";
                                        externalIpv6PrefixLength = 158019;
                                        kind = "exercitationem";
                                        name = "Terry Gusikowski";
                                        natIP = "distinctio";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "aspernatur";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "minus";
                                kind = "odio";
                                name = "Bonnie Rodriguez";
                                network = "magnam";
                                networkAttachment = "dignissimos";
                                networkIP = "eligendi";
                                nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                                queueCount = 517933;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                subnetwork = "unde";
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "facilis";
                                        externalIpv6PrefixLength = 694555;
                                        kind = "eos";
                                        name = "Bob Smitham";
                                        natIP = "beatae";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "illum";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "veniam";
                                        externalIpv6PrefixLength = 881840;
                                        kind = "cumque";
                                        name = "Archie Smith";
                                        natIP = "iste";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "laudantium";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "perspiciatis";
                                        subnetworkRangeName = "sit";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "est";
                                        subnetworkRangeName = "perspiciatis";
                                    }}),
                                }};
                                fingerprint = "neque";
                                internalIpv6PrefixLength = 547083;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "nam";
                                        externalIpv6PrefixLength = 143696;
                                        kind = "velit";
                                        name = "Cory Bahringer";
                                        natIP = "illum";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "rem";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                                ipv6Address = "ipsam";
                                kind = "incidunt";
                                name = "Colleen McDermott";
                                network = "fugit";
                                networkAttachment = "dolorum";
                                networkIP = "ab";
                                nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                                queueCount = 185809;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subnetwork = "repellendus";
                            }}),
                        }};
                        networkPerformanceConfig = new NetworkPerformanceConfig() {{
                            totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.DEFAULT_;
                        }};;
                        postKeyRevocationActionType = InstancePropertiesPostKeyRevocationActionTypeEnum.POST_KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
                        privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum.INHERIT_FROM_SUBNETWORK;
                        reservationAffinity = new ReservationAffinity() {{
                            consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.ANY_RESERVATION;
                            key = "recusandae";
                            values = new String[]{{
                                add("ea"),
                                add("aspernatur"),
                                add("odit"),
                                add("occaecati"),
                            }};
                        }};;
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("atque", "labore");
                            put("dolorem", "repellendus");
                        }};
                        resourcePolicies = new String[]{{
                            add("reiciendis"),
                        }};
                        scheduling = new Scheduling() {{
                            automaticRestart = false;
                            hostErrorTimeoutSeconds = 920800;
                            instanceTerminationAction = SchedulingInstanceTerminationActionEnum.STOP;
                            locationHint = "sunt";
                            maintenanceFreezeDurationHours = 1192;
                            maintenanceInterval = SchedulingMaintenanceIntervalEnum.PERIODIC;
                            maxRunDuration = new Duration() {{
                                nanos = 294082;
                                seconds = "officiis";
                            }};;
                            minNodeCpus = 555193;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "rerum";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("repudiandae"),
                                        add("accusantium"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "error";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("atque"),
                                        add("maxime"),
                                        add("ipsa"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "pariatur";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("minima"),
                                        add("voluptate"),
                                        add("placeat"),
                                        add("labore"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = SchedulingOnHostMaintenanceEnum.MIGRATE;
                            preemptible = false;
                            provisioningModel = SchedulingProvisioningModelEnum.STANDARD;
                            terminationTime = "molestias";
                        }};;
                        serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                            add(new ServiceAccount() {{
                                email = "Jermaine_Weissnat@yahoo.com";
                                scopes = new String[]{{
                                    add("mollitia"),
                                    add("aliquid"),
                                }};
                            }}),
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
                            fingerprint = "vel";
                            items = new String[]{{
                                add("aspernatur"),
                                add("repellat"),
                                add("nihil"),
                            }};
                        }};;
                    }};;
                    locationPolicy = new LocationPolicy() {{
                        locations = new java.util.HashMap<String, org.openapis.openapi.models.shared.LocationPolicyLocation>() {{
                            put("nam", new LocationPolicyLocation() {{
                                constraints = new LocationPolicyLocationConstraints() {{
                                    maxCount = 324065;
                                }};
                                preference = LocationPolicyLocationPreferenceEnum.DENY;
                            }});
                        }};
                        targetShape = LocationPolicyTargetShapeEnum.ANY_SINGLE_ZONE;
                    }};;
                    minCount = "omnis";
                    namePattern = "vel";
                    perInstanceProperties = new java.util.HashMap<String, org.openapis.openapi.models.shared.BulkInsertInstanceResourcePerInstanceProperties>() {{
                        put("libero", new BulkInsertInstanceResourcePerInstanceProperties() {{
                            name = "Sarah Lueilwitz";
                        }});
                        put("molestias", new BulkInsertInstanceResourcePerInstanceProperties() {{
                            name = "Alfred Stamm";
                        }});
                        put("quis", new BulkInsertInstanceResourcePerInstanceProperties() {{
                            name = "Dixie Kunde";
                        }});
                        put("nam", new BulkInsertInstanceResourcePerInstanceProperties() {{
                            name = "Hubert Ziemann";
                        }});
                    }};
                    sourceInstanceTemplate = "repellendus";
                }};;
                accessToken = "omnis";
                alt = AltEnum.PROTO;
                callback = "repellat";
                fields = "odio";
                key = "temporibus";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "laudantium";
                requestId = "ullam";
                uploadType = "voluptatum";
                uploadProtocol = "dolorem";
                userIp = "ad";
            }};            

            ComputeRegionInstancesBulkInsertResponse res = sdk.regionInstances.computeRegionInstancesBulkInsert(req, new ComputeRegionInstancesBulkInsertSecurity() {{
                option1 = new ComputeRegionInstancesBulkInsertSecurityOption1("incidunt", "veniam") {{
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
