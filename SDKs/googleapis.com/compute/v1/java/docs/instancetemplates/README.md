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

            ComputeInstanceTemplatesAggregatedListRequest req = new ComputeInstanceTemplatesAggregatedListRequest("assumenda") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laboriosam";
                alt = AltEnum.MEDIA;
                callback = "et";
                fields = "temporibus";
                filter = "optio";
                includeAllScopes = false;
                key = "quam";
                maxResults = 965143L;
                oauthToken = "quae";
                orderBy = "vero";
                pageToken = "amet";
                prettyPrint = false;
                quotaUser = "culpa";
                returnPartialSuccess = false;
                uploadType = "asperiores";
                uploadProtocol = "quasi";
                userIp = "veniam";
            }};            

            ComputeInstanceTemplatesAggregatedListResponse res = sdk.instanceTemplates.computeInstanceTemplatesAggregatedList(req, new ComputeInstanceTemplatesAggregatedListSecurity() {{
                option1 = new ComputeInstanceTemplatesAggregatedListSecurityOption1("provident", "consequuntur") {{
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

            ComputeInstanceTemplatesDeleteRequest req = new ComputeInstanceTemplatesDeleteRequest("aut", "maxime") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aperiam";
                alt = AltEnum.PROTO;
                callback = "ab";
                fields = "cum";
                key = "magnam";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "aperiam";
                requestId = "dicta";
                uploadType = "repellat";
                uploadProtocol = "dolores";
                userIp = "harum";
            }};            

            ComputeInstanceTemplatesDeleteResponse res = sdk.instanceTemplates.computeInstanceTemplatesDelete(req, new ComputeInstanceTemplatesDeleteSecurity() {{
                option1 = new ComputeInstanceTemplatesDeleteSecurityOption1("quibusdam", "totam") {{
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

            ComputeInstanceTemplatesGetRequest req = new ComputeInstanceTemplatesGetRequest("provident", "maxime") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "id";
                alt = AltEnum.JSON;
                callback = "dolores";
                fields = "vel";
                key = "ipsum";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "similique";
                uploadProtocol = "quis";
                userIp = "facilis";
            }};            

            ComputeInstanceTemplatesGetResponse res = sdk.instanceTemplates.computeInstanceTemplatesGet(req, new ComputeInstanceTemplatesGetSecurity() {{
                option1 = new ComputeInstanceTemplatesGetSecurityOption1("in", "nobis") {{
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

            ComputeInstanceTemplatesGetIamPolicyRequest req = new ComputeInstanceTemplatesGetIamPolicyRequest("nisi", "natus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quia";
                alt = AltEnum.PROTO;
                callback = "atque";
                fields = "atque";
                key = "illo";
                oauthToken = "dolorum";
                optionsRequestedPolicyVersion = 590800L;
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "maiores";
                uploadProtocol = "ea";
                userIp = "modi";
            }};            

            ComputeInstanceTemplatesGetIamPolicyResponse res = sdk.instanceTemplates.computeInstanceTemplatesGetIamPolicy(req, new ComputeInstanceTemplatesGetIamPolicySecurity() {{
                option1 = new ComputeInstanceTemplatesGetIamPolicySecurityOption1("sequi", "nisi") {{
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

            ComputeInstanceTemplatesInsertRequest req = new ComputeInstanceTemplatesInsertRequest("autem") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceTemplate = new InstanceTemplate() {{
                    creationTimestamp = "mollitia";
                    description = "quas";
                    id = "hic";
                    kind = "doloremque";
                    name = "Marlon Leffler";
                    properties = new InstanceProperties() {{
                        advancedMachineFeatures = new AdvancedMachineFeatures() {{
                            enableNestedVirtualization = false;
                            enableUefiNetworking = false;
                            threadsPerCore = 617374;
                            visibleCoreCount = 105549;
                        }};;
                        canIpForward = false;
                        confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                            enableConfidentialCompute = false;
                        }};;
                        description = "placeat";
                        disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                autoDelete = false;
                                boot = false;
                                deviceName = "quia";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "nulla";
                                    kmsKeyServiceAccount = "occaecati";
                                    rawKey = "doloribus";
                                    rsaEncryptedKey = "libero";
                                    sha256 = "culpa";
                                }};
                                diskSizeGb = "tenetur";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SECURE_BOOT;
                                    }}),
                                }};
                                index = 642652;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                    description = "animi";
                                    diskName = "vero";
                                    diskSizeGb = "quas";
                                    diskType = "possimus";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("quo", "ullam");
                                        put("ipsa", "placeat");
                                        put("quas", "culpa");
                                        put("consectetur", "nostrum");
                                    }};
                                    licenses = new String[]{{
                                        add("eos"),
                                    }};
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.USE_EXISTING_DISK;
                                    provisionedIops = "iusto";
                                    provisionedThroughput = "dolorem";
                                    replicaZones = new String[]{{
                                        add("blanditiis"),
                                        add("dolore"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("provident", "dolorem");
                                        put("alias", "dignissimos");
                                        put("minima", "eaque");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("alias"),
                                        add("sit"),
                                        add("accusamus"),
                                    }};
                                    sourceImage = "sint";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "commodi";
                                        kmsKeyServiceAccount = "voluptas";
                                        rawKey = "eveniet";
                                        rsaEncryptedKey = "eligendi";
                                        sha256 = "ducimus";
                                    }};
                                    sourceSnapshot = "dolorem";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "eum";
                                        kmsKeyServiceAccount = "possimus";
                                        rawKey = "dolore";
                                        rsaEncryptedKey = "neque";
                                        sha256 = "inventore";
                                    }};
                                }};
                                interface_ = AttachedDiskInterfaceEnum.SCSI;
                                kind = "quaerat";
                                licenses = new String[]{{
                                    add("omnis"),
                                }};
                                mode = AttachedDiskModeEnum.READ_WRITE;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "molestiae";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "dolor";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "cupiditate";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "dolor";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "accusamus";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "ipsum";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "amet";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "quam";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "est";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "placeat";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "minus";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }};
                                }};
                                source = "corrupti";
                                type = AttachedDiskTypeEnum.PERSISTENT;
                            }}),
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                autoDelete = false;
                                boot = false;
                                deviceName = "error";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "animi";
                                    kmsKeyServiceAccount = "ducimus";
                                    rawKey = "perferendis";
                                    rsaEncryptedKey = "impedit";
                                    sha256 = "reiciendis";
                                }};
                                diskSizeGb = "quibusdam";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                                    }}),
                                }};
                                index = 611525;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARM64;
                                    description = "iste";
                                    diskName = "distinctio";
                                    diskSizeGb = "in";
                                    diskType = "consequuntur";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("voluptas", "magnam");
                                    }};
                                    licenses = new String[]{{
                                        add("quae"),
                                        add("ipsa"),
                                    }};
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK_IF_SOURCE_CHANGED;
                                    provisionedIops = "voluptate";
                                    provisionedThroughput = "illum";
                                    replicaZones = new String[]{{
                                        add("perspiciatis"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("laborum", "voluptatum");
                                        put("ratione", "facere");
                                        put("eius", "perspiciatis");
                                        put("consequuntur", "earum");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("inventore"),
                                        add("ut"),
                                        add("tempore"),
                                        add("molestias"),
                                    }};
                                    sourceImage = "fuga";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "odit";
                                        kmsKeyServiceAccount = "minus";
                                        rawKey = "sunt";
                                        rsaEncryptedKey = "sint";
                                        sha256 = "exercitationem";
                                    }};
                                    sourceSnapshot = "magnam";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "veniam";
                                        kmsKeyServiceAccount = "quaerat";
                                        rawKey = "minima";
                                        rsaEncryptedKey = "officiis";
                                        sha256 = "unde";
                                    }};
                                }};
                                interface_ = AttachedDiskInterfaceEnum.NVME;
                                kind = "enim";
                                licenses = new String[]{{
                                    add("cumque"),
                                    add("cumque"),
                                    add("et"),
                                    add("praesentium"),
                                }};
                                mode = AttachedDiskModeEnum.READ_ONLY;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "est";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "unde";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "dicta";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "iure";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "sequi";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "facere";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "laborum";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "quam";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "incidunt";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "nobis";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "ratione";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }};
                                }};
                                source = "sed";
                                type = AttachedDiskTypeEnum.PERSISTENT;
                            }}),
                        }};
                        guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 917006;
                                acceleratorType = "nulla";
                            }}),
                        }};
                        keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum.STOP;
                        labels = new java.util.HashMap<String, String>() {{
                            put("dolor", "totam");
                            put("beatae", "vitae");
                        }};
                        machineType = "laborum";
                        metadata = new Metadata() {{
                            fingerprint = "beatae";
                            items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                                add(new MetadataItems() {{
                                    key = "veniam";
                                    value = "non";
                                }}),
                            }};
                            kind = "laudantium";
                        }};;
                        minCpuPlatform = "consequuntur";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "ducimus";
                                        externalIpv6PrefixLength = 908916;
                                        kind = "repellendus";
                                        name = "Ms. Loretta Harris";
                                        natIP = "aspernatur";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "porro";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "deleniti";
                                        externalIpv6PrefixLength = 985155;
                                        kind = "magnam";
                                        name = "Mathew Feil";
                                        natIP = "nostrum";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "modi";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "fugit";
                                        externalIpv6PrefixLength = 33457;
                                        kind = "fuga";
                                        name = "Miss Delores Carroll";
                                        natIP = "commodi";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "illum";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "ut";
                                        externalIpv6PrefixLength = 646854;
                                        kind = "dignissimos";
                                        name = "Johnathan Reinger";
                                        natIP = "enim";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "sed";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "perspiciatis";
                                        subnetworkRangeName = "odit";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "eligendi";
                                        subnetworkRangeName = "earum";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "iusto";
                                        subnetworkRangeName = "atque";
                                    }}),
                                }};
                                fingerprint = "sunt";
                                internalIpv6PrefixLength = 174915;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "nam";
                                        externalIpv6PrefixLength = 347321;
                                        kind = "architecto";
                                        name = "Leticia Lesch";
                                        natIP = "aspernatur";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "accusantium";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "asperiores";
                                        externalIpv6PrefixLength = 358257;
                                        kind = "tempora";
                                        name = "Randal Lockman";
                                        natIP = "blanditiis";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "et";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "a";
                                        externalIpv6PrefixLength = 812;
                                        kind = "tempore";
                                        name = "Dr. Jimmie Towne";
                                        natIP = "perferendis";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "nulla";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "pariatur";
                                        externalIpv6PrefixLength = 558138;
                                        kind = "sequi";
                                        name = "Ms. Lora Bauch Jr.";
                                        natIP = "provident";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "delectus";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "quae";
                                kind = "voluptas";
                                name = "Dora Flatley";
                                network = "id";
                                networkAttachment = "ex";
                                networkIP = "quos";
                                nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                                queueCount = 792154;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subnetwork = "molestiae";
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "blanditiis";
                                        externalIpv6PrefixLength = 830003;
                                        kind = "impedit";
                                        name = "Clinton Hackett";
                                        natIP = "accusantium";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "deserunt";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "beatae";
                                        externalIpv6PrefixLength = 349712;
                                        kind = "officiis";
                                        name = "Mr. Mattie Hoeger";
                                        natIP = "molestias";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "officia";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "suscipit";
                                        subnetworkRangeName = "sequi";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "debitis";
                                        subnetworkRangeName = "neque";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "mollitia";
                                        subnetworkRangeName = "tenetur";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "non";
                                        subnetworkRangeName = "pariatur";
                                    }}),
                                }};
                                fingerprint = "vero";
                                internalIpv6PrefixLength = 616054;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "quibusdam";
                                        externalIpv6PrefixLength = 639371;
                                        kind = "dolorem";
                                        name = "Eula Schroeder";
                                        natIP = "non";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "praesentium";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "itaque";
                                        externalIpv6PrefixLength = 252323;
                                        kind = "dolorum";
                                        name = "Amelia Morissette";
                                        natIP = "modi";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "maiores";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "in";
                                        externalIpv6PrefixLength = 893495;
                                        kind = "quaerat";
                                        name = "Pam Leannon";
                                        natIP = "nostrum";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "aliquam";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "ipsum";
                                        externalIpv6PrefixLength = 923327;
                                        kind = "inventore";
                                        name = "Isabel Gerhold";
                                        natIP = "consectetur";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "ipsa";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "iure";
                                kind = "cum";
                                name = "Philip Hauck";
                                network = "aut";
                                networkAttachment = "cupiditate";
                                networkIP = "sed";
                                nicType = NetworkInterfaceNicTypeEnum.VIRTIO_NET;
                                queueCount = 874446;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subnetwork = "velit";
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "a";
                                        externalIpv6PrefixLength = 7370;
                                        kind = "consequuntur";
                                        name = "Elaine Marquardt";
                                        natIP = "vel";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "modi";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "quidem";
                                        externalIpv6PrefixLength = 159433;
                                        kind = "eaque";
                                        name = "Doyle Hegmann";
                                        natIP = "veritatis";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "quod";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "itaque";
                                        subnetworkRangeName = "dignissimos";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "magnam";
                                        subnetworkRangeName = "excepturi";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "placeat";
                                        subnetworkRangeName = "dolorum";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "voluptatibus";
                                        subnetworkRangeName = "modi";
                                    }}),
                                }};
                                fingerprint = "enim";
                                internalIpv6PrefixLength = 649661;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "molestiae";
                                        externalIpv6PrefixLength = 964857;
                                        kind = "ex";
                                        name = "Elias Crooks";
                                        natIP = "earum";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "temporibus";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "debitis";
                                kind = "omnis";
                                name = "Rickey DuBuque";
                                network = "tempora";
                                networkAttachment = "quisquam";
                                networkIP = "vel";
                                nicType = NetworkInterfaceNicTypeEnum.VIRTIO_NET;
                                queueCount = 39029;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subnetwork = "quasi";
                            }}),
                        }};
                        networkPerformanceConfig = new NetworkPerformanceConfig() {{
                            totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.DEFAULT_;
                        }};;
                        privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum.ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE;
                        reservationAffinity = new ReservationAffinity() {{
                            consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.UNSPECIFIED;
                            key = "occaecati";
                            values = new String[]{{
                                add("nesciunt"),
                                add("sequi"),
                                add("in"),
                                add("modi"),
                            }};
                        }};;
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("velit", "aut");
                            put("rem", "odit");
                        }};
                        resourcePolicies = new String[]{{
                            add("error"),
                            add("incidunt"),
                            add("asperiores"),
                        }};
                        scheduling = new Scheduling() {{
                            automaticRestart = false;
                            instanceTerminationAction = SchedulingInstanceTerminationActionEnum.DELETE;
                            locationHint = "mollitia";
                            minNodeCpus = 718112;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "earum";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("eum"),
                                        add("iusto"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = SchedulingOnHostMaintenanceEnum.MIGRATE;
                            preemptible = false;
                            provisioningModel = SchedulingProvisioningModelEnum.STANDARD;
                        }};;
                        serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                            add(new ServiceAccount() {{
                                email = "Danny.Daniel@hotmail.com";
                                scopes = new String[]{{
                                    add("eaque"),
                                    add("officia"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Hobart30@gmail.com";
                                scopes = new String[]{{
                                    add("nihil"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Lewis.Schamberger92@yahoo.com";
                                scopes = new String[]{{
                                    add("error"),
                                    add("dicta"),
                                    add("nemo"),
                                }};
                            }}),
                        }};
                        shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                            enableIntegrityMonitoring = false;
                            enableSecureBoot = false;
                            enableVtpm = false;
                        }};;
                        tags = new Tags() {{
                            fingerprint = "unde";
                            items = new String[]{{
                                add("temporibus"),
                                add("omnis"),
                            }};
                        }};;
                    }};;
                    region = "amet";
                    selfLink = "deserunt";
                    sourceInstance = "ducimus";
                    sourceInstanceParams = new SourceInstanceParams() {{
                        diskConfigs = new org.openapis.openapi.models.shared.DiskInstantiationConfig[]{{
                            add(new DiskInstantiationConfig() {{
                                autoDelete = false;
                                customImage = "impedit";
                                deviceName = "ipsa";
                                instantiateFrom = DiskInstantiationConfigInstantiateFromEnum.BLANK;
                            }}),
                            add(new DiskInstantiationConfig() {{
                                autoDelete = false;
                                customImage = "ullam";
                                deviceName = "sed";
                                instantiateFrom = DiskInstantiationConfigInstantiateFromEnum.SOURCE_IMAGE_FAMILY;
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "saepe";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "quaerat";
                key = "cum";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "quibusdam";
                requestId = "rerum";
                uploadType = "atque";
                uploadProtocol = "tempore";
                userIp = "odio";
            }};            

            ComputeInstanceTemplatesInsertResponse res = sdk.instanceTemplates.computeInstanceTemplatesInsert(req, new ComputeInstanceTemplatesInsertSecurity() {{
                option1 = new ComputeInstanceTemplatesInsertSecurityOption1("reprehenderit", "quas") {{
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

            ComputeInstanceTemplatesListRequest req = new ComputeInstanceTemplatesListRequest("voluptates") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nam";
                alt = AltEnum.MEDIA;
                callback = "officiis";
                fields = "quasi";
                filter = "fugiat";
                key = "aspernatur";
                maxResults = 772593L;
                oauthToken = "voluptatibus";
                orderBy = "ad";
                pageToken = "eaque";
                prettyPrint = false;
                quotaUser = "aspernatur";
                returnPartialSuccess = false;
                uploadType = "expedita";
                uploadProtocol = "laborum";
                userIp = "hic";
            }};            

            ComputeInstanceTemplatesListResponse res = sdk.instanceTemplates.computeInstanceTemplatesList(req, new ComputeInstanceTemplatesListSecurity() {{
                option1 = new ComputeInstanceTemplatesListSecurityOption1("rerum", "explicabo") {{
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

            ComputeInstanceTemplatesSetIamPolicyRequest req = new ComputeInstanceTemplatesSetIamPolicyRequest("eligendi", "nam") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "aliquid";
                            condition = new Expr() {{
                                description = "adipisci";
                                expression = "ipsam";
                                location = "fugiat";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("eum"),
                                add("exercitationem"),
                                add("at"),
                                add("culpa"),
                            }};
                            role = "alias";
                        }}),
                        add(new Binding() {{
                            bindingId = "eos";
                            condition = new Expr() {{
                                description = "quos";
                                expression = "quisquam";
                                location = "dolor";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("enim"),
                                add("veritatis"),
                                add("mollitia"),
                            }};
                            role = "veritatis";
                        }}),
                    }};
                    etag = "vero";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("fugiat"),
                                            add("deserunt"),
                                            add("sint"),
                                            add("eum"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("rem"),
                                    add("occaecati"),
                                }};
                                service = "possimus";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "nam";
                                condition = new Expr() {{
                                    description = "quam";
                                    expression = "blanditiis";
                                    location = "laboriosam";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("necessitatibus"),
                                }};
                                role = "veritatis";
                            }}),
                            add(new Binding() {{
                                bindingId = "consectetur";
                                condition = new Expr() {{
                                    description = "fuga";
                                    expression = "quasi";
                                    location = "eos";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("rerum"),
                                    add("cupiditate"),
                                }};
                                role = "excepturi";
                            }}),
                        }};
                        etag = "fugit";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "numquam";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("ducimus"),
                                            add("asperiores"),
                                            add("veniam"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "ut";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("nesciunt"),
                                            add("ex"),
                                            add("tempore"),
                                        }};
                                    }}),
                                }};
                                description = "rem";
                                ins = new String[]{{
                                    add("harum"),
                                    add("consectetur"),
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
                                                    name = "Jean Hane II";
                                                    value = "magnam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Terrell Muller";
                                                    value = "dicta";
                                                }}),
                                            }};
                                            field = "ratione";
                                            metric = "delectus";
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
                                                    name = "Lamar Kirlin";
                                                    value = "reiciendis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Betty Jast";
                                                    value = "ipsam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Virgil Gislason";
                                                    value = "in";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Grace Stehr";
                                                    value = "in";
                                                }}),
                                            }};
                                            field = "fugit";
                                            metric = "voluptate";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Greg Bruen";
                                                    value = "nulla";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rosemarie Hansen";
                                                    value = "debitis";
                                                }}),
                                            }};
                                            field = "minima";
                                            metric = "vel";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dr. Mamie Schneider";
                                                    value = "reprehenderit";
                                                }}),
                                            }};
                                            field = "voluptatem";
                                            metric = "placeat";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("voluptatibus"),
                                }};
                                permissions = new String[]{{
                                    add("provident"),
                                    add("delectus"),
                                    add("dolore"),
                                    add("totam"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "veniam";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("minima"),
                                            add("expedita"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "eum";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("nostrum"),
                                            add("cumque"),
                                        }};
                                    }}),
                                }};
                                description = "eaque";
                                ins = new String[]{{
                                    add("earum"),
                                    add("culpa"),
                                    add("vel"),
                                    add("sapiente"),
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
                                                    name = "Candace Braun";
                                                    value = "eligendi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Floyd Reilly Sr.";
                                                    value = "corporis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Shelia Koss";
                                                    value = "reiciendis";
                                                }}),
                                            }};
                                            field = "dolore";
                                            metric = "voluptatibus";
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
                                                    name = "Dr. Dorothy Schuppe";
                                                    value = "exercitationem";
                                                }}),
                                            }};
                                            field = "quis";
                                            metric = "quos";
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
                                                    name = "Irene Connelly";
                                                    value = "nam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Steven Weimann";
                                                    value = "voluptatem";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Kurt Schuppe";
                                                    value = "culpa";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Clay Baumbach";
                                                    value = "quibusdam";
                                                }}),
                                            }};
                                            field = "temporibus";
                                            metric = "voluptate";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("est"),
                                    add("placeat"),
                                    add("occaecati"),
                                }};
                                permissions = new String[]{{
                                    add("modi"),
                                    add("minus"),
                                    add("id"),
                                }};
                            }}),
                        }};
                        version = 636070;
                    }};;
                }};;
                accessToken = "beatae";
                alt = AltEnum.PROTO;
                callback = "a";
                fields = "eveniet";
                key = "sint";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "illo";
                uploadType = "minima";
                uploadProtocol = "nulla";
                userIp = "reiciendis";
            }};            

            ComputeInstanceTemplatesSetIamPolicyResponse res = sdk.instanceTemplates.computeInstanceTemplatesSetIamPolicy(req, new ComputeInstanceTemplatesSetIamPolicySecurity() {{
                option1 = new ComputeInstanceTemplatesSetIamPolicySecurityOption1("molestias", "ipsa") {{
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

            ComputeInstanceTemplatesTestIamPermissionsRequest req = new ComputeInstanceTemplatesTestIamPermissionsRequest("amet", "natus") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("doloribus"),
                        add("amet"),
                    }};
                }};;
                accessToken = "ducimus";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "ab";
                key = "sint";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "fugiat";
                uploadProtocol = "eius";
                userIp = "odit";
            }};            

            ComputeInstanceTemplatesTestIamPermissionsResponse res = sdk.instanceTemplates.computeInstanceTemplatesTestIamPermissions(req, new ComputeInstanceTemplatesTestIamPermissionsSecurity() {{
                option1 = new ComputeInstanceTemplatesTestIamPermissionsSecurityOption1("recusandae", "minima") {{
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
