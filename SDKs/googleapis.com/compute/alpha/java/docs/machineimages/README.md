# machineImages

### Available Operations

* [computeMachineImagesDelete](#computemachineimagesdelete) - Deletes the specified machine image. Deleting a machine image is permanent and cannot be undone.
* [computeMachineImagesGet](#computemachineimagesget) - Returns the specified machine image.
* [computeMachineImagesGetIamPolicy](#computemachineimagesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeMachineImagesInsert](#computemachineimagesinsert) - Creates a machine image in the specified project using the data that is included in the request. If you are creating a new machine image to update an existing instance, your new machine image should use the same network or, if applicable, the same subnetwork as the original instance.
* [computeMachineImagesList](#computemachineimageslist) - Retrieves a list of machine images that are contained within the specified project.
* [computeMachineImagesSetIamPolicy](#computemachineimagessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeMachineImagesTestIamPermissions](#computemachineimagestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeMachineImagesDelete

Deletes the specified machine image. Deleting a machine image is permanent and cannot be undone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeMachineImagesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeMachineImagesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeMachineImagesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeMachineImagesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeMachineImagesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeMachineImagesDeleteRequest req = new ComputeMachineImagesDeleteRequest("quasi", "cum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                fields = "veniam";
                key = "sapiente";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "dolorum";
                requestId = "et";
                uploadType = "perferendis";
                uploadProtocol = "quis";
                userIp = "molestias";
            }};            

            ComputeMachineImagesDeleteResponse res = sdk.machineImages.computeMachineImagesDelete(req, new ComputeMachineImagesDeleteSecurity() {{
                option1 = new ComputeMachineImagesDeleteSecurityOption1("non", "laborum") {{
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

## computeMachineImagesGet

Returns the specified machine image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeMachineImagesGetRequest;
import org.openapis.openapi.models.operations.ComputeMachineImagesGetResponse;
import org.openapis.openapi.models.operations.ComputeMachineImagesGetSecurity;
import org.openapis.openapi.models.operations.ComputeMachineImagesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeMachineImagesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeMachineImagesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeMachineImagesGetRequest req = new ComputeMachineImagesGetRequest("fuga", "corrupti") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repudiandae";
                alt = AltEnum.MEDIA;
                callback = "quae";
                fields = "quos";
                key = "ex";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "repudiandae";
                uploadProtocol = "atque";
                userIp = "consequatur";
            }};            

            ComputeMachineImagesGetResponse res = sdk.machineImages.computeMachineImagesGet(req, new ComputeMachineImagesGetSecurity() {{
                option1 = new ComputeMachineImagesGetSecurityOption1("laudantium", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.machineImage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeMachineImagesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeMachineImagesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeMachineImagesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeMachineImagesGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeMachineImagesGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeMachineImagesGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeMachineImagesGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeMachineImagesGetIamPolicyRequest req = new ComputeMachineImagesGetIamPolicyRequest("ea", "aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deleniti";
                alt = AltEnum.MEDIA;
                callback = "mollitia";
                fields = "ducimus";
                key = "tempora";
                oauthToken = "porro";
                optionsRequestedPolicyVersion = 761151L;
                prettyPrint = false;
                quotaUser = "ut";
                uploadType = "repudiandae";
                uploadProtocol = "voluptatem";
                userIp = "officiis";
            }};            

            ComputeMachineImagesGetIamPolicyResponse res = sdk.machineImages.computeMachineImagesGetIamPolicy(req, new ComputeMachineImagesGetIamPolicySecurity() {{
                option1 = new ComputeMachineImagesGetIamPolicySecurityOption1("vero", "eligendi") {{
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

## computeMachineImagesInsert

Creates a machine image in the specified project using the data that is included in the request. If you are creating a new machine image to update an existing instance, your new machine image should use the same network or, if applicable, the same subnetwork as the original instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeMachineImagesInsertRequest;
import org.openapis.openapi.models.operations.ComputeMachineImagesInsertResponse;
import org.openapis.openapi.models.operations.ComputeMachineImagesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeMachineImagesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeMachineImagesInsertSecurityOption2;
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
import org.openapis.openapi.models.shared.MachineImage;
import org.openapis.openapi.models.shared.MachineImageStatusEnum;
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
import org.openapis.openapi.models.shared.SavedAttachedDisk;
import org.openapis.openapi.models.shared.SavedAttachedDiskInterfaceEnum;
import org.openapis.openapi.models.shared.SavedAttachedDiskModeEnum;
import org.openapis.openapi.models.shared.SavedAttachedDiskStorageBytesStatusEnum;
import org.openapis.openapi.models.shared.SavedAttachedDiskTypeEnum;
import org.openapis.openapi.models.shared.SavedDisk;
import org.openapis.openapi.models.shared.SavedDiskArchitectureEnum;
import org.openapis.openapi.models.shared.SavedDiskStorageBytesStatusEnum;
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
import org.openapis.openapi.models.shared.SourceDiskEncryptionKey;
import org.openapis.openapi.models.shared.SourceInstanceProperties;
import org.openapis.openapi.models.shared.SourceInstancePropertiesKeyRevocationActionTypeEnum;
import org.openapis.openapi.models.shared.SourceInstancePropertiesPostKeyRevocationActionTypeEnum;
import org.openapis.openapi.models.shared.Tags;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeMachineImagesInsertRequest req = new ComputeMachineImagesInsertRequest("pariatur") {{
                dollarXgafv = XgafvEnum.TWO;
                machineImage = new MachineImage() {{
                    creationTimestamp = "quia";
                    description = "odio";
                    guestFlush = false;
                    id = "doloremque";
                    instanceProperties = new InstanceProperties() {{
                        advancedMachineFeatures = new AdvancedMachineFeatures() {{
                            enableNestedVirtualization = false;
                            enableUefiNetworking = false;
                            numaNodeCount = 744999;
                            performanceMonitoringUnit = AdvancedMachineFeaturesPerformanceMonitoringUnitEnum.ENHANCED;
                            threadsPerCore = 772730;
                            visibleCoreCount = 526047;
                        }};;
                        canIpForward = false;
                        confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                            confidentialInstanceType = ConfidentialInstanceConfigConfidentialInstanceTypeEnum.CONFIDENTIAL_INSTANCE_TYPE_UNSPECIFIED;
                            enableConfidentialCompute = false;
                        }};;
                        description = "sequi";
                        disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.ARM64;
                                autoDelete = false;
                                boot = false;
                                deviceName = "molestiae";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "eos";
                                    kmsKeyServiceAccount = "pariatur";
                                    rawKey = "sint";
                                    rsaEncryptedKey = "ipsum";
                                    sha256 = "esse";
                                }};
                                diskSizeGb = "fugit";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.WINDOWS;
                                    }}),
                                }};
                                index = 255743;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.X8664;
                                    description = "tempore";
                                    diskName = "modi";
                                    diskSizeGb = "possimus";
                                    diskType = "temporibus";
                                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                                        }}),
                                    }};
                                    interface_ = AttachedDiskInitializeParamsInterfaceEnum.UNSPECIFIED;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("consequuntur", "maxime");
                                    }};
                                    licenseCodes = new String[]{{
                                        add("fugit"),
                                        add("ipsa"),
                                        add("officia"),
                                        add("laborum"),
                                    }};
                                    licenses = new String[]{{
                                        add("est"),
                                        add("velit"),
                                        add("voluptates"),
                                    }};
                                    multiWriter = false;
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK_IF_SOURCE_CHANGED;
                                    provisionedIops = "amet";
                                    provisionedThroughput = "inventore";
                                    replicaZones = new String[]{{
                                        add("ea"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("ratione", "a");
                                        put("maiores", "incidunt");
                                        put("quos", "minus");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("ad"),
                                    }};
                                    sourceImage = "quisquam";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "numquam";
                                        kmsKeyServiceAccount = "sint";
                                        rawKey = "fuga";
                                        rsaEncryptedKey = "dolorum";
                                        sha256 = "impedit";
                                    }};
                                    sourceInstantSnapshot = "debitis";
                                    sourceSnapshot = "aut";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "quidem";
                                        kmsKeyServiceAccount = "cupiditate";
                                        rawKey = "nesciunt";
                                        rsaEncryptedKey = "voluptatum";
                                        sha256 = "a";
                                    }};
                                    storagePool = "laboriosam";
                                }};
                                interface_ = AttachedDiskInterfaceEnum.SCSI;
                                kind = "porro";
                                licenses = new String[]{{
                                    add("ullam"),
                                    add("officia"),
                                    add("corrupti"),
                                }};
                                locked = false;
                                mode = AttachedDiskModeEnum.READ_WRITE;
                                savedState = AttachedDiskSavedStateEnum.DISK_SAVED_STATE_UNSPECIFIED;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "in";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "odio";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "quia";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "maxime";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "qui";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "aspernatur";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "nulla";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "repellendus";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }};
                                }};
                                source = "a";
                                type = AttachedDiskTypeEnum.PERSISTENT;
                                userLicenses = new String[]{{
                                    add("maxime"),
                                    add("officiis"),
                                }};
                            }}),
                        }};
                        displayDevice = new DisplayDevice() {{
                            enableDisplay = false;
                        }};;
                        guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 858858;
                                acceleratorType = "adipisci";
                            }}),
                        }};
                        keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum.NONE;
                        labels = new java.util.HashMap<String, String>() {{
                            put("fugit", "facere");
                            put("facilis", "debitis");
                            put("hic", "accusamus");
                        }};
                        machineType = "possimus";
                        metadata = new Metadata() {{
                            fingerprint = "ab";
                            items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                                add(new MetadataItems() {{
                                    key = "inventore";
                                    value = "sit";
                                }}),
                            }};
                            kind = "esse";
                        }};;
                        minCpuPlatform = "esse";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "necessitatibus";
                                        externalIpv6PrefixLength = 722363;
                                        kind = "ipsa";
                                        name = "Zachary Murazik";
                                        natIP = "quo";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicDnsName = "possimus";
                                        publicPtrDomainName = "atque";
                                        securityPolicy = "consectetur";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "fuga";
                                        externalIpv6PrefixLength = 130833;
                                        kind = "provident";
                                        name = "Kenny Hills";
                                        natIP = "eum";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicDnsName = "accusamus";
                                        publicPtrDomainName = "debitis";
                                        securityPolicy = "veniam";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "harum";
                                        externalIpv6PrefixLength = 955706;
                                        kind = "quam";
                                        name = "Ramon Maggio";
                                        natIP = "esse";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicDnsName = "eaque";
                                        publicPtrDomainName = "ipsam";
                                        securityPolicy = "vitae";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "fuga";
                                        externalIpv6PrefixLength = 439718;
                                        kind = "impedit";
                                        name = "Cora Ward";
                                        natIP = "distinctio";
                                        networkTier = AccessConfigNetworkTierEnum.SELECT;
                                        publicDnsName = "nobis";
                                        publicPtrDomainName = "eaque";
                                        securityPolicy = "vero";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "atque";
                                        subnetworkRangeName = "sequi";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "repellat";
                                        subnetworkRangeName = "dolor";
                                    }}),
                                }};
                                fingerprint = "esse";
                                internalIpv6PrefixLength = 654417;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "voluptatum";
                                        externalIpv6PrefixLength = 851693;
                                        kind = "nobis";
                                        name = "Raymond Hilll";
                                        natIP = "fuga";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicDnsName = "cum";
                                        publicPtrDomainName = "voluptatum";
                                        securityPolicy = "voluptas";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "voluptatem";
                                        externalIpv6PrefixLength = 298506;
                                        kind = "odit";
                                        name = "Ms. Patricia Thiel";
                                        natIP = "reprehenderit";
                                        networkTier = AccessConfigNetworkTierEnum.SELECT;
                                        publicDnsName = "doloribus";
                                        publicPtrDomainName = "error";
                                        securityPolicy = "ea";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "sint";
                                        externalIpv6PrefixLength = 658417;
                                        kind = "cum";
                                        name = "Norman Kutch";
                                        natIP = "cum";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicDnsName = "maxime";
                                        publicPtrDomainName = "dolor";
                                        securityPolicy = "nesciunt";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "quis";
                                kind = "consequatur";
                                name = "Rick Hane";
                                network = "ex";
                                networkAttachment = "praesentium";
                                networkIP = "optio";
                                nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                                parentNicName = "ipsa";
                                queueCount = 307694;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "a";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                                        subnetwork = "doloribus";
                                        vlan = 82506;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "occaecati";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                        subnetwork = "aut";
                                        vlan = 414876;
                                    }}),
                                }};
                                subnetwork = "temporibus";
                                vlan = 957163;
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "hic";
                                        externalIpv6PrefixLength = 24681;
                                        kind = "tempora";
                                        name = "Micheal Reichel III";
                                        natIP = "deleniti";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicDnsName = "corrupti";
                                        publicPtrDomainName = "mollitia";
                                        securityPolicy = "debitis";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "reprehenderit";
                                        externalIpv6PrefixLength = 203179;
                                        kind = "quas";
                                        name = "Brandy Metz";
                                        natIP = "fugiat";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "tenetur";
                                        publicPtrDomainName = "voluptatum";
                                        securityPolicy = "voluptates";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "sequi";
                                        externalIpv6PrefixLength = 259542;
                                        kind = "pariatur";
                                        name = "Miss Bill Bernier";
                                        natIP = "aliquid";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "ex";
                                        publicPtrDomainName = "ducimus";
                                        securityPolicy = "molestiae";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "quibusdam";
                                        subnetworkRangeName = "minus";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "ad";
                                        subnetworkRangeName = "sequi";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "temporibus";
                                        subnetworkRangeName = "eos";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "ipsa";
                                        subnetworkRangeName = "cum";
                                    }}),
                                }};
                                fingerprint = "natus";
                                internalIpv6PrefixLength = 321571;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "minus";
                                        externalIpv6PrefixLength = 548752;
                                        kind = "voluptatum";
                                        name = "Misty Feeney";
                                        natIP = "nostrum";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicDnsName = "eius";
                                        publicPtrDomainName = "fugiat";
                                        securityPolicy = "assumenda";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "ipsam";
                                        externalIpv6PrefixLength = 662132;
                                        kind = "pariatur";
                                        name = "Mandy Franey PhD";
                                        natIP = "repudiandae";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicDnsName = "quidem";
                                        publicPtrDomainName = "aliquam";
                                        securityPolicy = "porro";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "pariatur";
                                kind = "accusamus";
                                name = "Denise Maggio";
                                network = "cumque";
                                networkAttachment = "doloribus";
                                networkIP = "cum";
                                nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                                parentNicName = "harum";
                                queueCount = 442346;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "animi";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                                        subnetwork = "beatae";
                                        vlan = 776105;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "nulla";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                        subnetwork = "nesciunt";
                                        vlan = 886929;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "reprehenderit";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                        subnetwork = "saepe";
                                        vlan = 43844;
                                    }}),
                                }};
                                subnetwork = "minus";
                                vlan = 233151;
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "fuga";
                                        externalIpv6PrefixLength = 488506;
                                        kind = "quibusdam";
                                        name = "Darren Smith";
                                        natIP = "totam";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "nisi";
                                        publicPtrDomainName = "autem";
                                        securityPolicy = "magnam";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "doloribus";
                                        subnetworkRangeName = "consequuntur";
                                    }}),
                                }};
                                fingerprint = "suscipit";
                                internalIpv6PrefixLength = 305759;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "iure";
                                        externalIpv6PrefixLength = 548861;
                                        kind = "iste";
                                        name = "Denise Johns";
                                        natIP = "aspernatur";
                                        networkTier = AccessConfigNetworkTierEnum.SELECT;
                                        publicDnsName = "quidem";
                                        publicPtrDomainName = "suscipit";
                                        securityPolicy = "voluptates";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "dolor";
                                        externalIpv6PrefixLength = 494508;
                                        kind = "ad";
                                        name = "Mrs. Luis Lakin";
                                        natIP = "tenetur";
                                        networkTier = AccessConfigNetworkTierEnum.SELECT;
                                        publicDnsName = "accusamus";
                                        publicPtrDomainName = "eius";
                                        securityPolicy = "odit";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "officiis";
                                        externalIpv6PrefixLength = 2716;
                                        kind = "sequi";
                                        name = "Marshall DuBuque";
                                        natIP = "molestias";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicDnsName = "dolorem";
                                        publicPtrDomainName = "nisi";
                                        securityPolicy = "modi";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "dolorum";
                                        externalIpv6PrefixLength = 971127;
                                        kind = "soluta";
                                        name = "Ramona Mohr";
                                        natIP = "qui";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicDnsName = "animi";
                                        publicPtrDomainName = "ea";
                                        securityPolicy = "amet";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "deleniti";
                                kind = "explicabo";
                                name = "Karla Hammes";
                                network = "recusandae";
                                networkAttachment = "deserunt";
                                networkIP = "eius";
                                nicType = NetworkInterfaceNicTypeEnum.VIRTIO_NET;
                                parentNicName = "provident";
                                queueCount = 965377;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "dolor";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                                        subnetwork = "voluptate";
                                        vlan = 366381;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "delectus";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                                        subnetwork = "a";
                                        vlan = 962439;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "laudantium";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                        subnetwork = "in";
                                        vlan = 389023;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "hic";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                        subnetwork = "unde";
                                        vlan = 270709;
                                    }}),
                                }};
                                subnetwork = "velit";
                                vlan = 355726;
                            }}),
                        }};
                        networkPerformanceConfig = new NetworkPerformanceConfig() {{
                            externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum.TIER1;
                            totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER1;
                        }};;
                        postKeyRevocationActionType = InstancePropertiesPostKeyRevocationActionTypeEnum.POST_KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
                        privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum.ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE;
                        reservationAffinity = new ReservationAffinity() {{
                            consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.SPECIFIC_RESERVATION;
                            key = "non";
                            values = new String[]{{
                                add("magni"),
                                add("fugit"),
                            }};
                        }};;
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("pariatur", "iure");
                            put("vitae", "sapiente");
                        }};
                        resourcePolicies = new String[]{{
                            add("modi"),
                        }};
                        scheduling = new Scheduling() {{
                            automaticRestart = false;
                            availabilityDomain = 149248;
                            currentCpus = 41902;
                            currentMemoryMb = "doloremque";
                            hostErrorTimeoutSeconds = 501590;
                            instanceTerminationAction = SchedulingInstanceTerminationActionEnum.STOP;
                            latencyTolerant = false;
                            localSsdRecoveryTimeout = new Duration() {{
                                nanos = 95553;
                                seconds = "debitis";
                            }};;
                            locationHint = "incidunt";
                            maintenanceFreezeDurationHours = 122563;
                            maintenanceInterval = SchedulingMaintenanceIntervalEnum.PERIODIC;
                            maxRunDuration = new Duration() {{
                                nanos = 461569;
                                seconds = "adipisci";
                            }};;
                            minNodeCpus = 393185;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "sunt";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("quae"),
                                        add("pariatur"),
                                        add("iure"),
                                        add("cum"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "officia";
                                    operator = SchedulingNodeAffinityOperatorEnum.IN;
                                    values = new String[]{{
                                        add("eius"),
                                        add("id"),
                                        add("ratione"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = SchedulingOnHostMaintenanceEnum.MIGRATE;
                            preemptible = false;
                            provisioningModel = SchedulingProvisioningModelEnum.STANDARD;
                            terminationTime = "non";
                        }};;
                        secureTags = new String[]{{
                            add("accusantium"),
                            add("sed"),
                        }};
                        serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                            add(new ServiceAccount() {{
                                email = "Helena_Gottlieb@gmail.com";
                                scopes = new String[]{{
                                    add("voluptatem"),
                                    add("delectus"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Bridget_Beer@hotmail.com";
                                scopes = new String[]{{
                                    add("exercitationem"),
                                    add("eum"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Ashlee.Ernser@yahoo.com";
                                scopes = new String[]{{
                                    add("quaerat"),
                                    add("animi"),
                                    add("expedita"),
                                    add("consectetur"),
                                }};
                            }}),
                        }};
                        serviceIntegrationSpecs = new java.util.HashMap<String, org.openapis.openapi.models.shared.ServiceIntegrationSpec>() {{
                            put("ipsum", new ServiceIntegrationSpec() {{
                                backupDr = new ServiceIntegrationSpecBackupDRSpec() {{
                                    plan = "ea";
                                }};
                            }});
                            put("illum", new ServiceIntegrationSpec() {{
                                backupDr = new ServiceIntegrationSpecBackupDRSpec() {{
                                    plan = "facere";
                                }};
                            }});
                            put("debitis", new ServiceIntegrationSpec() {{
                                backupDr = new ServiceIntegrationSpecBackupDRSpec() {{
                                    plan = "aut";
                                }};
                            }});
                            put("temporibus", new ServiceIntegrationSpec() {{
                                backupDr = new ServiceIntegrationSpecBackupDRSpec() {{
                                    plan = "quisquam";
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
                            fingerprint = "eaque";
                            items = new String[]{{
                                add("tempora"),
                                add("repellendus"),
                                add("suscipit"),
                            }};
                        }};;
                    }};;
                    kind = "dolor";
                    machineImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "quasi";
                        kmsKeyServiceAccount = "voluptas";
                        rawKey = "reprehenderit";
                        rsaEncryptedKey = "quidem";
                        sha256 = "nihil";
                    }};;
                    name = "Nathaniel Kris";
                    satisfiesPzs = false;
                    savedDisks = new org.openapis.openapi.models.shared.SavedDisk[]{{
                        add(new SavedDisk() {{
                            architecture = SavedDiskArchitectureEnum.ARM64;
                            kind = "nobis";
                            sourceDisk = "asperiores";
                            storageBytes = "nam";
                            storageBytesStatus = SavedDiskStorageBytesStatusEnum.UP_TO_DATE;
                        }}),
                        add(new SavedDisk() {{
                            architecture = SavedDiskArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                            kind = "laboriosam";
                            sourceDisk = "cupiditate";
                            storageBytes = "a";
                            storageBytesStatus = SavedDiskStorageBytesStatusEnum.UPDATING;
                        }}),
                    }};
                    selfLink = "cumque";
                    selfLinkWithId = "ducimus";
                    sourceDiskEncryptionKeys = new org.openapis.openapi.models.shared.SourceDiskEncryptionKey[]{{
                        add(new SourceDiskEncryptionKey() {{
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "dicta";
                                kmsKeyServiceAccount = "asperiores";
                                rawKey = "alias";
                                rsaEncryptedKey = "quidem";
                                sha256 = "voluptas";
                            }};
                            sourceDisk = "sequi";
                        }}),
                        add(new SourceDiskEncryptionKey() {{
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "delectus";
                                kmsKeyServiceAccount = "vitae";
                                rawKey = "fuga";
                                rsaEncryptedKey = "eius";
                                sha256 = "exercitationem";
                            }};
                            sourceDisk = "tempore";
                        }}),
                        add(new SourceDiskEncryptionKey() {{
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "expedita";
                                kmsKeyServiceAccount = "quos";
                                rawKey = "quas";
                                rsaEncryptedKey = "aliquid";
                                sha256 = "id";
                            }};
                            sourceDisk = "optio";
                        }}),
                    }};
                    sourceInstance = "dicta";
                    sourceInstanceProperties = new SourceInstanceProperties() {{
                        canIpForward = false;
                        deletionProtection = false;
                        description = "sit";
                        disks = new org.openapis.openapi.models.shared.SavedAttachedDisk[]{{
                            add(new SavedAttachedDisk() {{
                                autoDelete = false;
                                boot = false;
                                deviceName = "facere";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "quisquam";
                                    kmsKeyServiceAccount = "nobis";
                                    rawKey = "suscipit";
                                    rsaEncryptedKey = "eos";
                                    sha256 = "a";
                                }};
                                diskSizeGb = "laboriosam";
                                diskType = "perspiciatis";
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.WINDOWS;
                                    }}),
                                }};
                                index = 11787;
                                interface_ = SavedAttachedDiskInterfaceEnum.NVME;
                                kind = "repellat";
                                licenses = new String[]{{
                                    add("odio"),
                                }};
                                mode = SavedAttachedDiskModeEnum.READ_ONLY;
                                source = "ipsam";
                                storageBytes = "occaecati";
                                storageBytesStatus = SavedAttachedDiskStorageBytesStatusEnum.UPDATING;
                                type = SavedAttachedDiskTypeEnum.SCRATCH;
                            }}),
                            add(new SavedAttachedDisk() {{
                                autoDelete = false;
                                boot = false;
                                deviceName = "maxime";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "sequi";
                                    kmsKeyServiceAccount = "facilis";
                                    rawKey = "corrupti";
                                    rsaEncryptedKey = "alias";
                                    sha256 = "exercitationem";
                                }};
                                diskSizeGb = "impedit";
                                diskType = "assumenda";
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                                    }}),
                                }};
                                index = 948633;
                                interface_ = SavedAttachedDiskInterfaceEnum.NVDIMM;
                                kind = "veniam";
                                licenses = new String[]{{
                                    add("voluptate"),
                                }};
                                mode = SavedAttachedDiskModeEnum.READ_WRITE;
                                source = "alias";
                                storageBytes = "quibusdam";
                                storageBytesStatus = SavedAttachedDiskStorageBytesStatusEnum.UP_TO_DATE;
                                type = SavedAttachedDiskTypeEnum.SCRATCH;
                            }}),
                        }};
                        guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 924509;
                                acceleratorType = "quas";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 472160;
                                acceleratorType = "recusandae";
                            }}),
                        }};
                        keyRevocationActionType = SourceInstancePropertiesKeyRevocationActionTypeEnum.STOP;
                        labels = new java.util.HashMap<String, String>() {{
                            put("quis", "pariatur");
                        }};
                        machineType = "illo";
                        metadata = new Metadata() {{
                            fingerprint = "blanditiis";
                            items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                                add(new MetadataItems() {{
                                    key = "recusandae";
                                    value = "enim";
                                }}),
                                add(new MetadataItems() {{
                                    key = "possimus";
                                    value = "in";
                                }}),
                                add(new MetadataItems() {{
                                    key = "reprehenderit";
                                    value = "modi";
                                }}),
                                add(new MetadataItems() {{
                                    key = "et";
                                    value = "quaerat";
                                }}),
                            }};
                            kind = "voluptatem";
                        }};;
                        minCpuPlatform = "porro";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "molestiae";
                                        externalIpv6PrefixLength = 45929;
                                        kind = "id";
                                        name = "Tomas Beatty";
                                        natIP = "necessitatibus";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "voluptatem";
                                        publicPtrDomainName = "quam";
                                        securityPolicy = "incidunt";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "ipsum";
                                        subnetworkRangeName = "fugiat";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "omnis";
                                        subnetworkRangeName = "hic";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "quasi";
                                        subnetworkRangeName = "aliquam";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "corrupti";
                                        subnetworkRangeName = "porro";
                                    }}),
                                }};
                                fingerprint = "omnis";
                                internalIpv6PrefixLength = 985131;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "rem";
                                        externalIpv6PrefixLength = 990634;
                                        kind = "non";
                                        name = "Sharon Kirlin";
                                        natIP = "odit";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "laboriosam";
                                        publicPtrDomainName = "blanditiis";
                                        securityPolicy = "quaerat";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "adipisci";
                                kind = "saepe";
                                name = "Chester Rosenbaum";
                                network = "maxime";
                                networkAttachment = "totam";
                                networkIP = "labore";
                                nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                                parentNicName = "enim";
                                queueCount = 438818;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "omnis";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                        subnetwork = "laborum";
                                        vlan = 580668;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "reiciendis";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                                        subnetwork = "recusandae";
                                        vlan = 998080;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "iste";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                        subnetwork = "aperiam";
                                        vlan = 929864;
                                    }}),
                                }};
                                subnetwork = "corrupti";
                                vlan = 870195;
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "eum";
                                        externalIpv6PrefixLength = 544779;
                                        kind = "quisquam";
                                        name = "Mr. Leah Ziemann I";
                                        natIP = "numquam";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "magnam";
                                        publicPtrDomainName = "corrupti";
                                        securityPolicy = "molestiae";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "eum";
                                        externalIpv6PrefixLength = 375300;
                                        kind = "amet";
                                        name = "Alfonso Turner";
                                        natIP = "iste";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicDnsName = "ipsa";
                                        publicPtrDomainName = "molestiae";
                                        securityPolicy = "nemo";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "laboriosam";
                                        subnetworkRangeName = "quia";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "magnam";
                                        subnetworkRangeName = "odit";
                                    }}),
                                }};
                                fingerprint = "repudiandae";
                                internalIpv6PrefixLength = 226389;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "sint";
                                        externalIpv6PrefixLength = 721212;
                                        kind = "numquam";
                                        name = "Ms. Lela Muller";
                                        natIP = "esse";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicDnsName = "facere";
                                        publicPtrDomainName = "veritatis";
                                        securityPolicy = "dolor";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "labore";
                                kind = "maiores";
                                name = "Tina Yundt";
                                network = "dolore";
                                networkAttachment = "magnam";
                                networkIP = "sunt";
                                nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                                parentNicName = "illum";
                                queueCount = 76144;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "occaecati";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                                        subnetwork = "corrupti";
                                        vlan = 435142;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "qui";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                        subnetwork = "excepturi";
                                        vlan = 550424;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "et";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                        subnetwork = "fuga";
                                        vlan = 885416;
                                    }}),
                                }};
                                subnetwork = "eaque";
                                vlan = 186263;
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "magni";
                                        externalIpv6PrefixLength = 294218;
                                        kind = "eius";
                                        name = "Mrs. Alicia Schulist";
                                        natIP = "illo";
                                        networkTier = AccessConfigNetworkTierEnum.SELECT;
                                        publicDnsName = "ab";
                                        publicPtrDomainName = "dolorum";
                                        securityPolicy = "sed";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "incidunt";
                                        subnetworkRangeName = "sequi";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "labore";
                                        subnetworkRangeName = "consectetur";
                                    }}),
                                }};
                                fingerprint = "dicta";
                                internalIpv6PrefixLength = 183975;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "magnam";
                                        externalIpv6PrefixLength = 287310;
                                        kind = "blanditiis";
                                        name = "Dominick Beier";
                                        natIP = "dolores";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicDnsName = "maxime";
                                        publicPtrDomainName = "provident";
                                        securityPolicy = "expedita";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "saepe";
                                        externalIpv6PrefixLength = 602578;
                                        kind = "iure";
                                        name = "Meredith Cassin";
                                        natIP = "tempora";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "laboriosam";
                                        publicPtrDomainName = "inventore";
                                        securityPolicy = "temporibus";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                                ipv6Address = "illo";
                                kind = "velit";
                                name = "Jake McDermott";
                                network = "vero";
                                networkAttachment = "reprehenderit";
                                networkIP = "suscipit";
                                nicType = NetworkInterfaceNicTypeEnum.VIRTIO_NET;
                                parentNicName = "atque";
                                queueCount = 683086;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "distinctio";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                        subnetwork = "expedita";
                                        vlan = 977578;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "ut";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                        subnetwork = "iste";
                                        vlan = 925944;
                                    }}),
                                }};
                                subnetwork = "eaque";
                                vlan = 220168;
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "illum";
                                        externalIpv6PrefixLength = 202789;
                                        kind = "accusamus";
                                        name = "Mercedes Ritchie";
                                        natIP = "dolor";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "quae";
                                        publicPtrDomainName = "quibusdam";
                                        securityPolicy = "adipisci";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "natus";
                                        externalIpv6PrefixLength = 446217;
                                        kind = "eligendi";
                                        name = "Charlene Fritsch";
                                        natIP = "reiciendis";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicDnsName = "itaque";
                                        publicPtrDomainName = "molestias";
                                        securityPolicy = "laudantium";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "maiores";
                                        subnetworkRangeName = "voluptatum";
                                    }}),
                                }};
                                fingerprint = "inventore";
                                internalIpv6PrefixLength = 444764;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "autem";
                                        externalIpv6PrefixLength = 479402;
                                        kind = "illum";
                                        name = "Mr. Gene Cummings";
                                        natIP = "commodi";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicDnsName = "omnis";
                                        publicPtrDomainName = "facere";
                                        securityPolicy = "aliquam";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "ducimus";
                                        externalIpv6PrefixLength = 212875;
                                        kind = "doloribus";
                                        name = "Sandra Ankunding";
                                        natIP = "molestiae";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicDnsName = "harum";
                                        publicPtrDomainName = "expedita";
                                        securityPolicy = "modi";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                                ipv6Address = "veritatis";
                                kind = "aliquid";
                                name = "Arthur Champlin";
                                network = "sit";
                                networkAttachment = "vero";
                                networkIP = "distinctio";
                                nicType = NetworkInterfaceNicTypeEnum.VIRTIO_NET;
                                parentNicName = "aut";
                                queueCount = 182665;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "at";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                        subnetwork = "rerum";
                                        vlan = 323151;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "error";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                        subnetwork = "eum";
                                        vlan = 806631;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "quis";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                                        subnetwork = "ipsam";
                                        vlan = 509704;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "voluptas";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                        subnetwork = "voluptatum";
                                        vlan = 846436;
                                    }}),
                                }};
                                subnetwork = "fugit";
                                vlan = 834872;
                            }}),
                        }};
                        postKeyRevocationActionType = SourceInstancePropertiesPostKeyRevocationActionTypeEnum.SHUTDOWN;
                        scheduling = new Scheduling() {{
                            automaticRestart = false;
                            availabilityDomain = 697917;
                            currentCpus = 625876;
                            currentMemoryMb = "excepturi";
                            hostErrorTimeoutSeconds = 374436;
                            instanceTerminationAction = SchedulingInstanceTerminationActionEnum.STOP;
                            latencyTolerant = false;
                            localSsdRecoveryTimeout = new Duration() {{
                                nanos = 982213;
                                seconds = "inventore";
                            }};;
                            locationHint = "at";
                            maintenanceFreezeDurationHours = 583282;
                            maintenanceInterval = SchedulingMaintenanceIntervalEnum.PERIODIC;
                            maxRunDuration = new Duration() {{
                                nanos = 273048;
                                seconds = "ipsam";
                            }};;
                            minNodeCpus = 799519;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "impedit";
                                    operator = SchedulingNodeAffinityOperatorEnum.IN;
                                    values = new String[]{{
                                        add("nostrum"),
                                        add("dignissimos"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "velit";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("alias"),
                                        add("nam"),
                                        add("possimus"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = SchedulingOnHostMaintenanceEnum.MIGRATE;
                            preemptible = false;
                            provisioningModel = SchedulingProvisioningModelEnum.STANDARD;
                            terminationTime = "corrupti";
                        }};;
                        serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                            add(new ServiceAccount() {{
                                email = "Jailyn74@hotmail.com";
                                scopes = new String[]{{
                                    add("ipsum"),
                                    add("dolorem"),
                                    add("culpa"),
                                    add("placeat"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Jamel.Feeney3@gmail.com";
                                scopes = new String[]{{
                                    add("ea"),
                                    add("nihil"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Daphne.Weimann@hotmail.com";
                                scopes = new String[]{{
                                    add("eius"),
                                    add("aspernatur"),
                                    add("animi"),
                                    add("ipsum"),
                                }};
                            }}),
                        }};
                        tags = new Tags() {{
                            fingerprint = "neque";
                            items = new String[]{{
                                add("ullam"),
                            }};
                        }};;
                    }};;
                    status = MachineImageStatusEnum.READY;
                    storageLocations = new String[]{{
                        add("voluptatum"),
                        add("eos"),
                        add("molestiae"),
                    }};
                    totalStorageBytes = "nihil";
                }};;
                accessToken = "accusantium";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "nisi";
                key = "quibusdam";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "possimus";
                requestId = "saepe";
                sourceInstance = "vero";
                uploadType = "illo";
                uploadProtocol = "quo";
                userIp = "rerum";
            }};            

            ComputeMachineImagesInsertResponse res = sdk.machineImages.computeMachineImagesInsert(req, new ComputeMachineImagesInsertSecurity() {{
                option1 = new ComputeMachineImagesInsertSecurityOption1("odit", "dignissimos") {{
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

## computeMachineImagesList

Retrieves a list of machine images that are contained within the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeMachineImagesListRequest;
import org.openapis.openapi.models.operations.ComputeMachineImagesListResponse;
import org.openapis.openapi.models.operations.ComputeMachineImagesListSecurity;
import org.openapis.openapi.models.operations.ComputeMachineImagesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeMachineImagesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeMachineImagesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeMachineImagesListRequest req = new ComputeMachineImagesListRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "itaque";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "ex";
                filter = "dolore";
                key = "quas";
                maxResults = 1111L;
                oauthToken = "reprehenderit";
                orderBy = "odio";
                pageToken = "placeat";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                returnPartialSuccess = false;
                uploadType = "harum";
                uploadProtocol = "asperiores";
                userIp = "at";
            }};            

            ComputeMachineImagesListResponse res = sdk.machineImages.computeMachineImagesList(req, new ComputeMachineImagesListSecurity() {{
                option1 = new ComputeMachineImagesListSecurityOption1("aspernatur", "labore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.machineImageList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeMachineImagesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeMachineImagesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeMachineImagesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeMachineImagesSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeMachineImagesSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeMachineImagesSetIamPolicySecurityOption2;
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

            ComputeMachineImagesSetIamPolicyRequest req = new ComputeMachineImagesSetIamPolicyRequest("et", "fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "nobis";
                            condition = new Expr() {{
                                description = "maiores";
                                expression = "quis";
                                location = "doloribus";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("officiis"),
                            }};
                            role = "in";
                        }}),
                    }};
                    etag = "minus";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("in"),
                                            add("recusandae"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("magni"),
                                    add("optio"),
                                    add("impedit"),
                                    add("recusandae"),
                                }};
                                service = "dolores";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("illo"),
                                            add("iste"),
                                            add("qui"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptates"),
                                            add("qui"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("repudiandae"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("sequi"),
                                }};
                                service = "necessitatibus";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "nemo";
                                condition = new Expr() {{
                                    description = "nemo";
                                    expression = "quisquam";
                                    location = "labore";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("tempore"),
                                    add("vel"),
                                    add("fugiat"),
                                }};
                                role = "quas";
                            }}),
                            add(new Binding() {{
                                bindingId = "rem";
                                condition = new Expr() {{
                                    description = "odio";
                                    expression = "ex";
                                    location = "voluptatem";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("ipsa"),
                                    add("temporibus"),
                                }};
                                role = "aut";
                            }}),
                        }};
                        etag = "officiis";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "quasi";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("officia"),
                                            add("doloribus"),
                                            add("molestiae"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.IN;
                                        svc = "nam";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("ipsam"),
                                            add("ipsum"),
                                            add("officiis"),
                                        }};
                                    }}),
                                }};
                                description = "facilis";
                                ins = new String[]{{
                                    add("minus"),
                                    add("perferendis"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Victor Kemmer";
                                                    value = "repellat";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Leo Kiehn";
                                                    value = "aperiam";
                                                }}),
                                            }};
                                            field = "dolorem";
                                            metric = "sequi";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Angelina Ritchie";
                                                    value = "cum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jennie Muller";
                                                    value = "sequi";
                                                }}),
                                            }};
                                            field = "inventore";
                                            metric = "doloremque";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("at"),
                                }};
                                permissions = new String[]{{
                                    add("eius"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "minus";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("adipisci"),
                                            add("eius"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "quis";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("molestiae"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "pariatur";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("ea"),
                                        }};
                                    }}),
                                }};
                                description = "ea";
                                ins = new String[]{{
                                    add("aliquid"),
                                    add("aspernatur"),
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
                                                    name = "Hubert Shanahan";
                                                    value = "nulla";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Susie Littel";
                                                    value = "maxime";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ralph Kertzmann";
                                                    value = "praesentium";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Priscilla Cassin MD";
                                                    value = "quidem";
                                                }}),
                                            }};
                                            field = "inventore";
                                            metric = "eum";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.PERMISSION_TYPE_UNSPECIFIED;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Clara Gibson";
                                                    value = "repellendus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Marco Bechtelar";
                                                    value = "eaque";
                                                }}),
                                            }};
                                            field = "vel";
                                            metric = "totam";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Luther Witting";
                                                    value = "perspiciatis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Spencer Goldner";
                                                    value = "nobis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Mitchell Douglas";
                                                    value = "sequi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Eric Farrell";
                                                    value = "culpa";
                                                }}),
                                            }};
                                            field = "cumque";
                                            metric = "quasi";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Bradley Upton";
                                                    value = "consectetur";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Terence Kessler";
                                                    value = "molestiae";
                                                }}),
                                            }};
                                            field = "totam";
                                            metric = "est";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("ea"),
                                    add("inventore"),
                                    add("adipisci"),
                                    add("tempora"),
                                }};
                                permissions = new String[]{{
                                    add("tempore"),
                                    add("mollitia"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "esse";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("autem"),
                                            add("nesciunt"),
                                            add("velit"),
                                            add("voluptates"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "libero";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("ratione"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "dolor";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("quisquam"),
                                            add("est"),
                                        }};
                                    }}),
                                }};
                                description = "iusto";
                                ins = new String[]{{
                                    add("illum"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.PERMISSION_TYPE_UNSPECIFIED;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Mable Kemmer";
                                                    value = "ex";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Marie Borer";
                                                    value = "dignissimos";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lester Conn";
                                                    value = "impedit";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Misty Wintheiser";
                                                    value = "eaque";
                                                }}),
                                            }};
                                            field = "voluptas";
                                            metric = "dolorum";
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
                                                    name = "Spencer Murphy";
                                                    value = "ipsum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Phyllis Grady";
                                                    value = "veniam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dr. Karl Pagac";
                                                    value = "impedit";
                                                }}),
                                            }};
                                            field = "hic";
                                            metric = "repudiandae";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Edgar McDermott";
                                                    value = "amet";
                                                }}),
                                            }};
                                            field = "dignissimos";
                                            metric = "vitae";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("consectetur"),
                                    add("iure"),
                                    add("architecto"),
                                    add("repellendus"),
                                }};
                                permissions = new String[]{{
                                    add("saepe"),
                                }};
                            }}),
                        }};
                        version = 342304;
                    }};;
                }};;
                accessToken = "illum";
                alt = AltEnum.MEDIA;
                callback = "nesciunt";
                fields = "officiis";
                key = "iusto";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "officia";
                uploadProtocol = "officia";
                userIp = "laboriosam";
            }};            

            ComputeMachineImagesSetIamPolicyResponse res = sdk.machineImages.computeMachineImagesSetIamPolicy(req, new ComputeMachineImagesSetIamPolicySecurity() {{
                option1 = new ComputeMachineImagesSetIamPolicySecurityOption1("esse", "est") {{
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

## computeMachineImagesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeMachineImagesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeMachineImagesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeMachineImagesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeMachineImagesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeMachineImagesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeMachineImagesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeMachineImagesTestIamPermissionsRequest req = new ComputeMachineImagesTestIamPermissionsRequest("porro", "ex") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("quasi"),
                        add("deleniti"),
                        add("iusto"),
                    }};
                }};;
                accessToken = "quaerat";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "temporibus";
                key = "sunt";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "unde";
                uploadProtocol = "illo";
                userIp = "optio";
            }};            

            ComputeMachineImagesTestIamPermissionsResponse res = sdk.machineImages.computeMachineImagesTestIamPermissions(req, new ComputeMachineImagesTestIamPermissionsSecurity() {{
                option1 = new ComputeMachineImagesTestIamPermissionsSecurityOption1("voluptate", "ab") {{
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
