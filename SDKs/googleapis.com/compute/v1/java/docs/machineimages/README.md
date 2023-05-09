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

            ComputeMachineImagesDeleteRequest req = new ComputeMachineImagesDeleteRequest("autem", "nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "non";
                alt = AltEnum.MEDIA;
                callback = "voluptatum";
                fields = "vel";
                key = "quae";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "dolore";
                requestId = "consectetur";
                uploadType = "porro";
                uploadProtocol = "aperiam";
                userIp = "officia";
            }};            

            ComputeMachineImagesDeleteResponse res = sdk.machineImages.computeMachineImagesDelete(req, new ComputeMachineImagesDeleteSecurity() {{
                option1 = new ComputeMachineImagesDeleteSecurityOption1("adipisci", "sit") {{
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

            ComputeMachineImagesGetRequest req = new ComputeMachineImagesGetRequest("labore", "excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsum";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "voluptas";
                key = "porro";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "nihil";
                uploadProtocol = "laboriosam";
                userIp = "necessitatibus";
            }};            

            ComputeMachineImagesGetResponse res = sdk.machineImages.computeMachineImagesGet(req, new ComputeMachineImagesGetSecurity() {{
                option1 = new ComputeMachineImagesGetSecurityOption1("dignissimos", "libero") {{
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

            ComputeMachineImagesGetIamPolicyRequest req = new ComputeMachineImagesGetIamPolicyRequest("qui", "illo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.PROTO;
                callback = "provident";
                fields = "alias";
                key = "illum";
                oauthToken = "aspernatur";
                optionsRequestedPolicyVersion = 471925L;
                prettyPrint = false;
                quotaUser = "ut";
                uploadType = "velit";
                uploadProtocol = "doloribus";
                userIp = "nulla";
            }};            

            ComputeMachineImagesGetIamPolicyResponse res = sdk.machineImages.computeMachineImagesGetIamPolicy(req, new ComputeMachineImagesGetIamPolicySecurity() {{
                option1 = new ComputeMachineImagesGetIamPolicySecurityOption1("ex", "cumque") {{
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
import org.openapis.openapi.models.shared.FileContentBuffer;
import org.openapis.openapi.models.shared.FileContentBufferFileTypeEnum;
import org.openapis.openapi.models.shared.GuestOsFeature;
import org.openapis.openapi.models.shared.GuestOsFeatureTypeEnum;
import org.openapis.openapi.models.shared.InitialStateConfig;
import org.openapis.openapi.models.shared.InstanceProperties;
import org.openapis.openapi.models.shared.InstancePropertiesKeyRevocationActionTypeEnum;
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
import org.openapis.openapi.models.shared.SchedulingNodeAffinity;
import org.openapis.openapi.models.shared.SchedulingNodeAffinityOperatorEnum;
import org.openapis.openapi.models.shared.SchedulingOnHostMaintenanceEnum;
import org.openapis.openapi.models.shared.SchedulingProvisioningModelEnum;
import org.openapis.openapi.models.shared.ServiceAccount;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.SourceDiskEncryptionKey;
import org.openapis.openapi.models.shared.SourceInstanceProperties;
import org.openapis.openapi.models.shared.SourceInstancePropertiesKeyRevocationActionTypeEnum;
import org.openapis.openapi.models.shared.Tags;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeMachineImagesInsertRequest req = new ComputeMachineImagesInsertRequest("magni") {{
                dollarXgafv = XgafvEnum.TWO;
                machineImage = new MachineImage() {{
                    creationTimestamp = "sunt";
                    description = "voluptatem";
                    guestFlush = false;
                    id = "saepe";
                    instanceProperties = new InstanceProperties() {{
                        advancedMachineFeatures = new AdvancedMachineFeatures() {{
                            enableNestedVirtualization = false;
                            enableUefiNetworking = false;
                            threadsPerCore = 408698;
                            visibleCoreCount = 810244;
                        }};;
                        canIpForward = false;
                        confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                            enableConfidentialCompute = false;
                        }};;
                        description = "odit";
                        disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.ARM64;
                                autoDelete = false;
                                boot = false;
                                deviceName = "atque";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "saepe";
                                    kmsKeyServiceAccount = "quo";
                                    rawKey = "eos";
                                    rsaEncryptedKey = "enim";
                                    sha256 = "commodi";
                                }};
                                diskSizeGb = "officia";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                index = 575649;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                    description = "magni";
                                    diskName = "iure";
                                    diskSizeGb = "doloribus";
                                    diskType = "quod";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("numquam", "dignissimos");
                                        put("natus", "natus");
                                        put("nisi", "optio");
                                        put("sint", "esse");
                                    }};
                                    licenses = new String[]{{
                                        add("cum"),
                                        add("soluta"),
                                    }};
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.USE_EXISTING_DISK;
                                    provisionedIops = "ullam";
                                    provisionedThroughput = "esse";
                                    replicaZones = new String[]{{
                                        add("ratione"),
                                        add("praesentium"),
                                        add("perspiciatis"),
                                        add("eos"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("est", "blanditiis");
                                        put("laboriosam", "ipsa");
                                        put("eaque", "quo");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("atque"),
                                        add("illum"),
                                    }};
                                    sourceImage = "eum";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "iusto";
                                        kmsKeyServiceAccount = "facere";
                                        rawKey = "ea";
                                        rsaEncryptedKey = "sequi";
                                        sha256 = "voluptates";
                                    }};
                                    sourceSnapshot = "tempora";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "similique";
                                        kmsKeyServiceAccount = "officia";
                                        rawKey = "exercitationem";
                                        rsaEncryptedKey = "laboriosam";
                                        sha256 = "quos";
                                    }};
                                }};
                                interface_ = AttachedDiskInterfaceEnum.NVME;
                                kind = "vel";
                                licenses = new String[]{{
                                    add("ad"),
                                    add("odio"),
                                }};
                                mode = AttachedDiskModeEnum.READ_WRITE;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "maiores";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "suscipit";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "eaque";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "corporis";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "maiores";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "praesentium";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "illo";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "et";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }};
                                }};
                                source = "molestias";
                                type = AttachedDiskTypeEnum.SCRATCH;
                            }}),
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.X8664;
                                autoDelete = false;
                                boot = false;
                                deviceName = "rem";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "quam";
                                    kmsKeyServiceAccount = "nobis";
                                    rawKey = "qui";
                                    rsaEncryptedKey = "totam";
                                    sha256 = "recusandae";
                                }};
                                diskSizeGb = "atque";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.WINDOWS;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                                    }}),
                                }};
                                index = 797376;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARM64;
                                    description = "laudantium";
                                    diskName = "nisi";
                                    diskSizeGb = "necessitatibus";
                                    diskType = "consequuntur";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("dicta", "earum");
                                        put("magnam", "dolorem");
                                    }};
                                    licenses = new String[]{{
                                        add("consequuntur"),
                                        add("ratione"),
                                        add("ut"),
                                    }};
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK;
                                    provisionedIops = "dolore";
                                    provisionedThroughput = "inventore";
                                    replicaZones = new String[]{{
                                        add("illum"),
                                        add("vitae"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("debitis", "nesciunt");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("nisi"),
                                        add("explicabo"),
                                        add("similique"),
                                        add("culpa"),
                                    }};
                                    sourceImage = "cupiditate";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "culpa";
                                        kmsKeyServiceAccount = "recusandae";
                                        rawKey = "labore";
                                        rsaEncryptedKey = "fuga";
                                        sha256 = "necessitatibus";
                                    }};
                                    sourceSnapshot = "molestias";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "animi";
                                        kmsKeyServiceAccount = "expedita";
                                        rawKey = "numquam";
                                        rsaEncryptedKey = "id";
                                        sha256 = "provident";
                                    }};
                                }};
                                interface_ = AttachedDiskInterfaceEnum.SCSI;
                                kind = "dolore";
                                licenses = new String[]{{
                                    add("quia"),
                                    add("maxime"),
                                    add("exercitationem"),
                                }};
                                mode = AttachedDiskModeEnum.READ_WRITE;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "quidem";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "corporis";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "incidunt";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "magnam";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "veniam";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "quas";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "dolor";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "eaque";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "sed";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "animi";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "rem";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }};
                                }};
                                source = "illum";
                                type = AttachedDiskTypeEnum.PERSISTENT;
                            }}),
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                autoDelete = false;
                                boot = false;
                                deviceName = "quidem";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "assumenda";
                                    kmsKeyServiceAccount = "repellendus";
                                    rawKey = "mollitia";
                                    rsaEncryptedKey = "mollitia";
                                    sha256 = "ipsum";
                                }};
                                diskSizeGb = "quae";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                                    }}),
                                }};
                                index = 108001;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                    description = "modi";
                                    diskName = "omnis";
                                    diskSizeGb = "officia";
                                    diskType = "saepe";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("unde", "cumque");
                                        put("perferendis", "deleniti");
                                    }};
                                    licenses = new String[]{{
                                        add("fugiat"),
                                        add("labore"),
                                        add("vitae"),
                                    }};
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK_IF_SOURCE_CHANGED;
                                    provisionedIops = "tempore";
                                    provisionedThroughput = "libero";
                                    replicaZones = new String[]{{
                                        add("dicta"),
                                        add("totam"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("ut", "repellat");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("dolores"),
                                        add("ratione"),
                                    }};
                                    sourceImage = "pariatur";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "ipsam";
                                        kmsKeyServiceAccount = "tempora";
                                        rawKey = "adipisci";
                                        rsaEncryptedKey = "sint";
                                        sha256 = "ratione";
                                    }};
                                    sourceSnapshot = "quis";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "delectus";
                                        kmsKeyServiceAccount = "ratione";
                                        rawKey = "in";
                                        rsaEncryptedKey = "nihil";
                                        sha256 = "dolorum";
                                    }};
                                }};
                                interface_ = AttachedDiskInterfaceEnum.SCSI;
                                kind = "voluptas";
                                licenses = new String[]{{
                                    add("excepturi"),
                                    add("nam"),
                                    add("ducimus"),
                                    add("officiis"),
                                }};
                                mode = AttachedDiskModeEnum.READ_WRITE;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "nam";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "sequi";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "minima";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "amet";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "quis";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "iusto";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }};
                                }};
                                source = "dolor";
                                type = AttachedDiskTypeEnum.PERSISTENT;
                            }}),
                        }};
                        guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 646434;
                                acceleratorType = "distinctio";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 2518;
                                acceleratorType = "voluptates";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 762495;
                                acceleratorType = "libero";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 530387;
                                acceleratorType = "beatae";
                            }}),
                        }};
                        keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum.KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
                        labels = new java.util.HashMap<String, String>() {{
                            put("laboriosam", "ea");
                            put("beatae", "eius");
                            put("atque", "unde");
                        }};
                        machineType = "ut";
                        metadata = new Metadata() {{
                            fingerprint = "magnam";
                            items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                                add(new MetadataItems() {{
                                    key = "voluptatum";
                                    value = "recusandae";
                                }}),
                                add(new MetadataItems() {{
                                    key = "sint";
                                    value = "doloremque";
                                }}),
                                add(new MetadataItems() {{
                                    key = "voluptatum";
                                    value = "veniam";
                                }}),
                            }};
                            kind = "consequatur";
                        }};;
                        minCpuPlatform = "nihil";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "quisquam";
                                        externalIpv6PrefixLength = 181755;
                                        kind = "exercitationem";
                                        name = "Irma Cormier";
                                        natIP = "nesciunt";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "nesciunt";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "nobis";
                                        externalIpv6PrefixLength = 41458;
                                        kind = "similique";
                                        name = "Kellie Jones";
                                        natIP = "culpa";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "nihil";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "molestiae";
                                        externalIpv6PrefixLength = 509638;
                                        kind = "fugiat";
                                        name = "Allison Borer";
                                        natIP = "natus";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "veritatis";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "deleniti";
                                        subnetworkRangeName = "maiores";
                                    }}),
                                }};
                                fingerprint = "optio";
                                internalIpv6PrefixLength = 399359;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "cupiditate";
                                        externalIpv6PrefixLength = 704518;
                                        kind = "eum";
                                        name = "Mrs. Eugene Windler";
                                        natIP = "corporis";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "quidem";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "ipsam";
                                        externalIpv6PrefixLength = 328588;
                                        kind = "assumenda";
                                        name = "Janet Hane";
                                        natIP = "quia";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "quos";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                                ipv6Address = "dolor";
                                kind = "dolorum";
                                name = "Leona Murazik";
                                network = "laudantium";
                                networkAttachment = "molestias";
                                networkIP = "quo";
                                nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                                queueCount = 268620;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subnetwork = "consequuntur";
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "aut";
                                        externalIpv6PrefixLength = 761594;
                                        kind = "aspernatur";
                                        name = "Doug Waelchi V";
                                        natIP = "saepe";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "repudiandae";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "laudantium";
                                        subnetworkRangeName = "quo";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "adipisci";
                                        subnetworkRangeName = "eius";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "cupiditate";
                                        subnetworkRangeName = "modi";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "commodi";
                                        subnetworkRangeName = "harum";
                                    }}),
                                }};
                                fingerprint = "quidem";
                                internalIpv6PrefixLength = 679733;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "id";
                                        externalIpv6PrefixLength = 35980;
                                        kind = "ullam";
                                        name = "Jimmie Rath";
                                        natIP = "perspiciatis";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "impedit";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "rerum";
                                        externalIpv6PrefixLength = 228036;
                                        kind = "eum";
                                        name = "Ian Schoen";
                                        natIP = "consectetur";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "dolor";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "magni";
                                kind = "dignissimos";
                                name = "Nancy Treutel";
                                network = "autem";
                                networkAttachment = "earum";
                                networkIP = "sint";
                                nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                                queueCount = 914824;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subnetwork = "veniam";
                            }}),
                        }};
                        networkPerformanceConfig = new NetworkPerformanceConfig() {{
                            totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.DEFAULT_;
                        }};;
                        privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum.ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE;
                        reservationAffinity = new ReservationAffinity() {{
                            consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.ANY_RESERVATION;
                            key = "neque";
                            values = new String[]{{
                                add("aliquam"),
                            }};
                        }};;
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("pariatur", "molestiae");
                            put("corrupti", "asperiores");
                        }};
                        resourcePolicies = new String[]{{
                            add("odit"),
                            add("ut"),
                            add("cupiditate"),
                            add("ab"),
                        }};
                        scheduling = new Scheduling() {{
                            automaticRestart = false;
                            instanceTerminationAction = SchedulingInstanceTerminationActionEnum.DELETE;
                            locationHint = "magnam";
                            minNodeCpus = 352766;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "animi";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("voluptates"),
                                        add("veniam"),
                                        add("perspiciatis"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "laborum";
                                    operator = SchedulingNodeAffinityOperatorEnum.IN;
                                    values = new String[]{{
                                        add("a"),
                                        add("ipsum"),
                                        add("amet"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "nisi";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("dolore"),
                                        add("accusamus"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "deserunt";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("rerum"),
                                        add("sapiente"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = SchedulingOnHostMaintenanceEnum.MIGRATE;
                            preemptible = false;
                            provisioningModel = SchedulingProvisioningModelEnum.STANDARD;
                        }};;
                        serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                            add(new ServiceAccount() {{
                                email = "Elsa_Ward@gmail.com";
                                scopes = new String[]{{
                                    add("expedita"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Francisca_Cummings81@gmail.com";
                                scopes = new String[]{{
                                    add("repellendus"),
                                    add("dolorum"),
                                    add("maxime"),
                                    add("minus"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Casey_Denesik@gmail.com";
                                scopes = new String[]{{
                                    add("numquam"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Owen10@hotmail.com";
                                scopes = new String[]{{
                                    add("cum"),
                                    add("quo"),
                                }};
                            }}),
                        }};
                        shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                            enableIntegrityMonitoring = false;
                            enableSecureBoot = false;
                            enableVtpm = false;
                        }};;
                        tags = new Tags() {{
                            fingerprint = "aliquam";
                            items = new String[]{{
                                add("repudiandae"),
                            }};
                        }};;
                    }};;
                    kind = "harum";
                    machineImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "quae";
                        kmsKeyServiceAccount = "consectetur";
                        rawKey = "quaerat";
                        rsaEncryptedKey = "explicabo";
                        sha256 = "fugiat";
                    }};;
                    name = "Julie Aufderhar";
                    satisfiesPzs = false;
                    savedDisks = new org.openapis.openapi.models.shared.SavedDisk[]{{
                        add(new SavedDisk() {{
                            architecture = SavedDiskArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                            kind = "debitis";
                            sourceDisk = "asperiores";
                            storageBytes = "iusto";
                            storageBytesStatus = SavedDiskStorageBytesStatusEnum.UPDATING;
                        }}),
                    }};
                    selfLink = "fugiat";
                    sourceDiskEncryptionKeys = new org.openapis.openapi.models.shared.SourceDiskEncryptionKey[]{{
                        add(new SourceDiskEncryptionKey() {{
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "minima";
                                kmsKeyServiceAccount = "ducimus";
                                rawKey = "est";
                                rsaEncryptedKey = "dicta";
                                sha256 = "architecto";
                            }};
                            sourceDisk = "fugiat";
                        }}),
                        add(new SourceDiskEncryptionKey() {{
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "eum";
                                kmsKeyServiceAccount = "vitae";
                                rawKey = "numquam";
                                rsaEncryptedKey = "deserunt";
                                sha256 = "tempora";
                            }};
                            sourceDisk = "velit";
                        }}),
                        add(new SourceDiskEncryptionKey() {{
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "dicta";
                                kmsKeyServiceAccount = "in";
                                rawKey = "laboriosam";
                                rsaEncryptedKey = "sint";
                                sha256 = "dolores";
                            }};
                            sourceDisk = "repudiandae";
                        }}),
                        add(new SourceDiskEncryptionKey() {{
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "fuga";
                                kmsKeyServiceAccount = "ut";
                                rawKey = "totam";
                                rsaEncryptedKey = "laboriosam";
                                sha256 = "esse";
                            }};
                            sourceDisk = "nesciunt";
                        }}),
                    }};
                    sourceInstance = "vero";
                    sourceInstanceProperties = new SourceInstanceProperties() {{
                        canIpForward = false;
                        deletionProtection = false;
                        description = "nostrum";
                        disks = new org.openapis.openapi.models.shared.SavedAttachedDisk[]{{
                            add(new SavedAttachedDisk() {{
                                autoDelete = false;
                                boot = false;
                                deviceName = "sunt";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "rerum";
                                    kmsKeyServiceAccount = "corrupti";
                                    rawKey = "qui";
                                    rsaEncryptedKey = "quas";
                                    sha256 = "similique";
                                }};
                                diskSizeGb = "error";
                                diskType = "doloremque";
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                index = 432356;
                                interface_ = SavedAttachedDiskInterfaceEnum.NVME;
                                kind = "doloremque";
                                licenses = new String[]{{
                                    add("doloremque"),
                                    add("fugit"),
                                    add("quaerat"),
                                    add("eligendi"),
                                }};
                                mode = SavedAttachedDiskModeEnum.READ_ONLY;
                                source = "sint";
                                storageBytes = "quidem";
                                storageBytesStatus = SavedAttachedDiskStorageBytesStatusEnum.UPDATING;
                                type = SavedAttachedDiskTypeEnum.SCRATCH;
                            }}),
                        }};
                        guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 401781;
                                acceleratorType = "dolore";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 755607;
                                acceleratorType = "magni";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 727604;
                                acceleratorType = "sequi";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 632474;
                                acceleratorType = "ratione";
                            }}),
                        }};
                        keyRevocationActionType = SourceInstancePropertiesKeyRevocationActionTypeEnum.KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
                        labels = new java.util.HashMap<String, String>() {{
                            put("labore", "voluptatum");
                            put("deleniti", "mollitia");
                            put("facere", "debitis");
                            put("ex", "magni");
                        }};
                        machineType = "reiciendis";
                        metadata = new Metadata() {{
                            fingerprint = "autem";
                            items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                                add(new MetadataItems() {{
                                    key = "dolorum";
                                    value = "quaerat";
                                }}),
                                add(new MetadataItems() {{
                                    key = "exercitationem";
                                    value = "molestias";
                                }}),
                                add(new MetadataItems() {{
                                    key = "id";
                                    value = "voluptas";
                                }}),
                            }};
                            kind = "corporis";
                        }};;
                        minCpuPlatform = "eveniet";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "deleniti";
                                        externalIpv6PrefixLength = 228915;
                                        kind = "aut";
                                        name = "Katie Schoen";
                                        natIP = "modi";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "libero";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "repellendus";
                                        subnetworkRangeName = "labore";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "repellat";
                                        subnetworkRangeName = "eum";
                                    }}),
                                }};
                                fingerprint = "quia";
                                internalIpv6PrefixLength = 65621;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "iusto";
                                        externalIpv6PrefixLength = 636216;
                                        kind = "ea";
                                        name = "Mrs. Georgia Schumm III";
                                        natIP = "explicabo";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "quaerat";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "magnam";
                                kind = "cumque";
                                name = "Freda Reichel";
                                network = "similique";
                                networkAttachment = "omnis";
                                networkIP = "sapiente";
                                nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                                queueCount = 551418;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                subnetwork = "at";
                            }}),
                        }};
                        scheduling = new Scheduling() {{
                            automaticRestart = false;
                            instanceTerminationAction = SchedulingInstanceTerminationActionEnum.DELETE;
                            locationHint = "libero";
                            minNodeCpus = 878283;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "in";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("voluptatem"),
                                        add("neque"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "magnam";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("doloribus"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "dolore";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("mollitia"),
                                        add("laudantium"),
                                        add("labore"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = SchedulingOnHostMaintenanceEnum.MIGRATE;
                            preemptible = false;
                            provisioningModel = SchedulingProvisioningModelEnum.SPOT;
                        }};;
                        serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                            add(new ServiceAccount() {{
                                email = "Chaz14@gmail.com";
                                scopes = new String[]{{
                                    add("natus"),
                                    add("facilis"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Bernardo.Muller75@yahoo.com";
                                scopes = new String[]{{
                                    add("officia"),
                                    add("voluptas"),
                                    add("reprehenderit"),
                                    add("neque"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Jevon.Hoeger69@hotmail.com";
                                scopes = new String[]{{
                                    add("quis"),
                                }};
                            }}),
                        }};
                        tags = new Tags() {{
                            fingerprint = "voluptates";
                            items = new String[]{{
                                add("perspiciatis"),
                                add("id"),
                            }};
                        }};;
                    }};;
                    status = MachineImageStatusEnum.DELETING;
                    storageLocations = new String[]{{
                        add("consectetur"),
                    }};
                    totalStorageBytes = "nemo";
                }};;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "quas";
                fields = "optio";
                key = "necessitatibus";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "numquam";
                requestId = "minus";
                sourceInstance = "id";
                uploadType = "porro";
                uploadProtocol = "libero";
                userIp = "perferendis";
            }};            

            ComputeMachineImagesInsertResponse res = sdk.machineImages.computeMachineImagesInsert(req, new ComputeMachineImagesInsertSecurity() {{
                option1 = new ComputeMachineImagesInsertSecurityOption1("accusamus", "ratione") {{
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

            ComputeMachineImagesListRequest req = new ComputeMachineImagesListRequest("vero") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "minima";
                fields = "voluptatem";
                filter = "labore";
                key = "corporis";
                maxResults = 688036L;
                oauthToken = "error";
                orderBy = "quod";
                pageToken = "asperiores";
                prettyPrint = false;
                quotaUser = "ea";
                returnPartialSuccess = false;
                uploadType = "neque";
                uploadProtocol = "nam";
                userIp = "sed";
            }};            

            ComputeMachineImagesListResponse res = sdk.machineImages.computeMachineImagesList(req, new ComputeMachineImagesListSecurity() {{
                option1 = new ComputeMachineImagesListSecurityOption1("quasi", "nemo") {{
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

            ComputeMachineImagesSetIamPolicyRequest req = new ComputeMachineImagesSetIamPolicyRequest("sunt", "quos") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "nam";
                            condition = new Expr() {{
                                description = "corporis";
                                expression = "voluptates";
                                location = "amet";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("eos"),
                            }};
                            role = "qui";
                        }}),
                        add(new Binding() {{
                            bindingId = "autem";
                            condition = new Expr() {{
                                description = "architecto";
                                expression = "tempora";
                                location = "velit";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("assumenda"),
                                add("inventore"),
                            }};
                            role = "nostrum";
                        }}),
                        add(new Binding() {{
                            bindingId = "ex";
                            condition = new Expr() {{
                                description = "totam";
                                expression = "magni";
                                location = "sint";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("voluptas"),
                                add("architecto"),
                                add("officia"),
                                add("reiciendis"),
                            }};
                            role = "quo";
                        }}),
                    }};
                    etag = "in";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("asperiores"),
                                            add("voluptatibus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("tempore"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nihil"),
                                            add("dolor"),
                                            add("possimus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("accusantium"),
                                    add("quo"),
                                }};
                                service = "id";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "at";
                                condition = new Expr() {{
                                    description = "dignissimos";
                                    expression = "aliquid";
                                    location = "ad";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("quae"),
                                    add("ex"),
                                    add("eius"),
                                    add("ab"),
                                }};
                                role = "distinctio";
                            }}),
                        }};
                        etag = "facilis";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "ducimus";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("eos"),
                                            add("quaerat"),
                                            add("vitae"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "assumenda";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("aliquid"),
                                        }};
                                    }}),
                                }};
                                description = "at";
                                ins = new String[]{{
                                    add("beatae"),
                                    add("soluta"),
                                    add("sunt"),
                                    add("rem"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Terrance Schroeder";
                                                    value = "sunt";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Tara Marquardt";
                                                    value = "inventore";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Casey Barrows";
                                                    value = "rerum";
                                                }}),
                                            }};
                                            field = "expedita";
                                            metric = "odit";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("neque"),
                                    add("maxime"),
                                    add("ab"),
                                }};
                                permissions = new String[]{{
                                    add("repellat"),
                                    add("eum"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "quasi";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("numquam"),
                                            add("blanditiis"),
                                            add("sequi"),
                                        }};
                                    }}),
                                }};
                                description = "sunt";
                                ins = new String[]{{
                                    add("exercitationem"),
                                    add("dolor"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Reginald Thiel";
                                                    value = "dicta";
                                                }}),
                                            }};
                                            field = "quisquam";
                                            metric = "adipisci";
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
                                                    name = "Curtis Keeling";
                                                    value = "placeat";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lucy Sporer";
                                                    value = "expedita";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Christie Wisoky";
                                                    value = "soluta";
                                                }}),
                                            }};
                                            field = "aperiam";
                                            metric = "molestias";
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
                                                    name = "Ms. Irma Walter I";
                                                    value = "molestiae";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Danielle Skiles";
                                                    value = "a";
                                                }}),
                                            }};
                                            field = "voluptates";
                                            metric = "vero";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Miss Erik Langosh Jr.";
                                                    value = "minus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Glenda Prosacco";
                                                    value = "perferendis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ruth Schuppe";
                                                    value = "blanditiis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Eugene Murazik";
                                                    value = "alias";
                                                }}),
                                            }};
                                            field = "perferendis";
                                            metric = "aspernatur";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("esse"),
                                }};
                                permissions = new String[]{{
                                    add("ut"),
                                    add("quae"),
                                    add("dolore"),
                                    add("molestias"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "sit";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("illum"),
                                            add("consequuntur"),
                                            add("occaecati"),
                                            add("doloremque"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.IN;
                                        svc = "quos";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("aliquam"),
                                            add("fuga"),
                                            add("itaque"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "suscipit";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("iure"),
                                        }};
                                    }}),
                                }};
                                description = "ab";
                                ins = new String[]{{
                                    add("iste"),
                                    add("sunt"),
                                    add("corporis"),
                                    add("quae"),
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
                                                    name = "Ms. Craig Rosenbaum";
                                                    value = "omnis";
                                                }}),
                                            }};
                                            field = "consequuntur";
                                            metric = "tempora";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("dicta"),
                                    add("earum"),
                                }};
                                permissions = new String[]{{
                                    add("laboriosam"),
                                    add("aliquid"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "in";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("dignissimos"),
                                            add("nisi"),
                                            add("magni"),
                                            add("iure"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "perspiciatis";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("aliquam"),
                                            add("necessitatibus"),
                                            add("tempore"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "numquam";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("at"),
                                            add("dolores"),
                                            add("odit"),
                                            add("molestiae"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "sit";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("deleniti"),
                                            add("repellat"),
                                            add("harum"),
                                        }};
                                    }}),
                                }};
                                description = "atque";
                                ins = new String[]{{
                                    add("nulla"),
                                    add("aliquid"),
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
                                                    name = "Lila Lockman";
                                                    value = "sapiente";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Gerald Denesik";
                                                    value = "nesciunt";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Walter Romaguera";
                                                    value = "laborum";
                                                }}),
                                            }};
                                            field = "omnis";
                                            metric = "voluptatibus";
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
                                                    name = "Lindsey Connelly";
                                                    value = "cumque";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Tracy Hilll MD";
                                                    value = "quasi";
                                                }}),
                                            }};
                                            field = "adipisci";
                                            metric = "occaecati";
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
                                                    name = "Wilbur Bernier";
                                                    value = "atque";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jessie Macejkovic";
                                                    value = "quisquam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Max Thompson";
                                                    value = "amet";
                                                }}),
                                            }};
                                            field = "nulla";
                                            metric = "officia";
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
                                                    name = "Bobby Koss IV";
                                                    value = "animi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Clarence Collier";
                                                    value = "quaerat";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Sheryl Renner";
                                                    value = "recusandae";
                                                }}),
                                            }};
                                            field = "deleniti";
                                            metric = "iure";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("eligendi"),
                                    add("quisquam"),
                                }};
                                permissions = new String[]{{
                                    add("eveniet"),
                                    add("incidunt"),
                                    add("dignissimos"),
                                    add("accusantium"),
                                }};
                            }}),
                        }};
                        version = 771289;
                    }};;
                }};;
                accessToken = "fugiat";
                alt = AltEnum.JSON;
                callback = "veritatis";
                fields = "non";
                key = "reprehenderit";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "recusandae";
                uploadProtocol = "suscipit";
                userIp = "dicta";
            }};            

            ComputeMachineImagesSetIamPolicyResponse res = sdk.machineImages.computeMachineImagesSetIamPolicy(req, new ComputeMachineImagesSetIamPolicySecurity() {{
                option1 = new ComputeMachineImagesSetIamPolicySecurityOption1("ipsam", "aspernatur") {{
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

            ComputeMachineImagesTestIamPermissionsRequest req = new ComputeMachineImagesTestIamPermissionsRequest("placeat", "voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("quibusdam"),
                    }};
                }};;
                accessToken = "doloremque";
                alt = AltEnum.PROTO;
                callback = "voluptatum";
                fields = "eligendi";
                key = "dolor";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "facilis";
                uploadProtocol = "natus";
                userIp = "laborum";
            }};            

            ComputeMachineImagesTestIamPermissionsResponse res = sdk.machineImages.computeMachineImagesTestIamPermissions(req, new ComputeMachineImagesTestIamPermissionsSecurity() {{
                option1 = new ComputeMachineImagesTestIamPermissionsSecurityOption1("exercitationem", "quidem") {{
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
