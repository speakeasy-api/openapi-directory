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

            ComputeRegionInstanceTemplatesDeleteRequest req = new ComputeRegionInstanceTemplatesDeleteRequest("perspiciatis", "veniam", "adipisci") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vel";
                alt = AltEnum.JSON;
                callback = "illum";
                fields = "reiciendis";
                key = "praesentium";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "fugiat";
                requestId = "error";
                uploadType = "at";
                uploadProtocol = "illo";
                userIp = "quos";
            }};            

            ComputeRegionInstanceTemplatesDeleteResponse res = sdk.regionInstanceTemplates.computeRegionInstanceTemplatesDelete(req, new ComputeRegionInstanceTemplatesDeleteSecurity() {{
                option1 = new ComputeRegionInstanceTemplatesDeleteSecurityOption1("magnam", "quibusdam") {{
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

            ComputeRegionInstanceTemplatesGetRequest req = new ComputeRegionInstanceTemplatesGetRequest("vitae", "reprehenderit", "eligendi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "assumenda";
                alt = AltEnum.JSON;
                callback = "dolore";
                fields = "nisi";
                key = "blanditiis";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "maxime";
                uploadType = "sequi";
                uploadProtocol = "sapiente";
                userIp = "eligendi";
            }};            

            ComputeRegionInstanceTemplatesGetResponse res = sdk.regionInstanceTemplates.computeRegionInstanceTemplatesGet(req, new ComputeRegionInstanceTemplatesGetSecurity() {{
                option1 = new ComputeRegionInstanceTemplatesGetSecurityOption1("unde", "aliquid") {{
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

            ComputeRegionInstanceTemplatesInsertRequest req = new ComputeRegionInstanceTemplatesInsertRequest("distinctio", "quisquam") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceTemplate = new InstanceTemplate() {{
                    creationTimestamp = "quaerat";
                    description = "pariatur";
                    id = "odio";
                    kind = "quod";
                    name = "Rachel Leuschke";
                    properties = new InstanceProperties() {{
                        advancedMachineFeatures = new AdvancedMachineFeatures() {{
                            enableNestedVirtualization = false;
                            enableUefiNetworking = false;
                            numaNodeCount = 234610;
                            performanceMonitoringUnit = AdvancedMachineFeaturesPerformanceMonitoringUnitEnum.ARCHITECTURAL;
                            threadsPerCore = 804137;
                            visibleCoreCount = 233766;
                        }};;
                        canIpForward = false;
                        confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                            confidentialInstanceType = ConfidentialInstanceConfigConfidentialInstanceTypeEnum.CONFIDENTIAL_INSTANCE_TYPE_UNSPECIFIED;
                            enableConfidentialCompute = false;
                        }};;
                        description = "eligendi";
                        disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.ARM64;
                                autoDelete = false;
                                boot = false;
                                deviceName = "eum";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "aspernatur";
                                    kmsKeyServiceAccount = "quasi";
                                    rawKey = "iusto";
                                    rsaEncryptedKey = "architecto";
                                    sha256 = "earum";
                                }};
                                diskSizeGb = "soluta";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.TDX_CAPABLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                                    }}),
                                }};
                                index = 664744;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARM64;
                                    description = "at";
                                    diskName = "nobis";
                                    diskSizeGb = "quod";
                                    diskType = "deleniti";
                                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.BARE_METAL_LINUX_COMPATIBLE;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.WINDOWS;
                                        }}),
                                    }};
                                    interface_ = AttachedDiskInitializeParamsInterfaceEnum.SCSI;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("reiciendis", "quos");
                                        put("quas", "enim");
                                        put("quasi", "exercitationem");
                                        put("quam", "quidem");
                                    }};
                                    licenseCodes = new String[]{{
                                        add("quae"),
                                    }};
                                    licenses = new String[]{{
                                        add("veritatis"),
                                        add("facilis"),
                                        add("at"),
                                    }};
                                    multiWriter = false;
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK;
                                    provisionedIops = "esse";
                                    provisionedThroughput = "reiciendis";
                                    replicaZones = new String[]{{
                                        add("autem"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("facilis", "doloremque");
                                        put("quia", "unde");
                                        put("natus", "error");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("hic"),
                                        add("nesciunt"),
                                    }};
                                    sourceImage = "ipsam";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "nobis";
                                        kmsKeyServiceAccount = "distinctio";
                                        rawKey = "ipsa";
                                        rsaEncryptedKey = "consequatur";
                                        sha256 = "cupiditate";
                                    }};
                                    sourceInstantSnapshot = "aspernatur";
                                    sourceSnapshot = "doloremque";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "optio";
                                        kmsKeyServiceAccount = "consequuntur";
                                        rawKey = "assumenda";
                                        rsaEncryptedKey = "excepturi";
                                        sha256 = "repellendus";
                                    }};
                                    storagePool = "nostrum";
                                }};
                                interface_ = AttachedDiskInterfaceEnum.SCSI;
                                kind = "officiis";
                                licenses = new String[]{{
                                    add("iste"),
                                    add("accusantium"),
                                    add("itaque"),
                                    add("fugit"),
                                }};
                                locked = false;
                                mode = AttachedDiskModeEnum.READ_WRITE;
                                savedState = AttachedDiskSavedStateEnum.DISK_SAVED_STATE_UNSPECIFIED;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "quidem";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "illum";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "expedita";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "nesciunt";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "nesciunt";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "est";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "ipsa";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "eum";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "libero";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }};
                                }};
                                source = "et";
                                type = AttachedDiskTypeEnum.PERSISTENT;
                                userLicenses = new String[]{{
                                    add("rem"),
                                    add("quaerat"),
                                    add("tempore"),
                                    add("ipsum"),
                                }};
                            }}),
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                autoDelete = false;
                                boot = false;
                                deviceName = "et";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "tenetur";
                                    kmsKeyServiceAccount = "omnis";
                                    rawKey = "adipisci";
                                    rsaEncryptedKey = "dicta";
                                    sha256 = "ipsum";
                                }};
                                diskSizeGb = "fugiat";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.TDX_CAPABLE;
                                    }}),
                                }};
                                index = 50613;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                    description = "natus";
                                    diskName = "repellat";
                                    diskSizeGb = "fugiat";
                                    diskType = "itaque";
                                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.WINDOWS;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                        }}),
                                    }};
                                    interface_ = AttachedDiskInitializeParamsInterfaceEnum.NVME;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("ipsum", "in");
                                        put("ducimus", "sunt");
                                        put("occaecati", "modi");
                                    }};
                                    licenseCodes = new String[]{{
                                        add("provident"),
                                    }};
                                    licenses = new String[]{{
                                        add("animi"),
                                        add("voluptatibus"),
                                        add("corrupti"),
                                        add("ratione"),
                                    }};
                                    multiWriter = false;
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.USE_EXISTING_DISK;
                                    provisionedIops = "iusto";
                                    provisionedThroughput = "eligendi";
                                    replicaZones = new String[]{{
                                        add("iure"),
                                        add("voluptatum"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("esse", "hic");
                                        put("molestiae", "omnis");
                                        put("at", "nemo");
                                        put("maiores", "mollitia");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("iusto"),
                                    }};
                                    sourceImage = "voluptatem";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "maiores";
                                        kmsKeyServiceAccount = "id";
                                        rawKey = "voluptatum";
                                        rsaEncryptedKey = "dolores";
                                        sha256 = "fuga";
                                    }};
                                    sourceInstantSnapshot = "alias";
                                    sourceSnapshot = "nulla";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "distinctio";
                                        kmsKeyServiceAccount = "rerum";
                                        rawKey = "maxime";
                                        rsaEncryptedKey = "non";
                                        sha256 = "provident";
                                    }};
                                    storagePool = "saepe";
                                }};
                                interface_ = AttachedDiskInterfaceEnum.NVME;
                                kind = "error";
                                licenses = new String[]{{
                                    add("tempore"),
                                }};
                                locked = false;
                                mode = AttachedDiskModeEnum.READ_WRITE;
                                savedState = AttachedDiskSavedStateEnum.PRESERVED;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "voluptates";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "nam";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "illum";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "sit";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "fuga";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "repellendus";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "laudantium";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "optio";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "iusto";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }};
                                }};
                                source = "tempore";
                                type = AttachedDiskTypeEnum.PERSISTENT;
                                userLicenses = new String[]{{
                                    add("rerum"),
                                    add("porro"),
                                    add("repellat"),
                                    add("eius"),
                                }};
                            }}),
                        }};
                        displayDevice = new DisplayDevice() {{
                            enableDisplay = false;
                        }};;
                        guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 205319;
                                acceleratorType = "recusandae";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 189993;
                                acceleratorType = "iusto";
                            }}),
                        }};
                        keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum.NONE;
                        labels = new java.util.HashMap<String, String>() {{
                            put("ad", "dignissimos");
                        }};
                        machineType = "quis";
                        metadata = new Metadata() {{
                            fingerprint = "enim";
                            items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                                add(new MetadataItems() {{
                                    key = "dolorum";
                                    value = "illo";
                                }}),
                                add(new MetadataItems() {{
                                    key = "perferendis";
                                    value = "minus";
                                }}),
                                add(new MetadataItems() {{
                                    key = "nam";
                                    value = "suscipit";
                                }}),
                                add(new MetadataItems() {{
                                    key = "minus";
                                    value = "asperiores";
                                }}),
                            }};
                            kind = "ea";
                        }};;
                        minCpuPlatform = "repellat";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "quibusdam";
                                        externalIpv6PrefixLength = 62890;
                                        kind = "autem";
                                        name = "Amelia Schimmel";
                                        natIP = "quo";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicDnsName = "voluptatem";
                                        publicPtrDomainName = "sequi";
                                        securityPolicy = "harum";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "modi";
                                        externalIpv6PrefixLength = 251467;
                                        kind = "perspiciatis";
                                        name = "Krystal Jones MD";
                                        natIP = "magnam";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicDnsName = "sunt";
                                        publicPtrDomainName = "accusantium";
                                        securityPolicy = "beatae";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "voluptatibus";
                                        externalIpv6PrefixLength = 427280;
                                        kind = "maxime";
                                        name = "Clark Witting";
                                        natIP = "nesciunt";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicDnsName = "non";
                                        publicPtrDomainName = "similique";
                                        securityPolicy = "vitae";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "esse";
                                        subnetworkRangeName = "consequuntur";
                                    }}),
                                }};
                                fingerprint = "quae";
                                internalIpv6PrefixLength = 231807;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "nesciunt";
                                        externalIpv6PrefixLength = 574914;
                                        kind = "dolore";
                                        name = "Heather Osinski";
                                        natIP = "eaque";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicDnsName = "quo";
                                        publicPtrDomainName = "voluptatibus";
                                        securityPolicy = "soluta";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "porro";
                                        externalIpv6PrefixLength = 596085;
                                        kind = "architecto";
                                        name = "Reginald Monahan";
                                        natIP = "culpa";
                                        networkTier = AccessConfigNetworkTierEnum.SELECT;
                                        publicDnsName = "error";
                                        publicPtrDomainName = "illo";
                                        securityPolicy = "saepe";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                                ipv6Address = "molestiae";
                                kind = "qui";
                                name = "Patricia Rippin";
                                network = "vero";
                                networkAttachment = "temporibus";
                                networkIP = "ratione";
                                nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                                parentNicName = "molestias";
                                queueCount = 832073;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "dignissimos";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                        subnetwork = "expedita";
                                        vlan = 909359;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "perferendis";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                        subnetwork = "tempore";
                                        vlan = 780730;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "distinctio";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                        subnetwork = "dolores";
                                        vlan = 102230;
                                    }}),
                                }};
                                subnetwork = "consequatur";
                                vlan = 712436;
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "error";
                                        externalIpv6PrefixLength = 559612;
                                        kind = "voluptate";
                                        name = "Dianne Hoeger";
                                        natIP = "nemo";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicDnsName = "quo";
                                        publicPtrDomainName = "blanditiis";
                                        securityPolicy = "dicta";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "necessitatibus";
                                        externalIpv6PrefixLength = 492608;
                                        kind = "adipisci";
                                        name = "Margie Morissette";
                                        natIP = "inventore";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicDnsName = "assumenda";
                                        publicPtrDomainName = "quos";
                                        securityPolicy = "explicabo";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "praesentium";
                                        externalIpv6PrefixLength = 887335;
                                        kind = "ratione";
                                        name = "Lela Shields";
                                        natIP = "numquam";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "possimus";
                                        publicPtrDomainName = "odit";
                                        securityPolicy = "accusantium";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "magnam";
                                        externalIpv6PrefixLength = 498857;
                                        kind = "occaecati";
                                        name = "Jeff Ferry";
                                        natIP = "at";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicDnsName = "atque";
                                        publicPtrDomainName = "ullam";
                                        securityPolicy = "minus";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "odit";
                                        subnetworkRangeName = "eaque";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "incidunt";
                                        subnetworkRangeName = "voluptatum";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "magni";
                                        subnetworkRangeName = "recusandae";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "cupiditate";
                                        subnetworkRangeName = "aperiam";
                                    }}),
                                }};
                                fingerprint = "fugiat";
                                internalIpv6PrefixLength = 808195;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "eaque";
                                        externalIpv6PrefixLength = 337995;
                                        kind = "perspiciatis";
                                        name = "Nettie Ratke";
                                        natIP = "maxime";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "sint";
                                        publicPtrDomainName = "beatae";
                                        securityPolicy = "natus";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "unde";
                                        externalIpv6PrefixLength = 44177;
                                        kind = "id";
                                        name = "Ruth Monahan";
                                        natIP = "vero";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicDnsName = "sequi";
                                        publicPtrDomainName = "veniam";
                                        securityPolicy = "veritatis";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "quisquam";
                                kind = "atque";
                                name = "Rosemary Christiansen";
                                network = "sit";
                                networkAttachment = "deleniti";
                                networkIP = "laboriosam";
                                nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                                parentNicName = "quia";
                                queueCount = 752948;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "accusantium";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                        subnetwork = "dolor";
                                        vlan = 806352;
                                    }}),
                                }};
                                subnetwork = "commodi";
                                vlan = 880478;
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "magnam";
                                        externalIpv6PrefixLength = 116758;
                                        kind = "vel";
                                        name = "Miss Bobby Little PhD";
                                        natIP = "incidunt";
                                        networkTier = AccessConfigNetworkTierEnum.SELECT;
                                        publicDnsName = "ducimus";
                                        publicPtrDomainName = "suscipit";
                                        securityPolicy = "soluta";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "voluptatem";
                                        externalIpv6PrefixLength = 658566;
                                        kind = "quam";
                                        name = "Grant Hansen";
                                        natIP = "dignissimos";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "delectus";
                                        publicPtrDomainName = "dolor";
                                        securityPolicy = "incidunt";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "voluptatem";
                                        externalIpv6PrefixLength = 708050;
                                        kind = "itaque";
                                        name = "Anne Steuber";
                                        natIP = "cupiditate";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicDnsName = "praesentium";
                                        publicPtrDomainName = "quasi";
                                        securityPolicy = "voluptatem";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "officiis";
                                        externalIpv6PrefixLength = 330004;
                                        kind = "commodi";
                                        name = "Mrs. Caroline Wisozk";
                                        natIP = "hic";
                                        networkTier = AccessConfigNetworkTierEnum.SELECT;
                                        publicDnsName = "placeat";
                                        publicPtrDomainName = "incidunt";
                                        securityPolicy = "unde";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "sunt";
                                        subnetworkRangeName = "ipsum";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "reiciendis";
                                        subnetworkRangeName = "nulla";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "aut";
                                        subnetworkRangeName = "pariatur";
                                    }}),
                                }};
                                fingerprint = "vero";
                                internalIpv6PrefixLength = 197053;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "praesentium";
                                        externalIpv6PrefixLength = 91045;
                                        kind = "autem";
                                        name = "Judith Durgan Jr.";
                                        natIP = "placeat";
                                        networkTier = AccessConfigNetworkTierEnum.SELECT;
                                        publicDnsName = "magnam";
                                        publicPtrDomainName = "iure";
                                        securityPolicy = "eaque";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "aspernatur";
                                        externalIpv6PrefixLength = 372746;
                                        kind = "rem";
                                        name = "Emilio Thiel";
                                        natIP = "in";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicDnsName = "deleniti";
                                        publicPtrDomainName = "quos";
                                        securityPolicy = "asperiores";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "vero";
                                        externalIpv6PrefixLength = 369630;
                                        kind = "eligendi";
                                        name = "Sean Jacobi";
                                        natIP = "soluta";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicDnsName = "maiores";
                                        publicPtrDomainName = "labore";
                                        securityPolicy = "debitis";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                                ipv6Address = "eaque";
                                kind = "voluptatem";
                                name = "Kristin VonRueden";
                                network = "ut";
                                networkAttachment = "a";
                                networkIP = "ab";
                                nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                                parentNicName = "sapiente";
                                queueCount = 490269;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "aut";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                        subnetwork = "sit";
                                        vlan = 896525;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "unde";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                        subnetwork = "corporis";
                                        vlan = 457123;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "tenetur";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                        subnetwork = "nemo";
                                        vlan = 551191;
                                    }}),
                                }};
                                subnetwork = "temporibus";
                                vlan = 611245;
                            }}),
                        }};
                        networkPerformanceConfig = new NetworkPerformanceConfig() {{
                            externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum.DEFAULT_;
                            totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.DEFAULT_;
                        }};;
                        postKeyRevocationActionType = InstancePropertiesPostKeyRevocationActionTypeEnum.POST_KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
                        privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum.ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE;
                        reservationAffinity = new ReservationAffinity() {{
                            consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.UNSPECIFIED;
                            key = "sint";
                            values = new String[]{{
                                add("distinctio"),
                                add("voluptas"),
                                add("ab"),
                                add("ullam"),
                            }};
                        }};;
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("mollitia", "labore");
                        }};
                        resourcePolicies = new String[]{{
                            add("deleniti"),
                        }};
                        scheduling = new Scheduling() {{
                            automaticRestart = false;
                            availabilityDomain = 422624;
                            currentCpus = 13159;
                            currentMemoryMb = "qui";
                            hostErrorTimeoutSeconds = 886923;
                            instanceTerminationAction = SchedulingInstanceTerminationActionEnum.DELETE;
                            latencyTolerant = false;
                            localSsdRecoveryTimeout = new Duration() {{
                                nanos = 576538;
                                seconds = "quisquam";
                            }};;
                            locationHint = "repellat";
                            maintenanceFreezeDurationHours = 304311;
                            maintenanceInterval = SchedulingMaintenanceIntervalEnum.RECURRENT;
                            maxRunDuration = new Duration() {{
                                nanos = 856850;
                                seconds = "sint";
                            }};;
                            minNodeCpus = 685551;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "tenetur";
                                    operator = SchedulingNodeAffinityOperatorEnum.IN;
                                    values = new String[]{{
                                        add("assumenda"),
                                        add("eligendi"),
                                        add("quae"),
                                        add("consequatur"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "porro";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("voluptas"),
                                        add("repellendus"),
                                        add("voluptas"),
                                        add("iusto"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = SchedulingOnHostMaintenanceEnum.MIGRATE;
                            preemptible = false;
                            provisioningModel = SchedulingProvisioningModelEnum.SPOT;
                            terminationTime = "atque";
                        }};;
                        secureTags = new String[]{{
                            add("eaque"),
                        }};
                        serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                            add(new ServiceAccount() {{
                                email = "Marian.Cassin84@yahoo.com";
                                scopes = new String[]{{
                                    add("tempora"),
                                    add("fugit"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Zoe.Harvey@hotmail.com";
                                scopes = new String[]{{
                                    add("reprehenderit"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Winston_Hettinger@yahoo.com";
                                scopes = new String[]{{
                                    add("beatae"),
                                    add("rem"),
                                    add("natus"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Kali.Mueller@gmail.com";
                                scopes = new String[]{{
                                    add("esse"),
                                    add("provident"),
                                    add("hic"),
                                }};
                            }}),
                        }};
                        serviceIntegrationSpecs = new java.util.HashMap<String, org.openapis.openapi.models.shared.ServiceIntegrationSpec>() {{
                            put("quibusdam", new ServiceIntegrationSpec() {{
                                backupDr = new ServiceIntegrationSpecBackupDRSpec() {{
                                    plan = "molestiae";
                                }};
                            }});
                            put("accusamus", new ServiceIntegrationSpec() {{
                                backupDr = new ServiceIntegrationSpecBackupDRSpec() {{
                                    plan = "natus";
                                }};
                            }});
                            put("illum", new ServiceIntegrationSpec() {{
                                backupDr = new ServiceIntegrationSpecBackupDRSpec() {{
                                    plan = "nihil";
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
                            fingerprint = "blanditiis";
                            items = new String[]{{
                                add("error"),
                                add("quidem"),
                                add("sit"),
                            }};
                        }};;
                    }};;
                    region = "quo";
                    selfLink = "vitae";
                    selfLinkWithId = "iste";
                    sourceInstance = "assumenda";
                    sourceInstanceParams = new SourceInstanceParams() {{
                        diskConfigs = new org.openapis.openapi.models.shared.DiskInstantiationConfig[]{{
                            add(new DiskInstantiationConfig() {{
                                autoDelete = false;
                                customImage = "consequatur";
                                deviceName = "esse";
                                instantiateFrom = DiskInstantiationConfigInstantiateFromEnum.ATTACH_READ_ONLY;
                            }}),
                            add(new DiskInstantiationConfig() {{
                                autoDelete = false;
                                customImage = "hic";
                                deviceName = "eaque";
                                instantiateFrom = DiskInstantiationConfigInstantiateFromEnum.ATTACH_READ_ONLY;
                            }}),
                            add(new DiskInstantiationConfig() {{
                                autoDelete = false;
                                customImage = "eos";
                                deviceName = "provident";
                                instantiateFrom = DiskInstantiationConfigInstantiateFromEnum.SOURCE_IMAGE;
                            }}),
                            add(new DiskInstantiationConfig() {{
                                autoDelete = false;
                                customImage = "vel";
                                deviceName = "laborum";
                                instantiateFrom = DiskInstantiationConfigInstantiateFromEnum.ATTACH_READ_ONLY;
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "nostrum";
                alt = AltEnum.MEDIA;
                callback = "quos";
                fields = "ipsa";
                key = "repellat";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "explicabo";
                requestId = "eligendi";
                uploadType = "voluptatem";
                uploadProtocol = "illo";
                userIp = "nulla";
            }};            

            ComputeRegionInstanceTemplatesInsertResponse res = sdk.regionInstanceTemplates.computeRegionInstanceTemplatesInsert(req, new ComputeRegionInstanceTemplatesInsertSecurity() {{
                option1 = new ComputeRegionInstanceTemplatesInsertSecurityOption1("neque", "commodi") {{
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

            ComputeRegionInstanceTemplatesListRequest req = new ComputeRegionInstanceTemplatesListRequest("autem", "accusantium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "mollitia";
                fields = "id";
                filter = "animi";
                key = "officiis";
                maxResults = 674647L;
                oauthToken = "aliquid";
                orderBy = "sunt";
                pageToken = "quas";
                prettyPrint = false;
                quotaUser = "deserunt";
                returnPartialSuccess = false;
                uploadType = "aliquid";
                uploadProtocol = "in";
                userIp = "delectus";
            }};            

            ComputeRegionInstanceTemplatesListResponse res = sdk.regionInstanceTemplates.computeRegionInstanceTemplatesList(req, new ComputeRegionInstanceTemplatesListSecurity() {{
                option1 = new ComputeRegionInstanceTemplatesListSecurityOption1("ullam", "consequatur") {{
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
