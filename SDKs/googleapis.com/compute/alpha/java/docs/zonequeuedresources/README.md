# zoneQueuedResources

### Available Operations

* [computeZoneQueuedResourcesAggregatedList](#computezonequeuedresourcesaggregatedlist) - Retrieves an aggregated list of all of the queued resources in a project across all zones.
* [computeZoneQueuedResourcesCancel](#computezonequeuedresourcescancel) - Cancels a QueuedResource. Only a resource in ACCEPTED state may be cancelled.
* [computeZoneQueuedResourcesDelete](#computezonequeuedresourcesdelete) - Deletes a QueuedResource. For a QueuedResource in ACCEPTED state, call cancel on the resource before deleting, to make sure no VMs have been provisioned and may require cleaning up. For a QueuedResource in PROVISIONING state the request to delete is registered for execution following the provisioning.
* [computeZoneQueuedResourcesGet](#computezonequeuedresourcesget) - Returns the specified QueuedResource resource.
* [computeZoneQueuedResourcesInsert](#computezonequeuedresourcesinsert) - Creates a QueuedResource.
* [computeZoneQueuedResourcesList](#computezonequeuedresourceslist) - Retrieves the list of QueuedResource resources.

## computeZoneQueuedResourcesAggregatedList

Retrieves an aggregated list of all of the queued resources in a project across all zones.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeZoneQueuedResourcesAggregatedListRequest req = new ComputeZoneQueuedResourcesAggregatedListRequest("quia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laudantium";
                alt = AltEnum.MEDIA;
                callback = "repudiandae";
                fields = "quaerat";
                filter = "temporibus";
                includeAllScopes = false;
                key = "laboriosam";
                maxResults = 94450L;
                oauthToken = "voluptate";
                orderBy = "tenetur";
                pageToken = "ex";
                prettyPrint = false;
                quotaUser = "dolores";
                returnPartialSuccess = false;
                uploadType = "repellat";
                uploadProtocol = "aliquam";
                userIp = "unde";
            }};            

            ComputeZoneQueuedResourcesAggregatedListResponse res = sdk.zoneQueuedResources.computeZoneQueuedResourcesAggregatedList(req, new ComputeZoneQueuedResourcesAggregatedListSecurity() {{
                option1 = new ComputeZoneQueuedResourcesAggregatedListSecurityOption1("corrupti", "possimus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.queuedResourcesAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeZoneQueuedResourcesCancel

Cancels a QueuedResource. Only a resource in ACCEPTED state may be cancelled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesCancelRequest;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesCancelResponse;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesCancelSecurity;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesCancelSecurityOption1;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesCancelSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeZoneQueuedResourcesCancelRequest req = new ComputeZoneQueuedResourcesCancelRequest("placeat", "nostrum", "doloremque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "asperiores";
                alt = AltEnum.PROTO;
                callback = "vitae";
                fields = "rerum";
                key = "doloribus";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "dolor";
                requestId = "perferendis";
                uploadType = "magnam";
                uploadProtocol = "quos";
                userIp = "ad";
            }};            

            ComputeZoneQueuedResourcesCancelResponse res = sdk.zoneQueuedResources.computeZoneQueuedResourcesCancel(req, new ComputeZoneQueuedResourcesCancelSecurity() {{
                option1 = new ComputeZoneQueuedResourcesCancelSecurityOption1("autem", "nihil") {{
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

## computeZoneQueuedResourcesDelete

Deletes a QueuedResource. For a QueuedResource in ACCEPTED state, call cancel on the resource before deleting, to make sure no VMs have been provisioned and may require cleaning up. For a QueuedResource in PROVISIONING state the request to delete is registered for execution following the provisioning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeZoneQueuedResourcesDeleteRequest req = new ComputeZoneQueuedResourcesDeleteRequest("a", "unde", "at") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cupiditate";
                alt = AltEnum.JSON;
                callback = "rerum";
                fields = "enim";
                key = "fugit";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "ipsum";
                requestId = "eaque";
                uploadType = "omnis";
                uploadProtocol = "recusandae";
                userIp = "asperiores";
            }};            

            ComputeZoneQueuedResourcesDeleteResponse res = sdk.zoneQueuedResources.computeZoneQueuedResourcesDelete(req, new ComputeZoneQueuedResourcesDeleteSecurity() {{
                option1 = new ComputeZoneQueuedResourcesDeleteSecurityOption1("perferendis", "veniam") {{
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

## computeZoneQueuedResourcesGet

Returns the specified QueuedResource resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesGetRequest;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesGetResponse;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesGetSecurity;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeZoneQueuedResourcesGetRequest req = new ComputeZoneQueuedResourcesGetRequest("nemo", "sapiente", "expedita") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "architecto";
                fields = "corporis";
                key = "laborum";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "ea";
                uploadProtocol = "quia";
                userIp = "a";
            }};            

            ComputeZoneQueuedResourcesGetResponse res = sdk.zoneQueuedResources.computeZoneQueuedResourcesGet(req, new ComputeZoneQueuedResourcesGetSecurity() {{
                option1 = new ComputeZoneQueuedResourcesGetSecurityOption1("voluptatem", "incidunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.queuedResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeZoneQueuedResourcesInsert

Creates a QueuedResource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesInsertRequest;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesInsertResponse;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesInsertSecurityOption2;
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
import org.openapis.openapi.models.shared.BulkInsertInstanceResource;
import org.openapis.openapi.models.shared.BulkInsertInstanceResourcePerInstanceProperties;
import org.openapis.openapi.models.shared.ConfidentialInstanceConfig;
import org.openapis.openapi.models.shared.ConfidentialInstanceConfigConfidentialInstanceTypeEnum;
import org.openapis.openapi.models.shared.CustomerEncryptionKey;
import org.openapis.openapi.models.shared.DisplayDevice;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.ErrorInfo;
import org.openapis.openapi.models.shared.FileContentBuffer;
import org.openapis.openapi.models.shared.FileContentBufferFileTypeEnum;
import org.openapis.openapi.models.shared.GuestOsFeature;
import org.openapis.openapi.models.shared.GuestOsFeatureTypeEnum;
import org.openapis.openapi.models.shared.Help;
import org.openapis.openapi.models.shared.HelpLink;
import org.openapis.openapi.models.shared.InitialStateConfig;
import org.openapis.openapi.models.shared.InstanceProperties;
import org.openapis.openapi.models.shared.InstancePropertiesKeyRevocationActionTypeEnum;
import org.openapis.openapi.models.shared.InstancePropertiesPostKeyRevocationActionTypeEnum;
import org.openapis.openapi.models.shared.InstancePropertiesPrivateIpv6GoogleAccessEnum;
import org.openapis.openapi.models.shared.LocalizedMessage;
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
import org.openapis.openapi.models.shared.NetworkInterfaceSubInterface;
import org.openapis.openapi.models.shared.NetworkInterfaceSubInterfaceIpAllocationModeEnum;
import org.openapis.openapi.models.shared.NetworkPerformanceConfig;
import org.openapis.openapi.models.shared.NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum;
import org.openapis.openapi.models.shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
import org.openapis.openapi.models.shared.QueuedResource;
import org.openapis.openapi.models.shared.QueuedResourceStateEnum;
import org.openapis.openapi.models.shared.QueuedResourceStatus;
import org.openapis.openapi.models.shared.QueuedResourceStatusFailedData;
import org.openapis.openapi.models.shared.QueuedResourceStatusFailedDataError;
import org.openapis.openapi.models.shared.QueuedResourceStatusFailedDataErrorErrors;
import org.openapis.openapi.models.shared.QueuedResourceStatusFailedDataErrorErrorsErrorDetails;
import org.openapis.openapi.models.shared.QueuingPolicy;
import org.openapis.openapi.models.shared.QuotaExceededInfo;
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
import org.openapis.openapi.models.shared.Tags;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeZoneQueuedResourcesInsertRequest req = new ComputeZoneQueuedResourcesInsertRequest("soluta", "placeat") {{
                dollarXgafv = XgafvEnum.ONE;
                queuedResource = new QueuedResource() {{
                    bulkInsertInstanceResource = new BulkInsertInstanceResource() {{
                        count = "deleniti";
                        instanceProperties = new InstanceProperties() {{
                            advancedMachineFeatures = new AdvancedMachineFeatures() {{
                                enableNestedVirtualization = false;
                                enableUefiNetworking = false;
                                numaNodeCount = 745871;
                                performanceMonitoringUnit = AdvancedMachineFeaturesPerformanceMonitoringUnitEnum.ARCHITECTURAL;
                                threadsPerCore = 918534;
                                visibleCoreCount = 514847;
                            }};;
                            canIpForward = false;
                            confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                                confidentialInstanceType = ConfidentialInstanceConfigConfidentialInstanceTypeEnum.SEV_SNP;
                                enableConfidentialCompute = false;
                            }};;
                            description = "fugit";
                            disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                                add(new AttachedDisk() {{
                                    architecture = AttachedDiskArchitectureEnum.X8664;
                                    autoDelete = false;
                                    boot = false;
                                    deviceName = "magni";
                                    diskEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "rerum";
                                        kmsKeyServiceAccount = "temporibus";
                                        rawKey = "perferendis";
                                        rsaEncryptedKey = "laborum";
                                        sha256 = "doloribus";
                                    }};
                                    diskSizeGb = "numquam";
                                    forceAttach = false;
                                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                        }}),
                                    }};
                                    index = 957812;
                                    initializeParams = new AttachedDiskInitializeParams() {{
                                        architecture = AttachedDiskInitializeParamsArchitectureEnum.X8664;
                                        description = "nesciunt";
                                        diskName = "alias";
                                        diskSizeGb = "eos";
                                        diskType = "in";
                                        guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                            add(new GuestOsFeature() {{
                                                type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
                                            }}),
                                            add(new GuestOsFeature() {{
                                                type = GuestOsFeatureTypeEnum.WINDOWS;
                                            }}),
                                            add(new GuestOsFeature() {{
                                                type = GuestOsFeatureTypeEnum.TDX_CAPABLE;
                                            }}),
                                        }};
                                        interface_ = AttachedDiskInitializeParamsInterfaceEnum.SCSI;
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("tenetur", "quas");
                                        }};
                                        licenseCodes = new String[]{{
                                            add("officia"),
                                            add("accusamus"),
                                            add("cumque"),
                                        }};
                                        licenses = new String[]{{
                                            add("amet"),
                                            add("placeat"),
                                            add("nihil"),
                                        }};
                                        multiWriter = false;
                                        onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK_IF_SOURCE_CHANGED;
                                        provisionedIops = "eaque";
                                        provisionedThroughput = "atque";
                                        replicaZones = new String[]{{
                                            add("natus"),
                                            add("fugiat"),
                                        }};
                                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                                            put("debitis", "sapiente");
                                            put("fugit", "impedit");
                                        }};
                                        resourcePolicies = new String[]{{
                                            add("reiciendis"),
                                            add("magni"),
                                            add("fugit"),
                                            add("provident"),
                                        }};
                                        sourceImage = "adipisci";
                                        sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                            kmsKeyName = "nulla";
                                            kmsKeyServiceAccount = "non";
                                            rawKey = "facilis";
                                            rsaEncryptedKey = "eveniet";
                                            sha256 = "incidunt";
                                        }};
                                        sourceInstantSnapshot = "minima";
                                        sourceSnapshot = "vitae";
                                        sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                            kmsKeyName = "consequatur";
                                            kmsKeyServiceAccount = "laboriosam";
                                            rawKey = "aperiam";
                                            rsaEncryptedKey = "perspiciatis";
                                            sha256 = "odit";
                                        }};
                                        storagePool = "itaque";
                                    }};
                                    interface_ = AttachedDiskInterfaceEnum.NVDIMM;
                                    kind = "ut";
                                    licenses = new String[]{{
                                        add("nesciunt"),
                                        add("dolor"),
                                        add("perspiciatis"),
                                    }};
                                    locked = false;
                                    mode = AttachedDiskModeEnum.READ_ONLY;
                                    savedState = AttachedDiskSavedStateEnum.PRESERVED;
                                    shieldedInstanceInitialState = new InitialStateConfig() {{
                                        dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                            add(new FileContentBuffer() {{
                                                content = "quibusdam";
                                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                            }}),
                                            add(new FileContentBuffer() {{
                                                content = "corporis";
                                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                            }}),
                                            add(new FileContentBuffer() {{
                                                content = "voluptatem";
                                                fileType = FileContentBufferFileTypeEnum.BIN;
                                            }}),
                                        }};
                                        dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                            add(new FileContentBuffer() {{
                                                content = "molestiae";
                                                fileType = FileContentBufferFileTypeEnum.X509;
                                            }}),
                                            add(new FileContentBuffer() {{
                                                content = "recusandae";
                                                fileType = FileContentBufferFileTypeEnum.BIN;
                                            }}),
                                            add(new FileContentBuffer() {{
                                                content = "incidunt";
                                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                            }}),
                                            add(new FileContentBuffer() {{
                                                content = "quos";
                                                fileType = FileContentBufferFileTypeEnum.X509;
                                            }}),
                                        }};
                                        keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                            add(new FileContentBuffer() {{
                                                content = "maiores";
                                                fileType = FileContentBufferFileTypeEnum.BIN;
                                            }}),
                                            add(new FileContentBuffer() {{
                                                content = "libero";
                                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                            }}),
                                        }};
                                        pk = new FileContentBuffer() {{
                                            content = "dolorum";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }};
                                    }};
                                    source = "ut";
                                    type = AttachedDiskTypeEnum.PERSISTENT;
                                    userLicenses = new String[]{{
                                        add("tempore"),
                                    }};
                                }}),
                                add(new AttachedDisk() {{
                                    architecture = AttachedDiskArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                    autoDelete = false;
                                    boot = false;
                                    deviceName = "voluptas";
                                    diskEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "velit";
                                        kmsKeyServiceAccount = "incidunt";
                                        rawKey = "consectetur";
                                        rsaEncryptedKey = "quidem";
                                        sha256 = "impedit";
                                    }};
                                    diskSizeGb = "dolor";
                                    forceAttach = false;
                                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                                        }}),
                                    }};
                                    index = 727590;
                                    initializeParams = new AttachedDiskInitializeParams() {{
                                        architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                        description = "vitae";
                                        diskName = "quasi";
                                        diskSizeGb = "nulla";
                                        diskType = "delectus";
                                        guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                            add(new GuestOsFeature() {{
                                                type = GuestOsFeatureTypeEnum.GVNIC;
                                            }}),
                                        }};
                                        interface_ = AttachedDiskInitializeParamsInterfaceEnum.UNSPECIFIED;
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("sed", "sapiente");
                                            put("perspiciatis", "voluptatibus");
                                        }};
                                        licenseCodes = new String[]{{
                                            add("minus"),
                                        }};
                                        licenses = new String[]{{
                                            add("enim"),
                                            add("nostrum"),
                                            add("nostrum"),
                                        }};
                                        multiWriter = false;
                                        onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK_IF_SOURCE_CHANGED;
                                        provisionedIops = "sapiente";
                                        provisionedThroughput = "quibusdam";
                                        replicaZones = new String[]{{
                                            add("corrupti"),
                                            add("quisquam"),
                                            add("ullam"),
                                        }};
                                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                                            put("esse", "nam");
                                            put("at", "rem");
                                            put("tempora", "voluptate");
                                        }};
                                        resourcePolicies = new String[]{{
                                            add("quo"),
                                            add("placeat"),
                                            add("temporibus"),
                                            add("ullam"),
                                        }};
                                        sourceImage = "natus";
                                        sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                            kmsKeyName = "culpa";
                                            kmsKeyServiceAccount = "tempora";
                                            rawKey = "temporibus";
                                            rsaEncryptedKey = "ex";
                                            sha256 = "iusto";
                                        }};
                                        sourceInstantSnapshot = "harum";
                                        sourceSnapshot = "corporis";
                                        sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                            kmsKeyName = "qui";
                                            kmsKeyServiceAccount = "dolor";
                                            rawKey = "autem";
                                            rsaEncryptedKey = "quis";
                                            sha256 = "inventore";
                                        }};
                                        storagePool = "quos";
                                    }};
                                    interface_ = AttachedDiskInterfaceEnum.NVME;
                                    kind = "in";
                                    licenses = new String[]{{
                                        add("necessitatibus"),
                                        add("accusamus"),
                                        add("saepe"),
                                        add("quaerat"),
                                    }};
                                    locked = false;
                                    mode = AttachedDiskModeEnum.READ_WRITE;
                                    savedState = AttachedDiskSavedStateEnum.DISK_SAVED_STATE_UNSPECIFIED;
                                    shieldedInstanceInitialState = new InitialStateConfig() {{
                                        dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                            add(new FileContentBuffer() {{
                                                content = "animi";
                                                fileType = FileContentBufferFileTypeEnum.BIN;
                                            }}),
                                        }};
                                        dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                            add(new FileContentBuffer() {{
                                                content = "qui";
                                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                            }}),
                                        }};
                                        keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                            add(new FileContentBuffer() {{
                                                content = "perferendis";
                                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                            }}),
                                        }};
                                        pk = new FileContentBuffer() {{
                                            content = "doloribus";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }};
                                    }};
                                    source = "veniam";
                                    type = AttachedDiskTypeEnum.SCRATCH;
                                    userLicenses = new String[]{{
                                        add("sunt"),
                                        add("laboriosam"),
                                    }};
                                }}),
                                add(new AttachedDisk() {{
                                    architecture = AttachedDiskArchitectureEnum.ARM64;
                                    autoDelete = false;
                                    boot = false;
                                    deviceName = "eos";
                                    diskEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "sint";
                                        kmsKeyServiceAccount = "facilis";
                                        rawKey = "omnis";
                                        rsaEncryptedKey = "eos";
                                        sha256 = "doloribus";
                                    }};
                                    diskSizeGb = "cum";
                                    forceAttach = false;
                                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.SECURE_BOOT;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                                        }}),
                                    }};
                                    index = 999805;
                                    initializeParams = new AttachedDiskInitializeParams() {{
                                        architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                        description = "aliquam";
                                        diskName = "culpa";
                                        diskSizeGb = "nulla";
                                        diskType = "reprehenderit";
                                        guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                            add(new GuestOsFeature() {{
                                                type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                            }}),
                                            add(new GuestOsFeature() {{
                                                type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                                            }}),
                                            add(new GuestOsFeature() {{
                                                type = GuestOsFeatureTypeEnum.GVNIC;
                                            }}),
                                        }};
                                        interface_ = AttachedDiskInitializeParamsInterfaceEnum.SCSI;
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("minus", "tenetur");
                                            put("beatae", "itaque");
                                            put("assumenda", "delectus");
                                            put("asperiores", "veritatis");
                                        }};
                                        licenseCodes = new String[]{{
                                            add("blanditiis"),
                                            add("veritatis"),
                                            add("accusamus"),
                                        }};
                                        licenses = new String[]{{
                                            add("fugiat"),
                                            add("facere"),
                                            add("accusantium"),
                                        }};
                                        multiWriter = false;
                                        onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.USE_EXISTING_DISK;
                                        provisionedIops = "illum";
                                        provisionedThroughput = "a";
                                        replicaZones = new String[]{{
                                            add("illum"),
                                            add("modi"),
                                            add("repudiandae"),
                                            add("dolor"),
                                        }};
                                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                                            put("error", "ullam");
                                        }};
                                        resourcePolicies = new String[]{{
                                            add("iste"),
                                        }};
                                        sourceImage = "minima";
                                        sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                            kmsKeyName = "nesciunt";
                                            kmsKeyServiceAccount = "distinctio";
                                            rawKey = "iure";
                                            rsaEncryptedKey = "quia";
                                            sha256 = "pariatur";
                                        }};
                                        sourceInstantSnapshot = "perspiciatis";
                                        sourceSnapshot = "cumque";
                                        sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                            kmsKeyName = "fugiat";
                                            kmsKeyServiceAccount = "molestiae";
                                            rawKey = "fugiat";
                                            rsaEncryptedKey = "vel";
                                            sha256 = "quae";
                                        }};
                                        storagePool = "hic";
                                    }};
                                    interface_ = AttachedDiskInterfaceEnum.NVME;
                                    kind = "harum";
                                    licenses = new String[]{{
                                        add("ipsam"),
                                    }};
                                    locked = false;
                                    mode = AttachedDiskModeEnum.READ_ONLY;
                                    savedState = AttachedDiskSavedStateEnum.DISK_SAVED_STATE_UNSPECIFIED;
                                    shieldedInstanceInitialState = new InitialStateConfig() {{
                                        dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                            add(new FileContentBuffer() {{
                                                content = "a";
                                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                            }}),
                                            add(new FileContentBuffer() {{
                                                content = "veniam";
                                                fileType = FileContentBufferFileTypeEnum.X509;
                                            }}),
                                            add(new FileContentBuffer() {{
                                                content = "ipsum";
                                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                            }}),
                                            add(new FileContentBuffer() {{
                                                content = "earum";
                                                fileType = FileContentBufferFileTypeEnum.BIN;
                                            }}),
                                        }};
                                        dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                            add(new FileContentBuffer() {{
                                                content = "consectetur";
                                                fileType = FileContentBufferFileTypeEnum.X509;
                                            }}),
                                            add(new FileContentBuffer() {{
                                                content = "facere";
                                                fileType = FileContentBufferFileTypeEnum.BIN;
                                            }}),
                                        }};
                                        keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                            add(new FileContentBuffer() {{
                                                content = "consequatur";
                                                fileType = FileContentBufferFileTypeEnum.BIN;
                                            }}),
                                            add(new FileContentBuffer() {{
                                                content = "labore";
                                                fileType = FileContentBufferFileTypeEnum.BIN;
                                            }}),
                                        }};
                                        pk = new FileContentBuffer() {{
                                            content = "consequatur";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }};
                                    }};
                                    source = "maxime";
                                    type = AttachedDiskTypeEnum.SCRATCH;
                                    userLicenses = new String[]{{
                                        add("nulla"),
                                        add("officiis"),
                                        add("consequatur"),
                                        add("possimus"),
                                    }};
                                }}),
                            }};
                            displayDevice = new DisplayDevice() {{
                                enableDisplay = false;
                            }};;
                            guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 851206;
                                    acceleratorType = "alias";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 580103;
                                    acceleratorType = "est";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = 530634;
                                    acceleratorType = "tempora";
                                }}),
                            }};
                            keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum.NONE;
                            labels = new java.util.HashMap<String, String>() {{
                                put("ipsum", "maxime");
                                put("quas", "quam");
                            }};
                            machineType = "sunt";
                            metadata = new Metadata() {{
                                fingerprint = "ad";
                                items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                                    add(new MetadataItems() {{
                                        key = "cum";
                                        value = "praesentium";
                                    }}),
                                }};
                                kind = "nisi";
                            }};;
                            minCpuPlatform = "dicta";
                            networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                                add(new NetworkInterface() {{
                                    accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                        add(new AccessConfig() {{
                                            externalIpv6 = "aperiam";
                                            externalIpv6PrefixLength = 64779;
                                            kind = "modi";
                                            name = "Dr. Conrad Gutkowski";
                                            natIP = "quaerat";
                                            networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                            publicDnsName = "nesciunt";
                                            publicPtrDomainName = "maxime";
                                            securityPolicy = "iure";
                                            setPublicDns = false;
                                            setPublicPtr = false;
                                            type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                        }}),
                                        add(new AccessConfig() {{
                                            externalIpv6 = "earum";
                                            externalIpv6PrefixLength = 907034;
                                            kind = "amet";
                                            name = "Shelia Baumbach";
                                            natIP = "in";
                                            networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                            publicDnsName = "deserunt";
                                            publicPtrDomainName = "perferendis";
                                            securityPolicy = "minima";
                                            setPublicDns = false;
                                            setPublicPtr = false;
                                            type = AccessConfigTypeEnum.DIRECT_IPV6;
                                        }}),
                                    }};
                                    aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                        add(new AliasIpRange() {{
                                            ipCidrRange = "adipisci";
                                            subnetworkRangeName = "sequi";
                                        }}),
                                        add(new AliasIpRange() {{
                                            ipCidrRange = "possimus";
                                            subnetworkRangeName = "omnis";
                                        }}),
                                        add(new AliasIpRange() {{
                                            ipCidrRange = "culpa";
                                            subnetworkRangeName = "aliquam";
                                        }}),
                                        add(new AliasIpRange() {{
                                            ipCidrRange = "sed";
                                            subnetworkRangeName = "delectus";
                                        }}),
                                    }};
                                    fingerprint = "libero";
                                    internalIpv6PrefixLength = 232659;
                                    ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                        add(new AccessConfig() {{
                                            externalIpv6 = "nostrum";
                                            externalIpv6PrefixLength = 591482;
                                            kind = "fuga";
                                            name = "Patty Stehr";
                                            natIP = "natus";
                                            networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                            publicDnsName = "molestias";
                                            publicPtrDomainName = "explicabo";
                                            securityPolicy = "adipisci";
                                            setPublicDns = false;
                                            setPublicPtr = false;
                                            type = AccessConfigTypeEnum.DIRECT_IPV6;
                                        }}),
                                    }};
                                    ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                    ipv6Address = "odit";
                                    kind = "doloribus";
                                    name = "Maxine Boyle";
                                    network = "fugiat";
                                    networkAttachment = "quam";
                                    networkIP = "iste";
                                    nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                                    parentNicName = "expedita";
                                    queueCount = 927888;
                                    stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                    subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                        add(new NetworkInterfaceSubInterface() {{
                                            ipAddress = "laudantium";
                                            ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                            subnetwork = "placeat";
                                            vlan = 201307;
                                        }}),
                                        add(new NetworkInterfaceSubInterface() {{
                                            ipAddress = "nulla";
                                            ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                            subnetwork = "nostrum";
                                            vlan = 386452;
                                        }}),
                                        add(new NetworkInterfaceSubInterface() {{
                                            ipAddress = "ab";
                                            ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                            subnetwork = "doloribus";
                                            vlan = 9495;
                                        }}),
                                        add(new NetworkInterfaceSubInterface() {{
                                            ipAddress = "ratione";
                                            ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                                            subnetwork = "quos";
                                            vlan = 859721;
                                        }}),
                                    }};
                                    subnetwork = "alias";
                                    vlan = 614983;
                                }}),
                                add(new NetworkInterface() {{
                                    accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                        add(new AccessConfig() {{
                                            externalIpv6 = "quia";
                                            externalIpv6PrefixLength = 399905;
                                            kind = "excepturi";
                                            name = "Erick Altenwerth";
                                            natIP = "quidem";
                                            networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                            publicDnsName = "natus";
                                            publicPtrDomainName = "unde";
                                            securityPolicy = "voluptas";
                                            setPublicDns = false;
                                            setPublicPtr = false;
                                            type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                        }}),
                                        add(new AccessConfig() {{
                                            externalIpv6 = "tempore";
                                            externalIpv6PrefixLength = 500797;
                                            kind = "voluptate";
                                            name = "Jermaine Hansen";
                                            natIP = "facere";
                                            networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                            publicDnsName = "provident";
                                            publicPtrDomainName = "amet";
                                            securityPolicy = "odit";
                                            setPublicDns = false;
                                            setPublicPtr = false;
                                            type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                        }}),
                                    }};
                                    aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                        add(new AliasIpRange() {{
                                            ipCidrRange = "architecto";
                                            subnetworkRangeName = "est";
                                        }}),
                                        add(new AliasIpRange() {{
                                            ipCidrRange = "soluta";
                                            subnetworkRangeName = "nostrum";
                                        }}),
                                        add(new AliasIpRange() {{
                                            ipCidrRange = "nisi";
                                            subnetworkRangeName = "quo";
                                        }}),
                                        add(new AliasIpRange() {{
                                            ipCidrRange = "illum";
                                            subnetworkRangeName = "est";
                                        }}),
                                    }};
                                    fingerprint = "animi";
                                    internalIpv6PrefixLength = 115092;
                                    ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                        add(new AccessConfig() {{
                                            externalIpv6 = "soluta";
                                            externalIpv6PrefixLength = 600829;
                                            kind = "harum";
                                            name = "Tabitha Rice MD";
                                            natIP = "magni";
                                            networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                            publicDnsName = "eos";
                                            publicPtrDomainName = "facilis";
                                            securityPolicy = "assumenda";
                                            setPublicDns = false;
                                            setPublicPtr = false;
                                            type = AccessConfigTypeEnum.DIRECT_IPV6;
                                        }}),
                                        add(new AccessConfig() {{
                                            externalIpv6 = "repudiandae";
                                            externalIpv6PrefixLength = 424476;
                                            kind = "atque";
                                            name = "Maryann Lebsack";
                                            natIP = "porro";
                                            networkTier = AccessConfigNetworkTierEnum.SELECT;
                                            publicDnsName = "quia";
                                            publicPtrDomainName = "voluptatibus";
                                            securityPolicy = "enim";
                                            setPublicDns = false;
                                            setPublicPtr = false;
                                            type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                        }}),
                                        add(new AccessConfig() {{
                                            externalIpv6 = "eum";
                                            externalIpv6PrefixLength = 792470;
                                            kind = "commodi";
                                            name = "Aubrey Turcotte";
                                            natIP = "suscipit";
                                            networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                            publicDnsName = "similique";
                                            publicPtrDomainName = "harum";
                                            securityPolicy = "illo";
                                            setPublicDns = false;
                                            setPublicPtr = false;
                                            type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                        }}),
                                        add(new AccessConfig() {{
                                            externalIpv6 = "occaecati";
                                            externalIpv6PrefixLength = 25606;
                                            kind = "commodi";
                                            name = "Russell Orn";
                                            natIP = "deleniti";
                                            networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                            publicDnsName = "numquam";
                                            publicPtrDomainName = "repudiandae";
                                            securityPolicy = "dolorum";
                                            setPublicDns = false;
                                            setPublicPtr = false;
                                            type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                        }}),
                                    }};
                                    ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                    ipv6Address = "eum";
                                    kind = "tempora";
                                    name = "Meredith Veum";
                                    network = "recusandae";
                                    networkAttachment = "sed";
                                    networkIP = "nulla";
                                    nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                                    parentNicName = "animi";
                                    queueCount = 961914;
                                    stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                    subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                        add(new NetworkInterfaceSubInterface() {{
                                            ipAddress = "saepe";
                                            ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                            subnetwork = "ipsa";
                                            vlan = 596044;
                                        }}),
                                        add(new NetworkInterfaceSubInterface() {{
                                            ipAddress = "magni";
                                            ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                                            subnetwork = "qui";
                                            vlan = 277441;
                                        }}),
                                        add(new NetworkInterfaceSubInterface() {{
                                            ipAddress = "eligendi";
                                            ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                                            subnetwork = "suscipit";
                                            vlan = 741056;
                                        }}),
                                    }};
                                    subnetwork = "fugit";
                                    vlan = 8194;
                                }}),
                                add(new NetworkInterface() {{
                                    accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                        add(new AccessConfig() {{
                                            externalIpv6 = "quod";
                                            externalIpv6PrefixLength = 808241;
                                            kind = "iste";
                                            name = "Ellen Wilderman";
                                            natIP = "perspiciatis";
                                            networkTier = AccessConfigNetworkTierEnum.SELECT;
                                            publicDnsName = "sit";
                                            publicPtrDomainName = "perferendis";
                                            securityPolicy = "deserunt";
                                            setPublicDns = false;
                                            setPublicPtr = false;
                                            type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                        }}),
                                        add(new AccessConfig() {{
                                            externalIpv6 = "deserunt";
                                            externalIpv6PrefixLength = 868000;
                                            kind = "tempore";
                                            name = "Dr. Gerard Tillman";
                                            natIP = "doloribus";
                                            networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                            publicDnsName = "odio";
                                            publicPtrDomainName = "voluptate";
                                            securityPolicy = "illum";
                                            setPublicDns = false;
                                            setPublicPtr = false;
                                            type = AccessConfigTypeEnum.DIRECT_IPV6;
                                        }}),
                                        add(new AccessConfig() {{
                                            externalIpv6 = "rerum";
                                            externalIpv6PrefixLength = 608531;
                                            kind = "nulla";
                                            name = "Valerie Sauer";
                                            natIP = "quia";
                                            networkTier = AccessConfigNetworkTierEnum.SELECT;
                                            publicDnsName = "explicabo";
                                            publicPtrDomainName = "ut";
                                            securityPolicy = "voluptatibus";
                                            setPublicDns = false;
                                            setPublicPtr = false;
                                            type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                        }}),
                                        add(new AccessConfig() {{
                                            externalIpv6 = "repellendus";
                                            externalIpv6PrefixLength = 980596;
                                            kind = "incidunt";
                                            name = "Dr. Tim Swift";
                                            natIP = "voluptatibus";
                                            networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                            publicDnsName = "mollitia";
                                            publicPtrDomainName = "similique";
                                            securityPolicy = "totam";
                                            setPublicDns = false;
                                            setPublicPtr = false;
                                            type = AccessConfigTypeEnum.DIRECT_IPV6;
                                        }}),
                                    }};
                                    aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                        add(new AliasIpRange() {{
                                            ipCidrRange = "cumque";
                                            subnetworkRangeName = "expedita";
                                        }}),
                                    }};
                                    fingerprint = "laboriosam";
                                    internalIpv6PrefixLength = 440482;
                                    ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                        add(new AccessConfig() {{
                                            externalIpv6 = "non";
                                            externalIpv6PrefixLength = 529532;
                                            kind = "praesentium";
                                            name = "Kristi Waters";
                                            natIP = "suscipit";
                                            networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                            publicDnsName = "explicabo";
                                            publicPtrDomainName = "perferendis";
                                            securityPolicy = "ipsam";
                                            setPublicDns = false;
                                            setPublicPtr = false;
                                            type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                        }}),
                                        add(new AccessConfig() {{
                                            externalIpv6 = "ducimus";
                                            externalIpv6PrefixLength = 363745;
                                            kind = "voluptates";
                                            name = "Janet Morar";
                                            natIP = "officiis";
                                            networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                            publicDnsName = "voluptatum";
                                            publicPtrDomainName = "praesentium";
                                            securityPolicy = "dolores";
                                            setPublicDns = false;
                                            setPublicPtr = false;
                                            type = AccessConfigTypeEnum.DIRECT_IPV6;
                                        }}),
                                        add(new AccessConfig() {{
                                            externalIpv6 = "ea";
                                            externalIpv6PrefixLength = 90340;
                                            kind = "ad";
                                            name = "Edgar Beatty";
                                            natIP = "facilis";
                                            networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                            publicDnsName = "odio";
                                            publicPtrDomainName = "dolor";
                                            securityPolicy = "quia";
                                            setPublicDns = false;
                                            setPublicPtr = false;
                                            type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                        }}),
                                        add(new AccessConfig() {{
                                            externalIpv6 = "deserunt";
                                            externalIpv6PrefixLength = 369685;
                                            kind = "non";
                                            name = "Leland Dickens";
                                            natIP = "vitae";
                                            networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                            publicDnsName = "delectus";
                                            publicPtrDomainName = "quam";
                                            securityPolicy = "magni";
                                            setPublicDns = false;
                                            setPublicPtr = false;
                                            type = AccessConfigTypeEnum.DIRECT_IPV6;
                                        }}),
                                    }};
                                    ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                                    ipv6Address = "quos";
                                    kind = "tempora";
                                    name = "Garry Stanton";
                                    network = "at";
                                    networkAttachment = "ratione";
                                    networkIP = "blanditiis";
                                    nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                                    parentNicName = "sit";
                                    queueCount = 304104;
                                    stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                    subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                        add(new NetworkInterfaceSubInterface() {{
                                            ipAddress = "corporis";
                                            ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                            subnetwork = "fugiat";
                                            vlan = 652615;
                                        }}),
                                        add(new NetworkInterfaceSubInterface() {{
                                            ipAddress = "ullam";
                                            ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                            subnetwork = "quis";
                                            vlan = 560008;
                                        }}),
                                    }};
                                    subnetwork = "suscipit";
                                    vlan = 914981;
                                }}),
                                add(new NetworkInterface() {{
                                    accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                        add(new AccessConfig() {{
                                            externalIpv6 = "amet";
                                            externalIpv6PrefixLength = 299047;
                                            kind = "vel";
                                            name = "Ginger Fay";
                                            natIP = "vitae";
                                            networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                            publicDnsName = "suscipit";
                                            publicPtrDomainName = "iusto";
                                            securityPolicy = "soluta";
                                            setPublicDns = false;
                                            setPublicPtr = false;
                                            type = AccessConfigTypeEnum.DIRECT_IPV6;
                                        }}),
                                        add(new AccessConfig() {{
                                            externalIpv6 = "sint";
                                            externalIpv6PrefixLength = 830749;
                                            kind = "quod";
                                            name = "Erick Bogisich";
                                            natIP = "laboriosam";
                                            networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                            publicDnsName = "qui";
                                            publicPtrDomainName = "beatae";
                                            securityPolicy = "quibusdam";
                                            setPublicDns = false;
                                            setPublicPtr = false;
                                            type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                        }}),
                                        add(new AccessConfig() {{
                                            externalIpv6 = "dicta";
                                            externalIpv6PrefixLength = 727092;
                                            kind = "impedit";
                                            name = "Julian Gibson";
                                            natIP = "consequuntur";
                                            networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                            publicDnsName = "nam";
                                            publicPtrDomainName = "vitae";
                                            securityPolicy = "iste";
                                            setPublicDns = false;
                                            setPublicPtr = false;
                                            type = AccessConfigTypeEnum.DIRECT_IPV6;
                                        }}),
                                    }};
                                    aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                        add(new AliasIpRange() {{
                                            ipCidrRange = "quam";
                                            subnetworkRangeName = "cumque";
                                        }}),
                                        add(new AliasIpRange() {{
                                            ipCidrRange = "dolor";
                                            subnetworkRangeName = "molestiae";
                                        }}),
                                        add(new AliasIpRange() {{
                                            ipCidrRange = "quasi";
                                            subnetworkRangeName = "et";
                                        }}),
                                        add(new AliasIpRange() {{
                                            ipCidrRange = "voluptates";
                                            subnetworkRangeName = "pariatur";
                                        }}),
                                    }};
                                    fingerprint = "voluptatum";
                                    internalIpv6PrefixLength = 894360;
                                    ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                        add(new AccessConfig() {{
                                            externalIpv6 = "facilis";
                                            externalIpv6PrefixLength = 17447;
                                            kind = "laboriosam";
                                            name = "Ms. Ruth Luettgen";
                                            natIP = "dolorum";
                                            networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                            publicDnsName = "iure";
                                            publicPtrDomainName = "sit";
                                            securityPolicy = "officiis";
                                            setPublicDns = false;
                                            setPublicPtr = false;
                                            type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                        }}),
                                        add(new AccessConfig() {{
                                            externalIpv6 = "magnam";
                                            externalIpv6PrefixLength = 264380;
                                            kind = "labore";
                                            name = "Lucille Waelchi";
                                            natIP = "fugiat";
                                            networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                            publicDnsName = "delectus";
                                            publicPtrDomainName = "reiciendis";
                                            securityPolicy = "eum";
                                            setPublicDns = false;
                                            setPublicPtr = false;
                                            type = AccessConfigTypeEnum.DIRECT_IPV6;
                                        }}),
                                    }};
                                    ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                                    ipv6Address = "ipsum";
                                    kind = "dolores";
                                    name = "Beth Corwin";
                                    network = "soluta";
                                    networkAttachment = "quae";
                                    networkIP = "velit";
                                    nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                                    parentNicName = "unde";
                                    queueCount = 586490;
                                    stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                    subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                        add(new NetworkInterfaceSubInterface() {{
                                            ipAddress = "ratione";
                                            ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                                            subnetwork = "beatae";
                                            vlan = 855360;
                                        }}),
                                    }};
                                    subnetwork = "veritatis";
                                    vlan = 712285;
                                }}),
                            }};
                            networkPerformanceConfig = new NetworkPerformanceConfig() {{
                                externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum.TIER1;
                                totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.DEFAULT_;
                            }};;
                            postKeyRevocationActionType = InstancePropertiesPostKeyRevocationActionTypeEnum.NOOP;
                            privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum.ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE;
                            reservationAffinity = new ReservationAffinity() {{
                                consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.NO_RESERVATION;
                                key = "eius";
                                values = new String[]{{
                                    add("maiores"),
                                    add("expedita"),
                                }};
                            }};;
                            resourceManagerTags = new java.util.HashMap<String, String>() {{
                                put("illo", "doloremque");
                            }};
                            resourcePolicies = new String[]{{
                                add("quis"),
                            }};
                            scheduling = new Scheduling() {{
                                automaticRestart = false;
                                availabilityDomain = 220004;
                                currentCpus = 929093;
                                currentMemoryMb = "inventore";
                                hostErrorTimeoutSeconds = 381219;
                                instanceTerminationAction = SchedulingInstanceTerminationActionEnum.DELETE;
                                latencyTolerant = false;
                                localSsdRecoveryTimeout = new Duration() {{
                                    nanos = 299071;
                                    seconds = "similique";
                                }};;
                                locationHint = "vel";
                                maintenanceFreezeDurationHours = 595336;
                                maintenanceInterval = SchedulingMaintenanceIntervalEnum.AS_NEEDED;
                                maxRunDuration = new Duration() {{
                                    nanos = 793828;
                                    seconds = "consectetur";
                                }};;
                                minNodeCpus = 706236;
                                nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                    add(new SchedulingNodeAffinity() {{
                                        key = "sapiente";
                                        operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                        values = new String[]{{
                                            add("eaque"),
                                            add("provident"),
                                        }};
                                    }}),
                                }};
                                onHostMaintenance = SchedulingOnHostMaintenanceEnum.TERMINATE;
                                preemptible = false;
                                provisioningModel = SchedulingProvisioningModelEnum.STANDARD;
                                terminationTime = "dolorum";
                            }};;
                            secureTags = new String[]{{
                                add("aliquid"),
                                add("natus"),
                                add("quo"),
                                add("nobis"),
                            }};
                            serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                                add(new ServiceAccount() {{
                                    email = "Destin.Runte@yahoo.com";
                                    scopes = new String[]{{
                                        add("quaerat"),
                                        add("possimus"),
                                    }};
                                }}),
                            }};
                            serviceIntegrationSpecs = new java.util.HashMap<String, org.openapis.openapi.models.shared.ServiceIntegrationSpec>() {{
                                put("qui", new ServiceIntegrationSpec() {{
                                    backupDr = new ServiceIntegrationSpecBackupDRSpec() {{
                                        plan = "cumque";
                                    }};
                                }});
                                put("repellat", new ServiceIntegrationSpec() {{
                                    backupDr = new ServiceIntegrationSpecBackupDRSpec() {{
                                        plan = "odit";
                                    }};
                                }});
                                put("impedit", new ServiceIntegrationSpec() {{
                                    backupDr = new ServiceIntegrationSpecBackupDRSpec() {{
                                        plan = "est";
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
                                fingerprint = "quisquam";
                                items = new String[]{{
                                    add("maiores"),
                                    add("neque"),
                                }};
                            }};;
                        }};;
                        locationPolicy = new LocationPolicy() {{
                            locations = new java.util.HashMap<String, org.openapis.openapi.models.shared.LocationPolicyLocation>() {{
                                put("magnam", new LocationPolicyLocation() {{
                                    constraints = new LocationPolicyLocationConstraints() {{
                                        maxCount = 960231;
                                    }};
                                    names = new String[]{{
                                        add("quidem"),
                                        add("assumenda"),
                                        add("reprehenderit"),
                                        add("assumenda"),
                                    }};
                                    preference = LocationPolicyLocationPreferenceEnum.ALLOW;
                                }});
                                put("nihil", new LocationPolicyLocation() {{
                                    constraints = new LocationPolicyLocationConstraints() {{
                                        maxCount = 17664;
                                    }};
                                    names = new String[]{{
                                        add("occaecati"),
                                        add("quasi"),
                                    }};
                                    preference = LocationPolicyLocationPreferenceEnum.ALLOW;
                                }});
                                put("atque", new LocationPolicyLocation() {{
                                    constraints = new LocationPolicyLocationConstraints() {{
                                        maxCount = 81532;
                                    }};
                                    names = new String[]{{
                                        add("adipisci"),
                                        add("labore"),
                                        add("praesentium"),
                                        add("nesciunt"),
                                    }};
                                    preference = LocationPolicyLocationPreferenceEnum.ALLOW;
                                }});
                                put("necessitatibus", new LocationPolicyLocation() {{
                                    constraints = new LocationPolicyLocationConstraints() {{
                                        maxCount = 466309;
                                    }};
                                    names = new String[]{{
                                        add("soluta"),
                                        add("nulla"),
                                    }};
                                    preference = LocationPolicyLocationPreferenceEnum.PREFERENCE_UNSPECIFIED;
                                }});
                            }};
                            targetShape = LocationPolicyTargetShapeEnum.ANY_SINGLE_ZONE;
                        }};;
                        minCount = "id";
                        namePattern = "aliquam";
                        perInstanceProperties = new java.util.HashMap<String, org.openapis.openapi.models.shared.BulkInsertInstanceResourcePerInstanceProperties>() {{
                            put("molestiae", new BulkInsertInstanceResourcePerInstanceProperties() {{
                                hostname = "buttery-mousse.com";
                                name = "Miguel Haley";
                            }});
                        }};
                        sourceInstanceTemplate = "excepturi";
                    }};;
                    creationTimestamp = "dignissimos";
                    description = "maxime";
                    id = "impedit";
                    kind = "voluptate";
                    name = "Bessie Rempel";
                    queuingPolicy = new QueuingPolicy() {{
                        validUntilDuration = new Duration() {{
                            nanos = 120719;
                            seconds = "est";
                        }};;
                        validUntilTime = "inventore";
                    }};;
                    selfLink = "deserunt";
                    selfLinkWithId = "est";
                    state = QueuedResourceStateEnum.FAILED;
                    status = new QueuedResourceStatus() {{
                        failedData = new QueuedResourceStatusFailedData() {{
                            error = new QueuedResourceStatusFailedDataError() {{
                                errors = new org.openapis.openapi.models.shared.QueuedResourceStatusFailedDataErrorErrors[]{{
                                    add(new QueuedResourceStatusFailedDataErrorErrors() {{
                                        code = "blanditiis";
                                        errorDetails = new org.openapis.openapi.models.shared.QueuedResourceStatusFailedDataErrorErrorsErrorDetails[]{{
                                            add(new QueuedResourceStatusFailedDataErrorErrorsErrorDetails() {{
                                                errorInfo = new ErrorInfo() {{
                                                    domain = "officia";
                                                    metadatas = new java.util.HashMap<String, String>() {{
                                                        put("blanditiis", "voluptatibus");
                                                    }};
                                                    reason = "nesciunt";
                                                }};
                                                help = new Help() {{
                                                    links = new org.openapis.openapi.models.shared.HelpLink[]{{
                                                        add(new HelpLink() {{
                                                            description = "nemo";
                                                            url = "quaerat";
                                                        }}),
                                                        add(new HelpLink() {{
                                                            description = "architecto";
                                                            url = "assumenda";
                                                        }}),
                                                        add(new HelpLink() {{
                                                            description = "culpa";
                                                            url = "nisi";
                                                        }}),
                                                        add(new HelpLink() {{
                                                            description = "perspiciatis";
                                                            url = "architecto";
                                                        }}),
                                                    }};
                                                }};
                                                localizedMessage = new LocalizedMessage() {{
                                                    locale = "eum";
                                                    message = "sunt";
                                                }};
                                                quotaInfo = new QuotaExceededInfo() {{
                                                    dimensions = new java.util.HashMap<String, String>() {{
                                                        put("eveniet", "corrupti");
                                                        put("id", "corrupti");
                                                        put("vero", "ex");
                                                    }};
                                                    limit = 2136.56;
                                                    limitName = "odio";
                                                    metricName = "molestiae";
                                                }};
                                            }}),
                                            add(new QueuedResourceStatusFailedDataErrorErrorsErrorDetails() {{
                                                errorInfo = new ErrorInfo() {{
                                                    domain = "quibusdam";
                                                    metadatas = new java.util.HashMap<String, String>() {{
                                                        put("voluptatum", "ipsum");
                                                        put("perspiciatis", "dicta");
                                                    }};
                                                    reason = "quo";
                                                }};
                                                help = new Help() {{
                                                    links = new org.openapis.openapi.models.shared.HelpLink[]{{
                                                        add(new HelpLink() {{
                                                            description = "non";
                                                            url = "possimus";
                                                        }}),
                                                        add(new HelpLink() {{
                                                            description = "error";
                                                            url = "occaecati";
                                                        }}),
                                                    }};
                                                }};
                                                localizedMessage = new LocalizedMessage() {{
                                                    locale = "rem";
                                                    message = "neque";
                                                }};
                                                quotaInfo = new QuotaExceededInfo() {{
                                                    dimensions = new java.util.HashMap<String, String>() {{
                                                        put("cupiditate", "laboriosam");
                                                        put("eos", "voluptatibus");
                                                        put("fugiat", "exercitationem");
                                                    }};
                                                    limit = 8086;
                                                    limitName = "nulla";
                                                    metricName = "minus";
                                                }};
                                            }}),
                                            add(new QueuedResourceStatusFailedDataErrorErrorsErrorDetails() {{
                                                errorInfo = new ErrorInfo() {{
                                                    domain = "quaerat";
                                                    metadatas = new java.util.HashMap<String, String>() {{
                                                        put("exercitationem", "quae");
                                                    }};
                                                    reason = "aliquam";
                                                }};
                                                help = new Help() {{
                                                    links = new org.openapis.openapi.models.shared.HelpLink[]{{
                                                        add(new HelpLink() {{
                                                            description = "a";
                                                            url = "deserunt";
                                                        }}),
                                                    }};
                                                }};
                                                localizedMessage = new LocalizedMessage() {{
                                                    locale = "eligendi";
                                                    message = "dolor";
                                                }};
                                                quotaInfo = new QuotaExceededInfo() {{
                                                    dimensions = new java.util.HashMap<String, String>() {{
                                                        put("officiis", "aliquid");
                                                        put("quas", "itaque");
                                                        put("mollitia", "corrupti");
                                                    }};
                                                    limit = 4133.02;
                                                    limitName = "iusto";
                                                    metricName = "earum";
                                                }};
                                            }}),
                                            add(new QueuedResourceStatusFailedDataErrorErrorsErrorDetails() {{
                                                errorInfo = new ErrorInfo() {{
                                                    domain = "facere";
                                                    metadatas = new java.util.HashMap<String, String>() {{
                                                        put("quasi", "provident");
                                                    }};
                                                    reason = "explicabo";
                                                }};
                                                help = new Help() {{
                                                    links = new org.openapis.openapi.models.shared.HelpLink[]{{
                                                        add(new HelpLink() {{
                                                            description = "quae";
                                                            url = "earum";
                                                        }}),
                                                        add(new HelpLink() {{
                                                            description = "natus";
                                                            url = "molestiae";
                                                        }}),
                                                    }};
                                                }};
                                                localizedMessage = new LocalizedMessage() {{
                                                    locale = "reiciendis";
                                                    message = "soluta";
                                                }};
                                                quotaInfo = new QuotaExceededInfo() {{
                                                    dimensions = new java.util.HashMap<String, String>() {{
                                                        put("labore", "esse");
                                                        put("repellat", "eveniet");
                                                    }};
                                                    limit = 6356.56;
                                                    limitName = "autem";
                                                    metricName = "quasi";
                                                }};
                                            }}),
                                        }};
                                        location = "nisi";
                                        message = "corrupti";
                                    }}),
                                    add(new QueuedResourceStatusFailedDataErrorErrors() {{
                                        code = "officiis";
                                        errorDetails = new org.openapis.openapi.models.shared.QueuedResourceStatusFailedDataErrorErrorsErrorDetails[]{{
                                            add(new QueuedResourceStatusFailedDataErrorErrorsErrorDetails() {{
                                                errorInfo = new ErrorInfo() {{
                                                    domain = "explicabo";
                                                    metadatas = new java.util.HashMap<String, String>() {{
                                                        put("earum", "corporis");
                                                        put("minima", "sit");
                                                        put("excepturi", "tempore");
                                                        put("libero", "ipsa");
                                                    }};
                                                    reason = "non";
                                                }};
                                                help = new Help() {{
                                                    links = new org.openapis.openapi.models.shared.HelpLink[]{{
                                                        add(new HelpLink() {{
                                                            description = "itaque";
                                                            url = "magni";
                                                        }}),
                                                        add(new HelpLink() {{
                                                            description = "atque";
                                                            url = "explicabo";
                                                        }}),
                                                    }};
                                                }};
                                                localizedMessage = new LocalizedMessage() {{
                                                    locale = "nostrum";
                                                    message = "deleniti";
                                                }};
                                                quotaInfo = new QuotaExceededInfo() {{
                                                    dimensions = new java.util.HashMap<String, String>() {{
                                                        put("quod", "animi");
                                                        put("velit", "aspernatur");
                                                        put("ad", "asperiores");
                                                        put("numquam", "est");
                                                    }};
                                                    limit = 7871.1;
                                                    limitName = "tempora";
                                                    metricName = "inventore";
                                                }};
                                            }}),
                                        }};
                                        location = "dolor";
                                        message = "quisquam";
                                    }}),
                                    add(new QueuedResourceStatusFailedDataErrorErrors() {{
                                        code = "omnis";
                                        errorDetails = new org.openapis.openapi.models.shared.QueuedResourceStatusFailedDataErrorErrorsErrorDetails[]{{
                                            add(new QueuedResourceStatusFailedDataErrorErrorsErrorDetails() {{
                                                errorInfo = new ErrorInfo() {{
                                                    domain = "placeat";
                                                    metadatas = new java.util.HashMap<String, String>() {{
                                                        put("magnam", "saepe");
                                                        put("magnam", "velit");
                                                        put("impedit", "sequi");
                                                        put("totam", "repellendus");
                                                    }};
                                                    reason = "assumenda";
                                                }};
                                                help = new Help() {{
                                                    links = new org.openapis.openapi.models.shared.HelpLink[]{{
                                                        add(new HelpLink() {{
                                                            description = "ad";
                                                            url = "commodi";
                                                        }}),
                                                        add(new HelpLink() {{
                                                            description = "minima";
                                                            url = "aliquam";
                                                        }}),
                                                        add(new HelpLink() {{
                                                            description = "vero";
                                                            url = "dolore";
                                                        }}),
                                                        add(new HelpLink() {{
                                                            description = "aliquid";
                                                            url = "perferendis";
                                                        }}),
                                                    }};
                                                }};
                                                localizedMessage = new LocalizedMessage() {{
                                                    locale = "incidunt";
                                                    message = "reprehenderit";
                                                }};
                                                quotaInfo = new QuotaExceededInfo() {{
                                                    dimensions = new java.util.HashMap<String, String>() {{
                                                        put("natus", "eum");
                                                    }};
                                                    limit = 2463.48;
                                                    limitName = "consectetur";
                                                    metricName = "possimus";
                                                }};
                                            }}),
                                            add(new QueuedResourceStatusFailedDataErrorErrorsErrorDetails() {{
                                                errorInfo = new ErrorInfo() {{
                                                    domain = "praesentium";
                                                    metadatas = new java.util.HashMap<String, String>() {{
                                                        put("consequuntur", "quasi");
                                                        put("tenetur", "totam");
                                                    }};
                                                    reason = "fugiat";
                                                }};
                                                help = new Help() {{
                                                    links = new org.openapis.openapi.models.shared.HelpLink[]{{
                                                        add(new HelpLink() {{
                                                            description = "impedit";
                                                            url = "rerum";
                                                        }}),
                                                        add(new HelpLink() {{
                                                            description = "at";
                                                            url = "labore";
                                                        }}),
                                                    }};
                                                }};
                                                localizedMessage = new LocalizedMessage() {{
                                                    locale = "itaque";
                                                    message = "velit";
                                                }};
                                                quotaInfo = new QuotaExceededInfo() {{
                                                    dimensions = new java.util.HashMap<String, String>() {{
                                                        put("fuga", "voluptate");
                                                    }};
                                                    limit = 3151.94;
                                                    limitName = "nulla";
                                                    metricName = "laborum";
                                                }};
                                            }}),
                                        }};
                                        location = "labore";
                                        message = "necessitatibus";
                                    }}),
                                    add(new QueuedResourceStatusFailedDataErrorErrors() {{
                                        code = "distinctio";
                                        errorDetails = new org.openapis.openapi.models.shared.QueuedResourceStatusFailedDataErrorErrorsErrorDetails[]{{
                                            add(new QueuedResourceStatusFailedDataErrorErrorsErrorDetails() {{
                                                errorInfo = new ErrorInfo() {{
                                                    domain = "fugit";
                                                    metadatas = new java.util.HashMap<String, String>() {{
                                                        put("corporis", "at");
                                                        put("ex", "quam");
                                                        put("totam", "facilis");
                                                    }};
                                                    reason = "nobis";
                                                }};
                                                help = new Help() {{
                                                    links = new org.openapis.openapi.models.shared.HelpLink[]{{
                                                        add(new HelpLink() {{
                                                            description = "deleniti";
                                                            url = "eum";
                                                        }}),
                                                        add(new HelpLink() {{
                                                            description = "quam";
                                                            url = "praesentium";
                                                        }}),
                                                    }};
                                                }};
                                                localizedMessage = new LocalizedMessage() {{
                                                    locale = "exercitationem";
                                                    message = "dignissimos";
                                                }};
                                                quotaInfo = new QuotaExceededInfo() {{
                                                    dimensions = new java.util.HashMap<String, String>() {{
                                                        put("itaque", "voluptate");
                                                        put("architecto", "vitae");
                                                    }};
                                                    limit = 2901.14;
                                                    limitName = "voluptas";
                                                    metricName = "laborum";
                                                }};
                                            }}),
                                            add(new QueuedResourceStatusFailedDataErrorErrorsErrorDetails() {{
                                                errorInfo = new ErrorInfo() {{
                                                    domain = "minima";
                                                    metadatas = new java.util.HashMap<String, String>() {{
                                                        put("repellat", "debitis");
                                                        put("laborum", "ea");
                                                    }};
                                                    reason = "veniam";
                                                }};
                                                help = new Help() {{
                                                    links = new org.openapis.openapi.models.shared.HelpLink[]{{
                                                        add(new HelpLink() {{
                                                            description = "itaque";
                                                            url = "expedita";
                                                        }}),
                                                        add(new HelpLink() {{
                                                            description = "mollitia";
                                                            url = "unde";
                                                        }}),
                                                        add(new HelpLink() {{
                                                            description = "facere";
                                                            url = "suscipit";
                                                        }}),
                                                    }};
                                                }};
                                                localizedMessage = new LocalizedMessage() {{
                                                    locale = "pariatur";
                                                    message = "nihil";
                                                }};
                                                quotaInfo = new QuotaExceededInfo() {{
                                                    dimensions = new java.util.HashMap<String, String>() {{
                                                        put("similique", "occaecati");
                                                        put("vero", "culpa");
                                                        put("ullam", "repellat");
                                                    }};
                                                    limit = 1690.92;
                                                    limitName = "voluptatibus";
                                                    metricName = "ipsum";
                                                }};
                                            }}),
                                            add(new QueuedResourceStatusFailedDataErrorErrorsErrorDetails() {{
                                                errorInfo = new ErrorInfo() {{
                                                    domain = "ab";
                                                    metadatas = new java.util.HashMap<String, String>() {{
                                                        put("iste", "animi");
                                                    }};
                                                    reason = "voluptatum";
                                                }};
                                                help = new Help() {{
                                                    links = new org.openapis.openapi.models.shared.HelpLink[]{{
                                                        add(new HelpLink() {{
                                                            description = "quam";
                                                            url = "libero";
                                                        }}),
                                                        add(new HelpLink() {{
                                                            description = "ipsa";
                                                            url = "placeat";
                                                        }}),
                                                    }};
                                                }};
                                                localizedMessage = new LocalizedMessage() {{
                                                    locale = "voluptate";
                                                    message = "magni";
                                                }};
                                                quotaInfo = new QuotaExceededInfo() {{
                                                    dimensions = new java.util.HashMap<String, String>() {{
                                                        put("quod", "labore");
                                                        put("aliquam", "fugiat");
                                                    }};
                                                    limit = 5825.45;
                                                    limitName = "id";
                                                    metricName = "ipsum";
                                                }};
                                            }}),
                                            add(new QueuedResourceStatusFailedDataErrorErrorsErrorDetails() {{
                                                errorInfo = new ErrorInfo() {{
                                                    domain = "sed";
                                                    metadatas = new java.util.HashMap<String, String>() {{
                                                        put("nihil", "minus");
                                                        put("debitis", "facilis");
                                                    }};
                                                    reason = "exercitationem";
                                                }};
                                                help = new Help() {{
                                                    links = new org.openapis.openapi.models.shared.HelpLink[]{{
                                                        add(new HelpLink() {{
                                                            description = "repudiandae";
                                                            url = "minus";
                                                        }}),
                                                        add(new HelpLink() {{
                                                            description = "tenetur";
                                                            url = "recusandae";
                                                        }}),
                                                    }};
                                                }};
                                                localizedMessage = new LocalizedMessage() {{
                                                    locale = "voluptate";
                                                    message = "molestias";
                                                }};
                                                quotaInfo = new QuotaExceededInfo() {{
                                                    dimensions = new java.util.HashMap<String, String>() {{
                                                        put("iste", "temporibus");
                                                        put("architecto", "quisquam");
                                                    }};
                                                    limit = 5939.69;
                                                    limitName = "aperiam";
                                                    metricName = "magnam";
                                                }};
                                            }}),
                                        }};
                                        location = "quam";
                                        message = "deserunt";
                                    }}),
                                }};
                            }};;
                        }};;
                        provisioningOperations = new String[]{{
                            add("magni"),
                        }};
                        queuingPolicy = new QueuingPolicy() {{
                            validUntilDuration = new Duration() {{
                                nanos = 230440;
                                seconds = "nam";
                            }};;
                            validUntilTime = "quos";
                        }};;
                    }};;
                    zone = "voluptates";
                }};;
                accessToken = "inventore";
                alt = AltEnum.JSON;
                callback = "suscipit";
                fields = "inventore";
                key = "modi";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "dolores";
                requestId = "tenetur";
                uploadType = "voluptate";
                uploadProtocol = "recusandae";
                userIp = "incidunt";
            }};            

            ComputeZoneQueuedResourcesInsertResponse res = sdk.zoneQueuedResources.computeZoneQueuedResourcesInsert(req, new ComputeZoneQueuedResourcesInsertSecurity() {{
                option1 = new ComputeZoneQueuedResourcesInsertSecurityOption1("ratione", "repudiandae") {{
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

## computeZoneQueuedResourcesList

Retrieves the list of QueuedResource resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesListRequest;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesListResponse;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesListSecurity;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeZoneQueuedResourcesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeZoneQueuedResourcesListRequest req = new ComputeZoneQueuedResourcesListRequest("culpa", "illum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laboriosam";
                alt = AltEnum.JSON;
                callback = "veniam";
                fields = "voluptates";
                filter = "at";
                key = "neque";
                maxResults = 403886L;
                oauthToken = "sint";
                orderBy = "quis";
                pageToken = "nostrum";
                prettyPrint = false;
                quotaUser = "cum";
                returnPartialSuccess = false;
                uploadType = "dolorum";
                uploadProtocol = "officia";
                userIp = "mollitia";
            }};            

            ComputeZoneQueuedResourcesListResponse res = sdk.zoneQueuedResources.computeZoneQueuedResourcesList(req, new ComputeZoneQueuedResourcesListSecurity() {{
                option1 = new ComputeZoneQueuedResourcesListSecurityOption1("illo", "tempora") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.queuedResourceList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
