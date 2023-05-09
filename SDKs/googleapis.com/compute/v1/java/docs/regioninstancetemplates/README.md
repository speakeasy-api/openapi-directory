# regionInstanceTemplates

### Available Operations

* [computeRegionInstanceTemplatesDelete](#computeregioninstancetemplatesdelete) - Deletes the specified instance template. Deleting an instance template is permanent and cannot be undone.
* [computeRegionInstanceTemplatesGet](#computeregioninstancetemplatesget) - Returns the specified instance template.
* [computeRegionInstanceTemplatesInsert](#computeregioninstancetemplatesinsert) - Creates an instance template in the specified project and region using the global instance template whose URL is included in the request.
* [computeRegionInstanceTemplatesList](#computeregioninstancetemplateslist) - Retrieves a list of instance templates that are contained within the specified project and region.

## computeRegionInstanceTemplatesDelete

Deletes the specified instance template. Deleting an instance template is permanent and cannot be undone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceTemplatesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceTemplatesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceTemplatesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceTemplatesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceTemplatesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceTemplatesDeleteRequest req = new ComputeRegionInstanceTemplatesDeleteRequest("eveniet", "ab", "debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "fuga";
                fields = "quod";
                key = "dolorum";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "dolore";
                requestId = "nemo";
                uploadType = "consequuntur";
                uploadProtocol = "aliquam";
                userIp = "excepturi";
            }};            

            ComputeRegionInstanceTemplatesDeleteResponse res = sdk.regionInstanceTemplates.computeRegionInstanceTemplatesDelete(req, new ComputeRegionInstanceTemplatesDeleteSecurity() {{
                option1 = new ComputeRegionInstanceTemplatesDeleteSecurityOption1("accusamus", "accusantium") {{
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

## computeRegionInstanceTemplatesGet

Returns the specified instance template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceTemplatesGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceTemplatesGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceTemplatesGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceTemplatesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceTemplatesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionInstanceTemplatesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceTemplatesGetRequest req = new ComputeRegionInstanceTemplatesGetRequest("totam", "possimus", "magni") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "minus";
                alt = AltEnum.PROTO;
                callback = "magnam";
                fields = "recusandae";
                key = "enim";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "sit";
                uploadType = "nihil";
                uploadProtocol = "quaerat";
                userIp = "laborum";
            }};            

            ComputeRegionInstanceTemplatesGetResponse res = sdk.regionInstanceTemplates.computeRegionInstanceTemplatesGet(req, new ComputeRegionInstanceTemplatesGetSecurity() {{
                option1 = new ComputeRegionInstanceTemplatesGetSecurityOption1("soluta", "voluptatibus") {{
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

## computeRegionInstanceTemplatesInsert

Creates an instance template in the specified project and region using the global instance template whose URL is included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceTemplatesInsertRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceTemplatesInsertResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceTemplatesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceTemplatesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceTemplatesInsertSecurityOption2;
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
import org.openapis.openapi.models.shared.ConfidentialInstanceConfig;
import org.openapis.openapi.models.shared.CustomerEncryptionKey;
import org.openapis.openapi.models.shared.DiskInstantiationConfig;
import org.openapis.openapi.models.shared.DiskInstantiationConfigInstantiateFromEnum;
import org.openapis.openapi.models.shared.FileContentBuffer;
import org.openapis.openapi.models.shared.FileContentBufferFileTypeEnum;
import org.openapis.openapi.models.shared.GuestOsFeature;
import org.openapis.openapi.models.shared.GuestOsFeatureTypeEnum;
import org.openapis.openapi.models.shared.InitialStateConfig;
import org.openapis.openapi.models.shared.InstanceProperties;
import org.openapis.openapi.models.shared.InstancePropertiesKeyRevocationActionTypeEnum;
import org.openapis.openapi.models.shared.InstancePropertiesPrivateIpv6GoogleAccessEnum;
import org.openapis.openapi.models.shared.InstanceTemplate;
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
import org.openapis.openapi.models.shared.SourceInstanceParams;
import org.openapis.openapi.models.shared.Tags;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceTemplatesInsertRequest req = new ComputeRegionInstanceTemplatesInsertRequest("temporibus", "fugiat") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceTemplate = new InstanceTemplate() {{
                    creationTimestamp = "animi";
                    description = "cum";
                    id = "iure";
                    kind = "reiciendis";
                    name = "Mr. Bruce Beer";
                    properties = new InstanceProperties() {{
                        advancedMachineFeatures = new AdvancedMachineFeatures() {{
                            enableNestedVirtualization = false;
                            enableUefiNetworking = false;
                            threadsPerCore = 753618;
                            visibleCoreCount = 493460;
                        }};;
                        canIpForward = false;
                        confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                            enableConfidentialCompute = false;
                        }};;
                        description = "explicabo";
                        disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.X8664;
                                autoDelete = false;
                                boot = false;
                                deviceName = "voluptate";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "nisi";
                                    kmsKeyServiceAccount = "ad";
                                    rawKey = "a";
                                    rsaEncryptedKey = "laborum";
                                    sha256 = "quae";
                                }};
                                diskSizeGb = "aliquam";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                                    }}),
                                }};
                                index = 101086;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                    description = "atque";
                                    diskName = "sunt";
                                    diskSizeGb = "consequatur";
                                    diskType = "iure";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("occaecati", "voluptate");
                                    }};
                                    licenses = new String[]{{
                                        add("exercitationem"),
                                        add("rerum"),
                                        add("pariatur"),
                                    }};
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK;
                                    provisionedIops = "labore";
                                    provisionedThroughput = "iure";
                                    replicaZones = new String[]{{
                                        add("assumenda"),
                                        add("eveniet"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("dolores", "nisi");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("nemo"),
                                        add("aliquid"),
                                        add("optio"),
                                    }};
                                    sourceImage = "quae";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "nostrum";
                                        kmsKeyServiceAccount = "quod";
                                        rawKey = "necessitatibus";
                                        rsaEncryptedKey = "repellat";
                                        sha256 = "doloribus";
                                    }};
                                    sourceSnapshot = "autem";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "dolorem";
                                        kmsKeyServiceAccount = "perspiciatis";
                                        rawKey = "ullam";
                                        rsaEncryptedKey = "temporibus";
                                        sha256 = "dolores";
                                    }};
                                }};
                                interface_ = AttachedDiskInterfaceEnum.SCSI;
                                kind = "adipisci";
                                licenses = new String[]{{
                                    add("omnis"),
                                    add("ut"),
                                    add("cupiditate"),
                                }};
                                mode = AttachedDiskModeEnum.READ_ONLY;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "at";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "illo";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "deserunt";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "quidem";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "iure";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "sed";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "doloribus";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "enim";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "assumenda";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "magni";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }};
                                }};
                                source = "optio";
                                type = AttachedDiskTypeEnum.PERSISTENT;
                            }}),
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.X8664;
                                autoDelete = false;
                                boot = false;
                                deviceName = "sequi";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "minus";
                                    kmsKeyServiceAccount = "similique";
                                    rawKey = "repellat";
                                    rsaEncryptedKey = "dignissimos";
                                    sha256 = "fuga";
                                }};
                                diskSizeGb = "pariatur";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                                    }}),
                                }};
                                index = 758433;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARM64;
                                    description = "esse";
                                    diskName = "modi";
                                    diskSizeGb = "amet";
                                    diskType = "dolores";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("totam", "perferendis");
                                    }};
                                    licenses = new String[]{{
                                        add("optio"),
                                        add("excepturi"),
                                        add("exercitationem"),
                                    }};
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK_IF_SOURCE_CHANGED;
                                    provisionedIops = "optio";
                                    provisionedThroughput = "ducimus";
                                    replicaZones = new String[]{{
                                        add("neque"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("dolorum", "doloremque");
                                        put("praesentium", "perspiciatis");
                                        put("temporibus", "sit");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("quidem"),
                                        add("atque"),
                                        add("minus"),
                                        add("suscipit"),
                                    }};
                                    sourceImage = "commodi";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "totam";
                                        kmsKeyServiceAccount = "ullam";
                                        rawKey = "repudiandae";
                                        rsaEncryptedKey = "consectetur";
                                        sha256 = "rem";
                                    }};
                                    sourceSnapshot = "fugiat";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "deleniti";
                                        kmsKeyServiceAccount = "nihil";
                                        rawKey = "totam";
                                        rsaEncryptedKey = "eligendi";
                                        sha256 = "voluptatibus";
                                    }};
                                }};
                                interface_ = AttachedDiskInterfaceEnum.SCSI;
                                kind = "necessitatibus";
                                licenses = new String[]{{
                                    add("ea"),
                                }};
                                mode = AttachedDiskModeEnum.READ_ONLY;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "eius";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "nulla";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "a";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "sequi";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "facilis";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "ut";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "aperiam";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "voluptate";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }};
                                }};
                                source = "officia";
                                type = AttachedDiskTypeEnum.SCRATCH;
                            }}),
                        }};
                        guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 115240;
                                acceleratorType = "a";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 342121;
                                acceleratorType = "officia";
                            }}),
                        }};
                        keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum.NONE;
                        labels = new java.util.HashMap<String, String>() {{
                            put("blanditiis", "quod");
                            put("voluptates", "praesentium");
                            put("distinctio", "consequuntur");
                            put("in", "mollitia");
                        }};
                        machineType = "ratione";
                        metadata = new Metadata() {{
                            fingerprint = "sed";
                            items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                                add(new MetadataItems() {{
                                    key = "ex";
                                    value = "dolor";
                                }}),
                                add(new MetadataItems() {{
                                    key = "dignissimos";
                                    value = "reprehenderit";
                                }}),
                                add(new MetadataItems() {{
                                    key = "ducimus";
                                    value = "quisquam";
                                }}),
                            }};
                            kind = "non";
                        }};;
                        minCpuPlatform = "eveniet";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "quos";
                                        externalIpv6PrefixLength = 662085;
                                        kind = "voluptate";
                                        name = "Amy Sipes";
                                        natIP = "vitae";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "asperiores";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "dignissimos";
                                        subnetworkRangeName = "nemo";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "alias";
                                        subnetworkRangeName = "temporibus";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "reiciendis";
                                        subnetworkRangeName = "architecto";
                                    }}),
                                }};
                                fingerprint = "officiis";
                                internalIpv6PrefixLength = 877781;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "animi";
                                        externalIpv6PrefixLength = 577767;
                                        kind = "inventore";
                                        name = "Brad Zulauf";
                                        natIP = "error";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "cum";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                                ipv6Address = "temporibus";
                                kind = "deserunt";
                                name = "Miss Rufus O'Reilly";
                                network = "molestias";
                                networkAttachment = "eum";
                                networkIP = "facilis";
                                nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                                queueCount = 87301;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subnetwork = "sed";
                            }}),
                        }};
                        networkPerformanceConfig = new NetworkPerformanceConfig() {{
                            totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER1;
                        }};;
                        privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum.ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE;
                        reservationAffinity = new ReservationAffinity() {{
                            consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.UNSPECIFIED;
                            key = "eius";
                            values = new String[]{{
                                add("blanditiis"),
                                add("dolor"),
                                add("fuga"),
                                add("labore"),
                            }};
                        }};;
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("assumenda", "pariatur");
                            put("mollitia", "fugit");
                        }};
                        resourcePolicies = new String[]{{
                            add("reiciendis"),
                        }};
                        scheduling = new Scheduling() {{
                            automaticRestart = false;
                            instanceTerminationAction = SchedulingInstanceTerminationActionEnum.STOP;
                            locationHint = "temporibus";
                            minNodeCpus = 904135;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "culpa";
                                    operator = SchedulingNodeAffinityOperatorEnum.IN;
                                    values = new String[]{{
                                        add("sequi"),
                                        add("quos"),
                                        add("pariatur"),
                                        add("nulla"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "pariatur";
                                    operator = SchedulingNodeAffinityOperatorEnum.IN;
                                    values = new String[]{{
                                        add("a"),
                                        add("voluptatum"),
                                        add("corporis"),
                                        add("porro"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "architecto";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("iste"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "culpa";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("cum"),
                                        add("eaque"),
                                        add("suscipit"),
                                        add("nihil"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = SchedulingOnHostMaintenanceEnum.MIGRATE;
                            preemptible = false;
                            provisioningModel = SchedulingProvisioningModelEnum.STANDARD;
                        }};;
                        serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                            add(new ServiceAccount() {{
                                email = "Bette.Johnston@yahoo.com";
                                scopes = new String[]{{
                                    add("vitae"),
                                    add("quasi"),
                                    add("veniam"),
                                    add("minima"),
                                }};
                            }}),
                        }};
                        shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                            enableIntegrityMonitoring = false;
                            enableSecureBoot = false;
                            enableVtpm = false;
                        }};;
                        tags = new Tags() {{
                            fingerprint = "ut";
                            items = new String[]{{
                                add("nemo"),
                                add("molestias"),
                                add("illo"),
                                add("eaque"),
                            }};
                        }};;
                    }};;
                    region = "amet";
                    selfLink = "similique";
                    sourceInstance = "laudantium";
                    sourceInstanceParams = new SourceInstanceParams() {{
                        diskConfigs = new org.openapis.openapi.models.shared.DiskInstantiationConfig[]{{
                            add(new DiskInstantiationConfig() {{
                                autoDelete = false;
                                customImage = "asperiores";
                                deviceName = "harum";
                                instantiateFrom = DiskInstantiationConfigInstantiateFromEnum.CUSTOM_IMAGE;
                            }}),
                            add(new DiskInstantiationConfig() {{
                                autoDelete = false;
                                customImage = "temporibus";
                                deviceName = "commodi";
                                instantiateFrom = DiskInstantiationConfigInstantiateFromEnum.SOURCE_IMAGE;
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "ut";
                alt = AltEnum.JSON;
                callback = "quas";
                fields = "eos";
                key = "nulla";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "est";
                requestId = "nulla";
                uploadType = "repellat";
                uploadProtocol = "consequuntur";
                userIp = "tenetur";
            }};            

            ComputeRegionInstanceTemplatesInsertResponse res = sdk.regionInstanceTemplates.computeRegionInstanceTemplatesInsert(req, new ComputeRegionInstanceTemplatesInsertSecurity() {{
                option1 = new ComputeRegionInstanceTemplatesInsertSecurityOption1("hic", "quibusdam") {{
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

## computeRegionInstanceTemplatesList

Retrieves a list of instance templates that are contained within the specified project and region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceTemplatesListRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceTemplatesListResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceTemplatesListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceTemplatesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceTemplatesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionInstanceTemplatesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceTemplatesListRequest req = new ComputeRegionInstanceTemplatesListRequest("error", "doloremque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eligendi";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "error";
                filter = "soluta";
                key = "consequuntur";
                maxResults = 977455L;
                oauthToken = "quod";
                orderBy = "dolor";
                pageToken = "harum";
                prettyPrint = false;
                quotaUser = "corporis";
                returnPartialSuccess = false;
                uploadType = "quis";
                uploadProtocol = "quos";
                userIp = "eum";
            }};            

            ComputeRegionInstanceTemplatesListResponse res = sdk.regionInstanceTemplates.computeRegionInstanceTemplatesList(req, new ComputeRegionInstanceTemplatesListSecurity() {{
                option1 = new ComputeRegionInstanceTemplatesListSecurityOption1("quis", "consectetur") {{
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
