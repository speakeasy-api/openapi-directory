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

            ComputeMachineImagesDeleteRequest req = new ComputeMachineImagesDeleteRequest("earum", "at") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vero";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "dignissimos";
                key = "perspiciatis";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "recusandae";
                requestId = "temporibus";
                uploadType = "doloremque";
                uploadProtocol = "porro";
                userIp = "inventore";
            }};            

            ComputeMachineImagesDeleteResponse res = sdk.machineImages.computeMachineImagesDelete(req, new ComputeMachineImagesDeleteSecurity() {{
                option1 = new ComputeMachineImagesDeleteSecurityOption1("nisi", "laborum") {{
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

            ComputeMachineImagesGetRequest req = new ComputeMachineImagesGetRequest("molestiae", "harum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolore";
                alt = AltEnum.MEDIA;
                callback = "rem";
                fields = "tempora";
                key = "alias";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "ut";
                uploadType = "totam";
                uploadProtocol = "unde";
                userIp = "repellat";
            }};            

            ComputeMachineImagesGetResponse res = sdk.machineImages.computeMachineImagesGet(req, new ComputeMachineImagesGetSecurity() {{
                option1 = new ComputeMachineImagesGetSecurityOption1("voluptas", "dignissimos") {{
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

            ComputeMachineImagesGetIamPolicyRequest req = new ComputeMachineImagesGetIamPolicyRequest("dignissimos", "ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "earum";
                alt = AltEnum.JSON;
                callback = "aliquam";
                fields = "praesentium";
                key = "doloremque";
                oauthToken = "occaecati";
                optionsRequestedPolicyVersion = 72285L;
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "dolores";
                uploadProtocol = "soluta";
                userIp = "culpa";
            }};            

            ComputeMachineImagesGetIamPolicyResponse res = sdk.machineImages.computeMachineImagesGetIamPolicy(req, new ComputeMachineImagesGetIamPolicySecurity() {{
                option1 = new ComputeMachineImagesGetIamPolicySecurityOption1("fugit", "nemo") {{
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
import org.openapis.openapi.models.shared.NetworkPerformanceConfig;
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

            ComputeMachineImagesInsertRequest req = new ComputeMachineImagesInsertRequest("repudiandae") {{
                dollarXgafv = XgafvEnum.TWO;
                machineImage = new MachineImage() {{
                    creationTimestamp = "commodi";
                    description = "minus";
                    guestFlush = false;
                    id = "odio";
                    instanceProperties = new InstanceProperties() {{
                        advancedMachineFeatures = new AdvancedMachineFeatures() {{
                            enableNestedVirtualization = false;
                            enableUefiNetworking = false;
                            threadsPerCore = 320837;
                            visibleCoreCount = 661941;
                        }};;
                        canIpForward = false;
                        confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                            enableConfidentialCompute = false;
                        }};;
                        description = "doloribus";
                        disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.ARM64;
                                autoDelete = false;
                                boot = false;
                                deviceName = "autem";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "perferendis";
                                    kmsKeyServiceAccount = "laborum";
                                    rawKey = "quam";
                                    rsaEncryptedKey = "laborum";
                                    sha256 = "eveniet";
                                }};
                                diskSizeGb = "dolor";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.WINDOWS;
                                    }}),
                                }};
                                index = 19300;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARM64;
                                    description = "esse";
                                    diskName = "cupiditate";
                                    diskSizeGb = "debitis";
                                    diskType = "nemo";
                                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.WINDOWS;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                                        }}),
                                    }};
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("culpa", "impedit");
                                    }};
                                    licenses = new String[]{{
                                        add("quisquam"),
                                        add("deserunt"),
                                        add("nisi"),
                                    }};
                                    multiWriter = false;
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK;
                                    provisionedIops = "nemo";
                                    provisionedThroughput = "pariatur";
                                    replicaZones = new String[]{{
                                        add("perspiciatis"),
                                        add("atque"),
                                        add("laboriosam"),
                                        add("voluptate"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("veniam", "vitae");
                                        put("deserunt", "iste");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("porro"),
                                        add("eveniet"),
                                        add("autem"),
                                        add("quae"),
                                    }};
                                    sourceImage = "voluptates";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "impedit";
                                        kmsKeyServiceAccount = "sunt";
                                        rawKey = "optio";
                                        rsaEncryptedKey = "odio";
                                        sha256 = "occaecati";
                                    }};
                                    sourceSnapshot = "officia";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "consectetur";
                                        kmsKeyServiceAccount = "excepturi";
                                        rawKey = "fuga";
                                        rsaEncryptedKey = "officiis";
                                        sha256 = "ipsam";
                                    }};
                                }};
                                interface_ = AttachedDiskInterfaceEnum.SCSI;
                                kind = "magnam";
                                licenses = new String[]{{
                                    add("nemo"),
                                    add("id"),
                                    add("laboriosam"),
                                    add("nostrum"),
                                }};
                                locked = false;
                                mode = AttachedDiskModeEnum.READ_WRITE;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "fugiat";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "veniam";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "assumenda";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "odio";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "excepturi";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "eos";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "iure";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }};
                                }};
                                source = "quod";
                                type = AttachedDiskTypeEnum.SCRATCH;
                                userLicenses = new String[]{{
                                    add("ad"),
                                    add("esse"),
                                }};
                            }}),
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.ARM64;
                                autoDelete = false;
                                boot = false;
                                deviceName = "dolores";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "sint";
                                    kmsKeyServiceAccount = "nulla";
                                    rawKey = "harum";
                                    rsaEncryptedKey = "corrupti";
                                    sha256 = "quam";
                                }};
                                diskSizeGb = "ad";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.GVNIC;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                                    }}),
                                }};
                                index = 26844;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                    description = "deleniti";
                                    diskName = "dolores";
                                    diskSizeGb = "est";
                                    diskType = "enim";
                                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.WINDOWS;
                                        }}),
                                    }};
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("illo", "optio");
                                        put("sapiente", "iure");
                                    }};
                                    licenses = new String[]{{
                                        add("iste"),
                                        add("iure"),
                                    }};
                                    multiWriter = false;
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.USE_EXISTING_DISK;
                                    provisionedIops = "illum";
                                    provisionedThroughput = "dolor";
                                    replicaZones = new String[]{{
                                        add("nihil"),
                                        add("aspernatur"),
                                        add("numquam"),
                                        add("placeat"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("praesentium", "repellat");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("rem"),
                                        add("beatae"),
                                    }};
                                    sourceImage = "necessitatibus";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "provident";
                                        kmsKeyServiceAccount = "laudantium";
                                        rawKey = "porro";
                                        rsaEncryptedKey = "minus";
                                        sha256 = "officiis";
                                    }};
                                    sourceSnapshot = "consectetur";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "reiciendis";
                                        kmsKeyServiceAccount = "esse";
                                        rawKey = "sunt";
                                        rsaEncryptedKey = "autem";
                                        sha256 = "aliquid";
                                    }};
                                }};
                                interface_ = AttachedDiskInterfaceEnum.NVME;
                                kind = "aperiam";
                                licenses = new String[]{{
                                    add("culpa"),
                                    add("doloremque"),
                                    add("officiis"),
                                    add("dolor"),
                                }};
                                locked = false;
                                mode = AttachedDiskModeEnum.READ_WRITE;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "laboriosam";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "optio";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "repellat";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "sint";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "minima";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "soluta";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "adipisci";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "nesciunt";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }};
                                }};
                                source = "placeat";
                                type = AttachedDiskTypeEnum.SCRATCH;
                                userLicenses = new String[]{{
                                    add("dignissimos"),
                                    add("placeat"),
                                    add("ratione"),
                                    add("eligendi"),
                                }};
                            }}),
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.ARM64;
                                autoDelete = false;
                                boot = false;
                                deviceName = "quasi";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "alias";
                                    kmsKeyServiceAccount = "accusamus";
                                    rawKey = "inventore";
                                    rsaEncryptedKey = "voluptas";
                                    sha256 = "molestiae";
                                }};
                                diskSizeGb = "ipsum";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SECURE_BOOT;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                                    }}),
                                }};
                                index = 709870;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                    description = "quidem";
                                    diskName = "recusandae";
                                    diskSizeGb = "illum";
                                    diskType = "itaque";
                                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.GVNIC;
                                        }}),
                                    }};
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("optio", "ipsum");
                                        put("excepturi", "aperiam");
                                    }};
                                    licenses = new String[]{{
                                        add("iste"),
                                        add("quis"),
                                        add("veniam"),
                                    }};
                                    multiWriter = false;
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK;
                                    provisionedIops = "blanditiis";
                                    provisionedThroughput = "dolores";
                                    replicaZones = new String[]{{
                                        add("ipsa"),
                                        add("pariatur"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("nobis", "soluta");
                                        put("eligendi", "fugiat");
                                        put("velit", "facilis");
                                        put("architecto", "magni");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("tempore"),
                                    }};
                                    sourceImage = "atque";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "quas";
                                        kmsKeyServiceAccount = "placeat";
                                        rawKey = "beatae";
                                        rsaEncryptedKey = "officiis";
                                        sha256 = "saepe";
                                    }};
                                    sourceSnapshot = "minima";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "saepe";
                                        kmsKeyServiceAccount = "voluptate";
                                        rawKey = "similique";
                                        rsaEncryptedKey = "doloremque";
                                        sha256 = "autem";
                                    }};
                                }};
                                interface_ = AttachedDiskInterfaceEnum.NVME;
                                kind = "adipisci";
                                licenses = new String[]{{
                                    add("quasi"),
                                    add("placeat"),
                                    add("maxime"),
                                }};
                                locked = false;
                                mode = AttachedDiskModeEnum.READ_WRITE;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "deserunt";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "soluta";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "repellendus";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "ducimus";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "occaecati";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "eum";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "cumque";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "minima";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }};
                                }};
                                source = "ex";
                                type = AttachedDiskTypeEnum.SCRATCH;
                                userLicenses = new String[]{{
                                    add("aliquid"),
                                    add("necessitatibus"),
                                    add("harum"),
                                }};
                            }}),
                        }};
                        displayDevice = new DisplayDevice() {{
                            enableDisplay = false;
                        }};;
                        guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 709769;
                                acceleratorType = "debitis";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 340254;
                                acceleratorType = "accusamus";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 39686;
                                acceleratorType = "tempore";
                            }}),
                        }};
                        keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum.NONE;
                        labels = new java.util.HashMap<String, String>() {{
                            put("tenetur", "velit");
                            put("nobis", "illo");
                            put("amet", "enim");
                        }};
                        machineType = "quas";
                        metadata = new Metadata() {{
                            fingerprint = "nulla";
                            items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                                add(new MetadataItems() {{
                                    key = "deserunt";
                                    value = "corrupti";
                                }}),
                                add(new MetadataItems() {{
                                    key = "reprehenderit";
                                    value = "nam";
                                }}),
                            }};
                            kind = "soluta";
                        }};;
                        minCpuPlatform = "odio";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "minus";
                                        externalIpv6PrefixLength = 692115;
                                        kind = "recusandae";
                                        name = "Natalie Moore";
                                        natIP = "alias";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "expedita";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "suscipit";
                                        externalIpv6PrefixLength = 585566;
                                        kind = "occaecati";
                                        name = "Marian Wuckert";
                                        natIP = "omnis";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "incidunt";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "incidunt";
                                        externalIpv6PrefixLength = 341695;
                                        kind = "explicabo";
                                        name = "Mr. Perry Wiza";
                                        natIP = "dolorem";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "incidunt";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "cumque";
                                        externalIpv6PrefixLength = 424434;
                                        kind = "inventore";
                                        name = "Rogelio Berge";
                                        natIP = "distinctio";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "optio";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "corporis";
                                        subnetworkRangeName = "neque";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "eos";
                                        subnetworkRangeName = "nam";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "ea";
                                        subnetworkRangeName = "ullam";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "eos";
                                        subnetworkRangeName = "laboriosam";
                                    }}),
                                }};
                                fingerprint = "reiciendis";
                                internalIpv6PrefixLength = 508312;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "explicabo";
                                        externalIpv6PrefixLength = 551124;
                                        kind = "corporis";
                                        name = "Darla Upton";
                                        natIP = "enim";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "maxime";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "non";
                                        externalIpv6PrefixLength = 166302;
                                        kind = "consequuntur";
                                        name = "Diana Bins";
                                        natIP = "commodi";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "aliquid";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                                ipv6Address = "numquam";
                                kind = "quae";
                                name = "Martin Wuckert";
                                network = "ad";
                                networkAttachment = "quod";
                                networkIP = "rerum";
                                nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                                queueCount = 22860;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subnetwork = "provident";
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "corrupti";
                                        externalIpv6PrefixLength = 868627;
                                        kind = "fugit";
                                        name = "Samuel Renner";
                                        natIP = "blanditiis";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "eaque";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "sed";
                                        externalIpv6PrefixLength = 679842;
                                        kind = "laborum";
                                        name = "Clinton Gutmann";
                                        natIP = "esse";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "recusandae";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "assumenda";
                                        externalIpv6PrefixLength = 265549;
                                        kind = "maiores";
                                        name = "Amos Kutch";
                                        natIP = "eaque";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "repellat";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "a";
                                        subnetworkRangeName = "quae";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "deleniti";
                                        subnetworkRangeName = "asperiores";
                                    }}),
                                }};
                                fingerprint = "dolor";
                                internalIpv6PrefixLength = 570377;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "esse";
                                        externalIpv6PrefixLength = 76227;
                                        kind = "perferendis";
                                        name = "Jessie Nienow";
                                        natIP = "distinctio";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "consequatur";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                                ipv6Address = "maiores";
                                kind = "doloremque";
                                name = "Kelvin Will Jr.";
                                network = "molestias";
                                networkAttachment = "architecto";
                                networkIP = "saepe";
                                nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                                queueCount = 508621;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                subnetwork = "blanditiis";
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "occaecati";
                                        externalIpv6PrefixLength = 615573;
                                        kind = "voluptas";
                                        name = "Jimmie Walter";
                                        natIP = "libero";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "aut";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "ipsum";
                                        externalIpv6PrefixLength = 805607;
                                        kind = "tenetur";
                                        name = "Colleen Kutch";
                                        natIP = "soluta";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "fugit";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "corrupti";
                                        subnetworkRangeName = "autem";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "autem";
                                        subnetworkRangeName = "alias";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "eaque";
                                        subnetworkRangeName = "minus";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "commodi";
                                        subnetworkRangeName = "inventore";
                                    }}),
                                }};
                                fingerprint = "porro";
                                internalIpv6PrefixLength = 471007;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "consectetur";
                                        externalIpv6PrefixLength = 304797;
                                        kind = "magni";
                                        name = "Tiffany Ryan";
                                        natIP = "provident";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "quae";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "tempore";
                                        externalIpv6PrefixLength = 198695;
                                        kind = "atque";
                                        name = "Harold Ritchie MD";
                                        natIP = "non";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "inventore";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "ipsam";
                                        externalIpv6PrefixLength = 266037;
                                        kind = "possimus";
                                        name = "Stephen Bartell";
                                        natIP = "modi";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "error";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                                ipv6Address = "debitis";
                                kind = "possimus";
                                name = "Danny Mertz";
                                network = "quas";
                                networkAttachment = "asperiores";
                                networkIP = "dignissimos";
                                nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                                queueCount = 908386;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subnetwork = "provident";
                            }}),
                        }};
                        networkPerformanceConfig = new NetworkPerformanceConfig() {{
                            totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER1;
                        }};;
                        postKeyRevocationActionType = InstancePropertiesPostKeyRevocationActionTypeEnum.NOOP;
                        privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum.INHERIT_FROM_SUBNETWORK;
                        reservationAffinity = new ReservationAffinity() {{
                            consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.ANY_RESERVATION;
                            key = "doloremque";
                            values = new String[]{{
                                add("officiis"),
                                add("inventore"),
                                add("quia"),
                                add("odit"),
                            }};
                        }};;
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("mollitia", "cumque");
                            put("dolor", "id");
                            put("assumenda", "optio");
                        }};
                        resourcePolicies = new String[]{{
                            add("dolore"),
                            add("iusto"),
                        }};
                        scheduling = new Scheduling() {{
                            automaticRestart = false;
                            hostErrorTimeoutSeconds = 860036;
                            instanceTerminationAction = SchedulingInstanceTerminationActionEnum.DELETE;
                            locationHint = "numquam";
                            maintenanceFreezeDurationHours = 28163;
                            maintenanceInterval = SchedulingMaintenanceIntervalEnum.PERIODIC;
                            maxRunDuration = new Duration() {{
                                nanos = 713374;
                                seconds = "optio";
                            }};;
                            minNodeCpus = 106766;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "itaque";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("deleniti"),
                                        add("explicabo"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = SchedulingOnHostMaintenanceEnum.TERMINATE;
                            preemptible = false;
                            provisioningModel = SchedulingProvisioningModelEnum.SPOT;
                            terminationTime = "magnam";
                        }};;
                        serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                            add(new ServiceAccount() {{
                                email = "Otilia.Jacobs97@hotmail.com";
                                scopes = new String[]{{
                                    add("reiciendis"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Mohammed.Mohr77@yahoo.com";
                                scopes = new String[]{{
                                    add("inventore"),
                                    add("beatae"),
                                    add("similique"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Harrison_Leuschke@yahoo.com";
                                scopes = new String[]{{
                                    add("dicta"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Abbigail_Tromp@gmail.com";
                                scopes = new String[]{{
                                    add("cum"),
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
                            fingerprint = "sint";
                            items = new String[]{{
                                add("voluptatem"),
                                add("repellendus"),
                                add("dignissimos"),
                            }};
                        }};;
                    }};;
                    kind = "quaerat";
                    machineImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "nisi";
                        kmsKeyServiceAccount = "possimus";
                        rawKey = "quia";
                        rsaEncryptedKey = "dolorum";
                        sha256 = "nihil";
                    }};;
                    name = "Dr. Clinton Stehr";
                    satisfiesPzs = false;
                    savedDisks = new org.openapis.openapi.models.shared.SavedDisk[]{{
                        add(new SavedDisk() {{
                            architecture = SavedDiskArchitectureEnum.X8664;
                            kind = "quam";
                            sourceDisk = "iste";
                            storageBytes = "tenetur";
                            storageBytesStatus = SavedDiskStorageBytesStatusEnum.UP_TO_DATE;
                        }}),
                    }};
                    selfLink = "sint";
                    sourceDiskEncryptionKeys = new org.openapis.openapi.models.shared.SourceDiskEncryptionKey[]{{
                        add(new SourceDiskEncryptionKey() {{
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "distinctio";
                                kmsKeyServiceAccount = "earum";
                                rawKey = "veniam";
                                rsaEncryptedKey = "maiores";
                                sha256 = "et";
                            }};
                            sourceDisk = "dignissimos";
                        }}),
                        add(new SourceDiskEncryptionKey() {{
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "sint";
                                kmsKeyServiceAccount = "hic";
                                rawKey = "vel";
                                rsaEncryptedKey = "corporis";
                                sha256 = "sit";
                            }};
                            sourceDisk = "libero";
                        }}),
                        add(new SourceDiskEncryptionKey() {{
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "quasi";
                                kmsKeyServiceAccount = "earum";
                                rawKey = "quam";
                                rsaEncryptedKey = "aut";
                                sha256 = "ducimus";
                            }};
                            sourceDisk = "repudiandae";
                        }}),
                    }};
                    sourceInstance = "ducimus";
                    sourceInstanceProperties = new SourceInstanceProperties() {{
                        canIpForward = false;
                        deletionProtection = false;
                        description = "officiis";
                        disks = new org.openapis.openapi.models.shared.SavedAttachedDisk[]{{
                            add(new SavedAttachedDisk() {{
                                autoDelete = false;
                                boot = false;
                                deviceName = "neque";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "molestias";
                                    kmsKeyServiceAccount = "ea";
                                    rawKey = "odio";
                                    rsaEncryptedKey = "sunt";
                                    sha256 = "non";
                                }};
                                diskSizeGb = "soluta";
                                diskType = "similique";
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                                    }}),
                                }};
                                index = 182499;
                                interface_ = SavedAttachedDiskInterfaceEnum.SCSI;
                                kind = "expedita";
                                licenses = new String[]{{
                                    add("ex"),
                                    add("et"),
                                    add("cupiditate"),
                                    add("dicta"),
                                }};
                                mode = SavedAttachedDiskModeEnum.READ_WRITE;
                                source = "facere";
                                storageBytes = "magni";
                                storageBytesStatus = SavedAttachedDiskStorageBytesStatusEnum.UPDATING;
                                type = SavedAttachedDiskTypeEnum.SCRATCH;
                            }}),
                            add(new SavedAttachedDisk() {{
                                autoDelete = false;
                                boot = false;
                                deviceName = "maxime";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "vitae";
                                    kmsKeyServiceAccount = "alias";
                                    rawKey = "maxime";
                                    rsaEncryptedKey = "vitae";
                                    sha256 = "blanditiis";
                                }};
                                diskSizeGb = "ipsam";
                                diskType = "ab";
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.WINDOWS;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                    }}),
                                }};
                                index = 450454;
                                interface_ = SavedAttachedDiskInterfaceEnum.SCSI;
                                kind = "rerum";
                                licenses = new String[]{{
                                    add("fugit"),
                                    add("vel"),
                                    add("fugit"),
                                    add("ab"),
                                }};
                                mode = SavedAttachedDiskModeEnum.READ_ONLY;
                                source = "esse";
                                storageBytes = "sed";
                                storageBytesStatus = SavedAttachedDiskStorageBytesStatusEnum.UPDATING;
                                type = SavedAttachedDiskTypeEnum.PERSISTENT;
                            }}),
                        }};
                        guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 985477;
                                acceleratorType = "officia";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 352126;
                                acceleratorType = "ipsa";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 191804;
                                acceleratorType = "natus";
                            }}),
                        }};
                        keyRevocationActionType = SourceInstancePropertiesKeyRevocationActionTypeEnum.NONE;
                        labels = new java.util.HashMap<String, String>() {{
                            put("blanditiis", "eum");
                        }};
                        machineType = "esse";
                        metadata = new Metadata() {{
                            fingerprint = "debitis";
                            items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                                add(new MetadataItems() {{
                                    key = "aspernatur";
                                    value = "nam";
                                }}),
                                add(new MetadataItems() {{
                                    key = "neque";
                                    value = "laborum";
                                }}),
                            }};
                            kind = "autem";
                        }};;
                        minCpuPlatform = "minima";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "labore";
                                        externalIpv6PrefixLength = 699392;
                                        kind = "inventore";
                                        name = "Minnie Wolff";
                                        natIP = "nobis";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "recusandae";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "aspernatur";
                                        subnetworkRangeName = "similique";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "ad";
                                        subnetworkRangeName = "ipsa";
                                    }}),
                                }};
                                fingerprint = "voluptatum";
                                internalIpv6PrefixLength = 475314;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "at";
                                        externalIpv6PrefixLength = 599722;
                                        kind = "provident";
                                        name = "Miss Glen Jones";
                                        natIP = "vero";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "sapiente";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "voluptatum";
                                kind = "nam";
                                name = "Myra Rowe";
                                network = "deleniti";
                                networkAttachment = "dolores";
                                networkIP = "dolores";
                                nicType = NetworkInterfaceNicTypeEnum.VIRTIO_NET;
                                queueCount = 269101;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                subnetwork = "perspiciatis";
                            }}),
                        }};
                        postKeyRevocationActionType = SourceInstancePropertiesPostKeyRevocationActionTypeEnum.POST_KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
                        scheduling = new Scheduling() {{
                            automaticRestart = false;
                            hostErrorTimeoutSeconds = 370447;
                            instanceTerminationAction = SchedulingInstanceTerminationActionEnum.DELETE;
                            locationHint = "repudiandae";
                            maintenanceFreezeDurationHours = 855665;
                            maintenanceInterval = SchedulingMaintenanceIntervalEnum.PERIODIC;
                            maxRunDuration = new Duration() {{
                                nanos = 166395;
                                seconds = "doloribus";
                            }};;
                            minNodeCpus = 292802;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "veritatis";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("eligendi"),
                                        add("numquam"),
                                        add("fuga"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "voluptates";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("inventore"),
                                        add("eius"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "voluptatem";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("corporis"),
                                        add("esse"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = SchedulingOnHostMaintenanceEnum.MIGRATE;
                            preemptible = false;
                            provisioningModel = SchedulingProvisioningModelEnum.SPOT;
                            terminationTime = "earum";
                        }};;
                        serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                            add(new ServiceAccount() {{
                                email = "Coby99@gmail.com";
                                scopes = new String[]{{
                                    add("consequuntur"),
                                }};
                            }}),
                        }};
                        tags = new Tags() {{
                            fingerprint = "natus";
                            items = new String[]{{
                                add("architecto"),
                                add("excepturi"),
                            }};
                        }};;
                    }};;
                    status = MachineImageStatusEnum.CREATING;
                    storageLocations = new String[]{{
                        add("architecto"),
                        add("atque"),
                    }};
                    totalStorageBytes = "cumque";
                }};;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "incidunt";
                fields = "dicta";
                key = "quo";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "excepturi";
                requestId = "natus";
                sourceInstance = "hic";
                uploadType = "ut";
                uploadProtocol = "nisi";
                userIp = "provident";
            }};            

            ComputeMachineImagesInsertResponse res = sdk.machineImages.computeMachineImagesInsert(req, new ComputeMachineImagesInsertSecurity() {{
                option1 = new ComputeMachineImagesInsertSecurityOption1("delectus", "eum") {{
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

            ComputeMachineImagesListRequest req = new ComputeMachineImagesListRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "dolorum";
                filter = "adipisci";
                key = "a";
                maxResults = 60284L;
                oauthToken = "sed";
                orderBy = "sequi";
                pageToken = "minus";
                prettyPrint = false;
                quotaUser = "suscipit";
                returnPartialSuccess = false;
                uploadType = "autem";
                uploadProtocol = "omnis";
                userIp = "itaque";
            }};            

            ComputeMachineImagesListResponse res = sdk.machineImages.computeMachineImagesList(req, new ComputeMachineImagesListSecurity() {{
                option1 = new ComputeMachineImagesListSecurityOption1("laboriosam", "harum") {{
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

            ComputeMachineImagesSetIamPolicyRequest req = new ComputeMachineImagesSetIamPolicyRequest("commodi", "fugit") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "ab";
                            condition = new Expr() {{
                                description = "sunt";
                                expression = "vero";
                                location = "expedita";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("quis"),
                            }};
                            role = "iusto";
                        }}),
                    }};
                    etag = "unde";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("suscipit"),
                                            add("in"),
                                            add("odit"),
                                            add("alias"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("illo"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("maiores"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("ut"),
                                    add("alias"),
                                    add("eligendi"),
                                }};
                                service = "doloremque";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("debitis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aliquid"),
                                            add("blanditiis"),
                                            add("blanditiis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("blanditiis"),
                                            add("debitis"),
                                            add("nobis"),
                                            add("vel"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("consequatur"),
                                            add("consectetur"),
                                            add("illo"),
                                            add("dolores"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("alias"),
                                    add("officia"),
                                    add("mollitia"),
                                    add("animi"),
                                }};
                                service = "officiis";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sit"),
                                            add("aut"),
                                            add("labore"),
                                            add("accusamus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptate"),
                                            add("soluta"),
                                            add("hic"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("neque"),
                                            add("explicabo"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quis"),
                                            add("alias"),
                                            add("provident"),
                                            add("optio"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("atque"),
                                }};
                                service = "quam";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "neque";
                                condition = new Expr() {{
                                    description = "quae";
                                    expression = "a";
                                    location = "eaque";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("voluptatem"),
                                    add("tempore"),
                                    add("quo"),
                                    add("voluptates"),
                                }};
                                role = "enim";
                            }}),
                        }};
                        etag = "enim";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.IN;
                                        svc = "veritatis";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("quisquam"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.IN;
                                        svc = "iste";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("hic"),
                                            add("asperiores"),
                                        }};
                                    }}),
                                }};
                                description = "ducimus";
                                ins = new String[]{{
                                    add("odio"),
                                    add("animi"),
                                    add("exercitationem"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Gayle Kilback";
                                                    value = "dignissimos";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Shaun Koss";
                                                    value = "error";
                                                }}),
                                            }};
                                            field = "culpa";
                                            metric = "culpa";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
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
                                                    name = "Marco Kemmer";
                                                    value = "laboriosam";
                                                }}),
                                            }};
                                            field = "fugit";
                                            metric = "illum";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mrs. Virgil Raynor";
                                                    value = "deserunt";
                                                }}),
                                            }};
                                            field = "nisi";
                                            metric = "harum";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
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
                                                    name = "Frederick Gusikowski";
                                                    value = "ratione";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Alexis Miller";
                                                    value = "at";
                                                }}),
                                            }};
                                            field = "eveniet";
                                            metric = "debitis";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("cumque"),
                                    add("repellendus"),
                                    add("dignissimos"),
                                }};
                                permissions = new String[]{{
                                    add("officia"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "ab";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("corrupti"),
                                            add("tenetur"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.IN;
                                        svc = "quos";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("sunt"),
                                            add("maxime"),
                                            add("aspernatur"),
                                            add("illum"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "sed";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("nostrum"),
                                            add("voluptatum"),
                                            add("necessitatibus"),
                                            add("deleniti"),
                                        }};
                                    }}),
                                }};
                                description = "sed";
                                ins = new String[]{{
                                    add("dignissimos"),
                                    add("facere"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Santos Hyatt";
                                                    value = "nihil";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Emilio Olson";
                                                    value = "occaecati";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Penny Dickinson";
                                                    value = "dolor";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rosa Schultz IV";
                                                    value = "excepturi";
                                                }}),
                                            }};
                                            field = "doloremque";
                                            metric = "natus";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("deserunt"),
                                    add("officiis"),
                                    add("nam"),
                                    add("totam"),
                                }};
                                permissions = new String[]{{
                                    add("labore"),
                                    add("atque"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "illum";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("quos"),
                                            add("rerum"),
                                            add("rem"),
                                            add("unde"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "quo";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("alias"),
                                            add("reprehenderit"),
                                        }};
                                    }}),
                                }};
                                description = "ipsam";
                                ins = new String[]{{
                                    add("minima"),
                                    add("suscipit"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Darin Jakubowski II";
                                                    value = "corporis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Nicholas Shields";
                                                    value = "ipsum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Melinda Anderson";
                                                    value = "earum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ada King";
                                                    value = "totam";
                                                }}),
                                            }};
                                            field = "architecto";
                                            metric = "a";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
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
                                                    name = "Tyrone Stracke Sr.";
                                                    value = "voluptatem";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jordan Becker";
                                                    value = "asperiores";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dan West";
                                                    value = "temporibus";
                                                }}),
                                            }};
                                            field = "quia";
                                            metric = "error";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ken Champlin";
                                                    value = "tempore";
                                                }}),
                                            }};
                                            field = "nisi";
                                            metric = "similique";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lionel Lubowitz";
                                                    value = "excepturi";
                                                }}),
                                            }};
                                            field = "numquam";
                                            metric = "hic";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("quidem"),
                                    add("quibusdam"),
                                    add("et"),
                                    add("officiis"),
                                }};
                                permissions = new String[]{{
                                    add("saepe"),
                                }};
                            }}),
                        }};
                        version = 171156;
                    }};;
                }};;
                accessToken = "illo";
                alt = AltEnum.PROTO;
                callback = "nulla";
                fields = "quisquam";
                key = "commodi";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "doloremque";
                uploadType = "sequi";
                uploadProtocol = "deleniti";
                userIp = "quidem";
            }};            

            ComputeMachineImagesSetIamPolicyResponse res = sdk.machineImages.computeMachineImagesSetIamPolicy(req, new ComputeMachineImagesSetIamPolicySecurity() {{
                option1 = new ComputeMachineImagesSetIamPolicySecurityOption1("dicta", "quibusdam") {{
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

            ComputeMachineImagesTestIamPermissionsRequest req = new ComputeMachineImagesTestIamPermissionsRequest("inventore", "praesentium") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("enim"),
                        add("vitae"),
                        add("accusamus"),
                    }};
                }};;
                accessToken = "tempore";
                alt = AltEnum.JSON;
                callback = "doloribus";
                fields = "possimus";
                key = "non";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "tenetur";
                uploadProtocol = "earum";
                userIp = "eaque";
            }};            

            ComputeMachineImagesTestIamPermissionsResponse res = sdk.machineImages.computeMachineImagesTestIamPermissions(req, new ComputeMachineImagesTestIamPermissionsSecurity() {{
                option1 = new ComputeMachineImagesTestIamPermissionsSecurityOption1("non", "eius") {{
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
