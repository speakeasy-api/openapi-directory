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

            ComputeRegionInstanceTemplatesDeleteRequest req = new ComputeRegionInstanceTemplatesDeleteRequest("in", "magni", "expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "exercitationem";
                alt = AltEnum.PROTO;
                callback = "qui";
                fields = "dolor";
                key = "harum";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "voluptate";
                requestId = "voluptatum";
                uploadType = "excepturi";
                uploadProtocol = "temporibus";
                userIp = "maxime";
            }};            

            ComputeRegionInstanceTemplatesDeleteResponse res = sdk.regionInstanceTemplates.computeRegionInstanceTemplatesDelete(req, new ComputeRegionInstanceTemplatesDeleteSecurity() {{
                option1 = new ComputeRegionInstanceTemplatesDeleteSecurityOption1("aliquam", "ullam") {{
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

            ComputeRegionInstanceTemplatesGetRequest req = new ComputeRegionInstanceTemplatesGetRequest("molestias", "dignissimos", "cupiditate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "adipisci";
                alt = AltEnum.JSON;
                callback = "libero";
                fields = "harum";
                key = "quidem";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "possimus";
                uploadType = "unde";
                uploadProtocol = "quos";
                userIp = "officiis";
            }};            

            ComputeRegionInstanceTemplatesGetResponse res = sdk.regionInstanceTemplates.computeRegionInstanceTemplatesGet(req, new ComputeRegionInstanceTemplatesGetSecurity() {{
                option1 = new ComputeRegionInstanceTemplatesGetSecurityOption1("molestiae", "eius") {{
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
import org.openapis.openapi.models.shared.SourceInstanceParams;
import org.openapis.openapi.models.shared.Tags;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceTemplatesInsertRequest req = new ComputeRegionInstanceTemplatesInsertRequest("enim", "laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceTemplate = new InstanceTemplate() {{
                    creationTimestamp = "quas";
                    description = "provident";
                    id = "atque";
                    kind = "ut";
                    name = "Hugh Herzog III";
                    properties = new InstanceProperties() {{
                        advancedMachineFeatures = new AdvancedMachineFeatures() {{
                            enableNestedVirtualization = false;
                            enableUefiNetworking = false;
                            threadsPerCore = 342279;
                            visibleCoreCount = 224237;
                        }};;
                        canIpForward = false;
                        confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                            enableConfidentialCompute = false;
                        }};;
                        description = "consequatur";
                        disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.X8664;
                                autoDelete = false;
                                boot = false;
                                deviceName = "fugiat";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "doloribus";
                                    kmsKeyServiceAccount = "excepturi";
                                    rawKey = "placeat";
                                    rsaEncryptedKey = "facilis";
                                    sha256 = "minus";
                                }};
                                diskSizeGb = "nesciunt";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.GVNIC;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
                                    }}),
                                }};
                                index = 567790;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.X8664;
                                    description = "ex";
                                    diskName = "vero";
                                    diskSizeGb = "dolores";
                                    diskType = "doloribus";
                                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                        }}),
                                    }};
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("cumque", "alias");
                                    }};
                                    licenses = new String[]{{
                                        add("ducimus"),
                                        add("quae"),
                                        add("ullam"),
                                        add("rerum"),
                                    }};
                                    multiWriter = false;
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK_IF_SOURCE_CHANGED;
                                    provisionedIops = "soluta";
                                    provisionedThroughput = "sint";
                                    replicaZones = new String[]{{
                                        add("illo"),
                                        add("delectus"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("fuga", "amet");
                                        put("odio", "officiis");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("cum"),
                                        add("accusamus"),
                                        add("qui"),
                                    }};
                                    sourceImage = "blanditiis";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "temporibus";
                                        kmsKeyServiceAccount = "unde";
                                        rawKey = "dignissimos";
                                        rsaEncryptedKey = "pariatur";
                                        sha256 = "placeat";
                                    }};
                                    sourceSnapshot = "provident";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "tempore";
                                        kmsKeyServiceAccount = "repudiandae";
                                        rawKey = "corporis";
                                        rsaEncryptedKey = "incidunt";
                                        sha256 = "unde";
                                    }};
                                }};
                                interface_ = AttachedDiskInterfaceEnum.NVME;
                                kind = "unde";
                                licenses = new String[]{{
                                    add("repudiandae"),
                                }};
                                locked = false;
                                mode = AttachedDiskModeEnum.READ_ONLY;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "provident";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "nisi";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "odit";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "labore";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "esse";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "quam";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }};
                                }};
                                source = "voluptas";
                                type = AttachedDiskTypeEnum.PERSISTENT;
                                userLicenses = new String[]{{
                                    add("expedita"),
                                }};
                            }}),
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.X8664;
                                autoDelete = false;
                                boot = false;
                                deviceName = "a";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "fugit";
                                    kmsKeyServiceAccount = "ratione";
                                    rawKey = "minima";
                                    rsaEncryptedKey = "et";
                                    sha256 = "quibusdam";
                                }};
                                diskSizeGb = "aliquid";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.GVNIC;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
                                    }}),
                                }};
                                index = 201861;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.X8664;
                                    description = "veniam";
                                    diskName = "labore";
                                    diskSizeGb = "et";
                                    diskType = "illo";
                                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.SECURE_BOOT;
                                        }}),
                                    }};
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("quas", "quae");
                                        put("rerum", "magni");
                                    }};
                                    licenses = new String[]{{
                                        add("impedit"),
                                        add("alias"),
                                    }};
                                    multiWriter = false;
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK_IF_SOURCE_CHANGED;
                                    provisionedIops = "cum";
                                    provisionedThroughput = "harum";
                                    replicaZones = new String[]{{
                                        add("similique"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("error", "debitis");
                                        put("ipsum", "ea");
                                        put("quas", "voluptatem");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("itaque"),
                                        add("veritatis"),
                                    }};
                                    sourceImage = "dolore";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "atque";
                                        kmsKeyServiceAccount = "libero";
                                        rawKey = "dolorem";
                                        rsaEncryptedKey = "nostrum";
                                        sha256 = "doloribus";
                                    }};
                                    sourceSnapshot = "quibusdam";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "itaque";
                                        kmsKeyServiceAccount = "mollitia";
                                        rawKey = "sed";
                                        rsaEncryptedKey = "dolore";
                                        sha256 = "veniam";
                                    }};
                                }};
                                interface_ = AttachedDiskInterfaceEnum.NVME;
                                kind = "aperiam";
                                licenses = new String[]{{
                                    add("nihil"),
                                }};
                                locked = false;
                                mode = AttachedDiskModeEnum.READ_WRITE;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "architecto";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "omnis";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "explicabo";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "eaque";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "sequi";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }};
                                }};
                                source = "dolore";
                                type = AttachedDiskTypeEnum.PERSISTENT;
                                userLicenses = new String[]{{
                                    add("officiis"),
                                    add("quidem"),
                                }};
                            }}),
                        }};
                        displayDevice = new DisplayDevice() {{
                            enableDisplay = false;
                        }};;
                        guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 758009;
                                acceleratorType = "inventore";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 627166;
                                acceleratorType = "aperiam";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 520827;
                                acceleratorType = "possimus";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 64544;
                                acceleratorType = "nemo";
                            }}),
                        }};
                        keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum.NONE;
                        labels = new java.util.HashMap<String, String>() {{
                            put("beatae", "quasi");
                        }};
                        machineType = "repellendus";
                        metadata = new Metadata() {{
                            fingerprint = "temporibus";
                            items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                                add(new MetadataItems() {{
                                    key = "facere";
                                    value = "ex";
                                }}),
                                add(new MetadataItems() {{
                                    key = "tempore";
                                    value = "ipsa";
                                }}),
                            }};
                            kind = "nemo";
                        }};;
                        minCpuPlatform = "autem";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "vero";
                                        externalIpv6PrefixLength = 496906;
                                        kind = "magni";
                                        name = "Cecil Jacobi";
                                        natIP = "nihil";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "ullam";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "laudantium";
                                        externalIpv6PrefixLength = 153422;
                                        kind = "possimus";
                                        name = "Marlene Heller";
                                        natIP = "nisi";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "deleniti";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "maxime";
                                        externalIpv6PrefixLength = 412538;
                                        kind = "corrupti";
                                        name = "Dora Daniel";
                                        natIP = "quo";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "amet";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "officiis";
                                        subnetworkRangeName = "aliquam";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "qui";
                                        subnetworkRangeName = "dicta";
                                    }}),
                                }};
                                fingerprint = "ducimus";
                                internalIpv6PrefixLength = 620277;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "id";
                                        externalIpv6PrefixLength = 988008;
                                        kind = "quasi";
                                        name = "Sophie Price II";
                                        natIP = "occaecati";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "impedit";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "quis";
                                        externalIpv6PrefixLength = 332663;
                                        kind = "omnis";
                                        name = "Leon Wisoky";
                                        natIP = "veniam";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "mollitia";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "natus";
                                        externalIpv6PrefixLength = 102110;
                                        kind = "voluptates";
                                        name = "Muriel Daniel";
                                        natIP = "natus";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "quos";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "dolorum";
                                        externalIpv6PrefixLength = 754606;
                                        kind = "vel";
                                        name = "Miss Toby Koch";
                                        natIP = "beatae";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "maxime";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                                ipv6Address = "provident";
                                kind = "expedita";
                                name = "Julia Brakus III";
                                network = "maxime";
                                networkAttachment = "aspernatur";
                                networkIP = "quibusdam";
                                nicType = NetworkInterfaceNicTypeEnum.VIRTIO_NET;
                                queueCount = 660905;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                subnetwork = "nisi";
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "soluta";
                                        externalIpv6PrefixLength = 273776;
                                        kind = "illum";
                                        name = "Brittany Hauck";
                                        natIP = "quidem";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "suscipit";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "accusantium";
                                        externalIpv6PrefixLength = 569966;
                                        kind = "iusto";
                                        name = "Laurie Paucek Jr.";
                                        natIP = "optio";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "nihil";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "harum";
                                        externalIpv6PrefixLength = 912855;
                                        kind = "temporibus";
                                        name = "Valerie Olson";
                                        natIP = "tempora";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "expedita";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "autem";
                                        subnetworkRangeName = "aliquam";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "magnam";
                                        subnetworkRangeName = "eveniet";
                                    }}),
                                }};
                                fingerprint = "impedit";
                                internalIpv6PrefixLength = 128783;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "odit";
                                        externalIpv6PrefixLength = 23035;
                                        kind = "iusto";
                                        name = "Miss Earnest Cremin";
                                        natIP = "animi";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "laborum";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "quidem";
                                        externalIpv6PrefixLength = 475052;
                                        kind = "repudiandae";
                                        name = "Bertha Grant";
                                        natIP = "iste";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "ducimus";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "iure";
                                        externalIpv6PrefixLength = 741563;
                                        kind = "debitis";
                                        name = "Jody Rohan";
                                        natIP = "enim";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "tempore";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "illum";
                                        externalIpv6PrefixLength = 510511;
                                        kind = "quaerat";
                                        name = "Rolando Kilback";
                                        natIP = "ad";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "iste";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "quidem";
                                kind = "eveniet";
                                name = "Mrs. Alexandra Shields";
                                network = "hic";
                                networkAttachment = "vero";
                                networkIP = "veniam";
                                nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                                queueCount = 699480;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                subnetwork = "nesciunt";
                            }}),
                        }};
                        networkPerformanceConfig = new NetworkPerformanceConfig() {{
                            totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER1;
                        }};;
                        postKeyRevocationActionType = InstancePropertiesPostKeyRevocationActionTypeEnum.NOOP;
                        privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum.INHERIT_FROM_SUBNETWORK;
                        reservationAffinity = new ReservationAffinity() {{
                            consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.NO_RESERVATION;
                            key = "accusamus";
                            values = new String[]{{
                                add("dolore"),
                                add("voluptatibus"),
                                add("dolore"),
                                add("voluptatem"),
                            }};
                        }};;
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("iusto", "cumque");
                        }};
                        resourcePolicies = new String[]{{
                            add("officiis"),
                            add("sunt"),
                            add("quidem"),
                        }};
                        scheduling = new Scheduling() {{
                            automaticRestart = false;
                            hostErrorTimeoutSeconds = 373111;
                            instanceTerminationAction = SchedulingInstanceTerminationActionEnum.STOP;
                            locationHint = "tempora";
                            maintenanceFreezeDurationHours = 868662;
                            maintenanceInterval = SchedulingMaintenanceIntervalEnum.PERIODIC;
                            maxRunDuration = new Duration() {{
                                nanos = 516770;
                                seconds = "voluptate";
                            }};;
                            minNodeCpus = 289673;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "iure";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("ut"),
                                        add("aut"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "delectus";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("nulla"),
                                        add("nulla"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "delectus";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("exercitationem"),
                                        add("placeat"),
                                        add("voluptas"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = SchedulingOnHostMaintenanceEnum.MIGRATE;
                            preemptible = false;
                            provisioningModel = SchedulingProvisioningModelEnum.STANDARD;
                            terminationTime = "sapiente";
                        }};;
                        serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                            add(new ServiceAccount() {{
                                email = "Jacynthe59@gmail.com";
                                scopes = new String[]{{
                                    add("eaque"),
                                    add("aspernatur"),
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
                            fingerprint = "ratione";
                            items = new String[]{{
                                add("reiciendis"),
                                add("distinctio"),
                            }};
                        }};;
                    }};;
                    region = "perspiciatis";
                    selfLink = "voluptas";
                    sourceInstance = "porro";
                    sourceInstanceParams = new SourceInstanceParams() {{
                        diskConfigs = new org.openapis.openapi.models.shared.DiskInstantiationConfig[]{{
                            add(new DiskInstantiationConfig() {{
                                autoDelete = false;
                                customImage = "aut";
                                deviceName = "molestiae";
                                instantiateFrom = DiskInstantiationConfigInstantiateFromEnum.DEFAULT_;
                            }}),
                            add(new DiskInstantiationConfig() {{
                                autoDelete = false;
                                customImage = "unde";
                                deviceName = "autem";
                                instantiateFrom = DiskInstantiationConfigInstantiateFromEnum.BLANK;
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "porro";
                alt = AltEnum.JSON;
                callback = "consectetur";
                fields = "tenetur";
                key = "aliquid";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "aperiam";
                requestId = "optio";
                uploadType = "ullam";
                uploadProtocol = "deleniti";
                userIp = "quia";
            }};            

            ComputeRegionInstanceTemplatesInsertResponse res = sdk.regionInstanceTemplates.computeRegionInstanceTemplatesInsert(req, new ComputeRegionInstanceTemplatesInsertSecurity() {{
                option1 = new ComputeRegionInstanceTemplatesInsertSecurityOption1("fuga", "debitis") {{
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

            ComputeRegionInstanceTemplatesListRequest req = new ComputeRegionInstanceTemplatesListRequest("aperiam", "eveniet") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "ad";
                fields = "optio";
                filter = "ipsam";
                key = "corrupti";
                maxResults = 717039L;
                oauthToken = "accusantium";
                orderBy = "rerum";
                pageToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "deleniti";
                returnPartialSuccess = false;
                uploadType = "tempora";
                uploadProtocol = "atque";
                userIp = "molestias";
            }};            

            ComputeRegionInstanceTemplatesListResponse res = sdk.regionInstanceTemplates.computeRegionInstanceTemplatesList(req, new ComputeRegionInstanceTemplatesListSecurity() {{
                option1 = new ComputeRegionInstanceTemplatesListSecurityOption1("dolor", "occaecati") {{
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
