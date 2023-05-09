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

            ComputeInstanceTemplatesAggregatedListRequest req = new ComputeInstanceTemplatesAggregatedListRequest("beatae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cupiditate";
                alt = AltEnum.MEDIA;
                callback = "tempore";
                fields = "minima";
                filter = "expedita";
                includeAllScopes = false;
                key = "modi";
                maxResults = 711732L;
                oauthToken = "quaerat";
                orderBy = "accusantium";
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "saepe";
                returnPartialSuccess = false;
                uploadType = "sapiente";
                uploadProtocol = "iusto";
                userIp = "quasi";
            }};            

            ComputeInstanceTemplatesAggregatedListResponse res = sdk.instanceTemplates.computeInstanceTemplatesAggregatedList(req, new ComputeInstanceTemplatesAggregatedListSecurity() {{
                option1 = new ComputeInstanceTemplatesAggregatedListSecurityOption1("odit", "tempore") {{
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

            ComputeInstanceTemplatesDeleteRequest req = new ComputeInstanceTemplatesDeleteRequest("ducimus", "animi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "similique";
                alt = AltEnum.PROTO;
                callback = "voluptatem";
                fields = "adipisci";
                key = "tempora";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "soluta";
                requestId = "inventore";
                uploadType = "ducimus";
                uploadProtocol = "vitae";
                userIp = "sit";
            }};            

            ComputeInstanceTemplatesDeleteResponse res = sdk.instanceTemplates.computeInstanceTemplatesDelete(req, new ComputeInstanceTemplatesDeleteSecurity() {{
                option1 = new ComputeInstanceTemplatesDeleteSecurityOption1("autem", "rem") {{
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

            ComputeInstanceTemplatesGetRequest req = new ComputeInstanceTemplatesGetRequest("deleniti", "illum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vero";
                alt = AltEnum.PROTO;
                callback = "necessitatibus";
                fields = "asperiores";
                key = "rem";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "quam";
                uploadType = "earum";
                uploadProtocol = "velit";
                userIp = "fugiat";
            }};            

            ComputeInstanceTemplatesGetResponse res = sdk.instanceTemplates.computeInstanceTemplatesGet(req, new ComputeInstanceTemplatesGetSecurity() {{
                option1 = new ComputeInstanceTemplatesGetSecurityOption1("pariatur", "voluptatem") {{
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

            ComputeInstanceTemplatesGetIamPolicyRequest req = new ComputeInstanceTemplatesGetIamPolicyRequest("quod", "minus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolor";
                alt = AltEnum.JSON;
                callback = "tenetur";
                fields = "quasi";
                key = "dicta";
                oauthToken = "rerum";
                optionsRequestedPolicyVersion = 205473L;
                prettyPrint = false;
                quotaUser = "voluptates";
                uploadType = "aliquam";
                uploadProtocol = "voluptates";
                userIp = "alias";
            }};            

            ComputeInstanceTemplatesGetIamPolicyResponse res = sdk.instanceTemplates.computeInstanceTemplatesGetIamPolicy(req, new ComputeInstanceTemplatesGetIamPolicySecurity() {{
                option1 = new ComputeInstanceTemplatesGetIamPolicySecurityOption1("voluptatum", "aut") {{
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

            ComputeInstanceTemplatesInsertRequest req = new ComputeInstanceTemplatesInsertRequest("officia") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceTemplate = new InstanceTemplate() {{
                    creationTimestamp = "vitae";
                    description = "ipsa";
                    id = "incidunt";
                    kind = "architecto";
                    name = "Andre Thompson";
                    properties = new InstanceProperties() {{
                        advancedMachineFeatures = new AdvancedMachineFeatures() {{
                            enableNestedVirtualization = false;
                            enableUefiNetworking = false;
                            threadsPerCore = 352288;
                            visibleCoreCount = 592708;
                        }};;
                        canIpForward = false;
                        confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                            enableConfidentialCompute = false;
                        }};;
                        description = "officiis";
                        disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                autoDelete = false;
                                boot = false;
                                deviceName = "delectus";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "dolor";
                                    kmsKeyServiceAccount = "dignissimos";
                                    rawKey = "doloremque";
                                    rsaEncryptedKey = "consequuntur";
                                    sha256 = "maxime";
                                }};
                                diskSizeGb = "quis";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.WINDOWS;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.GVNIC;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                    }}),
                                }};
                                index = 196647;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                    description = "voluptates";
                                    diskName = "culpa";
                                    diskSizeGb = "at";
                                    diskType = "dolorem";
                                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                        }}),
                                    }};
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("maiores", "culpa");
                                        put("dolore", "eius");
                                    }};
                                    licenses = new String[]{{
                                        add("alias"),
                                        add("molestiae"),
                                    }};
                                    multiWriter = false;
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.USE_EXISTING_DISK;
                                    provisionedIops = "voluptatibus";
                                    provisionedThroughput = "sequi";
                                    replicaZones = new String[]{{
                                        add("minima"),
                                        add("libero"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("tempora", "sed");
                                        put("quas", "aspernatur");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("fugit"),
                                        add("et"),
                                        add("reiciendis"),
                                    }};
                                    sourceImage = "nulla";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "libero";
                                        kmsKeyServiceAccount = "sed";
                                        rawKey = "hic";
                                        rsaEncryptedKey = "eum";
                                        sha256 = "sint";
                                    }};
                                    sourceSnapshot = "eveniet";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "veniam";
                                        kmsKeyServiceAccount = "unde";
                                        rawKey = "consequuntur";
                                        rsaEncryptedKey = "laboriosam";
                                        sha256 = "iusto";
                                    }};
                                }};
                                interface_ = AttachedDiskInterfaceEnum.SCSI;
                                kind = "dignissimos";
                                licenses = new String[]{{
                                    add("quo"),
                                }};
                                locked = false;
                                mode = AttachedDiskModeEnum.READ_WRITE;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "pariatur";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "quo";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "labore";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "voluptatum";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "doloremque";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "deleniti";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "quas";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "placeat";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }};
                                }};
                                source = "aut";
                                type = AttachedDiskTypeEnum.SCRATCH;
                                userLicenses = new String[]{{
                                    add("eveniet"),
                                    add("odit"),
                                    add("quam"),
                                    add("ullam"),
                                }};
                            }}),
                        }};
                        displayDevice = new DisplayDevice() {{
                            enableDisplay = false;
                        }};;
                        guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 670734;
                                acceleratorType = "fugit";
                            }}),
                        }};
                        keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum.KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
                        labels = new java.util.HashMap<String, String>() {{
                            put("ducimus", "quod");
                            put("aut", "numquam");
                        }};
                        machineType = "numquam";
                        metadata = new Metadata() {{
                            fingerprint = "omnis";
                            items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                                add(new MetadataItems() {{
                                    key = "inventore";
                                    value = "quaerat";
                                }}),
                                add(new MetadataItems() {{
                                    key = "nesciunt";
                                    value = "hic";
                                }}),
                                add(new MetadataItems() {{
                                    key = "natus";
                                    value = "laboriosam";
                                }}),
                                add(new MetadataItems() {{
                                    key = "quasi";
                                    value = "excepturi";
                                }}),
                            }};
                            kind = "distinctio";
                        }};;
                        minCpuPlatform = "cum";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "incidunt";
                                        externalIpv6PrefixLength = 46036;
                                        kind = "vero";
                                        name = "Dr. Maggie Bergnaum";
                                        natIP = "modi";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "autem";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "commodi";
                                        externalIpv6PrefixLength = 153732;
                                        kind = "exercitationem";
                                        name = "Roy Flatley";
                                        natIP = "natus";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "minus";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "quibusdam";
                                        externalIpv6PrefixLength = 129509;
                                        kind = "adipisci";
                                        name = "Diana Mohr";
                                        natIP = "iusto";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "nemo";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "exercitationem";
                                        externalIpv6PrefixLength = 859082;
                                        kind = "tempore";
                                        name = "Mr. Shawna Hayes V";
                                        natIP = "adipisci";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "accusamus";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "asperiores";
                                        subnetworkRangeName = "ea";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "voluptate";
                                        subnetworkRangeName = "aliquid";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "nobis";
                                        subnetworkRangeName = "reprehenderit";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "consequuntur";
                                        subnetworkRangeName = "accusantium";
                                    }}),
                                }};
                                fingerprint = "autem";
                                internalIpv6PrefixLength = 865309;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "facilis";
                                        externalIpv6PrefixLength = 450312;
                                        kind = "ad";
                                        name = "Karen Halvorson";
                                        natIP = "ad";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "dolore";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "officiis";
                                        externalIpv6PrefixLength = 856180;
                                        kind = "minus";
                                        name = "Annie Morissette";
                                        natIP = "corrupti";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "aliquam";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "explicabo";
                                        externalIpv6PrefixLength = 51089;
                                        kind = "hic";
                                        name = "Anna Dare PhD";
                                        natIP = "aliquam";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "totam";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                                ipv6Address = "porro";
                                kind = "voluptas";
                                name = "Tony Ratke";
                                network = "nobis";
                                networkAttachment = "nesciunt";
                                networkIP = "quidem";
                                nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                                queueCount = 856985;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subnetwork = "modi";
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "blanditiis";
                                        externalIpv6PrefixLength = 842241;
                                        kind = "odio";
                                        name = "Tommy Nienow";
                                        natIP = "aspernatur";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "maxime";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "accusantium";
                                        externalIpv6PrefixLength = 357434;
                                        kind = "laboriosam";
                                        name = "Guadalupe Wiegand";
                                        natIP = "animi";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "doloremque";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "pariatur";
                                        externalIpv6PrefixLength = 146693;
                                        kind = "inventore";
                                        name = "Clara Mertz";
                                        natIP = "aut";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "quasi";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "odio";
                                        subnetworkRangeName = "quo";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "ipsum";
                                        subnetworkRangeName = "cum";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "et";
                                        subnetworkRangeName = "harum";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "magnam";
                                        subnetworkRangeName = "illo";
                                    }}),
                                }};
                                fingerprint = "atque";
                                internalIpv6PrefixLength = 298657;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "consequatur";
                                        externalIpv6PrefixLength = 391778;
                                        kind = "quae";
                                        name = "Edward Balistreri Jr.";
                                        natIP = "possimus";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "qui";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "repellendus";
                                        externalIpv6PrefixLength = 798854;
                                        kind = "error";
                                        name = "Doris Wyman";
                                        natIP = "delectus";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "eos";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "quo";
                                kind = "aliquam";
                                name = "Irma Gerhold";
                                network = "itaque";
                                networkAttachment = "molestias";
                                networkIP = "assumenda";
                                nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                                queueCount = 580379;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subnetwork = "veniam";
                            }}),
                        }};
                        networkPerformanceConfig = new NetworkPerformanceConfig() {{
                            totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.DEFAULT_;
                        }};;
                        postKeyRevocationActionType = InstancePropertiesPostKeyRevocationActionTypeEnum.SHUTDOWN;
                        privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum.ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE;
                        reservationAffinity = new ReservationAffinity() {{
                            consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.SPECIFIC_RESERVATION;
                            key = "ea";
                            values = new String[]{{
                                add("delectus"),
                            }};
                        }};;
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("quos", "excepturi");
                            put("eum", "rerum");
                        }};
                        resourcePolicies = new String[]{{
                            add("ad"),
                            add("et"),
                            add("eveniet"),
                            add("tempora"),
                        }};
                        scheduling = new Scheduling() {{
                            automaticRestart = false;
                            hostErrorTimeoutSeconds = 408200;
                            instanceTerminationAction = SchedulingInstanceTerminationActionEnum.INSTANCE_TERMINATION_ACTION_UNSPECIFIED;
                            locationHint = "sed";
                            maintenanceFreezeDurationHours = 853503;
                            maintenanceInterval = SchedulingMaintenanceIntervalEnum.PERIODIC;
                            maxRunDuration = new Duration() {{
                                nanos = 212346;
                                seconds = "cumque";
                            }};;
                            minNodeCpus = 198788;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "consectetur";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("quae"),
                                        add("quam"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "dignissimos";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("earum"),
                                        add("quaerat"),
                                        add("excepturi"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = SchedulingOnHostMaintenanceEnum.MIGRATE;
                            preemptible = false;
                            provisioningModel = SchedulingProvisioningModelEnum.SPOT;
                            terminationTime = "numquam";
                        }};;
                        serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                            add(new ServiceAccount() {{
                                email = "Cathy.Hamill16@yahoo.com";
                                scopes = new String[]{{
                                    add("iste"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Koby.Thiel@gmail.com";
                                scopes = new String[]{{
                                    add("dolore"),
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
                            fingerprint = "labore";
                            items = new String[]{{
                                add("ullam"),
                                add("quibusdam"),
                                add("recusandae"),
                            }};
                        }};;
                    }};;
                    region = "ad";
                    selfLink = "omnis";
                    sourceInstance = "mollitia";
                    sourceInstanceParams = new SourceInstanceParams() {{
                        diskConfigs = new org.openapis.openapi.models.shared.DiskInstantiationConfig[]{{
                            add(new DiskInstantiationConfig() {{
                                autoDelete = false;
                                customImage = "nihil";
                                deviceName = "ducimus";
                                instantiateFrom = DiskInstantiationConfigInstantiateFromEnum.ATTACH_READ_ONLY;
                            }}),
                            add(new DiskInstantiationConfig() {{
                                autoDelete = false;
                                customImage = "aliquid";
                                deviceName = "ea";
                                instantiateFrom = DiskInstantiationConfigInstantiateFromEnum.DEFAULT_;
                            }}),
                            add(new DiskInstantiationConfig() {{
                                autoDelete = false;
                                customImage = "voluptatem";
                                deviceName = "quisquam";
                                instantiateFrom = DiskInstantiationConfigInstantiateFromEnum.SOURCE_IMAGE_FAMILY;
                            }}),
                            add(new DiskInstantiationConfig() {{
                                autoDelete = false;
                                customImage = "et";
                                deviceName = "optio";
                                instantiateFrom = DiskInstantiationConfigInstantiateFromEnum.SOURCE_IMAGE_FAMILY;
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "quis";
                alt = AltEnum.MEDIA;
                callback = "consectetur";
                fields = "qui";
                key = "aliquid";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "enim";
                requestId = "explicabo";
                uploadType = "ipsam";
                uploadProtocol = "beatae";
                userIp = "repudiandae";
            }};            

            ComputeInstanceTemplatesInsertResponse res = sdk.instanceTemplates.computeInstanceTemplatesInsert(req, new ComputeInstanceTemplatesInsertSecurity() {{
                option1 = new ComputeInstanceTemplatesInsertSecurityOption1("ex", "ex") {{
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

            ComputeInstanceTemplatesListRequest req = new ComputeInstanceTemplatesListRequest("harum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "non";
                alt = AltEnum.JSON;
                callback = "laboriosam";
                fields = "deleniti";
                filter = "molestias";
                key = "dignissimos";
                maxResults = 813463L;
                oauthToken = "provident";
                orderBy = "omnis";
                pageToken = "dolorum";
                prettyPrint = false;
                quotaUser = "qui";
                returnPartialSuccess = false;
                uploadType = "nulla";
                uploadProtocol = "velit";
                userIp = "amet";
            }};            

            ComputeInstanceTemplatesListResponse res = sdk.instanceTemplates.computeInstanceTemplatesList(req, new ComputeInstanceTemplatesListSecurity() {{
                option1 = new ComputeInstanceTemplatesListSecurityOption1("ipsam", "suscipit") {{
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

            ComputeInstanceTemplatesSetIamPolicyRequest req = new ComputeInstanceTemplatesSetIamPolicyRequest("odio", "ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "velit";
                            condition = new Expr() {{
                                description = "earum";
                                expression = "recusandae";
                                location = "aliquid";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("ad"),
                                add("perspiciatis"),
                                add("delectus"),
                                add("dolorem"),
                            }};
                            role = "ipsam";
                        }}),
                        add(new Binding() {{
                            bindingId = "voluptatum";
                            condition = new Expr() {{
                                description = "dolorum";
                                expression = "officia";
                                location = "earum";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("officia"),
                                add("officiis"),
                                add("ratione"),
                                add("consequuntur"),
                            }};
                            role = "neque";
                        }}),
                        add(new Binding() {{
                            bindingId = "deserunt";
                            condition = new Expr() {{
                                description = "adipisci";
                                expression = "inventore";
                                location = "tempore";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("rerum"),
                                add("laborum"),
                            }};
                            role = "architecto";
                        }}),
                    }};
                    etag = "quod";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nihil"),
                                            add("inventore"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("deleniti"),
                                            add("accusantium"),
                                            add("sed"),
                                            add("minus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptates"),
                                            add("alias"),
                                            add("placeat"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("iste"),
                                    add("assumenda"),
                                    add("neque"),
                                    add("dolores"),
                                }};
                                service = "consectetur";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("animi"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sequi"),
                                            add("officiis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("optio"),
                                            add("asperiores"),
                                            add("et"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nemo"),
                                            add("commodi"),
                                            add("soluta"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("id"),
                                    add("quaerat"),
                                    add("inventore"),
                                }};
                                service = "accusamus";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("numquam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("culpa"),
                                            add("aliquam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolorum"),
                                            add("maxime"),
                                            add("repellat"),
                                            add("veritatis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("optio"),
                                            add("fugiat"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("ut"),
                                    add("dolore"),
                                }};
                                service = "numquam";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nemo"),
                                            add("nisi"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("iusto"),
                                            add("dolorem"),
                                            add("placeat"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("placeat"),
                                            add("natus"),
                                            add("accusamus"),
                                            add("repellat"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("labore"),
                                    add("adipisci"),
                                    add("at"),
                                    add("impedit"),
                                }};
                                service = "autem";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "consectetur";
                                condition = new Expr() {{
                                    description = "ea";
                                    expression = "aspernatur";
                                    location = "consequatur";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("et"),
                                }};
                                role = "dolor";
                            }}),
                        }};
                        etag = "voluptatum";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "sequi";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("sit"),
                                            add("magni"),
                                            add("aspernatur"),
                                        }};
                                    }}),
                                }};
                                description = "earum";
                                ins = new String[]{{
                                    add("id"),
                                    add("exercitationem"),
                                    add("commodi"),
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
                                                    name = "Rick Hartmann";
                                                    value = "nam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Freddie Stamm";
                                                    value = "non";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rodney Lockman";
                                                    value = "aperiam";
                                                }}),
                                            }};
                                            field = "fugit";
                                            metric = "labore";
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
                                                    name = "Muriel O'Reilly";
                                                    value = "perferendis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Marshall Carter";
                                                    value = "corporis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ollie Sporer I";
                                                    value = "porro";
                                                }}),
                                            }};
                                            field = "voluptatum";
                                            metric = "libero";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("soluta"),
                                    add("exercitationem"),
                                    add("exercitationem"),
                                }};
                                permissions = new String[]{{
                                    add("magni"),
                                    add("unde"),
                                    add("consequuntur"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "non";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("odio"),
                                            add("quaerat"),
                                            add("aliquam"),
                                        }};
                                    }}),
                                }};
                                description = "laboriosam";
                                ins = new String[]{{
                                    add("labore"),
                                    add("accusamus"),
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
                                                    name = "Tracy Larkin";
                                                    value = "consequatur";
                                                }}),
                                            }};
                                            field = "assumenda";
                                            metric = "architecto";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Roman Ullrich";
                                                    value = "incidunt";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Hector Willms";
                                                    value = "occaecati";
                                                }}),
                                            }};
                                            field = "labore";
                                            metric = "ipsam";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Neal Wisoky";
                                                    value = "possimus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Stacey Wiegand";
                                                    value = "odio";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Darla Shanahan";
                                                    value = "quidem";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Michelle Ernser";
                                                    value = "aperiam";
                                                }}),
                                            }};
                                            field = "sed";
                                            metric = "dolor";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("ipsum"),
                                    add("accusamus"),
                                    add("consectetur"),
                                }};
                                permissions = new String[]{{
                                    add("sequi"),
                                    add("et"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.IN;
                                        svc = "nemo";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("sequi"),
                                            add("ab"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.IN;
                                        svc = "ullam";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("optio"),
                                            add("earum"),
                                            add("vitae"),
                                            add("quisquam"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "incidunt";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("culpa"),
                                            add("illum"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "sint";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("labore"),
                                        }};
                                    }}),
                                }};
                                description = "maxime";
                                ins = new String[]{{
                                    add("illo"),
                                    add("provident"),
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
                                                    name = "Irma Rowe";
                                                    value = "mollitia";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dr. Nina Wilderman";
                                                    value = "facere";
                                                }}),
                                            }};
                                            field = "nesciunt";
                                            metric = "libero";
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
                                                    name = "Becky Hessel";
                                                    value = "harum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Eddie Schiller";
                                                    value = "inventore";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mrs. Courtney Kuhic";
                                                    value = "excepturi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mrs. Kristi Greenholt";
                                                    value = "impedit";
                                                }}),
                                            }};
                                            field = "quasi";
                                            metric = "nesciunt";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("quia"),
                                    add("odio"),
                                }};
                                permissions = new String[]{{
                                    add("eveniet"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "perspiciatis";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("veniam"),
                                            add("illo"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "quisquam";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("quo"),
                                            add("minima"),
                                            add("ducimus"),
                                            add("tenetur"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "aliquid";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("beatae"),
                                            add("fuga"),
                                            add("quam"),
                                        }};
                                    }}),
                                }};
                                description = "molestias";
                                ins = new String[]{{
                                    add("quibusdam"),
                                    add("eos"),
                                    add("cupiditate"),
                                    add("est"),
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
                                                    name = "Matt Larson";
                                                    value = "nemo";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Benny Considine";
                                                    value = "delectus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Marianne Larkin";
                                                    value = "voluptates";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "May Collins";
                                                    value = "tenetur";
                                                }}),
                                            }};
                                            field = "fugiat";
                                            metric = "unde";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ella Schowalter PhD";
                                                    value = "dolores";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Edmond Ondricka";
                                                    value = "corrupti";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Roosevelt Volkman";
                                                    value = "ratione";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Alexandra Morissette";
                                                    value = "tempore";
                                                }}),
                                            }};
                                            field = "natus";
                                            metric = "facilis";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "John Ondricka";
                                                    value = "excepturi";
                                                }}),
                                            }};
                                            field = "expedita";
                                            metric = "harum";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("magni"),
                                    add("dignissimos"),
                                    add("aspernatur"),
                                    add("ullam"),
                                }};
                                permissions = new String[]{{
                                    add("impedit"),
                                    add("magni"),
                                    add("suscipit"),
                                    add("ipsam"),
                                }};
                            }}),
                        }};
                        version = 622192;
                    }};;
                }};;
                accessToken = "quisquam";
                alt = AltEnum.PROTO;
                callback = "ipsa";
                fields = "quia";
                key = "totam";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "corrupti";
                uploadType = "numquam";
                uploadProtocol = "alias";
                userIp = "quod";
            }};            

            ComputeInstanceTemplatesSetIamPolicyResponse res = sdk.instanceTemplates.computeInstanceTemplatesSetIamPolicy(req, new ComputeInstanceTemplatesSetIamPolicySecurity() {{
                option1 = new ComputeInstanceTemplatesSetIamPolicySecurityOption1("nisi", "excepturi") {{
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

            ComputeInstanceTemplatesTestIamPermissionsRequest req = new ComputeInstanceTemplatesTestIamPermissionsRequest("eveniet", "tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("voluptates"),
                        add("modi"),
                        add("enim"),
                    }};
                }};;
                accessToken = "cumque";
                alt = AltEnum.MEDIA;
                callback = "animi";
                fields = "quibusdam";
                key = "possimus";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "optio";
                uploadProtocol = "voluptate";
                userIp = "nostrum";
            }};            

            ComputeInstanceTemplatesTestIamPermissionsResponse res = sdk.instanceTemplates.computeInstanceTemplatesTestIamPermissions(req, new ComputeInstanceTemplatesTestIamPermissionsSecurity() {{
                option1 = new ComputeInstanceTemplatesTestIamPermissionsSecurityOption1("incidunt", "enim") {{
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
